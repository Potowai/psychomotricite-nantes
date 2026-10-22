import type { Metadata } from "next";
import { copy } from "@/i18n/copies/sessions";
import { SessionsPage } from "@/screens/sessions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/sesiones-y-tarifas",
  locale: "es",
});

export default function Page() {
  return <SessionsPage locale="es" />;
}
