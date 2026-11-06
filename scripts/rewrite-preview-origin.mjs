import { PRODUCTION_DOMAIN } from '../src/config/site-url.mjs';
import { isLocalPreviewHost, parseHostname } from './local-preview-host.mjs';

const PRODUCTION_ORIGIN = `https://${PRODUCTION_DOMAIN}`;
const PAGES_HOST_RE = /https:\/\/(?:[a-z0-9-]+\.)?mw4-cheat-store--com\.pages\.dev/gi;

export function previewRequestOrigin(request) {
  const url = new URL(request.url);
  const host = parseHostname(request.headers.get('host') || url.hostname);
  if (!isLocalPreviewHost(host)) return null;
  return `${url.protocol}//${url.host}`;
}

export function shouldRewritePreview(pathname, contentType) {
  const type = String(contentType || '').toLowerCase();
  return (
    type.includes('text/html') ||
    type.includes('xml') ||
    type.includes('text/plain') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.(xml|txt)$/i.test(pathname)
  );
}

function normalizeLoc(href, origin) {
  try {
    const url = new URL(href);
    let path = url.pathname || '/';
    if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path.split('/').pop() || '')) {
      path += '/';
    }
    return `${origin}${path}`;
  } catch {
    return href;
  }
}

function dedupeSitemap(xml, origin) {
  if (!xml.includes('<urlset') || !xml.includes('<loc>')) return xml;
  const seen = new Set();
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((match) => {
      const block = match[0];
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      if (!loc) return '';
      const canonical = normalizeLoc(loc, origin);
      if (seen.has(canonical)) return '';
      seen.add(canonical);
      return block.replace(/<loc>[^<]+<\/loc>/, `<loc>${canonical}</loc>`);
    })
    .filter(Boolean);
  const hasXhtml = xml.includes('xhtml:link');
  const ns = hasXhtml
    ? 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
  const stylesheet = xml.includes('xml-stylesheet')
    ? '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n'
    : '';
  return `<?xml version="1.0" encoding="UTF-8"?>\n${stylesheet}<urlset ${ns}>\n${urls.join('\n')}\n</urlset>\n`;
}

export function rewritePreviewBody(text, origin, pathname = '') {
  if (!text || !origin) return text;
  let next = text.split(PRODUCTION_ORIGIN).join(origin);
  next = next.replace(PAGES_HOST_RE, origin);
  if (pathname === '/sitemap.xml' || pathname.endsWith('sitemap.xml')) {
    next = dedupeSitemap(next, origin);
  }
  return next;
}

export async function rewritePreviewResponse(request, response) {
  const origin = previewRequestOrigin(request);
  const url = new URL(request.url);
  const headers = new Headers(response.headers);

  if (url.pathname === '/sitemap.xml' || url.pathname.endsWith('.xml')) {
    headers.set('Content-Type', 'application/xml; charset=utf-8');
  } else if (url.pathname === '/robots.txt') {
    headers.set('Content-Type', 'text/plain; charset=utf-8');
  }

  if (!origin || !shouldRewritePreview(url.pathname, headers.get('content-type'))) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  const text = await response.text();
  const next = rewritePreviewBody(text, origin, url.pathname);
  headers.delete('Content-Length');
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
