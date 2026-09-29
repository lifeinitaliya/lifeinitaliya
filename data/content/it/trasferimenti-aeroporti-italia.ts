import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Guida: "Come funzionano i trasferimenti aeroportuali in Italia" — edizione
// italiana, scritta in modo autonomo rispetto a quella inglese. Tariffe fisse
// dei taxi (Roma, Milano Malpensa e Linate), regole su taxi e NCC a Fiumicino e
// Ciampino, collegamenti ferroviari e bus, chiusura notturna dell'aeroporto di
// Napoli, l'esenzione dell'art. 172 del Codice della Strada e i diritti di
// assistenza UE verificati su fonti ufficiali a settembre 2026. I prezzi dei
// transfer privati non sono indicati di proposito: dipendono dalla prenotazione.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/italy-airport-transfers";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const trasferimentiAeroportiItalia: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Come si va dall'aeroporto alla destinazione?"),
    answer("**Non esiste un sistema unico: ogni aeroporto italiano ha il suo mix di treni, autobus, taxi e auto con conducente, e la scelta giusta dipende da dove sei diretto.** Per il centro città il treno o il bus dell'aeroporto sono spesso la soluzione più semplice ed economica, e diverse città fissano **tariffe taxi predeterminate** dall'aeroporto. Un **transfer privato prenotato** ha più senso con molti bagagli, in gruppo, con un arrivo in tarda serata o se la meta è fuori città. Prima di partire verifica **quale aeroporto** usi, **fino a che ora** funzionano i mezzi pubblici e **dove esattamente** ti verranno a prendere."),
    p("Gli aeroporti italiani sono più diversi tra loro di quanto si pensi. Fiumicino ha la stazione ferroviaria accanto ai terminal; l'aeroporto di Venezia non è collegato alla ferrovia; Bologna ha una monorotaia, Firenze una tranvia; Bergamo, usato da molti voli \"per Milano\", è a un tragitto in autobus da qualsiasi treno. Le regole dei taxi sono locali: una tariffa fissa a Roma non dice nulla su Napoli. Questa guida spiega come funziona ciascuna opzione, come si differenziano gli aeroporti principali e che cosa controllare prima di prenotare."),

    // ——— 2 ———
    h2("Che cosa si intende per trasferimento aeroportuale"),
    p("Il trasferimento è semplicemente il tragitto dall'aeroporto all'alloggio, o alla tappa successiva. In Italia le opzioni si dividono in poche categorie, e i termini contano perché le regole cambiano."),
    ul(
      "**Taxi** — un veicolo con licenza comunale, di solito bianco, con la scritta \"TAXI\" sul tetto e il numero di licenza. In aeroporto si prende al posteggio ufficiale; la tariffa è a tassametro oppure fissa, secondo la tratta e la città.",
      "**Transfer privato (NCC)** — il *noleggio con conducente*, un'auto o un minibus con autista prenotato in anticipo a un prezzo concordato. Gli NCC non si fermano a chiamata per strada e non prendono passeggeri dal posteggio taxi.",
      "**Transfer condiviso o navetta** — un posto prenotato su un mezzo con altri passeggeri, spesso con più fermate.",
      "**Treno dell'aeroporto** — un collegamento da una stazione in aeroporto, come il Leonardo Express di Roma o il Malpensa Express.",
      "**Autobus** — pullman di linea o bus urbani verso la stazione principale, il centro o altre località.",
      "**Trasporto pubblico locale** — tram, metro o monorotaia, come la tranvia T2 di Firenze o la M4 di Milano per Linate.",
      "**Auto a noleggio** — ritirata in aeroporto o nelle vicinanze; utile per girare in campagna, molto meno per un soggiorno in città.",
    ),

    // ——— 3 ———
    h2("I modi principali per lasciare l'aeroporto"),
    p("Ogni opzione si adatta a un tipo diverso di viaggiatore. Nessuna è la migliore in assoluto."),
    table(
      ["Opzione", "Adatta a", "Prenotazione", "Come si paga", "Da considerare"],
      [
        ["Taxi ufficiale", "Tragitti diretti porta a porta, piccoli gruppi, arrivi serali", "Non serve al posteggio", "Tassametro, o tariffa fissa su alcune tratte", "Regole diverse da città a città; solo posteggio ufficiale"],
        ["Transfer privato (NCC)", "Famiglie, gruppi, molti bagagli, mete fuori città", "Obbligatoria in anticipo", "Prezzo concordato alla prenotazione", "Punto d'incontro, attesa, che cosa è incluso"],
        ["Transfer condiviso", "Chi viaggia da solo o in coppia verso zone frequentate", "In anticipo", "A persona", "Le fermate degli altri allungano i tempi"],
        ["Treno dell'aeroporto", "Alloggi vicino a una stazione, bagagli leggeri", "Biglietto prima di salire", "A persona, tariffa fissa", "Ultimo treno e distanza dell'albergo dalla stazione"],
        ["Autobus", "Budget ridotto, aeroporti senza ferrovia", "Online, alle macchinette o a bordo, secondo l'azienda", "A persona", "Traffico, spazio per i bagagli, buchi d'orario"],
        ["Auto a noleggio", "Giri in campagna, più tappe", "In anticipo", "Tariffa giornaliera più carburante, pedaggi e parcheggi", "Nei centri storici ci sono le ZTL"],
      ],
      "Un confronto, non una classifica: dipende da aeroporto, destinazione e gruppo.",
    ),

    // ——— 4 ———
    h2("I taxi ufficiali in aeroporto"),
    p("Tutti i grandi aeroporti italiani hanno un posteggio taxi fuori dagli arrivi. Le licenze sono comunali: negli aeroporti di Roma, per esempio, i taxi sono bianchi, con la scritta \"TAXI\" sul tetto e il numero di licenza sulle portiere, sul retro e all'interno. I gestori aeroportuali avvertono che altri veicoli fermi vicino alle uscite potrebbero non essere autorizzati."),
    {
      type: "image",
      src: `${IMG}/rome-taxis-rank.webp`,
      alt: "Taxi bianchi con insegna sul tetto e adesivi sulle portiere in fila in una strada del centro di Roma",
      caption: "Taxi in attesa a un posteggio nel centro di Roma. In aeroporto, usa sempre il posteggio ufficiale agli arrivi.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
      wide: true,
    },
    h3("Tariffa fissa o tassametro"),
    p("Alcune città stabiliscono una **tariffa fissa** (o *predeterminata*) per determinate tratte tra aeroporto e città. Vale per corsa, non a persona, e di norma comprende i supplementi per bagagli, notte e festivi, ma solo per un tragitto diretto, senza fermate intermedie. Negli altri casi si paga a **tassametro**, con i supplementi stabiliti dal Comune."),
    table(
      ["Aeroporto", "Tratta", "Tariffa fissa (per corsa)"],
      [
        ["Roma Fiumicino", "Centro di Roma, all'interno delle Mura Aureliane", "55 €"],
        ["Roma Fiumicino", "Stazione Ostiense / Stazione Tiburtina", "50 € / 60 €"],
        ["Roma Fiumicino", "Porto di Civitavecchia", "130 €"],
        ["Roma Ciampino", "Centro entro le Mura Aureliane, Ostiense o Tiburtina", "40 €"],
        ["Roma Fiumicino ↔ Ciampino", "Tra i due aeroporti", "55 €"],
        ["Milano Malpensa", "Qualsiasi indirizzo nel Comune di Milano", "114 €"],
        ["Milano Malpensa ↔ Linate", "Tra i due aeroporti", "128 €"],
      ],
      "Tariffe pubblicate da Aeroporti di Roma e Milan Airports, settembre 2026. Sono fissate da Comuni o Regioni e possono cambiare senza preavviso.",
    ),
    p("A Roma le tariffe fisse valgono in entrambe le direzioni e comprendono tutti i supplementi; da Fiumicino, per le altre destinazioni entro il Grande Raccordo Anulare, la corsa non può superare gli 80 €. Anche Napoli e Firenze hanno tariffe fisse dall'aeroporto verso zone definite della città, con condizioni diverse da quelle romane: a Firenze, per esempio, si aggiungono i supplementi festivo, notturno e bagagli. Da Linate, vicinissimo alla città, verso Milano si paga a tassametro."),
    h3("Prima di salire"),
    ul(
      "**Mettiti in fila al posteggio ufficiale** e ignora chi ti offre un passaggio dentro il terminal.",
      "**Controlla che sia un taxi autorizzato**: insegna sul tetto, numero di licenza, tassametro.",
      "**Indica la destinazione e chiedi la tariffa fissa**, se prevista, prima di partire.",
      "**Chiedi se si può pagare con carta**, se non hai contanti: è diffuso, ma conviene verificare.",
      "**Fatti dare la ricevuta** a fine corsa: con il numero di licenza serve per eventuali reclami.",
      "**Segnala i bagagli ingombranti**: un'auto normale può non contenere più valigie grandi.",
    ),

    // ——— 5 ———
    h2("I transfer privati"),
    p("Il transfer privato è un'auto, un van o un minibus con autista, prenotato in anticipo solo per il tuo gruppo: in termini tecnici, un servizio **NCC**. A Fiumicino, Aeroporti di Roma precisa che gli NCC vanno richiesti in anticipo, non si prendono dal posteggio taxi e sono in genere di colore blu o grigio, e raccomanda di concordare prima punto d'incontro, percorso e costo."),
    ul(
      "**Prenotazione** — comunichi numero di volo, orario, passeggeri, bagagli e destinazione, e ricevi una conferma.",
      "**Punto d'incontro** — un luogo concordato: nella sala arrivi, a un'uscita o in un'area dedicata, secondo aeroporto e azienda.",
      "**Riconoscimento dell'autista** — un cartello con il nome, un messaggio con nome e telefono del conducente, o i dati del veicolo.",
      "**Monitoraggio del volo** — molte aziende seguono gli arrivi, ma le politiche variano.",
      "**Tempo di attesa** — di solito un periodo incluso dopo l'atterraggio, oltre il quale possono esserci costi o condizioni.",
      "**Tipo di veicolo** — berlina, monovolume o minibus: da scegliere in base ai bagagli oltre che ai passeggeri.",
      "**Arrivo** — fino all'indirizzo se il veicolo può raggiungerlo; non dentro ZTL o centri pedonali senza autorizzazione.",
      "**Pagamento e cancellazione** — anticipato o all'autista, con le condizioni di cancellazione fissate dall'azienda.",
    ),
    p("I vantaggi sono la prevedibilità e la comodità: qualcuno ti aspetta, il prezzo è concordato e il mezzo è adatto al gruppo. I limiti: bisogna prenotare e descrivere con precisione le proprie esigenze, e il transfer privato non è per forza più economico o più veloce di un taxi o di un treno. A Roma un taxi a tariffa fissa verso il centro può costare meno; a Milano il treno può battere il traffico. Confronta i preventivi con le tariffe fisse e con i mezzi pubblici per la tua tratta."),

    // ——— 6 ———
    h2("Transfer condivisi e navette"),
    p("Nei transfer condivisi si prenota un singolo posto su un mezzo che raccoglie più prenotazioni e lascia i passeggeri a indirizzi diversi o in pochi punti prestabiliti. Possono convenire a chi viaggia da solo o in coppia verso zone molto frequentate, ma il viaggio dura di più per via delle altre fermate, e in aeroporto si può dover aspettare che il mezzo si riempia o che atterrino altri voli. Prenota in anticipo, indica il volo e controlla il punto di arrivo: alcune navette si fermano in una piazza centrale, non davanti all'alloggio."),
    p("In alcune città esistono anche taxi collettivi regolamentati. All'aeroporto di Napoli, per esempio, il *taxi collettivo* va alla stazione centrale e al porto (Molo Beverello) a **6 € a persona** fissi, bagagli compresi, e parte quando è salito un numero sufficiente di passeggeri."),

    // ——— 7 ———
    h2("I treni dagli aeroporti"),
    p("Il treno è spesso il modo più semplice per arrivare in città se l'alloggio è vicino alla stazione d'arrivo e i bagagli si gestiscono bene su scale e banchine. Compra il biglietto alle macchinette ufficiali, in biglietteria o sull'app dell'azienda, e convalida i biglietti regionali cartacei se richiesto."),
    ul(
      "**Roma Fiumicino** — il **Leonardo Express** di Trenitalia va senza fermate a Roma Termini in 32 minuti, ogni 15 minuti; i regionali **FL1** servono altre stazioni come Trastevere, Ostiense e Tiburtina.",
      "**Milano Malpensa** — il **Malpensa Express** arriva a Milano Cadorna, Porta Garibaldi e Centrale.",
      "**Bologna** — la monorotaia **Marconi Express** raggiunge Bologna Centrale in circa sette minuti, secondo il gestore.",
      "**Pisa** — il **Pisa Mover** arriva a Pisa Centrale in circa cinque minuti, da dove partono i treni per Firenze e il resto della Toscana.",
      "**Palermo, Bari e Torino** — treni dalle stazioni aeroportuali per Palermo Centrale, Bari Centrale e Torino Porta Susa.",
      "**Catania** — il **Fontanarossa Airlink** di Trenitalia unisce un breve tratto in bus fino alla stazione di Catania Aeroporto Fontanarossa e i regionali per Catania, Taormina, Messina e Siracusa.",
    ),
    {
      type: "image",
      src: `${IMG}/roma-termini-frecciarossa.webp`,
      alt: "Un Frecciarossa rosso fermo sotto la pensilina di un binario della stazione di Roma Termini",
      caption: "Roma Termini, capolinea del Leonardo Express da Fiumicino e snodo per i treni successivi.",
      credit: unsplash("Nico Ruge", "nico_ruge"),
    },
    p("Gli orari cambiano e a volte le linee sono sostituite da bus per lavori. Controlla il sito dell'azienda per la tua data; per biglietti e treni vedi la guida su [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 8 ———
    h2("Gli autobus dagli aeroporti"),
    p("Tutti i grandi aeroporti sono serviti da autobus. Alcuni sono bus urbani con il biglietto ordinario, altri linee private con tariffe proprie, spesso dirette alla stazione ferroviaria principale."),
    ul(
      "**Destinazioni** — di solito la stazione principale, a volte il centro, il porto o altre città e località turistiche.",
      "**Biglietti** — online, alle macchinette o ai punti vendita agli arrivi, oppure a bordo, secondo l'azienda. Alcuni bus urbani accettano la carta contactless.",
      "**Bagagli** — sui pullman di solito vanno nella stiva; sui bus urbani lo spazio è poco.",
      "**Tempi** — dipendono dal traffico, e la sera tardi le corse si diradano.",
      "**Linee stagionali** — alcuni aeroporti aggiungono d'estate bus per le località di mare e d'inverno per le zone sciistiche.",
    ),
    {
      type: "image",
      src: `${IMG}/rome-city-buses.webp`,
      alt: "Autobus urbani e auto su una strada ampia vicino al Teatro di Marcello a Roma, in una giornata nuvolosa",
      caption: "Autobus urbani vicino al Teatro di Marcello, a Roma. I pullman dagli aeroporti arrivano soprattutto alle stazioni.",
      credit: unsplash("Levi Ari Pronk", "leviaripronk"),
    },

    // ——— 9 ———
    h2("Gli aeroporti principali a confronto"),
    p("Le opzioni cambiano molto da un aeroporto all'altro. La tabella riguarda quelli usati più spesso."),
    table(
      ["Aeroporto", "Città o zona servita", "Collegamenti principali", "Da sapere"],
      [
        ["Roma Fiumicino (FCO)", "Roma, Civitavecchia", "Leonardo Express, treni FL1, bus, taxi a tariffa fissa, NCC", "Taxi ai Terminal 1 e 3; tariffa fissa per il centro"],
        ["Roma Ciampino (CIA)", "Roma", "Bus, bus più treno dalla stazione di Ciampino, taxi a tariffa fissa", "Niente stazione ferroviaria in aeroporto"],
        ["Milano Malpensa (MXP)", "Milano, Lago di Como, Lago Maggiore", "Malpensa Express, bus, taxi a tariffa fissa, NCC", "Lontano dalla città: il nome non dice quanto dura il viaggio"],
        ["Milano Linate (LIN)", "Milano", "Metro M4, taxi", "Vicino al centro"],
        ["Milano Bergamo (BGY)", "Bergamo, Milano", "Bus per la stazione di Bergamo, pullman per Milano Centrale, taxi", "Nessuna stazione ferroviaria in aeroporto"],
        ["Venezia Marco Polo (VCE)", "Venezia, Mestre, Dolomiti", "Bus, Alilaguna, taxi acquei, taxi su strada", "Su gomma si arriva solo a Piazzale Roma"],
        ["Bologna (BLQ)", "Bologna", "Marconi Express, bus notturno, taxi", "Verifica le sospensioni per manutenzione"],
        ["Firenze (FLR)", "Firenze", "Tranvia T2, taxi", "Soprattutto voli europei; per il lungo raggio si usano Roma, Milano o Pisa"],
        ["Pisa (PSA)", "Pisa, Lucca, Firenze", "Pisa Mover e treno, taxi", "Per Firenze si cambia a Pisa Centrale"],
        ["Napoli (NAP)", "Napoli, Sorrento, Costiera Amalfitana", "Alibus, taxi a tariffa fissa e collettivi, bus per Sorrento, NCC", "Chiuso ai voli dalle 22:30 alle 3:30, salvo casi eccezionali"],
        ["Palermo (PMO)", "Palermo, Sicilia occidentale", "Treno Trinacria Express, bus, taxi", "Il treno ferma in diverse stazioni cittadine"],
        ["Catania (CTA)", "Catania, Taormina, Sicilia orientale", "Treno più bus, bus urbani, taxi", "La stazione è a un breve tratto in bus dal terminal"],
      ],
      "Servizi e regole cambiano: controlla il sito dell'aeroporto prima di partire.",
    ),

    // ——— 10 ———
    h2("Roma: Fiumicino e Ciampino"),
    h3("Fiumicino"),
    p("Il principale aeroporto di Roma è sulla costa, a ovest della città. La stazione ferroviaria è all'interno dell'area aeroportuale, a pochi passi dai terminal. Il **Leonardo Express** va senza fermate a Termini: secondo Aeroporti di Roma, il primo treno parte dall'aeroporto alle 5:38 e l'ultimo alle 23:27. I regionali **FL1** convengono se alloggi vicino a Trastevere, Ostiense o Tiburtina. Gli **autobus** vanno a Termini e in altri punti della città. I **taxi** ufficiali sono agli arrivi dei Terminal 1 e 3, con la tariffa fissa di 55 € per qualsiasi destinazione dentro le Mura Aureliane. Gli **NCC** aspettano nell'area davanti all'uscita, su prenotazione. L'**auto a noleggio** conviene solo se lasci subito Roma: guidare e parcheggiare in centro è complicato."),
    h3("Ciampino"),
    p("Ciampino, usato soprattutto dalle compagnie low cost, è a sud-est della città e non ha una stazione ferroviaria. Gli **autobus** partono dagli stalli di fronte alle partenze internazionali per Roma Termini e Anagnina (metro A); i biglietti si comprano online, agli arrivi o a bordo. Il **Ciampino Airlink** unisce una navetta fino alla stazione di Ciampino e il treno per Termini. I **taxi** hanno una tariffa fissa di 40 € per il centro. Per muoverti in città, vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),

    // ——— 11 ———
    h2("Milano: Malpensa, Linate e Bergamo"),
    p("\"Milano\" può voler dire tre aeroporti in posti molto diversi: il nome da solo non dice quanto durerà il viaggio fino all'alloggio."),
    ul(
      "**Malpensa** — a nord-ovest di Milano, parecchio fuori città. Il **Malpensa Express** va a Cadorna, Porta Garibaldi e Centrale; i bus arrivano a Centrale; i taxi hanno una tariffa fissa di **114 €** per qualsiasi indirizzo a Milano. Per il Lago di Como o il Lago Maggiore, Malpensa è spesso l'aeroporto più pratico.",
      "**Linate** — a est del centro, molto vicino. La **metropolitana M4** porta a San Babila in circa 12 minuti, secondo l'aeroporto. I taxi vanno a tassametro.",
      "**Bergamo (Orio al Serio)** — usato da molti voli low cost, è il più lontano da Milano. In aeroporto non c'è il treno: un bus ATB va alla stazione di Bergamo in circa 10 minuti e prosegue verso Città Alta, mentre diverse aziende di pullman collegano Milano Centrale. È in programma un collegamento ferroviario.",
    ),
    {
      type: "image",
      src: `${IMG}/milano-centrale-travellers.webp`,
      alt: "Viaggiatori con valigie e una bicicletta accanto a un treno regionale bianco e verde su un binario di Milano Centrale",
      caption: "Milano Centrale, snodo per i treni successivi da tutti e tre gli aeroporti milanesi.",
      credit: unsplash("Anastasiia Nelen", "mnelen"),
    },
    p("La nostra guida a [Milano](/it/citta/milano-oltre-il-duomo) spiega quali zone sono più comode per ciascun aeroporto."),

    // ——— 12 ———
    h2("Venezia: dal Marco Polo alla città"),
    p("L'aeroporto Marco Polo è in terraferma, a Tessera, e non è collegato alla ferrovia. Come muoversi dipende da dove dormi: nel centro storico, dove non ci sono strade, oppure in un luogo raggiungibile in auto."),
    ul(
      "**Bus per Piazzale Roma** — la linea ACTV **5-AeroBus** impiega circa 20 minuti, secondo Venezia Unica, e ATVO ha bus espressi. Da Piazzale Roma si prosegue a piedi o in vaporetto.",
      "**Bus per Mestre** — le linee ACTV 15 e 45 servono il centro di Mestre e la stazione.",
      "**Alilaguna** — più lenta, ma porta in barca direttamente alle fermate del centro storico, di Murano e del Lido.",
      "**Taxi acqueo** — una barca privata: la soluzione più diretta e più cara, utile per un gruppo con bagagli diretto a un albergo sul canale.",
      "**Taxi su strada o NCC** — fino a Piazzale Roma, Mestre o la terraferma; oltre, in centro storico, l'auto non arriva.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-water-taxi.webp`,
      alt: "Un taxi acqueo in legno lucido con la bandierina dei taxi che corre sull'acqua a Venezia",
      caption: "Un taxi acqueo a Venezia: diretto, ma con il prezzo di una barca privata.",
      credit: unsplash("Piero Nigro", "pieronigro"),
    },
    p("I biglietti per i bus ACTV e per l'Alilaguna si comprano alle macchinette nell'area ritiro bagagli, all'ufficio Venezia Unica agli arrivi e online. A Venezia i ponti hanno gradini e le valigie pesanti diventano faticose: controlla quanto dista la fermata dall'albergo. La nostra guida a [Venezia](/it/citta/venezia-per-la-prima-volta) spiega l'arrivo in città nel dettaglio."),
    {
      type: "image",
      src: `${IMG}/venice-piazzale-roma.webp`,
      alt: "Sera a Piazzale Roma, a Venezia, con i lampioni accesi e la cupola verde di San Simeone Piccolo sullo sfondo",
      caption: "Piazzale Roma: qui finisce il viaggio su gomma dall'aeroporto e Venezia prosegue a piedi o in barca.",
      credit: unsplash("Vladislav Glukhotko", "azzurobudgie"),
    },

    // ——— 13 ———
    h2("Firenze, Pisa e Bologna"),
    p("Toscana ed Emilia-Romagna hanno tre aeroporti vicini, e molti viaggiatori diretti a Firenze atterrano in realtà a Pisa o a Bologna."),
    ul(
      "**Firenze (Amerigo Vespucci)** — a circa quattro chilometri a nord-ovest del centro. La **tranvia T2** ferma accanto al terminal e attraversa la zona della stazione di Santa Maria Novella fino a Piazza San Marco; il biglietto va comprato prima di salire. I **taxi** hanno una tariffa fissa per l'area centrale, con supplementi. I banchi del noleggio auto sono in un'area separata.",
      "**Pisa (Galileo Galilei)** — il **Pisa Mover** va a Pisa Centrale dalle 6 a mezzanotte (fino all'una dal 1° giugno al 30 settembre), secondo il gestore. Da Pisa Centrale i regionali servono Firenze, Lucca e la costa.",
      "**Bologna (Guglielmo Marconi)** — la monorotaia **Marconi Express** va a Bologna Centrale dal primo mattino fino a mezzanotte; di notte la sostituisce la linea Q di TPER. Talvolta la monorotaia si ferma per manutenzione, con bus sostitutivi, come annunciato per l'inizio di ottobre 2026: controlla prima di partire.",
    ),
    {
      type: "image",
      src: `${IMG}/florence-tram.webp`,
      alt: "Il muso di un tram argento e rosso di Firenze con la scritta T2 Peretola Aeroporto sul display",
      caption: "La tranvia T2 di Firenze, che collega l'aeroporto con la zona della stazione e il centro.",
      credit: unsplash("Mihaela Claudia Puscas", "mihaela_claudia_p"),
    },
    p("Vedi le nostre guide a [Firenze](/it/citta/firenze-per-la-prima-volta) e [Bologna](/it/citta/bologna-in-due-giorni) per scegliere dove dormire vicino ai collegamenti."),

    // ——— 14 ———
    h2("Napoli: dall'aeroporto alla città e oltre"),
    p("L'aeroporto internazionale di Napoli (Capodichino) è vicino alla città. L'**Alibus** di ANM lo collega con Piazza Garibaldi/Napoli Centrale e con il porto al Molo Beverello. I **taxi** partono dalla corsia davanti agli arrivi, con tariffe fisse su tratte prestabilite — centro città, Molo Beverello, Mergellina, Pompei, Caserta e altre — che comprendono i supplementi, esclusi il pedaggio autostradale e la chiamata radiotaxi. C'è poi il taxi collettivo descritto sopra."),
    p("Il transfer privato diventa particolarmente interessante per la **Costiera Amalfitana** e per gli alberghi fuori città, dove i mezzi pubblici richiedono cambi e le strade sono strette e ripide. Il bus Curreri collega l'aeroporto con la stazione di Sorrento con orari pubblicati e posti prenotabili. Da ricordare: per motivi di sicurezza, l'aeroporto di Napoli è chiuso ai voli dalle 22:30 alle 3:30, salvo ritardi eccezionali. Per la città, vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),

    // ——— 15 ———
    h2("Quando la meta non è la città dell'aeroporto"),
    p("Molti viaggi non finiscono nella città dell'aeroporto: si atterra a Roma per imbarcarsi a Civitavecchia, o a Napoli per andare dritti in Costiera. Conviene confrontare:"),
    ul(
      "**Transfer privato diretto** — porta a porta, senza cambi; il più caro per corsa, ma per un gruppo può convenire.",
      "**Treno dall'aeroporto più treno successivo** — spesso efficiente tra città, ma con cambi e bagagli.",
      "**Bus dall'aeroporto più bus successivo** — di solito il più economico, ma più lento e con meno corse.",
      "**Taxi dall'aeroporto** — utile per brevi tratti o dove esiste una tariffa fissa, come da Fiumicino al porto di Civitavecchia (130 €).",
      "**Auto a noleggio** — la scelta migliore per zone rurali, più tappe e programmi flessibili.",
    ),
    table(
      ["Esempio", "Opzioni principali", "Da valutare"],
      [
        ["Fiumicino → porto di Civitavecchia", "Taxi a tariffa fissa, transfer privato, o treno con cambio a Roma", "Bagagli e orario d'imbarco; tieni un buon margine"],
        ["Aeroporto di Napoli → Costiera Amalfitana", "Transfer privato, o bus per Sorrento e poi bus o traghetto", "Strade costiere strette e lente; cambi con i bagagli"],
        ["Malpensa → Lago di Como", "Malpensa Express e regionale, o transfer privato", "Su quale sponda del lago alloggi"],
        ["Aeroporto di Venezia → Dolomiti", "Pullman diretti per Cortina e altre località, transfer privato o auto a noleggio", "Stagione e località di base"],
        ["Firenze o Pisa → campagna toscana", "Auto a noleggio, o treno fino a un paese e taxi locale", "Borghi e agriturismi richiedono di solito l'auto"],
      ],
    ),
    p("Per i treni tra città c'è la nostra guida su [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane); per le singole zone, [il Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend) e [le Dolomiti per la prima volta](/it/guide/dolomiti-prima-volta); se noleggi un'auto, leggi [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 16 ———
    h2("Come scegliere la soluzione giusta"),
    p("Oltre al prezzo, pensa al gruppo, ai bagagli e all'orario di arrivo."),
    table(
      ["Situazione", "Spesso funziona", "Attenzione a"],
      [
        ["Da solo", "Treno o bus dell'aeroporto", "Arrivi serali, quando i mezzi si diradano"],
        ["In coppia", "Treno o bus; taxi dove c'è la tariffa fissa", "Due valigie grandi su bus affollati"],
        ["Famiglia", "Taxi a tariffa fissa o transfer privato", "Seggiolini e spazio per i bagagli"],
        ["Gruppo numeroso", "Minivan o minibus privato", "Prenotare il veicolo della misura giusta"],
        ["Molti bagagli", "Taxi o transfer privato", "Scale in stazione e a Venezia"],
        ["Arrivo a tarda sera", "Taxi o transfer prenotato", "Ultimi treni e bus; ritardi del volo"],
        ["Partenza all'alba", "Taxi o transfer prenotato; primo treno se è abbastanza presto", "Le prime corse possono essere troppo tardi per il check-in"],
        ["Meta isolata", "Transfer privato o auto a noleggio", "Pochi bus, soprattutto la domenica"],
        ["Più alberghi da raggiungere", "Transfer privato con tutte le fermate", "Le tariffe fisse dei taxi valgono di solito solo per corse dirette"],
        ["Crocieristi", "Transfer privato o taxi a tariffa fissa", "Orari d'imbarco e bagagli"],
        ["Mobilità ridotta", "Veicolo accessibile prenotato in anticipo", "Taxi e auto normali non sono accessibili in carrozzina"],
      ],
    ),

    // ——— 17 ———
    h2("Prenotare un transfer privato: che cosa controllare"),
    p("La maggior parte dei problemi nasce da dettagli mancanti. Prima di confermare, verifica che la prenotazione copra tutti questi punti."),
    table(
      ["Da controllare", "Perché"],
      [
        ["Luogo di ritiro esatto e terminal", "I grandi aeroporti hanno più terminal e uscite"],
        ["Numero di volo e orario di arrivo", "Permette di seguire eventuali ritardi"],
        ["Numero di passeggeri, bambini compresi", "Determina veicolo e posti"],
        ["Numero e dimensioni dei bagagli", "Una berlina per quattro persone può non contenere quattro valigie grandi"],
        ["Seggiolini", "Vanno richiesti; non tutti i veicoli li hanno"],
        ["Punto d'incontro e riconoscimento dell'autista", "Evita confusione in una sala arrivi affollata"],
        ["Tempo di attesa e gestione dei ritardi", "Quanto aspettano e se l'attesa in più si paga"],
        ["Condizioni di cancellazione", "Che cosa succede se il volo viene cancellato o cambi programma"],
        ["Modalità di pagamento e che cosa è incluso", "Se pedaggi, parcheggi, notturno o bagagli sono a parte"],
        ["Ricevuta o fattura", "Serve per rimborsi spese o reclami"],
        ["Numero di contatto e procedura d'emergenza", "Chi chiamare se non trovi l'autista"],
      ],
    ),

    // ——— 18 ———
    h2("Come funziona il ritiro in aeroporto"),
    p("La procedura esatta cambia da aeroporto ad aeroporto e da azienda ad azienda — non tutti gli autisti possono aspettare dentro il terminal o al nastro bagagli — ma la sequenza è di solito simile."),
    steps(
      ["Atterra ed esci dagli arrivi", "Passa il controllo passaporti se arrivi da fuori Schengen, e riaccendi il telefono."],
      ["Ritira i bagagli", "Controlla i messaggi: le aziende di transfer spesso inviano ora i dati dell'autista."],
      ["Segui le indicazioni", "Per il posteggio taxi, la stazione, le fermate dei bus o il punto d'incontro concordato."],
      ["Trova il posteggio o l'autista", "Mettiti in fila al posteggio ufficiale, o cerca l'autista nel punto stabilito."],
      ["Verifica chi è", "Controlla nome, azienda, numero di licenza o dati del veicolo prima di consegnare i bagagli."],
      ["Carica i bagagli", "Tieni con te oggetti di valore e documenti."],
      ["Conferma la destinazione", "Mostra l'indirizzo completo e conferma la tariffa fissa, se prevista."],
      ["Arriva e paga", "Paga come concordato e chiedi la ricevuta."],
    ),
    {
      type: "image",
      src: `${IMG}/baggage-reclaim-belt.webp`,
      alt: "Valigie su un nastro per la riconsegna dei bagagli nella sala arrivi di un aeroporto",
      caption: "Al ritiro bagagli: il momento giusto per controllare i messaggi dell'azienda di transfer.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 19 ———
    h2("E se il volo è in ritardo?"),
    p("Quando prenoti, indica il numero di volo corretto. Molte aziende di transfer lo usano per seguire l'arrivo e spostare il ritiro; se dai solo un orario, l'autista potrebbe andarsene prima che tu atterri. Le politiche di attesa variano: alcune includono un tempo fisso dopo l'atterraggio, altre fanno pagare l'attesa in più, e nessuna va data per scontata all'infinito. In caso di ritardo, scrivi o chiama l'azienda appena puoi e tieni il numero a portata di mano. Con treni e bus, controlla l'ultima corsa: un ritardo può fartela perdere."),

    // ——— 20 ———
    h2("Arrivi a tarda sera e partenze all'alba"),
    p("I mezzi pubblici non viaggiano tutta la notte. A Fiumicino l'ultimo Leonardo Express parte poco prima delle 23:30; a Bologna dopo mezzanotte la monorotaia è sostituita da un bus notturno; l'aeroporto di Napoli di notte è chiuso ai voli. Prima di un volo molto tardi o molto presto, verifica:"),
    ul(
      "L'**ultimo treno** o bus dall'aeroporto, e il **primo** nel giorno della partenza.",
      "Se a quell'ora ci sono di solito taxi disponibili, e la tariffa notturna o fissa.",
      "Che il transfer privato abbia il numero di volo e un modo per contattarti.",
      "L'orario del check-in dell'alloggio: alcuni piccoli alberghi chiudono la reception di notte.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-airport-landing.webp`,
      alt: "Un aereo passeggeri in atterraggio sulla pista dell'aeroporto Marco Polo di Venezia, con il carrello abbassato",
      caption: "Atterraggio al Marco Polo di Venezia. Con un arrivo tardo, le opzioni pubbliche si riducono.",
      credit: unsplash("Edoardo Bortoli", "edo_bor"),
    },

    // ——— 21 ———
    h2("Bagagli e dimensioni del veicolo"),
    p("Il numero di passeggeri non basta a scegliere il veicolo. Comunica esattamente che cosa porti: valigie da stiva, bagagli a mano, passeggini, attrezzatura sportiva come bici, sci o sacche da golf, carrozzine o altri ausili. Una berlina porta comodamente tre passeggeri con i bagagli, ma non quattro persone con quattro valigie grandi. Un oggetto ingombrante non dichiarato può significare un mezzo che non basta o un costo in più. Su treni e bus i bagagli li gestisci tu, a volte su gradini."),

    // ——— 22 ———
    h2("In famiglia"),
    ul(
      "**Seggiolini** — chiedili alla prenotazione, con età e peso di ogni bambino. Non tutti i taxi e i veicoli NCC li hanno.",
      "**Le regole** — sulle auto private il seggiolino è obbligatorio. L'articolo 172 del Codice della Strada consente ai bambini fino a 1,50 m di viaggiare su taxi e NCC senza sistema di ritenuta, purché non occupino un sedile anteriore e siano accompagnati da almeno un passeggero di 16 anni o più. Il seggiolino resta comunque più sicuro: chiedilo.",
      "**Passeggini e bagagli** — segnalali, perché occupano spazio.",
      "**Arrivi serali** — un veicolo prenotato evita la fila al posteggio con i bambini stanchi.",
      "**Accesso all'alloggio** — verifica se l'auto arriva alla porta: centri storici e Venezia comportano spesso un tratto a piedi.",
    ),

    // ——— 23 ———
    h2("Accessibilità"),
    p("L'accessibilità dell'aeroporto e quella del veicolo sono due cose diverse. Secondo le regole UE, i passeggeri con mobilità ridotta hanno diritto ad assistenza gratuita in aeroporto; la Commissione europea consiglia di richiederla alla compagnia aerea o al tour operator almeno 48 ore prima del viaggio. Quell'assistenza però finisce in aeroporto: il veicolo per il tragitto successivo va organizzato a parte."),
    p("Taxi e auto private normali non sono accessibili in carrozzina. Prenota in anticipo un veicolo attrezzato e descrivi le tue esigenze, compreso se la carrozzina si piega e se puoi spostarti su un sedile. A Milano, per esempio, il gestore aeroportuale indica che i taxi accessibili si prenotano tramite i radiotaxi. Per i treni, chiedi all'azienda l'assistenza in stazione."),

    // ——— 24 ———
    h2("Gli errori più comuni"),
    table(
      ["Errore", "Come evitarlo"],
      [
        ["Accettare un passaggio da un autista abusivo", "Usa il posteggio ufficiale o l'autista prenotato"],
        ["Pensare che tutti gli aeroporti abbiano le stesse regole sui taxi", "Verifica regole e tariffe fisse del tuo aeroporto"],
        ["Confondere gli aeroporti di Milano", "Malpensa, Linate e Bergamo sono lontani tra loro: controlla il biglietto"],
        ["Confondere gli aeroporti di Roma", "Fiumicino e Ciampino hanno collegamenti diversi"],
        ["Prenotare il transfer per l'aeroporto sbagliato", "Confronta il codice aeroporto su prenotazione e biglietto"],
        ["Dimenticare i bagagli nella prenotazione", "Dichiara ogni valigia e gli oggetti ingombranti"],
        ["Non controllare il punto d'incontro", "Salva offline le istruzioni per il ritiro"],
        ["Credere che i mezzi pubblici vadano tutta la notte", "Controlla ultime e prime corse"],
        ["Ignorare le condizioni di cancellazione", "Leggile prima di pagare"],
        ["Non indicare il numero di volo", "Inseriscilo, così i ritardi si possono seguire"],
        ["Fidarsi di un prezzo vecchio trovato online", "Controlla la tariffa ufficiale o chiedi un preventivo aggiornato"],
      ],
    ),

    // ——— 25 ———
    h2("Sicurezza e raggiri"),
    p("La grande maggioranza dei trasferimenti fila liscia. Poche abitudini evitano i problemi più comuni."),
    ul(
      "**Usa i posteggi taxi ufficiali.** I gestori aeroportuali avvertono che i veicoli fermi fuori dai posteggi potrebbero non essere autorizzati.",
      "**Non seguire chi offre passaggi** dentro il terminal, anche se sembra ufficiale.",
      "**Verifica l'identità dell'autista prenotato** con la conferma: nome, azienda e veicolo.",
      "**Tieni la conferma di prenotazione** e il numero dell'azienda sul telefono, anche offline.",
      "**Concorda il prezzo prima**: tariffa fissa, tassametro o prezzo della prenotazione.",
      "**Usa il sito dell'aeroporto** per le informazioni sui trasporti e i link ufficiali.",
    ),

    // ——— 26 ———
    h2("Checklist prima di partire"),
    p("Spunta le voci man mano: i progressi restano salvati su questo dispositivo."),
    checklist(
      "trasferimento-aeroporto-prima-di-partire",
      ["Aeroporto e prenotazione", ["Aeroporto verificato (e non un altro della stessa città)", "Terminal verificato", "Indirizzo di destinazione copiato", "Numero di volo comunicato all'azienda di transfer"]],
      ["Passeggeri e bagagli", ["Numero di passeggeri confermato", "Bagagli e oggetti ingombranti dichiarati", "Misura del veicolo e seggiolini confermati", "Esigenze di accessibilità confermate"]],
      ["Il giorno del viaggio", ["Istruzioni per il ritiro salvate offline", "Modalità di pagamento chiara", "Condizioni di cancellazione lette", "Numero d'emergenza dell'azienda salvato", "Treni, bus e taxi ufficiali verificati come alternativa"]],
    ),
    tip("Salva uno screenshot della conferma del transfer e l'indirizzo dell'alloggio, nel caso agli arrivi non ci sia campo.", "Copia offline"),
    p("Tariffe e regole di questa guida sono state verificate su fonti ufficiali a settembre 2026 e possono cambiare. Per il resto dell'organizzazione, vedi la [checklist per un viaggio in Italia](/it/guide/checklist-viaggio-italia), [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia) e la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Qual è il modo più semplice per andare dall'aeroporto al centro?", answer: "Dipende dall'aeroporto. Dove c'è un treno, un tram o una monorotaia diretti — Fiumicino, Malpensa, Bologna, Firenze, Pisa — di solito è la scelta più semplice. Negli aeroporti senza ferrovia, come Venezia o Ciampino, le opzioni principali sono bus e taxi." },
    { question: "I taxi dagli aeroporti italiani hanno una tariffa fissa?", answer: "Su alcune tratte. Roma ha tariffe fisse da entrambi gli aeroporti per il centro, Milano da Malpensa per la città, Napoli e Firenze per zone definite. Altrove si paga a tassametro. Controlla la pagina taxi ufficiale del tuo aeroporto." },
    { question: "Conviene prenotare il transfer dall'aeroporto?", answer: "Sì per arrivi serali, famiglie, gruppi, molti bagagli e mete fuori città. Per chi viaggia da solo verso un albergo centrale spesso bastano treno, bus o taxi dal posteggio." },
    { question: "Che differenza c'è tra taxi e transfer privato?", answer: "Il taxi si prende al posteggio ufficiale o si chiama al telefono, con tassametro o tariffa fissa. Il transfer privato (NCC) va prenotato in anticipo a un prezzo concordato e non può caricare passeggeri al posteggio taxi." },
    { question: "Ci sono trasferimenti dall'aeroporto a tarda notte?", answer: "Taxi e transfer prenotati di solito sì; treni e bus spesso si fermano intorno a mezzanotte o prima. Verifica l'ultima corsa per il tuo aeroporto e la tua data." },
    { question: "I transfer privati seguono i ritardi del volo?", answer: "Molti sì, se comunichi il numero di volo, ma le politiche variano. Verifica quanto aspettano e se l'attesa in più si paga." },
    { question: "Quanti bagagli si possono portare?", answer: "Dipende dal veicolo. Comunica numero e dimensioni delle valigie e gli oggetti ingombranti, così arriva un mezzo adatto." },
    { question: "Si può chiedere un seggiolino?", answer: "Sì, alla prenotazione, indicando età e peso del bambino. Non tutti i veicoli ne dispongono. La legge esonera taxi e NCC dall'obbligo del seggiolino a certe condizioni, ma il seggiolino è più sicuro." },
    { question: "Si può andare dall'aeroporto direttamente in un'altra città?", answer: "Sì: in treno dagli aeroporti collegati alla ferrovia, in pullman o con un transfer privato. Confronta tempi e costi con l'ipotesi di atterrare in un aeroporto più vicino." },
    { question: "Quale aeroporto di Milano conviene?", answer: "Linate è il più vicino alla città; Malpensa ha la maggior parte dei voli intercontinentali ed è comodo per i laghi; Bergamo ha molti voli low cost ed è il più lontano da Milano. Controlla il biglietto e organizza il trasferimento per quell'aeroporto." },
    { question: "Come si va da Fiumicino a Roma?", answer: "Il Leonardo Express va senza fermate a Termini in 32 minuti; i treni FL1 servono altre stazioni romane; i bus arrivano a Termini; i taxi hanno una tariffa fissa di 55 € per il centro entro le Mura Aureliane." },
    { question: "Come si va dall'aeroporto di Napoli alla Costiera Amalfitana?", answer: "Con un transfer privato, oppure in bus fino a Sorrento e poi con un bus locale o un traghetto. Non c'è un treno diretto. Le strade costiere sono lente: calcola tempo in più." },
    { question: "Si può prenotare un transfer per il porto delle crociere?", answer: "Sì. I transfer privati servono comunemente Civitavecchia, Napoli e altri porti, e i taxi di Roma hanno una tariffa fissa da Fiumicino al porto di Civitavecchia. Tieni un margine per l'imbarco." },
    { question: "Che cosa controllare prima di confermare un transfer?", answer: "Aeroporto e terminal, numero di volo, passeggeri, bagagli, misura del veicolo, seggiolini, punto d'incontro, attesa e cancellazione, che cosa include il prezzo e un numero d'emergenza." },
  ],

  sourcesTitle: "Fonti ufficiali",
  sources: [
    { label: "Aeroporti di Roma — taxi a Fiumicino", url: "https://www.adr.it/pax-fco-taxi", note: "taxi ufficiali e tariffe fisse" },
    { label: "Aeroporti di Roma — treni da Fiumicino", url: "https://www.adr.it/pax-fco-treno", note: "Leonardo Express e FL1" },
    { label: "Aeroporti di Roma — NCC a Fiumicino", url: "https://www.adr.it/pax-fco-noleggio-con-conducente", note: "noleggio con conducente" },
    { label: "Aeroporti di Roma — taxi a Ciampino", url: "https://www.adr.it/pax-cia-taxi", note: "tariffe fisse" },
    { label: "Aeroporti di Roma — autobus da Ciampino", url: "https://www.adr.it/pax-cia-autobus", note: "aziende e stalli" },
    { label: "Milano Malpensa — in taxi", url: "https://www.milanomalpensa-airport.com/it/da-per/in-taxi", note: "tariffe fisse e taxi accessibili" },
    { label: "Milano Linate — in taxi", url: "https://www.milanolinate-airport.com/it/da-per/in-taxi", note: "informazioni taxi" },
    { label: "Malpensa Express", url: "https://www.malpensaexpress.it/", note: "treni per Malpensa" },
    { label: "Milan Bergamo Airport — autobus (in inglese)", url: "https://www.milanbergamoairport.it/en/bus/", note: "bus per Bergamo e Milano" },
    { label: "Venezia Unica — aeroporto Marco Polo", url: "https://www.veneziaunica.it/it/plan-your-trip/getting-to-venice/marco-polo-airport", note: "bus ACTV e biglietti" },
    { label: "Alilaguna", url: "https://www.alilaguna.it/", note: "collegamento acqueo dall'aeroporto" },
    { label: "Pisa Mover", url: "https://pisa-mover.com/servizio-shuttle/", note: "navetta per l'aeroporto di Pisa" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/", note: "monorotaia dell'aeroporto di Bologna" },
    { label: "Aeroporto di Napoli — in taxi", url: "https://www.aeroportodinapoli.it/in-taxi", note: "tariffe fisse, taxi collettivo, chiusura notturna" },
    { label: "Trenitalia — Fontanarossa Airlink", url: "https://www.trenitalia.com/it/regionale/collegamenti-regionale/fontanarossa-airlink.html", note: "treno e bus per l'aeroporto di Catania" },
    { label: "Ferrotramviaria — aeroporto di Bari", url: "https://www.ferrotramviaria.it/web/guest/da-aeroporto", note: "treno per l'aeroporto di Bari" },
    { label: "La tua Europa — passeggeri a mobilità ridotta", url: "https://europa.eu/youreurope/citizens/travel/transport-disability/reduced-mobility/index_it.htm", note: "diritti di assistenza" },
  ],
};
