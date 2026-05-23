import { SITE } from './seo';

export type ServiceFAQ = { q: string; a: string };
export type ServiceStep = { step: number; title: string; desc: string };

export type ServiceContent = {
  whatIsTitle: string;
  whatIsBody: string;
  image: string;
  imageAlt: string;
  protocolTitle: string;
  steps: ServiceStep[];
  whyUs: string[];
  faqs: ServiceFAQ[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'nettoyage-extreme': {
    whatIsTitle: "Qu'est-ce que le nettoyage extrême ?",
    image: '/images/services/optimized/photo-montage.webp',
    imageAlt: 'Équipe Kiff Cleaning en intervention de nettoyage extrême avec équipements de protection',
    whatIsBody: `Le nettoyage extrême désigne l'ensemble des opérations de remise en état d'un logement ou d'un local présentant un niveau de dégradation sanitaire sévère, inaccessible par des moyens conventionnels. Il s'agit de situations où l'accumulation de déchets, la présence de nuisibles (rongeurs, cafards, punaises de lit), les moisissures extensives ou les odeurs persistantes rendent le logement inhabitable.

Ces interventions exigent des équipements de protection individuelle de niveau 3 (combinaisons intégrales, masques FFP3, gants nitrile), des produits biocides homologués et un protocole strict défini par les normes sanitaires françaises. Kiff Cleaning Solutions est formé et équipé pour intervenir dans les cas les plus extrêmes, tout en respectant les personnes concernées et leurs proches.`,
    protocolTitle: "Notre protocole d'intervention en 6 étapes",
    steps: [
      { step: 1, title: 'Évaluation et diagnostic', desc: 'Visite sur site gratuite pour évaluer le niveau d\'insalubrité, identifier les risques (amiante, plomb, nuisibles) et établir un devis transparent.' },
      { step: 2, title: 'Sécurisation et confinement', desc: 'Mise en place de périmètre de sécurité, bâchage et confinement des zones contaminées pour éviter toute propagation.' },
      { step: 3, title: 'Évacuation des déchets', desc: 'Tri, conditionnement et évacuation réglementaire de tous les déchets selon leur nature (ordures ménagères, encombrants, déchets spéciaux).' },
      { step: 4, title: 'Nettoyage en profondeur', desc: 'Décapage des surfaces, élimination des moisissures, traitement des nuisibles et nettoyage haute pression de toutes les surfaces.' },
      { step: 5, title: 'Désinfection biocide', desc: 'Application de produits biocides certifiés virucides, bactéricides et fongicides conformes à la réglementation européenne (UE 528/2012).' },
      { step: 6, title: 'Remise en état et validation', desc: 'Vérification des résultats, déodorisation, remise des documents de traçabilité et rapport d\'intervention complet.' },
    ],
    whyUs: [
      'Équipements de protection de niveau 3 et matériel professionnel homologué',
      'Intervention 24h/24, 7j/7 en Île-de-France',
      'Véhicules banalisés — discrétion totale garantie',
      'Déchets traités conformément à la réglementation ICPE',
      'Rapport d\'intervention et documentation juridique fournis',
      'Certifications biocide et protocoles certifiés NF',
    ],
    faqs: [
      { q: 'Combien coûte un nettoyage extrême ?', a: `Le prix varie selon la superficie, le niveau de dégradation et les risques spécifiques identifiés. Nous réalisons systématiquement une visite gratuite avant tout devis. Contactez-nous au ${SITE.phone} pour planifier une évaluation.` },
      { q: 'Combien de temps dure une intervention de nettoyage extrême ?', a: 'Une intervention dure en moyenne 1 à 3 jours pour un logement standard. Pour les cas les plus sévères (accumulation sur plusieurs années), l\'intervention peut nécessiter 4 à 7 jours.' },
      { q: 'Le logement est-il habitable après votre intervention ?', a: 'Oui. Notre objectif est la remise en état complet et habitable du logement. Nous fournissons un rapport d\'intervention attestant de la conformité sanitaire à l\'issue de nos travaux.' },
      { q: 'Prenez-vous en charge les démarches avec les assurances ?', a: 'Nous fournissons tous les documents nécessaires (devis détaillé, rapport d\'intervention, bons de pesée des déchets) pour faciliter vos démarches auprès de votre assurance.' },
      { q: 'Intervenez-vous en dehors de l\'Île-de-France ?', a: 'Notre zone principale est l\'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). Contactez-nous pour les demandes hors région, nous étudions chaque cas.' },
    ],
  },

  'debarras-complet': {
    whatIsTitle: "Qu'est-ce qu'un débarras complet ?",
    image: '/images/services/optimized/debarras-complet.webp',
    imageAlt: 'Intervention de débarras complet par Kiff Cleaning Solutions en Île-de-France',
    whatIsBody: `Un débarras complet est l'opération de vidage intégral d'un logement, d'une cave, d'un grenier ou d'un local commercial. Il intervient généralement dans le cadre d'une succession, d'un déménagement, d'une saisie, d'une expulsion ou de la prise en charge d'un logement insalubre.

Contrairement à une simple benne, le débarras professionnel comprend le tri des objets (récupération, don, recyclage, déchets spéciaux), l'évacuation réglementaire et, selon les besoins, un nettoyage de fin de chantier. Kiff Cleaning Solutions assure l'ensemble de ces étapes avec une traçabilité complète pour les bailleurs sociaux, notaires et particuliers.`,
    protocolTitle: 'Notre méthode de débarras en 5 étapes',
    steps: [
      { step: 1, title: 'Visite d\'évaluation gratuite', desc: 'Estimation du volume, identification des objets de valeur à conserver, évaluation des contraintes d\'accès (ascenseur, escalier étroit, parking).' },
      { step: 2, title: 'Tri et inventaire', desc: 'Séparation systématique : objets à conserver selon la famille, objets valorisables (don, revente), recyclables et déchets.' },
      { step: 3, title: 'Évacuation et chargement', desc: 'Transport sécurisé par camion adapté, avec protection des parties communes de l\'immeuble.' },
      { step: 4, title: 'Traitement réglementaire des déchets', desc: 'Dépôt en déchetterie agréée, remise de bons de pesée et de certificats de destruction pour les déchets spéciaux.' },
      { step: 5, title: 'Nettoyage de remise en état', desc: 'Balayage, dépoussiérage et nettoyage de base pour remettre le bien en état de visite ou de remise de clés.' },
    ],
    whyUs: [
      'Récupération des objets de valeur et remise à la famille',
      'Bons de pesée et certificats de dépôt fournis',
      'Intervention discrète avec véhicules banalisés',
      'Équipes formées aux successions et situations sensibles',
      'Intervention possible sous 48h en Île-de-France',
      'Tarifs transparents, sans frais cachés',
    ],
    faqs: [
      { q: 'Que devient le mobilier lors d\'un débarras ?', a: 'Nous trions systématiquement les objets : ceux ayant de la valeur sont proposés à la famille ou à des associations. Le reste est évacué en déchetterie agréée. Vous recevez les bons de dépôt.' },
      { q: 'Pouvez-vous intervenir pour un débarras de succession ?', a: 'Oui, c\'est l\'une de nos spécialités. Nous travaillons régulièrement avec des notaires et des familles dans le cadre de successions. Nous nous adaptons aux contraintes légales et émotionnelles de ces situations.' },
      { q: 'Quel est le délai d\'intervention pour un débarras ?', a: 'Nous intervenons généralement sous 48 à 72h après la visite d\'évaluation. En cas d\'urgence (expulsion, sinistre), nous pouvons mobiliser une équipe en 24h.' },
      { q: 'Le débarras inclut-il le nettoyage du logement ?', a: 'Le nettoyage de base (balayage, dépoussiérage) est inclus. Un nettoyage approfondi ou une désinfection peuvent être ajoutés au devis selon vos besoins.' },
      { q: 'Intervenez-vous pour des caves et garages ?', a: 'Oui, nous intervenons pour tout type de local : appartements, maisons, caves, garages, greniers, combles, locaux commerciaux et entrepôts.' },
    ],
  },

  'desinfection-biocide': {
    whatIsTitle: "Qu'est-ce que la désinfection biocide ?",
    image: '/images/services/optimized/desinfection-biocide.webp',
    imageAlt: 'Application de produits biocides certifiés par un technicien Kiff Cleaning',
    whatIsBody: `La désinfection biocide est un traitement chimique visant à éliminer ou neutraliser les micro-organismes pathogènes (bactéries, virus, champignons, spores) présents sur des surfaces, dans l'air ou dans les matériaux. En France, les produits biocides sont réglementés par le règlement européen UE n°528/2012 et nécessitent une autorisation de mise sur le marché (AMM).

Les interventions de désinfection biocide sont requises après un décès, une infestation, une contamination microbiologique (COVID, légionelle, salmonelle), ou dans le cadre d'une remise en état après syndrome de Diogène. Kiff Cleaning Solutions utilise exclusivement des produits certifiés ayant obtenu leur AMM, garantissant l'efficacité virucide (NF EN 14476), bactéricide (NF EN 1276) et fongicide (NF EN 1650).`,
    protocolTitle: 'Protocole de désinfection biocide en 6 étapes',
    steps: [
      { step: 1, title: 'Évaluation du niveau de contamination', desc: 'Identification des agents pathogènes ciblés, mesure de la surface à traiter et sélection du protocole adapté (spray, nébulisation, thermofog).' },
      { step: 2, title: 'Préparation des surfaces', desc: 'Nettoyage préalable obligatoire : aucun biocide ne peut agir efficacement sur une surface souillée. Dégraissage et pré-nettoyage systématiques.' },
      { step: 3, title: 'Application du traitement biocide', desc: 'Pulvérisation ou nébulisation du produit certifié sur l\'ensemble des surfaces, selon les temps de contact et concentrations réglementaires.' },
      { step: 4, title: 'Temps de contact et confinement', desc: 'Respect strict des temps de contact indiqués sur l\'AMM du produit. Le local est condamné pendant la durée du traitement.' },
      { step: 5, title: 'Rinçage et aération', desc: 'Rinçage des surfaces en contact avec des aliments ou des personnes, ventilation forcée et retour aux conditions normales d\'occupation.' },
      { step: 6, title: 'Documentation et traçabilité', desc: 'Remise d\'un certificat de désinfection précisant les produits utilisés, les concentrations, les surfaces traitées et les résultats attendus.' },
    ],
    whyUs: [
      'Produits biocides à AMM (Autorisation de Mise sur le Marché)',
      'Efficacité certifiée : NF EN 14476 (virucide), NF EN 1276 (bactéricide), NF EN 1650 (fongicide)',
      'Certificat de désinfection remis à l\'issue de l\'intervention',
      'Opérateurs formés et équipés en protection de niveau 3',
      'Intervention possible en 24h pour les urgences sanitaires',
      'Compatible avec les exigences des bailleurs et assurances',
    ],
    faqs: [
      { q: 'Quelle est la différence entre nettoyage et désinfection biocide ?', a: 'Le nettoyage élimine les salissures visibles. La désinfection biocide détruit les micro-organismes pathogènes invisibles. Les deux étapes sont complémentaires et obligatoirement réalisées dans cet ordre.' },
      { q: 'Faut-il quitter le logement pendant la désinfection ?', a: 'Oui. Les personnes, animaux et plantes doivent quitter le logement pendant le traitement et la période de confinement (généralement 2 à 4 heures). Nous vous précisons le délai exact avant intervention.' },
      { q: 'La désinfection biocide est-elle efficace contre le COVID-19 ?', a: 'Oui. Nos produits sont certifiés NF EN 14476 qui inclut les coronavirus enveloppés. Ils sont actifs contre SARS-CoV-2 aux concentrations et temps de contact réglementaires.' },
      { q: 'Recevez-vous un certificat après la désinfection ?', a: 'Oui. Nous remettons systématiquement un certificat de désinfection détaillant les produits utilisés (avec leur AMM), les zones traitées, les concentrations et les résultats attendus.' },
      { q: 'Dans quels cas la désinfection biocide est-elle obligatoire ?', a: 'Elle est obligatoire ou fortement recommandée après : un décès avec décomposition, une contamination microbiologique avérée, un syndrome de Diogène, une infestation de nuisibles, ou une contamination par des matières biologiques.' },
    ],
  },

  'nettoyage-post-mortem': {
    whatIsTitle: "Qu'est-ce que le nettoyage post-mortem ?",
    image: '/images/services/optimized/nettoyage-post-mortem.webp',
    imageAlt: 'Intervention discrète de nettoyage post-mortem par Kiff Cleaning Solutions',
    whatIsBody: `Le nettoyage post-mortem désigne l'intervention de remise en état d'un logement après un décès, notamment lorsque le corps n'a pas été découvert rapidement (décès isolé), après une mort violente (accident, suicide, homicide) ou en cas de décomposition avancée.

Ces situations présentent des risques sanitaires sérieux : fluides biologiques, agents pathogènes (hépatite B et C, VIH, bactéries anaérobies), odeurs de décomposition persistantes. En France, cette activité est réglementée par l'article L. 1311-1 du Code de la santé publique. Kiff Cleaning Solutions intervient avec discrétion, respect et le protocole technique requis, dans le plein respect des familles endeuillées.`,
    protocolTitle: 'Notre protocole post-mortem en 6 étapes',
    steps: [
      { step: 1, title: 'Coordination avec les autorités', desc: 'Nous intervenons uniquement après levée de corps par les autorités compétentes (médecin légiste, police) et sur autorisation de la famille ou du bailleur.' },
      { step: 2, title: 'Sécurisation et équipement', desc: 'Mise en place d\'équipements de protection de niveau 3 (combinaison intégrale, masque FFP3, double gantage, surbottes) et confinement de la zone.' },
      { step: 3, title: 'Élimination des matières biologiques', desc: 'Collecte et traitement des fluides et matières biologiques comme déchets d\'activités de soins à risques infectieux (DASRI), conformément à la réglementation.' },
      { step: 4, title: 'Nettoyage et décontamination', desc: 'Nettoyage en profondeur des surfaces contaminées, traitement des matériaux poreux (moquette, parquet, plâtre) et remplacement si nécessaire.' },
      { step: 5, title: 'Désinfection biocide complète', desc: 'Application de produits biocides certifiés virucides et bactéricides sur l\'ensemble des surfaces de la pièce concernée et des zones adjacentes.' },
      { step: 6, title: 'Déodorisation et restitution', desc: 'Traitement des odeurs par ozonation ou thermo-nébulisation, aération forcée et remise en état visuel du logement avec documentation complète.' },
    ],
    whyUs: [
      'Discrétion absolue — véhicules banalisés, équipes en civil',
      'Déchets biologiques traités comme DASRI (conformité réglementaire)',
      'Disponibilité 24h/24, 7j/7 pour les situations d\'urgence',
      'Équipes formées à l\'accompagnement des familles endeuillées',
      'Certificat de décontamination remis à la famille et/ou au bailleur',
      'Coordination possible avec pompes funèbres et notaires',
    ],
    faqs: [
      { q: 'Quand peut-on faire appel à une entreprise après un décès à domicile ?', a: 'Après la levée de corps par un médecin et, si nécessaire, par les forces de l\'ordre. En cas de mort suspecte, l\'intervention attend l\'autorisation du procureur. Nous pouvons vous guider dans ces démarches.' },
      { q: 'Combien coûte un nettoyage post-mortem ?', a: `Le coût dépend de la superficie concernée, du délai de découverte et du niveau de contamination. Une visite d\'évaluation est indispensable. Appelez-nous au ${SITE.phone} pour une estimation rapide.` },
      { q: 'L\'assurance habitation couvre-t-elle ce type de nettoyage ?', a: 'Dans de nombreux cas, oui. Les contrats multirisques habitation couvrent souvent les "dommages immatériels" dont font partie les frais de remise en état après décès. Nous vous fournissons tous les justificatifs nécessaires.' },
      { q: 'Le logement sera-t-il présentable pour la succession ?', a: 'Oui, c\'est l\'objectif de notre intervention. À l\'issue du nettoyage, le logement est remis dans un état permettant sa visite, son évaluation par un notaire ou sa remise en location.' },
      { q: 'Intervenez-vous aussi pour les maisons de retraite et EHPAD ?', a: 'Oui. Nous avons l\'habitude de travailler avec des établissements de santé, des EHPAD et des résidences services dans des conditions de discrétion maximale.' },
    ],
  },

  'syndrome-de-diogene': {
    whatIsTitle: "Qu'est-ce que le syndrome de Diogène ?",
    image: '/images/services/optimized/syndrome-de-diogene.webp',
    imageAlt: 'Prise en charge bienveillante d\'un logement en syndrome de Diogène par Kiff Cleaning',
    whatIsBody: `Le syndrome de Diogène — également appelé syndrome de Plyushkin ou trouble de l'accumulation compulsive sévère — est un trouble du comportement caractérisé par une accumulation pathologique d'objets et de déchets, une négligence extrême de l'hygiène personnelle et du logement, et un isolement social progressif. Il touche majoritairement les personnes âgées vivant seules, mais peut concerner tous les âges.

Reconnu dans le DSM-5 sous la catégorie des troubles obsessionnels compulsifs (TOC), il génère des risques sanitaires graves pour la personne concernée et son environnement : infestations de nuisibles, contamination microbiologique, risques d'incendie, insalubrité chronique. La prise en charge nécessite une double compétence : technique (nettoyage, désinfection) et humaine (relation avec la personne, coordination avec les services sociaux).`,
    protocolTitle: 'Notre prise en charge du syndrome de Diogène',
    steps: [
      { step: 1, title: 'Contact et coordination préalable', desc: 'Discussion avec la famille, le médecin ou les services sociaux. Nous adaptons notre intervention au niveau d\'adhésion de la personne concernée.' },
      { step: 2, title: 'Visite d\'évaluation respectueuse', desc: 'Évaluation du logement en présence d\'un interlocuteur de confiance. Estimation du volume, des risques sanitaires et du temps nécessaire.' },
      { step: 3, title: 'Tri avec préservation des objets significatifs', desc: 'Tri méthodique avec respect absolu des objets auxquels la personne tient. Rien n\'est jeté sans accord — notre équipe est formée à cette approche.' },
      { step: 4, title: 'Évacuation progressive des déchets', desc: 'Évacuation par phases pour ne pas traumatiser la personne et permettre son adaptation. Travail en lien avec les équipes de soins si nécessaire.' },
      { step: 5, title: 'Nettoyage approfondi et désinfection', desc: 'Nettoyage intégral des surfaces, traitement des nuisibles, désinfection biocide certifiée et neutralisation des odeurs par ozonation.' },
      { step: 6, title: 'Suivi et prévention de la rechute', desc: 'Remise d\'un rapport complet aux aidants et services sociaux. Possibilité de visites de suivi pour prévenir la re-accumulation.' },
    ],
    whyUs: [
      'Équipe formée spécifiquement à la relation avec les personnes touchées par le syndrome',
      'Approche humaine et non-violente, respect de la dignité de la personne',
      'Coordination avec services sociaux, CCAS et équipes médicales',
      'Véhicules banalisés — aucune stigmatisation dans le voisinage',
      'Tri respectueux des affaires personnelles avec accord de la personne',
      'Suivi possible après intervention pour prévenir la rechute',
    ],
    faqs: [
      { q: 'Comment signaler un cas de syndrome de Diogène ?', a: 'Vous pouvez contacter le CCAS (Centre Communal d\'Action Sociale) de la commune, votre médecin traitant, ou les services sociaux du département. Pour l\'intervention de nettoyage, contactez-nous directement — nous pouvons également vous orienter vers les bons interlocuteurs.' },
      { q: 'La personne doit-elle être d\'accord pour l\'intervention ?', a: 'Dans la mesure du possible, oui. Nous privilégions toujours l\'adhésion de la personne. En cas d\'urgence sanitaire (mise en danger), une intervention peut être ordonnée par la mairie ou le tribunal. Nous travaillons dans les deux cas.' },
      { q: 'Combien coûte une intervention pour syndrome de Diogène ?', a: `Le prix dépend de la superficie du logement et du niveau d\'accumulation. Pour un T2 en accumulation modérée, comptez généralement 2 à 4 jours d\'intervention. Contactez-nous au ${SITE.phone} pour une visite d\'évaluation gratuite.` },
      { q: 'La prise en charge peut-elle être partiellement remboursée ?', a: 'Certaines aides sont possibles : l\'ANAH (Agence Nationale de l\'Habitat) peut financer une partie des travaux dans le cadre du programme "Habiter Mieux". Les services sociaux du département peuvent également intervenir. Nous vous accompagnons dans ces démarches.' },
      { q: 'Y a-t-il un risque de rechute après le nettoyage ?', a: 'Oui, sans suivi médical et social, la rechute est fréquente. C\'est pourquoi nous travaillons en lien avec les équipes de soin et proposons un suivi post-intervention. Le nettoyage seul ne suffit pas — il doit s\'inscrire dans une prise en charge globale.' },
      { q: 'Intervenez-vous pour des bailleurs et offices HLM ?', a: 'Oui, nous travaillons régulièrement avec des bailleurs sociaux, des syndics de copropriété et des offices HLM qui nous contactent pour des interventions urgentes ou programmées. Nous fournissons toute la documentation nécessaire.' },
    ],
  },
};
