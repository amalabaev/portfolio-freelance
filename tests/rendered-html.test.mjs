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
  assert.match(html, /Votre entreprise a évolué/);
  assert.match(html, /Développeur web full-stack freelance/);
  assert.match(html, /Plateforme de planification opérationnelle/);
  assert.match(html, /href="\/work\/operational-planning\/"/);
  assert.match(html, /name="email"/);
  assert.match(html, /\/aliaskar-malabaev\.jpg/);
  assert.match(html, /Automatisation &amp; intégrations|Automatisation & intégrations/);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /ProfessionalService/);
  assert.match(html, /amalabaev@gmail\.com/);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /https:\/\/amalabaev\.com\/og-v3\.png/);
  assert.match(html, /max-image-preview:large/i);
  assert.match(html, /linkedin\.com\/in\/aliaskar-malabaev/i);
  assert.doesNotMatch(html, /localhost:3000/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders the English portfolio at /en", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Your business has evolved/);
  assert.match(html, /Web product design &amp; development|Web product design & development/);
  assert.match(html, /Operational workforce planning platform/);
  assert.match(html, /href="\/en\/work\/operational-planning\/"/);
  assert.match(html, /View my engineering profile/);
  assert.match(html, /Choose language/);
  assert.match(html, /document\.documentElement\.lang/);
  assert.match(html, /hrefLang="en"|hreflang="en"/i);
  assert.match(html, /\/og-en-v3\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders the French freelance SEO landing page", async () => {
  const response = await render("/developpeur-full-stack-freelance");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Développeur full-stack freelance pour vos projets web ambitieux/);
  assert.match(html, /FAQPage/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /Service/);
  assert.match(html, /canonical/i);
  assert.match(html, /rel="canonical" href="https:\/\/amalabaev\.com\/developpeur-full-stack-freelance\/"/);
  assert.match(html, /freelance-full-stack-developer/);
});

test("server-renders the English freelance SEO landing page", async () => {
  const response = await render("/en/freelance-full-stack-developer");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A freelance full-stack developer for ambitious web projects/);
  assert.match(html, /What projects can a freelance full-stack developer handle/);
  assert.match(html, /document\.documentElement\.lang/);
  assert.match(html, /\/developpeur-full-stack-freelance/);
});

test("server-renders the French engineering profile", async () => {
  const response = await render("/engineering");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Le niveau technique derrière l/);
  assert.match(html, /Full-stack, au sens complet/);
  assert.match(html, /GitHub Actions/);
  assert.match(html, /href="\/en\/engineering\/"/);
  assert.match(html, /rel="canonical" href="https:\/\/amalabaev\.com\/engineering\/"/);
});

test("server-renders the English engineering profile", async () => {
  const response = await render("/en/engineering");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The engineering behind the interface/);
  assert.match(html, /Pragmatic by default/);
  assert.match(html, /document\.documentElement\.lang/);
});

test("server-renders the French planning case study", async () => {
  const response = await render("/work/operational-planning");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Rendre une planification complexe directe à utiliser/);
  assert.match(html, /Interaction directe/);
  assert.match(html, /application métier anonymisée/i);
  assert.match(html, /href="\/en\/work\/operational-planning\/"/);
  assert.match(html, /rel="canonical" href="https:\/\/amalabaev\.com\/work\/operational-planning\/"/);
});

test("server-renders the English planning case study", async () => {
  const response = await render("/en/work/operational-planning");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Making complex workforce planning direct to use/);
  assert.match(html, /Centralised validation/);
  assert.match(html, /href="\/work\/operational-planning\/"/);
});

test("keeps the finished site free from starter preview assets", async () => {
  const [portfolio, form, engineering, freelanceSeo, visuals, layout, css, exporter, packageJson] = await Promise.all([
    readFile(new URL("../app/PortfolioPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ProjectBriefForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/EngineeringPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/FreelanceSeoPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/Visuals.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../scripts/export-github-pages.mjs", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(portfolio, /CREATIVE LAB/);
  assert.match(portfolio, /RÉALISATIONS/);
  assert.match(form, /formsubmit\.co\/ajax\//);
  assert.match(form, /aria-live="polite"/);
  assert.doesNotMatch(portfolio + form + engineering + freelanceSeo, /mail\.google\.com\/mail/);
  assert.match(portfolio, /href="#contact"/);
  assert.match(visuals, /architecture-blueprint/);
  assert.match(visuals, /health-appointment/);
  assert.match(visuals, /consulting-dashboard/);
  assert.match(portfolio, /mailto:/);
  assert.match(layout, /export const metadata/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /ProfessionalService/);
  assert.match(layout, /favicon\.png/);
  assert.match(layout, /aliaskar-malabaev\.jpg/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /focus-visible/);
  assert.match(css, /mobile-menu/);
  // Self-hosted fonts: no third-party request, no GDPR exposure.
  assert.match(css, /@font-face/);
  assert.match(css, /\/fonts\/instrument-serif-normal-latin\.woff2/);
  assert.match(css, /\/fonts\/inter-normal-latin\.woff2/);
  assert.doesNotMatch(css, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  // Charts keep their validated plotting palette and a legend for multi-series frames.
  assert.match(visuals, /#2f47c9/);
  assert.match(visuals, /#d4482c/);
  assert.match(visuals, /#0f8a73/);
  assert.match(exporter, /developpeur-full-stack-freelance/);
  assert.match(exporter, /xmlns:xhtml/);
  assert.match(exporter, /lastmod/);
  assert.match(exporter, /new Date\(\)\.toISOString\(\)\.slice\(0, 10\)/);
  assert.doesNotMatch(exporter, /2026-08-09/);
  assert.match(exporter, /work\/operational-planning/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(portfolio + layout, /SkeletonPreview|codex-preview|Starter Project/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
