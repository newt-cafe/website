<script lang="ts">
  import SearchBox from "./ui/SearchBox.svelte";
  import type { MappedImage } from "@/lib/mappers";

  export interface Card {
    id: string;
    title: string;
    tagline: string;
    image: MappedImage;
  }

  interface Props {
    cards: Card[];
    href: string;
    empty: string;
  }

  let { cards: initCards, href, empty }: Props = $props();
  let cards = $state((() => initCards)());
</script>

<div class="flex flex-col gap-4">
  <SearchBox
    filter={(kv, kw) => {
      // TODO
    }}
  />

  <div class="flex flex-wrap gap-4">
    {#each cards as card (card.id)}
      <a href={`${href}/${card.id}`}>
        <img
          src={card.image.src}
          width={card.image.width}
          height={card.image.height}
          alt=""
        />
        <h1 class="font-heading text-3xl font-black">{card.title}</h1>
        <p>{card.tagline}</p>
      </a>
    {:else}
      <p>{empty}</p>
    {/each}
  </div>
</div>
