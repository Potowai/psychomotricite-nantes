import type { Metadata } from "next";
import { copy } from "@/i18n/copies/resources";
import { ResourcesPage } from "@/screens/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/resources",
  locale: "en",
});

export default function Page() {
  return <ResourcesPage locale="en" />;
}
