import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq as FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Faq({
  items,
  className,
  title = "Frequently asked questions",
}: {
  items: FaqItem[];
  className?: string;
  title?: string;
}) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="faq-title" className={className}>
      <h2
        id="faq-title"
        className="scroll-mt-28 font-display text-[30px] leading-[1.1] sm:text-[36px]"
      >
        {title}
      </h2>
      {/* hiddenUntilFound keeps answers in the HTML (crawlable, findable) while collapsed. */}
      <Accordion hiddenUntilFound className="mt-6 border-y border-border">
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className={cn("pb-5 text-base leading-relaxed text-muted-foreground")}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
