import type { MetadataRoute } from "next";
import { articlesFor } from "@/content/blog";
import { motifs } from "@/content/motifs";
import {
  articlePaths,
  motifPaths,
  pages,
  type ArticleKey,
  type Locale,
  type MotifKey,
} from "@/lib/i18n";
import { site } from "@/lib/site";

const SITE_UPDATED = new Date("2026-10-16");

/** Une page et ses trois versions : le sitemap en liste les trois. */
type Entry = {
  paths: Record<Locale, string>;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

function entry(
  paths: Record<Locale, string>,
  lastModified: Date,
  changeFrequency: Entry["changeFrequency"],
  priority: number,
): Entry {
  return { paths, lastModified, changeFrequency, priority };
}

const staticPages: Entry[] = [
  entry(pages.home, SITE_UPDATED, "monthly", 1),
  entry(pages.psychomotricite, SITE_UPDATED, "monthly", 0.9),
  entry(pages.about, SITE_UPDATED, "monthly", 0.8),
  entry(pages.sessions, SITE_UPDATED, "monthly", 0.9),
  entry(pages.contact, SITE_UPDATED, "yearly", 0.9),
  entry(pages.faq, SITE_UPDATED, "monthly", 0.7),
  entry(pages.resources, SITE_UPDATED, "weekly", 0.7),
];

const motifPages: Entry[] = motifs.map((motif) => {
  const paths = motifPaths[motif.slug as MotifKey];
  return entry(paths, SITE_UPDATED, "monthly", 0.8);
});

const articlePages: Entry[] = articlesFor().map((article) => {
  const paths = articlePaths[article.slug as ArticleKey];
  return entry(
    paths,
    new Date(article.updated ?? article.date),
    "yearly",
    0.6,
  );
});

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [...staticPages, ...motifPages, ...articlePages];

  return entries.flatMap((item) => {
    const languages: Record<string, string> = {};
    (Object.keys(item.paths) as Locale[]).forEach((locale) => {
      const path = item.paths[locale];
      if (path) {
        languages[locale === "fr" ? "fr-FR" : locale] = `${site.url}${path}`;
      }
    });
    if (item.paths.fr) languages["x-default"] = `${site.url}${item.paths.fr}`;

    return (Object.keys(item.paths) as Locale[])
      .filter((locale) => item.paths[locale])
      .map((locale) => ({
        url: `${site.url}${item.paths[locale]}`,
        lastModified: item.lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages },
      }));
  });
}
