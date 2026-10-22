import type { Metadata } from "next";
import { copy } from "@/i18n/copies/about";
import { AboutPage } from "@/screens/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/about",
  locale: "en",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
