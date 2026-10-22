import type { Metadata } from "next";
import { copy } from "@/i18n/copies/sessions";
import { SessionsPage } from "@/screens/sessions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/seances-et-tarifs",
  locale: "fr",
});

export default function Page() {
  return <SessionsPage locale="fr" />;
}
