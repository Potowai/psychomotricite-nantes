import type { Metadata } from "next";
import { copy } from "@/i18n/copies/legal";
import { LegalPage } from "@/screens/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/legal-notice",
  locale: "en",
});

export default function Page() {
  return <LegalPage locale="en" />;
}
