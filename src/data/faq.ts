import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';
import { isUtilityEnabled } from '../config/catalog';
import { applySiteTokens } from '../i18n/brandTokens';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
  /** Utility slugs the answer talks about; the item is hidden when any of them is not sold. */
  requires?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Windows cheat menu', ROUTES.cheats);
const hwid = link('fingerprint utility', ROUTES.hwidSpoofer);
const ugc = link('appeal workflows', ROUTES.ugc);
const skinChanger = link('local finishes page', ROUTES.skinChanger);
const allProducts = link('products page', ROUTES.productsHub);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Modern Warfare 4 cheats are online?',
    a: a('The status banner is on {siteDomain}. Read it after a Modern Warfare 4 update and after an anti-cheat update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Partner checkout opens the portal, with the loader, the setup guide, and saved configs. Read the guide before you start Modern Warfare 4.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party Modern Warfare 4 cheats?',
    a: a('Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.'),
    aHtml:
      'Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.',
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Modern Warfare 4 on 64-bit Windows 10 or Windows 11. macOS and Linux are outside that list.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Use the HWID reset in the portal, or open a support ticket. The number of moves depends on the tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `Every product is on the ${allProducts}: {productList}. Each page lists its features and sends checkout to our partner.`,
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'accountRecovery',
    q: 'What does UGC do with a restricted account?',
    a: `${ugc} (Unban & Governance Control) stores reusable appeal workflows and replays dispute steps for limited gaming, social, or marketplace profiles across platforms.`,
    scopes: ['ugc'],
    requires: ['ugc'],
  },
  {
    id: 'ugc-guarantee',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Does UGC promise to lift a suspension?',
    a: a('No. UGC only packages evidence and wording. Reviewers decide outcomes. Some suspensions never lift, and no reversal is promised.'),
    scopes: ['ugc'],
    requires: ['ugc'],
  },
  {
    id: 'ugc-vs-hwid',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'Is this an account limit or a block on this PC?',
    a: `Profile or account limits belong with ${ugc} and its automated appeals. When only this PC rejects brand-new logins, treat it as hardware and open ${hwid}.`,
    scopes: ['ugc', 'hwid-spoofer'],
    requires: ['ugc', 'hwid-spoofer'],
  },
  {
    id: 'skin-visible',
    topic: 'products',
    icon: 'cosmetic',
    q: 'Will Skin Changer put cosmetics into my inventory?',
    a: `No. ${skinChanger} renders cosmetics locally. Inventory stays empty, trades stay blocked, and other players should not see the finish.`,
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'skin-games',
    topic: 'products',
    icon: 'faqPlatforms',
    q: 'Which games does Skin Changer list?',
    a: a('Major titles appear on the product page, yet patches can remove them. Email support with your game name before checkout.'),
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'utility-requirements',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What Windows setup do the utilities need?',
    a: a('Use Windows 10 or 11 with HVCI and Core Isolation enabled plus TPM and Secure Boot in firmware. HWID Spoofer also requires administrator rights. See each utility page for the full list.'),
    scopes: ['hwid-spoofer', 'ugc', 'skin-changer'],
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Modern Warfare 4 ESP?',
    a: `ESP and wallhack show enemy position, health, and distance on Modern Warfare 4. ${cheats} also includes aimbot, silent aimbot, no recoil, God Mode, infinite ammo, and speedhack.`,
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and wallhack draw information. They leave the crosshair where you put it. Aimbot, silent aimbot, and no recoil are separate switches on ${cheats}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is the cheat sold as a private build?',
    a: `The build is private, with direct developer support and priority patch delivery. A cap on slots keeps those patch cycles short. Read the banner before you pay.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `The option list on ${cheats} has no capture filter. Make a local recording before a live session.`,
  },
  {
    id: 'build-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Will the build stay online after every patch?',
    a: a('No. The banner and the product page show status at the time you look. If the build says updating, testing, or offline after an anti-cheat update, wait.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP lower-profile than aimbot?',
    a: a('ESP can be less obvious than a maxed aimbot. It is still a cheat. Leaving aim assist off does not remove it from anti-cheat review.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When is the HWID Spoofer the product to open?',
    a: `${hwid} handles hardware ID flags when other PCs sign in but this tower refuses them. Disk serials, MAC addresses, GPU IDs, and related fields refresh with a bundled cleaner. Account sanctions stay active.`,
    scopes: ['hwid-spoofer'],
    requires: ['hwid-spoofer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `{siteName} runs an external loader and syncs configs from the portal. It does not place files in the Modern Warfare 4 directory. Account penalties can still follow. See ${cheats}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Does this article replace the live status banner?',
    a: `No. Guides explain a topic. A live Modern Warfare 4 session still uses ${cheats} when the banner on {siteDomain} says online.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to product pages such as ${cheats}. Checkout goes through our partner. Take the loader from the portal, not from a message.`,
  },
  {
    id: 'who-cheats',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Modern Warfare 4 Cheats?',
    a: `People who want aimbot, silent aimbot, ESP, wallhack, and the other listed options while playing Modern Warfare 4.`,
    scopes: ['elite'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after an anti-cheat update?',
    a: a('Read the status on {siteDomain}. Wait until the banner says online. After a patch, start with the quieter aim and ESP settings.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'How do I get install help?',
    a: a('After you pay, open a ticket with the order email, the Windows version, and the Modern Warfare 4 client build. Support walks through the loader from there.'),
  },
  {
    id: 'pmc-scav-raids',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do modules work across Modern Warfare 4 game modes?',
    a: `The same option list is what the menu shows in each mode. Set the ESP distance and aim smoothness before the first match on ${cheats}.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which options cover ESP and wallhack?',
    a: `ESP and wallhack are part of ${cheats}. They show enemy position, health, and distance.`,
    scopes: ['elite'],
  },
  {
    id: 'trigger-bot',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: 'Does the product include silent aimbot?',
    a: `Aimbot, silent aimbot, and no recoil are on ${cheats}. Each one has a switch in the menu.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Modern Warfare 4 cheats?',
    a: a('Private means a per-user key and a maintained build, delivered in the portal for the Modern Warfare 4 menu on one license.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Short answers sit on the homepage and on each product page. The ${faqPage} holds the full set, and ${blog} is where longer guides go when they are published.`,
  },
];

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Faq: Browse by category',
  subtitle: 'Plans, ESP, aim, products, setup, and the longer answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers for this page. The FAQ page holds the rest.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const BLOG_FAQ_IDS: Record<string, string[]> = {
  'modern-warfare-4-cheats-buying-guide': ['products-page', 'ban-risk', 'build-status', 'blog-vs-cheats', 'after-buy'],
  'modern-warfare-4-cheats-price-guide': ['elite-slots', 'after-buy', 'products-page', 'platforms', 'blog-setup'],
  'modern-warfare-4-ricochet-anti-cheat-explained': ['status', 'vac-update', 'ban-risk', 'platforms', 'utility-requirements'],
  'mw4-esp-vs-wallhack-differences': ['what-is-esp', 'esp-vs-aim', 'stream-proof', 'ban-risk', 'blog-vs-cheats'],
  'modern-warfare-4-hwid-ban-spoofer-guide': ['hwid-when', 'ugc-vs-hwid', 'ban-risk', 'utility-requirements', 'platforms'],
};

const DEFAULT_BLOG_FAQ_IDS = ['blog-vs-cheats', 'blog-setup', 'status', 'after-buy', 'platforms'];

function pickFaqItems(ids: string[], locale: SiteLocale): SiteFaqItem[] {
  const localized = getSiteFaqsForLocale(locale);
  const seen = new Set<string>();
  return ids
    .map((id) => localized.find((item) => item.id === id))
    .filter((item): item is SiteFaqItem => Boolean(item))
    .filter((item) => (item.requires ?? []).every(isUtilityEnabled))
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, 5)
    .map((item) => ({ ...item, q: applySiteTokens(item.q), a: applySiteTokens(item.a) }));
}

export function getBlogFaqs(_tag: string, slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  return pickFaqItems(BLOG_FAQ_IDS[slug] ?? DEFAULT_BLOG_FAQ_IDS, locale);
}

export function getForumFaqs(slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  const ids = ['status', 'after-buy', 'ban-risk', 'platforms'];
  if (slug.includes('hwid')) ids.unshift('hwid-when');
  if (slug.includes('skin')) ids.unshift('skin-visible');
  if (slug.includes('ugc')) ids.unshift('ugc-what');
  if (slug.includes('esp') || slug.includes('minimap')) ids.unshift('what-is-esp');
  if (slug.includes('aim')) ids.unshift('esp-vs-aim');
  if (slug.includes('license') || slug.includes('lifetime')) ids.unshift('elite-slots');
  if (slug.includes('ban-risk') || slug.includes('cheat-ban')) ids.unshift('build-status');
  return pickFaqItems(ids, locale);
}

