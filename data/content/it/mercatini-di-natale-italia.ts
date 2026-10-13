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

const IMG = "/images/events/christmas-markets-italy";

export const mercatiniDiNataleItalia: ArticleContent = {
  body: [
    h2("Mercatini di Natale in Italia 2026: dove andare e quando"),
    answer("**La stagione dei mercatini di Natale in Italia va da metà novembre all'Epifania del 6 gennaio.** I mercatini dell'Alto Adige — Bolzano, Merano, Bressanone e Trento — aprono prima degli altri e rimangono aperti più a lungo. Il mercatino di Piazza Duomo a Milano e quello di Piazza Navona a Roma sono confermati per il periodo 1 dicembre 2026–6 gennaio 2027. Al momento della stesura di questo articolo (ottobre 2026), Verona e Firenze non avevano ancora pubblicato le date ufficiali 2026."),
    {
      type: "facts",
      title: "I mercatini di Natale 2026 in sintesi",
      rows: [
        { label: "Prima apertura", value: "Trento (20 novembre 2026) e Aosta (21 novembre 2026)" },
        { label: "Ultima chiusura", value: "6 gennaio 2027 (Epifania) per tutti i mercatini alpini, Milano e Roma" },
        { label: "Mercatini alpini", value: "Bolzano, Merano, Bressanone, Trento, Aosta: atmosfera mitteleuropea, aperti fino al 6 gennaio" },
        { label: "Mercatini di città", value: "Milano, Verona, Firenze, Roma: collocazione in piazze storiche, carattere italiano" },
        { label: "Quando andare", value: "Nei giorni feriali delle prime due settimane di dicembre, per evitare la folla del weekend" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Due tradizioni, nove mercatini",
        "Date 2026 in sintesi",
        "I mercatini alpini",
        "I mercatini di città",
        "Cosa mangiare e bere",
        "Cosa comprare",
        "Organizzare la visita",
      ],
    },

    h2("Due tradizioni, nove mercatini"),
    p("I mercatini di Natale italiani si dividono in due tradizioni ben distinte. Al nord — Alto Adige, Trentino e Valle d'Aosta — la tradizione è mitteleuropea e risale a secoli fa. Il Christkindlmarkt di Bolzano, avviato nel 1991 nella forma attuale ma erede di una consuetudine che risale al Trecento, è considerato il prototipo italiano del mercatino di Natale: ha ispirato la maggior parte di quelli nati in seguito nel resto del Paese. In questi territori il mercatino è un'istituzione profondamente radicata, con standard di qualità artigianale difficili da trovare altrove."),
    p("Nelle grandi città — Milano, Verona, Firenze, Roma — i mercatini sono un'aggiunta più recente al calendario natalizio. L'atmosfera è italiana e urbana: più rumorosa, più commerciale, ma inserita in contesti monumentali che ne moltiplicano il fascino. Chi conosce già i mercatini altoatesini troverà quelli cittadini molto diversi; chi li visita entrambi avrà due esperienze complementari."),
    note("I mercatini trattati in questo articolo sono eventi consolidati, che si ripetono da anni. Non ogni città italiana organizza un mercatino natalizio, e alcuni eventi saltano un'edizione o cambiano formula. Prima di pianificare un viaggio intorno a un mercatino minore, conviene verificare con l'ufficio turistico locale."),
    image("alpine-village-snowy-street", "Una strada innevata in un paese alpino di montagna, con edifici tradizionali in pietra e legno", true),

    h2("Date 2026 in sintesi"),
    note("**Una nota sulle date.** Le date indicate come *Confermate* provengono dall'organizzatore dell'evento o da un ente istituzionale. Le date *Non ancora confermate* sono stime basate sulle edizioni precedenti e vanno trattate come provvisorie. Verificate sempre sul sito ufficiale dell'organizzatore prima di prenotare trasporti e alloggio."),
    table(
      ["Mercatino", "Città", "Date 2026", "Stato"],
      [
        ["Mercatino di Natale", "Trento", "20 nov 2026 – 6 gen 2027", "Confermato"],
        ["Marché Vert Noël", "Aosta", "21 nov 2026 – 6 gen 2027", "Confermato"],
        ["Meraner Weihnacht", "Merano", "26 nov 2026 – 6 gen 2027", "Confermato"],
        ["Christkindlmarkt", "Bolzano", "27 nov 2026 – 6 gen 2027", "Confermato"],
        ["Mercatino di Natale", "Bressanone", "27 nov 2026 – 6 gen 2027", "Confermato"],
        ["Mercatino in Duomo", "Milano", "1 dic 2026 – 6 gen 2027", "Confermato"],
        ["Natale a Verona", "Verona", "Stima: fine nov–fine dic 2026", "Non ancora confermato"],
        ["Weihnachtsmarkt", "Firenze", "Stima: metà nov–metà dic 2026", "Non ancora confermato"],
        ["Befana e Natale in Piazza Navona", "Roma", "1 dic 2026 – 6 gen 2027", "Confermato"],
      ],
      "Date dei mercatini di Natale 2026 in Italia. Le stime sono basate sulle edizioni precedenti; verificate sul sito ufficiale prima di prenotare."
    ),

    h2("I mercatini alpini"),
    p("I mercatini del Trentino-Alto Adige e della Valle d'Aosta sono i più scenografici d'Italia. Si svolgono in contesti di rara bellezza — piazze medievali, cattedrali romaniche e gotiche, strade di paese circondate da montagne — e restano aperti più a lungo, quasi sempre fino all'Epifania del 6 gennaio. Sono anche i più affollati nei weekend di dicembre: arrivare in settimana, possibilmente nelle prime due settimane dall'apertura, fa una differenza notevole."),
    image("market-stall-warm-lights", "Una casetta del mercatino con luci calde color ambra, struttura in legno e decorazioni natalizie", true),

    h3("Trento — Mercatino di Natale"),
    p("Il mercatino di Trento è confermato per il **20 novembre 2026–6 gennaio 2027**. Le casette si distribuiscono tra Piazza Fiera, Piazza Cesare Battisti e le strade circostanti; dalla Piazza Duomo si guarda un distesa di casette illuminate fino alla Fontana del Nettuno e al Duomo cinquecentesco che fa da sfondo. Il mercatino di Trento ha un carattere italiano-alpino: si parla italiano (non tedesco), ma il vin brulé, i giocattoli in legno e le decorazioni artigianali sono gli stessi che si trovano quaranta chilometri più a nord a Bolzano. Le date sono state confermate dal sito Visit Trento e dall'APT Trento."),
    tip("Trento è collegata da treni regionali frequenti a Verona (circa 60–70 minuti) e a Bolzano (circa 30 minuti), il che permette di combinare più mercatini in una sola giornata senza difficoltà."),

    h3("Aosta — Marché Vert Noël"),
    p("Il *Marché Vert Noël* (Mercato Verde di Natale) della Valle d'Aosta si svolge dal **21 novembre 2026 al 6 gennaio 2027**, con una cerimonia d'apertura il 20 novembre alle 18:00. Il mercatino occupa le strade del centro storico di Aosta — includendo l'area intorno all'Arco d'Augusto, un arco trionfale del I secolo a.C. — con oltre 100 chalet. La Valle d'Aosta è ufficialmente bilingue (italiano e francese), e questa identità si riflette nel mercatino: i cartelli sono in entrambe le lingue e il cibo comprende sia specialità italiane sia prodotti valdostani come la fontina e la *seuppa à la valpellinentze*."),
    p("Aosta si trova a 583 metri di quota, circondata da alcune delle cime più alte d'Europa. Rispetto ai mercatini altoatesini, attira meno turisti stranieri, il che la rende una delle opzioni più tranquille per chi vuole fare acquisti con calma. Il collegamento più comodo è con Torino (circa 1 ora e 50 minuti in treno)."),

    h3("Merano — Meraner Weihnacht"),
    p("Il *Meraner Weihnacht* (Natale Meranense) apre il **26 novembre 2026** — con cerimonia inaugurale alle 17:00 — **e chiude il 6 gennaio 2027**. Le casette artigianali si estendono lungo la Kurpromenade, il viale passeggiata costruito nel periodo di massimo splendore della città termale a inizio Novecento. Il Kurhaus — una grande sala da concerto in stile liberty — fa da scenografia principale. Alcune strutture ricettive della zona propongono pacchetti che combinano spa e visita al mercatino. La data del 26 novembre è confermata dall'ente turistico ufficiale di Merano (merano-suedtirol.it)."),
    tip("Da Bolzano, Merano si raggiunge in circa 30 minuti di treno regionale. La visita a entrambi i mercatini in una stessa giornata è del tutto praticabile; il percorso in treno attraversa la bella valle dell'Adige."),

    h3("Bolzano — Christkindlmarkt"),
    p("Il mercatino di Natale più antico e conosciuto d'Italia. Il Christkindlmarkt di Bolzano ha festeggiato la sua 35ª edizione nel 2025; l'edizione 2026 aprirà il **27 novembre** (con inaugurazione e accensione dell'albero la sera precedente, 26 novembre alle 17:00) e chiuderà il **6 gennaio 2027**. Il mercatino è chiuso il 25 dicembre. Oltre 80 bancarelle occupano Piazza Walther e le vie intorno al Duomo."),
    p("Ciò che distingue il mercatino di Bolzano da quasi tutti gli altri in Italia è la selezione rigorosa degli espositori: i prodotti di serie industriale sono esplicitamente esclusi. La qualità dei giocattoli in legno, delle decorazioni, dei capi in lana e dei prodotti alimentari è sistematicamente alta. Il mercatino propone anche musica dal vivo, laboratori artigianali e un programma per bambini per tutta la stagione."),

    h3("Bressanone — Mercatino di Natale"),
    p("Il mercatino più piccolo tra i principali dell'Alto Adige, e spesso il preferito da chi lo conosce. A Bressanone il mercatino **apre il 27 novembre 2026 con inaugurazione alle 17:00** e rimane aperto fino al **6 gennaio 2027** (chiuso il 25 dicembre). L'ambientazione è eccezionale: circa 60 chalet artigianali selezionati in Piazza Duomo, la piazza davanti alla cattedrale romanica con le due torri illuminate per tutta la stagione. Il mercatino è organizzato da Bressanone Turismo, la cooperativa che lo gestisce per conto del Comune."),
    p("L'accesso alla piazza dalla via commerciale principale avviene attraverso un passaggio medievale stretto, il che dà al mercatino un'aria raccolta anche nei momenti di maggiore affluenza. Accanto alla cattedrale, il Palazzo dei Principi Vescovi ospita l'installazione luminosa *OOPS*, in programma dal 26 novembre 2026 al 9 gennaio 2027. Bressanone si raggiunge da Bolzano in circa 40 minuti di treno regionale."),

    h2("I mercatini di città"),
    p("I mercatini natalizi nelle grandi città italiane sono un fenomeno più recente e hanno un carattere diverso: più vivace, più commerciale, ma inserito in scenografie monumentali che offrono qualcosa che i borghi alpini non possono dare. Un weekend di dicembre che combina un mercatino con i musei, i ristoranti e l'architettura di Milano o Roma è una combinazione difficile da battere."),

    h3("Milano — Mercatino di Natale in Piazza Duomo"),
    p("Il Comune di Milano ha pubblicato un *avviso pubblico* che fissa due edizioni consecutive del mercatino di Piazza Duomo: dicembre 2025–gennaio 2026 e **1 dicembre 2026–6 gennaio 2027**. Le date 2026 sono quindi ufficialmente confermate. Il mercatino circonda la base del Duomo — una delle cattedrali gotiche più straordinarie d'Europa — e il contrasto tra le casette illuminate e la facciata in marmo bianco è particolarmente suggestivo di sera."),
    p("Parallelamente al mercatino di Piazza Duomo, l'**Oh Bej! Oh Bej!** si svolge al Castello Sforzesco nei giorni **7–8 dicembre 2026**. Questa è una delle fiere natalizie più antiche di Milano, risalente al Cinquecento, con centinaia di bancarelle di antiquariato, oggettistica e cibo di strada. Cade nella festa di Sant'Ambrogio (7 dicembre), patrono della città. Per una guida più ampia a Milano, vedi l'[articolo su Milano](/it/citta/milano-oltre-il-duomo)."),

    h3("Verona — Natale a Verona"),
    p("Verona ha ospitato eventi natalizi in Piazza dei Signori e, nel 2025, in Piazza Bra. L'organizzatore — un consorzio che include Confcommercio e Confesercenti veronesi — allestisce solitamente il mercatino nel periodo dell'Avvento, grosso modo dalla fine di novembre alla fine di dicembre."),
    note("**Date 2026 non ancora confermate.** All'ottobre 2026, l'organizzatore del mercatino di Verona non aveva ancora pubblicato il programma ufficiale. Le date stimate (fine novembre–fine dicembre) si basano sull'edizione 2025. Controllate nataleinpiazza.it o il sito del Comune di Verona prima di prenotare. Per pianificare una visita a Verona, vedi la [guida a Verona](/it/citta/verona-per-la-prima-volta)."),

    image("florence-cathedral-piazza", "Visitatori in movimento davanti alla facciata gotica del Duomo di Firenze, Santa Maria del Fiore", true),

    h3("Firenze — Weihnachtsmarkt in Piazza Santa Croce"),
    p("Il mercatino principale di Firenze è un *Weihnachtsmarkt* (letteralmente «mercato di Natale» in tedesco) in Piazza Santa Croce, la grande piazza davanti alla basilica gotica di Santa Croce. Una cinquantina di casette in legno propongono artigianato, prodotti tipici e bevande di tradizione centroeuropea. Una fonte turistica fiorentina indica come date stimate il **14 novembre–20 dicembre 2026**, ma l'organizzatore non le ha ancora confermate ufficialmente."),
    note("**Date 2026 non ancora confermate.** Al momento della stesura (ottobre 2026) il programma ufficiale del Weihnachtsmarkt fiorentino 2026 non era stato pubblicato. Le date riportate sono stime. Verificate su feelflorence.it prima di prenotare. Per pianificare la visita a Firenze, vedi la [guida a Firenze](/it/citta/firenze-per-la-prima-volta)."),

    image("rome-st-peters-dusk", "La Basilica di San Pietro illuminata al crepuscolo con visitatori radunati nella piazza antistante", true),

    h3("Roma — Befana e Natale in Piazza Navona"),
    p("L'evento natalizio più longevo di Roma è la fiera di Piazza Navona — una delle piazze barocche più belle d'Europa — confermata per il **1 dicembre 2026–6 gennaio 2027** da più fonti coerenti, in linea con un calendario pluriennale. Oltre 100 bancarelle riempiono la piazza. A differenza dei mercatini alpini, la fiera di Piazza Navona è tanto una fiera della Befana quanto un mercatino natalizio: molte bancarelle sono specializzate in dolci, giocattoli, calze e *carbone dolce* — il candito a forma di carbone della tradizione popolare — che richiamano la figura della Befana, la vecchina che nella notte tra il 5 e il 6 gennaio porta i doni ai bambini."),
    p("L'atmosfera è vivace e affollata: artisti di strada, una giostra, arrostitori di castagne e visitatori da tutta Europa. L'ingresso è gratuito. Per la conferma ufficiale, consultate il sito del Comune di Roma (comune.roma.it)."),

    h2("Cosa mangiare e bere"),
    image("gluhwein-vin-brule-stall", "Una bancarella decorata di vin brulé a un mercatino natalizio, con tazze fumanti e luci calde", true),
    p("Il cibo e le bevande dei mercatini alpini differiscono nettamente da quelli dei mercatini cittadini. Nei mercatini dell'Alto Adige e del Trentino l'offerta è mitteleuropea:"),
    ul(
      "***Vin brulé*** (in tedesco *Glühwein*): vino rosso speziato servito caldo, tipicamente in tazze di ceramica. La versione locale usa spesso vini della Val d'Adige o della cantina locale.",
      "***Strudel di mele***: il dolce più diffuso nei mercatini trentini e altoatesini, servito caldo, spesso con panna o salsa alla vaniglia.",
      "***Canederli*** (in tedesco *Knödel*): gnocchi di pane tipici dell'Alto Adige, in brodo o al burro e salvia. Si trovano sia alle bancarelle sia nei ristoranti vicini.",
      "***Speck***: la coscia di maiale affumicata e stagionata, DOP dell'Alto Adige. Compare su taglieri e piatti di salumi in tutta la regione ed è un ottimo regalo non deperibile.",
      "***Zelten***: un pane ricco di frutta secca e spezie tipico del Trentino e dell'Alto Adige, preparato per il periodo natalizio con fichi secchi, uvetta, noci e scorze candite.",
      "***Torrone***: presente in tutti i mercatini; il torrone valdostano, spesso a base di miele locale, è particolarmente apprezzato.",
    ),
    p("Nei mercatini cittadini — Milano, Verona, Firenze, Roma — l'offerta è più italiana: caldarroste dai castagnari ambulanti, cioccolata calda, panettone e pandoro (i due dolci natalizi per eccellenza, di tradizione milanese e veronese rispettivamente), e vari prodotti di gastronomia di strada. Il vin brulé c'è anche qui, ma chi l'ha assaggiato in Alto Adige noterà la differenza."),
    tip("Il cibo migliore attorno ai mercatini alpini non è quasi mai alle bancarelle, ma nei ristoranti e nelle *Stube* (le tipiche taverne tirolesi) del centro. La cucina altoatesina — che fonde tradizioni italiane, austriache e tedesche — è tra le più raffinate d'Italia. Una pausa pranzo seduti in una Stube vale il viaggio da sola."),

    h2("Cosa comprare"),
    image("christmas-ornaments-handmade", "Varie decorazioni natalizie artigianali in legno, vetro e tessuto appese a una parete rustica", true),
    p("I mercatini dell'Alto Adige e del Trentino curati — in particolare Bolzano e Bressanone, dove i prodotti industriali sono esclusi — hanno una reputazione per la qualità artigianale ben guadagnata. Le categorie più interessanti:"),
    ul(
      "**Decorazioni in legno**: pastori intagliati, addobbi per l'albero, schiaccianoci e *Räuchermänner* (pupazzi in legno che bruciano incenso) sono una specialità dell'Alto Adige, prodotti soprattutto nella Val Gardena.",
      "**Ceramiche e vetro**: palline per l'albero dipinte a mano, campane e portacandele da piccole botteghe artigiane.",
      "**Tessuti**: lana lavorata a maglia (sciarpe, calze, guanti), lino ricamato e feltro da artigiani locali.",
      "**Prodotti alimentari**: strudel, zelten, speck, vini e grappa locali, miele e marmellate. Compatti, non fragili, ottimi come regalo.",
      "**Gioielli e accessori**: oreficeria in argento, oggetti in ambra, pelletteria e articoli in feltro e lana.",
    ),
    image("browsing-market-stall", "Visitatori che esaminano oggetti artigianali a una bancarella di un mercatino natalizio", true),
    p("Nei mercatini cittadini il mix è più eterogeneo. A Roma, Piazza Navona è associata soprattutto ai dolci e ai regali della Befana. Il mercatino del Duomo a Milano propone una selezione di artigianato italiano, accessori moda e prodotti alimentari. Il Weihnachtsmarkt di Firenze segue più la tradizione centroeuropea."),
    tip("Molte bancarelle nei mercatini alpini — soprattutto quelle degli artigiani minori — accettano solo contanti o li preferiscono nettamente. Portate con voi almeno 50–100 euro in banconote se avete intenzione di fare acquisti seriamente."),

    h2("Organizzare la visita"),
    image("night-market-crowd", "Una folla di visitatori a un mercatino natalizio notturno con le bancarelle illuminate", true),

    h3("Quando andare"),
    p("I mercatini alpini sono più affollati nei weekend di dicembre, specialmente il secondo e il terzo. Se avete flessibilità, arrivate in settimana e scegliete le prime due settimane dopo l'apertura — l'atmosfera c'è ugualmente ma la folla è gestibile. La sera (dopo le 17:00) offre la luce più bella grazie alle illuminazioni, ma è anche il momento di maggiore afflusso; la mattina in settimana è più rilassata per lo shopping."),
    p("I mercatini cittadini sono più affollati nei weekend per tutto dicembre. A Roma, anche i giorni immediatamente prima dell'Epifania (3–6 gennaio) sono molto frequentati, quando la fiera di Piazza Navona entra nel vivo."),

    h3("Come arrivare in treno"),
    p("La rete ferroviaria italiana permette di combinare più mercatini in un unico viaggio con relativa facilità. Bolzano, Merano, Trento e Bressanone sono tutti raggiungibili dalla linea Verona–Brennero, e visitare due o tre mercatini in una giornata è del tutto fattibile. Aosta richiede un collegamento separato da Torino. L'alta velocità collega Milano, Firenze e Roma per i mercatini cittadini. Per informazioni dettagliate, vedi la [guida ai treni in Italia](/it/guide/viaggiare-in-italia-in-treno)."),

    h3("Alloggio"),
    p("Prenotate l'alloggio con diversi mesi di anticipo per i mercatini alpini di dicembre, in particolare Bolzano e Merano. La disponibilità è limitata e la domanda parte da ottobre. Per i mercatini cittadini l'offerta è in genere più ampia, ma Milano, Firenze e Roma restano mercati sempre in pressione nel periodo natalizio."),

    h3("Combinare più mercatini in un viaggio"),
    p("Un itinerario di quattro o cinque giorni con base a Verona permette di visitare Trento (60–70 minuti in treno), Bolzano (90 minuti) e Bressanone (altri 40 minuti verso nord), con due notti a Bolzano e una a Verona e Trento. Merano è una comoda gita giornaliera da Bolzano. Per una settimana interamente dedicata ai mercatini alpini, Aosta si inserisce bene all'inizio del viaggio (aeroporto di Torino → Aosta, poi Torino → Verona)."),
    p("Per chi vuole unire mercatini alpini e cittadini, il circuito Verona–Bolzano–Trento è un blocco; Milano è raggiungibile in meno di due ore in treno come tappa aggiuntiva. Firenze e Roma si visitano meglio in un viaggio separato o prima/dopo il nord."),
  ],

  faqs: [
    {
      question: "Quando aprono i mercatini di Natale in Italia nel 2026?",
      answer: "Le prime aperture confermate nel 2026 sono Trento (20 novembre) e Aosta (21 novembre). Merano apre il 26 novembre, Bolzano e Bressanone il 27 novembre. Il mercatino di Piazza Duomo a Milano e la fiera di Piazza Navona a Roma aprono il 1° dicembre. Verona e Firenze non avevano ancora pubblicato le date ufficiali 2026 all'ottobre 2026: verificate sui siti degli organizzatori prima di prenotare.",
    },
    {
      question: "Qual è il mercatino di Natale più famoso d'Italia?",
      answer: "Il Christkindlmarkt di Bolzano, aperto dal 1991, è considerato il mercatino di Natale più antico e conosciuto d'Italia. È ambientato in Piazza Walther, nel centro di Bolzano, e adotta criteri di qualità artigianale che lo distinguono dalla maggior parte degli eventi analoghi in Europa.",
    },
    {
      question: "I mercatini di Natale italiani restano aperti fino a gennaio?",
      answer: "I mercatini alpini — Bolzano, Merano, Bressanone, Trento e Aosta — chiudono tutti il 6 gennaio 2027, l'Epifania, che in Italia è ancora una data di regalo tradizionale (la Befana). I mercatini cittadini tendono a chiudere prima: Verona e Firenze di solito entro la fine di dicembre. Milano e Roma arrivano entrambi al 6 gennaio.",
    },
    {
      question: "L'ingresso ai mercatini di Natale è a pagamento?",
      answer: "L'accesso ai mercatini è gratuito in tutti e nove i casi trattati qui. Possono esserci costi per eventi specifici all'interno dell'area (concerti, l'installazione luminosa di Bressanone). L'Artigiano in Fiera di Fiera Milano a Rho è un evento distinto con biglietto d'ingresso.",
    },
    {
      question: "Cosa rende speciali i mercatini dell'Alto Adige rispetto agli altri?",
      answer: "L'Alto Adige ha una storia austriaca (fino al 1919 era parte dell'Impero asburgico) e una larga parte della popolazione ha il tedesco come prima lingua. I mercatini di questa regione — Bolzano, Merano, Bressanone — sono eredi diretti della tradizione mitteleuropea, con artigianato selezionato, prodotti locali di qualità e un'atmosfera che si avvicina più ai mercatini di Salisburgo o Innsbruck che a quelli del resto d'Italia.",
    },
    {
      question: "È meglio andare in settimana o nel weekend?",
      answer: "In settimana è sempre meglio per i mercatini alpini, specialmente Bolzano e Merano, dove nei weekend di dicembre la folla può essere molto intensa. Arrivare nelle prime due settimane di novembre–dicembre, in settimana, offre il miglior equilibrio tra atmosfera e comodità. Di sera (dopo le 17:00) la luce è più bella, ma la gente di più; la mattina in giorni feriali è più tranquilla.",
    },
    {
      question: "Cos'è la Befana e perché è importante per il mercatino di Piazza Navona?",
      answer: "La Befana è la vecchina che nella notte tra il 5 e il 6 gennaio porta i doni ai bambini: dolci ai bravi, *carbone dolce* ai monelli. L'Epifania è ancora oggi, per molte famiglie italiane, un momento di regali al pari del Natale. La fiera di Piazza Navona a Roma è storicamente anche una fiera della Befana: molte bancarelle vendono dolci, calze e giocattoli legati a questa tradizione, e l'evento dura fino al 6 gennaio.",
    },
    {
      question: "Come si raggiunge il mercatino di Bolzano da Verona?",
      answer: "Bolzano è collegata a Verona Porta Nuova da treni regionali frequenti, con una percorrenza di circa 1 ora e 30 minuti. I treni passano più volte all'ora e non richiedono prenotazione obbligatoria. Dalla stazione di Bolzano al mercatino in Piazza Walther si cammina per circa cinque minuti.",
    },
    {
      question: "I mercatini alpini sono adatti ai bambini?",
      answer: "Sì. Tutti i principali mercatini alpini propongono un programma per bambini — laboratori artigianali, casa di Babbo Natale, giostre, presepi — oltre a cibo adatto a tutte le età. L'ingresso è gratuito. La principale considerazione pratica è il freddo: a Bolzano e Bressanone le temperature possono scendere sotto zero di sera in dicembre, quindi gli strati di abbigliamento sono fondamentali.",
    },
    {
      question: "Si può combinare la visita a più mercatini in un unico viaggio?",
      answer: "Sì, facilmente. Bolzano, Trento, Merano e Bressanone sono collegati da treni regionali frequenti e distano al massimo 90 minuti da Verona. Un itinerario di quattro giorni può coprire comodamente tutti e quattro. Aosta forma un nucleo separato, meglio raggiunto da Torino. I mercatini cittadini di Milano, Firenze e Roma sono collegati dall'alta velocità.",
    },
    {
      question: "Cosa comprare nei mercatini di Natale?",
      answer: "Nei mercatini altoatesini le categorie migliori sono le decorazioni in legno intagliato (soprattutto dalla Val Gardena), lo speck, lo zelten, i vini e la grappa locali. Nei mercatini cittadini la scelta è più varia: artigianato italiano, accessori moda e prodotti gastronomici regionali. A Roma, il focus è su dolci e oggetti legati alla tradizione della Befana.",
    },
    {
      question: "Quanto contante è utile portare a un mercatino?",
      answer: "Molte bancarelle artigianali nei mercatini alpini accettano solo contanti o li preferiscono nettamente. Se avete intenzione di fare acquisti seriamente, portate almeno 50–100 euro in banconote. I venditori più grandi accettano in genere le carte, ma vale la pena chiedere prima di iniziare a riempire la borsa.",
    },
  ],

  sourcesTitle: "Fonti",
  sources: [
    {
      label: "Christkindlmarkt di Bolzano — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-di-natale-bolzano",
      note: "Sito dell'operatore; date 2026 confermate (27 nov 2026 – 6 gen 2027) e orari",
    },
    {
      label: "Mercatino di Natale di Merano — merano-suedtirol.it",
      url: "https://www.merano-suedtirol.it/en/merano/info-service/events/merano-christmas-market.html",
      note: "Ente turistico ufficiale di Merano; apertura confermata il 26 novembre 2026",
    },
    {
      label: "Mercatino di Natale di Trento — natale.visittrento.it",
      url: "https://natale.visittrento.it/en/christmas-market",
      note: "Sito ufficiale Visit Trento; apertura confermata il 20 novembre 2026",
    },
    {
      label: "Mercatino di Natale di Bressanone — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-natale-bressanone",
      note: "Scheda di mercatino con date confermate 27 nov 2026–6 gen 2027 da Bressanone Turismo",
    },
    {
      label: "Marché Vert Noël di Aosta — lovevda.it",
      url: "https://www.lovevda.it/it/banca-dati/2/artigianato-fiere-mercatini/aosta/mercatino-di-natale-marche-vert-noel/22493",
      note: "Banca dati del turismo regionale della Valle d'Aosta; confermato 21 nov 2026–6 gen 2027",
    },
    {
      label: "Mercatino di Natale in Duomo Milano — Comune di Milano",
      url: "https://servizi.comune.milano.it/dettaglio-contenuto/-/asset_publisher/pqxq/content/avviso-pubblico-per-lorganizzazione-delle-seguenti-due-edizioni-della-manifestazione-denominata-mercatino-di-natale-in-duomo-dal-1-dicembre-2025-al-6-gennaio-2026-e-dal-1-dicembre-2026-al-6-gennaio-2027",
      note: "Avviso pubblico ufficiale del Comune di Milano che conferma l'edizione 1 dic 2026–6 gen 2027",
    },
    {
      label: "Natale a Verona — nataleinpiazza.it",
      url: "https://www.nataleinpiazza.it/",
      note: "Sito dell'organizzatore; date 2026 non ancora pubblicate all'ottobre 2026",
    },
    {
      label: "Weihnachtsmarkt di Firenze — feelflorence.it",
      url: "https://www.feelflorence.it/en/events/christmas-market-piazza-santa-croce",
      note: "Scheda turistica; date 2026 stimate, non ancora confermate ufficialmente",
    },
  ],
};
