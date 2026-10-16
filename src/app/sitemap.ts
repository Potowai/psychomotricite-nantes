import type { MetadataRoute } from "next";
import { articlesFor } from "@/content/blog";
import { motifs } from "@/content/motifs";
import { site } from "@/lib/site";

const SITE_UPDATED = new Date("2026-10-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/psychomotricite`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/qui-suis-je`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/seances-et-tarifs`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${site.url}/faq`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/en`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const motifRoutes: MetadataRoute.Sitemap = motifs.map((motif) => ({
    url: `${site.url}/psychomotricite/${motif.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articlesFor().map((article) => ({
    url: `${site.url}/blog/${article.slug}`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...motifRoutes, ...articleRoutes];
}
