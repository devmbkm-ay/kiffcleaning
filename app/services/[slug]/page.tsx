import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Phone, CheckCircle2, ArrowRight, Shield, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, SERVICES, ZONES } from '@/lib/seo';
import { SERVICE_CONTENT } from '@/lib/service-content';

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

  const content = SERVICE_CONTENT[service.slug];
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

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
    areaServed: ZONES.map((z) => ({ '@type': 'City', name: z.name })),
    url: `${SITE.url}/services/${service.slug}`,
  };

  const faqSchema = content ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          className="py-14 md:py-24 px-4"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-teal transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-400">{service.name}</span>
            </nav>

            <div className="badge-teal mb-6 inline-flex">
              <Shield className="w-3.5 h-3.5" />
              Service spécialisé — Île-de-France
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8 max-w-2xl">
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

        {content && (
          <>
            {/* ── QU'EST-CE QUE ─────────────────────────── */}
            <section className="py-12 md:py-20 px-4 bg-navy-900">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-6">{content.whatIsTitle.toUpperCase()}</h2>
                {content.whatIsBody.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed mb-4 text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* ── IMAGE BANNER ─────────────────────────── */}
            <div className="relative h-72 md:h-96 overflow-hidden">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/50" />
            </div>

            {/* ── PROTOCOL ─────────────────────────────── */}
            <section className="py-12 md:py-20 px-4 bg-navy-800">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-8 md:mb-12 text-center">
                  {content.protocolTitle.toUpperCase()}
                </h2>
                <div className="flex flex-col gap-6">
                  {content.steps.map((step) => (
                    <div key={step.step} className="flex gap-5 items-start">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal font-extrabold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── POURQUOI NOUS ────────────────────────── */}
            <section className="py-12 md:py-20 px-4 bg-navy-900">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-8 md:mb-10 text-center">POURQUOI CHOISIR KIFF CLEANING ?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.whyUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 card-dark">
                      <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── FAQ ──────────────────────────────────── */}
            <section className="py-12 md:py-20 px-4 bg-navy-800">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-8 md:mb-10 text-center">QUESTIONS FRÉQUENTES</h2>
                <div className="flex flex-col gap-5">
                  {content.faqs.map((faq, i) => (
                    <div key={i} className="card-dark">
                      <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── ZONES ────────────────────────────────── */}
        <section className="py-20 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">
              {service.name.toUpperCase()} EN ÎLE-DE-FRANCE
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
              Nous intervenons pour {service.name.toLowerCase()} dans toutes les villes d'Île-de-France.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {ZONES.map((z) => (
                <Link
                  key={z.slug}
                  href={`/services/${service.slug}/${z.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                >
                  {service.name} {z.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER SERVICES ───────────────────────── */}
        <section className="py-20 px-4 bg-navy-800">
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
