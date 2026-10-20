import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/contact-cta";
import { Breadcrumbs, Callout, Container } from "@/components/ui";
import { type Block, articlesFor, getArticle } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articlesFor().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
  });
}

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
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corail"
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

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articlesFor()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <Container className="py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/blog" },
              { label: article.title },
            ]}
          />

          <header className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-ink-3">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingMinutes} min de lecture</span>
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
              Écrit par{" "}
              <Link href="/qui-suis-je" className="text-blue-deep link-quiet">
                {site.name}
              </Link>
              , {site.role.toLowerCase()} à Nantes.
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

      <section className="border-t border-line bg-paper-2/60">
        <Container className="py-16">
          <h2 className="eyebrow">À lire aussi</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group block border-t border-line pt-6"
                >
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-3">
                    {formatDate(a.date)}
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

      <CtaBand />

      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            slug: article.slug,
            datePublished: article.date,
            dateModified: article.updated,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Ressources", path: "/blog" },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
        ]}
      />
    </>
  );
}
