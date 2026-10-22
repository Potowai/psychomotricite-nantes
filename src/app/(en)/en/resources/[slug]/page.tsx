import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articlesFor as articlesEn, getArticle } from "@/content/blog.en";
import { ArticlePage } from "@/screens/article";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articlesEn().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/en/resources/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/en/resources/${article.slug}`,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    locale: "en",
  });
}

export default async function Page(props: PageProps<"/en/resources/[slug]">) {
  const { slug } = await props.params;
  if (!getArticle(slug)) notFound();

  return <ArticlePage locale="en" slug={slug} />;
}
