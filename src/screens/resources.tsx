import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Container, PageHero } from "@/components/ui";
import { articlesFor as articlesFr } from "@/content/blog";
import { articlesFor as articlesEn } from "@/content/blog.en";
import { articlesFor as articlesEs } from "@/content/blog.es";
import { copy } from "@/i18n/copies/resources";
import { articlePath, pages } from "@/lib/i18n";

/** Les ressources sont hors ligne : seules les trois langues d'origine sont typées. */
type LegacyLocale = "fr" | "en" | "es";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { formatDate } from "@/lib/format";

const collections = {
  fr: articlesFr,
  en: articlesEn,
  es: articlesEs,
};

export function ResourcesPage({ locale }: { locale: LegacyLocale }) {
  const t = copy[locale];
  const articles = collections[locale]();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: t.breadcrumb.home, href: pages.home[locale] },
          { label: t.breadcrumb.current },
        ]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
      />

      <Container className="py-16 lg:py-20">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-line/70 bg-paper-2 p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden="true"
                  className="mb-5 block h-1.5 w-10 rounded-full bg-azure"
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-ink-3">
                  <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                  <span aria-hidden="true">·</span>
                  <span>
                    {t.list.readingTime.replace(
                      "{minutes}",
                      String(article.readingMinutes),
                    )}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-display-4 leading-tight">
                  <Link
                    href={articlePath(locale, article.slug)}
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
                      className="rounded-full border border-azure/25 bg-blue-soft/60 px-3 py-1 text-xs text-blue-deep"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={articlePath(locale, article.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-blue-deep link-quiet"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {t.list.read}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <CtaBand locale={locale} />

      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumb.home, path: pages.home[locale] },
          { name: t.jsonLd.breadcrumbCurrent, path: pages.resources[locale] },
        ])}
      />
    </>
  );
}
