import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Award, CheckCircle2, MapPin, Droplets, Wrench } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE } from '@/lib/seo';
import { getAllServices } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Nos Services — Nettoyage Extrême, Débarras, Désinfection Biocide',
  description: `Découvrez tous les services de Kiff Cleaning Solutions : nettoyage post-mortem, syndrome de Diogène, débarras, logements insalubres, sinistres, fientes de pigeons, fin de chantier. Île-de-France. ${SITE.phone}`,
  alternates: { canonical: `${SITE.url}/services` },
};

const ICONS = [Shield, Truck, Award, CheckCircle2, MapPin, Droplets, Wrench];

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <Navbar />
      <main>
        <section className="py-14 md:py-24 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-14">
              <h1 className="section-title mb-4">NOS SERVICES</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Des solutions complètes pour les situations les plus extrêmes, avec une
                rigueur professionnelle sans compromis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark group flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-white font-bold text-lg">{s.shortTitle}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.metaDescription}</p>
                    <span className="text-teal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
