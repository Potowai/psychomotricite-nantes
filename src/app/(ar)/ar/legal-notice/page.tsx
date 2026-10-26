import type { Metadata } from "next";
import { copy } from "@/i18n/copies/legal";
import { LegalPage } from "@/screens/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/legal-notice",
  locale: "ar",
});

export default function Page() {
  return <LegalPage locale="ar" />;
}
