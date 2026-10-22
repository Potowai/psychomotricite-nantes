# Plan — site bilingue français / anglais, page par page

État au 22 octobre 2026. Aujourd'hui : le site français est complet (9 pages, 5 fiches motifs, 4 articles) et l'anglais tient sur une seule page `/en`.

Objectif : chaque page existe en français et en anglais, à une adresse propre, avec la même structure, les mêmes motifs et la même voix.

## Décisions proposées

| Sujet | Choix proposé | Pourquoi |
| --- | --- | --- |
| Langues | français + anglais | Ses deux langues de travail. Une troisième langue coûtera un dictionnaire de plus, pas une refonte. |
| URL françaises | inchangées | Le site français est indexé ; on ne déplace rien. |
| URL anglaises | `/en/…`, miroir de chaque page | Adresses lisibles, canonical propre, pas de duplication. |
| Architecture | deux racines de layout, `(fr)` et `(en)` | `<html lang>` correct dès le HTML, aucune redirection, aucun proxy. |
| Textes | dictionnaires typés `fr` / `en` | Une clé manquante casse le build. |
| Anglais | britannique (`en_GB`) | Déjà en place sur `/en`. |
| Traduction | brouillon proposé, relecture par Manuela | La voix et les termes cliniques ne se délèguent pas à une machine. |
| `x-default` | version française | Public local d'abord. |

## Arborescence cible

```
src/app/
  (fr)/                     → URLs actuelles, / incluse
    layout.tsx              <html lang="fr">
    page.tsx                accueil
    psychomotricite/        + [motif]
    qui-suis-je/
    seances-et-tarifs/
    contact/
    faq/
    blog/                   + [slug]
    mentions-legales/
    politique-de-confidentialite/
  (en)/en/                  → /en, /en/about, /en/sessions-and-fees…
    layout.tsx              <html lang="en">
    page.tsx
    psychomotor-therapy/    + [motif]
    about/
    sessions-and-fees/
    contact/
    faq/
    resources/              + [slug]
    legal-notice/
    privacy/

src/i18n/
  config.ts                 langues, formats, hreflang
  routes.ts                 paires d'URL FR ↔ EN
  dictionaries/fr.ts        + en.ts, typés l'un par l'autre
src/screens/                corps de page partagé, reçoit `locale`
```

Les fichiers de route restent minces : `app/(en)/en/about/page.tsx` rend `<About locale="en" />`, la page française rend le même composant avec `locale="fr"`.

## Détail des étapes

### 1. Socle invisible

- Deux layouts racines, en-tête, pied de page, bandeau d'appel et carte reçoivent la langue par un contexte.
- `SiteHeader`, `SiteFooter`, `ContactForm`, `CabinetMap`, `LanguageBanner` : libellés sortis des composants et rangés dans les dictionnaires.
- Aucun changement visible : le français doit rendre exactement comme aujourd'hui (contrôle par capture avant / après).

### 2. Extraction des textes français

- Les textes des 9 pages, des 5 motifs et des 4 articles passent dans les dictionnaires.
- `src/lib/site.ts` garde les faits partagés (adresse, téléphone, tarifs, coordonnées) ; seuls les textes bougent.
- `motifs.ts` et `blog.ts` deviennent des fiches bilingues : `{ slug: { fr, en }, copy: { fr, en } }`.

### 3. Enveloppe anglaise

- Layout anglais, navigation anglaise (Home, Psychomotor therapy, About, Sessions & fees, Resources, Contact), pied de page, 404, bandeaux d'appel.
- Sélecteur de langue permanent : en-tête bureau, menu mobile, pied de page. Il pointe vers la page équivalente, pas vers l'accueil.
- La pastille flottante actuelle reste pour la première visite et mène elle aussi à l'équivalent.

### 4. Pages socles

Ordre de valeur : accueil, psychomotricité, séances & tarifs, qui suis-je, contact, FAQ. La page `/en` actuelle sert de base à la nouvelle accueil anglaise.

### 5. Fiches motifs

Cinq fiches, avec des adresses anglaises :

| Français | Anglais |
| --- | --- |
| `douance-hqi-thqi` | `giftedness-hqi-thqi` |
| `tdah` | `adhd` |
| `anxiete-burn-out` | `anxiety-and-burnout` |
| `troubles-dys` | `specific-learning-difficulties` |
| `personne-agee` | `older-adults` |

### 6. Articles

Quatre articles, traduits en dernier. Tant qu'un article n'a pas sa version anglaise, il n'apparaît pas dans la liste anglaise : aucune page à moitié traduite.

### 7. SEO

- Chaque page : `canonical`, `alternates.languages` (`fr-FR`, `en`, `x-default`), `openGraph.locale` et `alternateLocale`.
- Sitemap : une entrée par langue, avec les paires.
- JSON-LD : `inLanguage` par page, `availableLanguage` sur le service.
- Image de partage anglaise, `rss.xml` français (flux anglais plus tard), `llms.txt` à trancher.
- Aucune redirection selon `Accept-Language` : Googlebot crawle depuis l'étranger.

### 8. Formulaire et e-mails

- Libellés, champs facultatifs `(optional)`, erreurs et confirmation en anglais.
- L'e-mail reçu par Manuela indique la langue du visiteur.
- Consentement renvoyant à la politique de confidentialité anglaise.

### 9. Recette

- Parité des dictionnaires garantie par TypeScript.
- Script de couverture : chaque URL française a son équivalent anglais, et réciproquement.
- Balayage des pages anglaises : mots français restants, `lang` corrects.
- Débordements et contrastes à 320, 390, 768 et 1280 px sur les pages anglaises.
- Formulaire, sélecteur de langue, lecteur d'écran, `npm run build`, `tsc`, `lint`.

### 10. Mise en ligne

Par lots déployables : socle, puis pages socles, puis motifs, puis articles. Chaque page anglaise n'est publiée que complète.

## Volume

- 18 pages à doubler (9 pages + 5 motifs + 4 articles).
- Environ 5 700 mots de copie visible, hors corps des articles.
- Trois lots de relecture : pages socles, motifs et pages légales, articles.

## Glossaire de départ

| Français | Anglais |
| --- | --- |
| psychomotricité | psychomotor therapy |
| psychomotricienne D.E. | state-certified psychomotor therapist (D.E.) |
| bilan psychomoteur | psychomotor assessment |
| séance de suivi | follow-up session |
| douance, HPI, HQI/THQI | giftedness, HPI, HQI/THQI |
| TSA | ASD |
| TDA-H | ADHD |
| troubles dys | specific learning difficulties |
| mutuelle | private health insurance |
| MDPH | MDPH (conservé, expliqué une fois) |
| cabinet pluridisciplinaire | multidisciplinary practice |

## Risques et garde-fous

- **Deux sites qui divergent.** Chaque modification française doit être répercutée : la parité des dictionnaires et la revue de lot le garantissent.
- **Contenu dupliqué.** Traité par `canonical` + `hreflang` + `x-default`.
- **Termes cliniques.** Le glossaire est relu avant la première publication.
- **Volume éditorial.** Les articles peuvent sortir après le reste ; le site anglais reste cohérent sans eux.
- **Pages légales.** Version anglaise avec la mention « The French version prevails » ; le français fait foi.

## Questions à trancher avant de commencer

1. **Langues** : français + anglais seulement, ou l'espagnol est-il envisagé ?
2. **Relecture** : je propose une version anglaise et elle relit, ou elle fournit un texte déjà validé ?
3. **Anglais britannique** : on garde `en_GB` ?
4. **Site anglais complet** ou page de présentation plus courte ? (proposé : miroir complet)
5. **Articles** : les quatre d'un coup, ou après les pages socles ?
6. **Pages légales** : la mention « la version française fait foi » convient-elle ?
