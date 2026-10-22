import type { Metadata } from "next";
import { copy } from "@/i18n/copies/legal";
import { LegalPage } from "@/screens/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/aviso-legal",
  locale: "es",
});

export default function Page() {
  return <LegalPage locale="es" />;
}
