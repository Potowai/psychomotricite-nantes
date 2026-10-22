import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articlesFor as articlesEs, getArticle } from "@/content/blog.es";
import { ArticlePage } from "@/screens/article";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articlesEs().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/es/recursos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/es/recursos/${article.slug}`,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    locale: "es",
  });
}

export default async function Page(props: PageProps<"/es/recursos/[slug]">) {
  const { slug } = await props.params;
  if (!getArticle(slug)) notFound();

  return <ArticlePage locale="es" slug={slug} />;
}
