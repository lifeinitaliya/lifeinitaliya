import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Milan Beyond the Duomo", scritta per chi legge in
// italiano. Regole di prenotazione del Cenacolo, date degli eventi, giorni di
// chiusura e collegamenti sono stati verificati sui siti ufficiali a settembre
// 2026. Prezzi e orari non vengono citati perché cambiano.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/milan-beyond-the-duomo";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const milanoOltreIlDuomo: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Per molti Milano è una tappa di passaggio: un cambio di treno, uno sguardo al Duomo, una passeggiata in Galleria e poi via verso il Lago di Como o Venezia. Così si perde quasi tutta la città. Il meglio di Milano è distribuito tra quartieri e istituzioni: il Cenacolo di Leonardo, la Pinacoteca di Brera, il Castello Sforzesco, i Navigli, i distretti della moda e del design e una cucina tutta sua."),
    answer("**Milano merita più di una visita lampo al Duomo.** Con **due o tre giorni** si aggiungono il Cenacolo, Brera, il Castello Sforzesco e uno o due quartieri; un giorno basta per il centro. A differenza di Roma, Firenze o Venezia, Milano è una città viva e moderna, dove la storia convive con l'architettura contemporanea, il design e gli affari: piace soprattutto a chi ama arte, design, moda, cucina e vita di città. **L'auto non serve**: metro, tram e passeggiate coprono la città, e i treni la collegano al Lago di Como e al resto del Nord. **Il Cenacolo va prenotato con largo anticipo** sul sito ufficiale."),
    {
      type: "facts",
      title: "Milano in sintesi",
      rows: [
        { label: "Durata consigliata per la prima visita", value: "2–3 giorni" },
        { label: "Ideale per", value: "Arte, design, moda, cucina, architettura e shopping" },
        { label: "Stazioni principali", value: "Milano Centrale, oltre a Porta Garibaldi, Rogoredo o Cadorna a seconda della provenienza" },
        { label: "Aeroporti", value: "Malpensa, Linate e Milano Bergamo (Orio al Serio)" },
        { label: "Come muoversi", value: "Metropolitana, tram e a piedi" },
        { label: "Serve l'auto?", value: "Di solito no, in città" },
        { label: "Da non perdere", value: "Il Cenacolo di Leonardo — prenotazione obbligatoria" },
        { label: "Gita più amata", value: "Il Lago di Como, in treno regionale" },
      ],
    },

    // ——— 1 ———
    h2("Vale la pena visitare Milano oltre il Duomo?"),
    p("Sì, per chi ama le città per come sono vissute oggi, oltre che per la loro storia. Milano ha uno dei dipinti più famosi al mondo, una grande pinacoteca rinascimentale e barocca a Brera, un castello pieno di musei, una ricca offerta di arte contemporanea e design e quartieri dal carattere molto diverso, dai Navigli ai grattacieli di Porta Nuova."),
    p("È una città diversa da Roma, Firenze e Venezia. Il centro storico è piccolo rispetto all'insieme, buona parte è stata ricostruita dopo la Seconda guerra mondiale, e la vita quotidiana è scandita da lavoro, moda e design. Chi cerca soprattutto rovine antiche o un paesaggio urbano rinascimentale intatto potrebbe preferire altre città; chi ama musei, architettura antica e nuova, shopping e buona tavola trova a Milano un ottimo soggiorno di due o tre giorni — e una base comoda per il Lago di Como."),
    {
      type: "image",
      src: `${IMG}/duomo-di-milano-dusk.webp`,
      alt: "La facciata in marmo bianco e le guglie del Duomo di Milano al crepuscolo",
      caption: "Il Duomo è il punto di partenza di quasi tutte le visite: questa guida racconta ciò che viene dopo.",
      credit: unsplash("Ouael Ben Salah", "benwksi"),
    },

    // ——— 2 ———
    h2("Quanti giorni servono a Milano?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Duomo, Galleria e un luogo importante — il Cenacolo se prenotato, oppure Brera — e una serata sui Navigli", "Poco tempo per musei e quartieri"],
        ["2 giorni", "Si aggiungono il Castello Sforzesco, la Pinacoteca di Brera e un secondo quartiere", "Una gita occuperebbe uno dei due giorni"],
        ["3 giorni", "Design, arte contemporanea, un altro museo e pasti senza fretta", "Di solito l'equilibrio migliore per la prima visita"],
        ["4 giorni o più", "Milano più Lago di Como, Bergamo o Torino", "Per il lago, meglio fermarsi a dormire che fare la gita in giornata"],
      ],
      "Quanto fermarsi a Milano"
    ),

    // ——— 3 ———
    h2("Cosa vedere oltre il Duomo"),
    p("I giorni di apertura cambiano e diversi musei chiudono un giorno alla settimana — i Musei del Castello Sforzesco, per esempio, il lunedì. Prima di organizzare una giornata intorno a un museo, controlla il sito ufficiale."),
    h3("Il Duomo e le terrazze"),
    p("Prima di andare oltre, vale la pena salirci. Le terrazze della Cattedrale, raggiungibili a piedi o in ascensore con un biglietto a parte, portano tra le guglie con la vista su tutta la città. Biglietti e regole di abbigliamento sono sul [sito ufficiale del Duomo](https://www.duomomilano.it/). Calcola una o due ore tra Cattedrale e terrazze."),
    h3("La Galleria Vittorio Emanuele II"),
    p("La galleria coperta in vetro che unisce piazza del Duomo e piazza della Scala, costruita tra gli anni Sessanta e Settanta dell'Ottocento, è insieme galleria commerciale e passaggio pubblico. Si attraversa gratuitamente."),
    h3("Il Teatro alla Scala"),
    p("Inaugurata nel 1778, la Scala è uno dei teatri d'opera più celebri al mondo. Il museo teatrale permette di affacciarsi sulla sala quando non ci sono prove o spettacoli; i biglietti per le rappresentazioni vanno a ruba, quindi conviene controllare con largo anticipo il sito ufficiale. Calcola circa un'ora per il museo. Piacerà soprattutto agli appassionati di musica."),
    h3("Il Cenacolo a Santa Maria delle Grazie"),
    p("Leonardo dipinse l'Ultima Cena sulla parete del refettorio domenicano di Santa Maria delle Grazie negli anni Novanta del Quattrocento; chiesa e convento sono Patrimonio dell'Umanità UNESCO. È una delle opere più importanti — e più fragili — al mondo, e le visite sono rigorosamente regolate."),
    ul(
      "**La prenotazione è obbligatoria.** Secondo il Museo del Cenacolo Vinciano, si entra sempre su prenotazione, per tutelare il dipinto.",
      "**Le visite sono brevi.** Gruppi di massimo 40 persone per turni di 15 minuti.",
      "**I biglietti escono a blocchi.** Le vendite aprono per periodi di tre o quattro mesi alla volta, e ogni mercoledì alle 12 vengono messi in vendita biglietti aggiuntivi per la settimana successiva, secondo il museo.",
      "**Solo canali ufficiali.** Prenota sul [sito ufficiale](https://cenacolovinciano.org/) e sulla sua piattaforma di vendita; rivenditori e tour propongono l'ingresso a prezzi più alti.",
    ),
    important("I biglietti del Cenacolo possono esaurirsi appena esce ogni blocco. Se per te è importante, controlla sulle news del museo la data della prossima apertura delle vendite e prenota appena le date sono certe; se non trovi posto, la finestra successiva è il rilascio settimanale del mercoledì.", "Organizzati per tempo"),
    {
      type: "image",
      src: `${IMG}/santa-maria-delle-grazie.webp`,
      alt: "L'esterno in mattoni e la tribuna con cupola di Santa Maria delle Grazie a Milano",
      caption: "Santa Maria delle Grazie. Il Cenacolo si trova nell'antico refettorio accanto alla chiesa.",
      credit: unsplash("Diane Picchiottino", "diane_soko"),
    },
    h3("Brera e la Pinacoteca"),
    p("Brera è lo storico quartiere degli artisti, con vie strette, gallerie e caffè. La Pinacoteca di Brera, nel Palazzo di Brera, custodisce una delle grandi raccolte di pittura italiane: il Cristo morto del Mantegna, lo Sposalizio della Vergine di Raffaello, la Pala di Brera di Piero della Francesca, la Cena in Emmaus di Caravaggio e Il bacio di Hayez. Nel palazzo c'è anche l'Orto Botanico di Brera. Calcola due ore per la pinacoteca; il quartiere dà il meglio nel tardo pomeriggio."),
    {
      type: "image",
      src: `${IMG}/brera-street-night.webp`,
      alt: "Una via del quartiere di Brera a Milano di sera, con passanti e vetrine illuminate",
      caption: "Brera la sera. All'ora dell'aperitivo le sue vie si riempiono.",
      credit: unsplash("Ken Anzai", "nzai_ken"),
    },
    h3("Il Castello Sforzesco e il Parco Sempione"),
    p("Il castello degli Sforza ospita un insieme di musei civici con un unico biglietto, tra cui l'ultima scultura di Michelangelo, la Pietà Rondanini, e la Sala delle Asse decorata da Leonardo. Secondo il sito del Castello, i musei sono aperti dal martedì alla domenica e chiusi il lunedì. Calcola due o tre ore. Alle spalle, il Parco Sempione arriva fino all'Arco della Pace e ospita la Triennale."),
    {
      type: "image",
      src: `${IMG}/castello-sforzesco-fountain.webp`,
      alt: "La fontana davanti al Castello Sforzesco di Milano con la torre del castello sullo sfondo",
      caption: "Il Castello Sforzesco. Un solo biglietto vale per tutti i musei del castello.",
      credit: unsplash("Maria Cappelli", "rikku72"),
    },
    h3("I Navigli"),
    p("Il Naviglio Grande e il Naviglio Pavese sono ciò che resta di una rete di canali che un tempo collegava Milano a fiumi e laghi. Oggi le loro sponde, e la Darsena dove si incontrano, sono piene di ristoranti e locali e sono tra i luoghi più vivaci della città la sera. Nel fine settimana, di giorno, ci sono mercatini e passeggiate. Calcola una serata."),
    h3("Porta Nuova, piazza Gae Aulenti e il Bosco Verticale"),
    p("A nord del centro, il quartiere di Porta Nuova mostra la Milano contemporanea: la piazza sopraelevata intitolata a Gae Aulenti, circondata dai grattacieli, il parco Biblioteca degli Alberi e il Bosco Verticale, due torri residenziali progettate dallo studio di Stefano Boeri e piantumate con alberi. Si visita liberamente in un'ora o due, insieme al vicino quartiere Isola."),
    {
      type: "image",
      src: `${IMG}/bosco-verticale.webp`,
      alt: "Le torri del Bosco Verticale a Milano, con alberi e piante che crescono sui balconi",
      caption: "Il Bosco Verticale, nel quartiere di Porta Nuova.",
      credit: unsplash("Mattia Spotti", "spockmon"),
    },
    h3("Il Museo del Novecento"),
    p("In piazza del Duomo, nel Palazzo dell'Arengario, il Museo del Novecento racconta l'arte italiana del XX secolo, dal Futurismo in poi. Dai piani alti si guarda dritto sulla Cattedrale. Calcola una o due ore: si abbina facilmente al Duomo."),
    h3("Fondazione Prada"),
    p("In un'ex distilleria nel sud della città, ripensata dallo studio di architettura OMA, Fondazione Prada propone mostre d'arte contemporanea in un complesso che comprende un edificio rivestito in foglia d'oro e una torre. Il programma cambia: controlla che cosa è in corso prima di andare. Calcola due o tre ore."),
    h3("Triennale Milano"),
    p("Nel Palazzo dell'Arte al Parco Sempione, la Triennale è dedicata a design, architettura e arti visive, con un museo permanente del design e mostre temporanee. Tappa naturale per chi viaggia per il design, e facile da abbinare al Castello."),
    h3("Il Cimitero Monumentale"),
    p("Il Cimitero Monumentale, a nord del centro, è una raccolta a cielo aperto di scultura e architettura dell'Ottocento e del Novecento, a cui si accede dal Famedio in marmi a fasce. Per molti è uno dei luoghi più sorprendenti della città. Ingresso gratuito; verifica i giorni di apertura sul sito del Comune. Calcola una o due ore."),
    {
      type: "image",
      src: `${IMG}/cimitero-monumentale.webp`,
      alt: "Il Famedio in marmi a fasce all'ingresso del Cimitero Monumentale di Milano",
      caption: "Il Famedio, all'ingresso del Cimitero Monumentale.",
      credit: unsplash("Natalia Martini Uliana", "natalliamartini"),
    },
    h3("Come scegliere le priorità"),
    p("Un aiuto pratico per organizzarsi, non una classifica: adattalo ai tuoi interessi."),
    table(
      ["Luogo", "Priorità per una prima visita", "Durata indicativa", "Prenotare?"],
      [
        ["Il Cenacolo", "Alta", "Visita di 15 minuti, più l'arrivo", "Obbligatorio, spesso con settimane di anticipo"],
        ["Duomo e terrazze", "Alta", "1–2 ore", "Utile nei periodi affollati"],
        ["Pinacoteca di Brera", "Alta", "Circa 2 ore", "Di solito no"],
        ["Musei del Castello Sforzesco", "Media", "2–3 ore", "Di solito no; chiusi il lunedì"],
        ["Navigli", "Alta", "Una serata", "No"],
        ["Porta Nuova e Bosco Verticale", "Media", "1–2 ore", "No"],
        ["Museo del Novecento", "Media", "1–2 ore", "Di solito no"],
        ["Fondazione Prada", "Facoltativa", "2–3 ore", "Dipende dalla mostra"],
        ["Triennale Milano", "Facoltativa", "1–2 ore", "Dipende dalla mostra"],
        ["Cimitero Monumentale", "Facoltativa", "1–2 ore", "No"],
      ],
      "Priorità per organizzare una prima visita"
    ),

    // ——— 4 ———
    h2("Milano in 1, 2 o 3 giorni"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Un giorno", title: "Il centro e Brera", text: "**Mattina:** il Duomo e le terrazze. **Tarda mattinata:** la Galleria e piazza della Scala. **Pomeriggio:** il Cenacolo, se hai un turno prenotato, oppure la Pinacoteca di Brera. **Sera:** aperitivo e cena a Brera o sui Navigli." },
        { label: "Due giorni", title: "Leonardo e il Castello", text: "Primo giorno come sopra. **Secondo giorno:** il Cenacolo (se non già visto) o Brera al mattino; il Castello Sforzesco e il Parco Sempione nel pomeriggio; i Navigli la sera." },
        { label: "Tre giorni", title: "Design e Milano contemporanea", text: "Primi due giorni come sopra. **Terzo giorno:** la Triennale o Fondazione Prada; Porta Nuova, il Bosco Verticale e l'Isola; una cena con calma a Porta Venezia o all'Isola." },
      ],
    },
    tip("Costruisci ogni giornata intorno a una sola prenotazione — il Cenacolo o le terrazze del Duomo — e lascia flessibile il resto. Con la metro Milano si attraversa in fretta, quindi non serve raggruppare tutto per zona.", "Una prenotazione al giorno"),

    // ——— 5 ———
    h2("I quartieri di Milano"),
    table(
      ["Zona", "Carattere", "Ideale per", "Da considerare"],
      [
        ["Centro storico (Duomo)", "Il cuore storico: Cattedrale, Galleria, Scala", "La prima visita", "La zona più affollata; in alcune vie prevalgono i negozi"],
        ["Brera", "Lo storico quartiere degli artisti, gallerie, vie strette", "Arte, caffè, passeggiate serali", "Molto frequentato e spesso più caro"],
        ["Navigli", "Canali e Darsena, ristoranti e locali", "Le serate", "Vivace e affollato la sera e nel fine settimana"],
        ["Porta Venezia", "Architettura Liberty, ristoranti, giardini pubblici", "Cucina, una base centrale ben servita dalla metro", "Alcune vie animate la sera"],
        ["Porta Nuova / Isola", "Grattacieli contemporanei accanto a un quartiere a misura d'uomo", "Architettura moderna, ristoranti", "Più lontano dal Duomo"],
        ["Corso Como / Garibaldi", "Via pedonale vicino alla stazione di Porta Garibaldi", "Shopping, serate, treni", "Affollato la sera"],
        ["Tortona", "Ex area industriale di studi e showroom", "Design, soprattutto durante la design week", "Più tranquilla fuori dagli eventi"],
        ["Porta Romana", "Zona residenziale a sud-est del centro", "Un soggiorno più tranquillo, vicino a Fondazione Prada", "Serve la metro per i luoghi principali"],
        ["Paolo Sarpi", "La Chinatown milanese, in gran parte pedonale", "Cibo e acquisti", "Via commerciale affollata di giorno"],
      ],
      "I quartieri di Milano in sintesi"
    ),

    // ——— 6 ———
    h2("Dove dormire a Milano"),
    p("Con la metropolitana quasi tutte le zone centrali sono comode. Scegli in base a come arrivi e a che cosa vuoi trovare fuori dalla porta la sera."),
    table(
      ["Se cerchi…", "Valuta", "Perché"],
      [
        ["La prima visita più semplice", "Centro storico o Brera", "Duomo, Scala e Brera raggiungibili a piedi"],
        ["Collegamenti comodi con treni e aeroporti", "Zona di Milano Centrale o Porta Garibaldi", "Alta velocità, Malpensa Express e autobus per gli aeroporti"],
        ["Ristoranti e vita serale", "Navigli o Porta Venezia", "Le serate sotto casa"],
        ["Un soggiorno più tranquillo", "Porta Romana o vie residenziali vicine al centro", "Serate più calme, con la metro vicina"],
        ["La Milano contemporanea", "Porta Nuova o Isola", "Architettura moderna e buoni collegamenti"],
        ["Linate a portata di mano", "Zone servite dalla M4", "La M4 arriva direttamente all'aeroporto di Linate"],
      ],
      "Scegliere dove dormire"
    ),
    p("Durante le grandi fiere e le settimane della moda i prezzi degli alberghi possono salire molto: controlla il calendario degli eventi prima di prenotare. Milano applica l'imposta di soggiorno, a persona e a notte."),

    // ——— 7 ———
    h2("Arte e musei"),
    p("L'identità culturale di Milano ha accenti diversi da quelli di Firenze o di Roma. Firenze è legata soprattutto al primo Rinascimento, Roma all'antichità e al Barocco; la storia di Milano va dalla corte degli Sforza, dove Leonardo lavorò per quasi vent'anni, all'Illuminismo e all'Accademia di Brera, fino al modernismo del Novecento, al design industriale e alle fondazioni d'arte contemporanea di oggi."),
    ul(
      "**Leonardo da Vinci** — il Cenacolo, la Sala delle Asse al Castello Sforzesco e i suoi studi su canali e ingegneria.",
      "**Brera** — la pittura italiana dal Rinascimento in poi, alla Pinacoteca.",
      "**Castello Sforzesco** — scultura, arti decorative e la Pietà Rondanini di Michelangelo.",
      "**Arte moderna e contemporanea** — il Museo del Novecento, Fondazione Prada, Pirelli HangarBicocca e una fitta rete di gallerie.",
      "**Architettura** — dal Duomo gotico e dal Bramante di Santa Maria delle Grazie alle ville Liberty, alle torri del dopoguerra come la Torre Velasca e il Pirellone, fino al nuovo skyline di Porta Nuova e CityLife.",
    ),

    // ——— 8 ———
    h2("Moda e design"),
    p("A Milano moda e design sono parte dell'economia e della vita di tutti i giorni, non solo dell'immagine."),
    h3("Moda"),
    p("La Milano Fashion Week è organizzata dalla Camera Nazionale della Moda Italiana. Le collezioni donna sfilano due volte l'anno, tra fine febbraio e inizio marzo e a fine settembre (dal 22 al 28 settembre nel 2026), mentre le collezioni uomo hanno settimane proprie; il calendario ufficiale è pubblicato sul sito della Camera. Le sfilate sono eventi di settore, per lo più su invito, ma le settimane della moda coinvolgono tutta la città, riempiendo alberghi e ristoranti. Il Quadrilatero della Moda — via Montenapoleone, via della Spiga, via Sant'Andrea e via Manzoni — è il cuore del lusso."),
    h3("Design"),
    p("Il Salone del Mobile, la fiera internazionale dell'arredo, si tiene a Rho Fiera Milano. Secondo gli organizzatori, l'edizione 2027 si svolge dal 13 al 18 aprile, con gli ultimi due giorni aperti al pubblico. Nella stessa settimana la città ospita centinaia di eventi di design — il Fuorisalone — in zone come Tortona e Brera. Il museo del design della Triennale e gli showroom in città sono visitabili tutto l'anno."),
    important("La design week e le settimane della moda portano alcuni dei picchi di domanda alberghiera dell'anno. Se le tue date coincidono, prenota presto — oppure scegli altre date se preferisci evitare la folla.", "Controlla il calendario degli eventi"),
    h3("Shopping"),
    ul(
      "**Lusso** — il Quadrilatero della Moda.",
      "**Marchi italiani e catene** — corso Vittorio Emanuele e corso Buenos Aires.",
      "**Grandi magazzini** — la Rinascente in piazza del Duomo.",
      "**Boutique indipendenti e negozi di design** — Brera, Isola e Porta Venezia.",
      "**Vintage e mercatini** — sui Navigli si tengono mercatini in giorni stabiliti; verifica il calendario del Comune.",
      "**Cibo** — mercati coperti e gastronomie in tutta la città.",
    ),

    // ——— 9 ———
    h2("Cucina e aperitivo"),
    p("La cucina milanese è settentrionale e ricca: riso, burro e cotture lente più che olio d'oliva e pasta."),
    ul(
      "**Risotto alla milanese** — il risotto allo zafferano, spesso servito con l'ossobuco.",
      "**Cotoletta alla milanese** — la costoletta di vitello impanata, tradizionalmente con l'osso e fritta nel burro.",
      "**Ossobuco** — lo stinco di vitello brasato.",
      "**Polenta** — diffusa in tutta la Lombardia, soprattutto nei mesi freddi.",
      "**Panettone** — il dolce più legato a Milano, soprattutto a Natale.",
    ),
    p("**L'aperitivo** è un rito quotidiano: un drink nel tardo pomeriggio, spesso con stuzzichini o buffet, nei bar di Brera, dei Navigli, dell'Isola e di Porta Venezia. Si dice comunemente che il Negroni sbagliato sia nato a Milano; di più nella nostra guida all'[aperitivo italiano](/it/cibo/aperitivo-italiano). La Lombardia ha anche vini importanti, dalle bollicine della Franciacorta ai rossi della Valtellina. Sulle abitudini della tavola italiana c'è il nostro approfondimento sulle [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    h3("I Navigli e la Milano della sera"),
    p("La vita serale milanese si concentra sui Navigli, a Brera, Porta Venezia, all'Isola e in corso Como. L'aperitivo inizia di solito verso le 18, la cena intorno alle 20. Nelle sere calde le sponde dei canali si riempiono, e nel fine settimana possono essere affollatissime; per una serata più tranquilla, prosegui lungo il Naviglio Grande o scegli l'Isola."),
    {
      type: "image",
      src: `${IMG}/navigli-canal-evening.webp`,
      alt: "Il Naviglio a Milano di sera, tra palazzi e luci di ristoranti",
      caption: "I Navigli la sera, quando le sponde si riempiono per l'aperitivo e la cena.",
      credit: unsplash("Daniel Kirby", "dsk_"),
    },

    // ——— 10 ———
    h2("Come muoversi a Milano"),
    p("Milano è quasi tutta pianeggiante e il centro si gira a piedi, ma tra un quartiere e l'altro conviene la metro o il tram. ATM gestisce cinque linee di metropolitana (M1–M5), tram e autobus."),
    table(
      ["Per…", "Usa", "Note"],
      [
        ["Visitare il centro", "A piedi", "Duomo, Galleria, Scala, Brera e Castello sono raggiungibili a piedi"],
        ["Passare da un quartiere all'altro", "Metropolitana", "Veloce e frequente; cinque linee attraversano la città"],
        ["Brevi tragitti panoramici", "Tram", "Più lento ma comodo, e circolano ancora alcuni tram storici"],
        ["L'aeroporto di Linate", "Metro M4", "Diretta all'aeroporto"],
        ["A tarda sera", "Metro, bus notturni o taxi", "Verifica i servizi notturni in vigore su ATM"],
      ],
      "Come muoversi a Milano"
    ),
    p("Secondo ATM, metro, bus e tram si possono pagare avvicinando una carta contactless, il telefono o lo smartwatch ai lettori contrassegnati in arancione ai tornelli e a bordo; esistono anche biglietti cartacei e in app. I taxi si prendono ai posteggi o si prenotano per telefono o con un'app. In città ci sono anche bike sharing e monopattini in condivisione. Informazioni aggiornate sul [sito di ATM](https://www.atm.it/it/)."),

    // ——— 11 ———
    h2("Gli aeroporti di Milano"),
    table(
      ["Aeroporto", "Dove si trova", "Come arrivare in città", "Comodo per"],
      [
        ["Milano Malpensa (MXP)", "A nord-ovest di Milano, a una certa distanza dalla città", "Malpensa Express per Cadorna, Porta Garibaldi e Centrale; autobus; taxi e transfer", "Quasi tutti i voli intercontinentali e molti europei; chi va al Lago di Como o al Lago Maggiore"],
        ["Milano Linate (LIN)", "A est del centro, vicinissimo alla città", "Metro M4 — circa 12 minuti fino a San Babila, secondo l'aeroporto; taxi", "Voli nazionali ed europei; soggiorni brevi in città"],
        ["Milano Bergamo (BGY)", "Vicino a Bergamo, a nord-est di Milano", "Autobus per Milano; oppure bus ATB fino alla stazione di Bergamo e poi treno", "Molti voli low cost; chi visita Bergamo"],
      ],
      "Gli aeroporti di Milano"
    ),
    p("Controlla sempre quale aeroporto usa il tuo volo: «Milano» può indicare uno qualsiasi dei tre, e sono in posti molto diversi."),

    // ——— 12 ———
    h2("Milano in treno"),
    p("Milano Centrale è uno dei principali nodi ferroviari italiani; i treni ad alta velocità fermano anche a Porta Garibaldi e Rogoredo. I Frecciarossa di Trenitalia e i treni Italo collegano Milano con Torino, Bologna, Firenze, Roma, Napoli e Venezia. Secondo gli orari degli operatori verificati a settembre 2026, i treni più veloci impiegano da circa 45 minuti a un'ora per Torino, un'ora e tre quarti–due ore per Firenze e due ore e un quarto–due ore e mezza per Venezia; per le altre tratte controlla l'orario aggiornato."),
    p("Per il Lago di Como, i regionali Trenord partono da Milano Centrale per Como San Giovanni (circa 40 minuti) e per Varenna (circa un'ora), e da Milano Cadorna per Como Nord Lago. Per biglietti e convalida leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 13 ———
    h2("Gite in giornata da Milano"),
    h3("Milano e il Lago di Como"),
    p("Il Lago di Como è la gita più amata da Milano, e funziona in due modi. In giornata si riesce a vedere bene un paese — Como, oppure Varenna con un breve tragitto in battello. Per il centro lago — Bellagio, Varenna e Menaggio in battello — conviene fermarsi almeno una notte. Milano va bene come base per chi preferisce le serate in città e un solo albergo; dormire sul lago è più adatto a chi vuole ritmi lenti e panorami senza il treno andata e ritorno. Nella nostra guida al [Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend) spieghiamo dove dormire e come funzionano i battelli."),
    table(
      ["Meta", "Ideale per", "Difficoltà organizzativa", "Come arrivare di solito"],
      [
        ["Lago di Como", "Borghi sul lago, ville, gite in battello", "Bassa per Como; media per il centro lago", "Treno Trenord, poi battello; meglio con una notte"],
        ["Bergamo", "La Città Alta, dentro le mura", "Bassa", "Treno regionale, poi autobus o funicolare per la Città Alta"],
        ["Torino", "Residenze reali, Museo Egizio, caffè storici", "Bassa", "Alta velocità"],
        ["Lago Maggiore", "Isole Borromee e paesi sul lago", "Media", "Treno fino a Stresa, poi battello"],
        ["Bologna", "Cucina, portici e centro medievale", "Bassa", "Alta velocità"],
        ["[Verona](/it/citta/verona-per-la-prima-volta)", "L'Arena romana e il centro storico", "Bassa", "Treno"],
      ],
      "Gite in giornata da Milano"
    ),
    p("In un soggiorno breve basta una gita; i laghi in particolare si godono di più con una notte sul posto."),

    // ——— 14 ———
    h2("Quando andare a Milano"),
    ul(
      "**Primavera (aprile–giugno)** — clima ideale per camminare e mangiare all'aperto; ad aprile la design week riempie la città.",
      "**Estate (luglio–agosto)** — caldo e afoso; ad agosto molti milanesi partono e alcuni negozi e ristoranti chiudono per una parte del mese. Più tranquilla per le visite, ma meno vivace.",
      "**Autunno (settembre–novembre)** — buona stagione per musei e buona tavola, con la settimana della moda a fine settembre; verso fine stagione piove più spesso.",
      "**Inverno (dicembre–febbraio)** — freddo e a volte nebbioso, ma festoso a dicembre: il 7 dicembre, Sant'Ambrogio, è festa cittadina, e il panettone è ovunque. A febbraio torna la settimana della moda donna.",
    ),
    p("Grandi fiere, settimane della moda e design week fanno salire domanda e prezzi degli alberghi, a volte in modo marcato. Per confrontare Milano con il resto d'Italia nel corso dell'anno, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 15 ———
    h2("Milano per ogni tipo di viaggiatore"),
    h3("Alla prima visita"),
    p("Prenota prima di tutto il Cenacolo, poi organizza Duomo, Brera e Castello intorno a quel turno. Tieni una serata per i Navigli."),
    h3("In coppia"),
    p("Dormi a Brera o vicino ai Navigli, sali sulle terrazze del Duomo nel tardo pomeriggio e aggiungi una notte sul Lago di Como."),
    h3("Con la famiglia"),
    p("Parco Sempione, il Castello Sforzesco e il Museo di Storia Naturale ai Giardini di Porta Venezia sono perfetti con i bambini. Visite brevi ai musei e metro per risparmiare strada a piedi."),
    h3("Da soli"),
    p("Milano si gira facilmente da soli in metro, e tra banconi dei bar e aperitivo mangiare da soli è semplice."),
    h3("Per chi ama l'arte"),
    p("Abbina il Cenacolo, la Pinacoteca di Brera e i musei del Castello al Museo del Novecento e a Fondazione Prada."),
    h3("Per chi ama moda e design"),
    p("Passeggia nel Quadrilatero della Moda, visita la Triennale, esplora gli showroom di Tortona e, se puoi, fai coincidere il viaggio con la design week — prenotando l'alloggio con largo anticipo."),
    h3("Per chi viaggia per la tavola"),
    p("Prova risotto alla milanese, cotoletta e ossobuco, fai l'aperitivo in quartieri diversi e valuta una gita a Bergamo o a Bologna."),
    h3("Per lavoro"),
    p("Porta Nuova, Porta Garibaldi e la zona della Centrale sono comode per uffici e treni. Controlla il calendario fieristico prima di prenotare."),
    h3("Con un budget contenuto"),
    p("Molte delle esperienze migliori sono gratuite: la Galleria, le vie di Brera, Porta Nuova, i Navigli e il Cimitero Monumentale. Evita le settimane dei grandi eventi, dormi vicino a una linea della metro invece che in centro e verifica le giornate di ingresso gratuito dei musei statali."),
    h3("Per un weekend"),
    p("In un fine settimana si vedono il Duomo, il Cenacolo o Brera, il Castello e una serata sui Navigli. Prenota il Cenacolo prima di tutto il resto."),

    // ——— 16 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Fermarsi al Duomo.** Lascia tempo per Brera, il Castello e almeno un quartiere.",
      "**Sottovalutare le prenotazioni.** Il Cenacolo va prenotato, spesso con settimane di anticipo.",
      "**Scegliere l'alloggio senza guardare i trasporti.** Meglio vicino a una linea della metro o a una stazione.",
      "**Usare l'auto senza bisogno.** Traffico e zone a traffico limitato rendono la metro molto più comoda.",
      "**Ignorare i quartieri.** Gran parte del carattere di Milano è fuori dal centro.",
      "**Fare troppe gite.** In un soggiorno breve ne basta una.",
      "**Affidarsi a informazioni superate sugli eventi.** Controlla i calendari ufficiali di moda, design e fiere.",
      "**Confondere gli aeroporti.** Malpensa, Linate e Bergamo sono lontani tra loro.",
      "**Dimenticare i grandi eventi.** Possono riempire gli alberghi e far salire i prezzi in tutta la città.",
    ),
    p("Se prosegui in auto verso i laghi o la montagna, leggi prima come [guidare in Italia](/it/guide/guidare-in-italia): nel centro di Milano ci sono zone a traffico limitato."),

    // ——— 17 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "milano-oltre-il-duomo",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli il quartiere", "Decidi quanti giorni fermarti", "Verifica la disponibilità del Cenacolo", "Controlla il calendario degli eventi"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota Cenacolo e terrazze del Duomo", "Conferma aeroporto e trasferimento", "Controlla i giorni di chiusura dei musei", "Salva i link ufficiali dei musei"],
        },
        {
          title: "Durante il viaggio",
          items: ["Usa metro e tram", "Tieni un margine prima delle prenotazioni", "Lascia una serata per i Navigli", "Mantieni il programma flessibile"],
        },
      ],
    },
    p("Regole di prenotazione, date degli eventi e collegamenti citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Possono cambiare: controllali prima di partire. Per inserire Milano in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Vale la pena visitare Milano oltre il Duomo?", answer: "Sì. Milano ha il Cenacolo di Leonardo, la Pinacoteca di Brera, i musei del Castello Sforzesco, i Navigli, l'architettura contemporanea e una solida cultura del design e della tavola." },
    { question: "Quanti giorni servono per visitare Milano?", answer: "Due o tre giorni per la maggior parte delle prime visite: abbastanza per Duomo, Cenacolo, Brera, Castello e uno o due quartieri. Aggiungi un giorno per il Lago di Como o Bergamo." },
    { question: "Cosa vedere a Milano oltre al Duomo?", answer: "Il Cenacolo, la Pinacoteca di Brera, il Castello Sforzesco, la Galleria Vittorio Emanuele II, i Navigli, Porta Nuova con il Bosco Verticale e il Museo del Novecento." },
    { question: "Bisogna prenotare il Cenacolo in anticipo?", answer: "Sì. Secondo il museo la prenotazione è obbligatoria, le visite durano 15 minuti e i biglietti escono a blocchi, con biglietti aggiuntivi ogni mercoledì a mezzogiorno per la settimana successiva. Prenota sul sito ufficiale." },
    { question: "Milano si gira a piedi?", answer: "Il centro sì, ed è quasi tutto in piano: Duomo, Galleria, Scala, Brera e Castello sono vicini. Per Navigli, Porta Nuova e gli altri quartieri conviene metro o tram." },
    { question: "Dove conviene dormire a Milano la prima volta?", answer: "In centro o a Brera per raggiungere a piedi i luoghi principali; vicino a Milano Centrale o Porta Garibaldi per treni e aeroporti; sui Navigli o a Porta Venezia per le serate." },
    { question: "Milano è cara?", answer: "Può esserlo, soprattutto per gli alberghi durante settimane della moda, design week e fiere. Fuori da quei periodi, e con luoghi gratuiti come la Galleria, Brera e i Navigli, si gestisce meglio." },
    { question: "Serve l'auto a Milano?", answer: "No. Metro, tram e bus coprono la città, e i treni arrivano al Lago di Como e nelle altre città. L'auto serve solo per esplorare zone fuori dalla rete ferroviaria." },
    { question: "Come si arriva da Malpensa a Milano?", answer: "Con il Malpensa Express, che arriva a Milano Cadorna, Porta Garibaldi e Centrale; in alternativa autobus e taxi. Verifica gli orari aggiornati con gli operatori." },
    { question: "Come si arriva da Linate al centro di Milano?", answer: "Con la metro M4, che collega direttamente l'aeroporto al centro: circa 12 minuti fino a San Babila, secondo l'aeroporto. In alternativa il taxi." },
    { question: "Milano va bene per un weekend?", answer: "Sì. In un fine settimana si vedono il Duomo, il Cenacolo o Brera, il Castello e una serata sui Navigli, a patto di prenotare il Cenacolo con largo anticipo." },
    { question: "Per quali piatti è famosa Milano?", answer: "Risotto alla milanese, cotoletta alla milanese, ossobuco e panettone, oltre al rito dell'aperitivo." },
    { question: "Si può visitare il Lago di Como in giornata da Milano?", answer: "Sì, ma in giornata si vede di solito un solo paese — Como, oppure Varenna con un breve tragitto in battello. Secondo Trenord i treni diretti impiegano circa 40 minuti da Milano Centrale a Como San Giovanni e circa un'ora fino a Varenna. Per il centro lago, meglio fermarsi almeno una notte." },
    { question: "Per che cosa è famosa Milano oltre alla moda?", answer: "Per il Cenacolo di Leonardo, il Duomo, il design e il Salone del Mobile, il Teatro alla Scala, la Pinacoteca di Brera, finanza e affari, e la cucina milanese." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Museo del Cenacolo Vinciano", url: "https://cenacolovinciano.org/", note: "regole di prenotazione e aperture delle vendite" },
    { label: "Duomo di Milano", url: "https://www.duomomilano.it/", note: "Cattedrale e terrazze" },
    { label: "Pinacoteca di Brera", url: "https://pinacotecabrera.org/", note: "collezione e visite" },
    { label: "Castello Sforzesco", url: "https://www.milanocastello.it/", note: "orari e giorni di chiusura dei musei" },
    { label: "Triennale Milano", url: "https://triennale.org/", note: "museo del design e mostre" },
    { label: "Fondazione Prada", url: "https://www.fondazioneprada.org/", note: "mostre" },
    { label: "Camera Nazionale della Moda Italiana", url: "https://www.cameramoda.it/it/", note: "calendario della settimana della moda" },
    { label: "Salone del Mobile.Milano", url: "https://www.salonemilano.it/it", note: "date della design week" },
    { label: "ATM Milano", url: "https://www.atm.it/it/", note: "metro, tram, biglietti e contactless" },
    { label: "Aeroporto di Milano Linate", url: "https://www.milanolinate-airport.com/it", note: "collegamento con la M4" },
    { label: "Aeroporto di Milano Bergamo", url: "https://www.milanbergamoairport.it/it/", note: "collegamenti in autobus e in treno" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/biglietti/titoli-di-viaggio/malpensa-express/", note: "collegamento con Malpensa" },
  ],
};
