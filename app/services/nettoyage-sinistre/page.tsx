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

const SERVICE_SLUG = 'nettoyage-sinistre';

const SERVICE_CONTENT = {
  h1: 'Nettoyage Après Sinistre : Décontamination Après Incendie, Pompage et Assèchement Suite à un Dégât des Eaux',
  shortIntro:
    "Un incendie ou un dégât des eaux laisse derrière lui des traces qui dépassent ce que l'œil voit : suies toxiques, moisissures, pathogènes et structures fragilisées. Kiff Cleaning Solutions intervient en urgence pour décontaminer, assécher et préparer votre bien à la rénovation, avec un certificat d'intervention accepté par votre assurance.",

  steps: [
    {
      number: '1',
      title: "Pompage et Extraction de l'Eau",
      description:
        "Intervention d'urgence avec pompes industrielles haute capacité pour extraire les eaux stagnantes. Établissement d'un premier bilan structurel pour identifier les zones à risque d'effondrement ou de contamination.",
    },
    {
      number: '2',
      title: 'Assèchement et Ventilation Forcée',
      description:
        "Déploiement de déshumidificateurs professionnels et de ventilateurs centrifuges pour accélérer le séchage des structures. Mesures hygrométriques quotidiennes jusqu'à conformité aux normes. Prévention des moisissures.",
    },
    {
      number: '3',
      title: 'Traitement des Suies et Moisissures',
      description:
        "Après incendie : décontamination chimique des suies (HAP, métaux lourds) par produits spécialisés. Après dégât des eaux : traitement fongicide des moisissures avec biocides homologués. Élimination totale des odeurs de brûlé et d'humidité.",
    },
    {
      number: '4',
      title: 'Remise en État et Certificat Assurance',
      description:
        "Nettoyage de finition, évacuation des débris et préparation du chantier pour les artisans rénovateurs. Fourniture d'un rapport d'intervention détaillé avec photos avant/après, accepté par tous les assureurs.",
    },
  ],

  faq: [
    {
      question: "Mon assurance prend-elle en charge le nettoyage après sinistre ?",
      answer:
        "Dans la grande majorité des cas, oui. Le nettoyage après sinistre est couvert par les garanties dommages de votre assurance habitation ou multirisque. Nous émettons un rapport d'intervention détaillé que vous transmettez directement à votre assureur. Nous pouvons aussi intervenir en relation directe avec votre expert d'assurance.",
    },
    {
      question: "Combien de temps dure l'assèchement après un dégât des eaux ?",
      answer:
        "La durée dépend du volume d'eau, des matériaux affectés et de la ventilation disponible. En général, un assèchement complet prend entre 3 et 14 jours. Nous mesurons l'hygrométrie quotidiennement et vous communiquons un rapport de suivi jusqu'à conformité.",
    },
    {
      question: "Les suies après incendie sont-elles dangereuses pour la santé ?",
      answer:
        "Oui, les suies contiennent des hydrocarbures aromatiques polycycliques (HAP), des métaux lourds et des particules fines extrêmement toxiques. Il ne faut pas pénétrer dans un local sinistré sans EPI adaptés. Notre équipe est équipée et formée pour gérer ces risques en toute sécurité.",
    },
    {
      question: "Pouvez-vous intervenir si le sinistre est ancien (plusieurs semaines) ?",
      answer:
        "Oui, mais plus le délai est long, plus les moisissures et les dommages structurels seront avancés. Une intervention précoce réduit significativement les coûts et les risques sanitaires. Même sur des sinistres anciens, nous pouvons décontaminer et remettre le bien en état.",
    },
    {
      question: "Intervenez-vous le week-end et les jours fériés ?",
      answer:
        "Oui. Les sinistres n'attendent pas. Nous sommes disponibles 24h/24, 7j/7, y compris les week-ends et jours fériés. Appelez-nous dès la constatation du sinistre pour une intervention d'urgence.",
    },
  ] as FAQItem[],
};

const service = getService('nettoyage-sinistre');

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

export default function NettoyageSinistrePage() {
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
              <span className="text-sm font-semibold text-green-kiff">Intervention Urgence · Rapport Assurance Inclus</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole Après Sinistre</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              De la gestion de crise à la remise en état complète, nous gérons chaque étape.
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
              <p className="text-slate-600 text-sm mb-6">Visite de diagnostic incluse. Rapport assurance fourni.</p>
              <LeadForm variant="quote" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Urgence Sinistre ?</h3>
                <p className="text-slate-600 text-sm mb-4">Chaque heure compte. Appelez maintenant.</p>
                <a href={`tel:${SITE.phoneRaw}`} className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Rapport d'intervention accepté par tous les assureurs</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Suivi hygrométrique quotidien</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Traitement suies et moisissures certifié</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Disponible 24h/24, 7j/7</span></li>
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
