import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Bologna in Two Days", scritta per chi legge in
// italiano. Chiusura delle Due Torri, stato del Marconi Express, dati sui
// portici, regole di prenotazione, zona T e pagamento sui bus sono stati
// verificati sui siti ufficiali a settembre 2026. Prezzi, orari e tempi di
// percorrenza non vengono citati, tranne Firenze, coerente con la guida ai treni.

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

const IMG = "/images/cities/bologna-in-two-days";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const bolognaInDueGiorni: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Bologna è il capoluogo dell'Emilia-Romagna, sede di una delle università più antiche d'Europa, città di palazzi in mattoni rossi, torri medievali e chilometri di portici. Sta al centro della rete ferroviaria tra Firenze, Milano e Venezia, e tanti ci passano senza fermarsi abbastanza per capirla. Due giorni bastano a cambiare le cose."),

    // ——— 1 ———
    h2("Bastano due giorni per Bologna?"),
    answer("**Sì: per una prima visita due giorni vanno bene.** Il centro storico è raccolto e in piano, quindi in un giorno si vedono piazza Maggiore, San Petronio, l'Archiginnasio, le vie del mercato del Quadrilatero e la zona delle Due Torri; il secondo lascia tempo per Santo Stefano, la zona universitaria, un museo e la lunga passeggiata sotto il portico di San Luca. **A Bologna la cucina fa parte dell'itinerario**: organizza le giornate intorno a pranzo, aperitivo e cena. **L'auto non serve**: si va quasi ovunque a piedi, e treni e monorotaia per l'aeroporto collegano la città. **Prenota in anticipo** il Teatro Anatomico dell'Archiginnasio, dove la prenotazione online è obbligatoria. Se vuoi una gita a Modena, Parma, Ferrara o Ravenna, aggiungi un terzo giorno."),
    p("Tieni presente che per ora le Due Torri si vedono solo da fuori: la Torre degli Asinelli è chiusa al pubblico dall'ottobre 2023 per i lavori di messa in sicurezza della Garisenda, e il Comune prevede che il restauro durerà ancora diversi anni."),

    // ——— 2 ———
    h2("Bologna in sintesi"),
    {
      type: "facts",
      title: "Bologna in sintesi",
      rows: [
        { label: "Durata consigliata", value: "2 giorni; 3 con una gita" },
        { label: "Famosa per", value: "Cucina, portici, università, torri medievali e architettura in mattoni" },
        { label: "Stazione principale", value: "Bologna Centrale, sulla linea dell'alta velocità tra Milano, Firenze e Roma" },
        { label: "Aeroporto", value: "Bologna Guglielmo Marconi, collegato a Bologna Centrale dalla monorotaia Marconi Express" },
        { label: "Come muoversi", value: "A piedi, con i bus TPER per i tragitti più lunghi" },
        { label: "Serve l'auto?", value: "No per un soggiorno in città: il centro ha limitazioni al traffico" },
        { label: "Da prenotare", value: "Archiginnasio e Teatro Anatomico (prenotazione online obbligatoria)" },
        { label: "Vicine in treno", value: "Modena, Parma, Reggio Emilia, Ferrara e Ravenna" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/bologna-rooftops-towers-blue-hour.webp`,
      alt: "I tetti rossi e ocra di Bologna visti dalla collina al crepuscolo, con l'alta Torre degli Asinelli, cupole e campanili sopra la città",
      caption: "Bologna dalla collina di San Michele in Bosco, con la Torre degli Asinelli sopra i tetti.",
      credit: unsplash("Petr Slováček", "grwood"),
      wide: true,
    },

    // ——— 3 ———
    h2("Bologna in due giorni"),
    p("Il programma qui sotto si fa tutto a piedi e lascia spazio ai pasti, che a Bologna sono parte della visita. Se arrivi nel pomeriggio, inverti l'ordine delle giornate."),
    h3("Primo giorno: il centro storico"),
    steps(
      ["Caffè vicino a piazza Maggiore", "Comincia con un caffè e una brioche al banco, poi entra in piazza Maggiore quando è ancora tranquilla: Palazzo d'Accursio, Palazzo del Podestà e la facciata incompiuta di San Petronio."],
      ["San Petronio e piazza del Nettuno", "Visita la basilica (circa 45 minuti) e cerca la meridiana sul pavimento. Poi, a due passi, piazza del Nettuno con la fontana del Giambologna e il cortile di Palazzo d'Accursio."],
      ["L'Archiginnasio", "Percorri il portico del Pavaglione fino all'Archiginnasio per la visita prenotata al Teatro Anatomico (40 minuti con l'audioguida)."],
      ["Pranzo nel Quadrilatero", "Perditi tra le vie dell'antico mercato dietro la piazza — via Pescherie Vecchie, via Drapperie, via Clavature — e pranza in trattoria o al Mercato di Mezzo."],
      ["Le Due Torri e via Zamboni", "Raggiungi piazza di Porta Ravegnana per vedere da fuori Asinelli e Garisenda, poi prosegui sotto i portici di Strada Maggiore o verso la zona universitaria."],
      ["Aperitivo e cena", "Una pausa in albergo, poi aperitivo al tramonto e cena con tortellini o tagliatelle al ragù."],
    ),
    h3("Secondo giorno: portici, Santo Stefano e ritmi più lenti"),
    steps(
      ["Santo Stefano", "Parti da piazza Santo Stefano, triangolare e circondata da portici, e visita il complesso delle Sette Chiese: calcola circa 45 minuti."],
      ["Mercato o museo", "Scegline uno: il Mercato delle Erbe, coperto, in via Ugo Bassi, oppure la Pinacoteca Nazionale in zona universitaria per la pittura bolognese."],
      ["Pranzo", "Qualcosa di semplice: crescentine con salumi, o un pranzo leggero prima della camminata."],
      ["Il portico di San Luca", "Da Porta Saragozza, sotto il portico più lungo del mondo, fino al Santuario della Madonna di San Luca: un primo tratto in piano, poi una lunga salita con gradini. Calcola almeno tre ore tra andata e ritorno, oppure sali a piedi e scendi in parte in autobus."],
      ["Sera", "Scegli un'altra zona — via del Pratello, la zona universitaria o le vie intorno a Santo Stefano — per aperitivo e cena."],
    ),
    tip("Se piove o preferisci non salire, sostituisci San Luca con il MAMbo e una passeggiata più lunga sotto i portici del centro, che comunque ti tengono all'asciutto.", "Alternativa per il secondo giorno"),
    table(
      ["Se ti interessa…", "Dai priorità a…"],
      [
        ["La storia", "Centro storico, Archiginnasio e Santo Stefano"],
        ["La cucina", "Quadrilatero, mercati e pasti tradizionali senza fretta"],
        ["L'architettura", "Portici, piazza Maggiore e Strada Maggiore"],
        ["L'arte", "Pinacoteca Nazionale e MAMbo"],
        ["Camminare", "Centro storico e portico di San Luca"],
        ["Viaggiare lentamente", "Passeggiate nei quartieri e pasti lunghi"],
      ],
      "Come adattare l'itinerario — un aiuto, non una classifica"
    ),

    // ——— 4 ———
    h2("Cosa vedere"),
    p("Giorni e orari di apertura cambiano, e alcuni luoghi chiudono un giorno alla settimana. Prima di organizzare una mattinata, controlla il sito ufficiale."),
    h3("Piazza Maggiore"),
    p("La piazza principale è circondata dai palazzi del potere cittadino: Palazzo d'Accursio (il municipio, con le Collezioni Comunali d'Arte ai piani superiori), Palazzo del Podestà, Palazzo dei Banchi e la Basilica di San Petronio. È il punto di partenza naturale, e la attraverserai più volte al giorno."),
    {
      type: "image",
      src: `${IMG}/piazza-maggiore-palazzo-del-podesta.webp`,
      alt: "Palazzo del Podestà in piazza Maggiore a Bologna, un lungo edificio porticato con una torre in mattoni, sotto il cielo azzurro",
      caption: "Palazzo del Podestà in piazza Maggiore.",
      credit: unsplash("Oleksandr", "pan_snig"),
    },
    h3("La Basilica di San Petronio"),
    p("Dedicata al patrono della città, San Petronio è una delle chiese più grandi d'Italia; fu iniziata nel 1390 e la sua facciata non fu mai completata, tanto che la parte alta è ancora in mattoni a vista. Sul pavimento corre la meridiana tracciata nel 1655 dall'astronomo Gian Domenico Cassini. L'ingresso alla basilica è gratuito; tre cappelle, tra cui la Cappella Bolognini affrescata, si visitano a pagamento. Spalle e ginocchia devono essere coperte, e non si entra con valigie e bagagli. Secondo la basilica, la terrazza panoramica è ora chiusa definitivamente."),
    {
      type: "image",
      src: `${IMG}/basilica-san-petronio-facade.webp`,
      alt: "La facciata della Basilica di San Petronio a Bologna, rivestita di marmo nella parte bassa e in mattoni a vista in quella alta",
      caption: "La facciata di San Petronio: marmo in basso, mattoni in alto.",
      credit: unsplash("Arno Senoner", "arnosenoner"),
    },
    h3("Piazza del Nettuno"),
    p("Accanto a piazza Maggiore, questa piazza più piccola ospita la fontana del Nettuno in bronzo del Giambologna, degli anni Sessanta del Cinquecento. Su un lato c'è Palazzo Re Enzo, sull'altro Salaborsa, biblioteca pubblica in un'ex borsa, con resti romani e medievali visibili sotto il pavimento di vetro."),
    h3("L'Archiginnasio e il Teatro Anatomico"),
    p("Costruito nel 1562–63 per riunire in un'unica sede l'insegnamento universitario, l'Archiginnasio è oggi la biblioteca comunale. Le pareti sono coperte da migliaia di stemmi di studenti, e il Teatro Anatomico, anfiteatro in legno progettato nel 1637 per le lezioni di anatomia, è una delle sale più suggestive della città. Secondo Bologna Welcome, che gestisce le visite, **la prenotazione online è obbligatoria**: si sceglie tra visita con audioguida (circa 40 minuti) e visita guidata (circa un'ora e un quarto), che apre anche sale di solito chiuse."),
    h3("Le Due Torri"),
    p("Asinelli e Garisenda, in piazza di Porta Ravegnana, sono le più note tra le tante torri costruite dalle famiglie bolognesi nel Medioevo. La Garisenda è visibilmente inclinata: nell'ottobre 2023 il Comune ha delimitato l'area intorno e chiuso al pubblico la Torre degli Asinelli per consentire il monitoraggio e la messa in sicurezza. Secondo la città i lavori dureranno almeno fino al 2028, anche se è stata ipotizzata una riapertura anticipata dell'Asinelli. Le torri si vedono comunque dalla piazza; prima di andare, controlla eventuali novità su [Bologna Welcome](https://www.bolognawelcome.com/it/)."),
    h3("Piazza Santo Stefano e le Sette Chiese"),
    p("A pochi passi dalle torri, piazza Santo Stefano è una piazza a forma di cuneo circondata da portici e palazzi. In fondo c'è il complesso di Santo Stefano, un insieme di chiese, chiostri e cortili collegati tra loro e costruiti nel corso dei secoli, che i bolognesi chiamano le Sette Chiese. È una visita raccolta e suggestiva di circa 45 minuti."),
    h3("Il Quadrilatero e i mercati"),
    p("La rete di viuzze a est di piazza Maggiore è il quartiere del mercato fin dal Medioevo, oggi pieno di salumerie, pescherie, fruttivendoli e piccoli locali. Il **Mercato di Mezzo**, in via Clavature, è un mercato dove si mangia; il **Mercato delle Erbe**, coperto, in via Ugo Bassi, è un mercato vero e proprio con banchi e posti dove mangiare. Vai la mattina, quando le botteghe sono in piena attività."),
    h3("La Pinacoteca Nazionale"),
    p("La pinacoteca, in zona universitaria, racconta la tradizione pittorica bolognese, dai polittici gotici ai Carracci, Guido Reni e il Guercino, con l'*Estasi di santa Cecilia* di Raffaello. Di solito è chiusa il lunedì; calcola un'ora e mezza o due."),
    h3("Il MAMbo"),
    p("Il Museo d'Arte Moderna di Bologna occupa l'ex Forno del Pane comunale, sul margine nord-occidentale del centro, accanto al Parco del Cavaticcio. Ospita mostre di arte contemporanea e il Museo Morandi, dedicato al più noto pittore bolognese del Novecento. Di solito è chiuso il lunedì; controlla le mostre in corso prima di andare."),
    table(
      ["Luogo", "Tempo da dedicare", "Prenotare?", "Quando inserirlo"],
      [
        ["Piazza Maggiore e piazza del Nettuno", "30–45 minuti", "No", "Primo giorno, mattina"],
        ["San Petronio", "Circa 45 minuti", "No; cappelle a pagamento", "Primo giorno, mattina"],
        ["Archiginnasio e Teatro Anatomico", "Da 40 minuti a 1 ora e ¼", "Sì — online, obbligatorio", "Primo giorno, tarda mattinata"],
        ["Quadrilatero e Mercato di Mezzo", "1–2 ore con il pranzo", "No", "Primo giorno, pranzo"],
        ["Due Torri (solo da fuori)", "15 minuti", "Salite sospese", "Primo giorno, pomeriggio"],
        ["Santo Stefano", "Circa 45 minuti", "No", "Secondo giorno, mattina"],
        ["Pinacoteca Nazionale", "1 ora e mezza–2 ore", "Di solito no", "Secondo giorno, se ami l'arte"],
        ["Portico di San Luca", "Almeno 3 ore andata e ritorno", "No", "Secondo giorno, pomeriggio"],
        ["MAMbo", "1–2 ore", "Dipende dalla mostra", "Alternativa per il secondo giorno"],
      ],
      "I luoghi principali e quando visitarli"
    ),

    // ——— 5 ———
    h2("Il centro storico di Bologna"),
    p("Il centro storico è racchiuso dai viali che seguono il tracciato delle antiche mura, di cui restano diverse porte, come Porta Saragozza, Porta Maggiore e Porta Galliera. All'interno, le strade partono da piazza Maggiore e dalle Due Torri verso le porte, quasi tutte fiancheggiate da portici. È in piano e compatto: a piedi lo si attraversa in molto meno di un'ora."),
    p("Via Rizzoli e via Ugo Bassi, l'asse est–ovest, formano con via Indipendenza la cosiddetta \"T\". Secondo il Comune, via Rizzoli e via Ugo Bassi diventano pedonali il sabato, la domenica e nei festivi — i *T Days* — e il fine settimana è quindi particolarmente piacevole per camminare in centro."),
    {
      type: "image",
      src: `${IMG}/porta-maggiore-street-tower.webp`,
      alt: "Strada Maggiore a Bologna vista attraverso l'arco in mattoni di Porta Maggiore, con palazzi porticati e un'alta torre medievale in fondo",
      caption: "Strada Maggiore attraverso l'arco di Porta Maggiore, con la Torre degli Asinelli in fondo.",
      credit: unsplash("Petr Slováček", "grwood"),
    },
    important("Bologna sta costruendo una nuova linea tranviaria. Secondo la stampa locale, a settembre 2026 i cantieri erano in via di completamento ed erano iniziati i collaudi, con alcune strade e linee di autobus ancora interessate. Controlla percorsi e deviazioni aggiornati su [TPER](https://www.tper.it/).", "Lavori del tram"),

    // ——— 6 ———
    h2("I portici di Bologna"),
    p("I portici — i passaggi coperti formati dalle arcate lungo le facciate — sono il tratto distintivo di Bologna. Secondo il Comune di Bologna, nel Medioevo nacquero come estensioni private su suolo pubblico; se ne capì presto l'utilità e, dagli statuti comunali del 1288, divennero obbligatori nelle nuove costruzioni. Costruiti su suolo privato ma aperti a tutti, sono ancora uno spazio pubblico condiviso."),
    p("Nel luglio 2021 l'UNESCO ha iscritto i Portici di Bologna nella Lista del Patrimonio Mondiale. Il sito è composto da 12 insiemi di portici, scelti tra i 62 chilometri di strade porticate della città per rappresentare epoche, materiali e funzioni diverse: dai portici medievali in legno di Strada Maggiore a quelli novecenteschi in cemento del quartiere Barca."),
    {
      type: "image",
      src: `${IMG}/bologna-porticoes-piazza.webp`,
      alt: "Portici con colonne rosse e ocra nel centro di Bologna, con persone sedute e a passeggio sotto le arcate",
      caption: "Portici nel centro storico: riparo dal sole e dalla pioggia, e pieni di vita quotidiana.",
      credit: unsplash("Caio Fernandes", "caiovxf"),
    },
    p("Per chi visita la città, i portici sono semplicemente il modo di spostarsi: ombra d'estate, riparo dalla pioggia e un percorso continuo tra quasi tutti i luoghi da vedere. Alcuni dei portici UNESCO sono anche ottime passeggiate brevi, come Strada Maggiore, via Galliera e il portico del Pavaglione tra piazza Maggiore e l'Archiginnasio."),
    h3("Il portico di San Luca"),
    p("Il portico più famoso sale dalla città al Santuario della Madonna di San Luca, sul Colle della Guardia. Costruito dal 1674 per riparare la processione che porta in città l'icona della Madonna, è il portico più lungo del mondo: circa 3,6 chilometri secondo il Comune. Il primo tratto, dall'Arco Bonaccorsi vicino a Porta Saragozza, segue via Saragozza in piano per circa un chilometro e mezzo; all'Arco del Meloncello scavalca la strada e iniziano oltre due chilometri di salita e gradini fino al santuario. Spesso si dice che gli archi siano 666, ma secondo il Comune sono un po' meno, a seconda di come si contano."),
    {
      type: "image",
      src: `${IMG}/portico-di-san-luca.webp`,
      alt: "Il lungo e stretto portico di San Luca a Bologna, una fila di arcate che si ripete nella penombra",
      caption: "Il portico di San Luca, il più lungo del mondo.",
      credit: unsplash("Francesco Luca Labianca", "ieeah"),
    },
    tip("Per San Luca servono scarpe comode e acqua, e un po' di tempo in cima per il panorama e il santuario. La salita è costante ma, con calma, alla portata di molti.", "A piedi fino a San Luca"),

    // ——— 7 ———
    h2("Dove dormire a Bologna"),
    p("Per due giorni, dormire nel centro storico significa andare ovunque a piedi e poter ripassare in albergo tra un giro e l'altro. Dormire vicino alla stazione semplifica arrivi e gite. Durante le grandi fiere di BolognaFiere le camere si esauriscono e i prezzi salgono: controlla il calendario fieristico prima di prenotare."),
    table(
      ["Zona", "Ideale per", "Vantaggi", "Da considerare"],
      [
        ["Intorno a piazza Maggiore", "Prima visita e soggiorni brevi", "Tutto a piedi; tanti ristoranti", "Più affollata e spesso più cara"],
        ["Santo Stefano e Strada Maggiore", "Coppie, viaggi lenti", "Vie e piazze eleganti; il centro a pochi minuti", "Più tranquilla la sera; poche opzioni economiche"],
        ["Zona universitaria", "Budget contenuto, vita serale", "Vivace, con prezzi da studenti", "Rumorosa fino a tardi, soprattutto intorno a piazza Verdi"],
        ["Vicino a Bologna Centrale", "Gite, treni presto, bagagli", "Treni e monorotaia per l'aeroporto a portata di mano", "Circa 15–20 minuti a piedi da piazza Maggiore; meno atmosfera"],
        ["Saragozza e Porta Saragozza", "Chi vuole camminare fino a San Luca", "Residenziale, vicino all'inizio del portico di San Luca", "Più lontana dalla stazione"],
      ],
      "Dove dormire a Bologna"
    ),
    p("Ovunque tu scelga, se viaggi con bagagli pesanti controlla se l'edificio ha l'ascensore e quanto dista dalla fermata dell'autobus. Bologna applica l'imposta di soggiorno, a persona e a notte."),

    // ——— 8 ———
    h2("I quartieri di Bologna"),
    ul(
      "**Il centro (piazza Maggiore e Quadrilatero)** — il cuore civico e commerciale, con mercati, negozi e ristoranti. Qui ci sono quasi tutti i luoghi da vedere, e ci si arriva a piedi da ogni altra zona.",
      "**Santo Stefano e Strada Maggiore** — a sud-est delle torri, con palazzi eleganti, il complesso di Santo Stefano e lunghi portici. Più tranquilla del centro.",
      "**La zona universitaria (via Zamboni e piazza Verdi)** — a nord-est delle torri, con gli edifici storici dell'università, la Pinacoteca e una vita serale giovane e animata.",
      "**Via del Pratello** — una via a ovest del centro nota per i locali e le osterie informali, frequentata la sera.",
      "**Saragozza** — a sud-ovest, residenziale, con Porta Saragozza e l'inizio del portico di San Luca.",
      "**Bolognina** — a nord della ferrovia, un quartiere residenziale e multiculturale. Non è una zona da visitare per i monumenti, ma è vicina alla stazione.",
    ),

    // ——— 9 ———
    h2("Cosa mangiare a Bologna"),
    p("La cucina bolognese è quella dell'Emilia-Romagna: pasta fresca all'uovo, salumi di maiale, formaggi stagionati e sughi cotti a lungo. Gli \"spaghetti alla bolognese\" che si trovano all'estero non sono un piatto bolognese: qui il ragù si serve con le tagliatelle all'uovo, o al forno nelle lasagne verdi."),
    ul(
      "**Tagliatelle al ragù** — nastri di pasta fresca all'uovo con un sugo di carne cotto a lungo. La delegazione bolognese dell'Accademia Italiana della Cucina ha depositato una ricetta di riferimento del ragù presso la Camera di Commercio della città.",
      "**Tortellini in brodo** — piccola pasta ripiena di lombo di maiale, prosciutto crudo, mortadella e Parmigiano Reggiano, servita nel brodo di carne, soprattutto d'inverno.",
      "**Tortelloni** — pasta ripiena più grande, di solito con ricotta ed erbe, condita con burro e salvia.",
      "**Lasagne verdi** — sfoglia agli spinaci a strati con ragù e besciamella.",
      "**Mortadella** — il grande insaccato cotto di maiale, finemente macinato e punteggiato di lardelli; la Mortadella Bologna è IGP.",
      "**Crescentine e tigelle** — a Bologna le *crescentine* sono pezzi di pasta fritta (altrove in regione si chiamano *gnocco fritto*) da mangiare con salumi e formaggi morbidi. Le *tigelle* sono piccoli dischi di pane dell'Appennino modenese, cotti negli stampi.",
      "**Cotoletta alla bolognese** — cotoletta di vitello impanata, coperta di prosciutto e Parmigiano e completata nel brodo.",
      "**Prodotti del territorio** — Parmigiano Reggiano, Prosciutto di Parma e aceto balsamico tradizionale di Modena e di Reggio Emilia, tutti a denominazione protetta, e vini come il Pignoletto dei colli bolognesi e, dalle vicine Modena e Reggio Emilia, il Lambrusco.",
    ),
    {
      type: "image",
      src: `${IMG}/bologna-delicatessen.webp`,
      alt: "L'interno di una gastronomia a Bologna, con scaffali e banconi pieni di formaggi, salumi, olive e piatti pronti",
      caption: "Una gastronomia bolognese. Molte botteghe del Quadrilatero affettano salumi e formaggi da portare via.",
      credit: unsplash("Max Nayman", "maxniceman"),
    },
    h3("Dove e come mangiare"),
    p("La **trattoria** e l'**osteria** sono i posti classici per la pasta fatta in casa; oggi i due nomi si confondono, anche se l'osteria nasce come luogo dove bere vino. Nei **pastifici** le *sfogline* tirano la pasta a mano e vendono tortellini e tagliatelle freschi; alcuni la servono anche da mangiare lì. I **mercati** offrono di tutto, dalla frutta ai banchi per il pranzo, e l'**aperitivo** del tardo pomeriggio è un bicchiere con qualche stuzzichino. Si pranza di solito dalle 12:30 circa e si cena dalle 19:30–20:00; per la cena nei locali più noti conviene prenotare, soprattutto nel fine settimana."),
    {
      type: "image",
      src: `${IMG}/bologna-market-cheese-stall.webp`,
      alt: "Un banco del mercato a Bologna con forme e spicchi di formaggio, prosciutti e una bandiera italiana",
      caption: "Un banco di formaggi e salumi nel centro di Bologna.",
      credit: unsplash("Kristijan Arsov", "aarsoph"),
    },
    h3("Piccolo glossario della tavola"),
    table(
      ["Termine", "Che cosa indica"],
      [
        ["Tagliatelle al ragù", "Nastri di pasta fresca all'uovo con sugo di carne cotto a lungo"],
        ["Tortellini (in brodo)", "Piccola pasta ripiena di carne, tradizionalmente servita nel brodo"],
        ["Tortelloni", "Pasta ripiena più grande, di solito con ricotta ed erbe"],
        ["Mortadella", "Grande insaccato cotto di maiale, finemente macinato, con lardelli"],
        ["Crescentine", "A Bologna, pasta fritta da mangiare con i salumi"],
        ["Tigelle", "Piccoli pani rotondi cotti negli stampi, tipici del modenese"],
        ["Sfoglia / sfoglina", "Pasta all'uovo tirata a mano / chi la prepara"],
        ["Trattoria", "Locale informale, spesso a conduzione familiare, con piatti della tradizione"],
        ["Osteria", "In origine una mescita di vino; oggi spesso un locale semplice e tradizionale"],
        ["Tagliere", "Un assortimento di salumi e formaggi da dividere"],
        ["Coperto", "Un importo a persona che molti ristoranti aggiungono al conto"],
      ],
      "Glossario della cucina bolognese"
    ),
    p("Per orientarsi, una passeggiata al mercato o una degustazione guidata possono aiutare. Per come funziona il pasto in tutta Italia, leggi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 10 ———
    h2("Come muoversi a Bologna"),
    p("Quasi tutto si fa a piedi: il centro è in piano e i portici riparano da sole e pioggia. **TPER** gestisce gli autobus urbani. Il biglietto si compra prima oppure, secondo TPER, si paga a bordo avvicinando una carta contactless Mastercard, Visa, Maestro o VPay al validatore verde; la carta va passata a ogni cambio di autobus. I **taxi** si trovano ai posteggi, per esempio davanti alla stazione, o si chiamano per telefono o via app. Bologna ha buone piste ciclabili e un servizio di bike sharing, ma nelle vie strette del centro in bici serve attenzione ai pedoni."),
    p("In gran parte della città vige il limite dei 30 km/h, e il centro storico è una zona a traffico limitato (ZTL) controllata da telecamere. Conta se guidi, non se cammini e prendi l'autobus."),

    // ——— 11 ———
    h2("Bologna in treno"),
    p("Bologna Centrale è uno dei principali nodi ferroviari italiani, dove si incontrano le linee dell'alta velocità da Milano, verso Firenze e Roma, e verso Venezia. La stazione è a nord del centro storico, a circa 15–20 minuti a piedi da piazza Maggiore lungo via Indipendenza, o a pochi minuti di autobus. I binari dell'alta velocità sono in profondità: calcola tempo in più per raggiungerli."),
    ul(
      "**Firenze** — con l'alta velocità circa 35–40 minuti: Bologna e Firenze si abbinano facilmente.",
      "**Milano, Roma, Venezia e Napoli** — treni diretti ad alta velocità di Trenitalia (Frecciarossa) e Italo.",
      "**Emilia-Romagna** — i regionali portano a Modena, Parma, Reggio Emilia, Ferrara, Ravenna e alla costa adriatica.",
    ),
    p("Verifica gli orari aggiornati con Trenitalia e Italo. Per biglietti, convalida e prenotazione del posto leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 12 ———
    h2("L'aeroporto di Bologna"),
    p("L'aeroporto Guglielmo Marconi è appena a nord-ovest della città. Il collegamento principale è il **Marconi Express**, una monorotaia sopraelevata tra l'aeroporto e Bologna Centrale con una fermata intermedia al Lazzaretto. Secondo il gestore, il tragitto dura circa sette minuti e il servizio va dalla mattina presto a mezzanotte; ai varchi si può pagare con carta contactless. Di notte, da mezzanotte alle 5:40, il collegamento con la stazione è garantito dalla **linea Q** di TPER."),
    important("A volte la monorotaia viene sospesa per manutenzione e sostituita da bus navetta — per esempio dal 29 settembre al 1° ottobre e dal 3 al 6 ottobre 2026. Prima di partire controlla il [sito del Marconi Express](https://www.marconiexpress.it/).", "Controlla prima del volo"),
    p("I **taxi** aspettano fuori dagli arrivi e portano direttamente in albergo: comodi con i bagagli o la sera tardi. Il **noleggio con conducente** (NCC) si prenota in anticipo con operatori autorizzati. Da Bologna Centrale si prosegue a piedi, in autobus o in taxi verso il centro."),

    // ——— 13 ———
    h2("Gite da Bologna"),
    p("Bologna è un'ottima base per scoprire l'Emilia-Romagna in treno. In un soggiorno di due giorni, però, una gita toglie metà del tempo alla città: meglio aggiungere un terzo giorno."),
    table(
      ["Meta", "Ideale per", "Come arrivare", "Da sapere"],
      [
        ["Modena", "Duomo e piazza Grande (UNESCO), aceto balsamico, cucina", "Treno regionale o veloce", "Mezza giornata o giornata intera; la gita più semplice"],
        ["Parma", "Duomo e Battistero, Prosciutto di Parma e Parmigiano Reggiano", "Treno regionale o veloce", "Giornata intera"],
        ["Ferrara", "Mura rinascimentali, Castello Estense, bicicletta", "Treno regionale", "Mezza giornata o giornata intera"],
        ["Ravenna", "Mosaici paleocristiani e bizantini (UNESCO)", "Treno regionale", "Giornata intera; i siti dei mosaici hanno biglietti e orari propri"],
        ["Reggio Emilia", "Un centro storico più tranquillo e le terre del Parmigiano Reggiano", "Treno regionale, o alta velocità fino a Reggio Emilia AV Mediopadana, fuori dal centro", "Mezza giornata; meglio con visite gastronomiche"],
      ],
      "Gite in giornata da Bologna"
    ),
    p("I tour nei caseifici del Parmigiano Reggiano e dai produttori di aceto balsamico includono di solito il trasporto, perché molti produttori sono fuori città. Se pensi di girare la regione per più giorni, l'auto diventa più utile: vedi sotto."),

    // ——— 14 ———
    h2("Quando andare a Bologna"),
    ul(
      "**Primavera (aprile–giugno)** — ideale per camminare e sedersi all'aperto; tra i periodi più richiesti, soprattutto nei fine settimana e nei ponti.",
      "**Estate (luglio–agosto)** — caldo e afoso, come in tutta la pianura padana. I portici aiutano e la sera ci sono cinema e musica all'aperto, ma ad agosto alcuni ristoranti chiudono per ferie.",
      "**Autunno (settembre–novembre)** — clima buono per camminare a settembre e ottobre, con l'università di nuovo in piena attività. Il 4 ottobre la città festeggia il patrono, San Petronio.",
      "**Inverno (dicembre–febbraio)** — freddo e spesso nebbioso, ma perfetto per tortellini in brodo, musei e lunghi pranzi. A dicembre mercatini e tradizioni natalizie animano la città.",
    ),
    p("Le grandi fiere di BolognaFiere possono riempire gli alberghi in qualsiasi stagione. Per confrontare Bologna con altre mete italiane nei vari mesi, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 15 ———
    h2("Bologna per ogni tipo di viaggiatore"),
    ul(
      "**Alla prima visita** — segui il programma di due giorni, prenota l'Archiginnasio e tieni San Luca per il secondo giorno.",
      "**In coppia** — dormi vicino a Santo Stefano, passeggia la sera sotto i portici di Strada Maggiore e concediti una cena lunga.",
      "**Da soli** — banchi dei mercati, bar e aperitivo rendono semplice mangiare da soli, e il centro è raccolto e frequentato fino a sera.",
      "**Con la famiglia** — sotto i portici il passeggino va ovunque, i mercati piacciono ai bambini e la salita a San Luca si può accorciare facendo un tratto in autobus.",
      "**Per chi viaggia per la tavola** — una mattina nel Quadrilatero e al Mercato delle Erbe, un tour gastronomico o un corso di pasta, e una gita a Modena o Parma.",
      "**Per chi ama arte e cultura** — Pinacoteca, Archiginnasio, Santo Stefano e il Museo Morandi al MAMbo.",
      "**Con un budget contenuto** — molte delle cose migliori sono gratuite, come portici, piazze, San Petronio e la camminata a San Luca; si mangia bene ai banchi dei mercati e nei pastifici.",
      "**Per un weekend** — con i T Days il sabato e la domenica sono perfetti per camminare in centro, ma prenota ristoranti e Archiginnasio.",
    ),

    // ——— 16 ———
    h2("Bologna senza auto"),
    p("Per visitare la città l'auto è più un peso che un aiuto. Il centro è una ZTL controllata da telecamere, le strade sono strette e i parcheggi pochi e a pagamento. Tutto ciò che vuoi vedere è a piedi o a pochi minuti di autobus, e il treno copre le gite principali."),
    p("L'auto diventa utile se giri l'Emilia-Romagna più a fondo — le colline dell'Appennino, la campagna tra Parma e Modena, i paesi lontani dalla ferrovia. In quel caso ritirala quando lasci Bologna, oppure parcheggia fuori dalla ZTL ed entra a piedi. Prima di metterti al volante leggi la nostra guida a [guidare in Italia](/it/guide/guidare-in-italia), che spiega ZTL e limiti di velocità."),

    // ——— 17 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Voler vedere troppi musei.** Scegline uno o due e lascia tempo per strade e mercati.",
      "**Restare solo intorno a piazza Maggiore.** Santo Stefano, la zona universitaria e Strada Maggiore mostrano altre facce della città.",
      "**Trattare la cucina come un dettaglio.** A Bologna i pasti fanno parte dell'itinerario: organizzali e prenotali.",
      "**Saltare i portici.** Percorri almeno uno dei portici UNESCO, possibilmente quello di San Luca.",
      "**Riempire troppo il programma.** Due giorni bastano per l'essenziale, non per tutto.",
      "**Noleggiare l'auto per la città.** Non serve, e con la ZTL si rischiano multe.",
      "**Scegliere l'alloggio senza valutare i compromessi.** Vicino alla stazione è comodo per i treni; il centro è meglio per le serate.",
      "**Non controllare le informazioni aggiornate.** Le Due Torri non si possono salire, la terrazza di San Petronio è chiusa definitivamente e l'Archiginnasio va prenotato.",
      "**Affidarsi a informazioni superate sui trasporti.** Lavori del tram e manutenzione della monorotaia possono cambiare i percorsi: controlla TPER e Marconi Express.",
      "**Aggiungere troppe gite.** In un soggiorno breve ne basta una.",
    ),

    // ——— 18 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "bologna-in-due-giorni",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli la zona dove dormire", "Decidi quanti giorni fermarti", "Decidi se aggiungere una gita", "Controlla il calendario di BolognaFiere"],
        },
        {
          title: "Prima di partire",
          items: ["Verifica le informazioni aggiornate sui luoghi principali", "Prenota Archiginnasio e Teatro Anatomico", "Prenota la cena nei locali più richiesti", "Controlla Marconi Express o collegamenti ferroviari"],
        },
        {
          title: "Durante il viaggio",
          items: ["Lascia tempo per i pasti", "Controlla linee e deviazioni degli autobus", "Tieni un momento libero nel programma", "Vesti in modo adeguato per San Petronio"],
        },
      ],
    },
    p("Chiusure, regole di prenotazione, collegamenti e norme sul traffico citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Possono cambiare: controllali prima di partire. Per inserire Bologna in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Bastano due giorni per Bologna?", answer: "Sì. In due giorni si vedono piazza Maggiore, San Petronio, l'Archiginnasio, il Quadrilatero, Santo Stefano, un museo e il portico di San Luca, con il tempo per mangiare bene. Per una gita aggiungi un terzo giorno." },
    { question: "Per che cosa è famosa Bologna?", answer: "Per la cucina, soprattutto tagliatelle al ragù, tortellini e mortadella; per i portici, Patrimonio dell'Umanità UNESCO; per le torri medievali e per una delle università più antiche d'Europa." },
    { question: "Bologna si gira a piedi?", answer: "Sì, benissimo. Il centro storico è in piano e raccolto, e quasi tutte le strade hanno i portici, che riparano da sole e pioggia. Lo si attraversa a piedi in molto meno di un'ora." },
    { question: "Dove dormire a Bologna la prima volta?", answer: "Nel centro storico vicino a piazza Maggiore per comodità, intorno a Santo Stefano per un soggiorno più tranquillo, o vicino a Bologna Centrale se prevedi gite o treni al mattino presto." },
    { question: "Quali sono i piatti tipici di Bologna?", answer: "Tagliatelle al ragù, tortellini in brodo, tortelloni, lasagne verdi, mortadella e crescentine con i salumi, oltre a prodotti del territorio come il Parmigiano Reggiano." },
    { question: "Serve l'auto a Bologna?", answer: "No. Il centro si gira a piedi, i bus TPER coprono le distanze più lunghe e i treni raggiungono le città vicine. Il centro storico è una ZTL, quindi per un soggiorno in città l'auto crea più problemi che vantaggi." },
    { question: "Come si arriva dall'aeroporto di Bologna in città?", answer: "Con la monorotaia Marconi Express fino a Bologna Centrale, in circa sette minuti, dalla mattina presto a mezzanotte; di notte la sostituisce la linea Q di TPER. In taxi si arriva direttamente in centro. Controlla sul sito del Marconi Express eventuali sospensioni." },
    { question: "Si possono salire le Due Torri?", answer: "Per ora no. La Torre degli Asinelli è chiusa al pubblico dall'ottobre 2023 per la messa in sicurezza della Garisenda, con lavori previsti per diversi anni. Le torri si vedono comunque da piazza di Porta Ravegnana." },
    { question: "Bologna va bene per un weekend?", answer: "Sì. È raccolta, facile da raggiungere in treno e nel fine settimana le vie principali del centro diventano pedonali. Prenota in anticipo ristoranti e Archiginnasio." },
    { question: "Si può andare a Bologna da Firenze in treno?", answer: "Sì. Con l'alta velocità servono circa 35–40 minuti, quindi la gita da Firenze è facile — anche se Bologna merita almeno una notte." },
    { question: "Cosa non perdere a Bologna?", answer: "Piazza Maggiore e San Petronio, il Teatro Anatomico dell'Archiginnasio, il Quadrilatero, Santo Stefano, le Due Torri viste da fuori e la camminata a San Luca — più un piatto di tagliatelle al ragù o di tortellini." },
    { question: "Vale la pena vedere i portici di Bologna?", answer: "Sì. Sono Patrimonio dell'Umanità UNESCO e sono il modo in cui ci si muove in città. Percorri Strada Maggiore e il portico di San Luca, il più lungo del mondo." },
    { question: "Si possono fare gite da Bologna?", answer: "Sì. Modena, Parma, Ferrara, Ravenna e Reggio Emilia si raggiungono in treno. In un soggiorno di due giorni conviene aggiungere un terzo giorno invece di togliere metà del tempo a Bologna." },
    { question: "Bologna è cara?", answer: "In genere meno di Venezia o Firenze, anche se durante le grandi fiere gli alberghi possono costare molto. Molte delle esperienze migliori, come portici, piazze e San Petronio, sono gratuite, e banchi dei mercati e trattorie tengono sotto controllo la spesa per mangiare." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Bologna Welcome — informazione turistica ufficiale", url: "https://www.bolognawelcome.com/it/", note: "luoghi, prenotazioni e aggiornamenti" },
    { label: "Portici di Bologna — Comune di Bologna", url: "https://portici.comune.bologna.it/", note: "i portici UNESCO e San Luca" },
    { label: "UNESCO — The Porticoes of Bologna", url: "https://whc.unesco.org/en/list/1650/", note: "iscrizione nella Lista del Patrimonio Mondiale" },
    { label: "Basilica di San Petronio", url: "https://www.basilicadisanpetronio.org/", note: "visite, regole e cappelle" },
    { label: "Archiginnasio e Teatro Anatomico — prenotazioni", url: "https://www.bolognawelcome.com/it/esperienze/331861/Il-Palazzo-dell-Archiginnasio-e-il-Teatro-Anatomico---Visita-guidata-o-con-audioguida", note: "prenotazione online obbligatoria" },
    { label: "Pinacoteca Nazionale di Bologna", url: "https://pinacotecabologna.cultura.gov.it/", note: "aperture e mostre" },
    { label: "MAMbo — Museo d'Arte Moderna di Bologna", url: "https://www.museibologna.it/mambo/", note: "mostre e Museo Morandi" },
    { label: "Zona T e T Days — Comune di Bologna", url: "https://www.comune.bologna.it/informazioni/zona-t-t-days", note: "fine settimana pedonali in centro" },
    { label: "TPER", url: "https://www.tper.it/", note: "autobus, biglietti e pagamento contactless" },
    { label: "Marconi Express", url: "https://www.marconiexpress.it/", note: "monorotaia per l'aeroporto e avvisi di servizio" },
  ],
};
