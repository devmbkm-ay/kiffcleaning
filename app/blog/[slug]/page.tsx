import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { SITE } from '@/lib/seo';
import { ARTICLES } from '../articles';
import { ARTICLE_CONTENT } from '../content';

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Kiff Cleaning Solutions`,
    description: article.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

function renderContent(text: string) {
  const lines = text.trim().split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} className="text-white font-bold text-xl mt-8 mb-3">{line.slice(3)}</h2>;
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="text-white font-semibold mt-4 mb-2">{line.slice(2, -2)}</p>;
    if (line.match(/^\d+\. /)) return <li key={i} className="text-slate-300 text-sm ml-4 mb-1">{line.replace(/^\d+\. /, '')}</li>;
    if (line.trim() === '') return <br key={i} />;
    return <p key={i} className="text-slate-400 leading-relaxed mb-4">{line}</p>;
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = ARTICLE_CONTENT[article.slug] || article.excerpt;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    url: `${SITE.url}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main>
        <section className="py-24 px-4 bg-navy-900">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-teal mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
            <div className="badge-teal mb-4 inline-flex">{article.category}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-10 pb-6 border-b border-white/5">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="prose-custom">
              {renderContent(content)}
            </div>
            <div className="mt-12 card-dark flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-white font-bold mb-1">Besoin d'une intervention ?</div>
                <div className="text-slate-400 text-sm">Devis gratuit · Urgence 24h/24</div>
              </div>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
