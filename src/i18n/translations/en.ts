/**
 * English UI strings (source of truth for the shape of every translation).
 * Copy rule: no em dashes. Use colons, commas or full stops.
 */
export const en = {
  meta: {
    siteName: 'Farhang',
    title: 'Farhang | AI engineer who ships',
    description:
      'MSc AI student at JKU Linz building real, working AI systems end to end. Open to Werkstudent and entry-level roles in AI/ML, data science and digitalization in Austria.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    switchLanguage: 'Switch language',
    opensInNewTab: '(opens in a new tab)',
  },
  nav: {
    about: 'Story',
    work: 'Work',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    name: 'Farhang',
    /** Headline, split so the second half can be set in italic. */
    headlineStart: 'I used to build monsters in my head.',
    headlineEnd: 'Now I build things that work.',
    /** [TODO: confirm subline] Drafted in Phase 2, not yet approved. */
    subline: 'AI engineer focused on computer vision and healthcare, learning to ship one small version at a time.',
    /** Bracketed narrator caption at the bottom of the hero. Holds the key facts. */
    caption: 'MSc AI @ JKU Linz · open to Werkstudent roles in Vienna, up to 20h/week',
    ctaWork: 'See my work',
    ctaCv: 'Download CV',
  },
  footer: {
    builtWith: 'Built with Astro, hosted on Vercel.',
    source: 'Source on GitHub',
  },
  project: {
    problem: 'Problem',
    approach: 'Approach',
    result: 'Result',
    stack: 'Stack',
    demo: 'Demo',
    code: 'Code',
    live: 'Live',
    back: 'Back to all projects',
    translationPending: 'This project is not translated yet, so it is shown in English.',
  },
  notFound: {
    title: 'Page not found',
    body: 'This page does not exist. Maybe it moved.',
    home: 'Back to the start',
  },
};

/** Deep string-leaf shape of the English dictionary. Other languages must match it. */
type DeepStrings<T> = { [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]> };
export type Dictionary = DeepStrings<typeof en>;
