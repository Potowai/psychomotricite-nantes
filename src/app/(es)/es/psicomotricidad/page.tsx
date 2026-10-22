import type { Metadata } from "next";
import { copy } from "@/i18n/copies/psychomotricite";
import { PsychomotricitePage } from "@/screens/psychomotricite";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/psicomotricidad",
  locale: "es",
});

export default function Page() {
  return <PsychomotricitePage locale="es" />;
}
