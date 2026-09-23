import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq as FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Faq({ items, className }: { items: FaqItem[]; className?: string }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby="faq-title" className={className}>
      <h2
        id="faq-title"
        className="text-[26px] leading-tight font-bold tracking-[-0.025em] sm:text-[28px]"
      >
        Frequently asked questions
      </h2>
      <Accordion className="mt-6 border-y border-border">
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
