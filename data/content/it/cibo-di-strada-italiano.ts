import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "Il cibo di strada in Italia" — edizione italiana, scritta
// autonomamente rispetto alla versione inglese, con gli stessi fatti. Fonti
// verificate a ottobre 2026: Accademia della Crusca per la terminologia
// (arancina/arancino, piadina, focaccia, farinata); Comune di Napoli/DMO per
// pizza a portafoglio e cuoppo; Feel Florence (Comune di Firenze) per il
// lampredotto; Portale Turismo Regione Siciliana per arancine e panelle;
// Regione Puglia per panzerotto e focaccia barese; registro UE eAmbrosia per
// le DOP/IGP (Piadina Romagnola IGP; Focaccia Genovese IGP); Venezia Unica per
// cicchetti e bacari. Le origini regionali sono presentate come tradizioni;
// nessun locale o venditore è citato o classificato; nessun prezzo.

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

export const ciboDiStradaItaliano: ArticleContent = {
  body: [
    // ——— 1 Introduzione ———
    h2("Che cos'è il cibo di strada in Italia?"),
    answer("**Il cibo di strada italiano è cibo venduto pronto da mangiare da una bancarella, da un banco affacciato sulla strada, da un carretto al mercato o da un banchetto, destinato a essere consumato subito — in piedi al bancone, camminando tra le bancarelle o seduti su un muretto in piazza.** Non è una cucina unica né una tradizione omogenea, ma una serie di specialità regionali nate in città diverse nel corso dei secoli, ognuna legata agli ingredienti locali, alle abitudini del posto e a un modo specifico di stare nello spazio pubblico."),
    p("L'idea che la cucina italiana significhi ristorante e pranzi lunghi è corretta ma incompleta. Accanto alla trattoria e all'osteria, ogni grande regione ha la sua tradizione di cibo da portare via: le arancine di Palermo, la pizza a portafoglio di Napoli, il supplì di Roma, il panino al lampredotto di Firenze, la piadina dell'Emilia-Romagna, la focaccia della Liguria, il panzerotto della Puglia. Non si tratta di concessioni al turismo. Queste tradizioni nascono da una cultura alimentare popolare — economica, sostanziosa, fatta di ingredienti locali e consumata in fretta da persone che avevano da fare."),
    p("Quello che segue spiega le singole tradizioni, come variano da regione a regione, cosa aspettarsi al momento dell'ordine e com'è l'esperienza nella pratica."),
    {
      type: "facts",
      title: "Il cibo di strada in Italia: in breve",
      rows: [
        { label: "Carattere", value: "Regionale: ogni città ha la propria tradizione distinta" },
        { label: "Origini", value: "Cultura alimentare popolare, cibo da mercato, specialità di quartiere" },
        { label: "Formato", value: "Dal pezzo singolo al cuoppo di carta; si mangia in piedi o camminando" },
        { label: "Orari", value: "Spuntino di metà mattina, pranzo, merenda; meno comune a cena tranne nelle zone turistiche" },
        { label: "Prezzo", value: "In genere economico o moderato, con variazioni tra città e contesto" },
        { label: "Dieta", value: "Varia per tipo; molte opzioni includono carne, pesce o formaggio; le opzioni vegetariane dipendono dalla regione" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Il cibo di strada nella cultura alimentare italiana",
        "Il cibo di strada regione per regione",
        "Panoramica rapida del cibo di strada",
        "Cibo di strada, mercati e gastronomie",
        "Come ordinare il cibo di strada",
        "Allergie, diete e sicurezza alimentare",
        "Glossario del cibo di strada",
        "Domande frequenti",
      ],
    },

    // ——— 2 Cultura ———
    h2("Il cibo di strada nella cultura alimentare italiana"),
    p("Gli italiani prendono il cibo sul serio — la qualità, la provenienza, la regionalità — e il cibo di strada fa parte di questa serietà, non ne è ai margini. Un lampredottaio fiorentino o una bancarella di panelle a Palermo vendono un prodotto radicato nella tradizione alimentare locale, non un'imitazione economica. Gli ingredienti sono gli stessi, chi cucina sa il fatto suo, e i clienti abituali hanno le loro preferenze."),
    p("Il cibo di strada in Italia è anche legato al ritmo della giornata. Molte specialità esistono come spuntino specifico — a metà mattina o a metà pomeriggio, consumato in piedi al bancone. Una fetta di pizza al taglio alle undici di mattina, una piadina di ritorno da una commissione, un cuoppo di fritto a pranzo: si inseriscono nella giornata in modo diverso da un pasto al ristorante. Non sono un'occasione; sono una sosta."),
    p("Negli ultimi anni alcune di queste tradizioni sono state scoperte, reimpostate e riprezzate per il turismo gastronomico. È particolarmente visibile a Firenze e Bologna, dove i food tour hanno reso lampredotto e piadina più famosi all'estero di quanto non siano mai stati nel circuito locale. Non è necessariamente un male — tiene in vita le tradizioni — ma vale la pena sapere che l'esperienza di uno stand per turisti è spesso diversa dalla versione di quartiere."),
    image("food-market-vendor", "Un venditore con il giaccone verde dietro al banco di un mercato all'aperto", true),

    // ——— 3 Per regione ———
    h2("Il cibo di strada regione per regione"),
    p("L'Italia non ha un'unica tradizione di cibo da strada. Quello che segue è una panoramica regione per regione delle tradizioni più consolidate, con abbastanza dettagli per capire ogni specialità e ordinarla consapevolmente."),

    // ——— 3a Sicilia ———
    h3("Sicilia"),
    p("La Sicilia ha una delle tradizioni di cibo di strada più ricche d'Italia, concentrata soprattutto a Palermo ma presente in tutta l'isola. Palermo in particolare è regolarmente citata come una delle grandi città europee dello street food."),
    p("**Arancine e arancini** sono la specialità siciliana da strada più conosciuta a livello internazionale: palle fritte di riso condito, di solito ripiene di ragù e piselli oppure di burro e mozzarella (*al burro*), impanate e fritte. Il nome viene da *arancia* — la forma e il colore ricordano il frutto. Una precisazione terminologica importante: a Palermo e nella Sicilia occidentale il termine è *arancina* (femminile); a Catania e nella Sicilia orientale si dice *arancino* (maschile). Entrambe le forme sono corrette nel loro territorio, e usare quella sbagliata nella città sbagliata è il modo più rapido per scatenare una discussione affettuosa. Non esiste una forma universalmente corretta."),
    image("arancine-fried-plate", "Tre palle di riso fritte e dorate su un piatto bianco, con la panatura croccante", false),
    p("**Panelle** sono frittelline piatte di farina di ceci, dorato chiaro e leggermente croccanti ai bordi. Si vendono calde dalla friggitrice, al naturale o in un panino con semi di sesamo. Le panelle fanno parte dello street food palermitano da secoli e sono tra le opzioni più economiche e sostanziose nei mercati della città. Sono vegetariane, anche se il rischio di contaminazione crociata con altri fritti è possibile nei banchetti affollati."),
    p("**Sfincione** è una pizza al forno spessa e soffice, tipica di Palermo. Il condimento classico è una salsa di pomodoro cotta a lungo con cipolle, acciughe, caciocavallo o tuma e pangrattato — un risultato stratificato, morbido e saporito, molto diverso dalla pizza napoletana. Si vende a pezzi in panifici e bancarelle di mercato, soprattutto al Ballarò e al Capo, ed è un cibo tipico della tarda mattina o del pranzo."),
    p("**Stigghiola** sono spiedini di budella di pecora o capretto, pulite, condite con sale, prezzemolo e talvolta cipolla, e grigliate sulla brace. Non sono per i timidi, ma sono profondamente radicate nella cultura alimentare palermitana e si trovano nei mercati accanto alle più accessibili panelle."),
    tip("Nei mercati di Palermo — Ballarò, Capo e Vucciria — i banchetti di street food sono concentrati e facili da trovare. L'orario ideale è dalla metà della mattinata al pomeriggio. I mercati sono descritti anche nella [guida a Palermo](/cities/palermo-markets-monuments), con indicazioni pratiche su come arrivarci.", "Mercati di Palermo"),
    image("sicilian-market-vendors", "Clienti e venditori a un affollato banco di mercato ittico e alimentare", false),

    // ——— 3b Napoli ———
    h3("Napoli e Campania"),
    p("Napoli ha una cultura dello street food altrettanto radicata, organizzata attorno alla frittura e al rapporto della città con la pizza. Il cibo di strada napoletano non coincide con la pizza napoletana vera e propria — quella appartiene alla trattoria e alla tradizione del posto a sedere. Lo street food è più veloce, più economico e si mangia in piedi."),
    p("**Pizza a portafoglio** (o *pizza a libretto*) è la versione da passeggio della pizza napoletana: la pizza viene piegata in quattro per poter essere mangiata con le mani. L'impasto è lo stesso della pizza napoletana da ristorante — morbido, leggermente bruciato ai bordi, con una buona lievitazione — ma il formato è pensato per il marciapiede. Si vende da friggitorie e banconi su strada, si mangia subito, calda. Per chi vuole approfondire la tradizione della pizza napoletana, l'articolo dedicato alla [pizza napoletana](/food/neapolitan-pizza) racconta la storia e la cultura completa."),
    p("**Cuoppo** è il formato dello street food napoletano: un cono di carta spessa riempito di fritto. Il contenuto varia — *cuoppo di pesce* con pesce e frutti di mare, *cuoppo di terra* con verdure fritte e formaggio — ma il formato è costante: fritto caldo in un cono, da mangiare in piedi. Il nome viene da *coppa* (coppa, contenitore)."),
    p("**Frittatina di pasta** è un dischetto o porzione circolare di pasta — di solito bucatini o rigatoni — tenuta insieme dalla besciamella, impanata e fritta. Morbida dentro e croccante fuori, è uno dei cibi da strada più tipicamente napoletani: pasta trattata come frittella. Le frittatine si trovano nelle friggitorie napoletane accanto a crocchè di patate e verdure fritte."),
    p("**Graffa** è una ciambella fritta napoletana con l'impasto alla patata, di solito spolverata di zucchero, che si mangia la mattina o come spuntino. La patata nell'impasto le conferisce un interno morbido e leggermente denso, diverso da un krapfen. Si vende da panifici e pasticcerie."),

    // ——— 3c Roma ———
    h3("Roma e Lazio"),
    p("Lo street food romano è meno spettacolare di quello siciliano o napoletano, ma ha le sue forme consolidate — quasi tutte a base di riso, impasto per pizza o frattaglie, e quasi tutte da consumare in tarda mattinata o a pranzo."),
    p("**Supplì** sono polpette di riso romane, di forma ovale allungata, ripiene di ragù e mozzarella, passate nell'uovo e nel pangrattato e fritte. Quando si mordono, la mozzarella si allunga — da qui il soprannome *supplì al telefono*. Si vendono nelle gastronomie romane e nelle friggitorie, in alcuni negozi di pizza al taglio e occasionalmente nei mercati rionali. Il nome potrebbe derivare dal francese *surprise*, ma questa derivazione non è documentata in modo definitivo."),
    image("pizza-al-taglio-counter", "Un bancone con diversi tipi di pizza disposti fianco a fianco", true),
    p("**Pizza al taglio** si vende da forni e banconi in tutta Roma, tagliata da teglie rettangolari grandi con le forbici e venduta a peso — *al peso*. Questa è una distinzione importante rispetto alla pizza napoletana: è pizza da forno romano, cotta in teglia, con una base più spessa o più croccante secondo il tipo. I condimenti vanno dal classico pomodoro e mozzarella a verdure di stagione, patata, fiori di zucca o salumi. Si indica il pezzo voluto, viene tagliato, pesato e incartato."),
    p("**Trapizzino** è uno street food romano più recente, nato nei primi anni Duemila: classici stufati romani — *coda alla vaccinara*, pollo con i peperoni, polpette al sugo — serviti dentro una tasca triangolare di pasta di pizza tipo focaccia. Si è affermato nel panorama alimentare romano e si trova ormai ben oltre la città, ma le sue radici sono nella tradizione locale di abbinare ripieni di qualità a un buon pane."),
    image("pizza-trays-bakery", "Cibo da strada disposto in vassoi su un banco, pronto per essere venduto a porzioni", false),

    // ——— 3d Emilia-Romagna ———
    h3("Emilia-Romagna"),
    p("L'Emilia-Romagna non è sempre associata allo street food come Napoli o Palermo, ma ha una solida tradizione di pane piatto da portare via che risale a secoli fa e varia per forma in tutta la regione."),
    p("**Piadina** è la più importante di queste specialità: un pane piatto sottile cotto sul *testo* (una piastra di ghisa piatta), flessibile quando è fresca, fatto di farina, acqua, sale e grasso — storicamente strutto, oggi spesso olio d'oliva. La piadina è al centro della cultura alimentare della Romagna e si vende in piccoli chioschi e stand chiamati *piadinerie*, farcita con salumi, squacquerone (il formaggio morbido tipico della regione), erbe selvatiche, formaggi e salame. A Rimini e lungo la Riviera Adriatica la piadina tende a essere sottile; nell'entroterra, verso Forlì, è più spessa e morbida. La Piadina Romagnola è un'Indicazione Geografica Protetta (IGP) ai sensi del diritto europeo."),
    p("Nell'area di Modena e degli Appennini, **crescentine** o **tigelle** occupano uno spazio simile: piccoli dischi spessi di pane lievitati, cotti su piastre di ghisa con disegni in rilievo, e mangiati aperti e farciti. Sono più strettamente legati alla trattoria nella forma tradizionale, ma si trovano anche ai mercati e alle sagre."),

    // ——— 3e Toscana ———
    h3("Toscana"),
    p("Il cibo di strada più tipico della Toscana è anche il più impegnativo per chi non è abituato: **il lampredotto**, fatto con il quarto stomaco del bovino (*abomaso*), cotto lentamente in brodo con pomodoro, cipolla ed erbe, poi affettato e servito in un panino morbido (*semella*) inzuppato nel brodo di cottura, con salsa verde e talvolta salsa piccante. Si vende dai carretti tradizionali dei *lampredottai*, una figura tipica dei mercati fiorentini."),
    p("Il lampredotto è specificamente fiorentino — non toscano in senso generale ma di Firenze, legato alla cultura dei mercati cittadini e alla tradizione di *cucina povera* che utilizza i tagli meno nobili. È un panino dal sapore deciso e forte; chi ama le frattaglie e il buon pane lo apprezzerà; chi ha qualcosa contro le frattaglie è meglio che soprassieda."),
    p("**Schiacciata** (o *schiacciata all'olio*) è il pane piatto toscano: con le fossette, ricco di olio d'oliva, salato, cotto finché i bordi non diventano croccanti mentre il centro rimane morbido. Si vende nelle panetterie e si mangia come spuntino. In autunno compare la *schiacciata con l'uva*, con l'uva premuta nell'impasto, disponibile nelle panetterie toscane solo per una breve finestra stagionale."),

    // ——— 3f Liguria ———
    h3("Liguria"),
    p("La Liguria è una regione costiera stretta, dalla frontiera francese a quella toscana, con una tradizione alimentare plasmata dallo spazio agricolo limitato e dalla storia marittima. Due dei suoi street food più importanti si fanno con ingredienti molto semplici."),
    p("**Focaccia genovese** è il pane tipico della Liguria: piatta, ricca di olio d'oliva, leggermente affossata sulla superficie, salata sopra e soffice dentro. È diversa dalla focaccia più spessa della Puglia e dalla schiacciata toscana — più leggera, più unta, con una consistenza tra il pane e la sfoglia. A Genova si vende nelle panetterie la mattina e si mangia a colazione (cosa insolita nel resto d'Italia), come spuntino o insieme al cibo. La Focaccia di Recco col formaggio è una variante con un impasto sottile e formaggio fresco all'interno. La Focaccia Genovese ha l'IGP. "),
    image("focaccia-tomatoes-wood", "Un pezzo di focaccia con pomodorini ciliegino e aglio su un tagliere di legno", false),
    p("**Farinata** è un pane piatto saporito di farina di ceci, acqua, olio d'oliva e sale, cotto in forno molto caldo in una grande teglia di rame. Il risultato è un cerchio sottile e leggermente croccante in superficie, cotto uniformemente, da mangiare caldo, spesso con pepe nero. Si vende nelle *sciamadde* (panetterie o friggitorie tradizionali nel dialetto genovese), di solito a fette. La farinata è naturalmente senza glutine (l'impasto è solo di farina di ceci), ma il rischio di contaminazione crociata nelle panetterie affollate è reale."),
    image("focaccia-rosemary-board", "Focaccia appena sfornata con rosmarino e olio d'oliva su un tagliere di legno", false),

    // ——— 3g Puglia ———
    h3("Puglia"),
    p("La Puglia produce alcuni dei pani e delle pizze da strada dai sapori più intensi d'Italia, plasmati dall'eccellente grano locale, dall'olio d'oliva abbondante e dai formaggi regionali come cacioricotta e ricotta stagionata."),
    p("**Panzerotto** è un calzone fritto o al forno a mezza luna, tipicamente ripieno di pomodoro e mozzarella, chiuso ai bordi e fritto in olio fino a doratura. È associato soprattutto a Bari, dove è uno street food amatissimo a pranzo o come spuntino. Da notare: il termine *panzerotto* viene usato anche a Milano e in altre città per indicare un grande calzone al forno — la versione pugliese è distinta: tipicamente fritta e più piccola."),
    p("**Focaccia barese** è un pane piatto spesso e morbido fatto con farina di semola e patata, condito con pomodorini, olive e olio d'oliva, cotto in una teglia rotonda ben oliata. È più simile a una torta nella consistenza rispetto alla focaccia ligure, e si vende a peso nelle panetterie baresi. I pomodorini vengono spesso schiacciati nell'impasto prima della cottura, così il succo cuoce nel pane."),

    // ——— 3h Veneto ———
    h3("Veneto e cicchetti"),
    p("Venezia e il Veneto hanno una tradizione da strada che si definisce meglio come tradizione da bar: i **cicchetti** (anche *cicheti* nella grafia veneziana) sono piccoli bocconi serviti su pane o piattini al *bacaro*, la tipica osteria veneziana. Un bacaro è un locale semplice, spesso antico, dove il vino si beve al bicchiere e al bancone si trovano cicchetti: fettine di baccalà mantecato su polenta, uno spicchio di formaggio, un uovo sodo con il tonno, sarde in saor (marinatura agrodolce), un'oliva ripiena, una polpetta."),
    p("I cicchetti si mangiano in piedi al banco, con un bicchierino di vino della casa (*ombra* — un bicchiere piccolo, tradizionalmente di bianco locale). Il giro dei bacari — andare di bacaro in bacaro prendendo un'ombra e qualche cicchetto a ogni tappa — è un rituale sociale e gastronomico al tempo stesso. I cicchetti si collegano naturalmente alla tradizione dell'aperitivo; l'articolo sull'[aperitivo italiano](/food/italian-aperitivo) approfondisce il rapporto tra le due tradizioni."),
    tip("I bacari sono distribuiti in tutta Venezia, con maggiore concentrazione nel Cannaregio e intorno al Rialto. L'orario di punta è prima di pranzo (11–13) e nella prima serata (17–20). Arrivate presto: i cicchetti si preparano freschi e finiscono."),

    // ——— 4 Tabella rapida ———
    h2("Panoramica rapida del cibo di strada italiano"),
    table(
      ["Regione / Città", "Specialità", "Che cos'è", "Da sapere"],
      [
        ["Palermo, Sicilia", "Arancine/arancini", "Palle di riso fritte e ripiene, impanate", "Il nome varia per città: arancina a Palermo, arancino a Catania"],
        ["Palermo, Sicilia", "Panelle", "Frittelle di farina di ceci fritte", "Spesso in panino sesamo; vegetariane, verificare la contaminazione crociata"],
        ["Napoli", "Pizza a portafoglio", "Pizza napoletana piegata in quattro da mangiare in piedi", "Morbida, calda; da consumare subito; diversa dalla pizza da ristorante"],
        ["Napoli", "Cuoppo", "Cono di carta con fritto misto", "Il contenuto varia (pesce o verdure); si mangia in piedi"],
        ["Roma", "Supplì", "Palle di riso ovali fritte, ripiene di ragù e mozzarella", "Si vende in gastronomie e friggitorie; la mozzarella si allunga mordendolo"],
        ["Roma", "Pizza al taglio", "Pizza rettangolare venduta a peso, tagliata con le forbici", "Diversa dalla pizza napoletana; si sceglie il condimento, si paga a peso"],
        ["Emilia-Romagna", "Piadina", "Pane piatto sottile cotto sul testo, con farcitura", "Specialità della Romagna; si vende nelle piadinerie; prodotto IGP"],
        ["Firenze, Toscana", "Lampredotto", "Quarto stomaco di bovino in un panino, con salsa verde", "Sapore deciso; è un piatto di frattaglie; si vende dai lampredottai"],
        ["Liguria", "Focaccia/Farinata", "Focaccia all'olio d'oliva (focaccia) o flatbread di ceci (farinata)", "La farinata è naturalmente senza glutine; si vende nelle panetterie liguri"],
        ["Puglia", "Panzerotto", "Calzone fritto a mezza luna con pomodoro e mozzarella", "La versione pugliese è fritta; diversa dal panzerotto milanese al forno"],
        ["Venezia, Veneto", "Cicchetti", "Piccoli bocconi su pane o piattini al bacaro", "Si mangiano in piedi; parte della cultura dei bacari; meglio la mattina e la sera presto"],
        ["Palermo, Sicilia", "Sfincione", "Pizza palermitana al forno con pomodoro, cipolla, acciughe", "Base soffice, molto saporita; si vende a pezzi in panifici e mercati"],
      ],
      "Il cibo di strada varia all'interno delle regioni; questa tabella copre esempi consolidati."
    ),

    // ——— 5 Cibo di strada vs mercati ———
    h2("Cibo di strada, mercati e gastronomie"),
    p("La distinzione conta nella pratica perché cambia dove si va, quanto si spende e com'è l'esperienza."),
    p("**Il cibo di strada** in senso stretto è cibo preparato e venduto da una postazione esterna mobile o semistabile, da consumare subito. In Italia questa definizione si applica a un numero limitato di tradizioni (bancarelle al mercato, carretti dei lampredottai a Firenze, banchi di arancine a Palermo). Molto di ciò che i viaggiatori chiamano cibo di strada è meglio descritto come **cibo da banco in un panificio o negozio** — pizza al taglio dal forno, supplì dalla gastronomia, panzerotti dal panificio di Bari."),
    p("**I mercati alimentari** sono una categoria separata: un mercato permanente o periodico che vende sia materie prime sia cibo pronto. I mercati romani, fiorentini e palermitani vendono sia prodotti freschi sia cibo cucinato; non tutto ciò che si trova al mercato è cibo di strada nel senso stretto. L'articolo sui [mercati alimentari italiani](/food/italian-food-markets) approfondisce i diversi tipi di mercato in Italia."),
    p("Le **gastronomie** sono negozi che vendono piatti pronti — supplì, focaccia, fritti, pasta al forno — pensati per essere consumati a casa o per strada. Sono diverse dalla friggitoria (specializzata nel fritto) e dalla rosticceria (specializzata nell'arrosto). Sono il punto di riferimento quotidiano di molti italiani per la pausa pranzo o la cena veloce."),

    // ——— 6 Come ordinare ———
    h2("Come ordinare il cibo di strada"),
    p("Ordinare in una pizzeria al taglio, in una piadineria o da un lampredottaio segue uno schema semplice, ma alcune indicazioni pratiche aiutano."),
    ul(
      "**Indicare e fare gesti.** Al banco con più opzioni, indicare quello che si vuole è normale e atteso. Non è necessario sapere il nome esatto in italiano, anche se aiuta. Si può dire *quello* o *questo* e indicare con il dito.",
      "**Chiedere la quantità se si acquista a peso.** La pizza al taglio si pesa e il prezzo dipende dal peso. Si può indicare quanto si vuole con le mani — *così* — o chiedere una quantità precisa: *cento grammi* o *duecento grammi*.",
      "**Pagare prima o dopo, secondo le istruzioni del locale.** Alcuni stand chiedono di pagare prima e poi ritirare il cibo; altri consegnano il cibo e si paga alla fine. Osservate cosa fanno gli altri clienti.",
      "**Chiedere della farcitura.** Per una piadina, un cuoppo o un panzerotto, si possono chiedere le opzioni: *Cosa c'è dentro?* oppure *Avete qualcosa senza carne?*",
      "**Mangiare come i clienti locali.** Se c'è un banco con sgabelli alti, usatelo. Se tutti mangiano in piedi fuori, state fuori. Se non ci sono posti a sedere, è voluto.",
    ),
    tip("Frasi utili: *Un supplì, per favore* · *Quanto pesa?* · *Al banco, grazie* · *Da portare via* · *Senza carne* · *Cosa c'è dentro?*"),
    image("street-food-vendor", "Una persona accanto a uno stand di cibo di strada al mercato", false),

    // ——— 7 Galateo ———
    h2("Come ci si comporta"),
    p("Non esiste un codice di galateo formale per il cibo di strada italiano, ma alcune indicazioni di buon senso aiutano."),
    ul(
      "**Mangiare camminando è generalmente accettato** con il cibo che si tiene in mano (una piadina, un cuoppo, uno spicchio di pizza a portafoglio). Mangiare seduti a un tavolino di un bar che non si frequenta è meno gradito.",
      "**Molti posti di street food non hanno sedute** e non sono pensati per fermarsi a lungo. Il carretto del lampredotto, il chiosco della piadina, lo stand del cuoppo — sono concepiti per un consumo veloce.",
      "**Le file**, quando ci sono, seguono le norme italiane: ci si mette in fondo e si aspetta, ma si è pronti e attenti quando arriva il proprio turno. Agli stand più affollati al mercato, tutto è più informale: mantenete la posizione e fate contatto visivo con il venditore al momento giusto.",
      "**Fotografare il cibo** è generalmente accettato. Puntare il telefono in faccia al venditore senza chiedere no. Se volete fare un ritratto, chiedete: *Posso fare una foto?* Molti saranno disponibili; alcuni no.",
      "**I rifiuti** — coni di carta, carta oleata, tovaglioli — appartengono al cestino più vicino.",
    ),

    // ——— 8 Allergie ———
    h2("Allergie, diete speciali e sicurezza alimentare"),
    note("Questa sezione fornisce indicazioni generali. Chiunque abbia un'allergia alimentare grave deve comunicarlo direttamente al venditore e fare le proprie valutazioni. Nessuna preparazione alimentare può garantire l'assenza di contaminazione crociata."),
    p("**I vegetariani** troveranno opzioni in quasi tutte le regioni — panelle, farinata, focaccia, pizza al taglio con condimento di verdure, alcuni cicchetti — ma la farcitura o il condimento di default di molti cibi da strada include carne, pesce o formaggio. Vale la pena chiedere: *È senza carne?* oppure *Avete qualcosa di vegetariano?*"),
    p("**I vegani** hanno meno opzioni nei cibi di strada tradizionali. L'olio d'oliva è il grasso prevalente nelle ricette liguri e pugliesi; lo strutto è ancora usato in alcune ricette tradizionali di piadina e in alcuni fritti napoletani. La panatura di supplì e arancine prevede l'uovo. Chiedete sempre se è necessario escludere completamente i prodotti animali."),
    p("**Il glutine** è presente in quasi tutti i cibi descritti in questo articolo. Le due eccezioni naturali sono la farinata (farina di ceci) e le arancine o i supplì prima della panatura — ma entrambi vengono tipicamente preparati in ambienti dove si usa anche la farina di frumento, quindi il rischio di contaminazione crociata è concreto. Per i celiaci, la cosa più sicura in un contesto di street food è chiedere direttamente e, in caso di dubbio, rinunciare."),
    p("**Allergie alle noci**: la frutta secca è meno comune nei cibi salati da strada rispetto ai dolci, ma il pesto (usato in alcuni piatti liguri) contiene pinoli, e le ricette siciliane usano a volte mandorle o pistacchio. Chiedete sempre della preparazione specifica."),

    // ——— 9 Glossario ———
    h2("Glossario del cibo di strada italiano"),
    table(
      ["Italiano", "Significato"],
      [
        ["da asporto / da portare via", "Da portare via (al contrario di consumare sul posto)"],
        ["al banco", "Al bancone (in piedi)"],
        ["bancarella", "Banco di un mercato all'aperto"],
        ["banco", "Bancone; anche il piano di vendita di una bancarella"],
        ["al taglio", "A fette (soprattutto per la pizza)"],
        ["al peso", "A peso"],
        ["fritto / fritta", "Fritto (maschile / femminile)"],
        ["forno / panificio", "Forno / panificio"],
        ["gastronomia", "Negozio di gastronomia che vende piatti pronti"],
        ["friggitoria", "Negozio specializzato in fritti"],
        ["piadineria", "Chiosco o negozio specializzato nella piadina"],
        ["porzione", "Porzione"],
        ["ripieno / farcito", "Ripieno / farcito"],
        ["caldo / calda", "Caldo (maschile / femminile)"],
        ["senza carne", "Senza carne"],
        ["senza glutine", "Senza glutine"],
        ["cosa c'è dentro?", "Qual è il ripieno?"],
        ["spuntino", "Uno spuntino; un boccone veloce tra i pasti principali"],
      ],
    ),

    // ——— 10 FAQ ———
    h2("Domande frequenti sul cibo di strada italiano"),

  ],

  faqs: [
    { question: "Qual è il cibo di strada più famoso d'Italia?", answer: "Non esiste una risposta unica: le tradizioni di cibo da strada in Italia sono regionali, non nazionali. In Sicilia le arancine (Palermo) e gli arancini (Catania) sono iconici; a Napoli la pizza a portafoglio e il cuoppo; a Roma la pizza al taglio e il supplì; a Firenze il lampredotto." },
    { question: "Che cos'è un arancino?", answer: "Un arancino (o arancina a Palermo) è una palla di riso condita, impanata e fritta. È tipicamente ripiena di ragù e piselli, oppure di burro e mozzarella. La forma e il colore ricordano un'arancia. La forma corretta del nome dipende dalla città: arancina a Palermo e nella Sicilia occidentale; arancino a Catania e nell'est." },
    { question: "Che cos'è la pizza al taglio?", answer: "La pizza al taglio è una pizza rettangolare cotta in teglia, venduta a peso e tagliata con le forbici. È una tradizione dei forni romani, distinta dalla pizza napoletana: l'impasto è tipicamente più spesso o croccante, e i condimenti possono spaziare dal pomodoro e mozzarella alla patata, ai fiori di zucca e ai salumi." },
    { question: "Che cos'è la pizza a portafoglio?", answer: "La pizza a portafoglio è la pizza napoletana piegata in quattro per essere mangiata camminando. La pizza viene cotta nel forno a legna come di consueto — morbida, leggermente bruciacchiata — e poi piegata per il banco di strada. Si vende da banconi su strada e si mangia immediatamente, calda." },
    { question: "Che cos'è il supplì?", answer: "Il supplì è una polpetta di riso fritta romana, di forma ovale, ripiena di ragù e mozzarella, impanata nell'uovo e nel pangrattato. Mordendola, la mozzarella si allunga — da qui il soprannome supplì al telefono. Si vende nelle gastronomie e nelle friggitorie romane." },
    { question: "Che cos'è il lampredotto?", answer: "Il lampredotto è uno street food fiorentino ricavato dal quarto stomaco del bovino, cotto lentamente nel brodo e servito in un panino morbido imbevuto nel brodo di cottura, con salsa verde e talvolta salsa piccante. Si vende dai lampredottai ed è tipicamente fiorentino. Ha un sapore deciso e robusto; è un piatto di frattaglie." },
    { question: "Cosa si mangia di strada a Roma?", answer: "A Roma le tradizioni più consolidate sono la pizza al taglio e il supplì — entrambi facili da trovare e rappresentativi della cucina da forno romana. Il trapizzino (ripieno romano dentro una tasca di pasta di pizza) è anch'esso molto apprezzato." },
    { question: "Cos'è famoso come street food a Napoli?", answer: "Napoli è famosa per la pizza a portafoglio, il cuoppo (fritto misto in cono di carta), la frittatina di pasta e la graffa (ciambella fritta alla patata). La sfogliatella — il dolce di pasta sfoglia ripiena di ricotta — si trova nelle pasticcerie napoletane, anche se è più un prodotto da banco pasticceria che da bancarella." },
    { question: "Qual è il cibo di strada più famoso in Sicilia?", answer: "Palermo è famosa per arancine, panelle, sfincione e stigghiola. I mercati di Ballarò e Capo a Palermo sono tra i luoghi migliori dove trovare cibo di strada concentrato. A Palermo si dice arancina; a Catania si dice arancino." },
    { question: "Cos'è la piadina?", answer: "La piadina è un pane piatto tipico della Romagna, cotto sul testo (una piastra di ghisa) e farcito con salumi, formaggi ed erbe. Si vende in piccoli chioschi e stand (piadinerie) in tutta la regione e lungo la Riviera Adriatica. La Piadina Romagnola è un'Indicazione Geografica Protetta (IGP) ai sensi del diritto europeo." },
    { question: "Qual è la differenza tra cibo di strada e cibo da mercato?", answer: "La distinzione è imprecisa nella pratica. In senso stretto, il cibo di strada si prepara e si vende da postazioni esterne mobili; il cibo da mercato si vende al mercato, dove si trovano anche materie prime. In realtà molti cibi da strada vengono venduti da forni e negozi con banconi su strada, non da bancarelle all'aperto." },
    { question: "Il cibo di strada italiano è adatto ai vegetariani?", answer: "Alcuni cibi di strada italiani sono vegetariani per tradizione — farinata, panelle, focaccia, pizza al taglio con condimento di verdure, piadina con formaggio. Ma la carne, il pesce e il formaggio sono centrali in molte tradizioni. Ci sono sempre opzioni se si chiede." },
    { question: "Quando si mangia il cibo di strada in Italia?", answer: "Il cibo di strada in Italia è prevalentemente un cibo diurno: spuntino di metà mattina, pranzo veloce, merenda. La maggior parte delle specialità si consuma tra le 10 e le 15. I cicchetti a Venezia si mangiano anche nella prima serata. Pochi formati da strada sono tipici dell'ora di cena, tranne nelle zone a forte vocazione turistica." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Accademia della Crusca — terminologia", url: "https://www.accademiadellacrusca.it/", note: "arancina/arancino, piadina, focaccia, farinata" },
    { label: "Comune di Napoli / DMO — Portale del Turismo di Napoli", url: "https://dmo-napoli.inera.it/", note: "pizza a portafoglio, cuoppo, frittatina" },
    { label: "Feel Florence (Comune di Firenze)", url: "https://feelflorence.it/", note: "lampredotto e tradizioni alimentari fiorentine" },
    { label: "Regione Siciliana — Turismo", url: "https://www.visitsicily.info/", note: "arancine/arancini e street food palermitano" },
    { label: "Regione Puglia", url: "https://www.regione.puglia.it/", note: "panzerotto e focaccia barese" },
    { label: "Registro UE eAmbrosia — indicazioni geografiche protette", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Piadina Romagnola IGP; Focaccia Genovese IGP" },
    { label: "Venezia Unica (Comune di Venezia)", url: "https://www.veneziaunica.it/", note: "cicchetti e tradizione dei bacari" },
    { label: "Bologna Welcome (Comune di Bologna)", url: "https://www.bolognawelcome.com/", note: "crescentina e tradizioni alimentari emiliane" },
    { label: "D.Lgs. 231/2017; Reg. UE 1169/2011", url: "https://www.normattiva.it/", note: "etichettatura e allergeni" },
  ],
};
