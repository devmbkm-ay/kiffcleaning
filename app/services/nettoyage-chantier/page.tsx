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

const SERVICE_SLUG = 'nettoyage-chantier';

const SERVICE_CONTENT = {
  h1: 'Nettoyage Fin de Chantier : Remise en État Après Travaux, Dépoussiérage Industriel et Livraison de Bâtiments Neufs',
  shortIntro:
    "La livraison d'un bâtiment ou d'un appartement après travaux exige un nettoyage de précision que les nettoyages classiques ne permettent pas. Kiff Cleaning Solutions réalise le nettoyage fin de chantier avec un matériel professionnel (aspirateurs HEPA, monobrosses, nettoyeurs vapeur) pour garantir la conformité OPR et la satisfaction de vos clients ou locataires.",

  steps: [
    {
      number: '1',
      title: 'Gros Nettoyage et Évacuation des Déchets',
      description:
        "Ramassage et évacuation de tous les déchets de chantier résiduels (chutes de matériaux, emballages, gravats). Balayage humide des sols pour éviter la remise en suspension des poussières de plâtre et ciment.",
    },
    {
      number: '2',
      title: 'Dépoussiérage Industriel des Surfaces',
      description:
        "Aspiration HEPA de toutes les surfaces : faux-plafonds, menuiseries, plinthes, huisseries. Élimination des résidus de plâtre, peinture et solvants sur les surfaces dures. Dépoussiérage de l'électroménager et des équipements installés.",
    },
    {
      number: '3',
      title: 'Nettoyage des Vitrages et Menuiseries',
      description:
        "Nettoyage intérieur et extérieur de tous les vitrages avec produits professionnels anti-traces. Élimination des résidus de colle, peinture et silicone sur les menuiseries. Résultat « sans trace » garanti à la livraison.",
    },
    {
      number: '4',
      title: 'Lustrage des Sols et Finitions',
      description:
        "Traitement et lustrage des sols (parquet, carrelage, béton ciré) selon leur nature. Nettoyage des sanitaires et équipements de cuisine. Rapport de conformité OPR (Opérations Préalables à la Réception) fourni pour la livraison.",
    },
  ],

  faq: [
    {
      question: "Qu'est-ce que le nettoyage OPR et est-il obligatoire ?",
      answer:
        "L'OPR (Opérations Préalables à la Réception) est une étape contractuelle de vérification de la conformité d'un chantier. Un nettoyage conforme OPR n'est pas légalement obligatoire, mais il est systématiquement exigé par les maîtres d'ouvrage et promoteurs pour la livraison. Nous fournissons un rapport de conformité après notre intervention.",
    },
    {
      question: "Combien de temps avant la livraison faut-il planifier le nettoyage de chantier ?",
      answer:
        "Idéalement 48 à 72 heures avant la livraison pour absorber les éventuels retouches ou imprévus. Cependant, nous pouvons intervenir en urgence en 24h selon la disponibilité de nos équipes. Contactez-nous dès que la date de livraison est confirmée.",
    },
    {
      question: "Le nettoyage fin de chantier est-il différent d'un nettoyage standard ?",
      answer:
        "Très différent. Un nettoyage classique ne dispose pas du matériel nécessaire pour traiter les poussières de construction, les résidus de ciment, les traces de colle et les film de protection sur les surfaces neuves. Nous utilisons des aspirateurs HEPA, des nettoyeurs vapeur saturée et des produits de traitement spécifiques à chaque type de surface.",
    },
    {
      question: "Intervenez-vous sur des chantiers en cours ou uniquement en fin de chantier ?",
      answer:
        "Principalement en fin de chantier pour la livraison. Mais nous proposons aussi des nettoyages intermédiaires entre les corps de métier (avant la pose du parquet par exemple) pour éviter les dommages liés à l'accumulation de poussières et de déchets entre les phases de travaux.",
    },
    {
      question: "Pouvez-vous intervenir sur des chantiers de grande superficie (immeubles, bureaux) ?",
      answer:
        "Oui. Nous avons l'expérience et les effectifs pour des chantiers de toutes tailles : du studio de 20 m² à l'immeuble entier ou au plateau de bureaux de plusieurs centaines de mètres carrés. Nous établissons un devis personnalisé selon la surface, la nature du chantier et le délai de livraison.",
    },
  ] as FAQItem[],
};

const service = getService('nettoyage-chantier');

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

export default function NettoyageChantierPage() {
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
              <span className="text-sm font-semibold text-green-kiff">Rapport OPR Inclus · Dépoussiérage HEPA</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Notre Protocole Fin de Chantier</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Du gros nettoyage aux finitions de précision pour une livraison impeccable.
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
              <p className="text-slate-600 text-sm mb-6">Devis sur site. À partir de 800€. Intervention en 24h.</p>
              <LeadForm variant="quote" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-green-kiff/10 border border-green-kiff/30 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Livraison imminente ?</h3>
                <p className="text-slate-600 text-sm mb-4">Intervention possible en 24h selon disponibilité.</p>
                <a href={`tel:${SITE.phoneRaw}`} className="block w-full bg-green-kiff hover:bg-green-kiff/90 text-white font-bold py-3 rounded-lg text-center transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Garanties</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Rapport de conformité OPR fourni</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Dépoussiérage HEPA (particules fines)</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Vitrages sans trace garantis</span></li>
                  <li className="flex gap-2"><span className="text-green-kiff">✓</span><span>Intervention sur toutes surfaces</span></li>
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
