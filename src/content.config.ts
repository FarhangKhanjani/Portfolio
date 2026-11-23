/**
 * Content collections.
 *
 * Every project is ONE file in src/content/projects/<slug>.mdx.
 * The file name becomes the URL: ppe-detection.mdx -> /projects/ppe-detection/
 *
 * Text fields are bilingual: `{ en: '...', de: '...' }`. English is required,
 * German is optional. A missing German text falls back to English on /de/.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A text field with English (required) and German (optional). */
const localized = z.object({
  en: z.string().min(1),
  de: z.string().optional(),
});

/** Topic tags used by the project filter (Phase 8). Add new ones here. */
export const projectTopics = ['CV', 'NLP', 'Healthcare', 'Automation', 'RecSys', 'RL', 'Web'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, shown on cards. */
      tagline: localized,
      problem: localized,
      approach: localized,
      result: localized,

      /** Technologies, shown as tags: ['Python', 'OpenCV']. */
      stack: z.array(z.string()).min(1),
      /** Topic categories for filtering. */
      topics: z.array(z.enum(projectTopics)).default([]),

      /**
       * How the project is demonstrated:
       * - live:  an interactive island on the site (component = key in the demo registry)
       * - gif:   a short looping clip. Store as MP4/WebM, not an actual GIF (much smaller)
       * - video: a YouTube video (loaded only on click) or a self-hosted file
       * - none:  no demo yet
       */
      demo: z.discriminatedUnion('type', [
        z.object({
          type: z.literal('live'),
          component: z.string(),
        }),
        z.object({
          type: z.literal('gif'),
          /** Paths under /public, e.g. '/demos/rl-agent.mp4'. */
          mp4: z.string(),
          webm: z.string().optional(),
          poster: image().optional(),
          alt: localized,
        }),
        z.object({
          type: z.literal('video'),
          youtubeId: z.string().optional(),
          src: z.string().optional(),
          poster: image().optional(),
          alt: localized,
        }),
        z.object({ type: z.literal('none') }),
      ]),

      /** Card / social image (optional). Put the file next to the MDX or in src/assets. */
      cover: image().optional(),
      coverAlt: localized.optional(),

      githubUrl: z.url().optional(),
      liveUrl: z.url().optional(),

      /** Featured projects get the large cards. Aim for 3 to 4. */
      featured: z.boolean().default(false),
      /** Sort order, lowest first. */
      order: z.number().int(),
      /** Hide from the site without deleting the file. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
