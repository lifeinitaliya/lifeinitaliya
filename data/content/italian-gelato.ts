import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Italian Gelato". Replaces a short gelato placeholder that was never
// published. Checked in October 2026 against: Law no. 34 of 11 March 2026,
// art. 16 (use of "artigianale"), and the Ministry of Enterprises and Made in
// Italy (MIMIT) FAQ on it; D.Lgs. 231/2017 art. 19 (ingredient and allergen
// information for unpackaged food, including gelato); 21 CFR 135.110 (the US
// legal standard for ice cream); the University of Guelph's ice cream
// technology text on overrun; Elizabeth David's Harvest of the Cold Months on
// the Catherine de' Medici story; Antonio Latini's Lo scalco alla moderna
// (Naples, 1692–94); the Carpigiani Gelato Museum; Storia e Memoria di Bologna
// on Carpigiani; the EU eAmbrosia register for nut and citrus PDO/PGI names;
// VisitBergamo on stracciatella. No serving temperatures or air percentages
// are given because we found no authoritative figures for gelato; no
// nutritional claims are made; no gelaterias are named or ranked.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-gelato";

export const italianGelato: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What is Italian gelato?"),
    answer("**Gelato is Italy's tradition of frozen desserts made from a mix of milk, sugar and flavourings — sometimes with cream or egg yolks — churned as it freezes and served soft, usually from a counter where it's made fresh.** The word simply means \"frozen\", and in Italy it covers everything from a pistachio cone in a city centre to a family-made fruit flavour in a village bar. Abroad, \"gelato\" has come to mean a particular style: denser, silkier and less cold than much commercial ice cream."),
    p("Gelato isn't a different substance from ice cream so much as a different set of habits. Recipes, equipment and serving are tuned for small batches eaten within days, often on the premises; much ice cream elsewhere is made to last for weeks in a freezer. Those choices — in fat, air and temperature — explain most of the differences people notice in the mouth."),
    {
      type: "facts",
      title: "Italian gelato at a glance",
      rows: [
        { label: "Base", value: "Milk and sugar, often with cream; egg yolks in custard-style flavours" },
        { label: "Fruit flavours", value: "Often water-based sorbetto; some fruit flavours contain milk" },
        { label: "Texture", value: "Dense and soft, served from shallow trays or covered steel wells" },
        { label: "Where", value: "Gelaterie (gelato shops), and many bars and pastry shops" },
        { label: "How it's served", value: "In a cone (cono) or cup (coppetta), often with two or three flavours" },
        { label: "The law on \"artigianale\"", value: "Since April 2026 the word is reserved to registered artisan businesses that make the product themselves; there is still no legal recipe" },
      ],
    },
    p("This guide covers what gelato is, where it comes from, how it's made, what the labels mean, and how to order it in Italy. For the country's other desserts, see [traditional Italian desserts](/food/traditional-italian-desserts)."),
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Gelato vs ice cream",
        "A short history of Italian gelato",
        "What does \"artigianale\" really mean?",
        "How to recognise a good gelateria",
        "How to order gelato in Italy",
        "Allergies and dietary needs",
      ],
    },

    // ——— 2 ———
    h2("Gelato vs ice cream"),
    p("There's no universal legal line between the two. In the United States, a product sold as \"ice cream\" must by law contain at least 10% milkfat, and a minimum weight per gallon limits how much air it can hold. Italy has no equivalent legal recipe for gelato, and commercial products sold as gelato around the world vary widely. So the comparison below describes **broad tendencies**, not rules."),
    table(
      ["Characteristic", "Traditional-style Italian gelato", "Typical commercial ice cream"],
      [
        ["Fat", "Varies; milk-based gelato is often made with more milk and less cream", "Varies; premium styles are often rich in cream"],
        ["Air (overrun)", "Generally lower, so it's denser", "Can be much higher, especially in economy products"],
        ["Serving temperature", "Generally served less cold, so it's softer", "Generally served colder and firmer"],
        ["Texture", "Dense, soft, elastic", "From dense to light and airy"],
        ["Shelf life", "Made in small batches, sold within days", "Often made to keep for weeks or months"],
        ["Where it's made", "Often in the shop's own workshop", "Usually in a factory"],
      ],
      "Broad tendencies only: recipes and products vary on both sides.",
    ),
    p("**Is gelato lower in fat or healthier?** Many milk-based gelato recipes use more milk and less cream than rich ice creams, so they can be lower in fat — but not always, and gelato typically contains plenty of sugar. Flavours such as chocolate, nut or custard can be rich. We don't call gelato healthier: it's a dessert, and a good one."),
    image("gelato-steel-tubs", "Stainless-steel trays of gelato in a display case, with pale nut, cream and pink fruit flavours smoothed flat", true),

    // ——— 3 ———
    h2("A short history of Italian gelato"),
    h3("Snow, ice and sherbets"),
    p("Long before freezers, cooling drinks and foods with snow and ice was a luxury of courts and the wealthy around the Mediterranean and beyond. Snow was gathered in winter and stored in pits or ice-houses for summer use. The Italian word *sorbetto* comes, through Turkish, from the Arabic family of words for a drink — a reminder that sweet iced drinks travelled widely before anyone churned a modern gelato."),
    p("What changed the story was a technique: chilling a container in a mixture of ice and salt, which gets much colder than ice alone, while stirring the mixture inside so that it freezes smoothly. That made frozen desserts possible on a larger scale."),
    h3("Florence, the Medici and Buontalenti"),
    p("Florence's claim is the best known. Popular tradition credits the Renaissance architect and designer **Bernardo Buontalenti** with creating a frozen cream for a Medici celebration in the sixteenth century, and some Florentine gelaterias name a cream flavour after him. Even the Carpigiani Gelato Museum presents Buontalenti as \"credited with\" egg-cream gelato rather than citing a surviving recipe. It's a cherished local tradition, not documented history."),
    p("The story that **Catherine de' Medici** took gelato to France when she married in 1533 is weaker still. The food historian Elizabeth David, in her history of ice and ices, *Harvest of the Cold Months*, traced it to nineteenth-century France and found no historical basis for it."),
    h3("Naples, Paris and the first recipes"),
    p("Firmer evidence comes later. In Naples, the steward **Antonio Latini** published recipes for *sorbetti* in his book *Lo scalco alla moderna* (1692–94), and remarked that in Naples everyone seemed to be born with a talent for making them. In Paris, the Sicilian-born **Francesco Procopio dei Coltelli** opened the Café Procope in 1686, where ices were sold alongside coffee; popular accounts sometimes say he \"invented gelato\", which is more than the evidence shows. Neither claim makes a single city the birthplace of gelato: frozen desserts developed in several places at once."),
    h3("Gelato makers and machines"),
    p("In the nineteenth and twentieth centuries, gelato makers from the mountain valleys of the Veneto and Friuli — the Val di Zoldo and Cadore among them — took the trade across Europe, setting up seasonal gelato shops abroad, as the Gelato Museum records. At home, mechanisation transformed the craft: in Bologna, the Carpigiani company was founded in 1946 to build an automatic gelato machine designed by Bruto Carpigiani, and the city's area remains a centre of gelato equipment. Today the same style of batch freezer is used in small shops and large producers alike."),

    // ——— 4 ———
    h2("How gelato is made"),
    p("Every gelateria works a little differently, but most follow the same basic sequence."),
    {
      type: "steps",
      items: [
        { title: "Choosing ingredients", text: "Milk, cream, sugars and the flavouring — nuts, fruit, chocolate, coffee — plus, in many shops, small amounts of stabilisers and emulsifiers that help texture." },
        { title: "Mixing and balancing", text: "The ingredients are weighed and combined. Balancing sugar, fat and solids is the gelato maker's real skill: it decides how soft, sweet and smooth the result will be." },
        { title: "Pasteurising", text: "Milk-based mixes are heated to make them safe, then cooled. Many shops use machines that pasteurise and cool in one cycle." },
        { title: "Maturing", text: "Some makers rest the mix in the cold for a few hours so it thickens and develops flavour." },
        { title: "Freezing and churning", text: "The mix goes into a batch freezer, which freezes it while a paddle turns it, breaking up ice crystals and folding in some air." },
        { title: "Storing", text: "The gelato is extracted, shaped into trays or covered wells and kept at a temperature at which it stays scoopable." },
        { title: "Serving", text: "It's served with a flat spatula (*spatola*) rather than a round scoop, pressed into a cone or cup." },
      ],
    },
    p("Many gelaterias, including good ones, build some flavours on ready-made **bases** or **semi-finished products** (*semilavorati*) — powders or pastes that supply sugars, stabilisers or flavour. Others make everything from raw ingredients. Neither is illegal, and the difference isn't always visible; the ingredient list is the best guide (see below)."),

    // ——— 5 ———
    h2("What goes into traditional gelato"),
    p("Most gelato falls into two families."),
    {
      type: "compare",
      title: "Milk-based gelato and sorbetto",
      columns: [
        {
          title: "Milk-based gelato (gelato al latte)",
          items: [
            "Milk, often some cream, and sugars",
            "Egg yolks in custard flavours such as crema and zabaione",
            "Flavourings: nuts, chocolate, coffee, vanilla, biscuits, some fruit",
            "Richer, rounder flavour; dense and creamy",
          ],
        },
        {
          title: "Sorbetto (fruit and water-based)",
          items: [
            "Water, sugars and fruit pulp or juice",
            "No milk in the classic recipe",
            "Often lemon, strawberry, peach, melon or other seasonal fruit",
            "Clean, intense flavour; smooth but less creamy",
          ],
        },
      ],
    },
    p("Two cautions. **Not every fruit flavour is a sorbetto**: some shops make fruit gelato with milk, and a menu that says *fragola* (strawberry) doesn't tell you which. And **not every sorbetto is automatically vegan**: recipes and bases can include milk proteins, egg white or other animal-derived ingredients, and sorbetto is often made on the same equipment as milk flavours. Ask, and check the ingredient list."),
    p("Seasonality matters for fruit. A good fruit sorbetto tastes of ripe fruit; strawberries in spring, peaches and melon in summer, figs and grapes in autumn and citrus in winter are signs that a shop follows the season — though frozen fruit purées make many fruits available all year."),

    // ——— 6 ———
    h2("Why texture and temperature matter"),
    p("Two technical ideas explain a lot about gelato."),
    p("**Air.** All churned frozen desserts contain air, beaten in while the mix freezes. Food scientists call the increase in volume **overrun**: if a litre of mix becomes 1.5 litres of finished product, the overrun is 50%. Some commercial ice cream approaches 100%, doubling the volume. Gelato made in batch freezers generally has noticeably less air, which makes it denser and more intensely flavoured per spoonful. It does contain air, however — \"gelato has no air\" is a myth."),
    p("**Temperature.** Gelato is generally kept and served less cold than ice cream that's scooped from a deep freezer. That's partly because its recipes are balanced to stay soft at those temperatures. A warmer temperature makes it softer and more elastic, releases more aroma and makes sweetness and flavour easier to taste — the same reason very cold food tastes muted. It also means gelato is best eaten soon after it's served, and doesn't survive a long walk in summer."),

    // ——— 7 ———
    h2("Classic Italian gelato flavours"),
    p("Italian counters often run to dozens of flavours, but a few classics appear almost everywhere. These are descriptions, not a ranking."),
    image("pistachio-gelato-bowl", "A scoop of pale green pistachio gelato in a glass bowl, scattered with chopped pistachios, with a spoon beside it"),
    h3("Pistachio"),
    p("Pistachio is one of the flavours by which many people judge a gelateria. Its taste depends on the nuts — their origin, their roasting and how much paste goes into the mix. Sicily is famous for pistachios: **Pistacchio Verde di Bronte**, grown on the slopes of Etna, has been an EU Protected Designation of Origin since 2010, and **Pistacchio di Raffadali**, near Agrigento, since 2021. Some gelaterias name their pistachio's origin; that's useful information, but a name on a sign is a claim, not proof. More on Sicily's pistachios in [Sicilian food traditions](/food/sicily-food-traditions)."),
    p("**Colour isn't a reliable test.** You'll often read that real pistachio gelato is brownish and bright green means colouring. It's true that some products are coloured, and that heavily roasted pistachio paste gives a browner, olive tone. But pistachio kernels are naturally green, and gelato made with lightly roasted, high-quality nuts can be quite green too. The ingredient list will tell you whether colourings were used; the colour alone won't."),
    h3("Nocciola (hazelnut)"),
    p("Hazelnut gelato is a staple, especially in the north. Italy has several protected hazelnuts, including the **Nocciola Piemonte** (PGI) from Piedmont, the **Nocciola Romana** (PDO) from Lazio and the **Nocciola di Giffoni** (PGI) from Campania. In Turin, hazelnut and chocolate meet in *gianduja*, which also appears as a gelato flavour; see [Turin for first-time visitors](/cities/turin-first-visit)."),
    image("hazelnuts", "A close-up of whole hazelnuts in their brown shells, piled together"),
    h3("Stracciatella"),
    p("Milk gelato with fine, irregular shards of chocolate, made by drizzling melted chocolate into the gelato as it's churned so that it hardens into flakes. Bergamo claims it: the city's gelato makers and tourist board say it was created there in 1961 by Enrico Panattoni at La Marianna, inspired by *stracciatella*, the Roman egg-drop soup."),
    h3("Fior di latte"),
    image("fior-di-latte-scoops", "Two scoops of white gelato in a pale ceramic bowl on a linen cloth, with a spoon beside it"),
    p("\"Flower of milk\": gelato made from milk, cream and sugar with no added flavouring and no eggs. It's the plainest flavour and a good test of the quality of the milk and the maker's balance of sugar and fat — and the base for stracciatella and many others."),
    h3("Crema"),
    p("A custard-style gelato made with egg yolks, sometimes scented with lemon zest or vanilla. Not to be confused with *panna*, which is cream (and, at the counter, whipped cream)."),
    h3("Chocolate and other classics"),
    ul(
      "**Cioccolato** — from milk chocolate to intense dark versions; some shops make a dairy-free chocolate sorbetto.",
      "**Caffè** — coffee gelato; and *affogato*, gelato \"drowned\" in a shot of espresso. See [Italian coffee](/food/italian-coffee-culture).",
      "**Zabaione** — a custard flavour of egg yolks, sugar and fortified wine, usually Marsala; it may contain alcohol.",
      "**Limone** and **fragola** — lemon and strawberry, often as sorbetto. Italy's protected lemons include the Limone di Sorrento and Limone Costa d'Amalfi, both PGI.",
      "**Bacio**, **gianduia**, **malaga** (rum and raisin), **amarena** (with sour cherries) — familiar names on many counters.",
    ),

    // ——— 8 ———
    h2("What does \"artigianale\" really mean?"),
    p("*Gelato artigianale* — artisan gelato — is the most common claim in Italian gelaterias. Until recently, the word had no specific legal meaning for gelato at all. Since **7 April 2026**, Article 16 of Italy's **Law no. 34 of 11 March 2026** has reserved the words *artigianale* and *artigianato* in business names, signs and marketing to firms registered as artisan businesses that make the product themselves."),
    p("What the law does **not** do is define a gelato recipe. It doesn't ban ready-made bases, colourings or flavourings, or set rules for ingredients or methods. A registered artisan business can still make gelato from powdered bases and call it artisanal. The Ministry of Enterprises' own guidance even uses gelato as an example: a gelateria that isn't registered as an artisan business may not call its own gelato *artigianale*, but it can describe it as *di produzione propria* (\"made in-house\") or *di qualità*."),
    note("\"Artigianale\" now tells you something about the business that makes the gelato — not what's in it. For that, ask to see the ingredient list, which Italian rules require gelaterias to make available.", "In short"),

    // ——— 9 ———
    h2("How to recognise a good gelateria"),
    p("No single sign proves quality, and some of the most common rules of thumb are unreliable. These are the signals worth weighing together."),
    ul(
      "**Ingredient transparency.** Italian rules require unpackaged foods, including gelato, to show their ingredients, with allergens highlighted — on a sign, a register or a screen. A shop that shows its list readily, and whose lists are short and recognisable, gives you something to go on.",
      "**Seasonal fruit.** Fruit flavours that change with the season suggest fresh fruit; the same twenty fruit flavours all year suggest otherwise.",
      "**Sensible colours.** Strong, uniform colours can come from colourings — the ingredient list will say. But natural colours vary, and colour alone proves nothing.",
      "**Storage and display.** Gelato should look smooth and freshly worked, not icy, crusty or melting at the edges. Some traditional shops keep it in covered steel wells (*pozzetti*), which protect it but hide it from view.",
      "**Texture and taste.** Good gelato is smooth and elastic, not grainy or sticky; flavours should taste of what they claim, and not overwhelmingly of sugar.",
      "**Turnover.** A busy shop sells its gelato quickly, so it's fresher.",
      "**Claims that match.** \"Bronte pistachio\", \"fresh fruit\" or \"made daily\" are worth more when the ingredient list and the counter bear them out.",
    ),
    image("gelato-display-pistachio", "A gelato display case with a vivid green flavour beside paler nut, biscuit and cream flavours in steel trays, each with a label"),
    h3("Gelato in tourist centres"),
    p("Location doesn't decide quality. Some of the best-regarded gelaterias in Italy are on busy streets in historic centres, and some neighbourhood shops are ordinary. Judge the gelato, not the address: read the ingredients, look at the fruit flavours, and taste before choosing a large portion if the shop offers it."),

    // ——— 10 ———
    h2("Gelato myths and marketing claims"),
    table(
      ["Claim", "What's actually true"],
      [
        ["\"Bright green pistachio means artificial colouring.\"", "Not necessarily. Colourings are used in some products, but pistachios are naturally green. Check the ingredient list."],
        ["\"Tall mountains of gelato always mean poor quality.\"", "High piles can depend on more air, more stabilisers or a colder display, but they don't prove poor quality, and flat trays don't prove good quality."],
        ["\"Covered steel wells always mean better gelato.\"", "Covered wells protect gelato from air and light and are used by many traditional shops, but the container doesn't make the gelato."],
        ["\"Artigianale means made from scratch.\"", "It now means the business is a registered artisan firm that makes the product itself. It doesn't rule out ready-made bases."],
        ["\"Gelato is always healthier than ice cream.\"", "It can be lower in fat, but it contains plenty of sugar and some flavours are rich. It's a dessert."],
        ["\"All fruit gelato is dairy-free.\"", "Many fruit flavours are sorbetto, but some contain milk, and equipment is often shared."],
      ],
    ),

    // ——— 11 ———
    h2("How to order gelato in Italy"),
    p("Ordering is simple, but the system varies from shop to shop."),
    ul(
      "**Pay first or pay after.** In some gelaterias you pay at the till (*cassa*), get a receipt (*scontrino*) and show it at the counter; in others you order first and pay at the end. Look at what the people in front of you do.",
      "**Choose the size.** Sizes are often sold by price or by the number of flavours (*gusti*): small, medium or large, or *piccolo*, *medio* and *grande*. There's no national system, and a \"small\" in one shop may hold two flavours and in another one.",
      "**Choose cone or cup.** A *cono* (cone) or a *coppetta* (cup).",
      "**Choose your flavours.** Usually two or three, depending on the size. The server presses them in with a spatula.",
      "**Panna or not.** You may be asked whether you want whipped cream on top: *con panna* or *senza panna*.",
      "**Tasting.** Many shops will let you taste a flavour on a small spoon if you ask, especially when it isn't busy — but it's a courtesy, not a right.",
    ),
    table(
      ["Italian", "English"],
      [
        ["Vorrei un cono piccolo, per favore.", "I'd like a small cone, please."],
        ["Una coppetta media, per favore.", "A medium cup, please."],
        ["Quanti gusti posso prendere?", "How many flavours can I have?"],
        ["Due gusti: pistacchio e nocciola.", "Two flavours: pistachio and hazelnut."],
        ["Posso assaggiare?", "May I taste it?"],
        ["Con panna, per favore. / Senza panna, grazie.", "With whipped cream, please. / No cream, thanks."],
        ["Posso vedere gli ingredienti?", "Can I see the ingredients?"],
      ],
    ),

    // ——— 12 ———
    h2("Cono, coppetta and panna"),
    image("pisa-gelato-coppetta", "A green paper cup of gelato with a small orange plastic spoon, on a counter in Pisa"),
    p("**Cono or coppetta?** Neither is more \"Italian\". A cone is easier to eat while walking and adds the crunch of the wafer; a cup is tidier, better for soft flavours on a hot day and for children, and avoids the gluten in the cone. Some shops offer special cones — dipped in chocolate or coated with nuts — at an extra cost. In a cup you'll be given a small flat spoon, the *paletta*."),
    p("**Panna** means cream, and at a gelateria it means whipped cream, offered as a topping. Some shops include it at no extra charge, others charge for it; in some it's a dollop on top, in others it's piped into the bottom of the cone too. Don't assume it's free or that it will be offered — just ask, *con panna?*"),
    image("siena-gelato-cone-street", "A hand holding a cone of gelato up in a narrow, shaded street of old stone buildings in Siena"),

    // ——— 13 ———
    h2("Gelato, sorbetto and granita"),
    table(
      ["", "Gelato", "Sorbetto", "Granita"],
      [
        ["Main base", "Milk, sugar, often cream; eggs in some flavours", "Water, sugar, fruit", "Water, sugar and a flavouring: fruit, nuts, coffee"],
        ["Texture", "Dense, creamy, smooth", "Smooth, less creamy", "Crystalline: from fine and spoonable to coarser ice"],
        ["How it's made", "Churned in a batch freezer", "Churned like gelato", "Frozen while stirred so that ice crystals form"],
        ["How it's eaten", "Cone or cup", "Cone, cup or between courses", "From a glass with a spoon, often with a brioche"],
        ["Where", "All over Italy", "All over Italy", "A Sicilian speciality, now found more widely"],
      ],
    ),
    p("**Granita is not melted gelato.** It's a semi-frozen preparation of water, sugar and a flavouring, stirred as it freezes so that it forms small ice crystals — from almost creamy in much of eastern Sicily to coarser elsewhere. Classic flavours include lemon, almond, coffee, pistachio, mulberry and chocolate. In summer, many Sicilians eat it for breakfast with a soft *brioche col tuppo*; coffee granita often comes with whipped cream."),

    // ——— 14 ———
    h2("Regional gelato traditions"),
    p("Gelato is made all over Italy, and many flavours are national. But some traditions are strongly regional."),
    ul(
      "**Sicily** — granita and brioche; *brioche con gelato*, gelato served in a soft bun; and flavours built on the island's almonds, pistachios, citrus and mulberries. More in [Sicilian food traditions](/food/sicily-food-traditions).",
      "**Naples and Campania** — a long tradition of sorbetti: Latini's 1690s recipes were written in Naples, and lemon from Sorrento and the Amalfi Coast is a natural flavour. Naples is also a city of pastry shops; see [Naples for first-time visitors](/cities/naples-first-visit).",
      "**Florence and Tuscany** — the Buontalenti tradition, and a cream flavour named after him in some shops; see [Florence for first-timers](/cities/florence-for-first-timers).",
      "**Rome** — gelato is part of a day of walking between sights; see [Rome in three days](/guides/rome-in-three-days).",
      "**Piedmont** — hazelnuts and gianduja, from the PGI Nocciola Piemonte.",
      "**Lombardy** — Bergamo's stracciatella.",
      "**Emilia-Romagna** — the Bologna area's gelato-machine industry and the Carpigiani Gelato Museum near Bologna.",
      "**Veneto and Friuli** — the valleys whose gelato makers took the trade across Europe.",
    ),
    p("These are associations, not borders: you'll find pistachio in Turin and gianduia in Palermo."),

    // ——— 15 ———
    h2("Allergies and dietary needs"),
    p("Gelato can be complicated for allergies, because flavours share equipment, spatulas and display cases. **No flavour is guaranteed free of an allergen just because its main ingredient doesn't contain it.**"),
    ul(
      "**Milk allergy** — milk is in most flavours. Some sorbetti are made without it, but cross-contact with milk is likely in a shared display and on shared equipment.",
      "**Lactose intolerance** — some shops offer lactose-free flavours; sorbetti usually contain no milk, but check.",
      "**Nut allergy** — nuts are everywhere: in pistachio, hazelnut, gianduia and many others, and in some cones and toppings. Shared spatulas can carry traces. Ask the server to use a clean spatula and, if your allergy is serious, consider whether the risk is acceptable.",
      "**Egg allergy** — crema and zabaione contain egg yolks; some bases and sorbetti may contain egg.",
      "**Gluten** — gelato itself is often gluten-free, but cones, biscuit flavours and some toppings aren't. A cup avoids the cone; some shops offer gluten-free cones.",
      "**Vegan** — many sorbetti and some nut or chocolate flavours are made without dairy or egg, but recipes vary and equipment is shared. Ask for the ingredient list.",
    ),
    p("Italian rules require gelaterias to make the ingredient list of each flavour available, with allergens highlighted. Ask to see it: *Posso vedere gli ingredienti?*"),
    table(
      ["Italian", "English"],
      [
        ["Sono allergico / allergica a…", "I'm allergic to… (man / woman)"],
        ["…al latte / alla frutta a guscio / alle uova", "…milk / nuts / eggs"],
        ["Ci sono gusti senza latte?", "Are there flavours without milk?"],
        ["È senza lattosio?", "Is it lactose-free?"],
        ["Avete coni senza glutine?", "Do you have gluten-free cones?"],
        ["Può usare una spatola pulita?", "Could you use a clean spatula?"],
      ],
    ),

    // ——— 16 ———
    h2("Gelato on an Italy trip"),
    p("Gelato fits naturally into a day of sightseeing: an afternoon break in the heat, a walk after dinner — when Italian streets fill with people doing the same — or a stop on the way back from a market. In summer many gelaterias stay open late; in winter some close or shorten their hours, especially away from the big cities."),
    image("gelato-cone-red-wall", "A hand holding up a cone of pale gelato in front of a red-painted wall between two windows with wooden shutters"),
    p("It's one pleasure among many: Italian food is also coffee at the counter, pastries, markets and long lunches. See [Italian food markets](/food/italian-food-markets), [Italian food traditions](/food/italian-food-traditions) and, for wine with dinner before your gelato walk, [regional wines of Italy](/food/italian-regional-wines)."),

    // ——— 17 ———
    h2("Italian gelato vocabulary"),
    table(
      ["Italian", "Meaning"],
      [
        ["Gelato", "Italian frozen dessert; also simply \"ice cream\""],
        ["Gelateria", "Gelato shop"],
        ["Gelatiere / gelataio", "Gelato maker / gelato seller"],
        ["Gusto / gusti", "Flavour / flavours"],
        ["Cono", "Cone"],
        ["Coppetta", "Small cup"],
        ["Paletta", "The small flat spoon given with a cup"],
        ["Spatola", "The flat spatula used to serve gelato"],
        ["Panna", "Cream; at a gelateria, whipped cream"],
        ["Artigianale", "Artisan; since 2026 reserved to registered artisan businesses that make the product themselves"],
        ["Crema", "Custard-style flavour made with egg yolks"],
        ["Fior di latte", "Plain milk-and-cream flavour"],
        ["Sorbetto", "Water-and-fruit frozen dessert, usually without milk"],
        ["Granita", "Sicilian semi-frozen ice with fine or coarse crystals"],
        ["Cassa / scontrino", "Till / receipt"],
      ],
    ),
    p("Gelato rewards a little curiosity. Look past the colours and the signs, read what's in it, taste a fior di latte or a lemon sorbetto alongside the showier flavours, and you'll learn more about a gelateria in five minutes than any ranking can tell you. For the rest of the trip, see the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),
  ],

  faqs: [
    { question: "What is Italian gelato?", answer: "Italy's tradition of frozen desserts, made from milk, sugar and flavourings — sometimes with cream or egg yolks — churned as it freezes and usually served fresh from the counter. Fruit flavours are often water-based sorbetto." },
    { question: "What is the difference between gelato and ice cream?", answer: "Broadly, traditional-style gelato tends to contain less air, is served less cold and is often made with more milk and less cream, so it's dense and soft. These are tendencies, not legal rules, and products vary." },
    { question: "Is gelato healthier or lower in fat than ice cream?", answer: "Milk-based gelato is often lower in fat than rich ice creams, but not always, and it contains plenty of sugar. It's a dessert; we wouldn't call it healthier." },
    { question: "What does artigianale mean?", answer: "Since April 2026, Italian law reserves \"artigianale\" to businesses registered as artisan firms that make the product themselves. It doesn't define a recipe or rule out ready-made bases; the ingredient list tells you more." },
    { question: "Is pistachio gelato supposed to be brown, not green?", answer: "Colour isn't a reliable test. Heavily roasted pistachio gives a browner tone and some products are coloured, but pistachios are naturally green. Check the ingredient list for colourings." },
    { question: "What is fior di latte?", answer: "A plain gelato of milk, cream and sugar with no eggs and no added flavouring — a good test of a gelateria's quality." },
    { question: "What is the difference between gelato and sorbetto?", answer: "Gelato is milk-based; sorbetto is made from water, sugar and fruit, usually without milk. Not every fruit flavour is a sorbetto, and not every sorbetto is vegan." },
    { question: "What is the difference between gelato and Sicilian granita?", answer: "Granita is water, sugar and a flavouring frozen while stirred so that it forms fine ice crystals; it isn't churned into a cream like gelato. In Sicily it's often eaten for breakfast with a brioche." },
    { question: "How do you order gelato in Italy?", answer: "Choose a size (often by price or number of flavours), a cone or a cup, then two or three flavours, and say whether you want whipped cream. In some shops you pay at the till first." },
    { question: "What is the difference between a cono and a coppetta?", answer: "A cono is a cone; a coppetta is a cup. Both are equally Italian: cones are easier for walking, cups are tidier and avoid the gluten in the cone." },
    { question: "What does panna mean at a gelateria?", answer: "Whipped cream, offered as a topping. Some shops include it free, others charge; ask \"con panna?\"" },
    { question: "Is Italian gelato gluten-free?", answer: "Much gelato is gluten-free, but cones, biscuit flavours and some toppings aren't, and equipment is shared. Choose a cup and check the ingredient list." },
    { question: "Is Italian gelato suitable for vegans?", answer: "Many sorbetti and some chocolate or nut flavours are made without dairy or egg, but recipes vary and equipment is shared. Ask to see the ingredients." },
    { question: "Who invented gelato?", answer: "No one person. Florence credits Bernardo Buontalenti by tradition, and the Catherine de' Medici story is a myth; the earliest printed Italian recipes for sorbetti date from 1690s Naples, and frozen desserts developed in several places." },
    { question: "Can I ask to taste gelato before ordering?", answer: "Often, yes — many shops will give you a small taste if you ask \"Posso assaggiare?\", especially when it isn't busy. It's a courtesy, not a rule." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Legge 11 marzo 2026, n. 34 — art. 16", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2026-03-11;34", note: "use of \"artigianale\"; in Italian" },
    { label: "MIMIT — Artigianato, articolo 16 legge n. 34/2026: FAQ", url: "https://www.mimit.gov.it/it/assistenza/domande-frequenti/artigianato-articolo-16-legge-n-34-2026-domande-frequenti-faq", note: "includes a gelateria example; in Italian" },
    { label: "D.Lgs. 15 dicembre 2017, n. 231 — art. 19", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-12-15;231", note: "ingredients and allergens for unpackaged food; in Italian" },
    { label: "Dissapore — No, dal 7 aprile non cambia nulla per il gelato artigianale (6 April 2026)", url: "https://www.dissapore.com/locali/no-dal-7-aprile-non-cambia-proprio-nulla-per-il-gelato-artigianale/", note: "analysis of Law 34/2026; in Italian" },
    { label: "Gambero Rosso — Gelato artigianale, una tradizione senza regole (9 May 2025)", url: "https://www.gamberorosso.it/notizie/attualita/gelato-artigianale-legge/", note: "the absence of a legal definition; in Italian" },
    { label: "21 CFR 135.110 — Ice cream and frozen custard (US)", url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-135/subpart-B/section-135.110", note: "legal standard for US ice cream" },
    { label: "University of Guelph — Ice Cream Technology: overrun calculations", url: "https://books.lib.uoguelph.ca/icecreamtechnologyebook/chapter/overrun-calculations", note: "definition of overrun" },
    { label: "Carpigiani Gelato Museum — History", url: "https://www.gelatomuseum.com/en/history", note: "history, including the Buontalenti tradition and emigrant gelato makers" },
    { label: "Storia e Memoria di Bologna — Carpigiani", url: "https://www.storiaememoriadibologna.it/node/54758", note: "the 1946 autogelatiera; in Italian" },
    { label: "Elizabeth David, Harvest of the Cold Months: The Social History of Ice and Ices (1994) — reviewed in The New York Review of Books", url: "https://www.nybooks.com/articles/1996/04/04/the-empress-of-ice-cream/", note: "the Catherine de' Medici story" },
    { label: "Antonio Latini, Lo scalco alla moderna (Naples, 1692–94)", url: "https://it.wikisource.org/wiki/Autore:Antonio_Latini", note: "early printed sorbetti recipes; in Italian" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Bronte and Raffadali pistachios, Piedmont, Roman and Giffoni hazelnuts, Sorrento and Amalfi lemons" },
  ],
};
