import type { ArticleContent, ContentBlock } from "@/lib/types";

const IMG = "/images/events/lucca-comics-games-2026";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

export const luccaComicsGames2026It: ArticleContent = {
  body: [
    answer("**Lucca Comics & Games 2026 si svolge da mercoledì 28 ottobre a domenica 1° novembre** a Lucca, in Toscana. La 60ª edizione, con il tema \"Legacy\", è una delle maggiori manifestazioni europee dedicate a fumetti, manga, giochi, anime e cultura pop. Per partecipare è necessario acquistare il biglietto in anticipo su TicketOne e ritirare il braccialetto presso uno dei cinque welcome desk ufficiali. Questa guida raccoglie tutto quello che serve sapere per organizzare la visita."),

    {
      type: "facts",
      title: "Lucca Comics & Games 2026 — informazioni essenziali",
      rows: [
        { label: "Date", value: "Mercoledì 28 ottobre – domenica 1° novembre 2026 (cinque giorni)" },
        { label: "Mostre anticipate", value: "Le mostre ufficiali aprono dal 3 ottobre 2026" },
        { label: "Luogo", value: "Lucca, Toscana — città storica murata, circa 80 km a ovest di Firenze e 20 km a est di Pisa" },
        { label: "Tema", value: "\"Legacy\" — 60° anniversario della manifestazione" },
        { label: "Limite giornaliero", value: "80.000 ingressi al giorno" },
        { label: "Biglietti", value: "Vendita esclusiva su TicketOne; per l'accesso alle aree a pagamento servono biglietto e braccialetto" },
        { label: "Sito ufficiale", value: "lucca2026.luccacomicsandgames.com" },
        { label: "Accessibilità", value: "Programma Senza Barriere; senzabarriere.luccacomicsandgames.com" },
        { label: "Dove dormire", value: "Lucca (disponibilità limitata, prenotare con anticipo), Pisa (30–38 min in treno), Montecatini Terme, Viareggio" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Che cos'è Lucca Comics & Games?",
        "L'edizione 2026: Legacy e il 60° anniversario",
        "Date, orari e programma",
        "Biglietti, braccialetto e accesso",
        "Come arrivare a Lucca",
        "Dove dormire",
        "Gli spazi della manifestazione",
        "Come organizzare la visita",
        "Cosplay, famiglie e accessibilità",
        "Cibo, servizi e cosa portare",
        "Lucca oltre la fiera",
        "Errori comuni da evitare",
      ],
    },

    image("lucca-bell-tower-rooftops", "Torri campanarie di pietra che si elevano sui tetti di terracotta del centro storico di Lucca", true),

    h2("Che cos'è Lucca Comics & Games?"),
    p("Lucca Comics & Games è la più grande manifestazione italiana dedicata ai fumetti, ai giochi e alla cultura pop, e una delle più importanti in Europa. Si svolge ogni anno nella città murata di Lucca, in ottobre-novembre, e copre un universo molto ampio: fumetti italiani e internazionali, manga, giochi da tavolo, giochi di ruolo, giochi di carte, videogiochi, anime, cinema fantastico, cosplay e tutto ciò che ruota attorno alla cultura del fantastico."),
    p("La manifestazione utilizza l'intera città storica come sede: strade, piazze, ex chiese, palazzi e padiglioni fieristici ospitano mostre, stand di editori, anteprime, incontri con gli autori, tornei, competizioni di cosplay e molto altro. L'ingresso alle aree espositive principali richiede il biglietto; alcune zone all'aperto e parte del centro storico sono invece ad accesso libero durante la manifestazione."),
    p("Il pubblico è estremamente variegato: collezionisti di fumetti, appassionati di giochi da tavolo, fan di anime e manga, cosplayer, famiglie, professionisti del settore. Le giornate di mercoledì e giovedì sono tradizionalmente più tranquille e accessibili rispetto al weekend, quando la città è particolarmente affollata."),

    image("lucca-hilltop-view", "Lo skyline storico di Lucca con le torri medievali e i campanili visti dalle colline toscane circostanti"),

    h2("L'edizione 2026: Legacy e il 60° anniversario"),
    p("L'edizione 2026 celebra i 60 anni di Lucca Comics & Games con il tema \"Legacy\". Il concept vuole onorare sei decenni di fumetti, giochi e cultura del fantastico e il modo in cui le opere creative passano da una generazione all'altra. Il manifesto ufficiale è stato concepito come un \"meta-poster\": un'illustrazione ricca di dettagli e rimandi ai protagonisti dei manifesti storici della manifestazione. Claudio Castellini ha collaborato a questo progetto; una variante del poster è stata realizzata da Louise Stéphant, fumettista francese di dieci anni, presentata alla cerimonia di apertura come simbolo del passaggio del testimone."),
    p("L'edizione del 60° anniversario vede la partecipazione di oltre 80 editori italiani e internazionali, più di 400 ospiti e un programma che spazia tra mostre, panel, anteprime e competizioni. Tra i nomi confermati figurano Go Nagai, Frank Miller, Jonathan Hickman e Peach Momoko. Il programma viene aggiornato progressivamente sul sito ufficiale: [lucca2026.luccacomicsandgames.com](https://lucca2026.luccacomicsandgames.com/it/)."),
    note("**Le mostre aprono prima della manifestazione.** Il programma delle mostre ufficiali comincia il 3 ottobre 2026, un mese intero prima delle giornate principali. Se siete in Toscana a ottobre, vale la pena verificare quali mostre siano già aperte prima del 28 ottobre."),

    h2("Date, orari e programma"),
    table(
      ["Giorno", "Data", "Note"],
      [
        ["Mercoledì", "28 ottobre 2026", "Apertura della manifestazione; giornata meno affollata"],
        ["Giovedì", "29 ottobre 2026", "Ancora accessibile; consigliata per chi visita per la prima volta"],
        ["Venerdì", "30 ottobre 2026", "Disponibilità limitata sul sito ufficiale a metà ottobre 2026"],
        ["Sabato", "31 ottobre 2026", "Giornata più affollata; anche Halloween; ultimi posti disponibili"],
        ["Domenica", "1° novembre 2026", "Chiusura; 1° novembre è Ognissanti, festività nazionale"],
      ],
      "Gli orari di apertura generali sono pubblicati sul sito ufficiale. Singoli eventi, mostre e spettacoli serali possono seguire orari diversi."
    ),
    p("Il programma ufficiale raccoglie centinaia di eventi distribuiti su più sedi. Per navigarlo in modo efficace, utilizzate i filtri per interesse, sede o data. Non tutti gli eventi sono inclusi nel biglietto giornaliero: alcuni incontri, firmacopie e competizioni richiedono prenotazione anticipata o pass specifici — verificate le singole schede evento."),
    p("Programma ufficiale: [lucca2026.luccacomicsandgames.com/it](https://lucca2026.luccacomicsandgames.com/it/)"),

    h2("Biglietti, braccialetto e accesso"),

    h3("Acquisto dei biglietti"),
    p("I biglietti per Lucca Comics & Games 2026 si acquistano esclusivamente su TicketOne, all'indirizzo [luccacomicsandgames.ticketone.it](https://www.ticketone.it/artist/lucca-comics-games/). Dal 1° ottobre 2026 sono disponibili anche nei punti vendita fisici TicketOne in tutta Italia. Il limite di acquisto online è di 5 biglietti per transazione."),
    p("I biglietti giornalieri vanno da circa 26,50 € (mercoledì) a 34,50 € (sabato); l'abbonamento cinque giorni è circa 95 € consegna inclusa. I prezzi sono quelli rilevati a ottobre 2026; verificate il costo esatto su TicketOne prima di procedere all'acquisto, poiché si possono aggiungere commissioni di servizio."),
    p("Il limite di ingressi è di 80.000 al giorno. A metà ottobre 2026, il venerdì 30 ottobre risultava con disponibilità limitata e il sabato 31 ottobre quasi esaurito. I biglietti sono acquistabili anche presso le biglietterie fisiche a Lucca durante la manifestazione, finché la capienza giornaliera non viene raggiunta."),

    note("**Acquistate solo su canali ufficiali.** I biglietti acquistati da rivenditori non autorizzati non possono essere verificati e non danno diritto a ottenere il braccialetto. Utilizzate esclusivamente TicketOne."),

    h3("Braccialetto e accesso"),
    p("Il biglietto da solo **non è sufficiente** per accedere alle aree a pagamento della manifestazione. Serve anche il braccialetto. Le modalità di ritiro sono due:"),
    ul(
      "**Consegna a domicilio (non più disponibile per il 2026).** Questa opzione era attiva fino alle 10:00 del 16 ottobre 2026. Non è più disponibile per questa edizione.",
      "**Ritiro ai welcome desk.** Cinque welcome desk sono attivi a Lucca dal 28 ottobre al 1° novembre, dalle 6:30 alle 18:30. È necessario presentare la conferma d'acquisto del biglietto e un documento d'identità valido. I braccialetti si possono ritirare anche nei punti vendita TicketOne GOLD prima della manifestazione."
    ),
    p("Le posizioni dei welcome desk e gli eventuali aggiornamenti sono pubblicati sul sito ufficiale. Arrivare al welcome desk la mattina presto è fortemente consigliato, soprattutto venerdì e sabato quando le code si allungano."),
    p("Una volta indossato, il braccialetto va mantenuto per tutta la giornata. Alcuni ingressi interni alla manifestazione possono prevedere ulteriori controlli."),

    h3("Biglietti accessibili"),
    p("I visitatori con disabilità possono richiedere un biglietto gratuito e un biglietto ridotto per l'accompagnatore attraverso il programma Senza Barriere, all'indirizzo [senzabarriere.luccacomicsandgames.com](https://senzabarriere.luccacomicsandgames.com/). Il modulo di richiesta per l'edizione 2026 era aperto fino al 18 ottobre 2026. Chi non ha fatto richiesta in anticipo può contattare direttamente il team Senza Barriere per verificare le opzioni disponibili durante i giorni della manifestazione."),
    tip("Il sito Senza Barriere fornisce anche informazioni sulle sedi e i percorsi accessibili. Consultatelo prima di partire se avete esigenze specifiche di mobilità."),

    image("lucca-medieval-street", "Una stretta via medievale di Lucca che conduce verso una delle caratteristiche torri di mattoni della città"),

    h2("Come arrivare a Lucca"),

    h3("In treno"),
    p("Lucca è ben collegata dalla rete ferroviaria regionale. I principali itinerari sono:"),
    ul(
      "**Da Pisa Centrale:** 30–38 minuti; è il collegamento più frequente e pratico. I treni circolano regolarmente durante tutta la giornata. Dall'aeroporto Galileo Galilei di Pisa, il PisaMover (circa 6,50 €, 5–8 minuti) collega l'aeroporto alla stazione centrale.",
      "**Da Firenze Santa Maria Novella:** In genere 1 ora e 20–40 minuti, con treno diretto o con cambio a Pisa. I collegamenti diretti sono i più veloci; verificate l'orario su Trenitalia.",
      "**Da Viareggio:** Circa 20–25 minuti, sulla stessa linea Pisa–Lucca–Firenze."
    ),
    p("La stazione ferroviaria di Lucca si trova appena fuori le mura, a circa 10 minuti a piedi dal centro storico. L'ingresso in città è semplice. Durante la manifestazione, la zona della stazione può essere molto affollata, soprattutto nel tardo pomeriggio del venerdì e del sabato."),
    p("Prenotate il treno di ritorno per tempo. I treni nelle serate dei giorni di punta si riempiono rapidamente. Consultate gli orari e acquistate i biglietti su [trenitalia.com](https://www.trenitalia.com/)."),
    tip("Se tornate a Pisa o Firenze venerdì o sabato sera, prenotate anche il treno di ritorno quando acquistate quello di andata. I treni da Lucca nelle serate di punta vanno esauriti."),

    h3("In auto"),
    p("Lucca è raggiungibile dall'autostrada A11 Firenze–Mare (uscite: Lucca Est o Lucca Ovest). Il centro storico è chiuso al traffico privato e i parcheggi nelle aree circostanti si riempiono presto. Le aree di parcheggio ufficiali sono comunicate dal Comune di Lucca e dall'organizzazione della manifestazione prima dell'evento."),
    p("Durante la manifestazione, le strade di accesso a Lucca possono essere soggette a chiusure temporanee e limitazioni al traffico. Consultate il Comune di Lucca ([comune.lucca.it](https://www.comune.lucca.it/)) e le comunicazioni ufficiali della manifestazione prima di mettervi alla guida."),
    p("Data la difficoltà di parcheggio e le restrizioni alla circolazione, arrivare in treno da Pisa o Firenze è generalmente più pratico rispetto all'auto, soprattutto per i visitatori giornalieri."),

    image("pisa-leaning-tower", "La Torre di Pisa si erge dal prato verde della Piazza dei Miracoli sotto un cielo azzurro"),

    h2("Dove dormire"),
    p("Lucca stessa si riempie rapidamente. Le strutture nel centro storico sono poche e vanno prenotate con molti mesi di anticipo. Se non avete già una sistemazione in città, le alternative più pratiche sono:"),

    h3("Pisa (base consigliata fuori Lucca)"),
    p("Pisa è l'alternativa più comoda: treni diretti ogni 30–38 minuti, ampia disponibilità di strutture ricettive e, per chi arriva in aereo, nessun trasferimento aggiuntivo. È adatta anche per chi vuole partecipare a più giornate della manifestazione. Anche i prezzi a Pisa aumentano durante il periodo di Lucca Comics — prenotate con anticipo e confrontate le tariffe."),

    h3("Viareggio e Lido di Camaiore"),
    p("Entrambe le località si trovano sulla stessa linea ferroviaria di Lucca, a circa 20–30 minuti di treno. Viareggio registra un'occupazione elevata nei periodi della manifestazione; verificate la disponibilità per tempo. Lido di Camaiore ha hotel che propongono pacchetti per Lucca Comics: si tratta di offerte commerciali degli alberghi, quindi confrontate sempre i prezzi su più canali prima di prenotare."),

    h3("Montecatini Terme"),
    p("Montecatini Terme, circa 25 km a sud-est di Lucca, si trova sulla linea ferroviaria Firenze–Lucca e offre una buona concentrazione di hotel. Può essere una base più tranquilla e, a volte, più conveniente. Il tempo di percorrenza fino a Lucca in treno è di circa 30–40 minuti: verificate l'orario prima di prenotare."),

    h3("Firenze"),
    p("Firenze è un'opzione possibile ma meno comoda come base quotidiana per la manifestazione. Il treno richiede 1 ora e 20–40 minuti di percorrenza, il che pesa se si vuole partecipare a più giornate. Ha senso se abbinate Lucca Comics a qualche giorno a Firenze — ma prima di scegliere l'alloggio, verificate sempre gli orari dell'ultimo treno serale da Lucca."),

    note("Qualunque sia la vostra base: controllate gli orari dei treni di ritorno nei giorni di manifestazione prima di finalizzare la prenotazione dell'alloggio. I treni del venerdì e del sabato sera da Lucca si esauriscono in anticipo."),

    image("lucca-city-walls-path", "Il viale alberato sulla sommità delle mura rinascimentali di Lucca, un anello di 4 km che sovrasta il centro storico"),

    h2("Gli spazi della manifestazione"),
    p("Lucca Comics & Games usa l'intera città storica come sede: il centro murato contiene decine di spazi espositivi, mercatini all'aperto, padiglioni al chiuso, teatri e piazze. La disposizione degli spazi cambia tra un'edizione e l'altra e alcune aree richiedono pass separati o prenotazioni specifiche. Consultate sempre la **mappa ufficiale aggiornata** su [lucca2026.luccacomicsandgames.com](https://lucca2026.luccacomicsandgames.com/it/) prima di arrivare."),
    p("La manifestazione è troppo grande per essere visitata integralmente in una sola giornata. Cercare di vedere tutto porta a lunghi spostamenti, code e stanchezza. L'approccio più efficace è quello di individuare due o tre priorità, localizzarle sulla mappa e pianificare la giornata attorno a quelle."),
    ul(
      "**Fumetti ed editori:** I principali padiglioni editoriali e le code per i firmacopie — verificate le posizioni sulla mappa ufficiale.",
      "**Giochi:** Tornei di giochi da tavolo, sale per giochi di carte e demo videogiochi hanno spazi dedicati. Alcuni eventi richiedono preiscrizione.",
      "**Anime e manga:** Padiglioni e incontri specifici per editori e ospiti del settore.",
      "**Cosplay:** Le gare e gli eventi di cosplay si tengono in arene o piazze specifiche; consultate il programma per orari e location.",
      "**Piazze e aree aperte:** Alcune zone all'aperto della manifestazione sono accessibili a tutti; altre rientrano nelle aree a biglietto."
    ),
    tip("La Piazza dell'Anfiteatro — costruita sul perimetro di un anfiteatro romano, accessibile solo attraverso quattro piccoli archi — è uno degli spazi più caratteristici di Lucca e spesso ospita attività della manifestazione. Gli spostamenti tra le sedi richiedono più tempo di quanto sembri sulla mappa: calcolate 10–20 minuti per ogni trasferimento."),

    h2("Come organizzare la visita"),

    h3("Piano per una giornata (prima visita)"),
    p("Scegliete un'area della manifestazione come priorità principale — per esempio i padiglioni fumettistici, le sale giochi o le mostre di anime e manga. Cercate le sedi rilevanti e verificate se gli eventi che vi interessano richiedono prenotazione anticipata o orari di ingresso specifici."),
    p("Arrivate a Lucca la mattina, possibilmente prima delle 10:00. Ritirate prima il braccialetto se non lo avete già fatto a un punto vendita TicketOne GOLD. Calcolate 20–30 minuti di attesa al welcome desk, di più il sabato. Una volta dentro, seguite la vostra priorità. Concedete una pausa verso mezzogiorno — la città offre bar, caffè e ristoranti ovunque. Tornate alla manifestazione per i pomeriggi, e puntate a rientrare in alloggio entro le 18:00–19:00 per evitare il picco del traffico serale."),

    h3("Piano per due giornate"),
    p("Con due giornate a disposizione, dividete l'esperienza in modo deliberato. Primo giorno: concentratevi sull'area principale del vostro interesse — seguite le priorità, partecipate agli eventi per cui vi siete preiscritti. Secondo giorno: usate la mappa ufficiale per esplorare le parti della manifestazione non raggiunte il giorno prima, e riservate del tempo per camminare sulle mura o visitare la Piazza dell'Anfiteatro senza l'urgenza del programma. Mercoledì e giovedì sono più tranquilli: se avete flessibilità, preferite i primi giorni al weekend."),
    p("Questo è un suggerimento editoriale, non un programma ufficiale della manifestazione. Attività, code e disponibilità delle sedi cambiano durante i giorni di evento. Controllate il programma ogni mattina."),

    image("lucca-rooftops-panorama", "Panorama sui tetti di terracotta e sui campanili di Lucca fotografati dall'alto nella luce calda del pomeriggio"),

    h2("Cosplay, famiglie e accessibilità"),

    h3("Partecipare in cosplay"),
    p("Lucca Comics & Games è uno degli eventi di cosplay più importanti d'Italia. Una parte consistente dei visitatori arriva in costume, e le strade del centro storico durante la manifestazione diventano esse stesse uno spettacolo. Il cosplay non è solo un'attività: è parte dell'atmosfera generale della città."),
    p("Il programma prevede gare e eventi cosplay ufficiali in arene e piazze specifiche. Se volete partecipare alle competizioni, verificate le scadenze di iscrizione, le categorie e il regolamento sulle pagine ufficiali dei singoli eventi. Le restrizioni su oggetti di scena — dimensioni, materiali, armi in replica — variano da sede a sede. Controllate le regole aggiornate sul sito ufficiale prima di partire: quelle delle edizioni precedenti potrebbero non essere applicabili nel 2026."),

    h3("Visitare con i bambini"),
    p("La manifestazione è generalmente adatta alle famiglie, specialmente nei giorni di mercoledì e giovedì quando i visitatori sono meno. L'atmosfera all'aperto, i costumi e molte delle esposizioni sono accessibili e divertenti anche per i bambini. Il sabato le folle sono molto dense e possono essere difficili per i più piccoli. Alcuni eventi serali o sezioni tematiche sono rivolti a un pubblico adulto: verificate le singole schede del programma."),
    p("I servizi per famiglie all'interno della manifestazione variano da sede a sede. Consultate le pagine di accessibilità e Senza Barriere per informazioni specifiche sui servizi familiari."),

    h3("Accessibilità"),
    p("Il programma Senza Barriere offre biglietti accessibili gratuiti (più un biglietto ridotto per l'accompagnatore) e informazioni sulle sedi e i percorsi accessibili. Contattate il programma tramite [senzabarriere.luccacomicsandgames.com](https://senzabarriere.luccacomicsandgames.com/) per informazioni specifiche. Tenete presente che il centro storico di Lucca presenta strade acciottolate e superfici irregolari che possono rendere la circolazione con sedia a rotelle o ausili per la mobilità più impegnativa in alcune zone."),

    h2("Cibo, servizi e cosa portare"),
    p("All'interno della manifestazione ci sono stand alimentari nelle principali aree, e il centro storico di Lucca offre una varietà di bar, caffè, trattorie e ristoranti. Durante la fiera, i locali più centrali si riempiono rapidamente, soprattutto a pranzo e nel primo pomeriggio. Pranzare prima delle 12:30 o dopo le 14:00 aiuta a evitare le file più lunghe."),
    p("Cosa portare con sé:"),
    ul(
      "**Scarpe comode.** La manifestazione richiede molti chilometri di cammino su acciottolato.",
      "**Abbigliamento a strati.** Fine ottobre a Lucca può essere mite di giorno e fresco la sera. Un impermeabile leggero è utile in caso di pioggia.",
      "**Un power bank.** Il telefono servirà continuamente per il programma, la mappa e il biglietto. La batteria si consuma rapidamente nelle lunghe giornate di fiera.",
      "**Acqua.** Rimanete idratati. In città ci sono fontane pubbliche.",
      "**Biglietto e braccialetto.** Il braccialetto va indossato per tutta la giornata e non va rimosso.",
      "**Un documento d'identità valido.** Necessario per il ritiro del braccialetto ai welcome desk."
    ),
    p("Eventuali restrizioni sulle dimensioni del bagaglio, sugli oggetti vietati o sulle norme relative al cibo all'interno delle singole sedi sono comunicate sul sito ufficiale e all'ingresso delle aree. Non date per scontato che le regole delle edizioni precedenti siano invariate."),
    tip("Zaini voluminosi e trolley rallentano gli spostamenti tra la folla. Una borsa da giorno con l'essenziale è molto più pratica."),

    image("lucca-clock-tower", "Una torre dell'orologio storica di Lucca incorniciata dai rami degli alberi in una piazza tranquilla"),

    h2("Lucca oltre la fiera"),
    p("Lucca vale la visita anche al di fuori del programma della manifestazione. Le mura rinascimentali — un anello di quattro chilometri con un ampio viale alberato sulla sommità — sono la caratteristica più distintiva della città: camminare o pedalare sulle mura è gratuito e offre una prospettiva unica sul centro storico e sulle colline circostanti."),
    p("La Piazza dell'Anfiteatro, costruita sull'impronta di un anfiteatro romano con accesso solo attraverso quattro piccoli archi, è uno degli spazi architettonicamente più particolari della Toscana. La Torre Guinigi, con le querce che crescono sulla sua sommità, e la Torre delle Ore, la torre campanaria più alta della città, sono altri luoghi da non perdere. Le chiese principali sono San Michele in Foro e il Duomo di San Martino."),
    p("Durante la manifestazione, alcune strade, percorsi e punti di accesso possono essere soggetti a restrizioni o chiusure temporanee legate all'organizzazione dell'evento. Consultate le ordinanze del Comune di Lucca ([comune.lucca.it](https://www.comune.lucca.it/)) per eventuali limitazioni attive nei giorni della manifestazione."),
    p("Per approfondire gli spostamenti in Toscana e la pianificazione del viaggio in Italia, consultate [Viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno) e [Come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),

    image("lucca-piazza-plaza", "Ciclisti e pedoni attraversano una piazza soleggiata di Lucca, incorniciata da portici storici in pietra"),

    h2("Errori comuni da evitare"),
    ul(
      "**Prenotare l'alloggio senza verificare il treno di ritorno.** Scegliete la vostra base in funzione degli orari dell'ultimo treno, non solo della prossimità o del prezzo.",
      "**Credere che basti il biglietto per entrare.** Servono biglietto valido e braccialetto. Dimenticarsi del ritiro del braccialetto significa non poter accedere alle aree a pagamento.",
      "**Usare la mappa o il programma dell'anno scorso.** La disposizione delle sedi cambia tra un'edizione e l'altra. Utilizzate solo la mappa ufficiale del 2026.",
      "**Pianificare troppe attività in una giornata.** La manifestazione è molto più grande di quanto sembri sulla mappa della città. Code, tempi di spostamento e durata degli eventi si sommano. Due o tre priorità al giorno sono un obiettivo realistico.",
      "**Non prenotare per gli eventi specifici.** Alcuni firmacopie, incontri e competizioni richiedono prenotazione anticipata. Verificate le singole schede del programma per ogni evento che volete seguire.",
      "**Ignorare le comunicazioni ufficiali su strade e trasporti.** Il Comune di Lucca pubblica ordinanze e avvisi prima di ogni edizione. Questi riguardano parcheggi, accesso viabilistico e, a volte, modifiche al trasporto pubblico.",
      "**Arrivare di sabato senza un piano.** Il sabato 31 ottobre è la giornata più affollata — anche Halloween. Senza una sede prioritaria e un piano realistico per gestire le folle, l'esperienza può diventare caotica."
    ),
  ],

  faqs: [
    {
      question: "Quando si tiene Lucca Comics & Games 2026?",
      answer: "Lucca Comics & Games 2026 si svolge da mercoledì 28 ottobre a domenica 1° novembre 2026, con le mostre ufficiali aperte dal 3 ottobre. La manifestazione ha sede nella città storica murata di Lucca, in Toscana.",
    },
    {
      question: "Dove si acquistano i biglietti per Lucca Comics & Games 2026?",
      answer: "I biglietti si acquistano esclusivamente su TicketOne, all'indirizzo luccacomicsandgames.ticketone.it, e nei punti vendita fisici TicketOne GOLD in tutta Italia. Non acquistate da rivenditori non autorizzati: solo i biglietti TicketOne ufficiali consentono il ritiro del braccialetto.",
    },
    {
      question: "Serve anche il braccialetto oltre al biglietto?",
      answer: "Sì. Per accedere alle aree a pagamento della manifestazione sono necessari sia il biglietto valido sia il braccialetto. L'opzione di ricezione del braccialetto per posta è scaduta il 16 ottobre 2026. Per l'edizione 2026 il braccialetto deve essere ritirato presso uno dei cinque welcome desk ufficiali a Lucca (aperti dalle 6:30 alle 18:30 in tutti i giorni di manifestazione) oppure in anticipo nei punti vendita TicketOne GOLD.",
    },
    {
      question: "Quanto costano i biglietti per Lucca Comics & Games 2026?",
      answer: "I biglietti giornalieri vanno da circa 26,50 € (mercoledì) a 34,50 € (sabato). L'abbonamento cinque giorni è circa 95 €. Verificate i prezzi aggiornati su TicketOne prima dell'acquisto, poiché si possono aggiungere diritti di prevendita.",
    },
    {
      question: "Come si arriva a Lucca in treno?",
      answer: "Da Pisa Centrale: 30–38 minuti con treno regionale. Da Firenze Santa Maria Novella: circa 1 ora e 20–40 minuti (diretto o con cambio a Pisa). Consultate trenitalia.com per orari e biglietti. Prenotate il ritorno per tempo — i treni nei giorni di punta si riempiono rapidamente, specialmente venerdì e sabato sera.",
    },
    {
      question: "Si può dormire a Pisa e raggiungere la manifestazione in treno?",
      answer: "Sì. Pisa è la base alternativa più comoda, con treni diretti ogni 30–38 minuti e una maggiore disponibilità di alloggi. Per chi arriva in aereo a Pisa, elimina anche uno spostamento aggiuntivo. Anche i prezzi pisani aumentano durante il periodo di Lucca Comics — prenotate per tempo.",
    },
    {
      question: "Lucca Comics & Games è adatto ai bambini?",
      answer: "In generale sì, soprattutto nelle giornate di mercoledì e giovedì quando c'è meno affollamento. L'atmosfera all'aperto, i costumi e molte esposizioni sono adatti alle famiglie. Il sabato le folle sono molto dense e possono essere difficili per i bambini piccoli. Alcuni eventi serali sono rivolti a un pubblico adulto — verificate le singole schede del programma.",
    },
    {
      question: "Qual è il tema dell'edizione 2026?",
      answer: "Il tema del 2026 è \"Legacy\", per celebrare i 60 anni di Lucca Comics & Games. Il programma comprende fumetti, manga, giochi, anime, cinema e cosplay, con ospiti confermati tra cui Go Nagai, Frank Miller, Jonathan Hickman e Peach Momoko.",
    },
    {
      question: "Ci sono servizi per visitatori con disabilità?",
      answer: "Sì. Il programma Senza Barriere offre biglietti accessibili gratuiti (più ridotto per l'accompagnatore) e informazioni sulle sedi accessibili. Il modulo di richiesta per il 2026 era aperto fino al 18 ottobre; chi non ha fatto domanda può contattare direttamente il team tramite senzabarriere.luccacomicsandgames.com.",
    },
    {
      question: "Dove trovo il programma ufficiale aggiornato e la mappa delle sedi?",
      answer: "Sul sito ufficiale dell'edizione 2026: lucca2026.luccacomicsandgames.com. Il programma viene aggiornato progressivamente; consultate il sito la mattina della visita per eventuali variazioni di orari o sedi.",
    },
    {
      question: "Cosa fare prima di tutto quando si arriva a Lucca?",
      answer: "Ritirate il braccialetto se non l'avete già fatto in anticipo a un punto vendita TicketOne GOLD. I welcome desk aprono alle 6:30. Arrivare presto — possibilmente prima delle 9:00 nei giorni feriali o delle 8:00 il sabato — riduce significativamente i tempi di attesa.",
    },
  ],

  sources: [
    {
      label: "Lucca Comics & Games 2026 — sito ufficiale",
      url: "https://lucca2026.luccacomicsandgames.com/it/home",
      note: "Sito ufficiale dell'edizione 2026; date, tema, programma e biglietti. Verificato il 18 ottobre 2026.",
    },
    {
      label: "Biglietti — Lucca Comics & Games 2026 (ufficiale)",
      url: "https://lucca2026.luccacomicsandgames.com/it/biglietti",
      note: "Pagina ufficiale dei biglietti; prezzi, disponibilità e modalità di ritiro del braccialetto. Verificato il 18 ottobre 2026.",
    },
    {
      label: "TicketOne — Lucca Comics & Games 2026",
      url: "https://www.ticketone.it/artist/lucca-comics-games/",
      note: "Piattaforma di vendita ufficiale; listino biglietti giornalieri. Verificato il 18 ottobre 2026.",
    },
    {
      label: "Senza Barriere — Lucca Comics & Games 2026",
      url: "https://senzabarriere.luccacomicsandgames.com/",
      note: "Programma ufficiale di accessibilità; biglietti gratuiti per visitatori con disabilità e biglietti ridotti per accompagnatori.",
    },
    {
      label: "Comune di Lucca — ordinanze per Lucca Comics & Games 2026",
      url: "https://www.comune.lucca.it/notizia/lucca-comics-and-games-2026-tutte-le-ordinanze-e-i-provvedimenti-per-ledizione-2026/",
      note: "Ordinanze e provvedimenti ufficiali per la viabilità e l'organizzazione dell'edizione 2026.",
    },
    {
      label: "Trenitalia — orari e biglietti",
      url: "https://www.trenitalia.com/",
      note: "Acquisto biglietti e orari ufficiali per i collegamenti Pisa–Lucca e Firenze–Lucca.",
    },
  ],

  sourcesTitle: "Fonti e riferimenti ufficiali",
};
