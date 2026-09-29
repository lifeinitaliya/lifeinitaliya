import Link from "next/link";

import { itRegionNames, itRegionTileLabels } from "@/data/it/regions";
import type { Locale } from "@/lib/i18n";
import { getRegions, hasRegionPage } from "@/lib/queries/italy";
import { routes } from "@/lib/site";
import type { FirstTripFit } from "@/lib/types";
import { cn } from "@/lib/utils";

// Schematic tile map: one tile per region, placed roughly where it sits in
// Italy. Positions are approximate by design — it is not a geographic map.
const layout: Record<string, { col: number; row: number; label: string }> = {
  "aosta-valley": { col: 1, row: 0, label: "Aosta" },
  "trentino-alto-adige": { col: 3, row: 0, label: "Trentino" },
  "friuli-venezia-giulia": { col: 4, row: 0, label: "Friuli" },
  piedmont: { col: 1, row: 1, label: "Piedmont" },
  lombardy: { col: 2, row: 1, label: "Lombardy" },
  veneto: { col: 3, row: 1, label: "Veneto" },
  liguria: { col: 1, row: 2, label: "Liguria" },
  "emilia-romagna": { col: 2, row: 2, label: "Emilia-Romagna" },
  marche: { col: 3, row: 2, label: "Marche" },
  tuscany: { col: 2, row: 3, label: "Tuscany" },
  umbria: { col: 3, row: 3, label: "Umbria" },
  abruzzo: { col: 4, row: 3, label: "Abruzzo" },
  sardinia: { col: 0, row: 4, label: "Sardinia" },
  lazio: { col: 3, row: 4, label: "Lazio" },
  molise: { col: 4, row: 4, label: "Molise" },
  puglia: { col: 5, row: 4, label: "Puglia" },
  campania: { col: 4, row: 5, label: "Campania" },
  basilicata: { col: 5, row: 5, label: "Basili­cata" },
  calabria: { col: 5, row: 6, label: "Calabria" },
  sicily: { col: 4, row: 7, label: "Sicily" },
};

// Ordinal single-hue ramp (validated: monotone lightness, light end ≥ 2:1 on
// the page surface). Label ink is chosen per step for text contrast.
const fitStyles: Record<FirstTripFit, { tile: string; label: string; itLabel: string }> = {
  great: { tile: "bg-[#184f95] text-white", label: "Easy first-trip choice", itLabel: "Ideale per un primo viaggio" },
  good: { tile: "bg-[#3987e5] text-[#0b1a33]", label: "Good with some planning", itLabel: "Adatta, con un po' di organizzazione" },
  later: { tile: "bg-[#86b6ef] text-[#0b1a33]", label: "Better for a return trip", itLabel: "Meglio per un viaggio successivo" },
};

export async function RegionTileMap({ caption, locale = "en" }: { caption?: string; locale?: Locale }) {
  const regions = await getRegions();
  const it = locale === "it";
  const fitLabel = (fit: FirstTripFit) => (it ? fitStyles[fit].itLabel : fitStyles[fit].label);

  return (
    <figure className="!mt-10">
      <div className="mx-auto max-w-[440px]">
        <ul
          aria-label={
            it
              ? "Le venti regioni italiane, colorate in base a quanto si prestano a un primo viaggio"
              : "Italy's twenty regions, shaded by how easily each fits a first trip"
          }
          className="grid grid-cols-6 grid-rows-8 gap-[3px]"
        >
          {regions.map((region) => {
            const pos = layout[region.slug];
            const fit = region.firstTripFit ?? "later";
            if (!pos) return null;
            const name = it ? itRegionNames[region.slug] ?? region.name : region.name;
            const text = `${name}: ${fitLabel(fit).toLowerCase()}`;
            const tileLabel = it ? itRegionTileLabels[region.slug] ?? pos.label : pos.label;
            const tile = cn(
              "flex aspect-square items-center justify-center p-0.5 text-center text-[9px] leading-[1.1] font-semibold hyphens-manual sm:text-[11px]",
              fitStyles[fit].tile
            );
            return (
              <li
                key={region.slug}
                style={{ gridColumnStart: pos.col + 1, gridRowStart: pos.row + 1 }}
              >
                {/* Region pages exist in English only, so Italian tiles aren't links. */}
                {!it && hasRegionPage(region) ? (
                  <Link
                    href={routes.region(region.slug)}
                    title={text}
                    aria-label={text}
                    className={cn(tile, "transition-opacity hover:opacity-85")}
                  >
                    <span aria-hidden>{tileLabel}</span>
                  </Link>
                ) : (
                  <span title={text} aria-label={text} role="img" className={tile}>
                    <span aria-hidden>{tileLabel}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-foreground">
          {(Object.keys(fitStyles) as FirstTripFit[]).map((fit) => (
            <li key={fit} className="flex items-center gap-2">
              <span aria-hidden className={cn("size-3.5", fitStyles[fit].tile)} />
              {fitLabel(fit)}
            </li>
          ))}
        </ul>
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
