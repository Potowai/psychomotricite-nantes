import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/**
 * Métadonnées par page : canonical, Open Graph et Twitter cohérents.
 * `path` doit commencer par « / » (racine = « / »).
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: PageMeta): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: "fr_FR",
      url: canonical,
      siteName: `${site.name} — ${site.role}`,
      title,
      description,
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors: [site.name] }
        : {}),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${site.name}, psychomotricienne à Nantes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
