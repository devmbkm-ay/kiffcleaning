import { NextResponse } from 'next/server';
import {
  parseLeadPayload,
  queueLeadWebhook,
  saveLead,
  sendLeadNotificationEmail,
  updateLeadDeliveryStatus,
} from '@/lib/leads';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Le formulaire est invalide.' },
      { status: 400 },
    );
  }

  const parsedLead = parseLeadPayload(payload);

  if (!parsedLead.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Merci de verifier les champs du formulaire.',
        errors: parsedLead.errors,
      },
      { status: 400 },
    );
  }

  const lead = {
    ...parsedLead.data,
    userAgent: request.headers.get('user-agent'),
    ipAddress: request.headers.get('x-forwarded-for'),
  };

  try {
    const leadId = await saveLead(lead);
    const emailResult = await sendLeadNotificationEmail(lead);

    await updateLeadDeliveryStatus(leadId, {
      emailStatus: emailResult.status,
      emailError: emailResult.error,
    });

    queueLeadWebhook({ ...lead, _id: leadId });

    return NextResponse.json({
      success: true,
      message:
        lead.formType === 'quote'
          ? 'Votre demande de devis a bien ete envoyee.'
          : 'Votre message a bien ete envoye.',
    });
  } catch (error) {
    console.error('Lead submission failed:', error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Merci de reessayer.",
      },
      { status: 500 },
    );
  }
}
