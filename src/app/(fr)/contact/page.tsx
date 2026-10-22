import type { Metadata } from "next";
import { copy } from "@/i18n/copies/contact";
import { ContactPage } from "@/screens/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/contact",
  locale: "fr",
});

export default function Page() {
  return <ContactPage locale="fr" />;
}
