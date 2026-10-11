import type { ArticleContent, ContentBlock } from "@/lib/types";

// Italian Pasta Shapes. Regional associations, shape categories, and
// pairing conventions cross-checked against:
// — Accademia Italiana della Cucina: regional pasta traditions and recipe documentation
// — Unione Italiana Food: pasta industry data and classification
// — Bologna Chamber of Commerce: registered dimensions of tagliatelle
// — Instituto Valorizzazione Salumi Italiani and Consorzio del Prosciutto di Parma:
//   filling details for Emilia-Romagna pasta
// — Regione Puglia / Assessorato alle Risorse Agroalimentari: orecchiette traditions
// — Comune di Alberobello and Puglia regional institutions: orecchiette documentation
// — Sardinia regional tourism and food boards: malloreddus and culurgiones
// — Slow Food Foundation for Biodiversity (Ark of Taste): endangered shapes
// — Accademia della Crusca: Italian pasta terminology
// Shape-sauce pairings are documented conventions, not universal rules. No invented
// dates, named inventors, unsupported origin claims, or fabricated statistics are used.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-pasta-shapes";

export const italianPastaShapes: ArticleContent = {
  body: [
    h2("Why pasta shapes matter"),
    answer("**Pasta shape affects how a dish cooks, tastes, and holds together.** Ridged or porous surfaces trap and hold sauce more effectively than smooth ones; wide, sturdy shapes can carry chunky ragù without collapsing; fine, delicate shapes are overwhelmed by heavy sauces and work better in broth or with light dressings. A thick, hand-rolled pici from Siena and a factory-made spaghetti from Naples are both pasta, but they behave differently in the pot and at the table."),
    p("Shape-sauce pairings matter, but they are not fixed laws. Italian cooks have been pairing the shapes they had on hand with the sauces they knew — and the results have varied by town, household, and generation. The pairings described in this guide reflect the most widely documented traditions and conventions, not rules that override your own kitchen."),
    p("This guide covers the main categories of Italian pasta, walks through the shapes most strongly associated with each region, and offers practical advice on buying, cooking, and eating pasta. Internal links connect to relevant articles on Roman pasta dishes, Italian food markets, Italian food traditions, and other topics across the site."),
    {
      type: "facts",
      title: "Italian pasta shapes at a glance",
      rows: [
        { label: "Number of shapes", value: "Italy has several hundred documented pasta shapes; estimates vary widely depending on what counts as a distinct shape versus a regional variant" },
        { label: "Main categories", value: "Long pasta, short pasta, ribbon pasta, soup pasta, filled pasta — and within each, significant variation in diameter, texture, surface finish, and dough composition" },
        { label: "Dough types", value: "Most dried pasta is made with durum wheat semolina and water. Most fresh egg pasta in central and northern Italy uses soft wheat flour and eggs. Many southern shapes use semolina and water with no egg." },
        { label: "Regional depth", value: "Every Italian region has distinctive pasta traditions. Some shapes are genuinely local; others have spread nationally while keeping a regional identity in name and association." },
        { label: "Pairing conventions", value: "Shape-sauce pairings are culinary traditions, not legally enforced rules. They reflect real differences in how shapes behave with different sauces, but they vary by cook, family, and town." },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Understanding the main pasta categories",
        "Long pasta: spaghetti, linguine, bucatini",
        "Ribbon and egg pasta: tagliatelle and pappardelle",
        "Short and tubular pasta",
        "Filled pasta",
        "Italian pasta shapes by region",
        "Pasta shape comparison table",
        "Which pasta shape works with which sauce",
        "Fresh pasta vs dried pasta",
        "How to cook pasta",
        "Buying pasta in Italy",
        "Common pasta myths",
        "Italian pasta vocabulary",
      ],
    },
    image("pasta-board-variety", "A wooden cutting board covered with fresh pasta in various shapes and sizes, ready to cook", true),

    // ——— Categories ———
    h2("Understanding the main pasta categories"),
    p("Pasta is classified in several overlapping ways: by shape, by length, by whether it is filled or unfilled, by dough composition, and by production method. No single classification system covers all the cases cleanly — different pasta-makers, regions, and cookbooks draw the boundaries differently. The most useful distinctions for a cook are between long and short, between fresh and dried, and between filled and unfilled."),
    h3("Long pasta — pasta lunga"),
    p("Long pasta falls into two main groups: round strands (spaghetti and its relatives) and flat ribbons (fettuccine, tagliatelle, pappardelle). Round long pasta is typically dried; ribbon pasta can be fresh or dried and generally contains egg when made fresh in central and northern Italy."),
    ul(
      "**Spaghetti:** Italy's most produced pasta shape — a round, thin strand typically made from durum wheat semolina and water. The name means 'little strings'. Widely used across Italy and the world, with no single regional claim.",
      "**Linguine:** Similar to spaghetti but flattened to an oval cross-section. 'Little tongues'. Closely associated with Ligurian pesto and seafood preparations; also used widely in Campania.",
      "**Bucatini:** A thick, hollow spaghetti-like strand with a hole running through it. Especially associated with Rome, where it is used in bucatini all'amatriciana. The hollow centre holds sauce differently from a solid strand.",
      "**Tonnarelli:** A square-section spaghetti — thicker and slightly chewy. A Rome-specific shape made with egg dough, associated with cacio e pepe and used in several other Roman preparations. Sometimes described as spaghetti alla chitarra (after the guitar-like frame used to cut it), though regional names vary.",
      "**Spaghetti alla chitarra:** A square-section egg pasta traditional to Abruzzo, where the chitarra frame is a kitchen staple. Related to tonnarelli but with distinct regional associations and often made slightly thicker.",
    ),
    h3("Ribbon pasta — pasta a nastro"),
    image("tagliatelle-ribbon", "A nest of uncooked tagliatelle with cherry tomatoes on a dark surface, showing the pale yellow egg-pasta ribbons", true),
    p("Ribbon pasta is characterised by flat strands of varying width. Width affects texture and the weight of sauce the pasta can carry — finer strands work with lighter, more delicate sauces; wide pappardelle can hold chunky game ragù without falling apart."),
    ul(
      "**Fettuccine:** Egg ribbon pasta about 5–7mm wide, closely associated with Rome and central Italy. Used in fettuccine al ragù and in various butter-based sauces.",
      "**Tagliatelle:** Egg ribbon pasta about 6–8mm wide, most strongly associated with Emilia-Romagna — specifically the Bologna tradition. Traditionally paired with Bolognese ragù. The precise width of tagliatelle alla Bolognese is registered with the Bologna Chamber of Commerce as equivalent to 1/12,704th of the height of the Torre degli Asinelli.",
      "**Tajarin:** A very fine egg ribbon pasta from Piedmont, thinner than tagliatelle. Made with more egg yolks than most egg pastas, giving it a rich golden colour. Associated with butter, truffle, and light meat sauces.",
      "**Pappardelle:** Wide egg ribbons, about 13–20mm wide, associated with Tuscany and central Italy. The width makes them well suited to robust, chunky ragù — hare, wild boar, duck — where thinner pasta would not hold up.",
      "**Trenette:** A Ligurian long pasta, flat like linguine but slightly narrower and associated specifically with pesto Genovese. Traditionally served with pesto, potatoes, and green beans all cooked together — the potatoes thicken the sauce slightly.",
    ),
    h3("Short pasta — pasta corta"),
    image("rigatoni-tube-pasta", "A close-up view of uncooked rigatoni pasta tubes showing the ridged exterior texture", true),
    p("Short pasta covers a wide range: smooth or ridged, with or without holes, in dozens of shapes. The surface finish matters as much as the shape — ridges and holes catch sauce in a way smooth tubes don't."),
    ul(
      "**Penne:** A tube cut diagonally at both ends, available smooth (*lisce*) or ridged (*rigate*). One of Italy's most widely eaten shapes. Smooth penne pairs best with lighter, oil-based or fresh tomato sauces; ridged penne holds chunky ragù.",
      "**Rigatoni:** Large ridged tubes, wider than penne and not cut diagonally. The ridges and hollow centre hold sauce and meat well. Strongly associated with Roman cooking — rigatoni alla carbonara and rigatoni con la pajata both appear on Roman menus.",
      "**Mezze maniche:** Shorter, wider rigatoni-style tubes — 'half sleeves'. A Roman shape used in several classic preparations.",
      "**Farfalle:** Bow-tie or butterfly shapes, formed by pinching a rectangle of pasta in the centre. The word means 'butterflies'. The edges remain thicker than the centre, creating different textures in the same bite. Often used with cream sauces or in pasta salads.",
      "**Fusilli:** Spiral shapes, originally hand-rolled around a thin rod. The spirals trap thick, chunky sauces. Originated in southern Italy but now widely made industrially across Italy and internationally.",
      "**Paccheri:** Very large, smooth tubes from Campania. Essentially oversized rigatoni. Used with seafood, chunky fish sauces, and occasionally stuffed and baked.",
    ),
    h3("Filled pasta — pasta ripiena"),
    image("tortellini-stuffed", "A pile of small ring-shaped tortellini pasta on a surface, showing the folded and sealed edges typical of filled pasta", true),
    p("Filled pasta is made by wrapping or folding a pasta dough around a filling of meat, cheese, vegetables, or a combination. The boundaries between shapes can blur — the same basic shape has different names, fillings, and traditions across regions."),
    ul(
      "**Ravioli:** The most widely known filled pasta — two thin layers of pasta sealed around a filling, typically square. Found across Italy with different fillings by region: ricotta and spinach in Tuscany, meat in Piedmont, fish near the coast.",
      "**Tortellini:** Small, ring-shaped filled pasta from Emilia-Romagna, specifically the Bologna and Modena area. Traditionally filled with a mixture of pork loin, prosciutto di Parma, Mortadella, Parmigiano Reggiano, and nutmeg, then folded and sealed. The traditional preparation is served in broth (*in brodo*); serving in cream is a less traditional variant.",
      "**Cappelletti:** Similar in appearance to tortellini but slightly larger and with a different fold, creating a 'little hat' shape (*cappello* means hat). From Romagna, where they are made with cheese-based fillings in some traditions and served in capon or beef broth.",
      "**Agnolotti del Plin:** A Piedmontese filled pasta — 'plin' means pinch in Piedmontese dialect, referring to the characteristic pinched seal. Filled with roasted meat (often leftover Sunday roast), Parmigiano Reggiano, and sometimes vegetables. Traditionally tossed in the braising juices of the roast, or served simply with butter and sage.",
      "**Culurgiones:** A Sardinian filled pasta from the Ogliastra region, recognisable by its intricate braided seal. Filled with potato, Pecorino, and mint. The seal is a craft that families pass down; done well, it looks like a wheat ear.",
    ),
    h3("Soup pasta — pastina"),
    p("Small pasta shapes used in broth and soup — collectively called *pastina* or *pasta in brodo*. Orzo (rice-shaped), stelline (little stars), ditalini (small thimbles), quadrucci (small squares), and acini di pepe (peppercorn-shaped) are among the most common. These are not typically served with sauce — their purpose is to add body and texture to broth."),
    h3("Al bronzo and trafilata al bronzo"),
    p("*Trafilata al bronzo* means the pasta was extruded through a bronze die rather than a smooth Teflon one. Bronze dies leave a slightly rough, porous surface on the pasta; Teflon produces a smoother, shinier finish. The rougher surface can help sauce adhere more effectively."),
    note("Bronze-die pasta is not automatically superior to Teflon-die pasta. The quality of the wheat, the drying process, and the production methods all affect the final pasta at least as much as the die material. Bronze-die pasta tends to cost more; whether that cost is reflected in a better result depends on the specific product. Treat *trafilata al bronzo* as one relevant factor among several, not a quality guarantee."),

    // ——— Regional Guide ———
    h2("Italian pasta shapes by region"),
    p("Italy's pasta traditions developed region by region, shaped by local wheat varieties, livestock, geography, and centuries of culinary habit. The regional associations below reflect the strongest documented traditions — they don't mean shapes are unknown elsewhere or that they belong exclusively to one region."),
    image("pasta-making-fresh", "A person pressing fresh pasta dough through a pasta cutter, cutting it into ribbons on a floured surface", true),
    h3("Liguria"),
    p("**Trofie** are short, thin, twisted pasta shapes made from a semolina or soft wheat dough, associated specifically with Liguria and most commonly with the area around Recco and Genoa. The classic preparation is *trofie al pesto Genovese* — the twists hold the basil, pine nut, and Parmigiano sauce particularly well. **Trenette** are flatter and longer, also traditional with pesto. In the traditional Ligurian preparation, trenette al pesto, potatoes and green beans are cooked in the same water as the pasta."),
    h3("Piedmont"),
    p("**Tajarin** (also spelled *tajarìn*) is a very thin, golden egg ribbon pasta made with a high proportion of egg yolks — sometimes ten or more per kilogram of flour. The richness of the dough gives it a distinctive colour and flavour. Associated with the Langhe and Monferrato areas of Piedmont, it appears with butter and local truffles, with ragù, and with other local preparations."),
    p("**Agnolotti del Plin** is the defining filled pasta of Piedmont — small, tightly pinched pillows filled with roasted meat. The pinch seal distinguishes them from larger ravioli and is characteristic of Piedmontese technique. They are traditionally accompanied by the braising juices of the roast used to make the filling, or simply dressed with butter."),
    h3("Lombardy"),
    p("**Pizzoccheri** is a flat, short pasta made with a high proportion of buckwheat flour, originating in the Valtellina valley in the Lombardy Alps. The traditional preparation bakes pizzoccheri with savoy cabbage, potatoes, Valtellina Casera DOP (or Bitto), and butter — a characteristically alpine dish suited to the mountain environment where buckwheat has grown historically when wheat was scarce or difficult to grow. Pizzoccheri della Valtellina has a registered IGP (Indicazione Geografica Protetta) status."),
    h3("Emilia-Romagna"),
    p("Emilia-Romagna has perhaps the most celebrated fresh pasta tradition in Italy. **Tagliatelle** — egg ribbon pasta, the width of which is registered with the Bologna Chamber of Commerce — is traditionally paired with Bolognese ragù (ragù alla Bolognese, which is itself a slow-cooked meat sauce, not a tomato-heavy sauce). **Tortellini** are filled pasta most strongly associated with Bologna and Modena, traditionally served in broth. The filling specification in the classical Bolognese tradition (pork loin, prosciutto, mortadella, Parmigiano Reggiano, nutmeg) is documented by the Accademia Italiana della Cucina."),
    p("**Cappelletti** look similar to tortellini but are associated with Romagna (the eastern part of the region) rather than Bologna or Modena. Fillings and traditions vary — cheese-based fillings appear in some Romagnolo traditions alongside meat-based ones."),
    p("The region is also the origin of fresh lasagne sheets, of which the authentic Bolognese version uses spinach-coloured *lasagne verdi*, and of garganelli — a small egg pasta tube formed by rolling a square of fresh pasta dough over a ridged board."),
    h3("Tuscany"),
    p("**Pici** (sometimes spelled *pici* or *pinci*) are thick, hand-rolled pasta strands made from a simple dough of flour and water — no egg — and rolled by hand to a shape resembling a thick, irregular spaghetti. They are most strongly associated with southern Tuscany, especially the provinces of Siena and Grosseto. Traditional preparations include *pici all'aglione* (with a slow-cooked garlic and tomato sauce), *pici cacio e pepe* (cheese and pepper, similar to the Roman dish), and *pici al ragù di cinghiale* (wild boar ragù)."),
    p("**Pappardelle**, wide egg ribbons, are associated with Tuscany and appear across central Italy. Their width makes them the conventional choice for game ragù — hare (*alla lepre*) and wild boar are the most documented traditional preparations."),
    h3("Lazio"),
    p("**Bucatini** — hollow, thick spaghetti — is associated with Rome, where it is used in *bucatini all'amatriciana*, one of the four classical Roman pasta dishes. **Rigatoni** and **mezze maniche** appear in several other Roman preparations. **Tonnarelli** is a square-section, egg-based strand associated with *tonnarelli cacio e pepe*."),
    p("For a detailed treatment of the four classical Roman pasta dishes — carbonara, cacio e pepe, amatriciana and gricia — and the shapes associated with each, see the [Roman pasta classics guide](/food/roman-pasta-classics)."),
    h3("Campania"),
    p("**Paccheri** are large, smooth tubes — essentially oversized rigatoni — associated with Naples and Campania. They appear with chunky seafood sauces, with rich tomato-based preparations, and sometimes stuffed and baked. **Ziti** are long, smooth tubes traditionally broken by hand before cooking in some preparations, especially for baked dishes like *ziti al forno*. **Scialatielli** is a fresh, short pasta associated with the Amalfi Coast, made with basil and milk worked into the dough, typically served with seafood."),
    h3("Puglia"),
    p("**Orecchiette** — 'little ears' — are Puglia's most recognisable pasta. Made from durum wheat semolina and water, they are formed by pressing and dragging a small piece of dough with a knife to create a concave shape with a rough surface. The rough, absorbent surface holds sauce and softer ingredients. The traditional preparation is *orecchiette con le cime di rapa* — orecchiette with sautéed turnip greens and, in many versions, garlic and anchovy. **Cavatelli** are a similar hand-shaped pasta — slightly longer and more shell-like — found across the southern regions, including Puglia, Campania, Molise and Basilicata."),
    h3("Basilicata"),
    p("**Strascinati** — from *strascinare*, to drag — are a pasta shape made by dragging a small piece of dough across a surface with fingertips or a tool, creating a flat shape similar to orecchiette but with the impression of the tool visible. The name and shape appear across southern Italy under variants including *strascinari* and *cisaredde*. In Basilicata, they appear with a range of local sauces."),
    h3("Calabria"),
    p("**Fileja** (or *fileja calabrese*) is a pasta shape associated with the Vibo Valentia area of Calabria. The dough is wrapped around a thin rod (traditionally a ferretto or knitting needle) and rolled to create a hollow, slightly twisted strand. It is associated with *'nduja*, Calabria's spicy spreadable salami, and with lamb-based ragù. Several other local shapes exist in Calabria, including *mafalde* (wide flat ribbons with ruffled edges) and *sagne 'mpastulate* (a ribbon twisted into a crossed shape)."),
    h3("Sicily"),
    p("**Busiate** are long, twisted pasta strands associated with the Trapani area in western Sicily. The name may derive from *busa*, a rod around which the dough was historically wrapped. They are most closely associated with *pesto Trapanese* — a raw sauce of almonds, tomatoes, basil, and garlic that predates the Genovese pesto and reflects Sicily's Arabic culinary heritage in its use of almonds."),
    p("**Anelletti** are small pasta rings — the word means 'little rings' — most closely associated with Palermo. They are rarely served with a simple sauce; their primary use is in *anelletti al forno*, a baked pasta that is a centrepiece of Palermo's street food culture, typically filling a deep tray with ragù, peas, aubergine, and cheese. Palermo is explored further in the [Palermo food and monument guide](/cities/palermo-markets-monuments)."),
    h3("Sardinia"),
    p("**Malloreddus** (also called *gnocchetti sardi*) are small, ridged pasta shapes made from durum wheat semolina, similar in appearance to small cavatelli but with a distinct texture from the ridged surface. They are most associated with *malloreddus alla Campidanese* — a rich sauce of pork sausage, tomato, and saffron that reflects the island's agricultural traditions and the influence of saffron grown in Sardinia. They are one of Sardinia's most exported regional pasta traditions."),
    p("**Culurgiones** are a filled pasta tradition from the Ogliastra region of eastern Sardinia. The filling is made from potato, Pecorino Sardo, and mint — a combination that works well in mountainous terrain where sheep and potatoes are both present. The sealing technique, which creates a distinctive braided edge resembling a wheat ear, is considered a craft skill passed within families."),

    // ——— Comparison Table ———
    h2("Pasta shape comparison table"),
    table(
      ["Shape", "Category", "Regional association", "Common pairing"],
      [
        ["Spaghetti", "Long, round", "Widely used across Italy", "Carbonara, pomodoro, aglio e olio, alle vongole"],
        ["Linguine", "Long, flattened oval", "Liguria, Campania; widely used", "Pesto, seafood sauces, alle vongole"],
        ["Bucatini", "Long, hollow tube", "Lazio (Rome)", "Amatriciana, carbonara variants"],
        ["Tonnarelli", "Long, square-section, egg", "Lazio (Rome)", "Cacio e pepe, carbonara variants"],
        ["Tagliatelle", "Ribbon, egg", "Emilia-Romagna (Bologna)", "Bolognese ragù, game sauces"],
        ["Tajarin", "Very thin ribbon, egg", "Piedmont (Langhe)", "Butter and truffle, light ragù"],
        ["Pappardelle", "Wide ribbon, egg", "Tuscany, central Italy", "Hare or wild boar ragù"],
        ["Trenette", "Long, flat (Ligurian)", "Liguria", "Pesto Genovese with potatoes and green beans"],
        ["Trofie", "Short, twisted", "Liguria", "Pesto Genovese"],
        ["Pici", "Long, thick, hand-rolled", "Tuscany (Siena/Grosseto)", "Aglione, cacio e pepe, ragù"],
        ["Penne rigate", "Short ridged tube", "Widely used", "Arrabbiata, amatriciana, ragù"],
        ["Rigatoni", "Large ridged tube", "Lazio; widely used", "Carbonara, amatriciana, pajata"],
        ["Paccheri", "Very large smooth tube", "Campania", "Seafood, chunky tomato sauces"],
        ["Orecchiette", "Short, ear-shaped", "Puglia", "Cime di rapa, sausage"],
        ["Tortellini", "Small filled ring", "Emilia-Romagna (Bologna/Modena)", "Broth (in brodo)"],
        ["Cappelletti", "Small filled hat", "Romagna", "Broth (in brodo), cream"],
        ["Agnolotti del Plin", "Small filled, pinched", "Piedmont", "Braising juices, butter"],
        ["Busiate", "Long, twisted", "Sicily (Trapani)", "Pesto Trapanese"],
        ["Malloreddus", "Short, ridged, semolina", "Sardinia", "Campidanese (sausage and saffron)"],
        ["Pizzoccheri", "Short flat ribbon, buckwheat", "Lombardy (Valtellina)", "Baked with cabbage, potato, cheese"],
      ],
      "Pairings are documented conventions, not prescriptions. Regional associations reflect primary traditions; shapes appear in multiple regions.",
    ),

    // ——— Sauce Pairing ———
    h2("Which pasta shape works with which sauce"),
    image("pasta-sauce-plate", "A plate of spaghetti with a rich tomato and herb sauce, served on a white ceramic dish", true),
    p("The pairing of shape to sauce is based on real physical properties — but the principles are guidelines, not rules. Here is how the logic works:"),
    h3("Surface texture and ridges"),
    p("Ridged pasta (*rigata*, *rigate*) — rigatoni, penne rigate, fusilli — has a greater surface area and texture for sauce to cling to. For chunky ragù, meaty sauces, or preparations with small pieces of meat or vegetable, ridged pasta holds the components better than smooth pasta. Smooth penne (*lisce*) works with lighter, oil-based, or cream sauces where you want the pasta itself rather than sauce-retention to be the focus."),
    h3("Hollow shapes"),
    p("Hollow pasta — bucatini, penne, rigatoni, paccheri — holds sauce inside as well as outside. Bucatini's narrow hollow means a single strand delivers both the outside coating and a small amount of sauce from inside. Paccheri's large cavity can hold a significant amount of chunky sauce, making each piece a mini vessel."),
    h3("Width and weight for long pasta"),
    p("Thinner long pasta — spaghetti, linguine — works with olive oil-based sauces, seafood sauces, and fresh tomato sauces where the goal is a light coating. Heavier preparations overwhelm fine strands. Wider ribbons — pappardelle, tagliatelle — can handle substantial, slow-cooked meat ragù without becoming lost under the sauce."),
    h3("Filled pasta"),
    p("Filled pasta has its own customary preparations because the filling is already the primary flavour. Most filled pasta traditions call for a light accompaniment that doesn't compete with the filling: broth for tortellini and cappelletti; butter and sage for agnolotti del Plin and culurgiones; simple sauces for ravioli. Rich, heavy sauces on top of filled pasta tend to overwhelm the filling's character."),
    h3("Small pasta in soups"),
    p("Soup pasta — ditalini, stelline, orzo — is designed to cook in broth and add texture without structure. The small size means it cooks quickly and doesn't need the sauce-adhesion properties relevant to larger shapes."),
    p("Beyond these principles, the best test is your own result: if a combination works well in your kitchen and at your table, it works."),

    // ——— Fresh vs Dried ———
    h2("Fresh pasta vs dried pasta"),
    image("pasta-dough-flour", "Flour mounded on a wooden surface with an egg at the centre, the traditional starting point for fresh pasta dough", true),
    p("Fresh and dried pasta are different products with different strengths, not simply better and worse versions of the same thing."),
    h3("Dried pasta — pasta secca"),
    p("Dried pasta is made almost entirely from durum wheat (*grano duro*) semolina and water. The high gluten content and low moisture of durum wheat produce a firm pasta that holds its shape through drying, has a long shelf life, and gives the characteristic *al dente* resistance when cooked correctly. Dried pasta can be made at a very high quality level — some artisan dried pasta produced in Campania, Puglia, and Sicily is regarded as exceptional and reflects the traditions of regions where wheat agriculture has long been central."),
    p("Not all dried pasta is the same. The extrusion method (bronze die or Teflon), the wheat quality, and the drying speed all affect the finished product. Pasta dried slowly at low temperatures typically retains more of the wheat's flavour and a more porous surface texture than pasta dried quickly at high temperatures, though the differences are most noticeable in simple preparations where the pasta flavour is central."),
    h3("Fresh pasta — pasta fresca"),
    p("Fresh pasta is typically made with soft wheat flour (*farina di grano tenero*, usually type 00) and eggs, particularly in Emilia-Romagna and Piedmont. The eggs give fresh pasta a softer texture, a richer flavour, and the golden colour characteristic of Emilia-Romagna's tagliatelle and tajarin."),
    p("However, fresh pasta is not always made with eggs. Many southern Italian fresh pasta shapes — including orecchiette, cavatelli, pici, and trofie — are made with semolina or soft wheat and water. The north-eggs / south-no-eggs generalisation holds broadly but has many exceptions."),
    p("Fresh pasta cooks much faster than dried pasta — typically one to three minutes, depending on thickness. It does not benefit from the same *al dente* approach as dried pasta; the goal is usually a soft, silky texture rather than firm bite."),
    h3("Choosing between them"),
    p("For dishes where the pasta's own flavour and texture are central — simple butter preparations, fresh egg pasta traditions — fresh or high-quality artisan dried pasta repays attention. For sturdy preparations — baked pasta, hearty meat ragù, tomato-based sauces — good quality dried pasta performs well and is simpler to cook consistently. Neither is universally better; they suit different dishes."),
    note("Egg allergies and fresh pasta: many fresh pasta shapes contain eggs, but not all. Ask before serving to anyone with an egg allergy. Dried pasta made from semolina and water does not contain egg, but some dried egg pasta products exist and are clearly labelled. Grana Padano, used in some pasta preparations, contains lysozyme derived from egg white — relevant for those with egg allergies. See the [Italian regional cheeses guide](/food/italian-regional-cheeses) for more on this."),

    // ——— Cooking ———
    h2("How to cook pasta"),
    image("pasta-cooking-pot", "Dried pasta being lowered into a large pot of heavily salted boiling water", true),
    p("Pasta cooking requires less technical knowledge than the number of opinions on the subject might suggest. A few reliable principles cover most situations."),
    ul(
      "**Use enough water.** A large pot of well-salted, vigorously boiling water gives pasta room to move and prevents sticking. The water should be at a rolling boil before the pasta goes in.",
      "**Salt the water generously.** Pasta water should be seasoned meaningfully — often described as tasting 'of the sea' — because this is the only opportunity to season the pasta itself from the inside. Unsalted water produces flat-tasting pasta regardless of the sauce.",
      "**Follow the packet instructions, then check.** Pasta cooking times on packets are not exact; they vary by shape, thickness, brand, and how *al dente* you prefer. The packet time is a starting point. Check the pasta a minute or two before the stated time.",
      "**Understand *al dente*.** Literally 'to the tooth' — a texture where the pasta offers resistance and retains a slight firmness when bitten, without a raw or chalky centre. The point at which this happens varies by shape and thickness. Some preparations, particularly where pasta is finished in the sauce, benefit from pulling the pasta a minute early and completing cooking in the sauce.",
      "**Reserve pasta water before draining.** Starchy pasta cooking water is a useful emulsifying agent that helps sauces bind and coat the pasta. A cup set aside before draining is rarely wasted.",
      "**Finish pasta in the sauce.** Many Italian preparations toss drained pasta directly into the sauce in the pan, where it finishes cooking for a minute or two and absorbs the sauce. This step integrates the pasta and sauce better than plating the pasta and spooning sauce over it.",
    ),
    tip("Rinsing cooked pasta under cold water removes the starch that helps sauce adhere. For hot pasta dishes, do not rinse. Cold rinsing is appropriate only when making pasta salad."),

    // ——— Buying ———
    h2("Buying pasta in Italy"),
    image("pasta-market-display", "Fresh pasta, tomatoes, and garlic displayed for sale at an Italian market or food shop", true),
    p("Pasta is available everywhere in Italy — in supermarkets, in specialist food shops (*alimentari*, *gastronomie*), and in fresh pasta shops (*pastifici*). The range and quality differ considerably between venues."),
    h3("Dried pasta in shops"),
    p("Supermarkets carry a wide range of dried pasta from national and regional brands. Italian branded pasta at the budget end of the market is generally of good quality by international standards; the jump in quality comes from artisan producers — often regional brands — which typically cost more and may be harder to find outside their home region."),
    p("Look for *semola di grano duro* (durum wheat semolina) as the primary ingredient, and *trafilata al bronzo* as an indicator of production method. A rough, slightly matte surface on the dry pasta is consistent with bronze-die production; a very smooth, shiny surface indicates Teflon-extruded pasta."),
    h3("Fresh pasta — pastifici and markets"),
    p("Fresh pasta shops (*pastifici*) produce pasta daily. In Emilia-Romagna, a regional culture around fresh pasta means that *sfoglina* — the skilled pasta makers who roll and cut pasta by hand — is a recognised profession and the product is considered a specific local expertise. Major markets across Italy — Turin's Porta Palazzo, Bologna's Mercato di Mezzo, Palermo's Ballarò — often feature stalls selling fresh pasta. See the [Italian food markets guide](/food/italian-food-markets) for more on finding and navigating Italian food markets."),
    ul(
      "**Pasta fresca** — fresh pasta, typically available the same day or within two to three days",
      "**Pasta secca** — dried pasta",
      "**Pasta ripiena** — filled pasta",
      "**Pasta all'uovo** — egg pasta (fresh or dried)",
      "**Pasta integrale** — wholemeal pasta",
      "**Pasta di farro** — spelt pasta",
      "**Pasta senza glutine** — gluten-free pasta",
    ),

    // ——— Myths ———
    h2("Common pasta myths"),
    ul(
      "**\"Every pasta shape has exactly one correct sauce.\"** Shape-sauce pairings are culinary conventions based on how shapes behave with different sauces. They vary by region, town, family, and cook. Traditions matter but are not fixed prescriptions.",
      "**\"Fresh pasta is always better than dried pasta.\"** Fresh and dried pasta suit different dishes and traditions. High-quality dried pasta is appropriate for many preparations and is the only traditional choice for some. Fresh pasta is not universally superior; it is simply different.",
      "**\"All Italian pasta contains egg.\"** Dried pasta is almost always made with semolina and water. Many fresh pasta shapes in the south — orecchiette, cavatelli, pici — also contain no egg. Egg pasta is a northern and central Italian fresh pasta tradition, not a universal characteristic.",
      "**\"Bronze-die pasta is always the best choice.\"** Bronze-die extrusion creates a rougher surface texture that can help sauce adhere. However, the quality of the wheat, the drying process, and the production care matter as much or more than the die material. Bronze-die pasta tends to be more expensive; it is not automatically worth the premium in every preparation.",
      "**\"All Italian pasta shapes belong exclusively to one region.\"** Many shapes have spread nationally and appear in different regional traditions. Regional associations reflect documented primary traditions, not ownership or exclusivity. Pasta production and food culture have moved around Italy for centuries.",
      "**\"Breaking spaghetti before cooking is taboo throughout Italy.\"** Attitudes vary. Many Italian cooks break long pasta to fit it in the pot or to make it easier to eat; others consider it unnecessary or associate it with non-Italian practices. There is no law against it. Breaking spaghetti in half in front of an Italian grandmother may provoke comment, but it is not a universal cultural prohibition.",
      "**\"Pasta carbonara originated from American soldiers.\"** This is one of several competing accounts of carbonara's origin, not an established fact. No printed recipe for carbonara is known from before the mid-1940s, and the evidence for any single origin story is thin. For a fuller discussion, see the [Roman pasta classics guide](/food/roman-pasta-classics).",
    ),

    // ——— Vocabulary ———
    h2("Italian pasta vocabulary"),
    table(
      ["Italian", "English"],
      [
        ["formato di pasta", "pasta shape"],
        ["pasta lunga", "long pasta"],
        ["pasta corta", "short pasta"],
        ["pasta fresca", "fresh pasta"],
        ["pasta secca", "dried pasta"],
        ["pasta ripiena", "filled pasta"],
        ["pasta all'uovo", "egg pasta"],
        ["pasta in brodo", "pasta in broth (soup pasta)"],
        ["trafilata al bronzo", "extruded through bronze dies"],
        ["cottura al dente", "cooking to a slight firmness ('to the tooth')"],
        ["semola di grano duro", "durum wheat semolina"],
        ["farina di grano tenero", "soft wheat flour (type 00 in most recipes)"],
        ["sugo", "sauce (general term)"],
        ["ragù", "slow-cooked meat sauce"],
        ["condimento", "dressing or seasoning"],
        ["acqua di cottura", "pasta cooking water"],
        ["sfoglina", "a skilled pasta maker (especially in Emilia-Romagna)"],
        ["impasto", "dough"],
        ["rigate", "ridged (as in penne rigate)"],
        ["lisce", "smooth"],
        ["trafilatura", "extrusion process"],
        ["pastificio", "pasta maker or fresh pasta shop"],
        ["pasta integrale", "wholemeal pasta"],
        ["grano duro", "durum wheat"],
        ["grano tenero", "soft wheat"],
      ],
    ),
  ],

  faqs: [
    {
      question: "What are the most common Italian pasta shapes?",
      answer: "The most widely produced and eaten shapes in Italy include spaghetti, penne (both smooth and ridged), rigatoni, fusilli, farfalle, linguine, and tagliatelle. These are found across Italy and internationally. Many regional shapes — trofie, orecchiette, pizzoccheri, malloreddus — are strongly associated with specific areas and less commonly available elsewhere.",
    },
    {
      question: "What is the difference between tagliatelle and pappardelle?",
      answer: "Both are flat egg ribbon pasta, but pappardelle is wider — typically 13–20mm across — while tagliatelle is narrower, around 6–8mm. Tagliatelle is most associated with Emilia-Romagna and Bolognese ragù; pappardelle is associated with Tuscany and central Italy, typically paired with robust game ragù such as hare or wild boar. Both are fresh egg pastas in their most traditional forms, though dried versions of both exist.",
    },
    {
      question: "What is the difference between trofie and trenette?",
      answer: "Both are Ligurian pasta shapes associated with pesto Genovese. Trofie are short and twisted; trenette are long and flat — similar to linguine but slightly narrower. The traditional Ligurian preparation of trenette al pesto includes potatoes and green beans cooked in the same water as the pasta. Trofie are more commonly served simply with pesto. Both shapes work with Ligurian pesto because the sauce clings well to their surfaces.",
    },
    {
      question: "Which pasta shapes are associated with southern Italy?",
      answer: "Southern Italy — Campania, Puglia, Calabria, Basilicata, Sicily, Sardinia — has strong traditions with semolina and water pastas (no egg): orecchiette and cavatelli in Puglia; paccheri and ziti in Campania; busiate and anelletti in Sicily; malloreddus and culurgiones in Sardinia; strascinati in Basilicata; fileja in Calabria. Many southern shapes are hand-formed, reflecting the durum wheat traditions that made semolina the dominant pasta ingredient in the south.",
    },
    {
      question: "Does pasta shape affect how sauce clings?",
      answer: "Yes. Ridged pasta (rigate) has more surface texture for sauce to hold onto than smooth pasta (lisce). Hollow shapes hold sauce inside as well as outside. Short, irregular shapes like fusilli and trofie trap thick sauces in their spirals and hollows. Smooth, fine long pasta like spaghetti coats more evenly with lighter, oil-based, or fine-textured sauces. These differences are real but not absolute: a well-made smooth pasta with a bronze-die rough surface also holds sauce better than a smooth industrial pasta.",
    },
    {
      question: "Is fresh pasta better than dried pasta?",
      answer: "No — they suit different dishes. Fresh egg pasta (tagliatelle, pappardelle, tajarin) is the traditional choice for certain Emilia-Romagna and Piedmontese preparations. High-quality dried semolina pasta is the traditional and preferred choice for spaghetti alle vongole, bucatini all'amatriciana, and many Pugliese and Sicilian dishes. Neither type is universally better; the choice depends on the dish, the preparation, and the quality of the specific product.",
    },
    {
      question: "What does bronze-die pasta mean?",
      answer: "*Trafilata al bronzo* (bronze-die extrusion) means the pasta dough was pushed through a die made of bronze rather than Teflon. Bronze creates a slightly rougher, more porous surface texture that can help sauce adhere. Teflon dies produce smoother, shinier pasta. Bronze-die pasta tends to cost more. It is a relevant factor in pasta quality but not the only one — wheat quality and drying process also significantly affect the result.",
    },
    {
      question: "What is the difference between tortellini and cappelletti?",
      answer: "Both are small ring-shaped filled pastas, but they are distinct regional traditions. Tortellini are from the Bologna and Modena area, traditionally filled with a mixture of pork loin, prosciutto, mortadella, Parmigiano Reggiano, and nutmeg, and served in broth. Cappelletti ('little hats') are from Romagna, slightly larger, and may have cheese-based or meat-based fillings depending on local tradition. They are also typically served in broth. Shape and proportions differ subtly between the two.",
    },
    {
      question: "Which pasta shapes are traditionally used in soups?",
      answer: "Small pasta shapes designed for soup — collectively called pastina or pasta in brodo — include ditalini (small thimbles), stelline (little stars), orzo (rice-shaped), acini di pepe (peppercorn-shaped), and quadrucci (small squares). Larger shapes also appear in soups: pasta e fagioli in Veneto and Campania traditionally uses a mix of pasta shapes; pasta e ceci uses small pasta. Cappelletti and tortellini are served in broth rather than with sauce in their primary traditional preparations.",
    },
    {
      question: "How should dried pasta be stored?",
      answer: "Dried pasta should be stored in a cool, dry place, away from direct sunlight. Opened packets can be stored in an airtight container. Most dried pasta has a shelf life of one to two years from production when stored correctly. Pasta stored in humid conditions can absorb moisture and cook unevenly or develop off flavours. Pasta stored in very warm conditions near a stove may degrade faster.",
    },
    {
      question: "What pasta is traditionally used for baked pasta dishes?",
      answer: "Different regions use different shapes for baked pasta. Rigatoni and mezze maniche are common in Roman-style pasta al forno. Anelletti al forno, the Palermitan baked pasta, uses anelletti (small rings). Lasagne uses flat lasagne sheets. Cannelloni uses large pasta tubes filled before baking. Ziti are traditional in some Neapolitan baked preparations. Timballo — a layered baked pasta dish common across southern Italy — uses various shapes depending on the regional tradition.",
    },
    {
      question: "What is the difference between orecchiette and cavatelli?",
      answer: "Both are southern Italian hand-shaped semolina pastas. Orecchiette ('little ears') are round, concave shapes formed by pressing and dragging the dough to create a smooth exterior and rough interior. Cavatelli are slightly elongated and more shell-shaped, with a textured surface and curled edges. Both originate in Puglia and appear across the south. Orecchiette are most associated with *cime di rapa* (turnip greens); cavatelli appear with ragù, broccoli, and various local preparations.",
    },
    {
      question: "Where can I find the best fresh pasta in Italy?",
      answer: "Emilia-Romagna — especially Bologna and Modena — is considered the heartland of Italian fresh egg pasta. Pastifici (fresh pasta shops) in the region produce tagliatelle, tortellini, and filled pastas daily. Turin is known for tajarin. Puglia has strong traditions of hand-shaped semolina pasta. Good fresh pasta shops exist in most Italian cities. See the [Italian food markets guide](/food/italian-food-markets) for guidance on finding fresh pasta at markets.",
    },
  ],

  sourcesTitle: "Sources",
  sources: [
    {
      label: "Accademia Italiana della Cucina — Ricettario di cucina regionale italiana",
      url: "https://www.accademiaitalianadellacucina.it/",
      note: "Regional pasta traditions, pairing conventions, filling specifications for Emilia-Romagna pasta",
    },
    {
      label: "Camera di Commercio di Bologna — Tagliatella bolognese",
      url: "https://www.bo.camcom.it/",
      note: "Registered dimensions of tagliatelle alla Bolognese",
    },
    {
      label: "Unione Italiana Food — Pasta facts",
      url: "https://www.unioneitalianafood.it/",
      note: "Italian pasta production data and category definitions",
    },
    {
      label: "Slow Food Foundation for Biodiversity — Ark of Taste",
      url: "https://www.fondazioneslowfood.com/en/ark-of-taste-slow-food/",
      note: "Endangered and traditional pasta shapes and production methods",
    },
    {
      label: "Accademia della Crusca — Vocabolario italiano",
      url: "https://www.accademiadellacrusca.it/",
      note: "Italian pasta terminology and etymology",
    },
    {
      label: "Consorzio Pizzoccheri della Valtellina IGP",
      url: "https://www.pizzoccherivaltellina.it/",
      note: "Pizzoccheri production specification, ingredients, and IGP status",
    },
    {
      label: "Regione Puglia — Tradizioni gastronomiche pugliesi",
      url: "https://www.regione.puglia.it/",
      note: "Orecchiette and Pugliese pasta traditions",
    },
    {
      label: "Sardegna Turismo — Prodotti tipici",
      url: "https://www.sardegnaturismo.it/",
      note: "Malloreddus, culurgiones, and Sardinian pasta traditions",
    },
    {
      label: "EU eAmbrosia — Geographical indications register",
      url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/",
      note: "Verification of IGP status for Pizzoccheri della Valtellina and other protected pasta products",
    },
  ],
};
