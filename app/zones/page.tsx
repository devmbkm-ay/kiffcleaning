import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE, ZONES } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Zones d'Intervention Île-de-France — Nettoyage Extrême",
  description: `Kiff Cleaning Solutions intervient dans toute l'Île-de-France : Paris, 92, 93, 94, 77, 78, 91, 95. Nettoyage extrême, débarras, désinfection biocide. ${SITE.phone}`,
  alternates: { canonical: `${SITE.url}/zones` },
};

const DEPTS = [
  { code: '75', name: 'Paris' },
  { code: '92', name: 'Hauts-de-Seine' },
  { code: '93', name: 'Seine-Saint-Denis' },
  { code: '94', name: 'Val-de-Marne' },
  { code: '77', name: 'Seine-et-Marne' },
  { code: '78', name: 'Yvelines' },
  { code: '91', name: 'Essonne' },
  { code: '95', name: "Val-d'Oise" },
];

export default function ZonesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-24 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="section-title mb-4">ZONES D'INTERVENTION</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Kiff Cleaning Solutions couvre l'ensemble de l'Île-de-France.
                Sélectionnez votre ville pour une information personnalisée.
              </p>
            </div>

            {DEPTS.map((dept) => {
              const cities = ZONES.filter((z) => z.dept === dept.code);
              if (!cities.length) return null;
              return (
                <div key={dept.code} className="mb-10">
                  <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="badge-teal">{dept.code}</span>
                    {dept.name}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {cities.map((z) => (
                      <Link
                        key={z.slug}
                        href={`/zones/${z.slug}`}
                        className="card-dark text-center py-4 group"
                      >
                        <MapPin className="w-4 h-4 text-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-300 text-sm group-hover:text-teal transition-colors">
                          {z.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
