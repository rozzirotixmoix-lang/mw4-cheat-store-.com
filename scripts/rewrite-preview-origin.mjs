import { PRODUCTION_DOMAIN } from '../src/config/site-url.mjs';
import { isLocalPreviewHost, parseHostname } from './local-preview-host.mjs';

const PRODUCTION_ORIGIN = `https://${PRODUCTION_DOMAIN}`;

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

export function rewritePreviewBody(text, origin) {
  if (!text || !origin) return text;
  return text.split(PRODUCTION_ORIGIN).join(origin);
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
  const next = rewritePreviewBody(text, origin);
  headers.delete('Content-Length');
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
