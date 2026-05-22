# Kiff Cleaning Solutions — Site Next.js

Site web optimisé SEO & GEO pour une entreprise de nettoyage extrême en Île-de-France.

## 🚀 Installation

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build de production
```

## 📁 Structure

```
app/
├── page.tsx                    → Homepage complète
├── layout.tsx                  → Layout global + JSON-LD LocalBusiness
├── sitemap.ts                  → Sitemap XML auto-généré
├── robots.ts                   → robots.txt
├── services/
│   ├── page.tsx                → Listing services
│   └── [slug]/page.tsx         → Pages service individuelles
├── zones/
│   ├── page.tsx                → Listing zones Île-de-France
│   └── [ville]/page.tsx        → Pages par ville (SEO local)
├── blog/
│   ├── page.tsx                → Listing articles
│   └── [slug]/page.tsx         → Article individuel
└── devis/page.tsx              → Formulaire devis

components/
├── Navbar.tsx
├── Footer.tsx
└── CtaBanner.tsx

lib/
└── seo.ts                      → Config centrale : SITE, ZONES, SERVICES, schemas
```

## 🔍 SEO intégré

### Technique
- ✅ `generateMetadata()` dynamique par page (title, description, og, canonical)
- ✅ JSON-LD Schema.org : `LocalBusiness`, `Service`, `FAQPage`, `Article`
- ✅ Sitemap XML auto-généré via App Router (`/sitemap.xml`)
- ✅ `robots.txt` configuré
- ✅ `next/image` avec attributs alt descriptifs
- ✅ Balises `geo.*` pour le référencement local

### GEO (Local SEO)
- ✅ Pages dédiées par ville : `/zones/[ville]`
- ✅ NAP cohérent (Nom, Adresse, Téléphone) dans le footer sur toutes les pages
- ✅ `areaServed` dans le schema LocalBusiness
- ✅ Contenu unique par zone (titre, H1, texte localisés)
- ✅ Maillage interne villes voisines

### GEO (Generative Engine Optimization — IA)
- ✅ FAQ structurée avec réponses complètes (FAQPage schema)
- ✅ Textes rédigés en langage naturel, répondant aux questions directes
- ✅ `speakable` possible (extension future)
- ✅ E-E-A-T : mentions certifications, assurances, protocoles

## 📍 Zones couvertes
18 villes sur 8 départements : 75, 92, 93, 94, 77, 78, 91, 95

## ⚙️ Configuration

Mettre à jour `lib/seo.ts` avec les vraies valeurs :
- `SITE.phone` / `SITE.phoneRaw`
- `SITE.email`
- `SITE.url`
- `SITE.address`
- `SITE.geo` (coordonnées GPS)

## 🌐 Déploiement

```bash
# Vercel (recommandé)
vercel deploy

# Ou build statique
npm run build
```

## 📦 Dépendances clés
- Next.js 14 (App Router)
- Tailwind CSS
- Lucide React (icônes)
- next-sitemap (sitemap de post-build optionnel)
