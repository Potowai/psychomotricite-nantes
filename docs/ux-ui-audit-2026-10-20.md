# Audit UX/UI — Manuela Edom, psychomotricienne à Nantes

**Périmètre :** site de production `https://psychomotricite-nantes.vercel.app`
**Date :** 20 octobre 2026
**Viewports :** 1440 × 1000 et 390 × 844
**Pages :** accueil, Qui suis-je, Séances & tarifs, Contact, La psychomotricité, Ressources, FAQ, English
**Outil :** skill `ux-ui-audit` (uxbyissa/ux-ui-audit v1.0.0, MIT), installé dans
`~/.config/opencode/skills/ux-ui-audit`. Les mesures viennent des probes
`probe-core`, `probe-heuristics`, `probe-perception`, `probe-focus`,
`probe-routes` et de mesures géométriques complémentaires dans Chromium.

## Résumé

L’ossature est solide : routes, focus, étiquettes de formulaire et responsive
sont propres. Les écarts les plus visibles étaient concentrés dans les grilles
de cartes, dans deux passages sans respiration, et sur l'affichage mobile, où
les titres étaient rognés. Quatorze corrections ont été apportées, en trois
passes.

| Priorité | Constat | État |
|---|---|---|
| Majeur | Grille de 5 cartes laissant une cellule vide (accueil et page Psychomotricité) | Corrigé |
| Majeur | Colonne droite de Séances & tarifs : cartes collées, gap de 0 px | Corrigé |
| Moyen | Bandeau Contact collé au hero, sans padding vertical | Corrigé |
| Accessibilité | Étiquettes d’articles à 4,48:1 (seuil 4,5:1) | Corrigé |
| Accessibilité | Étiquette « Transports » à 4,22:1 (seuil 4,5:1) | Corrigé |
| Confort | Liens de navigation à 17 px de haut, footer à 15–20 px | Corrigé |
| Rythme | 96 px de marge vide entre le CTA et le footer | Corrigé |
| Majeur | Formulaire : une seule alerte globale, aucune erreur par champ | Corrigé |
| Majeur | Bannière de langue en pleine largeur, par-dessus le texte | Corrigé |
| Moyen | Cadre de la carte blanc tant que les tuiles ne chargent pas | Corrigé |
| Majeur | Titres rognés sous 414 px, documents plus larges que l'écran | Corrigé |
| Majeur | Encadrés d'illustration coupant leur légende sur mobile | Corrigé |

## Constats détaillés

### 01 · Majeur · Accueil et Psychomotricité — une carte manque à l’appel

Les deux grilles affichent 5 cartes dans une grille à 3 colonnes. La deuxième
rangée ne contient que 2 cartes et laisse un grand vide à droite.

**Preuve avant correction**

```text
Accueil : grid-template-columns: 384px 384px 384px
          cartes : 3 + 2 ; vide de 384 × 290 px
Psychomotricité : grid-template-columns: 389px 389px 389px
          cartes : 3 + 2 ; vide de 389 × 212 px
```

**Correction**

Grille de 6 colonnes : les 3 premières cartes occupent 2 colonnes, les 2
dernières en occupent 3. La dernière carte passe en pleine largeur sur tablette.
Les rangées sont désormais complètes : 3 + 2, sans cellule morte.

```text
Accueil après : 3 × 384 px puis 2 × 588 px
Psychomotricité après : 3 × 389 px puis 2 × 592 px
```

### 02 · Majeur · Séances & tarifs — les cartes de droite se touchent

La colonne collante contenait le bloc Tarifs puis deux `Callout` sans espacement
vertical. Le premier bloc finissait à `y = 1014,0 px`, le suivant commençait à
`y = 1013,9 px`.

**Correction :** `space-y-6`. Les trois blocs sont maintenant séparés de 24 px,
la même valeur que les autres gouttières de cartes.

### 03 · Moyen · Contact — le bandeau de coordonnées manquait d’air

Le bandeau Téléphone / SMS / E-mail était posé directement sous le hero :
`padding-top: 0`, `padding-bottom: 0`. Les cartes commençaient à `y = 522,4 px`
alors que le hero finissait à `y = 521,4 px`.

**Correction :** `py-8 lg:py-10` sur la section. Le bandeau respire maintenant de
40 px en haut et en bas sur desktop.

### 04 · Accessibilité · Étiquettes d’articles sous le seuil

Les tags de la page Ressources mesuraient `4,48:1` pour un texte de 12 px, soit
juste sous le minimum WCAG AA de `4,5:1`.

```text
text: "Nantes" / "Adultes" / "Bilan"…
ratio: 4.48:1 — required: 4.5:1 — font-size: 12px
```

**Correction :** passage de `text-azure-deep` à `text-blue-deep`, qui repasse
largement au-dessus du seuil sans changer la forme des tags.

### 05 · Accessibilité · « Transports » sur fond bleu

L’étiquette de 12 px sur `bg-blue-soft/50` mesurait `4,22:1`.

```text
text: "Transports" — ratio: 4.22:1 — required: 4.5:1 — font-size: 12px
```

**Correction :** passage de `text-ink-3` à `text-ink-2`.

### 06 · Confort · Cibles tactiles trop basses

Les liens du menu desktop mesuraient `124 × 17 px`, ceux du footer `124 × 17 px`
et les liens légaux `102 × 15 px`. La largeur était bonne, mais la hauteur
laissait peu de marge au clic.

**Correction**

- menu desktop : `py-2`, soit `124 × 36 px` ; le soulignement actif a été
  replacé pour rester au bon niveau ;
- footer : liens du plan du site à `28 px` de haut, liens légaux à `28 px`,
  e-mail et téléphone à `28 px` ;
- liens isolés « Voir le plan d’accès », « Ouvrir l’itinéraire » et « Ou
  écrivez-moi » : padding vertical ajouté.

### 07 · Rythme · 96 px de vide entre le CTA et le footer

Le footer portait un `margin-top: 96px` alors que le CTA juste au-dessus avait
déjà son propre padding bas. Sur les pages terminées par le CTA, cela créait une
bande de papier vide.

**Correction :** suppression de la marge. Le filet du footer vient maintenant
après le padding du CTA, sans vide artificiel.

## Ce qui fonctionne

- **Liens :** 13 liens internes suivis, 13 réponses OK, 0 lien cassé, 0 lien
  ambigu, 0 lien sans nom.
- **Focus :** anneau `2 px` avec un contraste de `3,57:1` sur le fond papier,
  au-dessus du minimum `3:1` de WCAG 2.2 SC 1.4.11.
- **Formulaire :** tous les champs ont un nom accessible via `label[for]` ;
  les champs texte font 50 px de haut, les zones de choix 48 px, les boutons
  52 px.
- **Responsive :** aucun débordement horizontal mesuré à 360, 390, 640, 768,
  1024, 1280 et 1440 px.
- **Cohérence :** deux familles (Fraunces et Inter), trois graisses, cinq rayons
  de bordure ; la palette est tenue.
- **Contraste :** après correction, les seuls écarts restants sont les grands
  numéros décoratifs `01` à `05` de l’accueil (`1,16:1`), qui sont `aria-hidden`
  et purement décoratifs.

## Points à surveiller

1. **Bannière de langue** : corrigée — voir ci-dessous, section « Deuxième
   passe ».
2. **Formulaire** : corrigé — validation champ par champ, résumé d'erreurs et
   gestion du focus.
3. **Carte OpenStreetMap** : vérifiée dans un vrai navigateur, elle s'affiche
   correctement (les tuiles `tile.openstreetmap.org` répondent 200). Les
   captures headless la montraient vide à cause du `loading="lazy"` : l'image
   était prise avant le chargement des tuiles. Le cadre a désormais un fond
   teinté, pour qu'un chargement lent ne ressemble pas à un trou blanc.
4. **Contenu en attente** : photo de façade et deux illustrations. Les
   emplacements sont prêts, documentés, et leur traitement graphique a été
   repris (papier texturé, dégradé d'aquarelle, filet plus lisible).

## Deuxième passe — reprise des points signalés

### 08 · Majeur · Formulaire — validation champ par champ

Le formulaire n'affichait qu'une alerte globale : un champ vide ne disait rien,
et le message unique ne disait pas lequel corriger.

**Correction**

- validation à la volée, message sous chaque champ fautif, icône d'alerte ;
- `aria-invalid="true"` et `aria-describedby` sur chaque champ en erreur ;
- résumé d'erreurs en haut du formulaire (`role="alert"`), listant chaque
  problème avec un lien vers le champ concerné ;
- le focus part sur le résumé à l'échec de l'envoi, puis sur le message de
  succès (`role="status"`) ;
- l'API renvoie désormais les erreurs par champ
  (`{ ok: false, error, fields: { nom, email, … } }`) ;
- le téléphone n'est exigé que si l'on choisit « Téléphone » ou « SMS » ;
- le message doit dépasser 10 caractères pour être exploitable.

```text
Soumission vide :
  role=alert  "Le formulaire n'a pas pu être envoyé" + 4 liens
  aria-invalid  nom, email, message, consent
  focus  → résumé d'erreurs
Message trop court :
  "Quelques mots de plus aideront à orienter votre demande."
Canal téléphone sans numéro :
  "Un numéro de téléphone est nécessaire pour être recontacté."
Envoi valide :
  role=status  "Merci, c'est bien envoyé." + focus sur le message
```

### 09 · Majeur · Bannière de langue — elle recouvrait le contenu

La bannière occupait toute la largeur en bas de l'écran et se superposait aux
lignes de texte en cours de lecture.

**Correction**

- au repos, elle tient dans un onglet rond de 44 px dans le coin de l'écran ;
- au survol, au focus clavier ou au clic, elle se déploie au-dessus de
  l'onglet, hors flux (position absolue) : elle ne pousse jamais la page ;
- `aria-expanded` sur le bouton, `inert` sur le panneau replié, `Échap` pour
  refermer, mémorisation du choix dans `localStorage` ;
- placée juste après l'en-tête dans le DOM, elle est atteinte tôt au clavier.

```text
repos      onglet 44 × 44 px, panneau opacity 0
survol     panneau 320 × 54 px, opacity 1
recouvre   0 élément de contenu au repos
clavier    onglet atteignable, Entrée déploie le panneau
Échap     referme le panneau, focus rendu à l'onglet
fermer     la bannière ne réapparaît pas, même après rechargement
```

### 10 · Moyen · Cadre de la carte — plus de trou blanc possible

Le bloc de la carte avait un fond blanc par défaut, ce qui donnait l'impression
d'une zone cassée pendant le chargement des tuiles.

**Correction :** fond `bg-paper-2` sur le cadre et hauteur minimale garantie,
l'adresse du cabinet restant affichée juste au-dessus sur les deux pages
concernées.

## Troisième passe — affichage mobile

### 13 · Majeur · Toutes pages — les titres débordaient et étaient rognés

Sur un écran de 320 à 414 px, le titre `h1` en 41,6 px ne tenait plus dans sa
boîte. La section du hero porte `overflow-hidden` : le mot le plus long était
donc **coupé net**, sans défilement possible.

```text
320 px, page Qui suis-je
  h1 « Psychomotricienne. »   377 px de large pour 272 px disponibles
  h1 « Le suivi en psychomotricité. »  319 px pour 309 px
  → texte rogné par le overflow-hidden du hero
```

**Correction**

- échelle de titres fluide en `clamp()`, pilotée par la largeur de l'écran
  (`--text-display-1` à `--text-display-5` dans `@theme`) : la taille suit
  l'écran, elle ne « saute » plus d'un palier à l'autre ;
- `overflow-wrap: break-word` et `hyphens: auto` sur les titres et les textes,
  pour qu'un mot long en français se coupe proprement au lieu d'être rogné ;
- `minmax(0, 1fr)` sur les pistes de grille : une piste implicite était
  dimensionnée par son contenu, si bien qu'un mot long élargissait la colonne
  et provoquait un débordement de toute la page (390 px → 678 px de largeur de
  document sur la page Contact).

```text
Avant : 320 px  h1 « Psychomotricienne. »  377 px > 272 px   rogné
        390 px  page Contact, document   678 px de large     débordement
Après : 320 px  h1 « Psychomotricienne. »  tient sur 1 ligne   complet
        390 px  page Contact, document   390 px              identique à l'écran
```

### 14 · Majeur · Les encadrés d'illustration coupaient leur légende

Les cadres d'illustration imposaient un ratio fixe : quand la légende était
plus longue que le cadre, le texte était coupé.

```text
320 px, accueil : légende 270 px de haut pour un cadre de 202 px  → coupée
```

**Correction :** le ratio est désormais une hauteur de repos. Le cadre est
une grille dont une cellule porte le ratio ; si le contenu est plus long, la
grille grandit au lieu de masquer la légende.

### 15 · Confort · Cibles tactiles sur mobile

Le lien d'accueil du fil d'Ariane (16 px) et le lien « fabuleuxmouvement.fr »
(20 px) étaient plus petits que 24 px.

**Correction :** padding vertical ajouté sans décaler la mise en page
(`-my-1` / `py-1`).

### 16 · Confort · Barre fixe et onglet de langue

La barre de contact fixe mesurait 63 px de haut pour 56 px de réserve en
bas de page : le dernier lien du footer pouvait passer dessous. L'onglet de
langue était positionné à 64 px, au ras de la barre.

**Correction :** réserve portée à 72 px (`pb-[4.5rem]`), onglet de langue
repositionné à 80 px (`bottom-20`) sur mobile.

## Vérifications

```text
npm run lint      OK
npx tsc --noEmit  OK
npm run build     OK (34 pages)
```

## Contrôle mobile final

140 combinaisons page × largeur testées (320, 360, 390, 414, 768, 1024 et
1440 px) sur les 20 pages du site, plus les pages 404.

```text
débordement horizontal        aucun (document = largeur de l'écran)
texte rogné                    aucun
texte plus large que sa boîte  aucun
champs sans nom accessible    aucun
cibles tactiles < 24 px       uniquement les cas exonérés
                               (lien d'évitement, cases à cocher enveloppées
                               par un label de 38 à 100 px)
```

Les 5 signalements restants dans l'outillage correspondent à un halo
décoratif en `display: none` : faux positif.

## Deuxième passe — reprise des points signalés (suite)

### 11 · Accessibilité · Formulaire — chaque champ porte son erreur
```text
Avant :  role=alert unique, aucun aria-invalid, aucun aria-describedby
Après :  aria-invalid  nom, email, message, consent
         aria-describedby → id du message d'erreur
         rôle alert sur le résumé, role status sur la confirmation
```

Le contrôle des cases à cocher et des boutons radio est porté par leur
libellé complet (38 px de haut), la cible cliquable n'est donc pas le carré
de 13 px du contrôle lui-même.

### 12 · Cohérence · Champs du formulaire

Le champ « Âge » et le champ « Motif » n'ont pas d'indication d'obligation :
ils restent facultatifs, et le texte « Champs obligatoires marqués d'un * »
sous le bouton couvre l'ensemble. Le champ « Téléphone » est également
facultatif par défaut, l'exigence conditionnée est expliquée sous le choix du
canal de contact.

