import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "La colazione italiana" — edizione italiana, scritta
// autonomamente rispetto alla versione inglese, con gli stessi fatti.
// Verificato a ottobre 2026 su: Accademia della Crusca per la terminologia
// (colazione, cornetto, brioche, marmellata, confettura); Direttiva CE
// 2001/113 (distinzione marmellata/confettura nel diritto alimentare europeo,
// recepita in Italia); articolo sul caffè italiano su questo sito per la
// terminologia del caffè; portali di turismo regionali (Turismo Sicilia,
// DMO di Napoli) per le tradizioni regionali. La tendenza italiana a non
// ordinare il cappuccino dopo colazione è presentata come abitudine culturale,
// non come regola. La variabilità regionale è evidenziata in tutto il testo.
// Nessun locale, pasticceria, hotel o brand alimentare è citato o classificato.
// Nessun prezzo.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-breakfast";

export const colazioneItaliana: ArticleContent = {
  body: [
    // ——— 1 Introduzione ———
    h2("Com'è la colazione italiana?"),
    answer("**La colazione italiana tipica è veloce, dolce e costruita attorno al caffè. Al bar, la combinazione più comune è cappuccino o espresso e un cornetto — un dolce morbido e leggermente zuccherato, parente del croissant francese ma con un impasto più leggero e meno burroso.** A casa, potrebbe essere un caffè di moka con il latte e qualche biscotto o pane con la marmellata. La colazione in Italia non è un pasto abbondante; è la sosta più breve della giornata."),
    p("È qui che si apre spesso il divario tra aspettativa ed esperienza per chi arriva dall'estero. Chi è abituato a una colazione con uova, bacon, toast e una serie di preparazioni salate si ritrova davanti a un italiano che sembra arrancare fino a mezzogiorno con un pasticcino e un caffettino. Non è ascetismo né indifferenza — riflette un rapporto diverso tra i pasti della giornata e tra il dolce e il mattino. La colazione italiana è leggera, veloce e dolce per scelta."),
    p("Detto questo, non tutti gli italiani fanno la stessa colazione ogni mattina. Ci sono differenze regionali, differenze tra colazione a casa e al bar, e variazioni significative in quello che offrono gli hotel. Questo articolo le copre tutte: la colazione standard al bar, cosa si mangia a casa, come cambia la colazione nelle diverse regioni e cosa aspettarsi entrando in un bar italiano di mattina."),
    {
      type: "facts",
      title: "La colazione italiana: in breve",
      rows: [
        { label: "Il termine", value: "Colazione; prima colazione (forma formale per il pasto del mattino)" },
        { label: "Al bar", value: "Cappuccino (o espresso) e cornetto" },
        { label: "A casa", value: "Caffè di moka con latte, biscotti, pane con marmellata o yogurt" },
        { label: "Carattere", value: "Dolce e leggera; di solito si consuma in piedi al bancone del bar" },
        { label: "Variazioni regionali", value: "Importanti, soprattutto in Sicilia (granita e brioche) e a Napoli (dolci)" },
        { label: "Colazione in hotel", value: "Spesso più internazionale; può includere uova, salumi, formaggi" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Perché la colazione italiana è spesso dolce",
        "Il caffè a colazione",
        "Cornetto, brioche e altri dolci del mattino",
        "La colazione a casa",
        "La colazione al bar",
        "Le tradizioni regionali",
        "La colazione in hotel",
        "Come ordinare la colazione",
        "Glossario della colazione",
        "Falsi miti sulla colazione",
        "Domande frequenti",
      ],
    },

    // ——— 2 Perché dolce ———
    h2("Perché la colazione italiana è spesso dolce"),
    p("Il dolce al mattino in Italia non è casuale — riflette come si organizzano i pasti della giornata. La tradizione culinaria italiana colloca la parte principale di proteine e di sapori salati a pranzo e a cena. La colazione è una preparazione alla mattinata, non un pasto che deve sostenervi fino al successivo. Un cornetto e un cappuccino forniscono zuccheri, caffeina e una dose moderata di grassi e proteine — abbastanza per arrivare a metà mattina, quando magari seguirà un secondo caffè o uno spuntino."),
    p("Questo schema è comune in buona parte dell'Europa meridionale e del Mediterraneo e non è specifico dell'Italia. Ma qui è particolarmente radicato ed è rafforzato dalla cultura del bar: il bar italiano è attrezzato per un consumo veloce e in piedi di caffè e pasticcini, non per indugiare davanti alle uova."),
    p("Vale la pena notare la dolcezza del cornetto stesso. Il cornetto italiano è fatto con un impasto più soffice e zuccherato rispetto al croissant francese; la versione comune è leggermente dolce anche quando è vuota (*cornetto vuoto* o *semplice*). Questa è la versione più consumata — solo l'impasto — oppure con un ripieno: crema (crema pasticcera), marmellata (tipicamente di agrumi) o cioccolato."),
    image("cappuccino-saucer-table", "Un cappuccino in una tazza bianca su piattino a un tavolino di bar", false),

    // ——— 3 Caffè ———
    h2("Il caffè a colazione"),
    p("Il caffè è il punto fermo della colazione italiana, e il tipo di caffè conta. Per un quadro completo sulla cultura del caffè italiano, i termini e le tradizioni, l'articolo sul [caffè italiano](/food/italian-coffee-culture) è la guida dedicata. Ecco le basi per la colazione:"),
    ul(
      "**Cappuccino** — il caffè della colazione italiana per eccellenza: una dose di espresso con latte montato e schiumato. È considerato una bevanda mattutina, fortemente associata alla prima colazione. L'idea che gli italiani non ordinino mai il cappuccino fuori dall'orario di colazione è una tendenza culturale reale, non una regola assoluta: il cappuccino è associato al latte e alla digestione, e nella cultura del caffè italiana tradizionale ordinare un caffè abbondante con il latte dopo un pasto è insolito. A colazione, è la norma.",
      "**Espresso** (*un caffè*) — una piccola dose di caffè concentrato. Ordinare *un caffè* in Italia significa espresso; se volete un caffè lungo, specificatelo. L'espresso si beve a colazione ma anche a metà mattina, dopo pranzo e in altri momenti della giornata.",
      "**Caffè latte** — espresso con latte montato, di solito più latte e meno schiuma rispetto al cappuccino. È più una bevanda da casa che da bar; al bar si può ordinare ma è meno standard del cappuccino.",
      "**Latte macchiato** — latte caldo 'macchiato' da una dose di espresso, servito in un bicchiere. È più lattoso e meno intenso del cappuccino.",
      "**Caffè americano** — espresso allungato con acqua calda. Se volete un caffè più lungo e meno forte, è questo che dovete ordinare.",
    ),
    p("A casa, la moka è il modo più comune di fare il caffè. La moka prepara il caffè spingendo acqua calda sotto pressione attraverso il macinato — il risultato è più forte del caffè filtro ma meno concentrato dell'espresso. Si beve con o senza latte, spesso in una tazza grande."),
    image("cappuccino-ceramic-mug", "Un cappuccino in una tazza di ceramica bianca e blu su piattino bianco", false),
    tip("**Ordinare il caffè al bar** è di solito velocissimo: si entra, si va al banco e si dice *Un cappuccino, per favore* oppure *Un caffè, per favore*. Il barista lo prepara subito. Si paga alla fine (o in alcuni bar, prima, alla cassa). Stare al banco è la norma."),
    image("moka-pot-brewing", "Una moka sul fornello con il caffè scuro che sale nella camera superiore", false),

    // ——— 4 Cornetto e pasticceria ———
    h2("Cornetto, brioche e altri dolci del mattino"),
    p("Il cornetto è il dolce del mattino più diffuso in Italia, da nord a sud, anche se la forma esatta cambia da regione a regione e da panificio a panificio. È parente del *Kipferl* austriaco e del croissant francese — entrambi prodotti a forma di mezzaluna discesi da tradizioni di impasto sfogliato simili — ma la versione italiana non è semplicemente un croissant con un nome italiano. L'impasto tende a essere più morbido e leggermente più dolce; la sfogliatura è meno pronunciata; il risultato è più masticabile e meno croccante. Questo varia tra i panifici, e alcuni cornetti italiani sono più vicini a un croissant di altri, ma in linea di massima il cornetto italiano del bar quotidiano è un prodotto più morbido e dolce."),
    p("Le farciture più comuni al bar o in pasticceria:"),
    ul(
      "**Vuoto** — solo l'impasto, senza ripieno",
      "**Alla crema** — ripieno di crema pasticcera; la farcitura più comune",
      "**Alla marmellata** — ripieno di marmellata (tipicamente di agrumi, da cui il termine marmellata invece di confettura — vedi il glossario)",
      "**Al cioccolato** — ripieno di crema al cioccolato o Nutella",
      "**Integrale** — versione con farina integrale, sempre più disponibile",
    ),
    image("cornetto-pastry-table", "Una pasta sfogliata a forma di cornetto sul tavolino di un bar", false),
    p("**Brioche** è un termine più complesso in Italia di quanto sembri inizialmente. Nella maggior parte dell'Italia settentrionale e centrale, *brioche* al banco di un bar indica una pasta tipo cornetto o un panino morbido lievitato, non quello che un francese o un britannico riconoscerebbe come brioche (un pane arricchito di uova e burro). Il termine viene usato in modo diverso nelle diverse regioni e in contesti diversi; conviene chiedere cosa intende quel bar specifico piuttosto che dare per scontato di sapere."),
    p("L'eccezione più importante è la **Sicilia**, dove *brioche* ha un significato preciso e abbastanza diverso: un panino grande, soffice, a forma di cupola, fatto con uova, burro e talvolta acqua di fiori d'arancio, con una piccola sfera di pasta sopra chiamata *tuppo*. La *brioche col tuppo* siciliana è progettata per accompagnare la granita — la colazione tradizionale estiva siciliana. Vedi più avanti."),
    p("Altri dolci del mattino che si trovano nelle varie regioni:"),
    ul(
      "**Sfogliatella** a Napoli — *riccia* (con la copertura sfogliata e croccante) o *frolla* (con pasta frolla), ripiena di ricotta dolce con semola, scorza candita e cannella",
      "**Maritozzo** a Roma — un panino morbido e lievitato, tagliato e farcito con panna montata; tradizionale a Roma, ora si trova più largamente",
      "**Bombolone** — una ciambella fritta ripiena di crema o marmellata, diffusa in tutta Italia",
    ),
    image("pastry-display-case", "Un assortimento di dolci e pasticcini esposti in una vetrina di pasticceria", true),

    // ——— 5 Casa ———
    h2("La colazione a casa"),
    p("La colazione a casa in Italia differisce dal bar per un aspetto fondamentale: il caffè è quello della moka, non l'espresso. Il resto segue una logica simile — qualcosa di dolce, qualcosa da bere, qualcosa di veloce."),
    p("Una colazione infrasettimanale tipica potrebbe includere:"),
    ul(
      "Caffè di moka con latte (*caffè latte*) in una tazza grande",
      "Biscotti (*biscotti*) — quelli asciutti e semplici da inzuppare nel caffè",
      "Pane (*pane*) con burro e marmellata, o con una crema spalmabile",
      "Yogurt (*yogurt*), bianco o alla frutta",
      "Frutta fresca o in succo",
      "Cereali, soprattutto nelle famiglie con bambini",
      "Fette biscottate — un pane biscottato asciutto e leggermente dolce, molto comune come prodotto confezionato per la colazione",
    ),
    image("biscotti-coffee-basket", "Un cestino di biscotti italiani accanto a una tazza di caffè", false),
    p("I prodotti industriali per la colazione hanno un mercato grande in Italia — cereali, biscotti confezionati, bevande latte-e-cereali, pasticcini industriali. Questa è la realtà della colazione italiana infrasettimanale per molte famiglie, e vale la pena saperlo perché è spesso assente dalle descrizioni che si concentrano sulla versione romantica della colazione al bar. Il bar con il cornetto buono è la colazione del weekend e delle occasioni speciali; dal lunedì al venerdì, spesso è un biscotto e la moka a casa."),
    note("C'è una tendenza, scrivendo di cibo italiano, a descrivere 'la colazione italiana tradizionale' come se fosse universale. Non lo è — varia per regione, età, famiglia, giorno della settimana e preferenza personale, come succede ovunque."),

    // ——— 6 Al bar ———
    h2("La colazione al bar"),
    p("Il bar italiano non è come un pub o un cocktail bar. È un locale che serve caffè, pasticcini, cibo leggero, bibite e spesso vino e liquori, dalla mattina presto fino a sera tardi. Fare colazione al bar è una sosta veloce, non un pasto — di solito un quarto d'ora in piedi al bancone."),
    p("Entrare in un bar italiano per la colazione funziona così:"),
    ul(
      "Si va al bancone (*banco*). Il servizio ai tavoli esiste in molti bar ma costa di più — si paga il servizio.",
      "Si ordina direttamente al barista: *Un cappuccino e un cornetto, per favore*.",
      "Il barista prepara il caffè immediatamente — non in cinque minuti, subito.",
      "Il cornetto può essere preso da un espositore tiepido o da un cestino; a volte chiedono se lo volete *caldo* (scaldato un momento) o così com'è.",
      "Si mangia e si beve in piedi al bancone. È la cosa normale; non vi guarderanno con sorpresa.",
      "Si paga alla fine, al bancone o alla cassa. In alcuni bar, soprattutto a Napoli, il sistema è il contrario: si paga prima, si ritira lo scontrino e si consegna al barista.",
    ),
    image("cafe-bar-interior", "Tavoli e sedie all'interno di un bar italiano con la luce del mattino dalla finestra", false),
    p("Il ritmo è veloce. La colazione italiana al bar non è pensata per indugiare — non c'è il brunch, non c'è il caffè infinito, non c'è il cameriere che chiede se siete pronti per le uova. Si beve, si mangia, si paga e si va. Non è scortesia; è il ritmo."),
    tip("A Napoli molti bar funzionano con il *pagamento anticipato*. Si va alla cassa, si dice cosa si vuole, si paga, si prende lo scontrino e si consegna al barista. Questo sorprende chi non se lo aspetta; basta guardare cosa fanno gli altri clienti quando si entra.", "A Napoli"),
    image("ornate-cafe-interior", "L'interno ornato di un caffè storico italiano con arredi vintage e sedute eleganti", false),

    // ——— 7 Regionali ———
    h2("Le tradizioni regionali della colazione"),

    h3("Sicilia"),
    p("La tradizione colazionale più distintiva della Sicilia è la combinazione estiva di **granita e brioche col tuppo**. La granita è un dessert semighiacciato siciliano — più granuloso e grezzo del gelato o del sorbetto, fatto con acqua, zucchero e un aroma (caffè, mandorla, pistacchio, fragola, agrumi, gelso) — e in Sicilia si mangia a colazione insieme a una morbida *brioche col tuppo*, usata per raccogliere e assorbire la granita. A Catania, Messina e Palermo, la granita col tuppo al bar è un classico mattutino nelle stagioni calde. L'articolo sul [gelato italiano](/food/italian-gelato) tocca il legame più ampio tra dessert freddi e tavola siciliana; l'articolo sulle [tradizioni culinarie siciliane](/food/sicily-food-traditions) approfondisce la cultura gastronomica dell'isola."),
    p("La brioche siciliana non assomiglia per niente alla brioche francese — è un panino grande, morbido, a forma di cupola, fatto con uova e spesso aromatizzato con vaniglia o acqua di fiori d'arancio, con una piccola sfera di pasta sopra. I bar siciliani offrono anche un'ampia scelta di pasticcini al mattino."),

    h3("Napoli e Campania"),
    p("La colazione napoletana è famosa per i dolci e per la serietà con cui i napoletani trattano il loro espresso. Napoli rivendica — non senza ragione — di essere la culla dell'espresso come lo intendiamo oggi: il caffè forte, preparato in fretta, bevuto in piedi al bancone."),
    p("Al bar napoletano la mattina, accanto a cappuccino ed espresso, si trovano sfogliatella (nella versione *riccia* con il guscio croccante sfogliato, o *frolla* con la pasta frolla), *graffa* (una ciambella fritta all'impasto di patata spolverata di zucchero) e *babà* — anche se il babà è più tipico del pomeriggio o del dessert. La sfogliatella è specificamente napoletana e vale la pena cercarla: la versione riccia, ancora calda dal forno, con l'esterno croccante e sfogliato e il ripieno di ricotta dolce leggermente granulosa, non ha eguali fuori dalla Campania."),

    h3("Roma e Lazio"),
    p("La colazione romana segue fedelmente il formato nazionale del bar — cappuccino e cornetto è lo standard — con alcune variazioni locali. Il *maritozzo*, un panino morbido e lievitato ripieno generosamente di panna montata, è popolare a Roma e si mangia a colazione o come merenda. È tradizionale romano e ora si trova in molte città italiane, ma appartiene alla tavola della capitale."),

    h3("Toscana e Italia centrale"),
    p("In Toscana la colazione segue gli schemi nazionali — espresso o cappuccino, un cornetto o una fetta di *schiacciata* — con alcune variazioni nei dolci. I bar fiorentini sono noti per il buon caffè e per un approccio diretto al servizio."),
    p("La schiacciata (il pane piatto toscano con olio d'oliva e sale) compare talvolta come colazione, nella versione semplice o in quella autunnale con l'uva nell'impasto. È più leggera del cornetto e meno dolce."),

    h3("Nord Italia"),
    p("In Lombardia e nelle città del nord, la colazione al bar segue lo stesso schema del resto d'Italia — espresso o cappuccino e cornetto — ma la gamma di dolci al banco potrebbe includere una brioche più francese (più burrosa, più sfogliata) accanto ai cornetti più morbidi. Il termine *brioche* al banco di un bar settentrionale può indicare qualcosa di più simile a un croissant rispetto al sud."),
    p("In alcune zone del nord-est (Veneto e Friuli), la cultura del bar a colazione si intreccia con la cultura del bar in generale — lo stesso locale può servire caffè alle 8 e un bicchiere di prosecco alle 10, e il confine tra colazione e metà mattina è leggermente meno netto."),

    // ——— 8 Hotel ———
    h2("La colazione in hotel"),
    p("La colazione in hotel in Italia è generalmente più internazionale rispetto al bar di quartiere. Questo è pratico: gli hotel ospitano clienti di molti Paesi, e i clienti tedeschi, britannici o statunitensi si aspettano uova, pane, yogurt e qualcosa di più di un singolo pasticcino. Quello che si trova dipende dal tipo e dalla dimensione dell'hotel."),
    p("Una colazione tipica in un hotel di fascia media o alta potrebbe includere:"),
    ul(
      "Dolci — cornetti, croissant, piccoli pasticcini",
      "Panini e toast con burro e marmellata",
      "Yogurt (in vasetti individuali)",
      "Frutta fresca e succhi",
      "Cereali",
      "Formaggi e salumi — più comuni in hotel del nord Italia e negli alberghi di categoria medio-alta",
      "Uova sode o strapazzate in alcuni hotel",
      "Macchina del caffè o servizio, di solito con espresso, cappuccino, latte e americano",
    ),
    p("Alberghi più piccoli, *agriturismi* e B&B possono servire una colazione più personale e artigianale — torte fatte in casa, marmellate casalinghe, formaggi locali, frutta dall'orto — che può essere la colazione più piacevole in Italia, se si ha la fortuna di trovarla."),
    note("Se siete in hotel e volete fare colazione come la fa la maggior parte degli italiani, uscite e andate al bar di quartiere più vicino. Un cappuccino e un cornetto al bar locale è più veloce, più economico e — in termini di esperienza del mattino italiano — più autentico del buffet in hotel."),

    // ——— 9 Come ordinare ———
    h2("Come ordinare la colazione in Italia"),
    table(
      ["Cosa volete", "Cosa dire"],
      [
        ["Un cappuccino", "Un cappuccino, per favore"],
        ["Un espresso", "Un caffè, per favore"],
        ["Un caffè con il latte", "Un caffè latte, per favore"],
        ["Un cornetto vuoto", "Un cornetto vuoto, per favore"],
        ["Un cornetto alla crema", "Un cornetto alla crema, per favore"],
        ["Un cornetto alla marmellata", "Un cornetto alla marmellata, per favore"],
        ["Scaldatelo", "Scaldalo, per favore"],
        ["Da consumare qui", "Da consumare qui"],
        ["Da portare via", "Da portare via"],
        ["Al bancone", "Al banco, grazie"],
        ["Che gusti avete?", "Che gusti avete?"],
        ["Avete il decaffeinato?", "Avete il decaffeinato?"],
      ],
    ),
    tip("In molti bar il prezzo è lo stesso al banco o al tavolo — ma in alcuni, soprattutto nelle zone turistiche, sedersi al tavolo costa di più (coperto o prezzi maggiorati). Non siete obbligati a sedervi."),

    // ——— 10 Glossario ———
    h2("Glossario della colazione italiana"),
    table(
      ["Italiano", "Significato / nota"],
      [
        ["colazione", "Prima colazione; il pasto del mattino"],
        ["cornetto", "Dolce da bar italiano, parente del croissant ma con impasto più morbido e dolce"],
        ["brioche", "Dipende dal contesto: una pasta morbida arricchita al nord e al centro; a Napoli e in Sicilia, qualcosa di specifico e diverso"],
        ["crema", "Crema pasticcera"],
        ["marmellata", "Nel diritto alimentare e nell'uso formale: confettura di agrumi. Nel parlato comune, usato per qualsiasi tipo di marmellata o confettura"],
        ["confettura", "Conserva o marmellata di frutta (termine legalmente corretto per le confetture non di agrumi)"],
        ["cappuccino", "Espresso con latte montato e schiumato; associato alla colazione nella cultura italiana"],
        ["espresso / caffè", "Caffè concentrato; ordinare 'un caffè' in Italia significa espresso"],
        ["caffè latte", "Caffè con il latte, di solito una quantità maggiore di latte rispetto al cappuccino"],
        ["latte macchiato", "Latte caldo 'macchiato' da una piccola dose di espresso; servito in un bicchiere"],
        ["caffè americano", "Espresso allungato con acqua calda; più lungo e meno intenso"],
        ["moka", "Macchina da caffè stovetop (caffettiera moka); produce il caffè domestico standard in Italia"],
        ["al banco", "Al bancone (in piedi, al contrario di sedersi al tavolo)"],
        ["al tavolo", "Al tavolo"],
        ["vuoto", "Vuoto/semplice (come in cornetto vuoto — senza ripieno)"],
        ["fette biscottate", "Fette di pane biscottato, prodotto confezionato molto diffuso per la colazione"],
        ["scontrino", "Ricevuta; in alcuni bar (in particolare a Napoli) si paga prima alla cassa e si consegna lo scontrino al barista"],
      ],
    ),

    // ——— 11 Falsi miti ———
    h2("Falsi miti sulla colazione italiana"),
    ul(
      "**\"Gli italiani mangiano solo caffè e un cornetto a colazione.\"** La combinazione cappuccino-cornetto al bar è reale e diffusa, ma la colazione a casa è spesso diversa: cereali, biscotti, pane con marmellata e yogurt sono tutti normali. La colazione al bar è un rituale pubblico; quella a casa è più varia.",
      "**\"In Italia il cappuccino dopo le 11 è proibito.\"** Questa è una tendenza culturale, non una regola o una norma universale. Il cappuccino è associato alla colazione e al mattino; ordinarne uno dopo pranzo è insolito e può suscitare un commento gentile in alcuni bar. Ma gli italiani ordinano il cappuccino anche in altri momenti, e non vi verrà rifiutato. La versione 'regola' di questa idea è un'esagerazione di una tendenza culturale reale.",
      "**\"Un cornetto è semplicemente un croissant con un nome italiano.\"** Cornetto e croissant francese hanno un'origine comune ma sono prodotti tipicamente diversi: il cornetto italiano è più morbido, meno sfogliato e leggermente più dolce. La ricetta varia da panificio a panificio — alcuni cornetti sono più vicini a un croissant — ma trattarli come identici ignora una differenza reale.",
      "**\"La colazione italiana è sempre dolce.\"** È vero nella gran parte dei casi, ma non in modo assoluto. Alcuni hotel, soprattutto nel nord Italia, propongono opzioni salate accanto ai dolci. La colazione in agriturismo può includere formaggi locali e pane. La generalizzazione regge, ma non è assoluta.",
      "**\"Negli hotel italiani servono solo pasticcini.\"** La colazione in hotel in Italia è tipicamente più internazionale rispetto al bar di quartiere, con uova, pane, formaggi, salumi e yogurt accanto ai dolci. La qualità e la varietà variano molto da hotel a hotel.",
      "**\"L'espresso si beve sempre in piedi.\"** L'espresso si beve spesso in piedi al bancone (e in quel caso costa meno), ma non è una regola. Ci si può sedere, e molti italiani lo fanno.",
    ),

  ],

  faqs: [
    { question: "Com'è la colazione italiana tipica?", answer: "La colazione tipica al bar è cappuccino o espresso e un cornetto. A casa, di solito caffè di moka con latte e biscotti, pane con marmellata o yogurt. La colazione in Italia è leggera, veloce e dolce — i pasti principali sono pranzo e cena." },
    { question: "Cosa mangiano gli italiani a colazione?", answer: "Al bar, la cosa più comune è un cornetto e il caffè — cappuccino o espresso. A casa, biscotti da inzuppare nel caffè, pane con burro e marmellata, yogurt o fette biscottate. Le specialità regionali — sfogliatella a Napoli, granita con brioche in Sicilia — fanno parte delle tradizioni locali del mattino." },
    { question: "Gli italiani mangiano le uova a colazione?", answer: "Tipicamente no. Le uova non fanno parte della colazione standard italiana al bar o a casa. Possono comparire nella colazione in hotel per i clienti internazionali e talvolta in agriturismo. Nel quotidiano italiano, le uova sono un ingrediente di pasta, frittate e altri piatti — non un alimento del mattino." },
    { question: "Che cos'è un cornetto?", answer: "Il cornetto è il dolce del mattino standard italiano — una pasta morbida e leggermente dolce, parente del croissant ma con un impasto più leggero. Si trova vuoto o ripieno di crema pasticcera, marmellata o cioccolato. Si mangia al bancone del bar con un cappuccino o un espresso." },
    { question: "Un cornetto è uguale a un croissant?", answer: "Sono parenti, ma non identici. Entrambi sono dolci di pasta arricchita, ma il cornetto italiano è tipicamente più morbido, meno sfogliato e leggermente più dolce del croissant francese. La ricetta varia da panificio a panificio, ma in linea di massima sono prodotti distinti con texture diverse." },
    { question: "Cosa bevono gli italiani a colazione?", answer: "Il cappuccino è il caffè più tipico della colazione italiana — espresso con latte montato e schiumato. Si beve anche l'espresso (caffè). A casa, il caffè di moka con il latte è la norma. I bambini e i più giovani possono bere latte, succo o cioccolata calda." },
    { question: "Gli italiani bevono il cappuccino la mattina?", answer: "Sì — il cappuccino è la bevanda del mattino nella cultura del caffè italiano. È l'ordinazione più comune al bar a colazione. L'associazione tra cappuccino e mattino è genuina: si ritiene che la bevanda sia adatta alla colazione anche per il contenuto di latte." },
    { question: "Si può ordinare il cappuccino dopo colazione?", answer: "Sì, si può. L'idea popolare che ordinare il cappuccino dopo le 11 sia vietato o causi offesa è un'esagerazione. È associato alla colazione e gli italiani normalmente non lo bevono con pranzo o cena, ma non esiste una regola. In qualche bar tradizionale potreste ricevere un commento gentile." },
    { question: "Com'è la colazione siciliana?", answer: "La colazione siciliana più caratteristica (soprattutto d'estate) è granita con brioche col tuppo. La granita è un dolce semighiacciato siciliano fatto con acqua, zucchero e un aroma (caffè, mandorla, pistacchio, agrumi); in Sicilia si mangia a colazione insieme al morbido panino brioche. È specifica della Sicilia." },
    { question: "Che cos'è la granita con la brioche?", answer: "La granita con la brioche è una colazione siciliana in cui un dessert semighiacciato granuloso viene mangiato insieme a un morbido panino di brioche siciliana. La brioche si usa per raccogliere e assorbire la granita. È più tradizionale d'estate ed è particolarmente legata alla Sicilia orientale, anche se si trova in tutta l'isola." },
    { question: "Cosa si ordina al bar italiano a colazione?", answer: "L'ordine standard è: un cappuccino e un cornetto, per favore. Per l'espresso: un caffè, per favore. Per un cornetto con ripieno: alla crema, alla marmellata o al cioccolato. Si sta al bancone, si beve, si mangia e si paga alla fine." },
    { question: "La colazione in hotel è diversa da quella a casa?", answer: "Sì, di solito. La colazione in hotel in Italia è tipicamente più internazionale — più variata, con dolci, pane, yogurt, frutta, cereali e spesso uova o salumi. La colazione a casa e al bar è più leggera e semplice. Per vivere la colazione come la fanno la maggior parte degli italiani, è meglio andare al bar di quartiere." },
    { question: "La colazione italiana è dolce o salata?", answer: "Dolce è la norma. La colazione standard al bar e a casa ruota attorno ai dolci e al caffè. Gli elementi salati — formaggi, salumi, uova — compaiono negli hotel e in alcuni agriturismi, ma non sono la norma al bar di quartiere." },
    { question: "Cosa significa 'colazione'?", answer: "Colazione significa prima colazione in italiano — il primo pasto della giornata. La forma completa è prima colazione. Il termine è usato anche per uno spuntino leggero di mezzogiorno in alcuni testi tradizionali, ma nell'uso moderno indica quasi universalmente il pasto del mattino." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Accademia della Crusca — terminologia", url: "https://www.accademiadellacrusca.it/", note: "colazione, cornetto, marmellata, confettura, brioche" },
    { label: "Direttiva CE 2001/113 su marmellate, gelatine e confetture", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32001L0113", note: "distinzione tra marmellata (agrumi) e confettura (altra frutta)" },
    { label: "Regione Siciliana — Turismo", url: "https://www.visitsicily.info/", note: "granita e tradizione della brioche a colazione" },
    { label: "Comune di Napoli / DMO — Portale del Turismo di Napoli", url: "https://dmo-napoli.inera.it/", note: "sfogliatella e tradizioni dolciarie napoletane" },
    { label: "Barilla Center for Food & Nutrition (BCFN)", url: "https://www.barillacfn.com/", note: "schemi generali della colazione italiana — non citato per statistiche specifiche" },
    { label: "Reg. UE 1169/2011 e D.Lgs. 231/2017", url: "https://www.normattiva.it/", note: "informazioni sugli alimenti e allergeni" },
  ],
};
