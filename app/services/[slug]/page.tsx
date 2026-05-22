import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, SERVICES, ZONES } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.name} en Île-de-France — Kiff Cleaning Solutions`;
  const description = `${service.fullDesc} Intervention 24h/24, 7j/7 partout en Île-de-France. Devis gratuit : ${SITE.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
    openGraph: { title, description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.fullDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
    },
    areaServed: { '@type': 'State', name: 'Île-de-France' },
    url: `${SITE.url}/services/${service.slug}`,
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="py-24 px-4"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="badge-teal mb-6 inline-flex">
              <Shield className="w-3.5 h-3.5" />
              Service spécialisé
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary text-base px-8 py-4 rounded-xl pulse-ring">
                <Phone className="w-4 h-4" /> Urgence 24h/24
              </a>
              <Link href="/devis" className="btn-outline text-base px-8 py-4 rounded-xl">
                Devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Zones disponibles */}
        <section className="py-20 px-4 bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">
              {service.name.toUpperCase()} EN ÎLE-DE-FRANCE
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
              Nous intervenons pour {service.name.toLowerCase()} dans toutes les
              villes d'Île-de-France.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {ZONES.map((z) => (
                <Link
                  key={z.slug}
                  href={`/zones/${z.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                >
                  {service.name} {z.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-20 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-10">NOS AUTRES SERVICES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-teal transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{s.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
