# Manuela Edom — Psychomotricienne à Nantes

Site vitrine et ressource pour **Manuela Edom, psychomotricienne D.E.**, cabinet
pluridisciplinaire, 4 rue de la Mitrie, 44000 Nantes. Refonte complète de l'ancien site
WordPress, pensée pour le référencement (SEO), la visibilité dans les moteurs
de réponse (GEO) et — surtout — pour que **les gens la contactent**.

| | |
| --- | --- |
| **Site en ligne** | <https://psychomotricite-nantes.vercel.app> |
| **Domaine prévu** | `psychomotriciennenantes.fr` (hébergé chez WordPress.com — bascule DNS à faire, voir `docs/mise-en-ligne-domaine.md`) |
| **Dépôt** | privé — déploiement automatique Vercel à chaque `push` sur `main` |

**Contact** : 06 84 74 96 70 (appel ou SMS) ·
[medom@psychomotricite.com](mailto:medom@psychomotricite.com) ·
reçoit du lundi au vendredi · 47 € le suivi, 200 € le bilan (4 séances), séance de 40 minutes.

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
npm run build    # build de production (c'est aussi ce qui vérifie les types)
npm run lint     # ESLint
npm run audit    # audit du site local : titres, liens, hreflang, JSON-LD
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil, cartes de motifs, appel à l'action |
| `/psychomotricite` | Qu'est-ce que la psychomotricité, pour qui, FAQ |
| `/psychomotricite/[motif]` | 5 pages : douance-HQI-THQI, TDAH, anxiété-burn-out, troubles-dys, personne âgée |
| `/qui-suis-je` | Parcours et approche de Manuela |
| `/seances-et-tarifs` | Déroulé d'une séance, tarifs, FAQ |
| `/contact` | Formulaire, appel, SMS, plan d'accès |
| `/faq` | Questions fréquentes |
| `/blog` + `/blog/[slug]` | Articles et ressources |
| `/mentions-legales`, `/politique-de-confidentialite` | Pages légales |
| `/en` | Version anglaise |
| `404` | Page introuvable personnalisée |

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Coordonnées, adresse, horaires, tarifs, navigation | `src/lib/site.ts` (**source unique de vérité**) |
| Couleurs, typographie, espacements | `src/app/globals.css` (`@theme`) |
| Échelle de titres fluide (mobile) | `--text-display-1` à `--text-display-5` dans `globals.css` |
| Métadonnées globales (titre, OG, géo) | `src/app/layout.tsx` |
| Métadonnées d'une page | `pageMetadata(...)` dans la page concernée |
| Textes des pages | `src/app/<page>/page.tsx` |
| Articles du blog | `src/content/blog.ts` |
| Contenu des 5 pages « motifs » | `src/content/motifs.ts` |
| Formulaire de contact (champs, brouillon) | `src/components/contact-form.tsx` |
| Suggestion « autre langue » | `src/components/language-banner.tsx` |
| Images | `src/assets/images/` |
| Redirections et en-têtes de sécurité | `next.config.ts` |

Le texte de Manuela est conservé **mot pour mot**, avec sa voix, son écriture
inclusive (`adolescent.es`, `un.e`) et sa ponctuation française (`’`, `« »`).
Merci de ne pas le réécrire en langage marketing générique.

## Référencement (SEO) et GEO

- Un titre et une **méta description uniques par page**, une URL canonique, des
  balises Open Graph et Twitter cohérentes.
- **Données structurées JSON-LD** : `MedicalBusiness` (NAP, géo, tarifs ; pas
  d’horaires tant que les créneaux exacts ne sont pas confirmés),
  `Person`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`,
  `MedicalWebPage`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` générés par Next.
- **Image Open Graph** générée dynamiquement (`src/app/opengraph-image.tsx`).
- Flux **RSS** (`/rss.xml`), `/llms.txt` et `/llms-full.txt` pour les moteurs de
  réponse.
- **Redirections 308** depuis les anciennes URL WordPress (voir `next.config.ts`)
  pour ne rien perdre du référencement acquis.
- `robots.txt` laisse volontairement entrer les robots des IA (GPTBot,
  ClaudeBot, PerplexityBot…) : être cité par elles compte autant qu'être
  classé.
- En-têtes de sécurité + HSTS (`next.config.ts`), `poweredByHeader: false`.
- Vérification Google Search Console et Bing pilotée par variables
  d'environnement (voir plus bas) — pas de fichier à ajouter à la main.

La carte des mots-clés, page par page, est dans `docs/mots-cles.md`.

## Version anglaise

`/en` existe depuis le début, mais la langue n'est **jamais** déduite de la
région : Googlebot crawle depuis les États-Unis, et une redirection par IP
l'enverrait vers l'anglais, sortant tout le site français de l'index.

À la place :

- `hreflang` (`fr-FR`, `en`, `x-default`) déclaré dans les métadonnées ;
- une **suggestion de l'autre langue** (`src/components/language-banner.tsx`)
  proposée selon la langue du navigateur, une seule fois : au repos, c'est un
  onglet rond de 44 px dans le coin de l'écran, qui se déploie au survol, au
  focus ou au clic sans jamais recouvrir le texte ;
- `src/components/document-lang.tsx` pour que `/en` déclare bien `lang="en"` (la
  racine du site est en `lang="fr"` et Next.js n'autorise qu'une seule balise
  `<html>`).

## Mesure

Tous les outils sont **sans cookie**, donc aucun bandeau de consentement n'est
nécessaire — c'est cohérent avec la politique de confidentialité.

- **Umami** (recommandé) ou **Vercel Web Analytics** et **Speed Insights** :
  le choix se fait par variables d'environnement, sans toucher au code
  (`src/lib/analytics.ts`, `src/components/umami.tsx`). Les événements de
  conversion sont envoyés à tous les outils actifs, donc changer d'outil ne
  perd rien. La politique de confidentialité nomme automatiquement les
  outils réellement en service.
- **Suivi des conversions** (`src/components/analytics-events.tsx`) :
  `clic_telephone`, `clic_sms`, `clic_email`, `formulaire_ouvert` (avec le motif
  demandé). C'est ce qui permet de dire si le site génère des contacts, et pas
  seulement des visites.

## Automatisation

Deux workflows GitHub Actions :

- `.github/workflows/indexnow.yml` — prévient IndexNow (Bing, Yandex…) des URL
  modifiées, via `scripts/indexnow.mjs` et la clé publique
  `public/b86f372929945594186726d7e3d91cce.txt`. Ne fonctionnera qu'après la
  bascule DNS, mais rien à modifier d'ici là.
- `.github/workflows/seo-check.yml` — contrôle PageSpeed hebdomadaire.

## Formulaire de contact

Le formulaire **n'envoie rien par le site** : il ouvre l'application de
messagerie du visiteur avec le message pré-rempli (nom, e-mail, téléphone,
âge, motif, préférence de contact, message). Le visiteur l'envoie depuis sa
propre boîte, et la réponse arrive avec son adresse réelle.

C'est le plus simple et le plus robuste : aucun service d'envoi à configure,
aucun coût, aucune donnée qui transite par le site, et rien qui puisse
échouer en silence.

Le panneau qui suit l'ouverture de la messagerie reprend le message complet
à l'écran (copiable), l'adresse e-mail, le téléphone et le SMS — pour les
visiteurs dont la messagerie ne s'ouvre pas, ou qui préfèrent écrire au
numéro. Le corps pré-rempli est raccourci si l'URI `mailto:` dépasse la
limite des clients de messagerie (environ 2 000 caractères) : le texte entier
reste affiché, lui, jamais coupé.

## Variables d'environnement

Copiez `.env.example` en `.env.local`. Aucune n'est obligatoire pour démarrer :
chaque fonctionnalité s'active quand sa variable existe.

| Variable | Effet |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Balise de vérification Search Console |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Balise de vérification Bing Webmaster |
| `NEXT_PUBLIC_UMAMI_SRC` | URL du script Umami (Cloud ou auto-hébergé) |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Identifiant de site Umami |
| `NEXT_PUBLIC_ANALYTICS_VERCEL` | `off` pour ne pas charger Vercel Web Analytics |
| `NEXT_PUBLIC_SPEED_INSIGHTS` | `off` pour ne pas charger Vercel Speed Insights |

## Documents de travail

| Document | À quoi il sert |
| --- | --- |
| `docs/plan-seo-geo.md` | Feuille de route SEO + GEO, par phases |
| `docs/mots-cles.md` | Carte des mots-clés, un objectif par page |
| `docs/fiche-google-business.md` | Audit de la fiche Google et corrections à faire |
| `docs/outils-seo-gratuits.md` | Outils gratuits retenus (et ceux écartés, avec raisons) |
| `docs/mise-en-route-seo.md` | Ce qu'il reste à activer côté comptes |
| `docs/console-outils-gratuits.md` | Accès direct aux outils gratuits : suivi, mots-clés, audit |
| `docs/prompts-ia.md` | Contrôle trimestriel de la visibilité dans les moteurs de réponse |
| `docs/ux-ui-audit-2026-10-20.md` | Audit UX/UI et accessibilité, avec mesures et corrections |
| `docs/mise-en-ligne-domaine.md` | Runbook de bascule du domaine vers Vercel (étapes, qui fait quoi) |

## Déploiement (Vercel)

Le projet est déjà en ligne et se redéploie à chaque `push` sur `main`. Le
domaine `psychomotriciennenantes.fr` est, lui, hébergé chez WordPress.com :
c'est le DNS qu'il faut faire pointer vers Vercel. La procédure complète —
qui fait quoi, dans quel ordre, et comment revenir en arrière — est dans
`docs/mise-en-ligne-domaine.md`.

En bref :

1. Vercel : ajouter le domaine et le `www` (redirigé vers l'apex, qui est
   l'adresse canonique ; le code prévoit déjà ce renvoi).
2. WordPress.com : remplacer les serveurs de noms par ceux de Vercel
   (`ns1` / `ns2.vercel-dns.com`).
3. Search Console : vérifier le domaine et soumettre le nouveau sitemap.

Rien d'autre à configurer : le formulaire ouvre la messagerie du visiteur,
sans envoi par le site.

## À finaliser (informations manquantes)

Ces éléments sont marqués dans le site et doivent être complétés par Manuela :

- [ ] **Mentions légales** : numéro **SIRET** et numéro **ADELI / RPPS**.
- [x] **Portrait professionnel** de Manuela (photo : Fabrice Rault), intégré en
      couleur, détouré et recadré pour ne garder que le haut des mains.
- [ ] **Visuels complémentaires** : la photo de la façade du nouveau cabinet
      est attendue. Deux illustrations réalisées par une amie de Manuela sont
      également prévues : un moment de séance (médiation corporelle, matière,
      mouvement ou toucher) et une image d’écoute et de sensorialité (gros plan :
      mains, souffle, mouvement, texture). Un emplacement « visuel à venir »
      reste disponible pour une image de terrain.
- [ ] **Fiche Google Business Profile** : à compléter — l'audit détaillé et les
      textes prêts à copier sont dans `docs/fiche-google-business.md`.
- [ ] **Domaine** : les accès WordPress.com et Vercel sont confirmés ; la
      bascule suit `docs/mise-en-ligne-domaine.md`.
- [ ] Réseaux sociaux éventuels (Instagram, LinkedIn) à ajouter si souhaité.

## Note sur les images

Les tableaux de **Georgia O'Keeffe** qui ornaient l'ancienne identité visuelle
sont **protégés par le droit d'auteur** (l'artiste est morte en 1986) et n'ont
volontairement **pas** été repris. Le site s'appuie à la place sur des
traitements aquarelle/encres originaux et sur les photos de Manuela. Si elle
souhaite un univers visuel proche, il faudra des visuels libres de droits ou
créés sur mesure.

Les emplacements de visuels en attente affichent un **repère indicatif qui décrit
l’image à fournir** (façade, illustrations), jamais une image d'elle inventée.
Le portrait intégré est crédité à Fabrice Rault ; son cadrage conserve seulement
le haut des mains, comme demandé.
