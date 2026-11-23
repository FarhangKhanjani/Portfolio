/**
 * Language configuration shared by the whole site.
 * Keep this in sync with the `i18n` block in astro.config.mjs.
 */
export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** BCP 47 tags used for <html lang>, hreflang and og:locale. */
export const localeTags: Record<Lang, { html: string; og: string }> = {
  en: { html: 'en', og: 'en_US' },
  de: { html: 'de-AT', og: 'de_AT' },
};

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}
