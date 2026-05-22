import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Shield, Truck, Award, CheckCircle2, Star,
  ArrowRight, MapPin, Clock, BadgeCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, SERVICES, ZONES, getFAQSchema } from '@/lib/seo';

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

const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Intervention rapide et professionnelle pour une succession complexe. Discrétion exemplaire et résultat impeccable.',
    name: 'Maître Dupont',
    role: 'Notaire — Meaux',
  },
  {
    stars: 5,
    text: 'Équipe respectueuse et efficace face à une situation très difficile. Je recommande sans hésitation.',
    name: 'Sophie M.',
    role: 'Particulier — Chelles',
  },
  {
    stars: 5,
    text: 'Partenaire fiable pour nos interventions d\'urgence. Conformité réglementaire irréprochable.',
    name: 'M. Laurent',
    role: 'Bailleur social — Melun',
  },
];

const STATS = [
  { value: '1 200+', label: 'Interventions réalisées' },
  { value: '24h/24', label: 'Disponibilité totale' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '77/92/93/94', label: 'Départements couverts' },
];

const SERVICE_ICONS = [Shield, Truck, Award, CheckCircle2, MapPin];

export default function HomePage() {
  const faqSchema = getFAQSchema();

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
          className="relative min-h-[92vh] flex items-center px-4 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 60%, #0d1b2a 100%)' }}
          aria-labelledby="hero-title"
        >
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,184,148,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,148,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative max-w-7xl mx-auto w-full py-24 grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="badge-teal mb-6 animate-fade-up">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Intervention urgente disponible maintenant
              </div>

              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-[1.05] tracking-tight mb-6 animate-fade-up-delay-1"
              >
                Nettoyage <span className="text-teal">Extrême</span> en
                Île-de-France
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 animate-fade-up-delay-2 max-w-xl">
                Spécialiste du nettoyage d'insalubrité, débarras complet, désinfection
                biocide et syndrome de Diogène. Intervention rapide, discrète et
                professionnelle — 24h/24, 7j/7.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="btn-primary text-base px-8 py-4 rounded-xl pulse-ring"
                >
                  <Phone className="w-4 h-4" />
                  Urgence 24h/24
                </a>
                <Link href="/devis" className="btn-outline text-base px-8 py-4 rounded-xl">
                  Devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400 animate-fade-up-delay-3">
                {['Véhicules banalisés', 'Discrétion totale', 'Certifié NF'].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-teal" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="card-dark text-center py-8"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl font-extrabold text-teal mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────── */}
        <section
          id="services"
          className="py-24 px-4 bg-navy-800"
          aria-labelledby="services-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="services-title" className="section-title mb-4">NOS SERVICES</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Des solutions complètes pour les situations les plus extrêmes, avec une
                rigueur professionnelle sans compromis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.slice(0, 3).map((s, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="card-dark group flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-bold text-lg">{s.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {s.fullDesc}
                    </p>
                    <span className="text-teal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Remaining services */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {SERVICES.slice(3).map((s, i) => {
                const Icon = SERVICE_ICONS[i + 3];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="card-dark group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{s.name}</h3>
                      <p className="text-slate-400 text-sm">{s.shortDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GARANTIES ────────────────────────────────── */}
        <section className="py-24 px-4 bg-navy-900" aria-labelledby="garanties-title">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-navy-700 relative">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Technicien en combinaison de désinfection biocide Kiff Cleaning Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
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
        <section className="py-24 px-4 bg-navy-800" aria-labelledby="equipement-title">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Équipement professionnel de nettoyage Kiff Cleaning Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGES ──────────────────────────────── */}
        <section className="py-24 px-4 bg-navy-900" aria-labelledby="temoignages-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="temoignages-title" className="section-title mb-4">TÉMOIGNAGES</h2>
              <p className="text-slate-400">La confiance de nos clients est notre meilleure référence.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <article key={i} className="card-dark flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-300 text-sm leading-relaxed italic flex-1">
                    "{t.text}"
                  </blockquote>
                  <footer>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ZONES D'INTERVENTION ─────────────────────── */}
        <section className="py-24 px-4 bg-navy-800" aria-labelledby="zones-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="zones-title" className="section-title mb-4">ZONES D'INTERVENTION</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Nous intervenons dans toute l'Île-de-France. Sélectionnez votre ville
                pour connaître nos services locaux et délais d'intervention.
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
        <section className="py-24 px-4 bg-navy-900" aria-labelledby="faq-title">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="faq-title" className="section-title mb-4">QUESTIONS FRÉQUENTES</h2>
              <p className="text-slate-400">
                Retrouvez les réponses aux questions les plus courantes sur nos services.
              </p>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <details
                  key={i}
                  className="card-dark group"
                >
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

        {/* ── CTA BANNER ───────────────────────────────── */}
        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
