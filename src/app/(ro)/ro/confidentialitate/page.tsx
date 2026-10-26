import type { Metadata } from "next";
import { copy } from "@/i18n/copies/privacy";
import { PrivacyPage } from "@/screens/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/confidentialitate",
  locale: "ro",
});

export default function Page() {
  return <PrivacyPage locale="ro" />;
}
