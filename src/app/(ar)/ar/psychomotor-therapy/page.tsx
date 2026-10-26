import type { Metadata } from "next";
import { copy } from "@/i18n/copies/psychomotricite";
import { PsychomotricitePage } from "@/screens/psychomotricite";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/psychomotor-therapy",
  locale: "ar",
});

export default function Page() {
  return <PsychomotricitePage locale="ar" />;
}
