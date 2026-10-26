import type { NextConfig } from "next";

/**
 * Redirections permanentes depuis l'ancien site WordPress
 * (psychomotriciennenantes.fr) vers les nouvelles pages de ce site,
 * afin de préserver le référencement et les liens existants.
 */
const legacyRedirects = [
  { source: "/about", destination: "/contact" },
  { source: "/about/", destination: "/contact" },
  { source: "/2024/10/11/lart-des-liens", destination: "/psychomotricite" },
  { source: "/2024/10/11/lart-des-liens/", destination: "/psychomotricite" },
  { source: "/2024/10/11/au-dela-de-lobstacle", destination: "/qui-suis-je" },
  { source: "/2024/10/11/au-dela-de-lobstacle/", destination: "/qui-suis-je" },
  { source: "/2024/10/11/croissance-liberee", destination: "/seances-et-tarifs" },
  { source: "/2024/10/11/croissance-liberee/", destination: "/seances-et-tarifs" },
  {
    source: "/2024/10/11/la-magie-de-la-collaboration",
    destination: "/contact",
  },
  {
    source: "/2024/10/11/la-magie-de-la-collaboration/",
    destination: "/contact",
  },
  {
    source: "/2024/10/11/le-travail-dequipe-triomphe",
    destination: "/blog",
  },
  {
    source: "/2024/10/11/le-travail-dequipe-triomphe/",
    destination: "/blog",
  },
  { source: "/feed", destination: "/" },
  { source: "/feed/", destination: "/" },
] as const;

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Les anciennes URL WordPress : priorité, pour ne pas perdre le
      // référencement acquis, même en www.
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
      // Les ressources sont retirées du site jusqu'en janvier : on renvoie
      // vers l'accueil de la langue plutôt que de laisser des 404.
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/en/resources/:path*", destination: "/en", permanent: true },
      { source: "/es/recursos/:path*", destination: "/es", permanent: true },
      // Le site canonique est sans « www » : le www est renvoyé vers
      // l'adresse de référence, quoi qu'il arrive côté configuration Vercel.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.psychomotriciennenantes.fr" }],
        destination: "https://psychomotriciennenantes.fr/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
