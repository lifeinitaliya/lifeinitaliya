import Link from "next/link";

import { SectionHeader } from "@/components/editorial/SectionHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { itRegionNames } from "@/data/it/regions";
import { hasRegionPage } from "@/lib/queries/italy";
import { routes } from "@/lib/site";
import type { RegionArea, RegionWithCount } from "@/lib/types";

const areas: { area: RegionArea; label: string }[] = [
  { area: "North", label: "Nord" },
  { area: "Centre", label: "Centro" },
  { area: "South", label: "Sud" },
  { area: "Islands", label: "Isole" },
];

/**
 * All twenty regions as an exploration index. Regions with published
 * articles link to their (English) region page; the rest are listed without
 * a link rather than given an empty page.
 */
export function ItRegions({ regions }: { regions: RegionWithCount[] }) {
  const byName = (a: RegionWithCount, b: RegionWithCount) =>
    (itRegionNames[a.slug] ?? a.name).localeCompare(itRegionNames[b.slug] ?? b.name, "it");

  return (
    <HomeSection labelledBy="regions-title" className="border-t border-border">
      <SectionHeader
        id="regions-title"
        label="Regioni"
        title="Esplora l'Italia"
        description="Venti regioni, ognuna con paesaggi, cucina e tradizioni proprie. Le schede regionali disponibili sono per ora in inglese."
      />
      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map(({ area, label }) => (
          <div key={area}>
            <h3 className="border-b border-foreground pb-2 text-[12px] font-bold tracking-[0.16em] uppercase">
              {label}
            </h3>
            <ul className="mt-2">
              {regions
                .filter((r) => r.area === area)
                .sort(byName)
                .map((region) => {
                  const name = itRegionNames[region.slug] ?? region.name;
                  return (
                    <li key={region.slug} className="border-b border-border">
                      {hasRegionPage(region) ? (
                        <Link
                          href={routes.region(region.slug)}
                          hrefLang="en"
                          className="group flex items-baseline justify-between gap-3 rounded-sm py-2.5 font-display text-[21px] leading-tight hover:text-primary"
                        >
                          {name}
                          <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-muted-foreground">
                            <span aria-hidden>EN</span>
                            <span className="sr-only">(scheda in inglese)</span>
                          </span>
                        </Link>
                      ) : (
                        <span className="block py-2.5 font-display text-[21px] leading-tight text-foreground/60">
                          {name}
                        </span>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
