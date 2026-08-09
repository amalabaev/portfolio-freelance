import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = path.join(projectRoot, "pages-dist");
const clientDir = path.join(projectRoot, "dist", "client");
const workerPath = path.join(projectRoot, "dist", "server", "index.js");
const productionOrigin = "https://amalabaev.com";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const routes = [
  { pathname: "/", destination: path.join(outputDir, "index.html"), locale: "fr" },
  { pathname: "/en", destination: path.join(outputDir, "en", "index.html"), locale: "en" },
  { pathname: "/engineering", destination: path.join(outputDir, "engineering", "index.html"), locale: "fr" },
  { pathname: "/en/engineering", destination: path.join(outputDir, "en", "engineering", "index.html"), locale: "en" },
  { pathname: "/developpeur-full-stack-freelance", destination: path.join(outputDir, "developpeur-full-stack-freelance", "index.html"), locale: "fr" },
  { pathname: "/en/freelance-full-stack-developer", destination: path.join(outputDir, "en", "freelance-full-stack-developer", "index.html"), locale: "en" },
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`${productionOrigin}${route.pathname}`, {
      headers: { accept: "text/html", "x-forwarded-proto": "https" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route.pathname}: ${response.status}`);
  }

  let html = await response.text();
  html = html.replace(/<html lang="[^"]+"/i, `<html lang="${route.locale}"`);
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
  <url>
    <loc>https://amalabaev.com/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/"/><xhtml:link rel="alternate" hreflang="x-default" href="https://amalabaev.com/"/>
  </url>
  <url>
    <loc>https://amalabaev.com/en/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/"/><xhtml:link rel="alternate" hreflang="x-default" href="https://amalabaev.com/"/>
  </url>
  <url>
    <loc>https://amalabaev.com/developpeur-full-stack-freelance/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/developpeur-full-stack-freelance/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/freelance-full-stack-developer/"/><xhtml:link rel="alternate" hreflang="x-default" href="https://amalabaev.com/developpeur-full-stack-freelance/"/>
  </url>
  <url>
    <loc>https://amalabaev.com/en/freelance-full-stack-developer/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/developpeur-full-stack-freelance/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/freelance-full-stack-developer/"/><xhtml:link rel="alternate" hreflang="x-default" href="https://amalabaev.com/developpeur-full-stack-freelance/"/>
  </url>
  <url>
    <loc>https://amalabaev.com/engineering/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/engineering/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/engineering/"/>
  </url>
  <url>
    <loc>https://amalabaev.com/en/engineering/</loc><lastmod>2026-08-09</lastmod><changefreq>monthly</changefreq><priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="https://amalabaev.com/engineering/"/><xhtml:link rel="alternate" hreflang="en-US" href="https://amalabaev.com/en/engineering/"/>
  </url>
</urlset>
`,
    "utf8",
  ),
]);

console.log(`GitHub Pages export created in ${outputDir}`);
