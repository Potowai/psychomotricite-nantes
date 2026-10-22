import type { Metadata } from "next";
import { copy } from "@/i18n/copies/psychomotricite";
import { PsychomotricitePage } from "@/screens/psychomotricite";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/psychomotricite",
  locale: "fr",
});

export default function Page() {
  return <PsychomotricitePage locale="fr" />;
}
