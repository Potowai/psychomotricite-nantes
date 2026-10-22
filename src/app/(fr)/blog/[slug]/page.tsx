import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articlesFor as articlesFr, getArticle } from "@/content/blog";
import { ArticlePage } from "@/screens/article";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articlesFr().map((article) => ({ slug: article.slug }));
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
    locale: "fr",
  });
}

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  if (!getArticle(slug)) notFound();

  return <ArticlePage locale="fr" slug={slug} />;
}
