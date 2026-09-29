import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Traveling Around Italy by Train". Regole, tariffe e
// orari cambiano: i dati sono stati verificati sulle pagine ufficiali degli
// operatori e delle autorità (settembre 2026) e vanno ricontrollati a ogni
// aggiornamento.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/italy-by-train";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const viaggiareInItaliaInTreno: ArticleContent = {
  body: [
    // ——— Introduzione ———
    p("Questa guida spiega come funziona davvero il treno in Italia: quali treni esistono, che differenza c'è tra i biglietti, che cosa fare in stazione e come comportarsi in caso di ritardi o scioperi. È pensata per chi deve organizzare i primi viaggi in treno nel Paese, ma i capitoli su biglietti e stazioni tornano utili anche a chi il treno lo prende spesso."),

    // ——— 1 ———
    h2("In breve"),
    answer("Tra le grandi città, viaggiare in treno in Italia è di solito semplice. **L'alta velocità** — i Frecciarossa di Trenitalia e i treni dell'operatore privato Italo — collega Torino, Milano, Venezia, Bologna, Firenze, Roma e Napoli, con biglietti per un treno preciso e posto assegnato. **I treni regionali** coprono le tratte brevi e i centri minori a prezzo fisso, senza posto assegnato. I due operatori vendono biglietti separati e ogni tariffa ha le sue condizioni: l'abitudine più importante è leggere che cosa dice il proprio biglietto — quale treno, quale stazione, se va convalidato — e controllare le informazioni aggiornate dell'operatore prima di prenotare."),
    {
      type: "facts",
      title: "Il treno in Italia in sintesi",
      rows: [
        { label: "Tra le grandi città", value: "Alta velocità (Frecciarossa, Italo)" },
        { label: "Per le tratte locali", value: "Treni regionali" },
        { label: "Operatori principali", value: "Trenitalia (alta velocità, Intercity, regionali) e Italo (alta velocità); in alcune regioni operano aziende locali, come Trenord in Lombardia" },
        { label: "Posto", value: "Assegnato su alta velocità e Intercity; libero sui regionali" },
        { label: "Biglietti digitali", value: "In vendita sui siti e sulle app ufficiali degli operatori" },
        { label: "Convalida", value: "I regionali cartacei si convalidano prima di salire; quelli digitali si attivano da soli" },
        { label: "Consiglio principale", value: "Controlla numero del treno, stazione e condizioni riportate sul tuo biglietto" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/milano-centrale-empty-platform.webp`,
      alt: "Binari vuoti sotto la grande volta in ferro e vetro della stazione di Milano Centrale",
      caption: "Milano Centrale, uno dei nodi più trafficati della rete. Le grandi stazioni richiedono tempo: meglio arrivare con anticipo.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 2 ———
    h2("Come funziona il sistema ferroviario italiano"),
    p("Dire «il treno» in Italia può voler dire cose molto diverse. Un Frecciarossa tra Milano e Roma, un regionale che si ferma in ogni paese lungo la costa e un Intercity notturno per la Sicilia sono prodotti diversi, spesso con biglietti, regole e prezzi diversi. Sapere su quale treno si viaggia risolve la maggior parte dei dubbi prima ancora che si presentino."),
    p("La rete è gestita da RFI (Rete Ferroviaria Italiana), mentre i treni sono operati da aziende diverse. L'alta velocità segue una direttrice principale da Torino e Milano verso Bologna, Firenze, Roma, Napoli e Salerno, con collegamenti rapidi verso Venezia e prolungamenti verso altre città. Intercity e regionali completano la rete, raggiungendo molte località fuori dalle linee veloci."),
    { type: "routeMap", caption: "Uno schema semplificato delle principali direttrici veloci servite da Trenitalia e Italo. Molte altre città sono raggiunte da Intercity e treni regionali." },

    // ——— 3 ———
    h2("Trenitalia e Italo"),
    p("L'alta velocità in Italia è gestita da due aziende. Nessuna delle due è migliore per ogni viaggio: cambiano rete, orari, tariffe e condizioni, e conviene confrontarle per il proprio percorso e la propria data."),
    h3("Trenitalia"),
    p("[Trenitalia](https://www.trenitalia.com/it.html) è l'operatore nazionale e fa parte del gruppo Ferrovie dello Stato (FS). Gestisce i Frecciarossa (e, su alcune linee, Frecciargento e Frecciabianca), gli Intercity e gli Intercity Notte e la maggior parte dei treni regionali. Secondo Trenitalia, i Frecciarossa offrono tre o quattro livelli di servizio: Standard, Premium, Business ed Executive."),
    h3("Italo"),
    p("[Italo](https://www.italotreno.com/it) è un operatore privato che gestisce solo treni ad alta velocità, concentrati sulle direttrici principali tra città come Torino, Milano, Venezia, Bologna, Firenze, Roma e Napoli. Vende diversi livelli di servizio, da Smart a Club Executive, e alcuni biglietti combinano il treno con un autobus Italo in coincidenza."),
    table(
      ["Caratteristica", "Trenitalia", "Italo"],
      [
        ["Alta velocità", "Sì — Frecciarossa e altre Frecce", "Sì — è il suo servizio principale"],
        ["Intercity e regionali", "Sì", "No — solo alta velocità"],
        ["Collegamenti tra grandi città", "Sì, in tutto il Paese", "Sì, sulla sua rete ad alta velocità"],
        ["Dove si acquista", "Sito e app ufficiali, biglietterie automatiche e biglietterie", "Sito e app ufficiali, biglietterie automatiche e desk"],
        ["Condizioni", "Variano in base alla tariffa", "Variano in base alla tariffa"],
        ["Pass ferroviari", "Accettati su molti servizi, di solito con prenotazione a pagamento su alta velocità e Intercity", "Non fa parte del circuito Interrail/Eurail"],
      ],
      "Trenitalia e Italo a confronto"
    ),
    important("Un biglietto Trenitalia non vale su un treno Italo, e viceversa — anche sulla stessa tratta e dallo stesso binario. Controlla il nome dell'operatore e il numero del treno sul biglietto.", "Ogni biglietto vale per il suo operatore"),

    // ——— 4 ———
    h2("Alta velocità e treni regionali"),
    answer("L'alta velocità conviene tra le grandi città, dove è quasi sempre molto più rapida; i regionali servono per i tragitti brevi, i centri minori e le gite in giornata, dove spesso sono l'unica opzione e hanno un prezzo fisso."),
    table(
      ["Tipo di treno", "Ideale per", "Posto e prenotazione", "Esempi"],
      [
        ["Alta velocità (Frecciarossa, Italo)", "Spostamenti tra grandi città", "Biglietto per un treno preciso con posto assegnato", "Roma–Firenze, Milano–Venezia, Roma–Napoli"],
        ["Intercity", "Percorsi lunghi fuori dalle linee veloci", "Biglietto per un treno preciso, di norma con posto", "Linee costiere; treni notturni verso il Sud"],
        ["Regionale e Regionale Veloce", "Tragitti brevi, centri minori, gite in giornata", "Posto libero; valgono le condizioni del biglietto", "Firenze–Lucca, Milano–Como, Venezia–Padova"],
      ],
      "Che treno scegliere"
    ),
    p("La differenza di tempo può essere notevole. Tra Bologna e Firenze, per esempio, l'alta velocità usa una linea diretta sotto l'Appennino e impiega ben meno di un'ora, mentre i regionali seguono la linea storica, più lenta. Sui tragitti brevi, però, un regionale che parte prima può arrivare per primo: conviene confrontare il tempo totale, non solo il tipo di treno."),
    {
      type: "image",
      src: `${IMG}/regional-double-decker-train-domodossola.webp`,
      alt: "Un treno regionale a due piani bianco e verde fermo al binario a Domodossola",
      caption: "Un regionale a Domodossola, in Piemonte. I regionali hanno prezzo fisso e posto libero.",
      credit: unsplash("Valomukitse Arva-Zika", "valomukitse"),
    },

    // ——— 5 ———
    h2("Le principali tratte ferroviarie"),
    p("Sono i collegamenti più usati da chi organizza un viaggio tra le città d'arte. I tempi indicati sono quelli, approssimativi, dei **collegamenti diretti più veloci** secondo gli orari degli operatori a settembre 2026: molti treni impiegano di più, quindi controlla sempre il treno che stai prenotando."),
    h3("Roma–Firenze"),
    p("È la coppia più frequente nei primi viaggi. L'alta velocità impiega **circa un'ora e mezza**, con partenze frequenti durante il giorno. A Roma i treni partono da Termini o da Tiburtina: controlla quale stazione è indicata sul biglietto."),
    h3("Firenze–Venezia"),
    p("Collega due delle città più visitate in **circa due ore**. Se dormi nella città storica, resta a bordo fino a Venezia Santa Lucia e non scendere a Venezia Mestre, che è sulla terraferma."),
    h3("Roma–Venezia"),
    p("Il viaggio diretto richiede **circa tre ore e mezza–quattro ore**. Chi ha tempo può spezzarlo con una sosta a Firenze o a Bologna, trasformando il trasferimento in una tappa."),
    h3("Milano–Venezia"),
    p("La classica tratta del Nord dura **circa due ore e un quarto–due ore e mezza** con i treni più veloci. Verona e Padova sono sulla linea e si prestano bene a una fermata lungo il percorso."),
    h3("Roma–Napoli"),
    p("Con l'alta velocità servono **circa un'ora–un'ora e un quarto**. Da Napoli si raggiungono Pompei e Sorrento con linee regionali separate, gestite da un'altra azienda e con biglietti propri."),
    table(
      ["Tratta", "Tipo di treno", "Tempo più rapido (circa)", "Da sapere"],
      [
        ["Roma – Firenze", "Alta velocità", "1 ora e 30", "Partenze da Termini o Tiburtina"],
        ["Firenze – Venezia", "Alta velocità", "2 ore", "Scendi a Santa Lucia, non a Mestre, se dormi in città"],
        ["Roma – Venezia", "Alta velocità", "3 ore e 30 – 4 ore", "Si può spezzare a Firenze o Bologna"],
        ["Milano – Venezia", "Alta velocità / veloce", "2 ore e 15 – 2 ore e 30", "Verona e Padova sono tappe comode"],
        ["Roma – Napoli", "Alta velocità", "1 ora – 1 ora e 15", "Pompei e Sorrento con linee regionali separate"],
        ["Milano – Firenze", "Alta velocità", "1 ora e 45 – 2 ore", "Molti treni proseguono per Roma"],
        ["Bologna – Firenze", "Alta velocità", "35–40 minuti", "I regionali seguono una linea molto più lenta"],
        ["Napoli – Salerno", "Alta velocità o regionale", "35 minuti", "Da Salerno traghetti e autobus per la Costiera Amalfitana"],
        ["Milano – Torino", "Alta velocità", "45 minuti – 1 ora", "I regionali sono più lenti ed economici"],
      ],
      "Le tratte principali in sintesi"
    ),
    p("Per costruire un intero viaggio intorno a questi collegamenti, la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia) propone itinerari pensati proprio sul treno; per scegliere tra treno, autobus, aereo, auto e traghetto tratta per tratta, vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),
    {
      type: "image",
      src: `${IMG}/frecciarossa-crossing-venice-lagoon.webp`,
      alt: "Un Frecciarossa attraversa il ponte sulla laguna di Venezia",
      caption: "Un Frecciarossa sul ponte della laguna, in arrivo a Venezia. Il capolinea, Santa Lucia, si affaccia direttamente sul Canal Grande.",
      credit: unsplash("Lukas S", "hamburgphoto"),
      wide: true,
    },

    // ——— 6 ———
    h2("Come acquistare i biglietti"),
    answer("I biglietti si comprano sui siti e sulle app ufficiali degli operatori, alle biglietterie automatiche in stazione o allo sportello. Per l'alta velocità, prenotare appena i piani sono definiti dà di solito più scelta di tariffe; i regionali hanno prezzo fisso e non serve anticipare."),
    h3("Siti e app ufficiali"),
    p("Trenitalia e Italo vendono i biglietti sui rispettivi siti e app. I biglietti digitali arrivano via email e nell'app con un codice QR, e le app mostrano binario e ritardi in tempo reale."),
    h3("Biglietterie automatiche"),
    p("Le macchinette in stazione funzionano in più lingue e accettano carte. Trenitalia e Italo hanno macchinette separate: usa quella dell'operatore giusto."),
    h3("Biglietterie"),
    p("Nelle stazioni più grandi, gli sportelli aiutano con viaggi complessi, cambi e abbonamenti. Nei periodi di punta le code possono essere lunghe."),
    h3("Altri rivenditori autorizzati"),
    p("Agenzie di viaggio e siti di terze parti vendono biglietti ferroviari italiani. Possono essere comodi per confrontare gli operatori, ma a volte applicano commissioni, e gli eventuali cambi passano di solito per il rivenditore anziché per l'operatore."),

    // ——— 7 ———
    h2("Come funzionano le tariffe"),
    p("Non esiste un prezzo unico per una tratta. Le tariffe dell'alta velocità variano con la domanda, con l'anticipo della prenotazione, con il tipo di tariffa (quelle flessibili costano di più ma permettono cambi; quelle economiche hanno condizioni più rigide), con il livello di servizio e con giorno e orario del viaggio. Le tariffe regionali, invece, dipendono dalla distanza e non cambiano con la domanda."),
    p("Due persone sullo stesso treno possono quindi aver pagato cifre diverse: una con una tariffa flessibile che consente il cambio, l'altra con una tariffa economica comprata quando i posti venduti erano pochi. Nessuna delle due ha sbagliato: la scelta giusta dipende da quanto sono definiti i tuoi programmi."),
    tip("Quando le date sono certe, prenota l'alta velocità per le tratte e gli orari più richiesti, come il venerdì sera, la domenica pomeriggio e i ponti. Tieni le tariffe flessibili per i viaggi che potresti cambiare.", "Quando prenotare"),
    p("Per inserire i treni nel budget del viaggio c'è la nostra guida su [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia)."),

    // ——— 8 ———
    h2("Prenotazione del posto"),
    answer("Su alta velocità e Intercity il biglietto vale per un treno preciso e comprende il posto assegnato. Sui regionali non esiste la prenotazione del posto: ci si siede dove c'è spazio."),
    p("Su un treno ad alta velocità prenotato bisogna viaggiare sul treno indicato nel biglietto. Le condizioni di Trenitalia per il Frecciarossa, per esempio, stabiliscono che salire su un treno diverso da quello prenotato equivale a viaggiare senza titolo valido. Se i programmi cambiano, usa le opzioni di cambio previste dalla tua tariffa prima della partenza."),
    p("Sui regionali non ci sono carrozze o posti da cercare. Nelle ore di punta e nei weekend estivi sulle linee costiere i posti a sedere possono finire, e può capitare di viaggiare in piedi."),
    p("Chi ha un pass ferroviario deve di solito aggiungere una prenotazione, spesso a pagamento, sui Frecciarossa e sugli Intercity di Trenitalia. Italo non fa parte del circuito Interrail/Eurail, quindi con il pass serve comunque un normale biglietto Italo."),

    // ——— 9 ———
    h2("Come leggere un biglietto"),
    p("Sul biglietto c'è tutto ciò che serve per salire sul treno giusto. Queste sono le voci da controllare."),
    table(
      ["Sul biglietto", "Che cosa indica", "Perché conta"],
      [
        ["Treno", "Il servizio preciso, per esempio «FR 9520»", "I tabelloni elencano i treni per numero e destinazione"],
        ["Partenza / Arrivo", "Stazioni e orari di partenza e arrivo", "Diverse città hanno più stazioni"],
        ["Carrozza", "Il numero della carrozza", "I treni veloci sono lunghi: trova la carrozza prima di salire"],
        ["Posto", "Il numero del posto", "Assegnato su alta velocità e Intercity"],
        ["Livello di servizio o classe", "Per esempio Standard, Business, Smart", "Determina in quale parte del treno viaggi"],
        ["Condizioni", "Se il biglietto si può cambiare o rimborsare", "Le tariffe più economiche hanno regole più rigide"],
        ["Nome del passeggero", "Alcuni biglietti sono nominativi", "Porta un documento: il personale può chiederlo"],
      ],
      "Che cosa controllare sul biglietto"
    ),
    h3("Il biglietto va convalidato?"),
    p("Solo in alcuni casi. Secondo Trenitalia, **i biglietti regionali cartacei** vanno convalidati nelle macchinette della stazione di partenza prima che il treno parta, e dalla convalida il viaggio va concluso entro quattro ore, salvo eccezioni previste da alcune tariffe regionali. **I biglietti regionali digitali** si attivano invece automaticamente all'orario di partenza del treno scelto. I biglietti per un treno e un posto precisi, come quelli dell'alta velocità, non vanno timbrati."),
    important("Le regole cambiano secondo il tipo di biglietto e l'operatore. Se il biglietto indica che va convalidato o attivato, fallo prima di salire: viaggiare con un biglietto non convalidato può costare una sanzione. Segui le istruzioni riportate sul tuo biglietto.", "Convalida"),
    p("Con il biglietto regionale digitale conviene scegliere il treno che si prenderà davvero: il biglietto si attiva all'orario di partenza di quel treno, e Trenitalia consente di cambiare l'orario prima di allora, nei limiti delle condizioni del biglietto."),

    // ——— 10 ———
    h2("Come salire sul treno"),
    {
      type: "steps",
      items: [
        { title: "Vai nella stazione giusta", text: "Controlla la stazione di partenza sul biglietto. Roma, Milano, Venezia e Napoli hanno più di una stazione importante." },
        { title: "Trova il treno sul tabellone delle partenze", text: "Cerca il numero del treno e la destinazione finale: quella indicata può essere oltre la tua fermata." },
        { title: "Aspetta l'indicazione del binario", text: "Il binario compare spesso poco prima della partenza. Resta vicino al tabellone e fai attenzione alle variazioni." },
        { title: "Ricontrolla il numero del treno", text: "Più treni possono partire da binari vicini a orari simili. Verifica il numero sul monitor del binario." },
        { title: "Trova la carrozza e la classe", text: "Sui treni veloci il numero della carrozza è indicato accanto alle porte, e in alcune stazioni i monitor mostrano dove si fermerà ogni carrozza." },
        { title: "Sali a bordo", text: "Le porte si chiudono poco prima della partenza: sali con un po' di margine e fai attenzione allo spazio tra banchina e treno." },
        { title: "Trova il posto, se ne hai uno", text: "Il numero è indicato sopra o accanto a ogni sedile. Sui regionali ci si siede dove si vuole." },
        { title: "Tieni il biglietto a portata di mano", text: "Il personale controlla i biglietti a bordo. Tieni pronti il codice QR o il biglietto cartaceo e un documento." },
      ],
    },
    p("In alcune grandi stazioni l'accesso ai binari è controllato da varchi: tieni il biglietto pronto prima di arrivarci."),
    {
      type: "image",
      src: `${IMG}/pisa-centrale-departure-board.webp`,
      alt: "Monitor delle partenze sospesi sopra un binario della stazione di Pisa",
      caption: "I monitor delle partenze a Pisa. Ogni treno è indicato con numero, destinazione e binario.",
      credit: unsplash("Tim Photoguy", "tim0at0unsplash"),
    },

    // ——— 11 ———
    h2("Le principali stazioni italiane"),
    answer("Le grandi stazioni come Roma Termini, Milano Centrale e Firenze Santa Maria Novella sono affollate ed estese. Conviene arrivare con anticipo, verificare da quale stazione parte il treno e tenere d'occhio i propri effetti personali."),
    table(
      ["Stazione", "Dove si trova", "Come spostarsi", "Da sapere"],
      [
        ["Roma Termini", "Centro di Roma", "Metro A e B; molti autobus", "Il nodo principale di Roma; molto affollata, con varchi ai binari"],
        ["Roma Tiburtina", "A est del centro", "Metro B", "Alcuni treni veloci partono da qui: controlla il biglietto"],
        ["Milano Centrale", "A nord-est del centro", "Metro M2 e M3", "Molto grande: calcola il tempo per raggiungere il binario. Da qui parte il Malpensa Express"],
        ["Firenze Santa Maria Novella", "Ai margini del centro storico", "Il Duomo è raggiungibile a piedi; tramvia T2 per l'aeroporto", "Affollata ma compatta"],
        ["Venezia Santa Lucia", "Sul Canal Grande", "Vaporetti e a piedi", "Da non confondere con Venezia Mestre, in terraferma"],
        ["Bologna Centrale", "A nord del centro storico", "Autobus, oppure una ventina di minuti a piedi; Marconi Express per l'aeroporto", "I binari dell'alta velocità sono in profondità: serve tempo in più"],
        ["Napoli Centrale", "Piazza Garibaldi, a est del centro", "Metro linee 1 e 2; Circumvesuviana nelle vicinanze", "Zona trafficata; alcuni treni veloci fermano anche a Napoli Afragola, fuori città"],
      ],
      "Le grandi stazioni in sintesi"
    ),
    p("Arrivare a Venezia in treno è uno degli ingressi più belli d'Europa: si esce da Santa Lucia direttamente sul Canal Grande. Se dormi in città, controlla che il biglietto arrivi a Santa Lucia e non si fermi a Mestre. Per scegliere dove dormire, leggi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),

    // ——— 12 ———
    h2("Bagagli"),
    answer("Sui treni italiani non c'è il check-in dei bagagli: si portano a bordo e si sistemano da soli. Conviene viaggiare con una valigia che si riesce a sollevare sul portapacchi e a spostare in fretta lungo la banchina."),
    ul(
      "**Dove metterli** — ci sono portapacchi per le borse piccole e, su molti treni, spazi per le valigie in fondo alle carrozze o tra i sedili.",
      "**Regole degli operatori** — secondo le [regole di Italo](https://www.italotreno.com/en/the-train/luggage), nell'ambiente Smart i bagagli non devono superare 75 × 53 × 30 cm. Le condizioni generali di Trenitalia chiedono di sistemare i bagagli negli spazi previsti senza intralciare gli altri passeggeri. Per oggetti grandi o particolari, controlla le regole aggiornate del tuo operatore.",
      "**Corridoi e porte** — non lasciare mai bagagli nei corridoi o davanti alle porte.",
      "**Oggetti di valore** — documenti, denaro ed elettronica restano con te, non nelle valigie in fondo alla carrozza.",
      "**Etichette** — un'etichetta con il nome aiuta se una valigia finisce nel posto sbagliato.",
      "**Gradini** — molti treni hanno gradini alti dal marciapiede, faticosi con una valigia pesante."
    ),
    tip("Scegli un posto da cui vedere i bagagli, oppure tieni una borsa più piccola ai piedi. Sui treni affollati sali presto, prima che i portapacchi si riempiano.", "Tieni d'occhio i bagagli"),
    {
      type: "image",
      src: `${IMG}/suitcase-on-platform-milano-centrale.webp`,
      alt: "Una valigia gialla su un binario vuoto a Milano Centrale",
      caption: "Viaggia con bagagli che riesci a sollevare da solo: sui treni italiani non c'è deposito bagagli.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 13 ———
    h2("Collegamenti ferroviari dagli aeroporti"),
    p("Diversi grandi aeroporti hanno collegamenti diretti in treno, tram o navetta verso la città, spesso in buona coincidenza con i treni a lunga percorrenza. Orari e tariffe vanno verificati con l'operatore prima di partire."),
    table(
      ["Aeroporto", "Collegamento con la città", "Note"],
      [
        ["Roma Fiumicino", "[Leonardo Express](https://www.trenitalia.com/it/regionale/collegamenti-regionale/leonardo-express.html), senza fermate fino a Roma Termini (32 minuti secondo Trenitalia); regionali per altre stazioni di Roma", "Alcuni Frecciarossa a lunga percorrenza fermano anche in aeroporto"],
        ["Milano Malpensa", "[Malpensa Express](https://www.trenord.it/biglietti/titoli-di-viaggio/malpensa-express/) per Milano Centrale, Porta Garibaldi e Cadorna", "Gestito da Trenord; serve il biglietto specifico per Malpensa"],
        ["Milano Bergamo (Orio al Serio)", "Autobus per la stazione di Bergamo e per Milano", "Un collegamento ferroviario diretto è in costruzione: verifica se è già attivo"],
        ["Venezia Marco Polo", "Autobus per Piazzale Roma e la stazione di Mestre; vaporetti Alilaguna", "L'aeroporto non è servito dal treno"],
        ["Firenze", "Tramvia T2 verso la stazione di Santa Maria Novella", "Circa 20 minuti di tram"],
        ["Pisa", "Navetta [PisaMover](https://pisa-mover.com/servizio-shuttle/) per Pisa Centrale", "In coincidenza con i treni per Firenze e per la costa"],
        ["Bologna", "Monorotaia [Marconi Express](https://www.marconiexpress.it/) per Bologna Centrale", "Un tragitto breve fino alla stazione principale"],
      ],
      "Collegamenti tra aeroporti e città"
    ),
    p("La nostra guida sui [trasferimenti dagli aeroporti italiani](/it/guide/trasferimenti-aeroporti-italia) copre anche taxi, autobus e trasporti via acqua."),

    // ——— 14 ———
    h2("Treno o auto?"),
    answer("Tra le città il treno è di solito la scelta migliore; per campagna, montagna e itinerari con più tappe rurali conviene l'auto. Molti combinano le due cose: treno per le città, auto a noleggio per qualche giorno nel mezzo."),
    table(
      ["Situazione", "Treno", "Auto"],
      [
        ["Roma – Firenze", "Spesso l'opzione più pratica", "Di solito meno comoda: ZTL e parcheggi in entrambe le città"],
        ["Centri delle grandi città", "Le stazioni sono in genere centrali", "Zone a traffico limitato e pochi parcheggi"],
        ["Campagna toscana", "Limitato in molte zone", "Più flessibile per borghi e cantine"],
        ["Dolomiti", "Dipende dall'itinerario; in stagione autobus e impianti colmano i vuoti", "Può offrire più flessibilità"],
        ["Costiera Amalfitana", "Treno fino a Salerno o Napoli, poi traghetto o autobus", "Strade strette e parcheggi difficili"],
        ["Più tappe rurali in un giorno", "Limitato", "Più flessibile"],
      ],
      "Scegliere tra treno e auto"
    ),
    p("Se decidi di guidare, leggi prima la nostra guida su come [guidare in Italia](/it/guide/guidare-in-italia), in particolare la parte sulle ZTL."),

    // ——— 15 ———
    h2("Viaggiare con bambini"),
    ul(
      "**Posti** — sull'alta velocità, prenota i posti di tutta la famiglia in un'unica prenotazione, così da stare vicini.",
      "**Bagagli** — organizzati in modo che un adulto possa gestire le valigie mentre l'altro segue i bambini, soprattutto nelle stazioni affollate.",
      "**Passeggini** — un passeggino compatto e pieghevole è la scelta più comoda; Italo, per esempio, lo considera un bagaglio.",
      "**Stazioni** — nelle grandi stazioni gli ascensori possono essere lenti o affollati: lascia margine tra arrivo e partenza.",
      "**Orari** — evita coincidenze strette e, se puoi, scegli i treni in base a sonnellini e pasti.",
      "**Tariffe** — tariffe per ragazzi e regole per i più piccoli cambiano secondo operatore e tariffa: verificale al momento dell'acquisto."
    ),

    // ——— 16 ———
    h2("Assistenza e accessibilità"),
    answer("Nelle principali stazioni italiane le persone con disabilità o a ridotta mobilità possono chiedere assistenza gratuita tramite le Sale Blu di RFI. Il servizio va prenotato in anticipo attraverso i canali ufficiali."),
    p("[Rete Ferroviaria Italiana (RFI)](https://www.rfi.it/it/stazioni/pagine-stazioni/accessibilita.html), che gestisce l'infrastruttura, organizza il servizio delle Sale Blu. L'assistenza si richiede online, con l'app Sala Blu+ oppure contattando una Sala Blu. Il preavviso necessario cambia secondo la stazione e l'orario — in alcune grandi stazioni, durante il giorno, si può prenotare anche poco prima della partenza, mentre altre richiedono più anticipo — quindi conviene fare richiesta il prima possibile."),
    p("Al momento dell'acquisto del biglietto, prenota con l'operatore un posto accessibile o lo spazio per la sedia a rotelle. Trenitalia e Italo pubblicano ciascuno le informazioni sui servizi accessibili e su come richiederli: verificale per il tuo treno."),

    // ——— 17 ———
    h2("Ritardi, cancellazioni e scioperi"),
    answer("Per gli aggiornamenti in tempo reale controlla l'app o il sito dell'operatore e i tabelloni in stazione. In caso di ritardo significativo potresti avere diritto a un indennizzo, secondo le condizioni dell'operatore e le norme europee."),
    h3("Durante il viaggio"),
    ul(
      "Controlla la colonna «Ritardo» sui tabelloni e ascolta gli annunci.",
      "Le app degli operatori inviano aggiornamenti sui treni prenotati.",
      "Se il treno viene cancellato, chiedi in biglietteria o al punto informazioni qual è il primo treno utile."
    ),
    h3("Indennizzi"),
    p("Secondo le condizioni pubblicate da Trenitalia, per un ritardo all'arrivo tra 60 e 119 minuti spetta un indennizzo pari al 25% del prezzo del biglietto, e del 50% per ritardi di 120 minuti o più, con regole specifiche per i regionali e un bonus per i ritardi più brevi su alcuni servizi Frecce. La richiesta si presenta tramite i canali dell'operatore; per Trenitalia entro un anno dal viaggio. Le norme europee sui diritti dei passeggeri ferroviari prevedono tutele minime analoghe: verifica le condizioni aggiornate con il tuo operatore."),
    h3("Coincidenze perse"),
    p("Secondo le regole europee sui diritti dei passeggeri, la tutela per le coincidenze perse vale quando il viaggio è acquistato con un unico biglietto. Se hai comprato biglietti separati per ogni treno, il ritardo del primo non protegge automaticamente il secondo: un motivo in più per lasciare un margine ampio tra un treno e l'altro."),
    h3("Scioperi"),
    p("Gli scioperi dei trasporti sono proclamati in anticipo. Il Ministero delle Infrastrutture e dei Trasporti pubblica il [calendario degli scioperi](https://scioperi.mit.gov.it/) e gli operatori diffondono avvisi prima di ogni sciopero. Secondo Trenitalia, nel trasporto regionale sono garantiti i servizi nelle fasce di maggiore frequentazione, dalle 6 alle 9 e dalle 18 alle 21 nei giorni feriali (nei festivi le fasce sono diverse), e per ogni sciopero viene pubblicato l'elenco dei treni a lunga percorrenza garantiti. Controlla gli avvisi a ridosso della data del viaggio."),
    {
      type: "image",
      src: `${IMG}/travellers-boarding-train-milano-centrale.webp`,
      alt: "Due viaggiatori con lo zaino accanto a un treno regionale a Milano Centrale",
      caption: "Lascia margini ampi tra un treno e l'altro, soprattutto se ogni tratta ha un biglietto separato.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },

    // ——— 18 ———
    h2("Errori comuni"),
    table(
      ["Errore", "Che cosa fare invece"],
      [
        ["Andare nella stazione sbagliata", "Controlla il nome della stazione sul biglietto: molte città ne hanno più di una"],
        ["Confondere Roma Termini e Roma Tiburtina", "Sono entrambe stazioni principali: pianifica il tragitto verso quella indicata"],
        ["Non controllare il numero del treno", "Confronta il numero sul biglietto con il tabellone, non solo la destinazione"],
        ["Pensare che tutti i biglietti funzionino allo stesso modo", "Alta velocità e regionali seguono regole diverse"],
        ["Non accorgersi di un cambio di binario", "Continua a controllare il tabellone fino alla partenza"],
        ["Prenotare coincidenze troppo strette", "Lascia margine, soprattutto nelle grandi stazioni o con biglietti separati"],
        ["Ignorare le condizioni della tariffa", "Verifica se la tariffa consente cambi prima di acquistarla"],
        ["Lasciare i bagagli incustoditi", "Tieni le valigie in vista e gli oggetti di valore con te"],
        ["Non verificare ritardi e scioperi", "Controlla l'app dell'operatore e gli avvisi ufficiali il giorno stesso"],
        ["Sottovalutare le grandi stazioni", "Calcola il tempo per percorsi, ascensori e varchi"],
        ["Scendere per errore a Venezia Mestre", "Resta a bordo fino a Venezia Santa Lucia per la città storica"],
      ],
      "Errori frequenti e come evitarli"
    ),

    // ——— 19 ———
    h2("Checklist"),
    p("Spunta le voci man mano che organizzi il viaggio."),
    {
      type: "checklist",
      id: "viaggiare-in-treno",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Controlla la stazione di arrivo", "Confronta tipi di treno e operatori", "Leggi le condizioni della tariffa", "Controlla l'orario di partenza", "Controlla orario di arrivo e coincidenze"],
        },
        {
          title: "Prima di partire",
          items: ["Scarica o salva il biglietto", "Annota il numero del treno", "Controlla la stazione di partenza", "Verifica ritardi o scioperi", "Tieni a portata di mano un documento", "Arriva con un po' di anticipo"],
        },
        {
          title: "In stazione",
          items: ["Controlla il tabellone delle partenze", "Verifica il binario", "Verifica il numero del treno", "Convalida il biglietto regionale cartaceo", "Trova la carrozza", "Trova il posto"],
        },
      ],
    },
    {
      type: "image",
      src: `${IMG}/train-carriage-seats-tarvisio.webp`,
      alt: "File di sedili vuoti all'interno di una carrozza a Tarvisio, in Friuli-Venezia Giulia",
      caption: "Una carrozza vuota a Tarvisio, all'estremo nord-est. I treni del primo mattino e di metà giornata sono spesso i più tranquilli.",
      credit: unsplash("viktor rejent", "viktor_rejent"),
    },
  ],

  faqs: [
    { question: "È facile viaggiare in Italia in treno?", answer: "Sì, tra la maggior parte delle grandi città. L'alta velocità collega spesso e rapidamente Milano, Venezia, Bologna, Firenze, Roma e Napoli, e le stazioni sono in genere centrali. Le zone rurali e parte del Sud sono più difficili da raggiungere solo in treno." },
    { question: "Come funzionano i treni ad alta velocità?", answer: "Si acquista un biglietto per un treno preciso, con posto assegnato e condizioni che dipendono dalla tariffa. Li gestiscono Trenitalia (Frecciarossa) e Italo, con biglietti separati: un biglietto vale solo sui treni del proprio operatore." },
    { question: "Meglio Trenitalia o Italo?", answer: "Nessuno dei due è migliore per ogni viaggio. Trenitalia gestisce alta velocità, Intercity e regionali in tutto il Paese; Italo solo l'alta velocità sulle direttrici principali. Conviene confrontare orari, prezzi e condizioni per il proprio percorso." },
    { question: "Bisogna prenotare i treni in anticipo?", answer: "Per l'alta velocità conviene prenotare appena i programmi sono definiti: le tariffe variano con la domanda e i treni più richiesti possono riempirsi. I regionali hanno prezzo fisso e si possono comprare il giorno stesso." },
    { question: "Quanto prima si possono prenotare i treni?", answer: "In genere i biglietti dell'alta velocità sono in vendita con alcuni mesi d'anticipo, ma la finestra varia secondo l'operatore e il periodo d'orario. Verifica sul sito dell'operatore per le tue date." },
    { question: "Serve prenotare il posto?", answer: "Dipende dal treno. Su alta velocità e Intercity il biglietto vale per un treno preciso e comprende il posto assegnato. Sui regionali non si prenota: ci si siede dove c'è spazio." },
    { question: "Il biglietto del treno va convalidato?", answer: "Solo alcuni biglietti. Secondo Trenitalia, i regionali cartacei vanno convalidati nelle macchinette in stazione prima della partenza, mentre quelli digitali si attivano da soli. I biglietti dell'alta velocità, con treno e posto indicati, non vanno timbrati." },
    { question: "Si possono comprare i biglietti in stazione?", answer: "Sì. Le stazioni hanno biglietterie automatiche di Trenitalia e di Italo, e quelle più grandi anche gli sportelli. Comprare online in anticipo dà di solito più scelta tra le tariffe dell'alta velocità." },
    { question: "Si possono portare valigie grandi in treno?", answer: "Sì, ma le porti e le sistemi da solo: non c'è check-in. Ogni operatore ha le sue regole; Italo, per esempio, nell'ambiente Smart ammette bagagli fino a 75 × 53 × 30 cm." },
    { question: "Che cosa succede se il treno è in ritardo?", answer: "Segui gli aggiornamenti su tabelloni e app. Per i ritardi lunghi gli operatori riconoscono un indennizzo: Trenitalia, per esempio, il 25% per ritardi all'arrivo tra 60 e 119 minuti e il 50% da due ore in su. La richiesta si fa all'operatore." },
    { question: "Conviene un pass ferroviario in Italia?", answer: "Non sempre. Confronta il costo dei biglietti per i viaggi che farai davvero con il prezzo del pass più le prenotazioni obbligatorie sull'alta velocità. I pass non sono validi su Italo." },
    { question: "Meglio il treno o l'auto per girare l'Italia?", answer: "Il treno di solito conviene tra le città; l'auto per campagna, montagna e zone rurali. Molti viaggiatori prendono il treno tra le città e noleggiano un'auto per qualche giorno nel mezzo." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Trenitalia", url: "https://www.trenitalia.com/it.html", note: "operatore nazionale: biglietti, orari e condizioni" },
    { label: "Trenitalia — Viaggiare con il Regionale", url: "https://www.trenitalia.com/it/regionale/viaggiare-con-il-regionale.html", note: "convalida dei biglietti cartacei" },
    { label: "Trenitalia — Biglietto Digitale Regionale", url: "https://www.trenitalia.com/it/treni_regionali/nuovo-biglietto-digitale-regionale.html", note: "attivazione automatica" },
    { label: "Trenitalia — Indennità per ritardo", url: "https://www.trenitalia.com/it/informazioni/la-guida-del-viaggiatore/indennita-per-ritardo.html", note: "soglie di indennizzo" },
    { label: "Trenitalia — Servizi minimi garantiti in caso di sciopero", url: "https://www.trenitalia.com/it/informazioni/treni-garantiti-incasodisciopero.html", note: "fasce garantite" },
    { label: "Italo", url: "https://www.italotreno.com/it", note: "operatore privato dell'alta velocità" },
    { label: "Italo — Regole sui bagagli", url: "https://www.italotreno.com/en/the-train/luggage", note: "dimensioni dei bagagli nell'ambiente Smart" },
    { label: "RFI — Accessibilità e Sale Blu", url: "https://www.rfi.it/it/stazioni/pagine-stazioni/accessibilita.html", note: "assistenza alle persone con disabilità" },
    { label: "Ministero delle Infrastrutture e dei Trasporti — Scioperi", url: "https://scioperi.mit.gov.it/", note: "scioperi proclamati" },
    { label: "La tua Europa — Diritti dei passeggeri ferroviari", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_it.htm", note: "diritti UE per ritardi e coincidenze" },
    { label: "Trenord — Malpensa Express", url: "https://www.trenord.it/biglietti/titoli-di-viaggio/malpensa-express/", note: "collegamento con Malpensa" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/", note: "collegamento con l'aeroporto di Bologna" },
    { label: "PisaMover", url: "https://pisa-mover.com/servizio-shuttle/", note: "collegamento con l'aeroporto di Pisa" },
  ],
};
