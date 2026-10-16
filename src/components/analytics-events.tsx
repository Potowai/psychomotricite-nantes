"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Mesure des conversions : clics sur téléphone, SMS et e-mail, ainsi que les
 * envois du formulaire de contact. Aucune donnée personnelle n'est transmise.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("clic_telephone");
      else if (href.startsWith("sms:")) track("clic_sms");
      else if (href.startsWith("mailto:")) track("clic_email");
    }

    function onContactSubmit(event: Event) {
      const detail = (event as CustomEvent<{ motif?: string }>).detail;
      track("formulaire_envoye", { motif: detail?.motif ?? "non_precise" });
    }

    document.addEventListener("click", onClick);
    window.addEventListener("contact:submit", onContactSubmit);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("contact:submit", onContactSubmit);
    };
  }, []);

  return null;
}
