import type { Metadata } from "next";
import { copy } from "@/i18n/copies/faq";
import { FaqPage } from "@/screens/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/faq",
  locale: "fr",
});

export default function Page() {
  return <FaqPage locale="fr" />;
}
