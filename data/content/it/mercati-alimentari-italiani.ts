import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "I mercati alimentari italiani" — edizione italiana,
// scritta in modo autonomo rispetto a quella inglese, con gli stessi fatti.
// Verificato a ottobre 2026 su fonti ufficiali: Turismo Roma (Roma Capitale) e
// italia.it per Campo de' Fiori, Testaccio e i mercati rionali di Roma; Feel
// Florence (Comune di Firenze) per Mercato Centrale e Sant'Ambrogio; Bologna
// Welcome per Mercato delle Erbe e Quadrilatero; la DMO del Comune di Napoli
// per Porta Nolana e Pignasecca; l'Università di Palermo per Ballarò e Capo;
// Venezia Unica (Città di Venezia) per Rialto e gli altri mercati; Comune di
// Torino (dicembre 2025) e Turismo Torino per Porta Palazzo; L'Unione Sarda per
// il trasferimento del mercato di San Benedetto a Cagliari (2025); Fondazione
// Campagna Amica per i mercati dei produttori; D.Lgs. 114/1998 art. 14 sulla
// pubblicità dei prezzi; D.L. 36/2022 sui pagamenti elettronici. DOP e IGP
// verificate su eAmbrosia. I superlativi sono attribuiti a chi li usa o
// omessi; gli orari compaiono solo se indicati da una fonte ufficiale. Nessun
// banco citato o classificato, nessun prezzo.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-food-markets";

export const mercatiAlimentariItaliani: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cos'è un mercato alimentare italiano?"),
    answer("**Un mercato alimentare italiano può essere un mercato coperto quotidiano con macellai, pescivendoli e fruttivendoli, una strada di bancarelle che si monta ogni mattina, un mercato settimanale dove il formaggio sta accanto ai calzini, un mercato di produttori dove gli agricoltori vendono il proprio raccolto, oppure un moderno spazio gastronomico pensato per mangiare più che per fare la spesa.** Per chi viaggia la cosa più utile è capire in quale si sta entrando: servono persone diverse, hanno orari diversi e offrono esperienze molto diverse."),
    p("Li accomuna il cibo venduto sfuso, a peso, da persone che parlano con i clienti. Per questo i mercati sono una delle finestre più chiare su come mangia davvero una città: che cosa è di stagione questa settimana, che cosa produce e pesca la regione, che cosa si compra per cucinare a casa."),
    {
      type: "facts",
      title: "I mercati alimentari in breve",
      rows: [
        { label: "Tipi principali", value: "Mercati coperti, mercati su strada, mercati dei produttori, mercati del pesce, spazi gastronomici" },
        { label: "Momento migliore", value: "La mattina; molti mercati del fresco si svuotano nel primo pomeriggio" },
        { label: "Giorni abituali", value: "Dal lunedì al sabato per la maggior parte dei mercati giornalieri; alcuni chiudono il lunedì o sono solo settimanali" },
        { label: "Come si compra", value: "Si chiede al venditore, a peso o a pezzo; i prezzi devono essere esposti" },
        { label: "Pagamento", value: "I commercianti sono obbligati ad accettare la carta, ma per piccoli importi il contante resta comodo" },
        { label: "Mangiare sul posto", value: "Alcuni mercati hanno banchi di cibo di strada o uno spazio gastronomico; molti no" },
      ],
    },
    p("Questa guida spiega che ruolo hanno i mercati nella cucina italiana, che cosa si può comprare, come cambiano da una parte all'altra del Paese e come fare la spesa e mangiare al mercato. Non è una classifica: i mercati descritti più avanti sono esempi di tipi diversi, scelti perché aiutano a capire come funzionano."),
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Come cambiano i mercati in Italia",
        "Mercati da conoscere quando si viaggia",
        "Come fare la spesa al mercato",
        "Mangiare al mercato",
        "Le parole utili al mercato",
      ],
    },

    // ——— 2 ———
    h2("I diversi tipi di mercato"),
    p("La parola *mercato* copre molte cose, e nomi e regole cambiano da città a città: i mercati su area pubblica sono autorizzati e organizzati dai Comuni, nel quadro delle leggi regionali. Ecco i tipi che si incontrano più spesso."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Ogni giorno", title: "Mercati del fresco", text: "Frutta, verdura, carne, pesce, formaggi, pane e alimentari, aperti quasi tutte le mattine dal lunedì al sabato. Molte città ne hanno uno per quartiere: il *mercato rionale*." },
        { label: "Al chiuso", title: "Mercati coperti", text: "Edifici costruiti apposta, molti tra fine Ottocento e inizio Novecento, come i mercati in ferro e vetro di Firenze o il Mercato delle Erbe di Bologna. Alcuni sono stati ricostruiti o in parte trasformati." },
        { label: "All'aperto", title: "Mercati su strada", text: "Banchi in piazze e strade, dai mercati alimentari quotidiani come Campo de' Fiori a Roma ai mercati settimanali che uniscono cibo, abbigliamento e casalinghi." },
        { label: "Filiera corta", title: "Mercati dei produttori", text: "Agricoltori che vendono ciò che coltivano o producono, spesso una volta alla settimana. La rete Campagna Amica, legata a Coldiretti, ne organizza molti come *mercati a km 0*." },
        { label: "Sulla costa", title: "Mercati del pesce", text: "Dal mercato ittico di Rialto ai banchi del pesce di Napoli e della Sicilia. I formati cambiano: mercati dedicati oppure una sezione di un mercato generale." },
        { label: "Per mangiare", title: "Spazi gastronomici", text: "Spazi moderni con banchi e tavoli, spesso dentro o accanto a un mercato storico: il Mercato Centrale di Firenze o di Roma, per esempio. Pensati per mangiare, non per la spesa della settimana." },
      ],
    },
    image("florence-santa-croce-market-stalls", "Persone tra i banchi coperti da tendoni bianchi in piazza Santa Croce a Firenze, con la facciata in marmo della basilica sullo sfondo", true),

    // ——— 3 ———
    h2("Il mercato nella cucina italiana"),
    p("I mercati contano perché tanta cucina italiana parte da ingredienti freschi e di stagione comprati in piccole quantità. Al mercato si possono prendere due carciofi, una fetta di formaggio o un mazzetto di erbe, chiedere che cosa c'è di buono oggi e farsi dire come cucinarlo. Per molti clienti abituali — spesso anziani e persone che cucinano ogni giorno — il rapporto con un venditore di fiducia è parte del senso del mercato."),
    p("Sarebbe sbagliato immaginare che tutti gli italiani facciano la spesa al mercato ogni mattina. La maggior parte delle famiglie usa anche il supermercato, e in molte città i banchi sono diminuiti con il cambiare delle abitudini, degli orari di lavoro e degli affitti. A Venezia, un articolo del 2019 che riprendeva i dati dell'associazione Gruppo 25 contava a Rialto una ventina di banchi di frutta e verdura, contro gli 84 di circa venticinque anni prima, e appena sei pescivendoli. Altrove i mercati sono stati ricostruiti, riorganizzati o rilanciati con banchi gastronomici ed eventi."),
    p("Resta un carattere locale forte. Un mercato riflette la sua regione — i formaggi delle Alpi, gli agrumi della Sicilia, il pesce del mare più vicino — e il suo quartiere: Turismo Roma descrive quello dell'Esquilino come il mercato più multietnico della città, con prodotti cinesi, indiani, halal, rumeni, bengalesi e senegalesi. Ed è ancora un luogo dove i piccoli produttori possono vendere direttamente. Per il quadro generale, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    // ——— 4 ———
    h2("Che cosa si compra al mercato"),
    p("Non tutti i mercati vendono tutto, ma queste sono le categorie più comuni in un mercato generale del fresco."),
    table(
      ["Categoria", "Che cosa cercare", "Da sapere"],
      [
        ["Frutta e verdura", "Quello che è di stagione in zona, spesso con la regione d'origine in etichetta", "Il cuore di quasi ogni mercato; di solito il prezzo è al chilo"],
        ["Erbe e insalate", "Basilico, prezzemolo, erbe di campo, misticanza", "Spesso vendute a mazzetto"],
        ["Formaggi", "Freschi come mozzarella e ricotta; stagionati del territorio", "Si chiede un pezzo del peso che si vuole"],
        ["Salumi", "Prosciutto, salame, mortadella e specialità locali, affettati al momento", "Si comprano a etti"],
        ["Pane", "Pani locali, dal pane toscano senza sale ai pani di semola del Sud", "Spesso in un forno o un banco a parte"],
        ["Pasta fresca e secca", "Paste ripiene e all'uovo al Nord e al Centro; formati di grano duro al Sud", "La pasta fresca va tenuta in frigo"],
        ["Pesce", "Pescato locale, frutti di mare, baccalà", "Meglio di mattina presto; molti banchi chiudono nel primo pomeriggio"],
        ["Carne", "Banchi di macelleria, a volte pollame o trippa", "I consigli di cottura arrivano volentieri"],
        ["Olive, conserve e secchi", "Olive, capperi, legumi, funghi secchi, spezie, olio", "Più facili da portare a casa"],
        ["Piatti pronti", "Cibo di strada, panini, porchetta, fritti", "Solo in alcuni mercati: vedi più avanti"],
      ],
    ),
    p("Vino e liquori si trovano in alcuni mercati e negozi, secondo le normali regole di licenza. Chi vuole portare cibo all'estero deve controllare le regole del proprio Paese: carne fresca, latticini e piante sono spesso soggetti a limiti."),
    image("naples-olives-preserves-stall", "Ciotole di olive di vario tipo e vaschette blu di baccalà con cartellini dei prezzi scritti a mano su un banco di mercato a Napoli"),

    // ——— 5 ———
    h2("Il fresco e le stagioni"),
    p("La stagionalità è la cosa più facile da vedere al mercato e la più difficile da falsificare. Un banco di frutta e verdura a marzo non somiglia per niente a uno di settembre, e questa differenza spiega buona parte del cambiare della cucina regionale nel corso dell'anno."),
    p("L'Italia si allunga per più di mille chilometri dalle Alpi alla Sicilia: lo stesso ortaggio può comparire con settimane di distanza tra una regione e l'altra, e serre e importazioni confondono ancora di più il calendario. Più che un calendario nazionale preciso, conviene ragionare per grandi stagioni:"),
    ul(
      "**Fine inverno e primavera** — carciofi (il Carciofo Romanesco del Lazio è IGP), fave e piselli, erbe di campo e, in Veneto, asparagi bianchi come l'Asparago Bianco di Bassano DOP.",
      "**Estate** — pomodori, melanzane, zucchine, peperoni, meloni e frutta a nocciolo.",
      "**Autunno** — uva, fichi, castagne (la Castagna Cuneo è IGP), funghi tra cui i porcini (il Fungo di Borgotaro IGP viene dall'Appennino tra Emilia e Toscana), zucche e olio nuovo.",
      "**Inverno** — cicorie e radicchi (Radicchio Rosso di Treviso IGP), cavoli e verdure a foglia, e gli agrumi del Sud, tra cui le arance rosse di Sicilia (Arancia Rossa di Sicilia IGP).",
    ),
    p("Sui prodotti sfusi l'etichetta indica spesso la regione o il Paese d'origine, e dice molto: pomodori siciliani a maggio o mele del Trentino d'inverno fanno parte del normale flusso di un mercato nazionale. Se qualcosa è locale e di stagione, il venditore di solito è felice di dirlo."),

    // ——— 6 ———
    h2("Come cambiano i mercati in Italia"),
    p("Frutta, verdura e formaggi si trovano ovunque. Cambia quale formaggio, quale pane, quale pesce, e quanto si mangia sul posto."),
    h3("Nord Italia"),
    p("Al Nord si vedono più burro, riso e formaggi di montagna. In Piemonte formaggi come Toma Piemontese e Castelmagno (entrambi DOP), nocciole e, in autunno, castagne; in Lombardia riso, Bitto e altri formaggi alpini della Valtellina; in Veneto radicchio, asparagi bianchi e, a Venezia, il pesce della laguna e dell'Adriatico. Sono frequenti i mercati coperti e le grandi piazze organizzate: l'esempio più impressionante è Porta Palazzo a Torino."),
    h3("Centro Italia"),
    p("L'Emilia-Romagna è la patria della pasta fresca all'uovo, del Parmigiano Reggiano (DOP) e dei salumi come la Mortadella Bologna (IGP). La Toscana porta il pane senza sale, il Prosciutto Toscano (DOP), il Lardo di Colonnata (IGP) e l'olio; il Lazio ha carciofi, puntarelle e *porchetta*, IGP nella versione di Ariccia. Umbria e Marche aggiungono legumi, tartufi e salumi di montagna. Firenze, Bologna e Roma hanno mercati coperti storici oltre a quelli all'aperto."),
    h3("Sud Italia"),
    p("In Campania dominano la Mozzarella di Bufala Campana (DOP), il pomodoro e il pesce; la Puglia aggiunge la burrata (Burrata di Andria IGP), il pane di grano duro e le orecchiette; la Calabria la cipolla rossa (Cipolla Rossa di Tropea Calabria IGP), il peperoncino e la 'nduja. Al Sud i mercati sono più spesso su strada che coperti, e il confine tra spesa e cibo di strada è più sottile: fritti e piatti pronti si vendono accanto agli ingredienti crudi."),
    h3("Sicilia e Sardegna"),
    p("I mercati siciliani sono tra i più vivaci d'Italia per il cibo: agrumi, mandorle e pistacchi, pesce spada e tonno, e a Palermo cibo di strada come *arancine*, *panelle* e *sfincione*. In Sardegna formaggi di pecora come Pecorino Sardo e Fiore Sardo (entrambi DOP), pani come il *carasau* e il pesce delle sue lunghe coste. Per la Sicilia in dettaglio, vedi le [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),

    // ——— 7 ———
    h2("Mercati da conoscere quando si viaggia"),
    p("Questi esempi sono stati scelti per mostrare tipi diversi di mercato, non perché siano \"i migliori\". Li abbiamo verificati su fonti ufficiali o istituzionali a ottobre 2026; gli orari compaiono solo dove la fonte li indica, e possono cambiare."),
    h3("Roma: Campo de' Fiori e Testaccio"),
    image("rome-campo-de-fiori-market", "Un'Ape carica di cassette di carciofi tra i banchi di Campo de' Fiori a Roma, con una trattoria e una norcineria sullo sfondo"),
    p("**Campo de' Fiori** ospita il mercato dal 1869, quando vi fu trasferito da piazza Navona, e secondo Turismo Roma si svolge tradizionalmente tutte le mattine dal lunedì al sabato, con fiori, frutta, carne e pesce. Sta in una delle piazze più frequentate del centro storico, e lo si condivide con molti visitatori: è un'introduzione vivace più che la spesa settimanale di un quartiere."),
    p("**Testaccio** ha un altro carattere. Dal 2012 il mercato occupa un edificio coperto moderno tra via Galvani e via Franklin, di fronte all'ex Mattatoio, con banchi di frutta, pane, carne e pesce e — secondo il portale nazionale del turismo — chioschi di cucina romana di strada, dalla frittata di pasta ai panini, al filetto di baccalà; il momento più animato è l'ora di pranzo. In alcuni punti, sotto i piedi, si vedono antiche mura."),
    p("Roma ha molti altri *mercati rionali*, dal grande Trionfale vicino al Vaticano all'Esquilino multietnico e al mercato contadino del fine settimana alla Garbatella, oltre al Mercato Centrale della stazione Termini, uno spazio gastronomico. Per i grandi primi romani, vedi [La pasta romana](/it/cibo/pasta-romana); per organizzare la visita, [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),
    h3("Firenze: Mercato Centrale e Sant'Ambrogio"),
    image("florence-mercato-centrale-counter", "Clienti a un banco del Mercato Centrale di Firenze sotto prosciutti, salami e formaggi appesi"),
    p("Firenze mostra bene come un mercato storico e uno spazio gastronomico possano convivere nello stesso edificio. Il **Mercato Centrale** di San Lorenzo, progettato da Giuseppe Mengoni, fu inaugurato nel 1874. Secondo il sito turistico del Comune, al piano terra ci sono ancora i banchi di frutta, verdura, carne, pesce e pane, aperti di giorno e chiusi la domenica, mentre il primo piano è uno spazio gastronomico con banchi e ristoranti aperto tutti i giorni fino a tarda sera. Le bancarelle nelle strade intorno sono per lo più non alimentari: abbigliamento, pelletteria e souvenir."),
    p("**Sant'Ambrogio**, vicino a Santa Croce, fu inaugurato nel 1873, circa un anno prima. È un mercato coperto più piccolo, con botteghe alimentari all'interno e banchi all'esterno con fiori, vestiti e casalinghi, aperto la mattina dal lunedì al sabato. È il posto dove vedere al lavoro un mercato fiorentino di tutti i giorni."),
    image("florence-sant-ambrogio-fresh-pasta", "Pasta fresca ripiena — cappellacci, ravioli e sfoglie per lasagne — con cartellini dei prezzi al chilo scritti a mano al mercato di Sant'Ambrogio a Firenze"),
    p("Per la città, vedi [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),
    h3("Bologna: il Quadrilatero e il Mercato delle Erbe"),
    p("A Bologna la cultura del cibo è distribuita tra botteghe e strade più che concentrata in un solo mercato. Il **Quadrilatero**, la trama di vicoli a due passi da piazza Maggiore, è un'area di mercato di origine medievale, e nomi come via Pescherie Vecchie ricordano ancora i mestieri di un tempo. Bologna Welcome descrive banchi e negozi aperti ogni giorno con pasta fresca, pesce, carne, frutta e verdura, accanto a botteghe storiche e osterie."),
    p("Poco lontano, in via Ugo Bassi, il **Mercato delle Erbe** è, nelle parole di Bologna Welcome, il più grande mercato coperto del centro storico: frutta, verdura, carne, formaggi, pesce e vino. L'edificio risale al 1910, fu ricostruito dopo i danni della guerra e riaperto nel 1949, e dal 2014 una parte è dedicata a locali dove mangiare."),
    image("bologna-delicatessen-counter", "Il bancone di una gastronomia di Bologna con scaffali di formaggi, salumi e vasetti, un'affettatrice e vassoi di piatti pronti"),
    p("Nessun mercato da solo riassume la cucina bolognese: molto si compra nelle botteghe specializzate, i *pastifici* per la pasta fresca e le *salumerie* per salumi e formaggi. Vedi [Bologna in due giorni](/it/citta/bologna-in-due-giorni)."),
    h3("Napoli: Porta Nolana e la Pignasecca"),
    image("naples-seafood-market-stall", "Pesce, gamberi, cozze e vaschette di frutti di mare pronti sul ghiaccio in cassette bianche in un mercato di strada a Napoli, con i cartellini dei prezzi"),
    p("I mercati di Napoli sono mercati di strada, dentro la vita dei quartieri. **Porta Nolana**, che prende il nome da una delle antiche porte della città vicino alla stazione centrale, è nota soprattutto per il pesce e i frutti di mare, ma vende anche verdura, spezie e carne; l'ufficio turistico del Comune ricorda che il giorno di massimo affollamento è tra il 23 e il 24 dicembre, quando i napoletani comprano il pesce per la cena della Vigilia."),
    p("La **Pignasecca**, al margine dei Quartieri Spagnoli a due passi da via Toledo, è descritta dal Comune come il mercato più antico di Napoli. La sua strada mescola pesce, frutta e verdura, formaggi, pane e conserve con casalinghi e cibo da mangiare subito: pizza fritta, arancini, crocchè e cuoppi di frittura di mare."),
    p("A Napoli il cibo è uno dei motivi principali del viaggio: vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta) e [La pizza napoletana](/it/cibo/pizza-napoletana)."),
    h3("Palermo: Ballarò e il Capo"),
    image("palermo-fish-stall", "Pescivendoli al lavoro a un banco del pesce coperto da tendoni rossi in un mercato di strada a Palermo"),
    p("I mercati storici di Palermo sono lunghe strade di bancarelle nei quartieri antichi. L'Università di Palermo indica **Ballarò**, che attraversa l'Albergheria tra corso Tukory e piazza Casa Professa, e il **Capo**, alle spalle del Teatro Massimo, tra i mercati più grandi e frequentati della città. Entrambi vendono frutta e verdura, pesce, carne e alimentari, ed entrambi sono luoghi per assaggiare il cibo di strada. La **Vucciria**, vicino a piazza San Domenico, di giorno è molto ridotta ed è oggi più nota per la sera."),
    p("Le fonti non concordano su quale sia il mercato più antico di Palermo: un buon motivo per prendere queste affermazioni con cautela. Per i consigli pratici, vedi [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta) e le [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),
    h3("Venezia: Rialto"),
    image("venice-fruit-vegetable-stall", "Un banco di frutta e verdura in una calle veneziana, coperto a metà da un telo, con cassette impilate sul selciato"),
    p("**Rialto** è sede del mercato di Venezia da quasi mille anni, secondo il sito turistico ufficiale della città. Oggi ha due parti: il mercato ortofrutticolo, aperto dal lunedì al sabato, e il mercato ittico, in un edificio neogotico dei primi del Novecento sul Canal Grande, aperto la mattina dal martedì al sabato e chiuso domenica e lunedì. Conviene andare presto, soprattutto per il pesce."),
    p("Rialto racconta anche come cambiano i mercati: con il calo dei residenti sono diminuiti anche i banchi. La città elenca altri mercati di quartiere, come quelli di via Garibaldi a Castello e di Rio Terà San Leonardo a Cannaregio. Vedi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),
    h3("Torino: Porta Palazzo"),
    p("**Porta Palazzo**, in piazza della Repubblica, è su un'altra scala. Turismo Torino lo definisce il più grande mercato all'aperto d'Europa, e il Comune il mercato più importante della città. I mercati furono istituiti ufficialmente nel 1835; le tettoie del pesce e degli alimentari seguirono nel 1836 e quella dell'Orologio nel 1916, e c'è un padiglione dedicato agli agricoltori che vendono i propri prodotti. Il Mercato Centrale occupa un edificio moderno sulla piazza. Il Comune descrive Porta Palazzo come un crocevia di origini e lingue, dai contadini delle colline intorno ai commercianti arrivati da tutto il mondo."),
    p("Alla fine del 2025 la piazza era al centro di un ampio programma di riqualificazione, quindi alcune parti possono essere interessate da lavori. Per la cucina piemontese e il resto della città, vedi [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    note("Il mercato coperto di **San Benedetto** a Cagliari, a lungo uno dei principali mercati alimentari della Sardegna, ha chiuso l'edificio storico per la ricostruzione nel marzo 2025 e si è trasferito in una struttura provvisoria in piazza Nazzari; il cronoprogramma del Comune prevedeva la fine dei lavori entro il 2027. Verifica la situazione prima di andare.", "Un mercato in trasferta"),

    // ——— 8 ———
    h2("Come fare la spesa al mercato"),
    p("È quasi tutto buon senso, ma qualche abitudine aiuta."),
    ul(
      "**Saluta il venditore.** Un *buongiorno* apre quasi sempre l'acquisto.",
      "**Lascia fare a lui.** In molti banchi è il venditore a scegliere e pesare: infilare le mani tra i pomodori per sceglierli da sé spesso non è gradito. Alcuni banchi lo permettono — in quel caso lo dicono, o porgono un sacchetto. Nel dubbio, chiedi: *Posso scegliere io?*",
      "**Chiedi una quantità.** Frutta e verdura si vendono di solito al chilo, salumi e formaggi all'*etto*, cioè 100 grammi. Si può anche chiedere un numero — *tre pomodori* — o \"quanto basta per due persone\".",
      "**Guarda il prezzo.** La legge impone di esporre in modo chiaro il prezzo della merce in vendita, anche sui banchi del mercato. Lo sfuso è di solito prezzato al chilo, quindi il conto dipende dal peso.",
      "**Non aspettarti di contrattare.** Sui banchi alimentari i prezzi sono fissi; si tratta poco, anche se al cliente abituale si arrotonda o si regala un limone. Le bancarelle non alimentari dei mercati di strada sono un altro mondo.",
      "**Chiedi un consiglio.** *Cosa mi consiglia?* porta spesso alla cosa migliore del banco, e magari a una ricetta.",
      "**Assaggia solo se offerto o dopo aver chiesto.** Qualche banco di formaggi e salumi fa assaggiare; frutta e verdura non si assaggiano.",
      "**Il pagamento.** Dal 2022 la legge obbliga i commercianti, ambulanti compresi, ad accettare i pagamenti con carta. Per gli acquisti piccoli e veloci si usa spesso il contante, e avere monete e banconote di piccolo taglio rende tutto più semplice.",
      "**Porta una borsa.** Molti clienti abituali hanno la propria; i sacchetti, dove ci sono, di solito si pagano.",
    ),
    tip("Il mercato non è sempre più conveniente del supermercato: la frutta e la verdura locali di stagione possono essere ottime come prezzo, mentre formaggi particolari o pesce possono costare di più. Confronta il prezzo al chilo e compra per qualità e freschezza, non per l'idea di un affare.", "Il mercato costa meno?"),

    // ——— 9 ———
    h2("Il galateo del mercato"),
    p("Il mercato è prima di tutto un luogo di lavoro. Qualche attenzione fa una grande differenza per chi ci lavora."),
    ul(
      "**Non toccare il cibo senza bisogno**, soprattutto frutta, pane e tutto ciò che non è incartato.",
      "**Rispetta il turno.** Ai banchi affollati la fila non è sempre ordinata, ma tutti sanno chi è arrivato prima; il venditore chiede spesso *Chi è il prossimo?*",
      "**Segui le indicazioni del venditore** su scelta, assaggi e pagamento.",
      "**Fotografa con garbo.** I banchi sono belli, ma venditori e clienti stanno lavorando o facendo la spesa. Chiedi prima di fotografare qualcuno da vicino e non bloccare il banco o il passaggio.",
      "**Compra qualcosa se hai chiacchierato a lungo o assaggiato.** Non è obbligatorio, ma è apprezzato.",
      "**Non dare per scontato l'inglese.** Molti venditori lo parlano un po', molti no; qualche parola d'italiano e indicare con il dito funzionano ovunque.",
      "**Rispetta il ritmo.** Le prime ore sono dei clienti abituali; se vuoi soprattutto guardare, a metà mattina è più facile per tutti.",
    ),

    // ——— 10 ———
    h2("Mangiare al mercato"),
    p("È qui che le aspettative dei viaggiatori sbagliano più spesso. Alcuni mercati sono ottimi posti per mangiare; altri servono quasi solo per fare la spesa."),
    {
      type: "compare",
      title: "Mercato per la spesa o mercato per mangiare?",
      columns: [
        {
          title: "Mercato per la spesa",
          items: [
            "Soprattutto ingredienti da portare a casa",
            "Pieno la mattina, chiude nel primo pomeriggio",
            "Pochi posti a sedere, o nessuno",
            "Perfetto per un picnic: pane, formaggio, salumi, frutta",
            "Esempi: i banchi alimentari di Sant'Ambrogio, il mercato ittico di Rialto",
          ],
        },
        {
          title: "Mercato per mangiare o spazio gastronomico",
          items: [
            "Banchi che cucinano al momento, spesso con tavoli in comune",
            "Aperti a pranzo e spesso a cena",
            "Specialità locali e cucine di altre zone",
            "Comodo per un pasto veloce e vario",
            "Esempi: il primo piano del Mercato Centrale di Firenze, i Mercati Centrali di Roma e Torino",
          ],
        },
      ],
    },
    p("A metà strada ci sono i mercati con banchi di cibo di strada tra frutta e verdura, come i chioschi di Testaccio, le strade dei mercati di Palermo e la Pignasecca a Napoli. Un'idea semplice: fare la spesa per un picnic in un mercato del fresco e mangiare in uno spazio gastronomico o in una trattoria vicina."),
    h3("Che cosa mangiare al mercato, regione per regione"),
    p("Sono associazioni regionali, non un menu che ogni mercato propone."),
    ul(
      "**Bologna ed Emilia-Romagna** — pasta fresca ripiena da cuocere a casa, mortadella e Parmigiano Reggiano.",
      "**Roma e Lazio** — cucina romana di strada come i panini con la trippa o con il bollito e il baccalà fritto ai chioschi di Testaccio; la porchetta dei Castelli; carciofi di stagione da portare a casa.",
      "**Firenze e Toscana** — salumi e formaggi con il pane toscano; ai banchi gastronomici, specialità fiorentine come il panino con il lampredotto.",
      "**Napoli** — pizza fritta, arancini e cuoppi di frittura di mare; mozzarella di bufala mangiata freschissima. Vedi [La pizza napoletana](/it/cibo/pizza-napoletana).",
      "**Palermo** — arancine, panelle e sfincione. Di più nelle [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana).",
      "**Mercati di mare** — pesce e frutti di mare, a volte crudi o fritti ai banchi vicini; chiedi come sono preparati.",
      "**Ovunque** — frutta di stagione mangiata sul posto e dolci regionali dei forni vicini. Vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani), e chiudi con un caffè al bar: [Il caffè italiano](/it/cibo/caffe-italiano).",
    ),

    // ——— 11 ———
    h2("Mercato o supermercato?"),
    table(
      ["Mercato", "Supermercato"],
      [
        ["Prodotti locali e di stagione spesso più in evidenza", "Assortimento più ampio e standardizzato"],
        ["Ti serve un venditore a cui fare domande", "Self-service"],
        ["Specialità regionali e piccoli produttori", "Ampia scelta di prodotti confezionati"],
        ["Soprattutto la mattina; i giorni cambiano da mercato a mercato", "Orari più lunghi e prevedibili"],
        ["Ogni mercato è diverso", "Più o meno uguale da un punto vendita all'altro"],
        ["Prezzi variabili: alcune cose convengono, altre no", "Prezzi facili da confrontare"],
      ],
    ),
    p("Il supermercato serve per acqua, snack e prodotti di base, e molti italiani usano entrambi. È al mercato che stagione e territorio si vedono con più chiarezza."),

    // ——— 12 ———
    h2("Mercati turistici e mercati di quartiere"),
    p("Alcuni mercati sono cambiati molto negli ultimi vent'anni. Nei centri storici, i mercati storici uniscono spesso banchi del fresco, spazi gastronomici, prodotti alimentari da regalo e bancarelle pensate per i visitatori; altri servono ancora soprattutto il loro quartiere. Nessuno dei due è \"finto\": uno spazio gastronomico può essere un buon posto per pranzare, e un mercato pieno di turisti può avere ottimi venditori."),
    p("Conta sapere che cosa si sta visitando. Segni di un mercato usato per la spesa quotidiana: ingredienti crudi più che confezioni regalo, prezzi al chilo, residenti con il carrello, un'ora di punta mattutina che si spegne nel primo pomeriggio. Segni di un mercato orientato ai visitatori: prodotti sottovuoto da viaggio, prezzi a pezzo, molti banchi di cibo pronto e orari lunghi. Una buona visita può includere entrambi."),
    tip("Per trovare un mercato, parti dal sito turistico o istituzionale della città, che di solito elenca i mercati rionali con giorni e orari: Venezia, Roma e Firenze lo fanno. Per i mercati dei produttori, il sito di Campagna Amica ha una ricerca dei *mercati a km 0*. Le guide di quartiere e chi ti ospita sono spesso la fonte migliore.", "Trovare un mercato"),

    // ——— 13 ———
    h2("Sicurezza alimentare ed esigenze alimentari"),
    p("Il cibo del mercato è sicuro quanto la cura con cui è trattato, come ovunque. Qualche abitudine di buon senso aiuta."),
    ul(
      "**Scegli banchi con molto giro**, soprattutto per pesce e piatti pronti.",
      "**Osserva come il cibo è maneggiato e conservato**: pesce e formaggi freschi vanno tenuti sul ghiaccio o in frigo.",
      "**Tieni al fresco ciò che è deperibile.** Mozzarella, ricotta, pesce e pasta fresca soffrono in una borsa al caldo: comprali per ultimi, o per il giorno stesso.",
      "**Lava frutta e verdura** prima di mangiarle, a meno che non ti dicano che sono già lavate.",
      "**Segui i consigli del venditore** su conservazione e cottura.",
    ),
    p("Per chi ha esigenze alimentari, il mercato è insieme facile e insidioso: gli ingredienti crudi sono semplici da riconoscere, i piatti pronti possono contenere ciò che non ti aspetti."),
    ul(
      "**Vegetariani** — frutta, verdura, formaggi e molti fritti vanno bene, ma chiedi di brodi, acciughe e strutto, presente in alcuni pani e dolci.",
      "**Vegani** — frutta, verdura, frutta secca e alcuni pani sono semplici; nei piatti pronti controlla formaggio, uova e strutto.",
      "**Senza glutine** — frutta, verdura, formaggi e salumi sono naturalmente senza glutine, ma i fritti e la pasta di solito no, e ai banchi affollati la contaminazione è difficile da evitare. Si dice *celiaco/a*.",
      "**Allergia alla frutta a guscio** — è frequente nei dolci del Sud, nel pesto e in alcuni salumi, come la mortadella al pistacchio; chiedi, sapendo che nessun banco può garantire un ambiente privo di tracce.",
      "**Intolleranza al lattosio** — i formaggi a lunga stagionatura come il Parmigiano Reggiano ne contengono pochissimo; i freschi no.",
    ),
    p("Nessun banco può promettere di gestire un'allergia grave. In quel caso conviene portare con sé una nota scritta e, nel dubbio, comprare prodotti confezionati con l'elenco degli ingredienti."),

    // ——— 14 ———
    h2("Le parole utili al mercato"),
    p("Anche per chi parla italiano, il mercato ha un lessico suo, che cambia un po' da città a città."),
    table(
      ["Parola", "Significato"],
      [
        ["Etto", "100 grammi: la misura di salumi e formaggi"],
        ["Sfuso", "Venduto a peso, non confezionato"],
        ["Al chilo / a pezzo", "Prezzo per chilogrammo o per singolo pezzo"],
        ["Mercato rionale", "Il mercato di quartiere, spesso quotidiano"],
        ["Mercato coperto", "Mercato in un edificio, con box o banchi fissi"],
        ["Ambulante", "Commerciante su area pubblica, con banco mobile"],
        ["Km 0", "Prodotto venduto vicino al luogo di produzione"],
        ["Mercato contadino", "Mercato in cui vendono direttamente gli agricoltori"],
        ["Di stagione", "Prodotto nel suo periodo naturale di raccolta"],
        ["Banco del pesce / pescheria", "Il reparto o il mercato del pesce"],
        ["Strutto", "Grasso di maiale, presente in alcuni pani e dolci"],
      ],
    ),
    p("Con chi viaggia con voi dall'estero, poche frasi bastano: *Quanto costa?*, *Vorrei…*, *Un etto, per favore*, *Posso assaggiare?*, *Basta così, grazie*. E un consiglio vale per tutti: *È fresco?* è una domanda legittima, ma detta a un venditore può suonare come un dubbio sulla sua merce. *Da dove viene?* o *Cosa mi consiglia oggi?* sono modi più cordiali per trovare il meglio della giornata."),
    p("Il mercato è uno dei modi migliori per capire la cucina italiana: non come una cartolina, ma come il luogo dove una città decide che cosa cucinare stasera. Andate di mattina, fate domande, comprate poco, e in un'ora vedrete di una regione più di quanto raccontino molti pranzi al ristorante. Per il resto del viaggio, vedi la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia); per il vino del picnic, [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
  ],

  faqs: [
    { question: "Vale la pena visitare i mercati alimentari italiani?", answer: "Sì. Mostrano che cosa è di stagione e che cosa una regione coltiva, pesca e cucina, e alcuni hanno anche ottimo cibo di strada. Meglio la mattina, quando i mercati del fresco sono più animati." },
    { question: "Che cosa si compra nei mercati alimentari italiani?", answer: "Soprattutto frutta e verdura, poi formaggi, salumi, pane, pesce, carne, olive e conserve, e in alcuni mercati pasta fresca e piatti pronti. L'offerta dipende dal mercato e dalla regione." },
    { question: "Il mercato costa meno del supermercato?", answer: "Non sempre. La frutta e la verdura locali di stagione possono convenire molto, mentre formaggi particolari o pesce possono costare di più. Confronta il prezzo al chilo, che deve essere esposto." },
    { question: "Si può mangiare nei mercati alimentari?", answer: "In alcuni. Spazi gastronomici come il primo piano del Mercato Centrale di Firenze, e mercati con banchi di cibo di strada come Testaccio a Roma o i mercati di Palermo, sono adatti per mangiare. Molti altri servono soprattutto per la spesa." },
    { question: "Al mercato si trova la pasta fresca?", answer: "Spesso sì, soprattutto al Nord e al Centro: nelle strade e nelle botteghe del mercato di Bologna e a Sant'Ambrogio a Firenze si vendono pasta fresca e ripiena. Va tenuta in frigo, meglio comprarla per il giorno stesso." },
    { question: "Al mercato si contratta?", answer: "In genere no. I prezzi alimentari sono fissi ed esposti; al cliente abituale si può arrotondare o aggiungere qualcosa, ma contrattare non è nell'uso." },
    { question: "Che cosa non fare al mercato?", answer: "Non toccare la merce se il venditore non lo propone, non assaggiare senza chiedere, non bloccare i banchi per fotografare e non fotografare le persone da vicino senza chiedere." },
    { question: "Quali città italiane sono famose per i mercati?", answer: "Palermo, Napoli, Roma, Firenze, Bologna, Venezia e Torino hanno mercati che vale la pena conoscere, da Ballarò e il Capo a Palermo a Porta Palazzo a Torino. E quasi ogni città ha i suoi mercati settimanali o giornalieri." },
    { question: "Che differenza c'è tra un mercato e uno spazio gastronomico?", answer: "Il mercato vende ingredienti, soprattutto la mattina, da portare a casa e cucinare. Lo spazio gastronomico ha banchi che cucinano da mangiare sul posto, spesso con tavoli e orari lunghi. Alcuni mercati storici oggi hanno entrambi." },
    { question: "I mercati sono aperti tutti i giorni?", answer: "No. La maggior parte dei mercati del fresco è aperta dal lunedì al sabato, soprattutto la mattina; alcuni chiudono il lunedì, come il mercato ittico di Rialto, e molti mercati minori sono settimanali. Conviene controllare le informazioni ufficiali della città." },
    { question: "Al mercato si trova cibo vegetariano?", answer: "Sì: frutta, verdura, formaggi, pane e molti spuntini sono vegetariani. Per i piatti pronti chiedi, perché possono contenere brodo, acciughe o strutto." },
    { question: "Al mercato si trova cibo senza glutine?", answer: "Frutta, verdura, formaggi e salumi sono naturalmente senza glutine, ma fritti e pasta di solito no, e ai banchi affollati la contaminazione non si può escludere. Chiedi: \"È senza glutine?\"" },
    { question: "Al mercato si può pagare con la carta?", answer: "I commercianti sono obbligati per legge ad accettare i pagamenti elettronici, ma i piccoli acquisti si pagano spesso in contanti: monete e banconote piccole restano utili." },
    { question: "Che cosa vuol dire \"un etto\" e \"sfuso\" al mercato?", answer: "Un etto sono 100 grammi, la misura abituale per salumi e formaggi. Sfuso significa venduto a peso, non confezionato: il prezzo esposto è di solito al chilo." },
    { question: "Come si trova un buon mercato di quartiere?", answer: "Parti dal sito turistico o istituzionale della città, che elenca i mercati rionali con i giorni; chiedi a chi ti ospita; e cerca i segni della spesa quotidiana: prezzi al chilo, ingredienti crudi e un'ora di punta mattutina." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Turismo Roma — Campo de' Fiori", url: "https://turismoroma.it/it/node/1514", note: "mercato dal 1869; mattine dal lunedì al sabato" },
    { label: "Turismo Roma — Mercati rionali", url: "https://turismoroma.it/en/node/36086", note: "i mercati di quartiere di Roma" },
    { label: "italia.it — Mercato di Testaccio", url: "https://www.italia.it/it/lazio/roma/mercato-di-testaccio", note: "la sede del 2012 e il cibo di strada" },
    { label: "Feel Florence — Mercato Centrale (San Lorenzo)", url: "https://feelflorence.it/en/node/12042", note: "edificio del 1874, piani e orari; in inglese" },
    { label: "Feel Florence — Mercato di Sant'Ambrogio", url: "https://feelflorence.it/en/node/12043", note: "1873; banchi e orari; in inglese" },
    { label: "Bologna Welcome — Mercato delle Erbe", url: "https://www.bolognawelcome.com/it/luoghi/luoghi-di-shopping/mercato-delle-erbe", note: "storia e uso attuale" },
    { label: "Bologna Welcome — Il mercato antico del Quadrilatero", url: "https://www.bolognawelcome.com/en/places/shopping-places/the-old-market-in-the-quadrilatero", note: "le strade del mercato; in inglese" },
    { label: "Comune di Napoli (DMO) — Il mercato di Porta Nolana", url: "https://dmo-napoli.inera.it/en/article/porta-nolana-market-the-kingdom-of-fresh-fish-and-popular-rituals/", note: "mercato del pesce; in inglese" },
    { label: "Comune di Napoli (DMO) — La Pignasecca", url: "https://dmo-napoli.inera.it/en/article/la-pignasecca-naples-oldest-market/", note: "mercato di strada; in inglese" },
    { label: "Università di Palermo — I mercati di Palermo", url: "https://www.unipa.it/I-mercati-di-Palermo/", note: "Ballarò, Capo e Vucciria" },
    { label: "Venezia Unica (Città di Venezia) — Mercati", url: "https://www.veneziaunica.it/it/cosa-fare-a-venezia/il-territorio-di-venezia/mercati", note: "Rialto e mercati di quartiere, giorni e orari" },
    { label: "Comune di Torino — Porta Palazzo. Il filo della memoria (dicembre 2025)", url: "https://compravicino.comune.torino.it/wp-content/uploads/2025/12/Porta-Palazzo-The-thread-of-memory-ENG.pdf", note: "storia e riqualificazione; in inglese" },
    { label: "Turismo Torino — Porta Palazzo", url: "https://turismotorino.org/en/territory/torino-metropoli/torino/instagrammable-itineraries-torino-and-sourroundigs/discover-torinos", note: "descrizione del mercato; in inglese" },
    { label: "L'Unione Sarda — Chiude il mercato di San Benedetto (1 marzo 2025)", url: "https://www.unionesarda.it/news-sardegna/cagliari/lacrime-rabbia-qualche-sorriso-chiude-mercato-san-benedetto-pxh8abkq", note: "trasferimento provvisorio" },
    { label: "Fondazione Campagna Amica", url: "https://www.campagnamica.it/", note: "mercati dei produttori" },
    { label: "Gambero Rosso — Il mercato di Rialto (4 febbraio 2019)", url: "https://www.gamberorosso.it/notizie/e-venezia-scommette-sulla-rinascita-del-mercato-di-rialto-nel-futuro-museo-e-polo-gastronomico", note: "dati sui banchi del Gruppo 25" },
    { label: "D.Lgs. 31 marzo 1998, n. 114 — art. 14 (pubblicità dei prezzi)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-03-31;114", note: "prezzi esposti anche sui banchi" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "DOP e IGP citate" },
  ],
};
