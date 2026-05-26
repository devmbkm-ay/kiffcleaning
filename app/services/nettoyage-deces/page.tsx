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

const SERVICE_SLUG = 'nettoyage-deces';

const SERVICE_CONTENT = {
  h1: 'Nettoyage Après Décès : Désinfection Post-Mortem, Bio-Nettoyage et Remise en État',
  shortIntro:
    "Le décès d'une personne à domicile — qu'il soit naturel, accidentel ou violent — génère des risques sanitaires majeurs qui nécessitent une intervention spécialisée. Kiff Cleaning Solutions assure le bio-nettoyage post-mortem avec un protocole médical strict, une discrétion totale et une prise en charge administrative complète pour soulager les familles dans ces moments difficiles.",

  steps: [
    {
      number: '1',
      title: 'Sécurisation et Confinement de la Zone',
      description:
        "Mise en place d'un périmètre de sécurité sanitaire, port d'équipements de protection individuelle (EPI) de niveau 3, et balisage de la zone contaminée pour éviter toute propagation de pathogènes.",
    },
    {
      number: '2',
      title: 'Extraction et Gestion des Déchets DASRI',
      description:
        "Collecte et conditionnement des déchets biologiques en conteneurs étanches homologués DASRI (Déchets d'Activités de Soins à Risques Infectieux). Traçabilité complète avec bordereau de suivi réglementaire.",
    },
    {
      number: '3',
      title: 'Désinfection Biocide et Bio-Nettoyage',
      description:
        "Application d'agents désinfectants virucides et bactéricides certifiés sur toutes les surfaces contaminées. Traitement des fluides biologiques, élimination des odeurs à la source par nébulisation professionnelle.",
    },
    {
      number: '4',
      title: 'Remise en État et Certificat Officiel',
      description:
        "Nettoyage de finition, traitement anti-odeurs persistant et remise en état du logement. Délivrance d'un Certificat de Désinfection officiel accepté par les assurances, notaires et agences immobilières.",
    },
  ],

  faq: [
    {
      question: "Qui prend en charge le coût du nettoyage après décès ?",
      answer:
        "Dans la plupart des cas, le coût est couvert par l'assurance habitation du défunt ou par la succession. Nous travaillons directement avec les notaires et assureurs pour faciliter la prise en charge administrative. Contactez-nous pour une orientation personnalisée.",
    },
    {
      question: "Dans quel délai devez-vous intervenir après un décès ?",
      answer:
        "Plus l'intervention est rapide, moins les risques de contamination croisée et de dommages structurels (infiltration, moisissures) sont importants. Nous intervenons idéalement dans les 24-48h suivant le constat du décès. En urgence, nous pouvons être sur place le jour même.",
    },
    {
      question: "Qu'est-ce qu'un déchet DASRI et pourquoi est-ce important ?",
      answer:
        "Les DASRI (Déchets d'Activités de Soins à Risques Infectieux) sont les déchets biologiques contaminés. Leur gestion est réglementée par le Code de l'environnement. Une mauvaise gestion expose à des sanctions pénales. Nous fournissons un bordereau de suivi complet garantissant votre conformité légale.",
    },
    {
      question: "Intervenez-vous après un suicide ou une mort violente ?",
      answer:
        "Oui. Ces interventions font partie de notre cœur de métier. Nos équipes sont formées psychologiquement et techniquement pour gérer ces situations avec le plus grand professionnalisme. Nous respectons scrupuleusement les procédures légales et collaborons avec les services de police si nécessaire.",
    },
    {
      question: "Le logement sera-t-il réhabitisable après votre passage ?",
      answer:
        "Oui. Notre objectif est la remise en état complète du logement. À l'issue de l'intervention, vous recevez un Certificat de Désinfection attestant que le logement est sain et habitable. Ce document est exigé par les assurances et les agences immobilières pour toute remise en location ou vente.",
    },
  ] as FAQItem[],
};

const service = getService('nettoyage-deces');

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

export default function NettoyageDecesPage() {
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
              <span className="text-sm font-semibold text-green-kiff">Protocole Médical Strict · 24h/24</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole Post-Mortem</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Un protocole médical rigoureux pour garantir votre sécurité sanitaire et votre sérénité.
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

        <ServiceFAQ faqs={SERVICE_CONTENT.faq} serviceSlug={SERVICE_SLUG} />
        <TrustSignals />
        <TeamSection />
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
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Discrétion et respect total de la famille</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Certificat de désinfection officiel</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Gestion DASRI réglementaire</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Prise en charge par assurance et notaire</span></li>
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
