# Plan SEO & GEO — psychomotriciennenantes.fr

Objectif : passer d'une invisibilité locale (moins de 10 visites/jour) à la première
place sur « psychomotricienne Nantes » et être citée par les moteurs IA (ChatGPT,
Perplexity, Google AI Overviews, Copilot).

Deux leviers distincts :

- **SEO** = être trouvée dans les résultats classiques (Google, Bing).
- **GEO** (Generative Engine Optimization) = être comprise et citée par les IA.

---

## 0. Déjà en place (fondations techniques)

- Next.js 16, rendu statique, hébergé sur Vercel (déploiement auto depuis GitHub).
- Titres + descriptions uniques, canoniques, Open Graph / Twitter, `metadataBase`.
- `sitemap.xml`, `robots.txt`, `rss.xml`, `manifest.webmanifest`, `llms.txt`.
- Données structurées : `MedicalBusiness` (avec géo-coordonnées, adresse et tarifs ;
  pas d’horaires tant que les créneaux exacts ne sont pas confirmés),
  `Person`, `WebSite`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`.
- 308 depuis toutes les anciennes URLs WordPress (préserve les liens et le jus SEO).
- En-têtes de sécurité, images optimisées via `next/image`.
- 8 pages + 4 articles de blog rédigés dans sa voix.

---

## 1. Bloquants à lever d'abord (dépend de Manuela / du domaine)

| # | Tâche | Qui | Pourquoi c'est bloquant |
|---|-------|-----|-------------------------|
| 1.1 | Basculer le DNS de `psychomotriciennenantes.fr` vers Vercel | Alexis (accès du registraire) | Le site est en ligne sur `psychomotricite-nantes.vercel.app` mais pas encore sur son vrai domaine |
| 1.2 | Déclarer `psychomotriciennenantes.fr` comme domaine principal + rediriger `www` | Moi | Évite le contenu dupliqué |
| 1.3 | Fournir **SIRET** et **ADELI / RPPS** | Manuela | Obligatoire pour les mentions légales et indispensable pour les annuaires |
| 1.4 | Fournir les **photos** (4 emplacements « à fournir » restants ; portrait reçu) | Manuela | Les photos réelles améliorent le taux de contact et la confiance |
| 1.5 | **Optimiser** la fiche **Google Business Profile** existante (accès gestionnaire à confirmer) | Manuela + Alexis | **Le levier n°1** pour « psychomotricienne Nantes » : la fiche existe déjà, mais une fiche jamais retravaillée laisse la plupart des gains sur la table |
| 1.6 | Clé **Resend** (ou autre) pour que le formulaire envoie vraiment les e-mails | Alexis | Sans elle, les messages ne partent pas |

---

## 2. Phase 1 — SEO local (plus gros impact, à faire en premier)

Le SEO local vit à 80 % hors du site.

1. **Google Business Profile**
   - Catégorie principale : **Psychomotricien** — elle existe et est déjà en
     place sur la fiche. Rien à changer de ce côté.
   - Adresse 4 rue de la Mitrie, 44000 Nantes ; téléphone ; site ; horaires **du
     lundi au vendredi** ; zone desservie ; lien « Prendre rendez-vous » vers `/contact`.
   - Description rédigée à partir de ses propres mots (pas de copier-coller).
   - 10+ photos (cabinet, façade, ambiance, en-tête) → dès qu'elle les fournit.
   - Poster 1 actualité/mois ; répondre aux questions (section Q&R).
2. **Avis Google** — le facteur #2 après la fiche.
   - Mettre en place une demande d'avis systématique (QR code / lien court en fin de suivi).
   - Objectif : 10–15 avis la première année, avec des mots-clés naturels (« pour mon ado »,
     « douance »). Ne jamais acheter d'avis.
3. **Citations / annuaires (NAP identique partout)**
   - PagesJaunes, Bing Places, Apple Business Connect.
   - Annuaires paramédicaux : Resalib, Medoucine, Annuaire-Thérapeutes, annuaires
     de psychomotricité, annuaires locaux nantais.
   - Le cabinet pluridisciplinaire partagé (4 rue de la Mitrie) → se faire citer sur
     leur page « l'équipe ».
   - **fabuleuxmouvement.fr** → lien croisé réciproque (déjà lié depuis le nouveau site).
4. **Schema local enrichi** : ajouter `sameAs` (GBP, réseaux) et, une fois les avis en
   ligne, `aggregateRating` + `Review`.

---

## 3. Phase 2 — Contenu (SEO classique)

- **Cartographie de mots-clés** (page ↔ intention ↔ requête) :

| Cible | Page |
|-------|------|
| psychomotricienne / psychomotricité Nantes | `/` |
| qu'est-ce que la psychomotricité, décret, profession | `/psychomotricite` |
| douance HQI/THQI psychomotricité | `/blog/…douance…` + future page dédiée |
| bilan psychomoteur, comment ça se passe | `/blog/le-bilan-psychomoteur` |
| séances, tarifs, remboursement mutuelle/CPAM/MDPH | `/seances-et-tarifs` |
| anxiété, burn out, passer par le corps | article + page dédiée |
| psychomotricité adulte Nantes | `/blog/psychomotricite-adulte-nantes` |
| cabinet, accès, transports | `/contact` |

- **Pages « motif » dédiées** (actuellement de simples cartes sur l'accueil) : une page
  par motif = une page par requête. Ex. `/psychomotricite/douance-hqi-thqi`,
  `/psychomotricite/tdah`, `/psychomotricite/anxiete-burn-out`,
  `/psychomotricite/troubles-dys`, `/psychomotricite/personne-agee`.
- **Blog** : 2 à 4 articles/mois, orientés longue traîne et questions réelles. Garder sa
  voix (pas de contenu générique).
- **Maillage interne** en silo (accueil → motifs → articles → contact).
- **E-E-A-T** : bio détaillée, diplôme d'État, formations données, années d'expérience,
  dates sur les articles (déjà présent) → renforce la confiance Google **et** IA.
- **FAQ** : enrichir régulièrement (elle est déjà riche) + garder le `FAQPage`.

---

## 4. Phase 3 — GEO (être citée par les IA)

- **`llms.txt`** (fait) → ajouter un **`llms-full.txt`** avec le contenu complet.
- **Contenu « answer-first »** : chaque page commence par une réponse claire et
  autoportante (« Un psychomotricien est… », « Une séance dure environ 40 minutes… »).
  Les IA recopient ces phrases.
- **Faits citables** : tarifs, durée, public, langues, adresse, horaires — en phrases
  simples et vérifiables.
- **Autoriser les crawlers IA** dans `robots.txt` (GPTBot, OAI-SearchBot, ChatGPT-User,
  PerplexityBot, ClaudeBot, Google-Extended) : on *veut* être citée. À valider avec elle.
- **Cohérence d'entité** : exactement la même identité (nom, métier, adresse, téléphone)
  partout — site, GBP, annuaires, réseaux. Les IA recoupent les sources.
- **Mentions tierces** : presse locale, associations, écoles, le cabinet partagé,
  fabuleuxmouvement.fr. Chaque mention est un signal d'autorité.
- **Schema approfondi** : `MedicalWebPage`, `Service` avec `areaServed: Nantes`,
  `Physician`/`Person` avec `sameAs` vers toutes ses identités.

---

## 5. Phase 4 — Technique & performance

- **Version anglaise** — différenciateur fort : elle reçoit en anglais. Une page
  « English » cible *psychomotor therapist Nantes* / *English-speaking therapist Nantes*
  (hreflang). Peu de concurrents le font.
  - La langue n'est **jamais** déduite de l'IP ni de la région : Googlebot crawle
    depuis les États-Unis, une redirection par région l'enverrait vers `/en` et
    sortirait tout le site français de l'index. Le signal utilisé est la langue du
    navigateur (`Accept-Language` / `navigator.languages`), et il ne sert qu'à
    **proposer** l'autre version dans une bannière refermable
    (`src/components/language-banner.tsx`). Jamais de redirection.
- **Core Web Vitals** : audit LCP / CLS / INP (Lighthouse), polices, images.
- **Accessibilité** : contrastes, navigation clavier, `alt` — bon pour l'humain et Google.
- **Hygiène** : liens morts, orphelines, chaînes de redirections, 404.
- **HTTPS/HSTS**, domaine canonique, HSTS via Vercel.

---

## 6. Phase 5 — Mesure & itération

- **Google Search Console** + **Bing Webmaster Tools** : vérifier, soumettre le sitemap,
  surveiller requêtes / impressions / CTR / position.
- **Analytics respectueux de la vie privée** (Plausible ou Umami, sans cookie) pour
  rester cohérent avec la politique de confidentialité.
- **Suivi des conversions** : événement `contact:submit` (déjà émis par le formulaire) +
  clics tel/SMS.
- **Suivi de positions** sur les mots-clés cibles.
- **Cadence** : bilan mensuel, correction des titres à faible CTR, 1–2 nouveaux contenus.

---

## Ordre d'exécution recommandé

1. Phase 1 (bloquants) : DNS + GBP — **sans ça, le reste plafonne**.
2. Phase 2 (avis + annuaires) — le plus gros gain de visibilité locale.
3. Phase 3 (contenu : pages motifs + blog) — la croissance dans la durée.
4. Phase 4 (GEO) — cheap à faire, on le glisse en parallèle.
5. Phase 5 (technique + mesure) — continu.
