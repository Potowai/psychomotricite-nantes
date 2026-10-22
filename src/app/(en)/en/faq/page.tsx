import type { Metadata } from "next";
import { copy } from "@/i18n/copies/faq";
import { FaqPage } from "@/screens/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/faq",
  locale: "en",
});

export default function Page() {
  return <FaqPage locale="en" />;
}
