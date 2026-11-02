import fs from 'node:fs';
import path from 'node:path';
import { SITE_DOMAIN } from '../src/config/site-url.mjs';

const dist = path.join(import.meta.dirname, '../dist');
const outDir = path.join(import.meta.dirname, '../../_copy-library');
const outFile = path.join(outDir, `${SITE_DOMAIN}.md`);

function walk(d, files = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith('.html')) files.push(p);
  }
  return files;
}

function routeFor(file) {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  if (rel === 'index.html') return '/';
  return `/${rel.slice(0, -10)}`;
}

function decodeHtml(s) {
  return (s ?? '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(html) {
  return decodeHtml(html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, ''))
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMain(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  return stripTags(main ?? html);
}

const skip =
  /^\/(go|checkout|privacy|terms|404|support)(\/|$)/.test.bind(/^\/(go|checkout|privacy|terms|404|support)(\/|$)/);
const isLocale = (r) => /^\/(es|de|fr)(\/|$)/.test(r);

const sections = [];

for (const file of walk(dist).sort()) {
  const route = routeFor(file);
  if (isLocale(route) || route.startsWith('/go/')) continue;
  if (['/checkout/', '/privacy/', '/terms/', '/404/', '/support/'].some((p) => route === p || route.endsWith(p))) {
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const title = decodeHtml(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '');
  const desc = decodeHtml(html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '');
  const h1 = decodeHtml(
    [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)][0]?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '',
  );
  const body = extractMain(html);
  sections.push({ route, title, desc, h1, body });
}

let md = `# English copy export: ${SITE_DOMAIN}\n\nGenerated from production build output. Prose only.\n\n`;

for (const s of sections) {
  md += `## ${s.route}\n\n`;
  if (s.title) md += `**Title:** ${s.title}\n\n`;
  if (s.desc) md += `**Meta description:** ${s.desc}\n\n`;
  if (s.h1) md += `**H1:** ${s.h1}\n\n`;
  md += `${s.body}\n\n---\n\n`;
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, md, 'utf8');
console.log(`Wrote ${outFile} (${sections.length} pages, ${md.length} chars)`);
