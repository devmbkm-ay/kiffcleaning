import { ObjectId } from 'mongodb';
import { Resend } from 'resend';
import { z } from 'zod';
import { getDatabase } from '@/lib/mongodb';

const leadSchema = z
  .object({
    formType: z.enum(['contact', 'quote']),
    firstName: z.string().trim().min(1, 'Le prenom est requis.'),
    lastName: z.string().trim().min(1, 'Le nom est requis.'),
    contact: z.string().trim().optional().default(''),
    phone: z.string().trim().optional().default(''),
    email: z.string().trim().optional().default(''),
    city: z.string().trim().optional().default(''),
    service: z.string().trim().optional().default(''),
    message: z.string().trim().optional().default(''),
    sourcePage: z.string().trim().optional().default(''),
  })
  .superRefine((data, ctx) => {
    if (data.formType === 'contact') {
      if (!data.contact) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: 'Un numero de telephone ou un email est requis.',
        });
      }

      if (!data.message) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['message'],
          message: 'Votre message est requis.',
        });
      }
    }

    if (data.formType === 'quote') {
      if (!data.phone) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['phone'],
          message: 'Le numero de telephone est requis.',
        });
      }

      if (!data.city) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['city'],
          message: "La ville d'intervention est requise.",
        });
      }
    }

    if (data.email && !z.email().safeParse(data.email).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['email'],
        message: "L'email n'est pas valide.",
      });
    }
  });

type LeadInput = z.infer<typeof leadSchema>;

export type LeadDocument = {
  _id?: ObjectId;
  formType: LeadInput['formType'];
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string | null;
  email: string | null;
  city: string | null;
  service: string | null;
  message: string | null;
  sourcePage: string | null;
  emailStatus: 'pending' | 'sent' | 'failed' | 'skipped';
  emailError: string | null;
  webhookStatus: 'queued' | 'skipped';
  createdAt: Date;
  userAgent: string | null;
  ipAddress: string | null;
};

export function parseLeadPayload(payload: unknown) {
  const result = leadSchema.safeParse(payload);

  if (!result.success) {
    return {
      success: false as const,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const normalized = normalizeLead(result.data);
  return {
    success: true as const,
    data: normalized,
  };
}

function normalizeLead(data: LeadInput): LeadDocument {
  const inferredContact = inferContactDetails(data.contact);
  const email = normalizeOptionalValue(data.email) ?? inferredContact.email;
  const phone = normalizeOptionalValue(data.phone) ?? inferredContact.phone;

  return {
    formType: data.formType,
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    fullName: `${data.firstName.trim()} ${data.lastName.trim()}`.trim(),
    phone,
    email,
    city: normalizeOptionalValue(data.city),
    service: normalizeOptionalValue(data.service),
    message: normalizeOptionalValue(data.message),
    sourcePage: normalizeOptionalValue(data.sourcePage),
    emailStatus: process.env.RESEND_API_KEY ? 'pending' : 'skipped',
    emailError: null,
    webhookStatus: process.env.WEBHOOK_URL ? 'queued' : 'skipped',
    createdAt: new Date(),
    userAgent: null,
    ipAddress: null,
  };
}

function normalizeOptionalValue(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function inferContactDetails(contact: string) {
  const trimmed = contact.trim();

  if (!trimmed) {
    return { phone: null, email: null };
  }

  if (trimmed.includes('@')) {
    return { phone: null, email: trimmed };
  }

  return { phone: trimmed, email: null };
}

export async function saveLead(lead: LeadDocument) {
  const database = await getDatabase();
  const result = await database.collection<LeadDocument>('leads').insertOne(lead);
  return result.insertedId;
}

export async function updateLeadDeliveryStatus(
  leadId: ObjectId,
  updates: Pick<LeadDocument, 'emailStatus' | 'emailError'>,
) {
  const database = await getDatabase();
  await database.collection<LeadDocument>('leads').updateOne(
    { _id: leadId },
    { $set: updates },
  );
}

export async function sendLeadNotificationEmail(lead: LeadDocument) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !adminEmail) {
    return { status: 'skipped' as const, error: null };
  }

  const resend = new Resend(resendApiKey);
  const from = process.env.RESEND_FROM_EMAIL || 'Kiff Cleaning <onboarding@resend.dev>';

  try {
    await resend.emails.send({
      from,
      to: adminEmail,
      subject: `[Lead ${lead.formType === 'quote' ? 'devis' : 'contact'}] ${lead.fullName}`,
      text: buildLeadEmailText(lead),
    });

    return { status: 'sent' as const, error: null };
  } catch (error) {
    return {
      status: 'failed' as const,
      error: error instanceof Error ? error.message : 'Email delivery failed.',
    };
  }
}

function buildLeadEmailText(lead: LeadDocument) {
  return [
    `Nouveau lead ${lead.formType === 'quote' ? 'devis' : 'contact'}`,
    '',
    `Nom: ${lead.fullName}`,
    `Telephone: ${lead.phone ?? 'Non renseigne'}`,
    `Email: ${lead.email ?? 'Non renseigne'}`,
    `Ville: ${lead.city ?? 'Non renseignee'}`,
    `Service: ${lead.service ?? 'Non renseigne'}`,
    `Source: ${lead.sourcePage ?? 'Inconnue'}`,
    '',
    `Message: ${lead.message ?? 'Aucun message'}`,
  ].join('\n');
}

export function queueLeadWebhook(lead: LeadDocument & { _id: ObjectId }) {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  void fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: lead._id.toString(),
      formType: lead.formType,
      firstName: lead.firstName,
      lastName: lead.lastName,
      fullName: lead.fullName,
      phone: lead.phone,
      email: lead.email,
      city: lead.city,
      service: lead.service,
      message: lead.message,
      sourcePage: lead.sourcePage,
      createdAt: lead.createdAt.toISOString(),
    }),
  }).catch((error) => {
    console.error('Lead webhook failed:', error);
  });
}
