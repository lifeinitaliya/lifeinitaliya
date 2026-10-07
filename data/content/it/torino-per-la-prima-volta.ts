import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana della guida a Torino, scritta per chi legge in italiano.
// Biglietti e giorni di chiusura dei musei, collegamenti con l'aeroporto,
// pagamento contactless GTT, tranvia Sassi–Superga e siti UNESCO sono stati
// verificati sui siti ufficiali a settembre 2026. Prezzi, orari e tempi di
// viaggio non vengono citati, tranne Milano–Torino, coerente con la guida ai treni.

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

const IMG = "/images/cities/turin-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const torinoPerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Torino si stende lungo il Po ai piedi delle Alpi, nell'angolo nord-occidentale d'Italia. Per quasi tre secoli è stata la capitale di Casa Savoia e nel 1861 è diventata la prima capitale del Regno d'Italia appena unificato. Ne è nata una città di strade dritte e porticate, piazze monumentali e palazzi reali, con una forte identità regionale, una cultura del caffè che ha dato all'Italia il vermut e il gianduia, e un Novecento segnato dalla Fiat e dall'industria dell'auto."),

    // ——— 1 ———
    h2("Vale la pena visitare Torino?"),
    answer("**Sì, soprattutto se ti interessano musei, architettura e cucina.** Torino funziona in modo diverso dalle città più famose d'Italia. Non ha un unico monumento simbolo che riassuma la visita, come Roma o Firenze; offre invece una capitale barocca pianificata, al Museo Egizio una delle più importanti collezioni al mondo di arte egizia antica, la Mole Antonelliana con il suo museo del cinema, i Musei Reali e una tradizione tutta sua di caffè e aperitivo. **Due giorni** bastano per il centro e due grandi musei; **tre** lasciano tempo per Superga, un quartiere o una residenza reale fuori città. **L'auto non serve**: il centro è in piano e si gira a piedi, e tram, bus e una linea di metropolitana fanno il resto. **Prenota in anticipo** il Museo Egizio, che vende biglietti solo online."),
    p("Torino non è una Milano in piccolo. Le due città distano meno di un'ora di alta velocità, ma la griglia di vie porticate, le piazze regali e un ritmo più disteso danno a Torino un carattere proprio. Ed è la porta d'accesso naturale alle colline del vino piemontese e alle Alpi occidentali."),

    // ——— 2 ———
    h2("Torino in sintesi"),
    {
      type: "facts",
      title: "Torino in sintesi",
      rows: [
        { label: "Ideale per", value: "Musei, architettura reale e barocca, caffè storici, cucina e vino" },
        { label: "Durata consigliata", value: "2–3 giorni" },
        { label: "Tempo minimo", value: "1 giorno pieno per il centro e un grande museo" },
        { label: "Tempo ideale", value: "3 giorni, o 4–5 con il Piemonte" },
        { label: "Zona storica principale", value: "Piazza Castello, via Roma, via Po e Quadrilatero Romano" },
        { label: "Musei principali", value: "Museo Egizio, Museo Nazionale del Cinema (nella Mole), Musei Reali" },
        { label: "Aeroporto", value: "Torino Airport (Caselle), a nord della città" },
        { label: "Stazioni principali", value: "Torino Porta Nuova e Torino Porta Susa" },
        { label: "Come muoversi", value: "A piedi, con tram, bus e la linea 1 della metro GTT" },
        { label: "Gite facili", value: "Superga, Reggia di Venaria, Asti; le Langhe in auto o con un tour" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/turin-skyline-mole-alps.webp`,
      alt: "I tetti di Torino al tramonto con l'alta guglia della Mole Antonelliana e le Alpi innevate all'orizzonte",
      caption: "Torino e la Mole Antonelliana, con le Alpi alle spalle della città.",
      credit: unsplash("Matteo Giallongo", "matteogiallongo"),
      wide: true,
    },

    // ——— 3 ———
    h2("Quanti giorni servono a Torino?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Piazza Castello, via Roma, piazza San Carlo e un grande museo — l'Egizio o la Mole", "Bisogna scegliere tra i musei principali"],
        ["2 giorni", "Egizio e Mole, i Musei Reali o Palazzo Madama, un giro dei caffè e un aperitivo", "Poco tempo fuori dal centro"],
        ["3 giorni", "Si aggiungono Superga, il Valentino, un quartiere come San Salvario o la Reggia di Venaria", "Sufficiente per la maggior parte delle prime visite"],
        ["4 giorni o più", "Torino più il Piemonte: Langhe, Alba, Asti o le Alpi", "Le colline del vino sono molto più semplici in auto o con un tour"],
      ],
      "Quanto fermarsi a Torino"
    ),
    p("Non c'è una durata giusta per tutti. Un giorno basta per capire che vale la pena tornare; due danno un'introduzione vera; tre permettono di rallentare."),

    // ——— 4 ———
    h2("Per che cosa è famosa Torino"),
    ul(
      "**Casa Savoia** — la dinastia che governò da Torino e divenne la famiglia reale d'Italia, lasciando palazzi, piazze e residenze iscritti dall'UNESCO.",
      "**Il Museo Egizio** — una collezione di arte e oggetti dell'antico Egitto presente a Torino dall'Ottocento.",
      "**La Mole Antonelliana** — il simbolo della città, sede del Museo Nazionale del Cinema.",
      "**I portici** — chilometri di vie porticate che permettono di attraversare il centro al coperto.",
      "**Caffè e cioccolato** — i caffè storici, il bicerin, il gianduia e il gianduiotto.",
      "**Vermut e aperitivo** — il Vermouth di Torino è un'indicazione geografica protetta.",
      "**Auto e industria** — la Fiat, il Lingotto e il Museo Nazionale dell'Automobile.",
      "**Il calcio** — Juventus e Torino.",
    ),

    // ——— 5 ———
    h2("Cosa vedere a Torino"),
    p("I giorni di apertura cambiano da museo a museo, e diversi chiudono in giorni diversi della settimana. Prima di organizzare una giornata intorno a un museo, controlla il sito ufficiale."),
    h3("La Mole Antonelliana e il Museo Nazionale del Cinema"),
    p("Alessandro Antonelli iniziò la Mole nel 1863 come sinagoga; la città la rilevò e fu completata nel 1889, con una guglia che domina ancora lo skyline. All'interno, il Museo Nazionale del Cinema riempie l'immensa aula centrale di storia del cinema, scenografie e proiezioni, e un ascensore di vetro sale nel mezzo dell'edificio fino a una terrazza panoramica. Secondo il museo, museo e ascensore sono **chiusi il martedì**, ed è fortemente consigliato acquistare il biglietto online per evitare code. Calcola due o tre ore per museo e ascensore; il solo ascensore richiede molto meno."),
    h3("Il Museo Egizio"),
    p("Fondato nel 1824, il Museo Egizio custodisce una delle raccolte di antichità egizie più importanti fuori dall'Egitto: statue, sarcofagi e mummie, papiri, oggetti quotidiani e interi corredi funerari. Secondo il museo, **i biglietti si acquistano solo online**, e il lunedì l'orario è ridotto. Calcola almeno due ore e mezza o tre. Se a Torino vedi un solo museo, di solito è questo."),
    important("Il Museo Egizio vende i biglietti solo online, e nei giorni di punta possono esaurirsi. Prenota la fascia oraria appena hai le date, e controlla sul sito ufficiale aperture straordinarie e variazioni.", "Prenota l'Egizio in anticipo"),
    h3("Piazza Castello, i Musei Reali e la Cappella della Sindone"),
    p("Piazza Castello era il cuore della capitale sabauda, chiusa da Palazzo Reale, Palazzo Madama, il Teatro Regio e i palazzi porticati del governo. I **Musei Reali** riuniscono gli appartamenti di rappresentanza di Palazzo Reale, l'Armeria Reale, la Galleria Sabauda, il Museo di Antichità con i resti del teatro romano e i Giardini Reali. Il percorso unico comprende anche la **Cappella della Sindone** di Guarino Guarini, con la sua cupola vertiginosa, restaurata dopo l'incendio del 1997. Secondo i Musei Reali, sono **chiusi il mercoledì**; i visitatori singoli possono comprare il biglietto in biglietteria o online, e online si evitano le code. Il biglietto vale per tutta la giornata. Calcola tre ore o più."),
    h3("Palazzo Madama"),
    p("Al centro di piazza Castello, Palazzo Madama racconta in un solo edificio la storia di Torino: una porta romana, un castello medievale, una facciata e uno scalone settecenteschi di Filippo Juvarra. Ospita il Museo Civico d'Arte Antica. Secondo diversi elenchi di solito è chiuso il martedì; verifica prima di andare. Calcola un'ora e mezza o due."),
    {
      type: "image",
      src: `${IMG}/palazzo-madama-piazza-castello.webp`,
      alt: "La facciata barocca in pietra di Palazzo Madama in piazza Castello a Torino, con statue lungo il cornicione",
      caption: "Palazzo Madama e la facciata di Filippo Juvarra su piazza Castello.",
      credit: unsplash("Riccardo Tuninato", "tuna96"),
    },
    h3("Il Duomo"),
    p("Dietro Palazzo Reale, il Duomo rinascimentale di San Giovanni Battista è collegato alla Cappella della Sindone. La Sindone è custodita qui, ma viene mostrata al pubblico solo durante rare ostensioni annunciate con anticipo. La visita al Duomo richiede 15–20 minuti."),
    h3("Via Roma, piazza San Carlo e i portici"),
    p("Via Roma scende da piazza Castello alla stazione di Porta Nuova tra portici e negozi. A metà strada, **piazza San Carlo** è una delle piazze più scenografiche di Torino, con le chiese gemelle di Santa Cristina e San Carlo su un lato e i caffè storici sotto i portici. Tra via Roma e piazza Castello meritano una deviazione le gallerie coperte in vetro dell'Otto e Novecento, come la **Galleria Subalpina** e la **Galleria San Federico**."),
    {
      type: "image",
      src: `${IMG}/piazza-san-carlo-evening.webp`,
      alt: "Piazza San Carlo a Torino al crepuscolo, con le due chiese barocche gemelle illuminate e persone che attraversano la piazza",
      caption: "Le chiese gemelle di Santa Cristina e San Carlo in piazza San Carlo.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },
    {
      type: "image",
      src: `${IMG}/via-roma-arcades.webp`,
      alt: "I portici di via Roma a Torino sui due lati della strada, con in fondo le chiese di piazza San Carlo al tramonto",
      caption: "I portici di via Roma, verso piazza San Carlo.",
      credit: unsplash("Wendy Dekker", "wendydekker"),
    },
    h3("Porta Palazzo"),
    p("A nord del centro, piazza della Repubblica ospita Porta Palazzo, un grandissimo mercato all'aperto con banchi di frutta e verdura, padiglioni coperti per carne, pesce e formaggi e un vivace via vai di torinesi. È più animato la mattina ed è un bel contrasto con il centro aulico. Calcola un'ora."),
    h3("Il Parco del Valentino e il Castello del Valentino"),
    p("A sud del centro, lungo il Po, il Valentino è il parco principale di Torino. Il **Castello del Valentino**, residenza sabauda oggi sede della facoltà di Architettura del Politecnico, fa parte del sito UNESCO; poco lontano, il **Borgo Medievale** è la ricostruzione di un villaggio medievale realizzata per l'esposizione del 1884. Perfetto per una passeggiata o un giro in bici."),
    {
      type: "image",
      src: `${IMG}/castello-del-valentino-po.webp`,
      alt: "Il Castello del Valentino visto dall'altra sponda del Po a Torino, con un kayak sull'acqua",
      caption: "Il Castello del Valentino sul Po, parte delle residenze sabaude UNESCO.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },
    h3("La Basilica di Superga"),
    p("Su una collina a est della città, la basilica settecentesca di Juvarra custodisce le tombe di molti membri di Casa Savoia e guarda Torino con le Alpi sullo sfondo. Dietro c'è la lapide che ricorda il Grande Torino, la squadra scomparsa quando il suo aereo si schiantò sulla collina nel 1949. Ci si arriva con la storica **tranvia a dentiera Sassi–Superga**, che GTT ha riattivato ad aprile 2026 dopo la manutenzione; secondo GTT il mercoledì non circola, quindi controlla l'orario. Calcola mezza giornata compreso il viaggio."),
    {
      type: "image",
      src: `${IMG}/basilica-di-superga.webp`,
      alt: "La Basilica di Superga con la cupola e i due campanili in cima a una collina boscosa sopra Torino",
      caption: "La Basilica di Superga sulla collina a est della città.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },

    // ——— 6 ———
    h2("La Torino reale e barocca"),
    p("Secondo l'UNESCO, quando il duca Emanuele Filiberto di Savoia trasferì la capitale a Torino nel 1562 avviò un programma edilizio che i successori portarono avanti per due secoli. Il fulcro era la «Zona di Comando» intorno a piazza Castello, con Palazzo Reale, Palazzo Madama e gli uffici dello Stato; da lì si irradiavano viali rettilinei verso una corona di residenze di campagna e palazzine di caccia."),
    p("Architetti come Guarino Guarini e Filippo Juvarra diedero alla città il suo carattere barocco: strade pianificate, facciate uniformi, piazze porticate e chiese dalle cupole complesse. Nel 1997 l'UNESCO ha iscritto le **Residenze Sabaude**: 22 palazzi e ville, 11 nel centro di Torino e 11 nei dintorni, tra cui Palazzo Reale, Palazzo Madama, il Castello del Valentino, la Reggia di Venaria, la Palazzina di Caccia di Stupinigi e il Castello di Rivoli."),
    p("I Savoia divennero poi la famiglia reale d'Italia, e Torino fu capitale del Regno d'Italia dal 1861 fino al trasferimento a Firenze nel 1865. Questa storia spiega perché la città sembri più una capitale europea pianificata che un borgo medievale italiano."),

    // ——— 7 ———
    h2("I musei di Torino"),
    table(
      ["Museo", "Ideale per", "Tempo indicativo", "Da sapere per la prenotazione"],
      [
        ["Museo Egizio", "L'antico Egitto", "2 ore e mezza–3 ore", "Biglietti solo online; orario ridotto il lunedì"],
        ["Museo Nazionale del Cinema (Mole)", "Storia del cinema e ascensore panoramico", "2–3 ore", "Chiuso il martedì; meglio comprare online"],
        ["Musei Reali", "Appartamenti reali, armeria, pittura, antichità", "3 ore o più", "Chiusi il mercoledì; online si evitano le code"],
        ["Palazzo Madama", "Arte medievale e rinascimentale in un edificio stratificato", "1 ora e mezza–2 ore", "Di solito chiuso il martedì; verifica"],
        ["Museo Nazionale dell'Automobile (MAUTO)", "Design dell'auto e storia industriale", "Circa 2 ore", "A sud del centro; verifica i giorni di apertura"],
        ["Juventus Museum e Allianz Stadium", "Appassionati di calcio", "Circa 2 ore con il tour", "Posti limitati per lo stadium tour, da acquistare online; nei giorni di partita cambia tutto"],
      ],
      "Scegliere i musei di Torino"
    ),
    p("Con poco tempo non provare a vederli tutti. Scegli in base ai tuoi interessi: l'**Egizio** per la storia antica, la **Mole** per l'edificio e il panorama (e per il cinema), i **Musei Reali** per la Torino sabauda. Due grandi musei in un giorno bastano; tre stancano."),
    p("Tra gli altri musei, al Lingotto c'è l'ex stabilimento Fiat con la pista di collaudo sul tetto, e il Castello di Rivoli, a ovest della città, è un museo d'arte contemporanea in una residenza sabauda."),

    // ——— 8 ———
    h2("Caffè, cioccolato e cucina"),
    p("La cucina di Torino fa parte di quella piemontese, una delle più ricche d'Italia, ma alcune cose sono specificamente torinesi. Conviene distinguere."),
    h3("Legati in particolare a Torino"),
    ul(
      "**Bicerin** — bevanda a strati di caffè, cioccolato e crema di latte servita in un bicchierino; una tradizione dei caffè torinesi dal Settecento (vedi [Il caffè italiano](/it/cibo/caffe-italiano)).",
      "**Gianduia e gianduiotto** — il gianduia è una crema liscia di cioccolato e nocciole piemontesi nata dai cioccolatieri torinesi nell'Ottocento; il gianduiotto è il cioccolatino a forma di barchetta che se ne ricava (vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)).",
      "**Vermut** — vino aromatizzato con assenzio ed erbe, prodotto a Torino dalla fine del Settecento. Il *Vermouth di Torino* è indicazione geografica protetta dal 2017.",
      "**Grissini** — bastoncini di pane sottili che, secondo la tradizione, sono nati a Torino.",
      "**I caffè storici** — molti con arredi ottocenteschi, soprattutto intorno a piazza Castello, piazza San Carlo e via Po.",
    ),
    h3("La cucina piemontese"),
    ul(
      "**Agnolotti** — piccola pasta ripiena; gli *agnolotti del plin*, pizzicati, sono legati a Langhe e Monferrato.",
      "**Tajarin** — tagliolini sottili e ricchi di tuorlo tipici delle Langhe, spesso con burro e, in autunno, tartufo bianco.",
      "**Vitello tonnato** — fettine di vitello con salsa di tonno e capperi, servite fredde come antipasto.",
      "**Bagna càuda** — intingolo caldo di aglio, acciughe e olio con le verdure, piatto conviviale d'autunno e d'inverno del Piemonte meridionale.",
      "**Bollito misto** e **brasato al Barolo** — carni bollite con le salse, e manzo stufato nel vino rosso.",
      "**Nocciole** — la *Nocciola Piemonte* si ritrova in cioccolato, torte e gelato.",
      "**Vino** — Barolo e Barbaresco da uve Nebbiolo, Barbera, Dolcetto e Moscato d'Asti. Vedi [I vini regionali italiani](/it/cibo/vini-regionali-italiani).",
      "**Bonet** — budino al cioccolato e amaretti.",
    ),
    p("I menu piemontesi sono ricchi e strutturati in più portate, spesso aperti da una serie di antipasti. Molte trattorie propongono menu fissi di piatti del territorio; nel fine settimana conviene prenotare la cena. Per la struttura del pasto in tutta Italia, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    {
      type: "image",
      src: `${IMG}/turin-glass-roofed-arcade.webp`,
      alt: "Una galleria commerciale coperta in vetro nel centro di Torino, con pavimenti di marmo, vetrine decorate e lampioni",
      caption: "Una delle gallerie coperte del centro di Torino.",
      credit: unsplash("Alexander Schimmeck", "alschim"),
    },

    // ——— 9 ———
    h2("L'aperitivo a Torino"),
    p("L'aperitivo è il drink del tardo pomeriggio prima di cena, di solito tra le 18 e le 20, e Torino può rivendicarlo grazie al vermut. Tradizionalmente significa un vermut, un Negroni o uno spritz con qualche stuzzichino; molti locali oggi propongono buffet più abbondanti, detti *apericena*, che possono sostituire una cena leggera. Non è però la stessa cosa della cena: se vuoi la cucina piemontese, prenota un tavolo dopo. Vermut e bevande nella nostra guida all'[aperitivo italiano](/it/cibo/aperitivo-italiano)."),
    ul(
      "Si ordina al banco o al tavolo; gli stuzzichini di solito arrivano con il drink.",
      "Non trattare il buffet come un pasto a volontà, a meno che non sia chiaramente proposto così.",
      "Quadrilatero Romano, San Salvario e Vanchiglia sono le zone più frequentate; i caffè storici del centro sono più formali.",
    ),
    {
      type: "image",
      src: `${IMG}/parco-del-valentino-cafe.webp`,
      alt: "Persone sedute a tavolini rossi in un caffè all'aperto sotto gli alberi del Parco del Valentino a Torino",
      caption: "Un caffè all'aperto al Parco del Valentino.",
      credit: unsplash("Antonio Sessa", "antony_sex"),
    },

    // ——— 10 ———
    h2("I quartieri di Torino"),
    table(
      ["Zona", "Posizione e carattere", "Utile alla prima visita?", "Come muoversi"],
      [
        ["Centro", "Piazza Castello, via Roma, via Po, via Garibaldi — musei, caffè, negozi", "Sì, la base più comoda", "A piedi quasi ovunque"],
        ["Quadrilatero Romano", "L'antica griglia romana a nord-ovest di piazza Castello, con piazzette, ristoranti e locali", "Sì, soprattutto la sera", "A piedi; vicino a Porta Palazzo"],
        ["San Salvario", "A sud di Porta Nuova, multiculturale, animato la sera, accanto al Valentino", "Sì, per cucina e vita serale; può essere rumoroso", "A piedi o in metro da Porta Nuova"],
        ["Vanchiglia", "A est del centro vicino alla Mole e al Po; locali e ristoranti frequentati da studenti", "Bene per la sera", "A piedi fino alla Mole e a via Po"],
        ["Crocetta", "Residenziale ed elegante, a sud-ovest del centro", "Una base più tranquilla", "Tram, bus o metro per il centro"],
        ["Borgo Po e Gran Madre", "Oltre il fiume, ai piedi della collina", "Per il panorama e serate più calme", "A piedi attraverso i ponti sul Po"],
        ["Aurora", "A nord di Porta Palazzo, un ex quartiere industriale in trasformazione", "Soprattutto per visite mirate", "Tram e bus"],
        ["Porta Nuova / Porta Susa", "Intorno alle due stazioni principali", "Comodo per treni e collegamento con l'aeroporto", "Metro e tram"],
      ],
      "I quartieri di Torino"
    ),
    p("Alla prima visita dormi in **Centro** o nel **Quadrilatero Romano** per andare ovunque a piedi, oppure vicino a **Porta Nuova** o **Porta Susa** se hai treni al mattino presto o pensi di fare gite. Nelle zone più vivaci controlla bene la via e il rumore. Torino applica l'imposta di soggiorno, a persona e a notte."),
    {
      type: "image",
      src: `${IMG}/porta-palatina.webp`,
      alt: "Le Porte Palatine a Torino, porta romana in mattoni con due alte torri poligonali, accanto ad alberi verdi",
      caption: "Le Porte Palatine, la porta romana al margine del Quadrilatero Romano.",
      credit: unsplash("Chelaxy Designs", "chelaxydp"),
    },

    // ——— 11 ———
    h2("Torino in un giorno"),
    steps(
      ["Mattina: Museo Egizio", "Inizia dall'Egizio con un ingresso prenotato al mattino; calcola due ore e mezza o tre."],
      ["Pranzo vicino a piazza Carignano", "Mangia nei dintorni, poi raggiungi piazza Castello per vedere da fuori Palazzo Madama e Palazzo Reale."],
      ["Primo pomeriggio: via Roma e piazza San Carlo", "Passeggia sotto i portici, fai una deviazione nella Galleria Subalpina e fermati per un bicerin o un caffè."],
      ["Tardo pomeriggio: la Mole", "Percorri via Po fino alla Mole e sali con l'ascensore panoramico (non il martedì)."],
      ["Sera: aperitivo e cena", "Aperitivo nel Quadrilatero Romano o a Vanchiglia, poi cena piemontese."],
    ),
    tip("Il martedì, quando la Mole è chiusa, sostituiscila con i Musei Reali — che però chiudono il mercoledì.", "Organizzati intorno alle chiusure"),

    // ——— 12 ———
    h2("Torino in due giorni"),
    p("Il primo giorno come sopra, poi:"),
    steps(
      ["Mattina: Musei Reali", "Palazzo Reale, la Cappella della Sindone, l'Armeria e la Galleria Sabauda; una pausa nei Giardini Reali."],
      ["Pranzo nel Quadrilatero Romano", "Poi a piedi fino a Porta Palazzo, passando dalle Porte Palatine."],
      ["Pomeriggio: la Mole o Palazzo Madama", "Quello che non hai visto il primo giorno, oppure una lunga sosta in un caffè."],
      ["Sera: oltre il Po o a San Salvario", "Passeggiata fino alla Gran Madre e al fiume al tramonto, poi cena a San Salvario o a Vanchiglia."],
    ),

    // ——— 13 ———
    h2("Torino in tre giorni"),
    p("Il terzo giorno dedicalo a Torino stessa o a una residenza reale vicina: non è obbligatorio partire."),
    steps(
      ["Mattina: Superga", "Sali con la tranvia a dentiera Sassi–Superga (il mercoledì non circola; controlla gli orari) per la basilica e il panorama."],
      ["Pomeriggio: il Valentino", "Passeggiata nel Parco del Valentino, il castello e il Borgo Medievale, poi aperitivo a San Salvario."],
      ["Alternative", "La Reggia di Venaria, a nord della città; il Museo dell'Automobile e il Lingotto; oppure Juventus Museum e stadium tour."],
    ),

    // ——— 14 ———
    h2("Come muoversi a Torino"),
    p("Il centro è in piano e disegnato a scacchiera, e i portici rendono piacevole camminare con la pioggia o con il sole. I mezzi pubblici servono soprattutto per le stazioni, il Lingotto, la parte sud del Valentino, Superga e lo stadio."),
    p("**GTT** gestisce tram, bus e la **linea 1 della metropolitana**, che collega Porta Susa, Porta Nuova e il Lingotto. Secondo GTT si può pagare con carta contactless o smartphone (Tap&Go) ai varchi di tutte le stazioni della metro e sui bus e tram con l'adesivo giallo sulla porta anteriore; si ottiene così un normale biglietto urbano valido 100 minuti, con una corsa in metro. I biglietti si comprano anche in edicola, alle macchinette e nell'app GTT. I **taxi** si trovano ai posteggi o si prenotano per telefono o via app. Torino ha una rete di piste ciclabili lungo il fiume e nei parchi."),
    p("La ZTL centrale è attiva nelle mattine dei giorni feriali: conta se guidi, non se cammini o usi i mezzi."),

    // ——— 15 ———
    h2("Come arrivare a Torino"),
    h3("Torino Airport"),
    p("L'aeroporto di Torino (Caselle) è a nord della città. Secondo l'aeroporto, i **treni** collegano lo scalo con **Porta Susa** in circa mezz'ora, sette giorni su sette, da una stazione di fronte all'area arrivi. Gli **autobus Arriva** collegano l'aeroporto con il centro, con fermate a **Porta Nuova** e **Porta Susa**; a bordo si può pagare con carta contactless. I **taxi** aspettano fuori dagli arrivi. Controlla gli orari aggiornati prima del volo."),
    h3("Porta Nuova"),
    p("Porta Nuova è la stazione di testa in fondo a via Roma, a pochi passi da piazza San Carlo e piazza Castello. La usano molti treni ad alta velocità e regionali, ed è servita dalla metro."),
    h3("Porta Susa"),
    p("Porta Susa, a ovest del centro, è una stazione passante sulla linea dell'alta velocità e il nodo dei treni regionali e per l'aeroporto; è servita anche dalla metro. Alcuni treni ad alta velocità fermano solo qui o in entrambe le stazioni: controlla il biglietto."),
    p("L'alta velocità collega Torino con Milano in circa 45 minuti–un'ora, e con Bologna, Firenze e Roma. Per biglietti e treni leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno), e per combinare più città [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),

    // ——— 16 ———
    h2("Torino come base per il Piemonte"),
    h3("Gite facili da Torino"),
    table(
      ["Meta", "Perché andare", "Come", "Tempo"],
      [
        ["Superga", "Basilica, tombe reali e panorama", "Tram fino a Sassi, poi la tranvia a dentiera", "Mezza giornata"],
        ["Reggia di Venaria", "Una grande reggia sabauda con i giardini (UNESCO)", "Treno o bus; circa 10 km dalla città", "Da mezza giornata a una giornata; aperta dal martedì alla domenica"],
        ["Palazzina di Caccia di Stupinigi", "La palazzina di caccia di Juvarra (UNESCO)", "Bus o taxi", "Mezza giornata"],
        ["Asti", "Un centro storico e i vini Moscato e Barbera", "Treno regionale", "Da mezza giornata a una giornata"],
      ],
      "Gite facili da Torino"
    ),
    h3("Meglio in auto o con un viaggio dedicato"),
    table(
      ["Meta", "Perché andare", "Da sapere"],
      [
        ["Alba", "Tartufo, cucina e vino nelle Langhe", "I regionali arrivano ad Alba; i paesi intorno richiedono auto o tour"],
        ["Le Langhe (Barolo, La Morra, Barbaresco)", "Vigneti iscritti dall'UNESCO nel 2014, cantine e borghi collinari", "Meglio in auto, con autista o con un tour; se puoi, fermati a dormire"],
        ["Sacra di San Michele", "Un'abbazia in cima al monte sopra la Val di Susa", "Treno fino alla valle e poi una salita ripida, oppure in auto"],
        ["Aosta e le Alpi", "Resti romani e paesaggi di montagna", "Treni regionali; giornata lunga, meglio con una notte"],
      ],
      "Le gite in Piemonte che richiedono più organizzazione"
    ),
    p("I paesaggi vitivinicoli di Langhe-Roero e Monferrato vanno scoperti con calma. Se pensi a un viaggio in auto, leggi [guidare in Italia](/it/guide/guidare-in-italia) per ZTL e strade di campagna. Il Lago di Como si raggiunge più facilmente da Milano: c'è la nostra guida al [Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend)."),

    // ——— 17 ———
    h2("Quando andare a Torino"),
    ul(
      "**Primavera (aprile–giugno)** — ideale per camminare e per i giardini; nelle giornate limpide le Alpi fanno da sfondo alla città.",
      "**Estate (luglio–agosto)** — calda e a volte afosa; portici e parchi aiutano, e ad agosto alcuni ristoranti chiudono per ferie.",
      "**Autunno (settembre–novembre)** — la stagione della vendemmia e del tartufo in Piemonte, perfetta per abbinare Torino alle Langhe.",
      "**Inverno (dicembre–febbraio)** — freddo e spesso nebbioso, ma adatto a una vacanza in città tra musei e caffè. Negli ultimi anni installazioni luminose hanno decorato le strade nel periodo natalizio.",
    ),
    p("Torino funziona tutto l'anno perché le sue attrazioni principali sono al chiuso. Grandi fiere ed eventi possono riempire gli alberghi: controlla le date prima di prenotare. Per confrontare Torino con il resto d'Italia nei vari mesi, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 18 ———
    h2("Torino per ogni tipo di viaggiatore"),
    ul(
      "**Alla prima visita in Italia** — Torino si abbina bene a Milano e ai laghi, o come inizio di un itinerario in treno nel Nord.",
      "**In coppia** — dormi in Centro, passeggia lungo il Po al tramonto e concediti aperitivo e una lunga cena piemontese.",
      "**Con la famiglia** — l'ascensore della Mole e il museo del cinema, l'Egizio e il Valentino piacciono ai bambini; lo Juventus Museum ai giovani tifosi.",
      "**Per chi ama i musei** — tre giorni permettono di vedere Egizio, Musei Reali, Mole e Palazzo Madama senza correre.",
      "**Per chi viaggia per la tavola** — caffè storici e aperitivo, Porta Palazzo, una cena in trattoria e una giornata nelle Langhe.",
      "**Architettura e storia** — concentrati sulla capitale sabauda: piazza Castello, la Cappella della Sindone di Guarini, la Superga di Juvarra e la Reggia di Venaria.",
      "**Calcio e sport** — prenota online Juventus Museum e stadium tour; controlla il calendario delle partite, perché nei giorni di gara i tour cambiano.",
      "**Senza auto** — in città non serve, e Superga, Venaria e Asti si raggiungono facilmente con i mezzi.",
      "**Torino più Piemonte** — due o tre giorni in città, poi le Langhe in auto o con un tour.",
    ),

    // ——— 19 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Considerare Torino una tappa di passaggio.** Merita almeno un giorno pieno, meglio due o tre.",
      "**Voler vedere tutti i musei.** Scegline due o tre in base ai tuoi interessi.",
      "**Non prenotare il Museo Egizio.** I biglietti si vendono solo online.",
      "**Ignorare i giorni di chiusura.** La Mole chiude il martedì, i Musei Reali il mercoledì.",
      "**Confondere la cucina piemontese con una generica cucina italiana.** Agnolotti, tajarin e vitello tonnato sono piemontesi; bicerin e gianduiotti sono torinesi.",
      "**Pensare che ogni gita in Piemonte sia facile in treno.** Alba sì, i paesi delle Langhe no.",
      "**Ignorare la geografia della città.** Raggruppa centro, fiume e Superga invece di attraversare la città avanti e indietro.",
      "**Vedere solo la Mole.** Piazze, portici e caffè sono Torino quanto il suo simbolo.",
      "**Aspettarsi il ritmo di Roma o Firenze.** Torino è più calma e residenziale, con meno folla e un altro passo.",
    ),

    // ——— 20 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "torino-per-la-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli dove dormire: Centro, Quadrilatero o vicino a una stazione", "Decidi se aggiungere il Piemonte", "Controlla le date di fiere ed eventi"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota online il Museo Egizio", "Compra online i biglietti della Mole e ricorda la chiusura del martedì", "Ricorda la chiusura del mercoledì dei Musei Reali", "Verifica treno o bus dall'aeroporto"],
        },
        {
          title: "Durante il viaggio",
          items: ["Vesti in base al meteo: i portici aiutano con la pioggia, ma l'inverno è freddo", "Prevedi una sosta al caffè e un aperitivo", "Controlla gli orari della tranvia per Superga (chiusa il mercoledì)", "Tieni un momento libero"],
        },
      ],
    },
    p("Regole di prenotazione, giorni di chiusura e collegamenti citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Possono cambiare: controllali prima di partire. Per inserire Torino in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia); per abbinarla ad altre città, leggi [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo), [Bologna in due giorni](/it/citta/bologna-in-due-giorni) e [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),
  ],

  faqs: [
    { question: "Vale la pena visitare Torino la prima volta?", answer: "Sì, soprattutto per musei, architettura reale e barocca, caffè storici e cucina. È più tranquilla di Roma, Firenze o Venezia e ha un carattere tutto suo da ex capitale sabauda." },
    { question: "Quanti giorni servono a Torino?", answer: "Due o tre giorni per la prima visita: due per il centro e i musei principali, tre per aggiungere Superga, il Valentino o Venaria. Con le Langhe servono altri giorni." },
    { question: "Torino si gira a piedi?", answer: "Sì. Il centro è in piano, disegnato a scacchiera e percorso dai portici. Per stazioni, Lingotto, Superga e stadio usa tram, bus o metro." },
    { question: "Per che cosa è famosa Torino?", answer: "Per Casa Savoia e i suoi palazzi, il Museo Egizio, la Mole Antonelliana con il museo del cinema, i portici, i caffè storici, il cioccolato gianduia, il vermut, la Fiat e la Juventus." },
    { question: "Cosa non perdere a Torino?", answer: "Il Museo Egizio, la Mole Antonelliana, piazza Castello e i Musei Reali, piazza San Carlo e via Roma, un bicerin in un caffè storico e un aperitivo la sera." },
    { question: "Vale la pena visitare il Museo Egizio?", answer: "Per la maggior parte dei visitatori sì: custodisce una delle raccolte di antichità egizie più importanti fuori dall'Egitto. Calcola due ore e mezza o tre e compra il biglietto online, l'unico modo per acquistarlo." },
    { question: "Bisogna prenotare i musei di Torino?", answer: "Per il Museo Egizio sì: i biglietti si vendono solo online. Per la Mole e i Musei Reali l'acquisto online è consigliato per evitare code. Lo stadium tour della Juventus va comprato online." },
    { question: "Quali sono le specialità di Torino?", answer: "Bicerin, gianduia e gianduiotti, vermut e grissini, oltre a piatti piemontesi come agnolotti, tajarin, vitello tonnato e bagna càuda." },
    { question: "Che cos'è il bicerin?", answer: "Una bevanda calda di caffè, cioccolato e crema di latte, servita a strati in un bicchierino e bevuta tradizionalmente senza mescolare. Nei caffè torinesi si serve dal Settecento." },
    { question: "Torino è cara rispetto ad altre città italiane?", answer: "I costi cambiano con la stagione e gli eventi: durante grandi fiere ed eventi gli alberghi rincarano. Molti piaceri della città — piazze, portici, chiese, parchi e il lungo Po — sono gratuiti, e l'aperitivo può sostituire una cena leggera." },
    { question: "Si può visitare Torino senza auto?", answer: "Sì. Il centro si gira a piedi, i mezzi pubblici coprono il resto e i treni arrivano ad Asti, Alba e Venaria. L'auto serve solo per i paesi delle Langhe." },
    { question: "Quali sono le gite migliori da Torino?", answer: "Superga e la Reggia di Venaria sono facili con i mezzi pubblici; Asti è a un breve viaggio in treno. I paesi del vino delle Langhe sono più comodi in auto, con autista o con un tour." },
    { question: "Torino va bene per un weekend?", answer: "Sì. In un fine settimana si vedono Egizio, Mole, Musei Reali e centro storico. Prenota i musei online e controlla i giorni di chiusura." },
    { question: "Si può abbinare Torino a Milano o ad altre mete del Nord?", answer: "Facilmente. L'alta velocità arriva a Milano in circa 45 minuti–un'ora, con collegamenti diretti per Bologna, Firenze e Roma: Torino è perfetta all'inizio o alla fine di un itinerario nel Nord." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Museo Egizio", url: "https://www.museoegizio.it/info/orari/", note: "biglietti online e orari" },
    { label: "Museo Nazionale del Cinema — Mole Antonelliana", url: "https://www.museocinema.it/", note: "orari e ascensore panoramico" },
    { label: "Musei Reali Torino", url: "https://museireali.beniculturali.it/", note: "aperture, biglietti e percorso" },
    { label: "Palazzo Madama", url: "https://www.palazzomadamatorino.it/", note: "aperture e mostre" },
    { label: "La Venaria Reale", url: "https://lavenaria.it/", note: "aperture e come arrivare" },
    { label: "UNESCO — Residenze Sabaude", url: "https://whc.unesco.org/en/list/823/", note: "iscrizione nella Lista del Patrimonio Mondiale" },
    { label: "GTT — Tap&Go", url: "https://www.gtt.to.it/cms/index.php?option=com_content&view=article&id=8456&catid=14", note: "pagamento contactless sui mezzi" },
    { label: "GTT — Tranvia Sassi–Superga", url: "https://www.gtt.to.it/cms/turismo/sassisup", note: "orari e chiusure" },
    { label: "Torino Airport — in treno", url: "https://www.aeroportoditorino.it/it/tomove/trasporti-e-parcheggi/in-treno", note: "collegamento con Porta Susa" },
    { label: "Arriva — bus per l'aeroporto", url: "https://torino.arriva.it/", note: "bus per Porta Nuova e Porta Susa" },
    { label: "Juventus Museum e Stadium Tour", url: "https://www.juventus.com/it/biglietti/museum-tour/", note: "biglietti e giorni di partita" },
  ],
};
