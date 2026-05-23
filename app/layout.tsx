import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SITE, getLocalBusinessSchema } from '@/lib/seo';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Nettoyage Extrême Île-de-France 24h/24`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'nettoyage extrême', 'nettoyage insalubrité', 'débarras complet',
    'désinfection biocide', 'syndrome de Diogène', 'nettoyage post-mortem',
    'nettoyage Île-de-France', 'nettoyage urgence', 'nettoyage 24h',
    'débarras Paris', 'désinfection Seine-et-Marne',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Nettoyage Extrême Île-de-France`,
    description: SITE.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Nettoyage Extrême`,
    description: SITE.description,
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE.url,
  },
  // GEO meta tags
  other: {
    'geo.region': 'FR-IDF',
    'geo.placename': 'Mareuil-lès-Meaux, Île-de-France',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy-900`}>
        {children}
      </body>
    </html>
  );
}
