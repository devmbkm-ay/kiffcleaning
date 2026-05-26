// lib/services-data.ts — Données centralisées services & relations SEO

import { SITE } from './seo';

export type ServiceSlug =
    | 'nettoyage-diogene'
    | 'nettoyage-deces'
    | 'nettoyage-sinistre'
    | 'debarras-maison'
    | 'logement-insalubre'
    | 'fientes-pigeons'
    | 'nettoyage-chantier';

export interface Service {
    slug: ServiceSlug;
    title: string;
    shortTitle: string;
    metaDescription: string;
    h1: string;
    keywords: string[];

    // Relations SEO contextuelles
    relatedServices: {
        slug: ServiceSlug;
        label: string;
        context: string; // Pourquoi lier ces deux services ?
    }[];

    // Schema.org Service
    schema: {
        name: string;
        description: string;
        areaServed: string;
        priceRange: string;
    };
}

export const SERVICES: Record<ServiceSlug, Service> = {
    'nettoyage-diogene': {
        slug: 'nettoyage-diogene',
        title: 'Nettoyage Syndrome de Diogène & Débarras Logement Insalubre',
        shortTitle: 'Syndrome de Diogène',
        metaDescription:
            'Spécialiste du syndrome de Diogène en Île-de-France. Tri éthique, débarras, désinfection biocide. Certificat de désinfection + BSD. Intervention 24h/24.',
        h1: 'Nettoyage Syndrome de Diogène : Débarras, Tri Éthique et Désinfection de Logements Insalubres',
        keywords: [
            'syndrome diogène nettoyage',
            'syllogomanie débarras',
            'nettoyage logement insalubre',
            'tri éthique Diogène',
            'décontamination Diogène',
        ],
        relatedServices: [
            {
                slug: 'debarras-maison',
                label: 'Service Débarras Complet',
                context:
                    'Après le tri Diogène et la remise en état, besoin de vider complètement la maison pour la revendre ou la rénover ?',
            },
            {
                slug: 'logement-insalubre',
                label: 'Remise en État Insalubrité',
                context:
                    'Pour les cas d\'insalubrité majeure sans syndrome Diogène (squats, négligence importante).',
            },
        ],
        schema: {
            name: 'Nettoyage Syndrome de Diogène',
            description:
                'Intervention spécialisée pour le syndrome de Diogène avec tri éthique, débarras et désinfection biocide.',
            areaServed: 'Île-de-France',
            priceRange: 'Sur devis',
        },
    },

    'nettoyage-deces': {
        slug: 'nettoyage-deces',
        title: 'Nettoyage Après Décès : Bio-Nettoyage Post-Mortem & Désinfection',
        shortTitle: 'Après Décès',
        metaDescription:
            'Bio-nettoyage après décès en Île-de-France. Protocole médical strict, certificat désinfection, gestion DASRI. Prise en charge par notaire.',
        h1: 'Nettoyage Après Décès : Désinfection Post-Mortem, Bio-Nettoyage et Remise en État de Scènes de Crime',
        keywords: [
            'nettoyage après décès',
            'bio-nettoyage post-mortem',
            'désinfection après suicide',
            'nettoyage scène crime',
            'prise charge notaire décès',
        ],
        relatedServices: [
            {
                slug: 'debarras-maison',
                label: 'Débarras Succession',
                context:
                    'Après la désinfection, besoin de vider et de préparer l\'héritage pour la vente ou la succession ?',
            },
            {
                slug: 'logement-insalubre',
                label: 'Remise en État',
                context: 'Pour les cas complexes d\'insalubrité liée à l\'abandon du logement post-décès.',
            },
        ],
        schema: {
            name: 'Bio-Nettoyage Post-Mortem',
            description:
                'Désinfection et bio-nettoyage professionnel après décès à domicile, avec certificat de désinfection.',
            areaServed: 'Île-de-France',
            priceRange: 'Sur devis',
        },
    },

    'nettoyage-sinistre': {
        slug: 'nettoyage-sinistre',
        title: 'Nettoyage Après Sinistre : Incendie, Dégât des Eaux & Assèchement',
        shortTitle: 'Après Sinistre',
        metaDescription:
            'Décontamination après incendie et dégâts des eaux en Île-de-France. Pompage, assèchement, traitement suies. Certificat assuré accepté.',
        h1: 'Nettoyage Après Sinistre : Décontamination Après Incendie, Pompage et Assèchement Suite à un Dégât des Eaux',
        keywords: [
            'nettoyage après incendie',
            'décontamination suies',
            'assèchement dégât eaux',
            'traitement moisissures sinistre',
            'nettoyage dégât eau',
        ],
        relatedServices: [
            {
                slug: 'nettoyage-chantier',
                label: 'Préparation Avant Rénovation',
                context:
                    'Après l\'assèchement et la désinfection, nous pouvons préparer les lieux pour que vos artisans rénovent en toute sécurité.',
            },
        ],
        schema: {
            name: 'Nettoyage Après Sinistre',
            description: 'Décontamination, pompage et assèchement après incendie ou dégât des eaux.',
            areaServed: 'Île-de-France',
            priceRange: 'Sur devis',
        },
    },

    'debarras-maison': {
        slug: 'debarras-maison',
        title: 'Entreprise de Débarras : Vidage de Maison, Appartement & Successions',
        shortTitle: 'Débarras Complet',
        metaDescription:
            'Débarras maison et appartement en Île-de-France. Vidage complet, tri écoresponsable, BSD déchets. Prise charge notaire. Devis gratuit.',
        h1: 'Entreprise de Débarras : Vidage de Maison, Appartement, Successions et Solutions de Désencombrement sur Mesure',
        keywords: [
            'debarras maison',
            'débarras appartement succession',
            'entreprise débarras Île-de-France',
            'vidage complet maison',
            'tri écoresponsable débarras',
        ],
        relatedServices: [
            {
                slug: 'nettoyage-diogene',
                label: 'Nettoyage Syndrome Diogène',
                context:
                    'Si le logement présente des signes d\'insalubrité liée au syndrome Diogène, une désinfection complète est nécessaire avant le débarras.',
            },
            {
                slug: 'nettoyage-deces',
                label: 'Débarras Succession Post-Décès',
                context: 'Étape suivante naturelle après désinfection post-mortem : vider et préparer l\'héritage.',
            },
        ],
        schema: {
            name: 'Service de Débarras',
            description:
                'Débarras complet et partiel de maisons, appartements et successions avec tri écoresponsable.',
            areaServed: 'Île-de-France',
            priceRange: 'À partir de 500€',
        },
    },

    'logement-insalubre': {
        slug: 'logement-insalubre',
        title: 'Remise en État Logements Insalubres : Nettoyage Squats & Vandalisme',
        shortTitle: 'Logements Insalubres',
        metaDescription:
            'Nettoyage logement insalubre, squat et vandalisme en Île-de-France. Désinfection totale, certificat sanitaire, BSD déchets. Sécurité juridique garantie.',
        h1: 'Remise en État de Logements Insalubres : Nettoyage Après Squats, Expulsions Judiciaires et Actes de Vandalisme',
        keywords: [
            'nettoyage squat',
            'remise état logement insalubre',
            'nettoyage vandalisme',
            'décontamination squat',
            'nettoyage après expulsion',
        ],
        relatedServices: [
            {
                slug: 'nettoyage-diogene',
                label: 'Syndrome Diogène',
                context:
                    'Certains logements insalubres contiennent des accumulations de type Diogène qui nécessitent un tri spécialisé.',
            },
            {
                slug: 'debarras-maison',
                label: 'Débarras Post-Nettoyage',
                context: 'Après désinfection, vidage complet si vous revendez ou relaguez le bien.',
            },
        ],
        schema: {
            name: 'Remise en État Logements Insalubres',
            description:
                'Nettoyage et désinfection spécialisés pour logements insalubres, squats, et situations post-expulsion.',
            areaServed: 'Île-de-France',
            priceRange: 'Sur devis',
        },
    },

    'fientes-pigeons': {
        slug: 'fientes-pigeons',
        title: 'Nettoyage Fientes de Pigeons : Dépigeonnage & Traitement Biocide',
        shortTitle: 'Fientes Pigeons',
        metaDescription:
            'Nettoyage fientes pigeons et dépigeonnage en Île-de-France. Traitement haute pression, biocide fongicide. Santé respiratoire protégée.',
        h1: 'Nettoyage Fientes de Pigeons et Nuisibles : Dépigeonnage & Traitement Biocide Professionnel',
        keywords: [
            'nettoyage fientes pigeons',
            'dépigeonnage balcon',
            'traitement fientes pigeons',
            'nettoyage urée pigeons',
            'fongicide fientes corrosives',
        ],
        relatedServices: [],
        schema: {
            name: 'Nettoyage Fientes Pigeons',
            description:
                'Nettoyage haute pression et traitement biocide fongicide pour éliminer les fientes de pigeons et les risques sanitaires.',
            areaServed: 'Île-de-France',
            priceRange: 'À partir de 300€',
        },
    },

    'nettoyage-chantier': {
        slug: 'nettoyage-chantier',
        title: 'Nettoyage Fin de Chantier : Dépoussiérage Industriel & Remise en État',
        shortTitle: 'Fin de Chantier',
        metaDescription:
            'Nettoyage fin de chantier en Île-de-France. Dépoussiérage plâtre, nettoyage vitrages, lustrage sols. Certificat conformité OPR.',
        h1: 'Nettoyage Fin de Chantier : Remise en État Après Travaux, Dépoussiérage Industriel et Livraison de Bâtiments Neufs',
        keywords: [
            'nettoyage fin de chantier',
            'nettoyage après travaux rénovation',
            'dépoussiérage industriel',
            'nettoyage vitrages neuf',
            'remise état après chantier',
        ],
        relatedServices: [
            {
                slug: 'nettoyage-sinistre',
                label: 'Nettoyage Sinistre',
                context:
                    'Si votre chantier est consécutif à un sinistre (incendie, dégât eau), nous combinons assèchement + nettoyage fin de chantier.',
            },
        ],
        schema: {
            name: 'Nettoyage Fin de Chantier',
            description:
                'Dépoussiérage industriel, nettoyage des vitrages et lustrage des sols après travaux de construction ou rénovation.',
            areaServed: 'Île-de-France',
            priceRange: 'À partir de 800€',
        },
    },
};

/**
 * Récupère un service par son slug
 */
export function getService(slug: ServiceSlug): Service | undefined {
    return SERVICES[slug];
}

/**
 * Liste tous les services
 */
export function getAllServices(): Service[] {
    return Object.values(SERVICES);
}

/**
 * Retourne les services liés à un slug donné
 */
export function getRelatedServices(slug: ServiceSlug): Service[] {
    const service = SERVICES[slug];
    if (!service) return [];
    return service.relatedServices
        .map((rel) => SERVICES[rel.slug])
        .filter(Boolean);
}
