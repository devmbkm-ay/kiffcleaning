import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, ZONES } from '@/lib/seo';
import { getAllServices } from '@/lib/services-data';

interface Props {
  params: Promise<{ ville: string }>;
}

export function generateStaticParams() {
  return ZONES.map((z) => ({ ville: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const zone = ZONES.find((z) => z.slug === ville);
  if (!zone) return {};

  const title = `Nettoyage Extrême ${zone.name} (${zone.dept}) — Débarras & Désinfection`;
  const description = `Kiff Cleaning Solutions intervient à ${zone.name} pour le nettoyage extrême, débarras complet, désinfection biocide et syndrome de Diogène. Urgence 24h/24 — ${SITE.phone}. Devis gratuit.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/zones/${zone.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/zones/${zone.slug}`,
    },
    other: {
      'geo.region': `FR-${zone.dept}`,
      'geo.placename': `${zone.name}, Île-de-France`,
    },
  };
}

export default async function ZonePage({ params }: Props) {
  const { ville } = await params;
  const zone = ZONES.find((z) => z.slug === ville);
  if (!zone) notFound();

  // JSON-LD local business pour cette zone
  const zoneSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: `Nettoyage extrême et désinfection biocide à ${zone.name}`,
    url: `${SITE.url}/zones/${zone.slug}`,
    telephone: SITE.phoneRaw,
    areaServed: {
      '@type': 'City',
      name: zone.name,
      containsPlace: { '@type': 'AdministrativeArea', name: `Département ${zone.dept}` },
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const nearbyZones = ZONES.filter((z) => z.dept === zone.dept && z.slug !== zone.slug).slice(0, 4);
  const services = getAllServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zoneSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero zone */}
        <section
          className="py-14 md:py-24 px-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,184,148,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,148,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="badge-teal mb-6 justify-center inline-flex">
              <MapPin className="w-3.5 h-3.5" />
              Département {zone.dept} — Île-de-France
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-6">
              Nettoyage Extrême à{' '}
              <span className="text-teal">{zone.name}</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Kiff Cleaning Solutions intervient à {zone.name} et ses environs pour
              toutes les situations d'insalubrité, débarras, désinfection biocide et
              syndrome de Diogène. Disponible 24h/24, 7j/7 avec discrétion totale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary text-base px-8 py-4 rounded-xl pulse-ring">
                <Phone className="w-4 h-4" />
                Urgence 24h/24
              </a>
              <Link href="/devis" className="btn-outline text-base px-8 py-4 rounded-xl">
                Devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services pour cette zone */}
        <section className="py-12 md:py-20 px-4 bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">
              NOS SERVICES À {zone.name.toUpperCase()}
            </h2>
            <p className="text-slate-400 text-center mb-8 md:mb-12 max-w-xl mx-auto">
              Toutes nos prestations sont disponibles à {zone.name} avec une réponse
              rapide et des équipes locales.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card-dark group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-teal transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {s.metaDescription}
                  </p>
                  <p className="text-slate-500 text-xs">
                    Intervention possible à {zone.name} sous 24h.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">
              PAGES SERVICE + VILLE POUR {zone.name.toUpperCase()}
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Accedez directement a nos pages locales dediees pour chaque intervention a {zone.name}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {s.shortTitle} à {zone.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-12 md:py-20 px-4 bg-navy-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8 md:mb-12">
              POURQUOI NOUS CHOISIR À {zone.name.toUpperCase()} ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: `Intervention rapide à ${zone.name}`,
                  desc: `Nos équipes basées en Île-de-France interviennent rapidement à ${zone.name}. En cas d'urgence, nous pouvons être sur place dans les plus brefs délais.`,
                },
                {
                  title: 'Discrétion absolue',
                  desc: "Véhicules banalisés, équipes en civil à l'approche, aucun signe distinctif. Votre vie privée est notre priorité.",
                },
                {
                  title: 'Conformité réglementaire',
                  desc: 'Toutes nos interventions respectent les normes françaises et européennes. Documentation juridique et sanitaire fournie.',
                },
                {
                  title: 'Tarification transparente',
                  desc: 'Devis gratuit et détaillé avant toute intervention. Aucun frais caché. Prise en charge possible par assurance.',
                },
              ].map((item, i) => (
                <div key={i} className="card-dark">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Villes proches */}
        {nearbyZones.length > 0 && (
          <section className="py-10 md:py-16 px-4 bg-navy-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title text-center mb-8">
                NOUS INTERVENONS AUSSI PRÈS DE {zone.name.toUpperCase()}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyZones.map((z) => (
                  <Link
                    key={z.slug}
                    href={`/zones/${z.slug}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {z.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
