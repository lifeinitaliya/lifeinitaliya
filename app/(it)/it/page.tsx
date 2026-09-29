import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { HomeSection } from "@/components/home/HomeSection";
import { ItFeaturedGuide } from "@/components/it/ItFeaturedGuide";
import { ItHero } from "@/components/it/ItHero";
import { ItRegions } from "@/components/it/ItRegions";
import { JsonLd } from "@/components/seo/JsonLd";
import { authors } from "@/data/authors";
import { getItCards, languageAlternates, listItArticles, localizeAuthor } from "@/lib/queries/it";
import { getRegions } from "@/lib/queries/italy";
import { defaultShareImage, organizationId } from "@/lib/seo";
import { itSite } from "@/lib/site-it";
import { itRoutes, routes, siteConfig } from "@/lib/site";
import type { Article, Guide } from "@/lib/types";

export const metadata: Metadata = {
  title: { absolute: itSite.title },
  description: itSite.description,
  alternates: { canonical: itRoutes.home, languages: languageAlternates(itRoutes.home) },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: itRoutes.home,
    title: itSite.title,
    description: itSite.description,
    images: [defaultShareImage("it")],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}${itRoutes.home}#website`,
      name: `${siteConfig.name} — edizione italiana`,
      url: `${siteConfig.url}${itRoutes.home}`,
      description: itSite.description,
      inLanguage: "it",
      publisher: { "@id": organizationId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}${itRoutes.search}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// Editorial selections for each section, in order of preference. English-only
// articles appear with Italian card copy and an "In inglese" label.
const picks = {
  travel: ["lago-di-como-weekend", "dolomiti-prima-volta", "checklist-viaggio-italia", "costo-viaggio-italia"],
  food: ["tradizioni-della-cucina-italiana", "tradizioni-della-cucina-siciliana", "caffe-italiano", "vini-regionali-italiani", "dolci-tradizionali-italiani"],
  transport: ["viaggiare-in-italia-in-treno", "guidare-in-italia", "trasferimenti-aeroporti-italia", "come-spostarsi-tra-le-citta-italiane", "traghetti-in-italia"],
  guides: ["guida-completa-viaggio-italia", "viaggiare-in-italia-in-treno", "guidare-in-italia", "quando-andare-in-italia"],
};

// City coverage, labelled with the city's name.
const cityPicks: { slug: string; city: string }[] = [
  { slug: "roma-in-tre-giorni", city: "Roma" },
  { slug: "firenze-per-la-prima-volta", city: "Firenze" },
  { slug: "venezia-per-la-prima-volta", city: "Venezia" },
  { slug: "milano-oltre-il-duomo", city: "Milano" },
  { slug: "napoli-per-la-prima-volta", city: "Napoli" },
  { slug: "bologna-in-due-giorni", city: "Bologna" },
  { slug: "palermo-per-la-prima-volta", city: "Palermo" },
];

const byline = (article: Article) => {
  if (article.authorSlug === "editorial-team") return "A cura della redazione";
  const author = authors.find((a) => a.slug === article.authorSlug);
  return author ? `Di ${localizeAuthor(author).name}` : undefined;
};

export default async function ItalianHomePage() {
  const [stories, regions, guides, transport, travelAll, foodAll, cityCards] =
    await Promise.all([
      listItArticles({ kind: "story" }),
      getRegions(),
      getItCards(picks.guides),
      getItCards(picks.transport),
      getItCards(picks.travel),
      getItCards(picks.food),
      getItCards(cityPicks.map((c) => c.slug)),
    ]);

  // "Ultime storie" shows the most recently updated stories; the themed
  // sections below skip them so nothing appears twice in a row.
  const latest = [...stories].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 4);
  const shown = new Set(latest.map((a) => a.slug));
  const fresh = (items: Article[], count: number) => items.filter((a) => !shown.has(a.slug)).slice(0, count);

  const [travelLead, ...travel] = fresh(travelAll, 5);
  const [foodLead, ...food] = fresh(foodAll, 7);
  const [transportLead, ...transportRest] = transport;
  const featured = guides[0] as Guide | undefined;
  const cities = cityCards.map((card) => ({
    ...card,
    category: { ...card.category, name: cityPicks.find((c) => c.slug === card.slug)?.city ?? card.category.name },
  }));

  return (
    <>
      <JsonLd data={structuredData} />
      <ItHero />

      {featured && <ItFeaturedGuide guide={featured} />}

      <HomeSection labelledBy="ultime-storie-title" className="scroll-mt-24">
        <div id="ultime-storie" className="scroll-mt-32" />
        <SectionHeader
          id="ultime-storie-title"
          label="Dalla redazione"
          title="Ultime storie"
          description="Gli articoli aggiornati più di recente. Alcuni sono per ora disponibili solo in inglese: lo indichiamo su ogni scheda."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((article) => (
            <li key={article.slug}>
              <StoryCard article={article} locale="it" byline={byline(article)} />
            </li>
          ))}
        </ul>
      </HomeSection>

      {travelLead && (
        <HomeSection labelledBy="viaggi-title" className="border-t border-border">
          <SectionHeader
            id="viaggi-title"
            label="Viaggi"
            title="Viaggi"
            description="Itinerari, destinazioni e idee per scoprire l'Italia con tempi e ritmi diversi."
            action={{ label: "Tutti i viaggi", href: itRoutes.section("travel") }}
          />
          <StoryCard article={travelLead} variant="feature" locale="it" className="mt-10" />
          <StoryGrid articles={travel} columns={4} showExcerpt={false} compactOnMobile locale="it" className="mt-10 sm:mt-14" />
        </HomeSection>
      )}

      <HomeSection labelledBy="citta-title" tone="sand">
        <SectionHeader
          id="citta-title"
          label="Città"
          title="Città italiane"
          description="Itinerari di uno o più giorni, quartieri da conoscere e consigli pratici per le città più visitate."
          action={{ label: "Tutte le città", href: itRoutes.section("cities") }}
        />
        <StoryGrid articles={cities} columns={4} showExcerpt={false} compactOnMobile locale="it" className="mt-10" />
      </HomeSection>

      {foodLead && (
        <HomeSection labelledBy="cibo-title">
          <SectionHeader
            id="cibo-title"
            label="Cibo e Bevande"
            title="Cibo e Bevande"
            description="Dalla cucina regionale al caffè al banco, dalle tradizioni di famiglia ai prodotti che raccontano un territorio."
            action={{ label: "Tutto su cibo e bevande", href: itRoutes.section("food") }}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <StoryCard article={foodLead} variant="lead" locale="it" className="lg:col-span-7" />
            <ul className="grid content-start gap-6 lg:col-span-5">
              {food.map((article) => (
                <li key={article.slug}>
                  <StoryCard article={article} variant="compact" locale="it" />
                </li>
              ))}
            </ul>
          </div>
        </HomeSection>
      )}

      {transportLead && (
        <HomeSection labelledBy="trasporti-title" tone="ink">
          <SectionHeader
            id="trasporti-title"
            label="Trasporti"
            title="Muoversi in Italia"
            description="Treni, auto, aeroporti e traghetti: le informazioni pratiche per spostarsi senza sorprese."
            action={{ label: "Tutto sui trasporti", href: itRoutes.section("transport") }}
            tone="dark"
          />
          <StoryCard article={transportLead} variant="feature" tone="dark" showRank locale="it" className="mt-10" />
          <StoryGrid
            articles={transportRest}
            columns={4}
            tone="dark"
            showRank
            compactOnMobile
            locale="it"
            className="mt-10 sm:mt-14"
          />
        </HomeSection>
      )}

      <HomeSection labelledBy="guide-title" className="border-t border-border">
        <SectionHeader
          id="guide-title"
          label="Guide pratiche"
          title="Guide pratiche"
          description={
            <>
              Le nostre guide di riferimento per organizzare il viaggio. Ognuna riporta il Guide Rank,
              il nostro indice editoriale di utilità e completezza.{" "}
              <Link
                href={`${routes.about}#guide-rank`}
                hrefLang="en"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Che cos&apos;è il Guide Rank?
              </Link>{" "}
              <span className="text-[14px]">(in inglese)</span>
            </>
          }
          action={{ label: "Tutte le guide", href: itRoutes.guides }}
        />
        <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <StoryCard article={guide} variant="standard" showRank locale="it" />
            </li>
          ))}
        </ul>
      </HomeSection>

      <ItRegions regions={regions} />

    </>
  );
}
