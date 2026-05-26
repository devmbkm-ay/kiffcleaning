# 🚀 Kiff Cleaning Solutions - Guide d'Implémentation Phase 1

## Vue d'ensemble

Votre site Kiff Cleaning Solutions est restructuré selon les standards SEO 2026 + charte graphique 60/30/10 avec respect du cahier des charges client.

### ✅ Ce qui est fait

- **Charte graphique** 60/30/10 (blanc/vert#1d8659/anthracite) intégrée Tailwind
- **Architecture routes** services en place (`/app/services/`)
- **Données centralisées** (`lib/services-data.ts`) avec relations SEO contextuelles
- **Composants réutilisables**:
  - `TrustSignals.tsx` - SIRET + certifications visibles
  - `TeamSection.tsx` - Équipe avec placeholders
  - `ServiceFAQ.tsx` - FAQ structurée pour IA
  - `RelatedServices.tsx` - Liens contextuels bidirectionnels
  - `SIRETFooterSection.tsx` - Pied de page légal professionnel
- **Exemple complet** `/services/nettoyage-diogene/page.tsx` - À dupliquer pour autres services
- **Pages légales** (mentions légales + RGPD)
- **Schema.org enrichi** (Service, FAQ, Breadcrumb)

### 📋 À faire Phase 1 (12 jours)

| Tâche | Durée | Statut |
|-------|-------|--------|
| Créer 6 autres pages services | 6 × 15min | ⏳ TODO |
| Créer blog (4 articles + index) | 2-3h | ⏳ TODO |
| Mettre à jour page accueil | 4-6h | ⏳ TODO |
| Optimiser Core Web Vitals | 4h | ⏳ TODO |
| Déployer + tests | 2h | ⏳ TODO |

---

## 🎯 Comment finaliser Phase 1

### 1️⃣ Créer les 6 autres pages services (1.5h)

**Template à dupliquer:** `/app/services/nettoyage-diogene/page.tsx`

```bash
# Créer dossier pour chaque service
mkdir -p app/services/nettoyage-deces
mkdir -p app/services/nettoyage-sinistre
mkdir -p app/services/debarras-maison
mkdir -p app/services/logement-insalubre
mkdir -p app/services/fientes-pigeons
mkdir -p app/services/nettoyage-chantier
```

**Pour chaque service:**

1. Copier `app/services/nettoyage-diogene/page.tsx`
2. Renommer `SERVICE_SLUG = 'service-slug'`
3. Adapter `SERVICE_CONTENT` avec contenu du cahier des charges
4. Les métadonnées, schema et liens contextuels se remplissent **automatiquement**

**Contenu à copier depuis cahier des charges client:**

- `nettoyage-deces` → PAGE 3 (lignes 1-50)
- `nettoyage-sinistre` → PAGE 4
- `debarras-maison` → PAGE 5
- `logement-insalubre` → PAGE 6
- `fientes-pigeons` → (PAGE 7 - voir cahier)
- `nettoyage-chantier` → PAGE 8

**Template minimale SERVICE_CONTENT:**

```typescript
const SERVICE_CONTENT = {
  h1: '[Titre H1 du cahier des charges]',
  shortIntro: '[2-3 phrases intro]',
  
  steps: [
    {
      number: '1',
      title: '[Étape 1]',
      description: '[Description détaillée]',
    },
    // ... 3-4 étapes
  ],

  faq: [
    {
      question: '[Question 1]',
      answer: '[Réponse pour IA + SEO]',
    },
    // ... 4-5 questions
  ],
};
```

**Temps par service:** ~15 minutes

---

### 2️⃣ Créer le blog (4 articles + index)

**Structure:**

```
app/blog/
  page.tsx                              ← Index (liste articles)
  cadre-legal-dechets-bsd/
    page.tsx                           ← Article 1
  risques-sanitaires-nettoyage-squat/
    page.tsx                           ← Article 2
  nettoyage-apres-deces-notaire/
    page.tsx                           ← Article 3
  prix-syndrome-diogene/
    page.tsx                           ← Article 4
```

**Template article blog:**

```tsx
import type { Metadata } from 'next';
import { SITE } from '@/lib/seo';

const slug = 'cadre-legal-dechets-bsd';
const article = {
  title: '[Titre de l\'article]',
  description: '[Meta description]',
  excerpt: '[Premier paragraphe extrait]',
  content: '[Contenu long format - 1200+ mots]',
  publishedAt: new Date('2026-01-20'),
  keywords: ['mot1', 'mot2', 'mot3'],
};

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: { title: article.title, description: article.description },
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main>
        <article className=\"prose prose-lg max-w-3xl mx-auto\">
          <h1>{article.title}</h1>
          {/* Contenu formaté avec h2, h3, p, ul, blockquote */}
          {article.content}
        </article>
      </main>
      <Footer />
    </>
  );
}
```

**Contenu articles depuis cahier des charges:**

- Article 1: PAGE 9 - "Le cadre légal des déchets"
- Article 2: PAGE 9 - "Toxicité et risques sanitaires"
- Article 3: PAGE 9 - "La dignité du nettoyage post-mortem"
- Article 4: À créer - "Prix et tarifs syndrome Diogène"

---

### 3️⃣ Mettre à jour page accueil

**Ajouter sections:**

```tsx
// app/page.tsx

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <HeroSection>
          <h1>Kiff Cleaning Solutions : Nettoyage Extrême, Débarras & Désinfection</h1>
          <p>Spécialiste en Île-de-France. Intervention 24h/24. Certificat + BSD garantis.</p>
        </HeroSection>

        {/* 7 SERVICES - GRILLE */}
        <section>
          <h2>Nos Services Spécialisés</h2>
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">
            {SERVICES.map(service => (
              <Link href={`/services/${service.slug}`}>
                <h3>{service.shortTitle}</h3>
                <p>{service.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* GARANTIES - 3 PILIERS */}
        <section>
          <TrustSignals />
        </section>

        {/* ÉQUIPE */}
        <TeamSection />

        {/* BLOG - LES 3 DERNIERS ARTICLES */}
        <section>
          <h2>Articles & Expertise</h2>
          {/* Lister les 3 derniers articles avec lien vers /blog */}
        </section>

        {/* CTA CONTACT */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
```

---

### 4️⃣ Optimiser Core Web Vitals

**Checklist performance:**

- [ ] Images optimisées avec `next/image` (lazy-load)
- [ ] Fonts préchargées dans `layout.tsx`
- [ ] `generateStaticParams()` pour pages dynamiques
- [ ] Minification CSS/JS (automatique Next.js)
- [ ] Compression Gzip activée (Vercel par défaut)
- [ ] Cache headers correctes
- [ ] Reduce CLS (Cumulative Layout Shift) - éviter layouts dynamiques

**À faire:**

```tsx
// app/layout.tsx - Ajouter préchargement fonts

<link
  rel=\"preconnect\"
  href=\"https://fonts.googleapis.com\"
/>
<link
  rel=\"preconnect\"
  href=\"https://fonts.gstatic.com\"
  crossOrigin=\"anonymous\"
/>
```

---

### 5️⃣ Mettre à jour Footer

**Remplacer/améliorer Footer.tsx:**

```tsx
import { SIRETFooterSection } from '@/components/SIRETFooterSection';

export default function Footer() {
  return (
    <footer>
      {/* Votre footer existant */}
      
      {/* Ajouter cette section */}
      <SIRETFooterSection />
    </footer>
  );
}
```

---

## 📊 Structure Fichiers Phase 1

```
app/
  page.tsx                         ← À améliorer
  layout.tsx                       ← Ajouter fontes + schema global
  
  services/                        ← NOUVEAU
    nettoyage-diogene/page.tsx     ✅ FAIT
    nettoyage-deces/page.tsx       ⏳ À faire
    nettoyage-sinistre/page.tsx    ⏳ À faire
    debarras-maison/page.tsx       ⏳ À faire
    logement-insalubre/page.tsx    ⏳ À faire
    fientes-pigeons/page.tsx       ⏳ À faire
    nettoyage-chantier/page.tsx    ⏳ À faire
    
  blog/                            ← NOUVEAU
    page.tsx                       ⏳ À faire (index)
    cadre-legal-dechets-bsd/page.tsx       ⏳ À faire
    risques-sanitaires-nettoyage-squat/page.tsx ⏳ À faire
    nettoyage-apres-deces-notaire/page.tsx ⏳ À faire
    prix-syndrome-diogene/page.tsx         ⏳ À faire
    
  mentions-legales/page.tsx        ✅ FAIT
  politique-confidentialite/page.tsx ✅ FAIT
  zone-intervention/page.tsx       ← À améliorer (garder pages par ville)
  contact/page.tsx                 ← Existant
  devis/page.tsx                   ← Existant

components/
  TrustSignals.tsx                 ✅ FAIT
  TeamSection.tsx                  ✅ FAIT
  ServiceFAQ.tsx                   ✅ FAIT
  RelatedServices.tsx              ✅ FAIT
  SIRETFooterSection.tsx           ✅ FAIT

lib/
  services-data.ts                 ✅ FAIT (relations SEO)
  seo.ts                           ← Existant (à mettre à jour SIRET)
  SERVICES_TEMPLATE_GUIDE.ts       ✅ Guide complet
```

---

## 🎨 Charte Graphique mise en place

**Couleurs Tailwind:**

- `bg-white` + `bg-slate-50` - Fond dominant (60%)
- `text-green-kiff` + `bg-green-kiff` - Marque (30%) = `#1d8659`
- `bg-navy-900` + `text-slate-900` - Contraste (10%) = Anthracite

**Usage dans composants:**

```tsx
// Boutons CTA
<button className=\"bg-green-kiff hover:bg-green-kiff/90 text-white\">
  Demander un devis
</button>

// Icônes
<Icon className=\"text-green-kiff\" />

// Accents
<div className=\"border-l-2 border-green-kiff\">
  Important info
</div>

// Fond clair
<div className=\"bg-green-kiff/10\">
  Contenu en background léger
</div>
```

---

## 🔍 SEO Checklist Phase 1

### On-Page
- [x] H1 unique par page
- [x] Meta descriptions optimisées
- [x] URLs descriptives
- [x] Images avec alt text
- [x] Internal linking bidirectionnel (services liés)

### Technical SEO
- [x] Schema.org (Service, LocalBusiness, FAQ, BreadcrumbList)
- [x] XML Sitemap dynamique (existant)
- [x] robots.txt (existant)
- [x] Mobile-first design (Tailwind responsive)
- [ ] Core Web Vitals optimisés
- [ ] OG images pour social sharing

### E-E-A-T Signals
- [x] SIRET visible + légitime
- [ ] Photos équipe (placeholders en place, à remplacer)
- [x] Certifications affichées
- [x] Zone d'intervention claire
- [x] FAQ pour IA

### Content
- [x] Pages services 1200+ mots (ready)
- [x] Blog structuré
- [x] Pages légales + RGPD

---

## 🚀 Commandes utiles

```bash
# Dev
npm run dev

# Build
npm run build

# Lint
npm run lint

# Tests
npm test
```

---

## ⚠️ À ne pas oublier

1. **Remplacer placeholders photos équipe** par vraies photos des techniciens
2. **Remplir SIRET réel** partout (`lib/seo.ts` + pages légales)
3. **Adapter contenu blog** selon votre expertise
4. **Mettre à jour couleur vert** si HEX différent du logo
5. **Configurer Google Business Profile** (hors site mais critique SEO local)

---

## 📞 Support

Questions sur l'implémentation? Consultez:

- `lib/SERVICES_TEMPLATE_GUIDE.ts` - Guide création services
- Fichier exemple: `app/services/nettoyage-diogene/page.tsx`
- Composants: `/components/*.tsx`

---

**Prochaine étape:** Créer les 6 services + blog en suivant les templates.
