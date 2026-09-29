import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Florence for First-Time Visitors", scritta per chi
// legge in italiano. Sistemi di prenotazione, pass e collegamenti sono stati
// verificati sui siti ufficiali indicati in fondo (settembre 2026). Prezzi e
// orari non vengono citati perché cambiano: si rimanda alla fonte ufficiale.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/florence-for-first-timers";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const firenzePerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Firenze concentra in pochi chilometri quadrati una quantità di capolavori che altrove richiederebbe una regione intera. Duomo, Uffizi, Ponte Vecchio e Palazzo Pitti sono a pochi minuti a piedi l'uno dall'altro, e la città è sulla linea dell'alta velocità tra Roma, Bologna e Milano. Per questo è una delle mete più semplici da inserire in un primo viaggio in Italia — e una delle più facili da visitare di corsa."),
    p("Questa guida serve a organizzare la prima visita: quanti giorni fermarsi, che cosa mettere in cima alla lista, in quale zona dormire, come arrivare e spostarsi, che cosa prenotare prima e come trovare spazio per la cucina, i quartieri e le gite nei dintorni senza trasformare la città in un elenco da spuntare."),
    answer("**Firenze è una buona scelta per un primo viaggio** se ti interessano l'arte del Rinascimento, l'architettura e la cucina, ed è abbastanza compatta da girarla a piedi. **Due o tre giorni** bastano per l'essenziale con un ritmo sostenibile; un giorno permette di vedere i luoghi simbolo, quattro o più lasciano spazio a una gita in Toscana. **Da prenotare**: le salite al Duomo, gli Uffizi e l'Accademia, soprattutto in primavera, d'estate e nei ponti, sempre dai siti ufficiali. **L'auto non serve**: quasi tutti arrivano in treno a Santa Maria Novella e proseguono a piedi, e gran parte del centro storico è zona a traffico limitato."),
    {
      type: "facts",
      title: "Firenze in sintesi",
      rows: [
        { label: "Durata consigliata per la prima visita", value: "2–3 giorni; 1 giorno per i luoghi simbolo" },
        { label: "Ideale per", value: "Arte rinascimentale, architettura, musei, cucina, passeggiate" },
        { label: "Come muoversi", value: "Soprattutto a piedi; autobus e tramvia per i tragitti più lunghi" },
        { label: "Arrivo principale", value: "Stazione di Firenze Santa Maria Novella" },
        { label: "Aeroporto", value: "Aeroporto di Firenze (Amerigo Vespucci), collegato al centro dalla tramvia T2" },
        { label: "Serve l'auto?", value: "Di solito no: il centro storico è una ZTL controllata da telecamere" },
        { label: "Da prenotare", value: "Salite al Duomo, Uffizi, Accademia e altri musei con ingresso a orario" },
        { label: "Gite in giornata", value: "Siena, Pisa, Lucca, Chianti, San Gimignano, Bologna" },
      ],
    },

    // ——— 1 ———
    h2("Vale la pena visitare Firenze?"),
    p("Per chi visita l'Italia per la prima volta, nella maggior parte dei casi sì — a patto di arrivare con aspettative giuste. Firenze è la città in cui è nato buona parte del primo Rinascimento, e lo si vede ovunque: la cupola del Brunelleschi, i dipinti degli Uffizi, il David di Michelangelo, gli affreschi di Santa Croce e Santa Maria Novella. Il centro è piccolo e quasi pianeggiante, si vede moltissimo senza mezzi, e la città è una base comoda per la Toscana."),
    p("È particolarmente adatta a chi ama:"),
    ul(
      "**L'arte del Rinascimento e i musei** — poche città riuniscono tante opere fondamentali in così poco spazio.",
      "**L'architettura e le strade storiche** — la pianta medievale è ancora leggibile, con palazzi, chiese e piazze a ogni angolo.",
      "**La cucina** — semplice e di stagione, con i mercati che fanno ancora parte della vita quotidiana.",
      "**Visite compatte, a piedi** — i luoghi principali sono vicini tra loro.",
      "**La Toscana a portata di mano** — Siena, Pisa, Lucca e le colline del Chianti sono raggiungibili in giornata.",
    ),
    p("Non è la scelta ideale per tutti. Il centro è affollato per gran parte dell'anno, soprattutto in primavera, d'estate e nei ponti. Chi cerca soprattutto mare, vita notturna, grandi paesaggi o una metropoli varia e moderna potrebbe trovarsi meglio a Roma, a Napoli, sulla costa o in campagna — oppure inserire Firenze come tappa di due giorni in un itinerario più ampio. Nella nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia) trovi come combinarla con altre città."),

    // ——— 2 ———
    h2("Quanti giorni servono a Firenze?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Il centro storico: zona del Duomo, Piazza della Signoria, Ponte Vecchio e un grande museo", "Bisogna scegliere tra Uffizi e Accademia; poco tempo per l'Oltrarno e la tavola"],
        ["2 giorni", "Il nucleo della visita: complesso del Duomo, Uffizi o Accademia, Oltrarno e un belvedere", "Serve ancora selezionare; un museo al giorno è un buon ritmo"],
        ["3 giorni", "I luoghi principali più un'esplorazione più lenta: mercati, quartieri, Palazzo Pitti e Boboli, pasti senza fretta", "Di solito la durata più equilibrata per una prima visita"],
        ["4–5 giorni", "Firenze con calma, più una o due gite in Toscana", "Ha senso per chi ama i musei o vuole usare Firenze come base"],
      ],
      "Quanto fermarsi a Firenze"
    ),
    p("La durata giusta dipende soprattutto dal numero di musei. Le grandi collezioni fiorentine sono impegnative: due musei importanti nello stesso giorno stancano quasi chiunque. In un viaggio di una settimana con Roma e Venezia, due notti sono la scelta più comune; se nel programma c'è anche la Toscana, tre o quattro notti a Firenze danno una base comoda."),

    // ——— 3 ———
    h2("Cosa vedere a Firenze"),
    p("Questi sono i luoghi che chi visita Firenze la prima volta mette di solito in cima alla lista. Prezzi e orari cambiano, per questo non li riportiamo: prima di andare, controlla il sito ufficiale indicato per ciascuno."),
    {
      type: "image",
      src: `${IMG}/santa-maria-del-fiore-facade-campanile.webp`,
      alt: "La facciata in marmo del Duomo di Firenze con il Campanile di Giotto accanto, sotto un cielo azzurro",
      caption: "Santa Maria del Fiore e il Campanile di Giotto. L'ingresso in Cattedrale è gratuito; Cupola, Campanile, Battistero e Museo richiedono un pass.",
      credit: unsplash("Nicola Pavan", "pavan_nicola"),
    },
    h3("Il Duomo: la Cattedrale e Piazza del Duomo"),
    p("Santa Maria del Fiore, con la facciata in marmi bianchi, verdi e rosa, è il cuore della città. Secondo l'Opera di Santa Maria del Fiore, che gestisce il complesso, l'ingresso nella **Cattedrale** è gratuito, mentre per gli altri monumenti della piazza serve un pass. Nei periodi di punta la coda per entrare in Cattedrale può essere lunga. Calcola 30–45 minuti all'interno, di più se vuoi osservare con calma il Giudizio Universale affrescato nella cupola."),
    h3("La Cupola del Brunelleschi"),
    p("Salire all'interno della cupola è una delle esperienze che definiscono Firenze: si passa tra le due calotte e vicino agli affreschi prima di arrivare alla lanterna. L'Opera indica **463 gradini, senza ascensore**, e la **prenotazione della fascia oraria è obbligatoria**: senza, non si sale, anche con un pass valido. La salita è inclusa solo nel Brunelleschi Pass. Calcola circa un'ora, code comprese. Non è adatta a chi soffre le scale strette o le altezze."),
    h3("Il Campanile di Giotto"),
    p("Il campanile offre ciò che la salita alla cupola non può offrire: la vista della cupola stessa. L'Opera indica **414 gradini, anche qui senza ascensore**, con fascia oraria prenotata tramite il Giotto Pass. Se devi scegliere una sola salita: la cupola per l'esperienza della struttura, il campanile per la vista sulla cupola."),
    h3("Il Battistero e il Museo dell'Opera del Duomo"),
    p("Il Battistero di San Giovanni, a pianta ottagonale, è celebre per le porte in bronzo dorato e per il soffitto a mosaico. Le porte oggi in facciata sono copie: gli originali, compresa la «Porta del Paradiso» del Ghiberti, sono al **Museo dell'Opera del Duomo**, insieme alle sculture della Cattedrale e alla Pietà Bandini di Michelangelo. Il museo è spesso meno affollato delle salite ed è una delle visite più ricche del complesso per chi ama l'arte. Calcola da un'ora a un'ora e mezza."),
    table(
      ["Pass (Opera di Santa Maria del Fiore)", "Comprende", "Fascia oraria prenotata per"],
      [
        ["Brunelleschi Pass", "Cupola, Campanile, Battistero, Museo, Santa Reparata", "La salita alla Cupola"],
        ["Giotto Pass", "Campanile, Battistero, Museo, Santa Reparata", "La salita al Campanile"],
        ["Ghiberti Pass", "Battistero, Museo, Santa Reparata", "Santa Reparata"],
      ],
      "I pass del Duomo, secondo il sito ufficiale dell'Opera"
    ),
    p("Secondo l'Opera, i pass valgono tre giorni di calendario dalla data scelta, con un solo ingresso per monumento, e vanno acquistati esclusivamente sul sito ufficiale, [tickets.duomo.firenze.it](https://tickets.duomo.firenze.it/)."),
    h3("Le Gallerie degli Uffizi"),
    p("Gli Uffizi custodiscono una delle più grandi raccolte di pittura italiana al mondo: la Nascita di Venere e la Primavera di Botticelli, Leonardo, Raffaello, Tiziano, Caravaggio. Il museo è vasto: calcola almeno due o tre ore e decidi prima quali sale ti interessano di più. I biglietti si acquistano sul sito ufficiale; le Gallerie degli Uffizi gestiscono anche Palazzo Pitti e il Giardino di Boboli e propongono un biglietto cumulativo per i tre siti. Nei periodi di maggiore affluenza è molto consigliabile prenotare la fascia oraria."),
    {
      type: "image",
      src: `${IMG}/uffizi-courtyard-arno.webp`,
      alt: "Il lungo piazzale degli Uffizi a Firenze, tra i porticati, con l'apertura verso l'Arno",
      caption: "Il piazzale degli Uffizi, verso l'Arno.",
      credit: unsplash("Matteo Lezzi", "matteo_lezzi"),
    },
    h3("La Galleria dell'Accademia"),
    p("Quasi tutti vengono all'Accademia per un'opera sola: il **David** di Michelangelo. La galleria conserva anche i Prigioni incompiuti, in cui le figure sembrano emergere dal marmo, oltre a una raccolta di pittura fiorentina e di strumenti musicali. È più piccola degli Uffizi — per molti un'ora è sufficiente — ma è tra i musei più prenotati d'Italia: conviene riservare dalla pagina ufficiale dei biglietti della Galleria, che utilizza il sistema di prenotazione autorizzato dal Ministero della Cultura."),
    h3("Piazza della Signoria e Palazzo Vecchio"),
    p("Da secoli Piazza della Signoria è il centro politico di Firenze. Intorno ci sono Palazzo Vecchio, la Loggia dei Lanzi con le sue sculture all'aperto, la Fontana del Nettuno e la copia del David nel punto in cui si trovava l'originale. La piazza è sempre accessibile e gratuita. **Palazzo Vecchio**, ancora oggi sede del Comune, ospita un museo con le grandi sale medicee, tra cui il Salone dei Cinquecento; calcola una o due ore. Lo gestisce la fondazione MUS.E, ed è una buona scelta per chi si interessa di storia fiorentina, non solo di pittura."),
    {
      type: "image",
      src: `${IMG}/piazza-della-signoria-neptune-fountain.webp`,
      alt: "La Fontana del Nettuno in Piazza della Signoria, a Firenze, con i palazzi storici sullo sfondo",
      caption: "La Fontana del Nettuno in Piazza della Signoria, visibile a ogni ora del giorno.",
      credit: unsplash("Jean Giroux", "jgiroux"),
    },
    h3("Ponte Vecchio"),
    p("Unico ponte fiorentino sopravvissuto alla Seconda guerra mondiale, il Ponte Vecchio è fiancheggiato dalle botteghe degli orafi e sormontato dal Corridoio Vasariano. Attraversarlo è gratuito e richiede pochi minuti, ma per gran parte della giornata è affollato: la vista migliore è dal vicino Ponte Santa Trinita o dai lungarni, e la mattina presto è il momento più tranquillo per percorrerlo."),
    {
      type: "image",
      src: `${IMG}/ponte-vecchio-arno.webp`,
      alt: "Il Ponte Vecchio di Firenze, con le botteghe costruite sul ponte, riflesso nell'Arno",
      caption: "Il Ponte Vecchio sull'Arno. Spesso la vista dal ponte accanto è migliore di quella dal ponte stesso.",
      credit: unsplash("Ali Nuredini", "alinuredini"),
    },
    h3("La Basilica di Santa Croce"),
    p("Santa Croce è la grande chiesa francescana di Firenze: vi si trovano le tombe e i monumenti di Michelangelo, Galileo e Machiavelli, gli affreschi di Giotto nelle cappelle laterali e, nel chiostro, la Cappella de' Pazzi del Brunelleschi. È gestita dall'Opera di Santa Croce e la visita è a pagamento. Calcola un'ora, un'ora e mezza. Piace a chi si interessa di storia quanto di arte, e il quartiere intorno è vivace la sera."),
    h3("Palazzo Pitti e il Giardino di Boboli"),
    p("Oltre l'Arno, l'immenso Palazzo Pitti fu residenza dei granduchi medicei e poi della famiglia reale. Ospita diversi musei, tra cui la Galleria Palatina e gli Appartamenti reali. Alle sue spalle il **Giardino di Boboli** sale lungo la collina tra fontane, statue e scorci sulla città. Entrambi fanno parte delle Gallerie degli Uffizi. Pitti da solo può richiedere mezza giornata; il giardino una o due ore e scarpe comode. È una pausa ideale dai musei al chiuso, soprattutto per chi viaggia con bambini."),
    h3("Piazzale Michelangelo"),
    p("Dalla terrazza sulla collina a sud dell'Arno, con la copia in bronzo del David, si gode la veduta classica di Firenze: la cupola, la torre di Palazzo Vecchio, i ponti e le colline. È gratuito e sempre accessibile. Ci si arriva a piedi da San Niccolò, con una salita costante di dieci–venti minuti, oppure in autobus. Al tramonto è frequentatissimo; la mattina presto è più tranquillo. Poco più in alto, con una breve salita ripida, c'è la chiesa romanica di San Miniato al Monte."),
    h3("La Basilica di Santa Maria Novella"),
    p("Proprio accanto alla stazione, Santa Maria Novella è facile da trascurare — e non dovrebbe esserlo. La chiesa domenicana custodisce la Trinità di Masaccio e cappelle affrescate da Ghirlandaio e Filippino Lippi, con chiostri e museo. La visita è a pagamento e di solito meno affollata dei grandi musei. Calcola circa un'ora: è perfetta per il giorno d'arrivo o di partenza."),
    h3("San Lorenzo e il Mercato Centrale"),
    p("La zona di San Lorenzo unisce i monumenti medicei — la Basilica di San Lorenzo e le Cappelle Medicee — al commercio. Nell'edificio ottocentesco del **Mercato Centrale** c'è un mercato alimentare tradizionale al piano terra e, al primo piano, una grande area di ristorazione con banchi che vanno dal lampredotto alla pasta. Le bancarelle intorno vendono pelletteria e souvenir. È un posto pratico per un pranzo veloce e per vedere come fanno la spesa i fiorentini."),
    h3("L'Oltrarno"),
    p("«Di là d'Arno», come dicono i fiorentini, è la zona a sud del fiume: Palazzo Pitti, Santo Spirito, la Cappella Brancacci nella chiesa del Carmine e molte botteghe artigiane. È centralissima, ma ha un'aria più residenziale rispetto alla zona del Duomo. Merita almeno mezza giornata a piedi, possibilmente con una cena."),
    h3("Come scegliere le priorità"),
    p("La tabella è un aiuto pratico per organizzarsi, non una classifica: le priorità dipendono dai tuoi interessi. I tempi di visita sono indicativi e non comprendono le code."),
    table(
      ["Luogo", "Priorità per una prima visita", "Durata indicativa", "Prenotare?"],
      [
        ["Complesso del Duomo (Cattedrale, Cupola, Campanile, Battistero, Museo)", "Alta", "Mezza giornata per tutto; 30–45 minuti per la sola Cattedrale", "Sì per Cupola e Campanile (fasce orarie); la Cattedrale è gratuita"],
        ["Gallerie degli Uffizi", "Alta", "2–3 ore", "Molto consigliato, soprattutto nei periodi di punta"],
        ["Galleria dell'Accademia", "Alta", "Circa 1 ora", "Molto consigliato"],
        ["Ponte Vecchio", "Alta", "15–30 minuti", "No"],
        ["Piazzale Michelangelo", "Alta", "30–60 minuti più la salita", "No"],
        ["Piazza della Signoria", "Alta", "30 minuti", "No"],
        ["Palazzo Vecchio", "Media", "1–2 ore", "Utile nei periodi affollati"],
        ["Santa Croce", "Media", "Da 1 ora a 1 ora e mezza", "Utile nei periodi affollati"],
        ["Palazzo Pitti e Giardino di Boboli", "Media", "Da 2 ore a mezza giornata", "Utile in alta stagione"],
        ["Santa Maria Novella", "Media", "Circa 1 ora", "Di solito non necessario"],
        ["Mercato Centrale e San Lorenzo", "Facoltativa", "1 ora o un pasto", "No"],
        ["Passeggiata in Oltrarno", "Media", "Mezza giornata", "No"],
      ],
      "Priorità per organizzare una prima visita"
    ),

    // ——— 4 ———
    h2("Firenze in 1, 2, 3 o 4 giorni"),
    p("Questi schemi presuppongono un ritmo sostenibile: un grande museo al giorno, tempo per i pasti e qualche passeggiata senza meta. Scambia i musei in base ai tuoi interessi."),
    h3("Un giorno a Firenze"),
    ul(
      "**Mattina:** il complesso del Duomo — la Cattedrale e, se hai prenotato la fascia oraria, la Cupola o il Campanile.",
      "**Tarda mattinata:** l'Accademia per il David (prenotata), oppure gli Uffizi se ti interessa di più la pittura — non entrambi.",
      "**Pranzo:** qualcosa di semplice tra San Lorenzo e il Mercato Centrale.",
      "**Pomeriggio:** Piazza della Signoria e Ponte Vecchio, poi una passeggiata lungo l'Arno.",
      "**Sera:** Piazzale Michelangelo per la vista, poi cena a San Niccolò o in Oltrarno.",
    ),
    p("Un giorno funziona se sei di passaggio, ma costringe a scegliere: vedrai i luoghi simbolo, non i musei con calma."),
    h3("Due giorni a Firenze"),
    ul(
      "**Primo giorno:** il complesso del Duomo al mattino; nel pomeriggio Piazza della Signoria e Palazzo Vecchio o Ponte Vecchio; la sera a Santa Croce.",
      "**Secondo giorno:** Uffizi o Accademia al mattino; pranzo in Oltrarno; Palazzo Pitti o il Giardino di Boboli; tramonto a Piazzale Michelangelo.",
    ),
    h3("Tre giorni a Firenze"),
    ul(
      "**Primo giorno:** il complesso del Duomo e il Museo dell'Opera; San Lorenzo e il Mercato Centrale.",
      "**Secondo giorno:** gli Uffizi; il Ponte Vecchio; l'Oltrarno, Santo Spirito e cena di là d'Arno.",
      "**Terzo giorno:** l'Accademia di prima mattina; Santa Croce o Santa Maria Novella; Boboli o Piazzale Michelangelo nel tardo pomeriggio.",
    ),
    p("Con tre giorni resta tempo per sedersi in una piazza, tornare in un quartiere che è piaciuto e mangiare senza guardare l'orologio."),
    h3("Quattro giorni, con una gita"),
    p("Con un quarto giorno si aggiunge un'escursione: Siena, Pisa e Lucca sono le più semplici senza auto; il Chianti e San Gimignano sono più comodi con un tour o un autista. La sezione dedicata alle gite in giornata, più avanti, mette a confronto le opzioni."),

    // ——— 5 ———
    h2("Dove dormire a Firenze"),
    p("Firenze è compatta: quasi ovunque in centro si è a distanza pedonale da tutto. La scelta riguarda soprattutto atmosfera, rumore e quanto trascinare la valigia dalla stazione."),
    table(
      ["Zona", "Adatta a", "Vantaggi", "Da considerare"],
      [
        ["Duomo / centro storico", "Visite brevi", "Quasi tutto raggiungibile a piedi", "Strade più affollate; prezzi spesso più alti; alcune camere rumorose"],
        ["Santa Maria Novella", "Chi arriva e riparte in treno; gite in giornata", "Accanto a stazione, tramvia e autobus", "La zona della stazione è trafficata e meno suggestiva"],
        ["San Lorenzo", "Chi ama la cucina; budget medi", "Centrale, vicino al mercato e alla stazione", "Di giorno le bancarelle affollano le strade"],
        ["Santa Croce", "Atmosfera serale", "Centrale, con molti ristoranti e locali", "Alcune vie sono animate fino a tardi"],
        ["Oltrarno / Santo Spirito", "Soggiorni più lenti; chi torna a Firenze", "Aria più residenziale, artigiani, vita di piazza", "Un po' più lontano dalla stazione; Santo Spirito è vivace la sera"],
        ["San Niccolò", "Soggiorni tranquilli vicino al fiume", "Vie quiete ai piedi di Piazzale Michelangelo", "Meno strutture; più strada dalla stazione"],
      ],
      "Scegliere la zona in cui dormire"
    ),
    tip("Se arrivi con valigie grandi, controlla la distanza a piedi da Santa Maria Novella e se nell'edificio c'è l'ascensore. Molti palazzi storici ne sono privi, e il lastricato fiorentino mette alla prova le rotelle.", "Pensa ai bagagli"),
    p("Quasi tutte le strutture ricettive applicano l'imposta di soggiorno comunale, a persona e a notte, di solito da pagare in struttura: verifica l'importo al momento della prenotazione."),

    // ——— 6 ———
    h2("Come muoversi a Firenze"),
    h3("A piedi"),
    p("Il centro storico si scopre a piedi. Dalla stazione di Santa Maria Novella il Duomo è a circa dieci minuti, il Ponte Vecchio poco oltre. Servono scarpe comode: le strade sono lastricate, i marciapiedi stretti e nei musei si sta molto in piedi."),
    h3("Autobus e tramvia"),
    p("Gli autobus urbani sono gestiti da Autolinee Toscane, le due linee di tramvia da GEST: la **T1** collega Villa Costanza (Scandicci), Santa Maria Novella e l'ospedale di Careggi; la **T2** unisce l'aeroporto alla stazione e a Piazza San Marco. Il biglietto vale su autobus e tram e si acquista con l'app dell'operatore o nelle rivendite autorizzate; va convalidato o attivato a bordo. Alcune linee di autobus salgono fino a Piazzale Michelangelo."),
    h3("Taxi"),
    p("I taxi ufficiali si prendono ai posteggi, tra cui quelli della stazione e dell'aeroporto, o si prenotano per telefono o con un'app; fermarli per strada non è semplice. Sono utili con i bagagli, per gli arrivi a tarda sera e per raggiungere le colline."),
    h3("In bicicletta"),
    p("In città ci sono servizi di bike sharing e noleggio, anche di bici elettriche, e pedalare lungo il fiume può essere piacevole. In centro, però, tra vie strette e pedoni, spesso si va più veloci a piedi."),
    h3("In auto"),
    p("In città l'auto è più un peso che un aiuto. Tutto il centro storico è una **ZTL** controllata da telecamere, e l'accesso senza autorizzazione comporta una multa — che con l'auto a noleggio arriva spesso mesi dopo. Secondo il sito della mobilità del Comune, i settori centrali sono attivi di giorno nei feriali e il sabato, con una ZTL notturna estiva in più: gli orari aggiornati sono sulla [pagina ufficiale delle ZTL](https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html). Se prosegui verso la Toscana, ritira l'auto quando lasci la città. Come funzionano le ZTL lo spieghiamo nella guida su come [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 7 ———
    h2("Arrivare a Firenze in treno"),
    p("Quasi tutti arrivano a **Firenze Santa Maria Novella**, la stazione principale, ai margini del centro storico. Qui fermano sia i Frecciarossa di Trenitalia sia i treni Italo, oltre ai regionali per la Toscana. Alcuni treni usano altre stazioni cittadine, come Campo di Marte o Rifredi: controlla quella indicata sul biglietto."),
    table(
      ["Da", "Come", "Tempo più rapido (circa)"],
      [
        ["Roma", "Alta velocità (Trenitalia o Italo)", "1 ora e mezza"],
        ["Milano", "Alta velocità", "1 ora e 45 – 2 ore"],
        ["Venezia", "Alta velocità", "2 ore"],
        ["Bologna", "Alta velocità; i regionali sono molto più lenti", "35–40 minuti"],
        ["Pisa, Lucca, Arezzo e altri centri toscani", "Treni regionali", "Varia secondo linea e treno"],
      ],
      "Collegamenti ferroviari con Firenze (collegamenti diretti più rapidi; molti treni impiegano di più)"
    ),
    p("Dato che da Santa Maria Novella si raggiunge il centro a piedi, il treno è di solito il modo più pratico per arrivare a Firenze da altre città. I tempi sono quelli, approssimativi, dei collegamenti più rapidi secondo gli orari degli operatori a settembre 2026: controlla il treno che stai prenotando. Per biglietti, convalida e stazioni leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 8 ———
    h2("Dall'aeroporto al centro di Firenze"),
    p("L'Aeroporto di Firenze (Amerigo Vespucci, per molti semplicemente Peretola) si trova a circa quattro chilometri a nord-ovest del centro e serve soprattutto voli europei. Molti viaggiatori intercontinentali atterrano a Roma, Milano o Pisa e proseguono in treno."),
    ul(
      "**Tramvia T2** — la soluzione pubblica più semplice. La fermata è accanto al terminal e la linea passa per la zona della stazione (Unità e Valfonda–Stazione SMN) fino a Piazza San Marco. Il biglietto si compra prima di salire, alle emettitrici o con l'app dell'operatore.",
      "**Taxi** — dal posteggio ufficiale fuori dagli arrivi. Le condizioni aggiornate delle tariffe per il centro sono sulla pagina taxi dell'aeroporto.",
      "**Transfer privato** — da valutare se atterri a tarda sera, viaggi con bambini piccoli o molte valigie, o dormi in una zona scomoda da raggiungere in tram.",
      "**Dall'aeroporto di Pisa** — la navetta PisaMover collega l'aeroporto a Pisa Centrale, da cui partono i regionali per Firenze.",
    ),
    p("Per gli altri aeroporti italiani c'è la nostra guida sui [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia)."),

    // ——— 9 ———
    h2("Musei e biglietti"),
    p("I luoghi più visitati di Firenze funzionano con ingressi a orario, e nei giorni di punta i più richiesti si esauriscono. Qualche regola semplice aiuta."),
    {
      type: "compare",
      title: "Conviene prenotare?",
      columns: [
        {
          title: "Meglio prenotare se",
          items: [
            "visiti Uffizi, Accademia o le salite al Duomo in primavera, d'estate o nei festivi",
            "date e programma sono già definiti",
            "vuoi un orario preciso, come il primo ingresso della giornata",
            "sei a Firenze nel fine settimana, a Pasqua o durante un ponte",
          ],
        },
        {
          title: "C'è più margine se",
          items: [
            "viaggi nei mesi più tranquilli, come novembre o gennaio",
            "punti su luoghi all'aperto, chiese e quartieri",
            "preferisci tenere il programma aperto",
            "visiti musei più piccoli",
          ],
        },
      ],
    },
    h3("Canali ufficiali e rivenditori"),
    p("Acquista dai siti ufficiali: [Gallerie degli Uffizi](https://www.uffizi.it/biglietti) (anche per Palazzo Pitti e Boboli), [Galleria dell'Accademia](https://www.galleriaaccademiafirenze.it/biglietti/) e [Opera di Santa Maria del Fiore](https://tickets.duomo.firenze.it/) per il Duomo. Molti siti di terze parti rivendono gli stessi ingressi a prezzi più alti, e alcuni sembrano ufficiali. Controlla bene l'indirizzo web e diffida dei siti che non si presentano chiaramente come rivenditori."),
    important("Con i biglietti a orario, di solito si entra all'inizio della fascia prenotata. Per le salite al Duomo l'Opera specifica che l'ingresso va fatto all'inizio della fascia scelta. Arriva con anticipo: le code per i controlli di sicurezza possono essere lunghe.", "Rispetta l'orario"),
    h3("La Firenzecard"),
    p("La [Firenzecard](https://www.firenzecard.it/) è il pass museale ufficiale della città. Secondo il sito, vale 72 ore dal primo utilizzo, consente un ingresso in ciascun museo aderente e comprende le prenotazioni. Conviene o meno a seconda di quanti musei visiterai in tre giorni: confronta il prezzo attuale con i biglietti che ti servono davvero."),

    // ——— 10 ———
    h2("Cosa mangiare a Firenze"),
    p("La cucina fiorentina è essenziale nel senso migliore: pane sciapo, olio, legumi, carne alla brace e verdure di stagione. Si mangia meglio ordinando ciò per cui la città è nota, più che piatti di altre regioni."),
    ul(
      "**Bistecca alla fiorentina** — un taglio alto con l'osso a T, alla brace e al sangue, di solito da dividere. Spesso il prezzo è indicato a peso: controlla il menu prima di ordinare.",
      "**Ribollita** — zuppa densa di pane, fagioli e cavolo nero, piatto della stagione fredda.",
      "**Pappa al pomodoro** — pane e pomodoro, d'estate servita tiepida o a temperatura ambiente.",
      "**Lampredotto** — il quarto stomaco del bovino, cotto a lungo e servito nel panino, tradizionalmente ai chioschi dei trippai. Non è per tutti, ma è un'istituzione fiorentina.",
      "**Schiacciata** — la focaccia toscana, spesso farcita come panino: uno dei pranzi più semplici in città.",
      "**Cantucci** — biscotti secchi alle mandorle, da intingere nel vin santo.",
      "**Gelato** — ovunque.",
      "**Vino toscano** — il Chianti Classico si produce tra Firenze e Siena; Brunello di Montalcino e Vino Nobile di Montepulciano arrivano dalla Toscana meridionale.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-deli-counter.webp`,
      alt: "Clienti davanti al banco di una salumeria in un mercato di Firenze, con prosciutti, salumi e formaggi appesi",
      caption: "Un banco di salumi in un mercato fiorentino. I mercati sono ideali per un pranzo veloce e per capire che cosa offre la stagione.",
      credit: unsplash("Tushar Agarwal", "tagag"),
    },
    p("Qualche indicazione pratica: molti ristoranti applicano il coperto; il pranzo inizia di solito verso le 12:30 e la cena dalle 19:30; nei locali più frequentati conviene prenotare, soprattutto nel fine settimana. I ristoranti a ridosso dei monumenti più visitati tendono a lavorare con chi passa: allontanarsi di qualche strada di solito aiuta. Sulle abitudini della tavola italiana leggi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 11 ———
    h2("I quartieri di Firenze"),
    table(
      ["Zona", "Carattere", "Ideale per"],
      [
        ["Centro storico (Duomo, Signoria)", "Il cuore monumentale: cattedrale, piazze, vie dello shopping", "La prima visita"],
        ["Santa Maria Novella", "Intorno alla stazione e alla basilica; trafficata e pratica", "Treni, giorni di arrivo e partenza"],
        ["San Lorenzo", "Mercati, monumenti medicei, vie animate", "Cibo, acquisti, pranzi informali"],
        ["Santa Croce", "Vie storiche intorno alla basilica, molti ristoranti", "Le serate"],
        ["Oltrarno", "A sud del fiume: botteghe artigiane, palazzi, vie più quiete", "Esplorare con calma"],
        ["Santo Spirito", "Una piazza vivace, con caffè e ristoranti", "Uscire la sera"],
        ["San Niccolò", "Vie lungo il fiume ai piedi della salita per Piazzale Michelangelo", "Soggiorni tranquilli e passeggiate al tramonto"],
      ],
      "I quartieri del centro in sintesi"
    ),
    p("Passare da una zona all'altra fa parte del piacere. Un buon modo per sentire la differenza è attraversare il Ponte Santa Trinita verso l'Oltrarno e camminare fino a Santo Spirito e San Frediano."),

    // ——— 12 ———
    h2("Gite in giornata da Firenze"),
    p("Firenze è al centro della Toscana, e alcune delle città più amate d'Italia sono a portata di gita. Conviene scegliere pensando anche a come ci si vuole spostare, non solo alla meta."),
    table(
      ["Meta", "Difficoltà organizzativa", "Ideale per", "Come arrivare di solito"],
      [
        ["Siena", "Bassa o media", "La città medievale, Piazza del Campo e il Duomo", "Autobus o treno; la stazione è in basso rispetto al centro murato, quindi l'autobus può essere più comodo"],
        ["Pisa", "Bassa", "La Torre pendente e Piazza dei Miracoli", "Treno regionale fino a Pisa Centrale, poi a piedi o in autobus"],
        ["Lucca", "Bassa", "Le mura da percorrere a piedi o in bici, le chiese, un ritmo rilassato", "Treno regionale; la stazione è appena fuori dalle mura"],
        ["Chianti", "Media o alta", "Cantine, borghi e campagna", "Tour organizzato, autista privato o auto a noleggio — chi guida non può bere"],
        ["San Gimignano", "Media", "Il borgo delle torri medievali", "Treno e autobus via Poggibonsi, tour organizzato o auto"],
        ["Bologna", "Bassa", "Cucina, portici e un'altra atmosfera cittadina", "Alta velocità"],
      ],
      "Gite in giornata da Firenze"
    ),
    {
      type: "image",
      src: `${IMG}/siena-piazza-del-campo.webp`,
      alt: "Piazza del Campo a Siena con il Palazzo Pubblico e la Torre del Mangia",
      caption: "Piazza del Campo a Siena, una delle gite più semplici da Firenze.",
      credit: unsplash("tommao wang", "tommaomaoer"),
    },
    p("Per le zone del vino, vedi [I vini regionali italiani](/it/cibo/vini-regionali-italiani); i paesaggi della Toscana meridionale, come la Val d'Orcia, meritano almeno una notte più che una gita. Se pensi di guidare, leggi prima come [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 13 ———
    h2("Quando andare a Firenze"),
    p("Firenze è affollata per buona parte dell'anno, e ogni stagione ha i suoi compromessi. Secondo le medie di lungo periodo della stazione di Firenze Peretola (Aeronautica Militare, 1971–2000), a luglio si va in media da circa 18 a 31 °C e a gennaio da circa 2 a 11 °C, con ottobre e novembre come mesi più piovosi. Le estati recenti sono state spesso più calde di queste medie."),
    ul(
      "**Primavera (aprile–giugno)** — clima ideale per camminare e colline verdi intorno alla città, ma anche alcune delle settimane più affollate, tra Pasqua e gite scolastiche: prenota presto i musei.",
      "**Estate (luglio–agosto)** — giornate lunghe e città vivace, ma il caldo rende faticose le visite nelle ore centrali. Musei a metà giornata, passeggiate al mattino e alla sera.",
      "**Autunno (settembre–ottobre)** — spesso il periodo più equilibrato, con la vendemmia nelle campagne intorno. Verso fine stagione le piogge aumentano.",
      "**Inverno (novembre–febbraio)** — musei più tranquilli e più disponibilità, feste escluse. Le giornate sono corte: meglio lasciare le visite al chiuso per il pomeriggio.",
    ),
    p("Contano anche le date locali: a Pasqua si svolge lo Scoppio del Carro davanti al Duomo, e il 24 giugno, San Giovanni, è festa cittadina. Per confrontare Firenze con il resto d'Italia stagione per stagione, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),
    {
      type: "image",
      src: `${IMG}/florence-skyline-piazzale-michelangelo.webp`,
      alt: "Veduta di Firenze da Piazzale Michelangelo, con l'Arno, la cupola del Duomo e le colline sullo sfondo",
      caption: "La vista da Piazzale Michelangelo. La mattina presto è più tranquilla del tramonto.",
      credit: unsplash("Tom Podmore", "tompodmore86"),
      wide: true,
    },

    // ——— 14 ———
    h2("Firenze per ogni tipo di viaggiatore"),
    h3("Alla prima visita"),
    p("Un grande museo al giorno, prenotazione solo per i pochi ingressi a orario che contano davvero, pomeriggi flessibili. Duomo, Ponte Vecchio e la vista da Piazzale Michelangelo lasciano un'impressione forte senza sfinire."),
    h3("In coppia"),
    p("L'Oltrarno o San Niccolò per serate più quiete, una passeggiata verso Piazzale Michelangelo o San Miniato a fine giornata, e magari una notte in campagna, nel Chianti o nella Toscana del sud."),
    h3("Con la famiglia"),
    p("Alterna musei e spazi aperti: il Giardino di Boboli, i lungarni e, per i ragazzi più grandi, le salite alla Cupola o al Campanile (verifica prima i gradini). Visite brevi e prenotate, per non fare la fila con bambini stanchi. Il museo di Palazzo Vecchio organizza attività per famiglie tramite la sua fondazione."),
    h3("Da soli"),
    p("Firenze è compatta e facile da girare a piedi, con molti posti informali dove mangiare da soli, dai banchi del mercato alle schiacciaterie. Tour a piedi di gruppo e corsi di cucina sono un modo semplice per conoscere altre persone."),
    h3("Per chi preferisce un ritmo tranquillo"),
    p("Scegli un alloggio vicino alla stazione o al centro per ridurre gli spostamenti, preferibilmente con ascensore, e prenota gli ingressi a orario per evitare lunghe attese in piedi. Le salite alla Cupola e al Campanile sono faticose; a Piazzale Michelangelo si arriva anche in autobus o in taxi."),
    h3("Per chi ama l'arte"),
    p("Dedica agli Uffizi una mattinata intera, aggiungi il Museo dell'Opera del Duomo, il Bargello per la scultura, la Cappella Brancacci e Santa Maria Novella, e valuta se la Firenzecard conviene per la tua lista."),
    h3("Per chi viaggia per la tavola"),
    p("Dormi vicino a San Lorenzo o Santa Croce, passa del tempo nei mercati, prova lampredotto e schiacciata a pranzo e organizza una giornata nel Chianti. L'autunno è la stagione più ricca nelle campagne intorno."),
    h3("Con un budget contenuto"),
    p("A Firenze molto è gratuito: le piazze, l'esterno del complesso del Duomo, la Cattedrale, il Ponte Vecchio, Piazzale Michelangelo. Evita le settimane di punta, dormi un po' più lontano dal Duomo, fai del pranzo il pasto principale e verifica le giornate di ingresso gratuito dei singoli musei."),
    h3("Firenze e la Toscana insieme"),
    p("Vivi Firenze senza auto e ritirala solo quando parti per la campagna — oppure usa la città come base per gite in treno e autobus a Siena, Pisa e Lucca. La Toscana del sud si gode meglio con un pernottamento che con una gita in giornata."),

    // ——— 15 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Voler vedere tutto in un giorno.** Firenze premia la calma: scegli un grande museo.",
      "**Non prenotare i musei principali quando serve.** Accademia, Uffizi e salite al Duomo possono esaurirsi nei periodi di punta.",
      "**Sottovalutare distanze e tempi.** Anche i tragitti brevi significano folla, code e controlli.",
      "**Non capire come funziona la ZTL.** Entrare in auto in centro senza autorizzazione costa una multa.",
      "**Scegliere l'alloggio senza pensare alla stazione.** Con bagagli pesanti, una lunga camminata sul lastricato si sente.",
      "**Riempire troppo il programma.** Due grandi musei nello stesso giorno stancano quasi chiunque.",
      "**Affidarsi a siti di biglietti non ufficiali.** Verifica di essere sul sito del museo.",
      "**Dimenticare l'ingresso a orario.** Alcuni luoghi non fanno entrare chi perde la propria fascia.",
      "**Vedere Firenze solo in giornata.** È la sera che la città mostra il suo lato più autentico.",
      "**Non lasciare tempo ai quartieri e alla tavola.** Oltrarno e mercati fanno parte della visita.",
    ),

    // ——— 16 ———
    h2("Checklist per organizzare il viaggio"),
    p("Spunta le voci man mano che ti organizzi."),
    {
      type: "checklist",
      id: "firenze-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Decidi quanti giorni fermarti", "Scegli la zona in cui dormire", "Valuta se fare gite in giornata", "Scegli come arrivare: treno o aereo"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota i musei che ti interessano", "Prenota le fasce orarie per le salite al Duomo", "Conferma treni o trasferimento dall'aeroporto", "Verifica gli orari di apertura aggiornati", "Controlla le condizioni di cancellazione"],
        },
        {
          title: "Prima di ogni giornata di visite",
          items: ["Controlla gli orari delle prenotazioni", "Pianifica un percorso a piedi realistico", "Lascia tempo per pasti e pause", "Controlla il meteo e vestiti di conseguenza"],
        },
      ],
    },
    p("Sistemi di prenotazione, pass e collegamenti citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Prezzi e orari cambiano: controllali sui siti ufficiali prima di partire."),
  ],

  faqs: [
    { question: "Quanti giorni servono per visitare Firenze?", answer: "Per una prima visita di solito due o tre giorni: abbastanza per il Duomo, uno o due grandi musei, l'Oltrarno e un belvedere senza correre. Un giorno basta per i luoghi simbolo; con quattro o più si aggiunge una gita in Toscana." },
    { question: "Firenze si gira bene a piedi?", answer: "Sì. Il centro storico è compatto e quasi pianeggiante, e i luoghi principali sono a una ventina di minuti a piedi l'uno dall'altro. Piazzale Michelangelo è in salita; per le distanze più lunghe ci sono autobus e taxi." },
    { question: "Cosa vedere per primo a Firenze?", answer: "Di solito si comincia dal complesso del Duomo e da Piazza della Signoria, poi il Ponte Vecchio. Prenota gli Uffizi o l'Accademia per una mattina e tieni Piazzale Michelangelo per la fine della giornata." },
    { question: "Bisogna prenotare gli Uffizi in anticipo?", answer: "È molto consigliabile in primavera, d'estate, nei fine settimana e nei festivi, quando le fasce orarie possono esaurirsi. Prenota sul sito ufficiale delle Gallerie degli Uffizi; nei mesi più tranquilli si trova spesso disponibilità anche a ridosso della data." },
    { question: "Bisogna prenotare il Duomo?", answer: "L'ingresso in Cattedrale è gratuito e non si prenota. Le salite alla Cupola e al Campanile richiedono un pass con fascia oraria prenotata, da acquistare sul sito ufficiale dell'Opera di Santa Maria del Fiore." },
    { question: "Firenze è adatta a un primo viaggio in Italia?", answer: "Sì, se ti interessano arte, architettura e cucina. È compatta, facile da raggiungere in alta velocità da Roma, Milano, Venezia e Bologna, e si abbina bene a Roma e Venezia in un primo itinerario." },
    { question: "Dove conviene dormire a Firenze la prima volta?", answer: "Per una visita breve la zona più comoda è il centro storico intorno al Duomo. Santa Maria Novella è pratica per chi viaggia in treno, San Lorenzo è centrale e comoda, mentre Oltrarno e San Niccolò sono adatte a chi preferisce un'atmosfera più tranquilla." },
    { question: "Si può visitare Firenze senza auto?", answer: "Sì, ed è più semplice. Il centro storico è una zona a traffico limitato controllata da telecamere e i parcheggi sono pochi. Si arriva in treno, ci si muove a piedi e si noleggia l'auto solo per partire verso la campagna." },
    { question: "Come si arriva dall'aeroporto di Firenze al centro?", answer: "La tramvia T2 collega l'aeroporto alla zona della stazione di Santa Maria Novella e prosegue fino a Piazza San Marco. I taxi sono al posteggio ufficiale fuori dagli arrivi; un transfer privato è utile con molti bagagli o arrivi a tarda sera." },
    { question: "Firenze è cara?", answer: "Può esserlo, soprattutto per dormire in centro in alta stagione, e si paga l'imposta di soggiorno. I costi calano fuori dalle settimane di punta, e molti luoghi — piazze, la Cattedrale, il Ponte Vecchio, Piazzale Michelangelo — sono gratuiti." },
    { question: "Firenze va bene per un fine settimana?", answer: "Sì. In un weekend si vedono il Duomo, un grande museo, il Ponte Vecchio, l'Oltrarno e un belvedere. Prenota i musei in anticipo, perché i fine settimana sono tra i giorni più affollati." },
    { question: "Firenze è una buona base per visitare la Toscana?", answer: "Sì. Siena, Pisa, Lucca e Bologna si raggiungono facilmente in treno o in autobus, e con i tour si arriva nel Chianti e a San Gimignano. Per la Toscana del sud, come la Val d'Orcia, è meglio pernottare in zona." },
    { question: "Un giorno a Firenze è sufficiente?", answer: "Basta per i principali luoghi all'aperto e un museo, ma bisogna scegliere tra Uffizi e Accademia e rinunciare all'Oltrarno. Con due o tre giorni la visita è molto più piacevole." },
    { question: "Quali sono le gite migliori da Firenze?", answer: "Siena, Pisa e Lucca sono le più semplici con i mezzi pubblici; il Chianti e San Gimignano sono più comodi con un tour, un autista o l'auto. Bologna è a un breve viaggio in alta velocità." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Feel Florence — sito ufficiale del turismo del Comune di Firenze", url: "https://www.feelflorence.it/it", note: "informazioni ed eventi" },
    { label: "Opera di Santa Maria del Fiore — Organizza la tua visita", url: "https://duomo.firenze.it/it/visita/organizza-la-tua-visita", note: "pass e fasce orarie del Duomo" },
    { label: "Opera di Santa Maria del Fiore — biglietti ufficiali", url: "https://tickets.duomo.firenze.it/", note: "vendita dei pass" },
    { label: "Gallerie degli Uffizi — biglietti", url: "https://www.uffizi.it/biglietti", note: "Uffizi, Palazzo Pitti e Giardino di Boboli" },
    { label: "Galleria dell'Accademia di Firenze — biglietti", url: "https://www.galleriaaccademiafirenze.it/biglietti/", note: "prenotazione ufficiale" },
    { label: "MUS.E — Museo di Palazzo Vecchio", url: "https://www.musefirenze.it/musei/palazzo-vecchio/", note: "Palazzo Vecchio" },
    { label: "Opera di Santa Croce", url: "https://www.santacroceopera.it/", note: "visite a Santa Croce" },
    { label: "Santa Maria Novella", url: "https://www.smn.it/", note: "visite alla basilica" },
    { label: "Firenzecard", url: "https://www.firenzecard.it/", note: "pass museale ufficiale" },
    { label: "Autolinee Toscane — tramvia T2", url: "https://www.at-bus.it/it/linee-e-orari/firenze-urbano-t2", note: "percorso della tramvia per l'aeroporto" },
    { label: "Aeroporto di Firenze — trasporti", url: "https://www.aeroporto.firenze.it/it/i-passeggeri/trasporti/tramvia.html", note: "tramvia, taxi e autobus" },
    { label: "Comune di Firenze — ZTL", url: "https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html", note: "orari della zona a traffico limitato" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/it.html", note: "orari e biglietti" },
    { label: "Italo", url: "https://www.italotreno.com/it", note: "alta velocità" },
  ],
};
