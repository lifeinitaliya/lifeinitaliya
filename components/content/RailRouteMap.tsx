// Schematic of Italy's main high-speed and fast rail corridors. Positions are
// simplified for legibility — this is a diagram, not a geographic map.

import type { Locale } from "@/lib/i18n";

const stations = {
  turin: { x: 44, y: 78, label: "Turin", anchor: "middle" as const, dy: -16 },
  milan: { x: 132, y: 78, label: "Milan", anchor: "middle" as const, dy: -16 },
  verona: { x: 222, y: 78, label: "Verona", anchor: "middle" as const, dy: -16 },
  padua: { x: 292, y: 92, label: "Padua", anchor: "start" as const, dx: 10, dy: 24 },
  venice: { x: 372, y: 78, label: "Venice", anchor: "middle" as const, dy: -16 },
  bologna: { x: 232, y: 182, label: "Bologna", anchor: "start" as const, dx: 14, dy: 5 },
  florence: { x: 214, y: 262, label: "Florence", anchor: "end" as const, dx: -14, dy: 5 },
  rome: { x: 252, y: 372, label: "Rome", anchor: "end" as const, dx: -14, dy: 5 },
  naples: { x: 318, y: 444, label: "Naples", anchor: "end" as const, dx: -14, dy: 5 },
  salerno: { x: 364, y: 494, label: "Salerno", anchor: "end" as const, dx: -14, dy: 5 },
};

type StationKey = keyof typeof stations;

const segments: [StationKey, StationKey][] = [
  ["turin", "milan"],
  ["milan", "verona"],
  ["verona", "padua"],
  ["padua", "venice"],
  ["milan", "bologna"],
  ["padua", "bologna"],
  ["bologna", "florence"],
  ["florence", "rome"],
  ["rome", "naples"],
  ["naples", "salerno"],
];

const hubs: StationKey[] = ["milan", "bologna", "florence", "rome"];

const itLabels: Record<StationKey, string> = {
  turin: "Torino",
  milan: "Milano",
  verona: "Verona",
  padua: "Padova",
  venice: "Venezia",
  bologna: "Bologna",
  florence: "Firenze",
  rome: "Roma",
  naples: "Napoli",
  salerno: "Salerno",
};

const copy = {
  en: {
    title: "Italy's main high-speed rail corridors (simplified)",
    desc: "A line runs from Turin to Milan, Bologna, Florence, Rome, Naples and Salerno. From Milan a line continues east through Verona and Padua to Venice, and Padua also connects south to Bologna.",
    legend: "High-speed and fast services · larger dots are major interchange stations",
  },
  it: {
    title: "Le principali direttrici ferroviarie veloci in Italia (schema semplificato)",
    desc: "Una linea collega Torino a Milano, Bologna, Firenze, Roma, Napoli e Salerno. Da Milano un'altra linea prosegue verso est passando per Verona e Padova fino a Venezia; Padova è collegata anche a Bologna.",
    legend: "Servizi ad alta velocità e veloci · i punti più grandi indicano i principali nodi di interscambio",
  },
} as const;

export function RailRouteMap({ caption, locale = "en" }: { caption?: string; locale?: Locale }) {
  const text = copy[locale];
  return (
    <figure className="!mt-10">
      <div className="mx-auto max-w-[420px] border border-border bg-card px-3 py-4 sm:px-6">
        <svg
          viewBox="0 0 420 530"
          role="img"
          aria-labelledby="rail-map-title rail-map-desc"
          className="h-auto w-full"
        >
          <title id="rail-map-title">{text.title}</title>
          <desc id="rail-map-desc">{text.desc}</desc>
          {segments.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={stations[a].x}
              y1={stations[a].y}
              x2={stations[b].x}
              y2={stations[b].y}
              stroke="#3157d5"
              strokeWidth={4}
              strokeLinecap="round"
            />
          ))}
          {(Object.keys(stations) as StationKey[]).map((key) => {
            const s = stations[key];
            const hub = hubs.includes(key);
            return (
              <g key={key}>
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={hub ? 8 : 6}
                  fill="#ffffff"
                  stroke="#171717"
                  strokeWidth={hub ? 3 : 2}
                />
                <text
                  x={s.x + ("dx" in s ? s.dx : 0)}
                  y={s.y + s.dy}
                  textAnchor={s.anchor}
                  fill="#171717"
                  fontSize={17}
                  fontWeight={hub ? 700 : 500}
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                >
                  {locale === "it" ? itLabels[key] : s.label}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-2 flex items-center gap-2 text-[13px] text-foreground">
          <span aria-hidden className="inline-block h-1 w-6 rounded-full bg-primary" />
          {text.legend}
        </p>
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
