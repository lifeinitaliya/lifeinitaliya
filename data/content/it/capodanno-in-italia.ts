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

const IMG = "/images/events/new-years-eve-italy";

export const capodannoInItalia: ArticleContent = {
  body: [
    answer("**Il Capodanno in Italia si festeggia in piazza, a tavola e in compagnia.** Ogni città ha il suo carattere: Roma con il concertone gratuito al Circo Massimo (tradizione consolidata dal 2022), Napoli con i fuochi d'artificio sul golfo, Venezia con lo spettacolo pirotecnico sul Bacino di San Marco, Milano con la prospettiva di un ritorno in Piazza Duomo dopo anni di assenza. Questa guida distingue le tradizioni consolidate dai programmi ufficiali 2026–2027, che non sono stati ancora comunicati al momento della stesura (ottobre 2026)."),

    {
      type: "facts",
      title: "Capodanno in Italia 2026–2027 in sintesi",
      rows: [
        { label: "Data chiave", value: "31 dicembre 2026 (San Silvestro) → 1 gennaio 2027 (Capodanno, festività nazionale)" },
        { label: "Festività", value: "Il 1° gennaio è festività nazionale: la maggior parte dei negozi e delle imprese è chiusa. Il 31 dicembre è un giorno lavorativo normale." },
        { label: "Programmi ufficiali", value: "La maggior parte delle città non ha ancora pubblicato il programma di Capodanno 2026–2027 (ottobre 2026). Verificate sui siti delle amministrazioni comunali da novembre" },
        { label: "Tradizione di Roma", value: "Concerto gratuito al Circo Massimo (in programma dal 2022 al 2025); edizione 2026 non ancora confermata" },
        { label: "Sviluppo a Milano", value: "Il Comune di Milano stava cercando un organizzatore per un concerto in Piazza Duomo (luglio 2026) — primo dal 2019" },
        { label: "Ideale per", value: "Chi ama stare a tavola, l'atmosfera cittadina e la flessibilità sugli eventi specifici" },
        { label: "Prenotare prima", value: "Alberghi e ristoranti (cenoni) si esauriscono mesi prima: prenotate il prima possibile" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Conviene festeggiare il Capodanno in Italia?",
        "Dove festeggiare il Capodanno",
        "Guida città per città",
        "Le tradizioni del Capodanno italiano",
        "Il cenone e i ristoranti",
        "Meteo e cosa mettere in valigia",
        "Come spostarsi la notte di Capodanno",
        "Lista di controllo",
        "Idee di itinerario",
      ],
    },

    image("rome-piazza-del-popolo-nye", "Una folla riunita intorno all'albero di Natale illuminato in Piazza del Popolo a Roma, in una sera d'inverno", true),

    h2("Conviene festeggiare il Capodanno in Italia?"),
    p("Il Capodanno è una delle notti più costose e più affollate dell'anno nelle grandi città italiane. Gli alberghi applicano sovrapprezzi significativi, i ristoranti aprono quasi esclusivamente con menu fissi a prezzo fisso (*cenone*), e le piazze più famose possono diventare molto affollate. Al tempo stesso, il Capodanno italiano ha una sua energia particolare: le piazze si riempiono spontaneamente, i fuochi d'artificio domestici si moltiplicano su tetti e balconi, e il passaggio al nuovo anno avviene con una partecipazione collettiva difficile da trovare altrove."),
    p("La scelta di quale città visitare dipende soprattutto dall'atmosfera cercata: Roma per i grandi concerti all'aperto, Napoli per i fuochi e la vitalità del golfo, Venezia per il paesaggio unico, Bologna per la qualità gastronomica e un ritmo più sostenuto. La logistica — prenotazioni, trasporti, zone a traffico limitato — va pianificata con molto anticipo."),
    note("**Una nota sui programmi 2026–2027.** Al momento della stesura di questo articolo (ottobre 2026), nessuna città italiana aveva pubblicato il programma ufficiale di Capodanno per il 31 dicembre 2026. I comuni e le amministrazioni locali comunicano di solito i dettagli tra novembre e dicembre. In questa guida distinguiamo tra tradizioni consolidate (ciò che è accaduto negli anni precedenti) e conferme ufficiali 2026–2027 (ciò che è formalmente annunciato per questa stagione). Verificate sempre con la fonte ufficiale prima di prenotare un viaggio in funzione di un evento specifico."),

    h2("Dove festeggiare il Capodanno"),
    p("Ogni città italiana offre un'esperienza diversa per la notte di San Silvestro. La tabella seguente riassume la situazione delle principali mete, con i dati disponibili a ottobre 2026."),
    table(
      ["Città", "Atmosfera", "Stato 2026–2027", "Cosa prenotare subito"],
      [
        ["Roma", "Concerto gratuito al Circo Massimo + piazze affollate", "Non ancora annunciato; verificate turismoroma.it", "Alloggio e cenone, con largo anticipo"],
        ["Napoli", "Concerto in Piazza del Plebiscito + fuochi sul golfo", "Non ancora annunciato; verificate comune.napoli.it", "Alloggio e cenone; i fuochi sono permessi a Napoli"],
        ["Firenze", "Fuochi privati a mezzanotte; concerti in piazza", "Nessun programma centrale; singoli locali comunicano separatamente", "Cenone in anticipo; zona a traffico limitato in vigore"],
        ["Milano", "Possibile ritorno del concerto in Piazza Duomo (primo dal 2019)", "Bando per organizzatore aperto a luglio 2026; non ancora confermato", "Alloggio presto; accesso alla piazza con limitazioni di capienza"],
        ["Venezia", "Fuochi sul Bacino di San Marco; feste in strada", "Regole specifiche non ancora pubblicate; verificate veneziaunica.it", "Fuochi e bevande in vetro vietati; cancelli pedonali previsti"],
        ["Bologna", "Countdown in Piazza Maggiore; cenoni di qualità", "Nessun grande evento municipale annunciato", "Più tranquilla di Roma/Napoli; più facile trovare ristorante"],
        ["Torino", "Piazze del centro, eventi nei ristoranti", "Nessun grande evento all'aperto annunciato", "Buona base per le Alpi in inverno"],
      ],
      "Dati al ottobre 2026. Verificate sui siti ufficiali delle città per aggiornamenti."
    ),

    h2("Guida città per città"),

    h3("Roma"),
    p("Il Capodanno a Roma ruota attorno al *Concertone al Circo Massimo* — uno spettacolo gratuito all'aperto organizzato ogni anno da Roma Capitale nell'antico anfiteatro romano. L'evento è in programma ininterrottamente dal 2022, con artisti di primo piano della musica italiana e decine di migliaia di spettatori. Il mezzanotte è scandito dal conto alla rovescia e dai fuochi d'artificio. Il 1° gennaio, il programma *Capodarte* offre accesso gratuito o ridotto a musei, gallerie e siti culturali di tutta la città."),
    p("L'edizione 2026–2027 non è stata ancora confermata ufficialmente (ottobre 2026). La collaborazione tra Roma Capitale e gli organizzatori viene di solito annunciata a fine novembre o inizio dicembre. Consultate [turismoroma.it](https://www.turismoroma.it/) per gli aggiornamenti."),
    p("Indipendentemente dal programma ufficiale, le piazze di Roma — Piazza Navona, Piazza del Popolo, Piazza di Spagna, Campo de' Fiori — si riempiono spontaneamente a mezzanotte. I fuochi d'artificio privati sono stati limitati nelle zone centrali negli ultimi anni; verificate le ordinanze comunali quando vengono pubblicate."),
    tip("Il Circo Massimo, se il concerto viene confermato, esaurisce la capienza. Arrivate presto; l'accesso pedonale può essere chiuso una volta raggiunto il limite. Le Terme di Caracalla nelle vicinanze sono un buon punto di raccolta alternativo."),
    image("rome-colosseum-night", "Il Colosseo illuminato di notte con una folla riunita ai piedi dell'anfiteatro"),

    h3("Napoli"),
    p("Napoli celebra il Capodanno con più rumore di quasi tutte le altre città italiane. I fuochi d'artificio privati — ancora permessi a Napoli negli anni recenti, mentre molte città del nord li hanno vietati — riempiono il cielo sul golfo dalle 23:30 in poi. Il fulcro istituzionale è tradizionalmente il concerto gratuito in Piazza del Plebiscito, la grande piazza barocca di fronte al Palazzo Reale, che si protrae fino al 1° gennaio."),
    p("Il programma 2026–2027 non è ancora stato confermato. In anni precedenti il Comune di Napoli ha finanziato un *Capodanno lungo* di tre giorni (29–31 dicembre e 1° gennaio) con una spesa di circa 750.000 euro. Per i dettagli confermati, consultate comune.napoli.it quando saranno pubblicati."),
    p("Il punto più suggestivo per assistere ai fuochi d'artificio privati sul golfo è il Lungomare Caracciolo, la passeggiata a mare che va da Castel dell'Ovo verso Mergellina. La vista sul golfo verso il Vesuvio, con i fuochi che esplodono da barche, balconi e quartieri collinari, è un'esperienza unica nel panorama del Capodanno italiano."),
    image("naples-waterfront-night", "Le luci di Napoli riflesse nel golfo di notte, con la città che sale sul versante collinare alle spalle del lungomare"),

    h3("Firenze"),
    p("Il Capodanno a Firenze è organizzato a livello municipale e di quartiere, non attraverso un unico grande spettacolo centrale. Le piazze principali — Piazza della Repubblica, Piazza Santa Croce, Piazza della Signoria — si riempiono per il conto alla rovescia. I fuochi d'artificio privati esplodono a mezzanotte in tutta la città. Non esiste uno spettacolo pirotecnico municipale garantito il 31 dicembre: il tradizionale appuntamento ufficiale con i fuochi a Firenze è la festa di San Giovanni (24 giugno), non il Capodanno."),
    p("Firenze si presta a una notte di San Silvestro raccolta e gastronomicamente eccellente. Il cenone in una trattoria tradizionale fiorentina o toscana è tra le esperienze più soddisfacenti del viaggio. Verificate il programma del Comune di Firenze su comune.fi.it quando sarà disponibile."),
    image("florence-night-skyline", "Lo skyline illuminato di Firenze di notte, con la cupola del Duomo e la torre di Palazzo Vecchio che si stagliano sopra la città"),

    h3("Milano"),
    p("Milano non aveva organizzato un grande concerto gratuito in Piazza Duomo per il Capodanno da quella del 2019–2020. Nel luglio 2026 il Comune di Milano ha pubblicato un avviso per cercare un soggetto organizzatore che si facesse carico dell'organizzazione e dei costi di un evento per il Capodanno 2027 in Piazza Duomo. Il sindaco Beppe Sala aveva espresso supporto al ritorno della manifestazione. Al momento della stesura nessun programma, data o line-up artistica era stata confermata."),
    p("Se il concerto venisse confermato, sarebbe il primo grande evento gratuito di Capodanno all'ombra della Madonnina da prima della pandemia. Negli anni senza un evento centrale in Piazza Duomo, Milano ha celebrato il Capodanno con cene private, eventi negli hotel e raduni nei quartieri Navigli e Brera. Per aggiornamenti: comune.milano.it."),
    image("milan-duomo-night", "La Cattedrale di Milano illuminata in luce dorata contro un cielo notturno profondo"),

    h3("Venezia"),
    p("I fuochi d'artificio di Capodanno sul Bacino di San Marco sono uno degli spettacoli più caratteristici di Venezia. Il punto di osservazione ideale è la Riva degli Schiavoni — il lungo lungomare a est di Piazza San Marco, verso l'Arsenale. I fuochi **non** si vedono da Piazza San Marco né dalla Piazzetta: la vista è bloccata dal Palazzo Ducale e dagli edifici circostanti."),
    p("Venezia applica misure di gestione della folla particolarmente severe la notte di San Silvestro, pubblicate dalla Questura e dal Comune di solito a dicembre. Negli ultimi anni hanno incluso: cancelli pedonali sulle calli principali di accesso al centro storico; divieto di vendita e consumo di bevande in bottiglie di vetro, plastica e lattine dalle 19:00 del 31 dicembre alle 6:00 del 1° gennaio; limitazioni di ormeggio nella zona dei fuochi dalle 21:00. Le zone potrebbero chiudersi a capienza raggiunta. Consultate [veneziaunica.it](https://www.veneziaunica.it/) per le regole specifiche del 2026–2027 quando saranno pubblicate."),
    tip("Arrivate all'area di osservazione sulla Riva degli Schiavoni entro le 22:00 per trovare una buona posizione. I vaporetti circolano la notte di Capodanno con orario modificato; consultate actv.avmspa.it per l'orario confermato."),
    image("venice-canal-night", "Edifici illuminati e i loro riflessi in un canale veneziano in una calma notte invernale"),

    h3("Bologna"),
    p("Bologna offre uno dei Capodanni più autentici d'Italia senza le pressioni logistiche delle grandi metropoli. Piazza Maggiore si riempie per il conto alla rovescia, e i 38 chilometri di portici — Patrimonio UNESCO — rendono la città comodissima da percorrere anche con brutto tempo. Il cenone bolognese è tra i migliori d'Italia: tortellini in brodo, cotechino con lenticchie, tagliatella al ragù. I migliori ristoranti si prenotano mesi prima."),
    p("Il 1° gennaio, una passeggiata al Santuario della Madonna di San Luca — 40 minuti in salita sotto 666 archi di portici — è uno dei rituali dell'anno nuovo bolognese. Per orientarsi in città, la [guida a Bologna in due giorni](/it/citta/bologna-in-due-giorni) è il punto di partenza."),

    h3("Torino"),
    p("Torino celebra il Capodanno con eventi nei ristoranti, raduni in Piazza Castello e lungo la sponda del Po. Le cioccolaterie storiche e i caffè storici di Piazza San Carlo sono aperti nei giorni a cavallo del Capodanno. La Mole Antonelliana è illuminata per la festività. Torino è una base pratica per una vacanza combinata città-neve: le stazioni sciistiche alpine (Sestriere, Bardonecchia) distano 45–60 minuti in auto. La [guida a Torino](/it/citta/torino-per-la-prima-volta) copre i principali itinerari."),

    image("rome-spanish-steps-night", "La scalinata di Trinità dei Monti illuminata di notte, con la chiesa in cima e la gente riunita nella piazza sottostante"),

    h2("Le tradizioni del Capodanno italiano"),
    p("Il *Capodanno* in Italia ha un rituale preciso: si festeggia a tavola, in famiglia o con gli amici, con cibo che porta fortuna e un brindisi allo scoccare della mezzanotte. Le tradizioni variano per regione, ma condividono alcuni elementi riconoscibili."),

    h3("Il cenone"),
    p("Il *cenone di Capodanno* è il pasto più importante della notte: un pranzo lungo, multi-portata, che inizia tipicamente tra le 20:00 e le 21:00 e si prolunga fino a mezzanotte o oltre. I ristoranti propongono menu fissi che includono antipasto, primo, secondo, dolce e brindisi di mezzanotte; alcuni aggiungono musica dal vivo o DJ set. Le famiglie italiane organizzano i propri cenoni in casa, spesso fino all'alba."),
    p("Per i visitatori stranieri, il cenone è sia un'esperienza che un obbligo logistico: il 31 dicembre quasi nessun ristorante di qualità accetta clienti senza prenotazione, e i menu fissi vanno confermati (spesso con caparra) con settimane o mesi di anticipo. Verificate i termini di cancellazione prima di prenotare."),

    h3("Le lenticchie e il cotechino"),
    p("La tradizione del Capodanno più diffusa in tutta Italia è il piatto di lenticchie con cotechino o zampone. Le lenticchie, per la loro forma che ricorda una moneta, simboleggiano prosperità e ricchezza — la tradizione ha radici romane. Il cotechino è un grande insaccato di maiale cotto a lungo, tipico dell'Emilia-Romagna (la versione di Modena ha il marchio IGP); lo zampone è uno zampetto di maiale farcito con un impasto simile. Entrambi vengono serviti con le lenticchie e spesso con purè di patate o mostarda."),
    p("Nelle zone costiere e nel Sud il cenone si sposta sul pesce: una sequenza di portate ittiche che in Campania, Sicilia e Puglia può includere capitone (anguilla), baccalà, crostacei e molluschi. Nel nord Italia — soprattutto in Piemonte ed Emilia-Romagna — dominano i tagli di maiale. Per i visitatori con esigenze alimentari specifiche, è essenziale comunicarlo al momento della prenotazione."),

    h3("La mezzanotte"),
    p("Il brindisi di mezzanotte è con il *prosecco* o con lo *spumante* (Asti Spumante, Franciacorta, o il *vino spumante* locale). In molte case si mangia un cucchiaio di lenticchie allo scoccare della mezzanotte. La biancheria rossa è la tradizione portafortuna più visibile, esposta nelle vetrine dei negozi da novembre. I semi di melograno — per la loro abbondanza, simbolo di prosperità — compaiono su alcune tavole."),
    p("Dopo la mezzanotte le città si svuotano e si riempiono in ondate: chi rientra subito a casa, chi si sposta in locali, bar o piazze per continuare. I trasporti pubblici delle principali città operano con orario prolungato ma non sempre notturno completo; verificate gli orari in anticipo."),

    h2("Il cenone e i ristoranti"),
    p("Il Capodanno è una delle notti con la domanda di posti al ristorante più alta dell'anno. Indicazioni pratiche per chi visita l'Italia:"),
    ul(
      "**Prenotate il prima possibile** — idealmente con due o tre mesi di anticipo per i ristoranti più rinomati. I migliori locali di Roma, Firenze e Bologna sono pieni da ottobre",
      "**Il menu fisso è la norma** — quasi tutti i ristoranti propongono il 31 dicembre un *cenone fisso* a prezzo chiuso che include più portate e spesso il brindisi di mezzanotte. I prezzi variano molto, da circa 50 a oltre 200 euro a persona",
      "**Indicate le esigenze alimentari** — i menu fissi non sono sempre flessibili. Se siete vegetariani, vegani o avete allergie, confermate le possibilità di sostituzione al momento della prenotazione",
      "**Leggete le condizioni di cancellazione** — molti ristoranti richiedono una caparra non rimborsabile e hanno politiche di cancellazione rigide per il Capodanno",
      "**Gli hotel organizzano i propri cenoni** — può essere una soluzione pratica se volete combinare alloggio e cena in un'unica prenotazione",
    ),
    p("Per capire come funziona la ristorazione in Italia, la [guida al galateo a tavola](/it/cibo/galateo-a-tavola) e la [guida alle tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana) coprono le norme che valgono tutto l'anno."),

    h2("Meteo e cosa mettere in valigia"),
    p("Il 31 dicembre è pieno inverno in Italia. Le condizioni variano molto per regione e per anno; i dati climatici sono una guida alle condizioni tipiche, non una previsione per il 2026."),
    table(
      ["Città", "Intervallo temperature tipico (31 dic)", "Condizioni"],
      [
        ["Roma", "6–13 °C", "Spesso soleggiato o parzialmente nuvoloso; piogge occasionali; mite rispetto agli standard invernali europei"],
        ["Napoli", "8–14 °C", "Mite; piogge occasionali; il lungomare è esposto al vento"],
        ["Firenze", "3–11 °C", "Più fresca di Roma; possibile nebbia nella valle dell'Arno; qualche gelata"],
        ["Milano", "1–7 °C", "Fredda, spesso nebbiosa; umida piuttosto che nevosa"],
        ["Venezia", "2–8 °C", "Fredda e umida; possibile acqua alta; il lungomare è molto esposto"],
        ["Bologna", "2–9 °C", "Fredda; nebbia frequente nella Pianura Padana; i portici offrono riparo"],
        ["Torino", "1–7 °C", "Fredda; possibile nebbia; nevicate possibili"],
        ["Palermo", "11–16 °C", "Mite; piogge occasionali; la città più calda d'Italia a dicembre"],
      ],
      "Medie climatiche storiche. Controllate le previsioni effettive per il 31 dicembre 2026 qualche giorno prima della partenza."
    ),
    note("Le medie climatiche non sono previsioni. Controllate il meteo effettivo per il 31 dicembre 2026 prima di partire."),
    ul(
      "Un impermeabile caldo — indispensabile ovunque in Italia a dicembre, specialmente all'aperto a mezzanotte",
      "Scarpe comode e impermeabili con suola antiscivolo — i sampietrini nelle città italiane possono essere scivolosi con il bagnato",
      "Strati caldi e guanti per i festeggiamenti all'aperto nelle città del nord",
      "Una borsa piccola che si porta a contatto con il corpo — le piazze affollate sono ambienti a rischio borseggio",
      "Un ombrello compatto",
      "Un caricabatterie portatile per il telefono — utile per navigare e comunicare durante una lunga serata",
    ),

    h2("Come spostarsi la notte di Capodanno"),

    h3("Trasporti pubblici"),
    p("La maggior parte delle grandi città italiane organizza un servizio di trasporto pubblico prolungato la notte di San Silvestro, ma gli orari variano per città e per anno e vengono solitamente pubblicati solo a dicembre. Non date per scontato che il vostro percorso funzioni tutta la notte; verificate sul sito dell'operatore ufficiale prima del viaggio."),
    ul(
      "**Roma (ATAC)** — tradizionalmente organizza un servizio notturno esteso il 31 dicembre; consultate atac.roma.it per l'orario confermato",
      "**Napoli (ANM)** — di solito servizi metro e bus prolungati; consultate anm.it",
      "**Milano (ATM)** — servizi notturni estesi; consultate atm.it",
      "**Venezia (ACTV)** — i vaporetti circolano con orario modificato; consultate actv.avmspa.it",
      "**Firenze (BUSITALIA)** — consultate il Comune di Firenze o BUSITALIA Toscana per l'orario confermato",
    ),

    h3("Taxi e trasferimenti"),
    p("I taxi sono scarsi in tutte le principali città italiane dopo la mezzanotte di Capodanno. Le app di ride-hailing applicano tariffe dinamiche. Se intendete usare un taxi, prenotate in anticipo un servizio di trasferimento privato a prezzo fisso — molte agenzie offrono questa opzione per la notte di Capodanno. Confermate con attenzione il punto di raccolta: gli indirizzi nei centri storici possono essere complessi, e alcune zone hanno restrizioni al traffico che limitano l'accesso dei veicoli."),

    h3("ZTL e chiusure stradali"),
    p("Ogni grande città italiana impone chiusure temporanee al traffico e orari ZTL estesi la notte di San Silvestro. Entrare nel centro storico di Roma, Firenze, Milano o nelle zone adiacenti di Venezia in auto il 31 dicembre espone a sanzioni automatiche dei varchi ZTL. Se arrivate in auto, parcheggiate prima dell'entrata in vigore delle chiusure (in genere entro le 18:00, a volte prima) o alloggiate fuori dal centro. Le mappe delle chiusure vengono pubblicate dalla polizia municipale di ogni città a dicembre."),
    tip("Per la guida in Italia, le zone ZTL, i pedaggi autostradali e la segnaletica, la [guida alla guida in Italia](/it/trasporti/guidare-in-italia) copre tutto quello che serve sapere."),

    h3("Treni intercity"),
    p("I treni ad alta velocità il 31 dicembre e il 1° gennaio (festività) operano con un orario ridotto. I posti per il 31 dicembre e soprattutto per il 1° gennaio — quando molti rientrano dal Capodanno — si esauriscono con largo anticipo. Prenotate i treni per e da le vostre destinazioni il prima possibile su Trenitalia o Italo. La [guida ai treni in Italia](/it/trasporti/viaggiare-in-italia-in-treno) spiega come acquistare i biglietti e gestire le prenotazioni."),

    h2("Lista di controllo"),
    {
      type: "checklist",
      id: "capodanno-checklist",
      groups: [
        {
          title: "Prenotazioni",
          items: [
            "Prenotate l'alloggio il prima possibile — i prezzi salgono rapidamente avvicinandosi al 31 dicembre",
            "Prenotate il cenone con almeno 2–3 mesi di anticipo per i ristoranti migliori; confermate caparra e condizioni di cancellazione",
            "Se viaggiate in treno tra città, prenotate andata e ritorno in anticipo",
          ],
        },
        {
          title: "Prima di partire",
          items: [
            "Consultate i siti ufficiali delle città tra novembre e dicembre per gli annunci dei programmi municipali",
            "Verificate gli orari dei trasporti pubblici nella città visitata (ATAC, ATM, ACTV, ANM) — pubblicati a dicembre",
            "Verificate eventuali zone di gestione della folla o accessi contingentati per la zona di festeggiamento scelta",
            "Controllate le norme sui fuochi d'artificio privati nella città visitata — variano e cambiano di anno in anno",
            "Confermate con il vostro alloggio le modalità di accesso per il rientro notturno",
          ],
        },
        {
          title: "La notte",
          items: [
            "Tenete una copia digitale e cartacea dell'indirizzo dell'alloggio in italiano, compresi i dettagli dell'ingresso",
            "Stabilite un punto di incontro di emergenza con il vostro gruppo prima di entrare in una piazza affollata",
            "Tenete oggetti di valore in tasche interne o in una borsa a tracolla nelle zone affollate",
          ],
        },
      ],
    },

    h2("Idee di itinerario"),

    h3("3–4 giorni a Roma"),
    p("Un breve city break a Roma è l'opzione più solida per un Capodanno in Italia: la città ha la più lunga tradizione di eventi gratuiti all'aperto e la scelta più ampia di alloggi e ristoranti."),
    {
      type: "steps",
      items: [
        { title: "Giorni 1–2: Roma classica", text: "Colosseo, Foro Romano e Palatino (prenotate online); Musei Vaticani e Cappella Sistina (prenotazione obbligatoria). Musei Capitolini, Piazza Navona, Pantheon." },
        { title: "Giorno 3 (31 dicembre)", text: "Mattina alla Galleria Borghese (prenotazione obbligatoria). Nel pomeriggio verificate il programma del Circo Massimo su turismoroma.it. Se non c'è un concerto: cenone prenotato in una trattoria romana (ore 20–22), poi piazza a mezzanotte." },
        { title: "Giorno 4 (1 gennaio — Capodarte)", text: "Molti musei offrono ingresso gratuito o ridotto. Consultate turismoroma.it per il programma, pubblicato di solito a fine novembre o dicembre." },
      ],
    },

    h3("5–7 giorni nel nord Italia"),
    p("Un itinerario più lungo che combina Milano, Bologna e Torino propone tre città con atmosfere di Capodanno molto diverse."),
    {
      type: "steps",
      items: [
        { title: "Giorni 1–2: Milano", text: "Duomo e Galleria Vittorio Emanuele II; Pinacoteca di Brera; Cenacolo Vinciano (prenotazione con largo anticipo su vivaticket.com). Verificate eventuali annunci per il Capodanno in Piazza Duomo su comune.milano.it." },
        { title: "Giorni 3–4: Torino", text: "Museo Egizio; Palazzo Reale; Mole Antonelliana. Cioccolateria e caffè storici. Opzione gita: stazione sciistica alpina (45 minuti in auto)." },
        { title: "Giorni 5–6 (31 dic – 1 gen): Bologna", text: "Cenone in una trattoria bolognese prenotata mesi prima; mezzanotte in Piazza Maggiore. Il 1° gennaio: passeggiata al Santuario di San Luca (40 minuti sotto 666 archi di portici)." },
        { title: "Giorno 7: Firenze", text: "Gita da Bologna (37 minuti in alta velocità) per gli Uffizi o l'Accademia." },
      ],
    },

    h3("Capodanno al sud: Napoli e la Sicilia"),
    p("Napoli è la scelta più vivace per chi vuole vivere il Capodanno italiano nella sua versione più schietta e festosa."),
    {
      type: "steps",
      items: [
        { title: "Giorni 1–2: Napoli culturale", text: "Museo Archeologico Nazionale; Spaccanapoli; sottosuolo napoletano (Napoli Sotterranea o il Tunnel Borbonico). Pizza in una pizzeria storica." },
        { title: "Giorno 3 (31 dicembre)", text: "Mattina a Pompei (biglietto timed entry su pompeiiites.org). Rientro a Napoli nel pomeriggio. Verificate il programma del Comune per la Piazza del Plebiscito. Cenone prenotato. Mezzanotte sul Lungomare per i fuochi sul golfo." },
        { title: "Estensione: Palermo o Sicilia", text: "Volo o traghetto da Napoli verso Palermo per un Capodanno più tranquillo e mite — la Sicilia a dicembre è a 15–18 °C con meno affollamento rispetto alle città del nord." },
      ],
    },
  ],

  faqs: [
    {
      question: "Conviene festeggiare il Capodanno in Italia?",
      answer: "Dipende da cosa cercate. Se amate stare a tavola, l'atmosfera delle piazze italiane e avete flessibilità sugli eventi specifici, il Capodanno in Italia può essere un'esperienza autentica e memorabile. Se preferite serate tranquille o eventi garantiti a orari precisi, un altro periodo potrebbe adattarsi meglio. L'alloggio è caro e va prenotato mesi prima.",
    },
    {
      question: "Quali città italiane sono migliori per il Capodanno 2026–2027?",
      answer: "Roma ha la tradizione più consolidata di grande evento gratuito all'aperto (concerto al Circo Massimo, non ancora confermato per il 2026); Napoli è la più vivace per i fuochi e l'atmosfera; Venezia offre uno scenario unico con i fuochi sul Bacino di San Marco; Bologna è la scelta migliore per un Capodanno più raccolto e gastronomicamente eccellente. Milano potrebbe tornare con un concerto in Piazza Duomo per il 2027 — non ancora confermato.",
    },
    {
      question: "I programmi ufficiali di Capodanno 2026–2027 sono confermati?",
      answer: "No — al momento della stesura (ottobre 2026) nessuna città italiana aveva pubblicato il programma ufficiale per il 31 dicembre 2026. I programmi vengono annunciati tra novembre e dicembre. Il concerto al Circo Massimo di Roma è una tradizione in corso dal 2022 ma non è ancora confermato per il 2026. Verificate sempre sui siti ufficiali delle città prima di prenotare un viaggio in funzione di un evento specifico.",
    },
    {
      question: "Bisogna prenotare il ristorante per il cenone di Capodanno?",
      answer: "Sì, assolutamente. La maggior parte dei ristoranti il 31 dicembre apre solo con menu fisso (*cenone*) e si esaurisce con settimane o mesi di anticipo. Non è realistico trovare posto in un ristorante di qualità senza prenotazione la notte di Capodanno. Prenotate il prima possibile — due o tre mesi prima per i locali più richiesti — e confermate la caparra e le condizioni di cancellazione.",
    },
    {
      question: "I trasporti pubblici funzionano dopo la mezzanotte di Capodanno?",
      answer: "Nella maggior parte delle grandi città italiane i trasporti pubblici sono prolungati la notte di San Silvestro, ma gli orari specifici vengono pubblicati solo a dicembre. Non date per scontato che il servizio funzioni tutta la notte; verificate sul sito dell'operatore ufficiale (ATAC per Roma, ATM per Milano, ACTV per Venezia, ANM per Napoli) prima di partire.",
    },
    {
      question: "Cosa mettere in valigia per il Capodanno in Italia?",
      answer: "Un impermeabile caldo, indispensabile ovunque in dicembre, specialmente per i festeggiamenti all'aperto a mezzanotte. Scarpe impermeabili con suola antiscivolo per i sampietrini bagnati. Strati caldi e guanti per le città del nord. Una borsa piccola da portare a contatto con il corpo nelle piazze affollate. Un ombrello compatto e un caricabatterie portatile.",
    },
    {
      question: "Bisogna prenotare l'alloggio con molto anticipo?",
      answer: "Sì, il prima possibile. Il Capodanno è una delle notti più care e più richieste dell'anno in tutte le grandi città italiane. I prezzi salgono rapidamente avvicinandosi a dicembre. Prenotare in ottobre o novembre offre una scelta migliore a prezzi più ragionevoli.",
    },
    {
      question: "I fuochi d'artificio sono permessi nelle città italiane a Capodanno?",
      answer: "Le norme variano per città e cambiano di anno in anno. Negli ultimi anni diverse città — tra cui Roma, Milano, Firenze e Venezia — hanno vietato i fuochi d'artificio per privati, mentre Napoli li ha continuati a permettere. I fuochi organizzati dalle amministrazioni (come a Venezia) sono distinti dai prodotti per i privati. Verificate le norme specifiche della città che visitate quando vengono pubblicate, di solito a novembre o dicembre.",
    },
    {
      question: "Cosa si mangia a Capodanno in Italia?",
      answer: "Il piatto simbolo del Capodanno italiano sono le lenticchie con cotechino o zampone: le lenticchie, per la loro forma a moneta, portano fortuna e prosperità. Il cotechino è un grande insaccato di maiale dell'Emilia-Romagna; lo zampone è uno zampetto farcito con un impasto simile. Nelle zone costiere e nel Sud il cenone è spesso a base di pesce. Il brindisi di mezzanotte è con prosecco o spumante.",
    },
    {
      question: "Venezia è affollata a Capodanno?",
      answer: "Sì. Venezia applica rigide misure di gestione della folla, tra cui cancelli pedonali sulle calli principali e il divieto di bottiglie di vetro e plastica. I fuochi d'artificio sul Bacino di San Marco si vedono meglio dalla Riva degli Schiavoni, non da Piazza San Marco. Arrivate presto per trovare una buona posizione. Consultate veneziaunica.it per le regole specifiche del 2026–2027 quando saranno pubblicate.",
    },
    {
      question: "Cosa significa cenone di Capodanno?",
      answer: "Il *cenone di Capodanno* è la grande cena della notte di San Silvestro: un pasto lungo, multi-portata, che inizia tipicamente tra le 20 e le 21 e si prolunga fino a mezzanotte o oltre. I ristoranti propongono menu fissi che comprendono più portate e di solito il brindisi di mezzanotte. Le lenticchie con cotechino o zampone sono il piatto portafortuna della tradizione italiana.",
    },
  ],

  sources: [
    { label: "Turismo Roma — turismoroma.it", url: "https://www.turismoroma.it/", note: "Ente ufficiale del turismo di Roma — programmi di Capodanno pubblicati ogni anno a novembre–dicembre" },
    { label: "Comune di Napoli — comune.napoli.it", url: "https://www.comune.napoli.it/", note: "Comune di Napoli — programma Capodanno pubblicato annualmente a dicembre" },
    { label: "Venezia Unica — veneziaunica.it", url: "https://www.veneziaunica.it/", note: "Portale ufficiale del turismo di Venezia — regolamenti e eventi di Capodanno" },
    { label: "Comune di Milano — comune.milano.it", url: "https://www.comune.milano.it/", note: "Comune di Milano — bando organizzatore Capodanno 2027 aperto a luglio 2026" },
    { label: "Comune di Firenze — comune.fi.it", url: "https://www.comune.fi.it/", note: "Comune di Firenze — programma Capodanno da verificare in avvicinamento alla data" },
    { label: "ATAC Roma — atac.roma.it", url: "https://www.atac.roma.it/", note: "Trasporti pubblici Roma — orario notte di Capodanno pubblicato a dicembre" },
    { label: "ACTV Venezia — actv.avmspa.it", url: "https://actv.avmspa.it/", note: "Servizio vaporetti Venezia — orario modificato Capodanno" },
  ],
  sourcesTitle: "Fonti e siti ufficiali",
};
