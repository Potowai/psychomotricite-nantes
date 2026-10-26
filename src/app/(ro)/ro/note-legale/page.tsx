import type { Metadata } from "next";
import { copy } from "@/i18n/copies/legal";
import { LegalPage } from "@/screens/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/note-legale",
  locale: "ro",
});

export default function Page() {
  return <LegalPage locale="ro" />;
}
