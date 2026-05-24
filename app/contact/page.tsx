import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import LeadForm from '@/components/LeadForm';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact — Kiff Cleaning Solutions Île-de-France',
  description: `Contactez Kiff Cleaning Solutions pour toute question ou demande d'information. Disponibles 24h/24, 7j/7. ${SITE.phone} — ${SITE.email}`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: 'Contact — Kiff Cleaning Solutions',
    description: `Contactez-nous 24h/24 : ${SITE.phone}`,
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact — Kiff Cleaning Solutions',
  url: `${SITE.url}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    openingHours: 'Mo-Su 00:00-23:59',
  },
};

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Urgence & Renseignements',
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
    note: 'Réponse immédiate 24h/24, 7j/7',
    cta: 'Appeler maintenant',
    highlight: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: 'Réponse sous 4h',
    cta: 'Envoyer un email',
    highlight: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: SITE.whatsapp,
    href: `https://wa.me/${SITE.whatsappRaw.replace('+', '')}`,
    note: 'Message rapide',
    cta: 'Ouvrir WhatsApp',
    highlight: false,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: '220 chemin de Crécy',
    href: '/zones',
    note: `${SITE.address.postalCode} ${SITE.address.city}`,
    cta: "Voir la zone d'intervention",
    highlight: false,
  },

];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Navbar />
      <main className="min-h-screen">

        {/* ── HERO ─────────────────────────────────────── */}
        <section
          className="py-14 md:py-24 px-4"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge-teal mb-6 inline-flex">
              <MessageSquare className="w-3.5 h-3.5" />
              Disponibles 24h/24 — 7j/7
            </div>
            <h1 className="section-title mb-4">CONTACTEZ-NOUS</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Une urgence, une question ou une demande d'information ? Notre équipe
              est disponible à tout moment. Discrétion et réactivité garanties.
            </p>
          </div>
        </section>

        {/* ── CONTACT METHODS ──────────────────────────── */}
        <section className="py-12 md:py-20 px-4 bg-navy-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href, note, cta, highlight }) => (
              <div
                key={label}
                className={`flex flex-col gap-4 rounded-xl p-6 border transition-all duration-300 min-w-0 w-full ${highlight
                  ? 'bg-teal/10 border-teal/40 hover:bg-teal/15'
                  : 'bg-navy-700 border-white/10 hover:border-teal/40'
                  }`}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${highlight ? 'bg-teal/20 border border-teal/30' : 'bg-teal/10 border border-teal/20'
                  }`}>
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <div className="min-w-0 w-full">
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                  <div
                    className={`font-bold text-sm [word-break:break-all] w-full ${highlight ? 'text-teal' : 'text-white'}`}
                  >
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{note}</div>
                </div>
                {cta && href && (
                  href.startsWith('/')
                    ? <Link href={href} className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline mt-auto break-words">
                      {cta} <ArrowRight className="w-3 h-3" />
                    </Link>
                    : <a href={href} className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline mt-auto break-words">
                      {cta} <ArrowRight className="w-3 h-3" />
                    </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FORM + URGENCY ───────────────────────────── */}
        <section className="py-12 md:py-20 px-4 bg-navy-800">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Form */}
            <div className="card-dark">
              <h2 className="text-white font-bold text-xl mb-2">Envoyer un message</h2>
              <p className="text-slate-500 text-sm mb-6">
                Pour les urgences, appelez directement au{' '}
                <a href={`tel:${SITE.phoneRaw}`} className="text-teal hover:underline">{SITE.phone}</a>.
              </p>
              <LeadForm variant="contact" />
            </div>

            {/* Urgency + devis CTA */}
            <div className="flex flex-col gap-6">
              {/* Urgency block */}
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Situation d'urgence ?</div>
                    <div className="text-slate-500 text-xs">Ne pas attendre — appelez directement</div>
                  </div>
                </div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-colors pulse-ring text-lg tracking-wide"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone}
                </a>
                <p className="text-slate-500 text-xs text-center mt-3">
                  Disponible 24h/24 · 7j/7 · Réponse immédiate
                </p>
              </div>

              {/* Devis CTA */}
              <div className="card-dark">
                <h3 className="text-white font-bold mb-2">Besoin d'un devis ?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Pour une estimation détaillée et sans engagement, utilisez notre
                  formulaire de devis — nous vous rappelons rapidement.
                </p>
                <Link href="/devis" className="btn-outline w-full justify-center">
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Intervention zones */}
              <div className="card-dark">
                <h3 className="text-white font-bold mb-2">Zone d'intervention</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-1">
                  Toute l'Île-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis,
                  Val-de-Marne, Seine-et-Marne, Yvelines, Essonne, Val-d'Oise.
                </p>
                <p className="text-slate-500 text-xs">
                  {SITE.address.street}<br />
                  {SITE.address.postalCode} {SITE.address.city}<br />
                  {SITE.address.region}, France
                </p>
              </div>
            </div>

          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
