import type { Metadata } from "next";
import { copy } from "@/i18n/copies/home";
import { HomePage } from "@/screens/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: copy.ro.meta.title,
    description: copy.ro.meta.description,
    path: "/ro",
    locale: "ro",
  }),
  // La page d'accueil garde son titre exact, sans suffixe : il contient déjà
  // la ville, et le doublon allongeait le titre au-delà de 60 caractères.
  title: { absolute: copy.ro.meta.title },
};

export default function Page() {
  return <HomePage locale="ro" />;
}
