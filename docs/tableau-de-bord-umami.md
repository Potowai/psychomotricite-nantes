# Tableau de bord Umami — plan de pilotage

Umami est l'outil de mesure d'audience du site (Cloud, offre gratuite :
100 000 événements/mois, 1 site, 6 mois de conservation). Ce document est le
plan du tableau de bord : ce qu'il doit contenir, et ce qu'on regarde quand.

L'accès se fait sur <https://cloud.umami.is/analytics/eu/dashboard>.

---

## 1. Le site dans Umami

| Champ | Valeur |
| --- | --- |
| Nom | `Manuela Edom — psychomotricienne à Nantes` |
| Domaine | `psychomotricite-nantes.vercel.app` **tant que le domaine n'est pas basculé** |
| Après la bascule | `psychomotriciennenantes.fr` — à changer dans Umami (Réglages du site → Domaine) |

⚠️ Umami identifie un site par son **domaine** : tant que le domaine
n'est pas basculé, l'adresse déclarée doit rester celle qui sert réellement
les pages, sinon plus rien n'est compté.

## 1 bis. Ce qui est déjà fait (22 octobre 2026)

Le compte Umami Cloud est en place et vérifié de bout en bout :

| Élément | État |
| --- | --- |
| Site déclaré | **« Manuela Edom — psychomotricienne à Nantes »**, domaine `psychomotricite-nantes.vercel.app`, identifiant `8f671c4e-a1e3-41af-891c-26d8860d133f` |
| Collecte | **vérifiée** : un clic « Appeler » fait depuis la production est bien enregistré en Umami (événement `clic_telephone`) |
| Vercel Web Analytics | désactivé (`NEXT_PUBLIC_ANALYTICS_VERCEL=off`) — Umami est le seul outil de mesure |
| Tableau « Contacts » | **créé** (type Mixed), avec sa description |

Il reste **5 minutes de manipulation** pour le remplir : le sélecteur de site
du formulaire de composant n'est pas cliquable au travers de mon relais
d'automatisation (c'est le seul point que je n'ai pas pu faire).

### Les 5 minutes restantes

**Le raccourci** : un composant hérite du site si le **tableau** lui-même est
rattaché à un site. Il suffit donc de choisir le site **une seule fois**,
au niveau du tableau.

**Étape 1 — rattacher le tableau au site** (une fois pour tout) :
*Boards → Contacts → Edit* → **Board type** : passer de `Mixed` à `Website`
→ **Website** : choisir `Manuela Edom — psychomotricienne à Nantes` (c'est le
seul site du compte, c'est le premier de la liste) → *Save*.

**Étape 2 — ajouter les composants** : *Boards → Contacts → Design* → *Add
row* → le bouton du widget. Le site est déjà pré-rempli ; il reste à choisir :

- **Title** : le nom du composant (tableau ci-dessous) ;
- **Components** : le bouton du type de graphique — les quatre boutons sont,
  dans l'ordre : *carte*, *courbe*, *histogramme*, *tableau* ;
- **Save** (en bas à droite), puis *Save* (en haut à droite).

Répéter pour chaque composant : *Add row* → … → *Save*.

### Les six composants à créer

| Titre | Graphique | Ce qu'il montre |
| --- | --- | --- |
| Conversions (30 jours) | courbe | l'évolution des 4 événements de contact |
| Types de conversion | histogramme | clic téléphone / SMS / e-mail / formulaire, côte à côte |
| Pages qui convertissent | tableau | les pages qui amènent le plus de clics téléphone |
| Référents (30 jours) | histogramme | d'où viennent les visites — **y compris les moteurs de réponse** |
| En direct | carte | les visites du moment, filtrées sur `clic_telephone` |
| Volume (30 jours) | courbe | les visiteurs, pour situer l'échelle |

## 2. Le tableau de bord par défaut — six blocs, dans cet ordre

Umami affiche une page par site. L'ordre des blocs se règle dans les
préférences d'affichage ; l'ordre ci-dessous va du plus utile au moins
utile pour une pratique libérale.

| # | Bloc | Ce qu'il dit | Fréquence de lecture |
| --- | --- | --- | --- |
| 1 | **Visitations en cours** | y a-t-il quelqu'un sur le site là, et d'où | en direct, pendant une séance |
| 2 | **Visiteurs** (30 jours) | le volume réel — pas les pages vues | chaque semaine |
| 3 | **Sources de trafic** (30 jours) | d'où viennent les visites : Google, Direct, ChatGPT, Perplexity, un lien dans un article | chaque semaine |
| 4 | **Pages** (30 j) | quelles pages amènent du monde et lesquelles ne servent à rien | chaque mois |
| 5 | **Événements** (30 j) | **les 4 conversions** : `clic_telephone`, `clic_sms`, `clic_email`, `formulaire_ouvert` | chaque semaine |
| 6 | **Pays** et **Appareils** | la cible est-elle locale (Nantes, France) et sur quel support on est lu | une fois, puis de temps en temps |

### Les quatre conversions, et pourquoi ce sont les seules qui comptent

Un site de pratique libérale n'a pas d'objectif de trafic : il a un objectif
de **contacts**. Le nombre de visites ne dit rien ; ces quatre événements
 disent tout.

| Événement | Ce que le visiteur a fait | Ce que ça dit |
| --- | --- | --- |
| `clic_telephone` | a cliqué sur le numéro | le plus fort : il a voulu appeler |
| `clic_sms` | a cliqué sur le SMS | idem |
| `clic_email` | a cliqué sur l'adresse e-mail | veut une réponse écrite |
| `formulaire_ouvert` | a ouvert le brouillon de message | **intention** de contact — le seul qui compte, tous canaux confondus |

Une semaine sans aucune conversion n'est pas anormale à cette échelle : dix
visites par semaine donnent, en moyenne, un contact par semaine. Deux semaines
sans contact, c'est le signal qu'il faut agir (fiche Google, avis, ou
positionnement).

## 3. Le tableau « Contacts »

Il est créé (§ 1 bis) ; il reste à y ajouter les six composants (§ 7, et
les 5 minutes restantes). Son contenu est le tableau de bord de travail du
site : les conversions, les pages qui convertissent, les référents, le temps
réel.

## 4. Le trafic des moteurs de réponse (le contrôle GEO)

Dans *Sources de trafic*, surveiller les référents suivants — ce sont les
visites qui viennent d'une IA :

| Référent | Moteur |
| --- | --- |
| `chatgpt.com` | ChatGPT |
| `perplexity.ai` | Perplexity |
| `claude.ai` | Claude |
| `copilot.microsoft.com` | Copilot |
| `gemini.google.com` | Gemini |

Un trafic IA même modeste est **à protéger** : la citation d'un moteur de
réponse se voit mal (elle ne génère pas de clic), mais elle se voit dans les
référents. C'est aussi pour cela que le `robots.txt` autorise explicitement
les robots de recherche IA.

À croiser avec le contrôle trimestriel `docs/prompts-ia.md` : le référent dit
ce qui arrive, le contrôle manuel dit ce qui est cité.

## 5. Ce qu'il ne faut pas regarder

- **Le temps passé sur le site** : trompeur pour un site de 17 pages où l'on
  reste 40 secondes, le temps d lire.
- **Le taux de rebond** : une page lue jusqu'au bout puis quittée est un bon
  signal, pas un rejet.
- **Les pages vues** : le double d'une visite, pas deux contacts.

## 6. Le contrôle automatique — ce qui est possible en gratuit

Sur l'offre gratuite, l'**API REST est réservée à l'offre Pro** (l'interface
l'affiche explicitement : « API access requires a Pro plan »). Pas de jeton,
pas de rapport automatique par l'API : le contrôle se fait à l'œil, sur le
tableau.

Deux contournements restent possibles le jour où on le souhaite :

- **l'URL de partage** (*Share URL* dans les réglages du site) : elle rend
  les statistiques publiquement consultables via un lien non devinable. Un
  script pourrait la lire chaque semaine. Deux réserves : le lien est public
  (les conversions d'une pratique libérale n'ont pas à être publiques), et
  l'API Pro reste la voie propre ;
- **passer à Pro** (20 $/mois) si le volume de contacts le justifie un jour.
  Ce n'est pas justifié aujourd'hui.

En attendant, l'audit du site (`npm run audit`) joue le rôle de rapport
automatique : il tourne chaque lundi, et il écrit ce qui va ou ce qui ne va
pas. Le tableau de bord, lui, sert à explorer.

## 7. Construire le tableau « Contacts » — 10 minutes

L'interface d'Umami (v3+) permet un tableau personnalisé : c'est ce qui
transforme un outil de curiosité en outil de pilotage.

1. **Boards** (menu de gauche) → *Add board*.
2. Nom : `Contacts`.
3. *Add component* → choisir le type de graphique :
   - **Line chart** (courbe) pour l'évolution ;
   - **Bar chart** pour un classement ;
   - **Table** pour une liste lisible.
4. Choisir la **source** : `Website` (le site) ou `Event` (les conversions).
5. Choisir la **mesure** : `Visitors`, `Page views`, `Sessions`, `Unique
   events`.
6. Enregistrer, puis dupliquer le composant (`Duplicate`) pour en ajouter
   d'autres — c'est plus rapide que de repartir de zéro.

Les six composants du tableau « Contacts » :

| Composant | Type | Source | Mesure | Filtre |
| --- | --- | --- | --- | --- |
| Conversions (30 j) | Line chart | Event | Unique events | events ∈ {clic_telephone, clic_sms, clic_email, formulaire_ouvert} |
| Types de conversion | Bar chart | Event | Unique events | groupé par nom d'événement |
| Pages qui convertissent | Table | Website | Unique events | idem, avec la page en dimension |
| Référents | Bar chart | Website | Visitors | référents ∈ {chatgpt.com, perplexity.ai, claude.ai, copilot.microsoft.com, gemini.google.com} |
| En direct | Realtime | Website | Visitors | — |
| Volume | Line chart | Website | Visitors | 30 jours |

### Deux réglages utiles

- **Période par défaut** : 30 jours. En dessous, le bruit domine ; au-dessus,
  on ne voit plus ce qui vient de changer.
- **Filtre IP** : l'exclusion d'adresses IP est réservée à l'offre Pro, donc
  les visites depuis le cabinet compteront. Ce n'est pas grave : on regarde
  les conversions, pas le volume brut.

### Ce que l'offre gratuite ne permet pas

À savoir pour ne pas chercher l'option qui n'existe pas :

| Fonction | Offre requise |
| --- | --- |
| API REST | **Pro** |
| Filtres IP | **Pro** |
| Rapports par e-mail | **Pro** |
| Équipes | **Pro** |
| Marque blanche | **Business** |

Les **tableaux** (boards), les **événements** et leurs propriétés, le
temps réel et les décompositions (pages, référents, pays, appareils) sont
disponibles sur l'offre gratuite : c'est tout ce qu'il faut ici.

## 8. La routine

| Fréquence | Action | Durée |
| --- | --- | --- |
| Chaque semaine | *Visitations en cours* + *Événements* + *Sources de trafic* | 2 min |
| Chaque mois | *Pages* : identifier la page morte et la page à retravailler | 10 min |
| Chaque trimestre | contrôle IA (`docs/prompts-ia.md`) + rapport de Search Console | 30 min |

## 9. Nettoyage

Umami conserve 6 mois sur l'offre gratuite : rien à purge. En revanche, les
statistiques du site **de préproduction** (`vercel.app`) ne sont pas
représentatives : ne pas comparer les chiffres d'avant et d'après la bascule
du domaine. Le compteur repart en quelque sorte — c'est normal, et c'est
pour ça qu'on regarde les conversions plus que les volumes.
