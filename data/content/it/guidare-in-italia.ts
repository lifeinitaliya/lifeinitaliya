import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Driving in Italy". Norme, limiti, orari delle ZTL e
// procedure di pedaggio cambiano: i dati sono stati verificati a settembre
// 2026 sul Codice della Strada (testo pubblicato da ACI), sui siti di Comuni,
// Autostrade per l'Italia e ANAS. Vanno ricontrollati a ogni aggiornamento.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/driving-in-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const guidareInItalia: ArticleContent = {
  body: [
    // ——— Introduzione ———
    p("Con l'auto, un viaggio in Italia può cambiare natura. I borghi della Toscana, le masserie pugliesi, i passi delle Dolomiti e l'interno della Sardegna sono molto più facili da raggiungere su strada. Guidare porta però con sé anche qualche insidia: le zone a traffico limitato nei centri storici, i pedaggi autostradali, regole di sosta che cambiano da un Comune all'altro e condizioni di noleggio che si leggono troppo in fretta."),
    p("Questa guida raccoglie ciò che serve sapere prima di noleggiare un'auto o di mettersi al volante in Italia: documenti, noleggio, regole della strada, limiti di velocità, ZTL, pedaggi, parcheggi, carburante, cosa fare in caso di incidente e quando, semplicemente, il treno è la scelta migliore. È scritta sia per chi arriva dall'estero sia per chi, pur vivendo in Italia, noleggia un'auto per un viaggio in una zona che non conosce."),

    // ——— 1 ———
    h2("In breve: si può guidare in Italia?"),
    answer("**Sì, nella maggior parte dei casi, ma i documenti necessari dipendono da chi ha rilasciato la patente.** Le patenti italiane e quelle rilasciate in un Paese dell'UE o del SEE sono valide in Italia. Se la patente è stata rilasciata fuori dall'UE/SEE, il Codice della Strada prevede di norma che sia accompagnata da un **permesso internazionale di guida** o da una traduzione ufficiale — ma accordi internazionali possono cambiare la regola per singoli Paesi, e le società di noleggio fissano anche requisiti propri. Prima di partire, verifica il requisito per la tua patente con l'autorità che l'ha rilasciata, con l'ambasciata o il consolato italiano e con la società di noleggio."),
    important("Questa guida offre informazioni generali di viaggio e non costituisce consulenza legale. Le regole dipendono da cittadinanza, patente, veicolo e società di noleggio, e possono cambiare. Prima di fare affidamento su quanto scritto qui, consulta le fonti ufficiali indicate in fondo alla pagina — e rispetta sempre la segnaletica.", "Da leggere"),
    {
      type: "facts",
      title: "Guidare in Italia in sintesi",
      rows: [
        { label: "Chi può guidare?", value: "Dipende dalla patente, da dove è stata rilasciata e dai requisiti in vigore" },
        { label: "Lato della strada", value: "Si guida a destra, si sorpassa a sinistra" },
        { label: "Grandi arterie", value: "Autostrade, con segnaletica verde" },
        { label: "Pedaggi", value: "Sulla maggior parte delle autostrade" },
        { label: "Zone con accesso limitato", value: "ZTL (zone a traffico limitato), quasi sempre controllate da telecamere" },
        { label: "Parcheggi", value: "Regole diverse da Comune a Comune: vale la segnaletica" },
        { label: "Noleggio", value: "Età, patente, deposito e assicurazione variano secondo la società" },
        { label: "Numero di emergenza", value: "112" },
        { label: "Ideale per", value: "Campagna, zone rurali e viaggi con molte tappe piccole" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/val-dorcia-winding-road-cypresses.webp`,
      alt: "Una strada tortuosa bordata di cipressi tra le colline verdi vicino a San Quirico d'Orcia, in Toscana",
      caption: "Vicino a San Quirico d'Orcia, in Val d'Orcia: il tipo di paesaggio in cui l'auto ha più senso.",
      credit: unsplash("Luca Micheli", "lucamicheli"),
    },

    // ——— 2 ———
    h2("Quali documenti servono?"),
    p("Tieni questi documenti in auto ogni volta che guidi. I controlli su strada sono frequenti e possono essere chiesti in qualsiasi momento."),
    ul(
      "**Documento d'identità o passaporto** — le società di noleggio lo chiedono al ritiro, ed è bene averlo con sé alla guida.",
      "**Patente di guida valida** — l'originale, valido per la categoria del veicolo. Una foto o una copia non la sostituiscono, salvo che le regole e la società di noleggio lo prevedano esplicitamente. Molte società richiedono di avere la patente da un periodo minimo: controlla le condizioni.",
      "**Permesso internazionale di guida, se necessario** — per le patenti rilasciate fuori dall'UE/SEE (vedi più avanti).",
      "**Contratto di noleggio** — dimostra che sei autorizzato a guidare il veicolo e riporta i numeri di emergenza e di assistenza della società.",
      "**Documenti assicurativi** — ogni veicolo in circolazione deve essere coperto dall'assicurazione di responsabilità civile (RCA); per le auto a noleggio la copertura risulta di solito dai documenti del veicolo o dal contratto. Tieni a portata di mano anche eventuali polizze acquistate a parte.",
      "**Carta di pagamento per il deposito** — quasi tutte le società chiedono una carta di credito intestata al conducente principale per bloccare un deposito cauzionale. Molte non accettano carte di debito o prepagate, o le accettano solo a condizioni particolari."
    ),

    // ——— 3 ———
    h2("Patente italiana, UE e patente estera"),
    h3("Patente italiana o di un Paese UE/SEE"),
    p("Con una patente italiana o rilasciata in un Paese dell'UE o del SEE si guida in Italia senza bisogno del permesso internazionale di guida."),
    h3("Patente rilasciata fuori dall'UE/SEE"),
    p("L'articolo 135 del Codice della Strada regola la guida con patenti rilasciate da altri Stati. In generale, chi non è residente in Italia (o lo è da meno di un anno) può guidare con la patente estera se è valida ed è **accompagnata da un permesso internazionale di guida o da una traduzione ufficiale**. Guidare senza il documento richiesto può comportare una sanzione."),
    p("Esistono eccezioni e regimi particolari legati ad accordi internazionali, diversi da Paese a Paese: la risposta giusta per chi ha una patente statunitense, britannica, svizzera, canadese o australiana non è necessariamente la stessa. Anche le società di noleggio possono chiedere il permesso internazionale come condizione del contratto, pure dove la legge non lo imporrebbe."),
    h3("Chi prende la residenza in Italia"),
    p("Le regole cambiano per chi si trasferisce: dopo un anno di residenza la patente estera non UE non è più valida per guidare in Italia e va convertita, se esiste un accordo di reciprocità con lo Stato di rilascio, oppure va conseguita la patente italiana. Per i casi concreti conviene rivolgersi alla Motorizzazione civile."),

    // ——— 4 ———
    h2("Permesso internazionale di guida"),
    p("Il permesso internazionale di guida non è una patente a sé: è un documento di traduzione che va sempre portato insieme alla patente originale. Nella maggior parte dei Paesi lo rilasciano un'associazione automobilistica nazionale o l'autorità che rilascia le patenti, e va richiesto prima di partire."),
    tip("Se hai dubbi sul fatto che ti serva, chiedi per iscritto alla società di noleggio quali documenti accetta al banco. È il modo più semplice per evitare sorprese al ritiro dell'auto.", "Un consiglio pratico"),

    // ——— 5 ———
    h2("Noleggiare un'auto in Italia"),
    p("Si noleggia negli aeroporti, nelle principali stazioni e in città. Le condizioni cambiano molto tra una società e l'altra, e anche tra tariffe della stessa società: i dettagli contano più del prezzo in evidenza."),
    {
      type: "image",
      src: `${IMG}/fiat-500-parked-rome-street.webp`,
      alt: "Una Fiat 500 rossa parcheggiata al margine di una strada alberata a Roma",
      caption: "Le auto piccole sono diffuse e più comode nelle strade strette e nei parcheggi angusti.",
      credit: unsplash("Sergio R. Ortiz", "serafort"),
    },
    h3("Prima di prenotare"),
    p("Leggi le condizioni complete, non solo il riepilogo, e controlla:"),
    ul(
      "**Età del conducente** — età minima (e a volte massima) e se è previsto un supplemento per i giovani conducenti.",
      "**Requisiti della patente** — da quanto tempo va posseduta e se serve il permesso internazionale.",
      "**Carta di pagamento** — se serve una carta di credito intestata al conducente.",
      "**Deposito** — l'importo bloccato sulla carta e i tempi di sblocco.",
      "**Assicurazione** — che cosa è incluso, la franchigia e le esclusioni.",
      "**Chilometraggio** — illimitato o con un tetto, e quanto costa superarlo.",
      "**Carburante** — per esempio «pieno/pieno», e quanto si paga se non si fa rifornimento.",
      "**Espatrio** — se si può portare l'auto all'estero e con quale supplemento.",
      "**Guidatori aggiuntivi** — ogni conducente va indicato nel contratto; spesso è previsto un costo.",
      "**Cambio** — manuale o automatico (vedi sotto).",
      "**Seggiolini** — disponibilità e se vanno richiesti in anticipo.",
      "**Noleggio di sola andata** — se riconsegni in un'altra sede, di solito si paga un supplemento."
    ),

    // ——— 6 ———
    h2("Prima di ritirare l'auto"),
    p("Al banco e davanti all'auto conviene prendersi il tempo necessario, anche se dietro c'è la coda."),
    ul(
      "**Danni già presenti** — fai il giro dell'auto e verifica che ogni graffio, ammaccatura o scheggiatura sia riportato sul modulo.",
      "**Livello del carburante** — controlla che corrisponda al contratto.",
      "**Chilometraggio** — annota il valore del contachilometri.",
      "**Pneumatici** — cerca danni evidenti o gomme sgonfie.",
      "**Luci e specchietti** — verifica che funzionino e non siano danneggiati.",
      "**Documenti e dotazioni** — documenti del veicolo, contratto, triangolo e giubbotto retroriflettente.",
      "**Comandi** — chiedi come si inserisce la retromarcia, come si accendono le luci e quale carburante usa l'auto."
    ),
    tip("Fotografa o riprendi tutta l'auto prima di partire — cerchi, parabrezza, tetto e interni compresi — con la postazione del noleggio visibile, e rifallo alla riconsegna. Non è un obbligo di legge, ma ti dà una prova datata se in seguito ti viene contestato un danno.", "Fotografa l'auto"),

    // ——— 7 ———
    h2("Cambio manuale o automatico"),
    p("Nelle flotte a noleggio in Italia le auto con cambio manuale sono molto diffuse. Se guidi solo con il cambio automatico, prenotalo espressamente e per tempo, e verifica che la conferma indichi «automatico» e non una categoria «o simile» che potrebbe essere manuale."),
    table(
      ["", "Manuale", "Automatico"],
      [
        ["Disponibilità", "Molto diffuso nelle flotte", "Offerto dalle grandi società, ma di solito con meno auto, soprattutto nelle categorie piccole e nelle sedi minori"],
        ["Facilità su strade poco note", "Nessun problema per chi lo usa abitualmente; partenze in salita e traffico lento aumentano l'impegno per chi non è abituato", "Spesso più semplice per chi guida abitualmente l'automatico, soprattutto in paese e su strade ripide e tortuose"],
        ["Prezzo", "Confronta i preventivi per le tue date", "Può essere diverso da un'auto manuale equivalente: confronta i preventivi per le tue date"],
        ["Consiglio", "Prenota presto in alta stagione", "Prenota presto e fatti confermare il cambio per iscritto"],
      ],
      "Cambio manuale o automatico a noleggio"
    ),

    // ——— 8 ———
    h2("Regole di base"),
    p("Le regole italiane sono in linea con quelle degli altri Paesi europei. Queste sono le più richieste da chi guida in Italia per la prima volta, secondo il Codice della Strada nel testo pubblicato da ACI."),
    ul(
      "**Si guida a destra** e si sorpassa a sinistra. Sulle strade con più corsie per senso di marcia si tiene la corsia libera più a destra, salvo per sorpassare.",
      "**Cinture di sicurezza** — obbligatorie per tutti gli occupanti, davanti e dietro.",
      "**Luci** — fuori dai centri abitati gli anabbaglianti vanno tenuti accesi anche di giorno, autostrade comprese.",
      "**Telefono** — è vietato usare il telefono tenendolo in mano durante la guida. Sono ammessi vivavoce e auricolare, se non richiedono l'uso delle mani.",
      "**Bambini** — i bambini di statura inferiore a 1,50 m devono viaggiare su un sistema di ritenuta omologato adatto al loro peso.",
      "**Alcol** — il limite generale è di 0,5 g/l nel sangue. Per chi ha meno di 21 anni e per chi ha la patente da meno di tre anni il limite è zero. Le sanzioni sono state inasprite nel dicembre 2024; la scelta più sicura è non bere affatto se si guida.",
      "**Attraversamenti pedonali** — bisogna dare la precedenza ai pedoni che attraversano o stanno per attraversare sulle strisce.",
      "**Veicoli di emergenza** — bisogna dare strada ai veicoli con lampeggiante blu e sirena accesi."
    ),
    important("La legge italiana prevede anche un dispositivo antiabbandono quando un bambino di età inferiore a quattro anni viaggia su un'auto immatricolata in Italia — quindi sulla maggior parte delle auto a noleggio. Se noleggi un seggiolino, chiedi alla società se ne è dotato.", "In viaggio con bambini piccoli"),
    p("In auto devono esserci il **triangolo** e il **giubbotto retroriflettente ad alta visibilità**. Fuori dai centri abitati il giubbotto va indossato se si scende dal veicolo sulla carreggiata o sulla corsia d'emergenza, per esempio dopo un guasto."),

    // ——— 9 ———
    h2("Segnaletica stradale italiana"),
    p("L'Italia usa la segnaletica europea, quindi forme e simboli sono familiari a chi guida altrove. Alcuni cartelli e alcune scritte meritano però attenzione, perché sono all'origine di molte multe o errori:"),
    table(
      ["Cartello o scritta", "Che cosa significa"],
      [
        ["Zona a Traffico Limitato (ZTL)", "Accesso limitato ai veicoli autorizzati negli orari indicati, di solito con telecamere"],
        ["Varco attivo / Varco non attivo", "La ZTL è attiva (vietato entrare senza autorizzazione) / non è attiva in quel momento"],
        ["Area pedonale", "Zona riservata ai pedoni"],
        ["Passo carrabile", "Accesso a un passo carraio: non si può sostare davanti"],
        ["Disco orario", "Sosta consentita per un tempo limitato, esponendo il disco con l'ora di arrivo"],
        ["Zona rimozione", "Il veicolo in divieto può essere rimosso con il carro attrezzi"],
        ["Pulizia strada", "Divieto di sosta nei giorni e negli orari del lavaggio strade"],
        ["Tutte le direzioni", "L'indicazione da seguire per uscire da un centro abitato"],
        ["Centro", "Porta verso il centro, spesso dove inizia una ZTL"],
        ["Catene o pneumatici invernali obbligatori", "Sul tratto indicato servono gomme invernali o catene a bordo nel periodo previsto"],
      ],
      "Cartelli e scritte da conoscere"
    ),
    {
      type: "image",
      src: `${IMG}/siena-roma-direction-sign.webp`,
      alt: "Cartelli di direzione blu per Siena e Roma accanto a una strada di campagna in Toscana",
      caption: "Sulle strade ordinarie i cartelli di direzione sono blu; quelli verdi indicano l'autostrada.",
      credit: unsplash("Claude Potts", "flickrrey"),
    },
    tip("In Italia i cartelli **verdi** portano all'autostrada a pedaggio e quelli **blu** alle altre strade principali. In alcuni Paesi europei è il contrario: agli incroci conviene ricordarlo.", "Verde significa autostrada"),

    // ——— 10 ———
    h2("Limiti di velocità"),
    p("I limiti generali indicati sotto sono fissati dall'articolo 142 del Codice della Strada e valgono per le autovetture, salvo diversa segnalazione. **La segnaletica prevale sempre**: i limiti sono spesso più bassi nei centri abitati, nei cantieri, in curva e in galleria, e su alcuni tratti autostradali possono essere più alti, dove indicato."),
    table(
      ["Tipo di strada", "Limite generale (auto)", "Con pioggia o neve", "Neopatentati (primi 3 anni)"],
      [
        ["Autostrada", "130 km/h", "110 km/h", "100 km/h"],
        ["Strada extraurbana principale", "110 km/h", "90 km/h", "90 km/h"],
        ["Altre strade extraurbane", "90 km/h", "90 km/h", "90 km/h"],
        ["Centri abitati", "50 km/h", "50 km/h", "50 km/h"],
      ],
      "Limiti generali di velocità per le autovetture"
    ),
    p("I limiti cambiano anche in base al veicolo — sono più bassi, per esempio, per chi traina un rimorchio o una roulotte — e alle scelte locali. Alcune città hanno abbassato il limite su molte strade urbane (Bologna, per esempio, applica i 30 km/h sulla maggior parte delle vie cittadine), mentre alcune strade urbane possono arrivare a 70 km/h, se segnalato. In sintesi: più della tabella, contano i cartelli."),
    {
      type: "image",
      src: `${IMG}/italia-border-speed-limit-sign.webp`,
      alt: "Cartello al confine italiano vicino a Glorenza con i limiti di velocità: 50 nei centri abitati, 90 fuori, 110 sulle extraurbane principali e 130 in autostrada",
      caption: "Ai valichi di confine un cartello riassume i limiti generali, qui vicino a Glorenza, in Alto Adige.",
      credit: unsplash("Roman Vasylovskyi", "rvasilovski"),
    },
    p("La velocità è controllata con autovelox fissi e mobili e, su molte autostrade, con sistemi che misurano la velocità media tra due punti. La legge prevede che i controlli siano segnalati in anticipo, ma il cartello è un avviso, non un invito a frenare all'ultimo momento: il limite va rispettato sempre."),

    // ——— 11 ———
    h2("ZTL: cosa sono e come evitarle"),
    p("Se c'è una sezione di questa guida da leggere con attenzione, è questa. Le zone a traffico limitato sono la causa più frequente delle multe prese da chi guida in una città che non conosce — multe che spesso arrivano mesi dopo il rientro a casa."),
    h3("Cos'è una ZTL?"),
    p("Una **Zona a Traffico Limitato** (ZTL) è un'area — di solito un centro storico — in cui in determinate fasce orarie possono entrare solo i veicoli autorizzati. L'accesso è quasi sempre controllato da telecamere poste a ogni ingresso (il «varco»), che leggono automaticamente la targa."),
    h3("Perché esistono"),
    p("Molti centri storici italiani sono nati molto prima delle automobili. Le ZTL riducono traffico, inquinamento e rumore nelle strade strette, proteggono gli edifici storici e rendono più sicuri i centri per chi ci vive, ci lavora e li percorre a piedi."),
    h3("Dove si trovano"),
    p("Si trovano in quasi tutte le grandi città e in molti centri più piccoli con un nucleo storico: Roma, Firenze, Milano, Bologna, Napoli, Pisa, Siena e Verona ne hanno una, così come moltissimi borghi collinari e paesi di mare. Ogni Comune stabilisce perimetro, orari ed eccezioni, e alcune città hanno più zone con orari diversi, incluse ZTL serali e notturne d'estate."),
    p("Firenze è un buon esempio di quanto le regole siano specifiche. Secondo il sito della mobilità del Comune, i settori centrali della ZTL sono attivi dal lunedì al venerdì dalle 7:30 alle 20 e il sabato dalle 7:30 alle 16; da aprile a inizio ottobre è attiva anche una ZTL notturna estiva il giovedì, il venerdì e il sabato. Alcuni varchi, riservati ai mezzi pubblici e di soccorso, sono sempre chiusi al traffico privato. Roma ha più zone — tra cui il centro storico e Trastevere — ognuna con i suoi orari diurni e notturni. Sono dettagli che cambiano: verifica sempre sul sito del Comune per le tue date."),
    h3("Come sono segnalate"),
    ul(
      "**Il cartello d'ingresso** — un cerchio bianco bordato di rosso (divieto di transito) con la scritta *Zona a Traffico Limitato* e un pannello con orari ed eccezioni.",
      "**Un pannello luminoso**, presente in molti varchi, che indica se la zona è attiva in quel momento. La dicitura varia da città a città, ma di solito si legge *varco attivo* (vietato entrare senza autorizzazione) o *varco non attivo*.",
      "**Una telecamera** montata su un palo o su un portale vicino al cartello."
    ),
    p("I cartelli sono piccoli, spesso collocati in incroci trafficati e facili da non notare mentre si è concentrati su traffico e navigatore. È proprio per questo che tanti ci passano senza accorgersene."),
    h3("Chi può entrare"),
    p("Dipende dalla città, ma di norma sono autorizzati residenti con permesso, mezzi pubblici, taxi, mezzi di soccorso e titolari di contrassegno per disabili che hanno registrato il veicolo. Alcuni Comuni consentono agli ospiti di raggiungere un albergo all'interno della zona, se la struttura comunica la targa entro i tempi previsti. Le auto a noleggio non sono autorizzate di default."),
    h3("Che cosa succede con un'auto a noleggio"),
    p("Se l'auto a noleggio supera un varco attivo senza autorizzazione, la telecamera registra la targa. Il verbale arriva prima alla società di noleggio, proprietaria del veicolo, che comunica i dati del conducente alla polizia locale e di solito addebita una spesa amministrativa per questa operazione: controlla l'importo nelle condizioni del contratto. La multa viene poi notificata al conducente. Per chi risiede all'estero la legge concede fino a 360 giorni per la notifica, ed è per questo che le multe possono arrivare molto tempo dopo il viaggio."),
    p("Ogni singolo passaggio da un varco può essere contestato come violazione separata: girare in tondo nel centro alla ricerca dell'albergo può quindi costare più multe."),
    h3("Come evitare di entrarci per errore"),
    p("Organizza l'ultimo tratto di ogni viaggio verso una città. Informati su dove inizia la ZTL, su dove parcheggerai fuori dal perimetro e su come raggiungerai l'alloggio a piedi o con i mezzi pubblici. Se l'alloggio si trova all'interno di una ZTL, contattalo prima dell'arrivo e chiedi con precisione come funziona l'accesso."),
    h3("La checklist per le ZTL"),
    ol(
      "**Informati prima di entrare.** Consulta sul sito del Comune la ZTL di ogni località del percorso, con gli orari validi per le tue date.",
      "**Cerca i cartelli.** Rallenta vicino ai centri storici e fai attenzione al cartello, al pannello attivo/non attivo e alla telecamera.",
      "**Verifica l'accesso con l'albergo.** Se puoi raggiungere la struttura in auto, chiedi quale percorso seguire e assicurati che comunichi la targa in tempo.",
      "**Non affidarti solo al navigatore.** Le app di navigazione possono non conoscere perimetri e orari delle ZTL, e farti passare proprio attraverso un varco.",
      "**Chiedi all'alloggio** se si trova in una zona a traffico limitato e qual è il parcheggio più vicino fuori dalla zona.",
      "**Segui le regole comunali in vigore.** Orari, perimetri e permessi cambiano: contano il sito del Comune e i cartelli del giorno stesso."
    ),
    important("Se non sei sicuro che la zona sia attiva, non entrare. Parcheggia fuori e prosegui a piedi, oppure controlla prima il sito del Comune. Una deviazione costa qualche minuto; un accesso non autorizzato può costare una multa più la spesa addebitata dalla società di noleggio.", "Nel dubbio"),

    // ——— 12 ———
    h2("Pedaggi e autostrade"),
    p("Le autostrade collegano quasi tutte le grandi città e sono di solito il modo più rapido per coprire lunghe distanze in auto. La maggior parte è a pedaggio ed è gestita da società concessionarie: Autostrade per l'Italia gestisce la rete più estesa, altre società gestiscono altre tratte."),
    h3("Come funziona il pedaggio"),
    p("Sulla maggior parte delle autostrade il pedaggio dipende dalla distanza percorsa e dalla classe del veicolo:"),
    ol(
      "All'ingresso ti fermi alla barriera e **ritiri il biglietto** dalla macchinetta.",
      "Conservalo con cura, senza lasciarlo al sole sul cruscotto.",
      "All'uscita scegli al casello una porta che accetti il tuo metodo di pagamento, inserisci il biglietto e paghi."
    ),
    p("Alcuni tratti brevi, tangenziali e raccordi hanno un pedaggio fisso o sono gratuiti, e alcune autostrade più recenti usano sistemi di esazione elettronica senza barriere. Se il tuo percorso ne comprende una, verifica sul sito del gestore come si paga. I calcolatori di percorso, compreso quello di Autostrade per l'Italia, mostrano una stima del pedaggio prima della partenza."),
    {
      type: "image",
      src: `${IMG}/motorway-toll-plaza-rovereto.webp`,
      alt: "Auto in avvicinamento a un casello autostradale con più porte vicino a Rovereto, con le montagne sullo sfondo",
      caption: "Un casello vicino a Rovereto, in Trentino. Prima di impegnare una porta, controlla i cartelli sopra le corsie.",
      credit: unsplash("viktor rejent", "viktor_rejent"),
    },
    h3("Scegliere la porta giusta"),
    p("Autostrade per l'Italia usa cartelli colorati sopra ogni porta per indicare i metodi di pagamento accettati:"),
    table(
      ["Metodo di pagamento", "Cartello", "Da sapere"],
      [
        ["Carte", "Cartello blu, spesso con la scritta «Carte»", "Le porte blu accettano solo carte (carte di credito, Viacard e simili). La maggior parte delle carte di credito internazionali funziona, ma è meglio avere un'alternativa in caso di rifiuto."],
        ["Contanti", "Cartello bianco con il simbolo delle banconote", "Accettano monete e banconote; le casse automatiche danno il resto. Alcune accettano anche carte: controlla i simboli."],
        ["Telepedaggio (Telepass e simili)", "Cartello giallo con la scritta «Telepass»", "Le porte gialle sono per i veicoli con un dispositivo di telepedaggio a bordo: non usarle se non l'hai. Alcune auto a noleggio ne sono dotate: chiedi al ritiro come viene addebitato."],
      ],
      "Pagare il pedaggio in autostrada"
    ),
    tip("Se al casello non riesci a pagare — biglietto smarrito, carta rifiutata, porta sbagliata — non fare retromarcia. Premi il pulsante di assistenza e segui le istruzioni. Quando il pedaggio non si può pagare sul posto, viene rilasciato un rapporto di mancato pagamento con le istruzioni per saldarlo in seguito; Autostrade per l'Italia ha anche una pagina per il pagamento online.", "Se qualcosa va storto"),
    p("Due note pratiche: le aree di servizio offrono carburante, ristoro e servizi igienici e sono in genere aperte tutto il giorno; su molte autostrade, lungo la corsia d'emergenza, ci sono colonnine SOS per le emergenze."),

    // ——— 13 ———
    h2("Parcheggiare in Italia"),
    p("Trovare parcheggio è spesso la parte più difficile, soprattutto nei centri storici, dove le strade sono strette, i posti pochi e molti riservati ai residenti. Per la sosta su strada la convenzione più diffusa si basa sul colore delle strisce, ma **le regole cambiano da Comune a Comune: la segnaletica locale prevale sempre** su qualsiasi regola generale."),
    table(
      ["Strisce", "Che cosa indicano di solito", "Da verificare"],
      [
        ["Blu", "Sosta a pagamento", "Il cartello con orari e tariffe; si paga al parcometro o con l'app indicata, esponendo il tagliando se richiesto"],
        ["Bianche", "Spesso sosta gratuita", "Eventuali limiti di tempo — alcune richiedono il disco orario — e riserve per i residenti"],
        ["Gialle", "Posti riservati — per esempio a residenti, disabili, carico e scarico, taxi o forze dell'ordine", "Non sostare senza il permesso corrispondente"],
        ["Nessuna striscia", "Non è un posto auto", "La sosta può essere vietata, soprattutto vicino a incroci e attraversamenti"],
      ],
      "Le strisce più comuni (le convenzioni cambiano da città a città)"
    ),
    {
      type: "image",
      src: `${IMG}/passo-carrabile-sign-rome.webp`,
      alt: "Un cartello di passo carrabile su un grande portone di legno a Roma",
      caption: "Il cartello «Passo carrabile» segnala un accesso carrabile: chi sosta davanti rischia la rimozione.",
      credit: unsplash("Egor Myznik", "vonshnauzer"),
    },
    h3("Parcometri, app e parcheggi"),
    p("I parcometri accettano monete e spesso carte; molti Comuni usano anche app per la sosta, indicate sui cartelli. Parcheggi multipiano e sotterranei sono frequenti ai margini dei centri storici e vicino alle stazioni principali: spesso sono la soluzione più semplice in città, e aiutano a restare fuori dalle ZTL."),
    h3("Altre limitazioni"),
    ul(
      "**Zone residenziali** — alcune vie sono riservate ai residenti in certi orari, anche senza strisce gialle.",
      "**Carico e scarico** — stalli riservati alle consegne negli orari indicati.",
      "**Pulizia strade** — i cartelli indicano giorni e orari in cui la sosta è vietata; le auto possono essere rimosse.",
      "**Giorni di mercato** — le piazze usate come parcheggio possono essere chiuse per il mercato settimanale."
    ),
    tip("Non lasciare borse, bagagli o dispositivi in vista nell'auto parcheggiata, soprattutto nei parcheggi vicino ai luoghi più visitati e ai sentieri. Porta con te gli oggetti di valore o riponili nel bagagliaio prima di arrivare.", "Niente in vista"),

    // ——— 14 ———
    h2("Carburante e ricarica elettrica"),
    p("Controlla quale carburante usa l'auto prima di lasciare il parcheggio del noleggio: di solito è indicato all'interno dello sportellino. Sbagliare carburante è costoso e spesso escluso dalle coperture assicurative del noleggio."),
    table(
      ["Alla pompa", "Significato"],
      [
        ["Benzina / Senza piombo", "Benzina senza piombo, di solito 95 ottani"],
        ["Gasolio / Diesel", "Gasolio"],
        ["GPL", "Gas di petrolio liquefatto"],
        ["Metano", "Gas naturale compresso"],
        ["Self / Fai da te", "Self-service: fai rifornimento da solo"],
        ["Servito", "Rifornimento con l'addetto, di norma a un prezzo al litro più alto"],
      ],
      "Le voci alla pompa"
    ),
    h3("Pagamento e orari"),
    p("Le aree di servizio autostradali sono in genere aperte a tutte le ore. Molti altri distributori hanno personale solo di giorno, a volte con una pausa a pranzo, e fuori orario funzionano con il self-service. Le colonnine accettano di solito carte e spesso contanti, ma qualche volta rifiutano carte straniere: meglio non aspettare la riserva per fare il pieno, soprattutto nelle zone rurali e la domenica."),
    h3("Ricarica delle auto elettriche"),
    p("Le colonnine di ricarica pubbliche si trovano nelle città, in molte aree di servizio autostradali e in un numero crescente di strutture ricettive, ma la copertura è disomogenea e può essere scarsa nelle zone rurali e in montagna. Le reti usano app e sistemi di pagamento diversi. Se noleggi un'auto elettrica, chiedi quali cavi e quali tessere o app di ricarica sono inclusi, e pianifica le soste prima di partire invece di dare per scontato di trovare una colonnina dove serve."),

    // ——— 15 ———
    h2("Guidare nelle grandi città"),
    p("Guidare in una grande città italiana è possibile, e molti residenti lo fanno ogni giorno, ma per chi è in viaggio raramente è il modo migliore di usare il proprio tempo. Il traffico è intenso, le ZTL coprono gran parte dei centri e i parcheggi sono pochi e costosi. Di solito conviene raggiungere le città in treno e ritirare o riconsegnare l'auto in periferia o in aeroporto."),
    table(
      ["Città", "Che cosa considerare"],
      [
        ["Roma", "Traffico intenso, più ZTL (tra cui centro storico e Trastevere) con orari diurni e notturni, parcheggi limitati"],
        ["Firenze", "Tutto il centro storico è una ZTL controllata da telecamere: si parcheggia fuori"],
        ["Milano", "Traffico urbano intenso; una zona a pagamento con telecamere in centro (Area C) e un'ampia zona a basse emissioni (Area B)"],
        ["Venezia", "Nessun accesso in auto alla città storica: le strade finiscono a Piazzale Roma, con parcheggi lì e al Tronchetto"],
        ["Napoli", "Traffico intenso, ZTL nel centro storico e parcheggio impegnativo: molti preferiscono non guidare in città"],
        ["Bologna", "ZTL e aree pedonali in centro e limite di 30 km/h sulla maggior parte delle strade cittadine"],
      ],
      "Guidare nelle grandi città"
    ),
    p("Se arrivi in aereo e poi giri la campagna, ritira l'auto quando lasci la città, non all'arrivo."),

    // ——— 16 ———
    h2("Guidare in campagna"),
    p("È qui che l'auto dà il meglio. L'Italia rurale ha buone strade e, fuori stagione, poco traffico, e molti dei suoi luoghi più belli sono mal serviti dal trasporto pubblico. L'auto è particolarmente utile in:"),
    ul(
      "**Toscana** — borghi, cantine e agriturismi, soprattutto in zone come la Val d'Orcia.",
      "**Puglia** — trulli, paesi bianchi e masserie della Valle d'Itria, e la costa.",
      "**Sicilia** — l'entroterra, il sud-est e le coste meno frequentate.",
      "**Sardegna** — spiagge e paesi sono distanti e gli autobus poco frequenti.",
      "**Umbria e Marche** — piccoli centri collegati da strade di campagna.",
      "**Il Nord rurale** — i laghi, le Langhe e le valli delle Alpi e delle Dolomiti."
    ),
    p("I vantaggi sono la flessibilità, l'accesso ai borghi più piccoli e alle strade panoramiche, la libertà di dormire in campagna e di non dipendere dagli orari. Gli aspetti da considerare:"),
    ul(
      "**Parcheggi** — nei borghi collinari il parcheggio è di solito fuori dalle mura, spesso a pagamento, e dentro c'è una ZTL.",
      "**Strade strette** — le strade di campagna possono essere a una sola corsia, con muri in pietra ai lati; in Toscana sono comuni le strade bianche, sterrate.",
      "**Navigazione** — le app scelgono a volte scorciatoie sterrate o poco adatte. Nel dubbio, resta sulle strade principali.",
      "**Carburante e ricarica** — nelle zone rurali e in montagna i distributori possono essere distanti.",
      "**Stagioni** — d'estate caldo e traffico vicino alla costa; d'inverno nebbia, ghiaccio e neve."
    ),
    {
      type: "image",
      src: `${IMG}/montalcino-street-ape-scooters.webp`,
      alt: "Un'Ape Piaggio rossa e alcuni scooter parcheggiati sotto un albero in una via di Montalcino",
      caption: "A Montalcino, come in molti borghi, si parcheggia fuori dal centro e si entra a piedi.",
      credit: unsplash("Barney Goodman", "bgoodpic"),
    },

    // ——— 17 ———
    h2("Strade di montagna e costiere"),
    p("Alcune delle strade più belle d'Italia sono anche le più impegnative. Nessuna è preclusa a chi guida con prudenza, ma ognuna chiede qualcosa di diverso. Valuta con onestà quanto ti senti sicuro su strade strette, tornanti e pendenze, e che dimensioni ha l'auto che hai prenotato."),
    h3("Dolomiti"),
    p("Le Dolomiti hanno strade ben costruite che salgono ai passi con lunghe serie di tornanti e pendenze importanti, e d'estate molti ciclisti, motociclisti e pullman. Alcuni passi prevedono limitazioni stagionali o orarie, e quelli più alti possono chiudere d'inverno. Dal 15 novembre al 15 aprile, sui tratti in cui cartelli o ordinanze lo prevedono, servono pneumatici invernali o catene a bordo — e in montagna succede spesso. D'estate i parcheggi ai punti di partenza dei sentieri si riempiono presto. Per organizzare la visita c'è la nostra guida alle [Dolomiti per la prima volta](/it/guide/dolomiti-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/alpine-pass-hairpin-road.webp`,
      alt: "Una strada che sale in una valle alpina verde con una serie di tornanti, nel Nord Italia",
      caption: "Tornanti su un passo alpino nel Nord Italia. Nelle lunghe discese conviene usare le marce basse.",
      credit: unsplash("Samuele Bertoli", "ingsamu"),
    },
    h3("Costiera Amalfitana"),
    p("La statale costiera (SS163) è stretta e tortuosa, scavata nella roccia, con curve strette, autobus che occupano tutta la carreggiata e parcheggi scarsi e costosi nei paesi. In alta stagione il traffico può essere lento per lunghi tratti. ANAS, che gestisce la strada, applica nei periodi stabiliti un sistema a targhe alterne sul tratto tra Vietri sul Mare e Positano: negli orari in cui è in vigore, le auto con targa che termina con un numero pari o dispari possono circolare solo nei giorni corrispondenti, con esenzioni per alcune categorie. Il calendario viene pubblicato ogni anno; per il 2026 va da giugno a ottobre, e in agosto e settembre si applica tutti i giorni. Controlla l'ordinanza in vigore prima di mettere in programma di guidare e chiedi all'albergo dove parcheggiare. Molti preferiscono traghetti e autobus: vedi [traghetti in Italia](/it/trasporti/traghetti-in-italia)."),
    {
      type: "image",
      src: `${IMG}/amalfi-town-coast-road.webp`,
      alt: "Le case bianche di Amalfi su un pendio ripido sopra il mare, con la strada costiera lungo il muraglione",
      caption: "Amalfi, dove la strada costiera passa stretta tra il paese e il mare.",
      credit: unsplash("KaLisa Veer", "kalisaveer"),
    },
    h3("Campagna toscana"),
    p("Le strade principali tra le città toscane sono in genere facili. Le difficoltà sono locali: strade bianche per raggiungere gli agriturismi, salite strette verso i borghi, ZTL alle porte di quasi ogni centro storico e parcheggi affollati d'estate nelle località più note. Chiedi all'alloggio se la strada d'accesso è sterrata e calcola più tempo: sulla mappa le distanze sembrano brevi, ma le strade tortuose sono lente."),
    h3("Sardegna e Sicilia"),
    p("Sono isole grandi, e fuori dalle città principali l'auto è spesso il modo più pratico per esplorarle. Le strade principali collegano i centri maggiori; quelle secondarie possono essere strette, tortuose e di qualità variabile, e i tempi di percorrenza sono più lunghi del previsto. Nell'entroterra i distributori possono essere radi, e d'estate il traffico si concentra intorno alle spiagge più frequentate. A Palermo e Catania, come nelle altre grandi città, si trovano traffico intenso e ZTL."),

    // ——— 18 ———
    h2("Incidenti, multe e guasti"),
    h3("Cosa fare dopo un incidente"),
    p("La legge italiana obbliga chi è coinvolto in un incidente collegato al proprio comportamento a **fermarsi**, a prestare assistenza a eventuali feriti e a fornire le proprie generalità. Allontanarsi dal luogo dell'incidente è un illecito, e non soccorrere i feriti è un reato. In tutta Italia il numero di emergenza è il **112**."),
    {
      type: "steps",
      items: [
        { title: "Fermati in sicurezza", text: "Fermati appena possibile, accendi le quattro frecce e indossa il giubbotto retroriflettente prima di scendere. Se serve a segnalare il pericolo, posiziona il triangolo dietro l'auto." },
        { title: "Verifica se ci sono feriti", text: "Controlla te stesso, i passeggeri e le altre persone coinvolte. Non spostare chi è ferito gravemente, salvo pericolo immediato." },
        { title: "Chiama i soccorsi se necessario", text: "Chiama il **112** se ci sono feriti, se la strada è bloccata o pericolosa o se c'è una contestazione. Gli operatori possono rispondere anche in inglese e in altre lingue. Se ci sono feriti, non spostare i veicoli finché i soccorsi non lo indicano." },
        { title: "Scambia le informazioni richieste", text: "Scambiate nomi, indirizzi, dati della patente, targhe e dati assicurativi. In Italia si usa spesso il modulo di constatazione amichevole (CAI), che dovrebbe trovarsi in auto. Non firmare nulla che non ti sia chiaro." },
        { title: "Documenta la scena", text: "Fotografa i veicoli, la loro posizione, i danni, le targhe, la segnaletica e l'insieme della scena, e annota ora e luogo. Chiedi i contatti di eventuali testimoni." },
        { title: "Contatta la società di noleggio", text: "Chiama al più presto il numero di emergenza indicato nel contratto e segui le istruzioni. I contratti prevedono di solito una segnalazione tempestiva degli incidenti." },
        { title: "Segui le istruzioni dell'assicurazione", text: "Denuncia l'incidente all'assicurazione del noleggio e a eventuali altre compagnie, nei tempi previsti dalle polizze. Conserva una copia di ogni documento." },
      ],
    },
    h3("Guasti"),
    ul(
      "**Spostati in un punto sicuro** se possibile — una piazzola, un'area di servizio o la corsia d'emergenza — e accendi le quattro frecce.",
      "**Indossa il giubbotto e usa il triangolo**, dove è sicuro posizionarlo. In autostrada fai scendere tutti dal lato opposto al traffico e aspettate oltre il guardrail.",
      "**Chiama l'assistenza stradale** al numero indicato nel contratto di noleggio. Non far riparare l'auto senza la sua autorizzazione.",
      "**Chiama il 112** se qualcuno è in pericolo o se l'auto è ferma in un punto pericoloso. In autostrada puoi usare anche le colonnine SOS.",
      "**Non tentare riparazioni** su una strada trafficata: cambiare una gomma sulla corsia d'emergenza di un'autostrada è pericoloso."
    ),
    h3("Telecamere e multe"),
    p("In Italia le telecamere sono molto diffuse: autovelox, sistemi di controllo della velocità media in autostrada, telecamere ai semafori e ai varchi delle ZTL. Le multe possono derivare anche da divieti di sosta e pedaggi non pagati. Le sanzioni variano secondo la violazione, e per quelle più gravi le conseguenze vanno oltre la multa."),
    p("Con un'auto a noleggio la procedura è la stessa delle multe per le ZTL: il verbale arriva alla società di noleggio, che comunica i tuoi dati, di solito addebita una spesa amministrativa, e la multa ti raggiunge per posta — anche molti mesi dopo. Leggi la parte del contratto dedicata alle sanzioni per sapere quanto addebita la società. L'unico modo affidabile per evitare le multe è rispettare limiti e divieti segnalati."),

    // ——— 19 ———
    h2("Assicurazione"),
    p("L'assicurazione è la voce in cui il prezzo del preventivo e quello finale possono differire di più. Leggi il tuo contratto: denominazioni, coperture e franchigie cambiano tra società e tariffe."),
    ul(
      "**Responsabilità civile (RCA)** — obbligatoria per ogni veicolo in circolazione e inclusa nel noleggio. Copre i danni a cose e persone causati ad altri.",
      "**Limitazione di responsabilità per danni (CDW o LDW)** — riduce quanto paghi se l'auto a noleggio viene danneggiata. In Italia una forma di copertura per danni e furto è spesso già inclusa nel prezzo, ma con una franchigia.",
      "**Protezione furto (TP)** — riduce quanto paghi in caso di furto dell'auto, anche qui di solito con una franchigia.",
      "**Franchigia** — la cifra massima a tuo carico in caso di danno o furto. Può essere alta, ed è spesso ciò che il deposito sulla carta serve a garantire.",
      "**Riduzione della franchigia** — copertura facoltativa venduta dalla società di noleggio per abbassare la franchigia, a volte fino a zero.",
      "**Polizze esterne sulla franchigia** — vendute da altre compagnie; di solito si paga prima la società di noleggio e poi si chiede il rimborso. Il noleggio può comunque bloccare l'intero deposito.",
      "**Coperture delle carte di credito** — alcune carte includono una copertura per i noleggi. Verifica se vale in Italia, quali danni copre e che cosa serve per il rimborso."
    ),
    important("Controlla le esclusioni. Tra le più frequenti: pneumatici, parabrezza e cristalli, sottoscocca e tetto, smarrimento delle chiavi, carburante sbagliato, circolazione su strade sterrate e danni causati da un conducente non indicato nel contratto. Se il tuo percorso comprende strade bianche, verifica che il contratto lo consenta.", "Leggi le esclusioni"),

    // ——— 20 ———
    h2("Auto o treno?"),
    p("L'Italia ha una rete ferroviaria veloce e frequente tra le grandi città, dove l'auto è spesso più un peso che un aiuto — ma il treno non raggiunge gran parte della campagna. Molti combinano i due mezzi. Per la parte ferroviaria, leggi la guida su come [viaggiare in treno in Italia](/it/guide/viaggiare-in-italia-in-treno); per il quadro generale, la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
    table(
      ["Tipo di viaggio", "Treno", "Auto"],
      [
        ["Roma → Firenze", "Spesso pratico: l'alta velocità collega i due centri", "Possibile, ma contano parcheggi e ZTL in entrambe le città"],
        ["Roma → Venezia", "Spesso pratico, con collegamenti diretti ad alta velocità", "Possibile, ma nella Venezia storica non si entra in auto"],
        ["Borghi toscani", "Meno flessibile: molti borghi non hanno stazione", "Spesso utile"],
        ["Dolomiti", "Dipende dal percorso: il treno arriva nelle valli, gli autobus più in su", "Può essere utile per passi e valli isolate"],
        ["Costiera Amalfitana", "Dipende da dove dormi: treno fino a Salerno o Napoli, poi autobus e traghetti", "Richiede un'organizzazione attenta per traffico, parcheggi e targhe alterne"],
        ["Giro della Sicilia", "Dipende dall'itinerario: alcuni centri sono ben collegati, molti no", "Può offrire flessibilità"],
        ["Viaggio in città", "Spesso comodo: le stazioni sono centrali", "Traffico e parcheggi da considerare; di solito non serve"],
      ],
      "Treno o auto: i viaggi più comuni"
    ),
    {
      type: "compare",
      title: "Conviene noleggiare un'auto?",
      columns: [
        {
          title: "L'auto può convenire se",
          items: [
            "esplori zone rurali",
            "visiti più borghi o piccoli centri",
            "dormi in campagna",
            "vuoi flessibilità sulle strade panoramiche",
            "il trasporto pubblico non si adatta al tuo itinerario",
          ],
        },
        {
          title: "Il treno può convenire se",
          items: [
            "visiti soprattutto grandi città",
            "ti sposti tra Roma, Firenze, Bologna, Milano, Venezia o Napoli",
            "non vuoi pensare al parcheggio",
            "il viaggio è in gran parte urbano",
          ],
        },
      ],
    },
    p("Molti itinerari combinano i due mezzi: treno tra le città, poi un'auto per qualche giorno in campagna, ritirata in una stazione o in un aeroporto alle porte della città. Per confrontare i mezzi tratta per tratta, vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),
    h3("Quanto costa guidare"),
    p("I prezzi del noleggio cambiano con la stagione, la categoria, il cambio, la sede e l'anticipo della prenotazione, quindi non indichiamo cifre. Prima di confrontare auto e treno, conviene invece elencare queste voci per il proprio viaggio:"),
    table(
      ["Voce", "Da che cosa dipende", "Dove verificare"],
      [
        ["Noleggio", "Stagione, categoria, cambio, sedi di ritiro e riconsegna", "Preventivi per le tue date"],
        ["Assicurazione", "Livello di franchigia e coperture facoltative", "Condizioni del noleggio; eventuali polizze esterne"],
        ["Deposito", "Categoria e coperture scelte — bloccato sulla carta, non addebitato", "Condizioni del noleggio"],
        ["Carburante o ricarica", "Chilometri, tipo di auto e prezzi alla pompa", "Il tuo percorso e i prezzi del momento"],
        ["Pedaggi", "Chilometri in autostrada e classe del veicolo", "Calcolatori di percorso dei gestori autostradali"],
        ["Parcheggi", "Città, zona e durata della sosta", "Siti dei Comuni e dei parcheggi; il tuo alloggio"],
        ["Guidatori aggiuntivi", "Numero di conducenti", "Condizioni del noleggio"],
        ["Supplemento giovani", "Età del conducente", "Condizioni del noleggio"],
        ["Seggiolini", "Numero e tipo", "Condizioni del noleggio"],
        ["Navigatore e accessori", "GPS, dotazioni extra, dispositivi di telepedaggio", "Condizioni del noleggio"],
        ["Sola andata", "Sedi di ritiro e riconsegna diverse", "Preventivo del noleggio"],
        ["Multe e spese amministrative", "Solo in caso di violazione", "La parte del contratto sulle sanzioni"],
      ],
      "Uno schema per il budget dell'auto"
    ),

    // ——— 21 ———
    h2("Errori comuni"),
    ol(
      "**Ignorare i cartelli delle ZTL** — è la causa più frequente di multe per chi guida in una città che non conosce.",
      "**Pensare che il navigatore conosca tutti i divieti** — le app non sempre sanno orari delle ZTL, targhe alterne o chiusure locali.",
      "**Prenotare un manuale senza pensarci** — se non guidi abitualmente con il cambio manuale, borghi ripidi e traffico cittadino non sono il posto migliore per esercitarsi.",
      "**Dimenticare i costi di parcheggio** — nelle città e nelle località più note, qualche giorno di parcheggio pesa sul budget.",
      "**Non leggere il contratto di noleggio** — franchigia, deposito, regole sul carburante ed esclusioni contano quanto il prezzo.",
      "**Pensare che ogni paese abbia un parcheggio comodo** — in molti borghi il parcheggio è fuori dalle mura e d'estate è spesso pieno.",
      "**Sottovalutare le strade strette** — un'auto grande può diventare una fonte di stress sulle strade di campagna e nei centri storici.",
      "**Programmare distanze irrealistiche** — curve, traffico e soste allungano i tempi rispetto a quanto suggerisce la mappa.",
      "**Dimenticare i pedaggi** — mettili in budget e sappi quali porte usare prima di arrivare al casello.",
      "**Non fotografare l'auto a noleggio** — senza una prova è difficile contestare un addebito per danni.",
      "**Lasciare oggetti di valore in vista** — soprattutto nei parcheggi vicino a monumenti e spiagge.",
      "**Noleggiare un'auto per un viaggio in città** — a Roma, Firenze, Venezia e Milano l'auto di solito costa più di quanto fa risparmiare."
    ),

    // ——— 22 ———
    h2("Checklist per chi guida in Italia"),
    p("Spunta le voci man mano che ti organizzi."),
    {
      type: "checklist",
      id: "guidare-in-italia",
      groups: [
        {
          title: "Prima di noleggiare",
          items: [
            "Verifica i requisiti per la tua patente",
            "Verifica se serve il permesso internazionale o una traduzione",
            "Confronta le condizioni, non solo i prezzi",
            "Controlla coperture e franchigia",
            "Controlla deposito e carte accettate",
            "Scegli tra cambio manuale e automatico",
            "Controlla chilometraggio e regole sul carburante",
          ],
        },
        {
          title: "Prima di partire con l'auto",
          items: [
            "Fotografa il veicolo",
            "Verifica che i danni siano registrati",
            "Controlla il livello del carburante",
            "Controlla documenti, triangolo e giubbotto",
            "Regola specchietti e sedile",
            "Impara i comandi e il tipo di carburante",
          ],
        },
        {
          title: "Prima di entrare in città",
          items: [
            "Verifica la ZTL e i suoi orari",
            "Individua dove parcheggiare",
            "Verifica l'accesso con l'albergo",
            "Controlla altre limitazioni alla circolazione",
          ],
        },
      ],
    },
    p("Le regole e le procedure descritte in questa guida sono state verificate sulle fonti ufficiali a settembre 2026. I requisiti possono cambiare anche con poco preavviso — in particolare orari delle ZTL, limitazioni stagionali e regole sulle patenti — quindi controlla le fonti qui sotto prima di partire."),
  ],

  faqs: [
    { question: "Si può guidare in Italia con una patente straniera?", answer: "Spesso sì. Le patenti rilasciate in un Paese dell'UE o del SEE sono valide in Italia. Con una patente rilasciata altrove serve di norma anche un permesso internazionale di guida o una traduzione ufficiale, salvo accordi specifici per il proprio Paese. Anche le società di noleggio fissano condizioni proprie." },
    { question: "Serve il permesso internazionale di guida in Italia?", answer: "Dipende da dove è stata rilasciata la patente. Chi ha una patente italiana o UE/SEE non ne ha bisogno. Per le patenti extra UE/SEE, il Codice della Strada richiede in generale il permesso internazionale o una traduzione ufficiale insieme alla patente, ma gli accordi internazionali variano da Paese a Paese. Verifica con l'autorità che ha rilasciato la patente, con l'ambasciata o il consolato italiano e con la società di noleggio." },
    { question: "È difficile guidare in Italia?", answer: "Dipende da dove. Autostrade e strade extraurbane principali sono in genere semplici per chi ha esperienza. Traffico delle grandi città, ZTL, vie strette dei centri storici e strade tortuose di costa e montagna sono più impegnativi, soprattutto per chi non è abituato al cambio manuale." },
    { question: "Meglio noleggiare un'auto o viaggiare in treno?", answer: "Dipende dall'itinerario. Tra le grandi città il treno è di solito più comodo; per campagna, piccoli centri, montagna e isole l'auto è in genere più utile. Molti combinano i due mezzi." },
    { question: "Cos'è una ZTL?", answer: "Una ZTL (Zona a Traffico Limitato) è un'area, di solito un centro storico, in cui negli orari stabiliti possono entrare solo i veicoli autorizzati. Gli accessi sono quasi sempre controllati da telecamere, e l'ingresso senza autorizzazione comporta una multa." },
    { question: "Come si evitano le multe nelle ZTL?", answer: "Non entrando in una ZTL attiva senza autorizzazione. Controlla la ZTL e gli orari di ogni località prima di arrivare, fai attenzione ai cartelli e ai pannelli attivo/non attivo, non affidarti solo al navigatore e chiedi all'alloggio se si trova in una zona limitata e come organizzare l'accesso." },
    { question: "Le autostrade italiane sono a pagamento?", answer: "La maggior parte sì. Molte altre strade principali, e alcuni tratti autostradali, sono gratuiti." },
    { question: "Come funziona il pedaggio in autostrada?", answer: "Sulla maggior parte delle autostrade si ritira un biglietto all'ingresso e si paga al casello in uscita, in base alla distanza. Si sceglie la porta dal cartello: bianco per i contanti, blu per le carte, giallo solo per chi ha il Telepass o un dispositivo analogo." },
    { question: "Da che parte si guida in Italia?", answer: "A destra. Si sorpassa a sinistra e, sulle strade con più corsie nello stesso senso, si tiene la corsia libera più a destra, salvo per sorpassare." },
    { question: "È difficile parcheggiare nelle città italiane?", answer: "Spesso sì. I centri storici hanno pochi posti e molti sono riservati ai residenti; le ZTL limitano anche dove si può circolare. I parcheggi ai margini del centro sono di solito la soluzione più semplice. Segui la segnaletica locale, perché le regole cambiano da città a città." },
    { question: "Si può guidare a Roma?", answer: "Sì, ma per chi è in visita raramente conviene. Roma ha traffico intenso, diverse ZTL controllate da telecamere e parcheggi limitati. La maggior parte dei visitatori si muove a piedi e con i mezzi pubblici, e usa l'auto solo per uscire dalla città." },
    { question: "Si può entrare in auto nel centro storico di Firenze?", answer: "Non senza autorizzazione mentre la ZTL è attiva. Il centro storico di Firenze è una ZTL controllata da telecamere con orari pubblicati, e alcuni varchi sono sempre chiusi al traffico privato. Se l'albergo si trova all'interno, chiedi prima dell'arrivo come funziona l'accesso." },
    { question: "Si può guidare in Costiera Amalfitana?", answer: "Sì, ma va organizzato con cura. La strada costiera è stretta e trafficata, i parcheggi sono pochi e su una parte della strada, nei periodi di alta stagione, si applica un sistema a targhe alterne negli orari stabiliti. Controlla l'ordinanza ANAS in vigore e valuta traghetti e autobus." },
    { question: "Si trovano auto a noleggio con cambio automatico?", answer: "Sì, presso la maggior parte delle grandi società, ma di solito in numero minore rispetto alle manuali. Prenota per tempo e verifica che la conferma indichi il cambio automatico." },
    { question: "Quali documenti servono per noleggiare un'auto in Italia?", answer: "Di solito la patente valida, un documento d'identità o il passaporto e una carta di credito intestata al conducente principale per il deposito. A seconda di dove è stata rilasciata la patente, può servire anche il permesso internazionale di guida. Verifica le condizioni della società di noleggio." },
    { question: "Vale la pena guidare in Toscana?", answer: "Per la campagna spesso sì: con l'auto è molto più facile raggiungere borghi, cantine e agriturismi. Per Firenze, Pisa o Siena da sole non serve, e le ZTL rendono poco pratico entrare in auto nei loro centri." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "ACI — Codice della Strada, art. 135 (patenti estere)", url: "https://aci.gov.it/codice-della-strada/art-135/", note: "permesso internazionale o traduzione ufficiale" },
    { label: "ACI — Codice della Strada, art. 142 (limiti di velocità)", url: "https://aci.gov.it/codice-della-strada/art-142/", note: "limiti generali" },
    { label: "ACI — Codice della Strada, art. 152 (luci)", url: "https://aci.gov.it/codice-della-strada/art-152/", note: "anabbaglianti fuori dai centri abitati" },
    { label: "ACI — Codice della Strada, art. 162 (triangolo e giubbotto)", url: "https://aci.gov.it/codice-della-strada/art-162/", note: "dotazioni obbligatorie" },
    { label: "ACI — Codice della Strada, art. 172 (cinture e sistemi di ritenuta)", url: "https://aci.gov.it/codice-della-strada/art-172/", note: "bambini e dispositivi antiabbandono" },
    { label: "ACI — Codice della Strada, art. 173 (telefono)", url: "https://aci.gov.it/codice-della-strada/art-173/", note: "uso del telefono alla guida" },
    { label: "ACI — Codice della Strada, art. 186 (alcol)", url: "https://aci.gov.it/codice-della-strada/art-186/", note: "limiti per la guida" },
    { label: "ACI — Codice della Strada, art. 189 (incidenti)", url: "https://aci.gov.it/codice-della-strada/art-189/", note: "obbligo di fermarsi e prestare assistenza" },
    { label: "112 — Numero unico europeo di emergenza", url: "https://112.gov.it/", note: "numero di emergenza" },
    { label: "Autostrade per l'Italia — Metodi di pagamento", url: "https://www.autostrade.it/en/servizi-al-cliente/pedaggio/metodi-di-pagamento", note: "pedaggi e porte ai caselli" },
    { label: "Autostrade per l'Italia — Mancato pagamento", url: "https://www.autostrade.it/en/servizi-al-cliente/pedaggio/mancato-pagamento", note: "come saldare un pedaggio non pagato" },
    { label: "Comune di Firenze — Zone a Traffico Limitato", url: "https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html", note: "orari della ZTL di Firenze" },
    { label: "Roma Servizi per la Mobilità — ZTL", url: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/", note: "le ZTL di Roma" },
    { label: "ANAS — Limitazioni al transito sulla SS163 Amalfitana", url: "https://www.stradeanas.it/it/campania-limitazioni-al-transito-sulla-strada-statale-163-amalfitana", note: "regole sulla strada della Costiera" },
  ],
};
