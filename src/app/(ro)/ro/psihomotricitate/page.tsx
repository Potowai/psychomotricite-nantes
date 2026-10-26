import type { Metadata } from "next";
import { copy } from "@/i18n/copies/psychomotricite";
import { PsychomotricitePage } from "@/screens/psychomotricite";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/psihomotricitate",
  locale: "ro",
});

export default function Page() {
  return <PsychomotricitePage locale="ro" />;
}
