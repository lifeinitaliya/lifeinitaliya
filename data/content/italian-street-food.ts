import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Italian Street Food" — built October 2026.
// Regional claims were checked against: the Accademia della Crusca for
// terminology (arancina/arancino, piadina, focaccia, farinata); the Comune di
// Napoli's DMO for pizza a portafoglio and the cuoppo tradition; the Comune di
// Firenze (Feel Florence) for lampredotto; Regione Siciliana portal for
// arancine/panelle; Regione Puglia for panzerotto and focaccia barese; the EU
// eAmbrosia register for PDO/PGI designations; Turismo Torino and Venezia
// Unica for cicchetti/bacari. Historical origin claims are presented as
// regional traditions or are attributed to the source making them; none are
// presented as documented fact unless a reliable primary source confirms them.
// No vendors, stalls or food businesses are named or ranked. No prices given.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-street-food";

export const italianStreetFood: ArticleContent = {
  body: [
    // ——— 1 Introduction ———
    h2("What is Italian street food?"),
    answer("**Italian street food is food sold ready to eat from a stall, a street-facing counter, a market cart or a small stand, and intended to be eaten immediately — standing at the counter, walking through a market or sitting on a low wall in a piazza.** It is not a single cuisine or a unified tradition but a collection of regional foods that developed in different cities over centuries, each tied to local ingredients, local customs and a specific way of being in public."),
    p("The idea that Italian food means restaurant food and long dinners is accurate but incomplete. Alongside the trattoria and the ristorante, every major Italian region has its own tradition of portable food eaten on the street or at a market: the arancine of Palermo, the pizza a portafoglio of Naples, the supplì of Rome, the lampredotto sandwich of Florence, the piadina of Emilia-Romagna, the focaccia of Liguria, the panzerotto of Puglia. These are not adaptations for tourists. They grew out of working-class food culture — cheap, filling, made from local ingredients and eaten quickly by people who had somewhere to be."),
    p("What follows explains what each of these traditions is, how it varies by region, what to expect when you order, and what the experience is like in practice."),
    {
      type: "facts",
      title: "Italian street food at a glance",
      rows: [
        { label: "Character", value: "Regional: each city and region has its own distinct tradition" },
        { label: "Origins", value: "Working-class food culture, market food and neighbourhood staples" },
        { label: "Format", value: "From individual pieces to paper cones; typically eaten standing or walking" },
        { label: "Times", value: "Mid-morning snack, lunch, afternoon; less common at dinner except in tourist areas" },
        { label: "Price", value: "Generally inexpensive to moderate, though this varies by city and venue" },
        { label: "Dietary range", value: "Varies by food; many options include meat, fish, cheese; vegetarian options exist but vary by region" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "How street food fits Italian food culture",
        "Italian street food by region",
        "Italian street food quick reference",
        "Street food vs markets and food halls",
        "How to order Italian street food",
        "Allergies, dietary needs and food safety",
        "Italian street food vocabulary",
        "Italian street food FAQ",
      ],
    },

    // ——— 2 Culture ———
    h2("How street food fits Italian food culture"),
    p("Italians take food seriously — its quality, its origin, its regionality — and street food is part of that seriousness, not outside it. A lampredotto vendor in Florence or a panelle stall in Palermo is selling a product rooted in the local food tradition, not a low-cost imitation of it. The ingredients are the same, the cooks know what they're doing, and regular customers have opinions about which stall is better."),
    p("Street food in Italy is also tied to the rhythm of the day. Many foods exist as a specific form of *spuntino* — a mid-morning or mid-afternoon snack taken standing up at a counter. A slice of pizza al taglio at eleven in the morning, a piadina on the way back from an errand, a cuoppo of fried food at lunchtime: these fit into the day in ways that a restaurant meal doesn't. They're not occasions; they're stops."),
    p("What has changed in recent years is that some of these traditions have been discovered, repackaged and repriced for food tourism. That's especially visible in cities like Florence and Bologna, where food tours have made lampredotto and piadina more famous internationally than they've ever been locally. This can be a good thing — it keeps local food traditions visible — but it's worth knowing that the experience at a tourist-facing stand is often different from the neighbourhood version. The tourist stand knows you're there; the neighbourhood stall has regulars who come back every day."),
    image("food-market-vendor", "A vendor in a green jacket standing behind produce at an outdoor food market stall in Italy", true),

    // ——— 3 By Region ———
    h2("Italian street food by region"),
    p("Italy has no single street food tradition. What follows is a region-by-region account of the most established traditions, with enough detail to understand each one and order it with some idea of what to expect."),

    // ——— 3a Sicily ———
    h3("Sicily"),
    p("Sicily has one of the richest street food traditions in Italy, concentrated above all in Palermo but present across the island. Palermo in particular is consistently cited by food writers and the city itself as one of the great street food cities of Europe."),
    p("**Arancine and arancini** are perhaps the most internationally recognisable Sicilian street food: fried balls of seasoned rice, usually filled with ragù and peas or with butter and mozzarella (al burro), coated in breadcrumbs and deep-fried. The name comes from *arancia* (orange) — they're shaped and coloured to resemble the fruit. A terminological note that matters in Sicily: in Palermo and western Sicily, the word is *arancina* (feminine); in Catania and eastern Sicily, it's *arancino* (masculine). Both forms are correct in their own territory, and both will cause mild arguments if used in the wrong city. No single form is universally right."),
    image("arancine-fried-plate", "Three golden fried rice balls on a white plate, coated in crispy breadcrumbs", false),
    p("**Panelle** are flat, thin chickpea flour fritters, pale gold and slightly crispy at the edges. They're sold hot from the fryer, eaten plain or in a sesame-seeded roll (*mafaldina* or plain roll). Panelle have been part of Palermo's street food for centuries and are among the most affordable and filling options at any Palermo market. They're vegetarian, though cross-contact with other fried items is possible at busy stalls."),
    p("**Sfincione** is a thick, spongy baked pizza, specific to Palermo. The topping is typically a cooked tomato sauce with onions, anchovies, caciocavallo or tuma cheese, and breadcrumbs — a layered, soft, deeply savoury result quite different from Neapolitan pizza. Sfincione is sold by the piece in bakeries and from market stalls, particularly in the Ballarò and Capo markets, and is a common late-morning or lunchtime food."),
    p("**Stigghiola** are skewers of sheep or goat intestines, cleaned, flavoured with salt, parsley and sometimes onion, and grilled over charcoal. They're not for the hesitant, but they're deeply rooted in Palermo's food culture and appear at market stalls alongside the more approachable panelle. They're often eaten at lunchtime or in the early evening."),
    tip("At Palermo's markets — Ballarò, Capo and Vucciria — street food stalls are concentrated and easy to find. Arrive mid-morning to mid-afternoon for the widest selection. The markets also appear in the [Palermo guide](/cities/palermo-markets-monuments), which includes practical notes on getting there and what to expect.", "Palermo markets"),
    image("sicilian-market-vendors", "Customers and vendors at a busy fish and produce market stall", false),

    // ——— 3b Naples ———
    h3("Naples and Campania"),
    p("Naples has a street food culture as old and proud as its own, organised around frying and around the relationship between the city and its pizza. Street food in Naples is not the same as Neapolitan pizza — that belongs to a sit-down trattoria tradition of a different kind. Street food is quicker, cheaper and eaten standing."),
    p("**Pizza a portafoglio** (or *pizza a libretto*) is the portable version of Neapolitan pizza, folded in quarters so it can be eaten from your hands. The pizza is baked in a wood-fired oven, soft and lightly charred, and then folded around itself. The dough is the same as for regular Neapolitan pizza — just handled differently for the road. It's sold from hole-in-the-wall pizzerias and street-facing counters, eaten quickly while standing. For travellers who want to understand Neapolitan pizza tradition in depth, the [Neapolitan Pizza article](/food/neapolitan-pizza) covers the broader story."),
    p("**Cuoppo** is the Neapolitan street food format as much as any specific dish: a cone of thick paper filled with fried food. The contents vary — *cuoppo di pesce* contains fried fish and seafood, *cuoppo di terra* has fried vegetables and cheese — but the format is consistent: hot fried food in a cone, eaten standing up. The word comes from *coppa* (cup or container)."),
    p("**Frittatina di pasta** is a fried disc or round portion of pasta — usually bucatini or rigatoni — bound with béchamel, coated in breadcrumbs and deep-fried. It's soft inside and crispy outside, and it's one of the most distinctively Neapolitan street foods: pasta treated as fritter. Frittatine are common in Naples' *friggitorie* (fried-food shops) alongside crocchè di patate (potato croquettes) and various fried vegetables."),
    p("**Graffa** is a Neapolitan fried doughnut made with potato dough, typically dusted with sugar and eaten in the morning or as a snack. The potato in the dough gives it a soft, slightly dense interior different from a ring doughnut. Graffette (plural) are sold from bakeries and *pasticcerie* across the city."),

    // ——— 3c Rome ———
    h3("Rome and Lazio"),
    p("Roman street food is less flamboyant than Sicilian or Neapolitan, but it has its own established forms — most of them involving rice, pizza dough or offal, and most of them eaten in the late morning or at lunch."),
    p("**Supplì** are Roman fried rice balls, elongated and oval, filled with ragù and mozzarella, coated in egg and breadcrumbs and deep-fried. When bitten, the mozzarella inside stretches — which gives rise to the nickname *supplì al telefono* (telephone supplì, for the stringing wire of cheese). Supplì are sold in Roman *gastronomie* and friggitorie, in some pizza al taglio shops, and occasionally from street-facing counters near the city's markets. The name may derive from the French word *surprise* — a claim often repeated but not definitively documented."),
    image("pizza-al-taglio-counter", "A display of several different types of pizza arranged side by side on a counter", true),
    p("**Pizza al taglio** (pizza by the cut) is sold from bakeries and stands across Rome, cut from large rectangular trays with scissors and sold by weight — *al peso*. This is an important distinction from Neapolitan pizza: it's Roman bakery pizza, baked in large trays, with a thicker or crunchier base depending on the style. The toppings range from the classic pomodoro and mozzarella to seasonal vegetables, potato, courgette flowers or cured meats. You choose your slice, they cut it, weigh it and wrap it. Eating it standing at the counter or on the street is normal."),
    p("**Trapizzino** is a more recent Roman street food, invented in the early 2000s, that puts classic Roman stew fillings — *coda alla vaccinara* (oxtail), chicken with peppers, *polpette al sugo* (meatballs) — into a triangular pocket of focaccia-like pizza dough. It's become part of the Roman food landscape and is now found well beyond Rome, but its origins are in the city's tradition of using excellent fillings with good bread."),
    image("pizza-trays-bakery", "Street food displayed in trays on a counter, ready to be sold by portion", false),
    tip("For a broader picture of what Rome produces in the way of food traditions, the [Roman Pasta article](/food/roman-pasta-classics) covers carbonara, cacio e pepe and the other pasta dishes the city is known for — a very different side of Roman food from the street."),

    // ——— 3d Emilia-Romagna ———
    h3("Emilia-Romagna"),
    p("Emilia-Romagna is not always associated with street food in the way Naples or Palermo are, but it has a strong tradition of portable flatbread that stretches back centuries and varies in form across the region."),
    p("**Piadina** is the most important of these: a thin flatbread cooked on a flat cast-iron plate (*testo*), flexible when fresh and made from flour, water, salt and fat — historically lard, now often olive oil or a combination. Piadina is central to the food culture of Romagna (the southern half of the region) and is sold from small stands and kiosks called *piadinerie*, filled with cured meats, soft squacquerone cheese, wild herbs, cheese and salami. In Rimini and along the Adriatic coast the piadina tends to be thin; inland, towards Forlì, it tends to be thicker and softer. Piadina Romagnola holds a PGI (Protected Geographical Indication) designation under EU law."),
    p("In the area around Modena and the Apennines, **crescentina** or **tigella** fills a related role: a small, thick disc of bread leavened with yeast or baking powder, griddled on patterned cast-iron discs, and eaten split and filled. These are more firmly a restaurant or *osteria* food in their traditional form, though they appear at markets and festivals."),

    // ——— 3e Tuscany ———
    h3("Tuscany"),
    p("Tuscany's most distinctive street food is also its most challenging for the uninitiated: **lampredotto**, made from the fourth stomach of the cow (the *abomaso* or abomasum), slow-cooked in broth with tomato, onion and herbs, then sliced and served in a soft roll (*semella*) soaked in the cooking broth, with a green herb sauce (*salsa verde*) and sometimes a hot sauce. It's sold from traditional market carts called *lampredottai* (lampredotto vendors), which are a fixture of Florentine markets."),
    p("Lampredotto is firmly Florentine — not Tuscan in a general sense but specifically Florentine, tied to the city's market culture and its tradition of *cucina povera* (cooking from inexpensive cuts). Food writers regularly cite it as an essential Florence experience, but it's important to understand what it is before ordering: it's a strong-flavoured offal sandwich, not mild. Visitors who enjoy strongly flavoured food and good bread will appreciate it; those with an aversion to offal should probably skip it."),
    p("**Schiacciata** (also called *schiacciata all'olio* or *focaccia toscana*) is Tuscany's version of flatbread: dimpled, olive-oil-rich, salted, and baked until it crisps at the edges while staying soft in the centre. It's sold from bakeries and eaten as a snack or to carry around. In autumn, *schiacciata con l'uva* — with grapes pressed into the dough — appears in Tuscan bakeries for a brief seasonal window."),

    // ——— 3f Liguria ———
    h3("Liguria"),
    p("Liguria is the narrow coastal region running from the French border to the Tuscan one, and its food traditions are shaped by limited agricultural land and a seafaring history. Two of its most important street foods are made from very simple ingredients."),
    p("**Focaccia genovese** (Genovese focaccia) is the defining bread of Liguria: a flat, olive-oil-soaked, slightly dimpled bread, salted on top and soft inside. It's different from the thicker focaccia of Puglia and the schiacciata of Tuscany — lighter, oilier and with a texture somewhere between bread and flatbread. In Genoa it's sold from bakeries in the morning and eaten for breakfast (unusual in the rest of Italy), as a snack or alongside food. Focaccia Genovese holds a PGI designation. Variant versions include focaccia con le cipolle (with onion) and focaccia col formaggio di Recco, which has a thin dough with fresh cheese inside."),
    image("focaccia-tomatoes-wood", "A piece of focaccia bread topped with halved cherry tomatoes and garlic on a wooden board", false),
    p("**Farinata** is a savory flatbread made from chickpea flour, water, olive oil and salt, baked in a very hot oven in a large copper pan. The result is a thin, slightly crispy round, golden on top and set throughout, eaten hot, often with black pepper. Farinata is sold from *sciamadde* (traditional bakeries or fried-food shops in Genovese dialect), usually by the slice. It's naturally gluten-free (the dough is made entirely from chickpea flour) but cross-contact at busy bakeries is possible."),
    image("focaccia-rosemary-board", "A piece of freshly baked focaccia bread with rosemary and olive oil on a wooden board", false),

    // ——— 3g Puglia ———
    h3("Puglia"),
    p("Puglia produces some of the most richly flavoured bread and pizza-adjacent street food in Italy, shaped by excellent local wheat, abundant olive oil and the strongly flavoured regional cheese *cacioricotta* and aged ricotta."),
    p("**Panzerotto** is a half-moon-shaped fried or baked pastry, typically filled with tomato and mozzarella, sealed at the edges and deep-fried until golden. It's associated particularly with Bari and the Bari area, where it's a beloved street food eaten at lunch or as a snack. Note: the term \"panzerotto\" is also used in Milan and other cities to mean a large calzone-style baked pizza pocket — the Pugliese version is distinct, typically fried and smaller."),
    p("**Focaccia barese** (Bari-style focaccia) is a thick, soft flatbread made with semolina flour and potato, topped with cherry tomatoes, olives and olive oil, and baked in a well-oiled round tin. It's more cake-like in texture than Ligurian focaccia, and it's sold by weight from bakeries across the Bari area. The tomatoes are often pressed into the dough before baking, so the juice cooks into the bread."),

    // ——— 3h Veneto ———
    h3("Veneto and cicchetti"),
    p("Venice and the broader Veneto have a street food tradition that's better described as a bar food tradition: **cicchetti** (sometimes spelled *cicheti*) are small snacks served on bread or on small plates at a *bacaro*, the traditional Venetian wine bar. A bacaro is a simple, usually old, bar where wine is served by the glass and cicchetti are offered at the counter: slices of baccalà mantecato (whipped salt cod) on polenta, a wedge of cheese, a hard-boiled egg with tuna, sardines in saor (sweet-sour marinade), a stuffed olive, a meatball."),
    p("Cicchetti are eaten standing at the counter, with a glass of house wine (*ombra* — a small glass, traditionally of local white). The custom of moving from bacaro to bacaro, having a small glass and a few cicchetti at each stop, is known as *andare in giro per bacari* and is as much a social ritual as a way of eating. Cicchetti overlap naturally with the Italian aperitivo tradition; for more on that connection, the [Italian Aperitivo article](/food/italian-aperitivo) covers the relationship between the two."),
    tip("Bacari are found throughout Venice, most concentrated in the Cannaregio neighbourhood and around Rialto. They tend to be busiest before lunch (11am–1pm) and in the early evening (5–8pm). Arrive early in each session — cicchetti are typically made fresh and sell out."),

    // ——— 4 Quick Reference Table ———
    h2("Italian street food quick reference"),
    p("This table gives a brief overview of ten well-established Italian street foods. It's a starting point, not a complete guide to any of them."),
    table(
      ["Region / City", "Street food", "What it is", "What travellers should know"],
      [
        ["Palermo, Sicily", "Arancine/arancini", "Fried stuffed rice balls, coated in breadcrumbs", "The name varies by city: arancina in Palermo, arancino in Catania"],
        ["Palermo, Sicily", "Panelle", "Fried chickpea flour fritters", "Often served in a sesame roll; vegetarian, check for cross-contact"],
        ["Naples", "Pizza a portafoglio", "Neapolitan pizza folded in quarters to eat standing", "Soft, hot; best eaten immediately; distinct from restaurant pizza"],
        ["Naples", "Cuoppo", "Paper cone of mixed fried food", "Contents vary (seafood or vegetables); eaten standing"],
        ["Rome", "Supplì", "Oval fried rice balls, filled with ragù and mozzarella", "Sold in pizza al taglio shops and gastronomie; mozzarella stretches when bitten"],
        ["Rome", "Pizza al taglio", "Rectangular pizza sold by weight, cut with scissors", "Different from Neapolitan pizza; choose your topping, pay by weight"],
        ["Emilia-Romagna", "Piadina", "Thin griddled flatbread with fillings", "Romagna's staple; sold from kiosks (piadinerie); PGI product"],
        ["Florence, Tuscany", "Lampredotto", "Slow-cooked tripe in a bread roll, with herb sauce", "Distinctive flavour; an offal dish; sold from traditional carts"],
        ["Liguria", "Focaccia/Farinata", "Olive-oil flatbread (focaccia) or chickpea flatbread (farinata)", "Farinata is naturally gluten-free; both sold from Ligurian bakeries"],
        ["Puglia", "Panzerotto", "Fried half-moon pastry filled with tomato and mozzarella", "The Pugliese version is fried; different from Milan's baked version"],
        ["Venice, Veneto", "Cicchetti", "Small snacks on bread or plates at a bacaro", "Eaten standing; part of the bacari culture; usually served mid-morning and early evening"],
        ["Palermo, Sicily", "Sfincione", "Thick Palermitan baked pizza with tomato, onion, anchovy", "Soft base, deeply savoury; sold by the piece from bakeries and markets"],
      ],
      "Street food varies within regions; this table covers well-established examples."
    ),

    // ——— 5 Street food vs markets ———
    h2("Street food vs markets, bakeries and food halls"),
    p("The distinction matters in practice because it affects where you go, what you pay and what the experience is like."),
    p("**Street food** in the strictest sense is food prepared and sold from a mobile or semi-fixed outdoor position and eaten immediately. In Italy this is relatively uncommon outside specific traditions (market stalls, lampredottai carts in Florence, arancine stands in Palermo). Most of what travellers describe as Italian street food is better described as **counter food from a bakery or small shop** — pizza al taglio from a *forno* (bakery), supplì from a *gastronomia*, a panzerotto from a bakery in Bari."),
    p("**Food markets** are a separate category: a permanent or recurring market that sells both raw ingredients and prepared food. Roman, Florentine and Palermitan markets sell both raw produce and cooked foods; not everything at a market is what you'd call street food. The [Italian Food Markets article](/food/italian-food-markets) covers markets in detail, including what different market types sell and which cities have the strongest traditions."),
    p("**Food halls** (mercati coperti riqualificati) are a different phenomenon again: architecturally renovated covered markets that serve as destination food spaces, often with sit-down areas, higher price points and a focus on artisan producers. These exist in Florence, Milan, Rome, Naples and elsewhere and are worth knowing about as a different experience from a neighbourhood market."),
    p("**Bakeries** (*forni* or *panifici*) sell focaccia, pizza bianca, pizza al taglio and regional flatbreads — all foods that are eaten on the street, but within a fixed-shop context. The distinction is worth noting if you're asking a local where to find street food: they may point you to a bakery, not a stall, because that's where the food actually comes from."),

    // ——— 6 How to order ———
    h2("How to order Italian street food"),
    p("Ordering at a pizza al taglio counter, a piadineria or a lampredotto cart follows a simple pattern, but there are a few things that help."),
    ul(
      "**Point and indicate quantity.** At a counter with multiple options, pointing at what you want is normal and expected. You don't need to know the exact Italian name, though having it helps. Say *quello* (that one) or *questo* (this one) and indicate with a gesture.",
      "**Ask for your portion if buying by weight.** Pizza al taglio is weighed and priced accordingly. You can indicate how much you want by showing the size with your hands — *così* (like this) — or asking for a specific amount: *cento grammi* (100 grams) or *duecento grammi* (200 grams).",
      "**Pay before or after, depending on the setup.** Some stands and small shops ask you to pay at a till first and collect your food; others give you the food and you pay at the end. Watch what other customers do. At a self-service or mixed setup, *pago subito* (I'll pay now) or *pago alla cassa* (I'll pay at the till) helps.",
      "**Ask about fillings.** For a piadina, cuoppo or panzerotto, you can ask about the filling options: *Cosa c'è dentro?* (What's inside?) or *Avete una versione senza carne?* (Do you have a version without meat?).",
      "**Eat where and as local customers do.** If there's a counter with high stools, use it. If everyone is eating standing outside, stand outside. If there are no seats, that's by design — this is food for eating on the move.",
    ),
    tip("Phrases that help: *Un supplì, per favore* (One supplì please) · *Quanto pesa?* (How much does it weigh?) · *Al banco, grazie* (At the counter, thanks) · *Da portare via* (To take away) · *Senza carne* (Without meat) · *Cosa c'è dentro?* (What's in it?)"),
    image("street-food-vendor", "A person standing beside a street food stand at a market", false),

    // ——— 7 Etiquette ———
    h2("Street food etiquette"),
    p("There isn't a formal code of etiquette for Italian street food, but some general points help things go smoothly."),
    ul(
      "**Eating while walking is generally accepted** with handheld food (a piadina, a cuoppo, a slice of pizza a portafoglio). Eating while sitting at a café table you haven't paid for is less welcome.",
      "**Many street food spots don't have seating** and aren't designed for lingering. The lampredotto cart, the piadineria kiosk, the cuoppo stand — these are designed for quick turnaround. Eat, move on.",
      "**Queuing** (when there is a queue) follows Italian norms: join the back and wait, but be attentive and ready when your turn comes. Busy market stalls can be informal — hold your place and make eye contact with the vendor when you're ready to order.",
      "**Photographing food and vendors** is generally fine. Pointing your phone at a vendor's face without asking is not. If you want to take a portrait, ask — *Posso fare una foto?* (May I take a photo?). Many vendors will be fine with it; some won't.",
      "**Waste** — paper cones, wax paper, napkins — belongs in the nearest bin. Italian piazzas and markets have bins for this reason.",
      "**Price negotiation is not a feature of Italian street food.** The price is what it is. Attempting to bargain at a Palermo market stall will go about as well as attempting to bargain at a London newsagent's.",
    ),

    // ——— 8 Allergies ———
    h2("Allergies, dietary needs and food safety"),
    note("This section provides general guidance only. Anyone with a serious food allergy should communicate directly with the vendor or staff and exercise their own judgement. No food preparation can be guaranteed free of cross-contact."),
    p("**Vegetarians** will find options in most regions — panelle, farinata, focaccia, pizza al taglio with vegetable toppings, some forms of cicchetti — but the default filling or topping in many street foods is meat, fish or cheese. It's worth asking: *È senza carne?* (Is it without meat?) or *Avete qualcosa di vegetariano?* (Do you have something vegetarian?)."),
    p("**Vegans** have fewer options in traditional street food. Olive oil is common as a fat in Ligurian and Pugliese foods; lard (*strutto*) is still used in some traditional recipes for piadina and some Neapolitan fried foods. Egg-based coatings are standard on supplì and arancine. Always ask if you need to avoid animal products entirely."),
    p("**Gluten** is present in virtually all of the foods mentioned in this article — pizza dough, rice balls coated in breadcrumbs, flatbreads, fried foods coated in flour. The two natural exceptions are farinata (chickpea flour) and plain arancine or supplì before breading — but both are typically made in environments where wheat flour is also in use, so cross-contact is a real risk. For coeliac travellers, the safest approach in a street food setting is to ask directly and, if in doubt, to skip."),
    p("**Tree nut allergies**: nuts are less commonly present in savoury Italian street food than in desserts, but pesto (used in Ligurian dishes) contains pine nuts, and Sicilian foods sometimes use almonds or pistachio in or near other foods. Ask about the specific preparation."),
    p("**Food safety** in Italian street food is generally good — fried food turns over quickly, there are health inspection requirements for vendors — but some common-sense points are worth keeping in mind:"),
    ul(
      "Choose vendors where business is brisk. Food that sits for hours without selling has had time to cool and deteriorate.",
      "Food sold from temperature-controlled cases or served hot from a fryer is safer than food left at room temperature for an extended period.",
      "At a very hot busy market in summer, foods involving cheese or fish are worth inspecting before eating if they've clearly been sitting.",
      "If you're uncertain about ingredients, ask. Vendors are usually willing to explain what's in their food.",
    ),

    // ——— 9 Vocabulary ———
    h2("Italian street food vocabulary"),
    table(
      ["Italian", "Meaning"],
      [
        ["da asporto / da portare via", "To take away (as opposed to eating in)"],
        ["al banco", "At the counter (standing)"],
        ["bancarella", "A market stall"],
        ["banco", "Counter; also used for a market stall counter"],
        ["al taglio", "By the cut / by the slice (especially for pizza)"],
        ["al peso", "By weight"],
        ["fritto / fritta", "Fried (masculine / feminine)"],
        ["forno / panificio", "Bakery / bread bakery"],
        ["gastronomia", "A deli-style shop selling prepared foods"],
        ["friggitoria", "A shop specialising in fried foods"],
        ["piadineria", "A stand or shop specialising in piadina"],
        ["porzione", "Portion"],
        ["ripieno / farcito", "Filled / stuffed"],
        ["caldo / calda", "Hot (masculine / feminine)"],
        ["senza carne", "Without meat"],
        ["senza glutine", "Gluten-free"],
        ["cosa c'è dentro?", "What's inside?"],
        ["spuntino", "A snack; a small bite to eat between meals"],
      ],
    ),

  ],

  faqs: [
    { question: "What is Italy's most famous street food?", answer: "There is no single answer — Italy's street food traditions are regional rather than national. In Sicily, arancine (Palermo) and arancini (Catania) are iconic; in Naples, pizza a portafoglio and the cuoppo; in Rome, pizza al taglio and supplì; in Florence, lampredotto. Each city has its own answer." },
    { question: "What is an arancino?", answer: "An arancino (or arancina in Palermo) is a fried ball of seasoned rice, coated in breadcrumbs and deep-fried. It's typically filled with ragù and peas, or with butter and mozzarella. The name comes from arancia (orange) — the colour and shape. The term varies by city: arancina in Palermo and western Sicily; arancino in Catania and the east." },
    { question: "What is pizza al taglio?", answer: "Pizza al taglio is rectangular pizza baked in large trays and sold by weight, cut with scissors. It's a Roman bakery tradition distinct from Neapolitan pizza: the dough is typically thicker or crunchier, and toppings can include tomato and mozzarella, potato, courgette flowers or cured meats. You point at what you want, it's weighed, and you pay by weight." },
    { question: "What is pizza a portafoglio?", answer: "Pizza a portafoglio is Neapolitan pizza folded into quarters and eaten by hand, standing up. The pizza is baked in a wood-fired oven to the same standard as restaurant Neapolitan pizza — soft, lightly charred, with good dough — then folded for the street. Sold from street-facing counters, eaten immediately, hot." },
    { question: "What is a supplì?", answer: "A supplì is a Roman fried rice ball, oval in shape, filled with ragù and mozzarella, coated in egg and breadcrumbs and deep-fried. When bitten, the mozzarella inside stretches — giving rise to the nickname supplì al telefono. Sold in Roman gastronomie and pizza al taglio shops." },
    { question: "What is lampredotto?", answer: "Lampredotto is a Florentine street food made from the fourth stomach of the cow (the abomaso), slow-cooked in broth and served in a bread roll soaked in the cooking liquid, with green herb sauce and sometimes hot sauce. It's sold from traditional carts (lampredottai) and is specifically Florentine. It has a strong flavour; it is an offal dish." },
    { question: "What street food should I try in Rome?", answer: "In Rome, pizza al taglio and supplì are the most established traditions — both are easy to find and represent Roman bakery food well. Trapizzino (stew filling in a pizza dough pocket) is also well regarded. For sit-down Roman food, carbonara and cacio e pepe belong in a trattoria rather than on the street." },
    { question: "What street food is famous in Naples?", answer: "Naples is known for pizza a portafoglio (folded pizza), the cuoppo (fried food in a paper cone), frittatina di pasta (fried pasta cake) and the graffa (fried potato doughnut). Sfogliatella — the layered or flaky pastry filled with ricotta — is also a Neapolitan speciality, though more pastry-counter than mobile stall." },
    { question: "What street food is famous in Sicily?", answer: "Palermo is known for arancine (fried rice balls), panelle (chickpea fritters), sfincione (thick pizza) and stigghiola (grilled intestines). The Ballarò and Capo markets are good places to find street food concentrated in one area. The term in Palermo is arancina; in Catania and eastern Sicily, arancino." },
    { question: "What is piadina?", answer: "Piadina is a thin flatbread from Romagna, cooked on a flat cast-iron plate and filled with cured meats, cheese and herbs. Sold from small kiosks (piadinerie) throughout the region and along the Adriatic Riviera. Piadina Romagnola holds a PGI designation under EU law." },
    { question: "Is Italian street food expensive?", answer: "Street food in Italy is generally inexpensive relative to restaurant meals, though costs vary by city and venue. Prices have risen in tourist-heavy areas and in food halls. Neighbourhood versions of the same food are typically cheaper." },
    { question: "Is Italian street food vegetarian-friendly?", answer: "Some Italian street food is vegetarian by tradition — farinata, panelle, focaccia, pizza al taglio with vegetable toppings, piadina with cheese. But meat, fish and cheese are central to many traditions (supplì, arancine with meat filling, lampredotto, cuoppo). There are usually options if you ask." },
    { question: "Can tourists find gluten-free Italian street food?", answer: "Farinata (chickpea flour) is naturally gluten-free. The practical challenge is cross-contact: most street food environments use wheat flour alongside. People with coeliac disease should communicate clearly with the vendor. Those with a mild sensitivity will find more options." },
    { question: "What is the difference between street food and market food?", answer: "The distinction is imprecise. In strict terms, street food is from a mobile or semi-fixed outdoor position; market food is from a market that may also sell raw ingredients. In Italian cities, many street foods are sold from bakeries and small shops with street-facing counters. The Italian Food Markets article covers market types in detail." },
    { question: "What should I know before ordering street food in Italy?", answer: "Point at what you want, be ready to pay, eat standing or walking, and ask about ingredients if you have dietary needs. Vendors assume you know what you're buying. If you're unsure, ask before they start preparing." },
    { question: "When is Italian street food eaten?", answer: "Street food in Italy is mostly a daytime food — mid-morning snack, quick lunch, or afternoon stop. Most foods are eaten between around 10am and 3pm. Cicchetti in Venice are also eaten in the early evening. Very few street food traditions are dinner-hour foods, except in tourist areas." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "Accademia della Crusca — vocabulary and terminology", url: "https://www.accademiadellacrusca.it/", note: "arancina/arancino, piadina, focaccia, farinata" },
    { label: "Comune di Napoli / DMO — Portale del Turismo di Napoli", url: "https://dmo-napoli.inera.it/", note: "pizza a portafoglio, cuoppo, frittatina" },
    { label: "Feel Florence (Comune di Firenze)", url: "https://feelflorence.it/", note: "lampredotto and Florentine food traditions" },
    { label: "Regione Siciliana — Turismo", url: "https://www.visitsicily.info/", note: "arancine/arancini and Palermitan street food" },
    { label: "Regione Puglia", url: "https://www.regione.puglia.it/", note: "panzerotto and focaccia barese traditions" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Piadina Romagnola PGI; Focaccia Genovese PGI" },
    { label: "Venezia Unica (Comune di Venezia)", url: "https://www.veneziaunica.it/", note: "cicchetti and bacari traditions" },
    { label: "Bologna Welcome (Comune di Bologna)", url: "https://www.bolognawelcome.com/", note: "Emilia-Romagna food traditions" },
    { label: "D.Lgs. 231/2017 (food information); EU Reg. 1169/2011 (allergen labelling)", url: "https://www.normattiva.it/", note: "allergen and food labelling requirements" },
  ],
};
