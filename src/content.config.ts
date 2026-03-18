import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      creators: z.array(reference("creator")),
      image: image(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
});

const creators = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/creators" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      socials: z.record(z.string(), z.url()),
      joinedAt: z.date(),
    }),
});

const demos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/demos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      image: image(),
      creators: z.array(reference("creator")),
      steam: z.url(),
      itchIo: z.url(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/games" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      image: image(),
      creators: z.array(reference("creator")),
      steam: z.url(),
      itchIo: z.url(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
});

export const collections = { blog, creators, demos, games };
