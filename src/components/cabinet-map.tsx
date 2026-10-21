"use client";

import { useEffect, useRef, useState } from "react";
import { fullAddress, mapsUrl, site } from "@/lib/site";
import "leaflet/dist/leaflet.css";

type CabinetMapProps = {
  className?: string;
  height?: number;
  showLink?: boolean;
};

/**
 * Carte navigable du cabinet, partagée entre l'accueil et la page contact.
 *
 * Leaflet plutôt que l'iframe d'openstreetmap.org : l'iframe imposait sa
 * pastille générique, ses boutons et un cadre gris qu'on ne pouvait pas
 * habiller. Ici on garde les tuiles OpenStreetMap (aucune clé, aucune
 * dépendance à un service tiers) mais on les désature et on les réchauffe,
 * on dessine l'épingle dans le bleu du site et l'adresse reste affichée
 * au-dessus d'elle.
 *
 * Le script et les tuiles ne partent qu'à l'approche de la carte : le
 * premier rendu de la page ne les porte pas.
 */
export function CabinetMap({
  className = "",
  height = 320,
  showLink = true,
}: CabinetMapProps) {
  const shell = useRef<HTMLDivElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const shellEl = shell.current;
    const holderEl = holder.current;
    if (!shellEl || !holderEl) return;

    let map: import("leaflet").Map | undefined;
    let resize: ResizeObserver | undefined;
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

      // L'épingle et son cartouche occupent de la hauteur : on décale le
      // centre vers le nord pour que l'adresse arrive un peu sous le milieu,
      // avec la place de s'afficher entièrement, même sur la carte courte
      // de l'accueil.
      const zoom = 16;
      const focus = map
        .project([latitude, longitude], zoom)
        .subtract([0, Math.round(height * 0.13)]);
      map.setView(map.unproject(focus, zoom), zoom);

      L.control.attribution({ prefix: false }).addTo(map);
      L.control
        .zoom({
          position: "bottomright",
          zoomInTitle: "Zoom avant",
          zoomOutTitle: "Zoom arrière",
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

      L.marker([latitude, longitude], {
        icon: pin,
        title: fullAddress,
        riseOnHover: true,
        keyboard: false,
      })
        .addTo(map)
        .bindTooltip(
          `<p class="cabinet-tip__name">${site.address.name}</p><p class="cabinet-tip__addr">${site.address.street}<br>${site.address.postalCode} ${site.address.city}</p>`,
          {
            permanent: true,
            direction: "top",
            offset: [0, -6],
            opacity: 1,
            interactive: false,
            className: "cabinet-tip",
          },
        )
        .openTooltip();

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
      map?.remove();
      map = undefined;
    };
  }, [height]);

  return (
    <div className={className}>
      <div
        ref={shell}
        className="carte-shell relative overflow-hidden rounded-[1.5rem] border border-line bg-paper-2 shadow-[var(--shadow-soft)]"
        style={{ height }}
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
            aria-label={`Plan d’accès au cabinet — ${fullAddress}`}
            data-map
          />
        </div>
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
              Voir le plan sur OpenStreetMap
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
          Ouvrir l’itinéraire dans Google Maps
          <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}
