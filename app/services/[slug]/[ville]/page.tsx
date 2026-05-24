import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Phone, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, SERVICES, ZONES } from '@/lib/seo';
import { SERVICE_CONTENT } from '@/lib/service-content';

interface Props {
  params: Promise<{ slug: string; ville: string }>;
}

const LOCAL_SCENARIOS: Record<string, string[]> = {
  'nettoyage-extreme': [
    "logements devenus insalubres apres plusieurs mois d'abandon",
    'appartements tres encombres avec nuisibles, odeurs ou moisissures',
    'remises en etat avant vente, relocation ou intervention des assurances',
  ],
  'debarras-complet': [
    'successions avec vidage complet du logement',
    'caves, greniers et box a desencombrer rapidement',
    'locaux ou appartements a liberer avant travaux ou remise des cles',
  ],
  'desinfection-biocide': [
    'desinfection apres contamination, nuisibles ou fortes odeurs',
    'traitements sanitaires avant reoccupation d un logement',
    'protocoles de remise en propre pour bailleurs, syndics et particuliers',
  ],
  'nettoyage-post-mortem': [
    'decontamination apres deces a domicile',
    'remise en etat rapide pour succession ou restitution du bien',
    'interventions discretes en lien avec familles, notaires ou bailleurs',
  ],
  'syndrome-de-diogene': [
    "prises en charge progressives avec tri respectueux des objets personnels",
    'coordination avec proches, medecins, bailleurs ou services sociaux',
    'nettoyage et desinfection complete apres accumulation severe',
  ],
};

export function generateStaticParams() {
  return SERVICES.flatMap((service) =>
    ZONES.map((zone) => ({ slug: service.slug, ville: zone.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, ville } = await params;
  const service = SERVICES.find((entry) => entry.slug === slug);
  const zone = ZONES.find((entry) => entry.slug === ville);

  if (!service || !zone) return {};

  const title = `${service.name} a ${zone.name} (${zone.dept}) — Intervention 24h/24`;
  const description = `${SITE.name} intervient pour ${service.name.toLowerCase()} a ${zone.name} (${zone.dept}) avec devis gratuit, discretions totale et intervention 24h/24. Appelez le ${SITE.phone}.`;
  const canonical = `${SITE.url}/services/${service.slug}/${zone.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
    other: {
      'geo.region': `FR-${zone.dept}`,
      'geo.placename': `${zone.name}, Île-de-France`,
    },
  };
}

export default async function ServiceZonePage({ params }: Props) {
  const { slug, ville } = await params;
  const service = SERVICES.find((entry) => entry.slug === slug);
  const zone = ZONES.find((entry) => entry.slug === ville);

  if (!service || !zone) notFound();

  const content = SERVICE_CONTENT[service.slug];
  const nearbyZones = ZONES.filter((entry) => entry.dept === zone.dept && entry.slug !== zone.slug).slice(0, 4);
  const otherZones = ZONES.filter((entry) => entry.slug !== zone.slug).slice(0, 8);
  const otherServices = SERVICES.filter((entry) => entry.slug !== service.slug).slice(0, 4);
  const localScenarios = LOCAL_SCENARIOS[service.slug] ?? [];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} a ${zone.name}`,
    description: `${service.fullDesc} Intervention a ${zone.name} et dans le departement ${zone.dept}.`,
    areaServed: {
      '@type': 'City',
      name: zone.name,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        postalCode: SITE.address.postalCode,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    url: `${SITE.url}/services/${service.slug}/${zone.slug}`,
  };

  const faqSchema = content
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.slice(0, 4).map((faq) => ({
          '@type': 'Question',
          name: `${faq.q} a ${zone.name} ?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${faq.a} Nous intervenons egalement a ${zone.name} et dans tout le ${zone.dept}.`,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      <main>
        <section
          className="py-14 md:py-24 px-4"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-teal transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-teal transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/services/${service.slug}`} className="hover:text-teal transition-colors">
                {service.name}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-400">{zone.name}</span>
            </nav>

            <div className="badge-teal mb-6 inline-flex">
              <MapPin className="w-3.5 h-3.5" />
              {zone.name} ({zone.dept}) — Ile-de-France
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-6">
              {service.name} a <span className="text-teal">{zone.name}</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8 max-w-3xl">
              {SITE.name} intervient a {zone.name} pour {service.name.toLowerCase()}, avec
              equipes discretes, protocoles professionnels et devis gratuit 24h/24, 7j/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary text-base px-8 py-4 rounded-xl pulse-ring">
                <Phone className="w-4 h-4" />
                Appeler le {SITE.phone}
              </a>
              <Link href="/devis" className="btn-outline text-base px-8 py-4 rounded-xl">
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-navy-900">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div>
              <h2 className="section-title mb-6">
                {service.name.toUpperCase()} A {zone.name.toUpperCase()}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4 text-lg">
                Nous intervenons regulierement a {zone.name}, ainsi que dans les communes voisines du
                departement {zone.dept}, pour les situations necessitant une prise en charge rapide,
                humaine et parfaitement tracee.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Notre equipe adapte chaque intervention au contexte local : acces immeuble ou pavillon,
                voisinage, evacuation des dechets, contraintes copropriete et coordination avec famille,
                notaire, bailleur ou assurance selon le dossier.
              </p>
            </div>

            <div className="card-dark">
              <h3 className="text-white font-bold mb-4">Interventions courantes a {zone.name}</h3>
              <ul className="space-y-3">
                {localScenarios.map((scenario) => (
                  <li key={scenario} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {content && (
          <>
            <section className="py-12 md:py-20 px-4 bg-navy-800">
              <div className="max-w-5xl mx-auto">
                <h2 className="section-title mb-8 text-center">
                  COMMENT NOUS INTERVENONS A {zone.name.toUpperCase()}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {content.steps.slice(0, 4).map((step) => (
                    <div key={step.step} className="card-dark">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal font-extrabold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-2">{step.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12 md:py-20 px-4 bg-navy-900">
              <div className="max-w-5xl mx-auto">
                <h2 className="section-title mb-8 text-center">
                  POURQUOI CHOISIR {SITE.shortName.toUpperCase()} A {zone.name.toUpperCase()} ?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.whyUs.slice(0, 6).map((item) => (
                    <div key={item} className="flex items-start gap-3 card-dark">
                      <Shield className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12 md:py-20 px-4 bg-navy-800">
              <div className="max-w-5xl mx-auto">
                <h2 className="section-title mb-8 text-center">
                  QUESTIONS FREQUENTES A {zone.name.toUpperCase()}
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {content.faqs.slice(0, 4).map((faq) => (
                    <div key={faq.q} className="card-dark">
                      <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {faq.a} Nous pouvons intervenir a {zone.name} et ses alentours sous 24h selon urgence.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <section className="py-12 md:py-20 px-4 bg-navy-900">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title mb-6">AUTRES VILLES POUR {service.name.toUpperCase()}</h2>
              <div className="flex flex-wrap gap-3">
                {nearbyZones.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/services/${service.slug}/${entry.slug}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {service.name} {entry.name}
                  </Link>
                ))}
                {nearbyZones.length === 0 &&
                  otherZones.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/services/${service.slug}/${entry.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {service.name} {entry.name}
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="section-title mb-6">AUTRES SERVICES A {zone.name.toUpperCase()}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherServices.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/services/${entry.slug}/${zone.slug}`}
                    className="card-dark group"
                  >
                    <h3 className="text-white font-bold mb-2 group-hover:text-teal transition-colors">
                      {entry.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {entry.shortDesc}
                    </p>
                  </Link>
                ))}
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
