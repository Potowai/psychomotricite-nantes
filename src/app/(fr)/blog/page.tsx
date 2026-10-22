import type { Metadata } from "next";
import { copy } from "@/i18n/copies/resources";
import { ResourcesPage } from "@/screens/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/blog",
  locale: "fr",
});

export default function Page() {
  return <ResourcesPage locale="fr" />;
}
