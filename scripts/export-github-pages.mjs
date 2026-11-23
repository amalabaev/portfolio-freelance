import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = path.join(projectRoot, "pages-dist");
const clientDir = path.join(projectRoot, "dist", "client");
const workerPath = path.join(projectRoot, "dist", "server", "index.js");
const productionOrigin = "https://amalabaev.com";
const lastModified = new Date().toISOString().slice(0, 10);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const routePairs = [
  ["/", "/en/"],
  ["/engineering/", "/en/engineering/"],
  ["/developpeur-full-stack-freelance/", "/en/freelance-full-stack-developer/"],
  ["/work/operational-planning/", "/en/work/operational-planning/"],
  ["/work/cardzap/", "/en/work/cardzap/"],
  ["/work/masq/", "/en/work/masq/"],
  ["/confidentialite/", "/en/privacy/"],
];
const routes = routePairs.flatMap(([fr, en]) => [
  { pathname: fr, destination: path.join(outputDir, fr, "index.html"), locale: "fr" },
  { pathname: en, destination: path.join(outputDir, en, "index.html"), locale: "en" },
]);

for (const route of routes) {
  // vinext serves extensionless routes; GitHub Pages serves directory indexes.
  const renderPath = route.pathname === "/" ? "/" : route.pathname.replace(/\/$/, "");
  const response = await worker.fetch(
    new Request(`${productionOrigin}${renderPath}`, {
      headers: { accept: "text/html", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route.pathname}: ${response.status}`);
  }

  const html = await response.text();
  if (!new RegExp(`<html lang="${route.locale}"`, "i").test(html)) {
    throw new Error(`Static export has the wrong language for ${route.pathname}`);
  }

  await mkdir(path.dirname(route.destination), { recursive: true });
  await writeFile(route.destination, html, "utf8");
}

await Promise.all([
  writeFile(
    path.join(outputDir, "robots.txt"),
    "User-agent: *\nAllow: /\n\nSitemap: https://amalabaev.com/sitemap.xml\nHost: amalabaev.com\n",
    "utf8",
  ),
  writeFile(
    path.join(outputDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routePairs.flatMap(([fr, en]) => [fr, en].map(pathname => `  <url>
    <loc>${productionOrigin}${pathname}</loc><lastmod>${lastModified}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="${productionOrigin}${fr}" />
    <xhtml:link rel="alternate" hreflang="en-US" href="${productionOrigin}${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${productionOrigin}${fr}" />
  </url>`)).join("\n")}
</urlset>
`,
    "utf8",
  ),
]);

console.log(`GitHub Pages export created in ${outputDir}`);
