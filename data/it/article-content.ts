import { guidaCompletaViaggioItalia } from "@/data/content/it/guida-completa-viaggio-italia";
import { firenzePerLaPrimaVolta } from "@/data/content/it/firenze-per-la-prima-volta";
import { guidareInItalia } from "@/data/content/it/guidare-in-italia";
import { lagoDiComoWeekend } from "@/data/content/it/lago-di-como-weekend";
import { bolognaInDueGiorni } from "@/data/content/it/bologna-in-due-giorni";
import { milanoOltreIlDuomo } from "@/data/content/it/milano-oltre-il-duomo";
import { napoliPerLaPrimaVolta } from "@/data/content/it/napoli-per-la-prima-volta";
import { caffeItaliano } from "@/data/content/it/caffe-italiano";
import { checklistViaggioItalia } from "@/data/content/it/checklist-viaggio-italia";
import { comeSpostarsiTraLeCittaItaliane } from "@/data/content/it/come-spostarsi-tra-le-citta-italiane";
import { costoViaggioItalia } from "@/data/content/it/costo-viaggio-italia";
import { dolciTradizionaliItaliani } from "@/data/content/it/dolci-tradizionali-italiani";
import { dolomitiPrimaVolta } from "@/data/content/it/dolomiti-prima-volta";
import { palermoPerLaPrimaVolta } from "@/data/content/it/palermo-per-la-prima-volta";
import { romaInTreGiorni } from "@/data/content/it/roma-in-tre-giorni";
import { torinoPerLaPrimaVolta } from "@/data/content/it/torino-per-la-prima-volta";
import { pizzaNapoletana } from "@/data/content/it/pizza-napoletana";
import { tradizioniDellaCucinaSiciliana } from "@/data/content/it/tradizioni-della-cucina-siciliana";
import { tradizioniDellaCucinaItaliana } from "@/data/content/it/tradizioni-della-cucina-italiana";
import { traghettiInItalia } from "@/data/content/it/traghetti-in-italia";
import { trasferimentiAeroportiItalia } from "@/data/content/it/trasferimenti-aeroporti-italia";
import { viniRegionaliItaliani } from "@/data/content/it/vini-regionali-italiani";
import { veronaPerLaPrimaVolta } from "@/data/content/it/verona-per-la-prima-volta";
import { veneziaPerLaPrimaVolta } from "@/data/content/it/venezia-per-la-prima-volta";
import { quandoAndareInItalia } from "@/data/content/it/quando-andare-in-italia";
import { viaggiareInItaliaInTreno } from "@/data/content/it/viaggiare-in-italia-in-treno";
import type { ArticleContent } from "@/lib/types";

// Bodies of the Italian editions, keyed by Italian slug.
export const itArticleContent: Record<string, ArticleContent> = {
  "guida-completa-viaggio-italia": guidaCompletaViaggioItalia,
  "viaggiare-in-italia-in-treno": viaggiareInItaliaInTreno,
  "guidare-in-italia": guidareInItalia,
  "quando-andare-in-italia": quandoAndareInItalia,
  "firenze-per-la-prima-volta": firenzePerLaPrimaVolta,
  "lago-di-como-weekend": lagoDiComoWeekend,
  "napoli-per-la-prima-volta": napoliPerLaPrimaVolta,
  "milano-oltre-il-duomo": milanoOltreIlDuomo,
  "venezia-per-la-prima-volta": veneziaPerLaPrimaVolta,
  "bologna-in-due-giorni": bolognaInDueGiorni,
  "palermo-per-la-prima-volta": palermoPerLaPrimaVolta,
  "torino-per-la-prima-volta": torinoPerLaPrimaVolta,
  "verona-per-la-prima-volta": veronaPerLaPrimaVolta,
  "roma-in-tre-giorni": romaInTreGiorni,
  "costo-viaggio-italia": costoViaggioItalia,
  "checklist-viaggio-italia": checklistViaggioItalia,
  "dolomiti-prima-volta": dolomitiPrimaVolta,
  "trasferimenti-aeroporti-italia": trasferimentiAeroportiItalia,
  "come-spostarsi-tra-le-citta-italiane": comeSpostarsiTraLeCittaItaliane,
  "traghetti-in-italia": traghettiInItalia,
  "tradizioni-della-cucina-italiana": tradizioniDellaCucinaItaliana,
  "tradizioni-della-cucina-siciliana": tradizioniDellaCucinaSiciliana,
  "pizza-napoletana": pizzaNapoletana,
  "caffe-italiano": caffeItaliano,
  "dolci-tradizionali-italiani": dolciTradizionaliItaliani,
  "vini-regionali-italiani": viniRegionaliItaliani,
};
