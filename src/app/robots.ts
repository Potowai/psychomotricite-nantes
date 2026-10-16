import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Les moteurs de réponse par IA (ChatGPT, Perplexity, Copilot, Gemini, Claude…)
 * sont explicitement autorisés : l'objectif est d'être citée, pas d'être ignorée.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
