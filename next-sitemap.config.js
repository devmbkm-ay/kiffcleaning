/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kiffcleaningsolutions.fr',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => {
    const { ZONES, SERVICES } = require('./lib/seo');
    const paths = [];

    for (const z of ZONES) {
      paths.push({
        loc: `/zones/${z.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
      });
    }
    for (const s of SERVICES) {
      paths.push({
        loc: `/services/${s.slug}`,
        changefreq: 'monthly',
        priority: 0.9,
      });
    }
    return paths;
  },
};
