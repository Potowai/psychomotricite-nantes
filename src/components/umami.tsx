import Script from "next/script";

/**
 * Umami — mesure d'audience auto-hébergée, sans cookie et sans donnée personnelle.
 * Alternative open source à Vercel Web Analytics, utile si Manuela veut posséder
 * ses statistiques (voir docs/outils-seo-gratuits.md).
 *
 * Le composant ne rend rien tant que `NEXT_PUBLIC_UMAMI_SRC` et
 * `NEXT_PUBLIC_UMAMI_WEBSITE_ID` ne sont pas renseignés : activer Umami est donc
 * une simple variable d'environnement à ajouter dans Vercel, sans toucher au code.
 */
export function Umami() {
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!src || !websiteId) {
    return null;
  }

  return (
    <Script
      defer
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
