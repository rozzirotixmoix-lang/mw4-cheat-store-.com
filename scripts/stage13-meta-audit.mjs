import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(import.meta.dirname, '../dist');

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

const longTitles = [];
const shortDesc = [];
const longDesc = [];

for (const file of walk(dist)) {
  const route = routeFor(file);
  if (route.startsWith('/go/')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '';
  if (title.length > 60) longTitles.push({ route, len: title.length, title });
  if (desc && desc.length < 120) shortDesc.push({ route, len: desc.length });
  if (desc && desc.length > 160) longDesc.push({ route, len: desc.length });
}

console.log(
  JSON.stringify(
    {
      longTitlesOver60: longTitles.length,
      longTitles,
      descriptionsUnder120: shortDesc.length,
      descriptionsOver160: longDesc.length,
      shortDescSamples: shortDesc.slice(0, 20),
      longDescSamples: longDesc.slice(0, 20),
    },
    null,
    2,
  ),
);
