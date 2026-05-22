import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/seo';
import { ARTICLES } from './articles';

export const metadata: Metadata = {
  title: 'Blog — Conseils Nettoyage Extrême & Désinfection Île-de-France',
  description: `Conseils pratiques, guides et actualités sur le nettoyage extrême, le syndrome de Diogène, la désinfection biocide et les interventions d'urgence en Île-de-France.`,
  alternates: { canonical: `${SITE.url}/blog` },
};


export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-24 px-4 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="section-title mb-4">BLOG & CONSEILS</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Guides pratiques, actualités et conseils sur le nettoyage extrême,
                la désinfection et la gestion des situations d'insalubrité.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="card-dark group flex flex-col gap-4"
                >
                  <div className="badge-teal self-start">{a.category}</div>
                  <h2 className="text-white font-bold leading-snug group-hover:text-teal transition-colors flex-1">
                    {a.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1 text-teal">
                      Lire <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
