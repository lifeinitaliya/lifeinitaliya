import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Articolo: "Traghetti in Italia" — edizione italiana, scritta in modo autonomo
// rispetto a quella inglese. Riguarda solo i collegamenti via mare e sui
// laghi; treni e scelta del mezzo sono nelle guide dedicate. Rotte, stagioni,
// porti, orari di presentazione (GNV, Moby), bagagli (Travelmar), servizi
// sullo Stretto (Caronte & Tourist, Blu Jet, Trenitalia), calendario 2026 dei
// battelli delle Cinque Terre e diritti UE dei passeggeri via mare verificati
// sui siti ufficiali a settembre 2026. Nessuna tariffa né orario.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const steps = (...items: [string, string][]): ContentBlock => ({ type: "steps", items: items.map(([title, text]) => ({ title, text })) });
const checklist = (id: string, ...groups: [string, string[]][]): ContentBlock => ({
  type: "checklist",
  id,
  groups: groups.map(([title, items]) => ({ title, items })),
});

const IMG = "/images/guides/ferries-in-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const traghettiInItalia: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Quando servono i traghetti in Italia?"),
    answer("**I traghetti contano ovunque ci sia di mezzo il mare, o un lago.** Sono il principale collegamento con le **isole siciliane**, la **Sardegna** e le isole del **Golfo di Napoli**; il modo per attraversare lo **Stretto di Messina**; un'alternativa panoramica alle strade costiere in **Costiera Amalfitana** e alle **Cinque Terre**; e un mezzo quotidiano sui laghi di **Como, Garda e Maggiore**. Si va dalle navi traghetto di venti minuti alle traversate notturne in cabina. Quasi tutti i servizi seguono orari stagionali, alcuni dipendono dal meteo e le regole cambiano da compagnia a compagnia: prima di contare su una partenza, verifica rotta, stagione e porto."),
    p("Il traghetto funziona diversamente dal treno. Su molte rotte operano più compagnie, ognuna con i propri biglietti; i porti possono essere lontani dal centro; chi viaggia con l'auto e chi a piedi si imbarcano in modo diverso; e il mare può cambiare i programmi. Questo articolo spiega come funzionano traghetti e battelli in Italia, zona per zona, e come organizzare una traversata. Per i treni c'è la guida su [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno); per scegliere il mezzo tra una città e l'altra, [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),

    // ——— 2 ———
    h2("I tipi di servizio"),
    p("\"Traghetto\" indica mezzi molto diversi, e i nomi cambiano da una zona all'altra. Conta soprattutto sapere se il servizio porta veicoli, quanto è veloce e quanto risente del mare mosso."),
    table(
      ["Servizio", "Che cos'è", "Veicoli?", "Da sapere"],
      [
        ["Traghetto (nave traghetto)", "Una nave per passeggeri e, di solito, veicoli", "Di solito sì", "Più lento ma più stabile; l'unico modo per portare l'auto"],
        ["Nave veloce / mezzo veloce", "Un'unità più rapida, spesso solo passeggeri", "A volte", "Più veloce, ma risente di più del mare mosso"],
        ["Aliscafo", "Un mezzo veloce per passeggeri che si solleva sulle ali", "No", "Diffuso nel Golfo di Napoli e verso le isole siciliane; può essere cancellato con il mare mosso"],
        ["Traghetto notturno", "Una grande nave per le rotte lunghe, con cabine o poltrone", "Sì", "Dalla penisola a Sardegna e Sicilia"],
        ["Vaporetto", "Il trasporto pubblico della laguna di Venezia", "No", "Fa parte della rete urbana, non è un traghetto di linea"],
        ["Taxi acqueo", "Una barca privata noleggiata per il tuo gruppo", "No", "Diretto e costoso"],
        ["Battelli e traghetti lacustri", "Battelli passeggeri e traghetti per auto sui laghi", "Solo sulle linee traghetto", "Biglietti e orari propri"],
        ["Battelli costieri", "Collegamenti stagionali tra paesi della costa", "No", "Orari e scali dipendono da stagione e mare"],
      ],
      "La terminologia cambia da compagnia a compagnia: controlla che cosa copre il biglietto.",
    ),

    // ——— 3 ———
    h2("Le principali zone dei traghetti"),
    table(
      ["Zona", "Collegamenti principali", "Servizi tipici", "Da sapere"],
      [
        ["Stretto di Messina", "Calabria ↔ Sicilia", "Traghetti per auto, mezzi veloci passeggeri, treni sul traghetto", "Traversate brevi e frequenti"],
        ["Isole minori siciliane", "Eolie, Egadi, Pelagie, Pantelleria, Ustica", "Aliscafi e traghetti", "Stagione e meteo incidono sui servizi"],
        ["Penisola ↔ Sicilia (rotte lunghe)", "Genova, Civitavecchia, Napoli, Salerno ↔ Sicilia", "Traghetti notturni", "D'estate cabine e posti auto si esauriscono"],
        ["Penisola ↔ Sardegna", "Genova, Livorno, Civitavecchia ↔ Olbia, Porto Torres e altri porti", "Traghetti diurni e notturni", "Alcune rotte sono stagionali"],
        ["Golfo di Napoli", "Napoli, Pozzuoli, Sorrento ↔ Capri, Ischia, Procida", "Aliscafi e traghetti", "Più porti e più terminal di partenza"],
        ["Costiera Amalfitana", "Salerno ↔ Amalfi, Positano e altri paesi", "Mezzi veloci", "Più linee in alta stagione"],
        ["Cinque Terre", "La Spezia e porti vicini ↔ i borghi", "Battelli stagionali", "Gli scali dipendono dal mare"],
        ["Venezia", "Laguna, isole e aeroporto", "Vaporetti, taxi acquei, collegamenti con l'aeroporto", "Trasporto pubblico più che traghetti"],
        ["Laghi del Nord", "Paesi di Como, Garda e Maggiore", "Battelli passeggeri e traghetti per auto", "Orari che cambiano con la stagione"],
      ],
    ),

    // ——— 4 ———
    h2("Dalla penisola alle isole: che cosa cambia"),
    p("Un viaggio verso un'isola richiede più organizzazione di un viaggio in treno. Non esiste un biglietto unico per tutta la rete, le partenze sono meno numerose, alcune rotte sono stagionali e il meteo può incidere sulla traversata. La scelta principale è se viaggiare con il veicolo."),
    table(
      ["", "A piedi", "Con il veicolo"],
      [
        ["Prenotazione", "Sulle rotte brevi spesso si compra a ridosso della partenza; in alta stagione conviene anticipare", "Da fare in anticipo, soprattutto d'estate: i posti auto sono limitati"],
        ["Check-in", "Di solito più semplice e più tardi", "Prima, con i dati del veicolo (targa, marca, modello)"],
        ["Imbarco", "A piedi, spesso da una passerella separata", "In auto sul garage della nave, seguendo le indicazioni dell'equipaggio"],
        ["Bagagli", "Li porti con te; lo spazio a bordo varia", "Restano in auto, ma durante la traversata di solito il garage è chiuso"],
        ["All'arrivo", "Serve un mezzo per lasciare il porto", "Si sbarca e si riparte"],
      ],
    ),
    p("Sulle rotte lunghe si sceglie anche tra poltrona e cabina, e tra traversata diurna e notturna. Le sezioni seguenti spiegano le zone principali."),

    // ——— 5 ———
    h2("Sicilia"),
    p("La Sicilia è la regione in cui i traghetti contano di più: per le traversate brevi, per le rotte lunghe e per le isole minori."),
    ul(
      "**Sullo Stretto di Messina** — Caronte & Tourist collega Villa San Giovanni e Messina (Rada San Francesco) con traghetti per auto e passeggeri; secondo la compagnia la traversata dura circa 20 minuti, con partenze ogni 40 minuti a qualsiasi ora. Blu Jet effettua con mezzi veloci il collegamento passeggeri tra Villa San Giovanni e Messina, con biglietti in vendita nei porti, sull'app MooneyGo e come servizio aggiuntivo ai biglietti Trenitalia e Italo.",
      "**Treno e nave** — gli Intercity di Trenitalia per la Sicilia attraversano lo Stretto sul traghetto: circa 30 minuti, durante i quali si può scendere dal treno e salire sul ponte.",
      "**Da Reggio Calabria** — Blu Jet non effettua più il collegamento Reggio Calabria–Messina, sospeso nel 2023: se parti da Reggio, verifica le alternative attuali.",
      "**Rotte lunghe** — traghetti notturni collegano la Sicilia alla penisola: GNV va a Palermo da Genova, Civitavecchia e Napoli, Tirrenia effettua la Napoli–Palermo e Caronte & Tourist la Salerno–Messina.",
      "**Isole minori** — Liberty Lines collega con gli aliscafi le Eolie (da Milazzo e da altri porti), le Egadi (da Trapani), Ustica, Pantelleria e le Pelagie; diverse isole sono servite anche da traghetti.",
    ),
    {
      type: "image",
      src: "/images/guides/getting-between-italian-cities/messina-strait-ferry.webp",
      alt: "Un aliscafo bianco che attraversa acque blu verso l'obiettivo, con la città di Messina e le colline alle spalle",
      caption: "Un mezzo veloce sullo Stretto di Messina, tra Calabria e Sicilia.",
      credit: unsplash("Giuseppe Famiani", "gieffe22"),
    },
    p("Gli aliscafi per le isole risentono di vento e mare: a fine settembre 2026, per esempio, la stessa homepage di Liberty Lines segnalava corse sospese in giornata. Controlla gli avvisi della compagnia prima di andare al porto. Per l'arrivo a Palermo, vedi [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta); per cosa mangiare sull'isola, le [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),

    // ——— 6 ———
    h2("Sardegna"),
    p("La Sardegna è più lontana dalla costa, quindi le traversate sono lunghe: diverse ore di giorno, oppure una notte."),
    ul(
      "**Porti principali sulla penisola** — Genova, Livorno e Civitavecchia. GNV e Tirrenia collegano Genova con Olbia e Porto Torres e Civitavecchia con Olbia; Moby effettua la Livorno–Olbia, che indica come attiva tutto l'anno.",
      "**Rotte stagionali** — non tutto funziona tutto l'anno: la Genova–Olbia di GNV è attiva da maggio a ottobre, quella di Moby dal 23 maggio al 1° novembre 2026.",
      "**Quale porto?** — non esiste un porto migliore per tutti: dipende da dove parti e da dove sei diretto sull'isola.",
      "**Cabine** — nelle traversate notturne di solito si sceglie tra cabina e poltrona; le cabine sono poche e d'estate finiscono presto.",
      "**Veicoli** — la maggior parte dei viaggiatori porta o noleggia un'auto, perché fuori dai centri i mezzi pubblici sono limitati. Per luglio e agosto prenota il posto auto con largo anticipo.",
    ),
    {
      type: "image",
      src: `${IMG}/genoa-port-ferries.webp`,
      alt: "Il porto di Genova con traghetti e una nave da crociera ormeggiati davanti ai grattacieli e alle colline della città",
      caption: "Il porto di Genova, uno dei principali punti di partenza per Sardegna e Sicilia.",
      credit: unsplash("Nikolai Kolosov", "nikolaikolosov"),
    },

    // ——— 7 ———
    h2("Napoli e le isole del Golfo"),
    p("Capri, Ischia e Procida si raggiungono da Napoli e, in parte, da altri porti vicini. Più compagnie gestiscono aliscafi e traghetti, e partono da terminal diversi: a Napoli ce n'è più d'uno."),
    table(
      ["Destinazione", "Porti di partenza più comuni", "Mezzi", "Stagionalità"],
      [
        ["Capri", "Napoli; Sorrento; alcune corse da Castellammare e dalle isole", "Aliscafi e traghetti", "SNAV e Caremar garantiscono collegamenti tutto l'anno; più corse d'estate"],
        ["Ischia", "Napoli; Pozzuoli; Procida", "Aliscafi e traghetti, anche per auto", "Si arriva a Ischia Porto e a Casamicciola"],
        ["Procida", "Napoli; Pozzuoli; Ischia", "Aliscafi e traghetti", "Le navi Caremar arrivano a Marina Grande"],
      ],
      "Controlla sul biglietto il terminal esatto di partenza.",
    ),
    ul(
      "**I terminal di Napoli** — secondo Caremar, i suoi traghetti per Procida partono da Calata Porta di Massa e gli aliscafi dal Molo Beverello; SNAV usa la Stazione Marittima al Molo Angioino. Sono vicini, sullo stesso tratto di porto, ma non coincidono.",
      "**Collegamenti tutto l'anno** — Caremar indica collegamenti giornalieri tutto l'anno tra Napoli, Pozzuoli, Sorrento, Capri, Ischia, Casamicciola e Procida; SNAV effettua la Napoli–Capri in aliscafo ogni giorno, tutto l'anno.",
      "**Meteo** — con il mare mosso gli aliscafi vengono cancellati più facilmente dei traghetti.",
      "**Veicoli** — sulle isole piccole la circolazione delle auto dei non residenti è spesso limitata: verifica le regole in vigore prima di imbarcarne una.",
    ),
    {
      type: "image",
      src: `${IMG}/capri-marina-grande.webp`,
      alt: "Il porto di Marina Grande a Capri, con barche, case colorate e ripide pareti di roccia calcarea",
      caption: "Marina Grande, il porto principale di Capri, dove arrivano traghetti e aliscafi.",
      credit: unsplash("Jordi Vich Navarro", "jvich"),
    },
    {
      type: "image",
      src: `${IMG}/ischia-ferry-wake.webp`,
      alt: "La scia bianca di un traghetto che lascia il porto di Ischia, con le colline verdi e il lungomare alle spalle",
      caption: "Si lascia Ischia Porto sul traghetto per Napoli.",
      credit: unsplash("Arno Senoner", "arnosenoner"),
    },
    p("La nostra guida a [Napoli](/it/citta/napoli-per-la-prima-volta) spiega come la zona del porto si collega al resto della città."),

    // ——— 8 ———
    h2("La Costiera Amalfitana via mare"),
    p("In Costiera la barca è spesso il modo più piacevole per passare da un paese all'altro: la statale è stretta, tortuosa e d'estate molto trafficata, e i panorami più famosi sono quelli dal mare. Il battello non è sempre più veloce dell'autobus, ma evita il traffico."),
    ul(
      "**Scali** — i mezzi veloci di Travelmar collegano Salerno, Vietri sul Mare, Cetara, Maiori, Minori, Atrani, Amalfi, Praiano e Positano; altre compagnie effettuano servizi lungo la costa e verso Capri.",
      "**Stagione** — Travelmar indica un servizio attivo tutto l'anno, con più linee e partenze in alta stagione. Gli orari cambiano nel corso dell'anno: non dare per scontato che ogni tratta sia attiva ogni giorno.",
      "**Bagagli** — Travelmar include nel biglietto un bagaglio a mano fino a 45 × 35 × 20 cm; per valigie più grandi verifica le regole.",
      "**Moli** — si attracca a piccoli pontili, come quello della spiaggia di Positano e il porto di Amalfi, spesso con gradini per salire in paese.",
    ),

    // ——— 9 ———
    h2("Le Cinque Terre in battello"),
    p("I battelli stagionali collegano le Cinque Terre con La Spezia e il Golfo dei Poeti, e offrono la vista dei borghi dal mare."),
    ul(
      "**Stagione** — nel 2026 la linea Cinque Terre di Navigazione Golfo dei Poeti è attiva dal 28 marzo al 1° novembre, in più periodi con orari diversi. Fuori stagione, un \"Cinque Terre Trip\" ridotto viaggia in date prestabilite a marzo e da novembre a inizio dicembre.",
      "**Scali** — La Spezia, Lerici, Levanto, Porto Venere, Riomaggiore, Manarola, Vernazza e Monterosso. Corniglia, in alto sulla scogliera, non è tra questi.",
      "**Mare** — la compagnia precisa che gli scali attivi dipendono dal periodo dell'anno e dalle condizioni meteo-marine del giorno.",
      "**Alternativa** — il treno regionale lungo la costa funziona tutto l'anno.",
    ),
    {
      type: "image",
      src: `${IMG}/manarola-boat.webp`,
      alt: "Le case colorate di Manarola su un promontorio roccioso sopra il mare blu, con una barca al largo",
      caption: "Manarola dall'alto, con una barca lungo la costa.",
      credit: unsplash("Oscar Se balade", "oscar_se_balade"),
    },

    // ——— 10 ———
    h2("Venezia: vaporetti, taxi acquei e collegamenti con l'aeroporto"),
    p("A Venezia le barche sono trasporto pubblico più che traghetti in senso stretto."),
    ul(
      "**Vaporetti** — i battelli ACTV percorrono il Canal Grande e raggiungono le isole con i biglietti del trasporto pubblico cittadino.",
      "**Taxi acquei** — barche private noleggiate per il tuo gruppo; dirette, con prezzi di conseguenza.",
      "**Dall'aeroporto** — l'Alilaguna collega il Marco Polo con il centro storico, Murano e il Lido; vedi la guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia).",
      "**Traghetti** — a Venezia la parola indica anche le gondole che attraversano il Canal Grande in pochi punti.",
    ),
    {
      type: "image",
      src: `${IMG}/venice-vaporetto-grand-canal.webp`,
      alt: "Un vaporetto sul Canal Grande a Venezia, accanto a un pontile e ai palazzi affacciati sull'acqua",
      caption: "Un vaporetto sul Canal Grande: a Venezia la barca è il mezzo di tutti i giorni.",
      credit: unsplash("Henri Picot", "henrip"),
    },
    p("La nostra guida a [Venezia](/it/citta/venezia-per-la-prima-volta) spiega la rete dei vaporetti."),

    // ——— 11 ———
    h2("Battelli e traghetti sui laghi"),
    p("Sui laghi del Nord i battelli fanno parte del trasporto locale, ma sono servizi lacustri, su acque calme e con biglietti propri: non vanno confusi con i traghetti di mare."),
    ul(
      "**Chi li gestisce** — Navigazione Laghi effettua i servizi pubblici sul Lago Maggiore, sul Garda e sul Lago di Como.",
      "**Battelli passeggeri** — battelli e servizi rapidi collegano i paesi lungo le sponde, con orari che cambiano con la stagione.",
      "**Traghetti per auto** — solo su alcune tratte, come tra Cadenabbia, Bellagio, Menaggio e Varenna sul Lago di Como, la Maderno–Torri sul Garda e la Intra–Laveno sul Maggiore. La compagnia pubblica avvisi quando i servizi sono limitati: a settembre 2026, per esempio, su alcune corse Maderno–Torri non erano ammessi autobus e autocarri.",
      "**Biglietti** — alle biglietterie sul lago, sull'app della compagnia o, negli scali minori, a bordo.",
    ),
    {
      type: "image",
      src: `${IMG}/lake-garda-ferry-limone.webp`,
      alt: "Un battello bianco per passeggeri sul Lago di Garda vicino a Limone, con le montagne nella foschia",
      caption: "Un battello sul Garda vicino a Limone: sui laghi biglietti e orari sono propri.",
      credit: unsplash("Sebastian Marx", "samx"),
    },
    p("Per il Lago di Como nel dettaglio, vedi [il Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend)."),

    // ——— 12 ———
    h2("Bisogna prenotare?"),
    p("Dipende da rotta, stagione e compagnia, e dal fatto che tu viaggi con un veicolo o voglia una cabina."),
    ul(
      "**A piedi sulle rotte brevi** — fuori dai periodi di punta spesso si compra a ridosso della partenza; d'estate e nei fine settimana conviene prenotare o comprare presto in giornata.",
      "**Con il veicolo** — prenota in anticipo, soprattutto d'estate e sulle rotte lunghe.",
      "**Traversate notturne e cabine** — prenota presto per l'estate e i periodi festivi.",
      "**Picchi festivi** — agosto, Pasqua e i ponti riempiono in fretta le rotte per le isole.",
      "**Servizi stagionali** — verifica che la linea sia attiva prima di prenotare tutto il resto.",
    ),

    // ——— 13 ———
    h2("Con quanto anticipo arrivare al porto?"),
    p("Una regola unica non esiste: dipende dalla compagnia, dal porto, dalla rotta e dal veicolo. Le compagnie pubblicano le proprie indicazioni, e mancare il check-in può voler dire perdere il posto."),
    ul(
      "**GNV** — secondo le FAQ della compagnia, per i viaggi nazionali e verso la Spagna il check-in è due ore prima della partenza per chi viaggia con un veicolo e un'ora prima per chi viaggia senza.",
      "**Moby** — i tempi cambiano con il porto e la stagione: a Livorno, Civitavecchia e Olbia, per esempio, da giugno a settembre chiede ai passeggeri senza veicolo di presentarsi almeno un'ora prima e a chi ha il veicolo entro 90 minuti dalla partenza.",
      "**Traversate brevi e aliscafi** — di solito i tempi sono più stretti, ma d'estate code e ritiro dei biglietti richiedono tempo.",
    ),
    important("Vale l'orario indicato sul tuo biglietto o sul sito della compagnia, non una regola generica.", "Decide il biglietto"),

    // ——— 14 ———
    h2("Imbarcare l'auto"),
    ul(
      "**Prenota il veicolo** — con categoria, lunghezza e altezza se richieste: furgoni, camper, box sul tetto e rimorchi cambiano tariffa e spazio necessario.",
      "**Dati del veicolo** — targa, marca e modello vengono chiesti alla prenotazione o al check-in.",
      "**Check-in** — prima di chi viaggia a piedi; tieni pronti biglietto, documenti e libretto di circolazione.",
      "**Imbarco** — si sale quando indicato; l'equipaggio sistema i veicoli molto vicini. Porta con te ciò che ti serve per la traversata.",
      "**Durante il viaggio** — di solito i garage sono chiusi ai passeggeri.",
      "**Sbarco** — torna all'auto quando viene annunciato e segui l'ordine indicato dall'equipaggio.",
    ),
    p("Una volta arrivati, valgono le regole della strada: vedi [guidare in Italia](/it/guide/guidare-in-italia), soprattutto per le ZTL delle località costiere e delle isole."),

    // ——— 15 ———
    h2("Viaggiare a piedi"),
    p("Per Capri, Ischia, Procida, la Costiera Amalfitana, le Cinque Terre e i laghi, viaggiare senza auto è di solito la soluzione più semplice."),
    ul(
      "**Imbarco** — a piedi dalla passerella, mostrando il biglietto.",
      "**Bagagli** — li porti tu; sui mezzi affollati lo spazio vicino all'ingresso finisce presto.",
      "**Arrivare al porto** — verifica distanza a piedi, bus o taxi dall'albergo o dalla stazione.",
      "**All'arrivo** — organizza autobus, funicolare o taxi, e ricorda che sulle isole piccole i taxi scarseggiano nei momenti di punta.",
    ),

    // ——— 16 ———
    h2("I traghetti notturni"),
    ul(
      "**Sistemazioni** — a seconda della nave, si sceglie tra poltrone (a volte reclinabili), cabine condivise o private e altre soluzioni; non tutte le navi le offrono tutte.",
      "**Dormire** — sulle traversate lunghe la cabina è la scelta comoda; porta in una borsa piccola ciò che serve per la notte.",
      "**Pasti** — sulle navi grandi di solito ci sono ristorante o bar, ma verifica che cosa è disponibile a bordo.",
      "**Arrivo** — gli arrivi all'alba sono frequenti: se viaggi a piedi, organizza come lasciare il porto.",
      "**Veicoli** — di norma non si può tornare in garage durante la traversata.",
    ),

    // ——— 17 ———
    h2("Bagagli"),
    p("Le regole sui bagagli cambiano da compagnia a compagnia e da nave a nave. Sui traghetti grandi di solito si viaggia con bagagli normali, a volte con aree di deposito; sui mezzi veloci piccoli lo spazio è ridotto e alcune compagnie fissano limiti — Travelmar, per esempio, include un bagaglio a mano fino a 45 × 35 × 20 cm. Con il veicolo, la maggior parte dei bagagli resta in auto. Segnala in anticipo biciclette, tavole da surf, passeggini o ausili per la mobilità."),

    // ——— 18 ———
    h2("Il biglietto: che cosa controllare"),
    ul(
      "**Nomi dei passeggeri** — alcune compagnie li chiedono per ognuno.",
      "**Tratta, data e ora** — direzione e giorno giusti.",
      "**Porti di partenza e arrivo** — e il terminal all'interno del porto.",
      "**Dati del veicolo** — targa, categoria e dimensioni.",
      "**Cabina o poltrona** — che cosa è incluso.",
      "**Condizioni di cambio e annullamento** — e che cosa succede se la corsa viene cancellata dalla compagnia.",
      "**Istruzioni per l'imbarco** — orario di presentazione e dove andare.",
    ),
    p("Quando possibile, compra sul sito, sull'app o alla biglietteria portuale della compagnia: cambi e disservizi si gestiscono più facilmente. I sistemi di biglietteria cambiano da una compagnia all'altra, e i servizi locali — come i vaporetti di Venezia o i battelli dei laghi — hanno biglietti propri."),

    // ——— 19 ———
    h2("Arrivare al porto"),
    p("Il porto fa parte del viaggio. Prima di partire verifica il terminal e l'ingresso esatti, come ci arriverai — a piedi, in autobus, in treno o in taxi — e, se sei in auto, l'accesso per i veicoli ed eventuali parcheggi. I grandi porti come Napoli e Genova hanno più terminal, e nei paesi piccoli compagnie diverse possono usare moli diversi."),
    {
      type: "image",
      src: `${IMG}/procida-corricella.webp`,
      alt: "Le case colorate della Corricella, a Procida, disposte intorno a un piccolo porto pieno di barche",
      caption: "La Corricella, a Procida. Traghetti e aliscafi arrivano al porto principale dell'isola, Marina Grande.",
      credit: unsplash("Kentaro Komada", "kenta_k"),
    },

    // ——— 20 ———
    h2("Meteo e cancellazioni"),
    p("Il mare può ritardare o cancellare le corse, soprattutto quelle di mezzi veloci e aliscafi, che risentono di vento e onde più delle grandi navi. Le compagnie pubblicano gli avvisi sul sito, sulle app e nei porti. Controlla la mattina della partenza e di nuovo prima di uscire per il porto, ed evita coincidenze strette — con un volo, per esempio — subito dopo una traversata verso un'isola."),
    p("Le regole UE sui diritti dei passeggeri via mare valgono per la maggior parte dei traghetti e stabiliscono che cosa ti spetta in caso di cancellazione o ritardo. Non coprono ogni imbarcazione — sono escluse le navi molto piccole, le traversate molto brevi e alcune escursioni — quindi verifica anche le condizioni della compagnia."),
    tip("Se la gita su un'isola è il momento clou del viaggio, tieni un giorno di riserva nel caso il meteo cancelli la prima scelta.", "Un margine"),

    // ——— 21 ———
    h2("Accessibilità"),
    p("Secondo le regole UE, le persone con disabilità o mobilità ridotta hanno diritto ad assistenza gratuita per salire e scendere dalle navi e nei porti. Per essere sicuri che sia garantita, bisogna avvisare il vettore, il venditore del biglietto o il tour operator **almeno 48 ore prima del viaggio**, spiegando di che tipo di aiuto si ha bisogno. Le dotazioni cambiano da nave a nave e da porto a porto: i traghetti grandi hanno spesso ascensori e cabine accessibili, mentre mezzi piccoli e pontili possono avere gradini e passerelle. Chiedi alla compagnia informazioni sulla nave e sul porto specifici, sui posti per sedia a rotelle e sulle soluzioni per il veicolo."),

    // ——— 22 ———
    h2("In viaggio con i bambini"),
    ul(
      "**Biglietti ridotti** — quasi tutte le compagnie prevedono riduzioni per i bambini, con fasce d'età e regole per i più piccoli diverse da una all'altra: verifica alla prenotazione.",
      "**Posti** — sui mezzi affollati sali presto per sederti vicino.",
      "**Passeggini** — meglio compatti e pieghevoli, per passerelle e mezzi piccoli.",
      "**Con l'auto** — con bambini piccoli e molti bagagli, sulle traversate lunghe portare l'auto può semplificare.",
      "**Mal di mare** — un posto più tranquillo e una nave più stabile aiutano (vedi sotto).",
    ),

    // ——— 23 ———
    h2("Mal di mare e comfort"),
    ul(
      "Controlla le previsioni del mare e, se puoi, con il mare mosso scegli un traghetto grande e lento.",
      "Siediti dove il movimento si sente meno, di solito in basso e verso il centro della nave.",
      "Porta acqua, e non viaggiare a stomaco vuoto o di corsa.",
      "Tieni del tempo in più: un ritardo o una cancellazione si gestiscono meglio senza fretta.",
      "Segui le istruzioni di sicurezza dell'equipaggio e resta seduto sui mezzi veloci quando richiesto.",
    ),
    p("Se soffri il mal di mare, chiedi consiglio al farmacista o al medico prima di partire."),

    // ——— 24 ———
    h2("Traghetto, treno o auto?"),
    table(
      ["Mezzo", "Adatto a", "Vantaggio principale", "Limite principale"],
      [
        ["Traghetto", "Isole, brevi tratti di costa, laghi", "Spesso l'unico collegamento; panoramico", "Orari stagionali; meteo"],
        ["Treno", "Tra città sulla terraferma", "Frequente, centrale, prevedibile", "Non raggiunge le isole, salvo la Sicilia con il treno sul traghetto"],
        ["Auto", "Zone rurali e isole grandi come Sardegna e Sicilia", "Libertà di movimento", "Costo del posto auto in nave; ZTL; parcheggi"],
      ],
    ),
    p("La scelta dipende dalla destinazione. Per il resto della rete vedi [come viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno), [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane), [guidare in Italia](/it/guide/guidare-in-italia) e i [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia)."),

    // ——— 25 ———
    h2("Esempi di traversate"),
    table(
      ["Tratta", "Servizio tipico", "Da sapere"],
      [
        ["Napoli → Capri", "Aliscafi e traghetti, tutto l'anno", "Controlla il terminal di Napoli sul biglietto"],
        ["Napoli → Ischia", "Aliscafi e traghetti, anche per auto", "Più porti sull'isola"],
        ["Napoli → Procida", "Aliscafi e traghetti", "Si arriva a Marina Grande"],
        ["Salerno → Amalfi / Positano", "Mezzi veloci", "Più partenze in alta stagione"],
        ["Villa San Giovanni → Messina", "Traghetti per auto e mezzi veloci passeggeri", "Traversate brevi e frequenti"],
        ["Genova, Livorno o Civitavecchia → Sardegna", "Traghetti diurni e notturni", "Alcune rotte sono stagionali"],
        ["Genova, Civitavecchia o Napoli → Palermo", "Traghetti notturni", "D'estate le cabine finiscono presto"],
        ["Milazzo → Eolie", "Aliscafi e traghetti", "Il meteo può cancellare gli aliscafi"],
        ["Bellagio ↔ Varenna, Lago di Como", "Battelli e traghetti per auto", "Biglietti del lago"],
      ],
      "Rotte verificate sui siti delle compagnie a settembre 2026. Controlla gli orari per la tua data.",
    ),

    // ——— 26 ———
    h2("Organizzare una giornata in traghetto"),
    steps(
      ["Controlla la rotta", "Quali compagnie la effettuano e da quali porti."],
      ["Verifica il porto", "E il terminal o il molo esatto."],
      ["Controlla la stagione", "La linea è attiva nella tua data?"],
      ["Controlla le corse", "Gli orari del giorno, compreso il ritorno."],
      ["Prenota se serve", "Prima veicoli, cabine e date di punta."],
      ["Verifica i requisiti", "Nomi dei passeggeri, dati del veicolo, orario di presentazione."],
      ["Organizza l'arrivo", "Come e quando raggiungerai il porto."],
      ["Controlla meteo e avvisi", "La mattina del viaggio."],
      ["Tieni flessibile il dopo", "Soprattutto voli e treni dopo una traversata."],
      ["Salva i contatti", "Il numero della compagnia e il codice di prenotazione."],
    ),

    // ——— 27 ———
    h2("Gli errori più comuni"),
    ul(
      "**Andare al porto o al terminal sbagliato** — solo a Napoli ce ne sono diversi.",
      "**Confondere servizi per passeggeri e per veicoli** — gli aliscafi non portano auto.",
      "**Pensare che una linea stagionale funzioni tutto l'anno.**",
      "**Arrivare tardi** al check-in, soprattutto con il veicolo.",
      "**Trascurare le procedure di imbarco del veicolo.**",
      "**Sbagliare data** — le traversate notturne arrivano il giorno dopo.",
      "**Non leggere le condizioni di annullamento.**",
      "**Credere che ogni mezzo parta con il maltempo.**",
      "**Non controllare il ritorno** — l'ultima corsa può essere presto.",
      "**Fidarsi di orari vecchi trovati sui blog.**",
      "**Dimenticare che i servizi locali hanno biglietti propri** — vaporetti di Venezia e battelli dei laghi compresi.",
    ),

    // ——— 28 ———
    h2("Checklist per la traversata"),
    p("Spunta le voci man mano: i progressi restano salvati su questo dispositivo."),
    checklist(
      "italia-traghetti",
      ["Rotta e prenotazione", ["Rotta e compagnia scelte", "Porto e terminal di partenza verificati", "Linea attiva nella tua data", "Ritorno verificato", "Biglietto prenotato, se serve"]],
      ["Prima del giorno", ["Nomi dei passeggeri e dati del veicolo inseriti", "Orario di presentazione annotato", "Bagagli e oggetti particolari segnalati", "Assistenza richiesta 48 ore prima, se serve"]],
      ["Il giorno della partenza", ["Meteo e avvisi controllati", "Percorso fino al porto organizzato", "Mezzi dopo lo sbarco organizzati", "Numero della compagnia salvato"]],
    ),
    p("Rotte, stagioni e regole di questo articolo sono state verificate sui siti delle compagnie e delle autorità a settembre 2026. Cambiano ogni stagione: controlla sempre la compagnia per la tua data. Per il resto dell'organizzazione, vedi la [checklist per un viaggio in Italia](/it/guide/checklist-viaggio-italia), [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia) e la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "I traghetti sono un buon modo per girare l'Italia?", answer: "Per isole, alcuni tratti di costa e laghi sì, spesso sono l'unico collegamento. Tra le città della penisola il treno è di solito più pratico." },
    { question: "Bisogna prenotare i traghetti in anticipo?", answer: "Dipende. Veicoli, cabine e partenze estive o festive vanno prenotati; a piedi, sulle rotte brevi e fuori dai periodi di punta, spesso si può comprare a ridosso della partenza." },
    { question: "Si può portare l'auto sul traghetto?", answer: "Sulle navi traghetto sì, prenotando il posto auto. Aliscafi e quasi tutti i mezzi veloci non portano veicoli, e alcune isole piccole limitano le auto dei non residenti." },
    { question: "Quali isole si raggiungono in traghetto?", answer: "Sicilia e Sardegna, le isole del Golfo di Napoli (Capri, Ischia, Procida), le isole minori siciliane come Eolie ed Egadi e molte altre." },
    { question: "Come si va da Napoli a Capri?", answer: "In aliscafo o traghetto da Napoli; SNAV e Caremar viaggiano tutto l'anno. Controlla da quale terminal di Napoli parte il tuo biglietto. Ci sono corse anche da Sorrento." },
    { question: "C'è il traghetto da Napoli per Ischia?", answer: "Sì: aliscafi e traghetti, anche per auto, partono da Napoli, e anche da Pozzuoli e Procida." },
    { question: "Come si va dalla Sicilia al continente?", answer: "Attraverso lo Stretto di Messina con i traghetti per auto o i mezzi veloci da Villa San Giovanni, con gli Intercity sul traghetto ferroviario, oppure con i traghetti notturni da porti come Genova, Civitavecchia e Napoli." },
    { question: "Come si arriva in Sardegna in traghetto?", answer: "Da Genova, Livorno o Civitavecchia verso porti come Olbia e Porto Torres, di giorno o di notte. Alcune rotte sono stagionali: controlla le date." },
    { question: "I traghetti in Costiera Amalfitana funzionano tutto l'anno?", answer: "Travelmar indica un servizio attivo tutto l'anno, con più linee e partenze in alta stagione. Non tutte le tratte sono attive ogni giorno: controlla gli orari." },
    { question: "I traghetti partono con il maltempo?", answer: "Non sempre. Con il mare mosso le corse possono essere ritardate o cancellate, soprattutto aliscafi e mezzi veloci. Controlla gli avvisi della compagnia in giornata." },
    { question: "Con quanto anticipo arrivare al porto?", answer: "Dipende da compagnia e porto. GNV chiede due ore con il veicolo e un'ora senza sulle rotte nazionali; vale l'orario indicato sul tuo biglietto." },
    { question: "Si può viaggiare a piedi?", answer: "Sì, praticamente su tutte le rotte. Per Capri, Ischia, Procida, la Costiera Amalfitana e i laghi è di solito la soluzione più semplice." },
    { question: "I traghetti sono accessibili in sedia a rotelle?", answer: "Le regole UE garantiscono assistenza gratuita alle persone con mobilità ridotta; avvisa la compagnia almeno 48 ore prima. Le dotazioni cambiano da nave a nave e da porto a porto." },
    { question: "I traghetti sui laghi sono come quelli di mare?", answer: "No. Sui laghi si viaggia su acque calme, con biglietti e orari propri; solo alcune tratte trasportano auto." },
  ],

  sourcesTitle: "Fonti ufficiali",
  sources: [
    { label: "Caronte & Tourist — Stretto di Messina (in inglese)", url: "https://www.carontetourist.it/en/strait-messina", note: "traghetti Villa San Giovanni–Messina" },
    { label: "Blu Jet", url: "https://www.blujetlines.it/", note: "mezzi veloci sullo Stretto" },
    { label: "Trenitalia — raggiungi la Sicilia in treno", url: "https://www.trenitalia.com/it/intercity/collegamenti/raggiungi-la-sicilia-in-treno.html", note: "Intercity e traghettamento" },
    { label: "Liberty Lines — destinazioni (in inglese)", url: "https://www.libertylines.it/en/destinations/", note: "aliscafi per le isole siciliane" },
    { label: "GNV — traghetti per la Sardegna", url: "https://www.gnv.it/it/destinazioni-traghetti/sardegna", note: "rotte e stagionalità" },
    { label: "GNV — FAQ imbarco e check-in (in inglese)", url: "https://www.gnv.it/en/assistence/faq/embarking-and-check-in", note: "orari di check-in" },
    { label: "Moby — Livorno–Olbia", url: "https://www.moby.it/rotte/traghetti-sardegna/livorno-olbia-livorno/", note: "rotta e stagione" },
    { label: "Moby — check-in", url: "https://www.moby.it/partenza/prepararsi-allimbarco/check-in/", note: "orari di presentazione per porto" },
    { label: "Tirrenia", url: "https://www.tirrenia.it/", note: "rotte per Sardegna e Sicilia" },
    { label: "Caremar", url: "https://mobile.caremar.it/it/idee-di-viaggio/ischia-procida/", note: "porti del Golfo di Napoli" },
    { label: "SNAV — Napoli–Capri (in inglese)", url: "https://www.snav.it/en/destinations/capri-e-sorrento-2/napoli-capri", note: "aliscafi" },
    { label: "Travelmar", url: "https://www.travelmar.it/it/orari", note: "mezzi veloci in Costiera Amalfitana" },
    { label: "Navigazione Golfo dei Poeti — calendario 2026", url: "https://blog.navigazionegolfodeipoeti.it/calendario-di-servizio-2026/", note: "battelli delle Cinque Terre" },
    { label: "Navigazione Laghi", url: "https://www.navigazionelaghi.it/", note: "laghi Maggiore, Garda e Como" },
    { label: "La tua Europa — diritti dei passeggeri via mare", url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/ship/index_it.htm", note: "ritardi, cancellazioni e ambito" },
    { label: "La tua Europa — passeggeri a mobilità ridotta", url: "https://europa.eu/youreurope/citizens/travel/transport-disability/reduced-mobility/index_it.htm", note: "assistenza e preavviso" },
  ],
};
