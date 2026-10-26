import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Breadcrumbs, Callout, Container } from "@/components/ui";
import {
  type Block,
  articlesFor as articlesFr,
} from "@/content/blog";
import { articlesFor as articlesEn } from "@/content/blog.en";
import { articlesFor as articlesEs } from "@/content/blog.es";
import { copy } from "@/i18n/copies/article";
import { articlePath, pages } from "@/lib/i18n";

/** Les ressources sont hors ligne : seules les trois langues d'origine sont typées. */
type LegacyLocale = "fr" | "en" | "es";
import { formatDate } from "@/lib/format";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const collections = {
  fr: articlesFr,
  en: articlesEn,
  es: articlesEs,
};

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-xl leading-relaxed text-ink sm:text-[1.35rem]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-14 text-display-4 leading-tight sm:text-[2rem]">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="leading-[1.78] text-ink-2">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink-2">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-blue/40 pl-6 font-display text-[1.4rem] leading-snug text-ink sm:text-[1.6rem]">
          « {block.text} »
        </blockquote>
      );
    case "note":
      return (
        <Callout title={block.title} tone="blue">
          <p>{block.text}</p>
        </Callout>
      );
  }
}

export function ArticlePage({
  locale,
  slug,
}: {
  locale: LegacyLocale;
  slug: string;
}) {
  const t = copy[locale];
  const article = collections[locale]().find((a) => a.slug === slug);
  if (!article) return null;

  const path = articlePath(locale, article.slug);
  const related = collections[locale]()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <Container className="py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: t.breadcrumb.home, href: pages.home[locale] },
              { label: t.breadcrumb.current, href: pages.resources[locale] },
              { label: article.title },
            ]}
          />

          <header className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-ink-3">
              <time dateTime={article.date}>
                {formatDate(article.date, locale)}
              </time>
              <span aria-hidden="true">·</span>
              <span>
                {t.list.readingTime.replace(
                  "{minutes}",
                  String(article.readingMinutes),
                )}
              </span>
            </div>
            <h1 className="mt-5 text-display-4 leading-[1.06] sm:text-[3rem]">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              {article.description}
            </p>
            <hr className="rule mt-8" />
          </header>

          <div className="mx-auto mt-10 max-w-2xl space-y-6">
            {article.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>

          <footer className="mx-auto mt-14 max-w-2xl border-t border-line pt-8">
            <p className="text-sm text-ink-2">
              {t.footer.before}
              <Link
                href={pages.about[locale]}
                className="text-blue-deep link-quiet"
              >
                {site.name}
              </Link>
              {t.footer.after}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </footer>
        </Container>
      </article>

      <section className="bg-paper-2">
        <Container className="py-16">
          <h2 className="eyebrow">{t.related.title}</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={articlePath(locale, a.slug)}
                  className="group block border-t border-line pt-6"
                >
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-3">
                    {formatDate(a.date, locale)}
                  </span>
                  <span className="mt-3 block font-display text-xl text-ink transition-colors group-hover:text-blue-deep">
                    {a.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} />

      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            slug: article.slug,
            datePublished: article.date,
            dateModified: article.updated,
            path,
            locale,
          }),
          breadcrumbSchema([
            { name: t.breadcrumb.home, path: pages.home[locale] },
            { name: t.jsonLd.breadcrumbCurrent, path: pages.resources[locale] },
            { name: article.title, path },
          ]),
        ]}
      />
    </>
  );
}
