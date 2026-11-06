import { isLocalPreviewHost, parseHostname } from './local-preview-host.mjs';
import { PRODUCTION_DOMAIN, PRODUCTION_ORIGIN } from '../src/config/site-url.mjs';

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
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.(html|xml|txt)$/i.test(pathname)
  );
}

function isPagesPreviewHost(host) {
  return parseHostname(host).endsWith('.pages.dev');
}

/** Point canonical, hreflang, og:url, JSON-LD, robots Sitemap, and sitemap locs at the request host. */
export function rewritePreviewBody(text, previewOrigin) {
  if (!text || !previewOrigin) return text;
  let next = text.split(PRODUCTION_ORIGIN).join(previewOrigin);
  next = next.split(`https://${PRODUCTION_DOMAIN}`).join(previewOrigin);
  next = next.split(`http://${PRODUCTION_DOMAIN}`).join(previewOrigin);
  return next;
}

function applyHtmlNoindex(html) {
  if (!html.includes('<html')) return html;
  let next = html.replace(
    /<meta\s+([^>]*name=["']robots["'][^>]*)content=["'][^"']*["']([^>]*)>/gi,
    '<meta $1content="noindex, nofollow"$2>',
  );
  next = next.replace(
    /<meta\s+([^>]*name=["']googlebot["'][^>]*)content=["'][^"']*["']([^>]*)>/gi,
    '<meta $1content="noindex, nofollow"$2>',
  );
  if (!/name=["']robots["']/i.test(next)) {
    next = next.replace(/<head([^>]*)>/i, '<head$1><meta name="robots" content="noindex, nofollow">');
  }
  return next;
}

export async function rewritePreviewResponse(request, response) {
  const origin = previewRequestOrigin(request);
  const url = new URL(request.url);
  const host = parseHostname(request.headers.get('host') || url.hostname);
  const headers = new Headers(response.headers);
  const pagesPreview = isPagesPreviewHost(host);

  if (url.pathname === '/sitemap.xml' || url.pathname.endsWith('.xml')) {
    headers.set('Content-Type', 'application/xml; charset=utf-8');
  } else if (url.pathname === '/robots.txt') {
    headers.set('Content-Type', 'text/plain; charset=utf-8');
  }

  if (!origin) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  if (!pagesPreview) {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  const type = headers.get('content-type') || '';
  if (!shouldRewritePreview(url.pathname, type) && !type.includes('text/html')) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  const text = await response.text();
  let next = rewritePreviewBody(text, origin);
  if (!pagesPreview && (type.includes('text/html') || url.pathname.endsWith('.html'))) {
    next = applyHtmlNoindex(next);
  }
  headers.delete('Content-Length');
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
