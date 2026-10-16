/**
 * Notifie IndexNow — Bing, Yandex, Naver, Seznam — des URLs du site.
 *
 * IndexNow est un protocole gratuit et ouvert : il accélère l'indexation sur ces
 * moteurs. Google ne le prend pas en charge.
 *
 * La clé est lue depuis `public/<clé 32 hex>.txt` ; c'est ce fichier qui prouve
 * la propriété du domaine, il doit donc être déployé avant de lancer ce script.
 */
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HOST = process.env.SITE_HOST ?? "psychomotricite-nantes.vercel.app";
const ORIGIN = `https://${HOST}`;
const PUBLIC_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);

const keyFile = (await readdir(PUBLIC_DIR)).find((name) =>
  /^[0-9a-f]{32}\.txt$/.test(name),
);

if (!keyFile) {
  console.error(
    "Clé IndexNow introuvable dans public/ (attendu : <clé 32 caractères hexadécimaux>.txt).",
  );
  process.exit(1);
}

const key = keyFile.replace(/\.txt$/, "");

const sitemap = await fetch(`${ORIGIN}/sitemap.xml`).then((res) => res.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].trim(),
);

if (urlList.length === 0) {
  console.error("Aucune URL trouvée dans le sitemap.");
  process.exit(1);
}

// IndexNow n'accepte que des URLs appartenant au domaine dont la clé est
// vérifiable. Tant que le sitemap annonce le domaine définitif alors que la clé
// n'est servie que par l'URL de préproduction, on s'abstient : envoyer ces URLs
// produirait une erreur 422 et ferait échouer le workflow pour rien.
const sitemapHost = (() => {
  try {
    return new URL(urlList[0]).host;
  } catch {
    return null;
  }
})();

if (sitemapHost && sitemapHost !== HOST) {
  console.log(
    `IndexNow : le sitemap annonce ${sitemapHost}, alors que la clé n'est vérifiable que sur ${HOST}.`,
  );
  console.log(
    "Envoi ignoré — attendu tant que le domaine définitif n'est pas basculé. Rien à corriger : la clé est déjà dans public/ et sera servie depuis le domaine définitif.",
  );
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `${ORIGIN}/${keyFile}`,
    urlList,
  }),
});

console.log(`IndexNow : ${urlList.length} URL(s) envoyée(s) — HTTP ${res.status}`);

if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
