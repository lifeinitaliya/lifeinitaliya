import type { ContentBlock } from "@/lib/types";

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/**
 * Assigns stable, unique anchor ids to headings. Used by both the article
 * renderer and the table of contents so their ids always match.
 */
export function getHeadings(blocks: ContentBlock[]): Heading[] {
  const seen = new Map<string, number>();
  return blocks.flatMap((block) => {
    if (block.type !== "heading") return [];
    const base = slugify(block.text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return [{ id: count ? `${base}-${count}` : base, text: block.text, level: block.level }];
  });
}
