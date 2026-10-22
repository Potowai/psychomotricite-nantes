# Mettre `psychomotriciennenantes.fr` en ligne

Runbook de bascule, écrit le 22 octobre 2026. À suivre dans l'ordre.

## Où on en est

| | |
| --- | --- |
| Nouveau site | déjà en ligne sur `https://psychomotricite-nantes.vercel.app` |
| Domaine | `psychomotriciennenantes.fr`, enregistré chez **WordPress.com** (registrar Key-Systems) |
| DNS actuels | `ns1/ns2/ns3.wordpress.com` → l'ancien site WordPress |
| E-mail sur ce domaine | **aucun** (pas d'enregistrement MX) → la bascule ne coupe aucun e-mail |
| Échéance du domaine | 06/12/2026, renouvellement chez WordPress.com |
| Ancien site | ne contient que les **articles d'exemple** de WordPress + une page `/about` → rien à perdre en référencement |
| `psychomotricite.com` | plus joignable (hébergé chez Gandi) → on ne y revient pas, l'adresse officielle est `psychomotriciennenantes.fr` |

Il n'y a **rien à migrer** : pas de WordPress à exporter, pas de contenu à
recopier. La bascule = une manipulation de DNS.

## Décision : le site n'envoie aucun e-mail

Le formulaire de contact **n'ouvre que l'application de messagerie du
visiteur**, avec le message pré-rempli (nom, e-mail, téléphone, âge, motif,
préférence, message). Le visiteur l'envoie depuis sa propre boîte : la
réponse arrive avec son adresse réelle, et le site n'a besoin d'aucun compte
d'envoi, d'aucune clé d'API, d'aucun enregistrement DNS supplémentaire.

Conséquences :

- aucune variable d'environnement à renseigner, aucun service à payer ;
- la page propose toujours le téléphone et le SMS en repli ;
- le message complet reste affiché à l'écran et copiable, donc rien n'est
  perdu même si la messagerie ne s'ouvre pas.

## Ordre des opérations

| # | Qui | Quoi |
| --- | --- | --- |
| A | dev | Vercel : ajouter le domaine et le `www` |
| B | Manuela | WordPress.com : changer les serveurs de noms (6 clics) |
| C | dev | Vérifier la bascule et les redirections |
| D | dev | Search Console, sitemap, fiche Google |
| E | dev | Deux semaines après : passer l'ancien site WordPress en privé |

---

## A. Vercel — ajouter le domaine

1. Projet `psychomotricite-nantes` → **Settings → Domains** → *Add Domain*.
2. Ajouter `psychomotriciennenantes.fr` (Vercel propose aussi le `www` : l'ajouter).
3. Pour le `www` : icône *Redirect to* → `psychomotriciennenantes.fr` (le site
   canonique est **sans** `www`).
4. Noter les deux valeurs affichées pour les serveurs de noms. Elles sont
   actuellement `ns1.vercel-dns.com` et `ns2.vercel-dns.com`, mais **celles
   affichées dans le tableau de bord font foi**.
5. Lancer la vérification : elle ne pourra aboutir qu'après l'étape B.

> Le code prévoit déjà un renvoi `www` → apex (`next.config.ts`), quel que soit
> le réglage du tableau de bord.

## B. Manuela — le changement côté WordPress.com

> Objectif : dire au domaine que le site est désormais hébergé par Vercel.
> Environ 5 minutes, un matin en semaine.

1. Ouvrir <https://my.wordpress.com/domains> (même identifiant que son admin
   WordPress) et se connecter.
2. Cliquer sur `psychomotriciennenantes.fr`.
3. Dans **Réglages** (colonne de gauche) → **Serveurs de noms**.
4. Désactiver l'interrupteur **« Utiliser les serveurs de noms WordPress.com »**.
5. Saisir les deux valeurs notées à l'étape A :
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
6. **Enregistrer**.

Délai : généralement moins d'une heure, jusqu'à 72 h dans le pire cas. Pendant
ce temps, `psychomotriciennenantes.fr/wp-admin` ne répond plus : c'est normal,
ça veut dire que la bascule a pris.

**Retour arrière possible à tout moment** : réactiver l'interrupteur de l'étape 4.

### Le message à lui envoyer

> Bonjour Manuela,
> Le nouveau site est prêt. Il ne reste qu'une petite manipulation (5 minutes)
> pour que ton nom de domaine affiche le nouveau site :
> 1. Ouvre **my.wordpress.com/domains** et connecte-toi (même identifiant que
>    ton admin WordPress).
> 2. Clique sur **psychomotriciennenantes.fr**.
> 3. Dans **Réglages** (à gauche) → **Serveurs de noms**.
> 4. Désactive **« Utiliser les serveurs de noms WordPress.com »**.
> 5. Saisis `ns1.vercel-dns.com` puis `ns2.vercel-dns.com`.
> 6. **Enregistrer**.
>
> Dis-moi quand tu es à l'étape 4, je reste disponible pour vérifier avec toi.
> Rien n'est supprimé : on peut revenir en arrière en un clic si besoin.

## C. Vérifier la bascule

- Les deux entrées de *Settings → Domains* sur Vercel passent au vert *Valid*.
- `https://psychomotriciennenantes.fr` affiche le nouveau site.
- `https://www.psychomotriciennenantes.fr` renvoie un **308** vers l'apex.
- `/about` renvoie un **308** vers `/contact`, et les cinq anciennes URL
  d'articles vers les pages nouvelles.
- Le formulaire ouvre bien la messagerie avec le message pré-rempli, et le
  numéro de téléphone reste joignable.

## D. Référencement

1. Search Console : ajouter la propriété `psychomotriciennenantes.fr`
   (préférence *Domaine*, vérification par enregistrement DNS) puis
   soumettre `https://psychomotriciennenantes.fr/sitemap.xml`.
2. L'IndexNow (`scripts/indexnow.mjs`) se met à fonctionner tout seul une fois
   le domaine résolu.
3. Fiche Google Business Profile : l'URL ne change pas, rien à modifier.
4. Variables d'environnement à renseigner sur Vercel (facultatives) :
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`,
   `NEXT_PUBLIC_BING_SITE_VERIFICATION`, et Umami si l'on veut mesurer
   l'audience. Voir `.env.example`.

## E. Deux semaines après

Passer l'ancien site WordPress.com en **privé** (WordPress.com → *Réglages →
visibilité*), une fois la bascule confirmée et le référencement stabilisé.
Ne pas le supprimer : c'est le filet de sécurité.

## Ce qu'il ne faut surtout pas faire

- **Ne pas résilier l'abonnement WordPress.com** avant d'avoir vérifié que le
  domaine se renouvelle bien seul (06/12/2026). Changer les serveurs de noms
  ne change rien à qui paie le domaine.
- **Ne pas toucher à `psychomotricite.com`** (Gandi) : le site n'y est plus
  joignable, c'est normal.
- **Ne pas basculer un vendredi soir** : la propagation peut prendre une
  heure, autant être réveillé pour la vérifier.
