import type { Metadata } from "next";
import { copy } from "@/i18n/copies/about";
import { AboutPage } from "@/screens/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/despre-mine",
  locale: "ro",
});

export default function Page() {
  return <AboutPage locale="ro" />;
}
