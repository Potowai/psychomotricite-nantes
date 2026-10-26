import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMotif } from "@/content/motifs.ro";
import { MotifPage } from "@/screens/motif";
import { motifPaths, type MotifKey } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

/** Les URL sont localisées ; le contenu est indexé par la clé française. */
function cleDepuisSlug(slug: string): MotifKey | undefined {
  return (Object.keys(motifPaths) as MotifKey[]).find(
    (cle) => motifPaths[cle].ro.split("/").pop() === slug,
  );
}

export function generateStaticParams() {
  return (Object.keys(motifPaths) as MotifKey[]).map((cle) => ({
    motif: motifPaths[cle].ro.split("/").pop()!,
  }));
}

export async function generateMetadata(
  props: PageProps<"/ro/psihomotricitate/[motif]">,
): Promise<Metadata> {
  const { motif: slug } = await props.params;
  const cle = cleDepuisSlug(slug);
  if (!cle) return {};
  const motif = getMotif(cle);
  if (!motif) return {};

  return pageMetadata({
    title: motif.metaTitle,
    description: motif.metaDescription,
    path: motifPaths[cle].ro,
    locale: "ro",
  });
}

export default async function Page(
  props: PageProps<"/ro/psihomotricitate/[motif]">,
) {
  const { motif: slug } = await props.params;
  const cle = cleDepuisSlug(slug);
  if (!cle) notFound();

  return <MotifPage locale="ro" slug={cle} />;
}
