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
de cartes et dans deux passages sans respiration. Sept corrections ont été
apportées.

| Priorité | Constat | État |
|---|---|---|
| Majeur | Grille de 5 cartes laissant une cellule vide (accueil et page Psychomotricité) | Corrigé |
| Majeur | Colonne droite de Séances & tarifs : cartes collées, gap de 0 px | Corrigé |
| Moyen | Bandeau Contact collé au hero, sans padding vertical | Corrigé |
| Accessibilité | Étiquettes d’articles à 4,48:1 (seuil 4,5:1) | Corrigé |
| Accessibilité | Étiquette « Transports » à 4,22:1 (seuil 4,5:1) | Corrigé |
| Confort | Liens de navigation à 17 px de haut, footer à 15–20 px | Corrigé |
| Rythme | 96 px de marge vide entre le CTA et le footer | Corrigé |

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

1. **Carte OpenStreetMap** : l’iframe apparaît vide dans les captures headless
   (chargement paresseux / réseau). À vérifier dans un navigateur réel avant de
   conclure à un problème visuel.
2. **Bannière de langue** : elle est fixe en bas de l’écran et peut recouvrir une
   ligne de contenu tant qu’elle n’est pas fermée. Elle est volontairement
   discrète et mémorisée, mais on peut la déplacer ou la réduire si elle gêne.
3. **Formulaire** : les erreurs sont annoncées par un seul `role="alert"`, sans
   `aria-invalid` ni message champ par champ. C’est utilisable, mais une
   validation par champ serait la prochaine amélioration d’accessibilité.
4. **Contenu en attente** : photo de façade et deux illustrations. Les
   emplacements sont prêts et documentés.

## Vérifications

```text
npm run lint      OK
npx tsc --noEmit  OK
npm run build     OK (34 pages)
```
