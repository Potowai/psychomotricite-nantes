#!/usr/bin/env node
/**
 * Garde-fou typographique : plus aucun tiret quadratin dans les textes
 * visibles du site. Les commentaires de code, les valeurs vides du
 * formulaire (« — ») et les fichiers hors ligne (blog, ressources) sont
 * ignorés.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const ignored = [
  "src/content/blog.ts",
  "src/content/blog.en.ts",
  "src/content/blog.es.ts",
  "src/i18n/copies/resources.fr.ts",
  "src/i18n/copies/resources.en.ts",
  "src/i18n/copies/resources.es.ts",
  "src/i18n/copies/article.fr.ts",
  "src/i18n/copies/article.en.ts",
  "src/i18n/copies/article.es.ts",
  "src/screens/resources.tsx",
  "src/screens/article.tsx",
];

const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx)$/.test(entry)) files.push(relative(root, path));
  }
}
walk("src");

const problems = [];
for (const file of files) {
  if (ignored.includes(file)) continue;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    if (!line.includes("—")) return;
    const trimmed = line.trimStart();
    if (
      trimmed.startsWith("*") ||
      trimmed.startsWith("/*") ||
      trimmed.startsWith("//") ||
      trimmed.startsWith("{/*")
    )
      return;
    // Tiret de vide dans le formulaire de contact.
    if (line.includes('|| "—"')) return;
    problems.push(`${file}:${index + 1}  ${line.trim().slice(0, 110)}`);
  });
}

if (problems.length > 0) {
  console.error(
    `Tirets quadratins dans les textes visibles (${problems.length}) :\n` +
      problems.join("\n"),
  );
  process.exit(1);
}
console.log("Typographie : aucun tiret quadratin dans les textes visibles.");
