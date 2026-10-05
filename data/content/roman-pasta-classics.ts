import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Feature: "Roman Pasta" — replaces the short placeholder draft kept at the
// established "roman-pasta-classics" slug. Historical claims were checked
// against: Pecorino Romano's PDO status and production zone (Lazio,
// Sardinia, the province of Grosseto) via the EU's eAmbrosia register and
// the Consorzio di Tutela del Pecorino Romano; the absence of any carbonara
// recipe in print before the mid-1940s, and the competing origin theories
// (American-ration, carbonaro/charcoal-worker, cacio e uova precursor), cross
// -checked across multiple independent food-history sources rather than
// treated as settled; the Amatrice/Grisciano-to-Rome route of amatriciana
// and gricia, including the "amatriciana bianca" naming for gricia and the
// generally-cited (not precisely dated) 18th-century arrival of tomato into
// the dish. Pasta-shape associations (tonnarelli, spaghetti, bucatini,
// rigatoni, mezze maniche) are presented as the common conventions they are,
// not as fixed specifications, since no PDO/PGI or official recipe standard
// governs any of the four dishes. Origin claims that could not be
// responsibly supported with a strongest-available source are left out or
// phrased as competing accounts rather than fact.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const romanPastaClassics: ArticleContent = {
  body: [
    p("Rome's pasta repertoire is built from a short list of dishes that keep reappearing on trattoria menus across the city: carbonara, cacio e pepe, amatriciana and gricia. Between them, these four dishes share only a handful of ingredients — guanciale, Pecorino Romano, black pepper, egg, tomato — yet each one tastes distinct, and Romans are genuinely particular about the differences."),
    answer(
      "The four classic Roman pasta dishes are carbonara (egg, guanciale, Pecorino Romano, black pepper), cacio e pepe (Pecorino Romano, black pepper, pasta water), amatriciana (guanciale, tomato, Pecorino Romano, often chili) and gricia (guanciale, Pecorino Romano, black pepper — essentially amatriciana without the tomato). None of the four has an official recipe standard; what follows describes how they're traditionally made and where the real disagreements lie."
    ),

    h2("What Makes Roman Pasta Different?"),
    p("Roman cooking leans on a small set of ingredients used precisely, rather than a long ingredient list. Guanciale and Pecorino Romano appear in three of the four dishes; black pepper in all four. There's no cream, no butter, and traditionally no garlic or onion in any of them — the character of each dish comes from technique and the quality of a few components, not from building up flavor with additions. That's also why they're harder to get right than they look: with so little room to hide a mistake, a poorly rendered guanciale or a sauce that seizes up is immediately obvious."),

    h2("The Four Classic Roman Pasta Dishes"),

    h3("Carbonara"),
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1755594461640-b800c6bafdfa?auto=format&fit=crop&w=1600&q=75",
      alt: "A bowl of spaghetti carbonara coated in a glossy egg and Pecorino sauce, with visible flecks of black pepper and crisp guanciale",
      caption: "Carbonara's sauce comes from egg and cheese emulsified with pasta water and rendered guanciale fat — not cream.",
      credit: unsplash("Stötzer Balázs", "stotzer"),
    },
    p("Carbonara is made with egg, guanciale, Pecorino Romano and black pepper, tossed through hot pasta — usually spaghetti, though rigatoni and tonnarelli both appear on Roman menus — off the direct heat, so the egg thickens into a glossy sauce rather than scrambling. The guanciale is rendered first, and its fat is worked into the egg-and-cheese mixture along with a splash of starchy pasta water, which helps the sauce bind and loosen to a coating consistency rather than a liquid one."),
    p("Traditional Roman carbonara doesn't include cream. The silkiness in a well-made version comes from the egg-cheese-fat emulsion itself, not from dairy added to compensate for a sauce that's split or scrambled — cream shows up mainly in versions made outside Italy, often as a way to make the sauce more forgiving to cook. That doesn't make every non-traditional version a failure of a dish; it's simply a different preparation, and most Roman kitchens treat the two as genuinely different things rather than variations on a theme."),
    important(
      "Carbonara's origin isn't settled history. No printed recipe for it is known from before the mid-1940s, and several competing accounts exist: that it developed from Allied soldiers' egg and bacon rations after 1944; that it's linked to the carbonari (charcoal workers) of the Apennines between Lazio and Abruzzo; and that it echoes an older Neapolitan egg-and-cheese pasta, cacio e uova. None of these has decisive documentary support, and food historians disagree. Treat any single confident origin story — including a specific inventor or an exact year — as one claim among several, not as established fact.",
      "A disputed history"
    ),

    h3("Cacio e Pepe"),
    p("Cacio e pepe is Pecorino Romano, black pepper and starchy pasta water, usually with tonnarelli or spaghetti. It sounds like the simplest of the four dishes, and in terms of ingredients it is — but it's widely considered the hardest to execute well, because the entire dish depends on one piece of technique: emulsifying finely grated Pecorino with hot, starchy pasta water into a smooth sauce, without the cheese seizing into clumps or separating into a grainy, oily mess. Pecorino's low melting point and high acidity make it prone to clumping if the water is too hot or added too fast, which is why cooks typically let the pasta water cool slightly and add it gradually while tossing. Short ingredient lists leave little room to correct a mistake, which is exactly what makes this dish a real test of a cook's technique rather than a shortcut to a quick meal."),

    h3("Amatriciana"),
    p("Amatriciana is guanciale, tomato and Pecorino Romano, with chili often added, typically over bucatini or spaghetti. The name points to Amatrice, a town in the Rieti province of Lazio, roughly 140 km northeast of Rome — not to the city itself. The generally accepted account is that amatriciana developed from an older, tomato-free dish from the Amatrice area (what's now called gricia) once tomato became part of the local repertoire, commonly dated to sometime in the 18th century, though the exact timing isn't precisely documented and should be read as an approximate, widely-cited range rather than a fixed date. From Amatrice, the dish became part of Rome's own trattoria tradition, to the point that most visitors now encounter it as a quintessentially Roman dish rather than one from a Lazio hill town — both are true at once."),

    h3("Gricia"),
    p("Gricia is guanciale, Pecorino Romano and black pepper — no tomato. It's often described as amatriciana without the tomato, or amatriciana bianca (\"white amatriciana\"), and the name is commonly linked to Grisciano, a small village near Amatrice. The dish sits at the simplest end of the four: it uses the same guanciale-and-Pecorino base as carbonara, minus the egg, and the same base as amatriciana, minus the tomato. Because of that overlap, gricia is sometimes described as an ancestor of both — a reasonable way to think about the family relationship between the dishes, though the precise sequence in which each one developed isn't documented well enough to state as settled history."),

    h2("Roman Pasta at a Glance"),
    table(
      ["Dish", "Core ingredients", "Flavor profile", "Traditional pasta", "Key characteristic"],
      [
        ["Carbonara", "Egg, guanciale, Pecorino Romano, black pepper", "Rich, savory, lightly peppery", "Spaghetti, rigatoni, tonnarelli", "Egg-based sauce emulsified off direct heat"],
        ["Cacio e Pepe", "Pecorino Romano, black pepper, pasta water", "Sharp, peppery, intensely cheesy", "Tonnarelli, spaghetti", "Cheese-and-water emulsion with no added fat"],
        ["Amatriciana", "Guanciale, tomato, Pecorino Romano, chili (often)", "Savory, tangy, gently spicy", "Bucatini, spaghetti", "The only one of the four built on tomato"],
        ["Gricia", "Guanciale, Pecorino Romano, black pepper", "Savory, salty, clean", "Rigatoni, spaghetti, bucatini", "No tomato, no egg — the simplest of the four"],
      ],
      "Ingredients and pasta shapes are traditional conventions, not fixed rules — none of the four dishes has an official recipe standard, and kitchens vary within these conventions."
    ),

    h2("The Ingredients Behind Roman Pasta"),

    h3("Guanciale"),
    p("Guanciale is cured, unsmoked pork jowl or cheek, seasoned with salt and black pepper (sometimes other spices) and air-dried for several weeks. It's distinct from pancetta, which is cured pork belly: guanciale has a higher proportion of fat to lean meat and a softer texture once rendered, which is part of why it melts into a sauce differently than pancetta does. Pancetta isn't a forbidden substitute — it's a reasonable stand-in where guanciale isn't available — but swapping it in changes the fat content and flavor of the finished dish, so the result is a genuine variation rather than an identical dish made with a different name for the same thing."),

    h3("Pecorino Romano"),
    p("Pecorino Romano is a hard, salty sheep's-milk cheese with Protected Designation of Origin (PDO/DOP) status under EU law. Its production area covers Lazio, the island of Sardinia and the Tuscan province of Grosseto — in practice, most Pecorino Romano today is actually made in Sardinia, even though the cheese's name and culinary identity are tied to Rome and Lazio. Its intensity and saltiness are what carry all four dishes; there's no butter or cream to soften the flavor, so the cheese itself does most of the work."),

    h3("Black Pepper"),
    p("Black pepper is more than a garnish here — in cacio e pepe and gricia especially, it's one of only three ingredients in the dish, so its sharpness is a core part of the flavor rather than a finishing touch. Most Roman kitchens use it coarsely cracked rather than pre-ground, which affects both how it looks in the final dish and how its flavor releases."),

    h3("Tomatoes"),
    p("Tomatoes appear in only one of the four dishes: amatriciana. They don't belong in carbonara, cacio e pepe or gricia by any traditional definition — a useful thing to know when reading a menu, since a tomato-based \"carbonara\" or \"cacio e pepe\" on a tourist-facing menu is a sign the kitchen has reinterpreted the dish rather than made the traditional version."),

    h2("Why Pasta Water Matters"),
    p("Pasta water isn't just leftover cooking liquid — it carries starch released from the pasta as it cooks, and that starch is what lets a sauce bind to the noodles instead of pooling separately in the bowl. In cacio e pepe, where cheese is the entire sauce, starchy water is what turns grated Pecorino and hot water into a smooth, coating emulsion rather than a stringy or grainy mess; the same principle helps carbonara's egg-and-cheese mixture loosen into a sauce rather than clumping. Adding too much water dilutes the sauce and weakens this effect, which is why cooks usually add it gradually, a spoonful at a time, rather than all at once. None of this is exact food science performed at the stove — it's a practical technique refined by repetition, which is also why it takes some practice to get consistently right."),

    h2("How Roman Pasta Is Traditionally Prepared"),
    {
      type: "steps",
      items: [
        { title: "Render the guanciale", text: "Cut into strips or cubes and cook gently in its own fat — no added oil — until the fat turns translucent and the meat crisps slightly. Carbonara, amatriciana and gricia all start here." },
        { title: "Manage the heat", text: "Carbonara and cacio e pepe are both finished off direct heat, since the proteins in egg and the casein in Pecorino can seize or scramble if the pan is too hot when the sauce comes together." },
        { title: "Combine with starchy pasta water", text: "A spoonful at a time, loosening the sauce to a coating consistency rather than a watery one. This step is where cacio e pepe and carbonara are most often rescued or ruined." },
        { title: "Toss, don't stir", text: "Lifting and folding the pasta through the sauce coats it more evenly than stirring, and keeps egg-based sauces from sitting still in one hot spot long enough to scramble." },
        { title: "Balance the salt", text: "Pecorino Romano and guanciale are both naturally salty, so the pasta water itself is usually salted more lightly than for other dishes, to avoid an oversalted final result." },
      ],
    },
    p("Short ingredient lists are exactly why these dishes are technically demanding: there's no sauce base to fall back on if the egg scrambles or the cheese clumps, so the technique at each step has to work the first time."),

    h2("Carbonara Myths and Historical Questions"),
    ul(
      "**\"Carbonara contains cream.\"** Not in the traditional Roman version — the sauce's silkiness comes from egg, cheese, fat and pasta water, not dairy.",
      "**\"Carbonara has one proven inventor.\"** No single inventor or exact invention story is documented well enough to be treated as settled; several competing accounts exist (see above).",
      "**\"Carbonara is an ancient Roman dish.\"** It isn't — no recipe for it is known in print before the mid-1940s, which makes it comparatively recent by the standards of Roman cuisine.",
      "**\"Any bacon can replace guanciale without changing the dish.\"** Guanciale's higher fat content and texture affect the finished sauce; a substitute changes the result rather than reproducing it exactly.",
      "**\"The sauce should be fully liquid.\"** A well-made carbonara sauce coats the pasta; if it pools at the bottom of the bowl, it's typically either too thin or has separated.",
      "**\"Carbonara must contain garlic or onion.\"** Traditional versions don't — the flavor comes from guanciale, egg, cheese and pepper alone."
    ),

    h2("Rome, Amatrice and the Wider Lazio Food Tradition"),
    p("It's easy to describe all four dishes simply as \"Roman,\" and in terms of where they're eaten today, that's fair — Rome is where they're concentrated on menus and where most visitors encounter them. But their geography is a little wider than the city itself. Amatriciana and gricia both trace back to towns in the Lazio hinterland — Amatrice and the nearby village of Grisciano — rather than to central Rome, and reached their now-famous form through Rome's trattoria culture rather than being invented within the city walls. Carbonara and cacio e pepe are more directly tied to Rome itself, though carbonara's documented history is short enough that even that association is more recent than many assume."),
    p("The useful distinction for a traveler is this: Rome is the place where Lazio's regional dishes became widely known and where they're now most reliably found on a menu, while their origins — where documented — often sit in the smaller towns and rural traditions of the wider region."),

    h2("How to Order Roman Pasta in Rome"),
    p("All four dishes are primi — first courses, eaten before a secondo (main) in a traditional Italian meal structure, though plenty of visitors and locals alike order a primo on its own, which is entirely normal in a trattoria. A few practical points help when reading a menu or deciding where to eat:"),
    ul(
      "**Trattorias and osterias** — smaller, informal, family-run places — are generally the most reliable spots for traditional versions of these dishes, though that's not an absolute rule and plenty of exceptions exist in both directions.",
      "**Menus directly facing major tourist sites** sometimes offer broader variations (cream-based carbonara, for instance) aimed at a wider range of tastes; this doesn't make them illegitimate restaurants, just a different culinary choice than the traditional preparation.",
      "**If you're unsure what's in a dish**, it's completely normal to ask — Roman waitstaff are generally used to the question, especially for carbonara given how often travelers ask about cream.",
      "**Portion and course expectations vary** by restaurant and are worth checking on the menu itself rather than assuming a fixed norm.",
    ),

    h2("Understanding a Roman Pasta Menu"),
    table(
      ["Italian term", "Meaning"],
      [
        ["carbonara", "Pasta with egg, guanciale, Pecorino Romano and black pepper"],
        ["cacio e pepe", "Pasta with Pecorino Romano and black pepper, emulsified with pasta water"],
        ["amatriciana", "Tomato-based pasta with guanciale and Pecorino Romano, often with chili"],
        ["gricia", "Guanciale, Pecorino Romano and black pepper — amatriciana without tomato"],
        ["guanciale", "Cured, unsmoked pork jowl or cheek"],
        ["pecorino", "Hard sheep's-milk cheese; Pecorino Romano has PDO status"],
        ["al dente", "Pasta cooked firm to the bite, not soft"],
        ["tonnarelli", "Thick, square-cut fresh egg pasta, similar to a squared-off spaghetti"],
        ["primo", "The pasta or rice course, eaten before the main course in a full meal"],
      ]
    ),

    h2("Traditional Recipes and Modern Interpretations"),
    {
      type: "image",
      // Shared with Italian Food Traditions.
      src: "/images/food/italian-food-traditions/rome-handmade-pasta.webp",
      alt: "Two cooks in white hats rolling fresh pasta by hand at a counter in a shop window in Rome",
      caption: "Fresh pasta made by hand in a Rome shop window — alongside the traditional dishes, Roman kitchens also keep experimenting.",
      credit: unsplash("Matej Buchla", "matejbuchla"),
    },
    p("None of these four dishes is frozen in time. Contemporary Roman chefs experiment with technique — different ratios of yolk to whole egg in carbonara, for instance, or variations on how the Pecorino emulsion in cacio e pepe is built — and some kitchens offer vegetarian adaptations that substitute the guanciale, which inevitably changes the dish's character given how central that ingredient is to the flavor. International versions, including cream-based carbonara and pancetta substitutions, are common outside Italy and aren't inherently wrong; they're a different culinary tradition built from the same starting point. The useful distinction for a curious eater is simply knowing which version you're being served, and why it tastes the way it does."),
  ],

  faqs: [
    { question: "What are the four classic Roman pasta dishes?", answer: "Carbonara, cacio e pepe, amatriciana and gricia. They share a small set of ingredients between them — guanciale, Pecorino Romano and black pepper — but each is a genuinely distinct dish." },
    { question: "What is traditional carbonara made from?", answer: "Egg, guanciale, Pecorino Romano and black pepper, combined with starchy pasta water off direct heat so the egg thickens into a sauce rather than scrambling." },
    { question: "Does authentic carbonara contain cream?", answer: "No. The traditional Roman version's sauce comes from egg, cheese, rendered guanciale fat and pasta water. Cream-based versions are common outside Italy but are a different preparation." },
    { question: "What is the difference between carbonara and gricia?", answer: "Carbonara adds egg to the guanciale-Pecorino-pepper base; gricia doesn't use egg at all. Gricia is sometimes described as carbonara's simpler, egg-free relative." },
    { question: "What is the difference between gricia and cacio e pepe?", answer: "Gricia includes guanciale; cacio e pepe doesn't. Cacio e pepe is built only from Pecorino Romano, black pepper and pasta water." },
    { question: "What is the difference between amatriciana and carbonara?", answer: "Amatriciana is built on tomato and has no egg; carbonara has egg and no tomato. Both typically use guanciale and Pecorino Romano." },
    { question: "Is amatriciana from Rome or Amatrice?", answer: "Its name and origins trace to Amatrice, a town in Lazio's Rieti province, not central Rome. It became closely associated with Rome through the city's trattoria culture, so both the Amatrice origin and the Roman association are accurate." },
    { question: "What is guanciale?", answer: "Cured, unsmoked pork jowl or cheek, air-dried with salt and black pepper. It has a higher fat content than pancetta, which affects how it behaves in a sauce." },
    { question: "Can pancetta be used instead of guanciale?", answer: "It can as a substitute, but pancetta is cured pork belly with a different fat ratio and texture, so the result is a variation on the dish rather than an identical version." },
    { question: "What is Pecorino Romano?", answer: "A hard, salty sheep's-milk cheese with Protected Designation of Origin (PDO) status. Its production area covers Lazio, Sardinia and the province of Grosseto, though most of it is actually produced in Sardinia today." },
    { question: "What pasta is traditionally used for carbonara?", answer: "Spaghetti is most common, though rigatoni and tonnarelli both appear on Roman menus. No official shape is mandated." },
    { question: "What pasta is used for cacio e pepe?", answer: "Tonnarelli or spaghetti are the most common choices, again without a single fixed rule." },
    { question: "Why does cacio e pepe sometimes become clumpy?", answer: "Pecorino Romano can seize into clumps or separate if the pasta water used to emulsify it is too hot or added too quickly. Letting the water cool slightly and adding it gradually helps prevent this." },
    { question: "How should visitors order pasta in Rome?", answer: "Ordering a primo (pasta course) on its own is entirely normal, even without a main course afterward. If a dish's ingredients are unclear, asking the waitstaff is a normal and expected question, especially for carbonara." },
    { question: "Are Roman pasta recipes the same everywhere in Lazio?", answer: "No — these are culinary traditions with regional and household variation, not fixed, legally defined recipes. Amatriciana and gricia in particular have roots outside central Rome, in the area around Amatrice." },
  ],

  sourcesTitle: "Sources checked for this guide",
  sources: [
    { label: "European Commission — eAmbrosia geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Verified Pecorino Romano's PDO status and production area (Lazio, Sardinia, province of Grosseto)." },
    { label: "Consorzio per la Tutela del Formaggio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "Official consortium information on Pecorino Romano's production rules and history." },
    { label: "Great British Chefs — The Origins of Carbonara", url: "https://www.greatbritishchefs.com/features/origins-history-of-carbonara", note: "Cross-checked the competing carbonara origin theories and the absence of a pre-1944 printed recipe." },
    { label: "Taste Cooking — The Murky History of Roman Carbonara", url: "https://tastecooking.com/the-murky-history-of-roman-carbonara/", note: "Additional cross-check on the disputed and undocumented aspects of carbonara's history." },
    { label: "Wikipedia — Pasta alla gricia / Amatriciana sauce", url: "https://en.wikipedia.org/wiki/Pasta_alla_gricia", note: "Cross-referenced the Amatrice/Grisciano naming and the gricia-to-amatriciana tomato addition, treated as a widely-cited account rather than a precisely dated fact." },
  ],
};
