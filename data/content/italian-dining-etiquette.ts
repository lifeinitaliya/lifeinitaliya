import type { ArticleContent, ContentBlock } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-dining-etiquette";

export const italianDiningEtiquette: ArticleContent = {
  body: [
    h2("Dining in Italy: customs, not commandments"),
    answer("**Italian dining customs vary by region, type of establishment, occasion, and personal preference.** Most visitors encounter helpful, welcoming staff. The conventions covered in this guide reflect widely observed practices — not universal rules that apply in every restaurant across a country of 60 million people with markedly different culinary traditions from north to south."),
    p("The most useful mindset is curiosity rather than caution. Italian meals are generally relaxed, sociable occasions. Knowing how a meal is structured, what charges to expect, and a handful of phrases will make navigating any restaurant straightforward. For deeper context on Italian food culture across the regions, see the [Italian food traditions guide](/food/italian-food-traditions)."),
    {
      type: "facts",
      title: "Italian dining at a glance",
      rows: [
        { label: "Meal structure", value: "A full Italian meal has five courses: antipasto, primo, secondo, contorno, dolce, then caffè. Ordering every course is optional — most diners order two or three." },
        { label: "Lunch hours", value: "Roughly 12:30–14:30 in most cities, though this varies considerably. Many restaurants close between lunch and dinner service." },
        { label: "Dinner hours", value: "Roughly 19:30–22:30. In the south and Sicily, dinner often starts later. In northern cities, timing can be closer to Central European norms." },
        { label: "Coperto", value: "A per-person cover charge covering bread and table setup. Not the same as a tip. Its presence, amount, and legal requirements vary by region." },
        { label: "Tipping", value: "Not built into Italian service culture the way it is in the US or UK. Rounding up or leaving a few euros for excellent service is common but not expected." },
      ],
    },
    {
      type: "jumpLinks",
      label: "Jump to",
      targets: [
        "Italian meal times",
        "The structure of an Italian meal",
        "Ordering coffee and drinks",
        "Coperto, service charges, and tipping",
        "Understanding the restaurant bill",
        "Table manners and local customs",
        "Common tourist mistakes",
        "Useful Italian phrases",
        "Dietary requirements and allergies",
        "Regional differences",
      ],
    },
    image("restaurant-interior-tables", "A cozy Italian restaurant interior with set tables and warm ambient lighting", true),

    // ——— Meal times ———
    h2("Italian meal times"),
    p("Italian restaurants do not typically serve food continuously throughout the day. Most have a lunch service and a dinner service with a break in between — often from around 14:30 to 19:00 or 19:30, though this varies by city, season, and establishment. Some restaurants in tourist areas and larger cities offer continuous service. Checking opening hours before you go will avoid wasted trips."),
    h3("Breakfast"),
    p("Italian breakfast is typically light and quick: a *cornetto* (a soft, sweet pastry) and a cappuccino or espresso at the bar, often consumed standing. Most Italians eat breakfast at home or at a bar rather than at a restaurant. See the [Italian breakfast guide](/food/italian-breakfast) for a full picture."),
    h3("Lunch"),
    p("Lunch runs roughly from 12:30 to 14:30 in most of central and northern Italy, though in the south and in Sicily it can extend later. A full sit-down lunch — two courses plus dessert — is a leisurely affair that can last two hours in a traditional setting. Many working Italians take a shorter lunch break, eating a single course or grabbing something at a bar."),
    h3("Aperitivo"),
    p("Aperitivo is the pre-dinner ritual of drinks and light snacks, generally starting between 18:00 and 19:00. In some cities — notably Milan — aperitivo comes with a buffet of food generous enough to substitute for dinner. In others it is lighter. See the [Italian aperitivo guide](/food/italian-aperitivo) for what to expect."),
    h3("Dinner"),
    p("Dinner typically starts between 19:30 and 20:30 in northern and central Italy, and later in the south. Dinner is generally the more social and relaxed meal of the two. Restaurants fill up from around 20:00; booking ahead is advisable at popular places on weekends."),
    image("outdoor-restaurant-seating", "Empty outdoor restaurant tables set with glasses and napkins, ready for dinner service in an Italian piazza", true),

    // ——— Meal structure ———
    h2("The structure of an Italian meal"),
    p("A traditional Italian restaurant menu follows a five-course structure. Knowing the names and what each course contains will help you read a menu and order with confidence."),
    h3("Antipasto"),
    p("Starters. Bruschetta, cured meats, olives, marinated vegetables, burrata, or regional specialities. Antipasto is optional — many diners skip it in favour of starting with a primo."),
    h3("Primo"),
    p("First course. Almost always pasta, risotto, or gnocchi. This is often the centerpiece of an Italian lunch or dinner and may be the only course a local orders if eating lightly. For a deeper look at Italian pasta traditions, see the [Italian pasta shapes guide](/food/italian-pasta-shapes) and the [Roman pasta classics guide](/food/roman-pasta-classics)."),
    h3("Secondo"),
    p("Second course. Meat or fish, typically prepared simply: grilled, roasted, or braised. Contorno (side dishes — vegetables, potatoes, salads) are typically ordered and priced separately from the secondo, unlike in many other countries where sides are included."),
    h3("Dolce"),
    p("Dessert. Tiramisù, panna cotta, gelato, fresh fruit, cheese. Some restaurants offer a cheese course (*formaggi*) alongside or instead of dessert."),
    h3("Caffè"),
    p("Italians typically end a restaurant meal with an espresso (*caffè*), not a cappuccino — though there is no rule preventing you from ordering what you prefer. Digestivi (amaro, grappa, limoncello) are often offered after the meal."),
    note("You are not expected to order every course. Two courses — a primo and a secondo, or an antipasto and a primo — is perfectly normal. Ordering only a primo is common at lunch. The waiter will not think less of you. At tourist-focused establishments, a fixed-price *menu del giorno* or *menu turistico* is often available as an alternative to ordering à la carte."),
    image("pasta-fork-plate", "A plate of pasta being lifted with a fork at an Italian restaurant, showing a generous portion", true),
    h3("Ordering à la carte"),
    p("The waiter will usually take a drinks order first, then starters, then mains. You do not need to order all courses at once — it is common to order one or two courses at a time and decide later whether to continue. Ask for the day's specials (*i piatti del giorno* or *cosa avete oggi?*) if they are not posted on a board."),
    tip("*Posso vedere il menù?* — May I see the menu? Use this if no menu has been brought to your table after a few minutes. In many trattorie, the waiter will simply recite the day's offerings rather than handing you a printed menu."),

    // ——— Coffee and drinks ———
    h2("Ordering coffee and drinks"),
    image("espresso-cups-counter", "Two small white espresso cups resting on a chrome espresso machine at an Italian bar counter", true),
    p("Coffee and drinks conventions in Italy are occasionally overstated in travel guides. A few practical distinctions are genuinely useful:"),
    h3("Coffee"),
    ul(
      "**Caffè / espresso:** In Italy, *un caffè* means a small, concentrated shot of espresso, consumed quickly, often standing at the bar. This is the default if you order *un caffè* without further specification.",
      "**Caffè macchiato:** An espresso 'stained' (*macchiato*) with a small amount of milk foam. *Macchiato caldo* has warm milk; *macchiato freddo* has cold.",
      "**Cappuccino:** One part espresso, one part steamed milk, one part milk foam. Drunk primarily in the morning. Many Italians do not drink cappuccino after mid-morning, associating milk with breakfast rather than after a meal — but this is a personal preference, not a formal rule, and cafés will serve you one at any time.",
      "**Caffè latte / latte macchiato:** Larger, milkier drinks. A *latte macchiato* is a glass of steamed milk 'marked' with a shot of espresso. If you ask for a *latte* in Italy, you may receive a glass of plain milk (*latte* means milk).",
      "**Caffè americano / caffè lungo:** A longer, less concentrated coffee. An *americano* is typically an espresso diluted with hot water.",
    ),
    p("For a detailed guide to Italian coffee culture, bar customs, and how to order, see the [Italian coffee culture guide](/food/italian-coffee-culture)."),
    h3("Water"),
    p("Ordering water with a meal is standard. You will usually be asked: *liscia o frizzante?* (still or sparkling?). Both are charged. Tap water (*acqua del rubinetto*) is available in Italian restaurants — ask for it if you prefer, though it is not automatically brought to the table."),
    h3("Wine and other drinks"),
    p("House wine (*vino della casa*) is available at most traditional restaurants and is often a reliable, inexpensive choice. It is usually served in carafes — a quarter litre (*un quarto*), half litre (*mezzo litro*), or full litre. See the [Italian regional wines guide](/food/italian-regional-wines) for a broader overview of Italian wine traditions."),
    image("aperitivo-orange-glass", "A glass of bright orange aperitivo drink — possibly an Aperol Spritz — on a table at an Italian bar", true),
    p("Aperitivo drinks — Campari, Aperol Spritz, Negroni, Prosecco — are typically ordered at a bar before dinner rather than at the dinner table itself, though this varies. See the [aperitivo guide](/food/italian-aperitivo) for more."),

    // ——— Coperto ———
    h2("Coperto, service charges, and tipping"),
    p("This is the area of Italian dining that generates the most confusion for visitors, partly because practices vary by region and establishment, and partly because the terminology is not consistent."),
    h3("Coperto"),
    p("*Coperto* (cover charge) is a per-person charge billed at many restaurants, covering the provision of bread, table linen, and basic table setup. It is not a tip. It is typically listed on the menu and on the bill as a separate line item. The amount varies — typically a few euros per person, though it is higher at more expensive establishments and in major tourist areas."),
    p("Italian consumer regulations require that the coperto be itemized on the fiscal receipt (*scontrino* or *ricevuta fiscale*). Regions and municipalities can set specific rules: Lazio (which covers Rome) introduced regulations in 2006 requiring restaurants to list the coperto on the menu or on a board displayed at the entrance. Other regions have their own rules or guidance. If a coperto appears on your bill without having been indicated on the menu or posted at the entrance, you can politely ask the staff to clarify (*Mi può spiegare questo coperto?*)."),
    h3("Service charge"),
    p("Some restaurants add a separate service charge (*servizio*), sometimes expressed as a percentage, in addition to or instead of a coperto. This is also required to be shown clearly on the menu. *Servizio incluso* means service is included in the prices listed; no additional charge will appear on the bill."),
    note("A coperto and a listed service charge are not tips. They are charges agreed to when you sit down and are reflected in the bill as disclosed. Whether you choose to leave additional cash for the staff is a separate matter."),
    h3("Tipping"),
    p("Italy does not have a tip-based service culture comparable to that of the United States or, to a lesser degree, the United Kingdom. Restaurant workers are paid a contracted wage and are not dependent on tips to meet their income. Tipping is not expected in the way it is in many English-speaking countries."),
    p("That said, leaving a small amount for genuinely good service is a common and appreciated gesture. Rounding up the bill, leaving a euro or two per person, or adding a few euros for exceptional service is appropriate and normal. Italians themselves leave tips selectively and informally. There is no standard percentage and no obligation."),
    tip("Do not confuse the *coperto* line on the bill with a service charge or tip. If you want to tip on top of a coperto-inclusive bill, leave a few euros in cash for the server or on the table as you leave."),

    // ——— Bill ———
    h2("Understanding the restaurant bill"),
    image("trattoria-checkered-tablecloth", "The interior of a traditional Italian trattoria with red and white checkered tablecloths on wooden tables", true),
    p("Asking for the bill will not happen automatically in most Italian restaurants — the waiter will not bring it until you ask. This is a deliberate part of Italian dining culture: you are not expected to leave quickly, and the bill's arrival is not a signal to go."),
    h3("Asking for the bill"),
    p("Say *Il conto, per favore* (the bill, please). Catching the waiter's eye and making a writing gesture is also universally understood. Do not be hesitant to ask — it will not be seen as rude."),
    h3("Reading the bill"),
    p("A properly issued bill (*scontrino fiscale* or *ricevuta fiscale*) must be given by law. It should itemize what you ordered, list any coperto, list any service charge, and show the total. Check the bill calmly — errors are rare but they happen. If something seems wrong, ask politely: *Mi può spiegare questo?* (Can you explain this?)."),
    h3("Splitting the bill"),
    p("Splitting the bill (*fare alla romana*, splitting evenly) or paying for individual orders (*pagare alla propria*) is common among friends. Whether the restaurant will accommodate split payments varies — smaller trattorie may prefer a single payment, while larger or more modern restaurants generally have no difficulty splitting the bill. Asking in advance is reasonable: *Si può dividere il conto?*"),
    h3("Payment methods"),
    p("Card payments are widely accepted in Italian restaurants, particularly in cities. Since 2022, Italian businesses above minimum revenue thresholds are required to accept electronic payments (*POS obbligatorio*) — but enforcement has varied and small or rural establishments may still operate primarily in cash. Having some cash on hand is practical. Where cash is necessary, the restaurant should indicate this clearly."),
    note("Under Italian law, customers are required to take their fiscal receipt (*scontrino* or *ricevuta fiscale*) before leaving the premises. The law is aimed at tax compliance (the *Guardia di Finanza* carries out spot checks). Keep the receipt until you are outside."),

    // ——— Table manners ———
    h2("Table manners and local customs"),
    image("people-dining-outdoor", "A group of people dining at outdoor tables at an Italian restaurant on a sunny day", true),
    h3("Arriving and being seated"),
    p("At a *ristorante* or formal trattoria, wait at the entrance to be seated rather than choosing your own table. At a casual *osteria* or pizzeria, seating yourself is often fine — if in doubt, wait briefly and make eye contact with staff. A friendly *Buongiorno* or *Buonasera* as you enter is standard and appreciated."),
    h3("Bread"),
    p("Bread is typically brought to the table as part of the coperto. It is not typically served with butter or olive oil for dipping in Italy — though this varies by region and establishment, and tourist-oriented places often accommodate the request. Bread at the table is usually for eating alongside the meal, or for *fare la scarpetta* — mopping up the remaining sauce on the plate, which is considered perfectly polite in informal settings."),
    h3("Sharing food"),
    p("Sharing food between friends and family is entirely normal. Ordering dishes to share is common at informal dinners, though restaurant staff may serve each dish individually to each person unless you specify otherwise. Ask before taking food from another person's plate — not because it is forbidden, but because it is simply polite."),
    h3("Using cutlery"),
    p("Italian table setting is fork on the left, knife on the right. Pasta is usually eaten with a fork alone — using a spoon to twirl pasta is not common in Italy, though no one will be offended. Cheese and salad may be eaten with a fork; fish and meat come with the appropriate cutlery."),
    h3("Mobile phones"),
    p("No specific rule prohibits phone use at the table, but taking an extended call at a table while dining with others is generally considered impolite. Taking photos of food is common and uncontroversial in most restaurants."),
    h3("Children"),
    p("Italian restaurants are generally family-friendly and children are welcome. Many have *menu bambini* (children's menus) or will prepare simpler dishes on request. Busy service periods may mean less flexibility for special requests."),
    h3("Dietary requirements"),
    p("See the [dietary requirements section](#dietary-requirements-and-allergies) below for specific guidance. In general, being polite, clear, and specific about restrictions will get the best results. Italian cuisine has many naturally meat-free, dairy-free, and gluten-free options — but allergies should be communicated directly and explicitly."),
    h3("Service pace"),
    p("An Italian restaurant meal is not rushed. Courses arrive with a gap between them; the waiter will not clear your plate the moment you put down your fork. In a busy trattoria, service may be energetic and attentive; at a quieter establishment, you may need to catch the waiter's eye to place orders. If a long wait seems unrelated to the kitchen being busy, it is fine to ask — *Potremmo ordinare?* (Could we order?)."),

    // ——— Common mistakes ———
    h2("Common tourist mistakes"),
    ul(
      "**Arriving between services.** Most Italian restaurants have a lunch service and a dinner service with a gap in between. Arriving at 15:30 for lunch or 18:30 for dinner and finding the kitchen closed is very common. Check hours before going.",
      "**Expecting every restaurant to serve all day.** Continuous service exists in some tourist-area establishments, but it is not the norm. Italian restaurants, particularly traditional ones, keep meal service hours.",
      "**Confusing coperto with a tip.** The coperto is a disclosed cover charge on your bill, not a gratuity. Tipping on top of a coperto is separate and voluntary.",
      "**Treating the meal structure as obligatory.** You do not need to order five courses. Ordering only a primo at lunch is completely normal.",
      "**Assuming cappuccino is forbidden after breakfast.** Many Italians do not drink cappuccino after mid-morning, but a café will serve you one whenever you ask. There is no rule.",
      "**Waiting for the bill.** The bill will not come until you request it. Catch the waiter's eye and say *Il conto, per favore*.",
      "**Expecting the same service pace as at home.** A slow gap between courses is intentional, not poor service. A restaurant meal is meant to be a leisurely experience.",
      "**Treating regional customs as universal.** Dining traditions, coperto rules, portion sizes, opening hours, and service styles vary substantially between Rome, Milan, Naples, Sicily, and everywhere else in Italy.",
      "**Not making reservations on weekends.** Popular restaurants fill up quickly on Friday and Saturday evenings. Booking ahead — even a call the same day — avoids a wasted trip.",
    ),
    image("table-setting-cutlery", "A white ceramic plate with a silver fork and knife set alongside on a white tablecloth, a typical Italian restaurant place setting", true),

    // ——— Phrases ———
    h2("Useful Italian phrases"),
    table(
      ["Italian", "Meaning", "Context"],
      [
        ["*Un tavolo per due, per favore.*", "A table for two, please.", "Asking for a table"],
        ["*Avete un tavolo disponibile?*", "Do you have a table available?", "When no booking was made"],
        ["*Ho una prenotazione a nome...*", "I have a reservation under the name...", "Arriving with a reservation"],
        ["*Possiamo vedere il menù?*", "May we see the menu?", "If no menu has been brought"],
        ["*Che cosa consiglia?*", "What do you recommend?", "Asking the waiter's opinion"],
        ["*Quali sono i piatti del giorno?*", "What are today's specials?", "Asking about daily dishes"],
        ["*Vorrei ordinare.*", "I'd like to order.", "Flagging readiness to order"],
        ["*Un caffè, per favore.*", "An espresso, please.", "Ordering coffee at the bar or end of meal"],
        ["*Acqua liscia o frizzante?*", "Still or sparkling water?", "What the waiter will ask you"],
        ["*Liscia, grazie.*", "Still, thank you.", "Responding to the water question"],
        ["*Senza carne, per favore.*", "Without meat, please.", "Dietary preference"],
        ["*Sono allergico/a a...*", "I am allergic to...", "Stating a food allergy"],
        ["*Possiamo avere il conto, per favore?*", "May we have the bill, please?", "Requesting the bill"],
        ["*Si può pagare con carta?*", "Can we pay by card?", "Checking payment options"],
        ["*Si può dividere il conto?*", "Can we split the bill?", "Asking to split"],
        ["*C'è un coperto?*", "Is there a cover charge?", "Asking before sitting down"],
        ["*Era tutto ottimo, grazie.*", "Everything was excellent, thank you.", "Complimenting the meal"],
        ["*Grazie mille.*", "Thank you very much.", "General thanks"],
        ["*Arrivederci.*", "Goodbye.", "Leaving the restaurant"],
      ],
    ),

    // ——— Dietary requirements ———
    h2("Dietary requirements and allergies"),
    p("Italian cuisine has many naturally vegetarian and naturally gluten-free dishes. Most restaurants in tourist areas are accustomed to dietary requests and will try to accommodate them. That said, practices vary, and for serious allergies you should communicate directly and explicitly — not rely on a phrase alone."),
    h3("Stating allergies"),
    ul(
      "**Be explicit.** Say *Sono allergico/a a [ingredient]* (I am allergic to [ingredient]). For serious allergies, clarify: *è un'allergia grave* (it is a serious allergy).",
      "**Ask about cross-contact.** If cross-contamination matters, ask: *Potete evitare la contaminazione crociata?* (Can you avoid cross-contamination?) Staff at any well-run restaurant will tell you whether they can manage it.",
      "**Confirm with the kitchen.** For life-threatening allergies, ask that your allergy be communicated to the kitchen (*Potete comunicarlo in cucina?*), not just noted by the waiter.",
      "**Do not rely solely on a written card.** Written allergy cards can be helpful, but confirming verbally with staff each time is important.",
    ),
    h3("Vegetarian and vegan"),
    p("*Vegetariano/a* means vegetarian; *vegano/a* means vegan. Italian cuisine has many genuinely meat-free dishes — pasta al pomodoro, cacio e pepe, pasta e fagioli, ribollita, caponata — but some dishes that appear vegetarian contain anchovies, *guanciale*, or meat-based stock. Ask: *Questo piatto è fatto senza carne?* (Is this dish made without meat?) if you are unsure."),
    h3("Gluten-free"),
    p("Many Italian restaurants now offer gluten-free pasta (*pasta senza glutine*). Ask: *Avete opzioni senza glutine?* (Do you have gluten-free options?). The Italian Coeliac Association (AIC) certifies restaurants and displays a logo indicating gluten-safe service — look for this if coeliac disease means cross-contamination is a concern."),
    note("Allergen information must be available in Italian restaurants under EU Regulation 1169/2011 on food labelling, which applies to meals served in restaurants and catering establishments. In practice, staff may be able to tell you from memory or kitchen notes rather than a printed list. Communicate clearly and do not assume a dish is safe without checking."),

    // ——— Regional differences ———
    h2("Regional differences"),
    p("Italy has twenty regions with distinct food cultures, and even within regions, cities, towns, and individual establishments vary considerably. A few broadly reliable distinctions:"),
    h3("North vs south"),
    p("Northern Italian cuisine (Emilia-Romagna, Piedmont, Lombardy) centres on fresh egg pasta, butter, risotto, and cured meats. Southern Italian cuisine (Campania, Puglia, Sicily, Sardinia) is built around dried semolina pasta, olive oil, tomatoes, and seafood. What constitutes a 'normal' meal, a 'small' portion, or an appropriate time to dine will differ between Turin and Palermo."),
    h3("City restaurants vs trattorias"),
    p("A Michelin-starred restaurant in Milan operates differently from a family-run trattoria in a small hill town. Service pace, formality, menu structure, and expectations around reservations all differ. City restaurants — particularly in Milan and Rome — are often more international in style; rural and southern restaurants tend to follow more traditional patterns."),
    h3("Tourist vs local"),
    p("Restaurants near major tourist sites — the Colosseum in Rome, the Ponte Vecchio in Florence, Piazza San Marco in Venice — tend to serve adapted menus, charge more, and sometimes offer a lower quality-to-price ratio than restaurants a few streets away. Walking a few blocks from the main attraction and choosing a place where the clientele is predominantly Italian is consistently good advice. Italian food markets are often a reliable way to find local producers and less touristy eating options — see the [Italian food markets guide](/food/italian-food-markets)."),
    h3("Pizzerias, bars, and other establishments"),
    p("Not every eating establishment in Italy is a ristorante. A *bar* serves coffee, drinks, and light snacks and is for breakfast, coffee breaks, and aperitivo. A *pizzeria* is for pizza (and often other dishes). An *osteria* is an informal wine-and-food establishment, traditionally unpretentious. A *trattoria* is family-style and informal. A *rosticceria* sells ready-cooked takeaway food. [Italian street food](/food/italian-street-food) offers a good overview of informal eating options."),
  ],

  faqs: [
    {
      question: "Do you need to order every course in an Italian restaurant?",
      answer: "No. Ordering every course is optional. Ordering a primo and a secondo, or just a primo, or an antipasto and a primo, is entirely normal. No one will object to a two-course meal.",
    },
    {
      question: "Is tipping expected in Italian restaurants?",
      answer: "Tipping is not built into Italian service culture the way it is in the United States. Waiters in Italy are paid a contracted wage. Leaving a small amount for excellent service — rounding up the bill, or leaving a few euros in cash — is appreciated but not expected.",
    },
    {
      question: "What does coperto mean?",
      answer: "*Coperto* is a per-person cover charge covering bread and table setup. It appears as a separate line on the bill and is required to be listed on the menu or at the entrance. It is not a tip. The amount varies by restaurant and region.",
    },
    {
      question: "How do you ask for the bill in Italian?",
      answer: "Say *Il conto, per favore* — the bill, please. The bill will not be brought automatically; you need to ask for it. Making a writing gesture while catching the waiter's eye is also understood.",
    },
    {
      question: "What time do Italians typically eat dinner?",
      answer: "Dinner typically starts between 19:30 and 21:00 in most of Italy. In the south and Sicily, dinner often starts later. Restaurants outside tourist areas may not open for dinner until 19:30 or 20:00.",
    },
    {
      question: "Can you ask to split the bill in Italian restaurants?",
      answer: "Yes. *Si può dividere il conto?* (Can we split the bill?) is the right phrase. Whether a restaurant will split the bill varies — smaller trattorias sometimes prefer a single payment; larger restaurants generally accommodate it.",
    },
    {
      question: "Is it acceptable to order only pasta at an Italian restaurant?",
      answer: "Completely acceptable. Ordering a primo as your only course — pasta, risotto, or gnocchi — is common at lunch and normal at dinner. There is no expectation that every diner orders multiple courses.",
    },
    {
      question: "Can you request dietary substitutions?",
      answer: "You can ask, and most restaurants will try to help. Results vary by establishment. A simple request — removing an ingredient, serving a sauce separately — is usually manageable. Complex modifications may not be possible in a busy kitchen. For allergies, state them clearly and explicitly.",
    },
    {
      question: "Is tap water normally available in Italian restaurants?",
      answer: "Tap water (*acqua del rubinetto*) is available in Italian restaurants and is safe to drink. It is not automatically brought to the table — ask for it if you prefer it to bottled water. Bottled still or sparkling water will be charged.",
    },
    {
      question: "Do you need to make a reservation at Italian restaurants?",
      answer: "Not always. Many trattorias accept walk-ins. For popular restaurants on weekend evenings, booking ahead is strongly recommended. Calling the same day often works for mid-week meals. Booking tables at high-end restaurants should be done further in advance.",
    },
    {
      question: "What is the difference between a ristorante, trattoria, and osteria?",
      answer: "The terms overlap and there is no strict legal distinction. A *ristorante* is typically more formal and has a full menu. A *trattoria* is informal and family-style, often with a shorter, seasonal menu. An *osteria* is traditionally a wine-centred, unpretentious establishment with simple food. These categories have blurred considerably and many modern establishments use the names freely.",
    },
    {
      question: "Can you ask for bread in an Italian restaurant?",
      answer: "Bread is usually brought to the table automatically as part of the coperto. If it is not, you can ask: *Potremmo avere del pane?* (Could we have some bread?). Butter is not typically served alongside bread in Italian restaurants, though tourist-oriented places often accommodate the request.",
    },
  ],

  sourcesTitle: "Sources",
  sources: [
    {
      label: "Regione Lazio — Delibera sul coperto nei pubblici esercizi (2006)",
      url: "https://www.regione.lazio.it/",
      note: "Regional legislation on coperto display requirements in Lazio restaurants",
    },
    {
      label: "FIPE (Federazione Italiana Pubblici Esercizi)",
      url: "https://www.fipe.it/",
      note: "Italian restaurant and catering industry federation — practices, rights, and regulations",
    },
    {
      label: "Unione Nazionale Consumatori — Diritti al ristorante",
      url: "https://www.consumatori.it/",
      note: "Consumer rights in Italian restaurants: receipt obligations, coperto, payment methods",
    },
    {
      label: "AIC (Associazione Italiana Celiachia) — Mangiar Fuori",
      url: "https://www.celiachia.it/",
      note: "Italian Coeliac Association guidance on eating out with coeliac disease in Italy",
    },
    {
      label: "EU Regulation 1169/2011 on food information to consumers",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R1169",
      note: "Allergen labelling requirements applying to restaurant meals across EU member states",
    },
    {
      label: "Accademia Italiana della Cucina — La cucina italiana",
      url: "https://www.accademiaitalianadellacucina.it/",
      note: "Regional cuisine traditions and meal structure conventions",
    },
    {
      label: "Ministero delle Imprese e del Made in Italy — POS obbligatorio",
      url: "https://www.mimit.gov.it/",
      note: "Italian regulation on mandatory electronic payment acceptance for businesses",
    },
    {
      label: "Touring Club Italiano — Gastronomia regionale",
      url: "https://www.touringclub.it/",
      note: "Regional dining customs and practical travel guidance for Italy",
    },
  ],
};
