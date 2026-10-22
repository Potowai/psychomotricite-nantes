import { track as vercelTrack } from "@vercel/analytics";
import type { Locale } from "./i18n";

/**
 * Couche de mesure d'audience.
 *
 * Le site peut être mesuré par Vercel, par Umami, ou par les deux. Chaque
 * outil s'active par une variable d'environnement, sans toucher au code :
 *
 *   NEXT_PUBLIC_ANALYTICS_VERCEL=off   → pas de Vercel Web Analytics
 *   NEXT_PUBLIC_SPEED_INSIGHTS=off      → pas de Vercel Speed Insights
 *   NEXT_PUBLIC_UMAMI_SRC + _WEBSITE_ID → Umami
 *
 * Les événements de conversion (clic téléphone, SMS, e-mail, formulaire)
 * sont envoyés à tous les outils actifs : changer de mesure d'audience ne
 * perd jamais les données utiles.
 */

export type EventData = Record<string, string>;

declare global {
  interface Window {
    umami?: {
      track: (name?: string, data?: EventData) => void;
    };
  }
}

export const umamiEnabled = Boolean(
  process.env.NEXT_PUBLIC_UMAMI_SRC && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
);

export const vercelAnalyticsEnabled =
  process.env.NEXT_PUBLIC_ANALYTICS_VERCEL !== "off";

export const speedInsightsEnabled =
  process.env.NEXT_PUBLIC_SPEED_INSIGHTS !== "off";

/**
 * File d'attente : un clic sur « Appeler » peut arriver avant le chargement
 * du script de mesure. Les événements sont mis de côté et envoyés dès que
 * l'outil est prêt — aucune conversion perdue.
 */
const pending: Array<{ name: string; data?: EventData }> = [];

function flushPending() {
  if (typeof window === "undefined") return;
  const umami = window.umami;
  if (!umami?.track) return;
  while (pending.length > 0) {
    const event = pending.shift();
    if (event) umami.track(event.name, event.data);
  }
}

/** Envoie un événement à tous les outils de mesure actifs. */
export function trackEvent(name: string, data?: EventData) {
  if (vercelAnalyticsEnabled) {
    try {
      vercelTrack(name, data);
    } catch {
      // Un outil de mesure qui refuse un événement ne doit jamais casser la page.
    }
  }

  if (!umamiEnabled || typeof window === "undefined") return;

  if (window.umami?.track) {
    try {
      window.umami.track(name, data);
    } catch {
      // Idem : le suivi est un complément, jamais une condition d'affichage.
    }
    return;
  }

  pending.push({ name, data });
  if (pending.length === 1) {
    window.addEventListener("load", flushPending, { once: true });
    window.setTimeout(flushPending, 3000);
  }
}

const toolNames: Record<Locale, { umami: string; vercel: string; speed: string }> = {
  fr: {
    umami: "Umami (auto-hébergé)",
    vercel: "Vercel Web Analytics",
    speed: "Vercel Speed Insights",
  },
  en: {
    umami: "Umami (self-hosted)",
    vercel: "Vercel Web Analytics",
    speed: "Vercel Speed Insights",
  },
  es: {
    umami: "Umami (autoalojado)",
    vercel: "Vercel Web Analytics",
    speed: "Vercel Speed Insights",
  },
};

/**
 * Les outils de mesure réellement en service, pour que la politique de
 * confidentialité nomme exactement ce qui tourne — et rien de plus.
 */
export function analyticsTools(locale: Locale): string {
  const names = toolNames[locale];
  const active: string[] = [];
  if (umamiEnabled) active.push(names.umami);
  if (vercelAnalyticsEnabled) active.push(names.vercel);
  if (speedInsightsEnabled) active.push(names.speed);
  if (active.length === 0) return "";
  if (active.length === 1) return active[0];
  return `${active.slice(0, -1).join(", ")} et ${active[active.length - 1]}`;
}
