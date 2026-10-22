import type { Metadata } from "next";
import { copy } from "@/i18n/copies/privacy";
import { PrivacyPage } from "@/screens/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/privacy",
  locale: "en",
});

export default function Page() {
  return <PrivacyPage locale="en" />;
}
