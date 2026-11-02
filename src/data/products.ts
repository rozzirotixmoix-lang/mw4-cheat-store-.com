import {
  ALL_UTILITY_PRODUCT_SLUGS,
  CHEAT_PRODUCT_SLUGS,
  CHEATS_PRIMARY_SLUG,
  HWID_SPOOFER_SLUG,
  SKIN_CHANGER_SLUG,
  UGC_SLUG,
  UTILITY_PRODUCT_PATHS,
  UTILITY_PRODUCT_SLUGS,
  type UtilityProductSlug,
} from '../config/catalog';
import { PRODUCT_BASE } from '../config/site';
import { CHEAT_PRODUCT_NAME } from '../config/game';
import { getTranslations } from '../i18n';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import type { SiteLocale } from '../i18n/locales';
import type { Translations } from '../i18n/types';
import { checkoutForSlug } from '../config/checkout';
import { SHOWCASE_GALLERY_KEYS } from '../config/gameplayMedia';
import { HWID_GALLERY_KEYS } from '../config/hwidMedia';
import type { IconName } from '../components/icons/types';
import { getProductCopyBundle, registerProductCopyBundle, type ProductCopyBundle } from './products/exportCopy';
import esProductCopy from './products/locales/es.json';
import deProductCopy from './products/locales/de.json';
import frProductCopy from './products/locales/fr.json';

export interface ProductSlide {
  /** Still image, or the poster frame when `videoSrc` is set. */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  width?: number;
  height?: number;
  /** `image` unless a clip is attached. */
  kind?: 'image' | 'video';
  /** MP4 or WebM. The slider shows this instead of the still; `src` stays the poster. */
  videoSrc?: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  relatedForumSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'modern-warfare-4-cheats-buying-guide',
    'modern-warfare-4-cheats-price-guide',
    'mw4-esp-vs-wallhack-differences',
    'modern-warfare-4-ricochet-anti-cheat-explained',
    'modern-warfare-4-hwid-ban-spoofer-guide',
  ],
  'hwid-spoofer': [
    'modern-warfare-4-hwid-ban-spoofer-guide',
    'modern-warfare-4-ricochet-anti-cheat-explained',
    'modern-warfare-4-cheats-buying-guide',
    'modern-warfare-4-cheats-price-guide',
    'mw4-esp-vs-wallhack-differences',
  ],
  ugc: [
    'modern-warfare-4-cheats-buying-guide',
    'modern-warfare-4-hwid-ban-spoofer-guide',
    'modern-warfare-4-ricochet-anti-cheat-explained',
    'modern-warfare-4-cheats-price-guide',
    'mw4-esp-vs-wallhack-differences',
  ],
  'skin-changer': [
    'mw4-esp-vs-wallhack-differences',
    'modern-warfare-4-cheats-buying-guide',
    'modern-warfare-4-cheats-price-guide',
    'modern-warfare-4-ricochet-anti-cheat-explained',
    'modern-warfare-4-hwid-ban-spoofer-guide',
  ],
};

/** Community threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  elite: [
    'what-features-to-look-for-in-mw4-cheats',
    'mw4-cheats-monthly-vs-lifetime',
    'mw4-cheats-supported-game-modes',
    'mw4-cheats-update-status-and-compatibility',
  ],
  'hwid-spoofer': [
    'mw4-hwid-spoofer-ricochet-compatibility',
    'what-is-cloud-dma-mw4',
    'mw4-cheats-not-opening-windows-11',
    'mw4-cheats-update-status-and-compatibility',
  ],
  ugc: [
    'mw4-cheats-monthly-vs-lifetime',
    'are-mw4-cheats-worth-buying-for-casual-players',
    'mw4-cheats-update-status-and-compatibility',
    'mw4-cheats-not-opening-windows-11',
  ],
  'skin-changer': [
    'mw4-skin-changer-vs-gameplay-features',
    'mw4-cheat-menu-customization-and-settings',
    'mw4-6v6-and-dmz-saved-configurations',
    'mw4-cheats-supported-game-modes',
  ],
};

const productBase = PRODUCT_BASE;

const hwidAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Confirm anti-cheat notes',
    desc: 'Coverage on this page names Riot Vanguard, Easy Anti-Cheat, BattlEye, and Ricochet with ACE and Javelin. Line up your title with that list and with the banner on {siteDomain} before checkout.',
  },
  {
    num: '02',
    title: 'Choose 31 days or lifetime',
    desc: '$50 covers 31 days. $150 buys unlimited access. Both tiers ship the operator panel plus the bundled trace cleaner.',
  },
  {
    num: '03',
    title: 'Lock down Windows first',
    desc: 'Enable HVCI and Core Isolation in Windows Security. Enable TPM and Secure Boot in firmware before session one. Administrator rights on this PC are required for spoofing and cleanup.',
  },
  {
    num: '04',
    title: 'Spoof, scrub, then play',
    desc: 'Follow the portal guide: rotate identifiers, run the cleaner, then open the game client.',
  },
];

const ugcAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Profile limit vs PC block',
    desc: 'Pick UGC when a gaming, social, or marketplace profile is restricted. When only this tower rejects fresh logins, use the HWID product instead.',
  },
  {
    num: '02',
    title: 'Pick monthly or lifetime',
    desc: '31 days costs $35. Lifetime is $150 with unlimited access. The appeal workspace matches on both plans.',
  },
  {
    num: '03',
    title: 'Harden Windows pre-launch',
    desc: 'Turn on HVCI and Core Isolation in Windows Security. Turn on TPM and Secure Boot in firmware before the first appeal session.',
  },
  {
    num: '04',
    title: 'Save the workflow, run repeats',
    desc: 'Translate platform rules into a UGC template. The client replays dispute steps so you do not retype the packet.',
  },
];

const skinChangerAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Verify title support',
    desc: 'Major games appear on the list today, yet patches can remove entries. Email support with your game name before you pay.',
  },
  {
    num: '02',
    title: 'Select plan length',
    desc: '$35 buys 31 days of cosmetic access. $150 is a one-time unlimited license. The on-screen library is identical on both.',
  },
  {
    num: '03',
    title: 'Enable security toggles',
    desc: 'Before first launch, enable HVCI and Core Isolation in Windows Security and TPM plus Secure Boot in firmware.',
  },
  {
    num: '04',
    title: 'Pick finishes in the menu',
    desc: 'After portal delivery, open the lightweight client and select a weapon finish, outfit, or knife style for that session.',
  },
];

const eliteAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Read the banner on {siteDomain} before you pay, and again after a Modern Warfare 4 or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Pick monthly or lifetime',
    desc: 'When you buy mw4 hacks, partner checkout keeps the same menu list for the 30 day plan or the lifetime plan. Confirm prices on this page first.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Write to support with the order email ready if you need availability, Windows setup, or payment details confirmed.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Follow the setup guide after you pay. Ask support if the install stalls. Match the current game build before you launch.',
  },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Read the banner on {siteDomain} before you pay, and again after a Modern Warfare 4 or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Choose Modern Warfare 4 Cheats or the utility that matches the job. Read that feature list before partner checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Write to support with the order email ready if you need availability, Windows setup, or payment details confirmed.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Follow the setup guide after you pay. Ask support if the install stalls. Match the current game build before you launch.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'A new game build or an anti-cheat update can change which options still run. Read the banner on {siteDomain} before you pay or launch.';

const sharedLimitations =
  'Third-party cheat software can be detected, can stop after a game update, and can lead to account penalties. Compatibility can change before this page is edited.';

const mainProductSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Confirm the current game version before launch.' },
  { icon: 'reqSettings', text: 'Patches and anti-cheat updates can change compatibility.' },
];

const galleryRaw = {
  gpMatchEsp: {
    width: 1024,
    height: 576,
    src: '/images/gameplay/modern-warfare-4-esp-scope-gameplay.webp',
    alt: 'Modern Warfare 4 scoped rifle view with green enemy ESP boxes in a wooden warehouse corridor.',
    caption: 'In-match ESP',
    captionDesc: 'Scoped first-person view with enemy boxes and minimap callouts during Modern Warfare 4 matches.',
  },
  gpAimbotMenu: {
    width: 1024,
    height: 576,
    src: '/images/gameplay/modern-warfare-4-visuals-settings-panel.webp',
    alt: 'Modern Warfare 4 Visuals tab with player box, skeleton, health bar, and distance sliders on a dark purple menu.',
    caption: 'Visuals panel',
    captionDesc: 'mw4 wallhack 2026 style Visuals toggles for skeleton thickness and max distance on Modern Warfare 4.',
  },
  gpEspMenu: {
    width: 1024,
    height: 576,
    src: '/images/gameplay/modern-warfare-4-visuals-settings-interface.webp',
    alt: 'Modern Warfare 4 Visuals menu showing portal, ores, traps, chests, and items distance controls in three columns.',
    caption: 'World ESP layers',
    captionDesc: 'Portal, trap, chest, and item distance sliders beside the Visuals navigation for Modern Warfare 4.',
  },
} satisfies Record<
  string,
  {
    src: string;
    alt: string;
    caption: string;
    captionDesc: string;
    width: number;
    height: number;
    videoSrc?: string;
  }
>;

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = galleryRaw[key];
    if (!item) throw new Error(`Missing gallery key: ${String(key)}`);
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const showcaseSlides = slide(...SHOWCASE_GALLERY_KEYS);

const hwidGalleryRaw = {
  hwidSerialCheck: {
    src: '/images/hwid-spoofer/hwid-spoofer-serial-check-panel.webp',
    width: 1024,
    height: 576,
    alt: 'Table of DISK, MOBO, Display, UUID, GPU, and Network rows marked changed or unchanged.',
    caption: 'ID status grid',
    captionDesc: 'Each line shows if that hardware field flipped after the last pass.',
  },
  hwidUefiSpoof: {
    src: '/images/hwid-spoofer/hwid-spoofer-uefi-spoof-panel.webp',
    width: 1024,
    height: 576,
    alt: 'UEFI panel with Permanent Spoof, GPU on, ethernet off, and a seed input.',
    caption: 'Firmware panel',
    captionDesc: 'Toggle GPU or ethernet spoofing, set a seed, and commit a permanent swap here.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; width: number; height: number; videoSrc?: string }
>;

type HwidGalleryKey = keyof typeof hwidGalleryRaw;

function hwidSlide(...keys: HwidGalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = hwidGalleryRaw[key];
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const hwidShowcaseSlides = hwidSlide(...HWID_GALLERY_KEYS);

const ugcShowcaseSlides: ProductSlide[] = [
  {
    src: '/images/ugc/ugc.webp',
    width: 960,
    height: 540,
    alt: 'UGC badge with a red gear icon, clock dial, and motion streaks on a dark field.',
    caption: 'Workflow badge',
    captionDesc: 'Icon for the template store and the automated dispute runners tied to limited profiles.',
  },
];

const skinChangerShowcaseSlides: ProductSlide[] = [
  {
    src: '/images/skin-changer/skin-changer.webp',
    width: 1213,
    height: 682,
    alt: 'Shield logo reading Skin Changer above crossed rifles, revolvers, and star accents.',
    caption: 'Client badge',
    captionDesc: 'Marks the on-screen library for guns, outfits, and knife styles you preview locally.',
  },
];

function slugFromHref(href: string): string {
  const normalized = href.replace(/^\//, '').replace(/\/$/, '');
  for (const slug of ALL_UTILITY_PRODUCT_SLUGS) {
    if (normalized === slug || normalized.endsWith(`/${slug}`)) return slug;
  }
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  if (!segment || segment === 'cheats' || segment === 'product') {
    return CHEATS_PRIMARY_SLUG;
  }
  return segment;
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'The Modern Warfare 4 menu lists separate switches for aimbot, silent aimbot, ESP, wallhack, God Mode, infinite ammo, no recoil, and speedhack. Smoothness, bone priority, and distance caps sit on the aim tab.',
    },
    { type: 'h2', text: 'Configuration and support' },
    {
      type: 'p',
      text: 'Portal notes explain loader order and which tab holds each option. After a patch, reopen the menu and confirm which switches still respond before you queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Plans and delivery' },
    {
      type: 'p',
      text: 'Monthly access is $35 for 30 days. Lifetime access is $150 with no end date on the license. Both tiers share one module list. Checkout sends you to the partner flow, then the portal hosts the Windows loader.',
    },
    { type: 'h2', text: 'Updates and compatibility' },
    {
      type: 'p',
      text: 'Game builds and anti-cheat updates can retire options without this page updating first. Match your client version to the banner on {siteDomain} before every session.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'Flags that stay with the machine' },
    {
      type: 'p',
      text: 'Hardware blocks stick to the tower, not the Windows username. Friends log in elsewhere while this box refuses every fresh account. The operator panel rotates disk serials, MAC addresses, GPU IDs, and linked fingerprints in one pass so sign-in can proceed on a refreshed profile. Active account sanctions on the record are untouched.',
    },
    { type: 'h2', text: 'Anti-cheat families written on this page' },
    {
      type: 'p',
      text: 'Notes here call out Riot Vanguard (Valorant), Easy Anti-Cheat, BattlEye, and Ricochet (Call of Duty) alongside ACE and Javelin, plus comparable stacks. Spoofing may conflict with publisher terms and can trigger new penalties. Vendor patches can retire a listed family without a warning on this page. Confirm your title against the list and the live banner before you pay.',
    },
    { type: 'h2', text: 'Cleanup that ships with the license' },
    {
      type: 'p',
      text: 'The license bundles a trace cleaner that scrubs leftovers after the spoof. Run identifier changes first, launch the cleaner second, and open the game last, exactly as the portal guide lists today.',
    },
    { type: 'h2', text: 'Requirements on this PC' },
    {
      type: 'p',
      text: 'Run Windows 10 or 11, 64-bit, on this box. Spoofing and cleanup require administrator rights. Leave HVCI and Core Isolation on in Windows Security. Leave TPM and Secure Boot on in firmware. Keep internet online for activation and updates.',
    },
  ],
  ugc: [
    { type: 'h2', text: 'What Unban & Governance Control prepares' },
    {
      type: 'p',
      text: 'Unban & Governance Control (UGC) turns platform restrictions into reusable appeal workflows for a gaming account, a social handle, or a marketplace storefront. You draft the template once, attach ownership proof and a timeline, and the client resubmits dispute packets without manual copy paste.',
    },
    { type: 'h2', text: 'The platform still decides' },
    {
      type: 'p',
      text: 'Reviewers keep final say on every case. Permanent suspensions may never lift. UGC only organizes evidence and wording. It does not alter hardware IDs, bypass security controls, or cover machine-level bans. Weak proof makes appeals harder to defend.',
    },
    { type: 'h2', text: 'Windows setup for UGC' },
    {
      type: 'p',
      text: 'Run the appeal client on Windows 10 or 11 with HVCI and Core Isolation enabled in Windows Security and TPM plus Secure Boot enabled in firmware before the first session.',
    },
  ],
  'skin-changer': [
    { type: 'h2', text: 'What the client draws' },
    {
      type: 'p',
      text: 'Skin Changer overlays premium weapon finishes, character outfits, and rare knife styles inside supported games from one lightweight menu. You are not buying each cosmetic as a separate good.',
    },
    { type: 'h2', text: 'Seen on your display alone' },
    {
      type: 'p',
      text: 'Finishes render locally on your monitor. Inventories never receive items, trades stay blocked, and quitting the client removes the visuals. Opponents should not see the look.',
    },
    { type: 'h2', text: 'The supported list can move' },
    {
      type: 'p',
      text: "Today's list covers major titles, yet game patches or Windows updates can drop support. Ask support to confirm your title before checkout. Using the client may still break game terms and invite account action.",
    },
    { type: 'h2', text: 'PC setup for the cosmetic client' },
    {
      type: 'p',
      text: 'Install on Windows 10 or 11 with HVCI and Core Isolation enabled plus TPM and Secure Boot enabled in firmware. Portal loader access is required after purchase.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: showcaseSlides,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: mainProductSystemRequirements,
    fullFeatures: [
      'Aimbot',
      'Silent aimbot',
      'Aim smoothness',
      'Target bone priority',
      'Maximum targeting distance',
      'ESP',
      'Wallhack',
      'Enemy position',
      'Health',
      'Distance',
      'God Mode',
      'Infinite ammo',
      'No recoil',
      'Speedhack',
      'Menu toggles for each option',
    ],
    overview: {
      title: 'Modern Warfare 4 cheat suite',
      paragraphs: [
        'The best mw4 ESP readouts show enemy position, health, and distance beside the aim tab. Wallhack reuses those values when a target sits behind cover on the 2026 client builds we track.',
        'Combat switches cover God Mode, infinite ammo, no recoil, and speedhack. Monthly is $35 for 30 days and lifetime is $150. Read the banner on {siteDomain} before you attach the loader.',
      ],
    },
  },
  'hwid-spoofer': {
    images: hwidShowcaseSlides,
    goodToKnow:
      'Complete the spoof and bundled cleaner in portal order before launching the game that flagged this tower. Re-read anti-cheat notes on the status banner prior to checkout.',
    limitations:
      'Built for hardware ID blocks only. Active account penalties remain. Spoofing may violate publisher terms and invite new sanctions. A vendor patch can remove a listed anti-cheat family without prior notice here.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'In Windows Security, HVCI and Core Isolation on.' },
      { icon: 'reqSettings', text: 'Administrator rights for the spoof and the cleaner.' },
      { icon: 'reqWifi', text: 'Internet that stays up for activation and updates.' },
      { icon: 'reqSettings', text: 'TPM and Secure Boot on, in BIOS/UEFI.' },
    ],
    fullFeatures: [
      'Disk serial rotation',
      'MAC address rotation',
      'GPU ID rotation',
      'Linked fingerprint fields',
      'Bundled trace cleaner',
      'ACE, Javelin, and peer stacks',
      'Riot Vanguard (Valorant)',
      'BattlEye',
      'Easy Anti-Cheat',
      'Ricochet (Call of Duty)',
    ],
    overview: {
      title: 'Hardware refresh for a blocked tower',
      paragraphs: [
        'Use this mw4 spoofing tool when login fails on one PC yet works on others. The panel refreshes disk serials, MAC addresses, GPU IDs, and related fingerprints, then the bundled cleaner clears traces. Published notes reference Vanguard, Easy Anti-Cheat, BattlEye, and Ricochet with ACE and Javelin.',
        'Account-level bans stay in place. Monthly access is $50 for 31 days. Lifetime is $150 with unlimited access. Both plans include the same panel and cleaner.',
      ],
    },
  },
  ugc: {
    images: ugcShowcaseSlides,
    goodToKnow:
      'Gather ownership proof and a dated timeline before automated filings start. Platform reviewers still decide every outcome.',
    limitations:
      'No guaranteed reversal. Permanent suspensions may remain. UGC never edits hardware IDs or bypasses security controls. Sparse evidence hurts the appeal.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'Windows Security with HVCI and Core Isolation on.' },
      { icon: 'reqSettings', text: 'BIOS/UEFI with TPM and Secure Boot on.' },
      { icon: 'reqWifi', text: 'Internet after the purchase, for the appeal client.' },
    ],
    fullFeatures: [
      'Workflow-based appeal packets',
      'Repeatable dispute automation',
      'Multi-platform account coverage',
      'Gaming profile appeals',
      'Social handle appeals',
      'Marketplace storefront appeals',
      'Monthly and lifetime plans',
      'Windows 10 and Windows 11',
    ],
    overview: {
      title: 'Automated appeals across platforms',
      paragraphs: [
        'UGC (Unban & Governance Control) maps restrictions on gaming, social, or marketplace accounts into templates that resubmit dispute packets for you.',
        'Hardware bans sit outside this scope. Reviewers retain control. The 31 day plan is $35. Lifetime is $150. Feature access is identical on both plans.',
      ],
    },
  },
  'skin-changer': {
    images: skinChangerShowcaseSlides,
    goodToKnow:
      'Cosmetics appear only inside your local client. Nothing lands in inventory. Confirm title support with staff before paying.',
    limitations:
      'Clients like this can breach game terms and cause account action. Finishes are not real goods, cannot be traded, and vanish when you exit. Patches or Windows updates may shrink the supported list.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'Core Isolation and HVCI enabled in Windows Security.' },
      { icon: 'reqSettings', text: 'Secure Boot and TPM enabled in BIOS/UEFI.' },
      { icon: 'reqWifi', text: 'Internet, plus loader access, after you purchase.' },
    ],
    fullFeatures: [
      'Premium weapon finish presets',
      'Character outfit presets',
      'Rare knife style presets',
      'Major-title coverage list',
      'Lightweight local client',
      'On-screen-only rendering',
      'Monthly and lifetime licenses',
      'Windows 10 and Windows 11 support',
    ],
    overview: {
      title: 'Local cosmetic library',
      paragraphs: [
        'Preview premium weapon skins, outfits, and knife variants from one menu across supported games without paying per item.',
        'Visuals never sync to inventory. The 31 day license is $35. Lifetime access is $150 for the same library. Email support to verify your game before purchase.',
      ],
    },
  },
};

const utilityAcquisitionSteps: Record<UtilityProductSlug, AcquisitionStep[]> = {
  [HWID_SPOOFER_SLUG]: hwidAcquisitionSteps,
  [UGC_SLUG]: ugcAcquisitionSteps,
  [SKIN_CHANGER_SLUG]: skinChangerAcquisitionSteps,
};

const utilityAcquisitionTitles: Record<UtilityProductSlug, string> = {
  [HWID_SPOOFER_SLUG]: 'HWID license checkout path',
  [UGC_SLUG]: 'UGC license checkout path',
  [SKIN_CHANGER_SLUG]: 'Skin Changer license checkout path',
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = CHEAT_PRODUCT_NAME;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.heroDesc ?? cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: {
        title: acquisitionFor(displayName).title,
        steps: slug === CHEATS_PRIMARY_SLUG ? eliteAcquisitionSteps : acquisitionFor(displayName).steps,
      },
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

function findProductCard(t: Translations, slug: UtilityProductSlug) {
  const match = (items: Translations['products']['items']) =>
    items.find((item) => slugFromHref(item.href) === slug);
  return match(t.products.items) ?? match(getTranslations('en').products.items);
}

function buildUtilityPages(t: Translations): ProductPage[] {
  return UTILITY_PRODUCT_SLUGS.flatMap((slug) => {
    const product = findProductCard(t, slug);
    const content = productContent[slug];
    if (!product || !content) return [];

    return [
      {
        slug,
        kind: 'utility' as const,
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: Math.max(0, content.fullFeatures.length - product.features.length),
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: {
          title: utilityAcquisitionTitles[slug],
          steps: utilityAcquisitionSteps[slug],
        },
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
        relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
      },
    ];
  });
}

export function getProductPages(locale: SiteLocale): ProductPage[] {
  const t = getTranslations(locale);
  return [...buildTierPages(t), ...buildUtilityPages(t)].map((page) =>
    deepApplySiteTokens(applyProductCopy(page, locale)),
  );
}

export function getCheatPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

export function getProductPage(slug: string, locale: SiteLocale) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

/** Tier slugs for sitemap extras, store lives at `PRODUCT_BASE` only. */
export function getAllProductSlugs(): string[] {
  const slugs = getAllCheatSlugs();
  const catalog = new Set<string>(CHEAT_PRODUCT_SLUGS);
  for (const slug of slugs) {
    if (!catalog.has(slug as (typeof CHEAT_PRODUCT_SLUGS)[number])) {
      throw new Error(`Cheat slug "${slug}" missing from CHEAT_PRODUCT_SLUGS in src/config/catalog.ts`);
    }
  }
  return [];
}

export function getHwidSpooferPage(locale: SiteLocale) {
  return getProductPage(HWID_SPOOFER_SLUG, locale);
}

export function getUtilityPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'utility');
}

export function utilityProductPath(slug: UtilityProductSlug): string {
  return UTILITY_PRODUCT_PATHS[slug];
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

export function getHeroSlides(locale: SiteLocale): ProductSlide[] {
  if (locale === 'en') return showcaseSlides;
  const gallery = productCopyByLocale[locale].gallery;
  return showcaseSlides.map((slide, index) => {
    const copy = gallery[index];
    if (!copy) return slide;
    return { ...slide, alt: copy.alt, caption: copy.caption, captionDesc: copy.captionDesc };
  });
}

const productCopyByLocale: Record<Exclude<SiteLocale, 'en'>, ProductCopyBundle> = {
  es: esProductCopy as ProductCopyBundle,
  de: deProductCopy as ProductCopyBundle,
  fr: frProductCopy as ProductCopyBundle,
};

function acquisitionTitleFor(productName: string) {
  return `How to get ${productName}`;
}

function buildEnglishProductCopyBundle(): ProductCopyBundle {
  const tierSlugs = ['elite'] as const;
  const utilitySlugs = ALL_UTILITY_PRODUCT_SLUGS;

  const tiers = Object.fromEntries(
    tierSlugs.map((slug) => {
      const content = productContent[slug];
      const displayName = CHEAT_PRODUCT_NAME;
      return [
        slug,
        {
          about: tierAbout[slug],
          body: tierBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(displayName),
        },
      ];
    }),
  ) as ProductCopyBundle['tiers'];

  const utilities = Object.fromEntries(
    utilitySlugs.map((slug) => {
      const content = productContent[slug];
      return [
        slug,
        {
          body: utilityBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: utilityAcquisitionTitles[slug],
          acquisitionSteps: utilityAcquisitionSteps[slug],
          systemRequirements: content.systemRequirements.map((r) => r.text),
        },
      ];
    }),
  ) as ProductCopyBundle['utilities'];

  return {
    sharedGoodToKnow,
    sharedLimitations,
    acquisitionSteps: defaultAcquisitionSteps.map(({ num, title, desc }) => ({ num, title, desc })),
    systemRequirements: mainProductSystemRequirements.map((r) => r.text),
    gallery: Object.values(galleryRaw).map(({ alt, caption, captionDesc }) => ({
      alt,
      caption,
      captionDesc,
    })),
    tiers,
    utilities,
  };
}

registerProductCopyBundle(buildEnglishProductCopyBundle());

export const heroSlides = getHeroSlides('en');

function productCopyFor(locale: SiteLocale): ProductCopyBundle {
  if (locale === 'en') return getProductCopyBundle();
  return productCopyByLocale[locale];
}

function applyProductCopy(page: ProductPage, locale: SiteLocale): ProductPage {
  if (locale === 'en') return page;
  const copy = productCopyFor(locale);
  const bucket = page.kind === 'tier' ? copy.tiers[page.slug] : copy.utilities[page.slug];
  if (!bucket) return page;

  const isTier = page.kind === 'tier';
  const localizedSteps = isTier ? copy.acquisitionSteps : 'acquisitionSteps' in bucket ? bucket.acquisitionSteps : undefined;
  const localizedRequirements = isTier
    ? copy.systemRequirements
    : 'systemRequirements' in bucket
      ? bucket.systemRequirements
      : undefined;

  const acquisition: ProductAcquisition = {
    title: bucket.acquisitionTitle,
    steps: localizedSteps?.map((step) => ({ ...step })) ?? page.acquisition.steps,
  };

  const localizedGallery = isTier ? copy.gallery : 'gallery' in bucket ? bucket.gallery : undefined;
  const images = localizedGallery
    ? page.images.map((slide, index) => {
        const g = localizedGallery[index];
        if (!g) return slide;
        return { ...slide, alt: g.alt, caption: g.caption, captionDesc: g.captionDesc };
      })
    : page.images;
  const fullFeatures =
    'fullFeatures' in bucket && bucket.fullFeatures?.length ? bucket.fullFeatures : page.fullFeatures;

  const systemRequirements = page.systemRequirements.map((req, index) => ({
    ...req,
    text: localizedRequirements?.[index] ?? req.text,
  }));

  return {
    ...page,
    overview: bucket.overview,
    body: bucket.body,
    about: 'about' in bucket ? bucket.about : page.about,
    goodToKnow: bucket.goodToKnow,
    limitations: bucket.limitations,
    acquisition,
    images,
    fullFeatures,
    systemRequirements,
  };
}
