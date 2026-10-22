import type { Metadata } from "next";
import { copy } from "@/i18n/copies/psychomotricite";
import { PsychomotricitePage } from "@/screens/psychomotricite";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/psychomotor-therapy",
  locale: "en",
});

export default function Page() {
  return <PsychomotricitePage locale="en" />;
}
