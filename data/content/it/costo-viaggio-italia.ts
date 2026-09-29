import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "How Much Does a Trip to Italy Cost?", scritta per chi
// legge in italiano. Tutte le cifre in euro sono state verificate sui siti
// ufficiali di operatori e musei a settembre 2026, salvo dove il testo indica
// che provengono da elenchi ufficiali non consultabili direttamente. Alloggi,
// cibo, voli e gran parte delle tariffe dei treni sono dinamici e non vengono
// indicati in cifre.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });

const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});
const GUIDE_IMG = "/images/guides/complete-italy-travel-guide";

export const costoViaggioItalia: ArticleContent = {
  body: [
    // ——— Apertura ———
    answer("**Non esiste una cifra onesta che dica «quanto costa l'Italia».** Due persone sullo stesso itinerario possono spendere cifre molto diverse, e a fare la differenza sono soprattutto **l'alloggio**, poi **la meta**, **la stagione**, **come ci si sposta**, **come si mangia**, **quali ingressi si pagano** e **quanto dura il viaggio**. Questa guida non inventa medie. Mostra quali costi sono fissi e quali variabili, riporta i prezzi verificati a settembre 2026 per ciò che ha una tariffa pubblicata — treni per gli aeroporti, biglietti dei mezzi urbani, grandi musei — e spiega come costruire un budget partendo da preventivi reali per le tue date."),
    p("I prezzi sono in euro, per un adulto, e sono stati verificati sui siti ufficiali a settembre 2026. Cambiano: considerali una fotografia del momento e controllali prima di prenotare. I voli per l'Italia sono esclusi, salvo dove indicato."),
    {
      type: "image",
      src: `${GUIDE_IMG}/rome-cafe-tables-street.webp`,
      alt: "Tavoli di un ristorante all'aperto accanto a un edificio in una via di Roma",
      caption: "Dove mangi, e dove dormi, pesano sul costo del viaggio più di quasi ogni altra cosa.",
      credit: unsplash("Sara Abilova", "sarahabilova"),
      wide: true,
    },

    // ——— 1 ———
    h2("Il budget in sintesi"),
    p("La tabella descrive i livelli di spesa in base alle scelte, non con cifre inventate. Saranno i tuoi preventivi per alloggi e treni a trasformarla in numeri."),
    table(
      ["Stile di viaggio", "Alloggio", "Cibo", "Trasporti", "Visite", "Approccio"],
      [
        ["Economico", "Ostelli, pensioni semplici, camere fuori dal centro", "Forni, mercati, cibo di strada, un pasto semplice a tavola", "Regionali, alta velocità prenotata presto, a piedi, bus", "Luoghi gratuiti più uno o due grandi ingressi per città", "Poche tappe, ritmo lento, media o bassa stagione"],
        ["Medio", "Hotel 2–3 stelle in centro, B&B, appartamenti", "Colazione al bar, pranzo veloce, cena in trattoria", "Alta velocità prenotata in anticipo, mezzi pubblici", "I musei e i siti che ti interessano davvero", "La scelta più comune per un primo viaggio"],
        ["Comodo", "Hotel 4 stelle o boutique in centro", "Pranzi e cene a tavola, aperitivo", "Biglietti flessibili, qualche taxi", "Quasi tutti i luoghi principali, qualche visita guidata", "Più comodità, meno compromessi sulla posizione"],
        ["Di lusso", "Hotel 5 stelle o di lusso, ville", "Alta cucina, esperienze enologiche", "Prima classe, transfer privati, autisti", "Visite private e accessi speciali", "Il budget lo decidono le scelte, non l'Italia"],
      ],
      "Livelli di spesa in base alle scelte"
    ),
    important("L'Italia non è uniformemente cara o economica. Una notte in un hotel in centro a Venezia a settembre e una notte in una pensione di un paese a novembre sono prodotti diversi a prezzi molto diversi. Calcola sempre i prezzi delle tue mete e delle tue date.", "Perché non indichiamo una cifra al giorno"),

    // ——— 2 ———
    h2("Le voci principali: fisse e variabili"),
    p("Conviene separare i costi con un prezzo pubblicato da quelli che cambiano con la domanda."),
    table(
      ["Voce", "Fissa o variabile?", "Da che cosa dipende"],
      [
        ["Alloggio", "Molto variabile", "Città, quartiere, stagione, feriale o weekend, anticipo della prenotazione"],
        ["Voli per l'Italia", "Molto variabile", "Paese di partenza, stagione, aeroporto, bagagli, anticipo"],
        ["Treni ad alta velocità", "Variabile", "Tariffe legate alla domanda; le più economiche si esauriscono; le flessibili costano di più"],
        ["Treni regionali", "Per lo più fissa", "Tariffe stabilite in base alla distanza, qualunque sia il momento dell'acquisto"],
        ["Trasporti urbani", "Fissa", "Biglietti e abbonamenti pubblicati in ogni città"],
        ["Treni e bus per gli aeroporti", "Fissa", "Tariffe pubblicate (vedi sotto)"],
        ["Musei e siti", "Per lo più fissa", "Prezzi pubblicati; alcuni aggiungono diritti di prenotazione o tariffe stagionali"],
        ["Cibo", "Variabile secondo le scelte", "Come e dove mangi, più che la città"],
        ["Tour ed esperienze", "Variabile", "Di gruppo o privati, durata, cosa è incluso"],
        ["Noleggio auto", "Molto variabile", "Stagione, categoria, assicurazione, riconsegna altrove, più carburante, pedaggi e parcheggi"],
        ["Imposta di soggiorno", "Fissa a livello locale", "Decisa da ogni Comune; varia con il tipo di struttura"],
        ["Assicurazione e dati mobili", "Variabile", "Il tuo fornitore e la copertura"],
      ],
      "Costi fissi e variabili"
    ),

    // ——— 3 ———
    h2("Prezzi di riferimento verificati (settembre 2026)"),
    p("Sono prezzi pubblicati per voci che quasi tutti pagano, verificati sul sito ufficiale dell'operatore. Si intendono per adulto, per corsa o ingresso, salvo diversa indicazione."),
    table(
      ["Voce", "Prezzo", "Note e fonte"],
      [
        ["Leonardo Express, Fiumicino ↔ Roma Termini", "14 €", "Treno senza fermate; tariffa Minigruppi 4 biglietti a 40 € (Trenitalia)"],
        ["Malpensa Express, Malpensa ↔ stazioni di Milano", "15 € (bambini 4–13 anni: 7,50 €)", "Trenord / Malpensa Express"],
        ["Roma, biglietto 100 minuti", "1,50 €", "Comprende una corsa in metro; accettato il contactless Tap & Go (ATAC)"],
        ["Venezia, biglietto ACTV 75 minuti", "9,50 €", "Vaporetti, bus e tram; abbonamento 3 giorni 45 € (Venezia Unica)"],
        ["Venezia, trasferimenti dall'aeroporto", "Bus ACTV da 10 €; Alilaguna da 18 €", "Listini di vendita Venezia Unica"],
        ["Torino, biglietto 100 minuti", "1,90 €", "Acquistabile a bordo con carta contactless (GTT)"],
        ["Torino, treno aeroporto–Porta Susa", "3,70 €", "Torino Airport"],
        ["Torino, bus per l'aeroporto (Arriva)", "7,50 €", "Fermate a Porta Nuova e Porta Susa (Arriva)"],
        ["Verona, Airlink aeroporto ↔ Porta Nuova", "7 €", "Valido 75 minuti anche sui bus urbani (ATV)"],
        ["Musei Vaticani e Cappella Sistina", "20 €, o 25 € prenotando online", "La differenza di 5 € è il diritto di prenotazione online ufficiale (Musei Vaticani)"],
        ["Fontana di Trevi, area della vasca", "2 €", "Biglietto richiesto fino alle 22; la fontana è visibile gratis dalla piazza (Roma Capitale)"],
        ["Palazzo Ducale, Venezia", "35 €; 30 € online con almeno 30 giorni di anticipo", "Comprende il Correr e gli altri Musei di Piazza San Marco (Musei Civici)"],
        ["Gallerie dell'Accademia, Venezia", "20 €", "Gallerie dell'Accademia"],
        ["Castelvecchio, Verona", "9 €", "Musei Civici di Verona"],
        ["Archiginnasio e Teatro Anatomico, Bologna", "Da 10 €; 12 € con guida", "Prenotazione online obbligatoria (Bologna Welcome)"],
        ["Cappelle di San Petronio, Bologna", "5 €", "La basilica è gratuita (Basilica di San Petronio)"],
        ["Palazzo Reale e Cappella Palatina, Palermo", "19 € (gio–lun); 15,50 € (mar–mer)", "Appartamenti Reali non inclusi martedì e mercoledì (Fondazione Federico II)"],
        ["Basilica di San Pietro", "Gratuita", "Prenotazione a orario facoltativa a pagamento; la cupola ha un biglietto a parte"],
      ],
      "Prezzi verificati, settembre 2026"
    ),
    p("Due prezzi molto usati provengono da elenchi ufficiali che da qui non abbiamo potuto consultare direttamente, quindi verificali prima di contarci: secondo gli elenchi del Parco archeologico del Colosseo, il biglietto ordinario 24 ore per Colosseo, Foro e Palatino costa 18 €, più un piccolo diritto di prenotazione online; secondo gli elenchi del Ministero della Cultura, dal 1° luglio 2026 l'ingresso al Pantheon è salito a 7 €."),
    tip("Nei musei e nei siti archeologici statali italiani i minori di 18 anni entrano gratis, e molti altri musei prevedono riduzioni per bambini e giovani. Controlla le agevolazioni di ogni luogo prima di pagare il biglietto intero.", "In viaggio con bambini o studenti?"),

    // ——— 4 ———
    h2("Quanto si spende al giorno?"),
    p("Un budget giornaliero ha senso solo se si dice che cosa comprende. Usa questi schemi per impostare il tuo, con i numeri dei tuoi preventivi."),
    table(
      ["", "Viaggio economico", "Viaggio medio", "Viaggio comodo"],
      [
        ["Alloggio", "Incluso — dormitorio o camera privata semplice", "Incluso — doppia in centro, costo diviso", "Incluso — 4 stelle o boutique in centro"],
        ["Cibo", "Colazione e pranzo da forno o mercato, una cena semplice", "Colazione al bar, pranzo veloce, cena in trattoria", "Due pasti a tavola, aperitivo, un po' di vino"],
        ["Trasporti urbani", "A piedi e biglietti singoli", "Biglietti o abbonamenti giornalieri", "Mezzi pubblici e qualche taxi"],
        ["Grandi visite", "In media circa un ingresso al giorno", "Uno o due al giorno dove ti interessa", "Quasi tutte quelle che vuoi, alcune guidate"],
        ["Treni tra città", "Esclusi — da aggiungere per tratta", "Esclusi — da aggiungere per tratta", "Esclusi — da aggiungere per tratta"],
        ["Voli internazionali", "Esclusi", "Esclusi", "Esclusi"],
        ["Shopping e souvenir", "Esclusi", "Esclusi", "Esclusi"],
      ],
      "Che cosa comprende un budget giornaliero"
    ),
    p("Tieni fuori dalla cifra giornaliera treni tra città, voli e shopping: capitano in giorni precisi e cambiano moltissimo da un viaggio all'altro. Confrontare i «budget al giorno» trovati online serve solo se sai che cosa ha incluso l'altra persona."),

    // ——— 5 ———
    h2("Come cambia il costo con la durata"),
    p("I viaggi lunghi non costano al giorno quanto quelli brevi. Un city break di tre giorni concentra le spese più alte — trasferimenti dall'aeroporto, i musei più famosi, alberghi in centro con tariffe del weekend — in pochi giorni. In un viaggio più lungo quei costi fissi si distribuiscono, e di solito si rallenta."),
    table(
      ["Durata", "Forma tipica", "Effetto sul costo giornaliero"],
      [
        ["3 giorni", "Una città", "Trasferimenti e grandi ingressi pesano molto; il weekend può essere il più caro"],
        ["5 giorni", "Una o due città", "Simile a un city break, con un viaggio in treno"],
        ["7 giorni", "Due o tre tappe", "Si aggiungono i treni tra città; meno grandi ingressi al giorno"],
        ["10 giorni", "Tre tappe, o due più gite", "Spazio per una giornata più lenta o un centro meno caro; più pasti fuori"],
        ["14 giorni", "Tre o quattro tappe, o un giro in auto in una regione", "Tariffe settimanali degli appartamenti e giornate lente possono abbassare la media"],
        ["21 giorni", "Più regioni", "Più spostamenti regionali ed eventuale auto; la spesa giornaliera per le visite di solito cala"],
      ],
      "Effetti della durata sul budget"
    ),
    p("Anche cambiare spesso albergo costa: ogni spostamento aggiunge un biglietto del treno, magari un taxi, e a volte un supplemento per una sola notte. Meno tappe di solito significano meno spesa, oltre che meno fretta."),

    // ——— 6 ———
    h2("Perché i costi cambiano da una meta all'altra"),
    p("Non stiliamo classifiche di prezzo tra le città italiane: la stessa città può essere cara una settimana e ragionevole quella dopo. È più utile capire che cosa fa salire i costi in ciascun luogo."),
    table(
      ["Meta", "Che cosa fa salire i costi", "Che cosa aiuta"],
      [
        ["Roma", "Alberghi in centro vicino ai monumenti; diversi grandi ingressi; festività", "Centro da girare a piedi, mezzi pubblici economici (1,50 € per 100 minuti), tante chiese e piazze gratuite"],
        ["Venezia", "Alloggi limitati e molto richiesti nel centro storico; trasporto sull'acqua (9,50 € per 75 minuti); gestione dei bagagli", "Camminare, abbonamenti di più giorni, fermarsi più a lungo"],
        ["Firenze", "Centro raccolto con forte domanda; tariffe stagionali in alcuni grandi musei", "Tutto a piedi; forni e mercati"],
        ["Milano", "Fiere e settimane della moda e del design fanno salire gli alberghi", "Buoni mezzi pubblici; molti luoghi e quartieri gratuiti"],
        ["Napoli", "Gite in alta stagione sulla costiera", "Cibo di strada e pizza; centro a piedi"],
        ["Bologna", "Le grandi fiere riempiono gli alberghi", "Centro raccolto, basilica e portici gratuiti"],
        ["Torino", "Grandi eventi e fiere", "Centro a piedi, mezzi pubblici (1,90 € per 100 minuti)"],
        ["Verona", "Stagione lirica e fiere fanno salire gli alberghi", "Centro raccolto; lago e vino con i mezzi pubblici"],
        ["Palermo", "Escursioni fuori città", "Cibo di strada e mercati; chiese gratuite"],
        ["Centri minori", "Pochi alberghi in alta stagione; spesso serve l'auto", "Alloggi spesso più economici fuori dalle feste"],
      ],
      "Che cosa influisce sui costi nelle varie mete"
    ),
    p("Per approfondire ogni città ci sono le nostre guide a [Roma](/it/guide/roma-in-tre-giorni), [Firenze](/it/citta/firenze-per-la-prima-volta), [Venezia](/it/citta/venezia-per-la-prima-volta), [Milano](/it/citta/milano-oltre-il-duomo), [Napoli](/it/citta/napoli-per-la-prima-volta), [Bologna](/it/citta/bologna-in-due-giorni), [Torino](/it/citta/torino-per-la-prima-volta), [Verona](/it/citta/verona-per-la-prima-volta) e [Palermo](/it/citta/palermo-per-la-prima-volta)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/venice-grand-canal-gondolas-rialto.webp`,
      alt: "Gondole ormeggiate sul Canal Grande vicino al ponte di Rialto a Venezia, al tramonto",
      caption: "A Venezia trasporti sull'acqua e alloggi limitati nel centro storico pesano sul budget.",
      credit: unsplash("Rebe Adelaida", "rrebba"),
    },

    // ——— 7 ———
    h2("L'alloggio"),
    p("L'alloggio è di solito la voce più alta e quella su cui hai più controllo. Le tipologie principali:"),
    ul(
      "**Ostelli** — posti letto in camerata e camere private, soprattutto nelle grandi città.",
      "**Hotel economici e pensioni** — camere semplici, a volte con bagno in comune o senza colazione.",
      "**Hotel di fascia media e B&B** — la scelta più diffusa; controlla la posizione con la stessa attenzione del prezzo.",
      "**Appartamenti** — comodi per famiglie e soggiorni lunghi; attenzione a pulizie e modalità di check-in.",
      "**Agriturismi** — soggiorni in campagna; di solito serve l'auto.",
      "**Hotel boutique e di lusso** — posizione, servizio e design si pagano.",
    ),
    p("Che cosa fa cambiare il prezzo: città e quartiere, stagione, giorni feriali o fine settimana, eventi e fiere, tipo di camera, colazione inclusa o no, condizioni di cancellazione e anticipo della prenotazione. Dormire poco fuori dal nucleo più caro — in un quartiere ben collegato, invece che accanto al monumento più famoso — spesso fa risparmiare più di qualsiasi altra scelta."),

    // ——— 8 ———
    h2("Imposta di soggiorno e altri costi"),
    p("Molti Comuni italiani applicano un'imposta (o contributo) di soggiorno a persona e a notte. Gli importi sono decisi localmente, di solito variano con tipo e categoria della struttura, possono valere solo per un certo numero di notti e cambiare di anno in anno. Spesso si paga in struttura e può non essere compresa nel prezzo visto al momento della prenotazione."),
    p("Venezia ha anche sperimentato un contributo di accesso per i visitatori giornalieri in date stabilite; secondo il Comune di Venezia la sperimentazione 2026 si è conclusa il 26 luglio, e l'eventuale applicazione futura spetta al Comune. Non dare per scontato che le regole di una città valgano altrove: per ogni tappa controlla le informazioni del Comune o della struttura."),

    // ——— 9 ———
    h2("Il cibo"),
    p("Conta più come mangi che dove. Una giornata di colazioni al banco, pranzi al forno e cena in trattoria costa in modo molto diverso da una di pranzi al ristorante e cene accompagnate dal vino, nella stessa città."),
    table(
      ["Tipo di pasto", "Come incide sul budget"],
      [
        ["Caffè e brioche al banco", "Una delle abitudini italiane più convenienti; al banco di solito costa meno che al tavolo"],
        ["Pranzo dal forno o al mercato", "Pizza al taglio, focaccia, panini o cibo di strada tengono il pranzo leggero"],
        ["Pranzo veloce a tavola", "In trattoria è normale ordinare solo un primo"],
        ["Aperitivo", "Un drink con stuzzichini nel tardo pomeriggio; a volte sostituisce una cena leggera"],
        ["Pizza", "Di solito una delle cene a tavola più economiche"],
        ["Cena in trattoria o osteria", "La scelta intermedia"],
        ["Alta cucina", "Una voce di budget a parte"],
      ],
      "Scelte a tavola e budget"
    ),
    p("Molti ristoranti aggiungono il *coperto* a persona e alcuni il servizio: devono essere indicati sul menu. La mancia non è un obbligo; lasciare qualcosa per un buon servizio è una scelta personale. Per come funzionano i pasti, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/italian-coffee-bar-counter.webp`,
      alt: "Un barista che parla con un cliente al bancone di un piccolo bar a San Quirico d'Orcia, in Toscana",
      caption: "Il caffè al banco: una piccola spesa quotidiana che si somma in un viaggio lungo.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Le piccole spese di ogni giorno"),
    ul(
      "**Caffè e spuntini** — piccole cifre, più volte al giorno.",
      "**Acqua** — porta una borraccia; in molte città ci sono fontanelle pubbliche.",
      "**Gelato** — uno sfizio economico, ma ogni giorno si somma.",
      "**Bagni pubblici** — alcuni sono a pagamento; nei bar di solito ci si aspetta una consumazione.",
      "**Deposito bagagli** — utile nei giorni di spostamento tra check-out e treno.",
    ),

    // ——— 10 ———
    h2("Quanto costano i treni"),
    p("In Italia ci sono due tipi di treno con prezzi molto diversi:"),
    ul(
      "**Alta velocità** (Frecciarossa di Trenitalia e Italo) — le tariffe funzionano come quelle aeree: dipendono dalla domanda, dall'anticipo e dalla flessibilità. Le più economiche sono limitate e si esauriscono; quelle flessibili costano di più ma si possono cambiare. Il posto è assegnato.",
      "**Regionali** — tariffe fisse in base alla distanza, qualunque sia il momento dell'acquisto, senza posto assegnato. Più lenti, ma economici per tratte brevi e gite.",
    ),
    p("Prenota l'alta velocità appena hai le date, soprattutto per venerdì, domenica e festivi. Trenitalia vende anche un pass per i visitatori stranieri, e i pass ferroviari europei valgono in Italia, ma sull'alta velocità di solito serve in più una prenotazione a pagamento: confronta il pass con le tariffe delle singole tratte del tuo itinerario. Per biglietti e convalida leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno), e per organizzare le tappe [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/milano-centrale-high-speed-train.webp`,
      alt: "Un treno rosso ad alta velocità sotto la volta in ferro e vetro della stazione di Milano Centrale",
      caption: "Le tariffe dell'alta velocità cambiano con la domanda: sulle tratte più richieste conta prenotare presto.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },

    // ——— 11 ———
    h2("Trasporti urbani e trasferimenti dall'aeroporto"),
    p("Nella maggior parte dei centri storici si cammina, quindi i trasporti urbani pesano poco. Diventano importanti a Venezia, dove quasi ogni spostamento in barca richiede un biglietto, e quando si usano i taxi. I trasferimenti dall'aeroporto sono un costo fisso che spesso si dimentica: usa le tariffe verificate qui sopra e confronta treno o bus con il taxi. Alcune città fissano tariffe fisse dei taxi tra aeroporto e centro — a Roma valgono per vettura verso le destinazioni dentro le Mura Aureliane — e per una famiglia o un gruppo il taxi può diventare conveniente. Per gli aeroporti di tutta Italia c'è la nostra guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia)."),

    // ——— 12 ———
    h2("Noleggiare un'auto"),
    p("Il costo di un'auto va ben oltre la tariffa giornaliera del noleggio:"),
    ul(
      "**Noleggio** — cambia con stagione, categoria e anticipo; le auto con cambio automatico sono meno diffuse e possono costare di più.",
      "**Assicurazione e franchigia** — controlla che cosa è incluso e quanto pagheresti in caso di danni.",
      "**Carburante** — in Italia i prezzi ufficiali dei carburanti sono pubblici, e cambiano per regione e tipo di strada.",
      "**Pedaggi** — quasi tutte le autostrade sono a pagamento in base alla distanza; il calcolatore del gestore mostra il costo del percorso.",
      "**Parcheggi** — spesso a pagamento nei centri e difficili da trovare in città.",
      "**Multe ZTL** — entrare in una zona a traffico limitato senza permesso può costare multe, a volte recapitate mesi dopo.",
      "**Riconsegna in un'altra città** — spesso prevede un supplemento.",
    ),
    p("L'auto conviene per campagna, isole e piccoli centri, soprattutto per famiglie o gruppi che dividono le spese. Tra una città e l'altra il treno è di solito più semplice ed evita parcheggi e multe ZTL. Prima di decidere leggi [guidare in Italia](/it/guide/guidare-in-italia)."),
    {
      type: "image",
      src: `${GUIDE_IMG}/liguria-coastal-road-car.webp`,
      alt: "Una piccola auto rossa su una strada stretta tra scogliere ed edifici sulla costa ligure vicino a Grimaldi",
      caption: "L'auto è comoda in campagna e sulle coste; in città parcheggi e ZTL aggiungono costi.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },

    // ——— 13 ———
    h2("Musei e luoghi da visitare"),
    p("L'Italia ha innumerevoli luoghi gratuiti — piazze, fontane, molte chiese, panorami e mercati — accanto a musei e siti archeologici a pagamento. Se pensi di visitare diversi grandi siti, dai alle visite una voce di budget propria invece di considerarle un dettaglio: solo a Roma, Musei Vaticani (25 € prenotando online), area del Colosseo e Pantheon si sommano in fretta. Alcuni siti aggiungono diritti di prenotazione online, altri costano di più in alta stagione, e mostre temporanee o percorsi guidati si pagano a parte. I musei statali prevedono giornate a ingresso gratuito, che però sono di solito le più affollate."),

    // ——— 14 ———
    h2("Tour ed esperienze"),
    p("Visite a piedi, tour gastronomici, degustazioni, gite in barca, corsi di cucina, visite guidate ai musei ed escursioni sono facoltativi, ma possono cambiare parecchio il budget. Scegli le una o due che ti interessano di più, informati sui prezzi per le tue date e aggiungile come voci separate. I tour di gruppo costano molto meno a persona di quelli privati; per famiglie o gruppi di quattro o più persone, una guida privata a volte regge il confronto."),
    {
      type: "image",
      src: `${GUIDE_IMG}/val-dorcia-tuscany-countryside.webp`,
      alt: "Colline verdi, uliveti e un casale circondato da cipressi vicino a San Quirico d'Orcia, in Toscana",
      caption: "Soggiorni in campagna e degustazioni di solito richiedono auto o tour: mettili entrambi a budget.",
      credit: unsplash("Angelo Casto", "jddartphotographer"),
    },

    // ——— 15 ———
    h2("I voli per l'Italia"),
    p("Il costo del volo dipende da dove parti, quando, quale aeroporto italiano usi, se il volo è diretto, dai bagagli e dall'anticipo. Per chi arriva da lontano può essere la spesa più alta; per un volo breve dall'Europa, una delle più basse. In questa guida escludiamo sempre i voli: calcolali a parte, ricordando i supplementi bagaglio e i trasferimenti da e per l'aeroporto."),

    // ——— 16 ———
    h2("I costi nascosti o dimenticati"),
    ul(
      "**Imposta di soggiorno** — spesso si paga in struttura all'arrivo o alla partenza.",
      "**Supplementi bagaglio** — soprattutto sui voli low cost.",
      "**Trasferimenti dall'aeroporto** — all'andata e al ritorno.",
      "**Deposito bagagli** — nei giorni di spostamento.",
      "**Diritti di prenotazione** — alcuni siti ufficiali li aggiungono per l'acquisto online.",
      "**Commissioni su carte e cambio** — controlla le condizioni della tua banca e, quando il POS propone di addebitare nella tua valuta, scegliere l'euro di solito evita un ricarico sul cambio.",
      "**Assicurazione di viaggio** — con copertura sanitaria.",
      "**Dati mobili** — roaming, SIM locale o eSIM.",
      "**Lavanderia** — nei viaggi lunghi.",
      "**Coperto e servizio** — al ristorante.",
      "**Pedaggi, parcheggi e carburante** — nei viaggi in auto.",
    ),

    // ——— 17 ———
    h2("Risparmiare senza rovinarsi il viaggio"),
    ul(
      "**Viaggia in media stagione** se le date sono flessibili, ed evita per l'alloggio i grandi eventi e le festività.",
      "**Dormi poco fuori dal nucleo più caro**, in un quartiere ben collegato.",
      "**Prenota presto l'alta velocità** e usa i regionali per le tratte brevi.",
      "**Raggruppa le visite per zona**: più passeggiate, meno taxi.",
      "**Alterna luoghi gratuiti e a pagamento**: molte delle esperienze più belle sono piazze, chiese e panorami.",
      "**Alterna pasti a tavola e cibo veloce**: un pranzo al forno ripaga una cena migliore.",
      "**Cambia albergo meno spesso**: meno spostamenti, meno biglietti e meno tempo perso.",
      "**Confronta tariffe famiglia e gruppo**, come i 4 biglietti Minigruppi del Leonardo Express.",
    ),

    // ——— 18 ———
    h2("Budget di esempio: chi paga che cosa"),
    p("I costi crescono in modo diverso a seconda di chi viaggia. Per questo lo stesso viaggio può costare a persona di più a chi viaggia da solo che a una coppia:"),
    table(
      ["Chi viaggia", "Ipotesi principali", "Come si comportano i costi"],
      [
        ["Da soli", "Camera singola o ostello; mezzi pubblici", "L'alloggio non si divide ed è la voce più alta; una singola può costare quasi come una doppia"],
        ["Coppia", "Camera doppia; taxi condivisi", "Alloggio e taxi si dividono; biglietti e cibo sono a persona"],
        ["Famiglia (2 adulti, 2 bambini)", "Camera familiare o appartamento; mezzi pubblici", "I bambini hanno spesso riduzioni o ingressi gratuiti; tariffe famiglia e gruppo aiutano (per esempio 7,50 € per i bambini sul Malpensa Express); i taxi a tariffa fissa possono competere con quattro biglietti del treno"],
        ["Viaggio economico", "Ostello o camera semplice; regionali; luoghi gratuiti", "Costi fissi bassi; alta velocità solo se prenotata presto"],
        ["Viaggio medio", "Hotel 2–3 stelle in centro; alta velocità in anticipo", "Spesa equilibrata tra le voci"],
        ["Viaggio comodo", "4 stelle in centro; biglietti flessibili; taxi", "Alloggio e comodità dominano il totale"],
      ],
      "Come cambia il budget in base a chi viaggia"
    ),

    // ——— 19 ———
    h2("Esempi pratici: sette giorni tra Roma, Bologna e Venezia"),
    p("Gli esempi usano un solo itinerario: arrivo a Fiumicino, tre notti a Roma, due a Bologna, due a Venezia e partenza da Venezia Marco Polo. Le righe **verificate** usano i prezzi di settembre 2026 riportati sopra, per adulto. Le righe **tuo preventivo** variano troppo per stimarle onestamente: compilale con prezzi reali per le tue date. Sono esempi di pianificazione, non medie."),
    h3("Esempio A: sette giorni, spesa contenuta"),
    table(
      ["Voce", "Scelte", "Importo"],
      [
        ["Alloggio (7 notti)", "Ostello o camera semplice fuori dal nucleo più affollato", "Tuo preventivo"],
        ["Treni tra città", "Roma–Bologna e Bologna–Venezia, tariffe più economiche prenotate presto o regionali", "Tuo preventivo"],
        ["Aeroporto e trasporti urbani", "Leonardo Express 14 €; quattro biglietti 100 minuti a Roma 6 €; due biglietti ACTV 75 minuti 19 €; bus ACTV per l'aeroporto da 10 €", "Circa 49 € (verificato)"],
        ["Visite", "Area del Colosseo (18 € più diritto di prenotazione, secondo gli elenchi del Parco); Pantheon 7 €; San Pietro e San Petronio gratuiti", "Circa 27 € (in gran parte verificato)"],
        ["Cibo", "Pranzi da forno e mercato, cene in pizzeria o trattoria semplice", "Tua stima"],
        ["Extra", "Imposta di soggiorno, margine", "Tuo preventivo"],
      ],
      "Esempio A: spesa contenuta"
    ),
    h3("Esempio B: sette giorni, fascia media"),
    table(
      ["Voce", "Scelte", "Importo"],
      [
        ["Alloggio (7 notti)", "Hotel 2–3 stelle o B&B in centro", "Tuo preventivo"],
        ["Treni tra città", "Alta velocità prenotata qualche settimana prima", "Tuo preventivo"],
        ["Aeroporto e trasporti urbani", "Leonardo Express 14 €; otto biglietti 100 minuti a Roma 12 €; a Venezia trasporti per un giorno più trasferimento dall'aeroporto da 32 €", "Circa 58 € (verificato)"],
        ["Visite", "Musei Vaticani 25 €; area del Colosseo circa 20 €; Pantheon 7 €; vasca di Trevi 2 €; Archiginnasio con guida 12 €; cappelle di San Petronio 5 €; Palazzo Ducale 30 € prenotando presto; Accademia 20 €", "Circa 121 € (in gran parte verificato)"],
        ["Cibo", "Colazioni al bar, pranzi veloci, cene in trattoria, un aperitivo", "Tua stima"],
        ["Extra", "Imposta di soggiorno, un tour, margine", "Tuo preventivo"],
      ],
      "Esempio B: fascia media"
    ),
    h3("Esempio C: sette giorni, viaggio comodo"),
    table(
      ["Voce", "Scelte", "Importo"],
      [
        ["Alloggio (7 notti)", "Hotel 4 stelle o boutique in centro", "Tuo preventivo"],
        ["Treni tra città", "Tariffe flessibili o classi superiori sull'alta velocità", "Tuo preventivo"],
        ["Aeroporto e trasporti urbani", "Taxi a tariffa fissa da Fiumicino (per vettura); taxi acqueo o ACTV a Venezia; taxi quando si è stanchi", "Tuo preventivo, più i biglietti verificati che servono"],
        ["Visite", "Come nell'esempio B, più gli Itinerari segreti di Palazzo Ducale (40 € invece di 30 €) e visite guidate", "Circa 131 € (in gran parte verificato), più i tour"],
        ["Cibo", "Pranzi e cene a tavola, vino, aperitivo", "Tua stima"],
        ["Extra", "Imposta di soggiorno (più alta per le categorie superiori), tour privato, margine", "Tuo preventivo"],
      ],
      "Esempio C: viaggio comodo"
    ),
    p("Le righe verificate mostrano quanta parte del costo di un viaggio ha un prezzo pubblicato — e quanto sia piccola rispetto ad alloggio, treni e cibo, che sono le voci a cui dedicare più attenzione. Per l'itinerario vero e proprio ci sono le guide a [Roma in tre giorni](/it/guide/roma-in-tre-giorni), [Bologna in due giorni](/it/citta/bologna-in-due-giorni) e [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),

    // ——— 20 ———
    h2("I costi per tipo di viaggio"),
    ul(
      "**City break** — pochi spostamenti, ma i luoghi più famosi e gli alberghi in centro concentrati in poco tempo.",
      "**Primo viaggio in più città** — si aggiungono i treni tra città: prenota presto le tratte più richieste.",
      "**Nord Italia** — ottimi collegamenti ferroviari; gli alberghi in città cambiano molto con fiere ed eventi.",
      "**Sud Italia** — le città in treno, ma coste e campagna spesso richiedono traghetti, bus o auto.",
      "**Viaggio in famiglia** — appartamenti, riduzioni per i bambini e taxi a tariffa fissa cambiano i conti.",
      "**Viaggio di coppia** — l'alloggio condiviso abbassa il costo a persona; ristoranti ed esperienze spesso salgono.",
      "**Viaggio gastronomico** — pasti e degustazioni diventano una voce principale, non un extra.",
      "**Viaggio in auto** — noleggio, carburante, pedaggi e parcheggi al posto dei treni; gli alloggi in campagna possono costare meno.",
      "**Viaggio in treno** — costi urbani prevedibili; l'alta velocità premia chi prenota presto.",
      "**Viaggio di lusso** — i costi dipendono da hotel, ristoranti e servizi privati scelti.",
    ),

    // ——— 21 ———
    h2("Come costruire il tuo budget"),
    steps(
      ["Scegli le date", "Stagione ed eventi influenzano quasi tutto il resto."],
      ["Scegli città o regioni", "Un numero di tappe ragionevole per la durata del viaggio."],
      ["Conta le notti in ogni luogo", "Da qui dipende l'alloggio, la voce più alta."],
      ["Chiedi preventivi reali per l'alloggio", "Per le date esatte, comprese tasse e costi aggiuntivi dove indicati."],
      ["Aggiungi i trasferimenti tra città", "Tariffe dei treni per le tue date, o il costo dell'auto con tutti gli extra."],
      ["Aggiungi i trasporti urbani", "Trasferimenti dall'aeroporto e biglietti urbani dalle tariffe ufficiali."],
      ["Aggiungi il cibo", "Scegli un'abitudine quotidiana e stima dai menu locali."],
      ["Aggiungi le visite", "Elenca i luoghi a pagamento che vuoi davvero vedere, con i prezzi ufficiali."],
      ["Aggiungi le esperienze", "Tour, corsi, degustazioni e gite."],
      ["Aggiungi assicurazione, dati mobili e altre spese", "Compresa l'imposta di soggiorno e il deposito bagagli."],
      ["Aggiungi un margine", "Per gli imprevisti (vedi sotto)."],
    ),
    table(
      ["Voce", "Come stimarla", "La tua cifra"],
      [
        ["Alloggio", "Notti × tariffa del preventivo, più costi aggiuntivi", ""],
        ["Imposta di soggiorno", "Persone × notti × tariffa locale", ""],
        ["Trasferimenti tra città", "Preventivi di treno o auto per le tue date", ""],
        ["Trasferimenti dall'aeroporto", "Tariffe ufficiali, andata e ritorno", ""],
        ["Trasporti urbani", "Biglietti o abbonamenti per città", ""],
        ["Cibo", "Abitudine quotidiana × giorni × persone", ""],
        ["Visite", "Prezzi ufficiali dei luoghi scelti", ""],
        ["Esperienze", "Tour e corsi scelti", ""],
        ["Assicurazione e dati mobili", "Preventivi del tuo fornitore", ""],
        ["Margine", "Il cuscinetto che scegli", ""],
        ["Voli", "Da tenere a parte", ""],
      ],
      "Schema di budget"
    ),

    // ——— 22 ———
    h2("Tieni un margine per gli imprevisti"),
    p("I programmi cambiano: un treno viene cancellato e lo riprenoti a una tariffa più alta, la pioggia ti fa prendere un taxi, un ingresso perso significa un nuovo biglietto, una valigia si smarrisce o devi pagare una franchigia dell'assicurazione. Un margine trasforma questi imprevisti in fastidi invece che in problemi di budget. Quanto tenere lo decidi tu; molti viaggiatori usano una percentuale del totale, per esempio il 10–15%, come convenzione di pianificazione più che come regola."),

    // ——— 23 ———
    h2("Quando andare in Italia spendendo meno"),
    p("Le stagioni incidono soprattutto sui prezzi degli alberghi, e con essi su voli, folla e disponibilità. Estate, Pasqua, Natale e grandi eventi sono di solito i periodi più cari e prenotati per città e coste; d'inverno, fuori dalle feste, le città sono spesso più tranquille, mentre le località sciistiche sono in piena stagione. Località di mare e isole possono essere in parte chiuse fuori stagione. Nessun mese è garantito economico ovunque: confronta i prezzi per le tue date. Leggi [quando andare in Italia](/it/guide/quando-andare-in-italia) per capire come cambiano le stagioni da regione a regione."),

    // ——— 24 ———
    h2("Prima di prenotare"),
    {
      type: "checklist",
      id: "costo-viaggio-italia",
      groups: [
        {
          title: "Prima di tutto, i prezzi",
          items: ["Alloggio per le date esatte", "Alta velocità sulle tratte più richieste", "I luoghi a pagamento che vuoi vedere"],
        },
        {
          title: "Da non dimenticare",
          items: ["Trasferimenti dall'aeroporto all'andata e al ritorno", "Imposta di soggiorno", "Assicurazione e dati mobili", "Un margine per gli imprevisti"],
        },
        {
          title: "Da tenere a parte",
          items: ["Voli internazionali", "Shopping", "Esperienze una tantum"],
        },
      ],
    },
    p("I prezzi di questa guida sono stati verificati sui siti ufficiali a settembre 2026 e cambieranno. Per organizzare il viaggio passo dopo passo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia); per altri tipi di viaggio, [il Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend)."),
  ],

  faqs: [
    { question: "Quanto costa una settimana in Italia?", answer: "Dipende soprattutto da alloggio, mete e stagione: calcola prima quelli per le tue date. I nostri esempi di sette giorni mostrano che le spese con prezzo pubblicato — treni per l'aeroporto, trasporti urbani, grandi musei — vanno in genere da qualche decina a un paio di centinaia di euro a persona; alloggio, treni e cibo pesano molto di più." },
    { question: "Quanto si spende al giorno in Italia?", answer: "Non esiste una cifra affidabile valida per tutti. Decidi che cosa comprende il tuo budget giornaliero — alloggio, cibo, trasporti urbani e una o due visite — e calcola i prezzi per le tue città; tieni a parte treni tra città e voli." },
    { question: "L'Italia è cara per i turisti?", answer: "Può esserlo, soprattutto per gli alloggi in centro nelle città più visitate e nei periodi di punta, ma molte spese sono contenute: regionali, mezzi pubblici, forni e tanti luoghi gratuiti. Contano più le scelte che il Paese." },
    { question: "L'Italia costa meno della Francia o della Svizzera?", answer: "Non confrontiamo i Paesi con un'unica cifra, perché i costi dipendono da città, stagione e stile di viaggio. Confronta preventivi reali per i luoghi e le date che ti interessano." },
    { question: "Quanto costa mangiare in Italia?", answer: "Dipende da come mangi: caffè al banco, pranzi al forno e pizza tengono bassi i costi, pranzi al ristorante ogni giorno e cene con il vino li alzano. Controlla sul menu coperto e servizio." },
    { question: "Quanto costa dormire in Italia?", answer: "È la voce che cambia di più: per città, quartiere, stagione, giorno della settimana ed eventi. Chiedi preventivi per le tue date esatte e valuta di dormire appena fuori dalle zone più care." },
    { question: "In Italia conviene il treno o l'auto?", answer: "Tra le città il treno è di solito più semplice ed evita parcheggi, pedaggi e multe ZTL. L'auto può convenire per campagna e isole, soprattutto a un gruppo che divide le spese — una volta aggiunti assicurazione, carburante, pedaggi e parcheggi." },
    { question: "Quanto deve spendere una coppia in Italia?", answer: "Parti da alloggio e taxi, che si dividono, poi aggiungi le spese a persona come treni, biglietti e cibo. Il costo a persona è di solito più basso che per chi viaggia da solo." },
    { question: "Quanto deve spendere una famiglia in Italia?", answer: "Cerca camere familiari o appartamenti, controlla le riduzioni per i bambini — nei musei statali i minori di 18 anni entrano gratis — e confronta tariffe famiglia o gruppo e taxi a tariffa fissa con i singoli biglietti del treno." },
    { question: "Venezia è più cara di altre mete italiane?", answer: "Alcune spese sono strutturalmente più alte: alloggi limitati nel centro storico e trasporti sull'acqua a 9,50 € per un biglietto da 75 minuti. Abbonamenti di più giorni, camminare e fermarsi più a lungo aiutano." },
    { question: "Quanto mettere a budget per musei e visite?", answer: "Elenca i luoghi a pagamento che vuoi vedere e somma i prezzi ufficiali, diritti di prenotazione compresi. Per esempio, i Musei Vaticani costano 25 € prenotando online e Palazzo Ducale 30–35 €." },
    { question: "L'imposta di soggiorno è compresa nel prezzo dell'hotel?", answer: "Non sempre. Molti Comuni applicano un'imposta a persona e a notte, spesso pagata in struttura. Controlla che cosa comprende la tua prenotazione." },
    { question: "Quanti contanti portare?", answer: "Le carte sono accettate quasi ovunque, ma tieni un po' di contanti per piccoli acquisti, mercati e chi li preferisce. Prima di partire controlla commissioni su pagamenti e prelievi all'estero della tua banca." },
    { question: "Si può girare l'Italia con un budget contenuto?", answer: "Sì: viaggia fuori dai periodi di punta, usa i regionali o prenota presto l'alta velocità, dormi in quartieri ben collegati, alterna cibo veloce e pasti a tavola e approfitta dei tanti luoghi gratuiti." },
    { question: "Quali sono i costi nascosti più comuni in Italia?", answer: "Imposta di soggiorno, trasferimenti dall'aeroporto, coperto al ristorante, diritti di prenotazione per le visite, deposito bagagli e, nei viaggi in auto, pedaggi, parcheggi e multe ZTL." },
    { question: "Il volo va messo a budget separatamente?", answer: "Sì. Il costo del volo varia così tanto a seconda della partenza e della stagione che falsa qualsiasi confronto. Tienilo come voce a parte, supplementi bagaglio compresi." },
  ],

  sourcesTitle: "Fonti ufficiali dei prezzi",
  sources: [
    { label: "Trenitalia — Leonardo Express", url: "https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html", note: "tariffa del treno per Fiumicino" },
    { label: "Malpensa Express — prezzi", url: "https://www.malpensaexpress.it/en/tickets/travel-documents/prices/", note: "tariffa del treno per Malpensa" },
    { label: "Venezia Unica — biglietti ACTV", url: "https://www.veneziaunica.it/it/", note: "trasporti pubblici a Venezia" },
    { label: "GTT — Tap&Go", url: "https://www.gtt.to.it/cms/index.php?option=com_content&view=article&id=8456&catid=14", note: "trasporti pubblici a Torino" },
    { label: "ATV Verona — navetta aeroporto", url: "https://www.atv.verona.it/", note: "Airlink" },
    { label: "Musei Vaticani — tariffe", url: "https://www.museivaticani.va/content/museivaticani/it/organizza-visita/tariffe-e-biglietti.html", note: "biglietto e diritto di prenotazione" },
    { label: "Fontana di Trevi — Roma Capitale", url: "https://www.comune.roma.it/web/it/notizia/biglietto-dingresso-fontana-di-trevi.page", note: "biglietto per l'area della vasca" },
    { label: "Palazzo Ducale — informazioni", url: "https://palazzoducale.visitmuve.it/", note: "biglietti" },
    { label: "Palazzo Reale di Palermo", url: "https://www.federicosecondo.org/visita/", note: "biglietti" },
    { label: "Parco archeologico del Colosseo", url: "https://ticketing.colosseo.it/", note: "biglietti del Colosseo" },
  ],
};
