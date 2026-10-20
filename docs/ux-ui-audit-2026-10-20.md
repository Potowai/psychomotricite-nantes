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
de cartes et dans deux passages sans respiration. Dix corrections ont été
apportées, puis quatre de plus lors d’une seconde passe sur les points
signalés.

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

## Vérifications

```text
npm run lint      OK
npx tsc --noEmit  OK
npm run build     OK (34 pages)
```

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

