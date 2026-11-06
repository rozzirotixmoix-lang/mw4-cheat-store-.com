import { CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG, SKIN_CHANGER_SLUG, UGC_SLUG } from '../config/catalog';
import type { SiteLocale } from '../i18n/locales';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import es from './catalogCopy/locales/es.json';
import de from './catalogCopy/locales/de.json';
import fr from './catalogCopy/locales/fr.json';

/** UI copy for the /products/ catalog page and the header products menu. */
export interface CatalogCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  trust: string[];
  featuredEyebrow: string;
  from: string;
  priceLabel: string;
  lifetime: string;
  perMonth: string;
  utilitiesEyebrow: string;
  utilitiesTitle: string;
  utilitiesDesc: string;
  chooserEyebrow: string;
  chooserTitle: string;
  chooserDesc: string;
  scenarios: { slug: string; need: string; answer: string }[];
  compareEyebrow: string;
  compareTitle: string;
  compareDesc: string;
  compareRows: { label: string; values: Record<string, string> }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaSupport: string;
  menuHeading: string;
  menuViewAll: string;
  menuTaglines: Record<string, string>;
}

const en: CatalogCopy = {
  eyebrow: 'Store',
  title: 'Modern Warfare 4 Products Hub: cheats and utilities',
  subtitle:
    'This products hub lists four licenses for {gameName} on Windows: cheats and utilities. Open the cheat page for menu modules or a utility page when the block is account or hardware related.',
  trust: ['Portal delivery', '24/7 support', 'Monthly or lifetime plans', 'Partner checkout'],
  featuredEyebrow: 'Main product',
  from: 'From',
  priceLabel: 'Price',
  lifetime: 'Lifetime',
  perMonth: '/ month',
  utilitiesEyebrow: 'Utilities',
  utilitiesTitle: 'More tools we sell',
  utilitiesDesc: 'Utilities sell as standalone licenses, each with a dedicated page and checkout path.',
  chooserEyebrow: 'Not sure?',
  chooserTitle: 'Which product do I need?',
  chooserDesc: 'Start from the situation. Each line opens the product that matches it.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'I want aimbot, silent aimbot, ESP, wallhack, and no recoil in {gameShort}.', answer: 'Windows cheat menu' },
    { slug: HWID_SPOOFER_SLUG, need: 'Fresh accounts work on other towers but this PC rejects them instantly.', answer: 'Fingerprint utility' },
    { slug: UGC_SLUG, need: 'My gaming, social, or shop profile is restricted and I need structured appeals.', answer: 'Appeal workflows' },
    { slug: SKIN_CHANGER_SLUG, need: 'I want premium looks on screen without buying every cosmetic separately.', answer: 'Local finishes' },
  ],
  compareEyebrow: 'Compare',
  compareTitle: 'Compare products side by side',
  compareDesc: 'Plan length, delivery, and the requirement line. The product page has the full list.',
  compareRows: [
    {
      label: 'Best for',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Combat menu modules such as aimbot, ESP, and wallhack',
        [HWID_SPOOFER_SLUG]: 'Tower-level hardware login blocks',
        [UGC_SLUG]: 'Profile or account restriction appeals',
        [SKIN_CHANGER_SLUG]: 'Local cosmetic previews only',
      },
    },
    {
      label: 'Delivery',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Portal, right after checkout',
        [HWID_SPOOFER_SLUG]: 'Portal access right after checkout',
        [UGC_SLUG]: 'Portal access right after checkout',
        [SKIN_CHANGER_SLUG]: 'Portal access right after checkout',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Match the live game build',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64-bit, admin',
        [UGC_SLUG]: '10 / 11, 64-bit',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64-bit',
      },
    },
    {
      label: 'Security settings',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Read the status banner first',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot on',
        [UGC_SLUG]: 'HVCI, TPM, Secure Boot on',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot on',
      },
    },
  ],
  ctaTitle: 'Still deciding?',
  ctaDesc: 'Tell support the goal or the error. They will name the product before you pay.',
  ctaSupport: 'Ask support',
  menuHeading: 'Products',
  menuViewAll: 'Compare all products',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Aim, ESP, wallhack, and movement',
    [HWID_SPOOFER_SLUG]: 'Fingerprint rotation plus cleaner',
    [UGC_SLUG]: 'Template appeals with auto replay',
    [SKIN_CHANGER_SLUG]: 'On-screen guns, outfits, knives',
  },
};

const byLocale: Record<SiteLocale, CatalogCopy> = {
  en,
  es: es as CatalogCopy,
  de: de as CatalogCopy,
  fr: fr as CatalogCopy,
};

const finalized = Object.fromEntries(
  Object.entries(byLocale).map(([locale, copy]) => [locale, deepApplySiteTokens(copy)]),
) as Record<SiteLocale, CatalogCopy>;

export function getCatalogCopy(locale: SiteLocale): CatalogCopy {
  return finalized[locale];
}
