"use client";

import { useEffect, useRef, useState } from "react";
import { addressName, fullAddressFor, type Locale } from "@/lib/i18n";
import { mapsUrl, site } from "@/lib/site";
import "leaflet/dist/leaflet.css";

type CabinetMapProps = {
  className?: string;
  height?: number;
  showLink?: boolean;
  locale?: Locale;
};

const mapCopy: Record<
  Locale,
  {
    itinerary: string;
    copy: string;
    copied: string;
    addressCopied: string;
    zoomIn: string;
    zoomOut: string;
    enlarge: string;
    reduce: string;
    dialogLabel: string;
    regionLabel: string;
    openMap: string;
    openDirections: string;
  }
> = {
  fr: {
    itinerary: "Itinéraire",
    copy: "Copier",
    copied: "Copié",
    addressCopied: "Adresse copiée",
    zoomIn: "Zoom avant",
    zoomOut: "Zoom arrière",
    enlarge: "Agrandir le plan",
    reduce: "Réduire le plan",
    dialogLabel: "Plan d’accès",
    regionLabel: "Plan d’accès au cabinet",
    openMap: "Voir le plan sur OpenStreetMap",
    openDirections: "Ouvrir l’itinéraire dans Google Maps",
  },
  en: {
    itinerary: "Directions",
    copy: "Copy",
    copied: "Copied",
    addressCopied: "Address copied",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    enlarge: "Enlarge the map",
    reduce: "Reduce the map",
    dialogLabel: "Access map",
    regionLabel: "Access map to the practice",
    openMap: "See the map on OpenStreetMap",
    openDirections: "Open directions in Google Maps",
  },
  es: {
    itinerary: "Cómo llegar",
    copy: "Copiar",
    copied: "Copiado",
    addressCopied: "Dirección copiada",
    zoomIn: "Acercar",
    zoomOut: "Alejar",
    enlarge: "Ampliar el plano",
    reduce: "Reducir el plano",
    dialogLabel: "Plano de acceso",
    regionLabel: "Plano de acceso al consultorio",
    openMap: "Ver el plano en OpenStreetMap",
    openDirections: "Abrir la ruta en Google Maps",
  },
};

const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

/**
 * Carte navigable du cabinet, partagée entre l'accueil et la page contact.
 *
 * Leaflet plutôt que l'iframe d'openstreetmap.org : l'iframe imposait sa
 * pastille générique, ses boutons et un cadre gris qu'on ne pouvait pas
 * habiller. Ici on garde les tuiles OpenStreetMap (aucune clé, aucune
 * dépendance à un service tiers) mais on les désature et on les réchauffe,
 * on dessine l'épingle dans le bleu du site et l'adresse reste affichée
 * au-dessus d'elle, avec l'itinéraire et la copie de l'adresse à portée.
 *
 * Le script et les tuiles ne partent qu'à l'approche de la carte : le
 * premier rendu de la page ne les porte pas.
 */
export function CabinetMap({
  className = "",
  height = 320,
  showLink = true,
  locale = "fr",
}: CabinetMapProps) {
  const t = mapCopy[locale];
  const {
    zoomIn,
    zoomOut,
    itinerary,
    copy: copyLabel,
    copied: copiedLabel,
    addressCopied,
  } = t;
  const shell = useRef<HTMLDivElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);
  const [full, setFull] = useState(false);

  useEffect(() => {
    const shellEl = shell.current;
    const holderEl = holder.current;
    if (!shellEl || !holderEl) return;

    let map: import("leaflet").Map | undefined;
    let resize: ResizeObserver | undefined;
    let copyTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const start = async () => {
      const L = (await import("leaflet")).default;
      if (cancelled) return;

      const { latitude, longitude } = site.address.geo;

      map = L.map(holderEl, {
        center: [latitude, longitude],
        zoom: 16,
        zoomControl: false,
        attributionControl: false,
        // La molette reste au défilement de la page : on zoome au double-clic,
        // au pincement ou avec les boutons.
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      // L'épingle et son cartouche occupent de la hauteur : on décale le
      // centre vers le nord pour que l'adresse arrive un peu sous le milieu,
      // avec la place de s'afficher entièrement, même sur la carte courte
      // de l'accueil.
      const zoom = 16;
      const focus = map
        .project([latitude, longitude], zoom)
        .subtract([0, Math.round(height * 0.17)]);
      map.setView(map.unproject(focus, zoom), zoom);

      L.control.attribution({ prefix: false }).addTo(map);
      L.control
        .zoom({
          position: "bottomright",
          zoomInTitle: zoomIn,
          zoomOutTitle: zoomOut,
        })
        .addTo(map);

      const tiles = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">contributeurs OpenStreetMap</a>',
        },
      ).addTo(map);

      tiles.once("load", () => setReady(true));

      const pin = L.divIcon({
        className: "cabinet-pin",
        html: '<span class="cabinet-pin__body"><span class="cabinet-pin__dot"></span></span>',
        iconSize: [36, 42],
        iconAnchor: [18, 40],
        tooltipAnchor: [0, -40],
      });

      const marker = L.marker([latitude, longitude], {
        icon: pin,
        title: fullAddressFor(locale),
        riseOnHover: true,
        keyboard: false,
      }).addTo(map);

      marker
        .bindTooltip(
          `<p class="cabinet-tip__name">${addressName[locale]}</p>` +
            `<p class="cabinet-tip__addr">${site.address.street}, ${site.address.postalCode} ${site.address.city}</p>` +
            `<div class="cabinet-tip__actions">` +
            `<a class="cabinet-tip__go" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${itinerary}</a>` +
            `<button class="cabinet-tip__copy" type="button" data-copy>${copyLabel}</button>` +
            `</div>` +
            `<span class="cabinet-tip__status" role="status" data-status></span>`,
          {
            permanent: true,
            direction: "top",
            offset: [0, -6],
            opacity: 1,
            interactive: true,
            className: "cabinet-tip",
          },
        )
        .openTooltip();

      // Copie de l'adresse : utile pour la coller dans une appli de taxi ou de
      // navigation. Le retour s'annonce dans une zone role="status".
      const tipEl = marker.getTooltip()?.getElement();
      const copyBtn = tipEl?.querySelector<HTMLButtonElement>("[data-copy]");
      const statusEl = tipEl?.querySelector<HTMLElement>("[data-status]");

      copyBtn?.addEventListener("click", async () => {
        let copied = false;
        try {
          await navigator.clipboard.writeText(addressLine);
          copied = true;
        } catch {
          const field = document.createElement("textarea");
          field.value = addressLine;
          field.setAttribute("readonly", "");
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.appendChild(field);
          field.select();
          copied = document.execCommand("copy");
          field.remove();
        }
        if (!copied) return;
        copyBtn.textContent = copiedLabel;
        if (statusEl) statusEl.textContent = addressCopied;
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyBtn.textContent = copyLabel;
          if (statusEl) statusEl.textContent = "";
        }, 2400);
      });

      resize = new ResizeObserver(() => map?.invalidateSize());
      resize.observe(holderEl);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          void start();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(shellEl);

    return () => {
      cancelled = true;
      io.disconnect();
      resize?.disconnect();
      clearTimeout(copyTimer);
      map?.remove();
      mapRef.current = null;
      map = undefined;
    };
  },
    [height, locale, zoomIn, zoomOut, itinerary, copyLabel, copiedLabel, addressCopied],
  );

  // Plein écran : la taille change sans transition, il suffit de recaler la
  // carte une fois la nouvelle boîte appliquée.
  useEffect(() => {
    const frame = requestAnimationFrame(() => mapRef.current?.invalidateSize());
    return () => cancelAnimationFrame(frame);
  }, [full]);

  useEffect(() => {
    if (!full) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFull(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [full]);

  return (
    <div className={className}>
      <div
        ref={shell}
        role={full ? "dialog" : undefined}
        aria-modal={full ? true : undefined}
        aria-label={full ? `${t.dialogLabel} · ${fullAddressFor(locale)}` : undefined}
        className={`carte-shell relative overflow-hidden bg-paper-2 ${
          full
            ? "carte-full"
            : "rounded-[1.5rem] border border-line shadow-[var(--shadow-soft)]"
        }`}
        style={full ? undefined : { height }}
      >
        {/* React ne gère que l'enveloppe : Leaflet ajoute ses classes sur le
            div intérieur, qu'aucun rendu ne vient réécrire. */}
        <div
          className={`carte-fade absolute inset-0 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={holder}
            role="region"
            aria-label={`${t.regionLabel} · ${fullAddressFor(locale)}`}
            data-map
          />
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={() => setFull((value) => !value)}
          aria-expanded={full}
          aria-label={full ? t.reduce : t.enlarge}
          className="carte-expand absolute right-3 top-3 z-[900] grid h-9 w-9 place-items-center rounded-xl border border-line bg-paper text-ink shadow-[var(--shadow-soft)] transition-colors hover:bg-blue-soft"
        >
          {full ? (
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
              <path
                d="M6 2H2v4M10 14h4v-4M14 6V2h-4M2 10v4h4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Sans JavaScript, la carte ne peut pas se dessiner : on garde un
            accès direct au plan plutôt qu'un cadre vide. */}
        <noscript>
          <div className="absolute inset-0 grid place-items-center bg-paper-2 p-6 text-center">
            <a
              href={`https://www.openstreetmap.org/?mlat=${site.address.geo.latitude}&mlon=${site.address.geo.longitude}#map=16/${site.address.geo.latitude}/${site.address.geo.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-sm font-medium text-blue-deep"
            >
              {t.openMap}
            </a>
          </div>
        </noscript>
      </div>
      {showLink && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet mt-3 inline-flex items-center gap-1.5 py-1 text-sm font-medium text-blue-deep"
        >
          {t.openDirections}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}
