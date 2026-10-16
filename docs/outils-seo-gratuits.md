# Outils SEO gratuits / open source — la boîte à outils

Complément à [`plan-seo-geo.md`](./plan-seo-geo.md).

À son volume (moins de 10 visites/jour), **les outils ne font pas le SEO** : la fiche
Google Business Profile et la Search Console font 90 % du travail. Ce document existe
pour éviter deux pièges : payer pour rien, et passer des heures à installer un outil
auto-hébergé dont elle n'exploitera jamais la donnée.

Chaque ligne indique le coût réel, ce que l'outil produit, et un verdict.

---

## 1. Recherche de mots-clés (« web word search »)

| Outil | Coût | Ce qu'il donne | Verdict |
|-------|------|----------------|---------|
| **Google Search Console** | Gratuit | Les requêtes **réelles** qui l'ont amenée : impressions, clics, CTR, position moyenne | **N°1 — la seule donnée vraiment fiable.** À miner chaque mois (voir §7) |
| **Bing Webmaster Tools → Recherche de mots-clés** | Gratuit | Volumes quasi exacts issus de Bing | Utile pour valider une direction et trouver du longue traîne. Bing ≠ Google, mais c'est gratuit |
| **Google Trends** (région = France) | Gratuit, sans compte | Intérêt relatif 0–100, saisonnalité | Oui, en complément |
| **AlsoAsked** | 3 recherches/jour, puis payant (~12–15 $/mois) | Cartes « People Also Ask » | Oui — 3/jour suffisent largement pour une niche locale |
| **Keyword Surfer** (extension Chrome) | Gratuit | Volume et CPC affichés dans les résultats Google | Oui — zéro effort, contexte de volume immédiat |
| **Google Keyword Planner** | « Gratuit » mais **compte Google Ads avec moyen de paiement** obligatoire pour « Obtenir des idées de mots-clés » | Uniquement des **fourchettes** (« 1 K–10 K ») sans budget publicitaire | **À éviter.** Et pour un sujet de santé, Google peut ne rien renvoyer du tout |
| **AnswerThePublic** | 3 recherches/jour, sans export | Visualisation de questions | Moins bon qu'AlsoAsked (mêmes limites, moins exploitable) |
| **Ubersuggest** | 3 recherches/jour, sans export ni historique | Idées + volumes (estimations tierces) | Non |
| **Keywords People Use** | Aucun palier gratuit (15 $/mois) | PAA, autocomplete, Reddit/Quora | Non |
| **Outils open source** (OpenSEO MIT, bisibility…) | Code gratuit, **mais clé API DataForSEO payante obligatoire** | Recherche de mots-clés, difficulté, backlinks | **« Gratuit » en façade.** À ignorer |

**En clair :** aucune raison d'acheter ou d'installer un outil de mots-clés. La
combinaison **Search Console + Bing + Google Trends + AlsoAsked** est gratuite et
suffisante à cette échelle.

---

## 2. Suivi de position (rank tracking)

- **SerpBear** — licence **MIT**, auto-hébergé (Next.js + SQLite), mots-clés illimités,
  intégration Search Console, alertes e-mail. Sur le papier, exactement l'outil
  open source souhaité.
  **Le piège est la source de données :** SerpBear interroge Google via des scrapers
  tiers ou ses propres proxys. Son option gratuite historique (**ScrapingRobot**) est
  signalée comme **ne fonctionnant plus** dans son propre README (idem scrapingant /
  spaceserp). Les options restantes sont payantes : serper.dev ~1 $/1 000 requêtes,
  valueserp ~2,50 $/1 000, SerpApi / SearchApi / HasData 29–50 $/mois. Déploiement :
  Docker + un scraper opérationnel.
- **Search Console (position moyenne)** — gratuit, déjà disponible. Réserve : c'est une
  moyenne, et GSC masque les requêtes à très faible volume. À 10 visites/jour, l'onglet
  « Requêtes » restera clairsemé.

**Verdict : non, pas maintenant.** Il n'y a pas assez de requêtes à position stable pour
que le suivi ait un sens, et le chemin gratuit de SerpBear est cassé. **À revoir** si elle
veut un jour suivre 5 mots-clés locaux avec alerte e-mail — au prix d'un petit VPS plus
des crédits SERP payants.

---

## 3. Mesure d'audience (open source / respectueuse de la vie privée)

### Ce que dit la CNIL (à jour)

La CNIL a publié de **nouvelles règles le 4 juillet 2025, applicables au 1er janvier
2026**. Une mesure d'audience peut être **exemptée de consentement** (art. 82 de la loi
Informatique et Libertés) seulement si :

- la finalité est **strictement limitée à la mesure d'audience pour l'éditeur seul** ;
- seules des **statistiques anonymes** sont produites ;
- **pas de suivi inter-sites**, pas de réutilisation à d'autres fins, pas de partage non
  anonymisé avec des tiers ;
- les utilisateurs sont **informés** (politique de confidentialité) ;
- durée de vie des cookies ~**13 mois**, conservation max **25 mois**, réexaminés
  périodiquement.

⚠️ **Un outil sans cookie n'est pas automatiquement exempté** : c'est la *configuration*
qui doit cocher ces cases.

| Outil | Licence / coût | Auto-hébergement | Effort | Verdict |
|-------|----------------|------------------|--------|---------|
| **Vercel Web Analytics** | Gratuit sur l'offre Hobby | Aucun (déjà intégré) | **Zéro** | **À garder** — installé et déjà conforme à la promesse de la politique de confidentialité |
| **Umami** | **MIT** ; auto-hébergé gratuit ; offre Cloud Hobby gratuite | Node 18+ + PostgreSQL, ou Docker | Faible | **Meilleur rapport effort/bénéfice** si elle veut l'autonomie et la propriété des données |
| **Matomo On-Premise** | **GPL**, gratuit | PHP + MySQL | Élevé (administration serveur) | **Le plus défendable juridiquement** — la CNIL publie elle-même un guide de configuration Matomo, et Matomo revendique l'alignement (auto-évaluation). Lourd pour un usage solo |
| **Plausible CE** | **AGPLv3** ; Cloud payant | Docker/Compose | Moyen — leur propre documentation prévient que s'auto-héberger est « un vrai engagement » (mises à jour, sauvegardes, filtrage des bots) | Bon produit, mais l'auto-hébergement est une charge |
| **PostHog** | **MIT** (cœur OSS) ; offre gratuite | Docker/K8s | Élevé | **Surdimensionné** — c'est de l'analyse produit (replay de session, feature flags) |

**Recommandation :** garder **Vercel Web Analytics** (gratuit, zéro effort) et, si elle
veut la clarté CNIL plus la propriété des données, ajouter **Umami**. **Matomo
auto-hébergé** seulement si la protection juridique vaut l'effort.

---

## 4. Technique & Core Web Vitals

| Outil | Licence / coût | Ce qu'il fait | Effort | Verdict |
|-------|----------------|---------------|--------|---------|
| **Lighthouse** (Chrome DevTools) | Apache-2.0 | Audit perf/SEO/accessibilité d'une page | Zéro | Oui |
| **Unlighthouse** | **MIT** | Passe Lighthouse sur **tout le site** avec un tableau de bord : `npx unlighthouse --site <url>` | Une commande | **Oui — parfait pour un petit site statique** |
| **Lighthouse CI** | Apache-2.0 | Rejoue Lighthouse à chaque commit et bloque les régressions | Faible (GitHub Action) | Oui, si elle commite souvent |
| **Screaming Frog** (version gratuite) | Gratuit ; version payante 245 €/an | 300+ contrôles on-page/techniques | Télécharger (application Java) | **Oui** — la limite gratuite de **500 URLs par crawl couvre tout son site**. Pas de sauvegarde de crawl, pas de rendu JS, pas d'intégrations |
| **Ahrefs Webmaster Tools** | **Gratuit** après vérification de propriété | Audit de site (~170 contrôles, jusqu'à 5 000 URLs) + backlinks | Faible | **Excellente valeur gratuite** |
| **PageSpeed Insights API** | Gratuit (~25 000 req/jour, clé recommandée) | Données labo + (encore) terrain via CrUX | Faible | Oui |
| **CrUX API** | Gratuit, **150 req/min** | Core Web Vitals **terrain** (vrais utilisateurs) | Faible | Oui — mais voir la réserve ci-dessous |
| **CrUX Dashboard** | — | — | — | **Arrêté fin novembre 2025.** Remplacé par **CrUX Vis** (cruxvis.withgoogle.com) |
| **Sitebulb** | Payant | Crawler technique | — | Non — Screaming Frog gratuit suffit |

**Réserve importante :** CrUX ne remonte que les origines/pages avec assez de trafic
Chrome réel. À 10 visites/jour, **il y a de bonnes chances que CrUX n'ait aucune donnée
pour son domaine.** À vérifier avant de compter dessus.

---

## 5. API gratuites à brancher

| API | Coût / authentification | Quotas gratuits actuels | Ce qu'elle donne |
|-----|-------------------------|-------------------------|------------------|
| **Google Search Console API** | Gratuit ; OAuth 2.0 ou compte de service ; accès propriétaire/lecture requis | Search Analytics **1 200 req/min** par site et par utilisateur ; **40 000 req/min / 30 M req/jour** par projet ; inspection d'URL **2 000/jour** par site | Requêtes, pages, pays, appareil, sitemaps, état d'indexation |
| **Bing Webmaster API** | Gratuit ; OAuth 2.0 / clé API | **REST uniquement** — le SOAP/POX historique est retiré depuis le **31 août 2026**. Quotas de soumission d'URL annoncés de façon incohérente selon les sources (~100/jour vs ~20 000/jour) → **à vérifier dans le compte** | Statistiques de rang et de trafic, liens, mots-clés, soumission d'URL/sitemap |
| **PageSpeed Insights API** | Gratuit, clé optionnelle mais recommandée | ~25 000 req/jour, ~1 req/s | Lighthouse + CrUX |
| **Chrome UX Report API** | Gratuit, clé GCP | **150 req/min**, aucun palier payant | Core Web Vitals terrain |
| **Google Trends API** | Gratuit mais **alpha, sur invitation** depuis le 24 juillet 2025 — toujours alpha | Inconnu tant qu'on n'est pas accepté | Trends par programmation. ⚠️ **`pytrends` a été archivé en avril 2025** — ne rien construire dessus |
| **IndexNow** | Gratuit, protocole ouvert | — | Notification instantanée à **Bing, Yandex, Naver, Seznam**. **Pas Google.** |
| **Google Business Profile API** | Gratuit | Quota quotidien | Publications, avis, horaires — utile si la fiche devient sérieuse |

**Un rapport SEO automatisé est faisable et gratuit :** un **GitHub Action** (ou un Vercel
Cron) qui appelle l'API Search Console (requêtes/pages) et l'API PSI (Core Web Vitals),
puis écrit un résumé Markdown ou un e-mail. C'est l'automatisation la plus rentable de
cette liste.

---

## 6. GEO — visibilité dans les moteurs IA (ChatGPT, Perplexity, AI Overviews)

**Verdict : à ignorer pour l'instant.**

Raison de fond : les moteurs de réponse IA recommandent très rarement un **praticien local
nommé**. Pour « bon psychomotricien à Nantes », ils citent des annuaires ou des
établissements. Le levier reste local (fiche Google, avis, NAP cohérent), pas un tableau
de bord de visibilité IA.

Outils existants, pour information :

- **OneGlanse** (**MIT**) — lance des prompts sur les vrais sites IA (ChatGPT, Perplexity,
  Gemini, Claude, AI Overviews) via Camoufox/Playwright, enregistre réponses et citations,
  les note avec un LLM. Mais : Node 20+, Docker, **ses propres comptes IA**, une clé
  OpenAI/Anthropic, et un **proxy résidentiel** en VPS. C'est du bricolage de passionné.
- **Open-Sight**, **Trendos** — commerciaux (Trendos a un palier gratuit, mais opaque).
- **Bright Data GEO/AEO Tracker** — tableau de bord open source, mais **données payantes**.
- **OpenSEO « AI Visibility »** — code MIT mais **clé DataForSEO payante**.

**À faire à la place (2 minutes, une fois par trimestre) :** poser la question à ChatGPT
et à Perplexity — « psychomotricien Nantes », « psychomotricienne pour un ado TDAH à
Nantes » — et regarder si elle ou son cabinet apparaissent. C'est gratuit et suffisant.

---

## 7. Pile recommandée

### À faire une fois, puis oublier

1. **Google Business Profile** — le levier n°1 (voir `plan-seo-geo.md` §2).
2. **Bing Webmaster Tools** — vérifier le site, soumettre le sitemap ; ajouter **Bing
   Places**. Optionnel : **IndexNow** au déploiement (Bing uniquement, jamais Google).
3. **Search Console** épinglée + extension **Keyword Surfer** installée — aucun autre
   outil de mots-clés n'est nécessaire.
4. **Un crawl Screaming Frog gratuit + un scan Unlighthouse** pour attraper les problèmes
   techniques une bonne fois. Activer **Ahrefs Webmaster Tools gratuit** pour un score de
   santé récurrent.

### Routine mensuelle (~30 minutes)

5. **Search Console → Requêtes / Pages** : repérer les requêtes en « quasi-position » (pos.
   11–20) et retoucher **une** page (titre, H1, une section). C'est ça, la vraie boucle de
   « recherche de mots-clés » pour ce site.
6. **Google Trends (France) + AlsoAsked (3/jour)** : ajouter une FAQ ou une page par
   trimestre. Chaque réponse alimente aussi `FAQPage` en JSON-LD.
7. **Vercel Web Analytics** (déjà en place) + un **PSI** de temps en temps sur les pages
   clés.

### Optionnel — propriété des données / conformité CNIL

8. **Umami** (auto-hébergé ou Cloud Hobby gratuit). **Matomo auto-hébergé** uniquement si
   la protection juridique vaut l'effort d'administration.

### À ne pas faire (gains nuls ou négligeables ici)

Google Keyword Planner · Ubersuggest · Keywords People Use · **SerpBear et les trackers
de position** · PostHog · **les tableaux de bord de visibilité IA** · les paliers payants
Ahrefs / Semrush / Sitebulb / SerpApi.

---

## 8. Sources

**Mots-clés**
- Keyword Planner, configuration et limites : https://support.google.com/google-ads/answer/7337243
- Bing Webmaster Tools (blog, juin 2025) : https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/
- Recherche de mots-clés Bing : https://www.bing.com/webmasters/help/keyword-research-628070b6
- AlsoAsked (tarifs) : https://alsoasked.com/pricing
- AnswerThePublic (version gratuite) : https://answerthepublic.zendesk.com/hc/en-us/articles/22617503900187-Is-There-a-Free-Version-of-AnswerThePublic
- Ubersuggest (limites gratuites) : https://ubersuggest.zendesk.com/hc/en-us/articles/9704437892635-Free-Account-Key-Features-and-Limits
- Keywords People Use (tarifs) : https://keywordspeopleuse.com/pricing
- Keyword Surfer : https://surferseo.com/keyword-surfer-extension/
- OpenSEO (MIT, API payante) : https://github.com/every-app/open-seo · https://openseo.so

**Suivi de position**
- SerpBear (MIT) : https://github.com/towfiqi/serpbear

**Mesure d'audience & CNIL**
- CNIL, outils de mesure d'audience (4 juillet 2025) : https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience
- CNIL, guide de configuration Matomo (PDF) : https://www.cnil.fr/sites/default/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf
- Matomo, exemption sans consentement : https://matomo.org/faq/how-to/how-do-i-configure-matomo-without-tracking-consent-for-french-visitors-cnil-exemption/
- Matomo On-Premise : https://matomo.org/matomo-on-premise/
- Umami : https://github.com/umami-software/umami · https://umami.is/pricing
- Plausible, auto-hébergement : https://plausible.io/self-hosted-web-analytics
- PostHog (tarifs) : https://posthog.com/pricing
- Vercel Web Analytics (limites) : https://vercel.com/docs/analytics/limits-and-pricing
- Vercel, offre Hobby : https://vercel.com/docs/plans/hobby

**Technique & Core Web Vitals**
- Unlighthouse : https://unlighthouse.dev/guide/getting-started/installation · https://github.com/harlan-zw/unlighthouse
- Lighthouse CI : https://github.com/GoogleChrome/lighthouse-ci
- Screaming Frog : https://www.screamingfrog.co.uk/seo-spider/
- Ahrefs Webmaster Tools : https://ahrefs.com/webmaster-tools · https://help.ahrefs.com/en/articles/13002606-what-can-i-use-for-free-in-ahrefs
- PageSpeed Insights API : https://developers.google.com/speed/docs/insights/v5/get-started
- CrUX API : https://developer.chrome.com/docs/crux/api
- CrUX, notes de version (dépréciation du dashboard) : https://developer.chrome.com/docs/crux/release-notes

**API**
- Search Console API : https://developers.google.com/webmaster-tools/about · https://developers.google.com/webmaster-tools/limits
- Bing Webmaster API : https://learn.microsoft.com/en-us/bingwebmaster/
- Google Trends API (alpha) : https://developers.google.com/search/apis/trends · https://developers.google.com/search/blog/2025/07/trends-api
- IndexNow : https://www.indexnow.org/documentation

**GEO / IA**
- OneGlanse (MIT) : https://github.com/oneglanse/oneglanse
