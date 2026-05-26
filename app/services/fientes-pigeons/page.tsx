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

const SERVICE_SLUG = 'fientes-pigeons';

const SERVICE_CONTENT = {
  h1: 'Nettoyage Fientes de Pigeons et Nuisibles : Dépigeonnage & Traitement Biocide Professionnel',
  shortIntro:
    "Les fientes de pigeons représentent un risque sanitaire souvent sous-estimé : corrosives pour les matériaux, elles contiennent des agents pathogènes responsables de maladies respiratoires graves (histoplasmose, cryptococcose, chlamydiose). Kiff Cleaning Solutions réalise le nettoyage haute pression, le traitement biocide fongicide et la mise en place de systèmes dissuasifs pour protéger durablement votre bien.",

  steps: [
    {
      number: '1',
      title: 'Évaluation et Protection des Équipes',
      description:
        "Inspection du site, quantification des dépôts et identification des zones à risque. Port obligatoire de masques FFP3, combinaisons intégrales et gants résistants. Confinement de la zone de travail pour éviter toute dispersion de particules.",
    },
    {
      number: '2',
      title: 'Nettoyage Haute Pression Spécialisé',
      description:
        "Raclage mécanique des dépôts solidifiés suivi d'un nettoyage haute pression à l'eau chaude. Les fientes sèches, extrêmement volatiles, sont humidifiées avant toute manipulation pour éviter l'inhalation de spores fongiques.",
    },
    {
      number: '3',
      title: 'Traitement Biocide Fongicide',
      description:
        "Application d'un désinfectant fongicide et bactéricide homologué sur toutes les surfaces touchées. Le traitement pénètre les micro-fissures et élimine les champignons pathogènes responsables de maladies respiratoires.",
    },
    {
      number: '4',
      title: 'Pose de Systèmes Dissuasifs',
      description:
        "Installation de pics inox, filets anti-pigeons ou fils tendus selon la configuration du bâtiment. Ces systèmes empêchent le recolonisation sans nuire aux oiseaux, conformément à la réglementation sur la protection des espèces.",
    },
  ],

  faq: [
    {
      question: "Les fientes de pigeons sont-elles vraiment dangereuses pour la santé ?",
      answer:
        "Oui, et bien plus que généralement admis. Les fientes sèches contiennent des champignons pathogènes (Histoplasma capsulatum, Cryptococcus neoformans) et des bactéries (Chlamydophila psittaci). Inhalées sous forme de micro-poussières, elles peuvent provoquer des infections respiratoires sévères, y compris chez des personnes en bonne santé.",
    },
    {
      question: "Est-il légal d'éliminer les pigeons ou de poser des systèmes dissuasifs ?",
      answer:
        "L'élimination directe des pigeons est réglementée et nécessite une autorisation préfectorale. En revanche, la pose de systèmes dissuasifs (pics, filets, fils) est totalement légale et ne nuit pas aux oiseaux. C'est l'approche que nous recommandons et que nous mettons en œuvre.",
    },
    {
      question: "À quelle fréquence faut-il nettoyer les fientes de pigeons ?",
      answer:
        "Sans système dissuasif, un nettoyage annuel est généralement nécessaire sur les sites fortement colonisés. Avec nos systèmes dissuasifs, la recolonisation est empêchée et un entretien tous les 2-3 ans suffit pour vérifier l'état des installations.",
    },
    {
      question: "Intervenez-vous en hauteur (toitures, balcons en étages, corniches) ?",
      answer:
        "Oui. Nos équipes sont équipées et formées pour les interventions en hauteur (échafaudages, nacelles, cordes) dans le respect des normes de sécurité au travail. Nous intervenons sur toits, corniches, terrasses et balcons à toute hauteur.",
    },
    {
      question: "Couvre-t-on le nettoyage des fientes dans les parties communes d'immeuble ?",
      answer:
        "Oui. Nous intervenons pour les syndics de copropriété, bailleurs sociaux et particuliers. Pour les parties communes, nous pouvons coordonner l'intervention avec le conseil syndical et fournir un rapport d'intervention pour le livre de copropriété.",
    },
  ] as FAQItem[],
};

const service = getService('fientes-pigeons');

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

export default function FientesPigeonsPage() {
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
              <span className="text-sm font-semibold text-green-kiff">Traitement Biocide Fongicide · Systèmes Dissuasifs</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole Dépigeonnage</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Nettoyage, décontamination et prévention pour une protection durable.
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
              <p className="text-slate-600 text-sm mb-6">Devis sur site. À partir de 300€. Intervention rapide.</p>
              <LeadForm variant="quote" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Problème urgent de pigeons ?</h3>
                <p className="text-slate-600 text-sm mb-4">Appelez-nous pour un devis rapide.</p>
                <a href={`tel:${SITE.phoneRaw}`} className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Traitement fongicide homologué</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Intervention en hauteur sécurisée</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Systèmes dissuasifs conformes à la réglementation</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Rapport d'intervention fourni</span></li>
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
