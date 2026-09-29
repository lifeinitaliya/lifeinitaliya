import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { routes } from "@/lib/site";

const principles = [
  { name: "Useful", text: "We focus on information readers can actually use." },
  { name: "Clear", text: "We make complex topics easier to understand." },
  { name: "Fresh", text: "Time-sensitive information is reviewed and updated." },
  { name: "Editorial", text: "Content is organized around real reader needs, not just keywords." },
];

export function WhyBsInsights() {
  return (
    <HomeSection labelledBy="why-title">
      <SectionHeader
        id="why-title"
        label="Why Life in Italia?"
        action={{ label: "Our editorial policy", href: routes.editorialPolicy }}
      />
      <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((item, index) => (
          <li key={item.name}>
            <span aria-hidden className="font-display text-[28px] leading-none text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-[28px] leading-tight">{item.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
