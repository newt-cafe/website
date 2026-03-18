import type { CollectionEntry } from "astro:content";
import { getImage } from "astro:assets";
import type { Card } from "@/components/Cards.svelte";

export interface MappedImage {
  src: string;
  width: number;
  height: number;
}

const CARD_IMAGE_WIDTH = 320;
const CARD_IMAGE_HEIGHT = 157;
export async function asCards(
  entries: CollectionEntry<"blog" | "demos" | "games">[],
): Promise<Card[]> {
  return Promise.all(
    entries.map(async (entry): Promise<Card> => {
      const image = await getImage({
        src: entry.data.image,
        width: CARD_IMAGE_WIDTH,
        height: CARD_IMAGE_HEIGHT,
      });
      return {
        ...entry.data,
        id: entry.id,
        image: {
          src: image.src,
          width: CARD_IMAGE_WIDTH,
          height: CARD_IMAGE_HEIGHT,
        },
      };
    }),
  );
}
