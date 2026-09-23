import Image from "next/image";
import { Lightbulb } from "lucide-react";

import { RichText } from "@/components/content/RichText";
import { getHeadings } from "@/lib/content";
import type { ContentBlock } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ArticleBodyProps {
  blocks: ContentBlock[];
  className?: string;
}

/** Renders structured content with comfortable reading typography. */
export function ArticleBody({ blocks, className }: ArticleBodyProps) {
  const headingIds = getHeadings(blocks).map((h) => h.id);
  let headingIndex = 0;

  return (
    <div
      className={cn(
        "text-[17px] leading-[1.75] text-foreground/85 [&>*+*]:mt-6",
        className
      )}
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const id = headingIds[headingIndex++];
            return block.level === 2 ? (
              <h2
                key={index}
                id={id}
                className="scroll-mt-28 pt-6 text-[26px] leading-tight font-bold tracking-[-0.025em] text-foreground sm:text-[28px]"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                id={id}
                className="scroll-mt-28 pt-2 text-xl leading-snug font-semibold tracking-[-0.015em] text-foreground"
              >
                {block.text}
              </h3>
            );
          }
          case "paragraph":
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            );
          case "list": {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List
                key={index}
                className={cn(
                  "space-y-2.5 pl-6 marker:text-muted-foreground",
                  block.ordered ? "list-decimal marker:font-semibold" : "list-disc"
                )}
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1.5">
                    <RichText text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <figure key={index} className="border-l-2 border-primary py-1 pl-6">
                <blockquote className="text-xl leading-relaxed font-medium tracking-[-0.01em] text-foreground">
                  <p>{block.text}</p>
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    — {block.cite}
                  </figcaption>
                )}
              </figure>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="flex gap-4 rounded-xl border border-primary/15 bg-accent/60 p-5 text-base leading-relaxed"
              >
                <Lightbulb aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  {block.title && (
                    <p className="font-semibold text-foreground">{block.title}</p>
                  )}
                  <p className={cn(block.title && "mt-1")}>
                    <RichText text={block.text} />
                  </p>
                </div>
              </aside>
            );
          case "image":
            return (
              <figure key={index} className="!mt-10">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "table":
            return (
              <figure key={index} className="!mt-8">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[28rem] border-collapse text-left text-[15px] leading-snug">
                    {block.caption && (
                      <caption className="border-b border-border px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                        {block.caption}
                      </caption>
                    )}
                    <thead className="bg-secondary">
                      <tr>
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-4 py-3 font-semibold text-foreground"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {block.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className={cn(
                                "px-4 py-3 align-top",
                                cellIndex === 0 && "font-medium text-foreground"
                              )}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
