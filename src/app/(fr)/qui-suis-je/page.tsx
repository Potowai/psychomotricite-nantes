import type { Metadata } from "next";
import { copy } from "@/i18n/copies/about";
import { AboutPage } from "@/screens/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/qui-suis-je",
  locale: "fr",
});

export default function Page() {
  return <AboutPage locale="fr" />;
}
