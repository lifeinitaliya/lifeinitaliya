import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana della checklist di viaggio, scritta per chi legge in
// italiano. Le regole di ingresso (EES, ETIAS, validità del passaporto) sono
// state verificate su fonti ufficiali UE a settembre 2026; le regole di
// prenotazione dei monumenti vengono dalle fonti ufficiali usate nelle nostre
// guide alle città. I requisiti che dipendono dalla nazionalità non sono mai
// presentati come universali.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
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

const IMG = "/images/guides/italy-travel-planning-checklist";
const GUIDE_IMG = "/images/guides/complete-italy-travel-guide";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const checklistViaggioItalia: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cosa organizzare prima di un viaggio in Italia?"),
    answer("**Organizzare un viaggio in Italia significa soprattutto prendere bene una decina di decisioni, nell'ordine giusto.** Fissa le **date**, poi le **mete** e il numero di tappe, poi i **voli** (se puoi, arrivando in una città e ripartendo da un'altra), poi gli **alloggi** in zone ben collegate. Prenota i **trasferimenti tra città** — di solito l'alta velocità — e i pochi **grandi monumenti** con ingresso a orario. Verifica i **documenti** secondo le regole valide per la tua nazionalità, imposta un **budget**, sistema **pagamenti, dati mobili e assicurazione** e fai i **controlli finali** nell'ultima settimana. Tutto il resto — quale chiesa, quale trattoria — si decide sul posto."),
    p("L'ordine conta perché ogni scelta condiziona la successiva: le date decidono prezzi e aperture, le città decidono aeroporti e treni, gli alberghi decidono quanto saranno semplici le giornate. Questa checklist segue quell'ordine, spiega perché ogni passaggio conta e rimanda alle nostre guide dove serve approfondire."),
    {
      type: "image",
      src: `${IMG}/traveller-resting-rome-sunset.webp`,
      alt: "Una viaggiatrice con le sue borse seduta vicino al Vittoriano a Roma al tramonto, con le bandiere italiane sullo sfondo",
      caption: "Il giorno dell'arrivo a Roma. Un minimo di preparazione rende molto più semplici le prime ore.",
      credit: unsplash("Claudio Hirschberger", "hd24"),
      wide: true,
    },
    steps(
      ["Date", "Stagione, festività ed eventi influenzano prezzi, folla e aperture."],
      ["Mete", "Scegli le regioni e un numero realistico di tappe."],
      ["Voli", "Aeroporti di arrivo e partenza adatti all'itinerario."],
      ["Alloggi", "Posizione e collegamenti contano quanto il prezzo."],
      ["Trasporti", "Prenota l'alta velocità, o prevedi un'auto per le zone rurali."],
      ["Grandi monumenti", "Prenota i pochi che richiedono l'ingresso a orario."],
      ["Documenti", "Validità del passaporto e regole di ingresso per la tua nazionalità."],
      ["Budget", "Prima alloggi e treni, poi il resto."],
      ["Connessione e pagamenti", "Dati mobili, carte e assicurazione."],
      ["Controlli finali", "Conferme, biglietti offline, trasferimenti e meteo."],
    ),

    // ——— 2 ———
    h2("Il calendario dei preparativi"),
    p("I tempi cambiano — un weekend a Roma richiede meno anticipo di due settimane in tre regioni — quindi considerali indicativi. Spunta le voci man mano: i progressi restano salvati su questo dispositivo."),
    checklist(
      "italia-calendario-preparativi",
      ["Da 2 a 6 mesi prima", ["Scegli date, regioni e numero di tappe", "Controlla validità del passaporto e regole di ingresso per la tua nazionalità", "Prenota i voli (valuta arrivo e partenza da città diverse)", "Prenota gli alloggi, soprattutto per alta stagione ed eventi", "Imposta un primo budget"]],
      ["Da 1 a 2 mesi prima", ["Prenota l'alta velocità appena escono le tariffe", "Prenota i monumenti con ingresso a orario", "Stipula l'assicurazione di viaggio", "Prenota l'auto, se serve, e verifica i requisiti della patente", "Organizza i trasferimenti dall'aeroporto"]],
      ["Da 2 a 4 settimane prima", ["Scrivi un programma giorno per giorno, raggruppato per zone", "Prenota tour ed esperienze", "Controlla carte, commissioni e contanti", "Sistema i dati mobili (roaming, SIM o eSIM)"]],
      ["Una settimana prima", ["Conferma voli, alberghi e prenotazioni", "Scarica i biglietti e salva gli indirizzi offline", "Controlla il meteo e gli scioperi annunciati", "Prepara la valigia, pensando a chiese e camminate"]],
      ["24–48 ore prima", ["Controlla lo stato del volo e fai il check-in online", "Conferma il trasferimento e l'orario di check-in in albergo", "Ricarica i dispositivi e porta un power bank", "Documenti e carte nel bagaglio a mano"]],
      ["Il giorno della partenza", ["Passaporto, carte e telefono a portata di mano", "Tempo sufficiente per check-in e controlli", "Indirizzo del primo albergo e dettagli del trasferimento offline"]],
      ["Il giorno dell'arrivo", ["Segui il piano per il trasferimento", "Lascia i bagagli se il check-in è più tardi", "Tieni leggera la prima giornata"]],
    ),

    // ——— 3 ———
    h2("Prima di prenotare qualsiasi cosa"),
    p("Decidi la forma del viaggio prima di prenotarne un singolo pezzo. Poche domande chiariscono quasi tutto:"),
    ul(
      "**Quali regioni?** L'Italia è lunga: Nord, Centro e Sud sono viaggi diversi. In due settimane, due o tre regioni bastano.",
      "**Quante città?** Una regola utile è almeno due notti per tappa, e tre per le grandi città come Roma.",
      "**Stesso aeroporto all'andata e al ritorno?** Arrivare in una città e ripartire da un'altra (per esempio arrivo a Venezia e partenza da Roma) evita un lungo viaggio di ritorno al punto di partenza.",
      "**Treno o auto?** Il treno è adatto ai viaggi tra città; l'auto a campagna, isole e piccoli centri. Molti viaggi combinano le due cose: treno tra le città, auto per qualche giorno in campagna.",
      "**Quanti cambi di albergo?** Ogni spostamento costa circa mezza giornata. Meno tappe, con qualche gita, di solito funzionano meglio di una notte ovunque.",
    ),
    p("La nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia) approfondisce queste scelte, e [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia) mostra come ciascuna incide sul budget."),

    // ——— 4 ———
    h2("Scegliere l'itinerario"),
    p("Non esiste un itinerario migliore in assoluto. Questi esempi mostrano come funzionano percorsi diversi: scegli in base a durata, interessi, trasporti e stagione."),
    table(
      ["Itinerario", "Adatto a", "Trasporti", "Da sapere"],
      [
        ["Roma + Firenze + Venezia", "Prima visita, arte e storia", "Alta velocità", "Arrivo a Venezia e partenza da Roma, o viceversa"],
        ["Milano + Lago di Como + Verona", "Laghi, città, cucina e vino", "Treno; battelli sul lago", "Fuori stagione i battelli sono meno frequenti"],
        ["Napoli + Costiera Amalfitana + Roma", "Mare, archeologia, cucina", "Treno, traghetti, bus", "I trasporti in costiera sono stagionali e affollati d'estate"],
        ["Sicilia", "Cucina, storia, paesaggi", "Auto utile; treni limitati fuori dalle linee principali", "Voli su Palermo o Catania"],
        ["Nord Italia", "Città, laghi, montagne", "Ottima rete ferroviaria", "Controlla eventi e fiere a Milano, Bologna e Verona"],
        ["Sud Italia", "Mare, cucina, ritmi più lenti", "Treno più bus, traghetti o auto", "Caldo estivo e chiusure stagionali contano"],
        ["Viaggio lento in una regione", "Chi torna in Italia, viaggi in auto", "Auto", "Una o due basi con gite"],
      ],
      "Esempi di itinerario"
    ),
    p("Per le singole mete ci sono le nostre guide a [Roma](/it/guide/roma-in-tre-giorni), [Firenze](/it/citta/firenze-per-la-prima-volta), [Venezia](/it/citta/venezia-per-la-prima-volta), [Milano](/it/citta/milano-oltre-il-duomo), [Lago di Como](/it/viaggi/lago-di-como-weekend), [Verona](/it/citta/verona-per-la-prima-volta), [Bologna](/it/citta/bologna-in-due-giorni), [Napoli](/it/citta/napoli-per-la-prima-volta), [Torino](/it/citta/torino-per-la-prima-volta) e [Palermo](/it/citta/palermo-per-la-prima-volta); per la montagna, le [Dolomiti](/it/guide/dolomiti-prima-volta). Per scegliere il periodo, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),
    {
      type: "image",
      src: `${IMG}/traveller-with-map-bari.webp`,
      alt: "Una ragazza con un cappellino rosa consulta una mappa in una via del centro storico di Bari",
      caption: "Una cartina a Bari Vecchia. Meno tappe di solito significano più tempo per esplorare.",
      credit: unsplash("Fred Moon", "fwed"),
    },

    // ——— 5 ———
    h2("I voli"),
    ul(
      "**Aeroporti di partenza e arrivo** — Roma Fiumicino, Milano Malpensa e Venezia Marco Polo sono i principali scali internazionali; anche Napoli, Bologna, Pisa, Firenze, Catania e Palermo hanno voli internazionali.",
      "**Aeroporto del ritorno** — un biglietto multi-tratta (arrivo in una città, partenza da un'altra) spesso fa risparmiare una giornata.",
      "**Franchigia bagaglio** — controllala per ogni volo, compresi i voli interni o low cost.",
      "**Tempi di coincidenza** — calcola i controlli di frontiera se arrivi nell'area Schengen con uno scalo.",
      "**Orario di arrivo** — con un arrivo in tarda serata le opzioni di trasferimento si riducono; organizzati prima.",
      "**Terminal e trasferimento** — annota il terminal e come raggiungerai la città.",
      "**Regole di check-in** — alcune compagnie richiedono check-in online o controlli dei documenti prima del volo.",
    ),

    // ——— 6 ———
    h2("Passaporto, ingresso e documenti"),
    important("I requisiti di ingresso dipendono da nazionalità, documento di viaggio, motivo e durata del soggiorno. Verifica le fonti ufficiali per la tua situazione — il portale visti del Ministero degli Affari Esteri, il sito Your Europe dell'UE e le indicazioni di viaggio del tuo governo — invece di affidarti ad articoli generici, compreso questo.", "Le regole dipendono dalla nazionalità"),
    p("Per molti visitatori di Paesi extra UE valgono alcuni punti:"),
    ul(
      "**Validità del passaporto** — secondo l'UE, il passaporto dei cittadini extra UE deve essere valido almeno tre mesi dopo la data prevista di uscita dall'UE ed essere stato rilasciato negli ultimi dieci anni.",
      "**Visti** — alcune nazionalità hanno bisogno di un visto Schengen per i soggiorni brevi, altre no. Verifica prima di prenotare.",
      "**Sistema di ingressi/uscite (EES)** — secondo la Commissione europea, l'EES è pienamente operativo dal 10 aprile 2026. Per i cittadini extra UE in soggiorno breve sostituisce i timbri sul passaporto con una registrazione digitale, comprese impronte digitali e immagine del volto, raccolta alla frontiera. Al primo ingresso calcola più tempo.",
      "**ETIAS** — una futura autorizzazione di viaggio per chi è esente dal visto. Secondo il sito ufficiale ETIAS, a settembre 2026 non è ancora operativo e non si raccolgono domande; l'UE annuncerà la data di avvio con diversi mesi di anticipo. Diffida dei siti non ufficiali che offrono di presentare la domanda.",
      "**Documenti di supporto** — alla frontiera possono chiedere prova dell'alloggio, biglietto di ritorno o altri documenti.",
    ),
    p("I cittadini dell'UE possono viaggiare con passaporto o carta d'identità valida. Anche i minori devono avere un proprio documento."),
    h3("Documenti da portare o salvare"),
    ul(
      "Passaporto (e visto, se richiesto)",
      "Polizza di assicurazione di viaggio e numero di assistenza",
      "Conferme di voli, alberghi, treni e monumenti",
      "Patente, e permesso di guida internazionale se richiesto per la tua patente",
      "Una copia del passaporto, conservata separatamente dall'originale",
      "Contatti di emergenza, compresi ambasciata o consolato",
    ),

    // ——— 7 ———
    h2("Gli alloggi"),
    p("Scegli prima la zona e poi l'albergo: una camera ben posizionata fa risparmiare tempo e taxi ogni giorno."),
    table(
      ["Da controllare", "Perché conta"],
      [
        ["Posizione", "A piedi da ciò che vuoi vedere, o vicino alla metro"],
        ["Collegamenti", "Distanza dalla stazione d'arrivo, e bagagli su scale o ponti (soprattutto a Venezia)"],
        ["Orario di check-in", "Spesso a metà pomeriggio; chiedi del deposito bagagli se arrivi presto"],
        ["Arrivo in tarda serata", "Alcune piccole strutture chiedono di avvisare prima"],
        ["Condizioni di cancellazione", "Le tariffe flessibili costano di più ma proteggono se cambiano i piani"],
        ["Numero di persone", "Le camere italiane possono essere piccole; per le famiglie controlla i letti"],
        ["Ascensore e accessibilità", "Negli edifici storici possono esserci scale e nessun ascensore"],
        ["Colazione", "Inclusa o no; molti preferiscono la colazione al bar"],
        ["Imposta di soggiorno", "Spesso si paga a parte in struttura"],
      ],
      "Cosa controllare negli alloggi"
    ),
    p("Imposte di soggiorno e prezzi cambiano da città a città e da stagione a stagione: trovi tutto in [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia)."),

    // ——— 8 ———
    h2("Organizzare le giornate"),
    p("L'errore più comune è riempire troppo ogni giornata. Uno schema semplice le rende realistiche:"),
    ol(
      "**Una grande visita** — un museo o un sito a orario, di solito la mattina.",
      "**Luoghi vicini** — chiese, piazze e panorami raggiungibili a piedi.",
      "**Una vera pausa pranzo** — il pranzo fa parte della giornata, non è un buco nel programma.",
      "**Tempo in un quartiere** — un pomeriggio o una sera con calma in una zona sola.",
      "**Un margine** — un'ora o due libere per riposare, per le code o per le scoperte.",
    ),
    p("Raggruppa i luoghi per zona invece che per fama, ed evita di attraversare la città due volte nello stesso giorno. Le nostre guide mostrano come si fa: [Roma in tre giorni](/it/guide/roma-in-tre-giorni), [Firenze](/it/citta/firenze-per-la-prima-volta), [Venezia](/it/citta/venezia-per-la-prima-volta), [Bologna in due giorni](/it/citta/bologna-in-due-giorni) e [Napoli](/it/citta/napoli-per-la-prima-volta)."),
    tip("Controlla i giorni di apertura prima di fissare il programma: molti musei chiudono un giorno alla settimana — spesso il lunedì, ma non ovunque — e le chiese possono chiudere durante le funzioni.", "Giorni di apertura"),

    // ——— 9 ———
    h2("I monumenti da prenotare"),
    p("La maggior parte dei luoghi in Italia non richiede prenotazione: piazze, molte chiese, mercati e quartieri sono aperti e gratuiti. Alcuni grandi monumenti sì, e per quelli la prenotazione fa la differenza tra una visita tranquilla e una mattinata persa."),
    table(
      ["Luogo", "Organizzazione", "Perché"],
      [
        ["Colosseo, Roma", "Prenota sul sito ufficiale", "Biglietti nominativi con ingresso a orario al Colosseo"],
        ["Musei Vaticani, Roma", "Prenota sul sito ufficiale", "La prenotazione garantisce l'ingresso; chiusi quasi tutte le domeniche"],
        ["Cenacolo, Milano", "Prenota con largo anticipo", "Prenotazione obbligatoria e visite contingentate"],
        ["Uffizi, Firenze", "Prenota nei periodi di punta", "L'ingresso a orario evita lunghe code"],
        ["Palazzo Ducale, Venezia", "Prenotazione consigliata", "Online, con largo anticipo, costa meno"],
        ["Museo Egizio, Torino", "Prenota online", "I biglietti si vendono solo online"],
        ["Galleria Borghese, Roma", "Prenota in anticipo", "Prenotazione obbligatoria"],
        ["Casa di Giulietta, Verona; Archiginnasio, Bologna", "Prenota online", "Prenotazione online obbligatoria"],
        ["Spettacoli all'Arena di Verona", "Prenota per ogni evento", "Opera estiva ed eventi hanno biglietti propri"],
      ],
      "Monumenti da organizzare in anticipo"
    ),
    p("Usa sempre le biglietterie ufficiali indicate nelle nostre guide: i rivenditori spesso fanno pagare di più. Controlla data e ora di ogni biglietto prima di pagare: di solito gli errori non sono rimborsabili."),

    // ——— 10 ———
    h2("I treni"),
    ul(
      "**Alta velocità o regionale?** L'alta velocità (Frecciarossa e Italo) collega le città principali con posto assegnato e tariffe legate alla domanda; i regionali sono più lenti, con tariffe fisse e senza prenotazione del posto.",
      "**Prenota presto l'alta velocità** nei giorni affollati, soprattutto venerdì, domenica e festivi.",
      "**Scegli la stazione giusta** — diverse città hanno più di una grande stazione: Termini e Tiburtina a Roma, Centrale e Porta Garibaldi a Milano, Santa Lucia e Mestre a Venezia, Porta Nuova e Porta Susa a Torino. Non tutte sono in centro storico.",
      "**Convalida** — i biglietti regionali cartacei vanno convalidati prima di salire; quelli digitali per un treno preciso in genere no. Controlla le condizioni del biglietto.",
      "**Bagagli** — non c'è check-in: porti tu le valigie a bordo e le sistemi.",
      "**Coincidenze** — lascia margini ampi tra un treno e l'altro, e tra treno e volo.",
      "**Scioperi** — gli scioperi dei trasporti sono annunciati in anticipo nel calendario del Ministero delle Infrastrutture.",
    ),
    p("Leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno) per biglietti e stazioni, e [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane) per scegliere il mezzo giusto per ogni tappa."),
    {
      type: "image",
      src: `${GUIDE_IMG}/milano-centrale-high-speed-train.webp`,
      alt: "Un treno rosso ad alta velocità sotto la volta in ferro e vetro della stazione di Milano Centrale",
      caption: "L'alta velocità collega le città principali: sulle tratte più richieste prenota presto.",
      credit: unsplash("Chris Weiher", "chrisvomradio_jpeg"),
    },
    {
      type: "image",
      src: `${IMG}/sestri-levante-station.webp`,
      alt: "Il fabbricato giallo e il binario della stazione di Sestri Levante in Liguria, sotto il cielo azzurro",
      caption: "La stazione di Sestri Levante, sulla costa ligure. I regionali servono i centri minori con tariffe fisse.",
      credit: unsplash("Nick Fewings", "jannerboy62"),
    },

    // ——— 11 ———
    h2("Auto e viaggi on the road"),
    ul(
      "**Requisiti del noleggio** — età minima, carta di credito e deposito cambiano da compagnia a compagnia.",
      "**Patente** — a seconda di dove è stata rilasciata, può servire anche il permesso internazionale di guida: verifica con l'ente che l'ha emessa e con il noleggiatore.",
      "**Assicurazione** — controlla franchigia e coperture.",
      "**ZTL** — le zone a traffico limitato dei centri storici sono controllate da telecamere; entrare senza permesso comporta multe.",
      "**Pedaggi** — quasi tutte le autostrade sono a pagamento in base ai chilometri.",
      "**Parcheggi** — spesso a pagamento nei centri e difficili da trovare in città.",
      "**Carburante** — sappi se l'auto va a benzina o gasolio, e fai attenzione ai distributori self-service.",
      "**Ritiro e riconsegna** — ritira l'auto quando lasci una città invece di entrarci; la riconsegna altrove può costare di più.",
      "**Cambio** — il manuale è più diffuso; se ti serve l'automatico, prenota presto.",
    ),
    p("La nostra guida a [guidare in Italia](/it/guide/guidare-in-italia) spiega le regole nel dettaglio."),
    {
      type: "image",
      src: `${GUIDE_IMG}/liguria-coastal-road-car.webp`,
      alt: "Una piccola auto rossa su una strada stretta tra scogliere ed edifici sulla costa ligure vicino a Grimaldi",
      caption: "Coste e campagna si girano bene in auto; le città sono più semplici senza.",
      credit: unsplash("Chris Holgersson", "chrisholgersson"),
    },

    // ——— 12 ———
    h2("I trasferimenti dall'aeroporto"),
    p("Organizza il trasferimento prima di partire, soprattutto se arrivi tardi. Quasi tutti i grandi aeroporti hanno un treno o un bus per la città e taxi al terminal; alcune città prevedono tariffe fisse dei taxi per il centro. Confronta tempi, bagagli e orario di arrivo: il treno è spesso il più veloce, il taxi il più comodo con valigie pesanti o bambini, e un transfer privato prenotato è utile per arrivi a tarda notte. La nostra guida ai [trasferimenti dagli aeroporti](/it/guide/trasferimenti-aeroporti-italia) copre i principali scali."),

    // ——— 13 ———
    h2("Soldi e pagamenti"),
    ul(
      "**Carte** — i pagamenti contactless con carta o smartphone sono molto diffusi, anche sui mezzi pubblici di diverse città.",
      "**Una carta di riserva** — porta una seconda carta, conservata a parte.",
      "**La tua banca** — controlla commissioni su pagamenti e prelievi all'estero, e se devi avvisare del viaggio.",
      "**Bancomat** — usa se puoi gli sportelli delle banche e controlla le commissioni sullo schermo.",
      "**Conversione di valuta** — quando il POS o il bancomat propongono di addebitare nella tua valuta, scegliere l'euro di solito evita un ricarico sul cambio.",
      "**Un po' di contanti** — utili per piccoli acquisti, mercati e chi li preferisce.",
      "**App di pagamento** — configura e prova prima della partenza quelle che pensi di usare.",
    ),

    // ——— 14 ———
    h2("Telefono e internet"),
    ul(
      "**Roaming** — con le offerte di operatori UE in genere si naviga in Italia secondo le regole europee sul roaming; per gli altri piani controlla i costi con il tuo operatore.",
      "**eSIM o SIM locale** — un'eSIM si attiva prima di partire, se il telefono la supporta; per una SIM italiana serve un documento.",
      "**Wi-Fi** — comune in alberghi e bar, ma non affidarti al Wi-Fi per i biglietti.",
      "**Mappe offline** — scaricale per ogni città.",
      "**App di traduzione** — scarica le lingue che ti servono per l'uso offline.",
      "**App di viaggio** — Trenitalia o Italo per i treni, e l'app della tua compagnia aerea.",
    ),

    // ——— 15 ———
    h2("L'assicurazione di viaggio"),
    p("Leggi la polizza, non solo il prezzo. Controlla:"),
    ul(
      "**Spese mediche** — massimali, cure d'urgenza e rimpatrio.",
      "**Annullamento e interruzione** — per quali motivi sei coperto.",
      "**Ritardi e coincidenze perse** — compresi gli scioperi, che alcune polizze trattano diversamente.",
      "**Bagagli e oggetti di valore** — limiti per singolo oggetto.",
      "**Esclusioni** — attività, patologie preesistenti e sinistri legati all'alcol.",
      "**Destinazione e date** — che l'Italia e tutti i giorni del viaggio siano coperti.",
    ),
    p("I cittadini UE dovrebbero portare anche la Tessera europea di assicurazione malattia, che copre le cure necessarie nel servizio sanitario pubblico ma non sostituisce un'assicurazione di viaggio. Le condizioni cambiano molto: questo è un elenco di domande, non un consiglio su una polizza in particolare."),

    // ——— 16 ———
    h2("Cosa mettere in valigia"),
    checklist(
      "italia-valigia",
      ["Documenti", ["Passaporto o carta d'identità UE", "Visto o autorizzazione di viaggio, se richiesti", "Dati dell'assicurazione", "Conferme stampate o salvate offline", "Patente (e permesso internazionale, se serve)"]],
      ["Abbigliamento", ["Strati per temperature variabili", "Qualcosa che copra spalle e ginocchia per le chiese", "Giacca impermeabile leggera o ombrello", "Costume per mare e laghi"]],
      ["Scarpe", ["Scarpe comode e già rodate per selciato e scale", "Un secondo paio, nel caso le prime si bagnino"]],
      ["Elettronica", ["Telefono e caricatore", "Power bank", "Adattatore per le prese italiane (tipo C, F e L)", "Auricolari"]],
      ["Accessori da viaggio", ["Borraccia", "Piccolo lucchetto per la valigia", "Borsa riutilizzabile", "Farmaci e prescrizioni nella confezione originale"]],
      ["Borsa da giorno", ["Una borsa che si chiude, da tenere davanti nella folla", "Acqua, crema solare e uno strato leggero", "Una sciarpa o uno scialle per le chiese"]],
      ["Extra di stagione", ["Estate: cappello, crema solare, abiti traspiranti", "Inverno: cappotto, guanti, scarpe impermeabili", "Montagna: strati e scarponi anche d'estate"]],
    ),
    {
      type: "image",
      src: `${IMG}/luggage-bicycle-bosa.webp`,
      alt: "Una pila di valigie d'epoca e una bicicletta davanti a un edificio in una via lastricata di Bosa, in Sardegna",
      caption: "Viaggia leggero: scale, selciato e portabagagli dei treni premiano le valigie piccole.",
      credit: unsplash("Bernhard", "bernhardbar"),
    },

    // ——— 17 ———
    h2("Preparativi utili in Italia"),
    ul(
      "**Chiese** — molte chiedono spalle e ginocchia coperte; alcune grandi basiliche lo controllano all'ingresso.",
      "**Orari dei pasti** — si pranza di solito dalle 12:30–13 e si cena dalle 19:30–20, più tardi al Sud; molti ristoranti chiudono tra un servizio e l'altro.",
      "**Bar** — il caffè al banco è la norma e spesso costa meno che al tavolo; a volte si paga prima alla cassa.",
      "**Bagagli** — i centri storici hanno scale, selciato e, a Venezia, ponti: le valigie piccole semplificano ogni spostamento.",
      "**Mezzi pubblici** — convalida i biglietti cartacei; in molte città si paga anche contactless.",
      "**Zone pedonali e ZTL** — gran parte dei centri storici è chiusa al traffico non autorizzato.",
      "**Strade irregolari** — sampietrini e gradini sono normali; le scarpe giuste contano.",
      "**Acqua** — molte città hanno fontanelle pubbliche: porta una borraccia.",
      "**Bagni** — i bagni pubblici possono scarseggiare; nei bar di solito ci si aspetta una consumazione.",
      "**Coperto e servizio** — i ristoranti possono aggiungere coperto o servizio; la mancia oltre a quello è una scelta.",
      "**Emergenze** — il 112 è il numero unico europeo di emergenza.",
    ),
    {
      type: "image",
      src: `${IMG}/window-view-lake-como.webp`,
      alt: "Una donna legge una rivista davanti a una finestra affacciata sul Lago di Como, con le case sulla sponda opposta",
      caption: "Prevedi anche del tempo lento: un'ora tranquilla sul Lago di Como fa parte del viaggio.",
      credit: unsplash("Stanley Kustamin", "kyelnats"),
    },

    // ——— 18 ———
    h2("Una settimana prima"),
    checklist(
      "italia-una-settimana-prima",
      ["Conferma", ["Voli, orari e bagagli", "Alberghi e orari di check-in", "Prenotazioni dei monumenti", "Biglietti del treno e stazioni"]],
      ["Prepara", ["Scarica biglietti e carte d'imbarco", "Salva offline gli indirizzi degli alberghi", "Scarica le mappe offline", "Salva i contatti di emergenza"]],
      ["Controlla", ["Le previsioni del tempo", "Gli scioperi annunciati", "Banca e commissioni sulle carte", "Passaporto e documenti"]],
    ),

    // ——— 19 ———
    h2("24–48 ore prima"),
    checklist(
      "italia-48-ore-prima",
      ["Controlli finali", ["Stato del volo e check-in online", "Piano per il trasferimento dall'aeroporto", "Dettagli per il check-in in struttura", "Biglietti di treni e musei disponibili offline", "Meteo dei primi giorni", "Peso del bagaglio e liquidi", "Telefono carico e power bank in borsa", "Documenti e carte nel bagaglio a mano"]],
    ),

    // ——— 20 ———
    h2("Il giorno dell'arrivo"),
    p("Il primo giorno serve ad arrivare, non a visitare. Qualche accorgimento lo rende più semplice:"),
    ul(
      "**Trova il tuo trasferimento** — segui le indicazioni per treni, bus o posteggio taxi, e usa solo taxi ufficiali.",
      "**Raggiungi l'alloggio** — tieni indirizzo e indicazioni offline, e avvisa la struttura se arrivi tardi.",
      "**Arrivi tardi?** — conferma prima il check-in serale e valuta un taxi invece dell'ultimo treno o bus.",
      "**Arrivi presto?** — quasi tutti gli alberghi custodiscono i bagagli fino al check-in; nelle stazioni delle grandi città ci sono depositi bagagli.",
      "**Jet lag** — passa del tempo all'aperto, mangia agli orari locali e tieni leggero il programma.",
      "**Una prima giornata semplice** — una passeggiata, una buona cena e a letto presto; le grandi prenotazioni dal secondo giorno.",
    ),
    {
      type: "image",
      src: `${IMG}/train-bardonecchia-mountains.webp`,
      alt: "Un treno fermo al binario a Bardonecchia, nelle Alpi piemontesi, con le montagne verdi sullo sfondo",
      caption: "Bardonecchia, nelle Alpi piemontesi. Lascia margini nel programma per trasferimenti e coincidenze.",
      credit: unsplash("Casey Lovegrove", "clovegrove7"),
    },

    // ——— 21 ———
    h2("Errori da evitare al primo viaggio"),
    ol(
      "**Troppe città.** Due notti per tappa sono un minimo ragionevole.",
      "**Troppi cambi di albergo.** Ogni spostamento costa tempo ed energia.",
      "**Prenotare monumenti senza controllare la data.** I biglietti a orario di solito non sono rimborsabili.",
      "**Dimenticare il trasferimento dall'aeroporto.** Soprattutto dopo un volo serale.",
      "**Pensare che le stazioni siano in centro.** Controlla da quale stazione parte il treno.",
      "**Ignorare le ZTL.** Le multe da telecamera possono arrivare mesi dopo.",
      "**Non controllare le regole di chiese e musei.** Abbigliamento, giorni di chiusura e limiti per le borse cambiano.",
      "**Non lasciare margini per il meteo.** Tieni un'alternativa al chiuso per pioggia o caldo forte.",
      "**Non avere le conferme a portata di mano.** Salvale offline, non solo nella posta.",
    ),

    // ——— 22 ———
    h2("La checklist completa"),
    p("Salvala o stampala e usala come promemoria: è organizzata per argomento, non per data."),
    checklist(
      "italia-checklist-completa",
      ["Documenti", ["Passaporto valido per tutto il viaggio più il margine richiesto", "Visto o autorizzazione verificati per la tua nazionalità", "Polizza assicurativa salvata", "Copie dei documenti principali"]],
      ["Voli", ["Andata e ritorno prenotati", "Franchigia bagaglio controllata", "Check-in online fatto"]],
      ["Alberghi", ["Tutte le notti prenotate", "Check-in e arrivo serale confermati", "Imposta di soggiorno annotata"]],
      ["Trasporti", ["Alta velocità prenotata", "Stazioni controllate", "Trasferimenti dall'aeroporto organizzati", "Noleggio auto e requisiti della patente verificati, se guidi"]],
      ["Monumenti", ["Biglietti a orario sui siti ufficiali", "Date e orari ricontrollati", "Giorni di chiusura verificati"]],
      ["Soldi", ["Due carte, tenute separate", "Commissioni bancarie controllate", "Un po' di contanti"]],
      ["Telefono", ["Roaming, SIM o eSIM sistemati", "Mappe offline scaricate", "App di treni e compagnia aerea installate"]],
      ["Valigia", ["Scarpe da camminata", "Uno strato per le chiese", "Adattatore e power bank", "Farmaci nella confezione originale"]],
      ["Controlli finali", ["Meteo controllato", "Scioperi controllati", "Biglietti salvati offline", "Prima giornata leggera"]],
    ),
    p("Le regole di ingresso citate in questa guida sono state verificate su fonti ufficiali UE a settembre 2026 e possono cambiare. Prima di partire controlla quelle valide per te."),
  ],

  faqs: [
    { question: "Con quanto anticipo organizzare un viaggio in Italia?", answer: "Per l'alta stagione conviene iniziare da due a sei mesi prima, per prenotare voli, alloggi e i pochi monumenti che si esauriscono. L'alta velocità si prenota bene appena escono le tariffe per le tue date." },
    { question: "Quali documenti servono per viaggiare in Italia?", answer: "Dipende dalla nazionalità. I visitatori extra UE hanno bisogno di un passaporto conforme alle regole UE sulla validità e, per alcune nazionalità, di un visto; i cittadini UE possono usare passaporto o carta d'identità. Verifica le fonti ufficiali per il tuo caso." },
    { question: "Conviene prenotare i treni in anticipo?", answer: "L'alta velocità sì, per avere più scelta di tariffe e posti, soprattutto nei periodi affollati. I regionali hanno tariffe fisse e si possono comprare il giorno stesso." },
    { question: "Quali monumenti vanno prenotati?", answer: "Pochi: Colosseo, Musei Vaticani, Cenacolo, Galleria Borghese, Museo Egizio e alcuni siti più piccoli con prenotazione obbligatoria. La maggior parte di chiese, piazze e mercati no." },
    { question: "Serve l'assicurazione di viaggio per l'Italia?", answer: "In genere non è obbligatoria per chi è esente dal visto, ma è molto consigliata, soprattutto per le spese mediche. Alcune domande di visto la richiedono." },
    { question: "Conviene noleggiare un'auto in Italia?", answer: "Solo per campagna, isole o piccoli centri. Tra le città il treno è più semplice ed evita multe ZTL e parcheggi." },
    { question: "Serve un'eSIM in Italia?", answer: "Non necessariamente. Con un piano UE in genere vale il roaming europeo; negli altri casi si può usare il roaming, una SIM locale o un'eSIM. I dati mobili servono per mappe e biglietti." },
    { question: "Quanti contanti portare?", answer: "Le carte sono accettate quasi ovunque: di solito basta una piccola somma per piccoli acquisti e mercati, con i bancomat a disposizione per il resto." },
    { question: "Conviene prenotare gli alberghi in anticipo?", answer: "Sì per alta stagione, eventi e zone centrali, dove le camere meglio posizionate finiscono per prime. Le tariffe flessibili aiutano se i piani possono cambiare." },
    { question: "Quante città visitare in un viaggio?", answer: "Più o meno una tappa ogni due–quattro notti: due o tre in una settimana, tre o quattro in due settimane." },
    { question: "Cosa mettere in valigia per l'Italia?", answer: "Scarpe comode, abiti a strati, qualcosa per coprirsi in chiesa, un adattatore e un power bank, più gli extra di stagione come crema solare o impermeabile." },
    { question: "Bisogna stampare i documenti di viaggio?", answer: "I biglietti digitali sono molto diffusi, ma tieni copie offline sul telefono e valuta di stampare i documenti chiave, come assicurazione e indirizzo del primo albergo, nel caso il telefono si scarichi." },
    { question: "Cosa fare il giorno prima della partenza?", answer: "Controlla il volo, conferma trasferimento e check-in, salva i biglietti offline, ricarica i dispositivi e metti documenti e carte nel bagaglio a mano." },
    { question: "Cosa controllare all'arrivo?", answer: "Il percorso per l'alloggio, le prenotazioni del primo giorno e il meteo — poi tieni leggera la giornata." },
  ],

  sourcesTitle: "Fonti ufficiali",
  sources: [
    { label: "Your Europe — documenti per i cittadini extra UE", url: "https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_it.htm", note: "validità del passaporto e ingresso" },
    { label: "Sistema di ingressi/uscite (EES) — Commissione europea", url: "https://home-affairs.ec.europa.eu/news/entryexit-system-ees-fully-operational-2026-04-10_en", note: "stato dell'EES" },
    { label: "ETIAS — sito ufficiale", url: "https://travel-europe.europa.eu/it/etias", note: "stato e data di avvio" },
    { label: "Ministero degli Affari Esteri — visti", url: "https://vistoperitalia.esteri.it/", note: "requisiti di visto per nazionalità" },
    { label: "Ministero delle Infrastrutture — scioperi", url: "https://scioperi.mit.gov.it/", note: "scioperi dei trasporti annunciati" },
  ],
};
