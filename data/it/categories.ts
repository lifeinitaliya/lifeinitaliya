import type { CategorySlug } from "@/lib/types";

export interface ItCategory {
  /** The matching English section. */
  slug: CategorySlug;
  /** Italian URL segment, served at /it/{itSlug}. */
  itSlug: string;
  name: string;
  /** One line, used in lists of sections. */
  description: string;
  /** Introduction shown on the section page. */
  intro: string;
  seoTitle: string;
  seoDescription: string;
}

// Italian sections. Each maps to an English section with the same articles.
export const itCategories: ItCategory[] = [
  {
    slug: "travel",
    itSlug: "viaggi",
    name: "Viaggi",
    description: "Destinazioni, itinerari e idee per scoprire l'Italia con tempi e ritmi diversi.",
    intro:
      "Dalle grandi città alle strade di campagna, raccontiamo destinazioni italiane, itinerari e modi diversi di esplorare il Paese. Qui trovi idee per il prossimo viaggio, ma anche indicazioni pratiche per organizzarlo meglio: quanti giorni servono, come combinare le tappe e in che periodo partire.",
    seoTitle: "Viaggi in Italia: destinazioni, itinerari e idee",
    seoDescription:
      "Destinazioni, itinerari e consigli pratici per viaggiare in Italia: dalle città d'arte alla campagna, dalla costa alle isole.",
  },
  {
    slug: "cities",
    itSlug: "citta",
    name: "Città",
    description: "Roma, Firenze, Venezia, Milano, Napoli e le altre città italiane, quartiere per quartiere.",
    intro:
      "Roma, Firenze, Venezia, Milano, Napoli, Bologna, Palermo: ogni città italiana ha un ritmo proprio, quartieri che cambiano da una strada all'altra e una storia che si legge nelle piazze. Raccogliamo itinerari di uno o più giorni, indicazioni su dove dormire e su come muoversi, e qualche consiglio per evitare le code dove si può.",
    seoTitle: "Città italiane: itinerari, quartieri e consigli",
    seoDescription:
      "Itinerari e consigli pratici per visitare le città italiane: cosa vedere, dove dormire e come muoversi a Roma, Firenze, Venezia, Milano, Napoli e non solo.",
  },
  {
    slug: "food",
    itSlug: "cibo",
    name: "Cibo e Bevande",
    description: "Cucina regionale, caffè, vino e le tradizioni che ci sono dietro.",
    intro:
      "Dalla cucina regionale al caffè al banco, dalle tradizioni di famiglia ai prodotti che raccontano un territorio. In Italia si mangia per regioni, a volte per singole valli: spieghiamo da dove vengono i piatti più noti, come si ordina al bar e in trattoria e che cosa vale la pena assaggiare, città per città.",
    seoTitle: "Cibo e bevande in Italia: cucina regionale e tradizioni",
    seoDescription:
      "Cucina regionale, caffè, vino, mercati e dolci tradizionali: storie e consigli per capire e gustare il cibo italiano.",
  },
  {
    slug: "culture",
    itSlug: "cultura",
    name: "Cultura",
    description: "Arte, architettura, moda e tradizioni: le storie dietro l'Italia.",
    intro:
      "Musei, architettura, moda, feste e tradizioni. La cultura italiana non si esaurisce nei grandi nomi, ma spesso è da lì che si comincia: spieghiamo come visitare i luoghi più celebri senza fretta, che cosa c'è dietro le opere e le usanze più note e dove guardare per scoprire qualcosa di meno ovvio.",
    seoTitle: "Cultura italiana: arte, architettura, moda e tradizioni",
    seoDescription:
      "Musei, architettura, moda e tradizioni italiane: come visitare i luoghi più celebri e conoscere le storie che li hanno resi tali.",
  },
  {
    slug: "people",
    itSlug: "persone",
    name: "Persone",
    description: "Artisti, designer, registi e artigiani che raccontano l'Italia di ieri e di oggi.",
    intro:
      "Artisti, designer, registi, artigiani e protagonisti che contribuiscono a definire la cultura italiana contemporanea. Ritratti e storie di movimenti, botteghe e carriere che aiutano a capire come si crea, si lavora e si vive in Italia, al di là dei luoghi comuni.",
    seoTitle: "Persone: artisti, designer e protagonisti della cultura italiana",
    seoDescription:
      "Ritratti di artisti, designer, registi e artigiani che hanno contribuito a definire la cultura italiana, dal dopoguerra a oggi.",
  },
  {
    slug: "tours",
    itSlug: "tour-ed-esperienze",
    name: "Tour ed Esperienze",
    description: "Gite in barca, tour a piedi, degustazioni e food tour: cosa sapere prima di prenotare.",
    intro:
      "Gite in barca, giri in gondola, visite guidate a piedi, degustazioni e food tour. Spieghiamo che cosa aspettarsi, quanto tempo dedicare a ogni esperienza e quali domande fare prima di prenotare. Non vendiamo tour: l'obiettivo è aiutarti a scegliere con più consapevolezza.",
    seoTitle: "Tour ed esperienze in Italia: cosa sapere prima di prenotare",
    seoDescription:
      "Gite in barca, gondole, tour a piedi, degustazioni e food tour in Italia: come funzionano e che cosa chiedere prima di prenotare.",
  },
  {
    slug: "transport",
    itSlug: "trasporti",
    name: "Trasporti",
    description: "Treni, aeroporti, traghetti e auto: come muoversi in Italia.",
    intro:
      "Treni, aeroporti, traghetti e auto: le informazioni pratiche per spostarsi in Italia senza sorprese. Spieghiamo come funzionano biglietti e tariffe, che cosa controllare prima di noleggiare un'auto e quale mezzo scegliere a seconda dell'itinerario, con rimandi alle fonti ufficiali da consultare prima di partire.",
    seoTitle: "Trasporti in Italia: treni, auto, aeroporti e traghetti",
    seoDescription:
      "Come muoversi in Italia: treni ad alta velocità e regionali, noleggio auto e ZTL, collegamenti con gli aeroporti e traghetti.",
  },
  {
    slug: "lifestyle",
    itSlug: "lifestyle",
    name: "Lifestyle",
    description: "Riti quotidiani e abitudini della vita italiana.",
    intro:
      "La passeggiata serale, l'aperitivo, i ritmi della giornata: piccoli riti quotidiani che dicono molto di come si vive in Italia. Storie brevi per capire le abitudini del Paese e, durante un viaggio, per provare a seguirne il passo.",
    seoTitle: "Lifestyle italiano: riti e abitudini quotidiane",
    seoDescription:
      "La passeggiata, l'aperitivo e gli altri riti quotidiani della vita in Italia, raccontati con uno sguardo pratico.",
  },
  {
    slug: "things-to-do",
    itSlug: "cose-da-fare",
    name: "Cose da fare",
    description: "Esperienze, spettacoli e ricorrenze stagionali da mettere in calendario.",
    intro:
      "Opera all'aperto, feste tradizionali, palii e ricorrenze stagionali: esperienze attorno a cui vale la pena organizzare una giornata, o un intero viaggio. Raccontiamo come funzionano e in che periodo si svolgono di solito; date e programmi cambiano ogni anno, quindi vanno sempre verificati sui calendari ufficiali.",
    seoTitle: "Cose da fare in Italia: spettacoli, feste e tradizioni",
    seoDescription:
      "Opera all'Arena di Verona, carnevali, palii e feste stagionali: esperienze da mettere in calendario durante un viaggio in Italia.",
  },
];

export const itGuidesPage = {
  name: "Guide",
  title: "Guide pratiche all'Italia",
  intro:
    "Come organizzare il viaggio, spostarsi in treno o in auto, orientarsi tra costi e stagioni. Ogni guida riporta il Guide Rank, il nostro indice editoriale di utilità e completezza, e la data dell'ultimo aggiornamento.",
  seoTitle: "Guide pratiche all'Italia: viaggio, treni e auto",
  seoDescription:
    "Guide pratiche per organizzare un viaggio in Italia: come pianificare il primo viaggio, viaggiare in treno e guidare in sicurezza.",
};
