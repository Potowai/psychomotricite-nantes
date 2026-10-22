/**
 * Audit du site déployé — gratuit, sans clé, sans quota.
 *
 *   node scripts/audit-site.mjs [url]
 *   SITE_HOST=psychomotriciennenantes.fr node scripts/audit-site.mjs
 *
 * Le script lit le sitemap du site, puis, pour chaque page :
 *   - vérifie le code HTTP et les liens internes (pas de lien mort) ;
 *   - contrôle le title, la meta description, le canonical, les hreflang,
 *     la langue du document, les Open Graph ;
 *   - compte les H1, vérifie les textes alternatifs des images et les
 *     étiquettes des champs de formulaire ;
 *   - valide le JSON-LD (doit être du JSON parsable, avec un @type) ;
 *   - repère les doublons de title et de description.
 *
 * Il rend un rapport Markdown dans `docs/audit-<date>.md` et sort en code 1
 * si une erreur bloquante est détectée (page en erreur, lien mort).
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HOST = process.env.SITE_HOST ?? "psychomotricite-nantes.vercel.app";
const ORIGIN = process.argv[2] ?? `https://${HOST}`;
const OUT_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "docs",
);

const problems = [];
const notes = [];
const pages = [];
const seen = { titles: new Map(), descriptions: new Map() };

function report(level, page, message) {
  const line = `- ${level} **${page}** — ${message}`;
  if (level === "Erreur") problems.push(line);
  else notes.push(line);
}

function pick(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

async function head(url) {
  const res = await fetch(url, { redirect: "follow" });
  return res;
}

/* ---------------------------------------------------------------- sitemap */

const sitemapRes = await head(`${ORIGIN}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`sitemap.xml : HTTP ${sitemapRes.status}`);
  process.exit(1);
}
const sitemap = await sitemapRes.text();
// Le sitemap annonce l'adresse définitive (psychomotriciennenantes.fr) alors
// qu'on audite souvent une préproduction (…vercel.app) : on ne garde que les
// chemins, et on les interroge sur l'origine testée.
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  try {
    return new URL(m[1].trim()).pathname;
  } catch {
    return m[1].trim();
  }
});

/* ------------------------------------------------------------------ pages */

for (const pathname of urls) {
  const url = `${ORIGIN}${pathname}`;
  const res = await head(url);
  const page = pathname;
  if (!res.ok) {
    report("Erreur", page, `HTTP ${res.status}`);
    continue;
  }
  const html = await res.text();
  const row = { page, status: res.status, issues: 0 };

  const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = pick(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i,
  );
  const canonical = pick(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const lang = pick(html, /<html[^>]+lang=["']([^"']+)["']/i);
  const ogTitle = pick(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
  const ogImage = pick(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);

  if (!title) report("Erreur", page, "pas de <title>");
  else if (title.length > 60) report("Avertissement", page, `title de ${title.length} caractères — Google en affiche environ 60`);
  else if (title.length < 25) report("Avertissement", page, `title trop court (${title.length} caractères)`);

  if (!description) report("Erreur", page, "pas de meta description");
  else if (description.length > 160) report("Avertissement", page, `meta description de ${description.length} caractères — seuls les ~155 premiers sont affichés`);

  if (!canonical) report("Erreur", page, "pas de canonical");
  if (!lang) report("Erreur", page, "pas de lang sur <html>");
  if (!ogTitle) report("Avertissement", page, "pas de og:title");
  if (!ogImage) report("Avertissement", page, "pas de og:image");

  const h1s = html.match(/<h1[\s>]/gi) ?? [];
  if (h1s.length === 0) report("Erreur", page, "aucun H1");
  else if (h1s.length > 1) report("Avertissement", page, `${h1s.length} H1`);

  const hreflangs = [...html.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1].toLowerCase());
  if (!hreflangs.includes("x-default")) {
    report("Avertissement", page, "pas de hreflang x-default");
  }

  // Images : le texte alternatif est obligatoire dès qu'une image porte un sens.
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  for (const img of imgs) {
    if (!/\balt\s*=/i.test(img)) {
      report("Avertissement", page, "image sans attribut alt");
      break;
    }
  }

  // Champs de formulaire : chaque champ doit avoir une étiquette, soit
  // associée par `for`, soit implicite (champ imbriqué dans un <label>).
  const inputs = [...html.matchAll(/<input\b[^>]*>/gi)];
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i][0];
    if (/type=["']hidden["']/i.test(input)) continue;
    const id = input.match(/\bid=["']([^"']+)["']/i)?.[1];
    const hasLabel =
      (id && html.includes(`for="${id}"`)) || /aria-label(?:ledby)?=/i.test(input);
    if (hasLabel) continue;
    // Champ sans identifiant : étiquette implicite s'il est imbriqué dans un
    // <label> ouvert juste avant.
    const before = html.slice(Math.max(0, (inputs[i].index ?? 0) - 400), inputs[i].index ?? 0);
    const lastLabelOpen = before.lastIndexOf("<label");
    const lastLabelClose = before.lastIndexOf("</label>");
    if (!id && lastLabelOpen > lastLabelClose) continue;
    report("Erreur", page, "champ de formulaire sans étiquette associée");
    break;
  }

  // JSON-LD : parsable, avec un @type.
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length === 0) {
    report("Avertissement", page, "aucun JSON-LD");
  }
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        const type = item?.["@type"];
        if (!type) report("Erreur", page, "JSON-LD sans @type");
      }
    } catch (error) {
      report("Erreur", page, `JSON-LD invalide : ${error.message}`);
    }
  }

  // Doublons de title / description sur tout le site.
  for (const [value, map] of [
    [title, seen.titles],
    [description, seen.descriptions],
  ]) {
    if (!value) continue;
    if (map.has(value)) report("Erreur", page, `title/description identique à ${map.get(value)}`);
    else map.set(value, page);
  }

  row.title = title;
  row.description = description;
  row.h1 = h1s.length;
  row.jsonLd = blocks.length;
  pages.push(row);
}

/* ---------------------------------------------------------- liens internes */

const internal = new Set();
for (const pathname of urls) {
  const html = await (await head(`${ORIGIN}${pathname}`)).text();
  for (const match of html.matchAll(/href=["'](\/[^"'#?]*)/g)) {
    internal.add(match[1]);
  }
}

const broken = [];
for (const link of internal) {
  if (link.startsWith("/_next") || link.startsWith("/_vercel")) continue;
  const res = await head(`${ORIGIN}${link}`);
  if (res.status >= 400) {
    broken.push(`${link} (HTTP ${res.status})`);
    report("Erreur", "liens", `lien mort : ${link} (HTTP ${res.status})`);
  }
}

/* ------------------------------------------------------------- robots, llms */

for (const file of ["/robots.txt", "/llms.txt", "/llms-full.txt", "/rss.xml", "/manifest.webmanifest"]) {
  const res = await head(`${ORIGIN}${file}`);
  if (!res.ok) report("Erreur", file, `HTTP ${res.status}`);
}

const robots = await (await head(`${ORIGIN}/robots.txt`)).text();
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot"]) {
  if (!robots.includes(bot)) report("Avertissement", "/robots.txt", `${bot} non autorisé explicitement`);
}

/* ------------------------------------------------------------------ rapport */

const today = new Date().toISOString().slice(0, 10);
const lines = [];
lines.push(`# Audit du site — ${today}`);
lines.push("");
lines.push(`Site audité : \`${ORIGIN}\``);
lines.push(
  ORIGIN.includes("localhost")
    ? "Build local de production (`npm run build` + `npm start`)."
    : "Site déployé.",
);
lines.push("");
lines.push(
  `**${pages.length}** pages analysées · **${internal.size}** liens internes vérifiés · ` +
    `**${problems.length}** erreur(s) · **${notes.length}** avertissement(s)`,
);
lines.push("");
lines.push("Commande : `node scripts/audit-site.mjs`");
lines.push("");

if (problems.length) {
  lines.push("## Erreurs");
  lines.push("");
  lines.push(...problems);
  lines.push("");
}
if (notes.length) {
  lines.push("## Avertissements");
  lines.push("");
  lines.push(...notes);
  lines.push("");
}

lines.push("## Pages");
lines.push("");
lines.push("| Page | HTTP | Titre | Meta description | H1 | JSON-LD |");
lines.push("| --- | --- | --- | --- | --- | --- |");
for (const row of pages) {
  lines.push(
    `| \`${row.page}\` | ${row.status} | ${(row.title ?? "—").replace(/\|/g, "\\|")} | ` +
      `${(row.description ?? "—").slice(0, 60).replace(/\|/g, "\\|")}… | ${row.h1} | ${row.jsonLd} |`,
  );
}
lines.push("");

const outFile = path.join(OUT_DIR, `audit-${today}.md`);
await writeFile(outFile, `${lines.join("\n")}\n`, "utf8");

console.log(lines.slice(0, 12).join("\n"));
console.log(`\nRapport : ${path.relative(process.cwd(), outFile)}`);
if (broken.length) console.log(`Liens morts : ${broken.join(", ")}`);

process.exit(problems.length ? 1 : 0);
