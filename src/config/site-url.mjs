/** Shared site origin for Node scripts (redirect HTML, serve, IndexNow). Keep in sync with `site.ts`. */

function readEnv(name) {
  if (typeof process !== 'undefined' && process.env?.[name]) return String(process.env[name]);
  return '';
}

function hostnameFrom(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  try {
    return new URL(raw.includes('://') ? raw : `https://${raw}`).hostname.replace(/\.$/, '').toLowerCase();
  } catch {
    return raw.replace(/^https?:\/\//i, '').split('/')[0].replace(/\.$/, '').toLowerCase();
  }
}

/** Apex brand domain. Never workers.dev, never a preview host. */
export const PRODUCTION_DOMAIN = 'mw4cheatshop.com';
export const PRODUCTION_ORIGIN = `https://${PRODUCTION_DOMAIN}`;

export const SITE_DOMAIN = PRODUCTION_DOMAIN;
export const SITE_URL = PRODUCTION_ORIGIN;

const envDomain = hostnameFrom(readEnv('PUBLIC_SITE_DOMAIN'));
if (envDomain && envDomain !== PRODUCTION_DOMAIN) {
  throw new Error(
    `PUBLIC_SITE_DOMAIN must be ${PRODUCTION_DOMAIN} or unset (got ${envDomain}). SEO origin is ${PRODUCTION_ORIGIN}.`,
  );
}
