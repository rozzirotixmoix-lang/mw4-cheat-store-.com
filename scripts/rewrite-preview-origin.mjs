import { isLocalPreviewHost, parseHostname } from './local-preview-host.mjs';

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

/** Preview hosts must not become the SEO origin. Keep production URLs. */
export function rewritePreviewBody(text) {
  return text;
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
  const headers = new Headers(response.headers);

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

  headers.set('X-Robots-Tag', 'noindex, nofollow');

  const type = headers.get('content-type') || '';
  if (!shouldRewritePreview(url.pathname, type) && !type.includes('text/html')) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  const text = await response.text();
  const next = type.includes('text/html') || url.pathname.endsWith('.html') ? applyHtmlNoindex(text) : text;
  headers.delete('Content-Length');
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
