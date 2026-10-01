import type { ArticleContent, ContentBlock } from "@/lib/types";

// Feature: "Neapolitan Pizza" — built at the site's established, previously
// unpublished URL. Checked in October 2026 against: UNESCO's listing of the
// Art of Neapolitan 'Pizzaiuolo' (12.COM, 2017); Commission Regulation (EU) No
// 97/2010 (the Pizza Napoletana TSG specification) and Implementing Regulation
// (EU) 2022/2313 (registration with reservation of name); the AVPN's
// International Regulation as published on pizzanapoletana.org; the EU
// eAmbrosia register for Mozzarella di Bufala Campana and Pomodoro San Marzano
// dell'Agro Sarnese-Nocerino; Commission Regulation (EC) No 2527/98 (Mozzarella
// TSG); Matilde Serao's Il ventre di Napoli (1884); Antonio Mattozzi's
// archive-based history of Naples pizzerias; and Zachary Nowak's 2014 study of
// the Margherita story. The 1889 royal story, the Marinara's name and the
// dates claimed for individual pizzas are presented as traditions. No
// pizzerias are named or recommended, and no prices or opening hours are given.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/neapolitan-pizza";

export const neapolitanPizza: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("What is Neapolitan pizza?"),
    answer("**Neapolitan pizza is the round, soft pizza of Naples: a hand-stretched disc of simple dough with a puffy, blistered rim, a thin and slightly wet centre, a few toppings, and a bake of about a minute in a very hot wood-fired oven.** Its two classic forms are the **marinara** — tomato, garlic, oregano and olive oil — and the **margherita** — tomato, mozzarella, basil and olive oil. It's meant to be eaten as soon as it leaves the oven."),
    p("What sets it apart is less a secret ingredient than a way of working. The dough is left to rise for hours, shaped by hand without a rolling pin, topped sparingly and baked so fast that the rim swells and chars while the middle stays tender. The result is soft enough to fold, which is how it's often eaten in Naples."),
    {
      type: "facts",
      title: "Neapolitan pizza at a glance",
      rows: [
        { label: "Home", value: "Naples, the capital of Campania" },
        { label: "Dough", value: "Wheat flour, water, salt and yeast — nothing else" },
        { label: "Shaping", value: "By hand, pressing from the centre outwards; no rolling pin" },
        { label: "Baking", value: "Wood-fired oven, roughly 430–485 °C, for 60–90 seconds" },
        { label: "The classics", value: "Marinara and margherita" },
        { label: "Recognition", value: "UNESCO intangible heritage (the pizzaiuolo's craft, 2017); EU Traditional Speciality Guaranteed (Pizza Napoletana, 2010)" },
      ],
    },
    p("This is our guide to the pizza itself: where it comes from, what the rules say, how it's made and how to eat it in Naples. For the city, see [Naples for first-time visitors](/cities/naples-first-visit); for food across Italy, [Italian food traditions](/food/italian-food-traditions)."),
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "A short history of pizza in Naples",
        "Marinara and margherita",
        "How a Neapolitan pizza is made",
        "How to order and eat pizza in Naples",
        "Pizza a portafoglio: Naples' folded pizza",
        "Can you find Neapolitan pizza outside Naples?",
      ],
    },

    // ——— 2 ———
    h2("Why Naples became the home of pizza"),
    p("Flat breads baked with something on top are as old as bread ovens, and they exist all around the Mediterranean. So it's more accurate to say that Naples made **pizza as the world now knows it** than that it invented the idea of putting food on dough."),
    p("Several things came together in the city. Naples was for centuries one of Europe's largest and most crowded cities, with a great many people who ate cheaply, outside the home and on their feet. Pizza was ideal for them: made from inexpensive ingredients, baked in minutes and sold by the slice or whole. Campania supplied what went on top — tomatoes, cheese from buffalo and cow's milk, olive oil and herbs. And over the eighteenth and nineteenth centuries the city developed a dedicated trade, the **pizzaiuolo**, and a dedicated place to eat, the **pizzeria**."),
    image("naples-historic-centre-spaccanapoli", "The historic centre of Naples seen from above, a dense grid of rooftops cut through by the long straight street known as Spaccanapoli, with modern towers behind", true),
    p("That trade is still at the heart of things. Pizzaiuoli learn mostly by working beside more experienced ones, and the skill is in the hands: judging the dough, shaping it in seconds, and managing a fire that's hotter in some parts of the oven than others."),

    // ——— 3 ———
    h2("A short history of pizza in Naples"),
    h3("The word"),
    p("The word *pizza* appears in a Latin document from **Gaeta**, on the coast north of Naples, dated **997**: a tenant agreed to give the local bishop twelve *pizze* at Christmas and twelve at Easter. It's a striking early record, but it tells us about a word, not about the dish served in Naples today. Where the word comes from is still debated."),
    h3("Tomatoes arrive"),
    p("Tomatoes came to Europe from the Americas in the sixteenth century and were adopted slowly. When exactly they first went onto pizza in Naples isn't precisely documented; the EU specification for Pizza Napoletana places it in the early eighteenth century. What's certain is that by the nineteenth century, tomato was one of the standard toppings."),
    h3("The pizzeria and the street"),
    p("The historian Antonio Mattozzi, working from city archives, traces the rise of the pizzeria — a shop with its own oven, where pizza was made, sold and increasingly eaten on the spot — through the late eighteenth and nineteenth centuries. Pizza was also sold in the street, and a good deal of it was eaten that way."),
    p("The writer Matilde Serao left a vivid account in *Il ventre di Napoli* (1884), her report on how the city's poor lived. She describes pizzas baked at night and cut into slices sold for a *soldo*, the smallest coin, from stalls on street corners; boys carrying trays of slices through the alleys after dark; and toppings of tomato and garlic, mozzarella, or salted anchovies. She is not romantic about it: for many Neapolitans, pizza was simply what they could afford for lunch or dinner. She also tells of a Neapolitan who opened a pizzeria in Rome, where it soon faded — pizza, she wrote, seemed out of place away from Naples."),
    h3("From Naples to the world"),
    p("In the twentieth century pizza spread through Italy and, with Italian emigration, abroad — above all to the United States, where it developed styles of its own. Over the same period Neapolitan pizzaiuoli began to write down and defend their methods. In 1984 a group of them set out the rules of \"true\" Neapolitan pizza and founded the **Associazione Verace Pizza Napoletana (AVPN)**; later came EU registration as a traditional speciality and, in 2017, UNESCO recognition of the pizzaiuolo's craft."),

    // ——— 4 ———
    h2("What UNESCO recognised"),
    p("In 2017 UNESCO inscribed the **\"Art of Neapolitan 'Pizzaiuolo'\"** on its Representative List of the Intangible Cultural Heritage of Humanity. It's worth being precise about what that means."),
    ul(
      "**It recognises a craft, not a food.** UNESCO describes a culinary practice in four phases — preparing the dough and baking it in a wood-fired oven — with a characteristic rotating movement by the pizzaiuolo.",
      "**It's about people.** The listing names the master pizzaiuolo, the pizzaiuolo and the baker, together with Neapolitan families who make pizza at home, and stresses how skills pass from master to apprentice in the *bottega*, the pizzeria workshop. It puts the number of pizzaiuoli in Naples at about 3,000.",
      "**It's intangible heritage, not a World Heritage Site.** That's a different list: the historic centre of Naples has been a World Heritage Site since 1995, but pizza itself is not \"a heritage site\".",
      "**It doesn't certify pizzas or pizzerias.** A pizza labelled \"Neapolitan\" anywhere in the world isn't covered by the inscription, and no restaurant can claim to be \"UNESCO-approved\".",
    ),
    p("UNESCO's listing also notes that the Associazione Pizzaiuoli Napoletani runs annual courses on the history, tools and techniques of the craft, and that skills are passed on in specialised academies and in family homes as well as in the bottega."),

    // ——— 5 ———
    h2("What makes a traditional Neapolitan pizza"),
    p("Two documents set out what a traditional Neapolitan pizza should be, and it's useful to know both."),
    ul(
      "**The EU specification for Pizza Napoletana**, a Traditional Speciality Guaranteed (TSG, or STG in Italian). Registered in 2010 on an application from the AVPN and the Associazione Pizzaiuoli Napoletani, it has since **December 2022** been registered with **reservation of the name**, so within the EU the name \"Pizza Napoletana\" belongs to pizza made to that specification. A TSG protects a recipe and method rather than a place: it can be made anywhere, provided the rules are followed. The specification covers only the marinara and the margherita.",
      "**The AVPN's International Regulation**, the private standard the association uses to certify member pizzerias in Italy and abroad.",
    ),
    p("The two agree on the essentials — hand shaping, a wood-fired oven, a short bake, a soft pizza with a raised rim — but differ on some numbers, as the table below shows. Neither is a description of every pizza made in Naples: many pizzerias follow the tradition without being certified, and many go their own way."),
    table(
      ["", "EU specification (TSG)", "AVPN International Regulation"],
      [
        ["Flour", "Soft wheat flour with set technical characteristics", "Type 00 or 0 soft wheat flour"],
        ["Yeast", "Brewer's yeast", "Fresh or dry brewer's yeast, or sourdough starter"],
        ["Rising", "About 2 hours in bulk, then 4–6 hours as dough balls", "Recommended 8–24 hours in total"],
        ["Dough ball", "180–250 g", "200–280 g"],
        ["Diameter", "Up to 35 cm", "22–35 cm"],
        ["Centre", "0.4 cm thick (±10%)", "No more than about 0.25 cm (±10%)"],
        ["Rim", "1–2 cm", "1–2 cm, puffy and free of burns"],
        ["Oven", "Wood-fired; cooking floor about 485 °C", "Wood-fired; 430–480 °C"],
        ["Baking time", "60–90 seconds", "60–90 seconds"],
      ],
      "Two standards for traditional Neapolitan pizza, as published in October 2026",
    ),
    h3("The dough"),
    p("The dough is just wheat flour, water, salt and yeast — no oil, no sugar, no milk. It's mixed until smooth and elastic, left to rise, divided into balls by hand and left to rise again. The long rise matters: it develops flavour and makes the dough easier to digest and to stretch. Many pizzerias now ferment their dough for longer than the older rules required."),
    h3("The tomato"),
    p("Both standards call for **peeled tomatoes**, crushed rather than cooked into a sauce, and allow **fresh small tomatoes** as well. The tomato goes on raw and cooks only in the oven, which is why it tastes bright rather than stewed."),
    p("You'll often hear that Neapolitan pizza must be made with San Marzano tomatoes. It doesn't. **Pomodoro San Marzano dell'Agro Sarnese-Nocerino** is an EU Protected Designation of Origin (since 1996) for peeled tomatoes of the San Marzano type grown and processed in a defined area of the provinces of Salerno, Naples and Avellino — a fine ingredient that many pizzerias use and advertise. But neither the EU specification nor the AVPN requires it, and the words \"San Marzano\" on a tin don't mean the contents are the PDO product: look for the full protected name and the EU's PDO logo. Many pizzerias use other tomatoes, including, sometimes, the small **Pomodorino del Piennolo del Vesuvio**, another Campanian PDO."),
    h3("Mozzarella and other ingredients"),
    image("fresh-mozzarella", "Balls of fresh white mozzarella piled in a plastic tub"),
    p("Two cheeses dominate. **Mozzarella di Bufala Campana** is a PDO buffalo-milk mozzarella from a defined area centred on Campania; it's rich and milky, and releases more liquid as it bakes. **Fior di latte** is mozzarella made from cow's milk, firmer and a little milder. The EU specification allows buffalo mozzarella or mozzarella made to the EU's separate \"Mozzarella\" TSG standard; the AVPN allows buffalo mozzarella or fior di latte. Neither standard insists on a single cheese, and on menus in Naples a margherita made with buffalo mozzarella is often listed separately, sometimes at a higher price."),
    p("The rest is short: **fresh basil**, **extra virgin olive oil**, poured in a spiral, and for the marinara **garlic and oregano**. Hard grated cheese is optional under the AVPN rules. The idea is a few ingredients, each in proportion — the EU specification measures the tomato in grams and the oil in single grams."),
    h3("The wood-fired oven"),
    image("naples-wood-fired-oven-flames", "Flames rising from burning wood at the side of a domed brick pizza oven in Naples", true),
    p("A traditional Neapolitan oven is a low dome of refractory material over a flat cooking floor, with the fire burning to one side. The heat is extreme by any kitchen standard: about 485 °C on the floor according to the EU specification, or 430–480 °C according to the AVPN. At that heat a pizza cooks in 60 to 90 seconds."),
    p("The speed is the point. The base sets almost instantly; steam inside the dough inflates the rim before it can dry out; the tomato loses its excess water but stays fresh; and the mozzarella melts without turning greasy. Bake the same dough for ten minutes in a domestic oven and you get something drier and crisper — pleasant, perhaps, but different."),
    p("Both standards require a wood-fired oven. In practice many pizzerias in and beyond Naples now bake in gas or electric ovens built to reach similar temperatures; they can make excellent pizza, but it isn't what the traditional specifications describe."),
    h3("The cornicione"),
    p("The **cornicione** is the raised rim — from *cornice*, a frame or ledge. It forms when the pizzaiuolo presses the dough from the centre outwards, pushing the air towards the edge, where it puffs up in the oven. A good cornicione is soft and light inside, with some charred spots on the outside, sometimes called *leopardatura* (leopard-spotting). Large blackened patches are another matter: the AVPN asks for a rim \"free of burns\"."),
    p("The centre is meant to be thin and soft, and it can look slightly wet where tomato, oil and mozzarella meet. That isn't undercooking; it's how Neapolitan pizza is supposed to be. The EU specification describes the finished pizza as tender, elastic and easy to fold into four."),

    // ——— 6 ———
    h2("Marinara and margherita"),
    p("The two pizzas covered by the EU specification are also the two you'll find on almost every menu in Naples."),
    table(
      ["Pizza", "Main characteristics", "Typical ingredients", "Cultural context"],
      [
        ["Marinara", "No cheese; bright, garlicky and fragrant", "Tomato, garlic, oregano, extra virgin olive oil, salt", "Often described as the older of the two. The name is commonly linked to sailors or the seafront, but it contains no fish or seafood."],
        ["Margherita", "Red, white and green; milky and mild", "Tomato, mozzarella (buffalo or fior di latte), fresh basil, extra virgin olive oil, salt", "The best-known pizza in the world, associated by tradition with Queen Margherita of Savoy — see below."],
      ],
    ),
    image("pizza-margherita-basil", "A margherita pizza with patches of melted mozzarella, crushed tomato and whole basil leaves, its puffy rim browned and blistered"),
    p("**The marinara has no seafood.** Visitors are sometimes surprised to find no fish on a pizza called *marinara*. The name is usually explained by its association with mariners — a simple pizza of ingredients that kept well — but that is a tradition rather than a documented fact. On a Naples menu, a marinara means tomato, garlic, oregano and oil."),
    p("**The margherita is not the only \"real\" pizza.** It's the yardstick by which many Neapolitans judge a pizzeria, precisely because there is nowhere to hide. But Neapolitan menus are long, with pizzas topped with ricotta, salami, mushrooms, anchovies, provola (a smoked cheese) and, in season, *friarielli*, the bitter greens often paired with sausage."),

    // ——— 7 ———
    h2("The story behind the margherita"),
    p("The famous version goes like this. In June 1889, during a royal visit to Naples, the pizzaiuolo **Raffaele Esposito** made pizzas for **Queen Margherita**; the one she liked best was topped with tomato, mozzarella and basil — the red, white and green of the Italian flag — and he named it after her. A letter from the royal household, thanking him, is still displayed at the pizzeria that claims the story."),
    p("Historians have found reasons to doubt it. In a 2014 study, the food historian **Zachary Nowak** pointed out that no newspaper of the time reported the episode, questioned the authenticity of the letter, and argued that the story and the name were promoted decades later. Antonio Mattozzi's archive-based history of Neapolitan pizzerias, which Nowak edited and translated into English, likewise counts the queen's pizza among the myths around pizza's origins. And pizzas topped with tomato, mozzarella and basil seem to have existed before 1889: the EU specification itself dates the margherita to 1796–1810 while also repeating the royal story."),
    p("So the fair summary is this: **tomato, mozzarella and basil were already a Neapolitan combination; the name \"margherita\" is genuinely associated with the queen; and the 1889 episode is a story that is widely told, firmly attached to one pizzeria, and not established by contemporary evidence.** It's a good story — just not a documented one."),
    note("Queen Margherita did not invent pizza, and Raffaele Esposito did not invent the margherita in any way that can be proved. The dates given for individual pizzas — 1734 for the marinara, for instance, as the EU specification states — come from tradition rather than surviving records.", "Fact and tradition"),

    // ——— 8 ———
    h2("How a Neapolitan pizza is made"),
    p("You'll see much of this from the counter in a Naples pizzeria, where the oven and the work bench are often in full view. This is the process as both traditional standards describe it, simplified for visitors."),
    {
      type: "steps",
      items: [
        { title: "Mixing the dough", text: "Water, salt, yeast and flour are mixed — starting from the water, adding the flour gradually — until the dough is smooth, soft and no longer sticky." },
        { title: "First rise", text: "The dough rests on the bench under a damp cloth so the surface doesn't dry and form a crust." },
        { title: "Forming the balls", text: "Portions are cut and shaped into balls by hand, in a movement that the AVPN compares to the way mozzarella is shaped. Each weighs roughly 180–280 g, depending on the standard." },
        { title: "Second rise", text: "The balls rise again in covered trays, for hours, until they're soft and full of air." },
        { title: "Stretching by hand", text: "The pizzaiuolo presses each ball from the centre outwards with the fingertips, turning it, then stretches it between the hands. No rolling pin and no press, which would squeeze out the air the rim needs." },
        { title: "Tomato", text: "Crushed tomato is spooned onto the centre and spread in a spiral, leaving the rim bare." },
        { title: "Cheese, basil and oil", text: "For a margherita, slices or strips of mozzarella and a few basil leaves; for a marinara, garlic and oregano. Then a spiral of olive oil." },
        { title: "Into the oven", text: "The pizza is slid onto a peel and into the oven with a quick flick of the wrist, then turned with a metal peel so it cooks evenly beside the fire." },
        { title: "Out and onto the plate", text: "After 60–90 seconds it comes out and goes straight to the table. Neapolitan pizza is made to be eaten at once." },
      ],
    },
    image("shaping-pizza-dough-by-hand", "Hands pressing a ball of pizza dough into a disc on a floured marble counter, with trays of dough balls behind"),
    p("Watching a busy pizzeria at full speed is part of the pleasure: one person shaping and topping, another at the oven turning several pizzas at once, and a constant flow of plates. This is the craft UNESCO recognised — and why the same dough can turn out very differently from one pizzaiuolo to the next."),

    // ——— 9 ———
    h2("How to order and eat pizza in Naples"),
    p("Habits vary from pizzeria to pizzeria, but these are things you're likely to encounter."),
    ul(
      "**One pizza each.** In a sit-down pizzeria, pizza is usually ordered as an individual dish, one per person, rather than shared from the middle of the table. Sharing a starter of fried snacks is common; sharing one pizza between several people is less so.",
      "**It arrives whole.** Many pizzerias serve it uncut. Neapolitans often eat it with a knife and fork, especially at first, when the centre is softest; others cut it into wedges and fold them, or fold the whole pizza. Do whatever feels natural.",
      "**Eat it straight away.** Neapolitan pizza is at its best in the first few minutes. Waiting for everyone's to arrive is polite elsewhere; in a pizzeria, people usually start when theirs is hot.",
      "**Read the menu by its classics.** Most menus start with the marinara and the margherita, then list long variations. A margherita made with buffalo mozzarella is often a separate line.",
      "**Drinks are simple.** Beer, soft drinks and water are the usual companions; many pizzerias have a short wine list.",
      "**The bill.** Some places charge a per-person cover (*coperto*), which should be listed on the menu. Ask for the bill at the end; it won't usually come until you do.",
    ),
    image("pizza-served-naples", "A pizza with tomato, mozzarella, basil and slices of salami served on a plate in Naples, with a knife and fork beside it and cherry tomatoes and pasta in the background"),
    h3("Queues and timing"),
    p("Well-known pizzerias in the historic centre often have queues, especially at weekends and around dinner time. Many don't take bookings; you may be asked to give your name at the door and wait to be called. Arriving early in the evening or going at lunchtime helps. Neighbourhood pizzerias away from the main sights are usually calmer, and the pizza can be just as good."),
    tip("Pizza is one of the most affordable sit-down meals in Naples — see [how much a trip to Italy costs](/guides/italy-trip-cost) for wider budgeting. We don't list prices or opening hours, which change; check them with the pizzeria.", "Budget and practicalities"),

    // ——— 10 ———
    h2("Pizza a portafoglio: Naples' folded pizza"),
    p("**Pizza a portafoglio** — \"wallet pizza\", also called *pizza a libretto* (\"booklet pizza\") — is a smaller pizza, folded in half and then in half again, and wrapped in paper so you can eat it standing up or walking. It's the classic street version of Neapolitan pizza."),
    ul(
      "**How it's served:** freshly baked, usually as a simple margherita or marinara, often with lighter toppings so the tomato doesn't run out when it's folded. Some places hand it over open on a sheet of paper for you to fold; others fold it for you.",
      "**Where you'll find it:** at the street-facing counters of some pizzerias, and at some bakeries and *rosticcerie* (takeaway shops), especially in the historic centre.",
      "**How it differs from a sit-down pizza:** it's quicker, cheaper and more casual — a snack or a light lunch on the move rather than a meal at a table. It's the same dough and the same oven, eaten in a different way.",
    ),
    p("Its exact origins aren't documented, and we haven't found good evidence for the precise dates sometimes quoted. But eating pizza in the street is old in Naples: Serao's slices sold for a *soldo* in 1884 were street food, and the softness that the EU specification describes — easy to fold into four — makes folding an obvious thing to do."),
    h3("Pizza fritta"),
    p("Naples also has **pizza fritta**: dough filled — often with ricotta, provola, pork cracklings (*cicoli*) or tomato — and deep-fried rather than baked. It's a long-standing street food, celebrated in Vittorio De Sica's 1954 film *L'oro di Napoli*, whose episode \"Pizze a credito\" is set in a fried-pizza shop and refers to the old custom of eating now and paying in eight days, *pizza a oggi a otto*. You'll find it at friggitorie and specialist pizzerias."),

    // ——— 11 ———
    h2("Pizza in everyday Neapolitan life"),
    p("In Naples, pizza is not a special-occasion food or a tourist attraction, though it can be both. It's an ordinary meal: a midweek dinner with friends, a family's weekend outing, a quick lunch from a counter. Neighbourhood pizzerias are part of daily life all over the city, not only in the centre."),
    p("That everyday quality has deep roots. In Serao's day pizza was food for people with little money, and it's still one of the most affordable ways to eat out in the city. Pizzerias are social places — loud, quick and busy — where groups of friends and whole families share a table, each with their own pizza."),
    image("homemade-pizza-naples", "A small homemade pizza with ham, mushrooms and black olives on a slate board, with a rolling pin in the background, made at a home pizza party near Naples"),
    p("Pizza is also made at home — something UNESCO's listing explicitly mentions. Home pizza rarely follows the professional rules: it's baked in a domestic oven, sometimes rolled out, topped with whatever is in the fridge. It belongs to the same culture all the same."),
    p("After pizza, many Neapolitans finish at a bar or pastry shop rather than ordering dessert. For what comes next, see [Italian coffee culture](/food/italian-coffee-culture) and [traditional Italian desserts](/food/traditional-italian-desserts), which covers the sfogliatella and the babà."),

    // ——— 12 ———
    h2("Traditional pizza and modern Naples"),
    p("Naples guards its pizza tradition, but it isn't frozen. Over the past two decades pizza-making in the city has changed a great deal."),
    ul(
      "**Different flours** — some pizzaiuoli blend in wholemeal, stone-ground or other grains.",
      "**Longer, slower fermentation** — often far beyond the traditional minimums, for flavour and digestibility.",
      "**Seasonal and regional toppings** — Campanian vegetables, cheeses and cured meats, used with a chef's eye.",
      "**Bigger rims** — the airy, very tall cornicione of what's often called *pizza contemporanea*, nicknamed **pizza canotto** (\"rubber-dinghy pizza\"), a label popularised by the Italian food site Scatti di Gusto.",
      "**New equipment** — modern gas and electric ovens, and carefully controlled, refrigerated fermentation.",
    ),
    image("burrata-cherry-tomato-pizza-campania", "A pizza with a puffy, blistered rim topped with torn burrata, cherry tomatoes and basil, on a wooden board at a pizzeria counter in Campania", true),
    p("None of this is automatically less authentic. Neapolitan pizza has always changed — the tomato itself was once a novelty. What's useful is to know the difference: a pizza can follow the traditional specifications, follow the tradition loosely, or be a contemporary creation built on it. Some pizzerias offer traditional and contemporary pizzas side by side, and arguments about which is better are part of Neapolitan food culture."),

    // ——— 13 ———
    h2("Can you find Neapolitan pizza outside Naples?"),
    p("Yes — the style has spread around the world, and you can eat excellent Neapolitan-style pizza far from Campania. But the word \"Neapolitan\" can mean three different things."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Inspired", title: "Neapolitan-style", text: "A pizza made in the Neapolitan manner — soft, with a puffy rim, baked hot and fast. Quality varies from superb to poor, and the label alone doesn't tell you which." },
        { label: "Certified", title: "A specific standard", text: "A pizzeria certified by the AVPN, which publishes a register of members, or a pizza sold as Pizza Napoletana TSG under the EU scheme." },
        { label: "Marketing", title: "Just a word", text: "\"Neapolitan\" used loosely on a menu. Within the EU, the name \"Pizza Napoletana\" is reserved for pizza made to the specification; outside the EU, the word is used freely." },
      ],
    },
    image("neapolitan-style-pizza-paris", "A Neapolitan-style pizza with a charred, puffy rim, cut into slices on a blue plate on a marble table in Paris"),
    p("If you want to judge a pizza outside Naples, look at the things the tradition cares about: a dough that is soft and light rather than dense or crisp, a rim that's risen and spotted rather than flat or burnt, a centre that's thin and tender, a few good ingredients rather than many, and a very short bake. Whether the oven burns wood, gas or electricity, those are the signs of someone who has learned the craft."),
    p("Italy has many other pizza traditions too: Roman pizza by the slice, sold by weight, and the very thin, crisp round pizza of Rome; Sicilian *sfincione* in Palermo; and countless local variations. See [Italian food traditions](/food/italian-food-traditions) and [Sicilian food traditions](/food/sicily-food-traditions)."),

    // ——— 14 ———
    h2("What to know before visiting a Naples pizzeria"),
    ul(
      "**Don't expect crunch.** A soft, foldable pizza with a wet centre is right, not a mistake.",
      "**Try a marinara as well as a margherita.** It's the clearest test of dough, tomato and oven.",
      "**Go early or late.** Famous pizzerias have queues at peak times; neighbourhood places often don't.",
      "**One each, eaten hot.** Order your own and start when it arrives.",
      "**Knife and fork, or fold it.** Both are normal.",
      "**Look past the famous names.** Good pizza is made all over the city.",
      "**Check the menu for the cover charge**, and ask for the bill when you're ready.",
      "**Try it in the street too** — a pizza a portafoglio or a pizza fritta.",
      "**Be sceptical of claims.** \"UNESCO pizza\", \"the original margherita\" and \"the oldest pizzeria\" are marketing until shown otherwise.",
    ),
    p("Pizza fits easily into a day in the historic centre, where Via dei Tribunali and the streets around it have many pizzerias; our [Naples guide](/cities/naples-first-visit) has itineraries and neighbourhoods. For getting to Naples by train, see [getting between Italian cities](/guides/getting-between-italian-cities), and for planning the rest of the trip, the [complete Italy travel guide](/guides/complete-italy-travel-guide)."),

    // ——— 15 ———
    h2("Pizza words"),
    table(
      ["Word", "Meaning"],
      [
        ["Pizzaiuolo / pizzaiolo", "Pizza maker; *pizzaiuolo* is the traditional Neapolitan form, used by UNESCO"],
        ["Cornicione", "The raised rim"],
        ["Verace", "\"True\", as in the Associazione Verace Pizza Napoletana"],
        ["Fior di latte", "Cow's-milk mozzarella"],
        ["Bufala", "Buffalo mozzarella"],
        ["Pomodoro pelato", "Peeled tomato"],
        ["Panetto", "A dough ball"],
        ["Pala", "Peel, the long paddle used at the oven"],
        ["A portafoglio / a libretto", "Folded in four, for eating in the street"],
        ["Pizza fritta", "Filled, fried pizza"],
        ["Coperto", "Per-person cover charge"],
      ],
    ),
    p("Neapolitan pizza looks like the simplest food in the world, and in a sense it is: flour, water, tomato, cheese, fire. What makes it remarkable is the skill packed into that simplicity — and the fact that, in Naples, it's still everyday food, made fresh for whoever walks in."),
  ],

  faqs: [
    { question: "What is Neapolitan pizza?", answer: "The traditional pizza of Naples: a hand-stretched round of flour, water, salt and yeast, with a soft, puffy rim and a thin centre, a few toppings, and a bake of 60–90 seconds in a very hot wood-fired oven." },
    { question: "What makes a pizza Neapolitan?", answer: "A long-risen dough of only flour, water, salt and yeast; shaping by hand with no rolling pin; simple toppings; and a very short bake at about 430–485 °C. The result is soft and foldable with a raised rim, the cornicione." },
    { question: "What is the difference between a marinara and a margherita?", answer: "A marinara is tomato, garlic, oregano and olive oil, with no cheese. A margherita is tomato, mozzarella, basil and olive oil." },
    { question: "Does pizza marinara contain seafood?", answer: "No. Despite the name, a Neapolitan marinara has no fish or seafood. The name is traditionally linked to sailors, but that explanation isn't documented." },
    { question: "Is Neapolitan pizza always made with mozzarella?", answer: "No. The marinara has no cheese at all. When mozzarella is used, it may be buffalo mozzarella (Mozzarella di Bufala Campana PDO) or fior di latte, made from cow's milk." },
    { question: "Are San Marzano tomatoes required?", answer: "No. San Marzano dell'Agro Sarnese-Nocerino PDO tomatoes are prized and widely used, but neither the EU specification nor the AVPN's rules require them. Both call for peeled tomatoes, and fresh small tomatoes are also allowed." },
    { question: "What is a cornicione?", answer: "The raised, puffy rim of a Neapolitan pizza. It forms when the dough is pressed from the centre outwards, pushing air to the edge, which swells in the oven." },
    { question: "Why is Neapolitan pizza cooked so quickly?", answer: "Because the oven is extremely hot — about 430–485 °C. At that heat a pizza bakes in 60–90 seconds, so the rim puffs up before it dries and the centre stays soft." },
    { question: "Is Neapolitan pizza thin or thick?", answer: "Both: the centre is very thin — a few millimetres — while the rim is thick and airy. It's soft rather than crisp." },
    { question: "Is Neapolitan pizza always cooked in a wood-fired oven?", answer: "The traditional standards require one, and many Naples pizzerias use them. Some now use gas or electric ovens that reach similar temperatures; their pizza can be excellent but doesn't meet the traditional specifications." },
    { question: "What does UNESCO recognise about Neapolitan pizza?", answer: "Since 2017 the \"Art of Neapolitan 'Pizzaiuolo'\" has been on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. It recognises the pizza maker's craft and its transmission, not pizza as a food or any particular pizzeria." },
    { question: "Is the margherita really named after Queen Margherita?", answer: "The name is associated with her, but the famous story of an 1889 royal visit to Raffaele Esposito isn't supported by contemporary evidence, and historians doubt the letter displayed as proof. Tomato, mozzarella and basil pizzas seem to predate it." },
    { question: "What does pizza a portafoglio mean?", answer: "\"Wallet pizza\": a small pizza folded in four and wrapped in paper to eat in the street. It's also called pizza a libretto." },
    { question: "How should you order pizza in Naples?", answer: "Order one pizza each, eat it as soon as it arrives — with a knife and fork or folded — and ask for the bill at the end. Check the menu for a cover charge." },
    { question: "Can you eat authentic Neapolitan pizza outside Naples?", answer: "Yes. Many pizzerias around the world follow the tradition closely, and the AVPN certifies member pizzerias abroad. But \"Neapolitan\" on a menu is not a guarantee; judge by the dough, rim and bake." },
  ],

  sourcesTitle: "Sources",
  sources: [
    { label: "UNESCO — Art of Neapolitan 'Pizzaiuolo'", url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722", note: "inscribed 2017 (12.COM); description of the element" },
    { label: "Commission Regulation (EU) No 97/2010 — Pizza Napoletana TSG", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R0097", note: "product specification" },
    { label: "Commission Implementing Regulation (EU) 2022/2313 — Pizza Napoletana TSG with reservation of name", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2313", note: "in force December 2022" },
    { label: "Associazione Verace Pizza Napoletana — International Regulation", url: "https://www.pizzanapoletana.org/en/ricetta_pizza_napoletana", note: "current standard, checked October 2026" },
    { label: "eAmbrosia — EU geographical indications register", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Mozzarella di Bufala Campana PDO; Pomodoro San Marzano dell'Agro Sarnese-Nocerino PDO; Pomodorino del Piennolo del Vesuvio PDO" },
    { label: "Commission Regulation (EC) No 2527/98 — Mozzarella TSG", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:31998R2527", note: "in Italian" },
    { label: "Matilde Serao, Il ventre di Napoli (1884)", url: "https://www.liberliber.it/online/autori/autori-s/matilde-serao/il-ventre-di-napoli/", note: "pizza in 1880s Naples; in Italian" },
    { label: "Antonio Mattozzi, Inventing the Pizzeria: A History of Pizza Making in Naples (Bloomsbury, 2015)", url: "https://www.bloomsbury.com/uk/inventing-the-pizzeria-9781472586162/", note: "archive-based history" },
    { label: "Zachary Nowak, \"Folklore, Fakelore, History: Invented Tradition and the Origins of the Pizza Margherita\", Food, Culture & Society 17:1 (2014)", url: "https://doi.org/10.2752/175174414X13828682779249", note: "the 1889 story" },
  ],
};
