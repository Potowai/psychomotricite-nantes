import type { Metadata } from "next";
import { copy } from "@/i18n/copies/privacy";
import { PrivacyPage } from "@/screens/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/privacy",
  locale: "ar",
});

export default function Page() {
  return <PrivacyPage locale="ar" />;
}
