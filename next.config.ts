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
  { source: "/feed", destination: "/rss.xml" },
  { source: "/feed/", destination: "/rss.xml" },
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
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
