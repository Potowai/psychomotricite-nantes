import type { Metadata } from "next";
import { copy } from "@/i18n/copies/legal";
import { LegalPage } from "@/screens/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/mentions-legales",
  locale: "fr",
});

export default function Page() {
  return <LegalPage locale="fr" />;
}
