"use client";

import { useEffect } from "react";

/**
 * Déclare la langue du document pour les pages qui ne sont pas en français : la
 * racine du site est en `lang="fr"`, et Next.js n'autorise qu'une seule balise
 * `<html>` pour toutes les routes.
 */
export function DocumentLang({ lang }: { lang: string }) {
  useEffect(() => {
    const precedent = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = precedent;
    };
  }, [lang]);

  return null;
}
