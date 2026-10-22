# Mise en route SEO — ce qui reste à activer

Tout ce qui se fait dans le code est fait. Ce document liste ce qui dépend de
comptes et de tableaux de bord : ce ne sont pas des tâches de développement, mais
elles valent plus que n'importe quel outil payant.

Le classement se fait surtout **hors du site** : fiche Google, avis, annuaires.
Voir `plan-seo-geo.md` pour la stratégie, et `outils-seo-gratuits.md` pour le choix
des outils.

---

## 0. Le point de départ : le domaine

Le site est pour l'instant en ligne sur **`psychomotricite-nantes.vercel.app`**.
Le domaine `psychomotriciennenantes.fr` n'est pas encore basculé.

Conséquence pratique : c'est l'adresse `vercel.app` qu'il faut déclarer
aujourd'hui dans les outils. Quand le DNS sera basculé (voir `plan-seo-geo.md`
§1.1), il faudra ajouter une seconde propriété pour le vrai domaine — et c'est
celle-là qui comptera ensuite. Les données de la période `vercel.app` pourront
être ignorées.

---

## 1. Variables d'environnement (Vercel)

**Project → Settings → Environment Variables.** Un redéploiement est nécessaire
après chaque ajout.

| Variable | Où la trouver | À quoi ça sert |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console, méthode « balise HTML » | Vérifie le site pour Google. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools, méthode « balise meta » | Vérifie le site pour Bing. |
| `NEXT_PUBLIC_UMAMI_SRC` | Umami (auto-hébergé ou Cloud) | Mesure d'audience sans cookie — le choix recommandé. |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami, identifiant du site | Idem. |
| `NEXT_PUBLIC_ANALYTICS_VERCEL` | — | Mettre `off` pour ne pas charger Vercel Web Analytics. |
| `NEXT_PUBLIC_SPEED_INSIGHTS` | — | Mettre `off` pour ne pas charger Vercel Speed Insights. |

Le formulaire de contact n'a besoin d'aucune variable : il ouvre l'application
de messagerie du visiteur avec le message pré-rempli, le site n'envoie rien.

Les deux balises de vérification sont déjà câblées dans le code : **rien n'est
émis tant que les variables sont absentes**, donc il n'y a jamais de balise vide.

---

## 2. Google Search Console (~10 min)

1. Aller sur `search.google.com/search-console` → **Ajouter une propriété**.
2. Choisir **Préfixe d'URL** et saisir `https://psychomotricite-nantes.vercel.app`.
   - L'option **Domaine** (vérification DNS) est préférable à terme, mais elle
     demande l'accès au registraire. À faire au moment du basculement.
3. Méthode **Balise HTML** : copier la valeur de l'attribut `content`
   (la longue chaîne, pas la balise entière) dans
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, puis redéployer.
4. Cliquer sur **Vérifier**.
5. **Sitemaps** → soumettre `sitemap.xml`.

C'est de loin l'outil le plus utile : il donne les mots réellement tapés par les
visiteurs. C'est la seule source de données fiable sur laquelle travailler.

---

## 3. Bing Webmaster Tools (~5 min)

1. `bing.com/webmasters` → se connecter.
2. **Le plus simple : importer depuis Search Console** — si l'étape 2 est faite,
   l'import reprend la vérification et le sitemap.
3. Sinon : ajouter le site, méthode **balise meta**, copier la valeur dans
   `NEXT_PUBLIC_BING_SITE_VERIFICATION`, redéployer, vérifier.
4. Soumettre `sitemap.xml` (si l'import ne l'a pas fait).
5. **IndexNow** : déjà automatisé. À chaque déploiement, une action GitHub
   prévient Bing, Yandex, Naver et Seznam (voir §7).

Créer aussi une fiche **Bing Places** (gratuite) : c'est le pendant de la fiche
Google, et elle alimente les réponses de Copilot.

---

## 4. Fiche Google Business Profile (le levier n°1)

**La fiche existe déjà** — il ne s'agit donc pas de la créer, mais de l'auditer et
de la remettre à niveau : c'est là que se trouvent les gains. Voir
`plan-seo-geo.md` §2 pour le détail. C'est elle qui déclenche le pack local sur
« psychomotricienne Nantes », bien plus que le contenu du site.

À vérifier, dans cet ordre :

- **Accès gestionnaire** : la fiche est-elle bien réclamée, et le compte qui la
  gère est-il accessible ? Une fiche non réclamée peut être modifiée par
  n'importe qui — cas fréquent quand une ancienne agence l'a créée.
- **Catégorie** : la catégorie **Psychomotricien** existe et est déjà en place
  sur la fiche — rien à changer de ce côté. C'est la catégorie principale qui détermine les recherches sur
  lesquelles la fiche peut apparaître.
- **NAP rigoureusement identique** au site : 4 rue de la Mitrie, 44000 Nantes,
  06 84 74 96 70.
- **Horaires** : du lundi au vendredi.
- **Description** (750 caractères) : rédigée avec ses mots, pas de copier-coller
  du site.
- **Prestations** : bilan psychomoteur, suivi, douance (HPI, HQI/THQI), TDA-H,
  troubles dys, anxiété / burn-out, personne âgée.
- **Photos** : 10 ou plus — à commencer par les 2 photos attendues sur le site
  (façade et illustrations), dès qu'elle les envoie (le portrait est reçu).
- **Lien du site** : à basculer sur le nouveau site le jour du changement de DNS.
- **Lien de rendez-vous** : « Prendre rendez-vous » vers `/contact`.
- **Questions & réponses** : reprendre les questions déjà rédigées sur `/faq`.
- **Publications** : une par mois suffit.
- **Attributs** : sur rendez-vous ; accessibilité PMR du nouveau cabinet à vérifier avant de la publier.
- **Avis** : le facteur n°2. Demander systématiquement, jamais d'avis acheté, et
  répondre à chaque avis.

---

## 5. Mesurer l'audience : Umami (recommandé), Vercel, ou les deux

Le code est en place pour les deux, et le choix se fait **par variables
d'environnement**, sans toucher au code.

### Umami — le choix recommandé

Umami est intégré mais **inactif** tant que les variables du §1 sont absentes.

Deux possibilités :

- **Umami Cloud**, offre Hobby gratuite : 100 000 événements par mois,
  1 site, 6 mois de conservation, sans carte bancaire.
- **Auto-hébergé** (Docker + PostgreSQL) — la recette est prête dans
  `docker-compose.umami.yml` à la racine du dépôt. Gratuit et sans limite,
  mais il faut un petit serveur.

Une fois le site créé dans Umami : récupérer l'URL du script
(`NEXT_PUBLIC_UMAMI_SRC`) et l'identifiant du site
(`NEXT_PUBLIC_UMAMI_WEBSITE_ID`), les saisir dans Vercel, redéployer.

**Umami Cloud — valeurs retenues** (création du compte le 22 octobre 2026) :

```
NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
NEXT_PUBLIC_UMAMI_WEBSITE_ID=8f671c4e-a1e3-41af-891c-26d8860d133f
```

Le site déclaré dans Umami est pour l'instant `psychomotricite-nantes.vercel.app` :
son adresse sera changée dans Umami au moment de la bascule du domaine
(Réglages du site → Domain), sans rien modifier dans le code.

⚠️ Les variables `NEXT_PUBLIC_*` sont figées au build : après les avoir
ajoutées dans Vercel, il faut **redéployer** (Deployments → Redeploy).

### Vercel Web Analytics et Speed Insights

Utiles en complément, ou à la place d'Umami si l'on ne veut pas gérer de
compte supplémentaire.

**Project → Analytics** → activer Web Analytics.
**Project → Speed Insights** → activer Speed Insights.

Pour ne pas charger du tout ces scripts, ajouter dans Vercel :
`NEXT_PUBLIC_ANALYTICS_VERCEL=off` et/ou `NEXT_PUBLIC_SPEED_INSIGHTS=off`.

### Les deux ensemble

Les événements de conversion partent vers **tous** les outils actifs : changer
d'outil ne perd rien.

Événements suivis automatiquement :

- `clic_telephone` — un clic sur le numéro (lien `tel:`)
- `clic_sms` — un clic sur le SMS (lien `sms:`)
- `clic_email` — un clic sur l'adresse e-mail
- `formulaire_ouvert` — le formulaire a ouvert le brouillon de message (avec le motif choisi)

Ce sont ces quatre chiffres qui disent si le site génère des contacts, pas le
nombre de visites.

⚠️ **Attention CNIL** : « sans cookie » ne veut pas dire « exempté de
consentement ». L'exemption (art. 82 de la loi Informatique et Libertés) est
conditionnelle : finalité strictement limitée à la mesure d'audience pour
l'éditeur, statistiques anonymes, pas de suivi inter-sites, pas de réutilisation,
utilisateurs informés, durée de vie ~13 mois et conservation maximale 25 mois.
Les règles ont été publiées le 4 juillet 2025 et s'appliquent depuis le
1er janvier 2026.

La page « Politique de confidentialité » nomme **automatiquement** les outils
réellement en service (Vercel Web Analytics, Vercel Speed Insights, Umami) :
il n'y a rien à y modifier quand on change d'outil.

---

## 7. Automatisations déjà en place

Rien à faire, elles tournent toutes seules. Résultats visibles dans l'onglet
**Actions** du dépôt GitHub.

| Automatisation | Déclencheur | Effet |
|---|---|---|
| **IndexNow** | chaque `push` sur `main` | Attend le déploiement puis soumet toutes les URLs du sitemap à Bing, Yandex, Naver et Seznam. |
| **Audit + PageSpeed** | tous les lundis à 6 h | Lance `scripts/audit-site.mjs` sur le site déployé (titres, descriptions, canonical, hreflang, liens morts) et interroge l'API PageSpeed Insights pour les scores Lighthouse des pages principales. |
| **Déploiement** | chaque `push` sur `main` | Vercel reconstruit et publie le site. |

IndexNow ne concerne pas Google : Google reste piloté par le sitemap et les liens.

L'audit se lance aussi à la main, en local, sur le build de production :

```bash
npm run build && npm start          # dans un terminal
npm run audit                       # audit de http://localhost:3000
npm run audit:prod                  # audit du site déployé
```

---

## 8. Ce qu'il faut faire une fois, et ce qu'il faut faire chaque mois

Voir la dernière section de `outils-seo-gratuits.md`. En une phrase : tout le
« une fois » est ci-dessus ; le « chaque mois » tient en 30 minutes dans Search
Console (requêtes en position 8–20 → retoucher **une** page) plus Google Trends et
AlsoAsked pour une question de FAQ par trimestre.
