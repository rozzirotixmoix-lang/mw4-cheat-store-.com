import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import {
  HWID_SPOOFER_PATH,
  PRODUCT_BASE,
  PRODUCTS_HUB_PATH,
  SITE_DOMAIN,
  SITE_NAME,
  SKIN_CHANGER_PATH,
  UGC_PATH,
} from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'MW4 Cheats | Modern Warfare 4 menu catalog',
    description:
      'Aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack for Modern Warfare 4 on Windows.',
  },
  nav: [
    {
      id: 'products',
      href: PRODUCTS_HUB_PATH,
      label: 'Products',
      shortLabel: 'Products',
      sheetLabel: 'Browse products',
    },
    { id: 'blog', href: '/blog/', label: 'Blog', sheetLabel: 'Read the blog' },
    { id: 'forum', href: '/forum/', label: 'Forum', sheetLabel: 'Open the forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ', sheetLabel: 'Pre-purchase questions' },
    { id: 'support', href: '/support/', label: 'Support', sheetLabel: 'Open support desk' },
  ],
  hero: {
    status: 'Read the Modern Warfare 4 banner on this site before you launch.',
    eyebrow: 'Dominate Every Match',
    titleLead: 'MW4 Cheats ',
    titleAccent: 'for PC: hacks, plans, modules, ESP, and aimbot tools',
    subtitle:
      'Dominate every raid and every firefight. Get listed hacks for PC, including aimbot tools and full ESP, all tuned for Windows and updated after every patch. Compare modules and plans, then pick the setup that fits your playstyle.',
    ctaPrimary: 'View products',
    metrics: [
      { label: 'Silent aimbot', strong: 'Listed' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
    statusPills: [
      'Aimbot',
      'Silent aimbot',
      'ESP',
      'Wallhack',
      'No recoil',
      'God Mode',
      'Infinite ammo',
      'Speedhack',
      'Menu toggles',
      '24/7 Support',
      'Live Status',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle:
      'Nine menu groups below mirror what the Modern Warfare 4 product page lists. Each block explains one switch family before you open checkout.',
    items: [
      {
        title: 'ESP',
        subtitle: 'Position, health, distance.',
        desc: 'In a Modern Warfare 4 fight, ESP marks enemy position and adds a health value plus a distance value.',
        bullets: ['Enemy position', 'Health value', 'Distance value', 'Players tab switch', 'Separate from aim'],
        tags: ['esp', 'health', 'distance'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Wallhack',
        subtitle: 'See past cover.',
        desc: 'Wallhack uses the same position, health, and distance readouts as ESP when a player is behind cover.',
        bullets: ['Paired with ESP', 'Position behind cover', 'Health and distance', 'Own menu switch'],
        tags: ['wallhack', 'esp', 'position'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot',
        subtitle: 'Target controls.',
        desc: 'The aimbot tab sets smoothness, which bone to prefer, and how far a target can be. Lower smoothness keeps crosshair movement closer to manual input.',
        bullets: ['Silent aimbot', 'Smoothness slider', 'Bone choice', 'Distance cap'],
        tags: ['aimbot', 'silent aimbot', 'smoothness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'No recoil',
        subtitle: 'Weapon handling.',
        desc: 'No recoil is a weapon handling switch for Modern Warfare 4 guns, separate from the aimbot tab.',
        bullets: ['Weapon switch', 'Not on the aim tab', 'Leave the switch off', 'Open it again after a patch'],
        tags: ['no recoil', 'weapon handling', 'menu'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'God Mode',
        subtitle: 'Combat option.',
        desc: 'God Mode is a combat switch in the same menu. A patch can take it off the list.',
        bullets: ['Combat switch', 'Independent of aim', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['god mode', 'combat', 'menu'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Infinite ammo',
        subtitle: 'Ammo option.',
        desc: 'Infinite ammo changes magazine limits in a Modern Warfare 4 fight and sits apart from no recoil.',
        bullets: ['Ammo switch', 'Apart from no recoil', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['infinite ammo', 'combat', 'menu'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Speedhack',
        subtitle: 'Movement option.',
        desc: 'Speedhack changes movement speed. Switch it off before the next round if you do not want it.',
        bullets: ['Movement switch', 'Not an aim setting', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['speedhack', 'movement', 'menu'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Silent aimbot',
        subtitle: 'Aim option.',
        desc: 'Silent aimbot shares the aimbot tab: smoothness, bone priority, and a maximum distance.',
        bullets: ['Shares the aim tab', 'Smoothness', 'Bone priority', 'Maximum distance'],
        tags: ['silent aimbot', 'aimbot', 'bone priority'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Menu toggles',
        subtitle: 'Each option.',
        desc: 'Every listed option has its own switch. A Modern Warfare 4 patch can change which switches still work.',
        bullets: ['One switch each', 'Aim tab in that menu', 'Players tab in that menu', 'Read the banner after a patch'],
        tags: ['menu', 'toggles', 'patch'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Modern Warfare 4 tooling backed by patches, not promises',
    subtitle:
      'Patch-day loader builds, live ESP readouts, and operators on a 24/7 shift are listed here so you can compare {siteDomain} with a typical reseller.',
    usLabel: '{siteName}',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'A loader build goes out within hours of a Modern Warfare 4 update. Read the status banner before you queue.',
      },
      {
        title: 'Aim settings',
        desc: 'Smoothness, bone priority, and maximum distance are on the aimbot tab. ESP shows position, health, and distance.',
      },
      {
        title: 'Live operators',
        desc: 'Engineers handle loader setup, ESP configs, and HWID resets across a 24/7 shift.',
      },
      {
        title: 'Menu options',
        desc: 'Flip each listed option on or off. After a patch, open the menu and see which switches remain.',
      },
      {
        title: 'Compatibility',
        desc: 'Match the current Modern Warfare 4 build before you launch. An anti-cheat update can change what still runs.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'Support handles HWID clears and a move to another PC. Other shops often lock one machine or bill every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'How long a loader build takes after a major Modern Warfare 4 or anti-cheat change.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'People on shift for loader setup, menu configs, and account questions.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Windows players on {siteDomain} using the cheat menu and the utilities.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in just',
    titleHighlight: 'three simple steps',
    intro:
      'Checkout opens the operator portal for Modern Warfare 4. Download the loader, set the menu, then read the banner before you launch the game client.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Open the portal and download the loader',
        desc: 'Finish checkout, open the operator dashboard, and download the current loader for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Start the external loader and set aimbot, ESP, and the other menu options for Modern Warfare 4.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & launch Modern Warfare 4',
        desc: 'Read the status banner, start the game client, and keep the profile stored in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Read the status banner before you start Modern Warfare 4 after an update.',
    items: ['Windows 10 & 11', 'Modern Warfare 4', 'anti-cheat client', 'Auto updater', 'Config cloud sync', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Modern Warfare 4 Cheats',
    subtitle: 'One license covers the combat switches on the product page. Utilities stay separate when the issue is hardware or an account limit.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'MW4 Cheats',
        title: 'MW4 Cheats',
        desc: 'Aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack. Monthly is $35 for 30 days. Lifetime is $150.',
        homeDesc:
          'The Windows menu lists aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack. Monthly is $35 for 30 days. Lifetime is $150.',
        heroDesc:
          'Menu toggles cover aimbot, silent aimbot, ESP, wallhack, and the listed combat options. Confirm the game build matches the banner on {siteDomain} before launch.',
        features: ['Aimbot', 'Silent aimbot', 'ESP', 'Wallhack', 'No recoil', 'Speedhack'],
        more: 9,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle:
      'Compare the cheat menu and the utilities on this grid. Open a product page for the feature list and checkout.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Warfare 4 Hacks: Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Menu layers · After checkout',
      subtitle:
        'The shots above are the Modern Warfare 4 menu. The notes below say what each group does, and how the portal opens after checkout.',
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Operator screenshots',
      overviewSubtitle:
        'Panel fields that rotate, anti-cheat families named here, and why a tower block is not the same as an account penalty.',
      highlights: {
        eyebrow: 'Quick read',
        title: 'Fingerprint refresh on this tower',
        desc: 'Disk, MAC, GPU, and linked IDs rotate from the operator view. Goal: sign-in on this PC after a hardware flag. Extra rows sit in the table below.',
      },
      featuresSection: {
        eyebrow: 'Table rows',
        title: 'Fields and anti-cheat notes',
        desc: 'Each row is either an editable fingerprint or an anti-cheat family referenced on this page.',
      },
      experience: {
        eyebrow: 'Post-checkout',
        title: 'Screens first, portal steps second',
        subtitle:
          'Left column explains the panel shots. Right column covers license delivery and setup order.',
        previewLabel: 'Panel gallery',
        accessDividerTop: 'Panel',
        accessDividerBottom: 'Order',
      },
      highlightsMore: '{count} additional rows appear in the feature table farther down.',
    },
    utilityPages: {
      ugc: {
        showcaseHeading: 'Workflow previews',
        overviewSubtitle:
          'How limits become templates, which dispute steps repeat automatically, and why reviewers still rule each case.',
        highlights: {
          eyebrow: 'Summary',
          title: 'Repeatable dispute packets',
          desc: 'Gaming, social, and marketplace limits each map to a workflow the client can replay without retyping the same appeal text.',
        },
        featuresSection: {
          eyebrow: 'License scope',
          title: 'Capabilities after activation',
          desc: 'Everything listed below unlocks once your UGC license is active.',
        },
        experience: {
          eyebrow: 'License live',
          title: 'Previews left, checkout steps right',
          subtitle: 'Workflow previews sit on the left. Delivery and setup instructions sit on the right.',
          previewLabel: 'Workflow art',
          accessDividerTop: 'Frames',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} extra capability rows live farther down the page.',
      },
      'skin-changer': {
        showcaseHeading: 'Client previews',
        overviewSubtitle:
          'Where finishes render, why inventory stays empty, and how to confirm a title before you pay.',
        highlights: {
          eyebrow: 'Catalog',
          title: 'On-screen finish catalog',
          desc: 'Weapon skins, outfits, and knife styles load from one library inside supported games without separate cosmetic purchases.',
        },
        featuresSection: {
          eyebrow: 'Categories',
          title: 'Finish categories',
          desc: 'These cosmetic groups unlock after the Skin Changer license activates.',
        },
        experience: {
          eyebrow: 'Access ready',
          title: 'Gallery left, portal steps right',
          subtitle: 'Preview notes stay left. Portal access and menu setup stay right.',
          previewLabel: 'Client gallery',
          accessDividerTop: 'Frames',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} more cosmetic rows continue below.',
      },
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planWeekly: '1 Week',
    planWeeklyNote: '7 days',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: '31 days of access',
    planOneTimeNote: 'Unlimited access',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'Machine ID utility',
        title: 'HWID Spoofer',
        subtitle:
          'The panel rewrites listed fingerprints and runs trace cleanup before the next sign-in. TPM, Secure Boot, and HVCI stay as your Windows profile requires.',
        desc: 'License covers disk serial, MAC, GPU, and linked fingerprint rotation plus the bundled trace cleaner after a hardware block on this PC.',
        features: ['Disk serial pass', 'MAC pass', 'GPU pass', 'Bundled cleaner'],
        more: 0,
        href: HWID_SPOOFER_PATH,
      },
      {
        badge: 'Available',
        category: 'Appeal automation',
        title: 'UGC',
        subtitle:
          'Build one workflow, attach ownership proof and a timeline, then let the client resubmit disputes without pasting the same text by hand.',
        desc: 'Unban & Governance Control (UGC) stores appeal templates and replays dispute filings when gaming, social, or marketplace logins stay limited.',
        features: ['Template workflows', 'Auto dispute replay', 'Cross-platform scope', 'Game, social, shop profiles'],
        more: 0,
        href: UGC_PATH,
      },
      {
        badge: 'Available',
        category: 'Local cosmetics',
        title: 'Skin Changer',
        subtitle:
          'Finishes render on your display only and do not add items to inventory. Ask support whether your game version is still on the supported list.',
        desc: 'Lightweight client previews premium gun skins, outfits, and knife styles locally across the major titles listed on its page.',
        features: ['Gun finish previews', 'Outfit previews', 'Knife previews', 'Major title list'],
        more: 0,
        href: SKIN_CHANGER_PATH,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'ESP and aimbot setup, menu tuning and patch-day checks for Modern Warfare 4.',
    latestTitle: 'Guides: Long-form Modern Warfare 4 Cheat Menu Tuning, Patch-Day Notes and Posts',
    latestSubtitle: 'Filter by topic to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read full article',
    articleActionsAria: 'Continue reading',
    buyCta: 'Buy Modern Warfare 4 Cheats',
    buyHwidCta: 'Checkout HWID Spoofer',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'Four steps from the status banner to a portal profile you can load next time.',
    ctaLabel: 'Pick your plan',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Open {siteDomain} and read the banner before you pay or start the game.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Pick the cheat suite, or a utility when the issue is this PC or an account limit.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download the loader from the portal, turn modules on, and set ESP and aim before a live match.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'Save the menu profile in the portal so the next session starts from those settings.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Modern Warfare 4 Cheats Support',
    subtitle: 'Ask about a plan before you pay, or send a ticket after checkout.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Ask about the 30 day plan, the lifetime plan, or which product fits.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: 'Write about a loader error, an HWID reset, or an order question.',
        linkLabel: '{supportEmail}',
        href: 'mailto:{supportEmail}',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Read setup, platform, and account answers before you pay.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address you used at checkout on {siteDomain} or on the partner checkout page.' },
      { title: 'Platform', desc: 'Windows 10 or Windows 11, plus the Modern Warfare 4 client version.' },
      { title: 'Error detail', desc: 'A screenshot, or the exact line from the loader or the game client.' },
    ],
    pageSections: [
      {
        heading: 'How support works',
        paragraphs: [
          'Write before checkout if you need plan length or product fit. After checkout, use email for loader errors, HWID resets, or order questions.',
          'The checkout channel opens the partner flow. It does not replace a ticket once you have paid.',
        ],
      },
      {
        heading: 'Setup the team expects',
        paragraphs: [
          'Finish checkout, open the operator portal, and download the current Windows loader. Set aimbot, ESP, and the other listed modules.',
          'Read the status banner before you start a match. Stay out of a match when the banner says offline or updating.',
          'Patches and anti-cheat updates can change what still runs. Check the banner again after a game update.',
        ],
      },
      {
        heading: 'What the site lists',
        paragraphs: [
          'Modern Warfare 4 cheats cover the listed menu modules. HWID Spoofer targets tower-level login blocks when other machines still work.',
          'UGC automates appeal workflows for limited profiles. Skin Changer renders cosmetics locally without inventory changes. Each page lists features and plans.',
        ],
      },
      {
        heading: 'Related help',
        paragraphs: [
          'The FAQ covers platform, license moves, and status. The products list compares the cheat and the utilities.',
          'Blog guides explain setup ideas. They do not replace the live loader from the portal. The forum archive is read-only.',
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Platform, account penalties, plans, and how a license moves to a new PC.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Modern Warfare 4 cheats are online?',
        a: 'The status banner is on {siteDomain}. Read it after a Modern Warfare 4 update and after an anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Partner checkout opens the portal, with the loader, the setup guide, and saved configs. Read the guide before you start Modern Warfare 4.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Modern Warfare 4 cheats?',
        a: 'Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Modern Warfare 4 on 64-bit Windows 10 or Windows 11. macOS and Linux are outside that list.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Use the HWID reset in the portal, or open a support ticket. The number of moves depends on the tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'The mw4 cheat shop is {siteDomain}/products/. Each product has its own page, a feature list, and partner checkout.',
      },
    ],
  },
  footer: {
    homeLink: '{siteName}',
    tagline: 'Aimbot, ESP, and wallhack for Modern Warfare 4. Plans are listed on {siteDomain}.',
    trademark: '{game} is a trademark of its respective owner. {siteDomain} is not affiliated with or endorsed by that owner.',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { id: 'products', href: productBase, label: 'Cheat plans and modules', ariaLabel: '{cheatProduct}' },
      { id: 'hwidSpoofer', href: HWID_SPOOFER_PATH, label: 'Fingerprint tool', ariaLabel: 'HWID Spoofer' },
      { id: 'products', href: UGC_PATH, label: 'Appeal workflows', ariaLabel: 'UGC' },
      { id: 'products', href: SKIN_CHANGER_PATH, label: 'Local finishes', ariaLabel: 'Skin Changer' },
      { id: 'blog', href: '/blog/', label: 'Guides and articles', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About the catalog: Support and Delivery Details for mw4 cheats on {siteDomain}',
      description:
        'This catalog publishes the main product, the utility pages, and support notes at {siteDomain}.',
      sections: [
        {
          heading: 'Modern Warfare 4 catalog: Who we are',
          paragraphs: [
            'This site is a PC catalog for Modern Warfare 4 tools. The [four-license product hub](/products/) lists the [cheat menu](/cheats/), [fingerprint utility page](/hwid-spoofer/), [appeal workflows page](/ugc/), and [local finishes page](/skin-changer/).',
            'Setup notes and the status banner are here so you can judge the main product before you pay. Product names identify the software. They are not a claim of ownership.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The main product lists aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack. A 30 day plan is $35. Lifetime is $150. Those prices match the product page.',
            'Utility prices stay on their own pages. Articles cover menu setup, patch-day checks, and what an anti-cheat update changes.',
            'HWID Spoofer, UGC, and Skin Changer each keep their own license. They are not part of the 30 day $35 or lifetime $150 cheat plan.',
            'Pages change when a patch lands or a menu option moves. Read the homepage banner before a session.',
          ],
        },
        {
          heading: 'How setup works',
          paragraphs: [
            'Checkout runs through the partner flow. After payment, the operator portal opens. Download the current Windows loader there.',
            'Set the menu, then read the status banner. Launch Modern Warfare 4 only after that check. Patches and anti-cheat updates can change what still runs.',
          ],
        },
        {
          heading: 'Requirements',
          paragraphs: [
            'The cheat is listed for 64-bit Windows 10 or Windows 11. macOS and Linux are not on that list.',
            'Utilities also ask for HVCI, Core Isolation, TPM, and Secure Boot where their pages say so.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Email handles loader errors, HWID resets, and order questions. Put the order email, Windows version, game build, and the exact error in the ticket.',
            'The [full question list](/faq/) and the [archived discussion index](/forum/) cover setup notes too. Open the [guide index](/blog/) or the [Windows cheat menu page](/cheats/) when you need product facts. Read the homepage banner before a session.',
          ],
        },
        {
          heading: 'Plans, FAQ, and what a license includes',
          paragraphs: [
            'The main product sells two published plans: $35 for 30 days and $150 for lifetime. Those figures match the product page. Utility plan prices stay on the utility pages and are not copied into the cheat license.',
            'Checkout runs through the partner. After payment the operator portal opens with the current Windows loader, the setup guide, and saved configs. The loader is external. It does not go in the Modern Warfare 4 folder.',
            'The listed platform is 64-bit Windows 10 or Windows 11. macOS and Linux are not on that list. Utilities that mention HVCI, Core Isolation, TPM, and Secure Boot keep those notes on their own pages.',
            'A game patch or an anti-cheat update can change what still runs. Read the homepage banner before a session. If the banner says the build is offline, wait. Support tickets need the order email, Windows version, game build, and the exact error.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Analytics, cookies, and the email you send with a support ticket on {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'If Google Analytics is on, it can record page views, device type, browser, and an approximate region. Payment and license delivery run on external checkout pages. {siteDomain} does not keep payment card numbers.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Those analytics show which guides and product pages get used, so broken links and thin pages can be fixed. A support ticket can keep the email and the message until that issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Cookies on this site are limited to analytics. Block them in the browser and the pages still load.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase and refund rules are in the Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'What you buy, how licenses work, when a refund can be considered, and the account penalty you accept on {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. Using {siteDomain}, or finishing checkout for a product listed here, means you accept these Terms & Conditions and the Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'The products are {cheatProduct} and the utilities on the products page. Delivery is an operator portal and a loader on Windows.',
            'Each product page states what that purchase includes at the time you pay. A Modern Warfare 4 update or an anti-cheat update can change the modules.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and the license are handled on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After you pay, open the operator portal from the order flow and download the current loader and setup guide before you start Modern Warfare 4.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'A license is for you alone. Do not share loader files, portal logins, or license keys. HWID and device limits follow the tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'A sale is final when checkout completes. There is no refund for a change of mind, an account penalty, an anti-cheat penalty, or a problem caused by skipping the setup guide or running modules while the banner says offline.',
            'If the product fails on the setup it describes, Modern Warfare 4 on Windows 10 or 11, the current portal loader, and the banner showing online when you started, use the Support page. Include the order email, Windows version, game build, and a screenshot or the exact loader error.',
            'Support may offer a fix, replacement access, or a partial or full refund when the fault is on our side. Support does not have to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Modern Warfare 4 can stop working after a game update or an anti-cheat update. Using them can lead to account action.',
            'Read the homepage banner before a session. Stay out of a match while the banner says the modules are offline or still being aligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms can be updated. The Last updated date at the top changes when that happens. Using the site after that date means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Terms, billing, and loader questions go through the buttons on the Support page. The Privacy Policy covers how site data is handled.',
          ],
        },
      ],
    },
    support: {
      title: '{siteName} Support',
      description:
        'Loader errors, HWID resets, and checkout questions are handled from {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Catalog home',
    breadcrumbProducts: 'Product hub',
    breadcrumbBlog: 'Guide index',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription:
      'This address is not a page on {siteDomain}. Open the homepage or the product list to keep browsing.',
    title: 'Page not found',
    documentTitle: 'This address is not a page',
    body: 'That address is missing. Go back to the homepage or open the product list.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'Faq: Modern Warfare 4 loader, status, setup, plans and checkout questions',
      description:
        'This faq covers setup steps, the 30 day and lifetime plans, ESP and aim options, and what to do after an anti-cheat update.',
      schemaName: 'Modern Warfare 4 Cheats FAQ',
      schemaDescription:
        'Setup, plan length, ESP, aimbot, loader delivery, and checkout answers for Modern Warfare 4 on {siteDomain}.',
    },
    forum: {
      eyebrow: 'Modern Warfare 4 community forum',
      title: 'Forum: Modern Warfare 4 Community Archive',
      description:
        'Forum: Archived, read-only threads on loader setup, ESP configs, patch status, and HWID bans. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: '{siteName} guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      categoryLabels: {
        'MW4 Discussion': 'MW4 Discussion',
        'MW4 Features': 'MW4 Features',
        'Buying Advice': 'Buying Advice',
        'Technical Support': 'Technical Support',
        'Technical Discussion': 'Technical Discussion',
        'Software Discussion': 'Software Discussion',
        'Announcements and Updates': 'Announcements and Updates',
        'Gameplay Questions': 'Gameplay Questions',
        'Product Questions': 'Product Questions',
        'Setup & Support': 'Setup & Support',
        'Game Updates': 'Game Updates',
        'Features & Customization': 'Features & Customization',
        'Account & PC Questions': 'Account & PC Questions',
        'PC Performance & Support': 'PC Performance & Support',
      },
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: '{siteName} Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Rotate hardware identifiers when every other PC signs in but this tower stops fresh accounts immediately.',
      viewDetails: 'View HWID details',
      includes: 'License includes:',
      schemaName: 'HWID Spoofer utility',
    },
  },
  pageSeo: {
    '/': {
      title: 'mw4 Hacks | Plans, Modules, Aimbot and ESP PC Tools',
      description:
        'mw4: Aimbot, ESP, and wallhack modules for Modern Warfare 4 on Windows. Monthly and lifetime access are listed on {siteDomain}.',
    },
    '/cheats/': {
      title: 'Cheats | mw4 Soft Aim Tool Options Cover Smoothness',
      description:
        'Cheats: mw4 soft aim tool options cover smoothness, bones, and distance caps. Review Windows requirements on {siteDomain}.',
    },
    '/hwid-spoofer/': {
      title: 'mw4 Spoofing Tool | HWID Refresh',
      description:
        'Rotate disk, MAC, and GPU IDs on this PC when login blocks point to hardware. Plans and cleaner steps are on {siteDomain}.',
    },
    '/products/': {
      title: 'Modern Warfare 4 Products Hub | Cheats and Utilities',
      description:
        'Side-by-side plans for {cheatProduct}, HWID Spoofer, UGC, and Skin Changer. Delivery notes and Windows requirements sit on {siteDomain}.',
    },
    '/ugc/': {
      title: 'Modern Warfare 4 UGC | Appeal Workflow Automation',
      description:
        'Map gaming, social, or marketplace restrictions to UGC templates that resubmit dispute packets. Plan options sit on {siteDomain}.',
    },
    '/skin-changer/': {
      title: 'Modern Warfare 4 Skin Changer | Local Finishes',
      description:
        'Preview weapon skins, outfits, and knife styles on this PC without buying each cosmetic. Confirm your title on {siteDomain}.',
    },
    '/blog/': {
      title: 'Guides | Long-form ESP Tuning and Patch Note Posts',
      description:
        'Guides: Modern Warfare 4 notes on ESP tuning, aim tabs, and post-patch banner checks when new articles are published on {siteDomain}.',
    },
    '/forum/': {
      title: 'Modern Warfare 4 Forum Archive | Read-Only Threads',
      description:
        'Archived Modern Warfare 4 discussions on loader setup, ESP configs, and HWID notes. New threads and replies stay closed on {siteDomain}.',
    },
    '/faq/': {
      title: 'Faq | Plans, Loader, Status, and Checkout Questions',
      description:
        'Faq: Windows support, 30 day and lifetime plans, license moves, and checkout steps for Modern Warfare 4 products listed on {siteDomain}.',
    },
    '/terms/': {
      title: 'Terms of Sale | Licenses and Refunds',
      description:
        'Sales are final after checkout. License limits, refund exceptions, and account penalties for products on {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Analytics, Cookies and Tickets',
      description:
        'What {siteDomain} collects in analytics, which cookies it sets, and how long a support ticket keeps your email.',
    },
    '/about/': {
      title: 'mw4 cheats | Catalog, Support, and Delivery Details',
      description:
        'Who publishes mw4 cheats, how portal delivery works, and where the Modern Warfare 4 status banner lives. Catalog notes sit on {siteDomain}.',
    },
    '/support/': {
      title: 'Contact Support | Modern Warfare 4 Loader Help',
      description:
        'Email for loader errors, HWID resets, and order questions after checkout on {siteDomain}. Include the order email and Windows build.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    browseCheatsNavMobile: 'View product',
    navHome: 'Home',
    navProduct: 'Product',
    homeAria: 'Modern Warfare 4 Cheats home',
    menuOpen: 'Open menu',
    themeLight: 'Switch between light and dark mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
