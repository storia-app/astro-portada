import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Storia writes each article to src/content/blog/<slug>.md with this
// frontmatter (see storia.json). Keep the fields in sync if you change it.
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional().transform((v) => (v ? v : undefined)),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
