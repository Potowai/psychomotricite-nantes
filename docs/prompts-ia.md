# Contrôle trimestriel de la visibilité dans les moteurs de réponse

Les moteurs de réponse (ChatGPT, Perplexity, Gemini, Copilot, AI Overviews)
ne proposent pas d'outil de suivi gratuit de leur citation. Le contrôle se
fait donc à la main — mais il ne prend que **10 minutes par trimestre**, et
c'est la seule mesure fiable.

## Pourquoi c'est utile

Le trafic des IA se voit dans Umami (les sites de provenance), mais une
citation sans clic ne se voit nulle part : c'est en cherchant le nom de
Manuela dans une réponse d'IA qu'on sait si le site est cité, et par qui.

## Les 12 questions à poser

Poser chaque question telle quelle dans **ChatGPT** et **Perplexity**
(avec la recherche web activée), puis dans **Google** (les AI Overviews
n'apparaissent pas sur tous les comptes).

### 1. Trouver une praticienne

1. `psychomotricienne à Nantes`
2. `psychomotricienne pour adolescent à Nantes`
3. `psychomotricienne pour enfant TDAH à Nantes`
4. `psychomotricienne HPI / haut potentiel à Nantes`

### 2. Un motif précis

5. `psychomotricité et TDAH : à quoi ça sert ?`
6. `bilan psychomoteur pour un enfant de 9 ans, à Nantes`
7. `psychomotricité et burn-out : quel tarif ?` → corriger : `psychomotricité et burn-out : quel tarif ?`

### 3. Les questions pratiques

8. `faut-il une ordonnance pour une psychomotricienne ?`
9. `psychomotricienne à Nantes : quel est le prix d'une séance ?`
10. `psychomotérapie : est-ce remboursé par la sécurité sociale ?` → `psychomotérapie est-ce remboursé par la sécurité sociale ?`

### 4. En anglais

11. `psychomotor therapist in Nantes`
12. `psychomotor therapy for a teenager with ADHD in Nantes`

## Ce qu'on note

| Question | Cité ? | Source citée | Remarque |
| --- | --- | --- | --- |
| 1. psychomotricienne à Nantes | | | |
| … | | | |

Trois cas possibles :

- **Le site est cité** → on note la page citée (`/psychomotricite`,
  `/blog/...`) et on la lit pour vérifier que l'extrait est juste.
- **Une autre source est citée** (annuaire, magazine, autre annuaire) → c'est
  cette source qu'il faut travailler : d'abord la **fiche Google Business
  Profile**, puis les annuaires.
- **Personne n'est cité** → normal pour une praticienne locale : les moteurs
  de réponse citent rarement un professionnel nommé. Le levier reste local,
  pas l'IA.

## Où consigner le résultat

- Un onglet dans le tableau de bord Umami, ou une note dans
  `docs/plan-seo-geo.md` (§ 6), avec la date.
- La date des requêtes correspondantes dans la Search Console : si une
  impression apparaît en AI Overviews, elle est dans le rapport
  « Generative AI » (voir `console-outils-gratuits.md` § 4).

## Ce qu'il ne faut PAS faire

- **Ne pas acheter de tableau de bord GEO** (Profound, Otterly, Peec,
  Scrunch, Relixir, ZipTie…) : ils mesurent la citation sur des requêtes
  génériques nationales, où ce cabinet n'a rien à faire, et le font avec vos
  crédits. Voir `console-outils-gratuits.md` § 4 pour le détail.
- **Ne pas désactiver les robots de l'IA** dans `robots.txt` : la citation
  rapporte plus que le trafic qu'elle apporte.
- **Ne pas répondre aux questions IA sans fond** : une mention inventée
  (un tarif, une adresse) se corrige mal et se retourne contre le cabinet.
