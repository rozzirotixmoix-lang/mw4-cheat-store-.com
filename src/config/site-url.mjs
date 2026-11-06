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

/** Apex brand domain. Do not bake CF_PAGES_URL (unique preview hosts) into SEO. */
export const PRODUCTION_DOMAIN = 'mw4cheatstore.com';

export const SITE_DOMAIN = hostnameFrom(readEnv('PUBLIC_SITE_DOMAIN')) || PRODUCTION_DOMAIN;
export const SITE_URL = `https://${SITE_DOMAIN}`;
