import type { LinkItem } from '@astrojs/sitemap';
import { localizePath, stripLocalePrefix } from '../i18n/paths';
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from '../i18n/locales';
import { getBlogPost } from '../data/blog';
import { getForumPost } from '../data/forum/locale';
import { canonicalUrl } from './seo';

export type HreflangAlternate = { hreflang: string; href: string };

function localeHasSlugContent(basePath: string, locale: SiteLocale): boolean {
  const blogMatch = basePath.match(/^\/blog\/([^/]+)\/$/);
  if (blogMatch) return Boolean(getBlogPost(blogMatch[1], locale));
  const forumMatch = basePath.match(/^\/forum\/([^/]+)\/$/);
  if (forumMatch) return Boolean(getForumPost(forumMatch[1], locale));
  return true;
}

/** HTML `<link rel="alternate" hreflang>` entries for a pathname in any locale. */
export function hreflangAlternatesForPath(pathname: string): HreflangAlternate[] {
  const basePath = stripLocalePrefix(pathname);
  const locales = LOCALES.filter((locale) => localeHasSlugContent(basePath, locale));
  const alternates: HreflangAlternate[] = locales.map((locale) => ({
    hreflang: locale,
    href: canonicalUrl(localizePath(basePath, locale)),
  }));
  if (locales.includes(DEFAULT_LOCALE)) {
    alternates.push({
      hreflang: 'x-default',
      href: canonicalUrl(localizePath(basePath, DEFAULT_LOCALE)),
    });
  }
  return alternates;
}

/** Sitemap `xhtml:link` alternates for the same pathname cluster. */
export function sitemapAlternateLinks(pathname: string): LinkItem[] {
  return hreflangAlternatesForPath(pathname).map(({ hreflang, href }) => ({
    lang: hreflang,
    url: href,
  }));
}

export function isIndexablePath(pathname: string): boolean {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return false;
  }
  if (/^\/(es|de|fr)\/404\//.test(path)) return false;
  if (path === '/en/' || path.startsWith('/en/')) return false;
  if (/^\/(es|de|fr)\/go(\/|$)/.test(path)) return false;

  const base = stripLocalePrefix(path);
  if (base === '/privacy/' || base === '/terms/') return false;

  return true;
}
