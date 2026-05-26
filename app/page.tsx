import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Shield, Truck, Award, CheckCircle2,
  ArrowRight, MapPin, BadgeCheck, Droplets, Wrench,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import CertificationStrip from '@/components/CertificationStrip';
import ScrollReveal from '@/components/ScrollReveal';
import { TrustSignals } from '@/components/TrustSignals';
import { TeamSection } from '@/components/TeamSection';
import { SITE, ZONES, getFAQSchema } from '@/lib/seo';
import { getAllServices } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Nettoyage Extrême Île-de-France — Débarras, Biocide, Diogène | 24h/24',
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

const GUARANTEES = [
  'Intervention 24h/24, 7j/7',
  'Devis gratuit et transparent',
  'Véhicules 100% banalisés',
  'Discrétion absolue garantie',
  'Protocoles certifiés NF',
  'Documentation juridique complète',
];

const SERVICE_ICONS = [Shield, Truck, Award, CheckCircle2, MapPin, Droplets, Wrench];

export default function HomePage() {
  const faqSchema = getFAQSchema();
  const services = getAllServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
          aria-labelledby="hero-title"
        >
          <Image
            src="/images/hero-team.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/85 via-[#0a0f1f]/70 to-[#0a0f1f]/90" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,184,148,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,148,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative max-w-4xl mx-auto w-full py-20 md:py-36 text-center">
            <div className="badge-teal mb-6 animate-fade-up inline-flex">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Intervention 24h/24 • 7j/7
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase leading-[1.0] tracking-tight mb-6 animate-fade-up-delay-1"
            >
              Nettoyage Extrême<br />
              <span className="text-teal">Professionnel</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 animate-fade-up-delay-2 max-w-2xl mx-auto">
              Spécialiste du nettoyage après décès, syndrome de Diogène, débarras et
              désinfection biocide en Île-de-France. Discrétion absolue, conformité totale.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10 animate-fade-up-delay-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="btn-primary text-base px-8 py-4 rounded-xl pulse-ring"
              >
                <Phone className="w-4 h-4" />
                Appeler Maintenant
              </a>
              <Link href="/devis" className="btn-outline text-base px-8 py-4 rounded-xl">
                Devis Gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400 animate-fade-up-delay-3">
              {['Certifié Biocide', 'Véhicules Banalisés', 'SIRET Déclaré'].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-teal" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CertificationStrip />

        {/* ── SERVICES ─────────────────────────────────── */}
        <section
          id="services"
          className="py-14 md:py-24 px-4 bg-navy-800"
          aria-labelledby="services-title"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-14">
                <h2 id="services-title" className="section-title mb-4">NOS SERVICES</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Des solutions complètes pour les situations les plus extrêmes, avec une
                  rigueur professionnelle sans compromis.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => {
                  const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="card-dark group flex flex-col gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                        <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-white font-bold text-lg">{s.shortTitle}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed flex-1">
                        {s.metaDescription}
                      </p>
                      <span className="text-teal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="text-center mt-10">
                <Link href="/services" className="btn-outline">
                  Voir tous nos services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── TRUST SIGNALS ────────────────────────────── */}
        <TrustSignals />

        {/* ── GARANTIES ────────────────────────────────── */}
        <section className="py-14 md:py-24 px-4 bg-navy-900" aria-labelledby="garanties-title">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-navy-700 relative">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Technicien en combinaison de désinfection biocide Kiff Cleaning Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 id="garanties-title" className="section-title mb-4">NOS GARANTIES</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Chaque intervention est encadrée par des protocoles stricts et une
                documentation complète pour votre protection juridique et sanitaire.
              </p>
              <ul className="space-y-4">
                {GUARANTEES.map((g) => (
                  <li key={g} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <Link href="/devis" className="btn-primary mt-8 inline-flex">
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ÉQUIPEMENT ───────────────────────────────── */}
        <section className="py-14 md:py-24 px-4 bg-navy-800" aria-labelledby="equipement-title">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 id="equipement-title" className="section-title mb-6">
                ÉQUIPEMENT<br />PROFESSIONNEL
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Nous utilisons exclusivement du matériel de grade professionnel pour
                garantir une efficacité maximale et le respect des normes sanitaires les
                plus strictes.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Nos équipes sont formées aux protocoles de biosécurité et équipées de
                combinaisons intégrales, masques respiratoires FFP3, et de systèmes de
                nébulisation biocide de dernière génération.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-navy-700 relative">
              <Image
                src="/images/services/optimized/equipements-pro.webp"
                alt="Équipement professionnel de nettoyage Kiff Cleaning Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── ÉQUIPE ───────────────────────────────────── */}
        <TeamSection />

        {/* ── ZONES D'INTERVENTION ─────────────────────── */}
        <section className="py-14 md:py-24 px-4 bg-navy-800" aria-labelledby="zones-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-14">
              <h2 id="zones-title" className="section-title mb-4">ZONES D&apos;INTERVENTION</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Nous intervenons dans toute l&apos;Île-de-France. Sélectionnez votre ville
                pour connaître nos services locaux et délais d&apos;intervention.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {ZONES.map((z) => (
                <Link
                  key={z.slug}
                  href={`/zones/${z.slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-slate-300 text-sm hover:border-teal hover:text-teal transition-all bg-navy-700/50"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {z.name}
                  <span className="text-slate-600 text-xs">({z.dept})</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/zones" className="btn-outline">
                Voir toutes nos zones
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-4 bg-navy-900" aria-labelledby="faq-title">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-14">
              <h2 id="faq-title" className="section-title mb-4">QUESTIONS FRÉQUENTES</h2>
              <p className="text-slate-400">
                Retrouvez les réponses aux questions les plus courantes sur nos services.
              </p>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <details key={i} className="card-dark group">
                  <summary className="cursor-pointer font-semibold text-white text-sm list-none flex items-center justify-between gap-4">
                    {item.name}
                    <span className="text-teal shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
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
