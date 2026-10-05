import { bestTimeToVisitItaly } from "@/data/content/best-time-to-visit-italy";
import { bolognaInTwoDays } from "@/data/content/bologna-in-two-days";
import { completeItalyTravelGuide } from "@/data/content/complete-italy-travel-guide";
import { drivingInItaly } from "@/data/content/driving-in-italy";
import { italianCoffeeCulture } from "@/data/content/italian-coffee-culture";
import { ferriesInItaly } from "@/data/content/ferries-in-italy";
import { florenceForFirstTimers } from "@/data/content/florence-for-first-timers";
import { gettingBetweenItalianCities } from "@/data/content/getting-between-italian-cities";
import { italianRegionalWines } from "@/data/content/italian-regional-wines";
import { italyAirportTransfers } from "@/data/content/italy-airport-transfers";
import { italianFoodMarkets } from "@/data/content/italian-food-markets";
import { italianFoodTraditions } from "@/data/content/italian-food-traditions";
import { italyByTrain } from "@/data/content/italy-by-train";
import { italyTravelPlanningChecklist } from "@/data/content/italy-travel-planning-checklist";
import { italyTripCost } from "@/data/content/italy-trip-cost";
import { lakeComoWeekend } from "@/data/content/lake-como-weekend";
import { milanBeyondTheDuomo } from "@/data/content/milan-beyond-the-duomo";
import { naplesFirstVisit } from "@/data/content/naples-first-visit";
import { palermoMarketsMonuments } from "@/data/content/palermo-markets-monuments";
import { romeInThreeDays } from "@/data/content/rome-in-three-days";
import { romanPastaClassics } from "@/data/content/roman-pasta-classics";
import { neapolitanPizza } from "@/data/content/neapolitan-pizza";
import { sicilyFoodTraditions } from "@/data/content/sicily-food-traditions";
import { traditionalItalianDesserts } from "@/data/content/traditional-italian-desserts";
import { turinFirstVisit } from "@/data/content/turin-first-visit";
import { veronaFirstVisit } from "@/data/content/verona-first-visit";
import { veniceQuieterNeighbourhoods } from "@/data/content/venice-quieter-neighbourhoods";
import { visitingTheDolomites } from "@/data/content/visiting-the-dolomites";
import type { ArticleContent, ContentBlock } from "@/lib/types";

// Article bodies keyed by slug. Rebuilt articles live in their own files;
// the short inline bodies below belong to unpublished drafts (see
// unpublishedSlugs in data/articles.ts) awaiting a rewrite.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const tip = (text: string, title = "Tip"): ContentBlock => ({ type: "callout", title, text });

export const articleContent: Record<string, ArticleContent> = {
  // ——— Guides ———
  // Full guide lives in its own file.
  "italy-by-train": italyByTrain,

  "italy-trip-cost": italyTripCost,
  "best-time-to-visit-italy": bestTimeToVisitItaly,
  "italy-airport-transfers": italyAirportTransfers,

  "driving-in-italy": drivingInItaly,
  "italy-travel-planning-checklist": italyTravelPlanningChecklist,
  "getting-between-italian-cities": gettingBetweenItalianCities,

  // Cornerstone guide — full content lives in its own file.
  "complete-italy-travel-guide": completeItalyTravelGuide,

  "rome-in-three-days": romeInThreeDays,
  "visiting-the-dolomites": visitingTheDolomites,

  // ——— Travel ———
  "amalfi-coast-calmer-visit": {
    body: [
      p("The Amalfi Coast is spectacular, and in summer it can be crowded. With the right timing and base, it's possible to enjoy it at a gentler pace."),
      h2("Go in spring or autumn"),
      p("May, June, September and early October bring warm weather with fewer visitors than July and August. Ferries run on a seasonal timetable, so check services if you're travelling early or late in the year."),
      h2("Choose your base carefully"),
      ul("**Positano** is the most photogenic, but also the busiest and most expensive.", "**Amalfi** is central and well connected by ferry and bus.", "**Minori** and **Maiori** are quieter, with longer beaches.", "**Ravello**, above the coast, is calm in the evenings once day visitors leave."),
      h2("Leave the car behind"),
      p("The coastal road is narrow and parking is scarce. Ferries and SITA buses connect the main towns; ferries are often the more pleasant option in season. See [boat trips along the Amalfi Coast](/tours/amalfi-coast-boat-trips)."),
      tip("Start sightseeing early and plan beach or pool time for the middle of the day, when the towns are busiest.", "Timing"),
    ],
  },

  "val-dorcia-slow-road": {
    body: [
      p("The Val d'Orcia, south of Siena, is the landscape many people picture when they think of Tuscany: rolling hills, farmhouses and lines of cypress trees. It is a UNESCO World Heritage Site."),
      h2("Towns to see"),
      ul("**Pienza**, a Renaissance 'ideal town' known for its pecorino cheese", "**Montalcino**, home of Brunello di Montalcino wine", "**San Quirico d'Orcia**, with its formal gardens", "**Bagno Vignoni**, where a thermal pool fills the main square"),
      h2("Getting around"),
      p("A car is the practical option here, as bus services are limited. Distances are short, so you can see several towns in a day without rushing."),
      tip("The famous viewpoints are busiest at sunrise and sunset. Stop only where it's safe to pull over — roadside verges can be narrow.", "Photography"),
    ],
  },

  "lake-como-weekend": lakeComoWeekend,
  "puglia-itria-valley": {
    body: [
      p("The Itria Valley, in central Puglia, is known for its trulli — whitewashed stone houses with conical roofs — and for a string of hill towns a short drive apart."),
      h2("Towns to include"),
      ul("**Alberobello**, whose trulli districts are a UNESCO World Heritage Site", "**Locorotondo**, a circular old town with views over the valley", "**Cisternino**, known for its butchers' grills", "**Martina Franca**, with baroque streets and palazzi", "**Ostuni**, the 'white city' on a hill near the coast"),
      h2("Staying in a trullo"),
      p("Many trulli and masserie (farm estates) now offer accommodation. They're a memorable place to stay, but you'll need a car to get around."),
    ],
  },

  "sardinia-where-to-stay": {
    body: [
      p("Sardinia has a long and varied coastline. Where you stay shapes your trip, so it helps to know how the coasts differ."),
      h2("The coasts compared"),
      ul("**North-east**: the Costa Smeralda and the La Maddalena archipelago, with clear water and a range of resorts.", "**East**: the Gulf of Orosei, with dramatic coves often best reached by boat.", "**South**: Cagliari and long sandy beaches nearby.", "**North-west**: Alghero, a walled town with a Catalan heritage."),
      h2("Getting around"),
      p("Public transport is limited outside the main towns, so most visitors hire a car. Ferries connect Sardinia to several mainland ports, and there are airports at Cagliari, Olbia and Alghero. See [ferries in Italy](/transport/ferries-in-italy)."),
    ],
  },

  "matera-city-of-the-sassi": {
    body: [
      p("Matera, in Basilicata, is built around the Sassi — ancient districts of homes and churches carved into the rock. They're a UNESCO World Heritage Site, and Matera was a European Capital of Culture in 2019."),
      h2("Exploring the Sassi"),
      p("The two main districts are the Sasso Barisano and the Sasso Caveoso. Wear comfortable shoes: the lanes are steep and mostly steps."),
      h2("Why stay overnight"),
      p("Day visitors leave in the late afternoon, and the Sassi are at their most atmospheric in the evening when the lights come on. Several cave houses have been converted into hotels."),
    ],
  },

  // ——— Cities ———
  "venice-quieter-neighbourhoods": veniceQuieterNeighbourhoods,
  "bologna-in-two-days": bolognaInTwoDays,
  "naples-first-visit": naplesFirstVisit,
  "milan-beyond-the-duomo": milanBeyondTheDuomo,
  "florence-for-first-timers": florenceForFirstTimers,
  "palermo-markets-monuments": palermoMarketsMonuments,
  "turin-first-visit": turinFirstVisit,
  "verona-first-visit": veronaFirstVisit,
  // ——— Food ———
  "sicily-food-traditions": sicilyFoodTraditions,
  "roman-pasta-classics": romanPastaClassics,

  "italian-coffee-culture": italianCoffeeCulture,

  "italian-regional-wines": italianRegionalWines,

  "neapolitan-pizza": neapolitanPizza,

  "traditional-italian-desserts": traditionalItalianDesserts,

  "italian-food-traditions": italianFoodTraditions,

  "italian-food-markets": italianFoodMarkets,

  "how-to-choose-gelato": {
    body: [
      p("There's a lot of excellent gelato in Italy, and some that's made for show. A few signs help you tell the difference."),
      ul("**Natural colours** — pistachio should look olive-brown rather than bright green, and banana greyish rather than yellow.", "**Covered or flat containers** — many artisan shops keep gelato in covered metal tubs rather than piled high.", "**Seasonal flavours** — fruit flavours that change with the seasons suggest fresh ingredients.", "**A short list** — fewer flavours can mean they're made daily."),
    ],
  },

  // ——— Culture ———
  "planning-a-visit-to-the-uffizi": {
    body: [
      p("Florence's Uffizi Gallery holds one of the world's greatest collections of Renaissance art. Planning ahead makes the visit far more enjoyable."),
      h2("Booking"),
      p("Buy a timed-entry ticket in advance through the official website, especially from spring to autumn. Arrive early for your slot to allow for security checks."),
      h2("Works not to miss"),
      ul("Botticelli's **The Birth of Venus** and **Primavera**", "Leonardo da Vinci's **Annunciation**", "Michelangelo's **Doni Tondo**", "Works by Caravaggio, Titian and Raphael"),
      tip("The gallery is large. Pick a few rooms to focus on rather than trying to see everything.", "Pace yourself"),
    ],
  },

  "italian-fashion-history": {
    body: [
      p("Italy has a long history of textiles and tailoring, but its modern fashion industry took shape after the Second World War."),
      h2("Florence, 1951"),
      p("In 1951, the businessman Giovanni Battista Giorgini organised a show of Italian designers in Florence for international buyers. It's widely seen as the moment Italian fashion gained international attention."),
      h2("Milan's rise"),
      p("From the 1970s, Milan became the centre of Italian ready-to-wear, and today its fashion weeks are among the most important in the world. Florence remains important for menswear and craftsmanship."),
    ],
  },

  "venice-carnival-traditions": {
    body: [
      p("Venice's Carnival takes place in the weeks before Lent, ending on Shrove Tuesday. Masks are at its heart."),
      h2("Traditional masks"),
      ul("**Bauta** — a mask covering the whole face, with a jutting chin that allowed the wearer to eat and drink", "**Moretta** — an oval black velvet mask", "**Volto** — a simple full-face mask, often white"),
      p("Masks allowed Venetians to hide their identity and social rank. Today, workshops across the city still make them by hand."),
    ],
  },

  "baroque-rome": {
    body: [
      p("In the 17th century, the Baroque transformed Rome's churches, fountains and squares. Two rival architects, Gian Lorenzo Bernini and Francesco Borromini, left their mark across the city."),
      h2("Where to see their work"),
      ul("**Piazza Navona** — Bernini's Fountain of the Four Rivers faces Borromini's church of Sant'Agnese in Agone", "**St Peter's Square** — framed by Bernini's colonnade", "**San Carlo alle Quattro Fontane** — a small church by Borromini", "**The Trevi Fountain** — designed by Nicola Salvi and completed in 1762"),
    ],
  },

  // ——— People ———
  "italian-contemporary-artists": {
    body: [
      p("Italy's influence on art didn't end with the Renaissance. In the 20th century, Italian artists helped define several modern movements."),
      h2("Arte Povera"),
      p("In the late 1960s, artists including Michelangelo Pistoletto, Jannis Kounellis and Mario Merz used everyday and natural materials, challenging traditional ideas of art. The critic Germano Celant gave the movement its name."),
      h2("Where to see contemporary art"),
      p("The **Venice Biennale**, first held in 1895, remains one of the world's most important art exhibitions. Museums such as MAXXI in Rome and the Castello di Rivoli near Turin focus on contemporary work."),
    ],
  },

  "italian-design-and-its-makers": {
    body: [
      p("Italian design became internationally known in the decades after the Second World War, when designers worked closely with manufacturers, many of them around Milan."),
      h2("Names to know"),
      ul("**Gio Ponti** — architect and designer, founder of the magazine Domus", "**Achille Castiglioni** — known for lamps and furniture with a sense of humour", "**Ettore Sottsass** — designer for Olivetti and founder of the Memphis Group"),
      h2("Design today"),
      p("Milan Design Week, held each spring alongside the Salone del Mobile furniture fair, draws designers and visitors from around the world."),
    ],
  },

  "italian-cinema-film-makers": {
    body: [
      p("After the Second World War, Italian directors changed international cinema with Neorealism: films shot on real streets, often with non-professional actors."),
      h2("Key film-makers"),
      ul("**Roberto Rossellini** — Rome, Open City (1945)", "**Vittorio De Sica** — Bicycle Thieves (1948)", "**Federico Fellini** — La Dolce Vita (1960)", "**Sergio Leone** — who reshaped the western in the 1960s"),
      p("Rome's Cinecittà studios, opened in 1937, have hosted Italian and international productions for decades. The Venice Film Festival, first held in 1932, is the world's oldest film festival."),
    ],
  },

  // ——— Lifestyle ———
  "the-passeggiata": {
    body: [
      p("In the early evening, in towns across Italy, people put on something smart and walk slowly along the main street or around the piazza. This is the passeggiata."),
      p("It's a chance to see friends, stop for an aperitivo or a gelato and simply be out in town. There's no destination — the walk is the point."),
      tip("Join in: find the main street (often called the corso) around sunset and slow down.", "How to join in"),
    ],
  },

  "aperitivo-ritual": {
    body: [
      p("Aperitivo is the early-evening drink before dinner, usually served with something to eat."),
      h2("What to drink"),
      ul("**Spritz** — prosecco with Aperol, Campari or another bitter, popular across the north-east", "**Vermouth** — closely associated with Turin", "**Negroni** — gin, vermouth and Campari", "A glass of local wine"),
      h2("What you get"),
      p("Many bars serve small snacks with your drink. Some offer a larger buffet for a set price, especially in Milan."),
    ],
  },

  // ——— Transport ———
  "ferries-in-italy": ferriesInItaly,

  // ——— Tours ———
  "venice-gondola-rides": {
    body: [
      p("A gondola ride is one of Venice's classic experiences. Knowing how it works helps you avoid surprises."),
      h2("Fares"),
      p("The city sets standard gondola fares for a ride of about 30 minutes, with a higher rate in the evening. Fares are per gondola, not per person, so sharing reduces the cost. Agree the price and duration before you set off."),
      h2("The traghetto"),
      p("For a brief taste of a gondola for much less, take a traghetto — a gondola ferry that crosses the Grand Canal at a few points. Passengers traditionally stand."),
    ],
  },

  "amalfi-coast-boat-trips": {
    body: [
      p("Seeing the Amalfi Coast from the water shows off its cliffs and villages at their best — and avoids the traffic on the coastal road."),
      h2("Your options"),
      ul("**Public ferries** — the cheapest way to travel between towns in season", "**Group boat tours** — often include swimming stops and visits to Capri", "**Private boats** — more expensive but flexible"),
      tip("Sea conditions can cancel boat trips. Check the forecast and cancellation terms before you book.", "Weather"),
    ],
  },

  "chianti-wine-day": {
    body: [
      p("The Chianti hills between Florence and Siena are one of Italy's best-known wine areas. Chianti Classico bottles carry a black rooster symbol."),
      h2("Villages to visit"),
      ul("Greve in Chianti", "Radda in Chianti", "Castellina in Chianti"),
      h2("Visiting estates"),
      p("Most wineries require booking for tastings. If you don't want anyone to drive, join an organised tour or hire a driver."),
    ],
  },

  // ——— Things to do ———
  "opera-at-the-verona-arena": {
    body: [
      p("Verona's Arena is a Roman amphitheatre from the 1st century AD. Since 1913, it has hosted an opera festival each summer."),
      h2("Tickets and seats"),
      p("Seats range from numbered seats close to the stage to unreserved stone steps higher up. Book through the official website."),
      h2("What to bring"),
      ul("A cushion if you're sitting on the stone steps", "A light layer for the evening", "Patience — performances can finish late"),
    ],
  },

  "a-year-of-italian-festivals": {
    body: [
      p("Italy's calendar is full of festivals, many with centuries of history. Dates change from year to year — always check local sources before planning around them."),
      h2("Winter and spring"),
      ul("**Venice Carnival** — in the weeks before Lent. See [the traditions behind the masks](/culture/venice-carnival-traditions).", "**Scoppio del Carro**, Florence — on Easter Sunday"),
      h2("Summer"),
      ul("**Palio di Siena** — horse races in Piazza del Campo on 2 July and 16 August", "**Verona's opera festival** — see [opera at the Verona Arena](/things-to-do/opera-at-the-verona-arena)"),
      h2("Autumn"),
      ul("**Regata Storica**, Venice — a historic boat race in September", "**Truffle fairs** — including Alba's, in Piedmont"),
    ],
  },
};
