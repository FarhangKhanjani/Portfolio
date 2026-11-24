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
    menu: 'Menü',
    switchLanguage: 'Sprache wechseln',
    currentLanguage: 'aktuelle Sprache',
    opensInNewTab: '(öffnet in neuem Tab)',
  },
  nav: {
    home: 'Farhang, zurück zum Anfang',
    about: 'Geschichte',
    work: 'Projekte',
    skills: 'Skills',
    experience: 'Erfahrung',
    contact: 'Kontakt',
  },
  hero: {
    name: 'Farhang',
    headlineStart: 'Früher baute ich Monster in meinem Kopf.',
    headlineEnd: 'Heute baue ich Dinge, die funktionieren.',
    subline:
      'KI-Engineer mit Fokus auf Computer Vision und Medizin. Ich lerne, eine kleine Version nach der anderen zu liefern.',
    caption: 'MSc AI @ JKU Linz · offen für Werkstudentenstellen in Wien, bis 20 h/Woche',
    ctaWork: 'Meine Projekte',
    ctaCv: 'Lebenslauf herunterladen',
    cvHref: '/de/lebenslauf.pdf',
    scrollCue: 'Prolog',
    imageAlt:
      'Eine Person steht in der Abenddämmerung auf einem Hügel und hält einen offenen Laptop, aus dem ein Band aus Licht in den Himmel steigt.',
  },
  story: {
    prologue: {
      label: 'Prolog',
      meta: '2017',
      headlineStart: 'Alles begann mit',
      headlineEnd: 'einem Interview.',
      body: [
        '2017 sah ich ein Interview mit dem CEO eines der größten Tech-Unternehmen im Silicon Valley. Er sprach darüber, wohin uns KI führt. Ich war gefesselt. Nicht vom Hype, sondern davon, wie klar die Zukunft aussah, wenn ich mir Raum zum Nachdenken gab.',
        'Ich wählte Technische Informatik in Teheran als meinen Weg hinein.',
      ],
    },
    monster: {
      label: 'Kapitel I',
      meta: 'Das Monster',
      headlineStart: 'Jede Idee wurde zum',
      headlineEnd: 'Monster.',
      body: [
        'Programmieren habe ich nie um seiner selbst willen geliebt. Ich liebte es, Dinge zu bauen, besonders für Gesundheit und Medizin. Aber jede Idee wuchs in meinem Kopf zu einem Monster: zu groß, um anzufangen, zu groß, um fertig zu werden.',
        'Mein erstes Computer-Vision-Praktikum hat es deutlich gemacht. Wissen war nie mein Problem. Fertigwerden schon.',
      ],
      imageAlt:
        'Eine Person sitzt mit einem Laptop auf dem Boden, umgeben von einem wirbelnden Tunnel aus leuchtenden Fragmenten.',
    },
    turn: {
      label: 'Kapitel II',
      meta: 'Der Wendepunkt',
      headlineStart: 'Klein liefern.',
      headlineEnd: 'Dann wachsen lassen.',
      body: [
        'Der Umzug nach Österreich hat das verändert. Weit weg von allem Vertrauten konnte ich mich nicht mehr vor mir selbst verstecken, also hörte ich auf, vor der Angst zu scheitern davonzulaufen. Heute baue ich zuerst die kleinste funktionierende Version, liefere sie aus und lasse sie dann wachsen.',
        'Ich baue mit KI, nicht nur an KI. KI-Agenten helfen mir, ein Monster in kleine Schritte zu zerlegen, Entwürfe zu schreiben und zu prüfen. Die Entscheidungen treffe ich, ich teste alles und verstehe jede Zeile, die ich ausliefere.',
      ],
      proofBefore: 'Diese Website ist der Beweis: in kleinen Phasen gebaut, ',
      proofLink: 'jeder Commit öffentlich auf GitHub',
      proofAfter: '.',
    },
    proof: {
      label: 'Kapitel III',
      meta: 'Der Beweis',
      headlineStart: 'Dinge, die',
      headlineEnd: 'funktionieren.',
      intro:
        'Echte Projekte für echte Kunden und echte Probleme. Jedes zeigt das Problem, meinen Ansatz, das Ergebnis und eine Demo.',
    },
    why: {
      label: 'Kapitel IV',
      meta: 'Das Warum',
      headlineStart: 'Warum',
      headlineEnd: 'Medizin.',
      body: [
        'Meine Mutter lebt mit Diabetes, und ich wollte schon immer verstehen, wie Körper und Gehirn funktionieren. Deshalb möchte ich dort arbeiten, wo KI auf Medizin trifft: damit Menschen besser mit Krankheiten wie ihrer leben können.',
      ],
    },
    vienna: {
      label: 'Epilog',
      meta: 'Wien',
      headlineStart: 'Nächster Halt:',
      headlineEnd: 'Wien.',
      body: [
        'Seit meiner Jugend ist Wien für mich das Bild einer modernen Stadt, in der man seine Seele nicht verliert: Geschichte, Kunst und Menschen in jeder Straße. Dort möchte ich bauen.',
      ],
    },
  },
  sections: {
    skills: 'Skills',
    experience: 'Erfahrung & Ausbildung',
    contact: 'Kontakt',
    comingSoon: 'Dieser Bereich entsteht gerade.',
  },
  footer: {
    builtWith: 'Gebaut mit Astro und einem KI-Pair-Programmer.',
    source: 'Quellcode auf GitHub',
    rights: 'Farhang',
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
