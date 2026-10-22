# Visuels : ce qui manque, et comment l'arranger en 5 minutes

## Où en est le site

| Emplacement | État |
| --- | --- |
| Portrait professionnel de Manuela (photo : Fabrice Rault) | ✅ en place, en couleur, détouré, cadré sur le haut des mains |
| Textures et lavis du site (aquarelle, encre, feuille) | ✅ en place — c'est l'identité visuelle |
| Façade du nouveau cabinet | ⬜ emplacement réservé, avec le repère « photo à venir » |
| Illustration « un moment de séance » (matière, mouvement, toucher) | ⬜ emplacement réservé |
| Illustration « écoute et sensorialité » (gros plan) | ⬜ emplacement réservé |

Les trois emplacements manquants affichent un **repère indicatif** qui décrit
l'image attendue — jamais une image inventée. C'est volontaire : mieux vaut
un repère honnête qu'une photo qui ne veut rien dire.

## Quatre images présentes dans le dépôt, mais inutilisées

Elles sont dans `src/assets/images/`, mais **aucune page ne les affiche** :

| Fichier | Ce que c'est | Avis |
| --- | --- | --- |
| `cabinet-exterieur.jpg` | photo de la façade « CABINET PARAMÉDICAL » | ✅ la bonne adresse, mais **filigrane Google Street View** (« © 2023 Google ») : exploitable pour la fiche Google, pas pour le site |
| `argile-mains.jpg` | main couverte de terre après une séance d'argile | ⚠️ ce n'est pas une illustration, c'est une photographie de banque d'images — droits et cohérence visuelle à vérifier |
| `ecoute-sensorielle.jpg` | gros plan noir et blanc d'une oreille et d'une nuque | ⚠️ idem : sujet intime, photo de banque d'images |
| `corps-mains.jpg` | mains et mouvement | ⚠️ idem |

**Décision à prendre** : soit ces images sont des visuels libres de droits
ou des créations de l'amie de Manuela (auquel cas on les intègre), soit ce
sont des photos trouvées en ligne (auquel cas on les laisse de côté — les
mentions légales du site peuvent en dépendre, et le README le dit
explicitement : « il faudra des visuels libres de droits ou créés sur
sur-mesure »).

En attendant, les repères « photo à venir » restent en place. C'est un choix
assumé, et le site est fully opérationnel sans.

## Comment intégrer un visuel quand il arrive

Le site n'a pas besoin d'être modifié pour accueillir une photo : il suffit
de déposer le fichier et de remplacer le repère.

1. **Déposer le fichier** dans `src/assets/images/` avec un nom explicite :

   | Visuel attendu | Nom de fichier | Format | Taille visée |
   | --- | --- | --- | --- |
   | Façade du cabinet | `cabinet-exterieur.jpg` | JPEG, 4:3 ou 3:2 | 1200 × 900 px, moins de 200 Ko |
   | Moment de séance | `seance-matiere.jpg` | JPEG | 1600 × 1200 px, moins de 250 Ko |
   | Écoute et sensorialité | `ecoute-sensorielle.jpg` | JPEG ou WebP | 1600 × 1200 px, moins de 250 Ko |

2. **Remplacer le repère** par l'image. Dans `src/screens/`, chaque
   emplacement réservé est un appel à `PhotoPlaceholder` ; il suffit de le
   remplacer par une balise `Image` de Next.js :

   ```tsx
   import Image from "next/image";
   import cabinet from "@/assets/images/cabinet-exterieur.jpg";

   <Image
     src={cabinet}
     alt="Façade du cabinet pluridisciplinaire, 4 rue de la Mitrie à Nantes"
     width={1200}
     height={900}
     className="w-full rounded-2xl object-cover"
   />
   ```

   Next.js optimise et sert l'image en `webp` : pas de travail de
   compression à faire.

3. **Vérifier** : `npm run build && npm start`, puis regarder la page. Le
   texte alternatif compte pour l'accessibilité **et** pour les moteurs de
   recherche : il doit décrire l'image, pas la nommer.

## L'ordre de priorité

1. **La façade du cabinet** — c'est la seule image qui manque vraiment :
   elle dit « le cabinet existe, à cette adresse ». C'est aussi la photo
   qui manque à la fiche Google.
2. **Le portrait** est déjà là : inutile d'attendre.
3. Les deux illustrations sont un plus : elles habillent, elles ne convertissent pas.

En attendant les visuels, la photo de façade **peut déjà être déposée sur la
fiche Google Business** (avec son filigrane Street View, ce n'est pas un
problème là-bas : Google dispose déjà de cette imagerie). C'est 2 minutes,
et c'est le levier n°1 du référencement local.
