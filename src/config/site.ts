/**
 * Site-wide constants that are not translated.
 * Personal links are filled in Phase 5 (contact section).
 */
export const site = {
  repoUrl: 'https://github.com/FarhangKhanjani/Portfolio',
  links: {
    email: '', // [TODO: email for the contact section]
    linkedin: '', // [TODO: LinkedIn URL]
    github: 'https://github.com/FarhangKhanjani',
    upwork: '', // [TODO: Upwork profile URL]
  },
} as const;

/** Persian chapter markers (decorative, hidden from screen readers). */
export const persianMarkers = {
  prologue: 'آغاز', // "beginning"
  monster: '۱',
  turn: '۲',
  proof: '۳',
  why: '۴',
  vienna: 'فردا', // "tomorrow"
} as const;
