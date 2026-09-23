import { TocList } from "@/components/content/TableOfContents";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Collapsible table of contents for small screens. It stays open after a
 * link is tapped: collapsing it would shift the page and push the target
 * heading out of view.
 */
export function MobileTableOfContents({
  headings,
  className,
}: {
  headings: Heading[];
  className?: string;
}) {
  if (!headings.length) return null;

  return (
    <Accordion className={cn("rounded-xl border border-border bg-card px-4", className)}>
      <AccordionItem value="toc">
        <AccordionTrigger className="py-3.5 text-sm font-semibold hover:no-underline">
          On this page
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <nav aria-label="Table of contents">
            <TocList headings={headings} />
          </nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
