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

## 3. Le tableau « Contacts » (à créer dans un onglet *Boards*)

Si l'offre gratuite permet un tableau personnalisé, un seul tableau vaut le
peine — celui qui répond à « ai-je des contacts ? » :

- **Événements** (30 j), trié par nombre ;
- **Sources de trafic**, filtré sur les 4 événements ;
- **Pages**, filtré sur les 4 événements : la page qui génère le plus de
  clics téléphone est la page à retravailler en premier ;
- **Visitations en cours**, filtré sur `clic_telephone` : on sait ainsi, en
  direct, qu'une personne vient de demander un rendez-vous.

Nom suggéré : `Contacts`.

Si l'offre gratuite ne permet pas de tableau personnalisé, l'équivalent
gratuit est de filtrer manuellement la page *Événements* et de la garder en
favori dans le navigateur.

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

## 6. Le contrôle automatique (option)

Umami expose une **API REST** et un jeton gratuit dans les réglages du
compte (*Settings → API tokens*). Avec ce jeton, le contrôle peut être
automatisé : un script qui récupère chaque semaine les visiteurs, les pages,
les référents et les 4 événements, et écrit un résumé dans
`docs/rapport-umami-<date>.md` — le même mécanisme que l'audit du site.

C'est la partie « piloter » de l'outil : le tableau de bord sert à explorer,
le rapport automatique sert à ne rien louper.

## 7. La routine

| Fréquence | Action | Durée |
| --- | --- | --- |
| Chaque semaine | *Visitations en cours* + *Événements* + *Sources de trafic* | 2 min |
| Chaque mois | *Pages* : identifier la page morte et la page à retravailler | 10 min |
| Chaque trimestre | contrôle IA (`docs/prompts-ia.md`) + rapport de Search Console | 30 min |

## 8. Nettoyage

Umami conserve 6 mois sur l'offre gratuite : rien à purge. En revanche, les
statistiques du site **de préproduction** (`vercel.app`) ne sont pas
représentatives : ne pas comparer les chiffres d'avant et d'après la bascule
du domaine. Le compteur repart en quelque sorte — c'est normal, et c'est
pour ça qu'on regarde les conversions plus que les volumes.
