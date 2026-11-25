import assert from 'node:assert/strict';
import test from 'node:test';

let worker;
async function render(pathname) {
  worker ??= (await import('../dist/server/index.js')).default;
  const renderPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return worker.fetch(new Request(`https://amalabaev.com${renderPath}`, { headers: { accept: 'text/html' } }),
    { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

const routes = [
  ['/', 'fr', 'Web, mobile'],
  ['/en/', 'en', 'Web, mobile'],
  ['/engineering/', 'fr', 'Le niveau technique'],
  ['/en/engineering/', 'en', 'The engineering behind'],
  ['/developpeur-full-stack-freelance/', 'fr', 'Développeur full-stack freelance'],
  ['/en/freelance-full-stack-developer/', 'en', 'A freelance full-stack developer'],
  ['/work/operational-planning/', 'fr', 'Rendre une planification'],
  ['/en/work/operational-planning/', 'en', 'Making complex workforce planning'],
  ['/work/cardzap/', 'fr', 'Du document'],
  ['/en/work/cardzap/', 'en', 'From a document'],
  ['/work/garmentledger/', 'fr', 'Du tarif prévu au contrat'],
  ['/en/work/garmentledger/', 'en', 'From the agreed rate'],
  ['/work/masq/', 'fr', 'À chacun son mot'],
  ['/en/work/masq/', 'en', 'Everyone gets a word'],
  ['/confidentialite/', 'fr', 'Un contact direct'],
  ['/en/privacy/', 'en', 'Direct contact'],
];

for (const [pathname, locale, heading] of routes) {
  test(`${pathname} renders its own language, canonical and accessible navigation`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/html/);
    const html = await response.text();
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
    const headingText = html.match(/<h1[^>]*>([^]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, '');
    assert.ok(headingText?.startsWith(heading), 'The primary heading matches the route');
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    assert.equal(new URL(canonical).href, new URL(`https://amalabaev.com${pathname}`).href);
    assert.equal((html.match(/<main\b/g) || []).length, 1);
    assert.ok(html.includes('href="#main-content"'));
    assert.ok(html.includes(`href="${locale === 'fr' ? '/' : '/en/'}#contact"`));
    assert.ok(html.includes(`href="${locale === 'fr' ? '/confidentialite/' : '/en/privacy/'}"`));
    assert.ok(html.includes('property="og:image"'), 'Social preview metadata is present');
    assert.ok(html.includes('application/ld+json'), 'Structured data is server-rendered');
    assert.match(html, /hreflang="fr-FR"/i);
    assert.match(html, /hreflang="en-US"/i);
    assert.doesNotMatch(html, /document\.documentElement\.lang|localhost:3000|codex-preview|react-loading-skeleton|Starter Project|fonts\.googleapis\.com|fonts\.gstatic\.com/);
  });
}

test('home links to the featured case studies, the planning demo and the project brief', async () => {
  const html = await (await render('/')).text();
  assert.ok(html.includes('href="/work/cardzap/"'));
  assert.ok(html.includes('href="/work/garmentledger/"'));
  assert.ok(html.includes('href="/work/operational-planning/"'));
  assert.ok(html.includes('href="/work/masq/"'));
  assert.ok(html.includes('facultatif'));
  const emailInput = html.match(/<input[^>]*name="email"[^>]*>/)?.[0];
  assert.ok(emailInput?.includes('required=""'), 'Email is required');
  assert.match(html, /name="website"/);
  assert.ok(html.includes('FormSubmit'));
  assert.ok(html.includes('aria-live="polite"'));
});

test('the planning demonstration makes its fictional scope explicit and starts unconfirmed', async () => {
  const html = await (await render('/work/operational-planning/')).text();
  assert.ok(html.includes('Données fictives'));
  assert.ok(html.includes('Déplacer vers B à 09:00'));
  assert.match(html, /<button[^>]*disabled[^>]*>Confirmer le déplacement/);
});
