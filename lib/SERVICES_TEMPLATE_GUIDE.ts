// GUIDE: Comment créer les autres pages services en 2 minutes

/**
 * MODÈLE À DUPLIQUER pour les 6 autres services
 * 
 * 1️⃣ DUPLIQUER LE DOSSIER
 *    app/services/nettoyage-diogene/ → app/services/nettoyage-deces/
 *    
 * 2️⃣ RENOMMER ET ADAPTER page.tsx
 *    - Changer SERVICE_SLUG = 'nettoyage-deces'
 *    - Remplacer SERVICE_CONTENT avec le contenu du client
 *    - Les métadonnées, schema et FAQ se remplissent automatiquement
 *    
 * 3️⃣ CONTENU À REMPLACER POUR CHAQUE SERVICE
 */

// EXEMPLE: app/services/nettoyage-deces/page.tsx

const SERVICE_SLUG = 'nettoyage-deces'; // ← Changer ici

const SERVICE_CONTENT = {
    h1: 'Nettoyage Après Décès : Désinfection Post-Mortem, Bio-Nettoyage et Remise en État de Scènes de Crime',

    shortIntro:
        'La perte d\'un proche est une épreuve douloureuse, mais lorsque le décès survient à domicile et que le corps n\'est découvert qu\'après plusieurs jours ou semaines, l\'aspect émotionnel est immédiatement doublé d\'une urgence sanitaire absolue...',

    steps: [
        {
            number: '1',
            title: 'Confinement et Désinfection de Choc Initiale',
            description: 'Confinement de la zone et pulvérisation immédiate avec biocide à large spectre...',
        },
        {
            number: '2',
            title: 'Traitement des Fluides Biologiques',
            description: 'Découpage et dépose technique des revêtements contaminés, nettoyage enzymatique...',
        },
        // ... autres étapes du cahier des charges
    ],

    faq: [
        {
            question: 'Quelle est la durée d\'une intervention post-mortem ?',
            answer: 'En moyenne 4-8 heures selon le degré de contamination...',
        },
        // ... autres FAQ
    ],
};

// ========================================
// CHECKLIST: 7 SERVICES À CRÉER
// ========================================

const SERVICES_TO_CREATE = [
    {
        folder: 'nettoyage-diogene',
        slug: 'nettoyage-diogene',
        title: '✅ FAIT',
        status: 'done',
    },
    {
        folder: 'nettoyage-deces',
        slug: 'nettoyage-deces',
        title: 'À créer - Nettoyage Après Décès',
        contentSource: 'PAGE 3 du cahier des charges (lignes 20-50)',
    },
    {
        folder: 'nettoyage-sinistre',
        slug: 'nettoyage-sinistre',
        title: 'À créer - Nettoyage Après Sinistre',
        contentSource: 'PAGE 4 du cahier des charges',
    },
    {
        folder: 'debarras-maison',
        slug: 'debarras-maison',
        title: 'À créer - Débarras Maison',
        contentSource: 'PAGE 5 du cahier des charges',
    },
    {
        folder: 'logement-insalubre',
        slug: 'logement-insalubre',
        title: 'À créer - Logement Insalubre',
        contentSource: 'PAGE 6 du cahier des charges',
    },
    {
        folder: 'fientes-pigeons',
        slug: 'fientes-pigeons',
        title: 'À créer - Fientes Pigeons',
        contentSource: 'PAGE 7 du cahier des charges',
    },
    {
        folder: 'nettoyage-chantier',
        slug: 'nettoyage-chantier',
        title: 'À créer - Nettoyage Fin de Chantier',
        contentSource: 'PAGE 8 du cahier des charges',
    },
];

// ========================================
// STRUCTURE FICHIER POUR CHAQUE SERVICE
// ========================================

/**
 * app/services/[service-slug]/page.tsx
 * 
 * Structure minimale à avoir :
 * 
 * ✅ Imports OK
 * ✅ const SERVICE_SLUG = 'service-slug'
 * ✅ const SERVICE_CONTENT = { ... }
 * ✅ export const metadata = { ... }
 * ✅ const serviceSchema = { ... }
 * ✅ const breadcrumbSchema = { ... }
 * 
 * Composants inclus:
 * ✅ ServiceFAQ (auto-génère schema FAQ)
 * ✅ RelatedServices (liens contextuels depuis lib/services-data.ts)
 * ✅ TeamSection (placeholders équipe)
 * ✅ TrustSignals (SIRET + certifications)
 * ✅ LeadForm (formulaire devis)
 */

// ========================================
// MODÈLE CONTENT MINIMAL
// ========================================

const MINIMAL_TEMPLATE = {
    h1: '[À remplir] Titre H1 du service',
    shortIntro: '[À remplir] 2-3 phrases intro',

    steps: [
        {
            number: '1',
            title: '[À remplir] Étape 1',
            description: '[À remplir] Description étape 1',
        },
        {
            number: '2',
            title: '[À remplir] Étape 2',
            description: '[À remplir] Description étape 2',
        },
        // Min 3 étapes, max 5 pour rester lisible
    ],

    faq: [
        {
            question: '[À remplir] Question 1',
            answer: '[À remplir] Réponse 1 (pour IA + SEO)',
        },
        // Min 4-5 questions
    ],
};

/**
 * ⏱️ TEMPS PAR SERVICE
 * 
 * Copy/Paste contenu client:     ~5 min
 * Adapter au template:            ~5 min
 * Tester liens et affichage:      ~5 min
 * ---
 * Total par service:             ~15 min
 * 
 * Pour 6 services = 1.5h de travail
 */

// ========================================
// LIENS CONTEXTUELS AUTOMATIQUES
// ========================================

/**
 * Les liens "Services Complémentaires" se remplissent AUTOMATIQUEMENT
 * grâce à lib/services-data.ts
 * 
 * relatedServices: [
 *   {
 *     slug: 'debarras-maison',
 *     label: 'Service Débarras Complet',
 *     context: 'Après X, besoin de Y ?',
 *   },
 * ]
 * 
 * La fonction getRelatedServices() du composant
 * lit cette relation et affiche le lien avec contexte.
 */

export const GUIDE_COMPLETE = true;
