// lib/seo.ts — Centralized SEO config for KiffCleaningSolutions

export const SITE = {
  name: 'Kiff Cleaning Solutions',
  shortName: 'Kiff Cleaning',
  tagline: 'Nettoyage extrême, débarras & désinfection biocide en Île-de-France',
  description:
    'Kiff Cleaning Solutions : spécialiste du nettoyage extrême, débarras complet, désinfection biocide et syndrome de Diogène en Île-de-France. Intervention 24h/24, 7j/7. Discrétion garantie. Devis gratuit.',
  url: 'https://www.kiffcleaningsolutions.fr',
  phone: '06 00 00 00 00',
  phoneRaw: '+33600000000',
  email: 'contact@kiffcleaning.fr',
  address: {
    street: '',
    city: 'Mareuil-lès-Meaux',
    postalCode: '77100',
    region: 'Île-de-France',
    country: 'FR',
  },
  hours: '24h/24 - 7j/7',
  geo: {
    lat: 48.9333,
    lng: 2.9,
  },
  social: {},
};

// Zones d'intervention — pour SEO local & pages dynamiques
export const ZONES = [
  { slug: 'paris', name: 'Paris', dept: '75' },
  { slug: 'courbevoie', name: 'Courbevoie', dept: '92' },
  { slug: 'neuilly-sur-seine', name: 'Neuilly-sur-Seine', dept: '92' },
  { slug: 'levallois-perret', name: 'Levallois-Perret', dept: '92' },
  { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', dept: '92' },
  { slug: 'nanterre', name: 'Nanterre', dept: '92' },
  { slug: 'saint-denis', name: 'Saint-Denis', dept: '93' },
  { slug: 'bobigny', name: 'Bobigny', dept: '93' },
  { slug: 'montreuil', name: 'Montreuil', dept: '93' },
  { slug: 'creteil', name: 'Créteil', dept: '94' },
  { slug: 'vincennes', name: 'Vincennes', dept: '94' },
  { slug: 'versailles', name: 'Versailles', dept: '78' },
  { slug: 'meaux', name: 'Meaux', dept: '77' },
  { slug: 'mareuil-les-meaux', name: 'Mareuil-lès-Meaux', dept: '77' },
  { slug: 'melun', name: 'Melun', dept: '77' },
  { slug: 'chelles', name: 'Chelles', dept: '77' },
  { slug: 'evry', name: 'Évry', dept: '91' },
  { slug: 'cergy', name: 'Cergy', dept: '95' },
];

export const SERVICES = [
  {
    slug: 'nettoyage-extreme',
    name: 'Nettoyage Extrême',
    shortDesc: 'Insalubrité sévère, syndrome de Diogène, logements dégradés.',
    fullDesc:
      'Intervention complète pour les situations d\'insalubrité sévère : syndrome de Diogène, accumulation compulsive, logements fortement dégradés. Protocole strict, équipement professionnel, discrétion absolue.',
  },
  {
    slug: 'debarras-complet',
    name: 'Débarras Complet',
    shortDesc: 'Vidage intégral de logements, caves, greniers.',
    fullDesc:
      'Vidage intégral de logements, caves, greniers. Tri, évacuation et traitement réglementaire de tous les encombrants et déchets. Récupération et valorisation des objets réutilisables.',
  },
  {
    slug: 'desinfection-biocide',
    name: 'Désinfection Biocide',
    shortDesc: 'Protocole certifié virucide, bactéricide et fongicide.',
    fullDesc:
      'Protocole certifié virucide, bactéricide et fongicide. Élimination totale des agents pathogènes et remise en état sanitaire. Idéal après décès, infestation ou contamination.',
  },
  {
    slug: 'nettoyage-post-mortem',
    name: 'Nettoyage Post-Mortem',
    shortDesc: 'Intervention discrète après décès, scène de crime ou accident.',
    fullDesc:
      'Intervention discrète et respectueuse après décès, scène de crime ou accident domestique. Décontamination, neutralisation des odeurs, remise en état complet.',
  },
  {
    slug: 'syndrome-de-diogene',
    name: 'Syndrome de Diogène',
    shortDesc: 'Accompagnement spécialisé pour logements en accumulation compulsive.',
    fullDesc:
      'Prise en charge globale des logements touchés par le syndrome de Diogène. Équipe formée à la relation avec les personnes concernées. Tri respectueux, nettoyage et désinfection complète.',
  },
];

// JSON-LD Schema.org — LocalBusiness
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: ZONES.map((z) => ({
      '@type': 'City',
      name: z.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de nettoyage extrême',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.fullDesc,
          url: `${SITE.url}/services/${s.slug}`,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
    },
    priceRange: '€€',
  };
}

// FAQ Schema
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Intervenez-vous en urgence 24h/24 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Kiff Cleaning Solutions intervient 24h/24, 7j/7 pour toutes les situations d\'urgence en Île-de-France. Contactez-nous au ' + SITE.phone + ' pour une réponse immédiate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Dans quelles zones intervenez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous intervenons dans toute l\'Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d\'Oise (95).',
        },
      },
      {
        '@type': 'Question',
        name: 'Le devis est-il gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons pour évaluer la situation et vous fournir une estimation transparente.',
        },
      },
      {
        '@type': 'Question',
        name: 'Assurez-vous la discrétion lors des interventions ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Nos équipes interviennent avec des véhicules banalisés et une discrétion totale. La confidentialité de nos clients est notre priorité absolue.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que le syndrome de Diogène ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le syndrome de Diogène est un trouble du comportement caractérisé par une accumulation compulsive d\'objets et une négligence extrême de l\'hygiène. Kiff Cleaning Solutions est spécialisé dans la prise en charge de ces situations avec respect et professionnalisme.',
        },
      },
    ],
  };
}
