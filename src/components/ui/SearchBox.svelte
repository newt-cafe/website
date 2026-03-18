<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import SearchIcon from "@content/assets/lucide/search.svelte";

  interface Props extends HTMLAttributes<HTMLLabelElement> {
    filter(kw: string[], kv: Map<string, string>): void;
  }

  const { filter, ...rest }: Props = $props();
</script>

<label class="relative block" {...rest}>
  <SearchIcon class="absolute top-2.5 left-1.5" />
  <input
    type="search"
    placeholder="Search..."
    class="border-foreground w-full border-2 p-2 pl-8"
    oninput={(e) => {
      const { value } = e.target as HTMLInputElement;
      const words = value.toLowerCase().trim().split(/\s+/);

      const kw: string[] = [];
      const kv = new Map<string, string>();
      for (const word of words) {
        if (word.includes(":")) {
          const [key, ...values] = word;
          kv.set(key, values.join(":"));
        } else {
          kw.push(word);
        }
      }

      filter(kw, kv);
    }}
  />
</label>
