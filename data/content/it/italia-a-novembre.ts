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

const IMG = "/images/travel/italy-in-november";

export const italiaANovembre: ArticleContent = {
  body: [
    answer("**Novembre è uno dei mesi migliori per visitare l'Italia, specialmente le città d'arte.** Le folle estive sono scomparse, i prezzi degli alberghi sono ai minimi stagionali, e i musei si visitano senza code. Il mese coincide con il picco della stagione del tartufo bianco in Piemonte e nelle Marche — un motivo in più per pianificare un viaggio. L'unico compromesso: giornate più corte, temperature più fresche e, in molte zone, un mese statisticamente tra i più piovosi dell'anno."),

    {
      type: "facts",
      title: "L'Italia a novembre in sintesi",
      rows: [
        { label: "Temperature", value: "Alpi 0–5 °C / Milano e Torino 7–13 °C / Roma 11–17 °C / Napoli 14–19 °C / Palermo 15–20 °C" },
        { label: "Precipitazioni", value: "Uno dei mesi più piovosi al centro-nord; il sud è più asciutto ma non privo di piogge" },
        { label: "Ore di luce", value: "Circa 10 ore a inizio mese, scendono a circa 9,5 ore a fine novembre" },
        { label: "Turisti", value: "Bassa stagione — i principali siti culturali sono molto meno affollati rispetto a primavera ed estate" },
        { label: "Esperienza consigliata", value: "Stagione del tartufo bianco ad Alba (Piemonte) e Acqualagna (Marche) — eventi confermati per tutto novembre" },
        { label: "Principali eventi confermati", value: "Fiera del Tartufo Bianco d'Alba, Fiera del Tartufo di Acqualagna, Fieracavalli Verona, Bagna Cauda Day, Torino Film Festival, apertura stagione Teatro dell'Opera di Roma" },
        { label: "Mercatini di Natale", value: "I primi in Italia aprono a fine novembre: Trento il 20 novembre, Aosta il 21 novembre" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Vale la pena visitare l'Italia a novembre?",
        "Il meteo in Italia a novembre",
        "Le mete migliori a novembre",
        "Gli eventi confermati di novembre 2026",
        "La stagione del tartufo bianco",
        "La cucina di novembre",
        "Cosa mettere in valigia",
        "Come spostarsi",
        "Idee di itinerario",
      ],
    },

    image("rome-skyline-november", "I tetti e le cupole di Roma sotto un cielo autunnale, con San Pietro sullo sfondo", true),

    h2("Vale la pena visitare l'Italia a novembre?"),
    p("Per chi viaggia per cultura, arte e gastronomia, novembre è uno dei mesi più soddisfacenti dell'anno. Il Colosseo, gli Uffizi e la Cappella Sistina si visitano con una tranquillità impossibile in luglio o agosto. Gli alberghi applicano tariffe di bassa stagione, e i ristoranti — nelle città d'arte soprattutto — tornano a essere frequentati da italiani più che da turisti."),
    p("Il mese coincide con il picco della raccolta dell'olio d'oliva, la stagione delle castagne e del tartufo bianco, e l'apertura delle nuove annate di Barolo, Brunello di Montalcino e degli altri grandi vini rossi italiani. I menù di novembre sono tra i più ricchi dell'anno."),
    p("Gli aspetti meno favorevoli sono reali ma gestibili: giornate corte dopo il cambio dell'ora (ultima domenica di ottobre), piogge frequenti al centro-nord, e qualche struttura costiera chiusa per la stagione. Per chi preferisce camminare all'aperto o andare in spiaggia, novembre non è il periodo ideale. Per chi privilegia musei, enoteche e mercati alimentari, invece, è quasi perfetto. Per un confronto sistematico mese per mese, la [guida sul momento migliore per visitare l'Italia](/it/viaggi/quando-andare-in-italia) offre tutti i dettagli."),

    h2("Il meteo in Italia a novembre"),
    p("L'Italia abbraccia dieci gradi di latitudine dalle Alpi alla punta della Sicilia. Le condizioni di novembre variano enormemente da nord a sud. I dati qui sotto sono medie climatiche storiche; le condizioni effettive nel 2026 potranno differire."),

    h3("Nord Italia: Milano, Torino, Venezia"),
    p("Milano e Torino in novembre hanno massime intorno a 10–13 °C e minime che si avvicinano a 5 °C verso fine mese. La Pianura Padana è umida e nebbiosa: le mattinate di nebbia nella zona metropolitana di Milano e nel delta del Po sono una costante climatica. Aspettarsi almeno qualche giornata grigia e piovosa."),
    p("Venezia a novembre acquista un fascino particolare: la nebbia sale dalla laguna, le *calli* si svuotano dei turisti estivi, e la città rivela la sua atmosfera più autentica. Novembre è anche il mese con maggiore frequenza di *acqua alta*: le barriere del MOSE, operative dal 2020, riducono la frequenza delle inondazioni, ma le zone più basse di Venezia — come Piazza San Marco — possono ancora allagarsi durante le maree eccezionali."),
    tip("Le previsioni di acqua alta vengono aggiornate giornalmente dal Centro Previsioni e Segnalazioni Maree del Comune di Venezia su comune.venezia.it/marea — utile consultarle prima di pianificare la giornata in laguna."),

    h3("Centro Italia: Firenze e Roma"),
    p("Firenze e Roma sono più fresche e più piovose di ottobre. Firenze ha massime intorno a 11–14 °C con probabilità di pioggia quasi quotidiana. Roma è leggermente più mite: le massime partono da 16–17 °C a inizio novembre e scendono a circa 14 °C verso fine mese. Una giacca impermeabile è indispensabile; la sera servono un maglione e un cappotto."),
    p("Entrambe le città ricevono una parte consistente delle piogge annuali in ottobre e novembre. Roma registra in media circa 12 giorni di pioggia nel mese; Firenze qualcuno in più. L'inconveniente si trasforma in vantaggio: i Musei Vaticani, gli Uffizi e Palazzo Pitti sono molto più piacevoli senza le file degli altri mesi."),

    h3("Sud Italia: Napoli, Puglia, Calabria"),
    p("Il sud italiano è il più generoso in novembre. Napoli ha massime di 16–19 °C — abbastanza per visitare comodamente con una giacca leggera. Puglia e Calabria seguono valori simili. Le piogge ci sono ma sono meno frequenti rispetto al nord e al centro. Pompei, Ercolano, i templi di Paestum e il centro storico di Napoli sono tutti accessibili e molto meno affollati rispetto alla primavera."),

    h3("Sicilia e Sardegna"),
    p("La Sicilia ha il clima di novembre più mite d'Italia: Palermo supera spesso i 18–20 °C di massima, con piogge meno frequenti di Roma o Firenze. I mercati storici, il centro barocco, la gastronomia di strada e i siti archeologici sono tutti in piena attività. La Sardegna è leggermente più fresca e più piovosa sulla costa ovest, ma la stagione dei festival gastronomici autunnali e le spiagge deserte del sud possono valere la visita."),

    image("italy-autumn-countryside", "Le colline toscane in luce autunnale dorata, con cipressi e un paese medievale sullo sfondo"),

    h2("Le mete migliori a novembre"),

    h3("Roma"),
    p("Roma in novembre è la destinazione più premiante per la cultura classica. Il Colosseo si visita senza la ressa estiva — pur valendo sempre la pena prenotare l'ingresso online — e il Foro Romano si percorre con calma. I Musei Vaticani sono sensibilmente meno affollati, anche se la prenotazione anticipata di un orario di ingresso resta la scelta più saggia."),
    p("In novembre apre anche la stagione al Teatro dell'Opera di Roma: l'edizione 2026 parte il 27 novembre con *The Rake's Progress* di Stravinsky. La programmazione completa è sul sito opera.roma.it. Le gallerie minori — il Palazzo Altemps, i Musei Capitolini, il Palazzo Barberini — si visitano senza nessuna attesa."),
    tip("La prenotazione anticipata online per i Musei Vaticani è il sistema più efficace per evitare code anche in bassa stagione. Le file per l'accesso diretto possono superare i 30–60 minuti anche a novembre."),
    image("rome-pantheon-autumn", "Il Pantheon con le colonne antiche e la piazza quasi deserta in una mattina di novembre"),

    h3("Firenze"),
    p("La concentrazione di arte rinascimentale a Firenze la rende una delle destinazioni europee più appaganti in qualsiasi mese. Gli Uffizi, l'Accademia e il Bargello sono più gestibili in novembre che in qualsiasi altro periodo dell'anno. Il Mercato Centrale di San Lorenzo è particolarmente interessante in autunno per la stagione dei funghi porcini, del tartufo di San Miniato, della farina di castagne e dell'olio novello."),
    p("Il Weihnachtsmarkt (mercatino di Natale tedesco) di Piazza Santa Croce è stato attivo a metà-fine novembre in anni recenti; al momento della stesura (ottobre 2026) le date ufficiali non erano ancora confermate. Verificate sul sito ufficiale prima di pianificare. Per orientarsi in città, la [guida a Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta) copre i principali itinerari."),

    h3("Bologna"),
    p("I portici di Bologna — 38 chilometri di colonnati coperti, Patrimonio UNESCO — rendono la città la più confortevole d'Italia da percorrere sotto la pioggia autunnale. Novembre è anche il momento migliore per apprezzare la cucina bolognese: la tagliatella al ragù e il tortellino in brodo, serviti nei ristoranti tradizionali della Bassa, sono molto più soddisfacenti quando le temperature scendono."),
    p("Il mercato del Quadrilatero si riempie di prodotti autunnali. Le enoteche del centro propongono le nuove annate del Pignoletto dei Colli Bolognesi e del Sangiovese di Romagna. Le due torri medievali — l'Asinelli e la Garisenda — sono suggestive anche con il cielo grigio. Per un itinerario strutturato, la [guida a Bologna in due giorni](/it/citta/bologna-in-due-giorni) offre un percorso completo."),
    image("bologna-autumn-street", "Un portico bolognese in autunno, con la luce dorata che filtra tra le colonne"),

    h3("Torino"),
    p("Torino merita più visitatori di novembre di quanti ne riceva attualmente. Le cioccolaterie storiche e i caffè storici — il Caffè Torino e il Caffè Mulassano in Piazza San Carlo, il Baratti & Milano in Galleria Subalpina — sono fatti per le pomeriggio fredde di novembre. Il Museo Egizio è tra i migliori al mondo nella sua categoria e non è mai sovraffollato. Il Museo Nazionale del Risorgimento Italiano, nei saloni di Palazzo Carignano, è uno dei posti più utili d'Italia per capire come il Paese è diventato quello che è."),
    p("In novembre 2026, Torino ospita il [Torino Film Festival](https://www.torinofilmfest.org/) (44ª edizione, 24 novembre – 2 dicembre): uno degli appuntamenti cinematografici più importanti d'Italia, con retrospettive e anteprime internazionali. Il [Bagna Cauda Day](https://www.astigiani.it/) (20–22 e 27–29 novembre 2026) anima ad Asti e in tutto il Piemonte i ristoranti con l'immancabile rito conviviale invernale: la bagna cauda, il bagno di aglio, acciughe e olio d'oliva nel quale intingere le verdure crude. Per una panoramica sulla città, la [guida a Torino](/it/citta/torino-per-la-prima-volta) è il punto di partenza."),

    h3("Alba e le Langhe"),
    p("Novembre nelle Langhe è la stagione per eccellenza del tartufo bianco e del vino. La [Fiera del Tartufo Bianco d'Alba](https://www.tartufialba.it/) — alla sua 96ª edizione nel 2026 — anima quattro weekend di novembre: 7–8, 14–15, 21–22 e 28–29 novembre, all'interno della stagione che va dal 10 ottobre al 6 dicembre."),
    p("Il mercato del tartufo si tiene nel Cortile della Maddalena, nel centro storico di Alba. Le strade intorno si riempiono di bancarelle con tartufi, salumi, formaggi e vino. I ristoranti delle Langhe portano il tartufo grattugiato nei piatti — tajarin, risotto, uova al burro — a prezzi significativamente inferiori a quelli dei ristoranti europei che lo importano. Novembre è anche il momento delle cantine aperte: Barolo, Barbaresco e Dolcetto sono nelle cantine pronte per la vendita della nuova annata."),
    tip("Alcuni ristoratori delle Langhe propongono menu degustazione con tartufo bianco su prenotazione solo nelle settimane della fiera. Conviene prenotare con qualche giorno di anticipo, specie nei weekend."),

    h3("Napoli e la Campania"),
    p("Napoli a novembre è autentica, vivace e sorprendentemente calda. Il sottosuolo della città — Napoli Sotterranea, il Tunnel Borbonico, la Crypta Neapolitana — è ideale da esplorare nelle giornate fresche. Il Museo Archeologico Nazionale di Napoli, con la più grande collezione al mondo di manufatti di Pompei ed Ercolano, non è mai troppo frequentato in questo periodo."),
    p("Pompei e Ercolano in novembre sono meglio di estate: i siti aprono alle 9:00, la luce autunnale è più bassa e favorevole alla fotografia, e le aree sono quasi deserte. I traghetti per Capri e Ischia continuano a operare in novembre ma con orari ridotti — verificate su [traghetti.it](https://www.traghetti.it) prima di programmare una visita alle isole. Per i pratici consigli su Napoli, la [guida alla prima visita a Napoli](/it/citta/napoli-per-la-prima-volta) ha tutto il necessario."),

    h3("Palermo e la Sicilia"),
    p("La Sicilia in novembre rimane calda, accessibile e quasi libera dalle folle estive. I mercati storici di Palermo — il Ballarò, la Vucciria, il Capo — sono tra le esperienze gastronomiche più autentiche del Mediterraneo e funzionano a pieno regime. La Cattedrale, la Cappella Palatina e il Palazzo dei Normanni si visitano con tutta la calma del mondo."),
    p("L'interno della Sicilia — Agrigento (Valle dei Templi), Piazza Armerina (Villa Romana del Casale) e Ragusa — è particolarmente ricompensante tra ottobre e novembre, con temperature ideali per camminare tra i siti archeologici. Per il capoluogo, la [guida a Palermo](/it/citta/palermo-per-la-prima-volta) offre gli itinerari principali."),

    h3("Le Dolomiti a inizio novembre"),
    p("I primi giorni di novembre possono essere spettacolari nelle Dolomiti se il tempo regge. I larici (Larix decidua) virano al giallo e all'arancio verso fine ottobre e rimangono colorati nella prima settimana di novembre, tingendo di oro i versanti prima della prima nevicata consistente. La Val Gardena, la Val di Fassa e Cortina d'Ampezzo sono silenziose, gli alberghi applicano prezzi bassi, e alcuni rifugi alpini rimangono aperti fino a inizio novembre."),
    p("Da metà novembre in poi le montagne entrano in una pausa interstazionale: l'estate escursionistica è finita, lo sci non è ancora iniziato (gli impianti aprono in genere a dicembre), e molti ristoranti e hotel riducono gli orari o chiudono del tutto. Prima di prenotare un soggiorno in Dolomiti a fine novembre, verificate che la struttura sia aperta. Per una panoramica completa sulla stagionalità, la [guida alle Dolomiti](/it/viaggi/dolomiti-prima-volta) tratta ogni aspetto."),
    image("dolomites-autumn-colors", "Le cime dolomitiche che emergono dalle foreste di larici in piena fioritura autunnale dorata"),
    image("alpine-village-autumn", "Un paese alpino in Alto Adige circondato da alberi autunnali ambrati e vette innevate"),

    h2("Gli eventi confermati di novembre 2026"),
    note("**Nota sulle date.** Tutti gli eventi elencati sono stati verificati su fonti ufficiali degli organizzatori all'ottobre 2026. Le date possono cambiare — verificate sempre con l'organizzatore ufficiale prima di prenotare viaggi e alloggi."),
    table(
      ["Evento", "Luogo", "Date confermate 2026", "Fonte ufficiale"],
      [
        ["Fiera del Tartufo Bianco d'Alba (96ª edizione)", "Alba, Piemonte", "Weekend di nov: 7–8, 14–15, 21–22, 28–29 (stagione: 10 ott – 6 dic)", "tartufialba.it"],
        ["Fiera del Tartufo Bianco di Acqualagna (61ª edizione)", "Acqualagna, Marche", "1 nov; 7–8 nov; 14–15 nov 2026", "comune.acqualagna.ps.it"],
        ["Fieracavalli (128ª edizione)", "Verona", "5–8 novembre 2026", "veronafiere.it"],
        ["Bagna Cauda Day (14ª edizione)", "Asti e Piemonte", "20–22 nov e 27–29 nov 2026", "Associazione Astigiani"],
        ["Torino Film Festival (44ª edizione)", "Torino", "24 novembre – 2 dicembre 2026", "torinofilmfest.org"],
        ["Teatro dell'Opera di Roma — apertura stagione", "Roma", "27 novembre 2026 (The Rake's Progress)", "opera.roma.it"],
      ],
      "Fonti ufficiali degli organizzatori, verificate ottobre 2026."
    ),

    h2("La stagione del tartufo bianco"),
    p("La stagione del tartufo bianco in Italia va da ottobre a dicembre, con novembre come mese di punta. Il tartufo bianco (*Tuber magnatum Pico*) si trova principalmente in Piemonte e nelle Marche, con quantità minori in Umbria, Molise e Abruzzo. Non è coltivabile: cresce in simbiosi spontanea con le radici di querce, pioppi e salici, ed è per questo tra i prodotti alimentari più costosi al mondo."),
    p("Due fiere dominano il calendario di novembre. La **Fiera del Tartufo Bianco d'Alba** in Piemonte è l'evento più noto: 96 edizioni nel 2026, mercato nel Cortile della Maddalena nel centro storico di Alba, con contrattazioni, degustazioni e un'asta formale. La **Fiera del Tartufo Bianco di Acqualagna** nelle Marche è l'evento competitor del centro Italia, con date confermate per il 2026: 1 novembre e i weekend dell'8 e del 15 novembre."),
    p("Al di là delle fiere, novembre significa tartufo bianco sui menù di ristoranti e trattorie in tutta la zona. Nelle Langhe, un primo con tartufo grattugiato — tajarin, risotto o uova al burro — costa molto meno rispetto ai ristoranti europei che lo importano. Prenotare con anticipo è consigliabile nei weekend della fiera."),
    tip("Il tartufo bianco acquistato alla fiera di Alba può essere trasportato nella maggior parte dei paesi europei senza problemi, se confezionato correttamente. Per l'importazione in paesi extra-UE, verificate le norme doganali prima dell'acquisto."),

    h2("La cucina di novembre"),
    p("Novembre è uno dei mesi più ricchi dal punto di vista gastronomico in Italia. Il sovrapporsi di ingredienti autunnali, tradizioni regionali e clima fresco produce menù tra i più soddisfacenti dell'anno."),
    ul(
      "**Tartufo bianco** — picco di stagione in Piemonte e nelle Marche; grattugiato su pasta, risotto o uova",
      "**Funghi porcini** — saltati in padella, secchi o in sugo di pasta; mercati e trattorie ne sono pieni da settembre a novembre",
      "**Castagne** — arrosto per strada, in zuppe, nei dolci (castagnaccio, marrons glacés) o nella pasta di farina di castagne",
      "**Olio nuovo (olio novello)** — la raccolta delle olive corre da ottobre a novembre; l'olio di prima spremitura è erbaceo, pepato e intenso",
      "**Nuove annate di vino** — il vino novello esce il 6 novembre; Barolo, Barbaresco e Brunello di Montalcino propongono le anteprime delle nuove annate",
      "**Paste di stagione** — tortellini in brodo (Bologna), tagliatelle al ragù (Emilia), risotto alla zucca, pasta e fagioli, riso e verza nel Veneto",
      "**Bagna cauda** — l'intingolo piemontese di aglio, acciughe e olio d'oliva servito caldo: un piatto strettamente invernale",
    ),

    h2("Cosa mettere in valigia"),
    ul(
      "Un impermeabile — indispensabile ovunque in Italia a novembre, a maggior ragione a Roma, Firenze, Venezia e Milano",
      "Un secondo strato (maglione o pile) per le sere: le temperature calano rapidamente dopo il tramonto, anche a Roma",
      "Scarpe comode e impermeabili — i sampietrini bagnati sono scivolosi; evitare le suole in cuoio",
      "Abbigliamento a strati piuttosto che un solo cappotto pesante — funziona meglio nell'escursione termica giornaliera",
      "Un ombrello compatto o una mantella antipioggia — il vento può rendere inutile l'ombrello nelle strade strette",
      "Calze calde — i pavimenti freddi dei musei e delle chiese fanno sentire il freddo ai piedi prima che al resto del corpo",
    ),
    note("Nelle Alpi e nelle Dolomiti a novembre servono abiti tecnici: scarponi da trekking impermeabili, pile e uno strato esterno caldo. Sopra i 1.000 metri le temperature notturne possono scendere a −5 °C o meno, e i sentieri possono essere gelati o innevati."),

    h2("Come spostarsi"),
    p("La rete ferroviaria italiana opera con orario pieno in novembre, senza riduzioni stagionali. I Frecciarossa ad alta velocità collegano Milano, Torino, Firenze, Roma, Napoli e le altre grandi città ogni 30–60 minuti. Tempi indicativi: Milano–Roma circa 2h 55min; Roma–Napoli circa 1h 10min; Milano–Torino circa 1h 5min. La [guida ai treni in Italia](/it/trasporti/viaggiare-in-italia-in-treno) copre biglietti, prenotazioni e tutto ciò che serve sapere prima di partire."),
    p("I treni regionali continuano a circolare ma con frequenza ridotta nei pomeriggi feriali e la domenica. Se si viaggia verso Alba per la Fiera del Tartufo, la stazione più vicina è Alba sulla linea regionale Torino–Savona; da Torino il collegamento richiede circa 1 ora e 20 minuti."),
    p("Il noleggio auto è utile per esplorare le cantine delle Langhe, percorrere la Costiera Amalfitana fuori stagione (meno traffico, ma strada sempre stretta) o raggiungere le zone della Sicilia interna non servite dal treno. La [guida a guidare in Italia](/it/trasporti/guidare-in-italia) copre patenti, segnaletica, zone ZTL e pedaggi autostradali. Per le opzioni tra una città e l'altra, la [guida su come spostarsi tra le città italiane](/it/trasporti/come-spostarsi-tra-le-citta-italiane) esamina treno, bus e traghetto."),

    image("rome-street-scene", "Una via silenziosa di Roma con un ponte ad arco riflesso nel Tevere in una mattina grigia di novembre"),

    h2("Idee di itinerario"),

    h3("3 giorni a Roma"),
    p("Novembre è il momento ideale per un city break a Roma concentrato su storia antica e musei. Tre giorni bastano per coprire i siti principali senza fretta."),
    {
      type: "steps",
      items: [
        { title: "Giorno 1: Roma antica", text: "Colosseo, Foro Romano e Palatino in mattinata (prenotate l'ingresso online); Musei Capitolini nel pomeriggio. Cena a Testaccio." },
        { title: "Giorno 2: Vaticano", text: "Musei Vaticani e Cappella Sistina (prenotazione obbligatoria); Basilica di San Pietro e Piazza San Pietro. Pomeriggio: passeggiata tra Castel Sant'Angelo e il Prati." },
        { title: "Giorno 3: Roma barocca e Trastevere", text: "Pantheon, Piazza Navona, mercato di Campo de' Fiori (solo mattina); Trastevere per pranzo e pomeriggio. Eventuale: Galleria Borghese (prenotazione obbligatoria)." },
      ],
    },
    p("Per la logistica completa degli ingressi ai musei, la [guida a Roma in tre giorni](/it/citta/roma-in-tre-giorni) offre tutti i dettagli."),

    h3("4 giorni: Firenze e Bologna"),
    p("Collegare Firenze e Bologna con l'alta velocità (37 minuti, più treni all'ora) è uno degli abbinamenti più riusciti per un viaggio autunnale incentrato su arte e gastronomia."),
    {
      type: "steps",
      items: [
        { title: "Giorni 1–2: Firenze", text: "Galleria degli Uffizi (biglietto a orario su uffizi.it); Galleria dell'Accademia per il David; Piazzale Michelangelo per il panorama. Mercato Centrale per i prodotti autunnali. Sera in Oltrarno." },
        { title: "Giorni 3–4: Bologna", text: "Piazza Maggiore e Basilica di San Petronio; salita alla Torre degli Asinelli; Quadrilatero per formaggi, salumi e porcini. Cena con tagliatelle al ragù. Eventuale gita alle cantine dei Colli Bolognesi." },
      ],
    },

    h3("7 giorni nel nord Italia: tartufi e vino"),
    p("Una settimana nel nord Italia a novembre può abbinare Torino, Alba (weekend della fiera del tartufo), le Langhe e Milano — cultura, gastronomia e paesaggio autunnale."),
    {
      type: "steps",
      items: [
        { title: "Giorni 1–2: Torino", text: "Museo Egizio; Palazzo Reale; Lingotto; caffè storici. Eventuale: Bagna Cauda Day (20–22 o 27–29 novembre). Gita a La Sacra di San Michele." },
        { title: "Giorni 3–4: Alba e le Langhe", text: "Weekend della Fiera del Tartufo Bianco d'Alba (date su tartufialba.it). Visite alle cantine di Barolo; menù degustazione con tartufo in una trattoria delle Langhe." },
        { title: "Giorni 5–6: Milano", text: "Pinacoteca di Brera; Santa Maria delle Grazie per il Cenacolo (prenotazione su vivaticket.com, con largo anticipo); Navigli per l'aperitivo. Duomo e Galleria Vittorio Emanuele II." },
        { title: "Giorno 7: Estensione", text: "Gita alla Certosa di Pavia (30 minuti da Milano) oppure al Lago di Como in treno (40 minuti, ma molti servizi di battello sono ridotti a novembre)." },
      ],
    },

    h2("A fine novembre: i primi mercatini di Natale"),
    p("Chi visita l'Italia a fine novembre si avvicina alle prime aperture dei mercatini natalizi. A Trento il mercatino apre il **20 novembre**, ad Aosta il **21 novembre** — entrambi confermati per il 2026. Se il vostro itinerario include il nord Italia nell'ultima settimana di novembre, aggiungere uno di questi mercatini alpini è un'aggiunta naturale. La [guida ai mercatini di Natale in Italia](/it/eventi/mercatini-di-natale-italia) tratta tutte le date 2026 confermate e stimate, con consigli pratici per ogni mercatino."),

  ],

  faqs: [
    {
      question: "Conviene visitare l'Italia a novembre?",
      answer: "Sì, per chi viaggia per cultura, arte e gastronomia. Le città d'arte — Roma, Firenze, Bologna — sono molto meno affollate rispetto ad aprile o agosto, e i prezzi degli alberghi sono ai minimi stagionali. Novembre è anche il picco della stagione del tartufo bianco in Piemonte e nelle Marche. Gli aspetti negativi sono le giornate corte (dopo il cambio dell'ora), le piogge frequenti al centro-nord e alcune strutture balneari chiuse per stagione.",
    },
    {
      question: "Com'è il meteo in Italia a novembre?",
      answer: "Molto variabile secondo la latitudine. Al nord (Milano, Torino) le massime sono intorno a 10–13 °C con nebbia e pioggia frequenti. Al centro (Firenze, Roma) le temperature vanno da 11 a 17 °C con probabilità di pioggia. Al sud (Napoli, Palermo) si rimane tra 14 e 20 °C, con un clima notevolmente più mite. I dati sono medie climatiche storiche; le condizioni reali del 2026 potranno differire.",
    },
    {
      question: "Quali sono le mete migliori in Italia a novembre?",
      answer: "Roma e Firenze per l'arte e la cultura. Bologna per la gastronomia e i portici coperti che riparano dalla pioggia. Torino per i musei, il cioccolato e il Torino Film Festival. Napoli per il clima mite e i siti archeologici desafffollati. Per chi viaggia per la gastronomia, Alba in Piemonte durante i weekend della Fiera del Tartufo Bianco è una meta imperdibile.",
    },
    {
      question: "Quali eventi ci sono in Italia a novembre 2026?",
      answer: "Gli eventi confermati per il 2026 includono: Fiera del Tartufo Bianco d'Alba (weekends di novembre), Fiera del Tartufo Bianco di Acqualagna (1, 7–8, 14–15 novembre), Fieracavalli a Verona (5–8 novembre), Bagna Cauda Day in Piemonte (20–22 e 27–29 novembre), Torino Film Festival (24 novembre – 2 dicembre) e apertura della stagione al Teatro dell'Opera di Roma (27 novembre). Verificate sempre le date sull'organizzatore ufficiale prima di prenotare.",
    },
    {
      question: "Quando inizia la stagione del tartufo bianco in Italia?",
      answer: "La stagione del tartufo bianco va da ottobre a dicembre, con novembre come mese di punta. Le due fiere principali in novembre 2026 sono la Fiera del Tartufo Bianco d'Alba (weekends: 7–8, 14–15, 21–22, 28–29 novembre) e la Fiera del Tartufo Bianco di Acqualagna (1, 7–8, 14–15 novembre).",
    },
    {
      question: "I mercatini di Natale aprono a novembre?",
      answer: "I primi mercatini italiani aprono a fine novembre. Nel 2026: Trento il 20 novembre, Aosta il 21 novembre, Merano il 26 novembre, Bolzano e Bressanone il 27 novembre — tutti confermati. La guida ai mercatini di Natale in Italia raccoglie tutte le date ufficiali e stimate per il 2026.",
    },
    {
      question: "Vale la pena visitare le Dolomiti a novembre?",
      answer: "A inizio novembre sì: i larici sono dorati e i paesi alpini sono tranquilli. Da metà novembre in poi le montagne entrano in una pausa interstazionale — l'estate escursionistica è chiusa, lo sci non è ancora iniziato, e molti alberghi e rifugi sono chiusi. Se si prevede un soggiorno nelle Dolomiti a fine novembre, verificate prima che le strutture scelte siano aperte.",
    },
    {
      question: "Quanto è affollata l'Italia a novembre?",
      answer: "Novembre è uno dei mesi più tranquilli dell'anno per il turismo. Il Colosseo, gli Uffizi e gli altri grandi siti si visitano con una frazione dell'affollamento estivo. La prenotazione anticipata rimane consigliabile per Musei Vaticani, Uffizi e Cenacolo Vinciano a Milano, ma le attese sono molto più brevi rispetto al periodo da aprile a ottobre.",
    },
    {
      question: "Cosa mettere in valigia per l'Italia a novembre?",
      answer: "Un impermeabile è indispensabile ovunque, specialmente a Roma, Firenze e al nord. Scarpe comode e impermeabili per i sampietrini bagnati. Abbigliamento a strati per le variazioni di temperatura nell'arco della giornata. Un ombrello compatto. Calze calde. Per le Alpi e le Dolomiti servono abiti tecnici e scarponi da trekking impermeabili.",
    },
    {
      question: "Qual è la zona più calda dell'Italia a novembre?",
      answer: "La Sicilia è la zona più calda, con Palermo che supera spesso i 18–20 °C. La costa campana (Napoli, Costiera Amalfitana) registra massime di 16–19 °C. Anche Puglia, Calabria e Sardegna meridionale sono sensibilmente più miti del centro-nord. Tutti i dati si riferiscono a medie climatiche storiche.",
    },
    {
      question: "La Costiera Amalfitana e le Cinque Terre sono aperte a novembre?",
      answer: "I paesi sono aperti, ma molti traghetti, ristoranti e alberghi riducono gli orari o chiudono stagionalmente a novembre. I sentieri escursionistici delle Cinque Terre (incluso il Sentiero Azzurro) possono avere tratti chiusi per manutenzione. Verificate direttamente con il Parco Nazionale delle Cinque Terre o l'operatore di traghetti prima di includere queste mete come destinazione principale del viaggio.",
    },
    {
      question: "Come si raggiunge Alba per la Fiera del Tartufo?",
      answer: "La stazione ferroviaria di Alba è sulla linea regionale Torino–Savona. Da Torino il collegamento richiede circa 1 ora e 20 minuti (con cambio a Bra o Cavallermaggiore su alcuni treni). In alternativa, l'auto è più comoda per esplorare le cantine delle Langhe prima o dopo la fiera. Alba dista circa 60 chilometri da Torino in autostrada.",
    },
  ],

  sources: [
    { label: "Fiera del Tartufo Bianco d'Alba — tartufialba.it", url: "https://www.tartufialba.it/", note: "Sito ufficiale della fiera; programma e date 2026" },
    { label: "Fiera del Tartufo Bianco di Acqualagna — comune.acqualagna.ps.it", url: "https://www.comune.acqualagna.ps.it/", note: "Comune di Acqualagna; date confermate della fiera 2026" },
    { label: "Fieracavalli Verona — fieracavalli.it", url: "https://www.fieracavalli.it/", note: "Sito ufficiale Veronafiere; date confermate 5–8 novembre 2026" },
    { label: "Torino Film Festival — torinofilmfest.org", url: "https://www.torinofilmfest.org/", note: "Sito ufficiale; date confermate 24 novembre – 2 dicembre 2026" },
    { label: "Teatro dell'Opera di Roma — opera.roma.it", url: "https://www.opera.roma.it/", note: "Sito ufficiale; apertura stagione confermata 27 novembre 2026" },
    { label: "Associazione Astigiani (Bagna Cauda Day) — astigiani.it", url: "https://www.astigiani.it/", note: "Organizzatore ufficiale; date confermate 20–22 e 27–29 novembre 2026" },
    { label: "Centro Maree Venezia — comune.venezia.it", url: "https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree", note: "Previsioni di acqua alta per Venezia" },
  ],
  sourcesTitle: "Fonti e organizzatori ufficiali",
};
