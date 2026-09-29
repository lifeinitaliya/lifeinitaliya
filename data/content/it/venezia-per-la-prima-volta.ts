import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana della guida a Venezia, scritta per chi legge in italiano.
// Regole di prenotazione, collegamenti con l'aeroporto, dati sull'accessibilità,
// contributo di accesso e date degli eventi sono stati verificati sui siti
// ufficiali a settembre 2026. Prezzi, tariffe e orari non vengono citati
// perché cambiano.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/venice-quieter-neighbourhoods";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const veneziaPerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Venezia non funziona come le altre città italiane. Non ci sono auto, le strade sono calli e ponti, gli autobus sono barche, e il posto in cui dormi cambia tutto il viaggio. Alla prima visita quasi tutti restano sull'asse che va dalla stazione a Rialto e piazza San Marco, il tratto più affollato della città. In questa guida partiamo da lì, per poi spingerci nei sestieri, nei musei e nelle isole della laguna che danno a Venezia la sua profondità."),
    answer("Per una prima visita a Venezia bastano **due o tre giorni**: il tempo per la Basilica di San Marco, Palazzo Ducale e Rialto, uno o due musei, un sestiere più tranquillo e magari un'isola. Il centro storico è **senza auto**: ci si muove **a piedi e sull'acqua**, con il vaporetto per i tragitti più lunghi e le proprie gambe per tutto il resto. Per questo **dove dormi** conta più che altrove: ogni ponte, ogni scalino e ogni corsa in più si sommano, soprattutto con i bagagli. Se puoi, dormi in centro storico e goditi Venezia la mattina presto e la sera, quando i visitatori in giornata se ne sono andati."),
    {
      type: "facts",
      title: "Venezia in sintesi",
      rows: [
        { label: "Durata consigliata per la prima visita", value: "2–3 giorni" },
        { label: "Ideale per", value: "Arte, architettura, storia, cucina e atmosfera" },
        { label: "Stazione di arrivo", value: "Venezia Santa Lucia — non Venezia Mestre, che è in terraferma" },
        { label: "Aeroporto principale", value: "Venezia Marco Polo (Tessera), in terraferma" },
        { label: "Come muoversi", value: "A piedi e con i vaporetti ACTV" },
        { label: "Serve l'auto?", value: "No: le auto si fermano a Piazzale Roma e al Tronchetto" },
        { label: "Da prenotare prima", value: "Alloggio, Basilica di San Marco e Palazzo Ducale" },
        { label: "Isole più visitate", value: "Murano, Burano e Torcello; poi Lido e Giudecca" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/venice-grand-canal-salute-accademia.webp`,
      alt: "Il Canal Grande visto dal ponte dell'Accademia al tramonto, con le cupole della Salute sullo sfondo",
      caption: "Il Canal Grande dal ponte dell'Accademia, verso Santa Maria della Salute.",
      credit: unsplash("Henrique Ferreira", "rickpsd"),
      wide: true,
    },

    // ——— 1 ———
    h2("Vale la pena visitare Venezia?"),
    p("Sì, a patto di farlo con calma. Venezia è stata per oltre mille anni la capitale di una repubblica marinara, e si vede ancora: i mosaici bizantini di San Marco, il gotico di Palazzo Ducale, la pittura di Bellini, Tiziano, Tintoretto e Veronese, i palazzi affacciati su un canale che fa da strada principale. Venezia e la sua laguna sono Patrimonio dell'Umanità UNESCO."),
    p("È anche una città affollata, soprattutto a San Marco e a Rialto nelle ore centrali, e una città vera, con un numero di residenti in calo e una forte pressione turistica. In pratica: fermati almeno una notte, esci dall'asse principale, visita i luoghi più famosi presto o tardi e rispetta le regole della città. Chi lo fa trova una Venezia più tranquilla e varia di quella della gita in giornata."),

    // ——— 2 ———
    h2("Quanti giorni servono a Venezia?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["In giornata", "Piazza San Marco, la Basilica o Palazzo Ducale, Rialto e una passeggiata", "Soprattutto le zone più affollate nelle ore più affollate; niente sera"],
        ["1 notte", "Si aggiungono la sera e la mattina presto, le ore più calme in centro", "Ancora poco tempo per musei e isole"],
        ["2 giorni", "I luoghi principali, un grande museo e un sestiere più tranquillo", "Le isole occuperebbero quasi un giorno intero"],
        ["3 giorni", "Si aggiungono Murano e Burano (o Torcello), altra arte e tempo libero", "Di solito l'equilibrio migliore alla prima visita"],
        ["4 giorni o più", "Ritmi lenti, Lido o Giudecca, oppure Padova o Verona", "Per soggiorni lunghi il centro storico pesa sul budget"],
      ],
      "Quanto fermarsi a Venezia"
    ),

    // ——— 3 ———
    h2("Cosa vedere alla prima visita"),
    p("I giorni di apertura cambiano e diversi musei chiudono un giorno alla settimana. Per ogni luogo indichiamo come inserirlo nella prima visita; prima di costruire una giornata intorno a un museo, controlla il sito ufficiale."),
    h3("Piazza San Marco"),
    p("È il grande spazio pubblico della città, chiuso dalle Procuratie, dalla Basilica, dal campanile e, verso l'acqua, da Palazzo Ducale. Dà il meglio la mattina presto o dopo il tramonto. È anche uno dei punti più bassi di Venezia, e con l'acqua alta è spesso il primo ad allagarsi."),
    {
      type: "image",
      src: `${IMG}/piazza-san-marco-campanile.webp`,
      alt: "Piazza San Marco a Venezia con il campanile in mattoni, le cupole della Basilica e i portici delle Procuratie sui due lati",
      caption: "Piazza San Marco con il campanile e la Basilica. Arrivare presto significa vederla prima della folla.",
      credit: unsplash("Claudio Schwarz", "purzlbaum"),
    },
    h3("La Basilica di San Marco"),
    p("La Basilica è la cattedrale di Venezia e il suo edificio più importante, rivestita all'interno di mosaici a fondo oro. Prima di tutto è un luogo di culto: le visite possono essere sospese per le funzioni, e la domenica e nei giorni festivi la Basilica apre ai visitatori solo il pomeriggio. I biglietti, con fascia oraria di ingresso, si acquistano sulla [biglietteria ufficiale](https://tickets.basilicasanmarco.it/it/); biglietti a parte valgono per la Pala d'Oro, il Museo con i cavalli di bronzo originali e il campanile."),
    p("Con il nuovo sistema introdotto dalla Procuratoria di San Marco, entro sei mesi il biglietto della Basilica permette di visitare anche la Basilica di Santa Maria Assunta a Torcello, la sacrestia della Salute e oltre 40 chiese della città. Calcola circa un'ora e, nei periodi affollati, prenota la fascia oraria in anticipo."),
    h3("Palazzo Ducale"),
    p("Palazzo Ducale era la sede del governo e dei tribunali della Repubblica. Nelle sue sale del potere si trovano alcune delle tele più grandi di Venezia, come il *Paradiso* di Tintoretto. Il biglietto ordinario, quello dei Musei di Piazza San Marco, comprende anche il Museo Correr, il Museo Archeologico Nazionale e le Sale monumentali della Biblioteca Marciana. Gli *Itinerari segreti*, visite guidate negli uffici nascosti e nelle prigioni, si prenotano a parte. Secondo il [sito del Palazzo](https://palazzoducale.visitmuve.it/), acquistando online con almeno 30 giorni di anticipo si risparmia. Calcola due o tre ore."),
    h3("Il Ponte dei Sospiri"),
    p("Il ponte chiuso in pietra bianca collega Palazzo Ducale alle Prigioni Nuove, sull'altra sponda del rio. Da fuori si vede dal ponte della Paglia, sulla riva; da dentro lo si attraversa durante la visita di Palazzo Ducale. Bastano pochi minuti, ma lì davanti c'è sempre gente."),
    h3("Il ponte e il mercato di Rialto"),
    p("Il ponte di Rialto, in pietra, fu completato alla fine del Cinquecento e per secoli rimase l'unico attraversamento stabile del Canal Grande. La zona intorno era il cuore commerciale di Venezia e ospita ancora il mercato: i banchi di frutta e verdura e la Pescheria, che lavora la mattina e di solito è chiusa la domenica e il lunedì. Vai presto per vederla in piena attività e prosegui a piedi verso San Polo."),
    {
      type: "image",
      src: `${IMG}/rialto-bridge-grand-canal.webp`,
      alt: "Il ponte di Rialto a Venezia, un unico arco in pietra sul Canal Grande, con barche e palazzi lungo l'acqua",
      caption: "Il ponte di Rialto. Il mercato è a pochi passi, sul lato di San Polo.",
      credit: unsplash("Claudio Schwarz", "purzlbaum"),
    },
    h3("Il Canal Grande"),
    p("Il Canal Grande attraversa la città con un'ampia curva di circa 4 chilometri, tra palazzi di epoche diverse. Il modo più semplice per vederlo è dal vaporetto: la linea 1 ferma a quasi tutti gli imbarcaderi, quindi è lenta ma perfetta per guardarsi intorno. Un percorso dalla stazione o da Piazzale Roma a San Marco è un ottimo primo giro in città."),
    h3("Le Gallerie dell'Accademia"),
    p("L'Accademia custodisce la più importante raccolta di pittura veneziana, dai polittici a fondo oro del Trecento al Settecento: *La Tempesta* di Giorgione, l'immenso *Convito in casa di Levi* di Veronese e opere di Bellini, Tiziano e Tintoretto. Secondo il [museo](https://www.gallerieaccademia.it/visita/orari-e-biglietti/), è aperta dal martedì alla domenica, e nei giorni di grande affluenza conviene prenotare online. Calcola due ore."),
    h3("La Collezione Peggy Guggenheim"),
    p("Nella casa sul Canal Grande dove visse Peggy Guggenheim c'è la sua collezione di arte del Novecento — cubismo, surrealismo, espressionismo astratto, con opere di Picasso, Pollock, Magritte e altri — e un giardino di sculture. Il museo è chiuso il martedì, consiglia di acquistare online il biglietto con fascia oraria e non ammette borse voluminose. Calcola un'ora e mezza o due; è a pochi passi dall'Accademia."),
    h3("Il Teatro La Fenice"),
    p("Il teatro d'opera di Venezia è bruciato ed è stato ricostruito più di una volta, l'ultima dopo l'incendio del 1996, con la riapertura nel 2003. Si può visitare la sala quando non è in uso oppure assistere a uno spettacolo: modalità di visita e programma sono sul [sito ufficiale del teatro](https://www.teatrolafenice.it/). Calcola circa un'ora per la visita."),
    h3("Santa Maria della Salute"),
    p("La grande chiesa con cupola all'imbocco del Canal Grande fu costruita come voto per la fine della peste del 1630; ogni 21 novembre i veneziani la raggiungono attraversando un ponte provvisorio per la Festa della Salute. La sacrestia, con dipinti di Tiziano e Tintoretto, è compresa nel biglietto della Basilica di San Marco. È a pochi minuti a piedi dall'Accademia e dalla Guggenheim."),
    h3("Il Ghetto ebraico"),
    p("Nel 1516 la Repubblica obbligò gli ebrei della città a vivere in un'area di Cannaregio sorta intorno a un'antica fonderia, il *getto*: da qui deriva la parola *ghetto*. Le case alte e le sinagoghe sono ancora lì, e il Ghetto resta il centro della comunità ebraica. Il Museo Ebraico sta completando un importante restauro, con la riapertura prevista per l'autunno 2026; le visite guidate alle sinagoghe sono proseguite. Il complesso è chiuso il sabato e nelle festività ebraiche: controlla il [sito ufficiale](https://www.ghettovenezia.com/) prima di andare."),
    h3("La Scuola Grande di San Rocco"),
    p("Sede di una confraternita fondata nel 1478, la Scuola conserva oltre 60 dipinti di Tintoretto, ancora nelle sale per cui furono realizzati. È una delle visite d'arte più intense di Venezia, e raramente affollata come San Marco. Secondo il suo sito è aperta tutti i giorni tranne il 1° gennaio e il 25 dicembre, con orario ridotto la domenica. Accanto c'è la chiesa dei Frari, con l'*Assunta* di Tiziano. Calcola una o due ore per entrambe."),
    h3("Come scegliere le priorità"),
    p("Un aiuto per organizzarsi, non una classifica: adattalo ai tuoi interessi."),
    table(
      ["Luogo", "Priorità alla prima visita", "Durata indicativa", "Prenotare?"],
      [
        ["Basilica di San Marco", "Alta", "Circa 1 ora", "Utile: ingressi a fascia oraria"],
        ["Palazzo Ducale", "Alta", "2–3 ore", "Utile; online costa meno con 30+ giorni di anticipo"],
        ["Canal Grande in vaporetto", "Alta", "30–45 minuti", "No"],
        ["Ponte e mercato di Rialto", "Alta", "1 ora, di mattina", "No"],
        ["Gallerie dell'Accademia", "Medio-alta", "Circa 2 ore", "Consigliato nei giorni affollati"],
        ["Scuola Grande di San Rocco e Frari", "Medio-alta", "1–2 ore", "Di solito no"],
        ["Collezione Peggy Guggenheim", "Media", "1 ora e mezza–2 ore", "Consigliato; chiusa il martedì"],
        ["Santa Maria della Salute", "Media", "30 minuti", "No"],
        ["Ghetto ebraico", "Media", "1–2 ore", "Verifica le visite guidate"],
        ["Teatro La Fenice", "Facoltativa", "Circa 1 ora", "Verifica sul sito ufficiale"],
      ],
      "Priorità per organizzare la prima visita"
    ),

    // ——— 4 ———
    h2("Venezia oltre San Marco"),
    p("Il centro storico è diviso in sei sestieri — San Marco, Castello, Cannaregio, San Polo, Santa Croce e Dorsoduro — con l'isola della Giudecca sull'altra riva. Nessuno è un segreto: sono tutti noti e frequentati. Ma più ti allontani dall'asse Rialto–San Marco, più vedi la Venezia di tutti i giorni: panni stesi sopra i rii, bacari di quartiere, bambini che giocano nei campi."),
    h3("Cannaregio"),
    p("A nord della stazione, Cannaregio è il sestiere dove vivono molti veneziani. La Strada Nova porta un flusso continuo di persone verso Rialto, mentre le fondamente parallele — come la Fondamenta della Misericordia e quella degli Ormesini — si riempiono di bacari e ristoranti all'ora dell'aperitivo. Qui ci sono il Ghetto e la chiesa della Madonna dell'Orto, dove è sepolto Tintoretto, e dalle Fondamente Nove partono i battelli per la laguna nord."),
    {
      type: "image",
      src: `${IMG}/canal-evening-restaurants.webp`,
      alt: "Un ampio rio di Venezia al crepuscolo, con tavoli di ristoranti e luci lungo la fondamenta e barche ormeggiate",
      caption: "Una fondamenta all'ora dell'aperitivo, quando bacari e ristoranti di quartiere si riempiono.",
      credit: unsplash("Albert Canite", "albert_canite"),
    },
    h3("Castello"),
    p("Castello, il sestiere più grande, si allunga verso est da San Marco. Vicino alla Basilica è affollato — qui c'è anche la basilica dei Santi Giovanni e Paolo, dove sono sepolti molti dogi — ma diventa sempre più residenziale procedendo verso via Garibaldi, l'Arsenale, il cantiere navale della Repubblica, e i Giardini dove si tiene la Biennale."),
    h3("Dorsoduro"),
    p("Sulla sponda sud del Canal Grande, Dorsoduro unisce grandi musei — l'Accademia, la Guggenheim, Punta della Dogana — a un quartiere universitario intorno a campo Santa Margherita e alle Zattere, una lunga riva al sole affacciata sulla Giudecca, perfetta per la passeggiata serale."),
    {
      type: "image",
      src: `${IMG}/dorsoduro-salute-aerial.webp`,
      alt: "Veduta aerea della punta di Dorsoduro a Venezia, con Punta della Dogana e la cupola di Santa Maria della Salute tra l'acqua della laguna",
      caption: "La punta di Dorsoduro dall'alto: Punta della Dogana e Santa Maria della Salute.",
      credit: unsplash("Martin Katler", "martinkatler"),
    },
    h3("San Polo e Santa Croce"),
    p("Oltre Rialto, questi due piccoli sestieri sono un intreccio di calli e campielli. San Polo ha il mercato, i Frari, la Scuola Grande di San Rocco e campo San Polo, il più grande della città dopo piazza San Marco; Santa Croce, vicino a Piazzale Roma, è più quieta, con campi come San Giacomo dall'Orio."),
    h3("Giudecca"),
    p("Al di là dell'ampio canale della Giudecca, quest'isola lunga e stretta ha calli residenziali, ex edifici industriali e la chiesa palladiana del Redentore, al centro della festa di luglio. Dalla sua riva si ha una delle viste più belle su Venezia. Si raggiunge in pochi minuti di vaporetto dalle Zattere o da San Marco."),
    tip("Scegli un sestiere al giorno da esplorare senza programma: entra, perditi un po' e poi segui i cartelli gialli (*Per Rialto*, *Per S. Marco*, *Alla Ferrovia*) o la mappa per ritrovare la strada.", "Cammina senza meta"),

    // ——— 5 ———
    h2("Venezia in 1, 2 o 3 giorni"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Un giorno", title: "La Venezia storica", text: "**Mattina presto:** piazza San Marco prima della folla, poi la Basilica (fascia prenotata). **Tarda mattinata:** Palazzo Ducale. **Pomeriggio:** a piedi fino a Rialto, poi la linea 1 lungo il Canal Grande. **Sera:** cicchetti in un bacaro, lontano da San Marco." },
        { label: "Due giorni", title: "Arte e angoli tranquilli", text: "Primo giorno come sopra. **Secondo giorno:** il mercato di Rialto al mattino; i Frari e la Scuola Grande di San Rocco; l'Accademia o la Guggenheim nel pomeriggio; il tramonto alle Zattere e cena a Dorsoduro o a Cannaregio." },
        { label: "Tre giorni", title: "La laguna e ritmi lenti", text: "Primi due giorni come sopra. **Terzo giorno:** battello dalle Fondamente Nove per Murano e Burano (o Torcello); rientro in tempo per una passeggiata serale a Cannaregio o a Castello. Lascia un blocco di tempo libero." },
      ],
    },
    tip("Organizza ogni giornata intorno a un solo ingresso prenotato — la Basilica o Palazzo Ducale — e lascia flessibile il resto. A piedi si impiega più tempo di quanto sembri sulla mappa.", "Una prenotazione al giorno"),

    // ——— 6 ———
    h2("Dove dormire a Venezia"),
    p("A Venezia la posizione dell'alloggio conta più che quasi ovunque. Dormire in centro storico significa vedere la città all'alba e la sera, quando è più calma, ma anche portare i bagagli su e giù dai ponti e spendere di più. Dormire a Mestre, in terraferma, di solito vuol dire più scelta e prezzi più bassi, ma ogni visita comincia con un autobus, un tram o un treno e si perde Venezia di notte. Ovunque tu scelga, controlla la fermata del vaporetto più vicina e quanti ponti ci sono fino alla porta."),
    table(
      ["Zona", "Vicinanza ai luoghi principali", "Atmosfera", "Trasporti e bagagli", "Prezzi"],
      [
        ["San Marco", "La più vicina a Basilica, Palazzo e Fenice", "Affollata di giorno, più quieta a tarda sera", "Molte fermate; diversi ponti dalla stazione", "Di solito la zona più cara"],
        ["Cannaregio", "Rialto a piedi; vicina alla stazione", "Residenziale, sere vivaci sulle fondamente", "Vicino alla stazione i bagagli pesano meno", "Spesso più varia"],
        ["Dorsoduro", "Vicina ad Accademia, Guggenheim e Zattere", "Artistica, rilassata, universitaria", "Varie fermate sul Canal Grande e alle Zattere", "Medio-alti"],
        ["Castello", "San Marco a piedi; più quieta verso est", "Da affollata a residenziale", "Fermate lungo la riva", "Variano con la distanza da San Marco"],
        ["San Polo", "Centrale, tra Rialto e i Frari", "Calli e campielli", "Centrale, ma con molti ponti", "Medio-alti"],
        ["Santa Croce", "Vicina a Piazzale Roma; Rialto a piedi", "Più quieta, di quartiere", "La più comoda per chi arriva in auto o in bus dall'aeroporto", "Spesso più contenuti"],
        ["Mestre (terraferma)", "Pochi minuti di treno per Santa Lucia, o bus e tram per Piazzale Roma", "Normale città moderna", "Niente ponti né barche con le valigie", "Di solito più bassi"],
      ],
      "Le zone dove dormire a Venezia"
    ),
    table(
      ["Se cerchi…", "Valuta", "Perché"],
      [
        ["La prima visita più semplice", "San Marco o Castello vicino a San Marco", "I luoghi principali sono sotto casa"],
        ["Un arrivo facile con i bagagli", "Cannaregio vicino alla stazione o Santa Croce vicino a Piazzale Roma", "Pochi o nessun ponte dal treno o dal bus dell'aeroporto"],
        ["Sere in un quartiere vissuto", "Cannaregio o Castello", "Bacari sulle fondamente e calli più tranquille"],
        ["Arte e panorami", "Dorsoduro", "Musei e la riva delle Zattere"],
        ["Un budget più basso o l'auto", "Mestre", "Prezzi e parcheggi di terraferma; treni per Venezia"],
      ],
      "Scegliere dove dormire"
    ),
    p("Il Comune di Venezia applica l'imposta di soggiorno, a persona e a notte, nel centro storico, nelle isole e in terraferma; l'importo dipende dalla stagione e dal tipo di struttura. Molti alberghi del centro indicano come arrivare in taxi acqueo o a piedi dalla fermata del vaporetto: segui le loro indicazioni."),

    // ——— 7 ———
    h2("I sestieri di Venezia"),
    table(
      ["Zona", "Carattere", "Ideale per", "Da considerare"],
      [
        ["San Marco", "Il cuore politico e cerimoniale: piazza, Basilica, Palazzo, negozi e alberghi", "Le visite principali, la Fenice", "La zona più affollata di giorno; con l'acqua alta si allaga per prima"],
        ["Castello", "Il sestiere più grande, dalle grandi chiese vicino a San Marco alle calli residenziali dell'Arsenale", "Passeggiate, la Biennale, un'atmosfera di quartiere verso est", "Le distanze verso l'estremità sono lunghe"],
        ["Cannaregio", "Residenziale, con lunghe fondamente, il Ghetto e le Fondamente Nove", "Le serate, il Ghetto, i battelli per le isole", "La Strada Nova è molto trafficata"],
        ["San Polo", "Il sestiere più piccolo: mercato di Rialto, Frari, San Rocco", "Mercati, arte, cucina", "Calli strette e affollate vicino a Rialto"],
        ["Santa Croce", "Campi tranquilli vicino a Piazzale Roma", "Chi arriva su strada, una base più calma", "Meno luoghi famosi"],
        ["Dorsoduro", "Musei, quartiere universitario e Zattere", "Arte, tramonti, serate rilassate", "Zona Accademia affollata a metà giornata"],
        ["Giudecca", "Un'isola a sé, con calli residenziali e il Redentore", "Viste su Venezia, tranquillità", "Per attraversare serve il vaporetto"],
        ["Lido", "Lunga isola-barriera con spiagge, auto e ville", "Spiagge d'estate, la Mostra del Cinema", "Un tragitto in battello dal centro"],
      ],
      "I sestieri di Venezia in sintesi"
    ),
    {
      type: "image",
      src: `${IMG}/quiet-residential-canal.webp`,
      alt: "Uno stretto rio residenziale di Venezia, silenzioso, con una piccola barca blu ormeggiata tra vecchie case",
      caption: "Lontano dai percorsi principali, molti rii sono silenziosi e residenziali.",
      credit: unsplash("Annie Spratt", "anniespratt"),
    },

    // ——— 8 ———
    h2("Come muoversi a Venezia"),
    p("Venezia è compatta e quasi tutta percorribile a piedi, ma non senza fatica. Il centro storico è formato da oltre cento piccole isole unite da ponti, quasi tutti con gradini. Le calli possono essere strettissime, i cartelli indicano più direzioni e la folla rallenta tutto tra Rialto e San Marco. Calcola più tempo di quanto suggerisca la mappa."),
    table(
      ["Mezzo", "Ideale per", "Da sapere"],
      [
        ["A piedi", "Quasi tutti gli spostamenti in centro", "Gradini su quasi tutti i ponti; servono scarpe comode"],
        ["Vaporetto (ACTV)", "Canal Grande, tragitti lunghi, isole", "Trasporto pubblico; linee e frequenze cambiano con la stagione"],
        ["Traghetto", "Attraversare il Canal Grande dove non c'è un ponte", "Una gondola-traghetto in pochi punti; il servizio varia"],
        ["Taxi acqueo", "Bagagli, gruppi, mobilità ridotta, arrivi", "Motoscafi privati; concorda il prezzo prima di salire"],
        ["Gondola", "L'esperienza, non lo spostamento", "Tariffe fissate dal Comune; concorda prezzo e durata prima"],
        ["Bus e tram (terraferma)", "Mestre, aeroporto e Piazzale Roma", "Piazzale Roma è il capolinea di tutti i veicoli"],
      ],
      "Come muoversi a Venezia"
    ),
    h3("Il giro in gondola"),
    p("Il giro in gondola è un percorso breve e lento tra i canali — di solito circa mezz'ora — con un gondoliere autorizzato ai remi. È un'esperienza, non un mezzo di trasporto. Il Comune fissa tariffe standard per una durata prestabilita, più alte la sera, e valgono per gondola e non a persona: in più si spende meno. Concorda prezzo e durata prima di partire. Per un assaggio breve e molto più economico c'è il *traghetto*, che attraversa il Canal Grande in pochi punti."),
    h3("Ponti, bagagli e accessibilità"),
    p("Secondo il Comune di Venezia, il centro storico è composto da 129 *insulae*, di cui 66 accessibili a chi ha difficoltà motorie: 46 grazie a fermate del trasporto pubblico accessibili e 20 grazie a ponti dotati di rampe. Il Comune ha tracciato 14 percorsi accessibili, per circa 14 chilometri, da San Marco a Rialto, dalle Zattere ai Frari, fino a Murano, Burano e Torcello. Dettagli, comprese le agevolazioni ACTV per chi ha mobilità ridotta, sono nella pagina [Venezia accessibile](https://www.veneziaunica.it/it/organizza-il-tuo-viaggio/venezia-accessibile)."),
    ul(
      "**Pianifica il percorso, non la distanza.** Una breve camminata può includere diversi ponti a gradini; i percorsi accessibili mostrano le alternative senza scalini.",
      "**Usa il vaporetto per evitare i gradini.** Molte fermate sono pontili galleggianti, spesso più semplici dei ponti — anche se la barca si muove e l'imbarco può essere affollato.",
      "**Verifica ogni luogo.** Palazzo Ducale, per esempio, ha un ascensore ed è sui percorsi accessibili del Comune; altrove le condizioni cambiano, quindi controlla le informazioni ufficiali.",
      "**Viaggia leggero.** Trascinare una valigia grande sui gradini dei ponti è faticoso per te e per chi ti segue. Un bagaglio più piccolo, un servizio di facchinaggio o un taxi acqueo semplificano l'arrivo.",
    ),

    // ——— 9 ———
    h2("Vaporetto e trasporti sull'acqua"),
    p("Il vaporetto è l'autobus sull'acqua di Venezia, gestito dall'azienda di trasporto pubblico ACTV. Lo usano residenti e visitatori, ed è il mezzo per raggiungere le isole. Le linee percorrono il Canal Grande, girano intorno al centro storico e attraversano la laguna. È trasporto pubblico, non un traghetto di linea: per le isole nel resto d'Italia vedi i [traghetti in Italia](/it/trasporti/traghetti-in-italia)."),
    ul(
      "**Canal Grande.** La linea 1 ferma a quasi tutti gli imbarcaderi tra Piazzale Roma, la stazione, Rialto, l'Accademia e San Marco: lenta ma panoramica. La linea 2 percorre il Canal Grande con meno fermate.",
      "**Intorno al centro.** Le linee circolari (come 4.1 e 4.2, 5.1 e 5.2) girano all'esterno della città, collegando stazione e Piazzale Roma con le Fondamente Nove, il canale della Giudecca, il Lido e Murano.",
      "**La laguna.** La linea 12 va dalle Fondamente Nove a Murano, Mazzorbo, Burano e Torcello.",
    ),
    p("Biglietti e abbonamenti — corse singole e titoli da uno, due, tre o sette giorni — sono venduti da Venezia Unica, la rete di vendita ufficiale, online, nelle biglietterie, alle macchinette e nell'app AVM Venezia. ACTV accetta anche carte contactless e smartphone: si avvicina la carta al lettore prima di salire sul pontile, e di nuovo a ogni cambio di vaporetto; il sistema applica la tariffa più conveniente per i viaggi fatti. Ogni biglietto va convalidato prima dell'imbarco."),
    p("Ogni biglietto comprende un numero limitato di bagagli, entro certe misure; valigie in più o più grandi richiedono un biglietto a parte, e con le barche piene il personale può non accettarle. Linee, fermate e frequenze cambiano con la stagione, gli eventi, i lavori e le maree: controlla l'orario aggiornato sul [sito di ACTV](https://actv.avmspa.it/it/) o nell'app, invece di affidarti a vecchie guide, e leggi i cartelli di ogni pontile — lo stesso numero di linea può viaggiare nelle due direzioni."),
    {
      type: "image",
      src: `${IMG}/vaporetto-grand-canal.webp`,
      alt: "Un vaporetto ACTV sul Canal Grande a Venezia accanto a un pontile, con palazzi e tende di ristoranti lungo la riva",
      caption: "Un vaporetto sul Canal Grande. I pontili sono numerati e indicano la direzione.",
      credit: unsplash("Henri Picot", "henrip"),
    },
    tip("Se hai meno di 29 anni, la Rolling Venice card di Venezia Unica dà diritto a sconti sui trasporti e su alcune attrazioni.", "Under 29?"),

    // ——— 10 ———
    h2("L'aeroporto di Venezia"),
    p("L'aeroporto Marco Polo è in terraferma, a Tessera, a nord-est di Mestre. Non è collegato alla ferrovia: a Venezia si arriva in autobus, in barca o in auto. Secondo l'aeroporto, i biglietti si comprano all'ufficio del trasporto pubblico nella sala arrivi, alle macchinette nell'area ritiro bagagli e alle biglietterie Alilaguna vicino alla darsena."),
    table(
      ["Mezzo", "Dove porta", "Pro e contro"],
      [
        ["Bus espresso ATVO", "Piazzale Roma (e Mestre), senza fermate intermedie", "Rapido e semplice; poi a piedi o in vaporetto"],
        ["Bus ACTV (AEROBUS)", "Piazzale Roma; altre linee ACTV servono Mestre", "Bus di linea con fermate; esistono biglietti combinati bus + vaporetto"],
        ["Alilaguna", "Centro storico e isole di Murano, Burano, Lido e Certosa", "In barca verso molte zone della città, ma più lento"],
        ["Taxi acqueo", "Vicino all'albergo, se ha un ingresso sull'acqua", "Il più diretto e il più caro; concorda il prezzo prima"],
        ["Taxi su strada", "Piazzale Roma o Mestre", "Tariffe fisse da e per l'aeroporto; poi si prosegue a piedi o in barca"],
        ["Noleggio con conducente (NCC)", "Piazzale Roma o indirizzi in terraferma", "Da prenotare con un operatore autorizzato"],
      ],
      "Dall'aeroporto Marco Polo a Venezia"
    ),
    p("Da Piazzale Roma la stazione è a circa 10 minuti a piedi, oltre il ponte della Costituzione, e il vaporetto prosegue lungo il Canal Grande. Se dormi a Mestre, i bus ATVO e ACTV fermano anche lì."),

    // ——— 11 ———
    h2("Venezia in treno"),
    p("**Venezia Santa Lucia** è il capolinea: esci dalla stazione e hai davanti il Canal Grande, con la fermata del vaporetto Ferrovia. **Venezia Mestre** è la stazione di terraferma, dove molti treni fermano prima: se dormi nella città storica, resta a bordo fino a Santa Lucia."),
    p("I Frecciarossa di Trenitalia e i treni Italo collegano Venezia con Milano (circa 2 ore e un quarto–2 ore e mezza), Firenze (circa 2 ore), Bologna e Roma (circa 3 ore e mezza–4 ore), di solito con fermata a Padova. I regionali portano a Padova, Verona e Treviso per una gita in giornata. Verifica gli orari aggiornati con gli operatori. Per biglietti e convalida leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 12 ———
    h2("Murano, Burano e la laguna"),
    p("Le isole della laguna sono uno dei motivi migliori per fermarsi un terzo giorno. Sono molto diverse tra loro, e non serve vederle tutte."),
    table(
      ["Isola", "Famosa per", "Tempo da dedicare", "Come arrivare", "Adatta a…"],
      [
        ["Murano", "Il vetro, lavorato qui dal Duecento, il Museo del Vetro, le botteghe lungo i rii", "2–3 ore", "Breve tragitto dalle Fondamente Nove (linee 4.1/4.2, 12)", "2 o 3 giorni; da abbinare a Burano"],
        ["Burano", "Le case colorate, il merletto e il Museo del Merletto", "2–3 ore", "Linea 12 dalle Fondamente Nove, via Murano", "3 giorni"],
        ["Torcello", "Il primo insediamento della laguna e la Basilica di Santa Maria Assunta, con i mosaici bizantini", "1–2 ore", "Breve tratto da Burano con la linea 12", "3 giorni, per chi ama la storia"],
        ["Lido", "Spiagge, ville Liberty, la Mostra del Cinema", "Da mezza giornata a una giornata", "Vaporetto da San Marco o dalle Fondamente Nove", "Soggiorni lunghi o d'estate"],
        ["Giudecca", "La vista su Venezia, il Redentore", "1–2 ore", "Vaporetto attraverso il canale della Giudecca", "Qualsiasi durata"],
        ["San Michele", "L'isola cimitero di Venezia", "1 ora", "Tra le Fondamente Nove e Murano", "Deviazione tranquilla verso Murano"],
      ],
      "Le isole della laguna"
    ),
    {
      type: "image",
      src: `${IMG}/murano-comet-glass-star.webp`,
      alt: "La Cometa di Vetro, grande scultura blu fatta di centinaia di aghi di vetro, in un campo dell'isola di Murano",
      caption: "La Cometa di Vetro a Murano, realizzata da un maestro vetraio con centinaia di aghi di vetro soffiato.",
      credit: unsplash("Deirdre Boys", "deirdrehb"),
    },
    p("**Murano e Burano** insieme occupano bene mezza giornata o una giornata intera: parti presto, prendi la linea 12 fino a Burano e fermati a Murano al ritorno. Aggiungi **Torcello** se ti interessa la storia delle origini di Venezia. Le dimostrazioni nelle fornaci sono diverse: alcune gratuite, altre legate alla vendita. Per acquistare vetro, preferisci chi espone il marchio di origine."),
    {
      type: "image",
      src: `${IMG}/burano-coloured-houses.webp`,
      alt: "Case dipinte di rosso, arancione e blu lungo un rio dell'isola di Burano, con piccole barche ormeggiate",
      caption: "Le case colorate di Burano. L'isola è più lontana di Murano: per entrambe calcola mezza giornata.",
      credit: unsplash("Tjaard Krusch", "tjaard_k"),
    },

    // ——— 13 ———
    h2("Cucina e cicchetti"),
    p("La cucina veneziana nasce dalla laguna e dal mare — pesce, molluschi, riso e polenta — con spezie che ricordano i commerci della Serenissima con l'Oriente."),
    ul(
      "**Cicchetti** — piccoli assaggi da mangiare in piedi al banco di un *bacaro*: crostini, polpette, fritture di pesce, salumi. Si accompagnano con un'*ombra*, un bicchiere di vino.",
      "**Sarde in saor** — sarde fritte marinate con cipolla, aceto, pinoli e uvetta.",
      "**Baccalà mantecato** — stoccafisso montato, servito spesso su crostini o polenta.",
      "**Risotto** — tra cui il *risotto al nero di seppia* e i *risi e bisi*.",
      "**Bigoli in salsa** — pasta spessa con salsa di acciughe e cipolla.",
      "**Fegato alla veneziana** — fegato di vitello con le cipolle.",
      "**Dolci** — *fritole* e *galani* a Carnevale, e biscotti secchi come i *baicoli*.",
    ),
    p("Lo spritz è legatissimo al Veneto, e il *giro di ombre*, da un bacaro all'altro, è una tradizione della sera. I locali vicino a San Marco e a Rialto tendono a essere più cari: allontanati di qualche calle, cerca i posti frequentati da veneziani e controlla sul menu coperto e servizio prima di sederti."),

    // ——— 14 ———
    h2("Quando andare a Venezia"),
    ul(
      "**Primavera (aprile–giugno)** — clima mite, ideale per camminare e per le isole, ma molta gente, soprattutto a Pasqua, nei ponti e nei fine settimana.",
      "**Estate (luglio–agosto)** — caldo, umido e affollato, a volte con le zanzare. La Festa del Redentore, il terzo fine settimana di luglio, culmina il sabato notte con i fuochi d'artificio sul bacino di San Marco.",
      "**Autunno (settembre–novembre)** — gradevole a settembre e ottobre; la Regata Storica si corre la prima domenica di settembre. Da fine autunno l'acqua alta diventa più probabile.",
      "**Inverno (dicembre–febbraio)** — freddo, spesso nebbioso, il periodo più tranquillo — tranne a Carnevale, che nel 2027 si svolge dal 23 gennaio al 9 febbraio secondo il [sito ufficiale del Carnevale](https://carnevale.venezia.it/).",
    ),
    p("La Biennale alterna arte e architettura. La Biennale Arte 2026 è aperta dal 9 maggio al 22 novembre ai Giardini, all'Arsenale e in altre sedi della città; la Mostra del Cinema si tiene al Lido a fine estate."),
    important("Nel 2026 il Comune ha applicato ai visitatori giornalieri un contributo di accesso in giorni stabiliti di primavera ed estate; secondo il [Comune di Venezia](https://cda.ve.it/it/) la sperimentazione si è conclusa il 26 luglio, e l'eventuale applicazione negli anni successivi spetta agli organi del Comune. Prima di partire, controlla sul sito ufficiale regole e date in vigore.", "Contributo di accesso"),
    p("Con l'acqua alta il MOSE può essere sollevato per proteggere la laguna dalle maree più alte, ma anche maree più basse possono allagare piazza San Marco e altre zone basse. Il Comune pubblica [previsioni e allerte di marea](https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree). Per confrontare Venezia con il resto d'Italia nei vari mesi, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 15 ———
    h2("Venezia senza auto"),
    p("La Venezia storica non è una meta da auto: la strada finisce ai margini della città. Il ponte della Libertà porta auto e autobus attraverso la laguna fino a **Piazzale Roma**, dove ci sono autorimesse, e all'isola del **Tronchetto**, con grandi parcheggi e un breve collegamento in People Mover con Piazzale Roma. Da lì si prosegue a piedi o in vaporetto."),
    p("Se giri il Veneto in auto, di solito conviene lasciarla a Mestre o vicino a una stazione di terraferma e raggiungere Venezia in treno o in tram, oppure riconsegnare l'auto a noleggio prima del soggiorno veneziano. I posti auto a Venezia sono limitati e nei periodi di punta si esauriscono: verifica la disponibilità con i gestori prima di arrivare. Il Lido è l'unica parte della laguna dove circolano le auto, con il ferry-boat. Prima di metterti al volante leggi la nostra guida a [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 16 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Dormire lontano da ciò che vuoi vedere.** Una camera economica dietro molti ponti e una lunga camminata ti costa tempo ogni giorno.",
      "**Sottovalutare le camminate.** Le distanze sono brevi, ma ponti, calli cieche e folla rallentano.",
      "**Trascinare valigie grandi sui ponti.** Viaggia leggero, oppure studia prima il percorso fino all'alloggio.",
      "**Voler vedere tutte le isole.** Una o due isole con calma valgono più di quattro di corsa.",
      "**Non controllare le prenotazioni.** Fasce orarie e biglietti online rendono molto più semplici Basilica, Palazzo Ducale e alcuni musei.",
      "**Pensare che i trasporti siano uguali tutto l'anno.** Linee e frequenze cambiano con la stagione e gli eventi.",
      "**Passare tutta la visita intorno a San Marco.** Parte del meglio di Venezia è a Cannaregio, Castello, Dorsoduro e San Polo.",
      "**Affidarsi a informazioni superate sui vaporetti.** Verifica linee e biglietti con ACTV o Venezia Unica.",
      "**Scendere per errore a Venezia Mestre.** Se dormi in centro storico, resta a bordo fino a Santa Lucia.",
      "**Riempire troppo un soggiorno breve.** Lascia tempo per camminare e sederti in un campo.",
    ),

    // ——— 17 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "venezia-per-la-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli la zona dove dormire", "Decidi quanti giorni fermarti", "Decidi se includere le isole"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota Basilica e Palazzo Ducale", "Studia il percorso con i bagagli dalla stazione o dall'aeroporto", "Controlla i collegamenti dall'aeroporto", "Verifica regole e date del contributo di accesso"],
        },
        {
          title: "Durante il viaggio",
          items: ["Calcola tempo in più per camminare", "Controlla le linee del vaporetto del giorno", "Tieni un blocco libero nel programma", "In autunno e inverno controlla le allerte di marea"],
        },
      ],
    },
    p("Regole di prenotazione, collegamenti, informazioni sull'accessibilità e date degli eventi citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Possono cambiare: controllali prima di partire. Per inserire Venezia in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Quanti giorni servono per visitare Venezia?", answer: "Per la maggior parte delle prime visite bastano due o tre giorni: il tempo per Basilica di San Marco, Palazzo Ducale, Rialto, uno o due musei, un sestiere più tranquillo e, il terzo giorno, Murano e Burano." },
    { question: "Venezia si gira a piedi?", answer: "Sì. Il centro storico è compatto e senza auto, e quasi tutti gli spostamenti si fanno a piedi. Aspettati molti ponti con gradini, calli strette e folla lenta vicino a Rialto e San Marco; per le distanze più lunghe c'è il vaporetto." },
    { question: "Dove dormire a Venezia la prima volta?", answer: "Se possibile in centro storico. San Marco e Castello vicino a San Marco sono le zone più comode per le visite; Cannaregio vicino alla stazione e Santa Croce vicino a Piazzale Roma facilitano l'arrivo con i bagagli; Dorsoduro è ideale per chi ama l'arte. Mestre costa meno ma è in terraferma." },
    { question: "Qual è il sestiere migliore per la prima visita?", answer: "Non ce n'è uno solo. San Marco è il più vicino ai luoghi principali, Cannaregio ha serate vivaci sulle fondamente ed è vicino alla stazione, Dorsoduro unisce i musei alla riva delle Zattere." },
    { question: "Serve l'auto a Venezia?", answer: "No. Nella Venezia storica non circolano auto. Le strade finiscono a Piazzale Roma e al Tronchetto, dove ci sono i parcheggi; da lì si va a piedi o in vaporetto." },
    { question: "Come si arriva dall'aeroporto di Venezia alla città?", answer: "Con il bus espresso ATVO o il bus ACTV fino a Piazzale Roma, con il vaporetto Alilaguna verso il centro storico e le isole, in taxi acqueo o in taxi su strada fino a Piazzale Roma. L'aeroporto non è servito dal treno." },
    { question: "Che cos'è il vaporetto?", answer: "È l'autobus sull'acqua di Venezia, gestito da ACTV. La linea 1 percorre lentamente il Canal Grande; altre linee girano intorno alla città e raggiungono le isole. Biglietti e abbonamenti sono venduti da Venezia Unica, e si può pagare anche con carta contactless." },
    { question: "Venezia è cara?", answer: "Alloggi in centro storico, taxi acquei, gondole e ristoranti vicino a San Marco possono costare molto. Camminare, usare gli abbonamenti, mangiare cicchetti nei bacari ed evitare i periodi di punta aiutano a spendere meno." },
    { question: "Vale la pena visitare Venezia oltre piazza San Marco?", answer: "Sì. Cannaregio, Castello, Dorsoduro, San Polo e Santa Croce hanno grande arte, bacari di quartiere e rii tranquilli, e le isole della laguna mostrano un'altra Venezia." },
    { question: "Vale la pena visitare Murano e Burano?", answer: "Se hai un terzo giorno, sì. Murano è famosa per il vetro, Burano per le case colorate e il merletto. La linea 12 dalle Fondamente Nove le collega entrambe; calcola almeno mezza giornata." },
    { question: "Come funziona il giro in gondola?", answer: "Un gondoliere autorizzato ti porta tra i canali per circa mezz'ora. Le tariffe standard sono fissate dal Comune, più alte la sera, e valgono per gondola, non a persona. Concorda prezzo e durata prima di partire." },
    { question: "Si può visitare Venezia in un giorno?", answer: "In un giorno si vedono piazza San Marco, la Basilica o Palazzo Ducale e Rialto, ma soprattutto le zone più affollate nelle ore più affollate. Fermarsi almeno una notte è molto meglio." },
    { question: "Cosa prenotare in anticipo a Venezia?", answer: "Prima di tutto l'alloggio, poi l'ingresso a fascia oraria alla Basilica di San Marco e i biglietti di Palazzo Ducale. La prenotazione online è consigliata anche per l'Accademia nei giorni affollati e per la Collezione Peggy Guggenheim." },
    { question: "Cosa mangiare a Venezia?", answer: "Cicchetti in un bacaro, sarde in saor, baccalà mantecato, risotto al nero di seppia, bigoli in salsa e fegato alla veneziana, con uno spritz o un'ombra di vino." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Basilica di San Marco — Procuratoria di San Marco", url: "https://www.basilicasanmarco.it/", note: "biglietti e regole di accesso" },
    { label: "Palazzo Ducale — Fondazione Musei Civici di Venezia", url: "https://palazzoducale.visitmuve.it/", note: "biglietti e aperture" },
    { label: "Gallerie dell'Accademia", url: "https://www.gallerieaccademia.it/visita/orari-e-biglietti/", note: "giorni di apertura e biglietti" },
    { label: "Collezione Peggy Guggenheim", url: "https://www.guggenheim-venice.it/it/", note: "aperture e regole per i visitatori" },
    { label: "Scuola Grande di San Rocco", url: "https://www.scuolagrandesanrocco.org/", note: "aperture e chiusure" },
    { label: "Museo Ebraico e Ghetto di Venezia", url: "https://www.ghettovenezia.com/", note: "aperture, chiusure e visite" },
    { label: "Venezia Unica", url: "https://www.veneziaunica.it/it/", note: "biglietti ufficiali dei trasporti e informazioni sulla città" },
    { label: "Venezia accessibile — Comune di Venezia", url: "https://www.veneziaunica.it/it/organizza-il-tuo-viaggio/venezia-accessibile", note: "percorsi e trasporti accessibili" },
    { label: "ACTV", url: "https://actv.avmspa.it/it/", note: "linee, orari e pagamento contactless" },
    { label: "Aeroporto di Venezia Marco Polo", url: "https://www.veneziaairport.it/it_it/trasporti", note: "bus, Alilaguna e taxi" },
    { label: "Contributo di accesso — Comune di Venezia", url: "https://cda.ve.it/it/", note: "regole e date in vigore" },
    { label: "La Biennale di Venezia", url: "https://www.labiennale.org/it", note: "date delle mostre" },
  ],
};
