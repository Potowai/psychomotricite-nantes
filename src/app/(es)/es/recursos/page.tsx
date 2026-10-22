import type { Metadata } from "next";
import { copy } from "@/i18n/copies/resources";
import { ResourcesPage } from "@/screens/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/recursos",
  locale: "es",
});

export default function Page() {
  return <ResourcesPage locale="es" />;
}
