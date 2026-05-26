# ✅ Checklist Rapide Phase 1 - À faire après

## 📌 Fichiers/Dossiers créés aujourd'hui

### ✅ Configuration
- [x] `tailwind.config.js` - Charte 60/30/10 mise à jour (vert #1d8659)
- [x] `lib/services-data.ts` - Données centralisées + relations SEO
- [x] `IMPLEMENTATION_GUIDE.md` - Guide complet (à lire!)

### ✅ Composants (réutilisables)
- [x] `components/TrustSignals.tsx` - SIRET + certifications
- [x] `components/TeamSection.tsx` - Équipe avec placeholders
- [x] `components/ServiceFAQ.tsx` - FAQ pour IA + schema.org
- [x] `components/RelatedServices.tsx` - Liens contextuels
- [x] `components/SIRETFooterSection.tsx` - Pied de page légal
- [x] `components/HeroWithTrust.tsx` - Hero élégant avec E-E-A-T

### ✅ Pages (services + légales)
- [x] `app/services/nettoyage-diogene/page.tsx` - Template complet (À dupliquer)
- [x] `app/mentions-legales/page.tsx` - Conforme obligation légale
- [x] `app/politique-confidentialite/page.tsx` - RGPD complet

### ✅ Guides
- [x] `lib/SERVICES_TEMPLATE_GUIDE.ts` - Comment créer autres services

---

## 🔴 À faire immédiatement (Semaine 1)

### 1️⃣ Créer les 6 autres pages services (1.5h)

**Copier cette structure pour chaque service:**

```bash
cp -r app/services/nettoyage-diogene app/services/nettoyage-deces
cp -r app/services/nettoyage-diogene app/services/nettoyage-sinistre
# ... etc
```

**Adapter ces 3 lignes dans chaque `page.tsx`:**

```typescript
// Ligne 1: Changer le slug
const SERVICE_SLUG = 'nettoyage-deces';

// Ligne 2-3: Copier contenu du cahier des charges + adapter FAQ
const SERVICE_CONTENT = {
  h1: '[Du cahier des charges]',
  shortIntro: '[...]',
  steps: [ ... ],
  faq: [ ... ],
};
```

**Temps par service:** 15 minutes
**Services à créer (dans cet ordre):**

- [ ] `nettoyage-deces` (PAGE 3 cahier)
- [ ] `nettoyage-sinistre` (PAGE 4)
- [ ] `debarras-maison` (PAGE 5)
- [ ] `logement-insalubre` (PAGE 6)
- [ ] `fientes-pigeons` (PAGE 7)
- [ ] `nettoyage-chantier` (PAGE 8)

✅ **Checklist:** Après chaque service créé, vérifier:
- [ ] Route accessible: `http://localhost:3000/services/[slug]`
- [ ] Métadonnées OK
- [ ] FAQ affichée
- [ ] Équipe + Trust signals affichés
- [ ] Services liés affichés

---

### 2️⃣ Créer les articles blog (2-3h)

**Structure à créer:**

```
app/blog/
  page.tsx ← Index (liste tous articles)
  cadre-legal-dechets-bsd/page.tsx
  risques-sanitaires-nettoyage-squat/page.tsx
  nettoyage-apres-deces-notaire/page.tsx
  prix-syndrome-diogene/page.tsx
```

**Template article (copier-coller):**

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '[Titre article]',
  description: '[Meta description]',
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main className=\"prose prose-lg max-w-3xl mx-auto py-12 px-4\">
        <h1>[Titre]</h1>
        <p>[Contenu du cahier des charges - PAGE 9]</p>
        {/* Structurer en h2, h3, p, ul, blockquote */}
      </main>
      <Footer />
    </>
  );
}
```

**Contenu à copier (cahier des charges PAGE 9):**

- Article 1: "Le cadre légal des déchets"
- Article 2: "Toxicité et risques sanitaires"
- Article 3: "La dignité du nettoyage post-mortem"
- Article 4: "Prix syndrome Diogène" (À créer avec votre expertise)

✅ **Checklist:**
- [ ] Chaque article accessible: `http://localhost:3000/blog/[slug]`
- [ ] Index blog affiche tous les articles avec preview
- [ ] Links vers articles depuis services concernés

---

### 3️⃣ Mettre à jour page accueil (4-6h)

**Ajouter ces sections (dans l'ordre):**

```tsx
// app/page.tsx

import { HeroWithTrust } from '@/components/HeroWithTrust';
import { TrustSignals } from '@/components/TrustSignals';
import { TeamSection } from '@/components/TeamSection';
import { RelatedServices } from '@/components/RelatedServices'; // Non, n'ajouter que 7 liens services
import { getAllServices } from '@/lib/services-data';

export default function HomePage() {
  const services = getAllServices();

  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO avec E-E-A-T */}
        <HeroWithTrust
          title=\"Kiff Cleaning Solutions: Nettoyage Extrême, Débarras & Désinfection Biocide\"
          subtitle=\"Disponibles 24h/24 - 7j/7 - Île-de-France\"
          description=\"Spécialiste du syndrome de Diogène, nettoyage post-mortem et insalubrité majeure. Certificat de désinfection + BSD garantis.\"
          primaryCta={{ label: \"Demander un devis gratuit\", href: \"/devis\" }}
          secondaryCta={{ label: \"Appeler maintenant\", href: \"tel:+33770108339\" }}
        />

        {/* 2. GRILLE 7 SERVICES */}
        <section className=\"py-16 px-4 bg-white\">
          <div className=\"max-w-6xl mx-auto\">
            <h2 className=\"text-3xl font-bold mb-12 text-center\">Nos Services Spécialisés</h2>
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
              {services.map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <h3 className=\"font-bold text-lg mb-2\">{service.shortTitle}</h3>
                  <p className=\"text-slate-600 text-sm\">{service.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. GUARANTIES - 3 PILIERS */}
        <TrustSignals />

        {/* 4. ÉQUIPE */}
        <TeamSection />

        {/* 5. BLOG - DERNIER ARTICLE */}
        <section className=\"py-16 px-4 bg-slate-50\">
          <h2>Nos Derniers Articles</h2>
          {/* Afficher 3 derniers articles avec date + extrait */}
        </section>

        {/* 6. CTA FINAL */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
```

✅ **Checklist:**
- [ ] Page accueil affiche tous les services
- [ ] Liens vers services fonctionnent
- [ ] TrustSignals visible
- [ ] Équipe visible
- [ ] Blog integré
- [ ] Mobile responsive OK

---

### 4️⃣ Remplacer placeholders photos équipe (ASAP)

**À faire:** Fournir 3 photos professionnelles de votre équipe

**Remplacer dans `components/TeamSection.tsx`:**

```tsx
const DEFAULT_TEAM: TeamMember[] = [
  {
    name: 'Réal Name 1',
    role: 'Technicien Certifié Biocides',
    imageUrl: 'https://cdn.kiffcleaning.com/equipe-1.jpg', // ← URL réelle
    description: 'Description du technicien...',
  },
  // ... plus 2 autres
];
```

---

### 5️⃣ Remplir SIRET réel partout

**À faire:** Remplacer "À remplir" par votre numéro SIRET

**Endroits à mettre à jour:**

1. `lib/seo.ts` - Ajouter SIRET à SITE object
2. `app/mentions-legales/page.tsx` - Ligne ~45 (SIRET)
3. `components/TrustSignals.tsx` - Ligne ~25 (SIRET)
4. `components/SIRETFooterSection.tsx` - Ligne ~40 (SIRET)

```typescript
// lib/seo.ts - AJOUTER
export const SITE = {
  // ... existing
  siret: '12345678901234',  // ← Votre SIRET
};
```

---

### 6️⃣ Mettre à jour le Footer

**À faire:** Importer `SIRETFooterSection` dans `Footer.tsx`

```tsx
import { SIRETFooterSection } from '@/components/SIRETFooterSection';

export default function Footer() {
  return (
    <footer>
      {/* Votre footer actuel */}
      
      {/* Ajouter cette ligne */}
      <SIRETFooterSection />
    </footer>
  );
}
```

---

## 🟢 À faire Semaine 2 (Optimisations)

### 7️⃣ Core Web Vitals

**Checklist performance:**

- [ ] Images optimisées (next/image lazy-load)
- [ ] Fonts préchargées
- [ ] Test Lighthouse score > 90
- [ ] Test Mobile Google PageSpeed
- [ ] Test Desktop Google PageSpeed

**Test:**
```bash
npm run build
npm run start
# Ouvrir https://pagespeed.web.dev/
```

---

### 8️⃣ Tests

- [ ] Tester tous les liens (internal + external)
- [ ] Vérifier meta descriptions
- [ ] Vérifier Open Graph (social sharing)
- [ ] Tester formulaires (devis + contact)
- [ ] Vérifier schema.org avec https://schema.org/validator/
- [ ] Test responsive (mobile, tablet, desktop)

---

### 9️⃣ Déploiement

```bash
git add .
git commit -m \"Phase 1: Services + Blog + Pages légales\"
git push origin main
# Vercel déploie auto
```

---

## 📊 Résumé Temps Restant

| Tâche | Temps | Status |
|-------|-------|--------|
| 6 pages services | 1.5h | ⏳ |
| Blog (4 articles + index) | 2-3h | ⏳ |
| Accueil améliorée | 4-6h | ⏳ |
| Remplacer photos équipe | 1h | ⏳ |
| Remplir SIRET | 0.5h | ⏳ |
| Core Web Vitals | 4h | ⏳ |
| Tests + déploiement | 2h | ⏳ |
| **TOTAL** | **~15-17h** | ⏳ |

**Estimé: 2 jours de dev concentré = Phase 1 complète** ✅

---

## 🎯 Prochaines étapes Phase 2 (optionnel)

Après Phase 1 stable:

1. Google Business Profile (SEO local critique)
2. Google Analytics 4 + Search Console
3. Ads Google Local Services
4. Structured data enrichment (Review, AggregateRating)
5. Intégration Calendly pour rendez-vous
6. Blog automation (RSS, mail digest)

---

## 💡 Questions fréquentes

**Q: Combien de temps pour tout?**
R: Avec contenu fourni = 2-3 jours maximum. Vous êtes à 70% du travail technique ✅

**Q: Faut-il modifier le design?**
R: Non. La charte 60/30/10 respecte le cahier des charges. Il faut juste ajouter du contenu.

**Q: Et si j'ai besoin d'aide?**
R: Consultez `IMPLEMENTATION_GUIDE.md` + `lib/SERVICES_TEMPLATE_GUIDE.ts`

**Q: Le SEO ça marche vraiment?**
R: Oui. Architecture + Schema + E-E-A-T = résultat mesurable dans 2-3 mois.

---

**🚀 À vous de jouer! Commencez par les 6 services.**
