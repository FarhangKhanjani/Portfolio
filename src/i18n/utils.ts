import { defaultLang, isLang, languages, type Lang } from './config';
import { de } from './translations/de';
import { en, type Dictionary } from './translations/en';

const dictionaries: Record<Lang, Dictionary> = { en, de };

/** Get the full, typed UI dictionary for a language: `t.nav.work`. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Detect the language from a URL: "/de/..." is German, everything else English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

/** Remove the language prefix: "/de/projects/x/" -> "/projects/x/". */
export function stripLangPrefix(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (isLang(first) && first !== defaultLang) return '/' + rest.join('/');
  return pathname;
}

/**
 * Build a URL path for a language. The default language has no prefix.
 * localizePath('/projects/ppe/', 'de') -> '/de/projects/ppe/'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Same page in every language, used for hreflang tags and the language toggle. */
export function getAlternates(url: URL): { lang: Lang; path: string }[] {
  const base = stripLangPrefix(url.pathname);
  return (Object.keys(languages) as Lang[]).map((lang) => ({ lang, path: localizePath(base, lang) }));
}

/** A content field that can be written in several languages. English is required. */
export type Localized = { en: string } & Partial<Record<Exclude<Lang, 'en'>, string>>;

/**
 * Pick the right language from a localized content field, falling back to English.
 * Returns `fallback: true` when the English text was used for a non-English page,
 * so the UI can mark it with lang="en" for screen readers.
 */
export function pickLocalized(field: Localized, lang: Lang): { text: string; fallback: boolean } {
  const value = field[lang as keyof Localized];
  if (value && value.trim().length > 0) return { text: value, fallback: false };
  return { text: field.en, fallback: lang !== 'en' };
}
