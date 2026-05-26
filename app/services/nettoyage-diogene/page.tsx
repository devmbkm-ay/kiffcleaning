import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import LeadForm from '@/components/LeadForm';
import { ServiceFAQ, type FAQItem } from '@/components/ServiceFAQ';
import { RelatedServices } from '@/components/RelatedServices';
import { TeamSection } from '@/components/TeamSection';
import { TrustSignals } from '@/components/TrustSignals';
import { SITE } from '@/lib/seo';
import { getService } from '@/lib/services-data';

const SERVICE_SLUG = 'nettoyage-diogene';

const SERVICE_CONTENT = {
  h1: 'Nettoyage Syndrome de Diogène : Débarras, Tri Éthique et Désinfection de Logements Insalubres',
  shortIntro:
    "Le syndrome de Diogène est un trouble comportemental complexe qui associe une négligence extrême de l'hygiène corporelle et domestique à une tendance irrépressible à accumuler des objets hétéroclites. Kiff Cleaning Solutions s'est imposée comme le spécialiste du traitement de ces crises résidentielles avec une approche humaine et rigoureuse.",

  steps: [
    {
      number: '1',
      title: 'Tri Éthique et Sauvegarde des Documents',
      description:
        "Nous isolons systématiquement les papiers d'identité, testaments, titres de propriété, carnets de santé et objets de valeur sentimentale. Tout est nettoyé, mis sous scellés et restitué formellement à la famille.",
    },
    {
      number: '2',
      title: 'Débarras Méthodique et Évacuation',
      description:
        "Évacuation des encombrants et déchets via nos véhicules banalisés pour préserver l'anonymat de l'intervention vis-à-vis du voisinage.",
    },
    {
      number: '3',
      title: 'Lessivage de Choc et Remise en État',
      description:
        'Utilisation de monobrosses industrielles, nettoyeurs à vapeur saturée (180°C) et agents chimiques professionnels pour décaper chaque centimètre carré.',
    },
    {
      number: '4',
      title: 'Décontamination Microbienne et Désodorisation',
      description:
        "Nébulisation d'un désinfectant virucide et bactéricide puissant qui pénètre les moindres interstices et détruit définitivement les odeurs de décomposition.",
    },
  ],

  faq: [
    {
      question: "Qu'est-ce que le syndrome de Diogène exactement ?",
      answer:
        "Le syndrome de Diogène est un trouble du comportement caractérisé par une accumulation compulsive d'objets, souvent associée à une négligence de l'hygiène personnelle et domestique. Contrairement aux idées reçues, ce n'est pas un problème de « paresse » mais une condition psychologique complexe qui nécessite une approche respectueuse et non-jugeante.",
    },
    {
      question: 'Combien de temps dure une intervention Diogène ?',
      answer:
        "La durée varie en fonction du volume et du degré d'insalubrité. Un petit logement peut prendre 2-3 jours, une maison complète 5-10 jours. Nous établissons un devis précis après une visite de diagnostic.",
    },
    {
      question: 'Allez-vous me juger ou alerter les autorités ?',
      answer:
        "Absolument pas. Notre philosophie est le zéro jugement et le respect total de la personne. Nous intervenons en toute discrétion. Les seules situations où nous alertons est si un enfant ou une personne en danger immédiat est identifiée, auquel cas nous avons une obligation légale.",
    },
    {
      question: "Que devient mon argent et mes objets précieux trouvés ?",
      answer:
        "Tout objet de valeur (liquide, bijoux, documents) est scellé et assuré dès sa découverte. Nous vous le restituons en main propre avec un reçu. Rien n'est jeté sans votre accord préalable.",
    },
    {
      question: 'Allez-vous me fournir un certificat officiel ?',
      answer:
        "Oui. À la fin de l'intervention, nous vous remettons un Certificat de Désinfection officiel engageant notre responsabilité professionnelle. Ce document est accepté par les assurances, notaires et agences immobilières.",
    },
  ] as FAQItem[],
};

const service = getService('nettoyage-diogene');

export const metadata: Metadata = {
  title: service?.title,
  description: service?.metaDescription,
  alternates: { canonical: `${SITE.url}/services/${SERVICE_SLUG}` },
  openGraph: {
    title: service?.title,
    description: service?.metaDescription,
    url: `${SITE.url}/services/${SERVICE_SLUG}`,
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service?.schema.name,
  description: service?.schema.description,
  provider: {
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
  },
  areaServed: service?.schema.areaServed,
  priceRange: service?.schema.priceRange,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: service?.shortTitle, item: `${SITE.url}/services/${SERVICE_SLUG}` },
  ],
};

export default function NettoyageDiogenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="min-h-screen">

        {/* ── HERO ─────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-kiff/10 border border-green-kiff/30">
              <CheckCircle className="w-4 h-4 text-green-kiff" />
              <span className="text-sm font-semibold text-green-kiff">Intervention Immédiate 24h/24</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {SERVICE_CONTENT.h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {SERVICE_CONTENT.shortIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-kiff hover:bg-green-kiff/90 text-white font-semibold rounded-lg transition-colors"
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Appeler immédiatement
              </a>
            </div>
          </div>
        </section>

        {/* ── PROTOCOLE ────────────────────────────── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole Opérationnel</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Une approche rigoureuse combinant technicité industrielle et empathie humaine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICE_CONTENT.steps.map((step, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-kiff text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <ServiceFAQ faqs={SERVICE_CONTENT.faq} serviceSlug={SERVICE_SLUG} />

        {/* ── TRUST SIGNALS ────────────────────────── */}
        <TrustSignals />

        {/* ── ÉQUIPE ───────────────────────────────── */}
        <TeamSection />

        {/* ── SERVICES LIÉS ────────────────────────── */}
        <RelatedServices currentServiceSlug={SERVICE_SLUG} />

        {/* ── FORMULAIRE ───────────────────────────── */}
        <section className="py-12 md:py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Demander un Devis Gratuit</h2>
              <p className="text-slate-600 text-sm mb-6">
                Visite de diagnostic incluse. Aucun engagement. Réponse sous 24h.
              </p>
              <LeadForm variant="quote" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Urgence ?</h3>
                <p className="text-slate-600 text-sm mb-4">Contactez-nous immédiatement.</p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Zéro jugement, discrétion absolue</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Certificat de désinfection officiel</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Bordereau de suivi des déchets (BSD)</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Prise en charge directe par notaire</span></li>
                </ul>
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
