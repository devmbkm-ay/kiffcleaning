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

const SERVICE_SLUG = 'logement-insalubre';

const SERVICE_CONTENT = {
  h1: 'Remise en État de Logements Insalubres : Nettoyage Après Squats, Expulsions Judiciaires et Actes de Vandalisme',
  shortIntro:
    "Un logement squatté, vandalisé ou laissé à l'abandon représente un risque sanitaire, juridique et financier majeur pour son propriétaire. Kiff Cleaning Solutions intervient pour la décontamination totale, la remise en état réglementaire et la délivrance des certifications sanitaires nécessaires à la relocation ou à la vente.",

  steps: [
    {
      number: '1',
      title: 'Diagnostic Sanitaire et Sécurisation',
      description:
        "Évaluation complète des risques (pathogènes, amiante, rats, insectes) par nos techniciens certifiés. Mise en sécurité du site avant toute intervention d'équipe. Rapport de diagnostic remis au propriétaire.",
    },
    {
      number: '2',
      title: 'Débarras et Évacuation des Déchets',
      description:
        "Évacuation de tous les déchets laissés par les occupants : encombrants, déchets biologiques, matériaux dégradés. Gestion réglementaire des DASRI si présents. Bordereau de suivi des déchets (BSD) fourni.",
    },
    {
      number: '3',
      title: 'Décontamination Chimique Complète',
      description:
        "Traitement biocide des surfaces (sols, murs, plafonds, mobilier fixe) avec produits virucides et bactéricides homologués. Élimination des odeurs par nébulisation de désodorisant professionnel longue durée.",
    },
    {
      number: '4',
      title: 'Certificat Sanitaire et Remise en État',
      description:
        "Nettoyage de finition et remise en état du logement. Délivrance du Certificat Sanitaire officiel attestant que le bien est propre, sain et conforme aux normes d'habitabilité. Document requis par assurances et agences.",
    },
  ],

  faq: [
    {
      question: "Qui paie le nettoyage d'un logement après expulsion d'un squat ?",
      answer:
        "Les frais de remise en état sont à la charge du propriétaire, mais peuvent faire l'objet d'une action en dommages et intérêts contre les anciens occupants. Votre assurance propriétaire non-occupant (PNO) couvre généralement ces frais. Nous émettons une facture détaillée pour votre dossier d'assurance.",
    },
    {
      question: "Avez-vous besoin de la présence du propriétaire lors de l'intervention ?",
      answer:
        "Non. Nous pouvons intervenir avec un simple accès aux clés. Vous recevez un rapport photo complet avant/pendant/après l'intervention et nous vous contactons si une décision importante est nécessaire en cours d'opération.",
    },
    {
      question: "Quels risques sanitaires représente un squat pour la santé ?",
      answer:
        "Les logements squattés peuvent présenter des risques liés aux pathogènes fécaux, à la leptospirose (rat), aux parasites (punaises, cafards), aux moisissures et aux déchets biologiques. Ces risques nécessitent une intervention professionnelle avec équipements de protection individuelle de niveau 3.",
    },
    {
      question: "Le certificat sanitaire est-il obligatoire pour relouer après un squat ?",
      answer:
        "Il n'est pas légalement obligatoire dans tous les cas, mais il est systématiquement exigé par les agences immobilières et les assureurs. Il constitue également une preuve de diligence du propriétaire en cas de litige avec un futur locataire concernant l'état du bien.",
    },
    {
      question: "Intervenez-vous sur des locaux commerciaux squattés, pas seulement des logements ?",
      answer:
        "Oui. Nous intervenons sur tous types de biens : appartements, maisons, locaux commerciaux, entrepôts, parkings souterrains, caves. Le protocole est adapté à chaque type de surface et d'usage.",
    },
  ] as FAQItem[],
};

const service = getService('logement-insalubre');

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

export default function LogementInsalubrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />
      <main className="min-h-screen">

        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-kiff/10 border border-green-kiff/30">
              <CheckCircle className="w-4 h-4 text-green-kiff" />
              <span className="text-sm font-semibold text-green-kiff">Certificat Sanitaire Officiel · Assurance Incluse</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {SERVICE_CONTENT.h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {SERVICE_CONTENT.shortIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-kiff hover:bg-green-kiff/90 text-white font-semibold rounded-lg transition-colors">
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Appeler immédiatement
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole de Remise en État</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Du diagnostic sanitaire au certificat final, une prise en charge complète et documentée.
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

        <section className="py-12 md:py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Demander un Devis Gratuit</h2>
              <p className="text-slate-600 text-sm mb-6">Diagnostic sanitaire offert. Certificat fourni à l'issue.</p>
              <LeadForm variant="quote" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Besoin d'une intervention rapide ?</h3>
                <p className="text-slate-600 text-sm mb-4">Disponibles 24h/24, 7j/7.</p>
                <a href={`tel:${SITE.phoneRaw}`} className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Certificat sanitaire officiel</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>BSD déchets + traçabilité légale</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Rapport photo avant/après inclus</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Dossier complet pour votre assurance</span></li>
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
