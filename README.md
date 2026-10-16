# Manuela Edom — Psychomotricienne à Nantes

Site vitrine et ressource pour **Manuela Edom, psychomotricienne D.E.**, cabinet
paramédical, 2 rue d'Allonville, 44000 Nantes. Refonte complète de l'ancien site
WordPress, pensée pour le référencement (SEO), la visibilité dans les moteurs
de réponse (GEO) et — surtout — pour que **les gens la contactent**.

## Stack

- **Next.js 16** (App Router, Turbopack, `cacheComponents` + partial prefetching)
- **React 19**
- **Tailwind CSS v4** (jetons de design dans `src/app/globals.css`)
- **TypeScript**
- Polices : **Fraunces** (titres) et **Inter** (texte) via `next/font`

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint     # ESLint
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Coordonnées, adresse, horaires, tarifs, navigation | `src/lib/site.ts` (source unique de vérité) |
| Couleurs, typographie, espacements | `src/app/globals.css` (`@theme`) |
| Métadonnées globales (titre, OG, géo) | `src/app/layout.tsx` |
| Métadonnées d'une page | `pageMetadata(...)` dans la page concernée |
| Textes des pages | `src/app/<page>/page.tsx` |
| Articles du blog | `src/content/blog.ts` |
| Formulaire de contact (champs) | `src/components/contact-form.tsx` |
| Traitement du formulaire | `src/app/api/contact/route.ts` |
| Images | `src/assets/images/` |

Le texte de Manuela est conservé **mot pour mot**, avec sa voix, son écriture
inclusive (`adolescent.es`, `un.e`) et sa ponctuation française (`’`, `« »`).
Merci de ne pas le réécrire en langage marketing générique.

## Référencement — ce qui a été mis en place

- Un titre et une **méta description uniques par page**, une URL canonique, des
  balises Open Graph et Twitter cohérentes.
- **Données structurées JSON-LD** : `MedicalBusiness` (NAP, horaires, géo),
  `Person`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` générés par Next.
- **Image Open Graph** générée dynamiquement (`src/app/opengraph-image.tsx`).
- Flux **RSS** (`/rss.xml`) et fichier **`/llms.txt`** pour les moteurs de réponse.
- **Redirections 308** depuis les anciennes URL WordPress (voir `next.config.ts`)
  pour ne rien perdre du référencement acquis.
- Balises gérées : `fr-FR`, icônes, géolocalisation, `theme-color`.

## Formulaire de contact

Le formulaire valide les champs, filtre les robots (champ « pot de miel »),
limite le débit par IP, puis :

- **sans configuration** : écrit le message dans les logs du serveur ;
- **avec `RESEND_API_KEY`** : envoie un e-mail à Manuela (répondez directement au
  visiteur grâce à `reply-to`).

Copiez `.env.example` en `.env.local` et renseignez les variables pour activer
l'envoi réel. Voir `.env.example` pour le détail.

## Mise en ligne (Vercel)

1. Pousser le dépôt sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com) (détection automatique
   de Next.js).
3. Ajouter les variables d'environnement (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
   `CONTACT_FROM_EMAIL`).
4. Pointer le domaine `psychomotriciennenantes.fr` vers Vercel (changer les
   enregistrements DNS chez le registrar actuel).
5. Vérifier dans la Search Console le changement et soumettre le nouveau sitemap.

## À finaliser (informations manquantes)

Ces éléments sont marqués dans le site et doivent être complétés par Manuela :

- [ ] **Mentions légales** : numéro **SIRET** et numéro **ADELI / RPPS**.
- [ ] **Photos professionnelles** récentes d'elle (le site utilise pour l'instant
      ses images existantes ; elle enverra de vraies photos).
- [ ] **Fiche Google Business Profile** : à créer/optimiser (levier local majeur).
- [ ] **Domaine** : confirmer l'accès au registrar et au DNS.
- [ ] **Envoi des e-mails** du formulaire : créer la clé Resend (ou un service
      équivalent).
- [ ] Réseaux sociaux éventuels (Instagram, LinkedIn) à ajouter si souhaité.

## Note sur les images

Les tableaux de **Georgia O'Keeffe** qui ornaient l'ancienne identité visuelle
sont **protégés par le droit d'auteur** (l'artiste est morte en 1986) et n'ont
volontairement **pas** été repris. Le site s'appuie à la place sur des
traitements aquarelle/encres originaux et sur les photos de Manuela. Si elle
souhaite un univers visuel proche, il faudra des visuels libres de droits ou
créés sur mesure.
