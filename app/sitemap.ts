import { MetadataRoute } from 'next';
import { SITE, ZONES, SERVICES } from '@/lib/seo';
import { ARTICLES } from './blog/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/zones`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/devis`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const zonePages: MetadataRoute.Sitemap = ZONES.map((z) => ({
    url: `${base}/zones/${z.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const serviceZonePages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    ZONES.map((z) => ({
      url: `${base}/services/${s.slug}/${z.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  );

  const blogPages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...zonePages, ...servicePages, ...serviceZonePages, ...blogPages];
}
