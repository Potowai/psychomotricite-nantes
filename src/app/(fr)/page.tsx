import type { Metadata } from "next";
import { copy } from "@/i18n/copies/home";
import { HomePage } from "@/screens/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/",
  locale: "fr",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
