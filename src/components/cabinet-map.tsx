import { fullAddress, mapsUrl, site } from "@/lib/site";

type CabinetMapProps = {
  className?: string;
  height?: number;
  showLink?: boolean;
};

/**
 * Carte navigable du cabinet, partagée entre l'accueil et la page contact.
 * L'iframe est chargée à la demande pour ne pas ralentir le premier rendu.
 */
export function CabinetMap({
  className = "",
  height = 320,
  showLink = true,
}: CabinetMapProps) {
  const { latitude, longitude } = site.address.geo;
  const bbox = [
    longitude - 0.005,
    latitude - 0.003,
    longitude + 0.005,
    latitude + 0.003,
  ].join("%2C");
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[1.5rem] border border-line">
        <iframe
          title={`Plan d’accès au cabinet — ${fullAddress}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          style={{ height }}
        />
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
