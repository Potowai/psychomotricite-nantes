import type { Metadata } from "next";
import { copy } from "@/i18n/copies/privacy";
import { PrivacyPage } from "@/screens/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/privacidad",
  locale: "es",
});

export default function Page() {
  return <PrivacyPage locale="es" />;
}
