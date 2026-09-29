import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guida: "Dolomiti per la prima volta" — edizione italiana, scritta in modo
// autonomo rispetto a quella inglese. Regole di accesso (Lago di Braies,
// strada a pedaggio delle Tre Cime, Alpe di Siusi, Passo Gardena), Südtirol
// Guest Pass, Val di Fassa Guest Card, norme sulle piste e sito UNESCO
// verificati su fonti ufficiali a settembre 2026. Stagioni degli impianti,
// orari, prezzi e condizioni delle strade cambiano ogni anno: rimandiamo alle
// fonti ufficiali invece di indicarli come fissi.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/visiting-the-dolomites";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const dolomitiPrimaVolta: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cosa sono le Dolomiti?"),
    answer("**Le Dolomiti sono una catena montuosa, non una località.** Si estendono su più valli e tre regioni, ciascuna con i suoi paesi, impianti, strade e perfino lingue. Per un primo viaggio contano soprattutto tre scelte: **in quale zona fare base**, **in che stagione andare** e **se muoversi in auto o no**. Meglio scegliere una o due basi, adattare i programmi alla stagione e lasciare margine al meteo, piuttosto che inseguire tutti i panorami famosi."),
    p("Le cime chiare e frastagliate delle fotografie si alzano sopra valli verdi e alpeggi. Il punto è che i luoghi più noti — Seceda, le Tre Cime, il Lago di Braies, l'Alpe di Siusi — si trovano in valli diverse, a volte lontane fra loro in auto, e alcuni hanno regole di accesso che cambiano con la stagione. Questa guida spiega come è fatto il territorio, per aiutarti a decidere dove andare, quando, per quanti giorni e come spostarti."),
    p("Dal 2009 le Dolomiti sono Patrimonio dell'Umanità UNESCO. Il sito comprende nove aree montuose distinte, per 141.903 ettari, con 18 cime oltre i 3.000 metri, ed è stato riconosciuto sia per la bellezza del paesaggio sia per il valore geologico. Il patrimonio tutelato sono le montagne; valli, paesi e strade intorno sono i luoghi in cui, in pratica, soggiornerai."),

    // ——— 2 ———
    h2("Dove si trovano le Dolomiti?"),
    p("La catena occupa il Nord-Est d'Italia, a sud del confine austriaco, e interessa cinque province: **Bolzano** e **Trento**, che formano il Trentino-Alto Adige; **Belluno**, in Veneto; **Pordenone** e **Udine**, in Friuli Venezia Giulia. Chi ci va per la prima volta si muove quasi sempre tra Alto Adige, Trentino e Bellunese."),
    {
      type: "facts",
      title: "Le Dolomiti in breve",
      rows: [
        { label: "Regioni", value: "Trentino-Alto Adige, Veneto, Friuli Venezia Giulia" },
        { label: "UNESCO", value: "Patrimonio dell'Umanità dal 2009 (nove sistemi)" },
        { label: "Lingue", value: "italiano e tedesco in Alto Adige, italiano in Trentino e in Veneto, ladino in diverse valli" },
        { label: "Stazioni di accesso", value: "Bolzano, Bressanone, Brunico e Dobbiaco in Alto Adige; Trento; Calalzo di Cadore per Cortina" },
        { label: "Aeroporti vicini", value: "Venezia, Treviso, Verona, Innsbruck e Monaco di Baviera" },
        { label: "Emergenze", value: "112" },
      ],
    },
    p("Passando da una valle all'altra cambia anche la cultura. L'Alto Adige è stato austriaco fino al primo dopoguerra e per la maggior parte degli abitanti la prima lingua è il tedesco: i cartelli sono bilingui, per cui Ortisei è anche St. Ulrich e il Lago di Braies anche Pragser Wildsee. In Val Gardena, Val Badia, Val di Fassa, Livinallongo e Ampezzo si parla anche il ladino, lingua a sé. Cortina d'Ampezzo, in Veneto, ha un'atmosfera più italiana."),
    p("Spesso le Dolomiti sono una tappa di un viaggio più lungo. Le città più comode da abbinare sono [Verona](/it/citta/verona-per-la-prima-volta) e [Venezia](/it/citta/venezia-per-la-prima-volta); da ovest funzionano bene anche [Milano](/it/citta/milano-oltre-il-duomo) e il [Lago di Como](/it/viaggi/lago-di-como-weekend)."),

    // ——— 3 ———
    h2("Quale zona scegliere per la prima volta?"),
    p("Una zona \"migliore\" in assoluto non esiste. Ogni valle si presta a un viaggio un po' diverso: dipende da che cosa vuoi fare e da come ti muovi. Queste sono le aree tra cui si sceglie più spesso."),
    table(
      ["Zona", "Adatta per", "Trasporti", "Tipo di viaggio"],
      [
        ["Val Gardena (Ortisei, Santa Cristina, Selva)", "Seceda, Alpe di Siusi, impianti, passeggiate di ogni livello", "Autobus da Bolzano e dalle stazioni vicine; buoni collegamenti locali in stagione", "Vacanza attiva con molte escursioni in quota grazie agli impianti"],
        ["Alpe di Siusi", "Passeggiate facili sull'altopiano, famiglie, viste su Sassolungo e Sciliar", "Cabinovia da Siusi; auto private limitate di giorno in stagione", "Ritmo lento, panoramico, rilassato"],
        ["Alta Badia (Corvara, La Villa, San Cassiano)", "Passeggiate, impianti, cucina, cultura ladina", "Autobus e impianti stagionali; ben posizionata per i passi in auto", "Base tranquilla tra i grandi passi"],
        ["Cortina d'Ampezzo", "Una vera cittadina, cime spettacolari, Lagazuoi, accesso alle Tre Cime", "Autobus diretti da Venezia; collegamenti con Dobbiaco e la ferrovia", "Base cittadina, con negozi e ristoranti"],
        ["Val di Fassa (Canazei, Campitello)", "Impianti, zona Sella e Marmolada, famiglie", "Autobus da Trento e Bolzano; trasporti inclusi nella Guest Card", "Base pratica con molti impianti"],
        ["Alta Pusteria (Dobbiaco, San Candido, Sesto)", "Lago di Braies, Tre Cime, ciclabile di fondovalle", "Sulla ferrovia della Val Pusteria, con autobus per laghi e valli", "Ideale con i mezzi pubblici e in famiglia"],
        ["Val di Funes", "Paesi tranquilli sotto le Odle, passeggiate facili", "Autobus da Bressanone e Chiusa; più comoda in auto", "Tranquilla, rurale, per soggiorni brevi"],
      ],
      "Caratteristiche, non una classifica. Autobus e impianti variano con la stagione.",
    ),
    h3("Val Gardena"),
    p("La valle di **Ortisei**, **Santa Cristina** e **Selva** è la base più scelta al primo viaggio, e non per caso: gli impianti salgono direttamente dai paesi verso Seceda, l'Alpe di Siusi e il gruppo del Sella, così si arriva in quota senza lunghe salite a piedi. Ortisei è il centro più grande, con una zona pedonale e una lunga tradizione di intaglio del legno. D'estate è molto frequentata, ma offre tante possibilità a breve distanza."),
    {
      type: "image",
      src: `${IMG}/passo-sella-sassolungo-road.webp`,
      alt: "Il Sassolungo e il Sassopiatto sopra pendii verdi, con una strada di montagna che attraversa il passo",
      caption: "Sassolungo e Sassopiatto visti dal Passo Sella, in testa alla Val Gardena.",
      credit: unsplash("Domenico Adornato", "domix_629"),
    },
    h3("Alpe di Siusi"),
    p("Sopra la Val Gardena si apre l'**Alpe di Siusi** (Seiser Alm), un altopiano di pascoli che, secondo l'ente turistico locale, con circa 56 km² è il più grande d'Europa. Fa parte del Parco naturale Sciliar-Catinaccio: sentieri larghi e morbidi, viste sul Sassolungo e sullo Sciliar, perfetto per camminate facili, famiglie e per chi vuole grandi panorami senza salite impegnative. È anche uno dei luoghi con le regole di accesso più rigide (vedi più avanti)."),
    h3("Alta Badia"),
    p("A est del Sella, **Corvara**, **La Villa** e **San Cassiano** sono paesi più tranquilli, con una forte identità ladina e una buona fama gastronomica. Gli impianti portano su altipiani con passeggiate facili, e la valle si trova tra diversi passi: una buona base per combinare Val Gardena, Cortina e le strade del Sella."),
    h3("Cortina d'Ampezzo"),
    p("**Cortina** è una cittadina più che un paese, con un corso pedonale animato, negozi, ristoranti e una lunga storia di località di montagna. È circondata da alcune delle cime più spettacolari, ha impianti verso le Cinque Torri e il Lagazuoi, e le Tre Cime sono raggiungibili. Con gli autobus diretti da Venezia è tra le zone più facili da raggiungere senza auto."),
    {
      type: "image",
      src: `${IMG}/cortina-church-tower.webp`,
      alt: "Il campanile e la chiesa nel centro di Cortina d'Ampezzo, con alberghi, persone a passeggio e montagne sullo sfondo",
      caption: "Il centro di Cortina d'Ampezzo: ristoranti e negozi a portata di passeggiata.",
      credit: unsplash("Elena Crobu", "elenacrobu"),
    },
    h3("Val di Fassa"),
    p("In Trentino, **Canazei** e **Campitello di Fassa** si trovano ai piedi del Sella e vicino alla Marmolada, la vetta più alta delle Dolomiti. La valle ha una fitta rete di impianti e un carattere pratico, adatto alle famiglie. Chi soggiorna nelle strutture aderenti riceve la Val di Fassa Guest Card, che comprende i trasporti pubblici locali."),
    h3("Alta Pusteria e Val di Funes"),
    p("A nord-est, **Dobbiaco**, **San Candido** e la Val di Sesto sono sulla ferrovia della Val Pusteria e vicini al Lago di Braies e alle Tre Cime: ottima scelta se ti muovi con i mezzi pubblici. A ovest, la **Val di Funes** è piccola e silenziosa, celebre per la chiesetta di Santa Maddalena sotto le Odle; si presta più a una o due notti di quiete che a fare da base per tutta la catena."),
    {
      type: "image",
      src: `${IMG}/val-di-funes-santa-maddalena.webp`,
      alt: "Il paese e la chiesa di Santa Maddalena tra prati verdi, sotto le cime grigie e frastagliate delle Odle in Val di Funes",
      caption: "Santa Maddalena, in Val di Funes, sotto il gruppo delle Odle.",
      credit: unsplash("Krzysztof Kowalik", "kowalikus"),
    },

    // ——— 4 ———
    h2("Quanti giorni servono?"),
    p("Le Dolomiti premiano chi rallenta. Sulla carta le distanze sembrano brevi, ma le strade di montagna sono tortuose, gli impianti hanno orari e il meteo può cambiare i programmi. Come regola, calcola almeno tre notti per ogni base."),
    table(
      ["Durata", "Che cosa è realistico", "Come organizzarsi"],
      [
        ["2–3 giorni", "Una zona, qualche escursione con gli impianti e un paio di panorami, tempo in paese", "Una base, per esempio Val Gardena o Cortina; niente lunghi trasferimenti"],
        ["4–5 giorni", "Una base con gite, oppure due zone vicine; un'escursione di un giorno intero se il tempo lo consente", "Una o due basi; tieni un giorno libero per il maltempo"],
        ["7 giorni o più", "Più zone, escursioni lunghe, una notte in rifugio", "Due o tre basi su lati diversi della catena"],
      ],
    ),
    p("Se le Dolomiti sono una tappa di un viaggio in Italia più ampio, tre o quattro notti in una sola zona sono spesso il compromesso migliore. Vedere Seceda, le Tre Cime e Braies in giorni consecutivi da un'unica base significa quasi sempre passare più tempo in auto che sui sentieri."),

    // ——— 5 ———
    h2("Quando andare nelle Dolomiti"),
    p("Le stagioni principali sono due — l'estate per le escursioni, l'inverno per lo sci — con periodi intermedi più tranquilli in cui molti impianti, rifugi e alcuni alberghi chiudono. Qual è la \"migliore\" dipende da che cosa vuoi fare."),
    table(
      ["Stagione", "Attività principali", "Accessi", "Che cosa aspettarsi"],
      [
        ["Primavera (aprile–maggio)", "Passeggiate di fondovalle, bici, paesi tranquilli", "Molti impianti e rifugi chiusi tra le due stagioni; neve in quota", "Bassa stagione; verifica che cosa è aperto"],
        ["Estate (fine giugno–agosto)", "Escursioni, impianti, rifugi, strade panoramiche", "Regole di accesso nei luoghi più famosi; strade e parcheggi affollati", "Alta stagione; giornate calde, temporali pomeridiani frequenti"],
        ["Inizio autunno (settembre–inizio ottobre)", "Escursioni, aria più limpida, colori autunnali", "Impianti e rifugi chiudono gradualmente tra settembre e ottobre", "Spesso più tranquillo di agosto"],
        ["Tardo autunno (fine ottobre–novembre)", "Passeggiate in valle, paesi silenziosi", "Gran parte degli impianti e molti alberghi chiusi; possibili prime nevicate", "Fuori stagione"],
        ["Inverno (dicembre–aprile)", "Sci, ciaspole, passeggiate sulla neve", "Gomme invernali o catene dove previsto; alcuni passi condizionati dalla neve", "Stagione sciistica; picchi nei periodi di vacanza"],
      ],
      "Le date di impianti e rifugi cambiano ogni anno e da zona a zona.",
    ),
    p("Per un primo viaggio estivo il periodo centrale va **da fine giugno a metà settembre**, quando funziona la maggior parte degli impianti, i sentieri in quota sono liberi dalla neve e i rifugi sono aperti. Settembre ha spesso un tempo più stabile e meno gente di agosto, ma i servizi cominciano a ridursi. La nostra guida su [quando andare in Italia](/it/guide/quando-andare-in-italia) inquadra la montagna nel resto dell'anno."),

    // ——— 6 ———
    h2("Le Dolomiti d'estate"),
    p("L'estate è la stagione classica per una prima visita: prati verdi, impianti aperti, sentieri per tutti i livelli. La maggior parte degli impianti funziona da fine maggio o giugno fino a settembre o ottobre, con date diverse per ciascuno: la cabinovia dell'Alpe di Siusi, per esempio, nel 2026 è in servizio dal 22 maggio al 2 novembre. Controlla sempre stagione e orari sul sito del singolo impianto."),
    ul(
      "**Escursioni** — dai sentieri pianeggianti di fondovalle alle alte vie. Con gli impianti si parte già in quota, e i grandi panorami diventano accessibili senza lunghe salite.",
      "**Rifugi** — per pranzare durante una camminata o per passare una notte in quota (vedi più avanti).",
      "**Strade panoramiche** — i passi intorno al Sella, il Passo Giau, il Falzarego.",
      "**Folla** — luglio e agosto sono i mesi più affollati. Parti presto, soprattutto verso i punti panoramici famosi, e prenota l'alloggio con largo anticipo.",
      "**Meteo** — le mattine estive sono spesso limpide, poi nel pomeriggio si formano nuvole e temporali. Programma le escursioni in quota al mattino.",
    ),
    {
      type: "image",
      src: `${IMG}/campitello-di-fassa-lift.webp`,
      alt: "Cabine di una funivia che attraversano la valle verso una grande parete di roccia grigia sopra Campitello di Fassa",
      caption: "Impianti sopra Campitello di Fassa: d'estate trasformano i sentieri in quota in gite di mezza giornata.",
      credit: unsplash("Hans Ott", "hansott"),
    },

    // ——— 7 ———
    h2("Le Dolomiti d'inverno"),
    p("D'inverno cambia tutto. Le stesse valli diventano comprensori sciistici, con impianti che collegano un paese all'altro e passi frequentati da sciatori anziché escursionisti. Lo skipass **Dolomiti Superski** comprende 12 comprensori, da Cortina e l'Alta Badia alla Val Gardena e alla Val di Fassa, e il **Sellaronda** è il classico giro sciistico intorno al gruppo del Sella."),
    ul(
      "**Stagione** — si scia di solito da fine novembre o dicembre ad aprile, ma le aperture dipendono ogni anno da zona, quota e neve.",
      "**Regole sulle piste** — la legge italiana impone agli sciatori un'assicurazione di responsabilità civile verso terzi, e ai minori di 18 anni il casco. L'assicurazione si può in genere acquistare insieme allo skipass.",
      "**Strade** — gomme invernali o catene a bordo sono obbligatorie dove indicato dai cartelli, cosa frequente in montagna. Dopo forti nevicate i passi possono chiudere temporaneamente.",
      "**Alloggi** — gli alberghi si riempiono a Natale, Capodanno e durante le vacanze scolastiche di febbraio. Alcuni chiedono un soggiorno minimo nelle settimane di punta.",
      "**Non solo sci** — ciaspole, sentieri invernali, slittino e sci di fondo sono ottime alternative per chi non scia.",
    ),
    {
      type: "image",
      src: `${IMG}/alpe-di-siusi-winter.webp`,
      alt: "Pascoli innevati e baite di legno sull'Alpe di Siusi, sotto il massiccio dello Sciliar in inverno",
      caption: "L'Alpe di Siusi d'inverno, sotto lo Sciliar.",
      credit: unsplash("Giandomenico Pozzi", "gdpozzi"),
    },
    p("Non facciamo previsioni sull'innevamento, che cambia di stagione in stagione. Prima di uscire dalle piste o di fare escursioni invernali, consulta i siti dei comprensori e il bollettino valanghe."),

    // ——— 8 ———
    h2("Come arrivare nelle Dolomiti"),
    p("All'interno della catena non ci sono aeroporti: di solito si arriva in una città vicina e si prosegue in treno, autobus o auto. La porta d'accesso giusta dipende dalla base scelta."),
    h3("In treno e autobus"),
    ul(
      "**Per Val Gardena, Alpe di Siusi e Val di Funes** — si arriva in treno sulla linea del Brennero, che passa da Bolzano e arriva da Verona, e si prosegue con gli autobus regionali verso le valli.",
      "**Per Alta Pusteria, Braies e Tre Cime** — si prende la ferrovia della Val Pusteria fino a Brunico, Dobbiaco o San Candido, poi gli autobus locali.",
      "**Per la Val di Fassa** — ci sono autobus da Trento, oppure da Bolzano fino a Vigo di Fassa.",
      "**Per Cortina** — Cortina Express collega direttamente l'aeroporto di Venezia, Mestre e Treviso. In alternativa, si va in treno fino a Calalzo di Cadore e poi con Dolomiti Bus fino a Cortina.",
    ),
    p("Gli orari cambiano tra estate, inverno e mezze stagioni: verificali con le aziende prima di partire. Per la rete ferroviaria vedi la nostra guida su [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno); per spostarsi dagli aeroporti c'è la guida ai [trasferimenti aeroportuali](/it/guide/trasferimenti-aeroporti-italia)."),
    h3("In auto"),
    p("Da Venezia, Verona o Innsbruck si arriva comodamente in autostrada, e le strade di montagna sono ben tenute. L'ultimo tratto nelle valli e sui passi, però, richiede più tempo di quanto sembri. Per pedaggi, regole e noleggio leggi [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 9 ———
    h2("Serve l'auto?"),
    p("Non per forza. Con l'auto è più facile collegare valli diverse, arrivare presto ai punti di partenza dei sentieri e cambiare programma in base al tempo. I mezzi pubblici funzionano bene se scegli la base giusta e viaggi in alta stagione."),
    {
      type: "compare",
      title: "Auto o mezzi pubblici?",
      columns: [
        { title: "L'auto conviene se…", items: ["Vuoi combinare più zone nello stesso viaggio", "Vuoi partire presto verso i sentieri più frequentati", "Viaggi fuori stagione, quando gli autobus sono meno frequenti", "Dormi in un posto isolato, come un maso"] },
        { title: "I mezzi pubblici bastano se…", items: ["Soggiorni più notti in un paese ben collegato", "Il programma è fatto di impianti e passeggiate in una sola valle", "L'alloggio include una carta ospite", "Preferisci evitare strade di montagna e parcheggi pieni"] },
      ],
    },
    p("In Alto Adige il **Südtirol Guest Pass** è compreso nel prezzo delle strutture aderenti: durante il soggiorno vale su treni regionali, autobus extraurbani e urbani e alcune funivie, ma non sui treni a lunga percorrenza. In Val di Fassa la **Val di Fassa Guest Card** comprende gli autobus di Trentino Trasporti. Chiedilo all'alloggio prima di prenotare: con una carta del genere l'auto può diventare superflua."),
    p("Se guidi, aspettati tornanti, pendenze forti e, d'estate, molti ciclisti e motociclisti sui passi. I parcheggi dei punti di partenza più noti si riempiono presto, e in diversi luoghi famosi l'accesso delle auto è limitato, come spiega la sezione seguente."),
    {
      type: "image",
      src: `${IMG}/passo-giau-road.webp`,
      alt: "Una strada di montagna che serpeggia tra pendii verdi e rocce sotto cime frastagliate, vicino al Passo Giau",
      caption: "La strada vicino al Passo Giau, tra Cortina e la Val Fiorentina.",
      credit: unsplash("Luca Cavallin", "lucavallin"),
    },

    // ——— 10 ———
    h2("Le regole di accesso nei luoghi più frequentati"),
    p("Per gestire il traffico e proteggere ambienti fragili, alcuni dei luoghi più famosi limitano le auto nei mesi di punta. Ecco le regole del 2026: vengono riviste ogni anno, quindi controlla le pagine ufficiali prima di partire."),
    table(
      ["Luogo", "Che cosa vale (2026)", "Alternative"],
      [
        ["Lago di Braies", "Dal 1° luglio al 15 settembre, dalle 9 alle 16, in valle si entra solo con i mezzi pubblici, a piedi, in bici o con prenotazione online o permesso valido", "Autobus; arrivo prima delle 9 o dopo le 16 (parcheggio non garantito)"],
        ["Tre Cime (Rifugio Auronzo)", "Per percorrere la strada a pedaggio fino al parcheggio serve una prenotazione online anticipata; 40 € per auto nel 2026. La strada è in genere aperta da fine maggio a fine ottobre, meteo permettendo", "Verificare gli autobus per le proprie date, oppure arrivare a piedi da altre valli"],
        ["Alpe di Siusi", "Strada chiusa alle auto private dalle 9 alle 17 quando la cabinovia è in funzione; dal 29 giugno 2026 parcheggi da prenotare online", "Cabinovia da Siusi; autobus linea 10"],
      ],
      "Regole e prezzi verificati sui siti ufficiali a settembre 2026.",
    ),
    p("La visita al **Lago di Braies** è gratuita, ma si chiede di non fare il bagno, perché il lago si trova in un parco naturale. Alle **Tre Cime** la strada a pedaggio può essere chiusa per sicurezza in caso di maltempo. Sull'**Alpe di Siusi**, nelle mezze stagioni, quando la cabinovia è ferma, la strada è aperta tutto il giorno."),
    p("La Provincia di Bolzano ha inoltre avviato, da settembre 2026, una fase di test digitale per un progetto di moderazione del traffico al **Passo Gardena**. Nel 2026 non ci sono state limitazioni fisiche, ma per le prossime estati si discute di altre misure sui passi del Sella. Anche altri luoghi molto frequentati hanno introdotto misure locali per gestire l'afflusso: prima di contare su un programma, verifica le ultime novità."),
    important("Le regole di Braies, Tre Cime e Alpe di Siusi vengono stabilite ogni anno. Per luglio e agosto prenota presto e controlla sempre la pagina ufficiale dell'anno in corso.", "Da verificare prima di partire"),

    // ——— 11 ———
    h2("Dove dormire nelle Dolomiti"),
    p("Scegli la base in funzione di come ti sposterai e di che cosa vuoi fare. Cambiare alloggio una volta in una settimana va bene; cambiarlo ogni sera no."),
    ul(
      "**Ortisei** — il paese più vivace della Val Gardena, con impianti verso Seceda e l'Alpe di Siusi e buoni collegamenti in autobus. Adatto a chi viene per la prima volta senza auto.",
      "**Selva di Val Gardena** — in testa alla valle, vicino ai passi del Sella e agli impianti. Adatto a vacanze attive e allo sci.",
      "**Corvara e San Cassiano** — paesi più tranquilli dell'Alta Badia, con ottimi ristoranti. Adatti a una base rilassata tra i passi.",
      "**Cortina d'Ampezzo** — una cittadina con più scelta di negozi e locali e autobus diretti da Venezia. Adatta a chi vuole un'atmosfera più urbana.",
      "**Canazei** — il centro principale della Val di Fassa, con molti impianti. Adatto a famiglie e a chi usa i trasporti della Guest Card.",
      "**Dobbiaco o San Candido** — sulla ferrovia della Val Pusteria. Adatti per Braies, le Tre Cime e i viaggi senza auto.",
    ),
    p("Si va dai grandi alberghi alle pensioni a conduzione familiare e agli agriturismi nei masi, spesso con mezza pensione. La maggior parte dei comuni applica un'imposta di soggiorno per notte, che di solito si paga in struttura, con importi diversi secondo la zona e la categoria dell'alloggio. Per il budget, vedi [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia)."),

    // ——— 12 ———
    h2("Che cosa vedere al primo viaggio"),
    p("Più che una lista di panorami famosi, ragiona per esperienze: una cresta in quota, un lago, una passeggiata sull'alpeggio, un passo, un paese. Questi luoghi le coprono bene."),
    h3("Seceda"),
    p("Da Ortisei gli impianti salgono al Seceda, dove i pendii erbosi terminano di colpo sulla cresta frastagliata delle Odle: uno dei panorami più fotografati delle Dolomiti. Dalla stazione a monte, sentieri facili seguono la cresta con vista ampia. Nelle giornate estive c'è moltissima gente; con le prime corse del mattino si sta più tranquilli."),
    h3("Tre Cime di Lavaredo"),
    p("Le tre torri di roccia delle Tre Cime sono il simbolo delle Dolomiti. Dal Rifugio Auronzo parte un giro ad anello molto frequentato, su sentieri battuti, ma si parte a oltre 2.300 metri: meteo e allenamento contano comunque. Organizza l'accesso in anticipo (vedi sopra)."),
    {
      type: "image",
      src: `${IMG}/tre-cime-dreizinnenhuette.webp`,
      alt: "Le tre torri rocciose delle Tre Cime di Lavaredo sopra un altopiano pietroso, con un rifugio sulla sinistra",
      caption: "Le pareti nord delle Tre Cime, con il Rifugio Locatelli (Dreizinnenhütte) a sinistra.",
      credit: unsplash("Jarco Penning", "jarcopenning"),
      wide: true,
    },
    h3("Lago di Braies"),
    p("Un lago verde con barche di legno e una palafitta, sotto la parete ripida della Croda del Becco. Il sentiero pianeggiante lungo la riva è tra le passeggiate più facili delle Dolomiti. D'estate è affollatissimo: il mattino presto e il tardo pomeriggio sono i momenti più tranquilli, sempre nel rispetto delle regole di accesso."),
    {
      type: "image",
      src: `${IMG}/lago-di-braies-boathouse.webp`,
      alt: "Una casetta di legno sull'acqua e barche a remi sul lago verde e calmo di Braies, con le montagne riflesse",
      caption: "Il Lago di Braies (Pragser Wildsee), nel Parco naturale Fanes-Senes-Braies.",
      credit: unsplash("Samuele Errico Piccarini", "samuele_piccarini"),
    },
    h3("Alpe di Siusi"),
    p("Pascoli ondulati, baite di legno e grandi viste su Sassolungo e Sciliar. Perfetta per passeggiate tranquille e per le famiglie, bella sia d'estate sia d'inverno."),
    h3("I grandi passi"),
    p("Passo Gardena, Passo Sella, Passo Pordoi e Passo Campolongo circondano il gruppo del Sella; Passo Giau e Passo Falzarego sono vicini a Cortina. Ognuno ha punti panoramici, rifugi e sentieri, e diversi hanno impianti. Anche senza camminare, una giornata sui passi fa capire le dimensioni della catena."),
    h3("Val di Funes"),
    p("Una valle tranquilla con uno dei panorami più riconoscibili delle Dolomiti: la chiesetta di Santa Maddalena con le Odle alle spalle. Merita una notte, oppure una gita abbinata a Bressanone."),

    // ——— 13 ———
    h2("Escursioni per chi è alle prime armi"),
    p("I sentieri delle Dolomiti vanno dai percorsi pianeggianti adatti ai passeggini alle vie esposte che richiedono esperienza alpinistica. La differenza è sostanziale: un itinerario che sembra breve può avere tratti ripidi, ghiaioni o passaggi attrezzati con cavi."),
    ul(
      "**Scegli il livello giusto** — le passeggiate facili seguono sentieri larghi o strade forestali. I sentieri di montagna hanno segnavia bianco-rossi numerati e possono essere ripidi e sassosi. Una **via ferrata** richiede imbrago, casco, set da ferrata ed esperienza, oppure una guida alpina.",
      "**Calzature** — scarponcini o scarpe da escursionismo con suola scolpita, anche per le passeggiate più frequentate. Le scarpe da ginnastica scivolano su ghiaia e roccia bagnata.",
      "**Meteo** — controlla le previsioni la sera prima e al mattino. Parti presto e torna indietro se si formano temporali.",
      "**Quota** — molte escursioni partono sopra i 2.000 metri, dove ci si stanca prima e fa molto più freddo che in valle.",
      "**Orientamento** — porta una carta o un'app con mappe offline, e non contare sul segnale del telefono.",
      "**Condizioni dei sentieri** — a inizio estate la neve può resistere in quota, e a volte frane chiudono dei tratti. Chiedi all'ufficio turistico.",
      "**Buone regole** — resta sui sentieri segnati, richiudi i cancelli, riporta a valle i rifiuti e non raccogliere fiori: molte aree sono protette.",
    ),
    important("In caso di emergenza chiama il 112. Lascia detto a qualcuno il tuo itinerario, porta acqua, telefono carico e uno strato caldo, e valuta un'assicurazione che copra il soccorso in montagna.", "Sicurezza"),
    p("Se sei alle prime esperienze in montagna, un percorso raggiungibile con gli impianti su un altopiano — l'Alpe di Siusi, la cresta del Seceda o il Pralongià in Alta Badia — è un buon inizio. Le guide alpine e gli uffici turistici locali possono consigliare itinerari e organizzare escursioni accompagnate."),

    // ——— 14 ———
    h2("Rifugi: come funzionano"),
    p("Il **rifugio** è una struttura in quota, spesso raggiungibile solo a piedi o con gli impianti, che offre pasti caldi agli escursionisti e, di solito, camere semplici o camerate. Molti sono gestiti da famiglie o da associazioni alpinistiche come il CAI (Club Alpino Italiano). Non sono alberghi: le camere sono essenziali, i bagni spesso in comune, e il bello è svegliarsi tra le montagne."),
    ul(
      "**Stagione** — i rifugi d'alta quota aprono in genere da metà giugno a fine settembre; quelli più bassi o vicini agli impianti possono restare aperti più a lungo, e alcuni aprono anche d'inverno. Le date variano da rifugio a rifugio.",
      "**Prenotazione** — per dormire conviene prenotare, soprattutto a luglio e agosto. Molti rifugi accettano prenotazioni dirette; il CAI ha anche una piattaforma online.",
      "**Cucina** — piatti sostanziosi della tradizione a pranzo; per la notte la formula più comune è la mezza pensione (cena, pernottamento e colazione).",
      "**Pagamenti** — nei rifugi più isolati le carte non sono sempre accettate: porta un po' di contanti.",
      "**Che cosa portare** — sacco lenzuolo (spesso obbligatorio), asciugamano piccolo, beauty, frontale e tappi per le orecchie.",
    ),
    {
      type: "image",
      src: `${IMG}/rifugio-lagazuoi.webp`,
      alt: "Il Rifugio Lagazuoi, una grande costruzione rivestita in legno su una vetta rocciosa, circondata da cime grigie",
      caption: "Il Rifugio Lagazuoi, sopra il Passo Falzarego vicino a Cortina, raggiungibile in funivia o a piedi.",
      credit: unsplash("Tim Cheung", "timtimbo"),
    },
    p("Prima di partire verifica che il rifugio sia aperto, quanto dura l'avvicinamento e a che ora parte l'ultima corsa dell'impianto, se conti di scendere così."),

    // ——— 15 ———
    h2("Le Dolomiti senza escursioni"),
    p("Non serve essere escursionisti per godersi le Dolomiti: impianti e strade portano i panorami alla portata di tutti."),
    ul(
      "**Impianti panoramici** — sali al Seceda, sull'Alpe di Siusi o al Lagazuoi per la vista e un pranzo in rifugio.",
      "**Paesi** — passeggia per Ortisei, Cortina o Corvara, entra in qualche chiesa, prenditi un caffè in piazza.",
      "**Panorami in auto** — su molti passi ci sono parcheggi con vista sulle cime.",
      "**Laghi** — il giro pianeggiante del Lago di Braies e altri sentieri lungo i laghi di fondovalle.",
      "**Storia** — il fronte della Prima guerra mondiale attraversava queste montagne: intorno al Lagazuoi e alle Cinque Torri, musei all'aperto conservano trincee e gallerie.",
      "**Musei e cultura** — nelle valli, piccoli musei raccontano la lingua ladina, l'intaglio del legno e la vita in montagna.",
      "**Cucina** — i lunghi pranzi in rifugio fanno parte dell'esperienza.",
    ),

    // ——— 16 ———
    h2("Che cosa mettere in valigia"),
    p("In montagna il tempo cambia più che in città, anche nell'arco della stessa giornata. Vestiti a strati."),
    table(
      ["Stagione", "Indispensabili"],
      [
        ["Estate", "Scarpe da escursionismo, giacca impermeabile, pile o piumino leggero, crema solare, cappello, occhiali da sole, zaino piccolo e borraccia"],
        ["Primavera e autunno", "Quanto sopra, più una giacca più pesante, guanti e berretto per le mattine fredde"],
        ["Inverno", "Strati caldi e impermeabili, guanti, berretto, occhiali da sole o maschera, crema solare e scarponi con buona aderenza"],
        ["Sempre", "Power bank, mappe offline, piccolo kit di pronto soccorso, un po' di contanti e una copia dei dati dell'assicurazione"],
      ],
    ),
    p("Per documenti, soldi e il resto della valigia, usa la nostra [checklist per un viaggio in Italia](/it/guide/checklist-viaggio-italia)."),

    // ——— 17 ———
    h2("Cucina e specialità locali"),
    p("La cucina delle Dolomiti rispecchia l'incontro di culture diverse, ed è parecchio lontana da ciò che molti immaginano come \"cucina italiana\"."),
    ul(
      "**Alto Adige** — influenze alpine e austriache: **canederli** (Knödel), **Speck Alto Adige IGP**, **Schlutzkrapfen** (mezzelune ripiene di spinaci e formaggio), strudel di mele e **Kaiserschmarrn**, la frittata dolce sminuzzata e caramellata.",
      "**Trentino** — polenta, formaggi di malga come il Puzzone di Moena, piatti sostanziosi a base di funghi e selvaggina.",
      "**Cortina e l'Ampezzo** — i **casunziei**, pasta ripiena di barbabietola condita con burro e semi di papavero.",
      "**Valli ladine** — piatti come le **turtres**, frittelle ripiene salate, servite spesso nei rifugi e nelle trattorie di famiglia.",
    ),
    p("Il pranzo in rifugio fa parte della giornata in montagna. La sera molti alberghi propongono la mezza pensione, comoda se il paese ha pochi ristoranti."),

    // ——— 18 ———
    h2("Gli errori più comuni"),
    ul(
      "**Voler vedere troppo.** Passare in due giorni da Seceda a Braies alle Tre Cime lascia poco tempo per godersi ciascun posto.",
      "**Sottovalutare il meteo.** Una mattina di sole può finire con un temporale, e in quota fa molto più freddo.",
      "**Pensare che tutto sia aperto tutto l'anno.** Impianti, rifugi e alcune strade seguono orari stagionali.",
      "**Non controllare le regole di accesso.** A Braies, alle Tre Cime e sull'Alpe di Siusi si rischia di essere fermati alla sbarra.",
      "**Trattare la montagna come una città.** Gli spostamenti richiedono più tempo, e i sentieri scarpe adatte e preparazione.",
      "**Scegliere l'alloggio senza pensare ai trasporti.** Una camera economica lontana dagli autobus può costare ore ogni giorno.",
      "**Seguire lo stesso programma in ogni stagione.** Un itinerario estivo non funziona d'inverno, e viceversa.",
    ),

    // ——— 19 ———
    h2("Esempi di programma"),
    p("Non sono itinerari fissi, ma schemi da adattare a stagione, meteo e interessi. Verifica orari e regole di accesso per le tue date."),
    h3("3 giorni: una sola zona"),
    p("Base in **Val Gardena**. Un giorno sull'Alpe di Siusi, uno al Seceda e sulle passeggiate di cresta, il terzo sui passi del Sella in auto o in autobus, oppure a Ortisei. Scambia i giorni in base alle previsioni."),
    h3("5 giorni: uno sguardo più ampio"),
    p("Tre notti in **Val Gardena o in Alta Badia** e due a **Cortina o in Alta Pusteria**. Dalla prima base: Seceda, Alpe di Siusi e passi; dalla seconda: Tre Cime e Lago di Braies, ricordando di prenotare gli accessi d'estate."),
    h3("7 giorni: più basi"),
    p("Combina **Val di Funes** (una notte), **Val Gardena o Alta Badia** (tre notti) e **Cortina o Alta Pusteria** (tre notti). Aggiungi un'escursione lunga, una notte in rifugio o una giornata di riposo in paese. Arriva da Verona o Bolzano e riparti verso Venezia, o viceversa."),
    tip("In ogni programma tieni un giorno flessibile. Se le previsioni sono brutte, usalo per un paese, un museo o una passeggiata a bassa quota, e rimanda i percorsi in quota alla giornata limpida.", "Il giorno per il maltempo"),

    // ——— 20 ———
    h2("Checklist per organizzare il viaggio"),
    p("Spunta le voci man mano: i progressi restano salvati su questo dispositivo."),
    checklist(
      "dolomiti-preparativi",
      ["Stagione e base", ["Stagione scelta (escursioni d'estate o sport invernali)", "Una o due basi individuate", "Alloggio prenotato", "Imposta di soggiorno e mezza pensione verificate"]],
      ["Trasporti", ["Deciso tra auto e mezzi pubblici", "Carta ospite verificata con l'alloggio", "Orari di treni e autobus controllati per le tue date", "Gomme invernali o catene, se guidi d'inverno"]],
      ["Accessi e impianti", ["Accesso a Braies, Tre Cime o Alpe di Siusi prenotato, se serve", "Stagione e orari degli impianti verificati", "Parcheggi pianificati per i sentieri"]],
      ["Sicurezza in montagna", ["Previsioni controllate", "Scarpe da escursionismo e strati in valigia", "Percorsi adatti alla tua esperienza", "Rifugi prenotati per le notti in quota"]],
      ["Documenti e app", ["Assicurazione di viaggio, con soccorso in montagna", "Mappe offline scaricate", "Numero di emergenza salvato: 112", "Conferme delle prenotazioni salvate offline"]],
    ),
    p("Regole di accesso, prezzi e date di questa guida sono stati verificati su fonti ufficiali a settembre 2026. Cambiano ogni anno: controlla le pagine ufficiali prima di partire. Per il resto del viaggio, vedi la nostra [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Le Dolomiti sono adatte a chi ci va per la prima volta?", answer: "Sì. Impianti, sentieri ben segnati e buone strutture permettono di godersi il paesaggio senza esperienza alpinistica. L'importante è scegliere una o due basi e adattare le attività alla forma fisica e alla stagione." },
    { question: "Quanti giorni servono per le Dolomiti?", answer: "Tre giorni bastano per una zona, quattro o cinque per un quadro più ampio, una settimana o più per combinare diverse valli. Calcola almeno tre notti per base." },
    { question: "Serve l'auto per visitare le Dolomiti?", answer: "No, se soggiorni in un paese ben collegato come Ortisei, Cortina o Dobbiaco e viaggi in alta stagione. Con l'auto è più facile combinare più valli e arrivare presto ai sentieri." },
    { question: "Qual è il periodo migliore per andare nelle Dolomiti?", answer: "Da fine giugno a metà settembre per le escursioni, quando sono aperti quasi tutti gli impianti e i rifugi; indicativamente da dicembre ad aprile per lo sci. Nei periodi intermedi è tranquillo, ma molti servizi sono chiusi." },
    { question: "Si possono visitare le Dolomiti senza fare escursioni?", answer: "Sì. Impianti panoramici, strade di montagna, laghi, paesi, pranzi in rifugio e i luoghi della Grande Guerra le rendono piacevoli anche senza lunghe camminate." },
    { question: "Dove dormire nelle Dolomiti la prima volta?", answer: "La Val Gardena (Ortisei o Selva) è la base più versatile; Cortina è adatta a chi vuole una cittadina; Dobbiaco o San Candido a chi viaggia in treno; Alta Badia e Val di Fassa sono buone basi per tutto." },
    { question: "Le Dolomiti sono care?", answer: "Estate e stagione sciistica sono alta stagione, e alloggio, impianti e parcheggi si fanno sentire. Aiutano la mezza pensione, le carte ospite con trasporti inclusi e i mesi di giugno o settembre." },
    { question: "Si può andare nelle Dolomiti d'inverno?", answer: "Sì. È la stagione dello sci, con i comprensori Dolomiti Superski aperti di solito indicativamente da dicembre ad aprile. Chi non scia può fare ciaspolate, passeggiate e slittino. Prima di guidare controlla strade e neve." },
    { question: "Ci si muove bene con i mezzi pubblici?", answer: "Sì. Treni regionali e autobus servono le valli principali, e molti alloggi altoatesini includono il Südtirol Guest Pass. Gli orari cambiano con la stagione: verificali per le tue date." },
    { question: "Le principali attrazioni sono aperte tutto l'anno?", answer: "Il paesaggio c'è sempre, ma impianti, rifugi e strade di accesso seguono calendari stagionali. La strada a pedaggio delle Tre Cime, per esempio, è in genere aperta da fine maggio a fine ottobre." },
    { question: "Bisogna prenotare i rifugi?", answer: "Per dormire sì, soprattutto a luglio e agosto. Per il pranzo di solito non serve, ma controlla che il rifugio sia aperto." },
    { question: "Serve la prenotazione per il Lago di Braies e le Tre Cime?", answer: "Nel 2026, per entrare in auto in Val di Braies tra le 9 e le 16 dal 1° luglio al 15 settembre serviva una prenotazione online, e per la strada a pedaggio delle Tre Cime serviva sempre la prenotazione online. Controlla i siti ufficiali per l'anno in corso." },
    { question: "Che cosa portare nelle Dolomiti?", answer: "D'estate scarpe da escursionismo con buona suola, giacca impermeabile, uno strato caldo, protezione solare e uno zainetto; d'inverno strati caldi e impermeabili e scarponi con buona aderenza." },
  ],

  sourcesTitle: "Fonti ufficiali",
  sources: [
    { label: "UNESCO World Heritage Centre — The Dolomites", url: "https://whc.unesco.org/en/list/1237/", note: "iscrizione nel Patrimonio dell'Umanità" },
    { label: "Fondazione Dolomiti UNESCO", url: "https://www.dolomitiunesco.info/", note: "i nove sistemi del sito" },
    { label: "Braies — sito ufficiale", url: "https://www.prags.bz/it", note: "regole di accesso e parcheggi al Lago di Braies" },
    { label: "Parcheggio Tre Cime di Lavaredo — Auronzo", url: "https://auronzo.info/parcheggio-tre-cime-di-lavaredo/", note: "prenotazione e tariffe della strada a pedaggio" },
    { label: "Alpe di Siusi — accesso (in inglese)", url: "https://www.seiseralm.it/en/info-service/mobility/access-to-seiser-alm.html", note: "regole per le auto e prenotazione dei parcheggi" },
    { label: "Provincia di Bolzano — Passo Gardena, fase di test digitale (in tedesco)", url: "https://news.provinz.bz.it/de/news/verkehrsberuhigung-am-grodner-joch-ab-september-digitale-testphase", note: "progetto di moderazione del traffico" },
    { label: "Südtirol Guest Pass", url: "https://www.suedtirol.info/it/it/informazioni/suedtirol-guest-pass", note: "trasporti pubblici per gli ospiti" },
    { label: "Val di Fassa Guest Card", url: "https://www.fassa.com/it/card-e-vantaggi/val-di-fassa-guest-card", note: "trasporti e vantaggi" },
    { label: "südtirolmobil", url: "https://www.suedtirolmobil.info/it/", note: "orari in Alto Adige" },
    { label: "Cortina Express", url: "https://www.cortinaexpress.it/", note: "autobus da Venezia e Treviso" },
    { label: "Dolomiti Bus", url: "https://tourism.dolomitibus.it/", note: "autobus nelle Dolomiti bellunesi" },
    { label: "Dolomiti Superski", url: "https://www.dolomitisuperski.com/it", note: "comprensori, stagione e assicurazione" },
    { label: "CAI — prenotazione rifugi", url: "https://www.prenotarifugi.cai.it/", note: "rifugi del Club Alpino Italiano" },
    { label: "Avalanche.report", url: "https://avalanche.report/", note: "bollettino valanghe per Alto Adige, Trentino e Tirolo" },
  ],
};
