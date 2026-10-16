const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** « 2026-03-04 » -> « 4 mars 2026 » */
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}
