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

const SERVICE_SLUG = 'debarras-maison';

const SERVICE_CONTENT = {
  h1: 'Entreprise de Débarras : Vidage de Maison, Appartement, Successions et Solutions de Désencombrement sur Mesure',
  shortIntro:
    "Le débarras d'un logement — qu'il s'agisse d'une succession, d'un déménagement ou d'un désencombrement — est une opération qui demande organisation, délicatesse et respect. Kiff Cleaning Solutions prend en charge l'intégralité du processus, du tri écoresponsable au nettoyage final, avec une traçabilité totale des déchets et une coordination directe avec notaires et agences immobilières.",

  steps: [
    {
      number: '1',
      title: 'Inventaire et Estimation Gratuite',
      description:
        "Visite de diagnostic sans engagement pour évaluer le volume, identifier les objets à conserver, à revendre ou à recycler. Nous établissons un devis détaillé et transparent avant tout début d'intervention.",
    },
    {
      number: '2',
      title: 'Tri Écoresponsable et Valorisation',
      description:
        "Séparation systématique : objets de valeur restitués à la famille, meubles en bon état orientés vers des associations, matériaux recyclables acheminés vers des filières agréées. Bordereau de suivi des déchets (BSD) fourni.",
    },
    {
      number: '3',
      title: 'Vidage Complet et Enlèvement',
      description:
        "Débarras intégral du logement avec nos véhicules adaptés (du fourgon à la benne). Démontage de mobilier encombrant si nécessaire. Intervention discrète avec véhicules banalisés sur demande.",
    },
    {
      number: '4',
      title: 'Nettoyage Final et Remise des Clés',
      description:
        "Nettoyage de remise en état après vidage : dépoussiérage, lessivage des sols et murs, évacuation des derniers déchets. Le logement est rendu propre et prêt pour une vente, une location ou une rénovation.",
    },
  ],

  faq: [
    {
      question: "Peut-on déduire le coût du débarras de la succession ?",
      answer:
        "Oui. Les frais de débarras d'une succession sont généralement déductibles de l'actif successoral. Nous travaillons régulièrement avec des notaires et pouvons émettre une facture détaillée à intégrer dans le dossier de succession. Renseignez-vous auprès de votre notaire pour les modalités exactes.",
    },
    {
      question: "Que faites-vous des objets de valeur trouvés lors du débarras ?",
      answer:
        "Tout objet de valeur (bijoux, œuvres d'art, documents, liquide) est immédiatement mis sous scellés et signalé à la famille. Rien n'est jeté ou conservé sans votre accord explicite. Nous pouvons faire appel à un commissaire-priseur pour l'estimation si nécessaire.",
    },
    {
      question: "Combien de temps prend un débarras complet ?",
      answer:
        "Un studio ou appartement prend en général 1 journée. Une maison complète avec cave et garage peut nécessiter 2 à 5 jours selon le volume. Nous planifions l'intervention selon vos contraintes de délai et de disponibilité.",
    },
    {
      question: "Intervenez-vous même si le logement est dans un état très dégradé ?",
      answer:
        "Oui, c'est notre spécialité. Nous traitons régulièrement des logements en situation d'insalubrité, de syndrome de Diogène ou d'abandon prolongé. Si une désinfection est nécessaire avant ou après le débarras, nous combinons les prestations dans un seul devis.",
    },
    {
      question: "Les déchets sont-ils traités de manière écoresponsable ?",
      answer:
        "Absolument. Nous travaillons avec des centres de tri agréés et des associations locales pour maximiser la valorisation des objets et matériaux. Un Bordereau de Suivi des Déchets (BSD) vous est remis à l'issue de l'intervention, garantissant la traçabilité légale de tous les déchets évacués.",
    },
  ] as FAQItem[],
};

const service = getService('debarras-maison');

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

export default function DebarrasMaisonPage() {
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
              <span className="text-sm font-semibold text-green-kiff">Tri Écoresponsable · BSD Déchets Fourni</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Processus de Débarras</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              De l'inventaire à la remise des clés, nous gérons tout avec rigueur et transparence.
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
              <p className="text-slate-600 text-sm mb-6">Visite de diagnostic sans engagement. À partir de 500€.</p>
              <LeadForm variant="quote" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Questions sur votre débarras ?</h3>
                <p className="text-slate-600 text-sm mb-4">Nos experts répondent en quelques minutes.</p>
                <a href={`tel:${SITE.phoneRaw}`} className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Devis gratuit et sans engagement</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Tri écoresponsable et valorisation maximale</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>BSD déchets fourni (traçabilité légale)</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Coordination directe avec notaire si succession</span></li>
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
