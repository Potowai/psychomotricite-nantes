# Console de pilotage — les outils gratuits, accès direct

Trois besoins : **suivre les données**, **savoir ce que l'on cherche** (les
mots tapés), **auditer le site**. Tout est gratuit, sans carte bancaire, et
sans cookie pour l'essentiel.

La logique de choix (ce qui est écarté et pourquoi) est dans
[`outils-seo-gratuits.md`](./outils-seo-gratuits.md). Ce document, c'est la
version opératoire : les liens, le temps à y passer, et ce qu'on y regarde.

---

## 1. Suivre les données

| Outil | Accès | Déjà en place ? | Ce qu'il donne | Temps |
| --- | --- | --- | --- | --- |
| **Umami** (Cloud gratuit ou auto-hébergé) | <https://umami.is> | Code installé, **inactif** (2 variables d'environnement) | Le choix recommandé : sans cookie, données chez soi, tableaux de bord complets (temps réel, filtres, pages de provenance, événements de conversion) | 15 min |
| **Vercel Web Analytics** | <https://vercel.com/psychomotricite-nantes/~/analytics> | Code installé, **désactivable par une variable** | Pages vues, visiteurs, référents, pays, appareils | 2 min |
| **Vercel Speed Insights** | <https://vercel.com/psychomotricite-nantes/~/speed-insights> | Idem | Core Web Vitals **terrain** (LCP, CLS, INP) sur le trafic réel | 2 min |
| **Search Console → Performance** | <https://search.google.com/search-console> | À créer | Ce que tapent **réellement** les visiteurs : requêtes, impressions, clics, position | 10 min |
| **Bing Webmaster Tools** | <https://www.bing.com/webmasters> | À créer | Mots-clés et positions côté Bing, indexation, liens entrants | 5 min |
| **Matomo** (auto-hébergé) | <https://matomo.org> | Non | Le plus complet et le plus défendable (guide CNIL officiel) | 2 h + hébergement |
| **Vercel Logs** | <https://vercel.com/psychomotricite-nantes/~/logs> | Inclu | Requêtes serveur, erreurs, temps de réponse | 0 |
| **Google Analytics 4** | <https://analytics.google.com> | — | **À éviter ici** : cookies, bandeau de consentement obligatoire, exemption CNIL à 13 mois, et un profil que personne n'ouvrira | — |

### Choisir son outil de mesure

Tout est piloté par des variables d'environnement, sans toucher au code :

| Variable | Effet |
| --- | --- |
| `NEXT_PUBLIC_UMAMI_SRC` + `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Active Umami. `https://cloud.umami.is/script.js` (offre gratuite) ou l'URL de son instance auto-hébergée |
| `NEXT_PUBLIC_ANALYTICS_VERCEL=off` | Ne charge plus Vercel Web Analytics |
| `NEXT_PUBLIC_SPEED_INSIGHTS=off` | Ne charge plus Vercel Speed Insights |

**Umami Cloud gratuit** : 100 000 événements par mois, 1 site, 6 mois de
conservation, sans cookie, aucune inscription bancaire. Largement au-dessus
des besoins de ce site (17 pages, quelques centaines de visites par mois).

**Umami auto-hébergé** : gratuit et sans limite, mais il faut un petit serveur.
La recette est prête dans `docker-compose.umami.yml` (Umami + PostgreSQL,
cinq minutes de mise en route). C'est la seule façon d'avoir la mesure
d'audience **et** les données chez soi.

Dans les deux cas, les **événements de conversion** (clic téléphone, clic SMS,
clic e-mail, ouverture du brouillon du formulaire) sont envoyés à l'outil
actif : changer de mesure d'audience ne perd jamais l'information utile. Un
test de bout en bout a été fait avec un faux Umami local : `clic_telephone` et
`formulaire_ouvert` arrivent bien.

**À noter** : Vercel Analytics et Speed Insights sont sans cookie, donc
**aucun bandeau de consentement** n'est nécessaire — c'est cohérent avec la
politique de confidentialité du site. Umami l'est aussi, à condition de
l'activer avec la configuration prévue par la CNIL (voir
`mise-en-route-seo.md` § 6). La politique de confidentialité nomme
automatiquement les outils réellement en service : plus rien à y penser quand
on change d'outil.

---

## 2. Le « word search » : ce que l'on cherche vraiment

| Outil | Accès | Ce qu'il donne | Temps |
| --- | --- | --- | --- |
| **Search Console → Performance → Requêtes** | <https://search.google.com/search-console/performance/search-analytics> | **La donnée de référence** : les requêtes réelles du site, impressions, clics, position moyenne. C'est ici qu'on décide quoi réécrire | 5 min/mois |
| **Bing Webmaster → Mots-clés** | <https://www.bing.com/webmasters> | Les requêtes Bing **avec volumes** (Bing est moins filtré que Google sur les volumes) | 5 min |
| **Google Trends** | <https://trends.google.com/trends?geo=FR> | Intérêt relatif, saisonnalité, comparaison France/Nantes. Sans compte | 2 min |
| **Keyword Surfer** (extension Chrome) | <https://surferseo.com/keyword-surfer-extension/> | Volume de recherche affiché **directement dans les résultats Google** — le meilleur rapport effort/info | 1 min d'installation |
| **AlsoAsked** | <https://alsoasked.com> | Les questions « les gens demandent aussi » → source de FAQ | 3/jour |
| **AnswerThePublic** | <https://answerthepublic.com> | Idem, sous une autre forme | 3/jour |
| **Google Business Profile → Recherches** | <https://business.google.com> | **Les recherches qui amènent vers la fiche** — c'est la donnée locale la plus utile, et elle est gratuite | 5 min/mois |
| **Autocomplétion Google** | taper dans Google | Les vraies suggestions = proxy de volume, sans outil | 0 |
| **Google Keyword Planner** | <https://ads.google.com/keyword-planner> | Fourchettes grossières, et un compte Ads à créer. **À éviter** | — |
| **Semrush / Ahrefs / Ubersuggest** | — | Paliers gratuits trop courts pour un site de 17 pages | — |

**La règle** : on ne « fait » pas de recherche de mots-clés avec un outil, on
**lit** ce que dit la Search Console et on réécrit **une** page par mois.
Voir `plan-seo-geo.md` § 1 et `docs/mots-cles.md`.

---

## 3. Auditer le site

| Outil | Accès | Ce qu'il donne | Temps |
| --- | --- | --- | --- |
| **Audit du dépôt** (`npm run audit`) | dans le dépôt | Titres, descriptions, canonical, hreflang, H1, alt, étiquettes, JSON-LD, liens morts — sur toutes les pages, en une commande | 0 (déjà écrit) |
| **PageSpeed Insights** | <https://pagespeed.web.dev> | Scores Lighthouse (perf, SEO, accessibilité, bonnes pratiques) + Core Web Vitals | 2 min/page |
| **Lighthouse** | Chrome DevTools → onglet Lighthouse | Idem, en local, sur n'importe quelle URL | 1 min |
| **Unlighthouse** | `npx unlighthouse --site <url>` | Lighthouse sur **tout le site**, avec un tableau de bord et une comparaison | 5 min |
| **Screaming Frog** (version gratuite) | <https://www.screamingfrog.co.uk/seo-spider/> | Crawl complet, 500 URLs offertes : liens, titles, doublons, redirections | 20 min |
| **Ahrefs Webmaster Tools** | <https://ahrefs.com/webmaster-tools> | Audit du site (~170 contrôles) + **backlinks** — la meilleure offre gratuite du secteur | 10 min |
| **W3C Nu HTML Checker** | <https://validator.w3.org/nu/> | Validité HTML/ARIA, par page | 1 min |
| **WAVE** | <https://wave.webaim.org> | Accessibilité (contraste, libellés, ordre de lecture) | 2 min |
| **Rich Results Test** | <https://search.google.com/test/rich-results> | Valide le JSON-LD (MedicalBusiness, FAQPage…) tel que Google le voit | 1 min |
| **Security Headers** | <https://securityheaders.com> | En-têtes de sécurité (HSTS, CSP…) | 1 min |
| **Mozilla Observatory** | <https://observatory.mozilla.org> | Notation de sécurité du domaine | 2 min |
| **Google Search Console → Inspection d'URL** | <https://search.google.com/search-console> | État d'indexation réel d'une page | 2 min |

---

## 4. Automatisation déjà en place

| Automatisation | Où | Effet |
| --- | --- | --- |
| **Audit + PageSpeed** | `.github/workflows/seo-check.yml` | Chaque lundi à 6 h : audit du site déployé + scores Lighthouse |
| **IndexNow** | `.github/workflows/indexnow.yml` | À chaque déploiement : Bing, Yandex, Naver, Seznam sont prévenus |
| **Déploiement** | Vercel | À chaque `push` sur `main` |

Pour fiabiliser le rapport Lighthouse, ajouter un secret GitHub
`PAGESPEED_API_KEY` (clé API Google Cloud gratuite, ~5 min) : sans clé, le
quota public est partagé et l'API répond 429 — c'est ce qui arrive depuis
cette machine.

---

## 5. Le chemin le court (15 minutes)

1. **Clics** : activer Web Analytics + Speed Insights dans Vercel (2 min).
2. **Compte** : créer la propriété Search Console et y soumettre
   `sitemap.xml` (10 min) — c'est l'outil le plus rentable de la liste.
3. **Compte** : créer le compte Bing Webmaster (5 min) et importer depuis
   Search Console.
4. **Exécution** : `npm run audit` en local, et `npm run audit:prod` pour
   auditer le site déployé.
5. **Chaque mois** : 30 minutes de Search Console, comme décrit dans
   `mise-en-route-seo.md` § 8.

Le reste de la liste est en option : à ouvrir quand un besoin précis
apparaît, pas avant.
