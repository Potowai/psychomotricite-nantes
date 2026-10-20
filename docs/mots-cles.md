# Carte des mots-clés — une intention par page

Complément à [`plan-seo-geo.md`](./plan-seo-geo.md) et
[`outils-seo-gratuits.md`](./outils-seo-gratuits.md).

## Comment se servir de ce document

- **Aucun volume n'est indiqué ici, et c'est volontaire.** Les seuls chiffres fiables
  viendront de la **Search Console** (ses propres requêtes) et, en directionnel, de
  **Bing Webmaster Tools**. Inventer des volumes serait du remplissage.
- Ce document fixe **quelle page vise quelle intention**. Un moteur n'aime pas qu'une
  page essaie de tout couvrir : dès qu'une intention devient sérieuse, elle mérite sa
  propre page ou son propre article.
- Après la mise en ligne du vrai domaine, la boucle de travail est :
  1. Search Console → onglet **Requêtes** → repérer les positions 8–20 (« quasi-positions ») ;
  2. si une requête remonte sur la **mauvaise** page, ajouter un lien interne ou réajuster ;
  3. si une requête remonte **sans page dédiée**, créer la section, la FAQ ou la page ;
  4. ne retoucher qu'**une** page à la fois, puis attendre 3–4 semaines.

**Règle d'or :** une intention = une page. Les variantes orthographiques se traitent
**dans** la page (titre, corps, FAQ), jamais en créant des pages jumelles.

---

## 1. Requêtes locales (les plus rentables)

Ces requêtes sont celles d'une personne prête à prendre rendez-vous. La fiche Google
Business Profile compte davantage que la page elle-même.

| Page | Requêtes cibles | Où les placer |
|------|-----------------|---------------|
| `/` | psychomotricienne Nantes · psychomotricien Nantes · psychomotricité Nantes · psychomotricienne D.E. Nantes | `<title>`, H1, première phrase, `LocalBusiness` (déjà en place) |
| `/contact` | rendez-vous psychomotricien Nantes · prendre rendez-vous psychomotricité Nantes · psychomotricienne Malakoff Saint-Donatien | H1, texte d'intro, libellé du bouton |
| `/seances-et-tarifs` | tarif psychomotricien Nantes · prix séance psychomotricité · tarif bilan psychomoteur · psychomotricité remboursée | Titre, tableau des tarifs, FAQ « est-ce remboursé ? » |
| `/qui-suis-je` | Manuela Edom psychomotricienne · psychomotricienne Nantes diplômée d'État | `<title>`, H1, `Person` (déjà en place) |

**Zone desservie** (à écrire noir sur blanc dans la fiche et en pied de page) :
Nantes et métropole — Rezé, Saint-Herblain, Orvault, Saint-Sébastien-sur-Loire,
Nantes Erdre, Chantenay, Hauts-Pavés.

---

## 2. Pages « motif » (intention : comprendre un trouble puis consulter)

| Page | Requêtes cibles | Variantes à intégrer **dans** la page |
|------|-----------------|---------------------------------------|
| `/psychomotricite/douance-hqi-thqi` | psychomotricité douance · HQI et corps · THQI enfant · haut potentiel et maladresse | **HPI** · **haut potentiel (intellectuel)** · « zèbre » · précocité · test de QI / bilan psychologique |
| `/psychomotricite/tdah` | psychomotricité TDAH · TDAH et motricité · TDA-H adulte Nantes · TDAH enfant agitation | **TDA-H** (avec tiret) · trouble déficit de l'attention · hyperactivité · impulsivité · fonctions exécutives |
| `/psychomotricite/anxiete-burn-out` | psychomotricité anxiété · burn out que faire · stress chronique corps · psychomotricité burn-out | **burn-out** · épuisement professionnel · anxiété généralisée · attaques de panique · sommeil |
| `/psychomotricite/troubles-dys` | psychomotricité dys · dyspraxie · dysgraphie · trouble de la coordination | **dyslexie** · **dyscalculie** · dysorthographie · TDC / TAC · « écriture illisible » · « maladroit » |
| `/psychomotricite/personne-agee` | psychomotricité personne âgée · prévention des chutes senior · motricité grand âge | équilibre · peur de tomber · autonomie · EHPAD · maintien à domicile · proprioception |

**Point de vigilance SEO important :** le site écrit **« HQI / THQI »**. En France, la
formule que les gens tapent réellement est **« HPI »** (« haut potentiel intellectuel »).
Le sigle HPI doit apparaître au moins dans le titre et le premier paragraphe de la page
douance, sinon elle est invisible sur ces requêtes.

---

## 3. Requêtes « question » → section FAQ et `FAQPage`

Ces questions alimentent directement le balisage `FAQPage` déjà en place, et sont
celles que les moteurs IA citent le plus volontiers.

| Page | Questions à traiter |
|------|---------------------|
| `/psychomotricite` | Qu'est-ce que la psychomotricité ? · À quoi ça sert ? · Quelle différence avec l'orthophonie ? avec la psychomotricité et la psychologie ? · Est-ce que ça marche pour un adulte ? |
| `/seances-et-tarifs` | Combien coûte une séance ? · Combien de séances faut-il ? · La psychomotricité est-elle remboursée ? · Quelle différence entre bilan et suivi ? |
| `/faq` | Quand consulter un psychomotricien ? · Faut-il une ordonnance ? · Combien de temps dure une séance ? · Est-ce que ça marche si mon enfant ne veut pas venir ? · Comment se passe la première séance ? |
| `/blog/le-bilan-psychomoteur` | Comment se passe un bilan psychomoteur ? · Combien de temps dure un bilan ? · Que fait le psychomotricien pendant le bilan ? |

**Différenciateurs à faire apparaître** (ils sont réels, donc utilisables partout, mais
sans en faire des titres racoleurs) : psychomotricienne **diplômée d'État**, reçoit
**du lundi au vendredi**, **enfants, adolescents et adultes**, **formatrice**, cabinet
**pluridisciplinaire** au 4 rue de la Mitrie, séances de **40 minutes**, **47 €** le suivi
et **200 €** le bilan (4 séances).

---

## 4. Articles de blog existants (intention : information, pas achat)

| Article | Requêtes cibles | Rôle |
|---------|-----------------|------|
| `/blog/douance-hqi-thqi-et-psychomotricite` | douance et corps · HPI maladresse · haut potentiel et psychomotricité | Capter la question « pourquoi mon enfant HPI est maladroit ? » et la renvoyer vers le motif douance |
| `/blog/anxiete-burn-out-pourquoi-passer-par-le-corps` | anxiété et corps · burn out pourquoi le corps · symptômes physiques du stress | Requête très large → viser la longue traîne (« anxiété : pourquoi le corps s'en mêle ») et renvoyer vers le motif anxiété |
| `/blog/le-bilan-psychomoteur` | déroulement bilan psychomoteur · bilan psychomoteur enfant · bilan psychomoteur prix | Article « proche de l'achat » : c'est probablement le meilleur convertisseur |
| `/blog/psychomotricite-adulte-nantes` | psychomotricité adulte Nantes · psychomotricien pour adulte · que fait un psychomotricien avec un adulte | Verrouille la verticale adulte, peu couverte par la concurrence locale |

---

## 5. Page anglaise

`/en` vise les anglophones installés à Nantes (expatriés, familles internationales) :
*psychomotor therapist Nantes* · *psychomotor therapy France* · *occupational therapy
alternative Nantes*. Volume faible, mais concurrence quasi nulle et intention claire.

---

## 6. Pages à créer (par ordre de priorité)

À construire **seulement** après avoir vu les requêtes remonter dans la Search Console —
sauf la première, qui est un manque évident.

1. **Prévention des chutes / équilibre chez la personne âgée** — la page « personne âgée »
   est actuellement généraliste ; une page dédiée à l'équilibre et à la peur de tomber
   touche une intention très concrète et peu concurrentielle à Nantes.
2. **Troubles de l'écriture (dysgraphie) chez l'enfant** — si c'est effectivement une
   demande fréquente au cabinet ; c'est une porte d'entrée massive chez les 7–12 ans.
3. **Psychomotricité et prématurité / petite enfance** — si elle reçoit des tout-petits.
4. **Article « psychomotricien, orthophoniste, psychologue : qui va voir qui ? »** — capte
   une question de tri que les parents se posent avant d'appeler, et alimente le `FAQPage`.

---

## 7. À ne pas viser

- **« psychomotricien » au singulier national** ou toute requête sans ancrage local :
  impossible à concurrencer, inutile pour un cabinet nantais.
- **« formation psychomotricité », « concours psychomotricien », « mémoire
  psychomotricité »** : intention étudiante/professionnelle, zéro valeur de rendez-vous.
  (Exception à discuter avec elle : si elle propose réellement des **formations**, elles
  mériteraient une page séparée, avec son propre chemin de conversion.)
- **Requêtes médicales de diagnostic** (« mon enfant est-il autiste ? ») : hors de son
  champ, et un contenu de qualité médicale douteux nuirait à sa crédibilité.
- **Le bourrage de mots-clés** dans le pied de page ou les attributs `alt` : sans effet
  aujourd'hui, et pénalisant sur la lisibilité.
