import { NewsletterForm } from "@/components/home/NewsletterForm";
import { HomeSection } from "@/components/home/HomeSection";

export function ItalyEdit() {
  return (
    <HomeSection labelledBy="newsletter-title" tone="sand">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-[12px] font-bold tracking-[0.2em] text-primary uppercase">
            Newsletter
          </p>
          <h2
            id="newsletter-title"
            className="mt-4 font-display text-[44px] leading-[1] sm:text-[60px]"
          >
            The Italy Edit
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            Get the best of Italy in your inbox. Travel ideas, food, events, culture and useful
            guides — delivered periodically.
          </p>
        </div>
        <div className="lg:col-span-6">
          <NewsletterForm />
        </div>
      </div>
    </HomeSection>
  );
}
