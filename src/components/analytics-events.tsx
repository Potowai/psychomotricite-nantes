"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Mesure des conversions : clics sur téléphone, SMS et e-mail, ainsi que
 * l'ouverture du brouillon de message par le formulaire. Aucune donnée
 * personnelle n'est transmise.
 *
 * Les événements partent vers tous les outils de mesure actifs (Vercel,
 * Umami) : le choix de l'outil ne change pas ce qui est mesuré.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackEvent("clic_telephone");
      else if (href.startsWith("sms:")) trackEvent("clic_sms");
      else if (href.startsWith("mailto:")) trackEvent("clic_email");
    }

    function onContactSubmit(event: Event) {
      const detail = (event as CustomEvent<{ motif?: string }>).detail;
      trackEvent("formulaire_ouvert", { motif: detail?.motif || "non_precise" });
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
