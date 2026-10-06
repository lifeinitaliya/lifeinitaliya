import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "Il gelato italiano" — edizione italiana, scritta in modo
// autonomo rispetto a quella inglese, con gli stessi fatti. Verificato a
// ottobre 2026 su: Legge 11 marzo 2026, n. 34, art. 16 (uso di
// "artigianale") e FAQ del Ministero delle Imprese e del Made in Italy;
// D.Lgs. 231/2017 art. 19 (ingredienti e allergeni degli alimenti sfusi,
// gelateria compresa); 21 CFR 135.110 (definizione legale dell'ice cream negli
// Stati Uniti); il testo di tecnologia del gelato dell'Università di Guelph
// sull'overrun; Harvest of the Cold Months di Elizabeth David sulla storia di
// Caterina de' Medici; Lo scalco alla moderna di Antonio Latini (Napoli,
// 1692–94); Carpigiani Gelato Museum; Storia e Memoria di Bologna su
// Carpigiani; registro UE eAmbrosia per DOP e IGP; VisitBergamo sulla
// stracciatella. Nessuna temperatura o percentuale d'aria, nessuna promessa
// nutrizionale, nessuna gelateria citata o classificata.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-gelato";

export const gelatoItaliano: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cos'è il gelato italiano?"),
    answer("**Il gelato è la tradizione italiana dei dolci freddi preparati con una miscela di latte, zucchero e aromi — a volte con panna o tuorli — mantecata mentre si congela e servita morbida, di solito al banco dove è stata prodotta.** La parola vuol dire semplicemente \"gelato\", e in Italia indica tutto, dal cono al pistacchio in centro città al gusto alla frutta fatto in casa nel bar di paese. All'estero \"gelato\" è diventato il nome di uno stile preciso: più denso, più setoso e meno freddo di tanto ice cream industriale."),
    p("Il gelato non è una sostanza diversa dall'ice cream, ma il risultato di abitudini diverse. Ricette, macchine e servizio sono pensati per piccole produzioni da consumare in pochi giorni, spesso sul posto; molto ice cream all'estero è fatto per durare settimane in freezer. Queste scelte — su grassi, aria e temperatura — spiegano quasi tutte le differenze che si sentono in bocca."),
    {
      type: "facts",
      title: "Il gelato italiano in breve",
      rows: [
        { label: "Base", value: "Latte e zuccheri, spesso panna; tuorli nei gusti alle creme" },
        { label: "Gusti alla frutta", value: "Spesso sorbetti ad acqua; alcuni contengono latte" },
        { label: "Consistenza", value: "Densa e morbida, servita da vaschette o pozzetti in acciaio" },
        { label: "Dove", value: "Gelaterie, e molti bar e pasticcerie" },
        { label: "Come si serve", value: "In cono o in coppetta, spesso con due o tre gusti" },
        { label: "La legge su \"artigianale\"", value: "Da aprile 2026 la parola spetta alle imprese artigiane iscritte all'albo che producono direttamente; una ricetta legale ancora non c'è" },
      ],
    },
    p("Questa guida spiega che cos'è il gelato, da dove viene, come si fa, che cosa vogliono dire le scritte sui cartelli e come orientarsi al banco. Per gli altri dolci del Paese, vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Gelato e ice cream",
        "Breve storia del gelato italiano",
        "Che cosa vuol dire davvero \"artigianale\"?",
        "Come riconoscere una buona gelateria",
        "Come si ordina",
        "Allergie ed esigenze alimentari",
      ],
    },

    // ——— 2 ———
    h2("Gelato e ice cream"),
    p("Tra i due non c'è un confine legale universale. Negli Stati Uniti un prodotto venduto come \"ice cream\" deve per legge contenere almeno il 10% di grasso del latte, e un peso minimo per gallone limita l'aria che può incorporare. In Italia non esiste una ricetta legale del gelato, e i prodotti venduti come gelato nel mondo sono molto diversi tra loro. Il confronto qui sotto descrive quindi **tendenze generali**, non regole."),
    table(
      ["Caratteristica", "Gelato di stile tradizionale", "Ice cream industriale tipico"],
      [
        ["Grassi", "Variabili; il gelato al latte usa spesso più latte e meno panna", "Variabili; gli stili premium sono spesso ricchi di panna"],
        ["Aria (overrun)", "In genere meno, quindi più denso", "Può essere molta di più, soprattutto nei prodotti economici"],
        ["Temperatura di servizio", "In genere meno freddo, quindi più morbido", "In genere più freddo e più duro"],
        ["Consistenza", "Densa, morbida, elastica", "Da densa a leggera e spumosa"],
        ["Durata", "Piccole produzioni vendute in pochi giorni", "Spesso fatto per durare settimane o mesi"],
        ["Dove si produce", "Spesso nel laboratorio della gelateria", "Di solito in fabbrica"],
      ],
      "Solo tendenze generali: ricette e prodotti variano da entrambe le parti.",
    ),
    p("**Il gelato è più leggero o più sano?** Molte ricette di gelato al latte usano più latte e meno panna dei gelati più ricchi, quindi possono avere meno grassi — ma non sempre, e lo zucchero è abbondante. Cioccolato, frutta secca e creme possono essere ricchi. Non diciamo che il gelato sia più sano: è un dolce, e buono."),
    image("gelato-steel-tubs", "Vaschette d'acciaio di gelato in vetrina, con gusti chiari di frutta secca e crema e uno rosa alla frutta, lisciati in piano", true),

    // ——— 3 ———
    h2("Breve storia del gelato italiano"),
    h3("Neve, ghiaccio e sorbetti"),
    p("Molto prima dei congelatori, rinfrescare bevande e cibi con neve e ghiaccio era un lusso delle corti e dei ricchi, nel Mediterraneo e oltre. La neve si raccoglieva d'inverno e si conservava in fosse e neviere per l'estate. La parola *sorbetto* viene, attraverso il turco, dalla famiglia di parole arabe che indicano una bevanda: un indizio di quanto abbiano viaggiato le bevande dolci e ghiacciate prima che qualcuno mantecasse un gelato moderno."),
    p("A cambiare la storia fu una tecnica: raffreddare un recipiente in una miscela di ghiaccio e sale, che scende molto sotto la temperatura del solo ghiaccio, mescolando il composto all'interno perché congeli in modo uniforme. Così i dolci freddi poterono essere preparati su scala più ampia."),
    h3("Firenze, i Medici e Buontalenti"),
    p("La rivendicazione più nota è quella di Firenze. La tradizione attribuisce all'architetto e scenografo rinascimentale **Bernardo Buontalenti** l'invenzione di una crema gelata per una festa medicea del Cinquecento, e alcune gelaterie fiorentine gli dedicano un gusto alla crema. Lo stesso Carpigiani Gelato Museum presenta Buontalenti come colui a cui \"si attribuisce\" il gelato alla crema, senza citare una ricetta d'epoca. È una tradizione cittadina amata, non storia documentata."),
    p("Ancora più debole è il racconto secondo cui **Caterina de' Medici** avrebbe portato il gelato in Francia con le nozze del 1533. La storica della cucina Elizabeth David, nel suo libro sulla storia del ghiaccio e dei gelati, *Harvest of the Cold Months*, lo fa risalire alla Francia dell'Ottocento e non vi trova alcun fondamento storico."),
    h3("Napoli, Parigi e le prime ricette"),
    p("Le prove più solide arrivano dopo. A Napoli lo scalco **Antonio Latini** pubblicò ricette di *sorbetti* in *Lo scalco alla moderna* (1692–94), osservando che a Napoli sembrava che ognuno nascesse con il talento per farli. A Parigi il siciliano **Francesco Procopio dei Coltelli** aprì nel 1686 il Café Procope, dove i sorbetti si vendevano insieme al caffè; i racconti popolari che gli attribuiscono l'invenzione del gelato vanno oltre ciò che le fonti dimostrano. Nessuna di queste storie fa di una sola città la culla del gelato: i dolci freddi si sono sviluppati in più luoghi."),
    h3("Gelatieri e macchine"),
    p("Tra Ottocento e Novecento i gelatieri delle valli del Veneto e del Friuli — tra cui la Val di Zoldo e il Cadore — portarono il mestiere in tutta Europa, aprendo gelaterie stagionali all'estero, come ricorda il Gelato Museum. In Italia la meccanizzazione trasformò il lavoro: a Bologna, nel 1946, nacque la Carpigiani per produrre l'autogelatiera progettata da Bruto Carpigiani, e il Bolognese resta un polo delle macchine per gelato. Oggi lo stesso tipo di mantecatore si usa nella piccola gelateria come nella grande produzione."),

    // ——— 4 ———
    h2("Come si fa il gelato"),
    p("Ogni gelateria lavora a modo suo, ma la sequenza di base è quasi sempre questa."),
    {
      type: "steps",
      items: [
        { title: "La scelta degli ingredienti", text: "Latte, panna, zuccheri e l'ingrediente caratterizzante — frutta secca, frutta, cioccolato, caffè — e, in molte gelaterie, piccole quantità di addensanti ed emulsionanti che aiutano la struttura." },
        { title: "Il bilanciamento", text: "Gli ingredienti si pesano e si uniscono. Bilanciare zuccheri, grassi e solidi è la vera abilità del gelatiere: decide quanto il gelato sarà morbido, dolce e liscio." },
        { title: "La pastorizzazione", text: "Le miscele al latte si riscaldano per renderle sicure, poi si raffreddano. Molte gelaterie usano macchine che pastorizzano e raffreddano in un unico ciclo." },
        { title: "La maturazione", text: "Alcuni gelatieri lasciano riposare la miscela al freddo qualche ora, perché si addensi e sviluppi il sapore." },
        { title: "La mantecatura", text: "La miscela va nel mantecatore, che la congela mentre una pala la gira, rompendo i cristalli di ghiaccio e incorporando un po' d'aria." },
        { title: "La conservazione", text: "Il gelato si estrae, si sistema in vaschette o pozzetti e si conserva a una temperatura che lo mantenga spatolabile." },
        { title: "Il servizio", text: "Si serve con la spatola piatta, non con il porzionatore tondo, pressato nel cono o nella coppetta." },
      ],
    },
    p("Molte gelaterie, anche buone, costruiscono alcuni gusti su **basi** o **semilavorati** pronti — polveri o paste che forniscono zuccheri, addensanti o aromi. Altre fanno tutto partendo dalle materie prime. Nessuna delle due cose è vietata, e la differenza non sempre si vede: la guida migliore è l'elenco degli ingredienti (vedi più avanti)."),

    // ——— 5 ———
    h2("Che cosa c'è nel gelato tradizionale"),
    p("Quasi tutti i gusti appartengono a due famiglie."),
    {
      type: "compare",
      title: "Gelato al latte e sorbetto",
      columns: [
        {
          title: "Gelato al latte",
          items: [
            "Latte, spesso un po' di panna, e zuccheri",
            "Tuorli nei gusti alle creme come crema e zabaione",
            "Aromi: frutta secca, cioccolato, caffè, vaniglia, biscotti, a volte frutta",
            "Sapore pieno e rotondo; denso e cremoso",
          ],
        },
        {
          title: "Sorbetto",
          items: [
            "Acqua, zuccheri e polpa o succo di frutta",
            "Niente latte nella ricetta classica",
            "Spesso limone, fragola, pesca, melone o altra frutta di stagione",
            "Sapore netto e intenso; liscio ma meno cremoso",
          ],
        },
      ],
    },
    p("Due avvertenze. **Non ogni gusto alla frutta è un sorbetto**: alcune gelaterie fanno la frutta con il latte, e la scritta *fragola* non dice quale delle due versioni sia. E **non ogni sorbetto è vegano**: ricette e basi possono contenere proteine del latte, albume o altri ingredienti di origine animale, e il sorbetto si prepara spesso con le stesse macchine dei gusti al latte. Chiedete, e guardate l'elenco degli ingredienti."),
    p("Per la frutta conta la stagione. Un buon sorbetto sa di frutta matura; fragole in primavera, pesche e melone d'estate, fichi e uva in autunno e agrumi d'inverno indicano una gelateria che segue la stagione — anche se le polpe surgelate rendono molti frutti disponibili tutto l'anno."),

    // ——— 6 ———
    h2("Perché contano consistenza e temperatura"),
    p("Due concetti tecnici spiegano molto del gelato."),
    p("**L'aria.** Tutti i dolci freddi mantecati contengono aria, incorporata mentre la miscela si congela. I tecnologi alimentari chiamano **overrun** l'aumento di volume: se un litro di miscela diventa un litro e mezzo di prodotto, l'overrun è del 50%. Certo ice cream industriale si avvicina al 100%, cioè raddoppia il volume. Il gelato mantecato nei mantecatori a pozzetto o orizzontali ha in genere molta meno aria, ed è per questo più denso e più intenso a ogni cucchiaino. Ma l'aria c'è: \"il gelato non ha aria\" è un mito."),
    p("**La temperatura.** Il gelato si conserva e si serve in genere meno freddo dell'ice cream prelevato da un congelatore profondo, anche perché le sue ricette sono bilanciate per restare morbide a quelle temperature. Più caldo vuol dire più morbido ed elastico, più profumo e una dolcezza e un sapore più facili da percepire — lo stesso motivo per cui i cibi molto freddi sembrano spenti. Vuol dire anche che il gelato va mangiato presto, e che d'estate non sopravvive a una lunga passeggiata."),

    // ——— 7 ———
    h2("I gusti classici"),
    p("I banchi italiani arrivano spesso a decine di gusti, ma alcuni classici si trovano quasi ovunque. Sono descrizioni, non una classifica."),
    image("pistachio-gelato-bowl", "Una pallina di gelato al pistacchio verde chiaro in una coppa di vetro, con pistacchi tritati sopra e un cucchiaino accanto"),
    h3("Pistacchio"),
    p("Il pistacchio è uno dei gusti su cui molti giudicano una gelateria. Il sapore dipende dalla materia prima — provenienza, tostatura e quantità di pasta nella miscela. La Sicilia è famosa per i suoi pistacchi: il **Pistacchio Verde di Bronte**, coltivato sulle pendici dell'Etna, è DOP dal 2010, e il **Pistacchio di Raffadali**, nell'Agrigentino, dal 2021. Alcune gelaterie indicano la provenienza del loro pistacchio: è un'informazione utile, ma un nome su un cartello è una dichiarazione, non una prova. Di più nelle [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),
    p("**Il colore non è una prova.** Si legge spesso che il vero gelato al pistacchio è bruno e che il verde brillante significa coloranti. È vero che alcuni prodotti sono colorati, e che una pasta di pistacchio molto tostata dà un tono più bruno, olivastro. Ma il pistacchio è naturalmente verde, e un gelato fatto con pistacchi di qualità poco tostati può essere piuttosto verde. Se ci sono coloranti lo dice l'elenco degli ingredienti; il colore da solo no."),
    h3("Nocciola"),
    p("Un classico, soprattutto al Nord. L'Italia ha diverse nocciole tutelate, tra cui la **Nocciola Piemonte** (IGP), la **Nocciola Romana** (DOP) del Lazio e la **Nocciola di Giffoni** (IGP) della Campania. A Torino nocciola e cioccolato si incontrano nel *gianduia*, che diventa anche un gusto di gelato; vedi [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    image("hazelnuts", "Primo piano di nocciole intere nel loro guscio bruno, ammucchiate"),
    h3("Stracciatella"),
    p("Gelato al latte con scaglie irregolari di cioccolato, ottenute versando cioccolato fuso nel gelato durante la mantecatura, così che si rapprenda in scaglie. Bergamo la rivendica: i gelatieri della città e l'ente del turismo la fanno nascere lì nel 1961, da un'idea di Enrico Panattoni alla Marianna, ispirata alla stracciatella in brodo."),
    h3("Fior di latte"),
    image("fior-di-latte-scoops", "Due palline di gelato bianco in una ciotola di ceramica chiara su un telo di lino, con un cucchiaino accanto"),
    p("Latte, panna e zucchero, senza aromi aggiunti e senza uova. È il gusto più semplice e una buona prova della qualità del latte e del bilanciamento del gelatiere — oltre a essere la base della stracciatella e di molti altri gusti."),
    h3("Crema"),
    p("Gelato con tuorli, a volte profumato con scorza di limone o vaniglia. Da non confondere con la *panna*, che al banco è la panna montata."),
    h3("Cioccolato e altri classici"),
    ul(
      "**Cioccolato** — dal latte al fondente più intenso; alcune gelaterie fanno anche un sorbetto al cioccolato senza latte.",
      "**Caffè** — e l'*affogato*, gelato con un espresso versato sopra. Vedi [Il caffè italiano](/it/cibo/caffe-italiano).",
      "**Zabaione** — tuorli, zucchero e vino liquoroso, di solito Marsala; può contenere alcol.",
      "**Limone** e **fragola** — spesso come sorbetti. Tra i limoni tutelati ci sono il Limone di Sorrento e il Limone Costa d'Amalfi, entrambi IGP.",
      "**Bacio**, **gianduia**, **malaga**, **amarena** — nomi familiari su moltissimi banchi.",
    ),

    // ——— 8 ———
    h2("Che cosa vuol dire davvero \"artigianale\"?"),
    p("*Gelato artigianale* è la scritta più diffusa nelle gelaterie. Fino a poco tempo fa la parola non aveva, per il gelato, alcun significato giuridico specifico. Dal **7 aprile 2026** l'articolo 16 della **Legge 11 marzo 2026, n. 34** riserva i termini *artigianale* e *artigianato* — nella ditta, nell'insegna, nel marchio e nella promozione — alle imprese iscritte all'albo delle imprese artigiane che producono direttamente ciò che vendono."),
    p("Quello che la legge **non** fa è definire una ricetta del gelato. Non vieta basi pronte, coloranti o aromi, né fissa regole su ingredienti o metodi. Un'impresa artigiana iscritta può ancora fare gelato con le basi in polvere e chiamarlo artigianale. Le FAQ del Ministero delle Imprese e del Made in Italy usano proprio il gelato come esempio: una gelateria non iscritta all'albo non può chiamare *artigianale* il proprio gelato, ma può definirlo *di produzione propria* o *di qualità*."),
    note("\"Artigianale\" oggi dice qualcosa sull'impresa che fa il gelato, non su che cosa c'è dentro. Per quello bisogna chiedere l'elenco degli ingredienti, che la gelateria deve rendere disponibile.", "In breve"),

    // ——— 9 ———
    h2("Come riconoscere una buona gelateria"),
    p("Nessun segnale da solo dimostra la qualità, e alcune regole molto ripetute sono inaffidabili. Questi indizi vanno considerati insieme."),
    ul(
      "**Trasparenza sugli ingredienti.** Le regole italiane impongono agli alimenti sfusi, gelato compreso, di indicare gli ingredienti con gli allergeni evidenziati — su un cartello, un registro o uno schermo. Una gelateria che mostra volentieri elenchi brevi e comprensibili offre qualcosa su cui basarsi.",
      "**Frutta di stagione.** Gusti alla frutta che cambiano con le stagioni fanno pensare a frutta fresca; gli stessi venti gusti tutto l'anno, meno.",
      "**Colori sensati.** Colori forti e uniformi possono venire dai coloranti — lo dirà l'elenco degli ingredienti. Ma i colori naturali variano, e il colore da solo non prova nulla.",
      "**Conservazione ed esposizione.** Il gelato deve sembrare liscio e appena lavorato, non ghiacciato, crostoso o sciolto ai bordi. Alcune gelaterie tradizionali usano pozzetti coperti, che lo proteggono ma lo nascondono alla vista.",
      "**Consistenza e sapore.** Un buon gelato è liscio ed elastico, non granuloso né colloso; i gusti devono sapere di ciò che promettono, e non solo di zucchero.",
      "**Ricambio.** Una gelateria con molto passaggio vende il gelato in fretta, che quindi è più fresco.",
      "**Dichiarazioni coerenti.** \"Pistacchio di Bronte\", \"frutta fresca\" o \"prodotto ogni giorno\" valgono di più quando l'elenco degli ingredienti e il banco li confermano.",
    ),
    image("gelato-display-pistachio", "Una vetrina di gelateria con un gusto verde acceso accanto a gusti più chiari di frutta secca, biscotto e crema in vaschette d'acciaio, ciascuno con il suo cartellino"),
    h3("Il gelato nei centri turistici"),
    p("L'indirizzo non decide la qualità. Alcune delle gelaterie più apprezzate d'Italia stanno su strade affollate dei centri storici, e alcune gelaterie di quartiere sono ordinarie. Giudicate il gelato, non la via: leggete gli ingredienti, guardate i gusti alla frutta e, se la gelateria lo consente, assaggiate prima di prendere una porzione grande."),

    // ——— 10 ———
    h2("Miti e scritte da interpretare"),
    table(
      ["Si dice", "Che cosa c'è di vero"],
      [
        ["\"Il pistacchio verde brillante è colorato.\"", "Non per forza. Alcuni prodotti lo sono, ma il pistacchio è naturalmente verde. Guardate l'elenco degli ingredienti."],
        ["\"Le montagne di gelato sono sempre cattivo segno.\"", "Cumuli alti possono dipendere da più aria, più addensanti o una vetrina più fredda, ma non provano una qualità scarsa, e le vaschette piatte non provano una qualità alta."],
        ["\"I pozzetti coperti garantiscono un gelato migliore.\"", "Proteggono il gelato da aria e luce e sono usati da molte gelaterie tradizionali, ma il contenitore non fa il gelato."],
        ["\"Artigianale vuol dire fatto da zero.\"", "Oggi vuol dire che l'impresa è artigiana e produce direttamente. Non esclude le basi pronte."],
        ["\"Il gelato è sempre più sano dell'ice cream.\"", "Può avere meno grassi, ma lo zucchero è abbondante e alcuni gusti sono ricchi. È un dolce."],
        ["\"La frutta è sempre senza latte.\"", "Molti gusti alla frutta sono sorbetti, ma alcuni contengono latte, e le attrezzature sono spesso in comune."],
      ],
    ),

    // ——— 11 ———
    h2("Come si ordina"),
    p("Lo sappiamo fare tutti, ma le abitudini cambiano da gelateria a gelateria — ed è utile saperlo spiegare a chi viene da fuori."),
    ul(
      "**Si paga prima o dopo.** In alcune gelaterie si paga alla cassa, si prende lo scontrino e lo si mostra al banco; in altre si ordina e si paga alla fine.",
      "**Le misure.** Spesso si scelgono per prezzo o per numero di gusti: piccolo, medio, grande. Non c'è un sistema nazionale, e un \"piccolo\" in una gelateria vale due gusti, in un'altra uno.",
      "**Cono o coppetta**, poi i gusti, di solito due o tre, che il gelatiere pressa con la spatola.",
      "**Panna o no.** Spesso viene chiesto se si vuole la panna montata sopra.",
      "**L'assaggio.** Molte gelaterie fanno assaggiare un gusto con un cucchiaino, soprattutto quando c'è poca gente: è una cortesia, non un diritto.",
    ),
    tip("A chi viaggia con voi dall'estero bastano poche frasi: *Vorrei un cono piccolo*, *Due gusti: pistacchio e nocciola*, *Con panna* o *Senza panna*, *Posso assaggiare?* e, per le allergie, *Posso vedere gli ingredienti?*", "Per i compagni di viaggio stranieri"),

    // ——— 12 ———
    h2("Cono, coppetta e panna"),
    image("pisa-gelato-coppetta", "Una coppetta di carta verde con il gelato e una paletta di plastica arancione, appoggiata su un banco a Pisa"),
    p("**Cono o coppetta?** Nessuno dei due è \"più italiano\". Il cono si mangia meglio camminando e aggiunge la croccantezza della cialda; la coppetta è più pulita, più adatta ai gusti morbidi nelle giornate calde e ai bambini, ed evita il glutine del cono. Alcune gelaterie propongono coni speciali — immersi nel cioccolato o ricoperti di granella — con un supplemento. Con la coppetta arriva la paletta."),
    p("**La panna**, al banco, è la panna montata offerta come guarnizione. Alcune gelaterie la danno senza sovrapprezzo, altre la fanno pagare; c'è chi la mette solo sopra e chi anche sul fondo del cono. Non è scontato che sia gratuita né che venga offerta: basta chiedere."),
    image("siena-gelato-cone-street", "Una mano che solleva un cono di gelato in una via stretta e in ombra tra edifici di pietra a Siena"),

    // ——— 13 ———
    h2("Gelato, sorbetto e granita"),
    table(
      ["", "Gelato", "Sorbetto", "Granita"],
      [
        ["Base", "Latte, zucchero, spesso panna; uova in alcuni gusti", "Acqua, zucchero, frutta", "Acqua, zucchero e un aroma: frutta, frutta secca, caffè"],
        ["Consistenza", "Densa, cremosa, liscia", "Liscia, meno cremosa", "Cristallina: da fine e cremosa a più grossolana"],
        ["Come si fa", "Mantecato", "Mantecato come il gelato", "Congelato mescolando, perché si formino i cristalli"],
        ["Come si mangia", "Cono o coppetta", "Cono, coppetta o tra una portata e l'altra", "In bicchiere con il cucchiaino, spesso con la brioche"],
        ["Dove", "In tutta Italia", "In tutta Italia", "Specialità siciliana, oggi diffusa anche altrove"],
      ],
    ),
    p("**La granita non è gelato sciolto.** È un preparato semifreddo di acqua, zucchero e un aroma, mescolato mentre si congela perché formi piccoli cristalli — quasi cremosa in buona parte della Sicilia orientale, più grossolana altrove. I gusti classici sono limone, mandorla, caffè, pistacchio, gelsi e cioccolato. D'estate molti siciliani la mangiano a colazione con la *brioche col tuppo*; quella al caffè arriva spesso con la panna."),

    // ——— 14 ———
    h2("Tradizioni regionali"),
    p("Il gelato si fa in tutta Italia e molti gusti sono nazionali. Ma alcune tradizioni hanno un forte carattere regionale."),
    ul(
      "**Sicilia** — granita e brioche, la *brioche con gelato* e gusti costruiti su mandorle, pistacchi, agrumi e gelsi dell'isola. Di più nelle [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana).",
      "**Napoli e Campania** — una lunga tradizione di sorbetti: le ricette di Latini degli anni Novanta del Seicento furono scritte a Napoli, e i limoni di Sorrento e della Costiera sono un gusto naturale. Napoli è anche una città di pasticcerie; vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta).",
      "**Firenze e Toscana** — la tradizione di Buontalenti e un gusto alla crema a lui dedicato in alcune gelaterie; vedi [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta).",
      "**Roma** — il gelato fa parte delle giornate a piedi tra un monumento e l'altro; vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni).",
      "**Piemonte** — nocciole e gianduia, dalla Nocciola Piemonte IGP.",
      "**Lombardia** — la stracciatella di Bergamo.",
      "**Emilia-Romagna** — l'industria delle macchine per gelato del Bolognese e il Carpigiani Gelato Museum alle porte di Bologna.",
      "**Veneto e Friuli** — le valli i cui gelatieri portarono il mestiere in tutta Europa.",
    ),
    p("Sono associazioni, non confini: il pistacchio si trova a Torino e il gianduia a Palermo."),

    // ——— 15 ———
    h2("Allergie ed esigenze alimentari"),
    p("Con le allergie il gelato può essere complicato, perché i gusti condividono macchine, spatole e vetrine. **Nessun gusto è garantito privo di un allergene solo perché il suo ingrediente principale non lo contiene.**"),
    ul(
      "**Allergia al latte** — il latte è in quasi tutti i gusti. Alcuni sorbetti ne sono privi, ma la contaminazione in una vetrina e con attrezzature condivise è probabile.",
      "**Intolleranza al lattosio** — alcune gelaterie hanno gusti senza lattosio; i sorbetti di solito non contengono latte, ma conviene verificare.",
      "**Allergia alla frutta a guscio** — è ovunque: pistacchio, nocciola, gianduia e molti altri, oltre ad alcuni coni e guarnizioni. Le spatole condivise possono trasportare tracce. Chiedete una spatola pulita e, se l'allergia è grave, valutate se il rischio è accettabile.",
      "**Allergia alle uova** — crema e zabaione contengono tuorli; alcune basi e alcuni sorbetti possono contenere uova.",
      "**Glutine** — il gelato è spesso senza glutine, ma coni, gusti ai biscotti e alcune guarnizioni no. La coppetta evita il cono; alcune gelaterie hanno coni senza glutine.",
      "**Vegani** — molti sorbetti e alcuni gusti al cioccolato o alla frutta secca sono senza latte e uova, ma le ricette cambiano e le attrezzature sono in comune. Chiedete l'elenco degli ingredienti.",
    ),
    p("Le regole italiane impongono alle gelaterie di rendere disponibile l'elenco degli ingredienti di ogni gusto, con gli allergeni evidenziati. Basta chiederlo: *Posso vedere gli ingredienti?*"),

    // ——— 16 ———
    h2("Il gelato in viaggio"),
    p("Il gelato entra in modo naturale in una giornata di visite: una pausa nel caldo del pomeriggio, la passeggiata dopo cena — quando le strade si riempiono di gente che fa lo stesso — o una sosta tornando dal mercato. D'estate molte gelaterie restano aperte fino a tardi; d'inverno alcune chiudono o riducono gli orari, soprattutto lontano dalle grandi città."),
    image("gelato-cone-red-wall", "Una mano solleva un cono di gelato chiaro davanti a un muro dipinto di rosso tra due finestre con persiane di legno"),
    p("È un piacere tra tanti: la cucina italiana è anche il caffè al banco, la pasticceria, i mercati e i pranzi lunghi. Vedi [I mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani), le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana) e, per il vino della cena prima del gelato, [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),

    // ——— 17 ———
    h2("Le parole della gelateria"),
    table(
      ["Parola", "Significato"],
      [
        ["Gelatiere / gelataio", "Chi fa il gelato / chi lo vende"],
        ["Mantecatore", "La macchina che congela e lavora la miscela"],
        ["Mantecatura", "La fase in cui la miscela si congela mescolata"],
        ["Overrun", "L'aumento di volume dovuto all'aria incorporata"],
        ["Base / semilavorato", "Preparato pronto, in polvere o in pasta, usato come partenza"],
        ["Pozzetto", "Contenitore in acciaio, spesso coperto, in cui si conserva il gelato"],
        ["Spatola", "L'attrezzo piatto con cui si serve il gelato"],
        ["Paletta", "Il cucchiaino piatto della coppetta"],
        ["Crema", "Gusto a base di tuorli"],
        ["Fior di latte", "Gusto semplice di latte e panna"],
        ["Sorbetto", "Dolce freddo di acqua e frutta, di solito senza latte"],
        ["Granita", "Semifreddo siciliano a cristalli fini o grossi"],
        ["Di produzione propria", "Fatto nel laboratorio della gelateria; la dicitura che il Ministero indica per chi non è impresa artigiana"],
      ],
    ),
    p("Il gelato premia un po' di curiosità. Guardate oltre i colori e le insegne, leggete che cosa c'è dentro, assaggiate un fior di latte o un sorbetto al limone accanto ai gusti più vistosi, e in cinque minuti capirete di una gelateria più di quanto possa dire una classifica. Per il resto del viaggio, vedi la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Che cos'è il gelato italiano?", answer: "La tradizione italiana dei dolci freddi a base di latte, zucchero e aromi — a volte con panna o tuorli — mantecati mentre si congelano e serviti di solito freschi al banco. I gusti alla frutta sono spesso sorbetti ad acqua." },
    { question: "Che differenza c'è tra gelato e ice cream?", answer: "In generale il gelato di stile tradizionale contiene meno aria, si serve meno freddo e usa spesso più latte e meno panna, quindi è denso e morbido. Sono tendenze, non regole legali, e i prodotti variano." },
    { question: "Il gelato è più sano o meno grasso dell'ice cream?", answer: "Il gelato al latte ha spesso meno grassi degli ice cream più ricchi, ma non sempre, e contiene molto zucchero. È un dolce: non diremmo che è più sano." },
    { question: "Che cosa vuol dire artigianale?", answer: "Da aprile 2026 la legge riserva \"artigianale\" alle imprese iscritte all'albo delle imprese artigiane che producono direttamente. Non definisce una ricetta né esclude le basi pronte: l'elenco degli ingredienti dice di più." },
    { question: "Il gelato al pistacchio deve essere marrone e non verde?", answer: "Il colore non è una prova affidabile. Il pistacchio molto tostato dà un tono più bruno e alcuni prodotti sono colorati, ma il pistacchio è naturalmente verde. Gli eventuali coloranti sono nell'elenco degli ingredienti." },
    { question: "Che cos'è il fior di latte?", answer: "Un gelato semplice di latte, panna e zucchero, senza uova e senza aromi aggiunti: una buona prova della qualità di una gelateria." },
    { question: "Che differenza c'è tra gelato e sorbetto?", answer: "Il gelato è a base di latte; il sorbetto è fatto con acqua, zucchero e frutta, di solito senza latte. Non ogni gusto alla frutta è un sorbetto, e non ogni sorbetto è vegano." },
    { question: "Che differenza c'è tra gelato e granita siciliana?", answer: "La granita è acqua, zucchero e un aroma congelati mescolando, così che formino cristalli di ghiaccio; non viene mantecata in crema come il gelato. In Sicilia si mangia spesso a colazione con la brioche." },
    { question: "Come funziona l'ordinazione in gelateria?", answer: "Si sceglie la misura (spesso per prezzo o numero di gusti), cono o coppetta, due o tre gusti e se si vuole la panna. In alcune gelaterie si paga prima alla cassa." },
    { question: "Meglio il cono o la coppetta?", answer: "Sono ugualmente italiani: il cono è più comodo camminando, la coppetta è più pulita ed evita il glutine della cialda." },
    { question: "La panna in gelateria è gratuita?", answer: "Dipende: alcune gelaterie la offrono senza supplemento, altre la fanno pagare. Basta chiedere." },
    { question: "Il gelato è senza glutine?", answer: "Molti gusti sì, ma coni, gusti ai biscotti e alcune guarnizioni no, e le attrezzature sono in comune. Meglio la coppetta, controllando l'elenco degli ingredienti." },
    { question: "Il gelato è adatto ai vegani?", answer: "Molti sorbetti e alcuni gusti al cioccolato o alla frutta secca sono senza latte e uova, ma le ricette cambiano e le attrezzature sono condivise. Chiedete gli ingredienti." },
    { question: "Chi ha inventato il gelato?", answer: "Nessuno in particolare. Firenze attribuisce per tradizione la crema gelata a Buontalenti, la storia di Caterina de' Medici è un mito; le prime ricette italiane stampate di sorbetti sono della Napoli degli anni Novanta del Seicento, e i dolci freddi si sono sviluppati in più luoghi." },
    { question: "Che cosa sono basi e semilavorati?", answer: "Preparati pronti, in polvere o in pasta, che forniscono zuccheri, addensanti o aromi. Molte gelaterie li usano per alcuni gusti; non sono vietati, e si riconoscono dall'elenco degli ingredienti." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Legge 11 marzo 2026, n. 34 — art. 16", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2026-03-11;34", note: "uso del termine \"artigianale\"" },
    { label: "MIMIT — Artigianato, articolo 16 legge n. 34/2026: FAQ", url: "https://www.mimit.gov.it/it/assistenza/domande-frequenti/artigianato-articolo-16-legge-n-34-2026-domande-frequenti-faq", note: "con l'esempio della gelateria" },
    { label: "D.Lgs. 15 dicembre 2017, n. 231 — art. 19", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-12-15;231", note: "ingredienti e allergeni degli alimenti sfusi" },
    { label: "Dissapore — No, dal 7 aprile non cambia nulla per il gelato artigianale (6 aprile 2026)", url: "https://www.dissapore.com/locali/no-dal-7-aprile-non-cambia-proprio-nulla-per-il-gelato-artigianale/", note: "analisi della Legge 34/2026" },
    { label: "Gambero Rosso — Gelato artigianale, una tradizione senza regole (9 maggio 2025)", url: "https://www.gamberorosso.it/notizie/attualita/gelato-artigianale-legge/", note: "l'assenza di una definizione legale" },
    { label: "21 CFR 135.110 — Ice cream and frozen custard (USA)", url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-135/subpart-B/section-135.110", note: "definizione legale statunitense; in inglese" },
    { label: "University of Guelph — Ice Cream Technology: overrun calculations", url: "https://books.lib.uoguelph.ca/icecreamtechnologyebook/chapter/overrun-calculations", note: "definizione di overrun; in inglese" },
    { label: "Carpigiani Gelato Museum — History", url: "https://www.gelatomuseum.com/en/history", note: "storia, tradizione di Buontalenti, gelatieri emigrati; in inglese" },
    { label: "Storia e Memoria di Bologna — Carpigiani", url: "https://www.storiaememoriadibologna.it/node/54758", note: "l'autogelatiera del 1946" },
    { label: "Elizabeth David, Harvest of the Cold Months (1994) — recensione sulla New York Review of Books", url: "https://www.nybooks.com/articles/1996/04/04/the-empress-of-ice-cream/", note: "la storia di Caterina de' Medici; in inglese" },
    { label: "Antonio Latini, Lo scalco alla moderna (Napoli, 1692–94)", url: "https://it.wikisource.org/wiki/Autore:Antonio_Latini", note: "le prime ricette stampate di sorbetti" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "pistacchi di Bronte e Raffadali, nocciole, limoni di Sorrento e Amalfi" },
  ],
};
