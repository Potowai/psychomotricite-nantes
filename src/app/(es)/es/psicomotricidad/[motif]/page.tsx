import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { motifs as motifsEs, getMotif } from "@/content/motifs.es";
import { MotifPage } from "@/screens/motif";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return motifsEs.map((motif) => ({ motif: motif.slug }));
}

export async function generateMetadata(
  props: PageProps<"/es/psicomotricidad/[motif]">,
): Promise<Metadata> {
  const { motif: slug } = await props.params;
  const motif = getMotif(slug);
  if (!motif) return {};

  return pageMetadata({
    title: motif.metaTitle,
    description: motif.metaDescription,
    path: `/es/psicomotricidad/${motif.slug}`,
    locale: "es",
  });
}

export default async function Page(props: PageProps<"/es/psicomotricidad/[motif]">) {
  const { motif: slug } = await props.params;
  if (!getMotif(slug)) notFound();

  return <MotifPage locale="es" slug={slug} />;
}
