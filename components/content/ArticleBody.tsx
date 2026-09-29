import Image from "next/image";
import { CircleAlert, Lightbulb } from "lucide-react";

import { Checklist } from "@/components/content/Checklist";
import { RailRouteMap } from "@/components/content/RailRouteMap";
import { RegionTileMap } from "@/components/content/RegionTileMap";
import { RichText } from "@/components/content/RichText";
import { getHeadings, slugify } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";
import type { ContentBlock } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ArticleBodyProps {
  blocks: ContentBlock[];
  className?: string;
  /** Language of the article; controls interface labels. */
  locale?: Locale;
}

/** Renders structured content with comfortable reading typography. */
export function ArticleBody({ blocks, className, locale = "en" }: ArticleBodyProps) {
  const dict = t(locale);
  const headingIds = getHeadings(blocks).map((h) => h.id);
  let headingIndex = 0;

  return (
    <div
      className={cn(
        "text-[18px] leading-[1.75] text-foreground/85 [&>*+*]:mt-6",
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
                className="scroll-mt-28 pt-10 font-display text-[30px] leading-[1.1] text-foreground sm:text-[36px]"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                id={id}
                className="scroll-mt-28 pt-3 text-[21px] leading-snug font-semibold tracking-[-0.015em] text-foreground"
              >
                {block.text}
              </h3>
            );
          }
          case "paragraph":
            return (
              <p key={index}>
                <RichText locale={locale} text={block.text} />
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
                    <RichText locale={locale} text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <figure key={index} className="!my-10 border-l-2 border-primary py-1 pl-6">
                <blockquote className="font-display text-[26px] leading-[1.25] text-foreground">
                  <p>{block.text}</p>
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-3 text-sm text-muted-foreground">— {block.cite}</figcaption>
                )}
              </figure>
            );
          case "answer":
            return (
              <div
                key={index}
                className="border-y-2 border-foreground py-5 text-[18px] leading-relaxed text-foreground"
              >
                <p className="mb-1.5 text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                  {dict.shortAnswer}
                </p>
                <p>
                  <RichText locale={locale} text={block.text} />
                </p>
              </div>
            );
          case "callout": {
            const important = block.tone === "important";
            const Icon = important ? CircleAlert : Lightbulb;
            return (
              <aside
                key={index}
                aria-label={block.title ?? (important ? dict.important : dict.tip)}
                className={cn(
                  "flex gap-4 border-l-4 p-5 text-base leading-relaxed",
                  important ? "border-[#b45309] bg-[#fdf6ec]" : "border-primary bg-accent/60"
                )}
              >
                <Icon
                  aria-hidden
                  className={cn("mt-0.5 size-5 shrink-0", important ? "text-[#b45309]" : "text-primary")}
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {block.title ?? (important ? dict.important : dict.tip)}
                  </p>
                  <p className="mt-1">
                    <RichText locale={locale} text={block.text} />
                  </p>
                </div>
              </aside>
            );
          }
          case "facts":
            return (
              <section key={index} aria-label={block.title} className="!mt-8 border border-border bg-card">
                <p className="border-b border-border px-5 py-3 text-[11px] font-bold tracking-[0.16em] text-foreground uppercase sm:px-6">
                  {block.title}
                </p>
                <dl className="grid sm:grid-cols-2">
                  {block.rows.map((row) => (
                    <div
                      key={row.label}
                      className="border-b border-border px-5 py-3.5 last:border-b-0 sm:px-6 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0 sm:odd:border-r"
                    >
                      <dt className="text-[13px] text-muted-foreground">{row.label}</dt>
                      <dd className="mt-0.5 text-[16px] leading-snug font-medium text-foreground">
                        <RichText locale={locale} text={row.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          case "steps":
            return (
              <ol key={index} className="!mt-8 space-y-0">
                {block.items.map((step, stepIndex) => (
                  <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-7 last:pb-0">
                    {stepIndex < block.items.length - 1 && (
                      <span aria-hidden className="absolute top-10 bottom-0 left-5 w-px -translate-x-1/2 bg-border" />
                    )}
                    <span
                      aria-hidden
                      className="relative flex size-10 items-center justify-center rounded-full border border-foreground bg-background font-display text-[18px] tabular-nums"
                    >
                      {stepIndex + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-[19px] leading-snug font-semibold text-foreground">
                        <span className="sr-only">{dict.step} {stepIndex + 1}: </span>
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[17px] leading-relaxed">
                        <RichText locale={locale} text={step.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "checklist":
            return (
              <Checklist key={index} id={block.id} groups={block.groups} locale={locale} />
            );
          case "regionMap":
            return <RegionTileMap key={index} caption={block.caption} locale={locale} />;
          case "routeMap":
            return <RailRouteMap key={index} caption={block.caption} locale={locale} />;
          case "cards":
            return (
              <ul
                key={index}
                className={cn(
                  "!mt-8 grid gap-px border border-border bg-border",
                  block.columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
                )}
              >
                {block.items.map((item) => (
                  <li key={item.title} className="bg-card px-5 py-5 sm:px-6">
                    {item.label && (
                      <p className="text-[11px] font-bold tracking-[0.14em] text-primary uppercase">{item.label}</p>
                    )}
                    <p className={cn("font-display text-[22px] leading-tight text-foreground", item.label && "mt-1.5")}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed">
                      <RichText locale={locale} text={item.text} />
                    </p>
                  </li>
                ))}
              </ul>
            );
          case "jumpLinks":
            return (
              <nav key={index} aria-label={block.label} className="!mt-6">
                <ul className="flex flex-wrap gap-2">
                  {block.targets.map((target) => (
                    <li key={target}>
                      <a
                        href={`#${slugify(target)}`}
                        className="inline-flex min-h-9 items-center border border-border bg-card px-3 text-[14px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {target}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          case "compare":
            return (
              <section key={index} className="!mt-8 border-2 border-foreground">
                <h3 className="border-b-2 border-foreground px-5 py-3 font-display text-[24px] leading-tight text-foreground sm:px-6">
                  {block.title}
                </h3>
                <div className="grid gap-px bg-border sm:grid-cols-2">
                  {block.columns.map((column) => (
                    <div key={column.title} className="bg-card px-5 py-5 sm:px-6">
                      <p className="text-[11px] font-bold tracking-[0.14em] text-primary uppercase">{column.title}</p>
                      <ul className="mt-3 space-y-2 pl-5 text-[16px] leading-snug marker:text-muted-foreground list-disc">
                        {column.items.map((item) => (
                          <li key={item} className="pl-1">
                            <RichText locale={locale} text={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "image":
            return (
              <figure key={index} className="!mt-10">
                <div
                  className={cn(
                    "relative overflow-hidden bg-secondary",
                    block.wide ? "aspect-[2/1] sm:aspect-[3/1]" : "aspect-[3/2]"
                  )}
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            );
          case "table":
            return (
              <figure key={index} className="!mt-8">
                <div
                  className="overflow-x-auto border border-border"
                  tabIndex={0}
                  role="region"
                  aria-label={block.caption ?? dict.table}
                >
                  <table className="w-full min-w-[34rem] border-collapse text-left text-[15px] leading-snug">
                    {block.caption && (
                      <caption className="border-b border-border px-4 py-3 text-left text-sm font-semibold text-foreground">
                        {block.caption}
                      </caption>
                    )}
                    <thead className="bg-secondary">
                      <tr>
                        {block.headers.map((header) => (
                          <th key={header} scope="col" className="px-4 py-3 font-semibold text-foreground">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {block.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, cellIndex) =>
                            cellIndex === 0 ? (
                              <th key={cellIndex} scope="row" className="px-4 py-3 align-top font-semibold text-foreground">
                                <RichText locale={locale} text={cell} />
                              </th>
                            ) : (
                              <td key={cellIndex} className="px-4 py-3 align-top">
                                <RichText locale={locale} text={cell} />
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.headers.length > 2 && (
                  <p aria-hidden className="mt-2 text-[12px] text-muted-foreground sm:hidden">
                    {dict.scrollHint}
                  </p>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}

