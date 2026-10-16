import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Container, PageHero } from "@/components/ui";
import { articlesFor } from "@/content/blog";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Ressources — comprendre le lien corps-esprit",
  description:
    "Articles sur la psychomotricité, la douance (HPI, HQI/THQI), les neuroatypies, l’anxiété et le rapport au corps, par Manuela Edom, psychomotricienne à Nantes.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const articles = articlesFor();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Ressources" }]}
        eyebrow="Ressources"
        title="Comprendre ce que le corps dit."
        lead="Des articles écrits pour être utiles — que vous consultiez ou non. Sur la psychomotricité, la douance, les neuroatypies, le rapport au corps."
      />

      <Container className="py-16 lg:py-20">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {articles.map((article, i) => (
            <li key={article.slug}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-line/70 bg-paper-2/50 p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden="true"
                  className={`mb-5 block h-1.5 w-10 rounded-full ${
                    ["bg-azure", "bg-corail", "bg-sage", "bg-ochre"][i % 4]
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-ink-3">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingMinutes} min de lecture</span>
                </div>
                <h2 className="mt-4 font-display text-[1.7rem] leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="transition-colors group-hover:text-blue-deep"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-ink-2">
                  {article.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-azure/25 bg-blue-soft/60 px-3 py-1 text-xs text-azure-deep"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-blue-deep link-quiet"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  Lire l’article
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/blog" },
        ])}
      />
    </>
  );
}
