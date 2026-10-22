import type { Metadata } from "next";
import { copy } from "@/i18n/copies/home";
import { HomePage } from "@/screens/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en",
  locale: "en",
});

export default function Page() {
  return <HomePage locale="en" />;
}
