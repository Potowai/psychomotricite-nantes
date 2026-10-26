# Modifs Manuela — plan de travail

Conversation WhatsApp du 26 octobre 2026. Objectif : tout livré, vérifié et
en ligne pour la bascule du **samedi 7 novembre 2026**.

## Ce que la conversation demande

| # | Demande | Traduction en travail |
| --- | --- | --- |
| 1 | Accueil : remplacer « Je suis Manuela Edom… » | Nouvelle accroche sous le titre |
| 2 | Enlever toute la partie ressources | Retrait du site, code conservé pour janvier |
| 3 | Psychomotricité : éviter la répétition | Phrase en texte normal + 4 mots en citation |
| 4 | Remplacer tous les tirets quadratins | Passe typographique sur tout le site |
| 5 | FAQ psychomotricité (adulte) : enlever la phrase sur la prescription | Retrait ciblé |
| 6 | Bandeau du bas : enlever la métropole | **Reformuler, pas supprimer** (accord Atelier Fiolleau) |
| 7 | Qui suis-je : le texte semble s'arrêter | Diagnostic visuel + correctif |
| 8 | Ajouter l'arabe et le roumain | 2 langues complètes, dont une en RTL |
| 9 | Prendre rendez-vous : enlever la prescription | Retrait ciblé |
| 10 | Quartier : nouvelle formulation | Partout où le quartier est cité |
| 11 | Cabinet accessible PMR | Page contact (+ données structurées) |
| 12 | Jours : lundi au jeudi | Partout, toutes langues |

Hors code, côté Manuela : prévenir les patient·es, Doctolib, fiche Google.
En attente : les illustrations (cette semaine), les articles (janvier/février).

## Décisions à trancher avant de coder

| | Sujet | Proposition |
| --- | --- | --- |
| D1 | Accroche d'accueil | « Psychomotricienne à Nantes, j'accompagne adolescent.es et adultes (et enfants sur demandes spécifiques). » Le second « à Nantes » de son message est retiré (doublon). |
| D2 | Métropole dans le pied de page | « Consultations au cabinet, à Nantes, accessibles depuis Rezé, Saint-Herblain, Orvault et Saint-Sébastien-sur-Loire. » Garde les villes pour le référencement, sans laisser croire à des déplacements. |
| D3 | Prescription | Retrait aux deux endroits demandés (FAQ psychomotricité, contact). Ailleurs : remplacer « obligatoire » par « nécessaire pour engager un bilan ou un suivi, mais pas pour un premier rendez-vous ». La page Séances & tarifs garde l'information administrative. |
| D4 | Arabe + roumain avant le 7 ? | Les deux, mais livraison additive : si les relectures ne sont pas prêtes le 5, on lance en FR/EN/ES et on ajoute AR/RO dans la semaine. |
| D5 | Horaires exacts | « Lundi au jeudi » suffit pour le site ; pour Google/Doctolib, il faut les heures (ex. 9 h – 19 h). |
| D6 | PMR | « Cabinet accessible PMR » suffit-il, ou faut-il préciser entrée de plain-pied, ascenseur, sanitaires ? |

---

## Ordre d'exécution

Le contenu d'abord, la typographie ensuite, les ressources après, les langues
en dernier : on ne traduit jamais un texte qu'on va réécrire.

| Quand | Lot |
| --- | --- |
| mar. 27 | Lot 1 — contenu FR |
| mer. 28 | Lot 1 — EN/ES, puis Lot 2 — typographie |
| jeu. 29 | Lot 3 — retrait des ressources, aperçu envoyé à Manuela |
| ven. 30 – mar. 3 | Lot 4a — roumain (traductions envoyées en relecture) |
| mer. 4 – jeu. 5 | Lot 4b — arabe + RTL |
| ven. 6 | Lot 5 — QA, gel, build, audit |
| sam. 7 | Bascule DNS (runbook existant) |

---

## Lot 0 — Cadre

- [x] 0.1 Branche `modifs-manuela-novembre`, un commit par lot.
- [x] 0.2 Captures de référence (accueil, psychomotricité, qui-suis-je,
      contact) en 390 px et 1440 px, avant modification.
- [x] 0.3 Vérifier que `npm run dev` tourne et que le build est vert avant
      de toucher au code.

**Fini quand** : l'état de départ est capturé et le build passe.

---

## Lot 1 — Contenu

### 1.1 Accueil : accroche

`src/i18n/copies/home.fr.ts` (puis `.en.ts`, `.es.ts`)

- Avant : « Je suis Manuela Edom, psychomotricienne à Nantes depuis 2016.
  J'accompagne adolescent.es et adultes, là où le corps raconte quelque chose
  de ce que l'on traverse. »
- Après : « Psychomotricienne à Nantes, j'accompagne adolescent.es et adultes
  (et enfants sur demandes spécifiques). »

On garde la convention typographique du site (`adolescent.es`), pas
`adolescent-es`. Le « depuis 2016 » reste dans les repères sous le texte.
Variante possible si elle veut garder la phrase poétique : ajouter en second
membre « Là où le corps raconte quelque chose de ce que l'on traverse. »

**Fini quand** : l'accroche ne contient plus « Je suis » ni deux fois « Nantes ».

### 1.2 Psychomotricité : définition et citation

`src/i18n/copies/psychomotricite.fr.ts`, bloc `intro`

- `body` : « La psychomotricité est une pratique qui a pour repère principal
  de considérer le corps dans toute sa complexité : »
- `quote` : « Existentielle, expressive, émotionnelle, identitaire. »

Aujourd'hui les quatre adjectifs figurent deux fois (dans le texte **et** dans
la citation). La citation ne garde que les quatre mots.

**Fini quand** : plus aucune répétition, la citation est bien un bloc distinct.

### 1.3 FAQ psychomotricité : adulte

`psychomotricite.fr.ts`, question « Est-ce que ça marche aussi pour un
adulte ? » : retirer « Une prescription médicale est en revanche obligatoire
pour engager le bilan ou le suivi. »

**Fini quand** : la réponse s'arrête à « Aucun diagnostic n'est nécessaire
pour venir. »

### 1.4 Contact : prescription

`src/i18n/copies/contact.fr.ts` (clé `form.prescription`) et
`src/screens/contact.tsx` (ligne 155) : supprimer la clé et son rendu.

**Fini quand** : plus aucune mention sous le titre du formulaire.

### 1.5 Prescription : cohérence du reste du site

Décision D3 appliquée. Fichiers concernés : `home.*.ts` (FAQ ordonnance),
`psychomotricite.*.ts` (encadré « profession paramédicale »),
`sessions.*.ts` (encadré Ordonnance), `contact.*.ts`, `faq.*.ts`,
`content/motifs*.ts`, `lib/llms.ts`, `app/llms-full.txt/route.ts`.

Formulation retenue partout où l'on garde l'information : « Une prescription
est nécessaire pour engager un bilan ou un suivi. Elle n'est pas demandée
lors d'un premier rendez-vous : nous voyons ensemble comment la récupérer. »

**Fini quand** : `grep -ri "obligatoire"` ne renvoie plus de mention de la
prescription dans les textes visibles.

### 1.6 Quartier : nouvelle phrase

Texte exact : « Situé à proximité du centre-ville, quartier Saint Donatien,
Dalby, Malakoff. »

Occurrences (hors blog, retiré au lot 3) : `home.*.ts` (2 par langue),
`contact.*.ts`, `faq.*.ts`, `lib/llms.ts`, `app/llms-full.txt/route.ts`.
Le libellé court « Quartier » des repères d'accueil reprend la même liste.

**Fini quand** : `grep -rn "Malakoff"` ne renvoie que la nouvelle phrase, et
plus aucun « Malakoff – Saint-Donatien ».

### 1.7 Jours : lundi au jeudi

`src/lib/site.ts` : `hours.days` (retirer Vendredi), `hours.display`,
`hours.note`. Puis `home.*.ts` (2), `contact.*.ts` (meta + horaires),
`faq.*.ts`, `sessions.*.ts`, `site-footer.tsx`, `lib/llms.ts`,
`app/llms-full.txt/route.ts`.

Si D5 donne des heures, ajouter `openingHoursSpecification` au JSON-LD
(aujourd'hui absent, volontairement).

**Fini quand** : `grep -rin "vendredi\|friday\|viernes"` = 0 dans les textes
visibles (hors blog retiré).

### 1.8 PMR

`src/i18n/copies/contact.fr.ts`, bloc `practice` : ajouter « Cabinet
accessible PMR. » sous l'adresse. Même information dans l'« Accès » du pied
de page si la place le permet. JSON-LD : `publicAccess` est déjà à `true`,
ajouter `amenityFeature` (accès fauteuil roulant) seulement si D6 confirme.

**Fini quand** : l'information est visible sur contact, sans surpromesse.

### 1.9 Pied de page : métropole reformulée

`src/components/site-footer.tsx`, `line2`, trois langues. Décision D2.

**Fini quand** : les quatre villes restent citées, sans « dans la métropole »
ni ambiguïté sur un déplacement à domicile.

### 1.10 Qui suis-je : la coupure après « contemporaines »

Reproduire la page en 390 px et 1440 px, mesurer ce qui se voit à l'arrêt du
scroll. Hypothèse : la grande bande sombre « Ce qui m'importe » qui suit
immédiatement le dernier paragraphe ressemble à un pied de page, surtout sur
mobile où l'on voit d'abord son vide de 4 rem.

Correctifs possibles, dans cet ordre :
1. réduire le padding haut de la bande sombre sur mobile ;
2. ajouter un repère de continuité en fin de bloc (« La suite : ce qui
   m'importe » + flèche) ;
3. à défaut, déplacer le bloc « La psychomotricité comme ouverte sur le
   monde » après la bande sombre pour casser l'effet de fin.

**Fini quand** : sur les deux largeurs, la page ne donne plus l'impression de
s'arrêter ; vérifié par capture avant/après.

### 1.11 Relecture de cohérence

Passer les 5 fiches motifs et Séances & tarifs : jours, quartier,
prescription, ton. Rien d'autre ne doit bouger.

---

## Lot 2 — Typographie

### 2.1 Règle de remplacement

259 tirets quadratins dans `src`, dont 203 dans les textes visibles
(36 fichiers de copie). Pas de remplacement mécanique : on choisit selon le
rôle.

| Rôle | Remplacement |
| --- | --- |
| Énumération, apposition, explication | deux-points |
| Incise, précision accessoire | virgule ou parenthèses |
| Rupture de sens | point, puis nouvelle phrase |
| Intervalle (« 47 € — 200 € ») | « à » |
| Séparateur d'interface (pied de page, fil d'Ariane, titres) | « · » |
| Titres SEO (`%s — Manuela Edom`) | « · » ou « \| » |

On ne touche pas : le tiret de vide du formulaire (`—` quand un champ n'est
pas rempli), les commentaires de code, les intervalles de prix en tiret demi-
cadratin.

### 2.2 Application

- [x] `src/i18n/copies/*` (36 fichiers, 3 langues)
- [x] `src/content/motifs*.ts`
- [x] `src/components/*` (pied de page, formulaire, carte, en-tête)
- [x] `src/lib/seo.ts`, `jsonld.tsx`, `llms.ts`
- [x] `src/app/llms*.txt`, métadonnées de pages

### 2.3 Garde-fou

Ajouter `scripts/check-typography.mjs` + `npm run check:typo` : échoue si un
« — » réapparaît dans les textes visibles. Branché dans le build si le coût
est nul.

**Fini quand** : `grep -ro "—" src/i18n src/content` = 0, relecture visuelle
des pages clés, et le garde-fou passe.

---

## Lot 3 — Retrait des ressources

### 3.1 Navigation

- `src/lib/i18n.ts` : retirer `resources` de `mainNav` et de `footerNav`.
  Le bloc « Ressources » du pied de page disparaît ; « Questions fréquentes »
  remonte dans la colonne « Le cabinet ».
- Vérifier l'en-tête mobile et la barre de contact.

### 3.2 Accueil

Retirer la section `resources` de `src/screens/home.tsx` (lignes 300-341) et
le bloc `resources` de `home.*.ts` (les trois langues).

### 3.3 Routes

Supprimer :
- `src/app/(fr)/blog/` (index + `[slug]`)
- `src/app/(en)/en/resources/`
- `src/app/(es)/es/recursos/`

### 3.4 Référencement

- `src/app/sitemap.ts` : retirer `pages.resources` et les articles.
- `src/app/rss.xml/route.ts` : supprimer la route et le lien.
- `src/app/llms.txt`, `llms-full.txt` : retirer la section Ressources.
- `src/lib/jsonld.tsx` : retirer `articleSchema` s'il n'est plus utilisé.
- `src/lib/i18n.ts` : garder `pages.resources`, `articlePaths` et
  `articlePath` pour janvier, mais plus aucun lien ne doit y mener.

### 3.5 Redirections

`next.config.ts` : `/blog/:path*` → `/`, `/en/resources/:path*` → `/en`,
`/es/recursos/:path*` → `/es`, en permanent. Plus `/feed` → `/` (le RSS
disparaît).

### 3.6 Conservation pour janvier

Ne pas supprimer : `src/content/blog*.ts`, `src/screens/resources.tsx`,
`src/i18n/copies/resources.*`, `src/i18n/copies/article.*`. Ajouter une note
en tête de `screens/resources.tsx` : « retiré du site le 26/10/2026, à
remettre en janvier ».

**Fini quand** : aucun lien interne vers `/blog`, les 3 anciennes URL
redirigent, le sitemap ne contient plus d'article, le build passe.

---

## Lot 4 — Roumain et arabe

### 4.1 Décisions techniques

| Sujet | Choix |
| --- | --- |
| Préfixes | `/ro/…` et `/ar/…` |
| Slugs roumains | en roumain : `/ro/psihomotricitate`, `/ro/despre-mine`, `/ro/consultatii-si-tarife`, `/ro/intrebari-frecvente`, `/ro/note-legale`, `/ro/confidentialitate` |
| Slugs arabes | en alphabet latin, translittérés, pour des liens partageables sans `%D8…` |
| Direction | `dir="rtl"` sur `<html>` pour l'arabe uniquement |
| Chiffres | chiffres arabes occidentaux (0-9) pour prix et téléphone |
| Polices | `latin-ext` ajouté à Inter et Fraunces (diacritiques roumaines ș ț ă â î) ; Noto Sans Arabic pour l'arabe |
| `hreflang` | `fr-FR`, `en`, `es`, `ro`, `ar`, `x-default` → français |

### 4.2 Charpente

- [x] `src/lib/i18n.ts` : `locales`, libellés, `htmlLang`, `ogLocale`,
      `hreflang`, `dir`, `completeLocales`, `pages`, `motifPaths` (5 fiches),
      `navLabels`, `footerNav`, `addressName`, `roleLabel`.
- [x] `site-shell.tsx` : lien d'évitement, pied de page, barre mobile.
- [x] `site-header.tsx` : libellés des 5 langues, menu qui tient à 5 entrées.
- [x] `language-switch.tsx` : 5 langues, noms en écriture native (Română,
      العربية).
- [x] `language-banner.tsx` : détection `navigator.language` pour ro/ar.

### 4.3 Traductions

13 pages par langue (8 pages fixes + 5 fiches motifs). Modules de copie : `home`, `about`, `psychomotricite`, `sessions`,
`contact`, `faq`, `legal`, `privacy`, `motif`, `not-found`.

- [x] Glossaire arrêté avant de traduire (psychomotricité, bilan, séance,
      douance, TSA, TDA-H, troubles dys, ordonnance, mutuelle).
- [x] Roumain : `*.ro.ts` + `content/motifs.ro.ts`.
- [x] Arabe : `*.ar.ts` + `content/motifs.ar.ts`.
- [ ] Traductions envoyées à Manuela pour relecture par des proches
      arabophones et roumanophones (fichier de relecture simple, phrase par
      phrase).

### 4.4 Routes

- [x] `src/app/(ro)/ro/…` : 13 pages + `layout.tsx` + `not-found` +
      `opengraph-image` + `llms.txt`.
- [x] `src/app/(ar)/ar/…` : idem, avec `dir="rtl"`.

### 4.5 RTL (arabe)

- [x] Propriétés logiques (`ms-`/`me-`, `ps-`/`pe-`, `start`/`end`) à la
      place de `ml-`/`mr-`, `left`/`right`, `text-left`.
- [x] `letter-spacing` remis à 0 sur les textes arabes (les eyebrows à
      0.18em cassent la liaison des lettres).
- [x] Flèches et chevrons retournés ; fils d'Ariane inversés.
- [x] Téléphone, e-mail, prix et adresse en `dir="ltr"` dans un contexte RTL.
- [x] Carte Leaflet, formulaire, menu de langue, barre mobile vérifiés.
- [x] Hauteur de ligne augmentée pour l'arabe.

### 4.6 Référencement

- [x] Métadonnées traduites (title, description, Open Graph).
- [x] `alternatesFor` sur 5 langues, réciproques.
- [x] `sitemap.ts` : 5 langues.
- [x] `llms.txt` et `llms-full.txt` : 5 langues.
- [x] JSON-LD : `knowsLanguage` = fr, en, es, ro, ar.
- [x] `robots.ts` inchangé.

**Fini quand** : les 5 langues sont complètes, aucune page ne renvoie 404,
aucune chaîne non traduite, `dir` correct, hreflang réciproque, captures RTL
relues en 390 px et 1440 px.

---

## Lot 5 — QA et bascule

- [x] `npm run lint` et `npm run build` verts.
- [x] `npm run audit` : toutes les pages des 5 langues, 0 erreur.

Aperçu déployé le 26 octobre :
`https://psychomotricite-nantes-manuela.vercel.app`
(protégé par Vercel Authentication ; le lien de contournement est envoyé
séparément, il ne doit pas être commité). Audit de l'aperçu : 55 pages,
0 erreur, 55 avertissements non bloquants.

Fichier de relecture RO/AR : `docs/relecture-ro-ar.md`.
- [x] Contraste et tailles de cible sur les blocs modifiés.
- [ ] Aperçu Vercel envoyé à Manuela et à ses ami·es, retour consolidé
      (une seule liste, pas de messages épars).
- [ ] Runbook `docs/mise-en-ligne-domaine.md` : domaine, `www`, DNS.
- [ ] Search Console, sitemap, IndexNow.
- [ ] Fiche Google : horaires lundi-jeudi, attribut PMR, photos.
- [ ] Après bascule : Umami, 404, redirections, premières demandes.

---

## Lot 6 — En attente

### 6.1 Illustrations (cette semaine)

Emplacements à remplir : accueil (section ressources, supprimée), page
psychomotricité (une image d'écoute et de sensorialité), qui-suis-je (atelier,
groupe, matière), contact (façade du cabinet).

**Règle de lancement** : aucune mention « Illustration à venir » ne doit être
visible le 7 novembre. Si les visuels ne sont pas là, on met une photo
existante (`cabinet-exterieur.jpg`, `plan-quartier.jpg`) ou on retire le bloc.

- [x] Blocs remplacés par `corps-mains.jpg` (psychomotricité),
      `argile-mains.jpg` (qui-suis-je) et `cabinet-exterieur.jpg` (contact).
      Plus aucun « Illustration à venir » dans le rendu.

### 6.2 Articles (janvier/février)

Reprise du code conservé au lot 3 : routes, navigation, sitemap, RSS. Le
travail éditorial reste à faire.

### 6.3 Côté Manuela

Prévenir les patient·es avant le 7, Doctolib, fiche Google, avis.

---

## Vu au passage, hors demande

À trancher séparément, pas dans ce plan :
- ES : « profesión paramédical » → « paramédica ».
- ES : « balance » pour le bilan psychomoteur, à remplacer par « evaluación
  psicomotriz » si elle valide.
- Le commentaire du JSON-LD dit que les horaires ne sont pas connus ; il
  faudra le mettre à jour si D5 donne des heures.
