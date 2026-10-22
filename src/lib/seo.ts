import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import { alternatesFor, ogLocale, pages, type Locale } from "./i18n";
import { site } from "./site";

/**
 * Routes réellement publiées, lues dans le système de fichiers au build.
 *
 * Les versions traduites arrivent page par page : le tableau `hreflang`
 * ne doit donc annoncer que des adresses qui existent, sinon Google ignore
 * tout le groupe et trouve des liens morts. Dès qu'une page anglaise ou
 * espagnole est ajoutée, son entrée apparaît automatiquement.
 */
function publishedRoutes(): string[] {
  const root = path.join(process.cwd(), "src", "app");
  const routes: string[] = [];

  const walk = (dir: string, prefix: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Les groupes de routes — (fr), (en), (es) — n'apparaissent pas
        // dans l'URL.
        const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
        walk(full, isGroup ? prefix : `${prefix}/${entry.name}`);
      } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        routes.push(prefix === "" ? "/" : prefix);
      }
    }
  };

  try {
    walk(root, "");
  } catch {
    return routes;
  }
  return routes;
}

const published = publishedRoutes();

/** L'adresse existe-t-elle ? Les segments dynamiques comptent comme jalons. */
function isPublished(urlPath: string): boolean {
  const clean = urlPath.replace(/\/+$/, "") || "/";
  const target = clean.split("/").filter(Boolean);
  return published.some((route) => {
    const segments = route.split("/").filter(Boolean);
    if (segments.length !== target.length) return false;
    return segments.every(
      (segment, index) =>
        segment.startsWith("[") ||
        segment === target[index],
    );
  });
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  locale?: Locale;
  languages?: Record<string, string>;
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
  locale = "fr",
  languages,
}: PageMeta): Metadata {
  const canonical = path === "/" ? "/" : path;
  const alternates = languages ?? alternatesFor(canonical);

  // On ne déclare que les versions qui existent : une entrée hreflang vers
  // une page absente est pire que pas d'entrée du tout.
  const publishedAlternates = alternates
    ? Object.fromEntries(
        Object.entries(alternates).filter(([, href]) => isPublished(href)),
      )
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(publishedAlternates && Object.keys(publishedAlternates).length > 0
        ? { languages: publishedAlternates }
        : {}),
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: ogLocale[locale],
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
          alt: `${title} — ${site.name}`,
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

const metaCopy: Record<
  Locale,
  {
    role: string;
    titleDefault: string;
    titleTemplate: string;
    description: string;
    category: string;
  }
> = {
  fr: {
    role: "Psychomotricienne D.E.",
    titleDefault: `${site.name} — ${site.role} à Nantes`,
    // Suffixe court : Google n'affiche qu'environ 60 caractères, et c'est
    // le sujet de la page qui doit rester lisible.
    titleTemplate: `%s — ${site.name}, Nantes`,
    description: site.description,
    category: "Santé",
  },
  en: {
    role: "Psychomotor therapist (D.E.)",
    titleDefault: `${site.name} — psychomotor therapist in Nantes`,
    titleTemplate: `%s — ${site.name}, Nantes`,
    description:
      "Manuela Edom is a state-certified psychomotor therapist in Nantes. Sessions for teenagers and adults, and children in specific situations, at the practice at 4 rue de la Mitrie. Giftedness (HPI, HQI/THQI), ASD, ADHD, specific learning difficulties.",
    category: "Health",
  },
  es: {
    role: "Psicomotricista D.E.",
    titleDefault: `${site.name} — psicomotricista en Nantes`,
    titleTemplate: `%s — ${site.name}, Nantes`,
    description:
      "Manuela Edom es psicomotricista diplomada de Estado en Nantes. Sesiones para adolescentes y personas adultas, y para niños ante solicitudes específicas, en el consultorio de la calle de la Mitrie 4. Altas capacidades (HPI, HQI/THQI), TEA, TDAH, dificultades específicas del aprendizaje.",
    category: "Salud",
  },
};

/**
 * Métadonnées communes à une racine de langue : titre par défaut, description,
 * Open Graph dans la bonne langue, et vérification du domaine.
 */
export function buildMetadata(locale: Locale): Metadata {
  const t = metaCopy[locale];

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.titleDefault,
      template: t.titleTemplate,
    },
    description: t.description,
    applicationName: `${site.name} — ${t.role}`,
    authors: [{ name: site.name, url: `${site.url}${pages.about[locale]}` }],
    creator: site.name,
    publisher: site.name,
    category: t.category,
    // Renseignées par variables d'environnement après vérification du domaine
    // dans Search Console / Bing Webmaster Tools — rien n'est émis si absentes.
    verification: {
      ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
        : {}),
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? {
            other: {
              "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
            },
          }
        : {}),
    },
    alternates: {
      types: {
        "application/rss+xml": "/rss.xml",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: (["fr", "en", "es"] as Locale[]).filter(
        (code) => code !== locale,
      ).map((code) => ogLocale[code]),
      url: "/",
      siteName: `${site.name} — ${t.role}`,
      title: t.titleDefault,
      description: t.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.titleDefault,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: true, address: true, email: true },
    other: {
      "geo.region": "FR-44",
      "geo.placename": "Nantes",
      "geo.position": `${site.address.geo.latitude};${site.address.geo.longitude}`,
      ICBM: `${site.address.geo.latitude}, ${site.address.geo.longitude}`,
    },
  };
}
