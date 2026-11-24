/**
 * English UI strings (source of truth for the shape of every translation).
 * Copy rule: no em dashes. Use colons, commas or full stops.
 * The story copy mirrors docs/story.md.
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
    menu: 'Menu',
    switchLanguage: 'Switch language',
    currentLanguage: 'current language',
    opensInNewTab: '(opens in a new tab)',
  },
  nav: {
    home: 'Farhang, back to the start',
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
    subline:
      'I turn real problems into working AI: computer vision, LLM pipelines and classic machine learning. Small first, tested, shipped.',
    /** Bracketed narrator caption at the bottom of the hero. Holds the key facts. */
    caption: 'MSc AI @ JKU Linz · open to Werkstudent roles in Vienna, up to 20h/week',
    ctaWork: 'See my work',
    ctaCv: 'Download CV',
    cvHref: '/cv.pdf',
    scrollCue: 'Prologue',
    imageAlt:
      'A person stands on a hilltop at dusk holding an open laptop, a ribbon of light rising from the screen into the sky.',
  },
  story: {
    prologue: {
      label: 'Prologue',
      meta: '2017',
      headlineStart: 'It started with',
      headlineEnd: 'one interview.',
      body: [
        "In 2017 I watched an interview with the CEO of one of Silicon Valley's biggest tech companies, talking about where AI is taking us. I was hooked. Not by the hype, but by how clear the future looked when I gave myself space to think about it.",
        'I chose Computer Engineering in Tehran as my way in.',
      ],
    },
    monster: {
      label: 'Chapter I',
      meta: 'The monster',
      headlineStart: 'Every idea grew into',
      headlineEnd: 'a monster.',
      body: [
        'I never loved programming for its own sake. I loved building things, especially for health and medicine. But every idea grew into a monster in my head: too big to start, too big to finish.',
        'My first computer vision internship made it clear. Knowing things was never my problem. Finishing was.',
      ],
      imageAlt:
        'A person sits on the ground with a laptop, surrounded by a swirling tunnel of glowing fragments.',
    },
    turn: {
      label: 'Chapter II',
      meta: 'The turning point',
      headlineStart: 'Ship it small.',
      headlineEnd: 'Then let it grow.',
      body: [
        'Moving to Austria changed that. Far from everything familiar, there was nowhere to hide from myself, so I stopped running from the fear of failing. Now I build the smallest working version first, ship it, then let it grow.',
        "I build with AI, not just on it. AI agents help me break a monster into small steps, draft and review. I make the calls, test everything, and I don't ship what I can't explain.",
      ],
      proofBefore: 'This site is proof: built in small phases, ',
      proofLink: 'every commit public on GitHub',
      proofAfter: '.',
    },
    proof: {
      label: 'Chapter III',
      meta: 'The proof',
      headlineStart: 'Things that',
      headlineEnd: 'work.',
      intro:
        'Real projects for real clients and real problems. Each one shows the problem, my approach, the result and a demo.',
    },
    why: {
      label: 'Chapter IV',
      meta: 'The why',
      headlineStart: 'Why',
      headlineEnd: 'medicine.',
      body: [
        "My mom lives with diabetes, and I've always been curious about how the body and the brain work. That's why I want to work where AI meets medicine: helping people live better with diseases like hers.",
      ],
    },
    vienna: {
      label: 'Epilogue',
      meta: 'Vienna',
      headlineStart: 'Next stop:',
      headlineEnd: 'Vienna.',
      body: [
        "Since I was a teenager, Vienna has been my picture of a modern city where you don't lose your soul: history, art and people in every street. That's where I want to build.",
      ],
    },
  },
  sections: {
    skills: 'Skills',
    experience: 'Experience & education',
    contact: 'Contact',
    comingSoon: 'This section is being built.',
  },
  footer: {
    builtWith: 'Built with Astro and an AI pair programmer.',
    source: 'Source on GitHub',
    rights: 'Farhang',
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

/** Deep shape of the English dictionary: strings stay strings, string arrays stay string arrays. */
type DeepStrings<T> = {
  [K in keyof T]: T[K] extends string ? string : T[K] extends readonly string[] ? string[] : DeepStrings<T[K]>;
};
export type Dictionary = DeepStrings<typeof en>;
