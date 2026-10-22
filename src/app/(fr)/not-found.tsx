import type { Metadata } from "next";
import { copy } from "@/i18n/copies/not-found";
import { NotFoundPage } from "@/screens/not-found";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.fr.meta.title,
  description: copy.fr.meta.description,
  path: "/404",
  locale: "fr",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage locale="fr" />;
}
