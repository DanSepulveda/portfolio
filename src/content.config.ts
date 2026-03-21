import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { TECHS, type TechId } from "@/consts/techs";
const techIds = TECHS.map((s) => s.id) as [string, ...string[]];

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      languages: z.array(z.enum(techIds)),
      tags: z.array(z.enum(techIds)),
      repository: z.url().nullable(),
      demo: z.url().nullable(),
      featured: z.boolean(),
      position: z.number(),
    }),
});

export const collections = { projects };
