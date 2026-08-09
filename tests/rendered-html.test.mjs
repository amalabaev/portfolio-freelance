import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Aliaskar's freelance portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="fr">/i);
  assert.match(html, /Aliaskar Malabaev/);
  assert.match(html, /Votre activité mérite mieux/);
  assert.match(html, /Développeur web full-stack freelance/);
  assert.match(html, /amalabaev@gmail\.com/);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /https:\/\/amalabaev\.com\/og\.png/);
  assert.doesNotMatch(html, /localhost:3000/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders the English portfolio at /en", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Your business deserves more than an/);
  assert.match(html, /Freelance full-stack web developer/);
  assert.match(html, /Choose language/);
  assert.match(html, /document\.documentElement\.lang/);
  assert.match(html, /hrefLang="en"|hreflang="en"/i);
  assert.match(html, /\/og-en\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("keeps the finished site free from starter preview assets", async () => {
  const [portfolio, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/PortfolioPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(portfolio, /CONCEPT/);
  assert.match(portfolio, /EXPLORATORY/);
  assert.match(portfolio, /mail\.google\.com\/mail/);
  assert.match(portfolio, /href="#contact"/);
  assert.match(portfolio, /architecture-blueprint/);
  assert.match(portfolio, /health-appointment/);
  assert.match(portfolio, /consulting-dashboard/);
  assert.doesNotMatch(portfolio, /mailto:/);
  assert.match(layout, /export const metadata/);
  assert.match(layout, /summary_large_image/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(portfolio + layout, /SkeletonPreview|codex-preview|Starter Project/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
