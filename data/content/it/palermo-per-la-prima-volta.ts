import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana della guida a Palermo, scritta per chi legge in italiano.
// Sito UNESCO, regole di visita e restauro a Palazzo Reale, collegamenti con
// l'aeroporto, lavori sulla rete ferroviaria, bus per Monreale e giorni di
// chiusura dei musei sono stati verificati su siti o elenchi ufficiali a
// settembre 2026. Prezzi, orari e tempi di viaggio non vengono citati, tranne
// il treno per l'aeroporto come indicato dal Comune.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/palermo-markets-monuments";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const palermoPerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Palermo si affaccia su un golfo della costa settentrionale della Sicilia, chiusa alle spalle dai monti, ed è stata capitale per gran parte della sua lunga storia: di un emirato arabo, di un regno normanno e oggi della Regione Siciliana. Quella storia si legge quasi in ogni strada: mosaici d'oro e cupole rosse del XII secolo, chiese e piazze barocche, teatri dell'Ottocento e mercati le cui vie commerciano da secoli. Alla prima visita, la città ripaga chi le dedica tempo e un minimo di organizzazione."),
    answer("**Palermo merita il viaggio**, soprattutto per architettura, storia e cucina. **Due o tre giorni** bastano per il centro storico, i monumenti arabo-normanni, uno o due mercati e il cibo di strada; ne servono di più se vuoi andare a Monreale, Cefalù o Segesta. Ciò che rende Palermo unica è il patrimonio arabo-normanno del XII secolo — iscritto dall'UNESCO insieme alle cattedrali di Cefalù e Monreale — accanto a una cultura del cibo che ruota intorno ai mercati. **L'auto non serve** per la città: il centro storico si gira a piedi, e treni, autobus e taxi coprono l'essenziale. Le priorità: la Cattedrale, Palazzo dei Normanni con la Cappella Palatina, i Quattro Canti e piazza Pretoria, un mercato e un pranzo di cibo di strada come si deve."),
    {
      type: "facts",
      title: "Palermo in sintesi",
      rows: [
        { label: "Durata consigliata per la prima visita", value: "2–3 giorni" },
        { label: "Famosa per", value: "Architettura arabo-normanna, mercati, cibo di strada, storia e cultura" },
        { label: "Dove si arriva", value: "Aeroporto Falcone Borsellino (Punta Raisi), stazione di Palermo Centrale e porto" },
        { label: "Come muoversi", value: "A piedi nel centro storico, con i bus AMAT per le distanze più lunghe" },
        { label: "Serve l'auto?", value: "No per un soggiorno in centro: il centro storico è ZTL" },
        { label: "Mercati principali", value: "Ballarò, Capo e Vucciria" },
        { label: "Gite consigliate", value: "Monreale, Cefalù, Segesta e, per il mare, Mondello" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/palermo-rooftops-domes-mountains.webp`,
      alt: "La cupola e le torri gotiche della Cattedrale di Palermo sopra i tetti della città, con le montagne sullo sfondo",
      caption: "La Cattedrale di Palermo sopra i tetti del centro storico, con i monti che circondano la città.",
      credit: unsplash("Ricardo Gomez Angel", "rgaleriacom"),
      wide: true,
    },

    // ——— 1 ———
    h2("Vale la pena visitare Palermo?"),
    p("Sì. Poche città italiane concentrano tanta storia nei loro monumenti. In una sola mattina si passa dalla cappella di un re normanno decorata da mosaicisti bizantini e artigiani del mondo islamico a una cattedrale ricostruita e rimaneggiata nell'arco di otto secoli, da un incrocio barocco a una fontana rinascimentale nata per una villa fiorentina. Palermo è anche una città viva e operosa: mercati, bar e cibo di strada fanno parte della vita quotidiana dei palermitani, non solo dei visitatori."),
    p("È una grande città, e nel centro storico si alternano palazzi restaurati, strade trafficate ed edifici che aspettano ancora il restauro. Il modo migliore per capirla è camminare. Chi organizza la visita intorno a pochi luoghi chiave, mangia bene e lascia tempo per girare a piedi di solito la trova una delle città più interessanti del Sud."),

    // ——— 2 ———
    h2("Quanti giorni servono a Palermo?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Il cuore del centro storico: Cattedrale, Palazzo dei Normanni, Quattro Canti, un mercato", "Ritmo serrato; poco tempo per mangiare o per i musei"],
        ["2 giorni", "I luoghi principali, mercati e cibo di strada, più il Teatro Massimo e la Kalsa", "Il minimo consigliato per la prima visita"],
        ["3 giorni", "Una Palermo più approfondita, un museo e mezza giornata a Monreale", "Di solito l'equilibrio migliore"],
        ["4–5 giorni", "Palermo più Cefalù, Segesta o una giornata al mare", "Alcune gite sono più semplici in auto o con un tour"],
      ],
      "Quanto fermarsi a Palermo"
    ),
    p("Non esiste una durata giusta in assoluto. Se Palermo è l'unica tappa in Sicilia, tre giorni permettono di vedere bene la città e fare una gita. Se è l'inizio di un viaggio più lungo sull'isola, due giorni in città e poi via in auto o in treno funzionano bene."),

    // ——— 3 ———
    h2("Per che cosa è famosa Palermo"),
    ul(
      "**I monumenti arabo-normanni** — Cappella Palatina, Cattedrale, Martorana, San Cataldo e San Giovanni degli Eremiti, parte di un sito UNESCO.",
      "**I mercati** — Ballarò, Capo e Vucciria, mercati storici all'aperto nei quartieri antichi.",
      "**Il cibo di strada** — arancine, panelle, crocchè, sfincione e altro, da mangiare in piedi o camminando.",
      "**La Palermo barocca** — i Quattro Canti, piazza Pretoria e tante chiese e oratori riccamente decorati.",
      "**I teatri** — il Teatro Massimo, tra i più grandi teatri d'opera d'Europa, e il Politeama.",
      "**Il paesaggio** — un golfo tra le montagne, con il Monte Pellegrino a nord e la spiaggia di Mondello a due passi.",
      "**Santa Rosalia** — la patrona, il cui Festino a metà luglio è la festa più importante della città.",
    ),

    // ——— 4 ———
    h2("Palermo in 1, 2 o 3 giorni"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Un giorno", title: "Il cuore storico", text: "**Mattina:** Palazzo dei Normanni e Cappella Palatina (meglio prenotare). **Tarda mattinata:** la Cattedrale. **Pranzo:** cibo di strada a Ballarò. **Pomeriggio:** Quattro Canti, piazza Pretoria, Martorana e San Cataldo in piazza Bellini. **Sera:** cena in centro." },
        { label: "Due giorni", title: "Teatri, mercati e Kalsa", text: "Primo giorno come sopra. **Secondo giorno:** visita guidata al Teatro Massimo; il mercato del Capo; pranzo; nel pomeriggio a piedi nella Kalsa fino a piazza Marina e al mare. *Facoltativo:* Santa Maria dello Spasimo o l'Orto Botanico. **Sera:** la zona della Vucciria o una cena senza fretta." },
        { label: "Tre giorni", title: "Musei e Monreale", text: "Primi due giorni come sopra. **Terzo giorno:** mezza giornata a Monreale per i mosaici del Duomo e il chiostro, poi un museo a Palermo — Palazzo Abatellis o il Museo Salinas (di solito chiusi il lunedì). *Facoltativo:* una serata a Mondello. Lascia tempo libero." },
      ],
    },
    tip("Organizza ogni giornata intorno a una sola visita a orario — Palazzo dei Normanni o Teatro Massimo — e lascia flessibile il resto. Dedica il giusto tempo al pranzo: il cibo di strada fa parte della visita.", "Una prenotazione al giorno"),

    // ——— 5 ———
    h2("Cosa vedere a Palermo"),
    p("Gli orari cambiano, diversi musei chiudono un giorno alla settimana e le chiese possono chiudere per le funzioni. Prima di organizzare una giornata intorno a un luogo, controlla il sito ufficiale."),
    h3("Palazzo dei Normanni e Cappella Palatina"),
    p("Il Palazzo Reale, nel punto più alto della città antica, fu la sede dei re normanni ed è oggi quella dell'Assemblea Regionale Siciliana. Il gioiello è la **Cappella Palatina**, la cappella reale voluta da Ruggero II dopo l'incoronazione del 1130, con mosaici bizantini a fondo oro e un soffitto ligneo intagliato e dipinto secondo la tradizione del mondo islamico. Secondo la [Fondazione Federico II](https://www.federicosecondo.org/visita/), che gestisce le visite, il complesso è aperto tutti i giorni; il martedì e il mercoledì gli Appartamenti Reali non sono compresi nella visita, e la domenica mattina la cappella chiude ai visitatori durante la messa. Essendo sede del parlamento regionale, il palazzo può chiudere del tutto o in parte senza preavviso. Calcola due ore e, nei periodi di punta, compra il biglietto online."),
    important("Nella Cappella Palatina è in corso il restauro dei mosaici del presbiterio, e la Fondazione Federico II avverte che gli orari possono cambiare e alcune aree potrebbero non essere accessibili. Prima di andare, controlla gli avvisi sul sito ufficiale.", "Restauro in corso"),
    {
      type: "image",
      src: `${IMG}/palazzo-dei-normanni-interior.webp`,
      alt: "Una sala del Palazzo dei Normanni con pareti e volta coperte di mosaici con animali e palme su fondo oro, sotto un lucernario",
      caption: "Decorazioni a mosaico all'interno del Palazzo dei Normanni.",
      credit: unsplash("Lothar Boris Piltz", "lotharborispiltz"),
    },
    h3("La Cattedrale"),
    p("La Cattedrale fu ricostruita a partire dal 1185 dall'arcivescovo Gualtiero Offamilio su un luogo che aveva ospitato chiese precedenti e una moschea, e poi rimaneggiata più volte: le torri e il portico gotici, e poi la cupola e l'interno neoclassico, raccontano secoli diversi. Custodisce le tombe di sovrani normanni e svevi, tra cui Ruggero II e Federico II, e la cappella di Santa Rosalia. L'ingresso alla chiesa è libero; un biglietto a parte dà accesso alle aree monumentali, come tesoro, cripta, tombe reali e tetti. Calcola un'ora, di più se sali sui tetti."),
    {
      type: "image",
      src: `${IMG}/palermo-cathedral.webp`,
      alt: "La Cattedrale di Palermo al sole, con le torri gotiche, la cupola e il lungo portico laterale, e le palme nel giardino davanti",
      caption: "La Cattedrale di Palermo, trasformata nel corso di molti secoli.",
      credit: unsplash("Vincenzo Inzone", "vincent_61"),
    },
    h3("I Quattro Canti e piazza Pretoria"),
    p("I **Quattro Canti** sono l'incrocio barocco dove le due strade principali della città antica — via Maqueda e corso Vittorio Emanuele, l'antico Cassaro — si incontrano, dividendo il centro nei suoi quattro mandamenti storici. Le quattro facciate curve, dell'inizio del Seicento, ospitano statue delle stagioni, dei re spagnoli e delle sante patrone della città. A pochi passi, **piazza Pretoria** è occupata da una grande fontana rinascimentale, realizzata a Firenze negli anni Cinquanta del Cinquecento e trasferita a Palermo negli anni Settanta, davanti al municipio. Bastano pochi minuti, e ci passerai più volte."),
    {
      type: "image",
      src: `${IMG}/palermo-square-fountain.webp`,
      alt: "Piazza Pretoria a Palermo con la grande fontana in marmo e le sue statue, circondata da palazzi, con la cupola di una chiesa a sinistra",
      caption: "Piazza Pretoria e la sua fontana, con la cupola di Santa Caterina a sinistra.",
      credit: unsplash("Dominique Josse", "djosse"),
    },
    h3("La Martorana e San Cataldo"),
    p("Una accanto all'altra in piazza Bellini, queste due piccole chiese sono tra i monumenti normanni più belli di Palermo. La **Martorana** (Santa Maria dell'Ammiraglio) fu fondata negli anni Quaranta del XII secolo da Giorgio d'Antiochia, ammiraglio di Ruggero II, e l'interno è rivestito di mosaici bizantini, tra cui quello di Ruggero II incoronato da Cristo. Oggi vi si celebra la liturgia cattolica di rito bizantino, quindi le visite si sospendono durante le funzioni. **San Cataldo**, con le sue tre cupole rosse, ha un interno spoglio. Per ciascuna bastano 20–30 minuti; entrambe prevedono un piccolo biglietto d'ingresso."),
    h3("Santa Caterina"),
    p("Sull'altro lato della piazza, la chiesa barocca di Santa Caterina d'Alessandria ha uno degli interni in marmi policromi più sfarzosi della città. L'ex monastero domenicano accanto ha un chiostro e terrazze sui tetti con vista sul centro; verifica le modalità di visita attuali. Calcola 45 minuti."),
    h3("Il Teatro Massimo"),
    p("Inaugurato nel 1897, il Teatro Massimo è tra i più grandi teatri d'opera d'Europa, un tempio neoclassico in cima a via Maqueda. Secondo il teatro, si può visitare tutti i giorni con visita guidata; i singoli visitatori acquistano il biglietto in biglietteria o online. Ancora meglio, assisti a uno spettacolo: il programma è sul sito del teatro."),
    h3("Il Teatro Politeama"),
    p("All'estremità nord del centro storico, il Politeama Garibaldi, completato alla fine dell'Ottocento, segna l'inizio della città otto-novecentesca. Ospita concerti ed è più un punto di riferimento che una visita da programmare: ci passerai davanti andando verso via Libertà."),
    h3("Santa Maria dello Spasimo"),
    p("Nella Kalsa, questa chiesa del Cinquecento non fu mai completata. La navata gotica senza tetto, aperta sul cielo, è uno degli spazi più suggestivi di Palermo e ospita concerti ed eventi. Controlla che sia aperta prima di andarci apposta."),
    h3("L'Orto Botanico"),
    p("L'orto botanico dell'Università di Palermo, fondato alla fine del Settecento, si trova appena fuori dalla Kalsa. È noto per i grandi ficus e le collezioni subtropicali: un'ora di pausa tranquilla dopo il centro affollato."),
    h3("I musei"),
    p("Due musei regionali spiccano. **Palazzo Abatellis**, in un palazzo di fine Quattrocento nella Kalsa, è la Galleria regionale, con l'affresco del *Trionfo della Morte* e l'*Annunciata* di Antonello da Messina. Il **Museo Archeologico Salinas** custodisce le principali collezioni archeologiche della Sicilia, tra cui le sculture dei templi greci di Selinunte. Secondo il Comune, entrambi sono di solito chiusi il lunedì. Calcola un'ora e mezza o due per ciascuno."),
    table(
      ["Luogo", "Tempo da dedicare", "Prenotare?", "Quando inserirlo"],
      [
        ["Palazzo dei Normanni e Cappella Palatina", "Circa 2 ore", "Utile — biglietti online", "Primo giorno, mattina"],
        ["Cattedrale", "Circa 1 ora", "No; biglietto a parte per le aree monumentali", "Primo giorno"],
        ["Quattro Canti e piazza Pretoria", "15–30 minuti", "No", "Primo giorno"],
        ["Martorana e San Cataldo", "Circa 1 ora per entrambe", "No", "Primo giorno, pomeriggio"],
        ["Teatro Massimo", "Meno di un'ora per la visita guidata", "In biglietteria o online", "Secondo giorno, mattina"],
        ["Santa Maria dello Spasimo", "30 minuti", "Verifica l'apertura", "Secondo giorno, nella Kalsa"],
        ["Palazzo Abatellis o Museo Salinas", "1 ora e mezza–2 ore", "Di solito no; chiusi il lunedì", "Terzo giorno"],
        ["Duomo e chiostro di Monreale", "Mezza giornata con il viaggio", "Di solito no", "Terzo giorno"],
      ],
      "I luoghi principali e quando visitarli"
    ),

    // ——— Arabo-normanna ———
    h2("La Palermo arabo-normanna"),
    p("I monumenti più caratteristici di Palermo nascono in un momento preciso della sua storia. Le forze musulmane arrivate dal Nord Africa presero Palermo nell'831, e per oltre due secoli la città fu la capitale dell'emirato di Sicilia e una delle più grandi del Mediterraneo. Nell'XI secolo i cavalieri normanni venuti dalla Francia del Nord, guidati da Roberto il Guiscardo e dal fratello Ruggero, conquistarono l'isola; Palermo cadde nel 1072. Nel 1130 il figlio di Ruggero, Ruggero II, fu incoronato re di Sicilia, e Palermo divenne la capitale di un regno che durò fino al 1194."),
    p("I re normanni governavano una popolazione di musulmani, cristiani bizantini di lingua greca, cristiani latini ed ebrei. Invece di cancellare le tradizioni esistenti, la corte se ne servì: arabo e greco affiancavano il latino nell'amministrazione, e i sovrani commissionarono edifici che univano piante di chiese latine, mosaici bizantini di artisti formati nella tradizione greca e cupole, archi, soffitti a muqarnas e iscrizioni di tradizione islamica. Ne nacque un'architettura che non ha eguali nella stessa forma."),
    p("Nel 2015 l'UNESCO ha iscritto **«Palermo arabo-normanna e le cattedrali di Cefalù e Monreale»** nella Lista del Patrimonio Mondiale. Secondo l'UNESCO il sito comprende nove monumenti del regno normanno, sette dei quali a Palermo:"),
    ul(
      "Palazzo Reale e Cappella Palatina",
      "Palazzo della Zisa",
      "Cattedrale di Palermo",
      "Chiesa di San Giovanni degli Eremiti",
      "Chiesa di Santa Maria dell'Ammiraglio (la Martorana)",
      "Chiesa di San Cataldo",
      "Ponte dell'Ammiraglio",
      "Duomo di Monreale",
      "Duomo di Cefalù",
    ),
    p("L'UNESCO li descrive come esempio di sincretismo socio-culturale tra cultura occidentale, islamica e bizantina, e come testimonianza della convivenza di popoli di origini e religioni diverse. Quella convivenza avvenne sotto il dominio normanno e non durò: dopo le rivolte tra la fine del XII e l'inizio del XIII secolo, entro la metà del Duecento Federico II deportò i musulmani rimasti in Sicilia a Lucera, sul continente. I monumenti raccontano una corte e un'epoca precise, non un'armonia senza tempo."),

    // ——— 6 ———
    h2("Il centro storico di Palermo"),
    p("Via Maqueda e corso Vittorio Emanuele dividono il centro storico in quattro mandamenti, che si incontrano ai Quattro Canti: la **Kalsa** a sud-est, l'**Albergheria** a sud-ovest, il **Capo** (Seralcadio) a nord-ovest e **La Loggia** (Castellammare) a nord-est. Ognuno ha le sue chiese, le sue piazze e, in tre casi, il suo mercato. Alcuni tratti di via Maqueda e di corso Vittorio Emanuele sono pedonali, e camminare tra i luoghi principali è piacevole."),
    p("Il centro è in piano e abbastanza raccolto da attraversarlo a piedi in meno di un'ora. È una zona a traffico limitato (ZTL) controllata da telecamere: conta se guidi, non se cammini."),
    {
      type: "image",
      src: `${IMG}/palermo-pedestrian-street.webp`,
      alt: "Una via pedonale del centro di Palermo in una giornata d'estate, con palazzi storici con balconi e persone a passeggio",
      caption: "Una via pedonale del centro storico.",
      credit: unsplash("Stefano Huang", "stefanohuang"),
    },

    // ——— 7 ———
    h2("I mercati di Palermo"),
    p("I tre mercati storici di Palermo non stanno in un edificio ma nelle strade: i banchi occupano le vie, con botteghe, bar e friggitorie alle spalle. Sono mercati veri, dove i palermitani comprano pesce, carne, frutta, verdura e casalinghi, e sono anche il posto più semplice per assaggiare il cibo di strada. Vai la mattina, quando i banchi sono più pieni; nel pomeriggio l'attività cala, e la domenica e nei festivi varia. Consigli su spesa e galateo nella nostra guida ai [mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani)."),
    table(
      ["Mercato", "Dove", "Famoso per", "Ideale per"],
      [
        ["Ballarò", "Albergheria, tra la stazione e Palazzo dei Normanni", "Il più grande e animato: frutta e verdura, pesce, carne e cibo di strada", "Il primo mercato e un pranzo di cibo di strada"],
        ["Capo", "Il quartiere del Capo, dietro il Teatro Massimo e vicino alla Cattedrale", "Una lunga via di banchi alimentari e piccole botteghe", "Da abbinare a Cattedrale o Teatro Massimo"],
        ["Vucciria", "La Loggia, vicino a piazza San Domenico", "Un mercato storico oggi più piccolo di giorno, noto per i locali serali e il cibo di strada", "Una serata fuori"],
      ],
      "I mercati storici di Palermo"
    ),
    {
      type: "image",
      src: `${IMG}/ballaro-market-street.webp`,
      alt: "Un banco del mercato di Ballarò a Palermo pieno di formaggi, salumi e prodotti confezionati con i cartellini dei prezzi, e il venditore dietro",
      caption: "Ballarò, il più grande dei mercati storici di Palermo.",
      credit: unsplash("Piermario Eva", "p1mm1"),
    },
    p("Al mercato indica e chiedi: molti venditori fanno assaggiare prima di comprare. Tieni telefono e portafoglio al sicuro nella calca e porta qualche contante per i piccoli acquisti. Se vuoi qualche spiegazione in più, una passeggiata guidata dedicata al cibo di strada è un buon inizio."),
    {
      type: "image",
      src: `${IMG}/albergheria-grains-legumes.webp`,
      alt: "Sacchi aperti di cereali e legumi secchi con i prezzi scritti a mano su un banco del mercato nell'Albergheria",
      caption: "Legumi e cereali in vendita nell'Albergheria, il quartiere di Ballarò.",
      credit: unsplash("Bernd Dittrich", "hdbernd"),
    },

    // ——— 8 ———
    h2("Dove dormire a Palermo"),
    p("Alla prima visita, dormire nel centro storico o vicino permette di raggiungere a piedi monumenti e mercati. La zona Politeama–Libertà è adatta a chi preferisce strade più ampie e serate più tranquille. Mondello va bene per una vacanza al mare, non per visitare la città."),
    table(
      ["Zona", "Ideale per", "Vantaggi", "Da considerare"],
      [
        ["Centro storico (Quattro Canti e via Maqueda)", "Prima visita, soggiorni brevi", "Quasi tutto a piedi; vie pedonali", "Animato di giorno e la sera; attenzione al rumore"],
        ["Kalsa", "Cultura, il lungomare", "Musei, piazze storiche, vicino al Foro Italico", "Alcune vie sono tranquille la sera; verifica la posizione esatta"],
        ["Albergheria", "Mercati, Palazzo dei Normanni", "Ballarò sotto casa; vicino alla stazione", "Vie di mercato vivaci; edifici in condizioni diverse"],
        ["Politeama / Libertà", "Una base più tranquilla e moderna", "Strade ampie, negozi, Teatro Massimo vicino, bus per l'aeroporto", "15 minuti o più a piedi fino alla Cattedrale"],
        ["Vicino a Palermo Centrale", "Treni al mattino presto, gite", "Treni, pullman e collegamento con l'aeroporto", "Meno atmosfera; più lontano dai luoghi a nord"],
        ["Mondello", "Una vacanza al mare", "La spiaggia e il lungomare", "In bus o taxi dal centro; molto affollata d'estate"],
      ],
      "Dove dormire a Palermo"
    ),
    p("Nel centro storico guarda bene via ed edificio prima di prenotare: un palazzo restaurato su una piazza tranquilla e una camera sopra un locale aperto fino a tardi possono distare poche strade. Palermo applica l'imposta di soggiorno, a persona e a notte."),

    // ——— 9 ———
    h2("I quartieri di Palermo"),
    ul(
      "**Kalsa** — il mandamento di sud-est, dal nome arabo *al-Khalisa*. Comprende Palazzo Abatellis, Santa Maria dello Spasimo, piazza Marina con il Giardino Garibaldi e il lungomare del Foro Italico. Ideale per passeggiate e musei.",
      "**Albergheria** — il mandamento di sud-ovest, con Palazzo dei Normanni, il mercato di Ballarò e chiese barocche come il Gesù (Casa Professa). Molto vivace di giorno.",
      "**Capo** — il mandamento di nord-ovest, intorno al mercato del Capo, vicino alla Cattedrale e al Teatro Massimo.",
      "**La Loggia (Castellammare)** — il mandamento di nord-est, con la Vucciria, piazza San Domenico e il vecchio porto della Cala. Animato la sera.",
      "**Politeama e Libertà** — a nord del centro storico, la città dell'Ottocento e del primo Novecento, con i negozi di via Libertà, gli edifici liberty e il Teatro Politeama.",
      "**Mondello** — borgo marinaro ai piedi del Monte Pellegrino, raggiungibile in bus o taxi, con una lunga spiaggia di sabbia e lo stabilimento liberty sul mare.",
    ),
    {
      type: "image",
      src: `${IMG}/piazza-san-domenico.webp`,
      alt: "Piazza San Domenico a Palermo con la chiesa barocca di San Domenico, un'alta colonna sormontata da una statua e alcune palme",
      caption: "Piazza San Domenico, alla Loggia, a pochi passi dalla Vucciria.",
      credit: unsplash("Giuseppe Buccola", "giuseppe_buccola"),
    },

    // ——— 10 ———
    h2("Cosa mangiare a Palermo"),
    p("La cucina siciliana cambia da città a città: Catania, Siracusa, Trapani e l'entroterra hanno ciascuna i propri piatti. Palermo ha tradizioni tutte sue, soprattutto nel cibo di strada, e altre che condivide con il resto dell'isola. Conviene distinguere."),
    h3("Specialità palermitane"),
    ul(
      "**Arancina** — palla di riso fritta, tonda a Palermo e di solito ripiena di ragù (*accarne*) o di burro, prosciutto e formaggio (*abburro*). A Palermo si dice *arancina*, al femminile; nella Sicilia orientale si dice *arancino* e spesso ha la forma di un cono. I palermitani la mangiano il 13 dicembre, giorno di Santa Lucia.",
      "**Panelle** — sottili frittelle di farina di ceci, spesso dentro un panino al sesamo (*pane e panelle*).",
      "**Crocchè** — crocchette di patate, dette anche *cazzilli*, vendute spesso insieme alle panelle.",
      "**Sfincione** — una specie di pizza alta e soffice con pomodoro, cipolla, acciughe, caciocavallo e pangrattato.",
      "**Pani ca' meusa** — panino con milza e polmone di vitello cotti a lungo, «schietto» o «maritato» con il formaggio: un classico dello street food palermitano.",
      "**Pasta con le sarde** — pasta con sarde fresche, finocchietto selvatico, pinoli, uvetta e mollica tostata.",
      "**Cassata** — torta di pan di Spagna e ricotta ricoperta di pasta di mandorle e frutta candita, legata in particolare a Palermo.",
      "**Frutta martorana** — pasta di mandorle modellata e dipinta come frutta, dal nome del monastero della Martorana.",
    ),
    h3("Diffusi in tutta la Sicilia"),
    ul(
      "**Cannoli** — cialde fritte ripiene di ricotta di pecora zuccherata; si mangiano in tutta l'isola, con versioni celebri nel palermitano.",
      "**Caponata** — melanzane in agrodolce con sedano, olive e capperi, in tante varianti locali.",
      "**Pasta alla Norma** — pasta con pomodoro, melanzane fritte e ricotta salata, legata a Catania più che a Palermo.",
      "**Granita** — spesso con la brioche, tipica soprattutto della Sicilia orientale; d'estate la trovi anche a Palermo.",
      "**Brioche con il gelato** — il gelato servito dentro una brioche morbida.",
      "**Pesce** — pesce spada, tonno, sarde e acciughe si trovano lungo tutte le coste dell'isola.",
    ),
    h3("Guida al cibo di strada"),
    table(
      ["Cibo", "Che cos'è", "Dove trovarlo"],
      [
        ["Panelle", "Frittelle di farina di ceci, spesso nel panino al sesamo", "Mercati e banchi di cibo di strada"],
        ["Crocchè", "Crocchette di patate", "Mercati e friggitorie"],
        ["Arancina", "Palla di riso fritta al ragù o al burro", "Bar, friggitorie e panifici in tutta la città"],
        ["Sfincione", "Pane alto con pomodoro, cipolla e acciughe", "Panifici, mercati e venditori ambulanti"],
        ["Pani ca' meusa", "Panino con milza e polmone cotti a lungo", "Banchi specializzati, soprattutto vicino ai mercati"],
        ["Cannolo", "Cialda fritta ripiena di ricotta zuccherata", "Pasticcerie e bar"],
        ["Granita con brioche", "Granita con la brioche morbida", "Bar e gelaterie, soprattutto d'estate"],
      ],
      "Il cibo di strada di Palermo"
    ),
    p("Il cibo di strada si mangia in piedi, di solito a pranzo o come spuntino nel tardo pomeriggio. Per sedersi a tavola, le trattorie del centro servono pasta con le sarde, pesce e verdure. Vicino ai monumenti i prezzi possono essere più alti: allontanati di qualche strada e controlla il coperto. Per un quadro più ampio c'è la nostra guida alle [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana). Sulle abitudini della tavola in generale, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 11 ———
    h2("Come muoversi a Palermo"),
    p("Nel centro storico, in piano e raccolto, si va quasi ovunque a piedi. **AMAT** gestisce gli autobus urbani e una rete tranviaria che serve soprattutto i quartieri esterni. Il biglietto si compra prima o tramite le app di AMAT; a bordo costa di più. Gli autobus raggiungono la zona Politeama–Libertà, il Monte Pellegrino e Mondello. I **taxi** si trovano ai posteggi, per esempio davanti alla stazione e nelle piazze principali, o si prenotano per telefono o via app. In alcune zone ci sono piste ciclabili, ma fuori dalle vie pedonali il traffico rende la bicicletta meno rilassante della camminata."),
    p("Fuori dal centro le distanze crescono e il terreno sale verso il Monte Pellegrino e le colline intorno alla città: per Mondello, Monreale e la Zisa usa autobus o taxi."),

    // ——— 12 ———
    h2("L'aeroporto di Palermo"),
    p("L'aeroporto Falcone Borsellino, detto anche Punta Raisi, è sulla costa a ovest della città. Secondo il Comune di Palermo, i collegamenti con il centro sono:"),
    ul(
      "**Treno** — il servizio Trinacria Express di Trenitalia parte dalla stazione sotto il terminal e arriva a Palermo Centrale in circa 45 minuti, con fermate in città.",
      "**Autobus** — i pullman Prestia e Comandè collegano l'aeroporto con Palermo Centrale, con fermate in città.",
      "**Taxi** — dal posteggio all'uscita del terminal; la tariffa dipende dalla zona di destinazione.",
      "**Auto a noleggio e NCC** — banchi di noleggio in aeroporto, oppure un'auto con conducente prenotata.",
    ),
    important("I lavori sulla linea ferroviaria tra l'aeroporto e la città hanno causato più volte variazioni d'orario e bus sostitutivi. Prima di partire, controlla i servizi aggiornati su [Trenitalia](https://www.trenitalia.com/) o sul [sito dell'aeroporto](https://www.aeroportodipalermo.it/).", "Controlla il treno per l'aeroporto"),

    // ——— 13 ———
    h2("Palermo in treno"),
    p("Palermo Centrale, in piazza Giulio Cesare in fondo a via Roma, è la stazione principale; accanto c'è il terminal dei pullman extraurbani. La rete ferroviaria siciliana è meno fitta di quella continentale, e il treno funziona molto meglio per alcune mete che per altre:"),
    ul(
      "**Cefalù e Messina** — i regionali percorrono la costa verso est; Cefalù è una gita facile.",
      "**Agrigento** — i regionali attraversano l'interno fino ad Agrigento, per la Valle dei Templi; è una giornata lunga.",
      "**Catania** — i regionali attraversano l'entroterra. La linea ha riaperto a settembre 2026 dopo tre mesi di chiusura per lavori; i pullman sono un'alternativa.",
      "**Siracusa** — da Palermo non ci sono treni diretti. Dal 1° ottobre 2026 al 31 gennaio 2027, tra Catania e Siracusa i treni sono sostituiti da bus per lavori.",
      "**Continente** — gli Intercity di giorno e di notte raggiungono Roma e oltre, attraversando lo Stretto di Messina a bordo della nave traghetto.",
    ),
    p("Per i lavori sulla rete gli orari cambiano spesso: controlla Trenitalia prima di ogni viaggio. Per biglietti e convalida leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno). Dal porto, in pieno centro, partono anche i traghetti per diversi porti del continente, tra cui Napoli; se prosegui il viaggio, c'è la nostra guida a [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),

    // ——— 14 ———
    h2("Gite da Palermo"),
    table(
      ["Meta", "Ideale per", "Come arrivare", "Da sapere"],
      [
        ["Monreale", "I mosaici d'oro del Duomo e il chiostro (UNESCO)", "Bus AMAT 389 da piazza Indipendenza, taxi o tour", "Mezza giornata. Nel 2026 il bus è stato sospeso a più riprese: verifica che sia attivo"],
        ["Cefalù", "Il Duomo normanno (UNESCO), il borgo e la spiaggia", "Treno regionale lungo la costa", "Mezza giornata o giornata intera; la gita più semplice con i mezzi pubblici"],
        ["Mondello", "La spiaggia sotto il Monte Pellegrino", "Bus urbano o taxi", "Mezza giornata; affollatissima nei weekend estivi"],
        ["Segesta", "Il tempio dorico e il teatro sulla collina", "Auto, tour organizzato o pochi pullman", "Giornata intera, spesso con Erice; molto caldo d'estate"],
        ["Erice", "Borgo medievale in cima al monte sopra Trapani", "Treno o pullman fino a Trapani, poi funivia o bus; più semplice in auto", "Giornata intera; verifica che la funivia sia in servizio"],
        ["San Vito Lo Capo", "Le spiagge d'estate", "Pullman stagionali o auto", "Giornata lunga; meglio con una notte sul posto"],
      ],
      "Gite in giornata da Palermo"
    ),
    {
      type: "image",
      src: `${IMG}/monreale-cathedral-mosaics.webp`,
      alt: "La navata del Duomo di Monreale, con pareti e abside rivestite di mosaici d'oro e la grande figura del Cristo Pantocratore sopra l'altare",
      caption: "Il Duomo di Monreale, parte dello stesso sito UNESCO dei monumenti arabo-normanni di Palermo.",
      credit: unsplash("Peter Boccia", "peterboccia"),
    },
    p("Monreale e Cefalù completano il sito UNESCO arabo-normanno e sono le prime scelte naturali. Segesta, Erice e San Vito Lo Capo sono molto più semplici in auto o con un tour, e d'estate caldo e folla consigliano di partire presto."),

    // ——— 15 ———
    h2("Quando andare a Palermo"),
    ul(
      "**Primavera (aprile–giugno)** — clima mite, ideale per camminare; tra i periodi più richiesti, soprattutto intorno a Pasqua.",
      "**Estate (luglio–agosto)** — caldo e secco, con le visite migliori al mattino presto e verso sera. È la stagione del mare a Mondello e lungo la costa. Il Festino di Santa Rosalia culmina la sera del 14 luglio con il carro lungo il Cassaro.",
      "**Autunno (settembre–novembre)** — caldo a settembre e ottobre, con il mare ancora piacevole; più avanti le piogge aumentano.",
      "**Inverno (dicembre–febbraio)** — mite rispetto a gran parte d'Italia e più tranquillo, anche se alcune giornate sono piovose; ideale per musei e cucina.",
    ),
    p("Per confrontare la Sicilia con le altre regioni nei vari mesi, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 16 ———
    h2("Palermo senza auto"),
    p("Per un soggiorno in città l'auto non serve, anzi può essere un peso. Il centro storico è una ZTL con varchi controllati da telecamere, le strade sono strette e trafficate e i parcheggi scarseggiano. I luoghi principali si raggiungono a piedi, Mondello e Monreale in autobus, Cefalù e gli altri paesi della costa in treno. Le escursioni organizzate coprono Segesta, Erice e le mete scomode con i mezzi pubblici."),
    p("L'auto a noleggio diventa utile per un giro più ampio della Sicilia — la costa occidentale, le Madonie, l'entroterra o il sud-est — dove i mezzi pubblici sono limitati. Ritirala quando lasci Palermo, non all'arrivo. Prima di metterti al volante leggi la nostra guida a [guidare in Italia](/it/guide/guidare-in-italia), che spiega ZTL e strade siciliane."),

    // ——— 17 ———
    h2("Sicurezza e buon senso"),
    p("Palermo è una grande città, e valgono le normali precauzioni di chi viaggia in città:"),
    ul(
      "**Custodisci gli oggetti di valore** — usa una borsa che si chiude e non tenere telefono e portafoglio nelle tasche posteriori, soprattutto nei mercati, sugli autobus e nella folla.",
      "**Tieni al sicuro i documenti** — porta con te una copia del passaporto e lascia l'originale nella cassaforte dell'alloggio se non ti serve.",
      "**Usa trasporti ufficiali** — taxi ai posteggi o prenotati via app o telefono, e servizi di transfer autorizzati.",
      "**Fai attenzione nei luoghi affollati** — mercati, feste e strade molto frequentate sono i posti dove i furti di borse sono più probabili.",
      "**Controlla dove si trova l'alloggio** — guarda la via su una mappa prima di prenotare e chiedi all'host come arrivare la sera.",
      "**Rispetta le regole locali** — l'abbigliamento nelle chiese, la ZTL se guidi e le regole di balneazione in spiaggia.",
    ),
    p("Nulla di tutto questo è specifico di Palermo: sono le stesse attenzioni che avresti in qualsiasi grande città europea."),

    // ——— 18 ———
    h2("Palermo per ogni tipo di viaggiatore"),
    ul(
      "**Alla prima visita** — segui il programma di due o tre giorni, prenota Palazzo dei Normanni e lascia tempo per un pranzo al mercato.",
      "**In coppia** — dormi nella Kalsa o vicino a piazza Marina, passeggia sul lungomare al tramonto e assisti a uno spettacolo al Teatro Massimo.",
      "**Da soli** — cibo di strada e banchi dei mercati rendono semplice mangiare da soli, e le visite guidate sono un buon modo per conoscere persone.",
      "**Con la famiglia** — Orto Botanico, lungomare, la spiaggia di Mondello e il cibo di strada piacciono ai bambini; usa i taxi per evitare lunghe camminate al caldo.",
      "**Per chi viaggia per la tavola** — visita tutti e tre i mercati, fai un tour del cibo di strada e assaggia pasta con le sarde e cassata palermitana.",
      "**Per chi ama storia e cultura** — abbina i monumenti arabo-normanni a Monreale e Cefalù, a Palazzo Abatellis e al Museo Salinas.",
      "**Per chi cerca il mare** — dividi il soggiorno tra Mondello o Cefalù e la città, dove vieni per le visite.",
      "**Con un budget contenuto** — cibo di strada, mercati, chiese a ingresso libero e passeggiate tengono bassa la spesa; dormi vicino alla stazione o nell'Albergheria.",
      "**Con Palermo come base per la Sicilia** — funziona per il nord-ovest; per l'est (Catania, Etna, Siracusa) conviene spostarsi invece di fare lunghi andata e ritorno.",
    ),

    // ——— 19 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Voler vedere tutta la Sicilia da Palermo.** L'isola è grande: Siracusa, l'Etna e il sud-est si visitano meglio dall'est.",
      "**Riempire troppo un programma di due giorni.** Scegli l'essenziale e lascia tempo per camminare.",
      "**Confondere le specialità palermitane con tutta la cucina siciliana.** La pasta alla Norma è di Catania; le arancine cambiano da città a città.",
      "**Sottovalutare i tempi dei mercati.** Vai la mattina, porta qualche contante e tieni al sicuro gli oggetti di valore.",
      "**Noleggiare l'auto per la città.** A Palermo non serve, e con la ZTL si rischiano multe.",
      "**Non controllare le informazioni sui monumenti.** Palazzo dei Normanni può chiudere senza preavviso, e il restauro può interessare la Cappella Palatina.",
      "**Affidarsi a orari superati.** Lavori sulla ferrovia e variazioni dei bus sono frequenti: controlla prima di ogni spostamento.",
      "**Non lasciare tempo per mangiare.** Cibo di strada e pranzi lunghi fanno parte della visita.",
      "**Scegliere l'alloggio senza pensare ai trasporti.** Controlla la distanza da monumenti, stazione e collegamento con l'aeroporto.",
      "**Pensare che ogni gita sia facile senza auto.** Cefalù è semplice in treno; Segesta ed Erice no.",
    ),

    // ——— 20 ———
    h2("Checklist per organizzarsi"),
    {
      type: "checklist",
      id: "palermo-per-la-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli il quartiere", "Decidi quanti giorni fermarti", "Decidi se servono gite o un'auto"],
        },
        {
          title: "Prima di partire",
          items: ["Controlla informazioni e avvisi dei monumenti", "Prenota Palazzo dei Normanni e Teatro Massimo se serve", "Verifica treno o bus per l'aeroporto", "Controlla treni e bus aggiornati per le gite"],
        },
        {
          title: "Durante il viaggio",
          items: ["Lascia tempo libero", "Verifica i trasporti del giorno", "Tieni al sicuro gli oggetti di valore nei mercati", "Dedica tempo a cibo e mercati"],
        },
      ],
    },
    p("Regole di visita, trasporti e chiusure citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Cambiano spesso: controllali prima di partire. Per inserire Palermo in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Vale la pena visitare Palermo?", answer: "Sì. Ha alcuni dei monumenti più particolari d'Italia, tra cui gli edifici arabo-normanni patrimonio UNESCO, mercati storici e una forte cultura del cibo di strada, il tutto in un centro storico da girare a piedi." },
    { question: "Quanti giorni servono per visitare Palermo?", answer: "Per la prima visita due o tre giorni: due per i luoghi principali, i mercati e il cibo, tre per aggiungere un museo e mezza giornata a Monreale. Con quattro o cinque giorni c'è tempo per Cefalù o Segesta." },
    { question: "Per che cosa è famosa Palermo?", answer: "Per i monumenti arabo-normanni come la Cappella Palatina e la Cattedrale, per i mercati — Ballarò, Capo e Vucciria — per il cibo di strada, per piazze barocche come i Quattro Canti e per il Teatro Massimo." },
    { question: "Palermo si gira a piedi?", answer: "Sì. Il centro storico è in piano e raccolto, e alcuni tratti di via Maqueda e corso Vittorio Emanuele sono pedonali. Per Mondello, Monreale e i quartieri esterni servono autobus o taxi." },
    { question: "Dove dormire a Palermo la prima volta?", answer: "Nel centro storico intorno ai Quattro Canti e a via Maqueda, nella Kalsa per musei e lungomare, o nella zona Politeama–Libertà per una base più tranquilla. Controlla bene la via prima di prenotare." },
    { question: "Quali sono i piatti tipici di Palermo?", answer: "Soprattutto il cibo di strada: arancine, panelle, crocchè, sfincione e pani ca' meusa. Poi pasta con le sarde, cassata e frutta martorana, accanto a classici di tutta la Sicilia come cannoli e caponata." },
    { question: "Quali sono i mercati principali di Palermo?", answer: "Ballarò, nell'Albergheria, il più grande; il Capo, vicino alla Cattedrale e al Teatro Massimo; la Vucciria, vicino a piazza San Domenico, più piccola di giorno e animata la sera." },
    { question: "Serve l'auto a Palermo?", answer: "Non per la città. Il centro si gira a piedi ed è ZTL, e autobus, treni e taxi coprono il resto. L'auto serve per un giro più ampio della Sicilia o per mete come Segesta ed Erice." },
    { question: "Come si arriva dall'aeroporto di Palermo in città?", answer: "Con il treno Trinacria Express fino a Palermo Centrale, circa 45 minuti secondo il Comune, con i pullman Prestia e Comandè o in taxi. Prima di partire verifica eventuali lavori sulla linea." },
    { question: "Si può andare a Monreale da Palermo?", answer: "Sì, in mezza giornata. Il bus AMAT 389 parte da piazza Indipendenza, anche se nel 2026 il servizio è stato sospeso a più riprese; taxi e tour sono le alternative." },
    { question: "Si può andare a Cefalù da Palermo?", answer: "Sì. I treni regionali percorrono la costa da Palermo Centrale, e Cefalù è una delle gite più semplici con i mezzi pubblici." },
    { question: "Palermo è una buona base per visitare la Sicilia?", answer: "Per il nord-ovest sì: Monreale, Cefalù, Segesta ed Erice sono a portata di mano. Per Catania, l'Etna e Siracusa conviene spostarsi nella parte orientale dell'isola." },
    { question: "Palermo è cara?", answer: "In genere è più economica di molte città del Nord. Cibo di strada e mercati costano poco e molte chiese sono gratuite, mentre alcuni monumenti, tour e alloggi in centro costano di più in alta stagione." },
    { question: "Cosa non perdere a Palermo?", answer: "La Cappella Palatina, la Cattedrale, la Martorana, i Quattro Canti e piazza Pretoria, un mercato come Ballarò e un pranzo di cibo di strada — più Monreale se hai un terzo giorno." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "UNESCO — Palermo arabo-normanna e le cattedrali di Cefalù e Monreale", url: "https://whc.unesco.org/en/list/1487/", note: "iscrizione nella Lista del Patrimonio Mondiale" },
    { label: "Palazzo Reale — Fondazione Federico II", url: "https://www.federicosecondo.org/visita/", note: "biglietti, aperture e avvisi" },
    { label: "Cattedrale di Palermo", url: "https://www.cattedrale.palermo.it/", note: "aperture e aree monumentali" },
    { label: "Teatro Massimo — visite guidate", url: "https://www.teatromassimo.it/visite-guidate/", note: "visite e programma" },
    { label: "Comune di Palermo — portale del turismo", url: "https://turismo.comune.palermo.it/", note: "luoghi, musei e come arrivare" },
    { label: "Visit Sicily", url: "https://www.visitsicily.info/", note: "turismo regionale ed eventi" },
    { label: "AMAT Palermo", url: "https://www.amat.pa.it/", note: "autobus, tram e biglietti" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/", note: "treno per l'aeroporto e regionali" },
    { label: "Aeroporto di Palermo", url: "https://www.aeroportodipalermo.it/", note: "voli e collegamenti" },
  ],
};
