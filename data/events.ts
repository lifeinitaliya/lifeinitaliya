import type { ItalyEvent } from "@/lib/types";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

/**
 * SAMPLE event listings for layout only. These are not real scheduled events —
 * names and dates are placeholders until events come from the CMS.
 */
export const events: ItalyEvent[] = [
  {
    slug: "sample-design-showcase-milan",
    name: "Design & Fashion Showcase",
    citySlug: "milan",
    category: "Fashion & Design",
    dateLabel: "Sample · 8–11 Oct",
    summary: "An example listing showing how design and fashion events will appear.",
    image: { src: unsplash("1589042235967-6ca8d0d4e0b7"), alt: "A fashion boutique façade on a Milan street" },
    sample: true,
  },
  {
    slug: "sample-contemporary-art-weekend-rome",
    name: "Contemporary Art Weekend",
    citySlug: "rome",
    category: "Culture & Art",
    dateLabel: "Sample · 17–18 Oct",
    summary: "An example listing for exhibitions and gallery events.",
    image: { src: unsplash("1672613199092-a6b687d72aa0"), alt: "Light projections on buildings around a piazza at night" },
    sample: true,
  },
  {
    slug: "sample-harvest-food-wine-florence",
    name: "Harvest Food & Wine Fair",
    citySlug: "florence",
    category: "Food & Wine",
    dateLabel: "Sample · 24–26 Oct",
    summary: "An example listing for food and wine events.",
    image: { src: unsplash("1714415907816-bca31d756e41"), alt: "Glasses of red, rosé and white wine on a table" },
    sample: true,
  },
  {
    slug: "sample-music-nights-naples",
    name: "Open-Air Music Nights",
    citySlug: "naples",
    category: "Music & Entertainment",
    dateLabel: "Sample · 31 Oct",
    summary: "An example listing for concerts and live entertainment.",
    image: { src: unsplash("1696687021837-7babaf30debb"), alt: "People walking along a street strung with lights at night" },
    sample: true,
  },
  {
    slug: "sample-opera-evening-verona",
    name: "Opera Evening",
    citySlug: "verona",
    category: "Music & Entertainment",
    dateLabel: "Sample · 7 Nov",
    summary: "An example listing for opera and classical performances.",
    image: { src: unsplash("1597261360942-48b0604ca7bc"), alt: "The Roman arena in Verona lit up at night" },
    sample: true,
  },
  {
    slug: "sample-carnival-traditions-venice",
    name: "Carnival Traditions Evening",
    citySlug: "venice",
    category: "Traditions",
    dateLabel: "Sample · 14 Nov",
    summary: "An example listing for traditional celebrations.",
    image: { src: unsplash("1573700398841-b5782bc7b516"), alt: "A person in an ornate Venetian carnival costume and mask" },
    sample: true,
  },
];
