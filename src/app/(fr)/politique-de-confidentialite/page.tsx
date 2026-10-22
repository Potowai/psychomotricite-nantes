import type { Metadata } from "next";
import { copy } from "@/i18n/copies/privacy";
import { PrivacyPage } from "@/screens/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/politique-de-confidentialite",
  locale: "fr",
});

export default function Page() {
  return <PrivacyPage locale="fr" />;
}
