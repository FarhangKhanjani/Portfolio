import type { Dictionary } from './en';

/**
 * German UI strings. Must contain every key from en.ts (enforced by TypeScript).
 * Copy rule: no em dashes. Use colons, commas or full stops.
 */
export const de: Dictionary = {
  meta: {
    siteName: 'Farhang',
    title: 'Farhang | KI-Engineer, der liefert',
    description:
      'MSc-AI-Student an der JKU Linz, der funktionierende KI-Systeme von Anfang bis Ende baut. Offen für Werkstudent- und Einstiegsstellen in KI/ML, Data Science und Digitalisierung in Österreich.',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    mainNav: 'Hauptnavigation',
    switchLanguage: 'Sprache wechseln',
    opensInNewTab: '(öffnet in neuem Tab)',
  },
  nav: {
    about: 'Über mich',
    work: 'Projekte',
    skills: 'Skills',
    experience: 'Erfahrung',
    contact: 'Kontakt',
  },
  hero: {
    name: 'Farhang',
    positioning: 'KI-Engineer, der liefert.',
    status: 'MSc AI @ JKU, offen für Werkstudentenstellen in Wien',
    ctaWork: 'Meine Projekte',
    ctaCv: 'Lebenslauf herunterladen',
  },
  footer: {
    builtWith: 'Gebaut mit Astro, gehostet auf Vercel.',
    source: 'Quellcode auf GitHub',
  },
  project: {
    problem: 'Problem',
    approach: 'Ansatz',
    result: 'Ergebnis',
    stack: 'Stack',
    demo: 'Demo',
    code: 'Code',
    live: 'Live',
    back: 'Zurück zu allen Projekten',
    translationPending: 'Dieses Projekt ist noch nicht übersetzt und wird daher auf Englisch angezeigt.',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    body: 'Diese Seite gibt es nicht. Vielleicht wurde sie verschoben.',
    home: 'Zurück zum Start',
  },
};
