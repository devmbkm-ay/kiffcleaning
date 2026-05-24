'use client';

import { startTransition, useState, type FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';

type LeadFormVariant = 'contact' | 'quote';

type LeadFormProps = {
  variant: LeadFormVariant;
};

type SubmitState = {
  error: string | null;
  success: string | null;
};

const quoteServiceOptions = [
  'Nettoyage Extreme',
  'Debarras Complet',
  'Desinfection Biocide',
  'Nettoyage Post-Mortem',
  'Syndrome de Diogene',
  'Autre / Urgence',
];

export default function LeadForm({ variant }: LeadFormProps) {
  const [isPending, setIsPending] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    error: null,
    success: null,
  });

  const isQuote = variant === 'quote';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsPending(true);
    setSubmitState({ error: null, success: null });

    startTransition(async () => {
      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
          setSubmitState({
            error: result.message || "L'envoi du formulaire a echoue.",
            success: null,
          });
          return;
        }

        form.reset();
        setSubmitState({
          error: null,
          success: result.message || 'Votre demande a bien ete envoyee.',
        });
      } catch {
        setSubmitState({
          error: "Une erreur est survenue. Merci de reessayer dans un instant.",
          success: null,
        });
      } finally {
        setIsPending(false);
      }
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value={variant} />
      <input type="hidden" name="sourcePage" value={isQuote ? '/devis' : '/contact'} />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${variant}-firstName`}
            className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
          >
            Prenom *
          </label>
          <input
            id={`${variant}-firstName`}
            name="firstName"
            type="text"
            required
            className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
            placeholder="Jean"
          />
        </div>
        <div>
          <label
            htmlFor={`${variant}-lastName`}
            className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
          >
            Nom *
          </label>
          <input
            id={`${variant}-lastName`}
            name="lastName"
            type="text"
            required
            className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
            placeholder="Dupont"
          />
        </div>
      </div>

      {isQuote ? (
        <>
          <div>
            <label
              htmlFor={`${variant}-phone`}
              className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
            >
              Telephone *
            </label>
            <input
              id={`${variant}-phone`}
              name="phone"
              type="tel"
              required
              className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
              placeholder="07 70 10 83 39"
            />
          </div>

          <div>
            <label
              htmlFor={`${variant}-email`}
              className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
            >
              Email
            </label>
            <input
              id={`${variant}-email`}
              name="email"
              type="email"
              className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
              placeholder="email@exemple.fr"
            />
          </div>

          <div>
            <label
              htmlFor={`${variant}-city`}
              className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
            >
              Ville d&apos;intervention *
            </label>
            <input
              id={`${variant}-city`}
              name="city"
              type="text"
              required
              className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
              placeholder="Paris, Meaux, Chelles..."
            />
          </div>

          <div>
            <label
              htmlFor={`${variant}-service`}
              className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
            >
              Type de prestation
            </label>
            <select
              id={`${variant}-service`}
              name="service"
              className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-teal transition-colors"
              defaultValue=""
            >
              <option value="">Selectionner...</option>
              {quoteServiceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <div>
          <label
            htmlFor={`${variant}-contact`}
            className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
          >
            Telephone ou Email *
          </label>
          <input
            id={`${variant}-contact`}
            name="contact"
            type="text"
            required
            className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
            placeholder="07 70 10 83 39 ou email@exemple.fr"
          />
        </div>
      )}

      <div>
        <label
          htmlFor={`${variant}-message`}
          className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5"
        >
          {isQuote ? 'Description de la situation' : 'Message *'}
        </label>
        <textarea
          id={`${variant}-message`}
          name="message"
          rows={isQuote ? 4 : 5}
          required={!isQuote}
          className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors resize-none"
          placeholder={
            isQuote
              ? 'Decrivez brievement la situation (optionnel - tout reste confidentiel).'
              : "Votre question ou demande d'information..."
          }
        />
      </div>

      {submitState.error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {submitState.error}
        </p>
      )}

      {submitState.success && (
        <p className="rounded-lg border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal-100">
          {submitState.success}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full btn-primary justify-center text-base py-4 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isQuote ? <Phone className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
        {isPending
          ? 'Envoi en cours...'
          : isQuote
            ? 'Envoyer ma demande'
            : 'Envoyer le message'}
      </button>

      <p className="text-slate-600 text-xs text-center">
        Vos donnees sont confidentielles et ne seront jamais transmises a des tiers.
      </p>
    </form>
  );
}
