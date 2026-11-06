/**
 * Build-time SEO gate. Fails the build if the production origin, robots/sitemap,
 * JSON-LD offers, or leftover-topic keywords violate reviewer rules.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { PRODUCTION_DOMAIN, PRODUCTION_ORIGIN, SITE_URL } from '../src/config/site-url.mjs';
import { PATH_REDIRECTS } from './redirects.mjs';

const REQUIRED_ORIGIN = 'https://mw4cheatshop.com';
const REQUIRED_HOST = 'mw4cheatshop.com';
const LEFTOVER = ['r6hacks', 'rainbow six', 'arc raiders', 'arcraiderhacks', 'r6hacks.com'];
const LEFTOVER_WORD = [/\bvalorant\b/i, /\bsiege\b/i, /\br6\b/i];
const SKIP_LEFTOVER_PATH = /hwid-spoofer/;

const errors = [];

function fail(message) {
  errors.push(message);
}

function walkHtml(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['_astro', 'go'].includes(entry.name)) continue;
      walkHtml(p, acc);
    } else if (entry.name === 'index.html' || entry.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

if (PRODUCTION_DOMAIN !== REQUIRED_HOST || PRODUCTION_ORIGIN !== REQUIRED_ORIGIN || SITE_URL !== REQUIRED_ORIGIN) {
  fail(`Origin must be ${REQUIRED_ORIGIN} (got domain=${PRODUCTION_DOMAIN} url=${SITE_URL})`);
}
if (/workers\.dev/i.test(PRODUCTION_ORIGIN) || !PRODUCTION_ORIGIN) {
  fail('Production origin is empty or workers.dev');
}

const configOnly = process.argv.includes('--pre');
if (configOnly) {
  if (errors.length) {
    console.error(errors.map((e) => `FAIL ${e}`).join('\n'));
    process.exit(1);
  }
  console.log(`seo-check: PASS config origin=${REQUIRED_ORIGIN}`);
  process.exit(0);
}

const dist = 'dist';
if (!existsSync(dist)) {
  fail('dist missing');
  console.error(errors.map((e) => `FAIL ${e}`).join('\n'));
  process.exit(1);
}

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const sitemapLine = robots.match(/^Sitemap:\s*(\S+)/m)?.[1] || '';
if (sitemapLine !== `${REQUIRED_ORIGIN}/sitemap.xml`) {
  fail(`robots.txt Sitemap must be ${REQUIRED_ORIGIN}/sitemap.xml (got ${sitemapLine})`);
}
if (/workers\.dev/i.test(robots)) fail('robots.txt contains workers.dev');

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!locs.length) fail('sitemap.xml has no loc entries');
for (const loc of locs) {
  if (!loc.startsWith(`${REQUIRED_ORIGIN}/`)) fail(`sitemap loc host mismatch: ${loc}`);
}
if (/workers\.dev/i.test(sitemap)) fail('sitemap.xml contains workers.dev');

const worker = readFileSync('workers/site.js', 'utf8');
if (!worker.includes('resolvePathRedirect')) fail('Worker does not execute PATH_REDIRECTS at runtime');
if (!PATH_REDIRECTS.size) fail('PATH_REDIRECTS is empty');

const pages = walkHtml(dist);
let productOffers = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(/\\/g, '/');
  if (/workers\.dev/i.test(html)) fail(`workers.dev in ${rel}`);
  if (/mw4cheatstore\.com/i.test(html)) fail(`old host mw4cheatstore.com in ${rel}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical && !canonical.startsWith(`${REQUIRED_ORIGIN}/`)) {
    fail(`canonical host mismatch in ${rel}: ${canonical}`);
  }
  const ogUrl = html.match(/property="og:url" content="([^"]+)"/)?.[1];
  if (ogUrl && !ogUrl.startsWith(`${REQUIRED_ORIGIN}/`)) {
    fail(`og:url host mismatch in ${rel}: ${ogUrl}`);
  }

  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const block of jsonBlocks) {
    let data;
    try {
      data = JSON.parse(block[1]);
    } catch {
      fail(`invalid JSON-LD in ${rel}`);
      continue;
    }
    const nodes = [];
    const queue = Array.isArray(data) ? [...data] : [data];
    while (queue.length) {
      const node = queue.shift();
      if (!node || typeof node !== 'object') continue;
      nodes.push(node);
      if (Array.isArray(node['@graph'])) queue.push(...node['@graph']);
    }
    for (const node of nodes) {
      if (node['@type'] === 'Product') {
        const offer = node.offers;
        if (!offer || offer.price == null || offer.price === '' || !offer.priceCurrency || !offer.url || !offer.availability) {
          fail(`Product Offer incomplete in ${rel}`);
        } else {
          productOffers += 1;
        }
      }
      const dumped = JSON.stringify(node);
      if (dumped.includes('workers.dev')) fail(`workers.dev in JSON-LD ${rel}`);
      if (dumped.includes('mw4cheatstore.com')) fail(`old host in JSON-LD ${rel}`);
    }
  }

  if (!SKIP_LEFTOVER_PATH.test(rel)) {
    const lower = html.toLowerCase();
    for (const phrase of LEFTOVER) {
      if (lower.includes(phrase)) fail(`leftover topic "${phrase}" in ${rel}`);
    }
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
    for (const re of LEFTOVER_WORD) {
      if (re.test(text)) fail(`leftover topic ${re} in ${rel}`);
    }
  }
}

if (productOffers < 1) fail('No Product Offer with price found in dist');

if (errors.length) {
  console.error(`seo-check: ${errors.length} failure(s)`);
  for (const error of errors) console.error(`FAIL ${error}`);
  process.exit(1);
}

console.log(
  `seo-check: PASS origin=${REQUIRED_ORIGIN} pages=${pages.length} sitemap=${locs.length} productOffers=${productOffers} redirects=${PATH_REDIRECTS.size}`,
);
