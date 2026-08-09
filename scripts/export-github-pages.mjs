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
  { pathname: "/", destination: path.join(outputDir, "index.html") },
  { pathname: "/en", destination: path.join(outputDir, "en", "index.html") },
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

  await mkdir(path.dirname(route.destination), { recursive: true });
  await writeFile(route.destination, await response.text(), "utf8");
}

await Promise.all([
  writeFile(
    path.join(outputDir, "robots.txt"),
    "User-agent: *\nAllow: /\nSitemap: https://amalabaev.com/sitemap.xml\n",
    "utf8",
  ),
  writeFile(
    path.join(outputDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://amalabaev.com/</loc></url>
  <url><loc>https://amalabaev.com/en/</loc></url>
</urlset>
`,
    "utf8",
  ),
]);

console.log(`GitHub Pages export created in ${outputDir}`);
