import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { motifs as motifsFr, getMotif } from "@/content/motifs";
import { MotifPage } from "@/screens/motif";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return motifsFr.map((motif) => ({ motif: motif.slug }));
}

export async function generateMetadata(
  props: PageProps<"/psychomotricite/[motif]">,
): Promise<Metadata> {
  const { motif: slug } = await props.params;
  const motif = getMotif(slug);
  if (!motif) return {};

  return pageMetadata({
    title: motif.metaTitle,
    description: motif.metaDescription,
    path: `/psychomotricite/${motif.slug}`,
    locale: "fr",
  });
}

export default async function Page(props: PageProps<"/psychomotricite/[motif]">) {
  const { motif: slug } = await props.params;
  if (!getMotif(slug)) notFound();

  return <MotifPage locale="fr" slug={slug} />;
}
