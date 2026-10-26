import type { Metadata } from "next";
import { copy } from "@/i18n/copies/faq";
import { FaqPage } from "@/screens/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/intrebari-frecvente",
  locale: "ro",
});

export default function Page() {
  return <FaqPage locale="ro" />;
}
