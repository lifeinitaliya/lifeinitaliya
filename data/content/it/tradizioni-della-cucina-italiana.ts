import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Approfondimento: "Tradizioni della cucina italiana" — edizione italiana,
// scritta in modo autonomo rispetto a quella inglese. È l'articolo generale
// sulla cultura del cibo; caffè, pasta romana, pizza, Sicilia, dolci, mercati
// e vini hanno articoli propri (per ora in inglese). Tutte le DOP e IGP citate
// sono state verificate nel registro UE eAmbrosia a settembre 2026; la STG
// Pizza Napoletana sul Regolamento (UE) 97/2010; le definizioni dei marchi sul
// sito della Commissione europea; i riconoscimenti UNESCO su ich.unesco.org;
// i PAT tramite il Ministero dell'Agricoltura; Pane Toscano e Pecorino Romano
// con i rispettivi consorzi; il decreto 2005 su panettone, pandoro e colomba
// in Gazzetta Ufficiale. Le origini non documentabili sono omesse o
// presentate come associazioni.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/italian-food-traditions";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const tradizioniDellaCucinaItaliana: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Perché la cucina italiana è così regionale?"),
    answer("**Più che una cucina italiana, ne esistono molte, locali.** A plasmarle sono stati la **geografia** — Alpi, pianure, colline, coste lunghissime e isole —, il **clima** con ciò che vi cresce e vi pascola, i **secoli di Stati separati** prima dell'Unità del 1861, i **commerci e le migrazioni**, e i **calendari religiosi e familiari**. Così un piatto celebre in una città può essere sconosciuto a poche ore di distanza, e lo stesso piatto cambia da un paese all'altro. È la chiave per mangiare bene in Italia."),
    p("Nel 2025 l'UNESCO ha iscritto \"La cucina italiana tra sostenibilità e diversità bioculturale\" nella Lista rappresentativa del Patrimonio culturale immateriale dell'umanità, descrivendola come un intreccio di tradizioni legate alle materie prime, alle tecniche artigianali, alle ricette antispreco e al tempo condiviso a tavola. Si aggiunge a due riconoscimenti precedenti che riguardano l'Italia: la Dieta mediterranea, condivisa con altri Paesi del Mediterraneo, e l'arte del pizzaiuolo napoletano. Nessuno di questi fissa una cucina unica: insieme descrivono un modo di cucinare e di stare a tavola che cambia da luogo a luogo."),
    p("Questo approfondimento racconta da dove nasce questa varietà e come orientarsi da viaggiatori: regioni, prodotti di base, struttura del pasto, stagioni e feste. Per la Sicilia c'è la nostra guida alle [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana); per il caffè, [Il caffè italiano](/it/cibo/caffe-italiano); per i dolci, [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani); per il vino, [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),

    // ——— 2 ———
    h2("Che cosa rende regionale il cibo"),
    p("Poche forze spiegano gran parte delle differenze tra le regioni. Agiscono insieme, e nessuna basta da sola."),
    ul(
      "**Montagne e pianure** — Alpi e Appennini favoriscono latticini, salumi, castagne e cereali robusti; la Pianura Padana è una delle grandi aree agricole d'Europa, con riso, mais e allevamenti.",
      "**Il mare** — coste lunghissime e isole mettono pesce e frutti di mare al centro di molte cucine locali.",
      "**Il clima** — ulivi, agrumi e grano duro prosperano nel Centro e al Sud, più caldi; burro e panna compaiono più spesso nel Nord, più freddo, anche se l'olio si usa ovunque.",
      "**La conservazione** — prima del frigorifero, stagionare, essiccare, salare e mettere sott'olio trasformava le abbondanze stagionali in cibo per tutto l'anno, e molte di queste tecniche sono diventate specialità.",
      "**La storia** — fino al 1861 la penisola era divisa tra regni, ducati, repubbliche e Stato Pontificio, con governanti, partner commerciali e confini diversi. Le città costiere commerciavano nel Mediterraneo; il Nord guardava all'Europa centrale.",
      "**Nuove colture** — pomodoro, mais, patate e peperoni arrivarono dalle Americhe dopo il Cinquecento e si diffusero gradualmente. Secondo il disciplinare europeo della Pizza Napoletana, il pomodoro comparve sulla pizza a Napoli all'inizio del Settecento.",
      "**Famiglia e comunità** — le ricette passano di generazione in generazione e cambiano da casa a casa: ecco perché \"la\" ricetta di un piatto è così spesso contesa.",
    ),
    {
      type: "image",
      src: `${IMG}/tuscany-olive-grove-artimino.webp`,
      alt: "Filari di ulivi su una collina toscana, con un borgo e crinali boscosi sullo sfondo al tramonto",
      caption: "Uliveti vicino ad Artimino, in Toscana. Paesaggio e clima decidono che cosa si coltiva, e che cosa si cucina.",
      credit: unsplash("Andreas Weilguny", "aweilguny"),
      wide: true,
    },

    // ——— 3 ———
    h2("Il Nord"),
    p("Il Nord va dalle Alpi alla Pianura Padana fino alle coste ligure e adriatica, e la sua cucina è varia quanto questa geografia."),
    ul(
      "**Piemonte** — paste ripiene come gli agnolotti, menu ricchi e in più portate, nocciole (Nocciola del Piemonte IGP) e, intorno ad Alba, il tartufo bianco d'autunno. Torino ha una lunga tradizione di caffè e cioccolato, e il Vermouth di Torino è un'indicazione geografica protetta.",
      "**Lombardia** — riso e burro: risotto alla milanese allo zafferano, ossobuco, cotoletta. Tra i formaggi Gorgonzola, Taleggio e Grana Padano (tutti DOP); in Valtellina i pizzoccheri di grano saraceno (IGP) e la Bresaola della Valtellina (IGP).",
      "**Veneto** — risotti di ogni tipo, polenta, pesce della laguna e, a Venezia, i cicchetti nei bacari. A Verona sono legati il pandoro e il riso Vialone Nano (Riso Nano Vialone Veronese IGP).",
      "**Liguria** — il basilico (Basilico Genovese DOP) e il pesto, la focaccia e la Focaccia di Recco col formaggio (IGP).",
      "**Emilia-Romagna** — la pasta fresca all'uovo come tagliatelle e tortellini, Parmigiano Reggiano, Prosciutto di Parma e Culatello di Zibello (DOP), Mortadella Bologna (IGP) e l'aceto balsamico tradizionale di Modena (DOP).",
      "**Trentino-Alto Adige** — influenze alpine e austriache: canederli, Speck Alto Adige (IGP), strudel di mele.",
      "**Friuli Venezia Giulia** — il Prosciutto di San Daniele (DOP) e piatti segnati dai confini con Austria e Slovenia.",
    ),
    p("Le nostre guide a [Milano](/it/citta/milano-oltre-il-duomo), [Torino](/it/citta/torino-per-la-prima-volta), [Verona](/it/citta/verona-per-la-prima-volta), [Venezia](/it/citta/venezia-per-la-prima-volta), [Bologna](/it/citta/bologna-in-due-giorni) e alle [Dolomiti](/it/guide/dolomiti-prima-volta) raccontano la cucina locale nel dettaglio."),
    {
      type: "image",
      src: `${IMG}/bologna-cheese-ham-stall.webp`,
      alt: "Un banco di mercato a Bologna pieno di forme di formaggio, prosciutti e salami, con una bandiera italiana",
      caption: "Formaggi e salumi su un banco di Bologna, nel cuore della food valley emiliana.",
      credit: unsplash("Kristijan Arsov", "aarsoph"),
    },

    // ——— 4 ———
    h2("Il Centro"),
    p("Il Centro è terra di colline, uliveti, pecore e maiali, e di pane: una cucina che spesso valorizza pochi ingredienti buoni."),
    ul(
      "**Toscana** — il pane è centrale: il Pane Toscano (DOP) si fa senza sale, secondo il consorzio, e finisce in zuppe come la ribollita. Firenze è nota per la bistecca alla fiorentina e il lampredotto; la campagna per il Pecorino Toscano (DOP), l'olio, il Lardo di Colonnata (IGP) e, a Siena, panforte, ricciarelli e cantucci (tutti IGP).",
      "**Lazio** — la pasta romana — carbonara, cacio e pepe, gricia e amatriciana — a base di guanciale e Pecorino Romano; i carciofi (Carciofo Romanesco del Lazio IGP) in primavera; la Porchetta di Ariccia (IGP).",
      "**Umbria** — legumi come la Lenticchia di Castelluccio di Norcia (IGP), carne di maiale e salumi, tartufo nero e olio.",
      "**Marche** — una lunga costa adriatica e colline interne: zuppe di pesce sulla costa, carni e paste al forno nell'entroterra.",
      "**Abruzzo** — tradizioni pastorali e marinare: arrosticini, formaggi di pecora e maccheroni alla chitarra.",
    ),
    p("Approfondisci con [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta) e [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),
    {
      type: "image",
      src: `${IMG}/florence-fresh-pasta-sant-ambrogio.webp`,
      alt: "Vassoi di pasta fresca ripiena — cappellacci e ravioli — con i prezzi scritti a mano in un mercato di Firenze",
      caption: "Pasta fresca ripiena al mercato di Sant'Ambrogio, a Firenze.",
      credit: unsplash("mana5280", "mana5280"),
    },

    // ——— 5 ———
    h2("Il Sud"),
    p("Il Sud viene spesso riassunto in pomodoro e pasta secca, il che è vero solo in parte: restano fuori verdure, legumi, pesce, formaggi, pani e conserve. E la cucina del Sud non è sempre piccante: il peperoncino conta in Calabria e altrove, molto meno in tanti piatti."),
    ul(
      "**Campania** — la [pizza napoletana](/it/cibo/pizza-napoletana) (Pizza Napoletana STG), la Mozzarella di Bufala Campana (DOP), la pasta secca di Gragnano (Pasta di Gragnano IGP), il pomodoro San Marzano (DOP) e, in Costiera Amalfitana, la Colatura di alici di Cetara (DOP).",
      "**Puglia** — orecchiette e altre paste di grano duro, Pane di Altamura (DOP), Burrata di Andria (IGP), Mozzarella di Gioia del Colle e Canestrato Pugliese (DOP), e oli come il Terra di Bari (DOP).",
      "**Basilicata** — una regione interna e pastorale, con formaggi di pecora come il Pecorino di Filiano (DOP), legumi e salumi.",
      "**Calabria** — Caciocavallo Silano (DOP), Liquirizia di Calabria (DOP) e la 'nduja piccante e spalmabile: un prodotto tradizionale senza marchio UE, a dimostrazione che tutela e tradizione non coincidono.",
    ),
    p("Vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),

    // ——— 6 ———
    h2("Sicilia e Sardegna"),
    h3("Sicilia"),
    p("La cucina siciliana riflette una lunga storia di dominazioni e commerci: greci, romani, bizantini, arabi, normanni, spagnoli e altri. L'UNESCO descrive i monumenti arabo-normanni di Palermo come testimonianza di un sincretismo tra culture occidentale, islamica e bizantina, e ingredienti frequenti nella cucina siciliana — mandorle, agrumi, il gusto agrodolce — vengono spesso ricondotti a quell'incontro, anche se nessuna singola influenza spiega tutto. Contano altrettanto l'agricoltura e il mare: arance rosse (Arancia Rossa di Sicilia IGP), pistacchio di Bronte (DOP), capperi di Pantelleria (IGP), formaggi come Ragusano e Pecorino Siciliano (DOP), cioccolato di Modica (IGP) e pesce in abbondanza."),
    p("Il cibo di strada e i mercati di Palermo sono tra i più vivaci d'Italia: vedi [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta) e le [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),
    h3("Sardegna"),
    p("La cucina sarda è nata dalla pastorizia e dalla terra non meno che dal mare. Tra i pani c'è il sottile e croccante pane carasau; tra i formaggi il Pecorino Sardo e il Fiore Sardo (entrambi DOP), e anche gran parte del Pecorino Romano si produce sull'isola: il consorzio indica come zone di produzione Sardegna, Lazio e provincia di Grosseto. Tra le paste i malloreddus, la fregola e i Culurgionis d'Ogliastra (IGP). La cucina sarda ha un carattere proprio, ma è sempre stata in dialogo con la penisola e con il Mediterraneo."),

    // ——— 7 ———
    h2("Le regioni in sintesi"),
    table(
      ["Regione", "Tradizioni rappresentative", "Esempi", "Ingredienti tipici"],
      [
        ["Piemonte", "Menu in più portate, caffè storici, tartufo d'autunno", "Agnolotti, bicerin, gianduiotti", "Nocciole, carne bovina, riso, tartufo bianco"],
        ["Lombardia", "Cucina di riso e burro", "Risotto alla milanese, cotoletta, panettone", "Riso, burro, formaggi"],
        ["Veneto", "Cucina di laguna, cicchetti", "Cicchetti, risotti, bigoli, polenta", "Pesce, riso, mais"],
        ["Liguria", "Erbe e focaccia", "Pesto, trofie, focaccia", "Basilico, olio, pinoli"],
        ["Emilia-Romagna", "Pasta fresca all'uovo e salumi", "Tagliatelle al ragù, tortellini", "Uova, maiale, Parmigiano Reggiano"],
        ["Toscana", "Cucina del pane, carni alla brace", "Ribollita, bistecca, lampredotto", "Pane sciapo, fagioli, olio"],
        ["Lazio", "I classici della pasta romana", "Carbonara, cacio e pepe, supplì", "Guanciale, Pecorino Romano, carciofi"],
        ["Campania", "Pizza e pasta secca", "Pizza, pasta e pesce", "Pomodoro, mozzarella di bufala, grano duro"],
        ["Puglia", "Pasta e pane di grano duro", "Orecchiette, Pane di Altamura", "Olio, verdure, formaggi freschi"],
        ["Sicilia", "Cibo di strada e dolci", "Arancine, panelle, cannoli", "Agrumi, mandorle, pistacchi, pesce"],
        ["Sardegna", "Cucina pastorale", "Pane carasau, culurgionis, malloreddus", "Formaggi di pecora, grano duro"],
      ],
      "Pochi esempi per regione, non il quadro completo.",
    ),

    // ——— 8 ———
    h2("La pasta è regionale"),
    p("\"La pasta italiana\" sono in realtà centinaia di formati locali, ciascuno legato a un luogo, a una farina e ai condimenti che le si addicono. In linea generale il Nord ha una forte tradizione di pasta fresca all'uovo, il Sud di pasta di grano duro, secca e fresca, ma le eccezioni sono tante, e famiglie e paesi fanno ogni formato a modo proprio."),
    table(
      ["Formato", "Legato a", "Contesto tradizionale"],
      [
        ["Tagliatelle", "Emilia-Romagna", "Nastri all'uovo, classiche al ragù a Bologna"],
        ["Tortellini", "Bologna e Modena", "Piccola pasta ripiena, spesso in brodo d'inverno"],
        ["Trofie", "Liguria", "Brevi riccioli, spesso al pesto"],
        ["Bigoli", "Veneto", "Spaghettoni; a Venezia bigoli in salsa, con cipolla e acciughe"],
        ["Pizzoccheri", "Valtellina, Lombardia", "Pasta di grano saraceno, tutelata come Pizzoccheri della Valtellina IGP"],
        ["Pici", "Toscana, soprattutto nel Senese", "Grossi spaghetti tirati a mano"],
        ["Bucatini", "Lazio", "Spaghetti forati, a Roma per l'amatriciana"],
        ["Maccheroni alla chitarra", "Abruzzo", "Tagliati sulla chitarra, un telaio a corde"],
        ["Orecchiette", "Puglia", "Di grano duro, spesso con le cime di rapa"],
        ["Cavatelli", "Diverse regioni del Sud", "Piccoli gusci di semola"],
        ["Malloreddus", "Sardegna", "Piccoli gnocchetti rigati"],
        ["Culurgionis", "Ogliastra, Sardegna", "Pasta ripiena, tutelata come Culurgionis d'Ogliastra IGP"],
      ],
      "Associazioni, non confini: molti formati si fanno ben oltre la regione d'origine.",
    ),
    p("I condimenti seguono i formati: gli spaghetti lunghi e sottili si sposano con sughi a base d'olio o di pomodoro, i formati rigati e forati trattengono sughi più corposi, la pasta ripiena chiede a volte solo burro o brodo. Sono consuetudini, non leggi, e chi cucina le infrange."),
    {
      type: "image",
      src: `${IMG}/rome-handmade-pasta.webp`,
      alt: "Due cuochi con il cappello bianco che stendono la pasta a mano al bancone, nella vetrina di un negozio a Roma",
      caption: "Pasta fatta a mano nella vetrina di un negozio romano.",
      credit: unsplash("Matej Buchla", "matejbuchla"),
    },

    // ——— 9 ———
    h2("Il pane"),
    p("Il pane è in tavola quasi a ogni pasto, e ogni regione ha il suo. Qualche esempio:"),
    ul(
      "**Pane Toscano** (DOP) — senza sale, ideale con i salumi saporiti e le zuppe di pane toscane.",
      "**Pane di Altamura** (DOP) — pane di grano duro pugliese.",
      "**Focaccia** — in Liguria, un pane basso e oleoso da mangiare a ogni ora; la Focaccia di Recco col formaggio (IGP) è una versione sottile e ripiena.",
      "**Pane carasau** — i fogli sottili e croccanti della Sardegna, che si conservano a lungo.",
      "**Schiacciata e piadina** — il pane schiacciato toscano e la piadina romagnola (Piadina Romagnola IGP), entrambi da farcire.",
      "**Pani delle feste** — dal panettone di Natale alla colomba di Pasqua (vedi sotto).",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-focaccia-bakery.webp`,
      alt: "Il bancone di un panificio genovese con teglie di focaccia e pani sugli scaffali, e una fornaia al lavoro",
      caption: "Un panificio a Genova, dove la focaccia è colazione, spuntino e pranzo.",
      credit: unsplash("Waleed Derhem", "waleed_rbeshr"),
    },

    // ——— 10 ———
    h2("I formaggi"),
    p("I formaggi seguono animali e paesaggi: vaccini sulle Alpi e in Pianura Padana, pecorini al Centro, al Sud e nelle isole, mozzarella di bufala in Campania. Molti hanno nomi tutelati — tra cui Parmigiano Reggiano, Grana Padano, Gorgonzola, Taleggio, Asiago, Fontina, Pecorino Romano, Pecorino Toscano, Pecorino Sardo e Mozzarella di Bufala Campana, tutti DOP —, ma innumerevoli formaggi locali non hanno alcun marchio UE, e non sono per questo meno tradizionali."),
    ul(
      "**Formaggi duri a lunga stagionatura** come Parmigiano Reggiano e Grana Padano: grattugiati sulla pasta o mangiati a scaglie.",
      "**Pecorino** significa formaggio di latte di pecora, e ce ne sono tanti: Romano, Toscano, Sardo, Siciliano e altri, ciascuno con un proprio carattere.",
      "**Formaggi freschi** come mozzarella, burrata e ricotta, da mangiare il prima possibile.",
      "**Formaggi di malga** degli alpeggi, che cambiano con la quota e la stagione.",
    ),

    // ——— 11 ———
    h2("L'olio d'oliva"),
    p("L'olio d'oliva è il grasso di tutti i giorni in gran parte d'Italia e il tocco finale di infiniti piatti. Gli ulivi crescono dalla Liguria alla Sicilia, con le produzioni maggiori al Sud, e molti oli hanno nomi tutelati — per esempio Riviera Ligure e Terra di Bari (DOP) e Toscano (IGP). Le varietà locali danno sapori diversi, dal dolce al piccante e amaro. L'extravergine è la categoria più alta secondo le norme UE. Tra autunno e inizio inverno si frange l'olio nuovo, festeggiato in molte zone di produzione."),
    {
      type: "image",
      src: `${IMG}/cappuccino-cornetti.webp`,
      alt: "Un cappuccino con la schiuma decorata accanto a due cornetti zuccherati ripieni di marmellata e crema su un tavolo di marmo",
      caption: "Cappuccino e cornetti: una colazione italiana tra le più comuni al bar.",
      credit: unsplash("Andrea Riezzo", "andriezzo"),
    },

    // ——— 12 ———
    h2("Riso e polenta"),
    p("In buona parte del Nord riso e polenta contano quanto la pasta. Secondo il Ministero dell'Agricoltura l'Italia è il primo produttore di riso in Europa, e la grande maggioranza delle risaie si trova in Piemonte e Lombardia, tra Vercellese, Novarese e Pavese. Le varietà da risotto assorbono il liquido restando al dente; tra i risi tutelati ci sono il Riso di Baraggia Biellese e Vercellese (DOP) e il Riso Nano Vialone Veronese (IGP). Il risotto ha molte forme regionali, dallo zafferano di Milano al nero di seppia di Venezia all'Amarone del Veronese."),
    p("La polenta, di farina di mais, è diventata un alimento base del Nord dopo l'arrivo del mais dalle Americhe. Si serve morbida oppure rappresa e abbrustolita, con spezzatini, formaggi, funghi o pesce, e resta tipica di Veneto, Lombardia, Friuli e arco alpino."),

    // ——— 13 ———
    h2("Il pasto italiano"),
    p("Il pasto tradizionale segue una struttura precisa. È lo schema di un pranzo completo, spesso festivo, non una regola per ogni giorno: di solito si mangiano una o due portate, e al ristorante nessuno si aspetta che si ordini tutto."),
    table(
      ["Portata", "Che cos'è"],
      [
        ["Aperitivo", "Un drink prima di cena, spesso con qualcosa da mangiare"],
        ["Antipasto", "Salumi, formaggi, verdure, mare"],
        ["Primo", "Pasta, risotto, minestra o gnocchi"],
        ["Secondo", "Carne o pesce"],
        ["Contorno", "Verdure o insalata, ordinate con il secondo"],
        ["Formaggi / frutta", "In alcuni pasti"],
        ["Dolce", "Il dessert"],
        ["Caffè", "Un espresso, a fine pasto"],
        ["Digestivo", "Un amaro o una grappa, per esempio"],
      ],
      "La sequenza completa è quella dei pranzi lunghi e delle occasioni speciali.",
    ),
    tip("Ordinare un primo e un contorno, oppure un antipasto da dividere e un secondo, è normalissimo. Scegli ciò che ti va.", "Una o due portate bastano"),

    // ——— 14 ———
    h2("La colazione"),
    p("La colazione è di solito leggera e spesso dolce, e molti la fanno in piedi al bar: cappuccino o espresso con un cornetto o un'altra brioche. A casa può essere caffè con biscotti, pane e marmellata o yogurt. Le varianti regionali non mancano: il maritozzo con la panna a Roma e, in Sicilia, soprattutto d'estate, la granita con la brioche. Il cappuccino è soprattutto una bevanda del mattino; più tardi la maggior parte degli italiani prende un espresso, ma nessun barista si rifiuterà di servirlo. Approfondisci con [Il caffè italiano](/it/cibo/caffe-italiano)."),

    // ——— 15 ———
    h2("L'aperitivo e il mangiare insieme"),
    p("L'aperitivo — un drink a fine giornata con qualcosa da mangiare — è un rito sociale in molte città, soprattutto al Nord, e cambia forma da un posto all'altro: il vermouth a Torino, lo spritz in Veneto; a Venezia i cicchetti, da mangiare in piedi al banco del bacaro con un'ombra di vino; a Milano i bar che accompagnano il drink con piatti abbondanti o buffet. La formula a buffet, detta anche apericena, è più recente e può sostituire la cena; l'aperitivo tradizionale è più leggero. Bevande e versioni regionali nella nostra guida all'[aperitivo italiano](/it/cibo/aperitivo-italiano). Oltre al bicchiere, il cibo in Italia è soprattutto socialità: i lunghi pranzi della domenica, le feste di famiglia e le sagre di paese sono i luoghi in cui molte tradizioni restano vive."),

    // ——— 16 ———
    h2("I mercati"),
    p("I mercati mostrano che cosa si mangia in un luogo e che cosa è di stagione. Produttori e commercianti espongono frutta e verdura, formaggi, salumi, pesce e pane, e in molte città il mercato è anche il posto per un pranzo veloce. La nostra guida ai [mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani) spiega i diversi tipi e come fare la spesa."),
    ul(
      "**Firenze** — il Mercato Centrale, con la food hall al piano di sopra, e il mercato di quartiere di Sant'Ambrogio.",
      "**Bologna** — botteghe e banchi nel centro storico, con pasta fresca, formaggi e salumi.",
      "**Palermo** — mercati di strada come Ballarò, dove frutta, pesce e cibo di strada si dividono i vicoli.",
      "**Venezia** — il mercato di Rialto, con i banchi di pesce e verdura accanto al Canal Grande.",
      "**Genova** — il Mercato Orientale, al coperto.",
    ),
    p("Vai la mattina, compra piccole quantità e chiedi prima di toccare la merce."),
    {
      type: "image",
      src: `${IMG}/palermo-ballaro-market.webp`,
      alt: "Un banco affollato del mercato di Ballarò a Palermo, pieno di formaggi, olive, salumi e piatti pronti",
      caption: "Ballarò, uno dei mercati storici di Palermo.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },

    // ——— 17 ———
    h2("Mangiare secondo le stagioni"),
    p("I menu cambiano con le stagioni, e molti ristoranti scrivono i piatti del giorno su una lavagna. Le stagioni però variano con latitudine e quota — in Sicilia la primavera arriva settimane prima che sulle Alpi —, quindi queste sono tendenze generali, non un calendario."),
    table(
      ["Stagione", "Prodotti tipici", "Che cosa si trova nei menu"],
      [
        ["Primavera", "Carciofi, asparagi, fave, piselli, prime verdure", "Carciofi a Roma; risotti con le verdure di stagione"],
        ["Estate", "Pomodori, melanzane, peperoni, zucchine, pesche, meloni", "Piatti freddi, verdure grigliate, pesce"],
        ["Autunno", "Funghi, castagne, uva, tartufi, olio nuovo", "Tartufo in Piemonte; castagne e selvaggina"],
        ["Inverno", "Legumi, cavoli, agrumi al Sud", "Zuppe di legumi come la ribollita; stufati; tortellini in brodo"],
      ],
      "La disponibilità cambia da regione a regione e da un anno all'altro.",
    ),
    p("L'autunno è il tempo dei raccolti: uva, olive, castagne e funghi, e ad Alba il tartufo bianco. Nel 2026 la Fiera internazionale del tartufo bianco d'Alba si svolge nei fine settimana dal 10 ottobre al 6 dicembre. Per scegliere il periodo del viaggio, vedi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 18 ———
    h2("Feste e calendario religioso"),
    p("Molti dei cibi italiani più conosciuti appartengono a un giorno o a una stagione precisi. Alcuni si mangiano ovunque, molti sono locali."),
    ul(
      "**Natale** — il panettone, legato a Milano, e il pandoro, legato a Verona, si mangiano in tutta Italia; dal 2005 un decreto stabilisce che cosa può essere venduto come panettone, pandoro e colomba. Tra i dolci locali panforte e ricciarelli a Siena, struffoli a Napoli.",
      "**Vigilia e Capodanno** — molte famiglie mangiano pesce la sera della Vigilia, e lenticchie — simbolo di prosperità — con cotechino o zampone a Capodanno.",
      "**Carnevale** — dolci fritti diffusi ovunque sotto tanti nomi regionali: chiacchiere, frappe, crostoli, bugie e altri.",
      "**Pasqua** — la colomba, la pastiera napoletana e molti pani pasquali regionali, alcuni con le uova intere.",
      "**Feste patronali** — portano specialità locali; a Palermo, per esempio, il 13 dicembre, festa di Santa Lucia, si mangiano le arancine.",
      "**Sagre** — feste locali, soprattutto d'estate e d'autunno, dedicate a un solo prodotto, dalle castagne al pesce.",
    ),
    p("Approfondisci con [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),
    {
      type: "image",
      src: `${IMG}/panettoni-for-sale.webp`,
      alt: "Panettoni avvolti nel cellophane con nastri rossi su un banco coperto da un telo rosso",
      caption: "Panettoni in vendita a Natale, quando compaiono in tutta Italia.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 19 ———
    h2("Il cibo di strada"),
    p("Ogni regione ha il suo cibo da mangiare in piedi. Nomi e ricette sono spesso questioni di orgoglio locale, e di dibattito."),
    ul(
      "**Arancine / arancini** — palle di riso fritte siciliane. A Palermo la parola è femminile, arancina, e la forma di solito tonda; nella Sicilia orientale si dice arancino, spesso a forma di cono. Entrambi i nomi sono corretti, ciascuno nel suo territorio.",
      "**Panelle e sfincione** — frittelle di ceci e una pizza alta e soffice, a Palermo.",
      "**Supplì** — le crocchette di riso fritte di Roma.",
      "**Pizza al taglio** — venduta a peso, soprattutto a Roma.",
      "**Lampredotto** — trippa nel panino, dai chioschi fiorentini.",
      "**Piadina** — il pane schiacciato romagnolo, farcito con formaggio, prosciutto o verdure.",
      "**Focaccia** — lo spuntino quotidiano della Liguria.",
      "**Porchetta** — maiale arrotolato e arrosto, spesso nel panino; la Porchetta di Ariccia (IGP) viene dai Castelli Romani.",
      "**Panzerotti** — mezzelune di pasta ripiene e fritte, legate alla Puglia.",
    ),

    // ——— 20 ———
    h2("Conservare: stagionare, essiccare, salare"),
    p("Molti dei cibi italiani più celebri sono nati per far durare un raccolto o la macellazione. Stagionatura, essiccazione, salagione, affumicatura, fermentazione e conservazione sott'olio hanno lunghe storie locali, e i loro frutti sono oggi specialità a sé."),
    ul(
      "**Stagionatura** — prosciutti come quelli di Parma e di San Daniele (DOP), il Culatello di Zibello (DOP), la Bresaola della Valtellina (IGP) e lo Speck Alto Adige (IGP), anche affumicato.",
      "**Salagione** — il Lardo di Colonnata (IGP), stagionato in conche di marmo in Toscana; i capperi di Pantelleria (IGP); le acciughe.",
      "**Fermentazione ed estrazione** — la Colatura di alici di Cetara (DOP), ricavata dalle acciughe salate in Costiera Amalfitana.",
      "**Essiccazione** — pasta, pomodori secchi, fichi secchi e legumi, e la lunga stagionatura dei formaggi duri.",
      "**Sott'olio** — verdure come melanzane e carciofi, e il tonno.",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-sun-dried-tomatoes.webp`,
      alt: "Cassette di pomodori secchi rosso scuro con i cartellini dei prezzi su un banco di mercato a Genova",
      caption: "Pomodori secchi al Mercato Orientale di Genova: la conservazione trasforma l'estate in cibo per tutto l'anno.",
      credit: unsplash("Elisabeth Bertrand", "dolcevia"),
    },

    // ——— 21 ———
    h2("DOP, IGP, STG e PAT: che cosa significano"),
    p("L'Italia ha centinaia di denominazioni tutelate tra cibo e vino. I marchi sono utili, ma certificano regole precise, non se un cibo sia \"vero\" cibo italiano."),
    table(
      ["Sigla", "Nome completo", "Che cosa significa"],
      [
        ["DOP", "Denominazione di origine protetta", "Secondo la Commissione europea, ogni fase di produzione, trasformazione ed elaborazione avviene nella zona delimitata"],
        ["IGP", "Indicazione geografica protetta", "Qualità o reputazione del prodotto sono legate al territorio, dove si svolge almeno una fase della produzione"],
        ["STG", "Specialità tradizionale garantita", "Tutela una ricetta o un metodo di produzione tradizionale, non un luogo: per esempio la Pizza Napoletana"],
        ["PAT", "Prodotto agroalimentare tradizionale", "Prodotti con metodi praticati sul territorio da almeno 25 anni, iscritti nell'elenco nazionale del Ministero dell'Agricoltura"],
      ],
    ),
    p("DOP, IGP e STG sono sistemi europei con disciplinari vincolanti. I PAT sono un elenco nazionale aggiornato ogni anno; secondo il Ministero, con la revisione del 2025 hanno superato quota 5.700. E tanti cibi tradizionali non hanno alcun marchio."),

    // ——— 22 ———
    h2("Che cosa vuol dire \"autentico\""),
    p("Le discussioni sulla versione \"autentica\" di un piatto fanno parte della cultura gastronomica italiana, ma l'autenticità raramente coincide con una ricetta unica. Le ricette cambiano da paese a paese e da famiglia a famiglia; i ristoranti le adattano; le ricette storiche si trasformano con gli ingredienti e i gusti; e più tradizioni possono convivere nella stessa città. I prodotti tutelati hanno disciplinari precisi, ma la maggior parte dei piatti no. Più che chiedersi \"è autentico?\", conviene chiedersi \"qui si fa così?\""),

    // ——— 23 ———
    h2("Luoghi comuni da sfatare"),
    ul(
      "**\"La cucina italiana è pizza e pasta.\"** Sono importanti, ma riso, polenta, pane, minestre, verdure, legumi, pesce e formaggi sono altrettanto centrali in molte regioni.",
      "**\"Tutte le regioni cucinano allo stesso modo.\"** La cucina cambia tra regioni, province e perfino paesi vicini.",
      "**\"Il cappuccino dopo colazione è vietato.\"** È soprattutto una bevanda del mattino, ma è un'abitudine, non una regola.",
      "**\"Ogni pasto ha tutte le portate.\"** La sequenza completa è per le occasioni speciali.",
      "**\"Esiste una sola ricetta autentica.\"** Quasi ogni piatto esiste in molte versioni legittime.",
      "**\"Ogni sugo va con ogni pasta.\"** Formati e condimenti di solito si abbinano, anche se le consuetudini cambiano.",
      "**\"La cucina italiana è sempre pesante.\"** Quella di tutti i giorni è spesso semplice e ricca di verdure; i piatti ricchi appartengono a luoghi e occasioni precisi.",
      "**\"Ogni piatto regionale è antichissimo.\"** Alcuni sono antichi, altri nascono nell'Ottocento o nel Novecento, e molti si sono trasformati nel tempo.",
    ),

    // ——— 24 ———
    h2("Come vivere le tradizioni gastronomiche in viaggio"),
    ul(
      "**Visita un mercato la mattina** e guarda che cosa è di stagione.",
      "**Ordina piatti del territorio** — chiedi \"un piatto tipico?\" e guarda i piatti del giorno.",
      "**Mangia di stagione** — di solito lo dice la lavagna.",
      "**Prova trattorie e osterie di quartiere**, lontano dai monumenti più visitati.",
      "**Entra in forni e pasticcerie** per pani e dolci regionali.",
      "**Partecipa a un food tour o a un corso di cucina** per imparare da chi conosce il territorio.",
      "**Impara qualche parola del menu** (vedi sotto).",
      "**Fai coincidere il viaggio con una sagra** o una fiera stagionale, dai tartufi alle castagne.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-mercato-centrale-stall.webp`,
      alt: "Clienti a un bancone affollato del Mercato Centrale di Firenze, sotto prosciutti, salami e forme di formaggio appesi",
      caption: "Un banco di formaggi e salumi al Mercato Centrale di Firenze.",
      credit: unsplash("Tushar Agarwal", "tagag"),
    },

    // ——— 25 ———
    h2("Le parole del menu"),
    p("Le voci più comuni, con l'equivalente inglese che compare spesso nei menu bilingui delle città turistiche."),
    table(
      ["Italiano", "In inglese"],
      [
        ["Antipasto", "Starter"],
        ["Primo", "First course (pasta, risotto, soup)"],
        ["Secondo", "Main course (meat or fish)"],
        ["Contorno", "Side dish"],
        ["Dolce", "Dessert"],
        ["Piatto del giorno", "Dish of the day"],
        ["Di stagione", "Seasonal"],
        ["Fatto in casa", "Homemade"],
        ["Al forno", "Baked"],
        ["Alla griglia", "Grilled"],
        ["Fritto", "Fried"],
        ["Coperto", "Cover charge, per person"],
      ],
    ),
    p("Per il resto dell'organizzazione, vedi la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Perché la cucina italiana è così regionale?", answer: "Per geografia e clima, per i secoli di Stati separati prima dell'Unità del 1861, per commerci e migrazioni, e per le tradizioni agricole e di conservazione locali. E le ricette cambiano tra famiglie e paesi." },
    { question: "Quali sono le principali cucine regionali italiane?", answer: "Ogni regione ha la sua, ma in sintesi: al Nord riso, polenta, burro e pasta fresca all'uovo; al Centro pane, legumi, olio e carni alla brace; al Sud grano duro, pomodoro, verdure e pesce; e le tradizioni proprie di Sicilia e Sardegna." },
    { question: "Com'è fatto il pasto tradizionale italiano?", answer: "Antipasto, primo, secondo con contorno, dolce e caffè: ma è lo schema di un pasto completo o festivo. Nei giorni normali la maggior parte delle persone mangia una o due portate." },
    { question: "Che cos'è il primo?", answer: "La prima portata: di solito pasta, risotto, minestra o gnocchi." },
    { question: "Che cos'è l'antipasto?", answer: "Un piatto d'apertura, come salumi, formaggi, verdure o mare, spesso da condividere." },
    { question: "Che cos'è l'aperitivo?", answer: "Un drink a fine giornata con qualcosa da mangiare, prima di cena. Cambia da città a città: vermouth a Torino, spritz e cicchetti in Veneto, buffet più ricchi in alcuni bar di Milano." },
    { question: "Quali sono i cibi tradizionali del Nord?", answer: "Risotti, polenta, pasta fresca all'uovo come tagliatelle e tortellini, formaggi come Parmigiano Reggiano e Gorgonzola, salumi, il pesto in Liguria e lo speck in Alto Adige." },
    { question: "Quali cibi sono legati al Sud Italia?", answer: "Pasta secca di grano duro, pomodoro, verdure, olio, pesce e formaggi come mozzarella di bufala e burrata, oltre a pizza napoletana, orecchiette in Puglia e 'nduja in Calabria." },
    { question: "Quali formati di pasta sono legati alle regioni?", answer: "Tagliatelle e tortellini in Emilia-Romagna, trofie in Liguria, bigoli in Veneto, pici in Toscana, maccheroni alla chitarra in Abruzzo, orecchiette in Puglia e malloreddus in Sardegna, tra molti altri." },
    { question: "Che cosa sono DOP e IGP?", answer: "Denominazioni tutelate dall'UE. I prodotti DOP sono realizzati interamente nella zona delimitata; per gli IGP almeno una fase della produzione avviene lì, e la reputazione è legata al territorio." },
    { question: "Che cosa mangiano gli italiani a colazione?", answer: "Spesso qualcosa di leggero e dolce: cappuccino o espresso con un cornetto al bar, oppure caffè con biscotti o pane a casa. Tra le varianti regionali, granita e brioche in Sicilia." },
    { question: "Quali sono i prodotti di stagione in Italia?", answer: "Carciofi e asparagi in primavera, pomodori e frutta estiva d'estate, funghi, castagne e tartufi in autunno, legumi, cavoli e agrumi d'inverno, con differenze tra regioni." },
    { question: "Che cos'è il cibo di strada italiano?", answer: "Specialità regionali da mangiare in piedi, come arancine e panelle in Sicilia, supplì e pizza al taglio a Roma, lampredotto a Firenze, piadina in Romagna e focaccia in Liguria." },
    { question: "Esiste una cucina italiana autentica?", answer: "Non una sola. La cucina italiana è un insieme di tradizioni regionali e locali, e quasi ogni piatto esiste in molte versioni legittime." },
    { question: "Come si scopre la cucina locale in viaggio?", answer: "Andando ai mercati la mattina, ordinando piatti del territorio e di stagione, provando trattorie di quartiere e forni, e magari partecipando a un food tour o a un corso di cucina." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "UNESCO — La cucina italiana tra sostenibilità e diversità bioculturale (in inglese)", url: "https://ich.unesco.org/en/RL/italian-cooking-between-sustainability-and-biocultural-diversity-02093", note: "iscrizione 2025" },
    { label: "UNESCO — Dieta mediterranea (in inglese)", url: "https://ich.unesco.org/en/RL/mediterranean-diet-00884", note: "iscrizione 2013" },
    { label: "UNESCO — L'arte del pizzaiuolo napoletano (in inglese)", url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722", note: "iscrizione 2017" },
    { label: "Commissione europea — i regimi di qualità (in inglese)", url: "https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes/geographical-indications-and-quality-schemes-explained_en", note: "definizioni di DOP, IGP e STG" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "stato delle denominazioni" },
    { label: "Regolamento (UE) n. 97/2010 — Pizza Napoletana STG", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32010R0097", note: "disciplinare" },
    { label: "Ministero dell'Agricoltura — Prodotti agroalimentari tradizionali", url: "https://www.masaf.gov.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/398", note: "elenco nazionale PAT" },
    { label: "Consorzio Tutela Pane Toscano DOP", url: "https://www.panetoscanodop.it/it/il-pane", note: "pane senza sale" },
    { label: "Consorzio per la Tutela del Formaggio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "zone di produzione" },
    { label: "Gazzetta Ufficiale — Decreto 22 luglio 2005", url: "https://www.gazzettaufficiale.it/eli/id/2005/08/01/05A07670/sg", note: "panettone, pandoro e colomba" },
    { label: "Fiera internazionale del tartufo bianco d'Alba", url: "https://www.fieradeltartufo.org/", note: "date 2026" },
  ],
};
