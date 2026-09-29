import { NavLinks } from "@/components/layout/NavLinks";
import { Container } from "@/components/shared/Container";
import type { Locale } from "@/lib/i18n";
import { itTopicNav, topicNav } from "@/lib/site";

/** Full content scope of the publication; scrolls horizontally on small screens. */
export function TopicNav({ locale = "en" }: { locale?: Locale }) {
  return (
    <nav aria-label={locale === "it" ? "Sezioni" : "Topics"} className="border-b border-border bg-background">
      <Container className="relative px-0 sm:px-0 lg:px-8">
        <NavLinks
          links={locale === "it" ? itTopicNav : topicNav}
          className="flex h-11 items-center gap-6 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:gap-7 lg:px-0 [&::-webkit-scrollbar]:hidden"
          linkClassName="flex h-11 shrink-0 items-center border-b-2 border-transparent text-[13px] font-semibold whitespace-nowrap text-foreground/70 aria-[current=page]:border-primary"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent lg:hidden"
        />
      </Container>
    </nav>
  );
}
