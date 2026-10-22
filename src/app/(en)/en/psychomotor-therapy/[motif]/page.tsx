import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { motifs as motifsEn, getMotif } from "@/content/motifs.en";
import { MotifPage } from "@/screens/motif";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return motifsEn.map((motif) => ({ motif: motif.slug }));
}

export async function generateMetadata(
  props: PageProps<"/en/psychomotor-therapy/[motif]">,
): Promise<Metadata> {
  const { motif: slug } = await props.params;
  const motif = getMotif(slug);
  if (!motif) return {};

  return pageMetadata({
    title: motif.metaTitle,
    description: motif.metaDescription,
    path: `/en/psychomotor-therapy/${motif.slug}`,
    locale: "en",
  });
}

export default async function Page(props: PageProps<"/en/psychomotor-therapy/[motif]">) {
  const { motif: slug } = await props.params;
  if (!getMotif(slug)) notFound();

  return <MotifPage locale="en" slug={slug} />;
}
