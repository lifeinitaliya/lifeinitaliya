import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Approfondimento: "Il caffè italiano" — edizione italiana, scritta in modo
// autonomo rispetto a quella inglese (che resta su /food/italian-coffee-culture).
// È l'articolo di riferimento sul caffè; cucina italiana, dolci, Sicilia e
// guide di città hanno articoli propri e vengono linkati. Fonti verificate a
// settembre 2026: Università di Padova su Prospero Alpini; Caffè Florian
// sull'apertura del 1720; Turismo Roma sull'Antico Caffè Greco (e cronache
// sulla chiusura del 2025); Caffè Al Bicerin e Turismo Torino sui caffè
// storici torinesi; Registro delle imprese storiche di Unioncamere e Gran Caffè
// Gambrinus sul 1860; Treccani sul caffè sospeso; Comune di Trieste e
// PromoTurismoFVG su caffè storici e lessico triestino; MUMAC su Moriondo,
// Bezzera e Pavoni; Gaggia sui brevetti del 1938 e del 1947; Bialetti sulla
// Moka Express; INEI sulla definizione di espresso. Niente prezzi; le leggende
// restano leggende.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/food/italian-coffee-culture";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const caffeItaliano: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cosa intendiamo per caffè italiano?"),
    answer("**Più che una bevanda, il caffè italiano è un modo di prenderlo.** Al centro c'è il **bar**, dove quasi sempre si beve un **espresso**, spesso in piedi al banco e in un paio di minuti. Intorno ruotano le bevande con il latte della colazione, la **moka** sul fornello di casa e una serie di abitudini locali che cambiano da Napoli a Trieste. Al banco \"un caffè\" è un espresso: tutto il resto va chiamato per nome."),
    p("Quello che lo rende un fatto culturale, e non solo gastronomico, è la ripetizione. Il caffè apre la giornata di lavoro, chiude il pranzo, accompagna una pausa con un collega o un saluto al vicino di casa. Costa poco, dura poco e per molti si ripete più volte al giorno: per questo una tazzina può portare con sé tanti significati."),
    p("Qui parliamo di bevande, bar, storia e tradizioni locali. Per il quadro generale c'è [Tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana); per ciò che si accompagna al caffè, [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),
    {
      type: "facts",
      title: "Il caffè italiano in breve",
      rows: [
        { label: "\"Un caffè\"", value: "Al bar, quasi sempre un espresso" },
        { label: "Dove", value: "Il bar: al banco o al tavolo" },
        { label: "Con il latte", value: "Soprattutto a colazione, per abitudine e non per regola" },
        { label: "A casa", value: "Spesso la moka, sempre più spesso le capsule" },
        { label: "Parole locali", value: "Trieste, Napoli e Torino hanno bevande e termini propri" },
        { label: "Novità", value: "Caffetterie specialty accanto ai bar di sempre" },
      ],
    },

    // ——— 2 ———
    h2("Il bar all'italiana"),
    p("Il bar italiano non è soprattutto un locale per alcolici. Apre presto per colazione, serve brioche e tramezzini durante il giorno e l'aperitivo la sera; molti vendono anche biglietti dell'autobus o giocate del lotto. Il bar di quartiere è un pezzo della vita quotidiana, e i clienti abituali vengono spesso chiamati per nome."),
    {
      type: "image",
      src: `${IMG}/radicofani-bar.webp`,
      alt: "Un barista in camicia azzurra al lavoro dietro il bancone in legno di un bar di paese, con bottiglie sugli scaffali e un pannello trasparente sul banco",
      caption: "Dietro il banco di un bar a Radicofani, nella Toscana meridionale.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    h3("Al banco"),
    p("Il banco è il posto del caffè per eccellenza: si ordina, il barista lo prepara davanti a noi, si beve e si va. Nessuno si aspetta che ci si trattenga, e finirlo in tre sorsi è normalissimo."),
    h3("Al tavolo"),
    p("Molti bar hanno tavolini dentro o fuori. Sedersi di solito vuol dire servizio al tavolo, e spesso un prezzo più alto rispetto al banco, a volte molto più alto nelle piazze celebri. I prezzi devono essere esposti nel locale: nel dubbio conviene controllare il listino prima di sedersi. In molti bar di paese sedersi non costa nulla in più."),
    h3("Pagare prima o dopo"),
    p("Dipende dal bar. Nei locali affollati delle città spesso si paga prima alla cassa e si porta lo scontrino al banco; in quelli più tranquilli si ordina e si paga uscendo. Se non è chiaro, basta guardare chi ci precede o chiedere al barista."),
    tip("In alcune città è abitudine appoggiare una moneta sullo scontrino quando lo si consegna al barista. Non è obbligatorio.", "Nei bar affollati"),

    // ——— 3 ———
    h2("Come si chiamano: le bevande del bar"),
    p("I nomi sono semplici, ma non sempre corrispondono a quelli usati all'estero, e cambiano da regione a regione e perfino da bar a bar. Questa è una guida orientativa, non un regolamento."),
    table(
      ["Ordinazione", "Che cosa arriva", "Quando", "Note"],
      [
        ["Caffè / espresso", "Tazzina di caffè corto e intenso", "A ogni ora", "Il \"caffè\" per antonomasia"],
        ["Caffè doppio", "Doppia dose di espresso", "A ogni ora", "Meno comune che all'estero"],
        ["Caffè ristretto", "Espresso più corto e concentrato", "A ogni ora", "Detto anche \"corto\""],
        ["Caffè lungo", "Espresso con più acqua", "A ogni ora", "Resta una tazzina, non è un caffè filtro"],
        ["Caffè macchiato", "Espresso con un po' di latte o schiuma", "A ogni ora", "Spesso il barista chiede: caldo o freddo?"],
        ["Cappuccino", "Espresso con latte montato e schiuma, in tazza grande", "Soprattutto al mattino", "Con il cornetto, di solito"],
        ["Caffellatte", "Latte caldo con caffè, in bicchiere o tazza", "Al mattino", "All'estero lo chiamano \"latte\""],
        ["Latte macchiato", "Latte caldo con un goccio di espresso, in bicchiere alto", "Al mattino", "Più latte che caffè"],
        ["Marocchino", "Espresso, cacao e schiuma di latte in bicchierino", "A ogni ora", "Ricetta variabile; legato al Piemonte"],
        ["Caffè americano", "Espresso allungato con acqua calda", "A ogni ora", "Il più vicino a un caffè lungo all'americana"],
        ["Decaffeinato / deca", "Espresso decaffeinato", "Spesso dopo i pasti", "Si trova ovunque"],
        ["Caffè shakerato", "Espresso agitato con ghiaccio e zucchero", "D'estate", "Servito in coppa"],
        ["Caffè corretto", "Espresso con un goccio di liquore", "Dopo i pasti", "Grappa, sambuca o altro"],
        ["Caffè d'orzo", "Bevanda di orzo tostato, senza caffeina", "A ogni ora", "Alternativa di lunga tradizione"],
      ],
      "Nomi e modi di servire cambiano da regione a regione e da bar a bar.",
    ),

    // ——— 4 ———
    h2("L'espresso"),
    h3("Perché \"un caffè\" è un espresso"),
    p("Al bar il caffè è l'espresso: acqua calda spinta a pressione attraverso caffè macinato fine, per ottenere una piccola dose concentrata. Tutto il resto si costruisce a partire da lì. Per questo chi chiede \"un caffè\" riceve una tazzina, e la tazza grande di caffè filtro è un'idea estranea al bar tradizionale."),
    h3("Come si fa"),
    p("L'Istituto Nazionale Espresso Italiano (INEI), ente che certifica l'espresso, fissa come riferimento circa 7 grammi di caffè macinato per circa 25 millilitri in tazza, con uno strato di crema in superficie. Nella pratica le cose variano con la miscela, la macchina e la mano del barista. La crema è ciò che ci si aspetta di vedere, ma da sola non basta a dire che un caffè sia buono."),
    h3("Perché si beve in fretta"),
    p("L'espresso è poco, è caldo e dà il meglio nel primo minuto. Aggiungete il banco — niente sedia, niente servizio, qualcuno in fila dietro — e diventa una bevanda di pochi sorsi. C'è chi lo zucchera e chi no; a Napoli, in particolare, spesso arriva con un bicchiere d'acqua."),
    {
      type: "image",
      src: `${IMG}/rome-espresso-macchiato.webp`,
      alt: "Un caffè con un velo di schiuma in una tazzina blu decorata, su piattino bianco con cucchiaino, sul tavolo in legno di un bar di Roma",
      caption: "Un caffè a Roma: l'unità di misura della cultura del caffè.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 5 ———
    h2("Cappuccino e colazione"),
    p("Il cappuccino è la bevanda della colazione per eccellenza, di solito con un cornetto vuoto o farcito di marmellata, crema o cioccolato. Al Nord lo stesso dolce si chiama spesso brioche, mentre in Sicilia la brioche è quella tonda, col tuppo, che si mangia con la granita."),
    p("Perché proprio al mattino? Per molti il cappuccino è già un piccolo pasto, e tanto latte dopo pranzo o dopo cena semplicemente non va. È un'abitudine, non una legge: tanti lo bevono anche il pomeriggio, e nessun bar si rifiuterà di farlo."),
    {
      type: "image",
      src: `${IMG}/milan-cappuccino-brioche.webp`,
      alt: "Un cappuccino spolverato di cacao in una tazza color crema, con una brioche zuccherata su un piattino alle spalle",
      caption: "Colazione a Milano: cappuccino e brioche, come al Nord si chiama spesso il cornetto.",
      credit: unsplash("laura adai", "lauraadaiphoto"),
    },

    // ——— 6 ———
    h2("Il caffè nell'arco della giornata"),
    p("Non c'è un orario fisso, ma una giornata tipo, in molte città, va più o meno così:"),
    h3("Colazione"),
    p("Cappuccino, caffellatte o espresso con cornetto al bar prima del lavoro, oppure caffè e biscotti o fette biscottate a casa. La colazione italiana è di solito leggera e dolce."),
    h3("Metà mattina e dopo pranzo"),
    p("Un caffè a metà mattina è una pausa diffusa. Dopo pranzo l'espresso, o il decaffeinato, chiude il pasto, al ristorante o al bar sulla via del ritorno."),
    h3("Pomeriggio"),
    p("La pausa con i colleghi o una sosta tra una commissione e l'altra. D'estate lo shakerato o un caffè freddo; al Sud, magari una granita al caffè."),
    h3("Dopo cena"),
    p("L'espresso a fine cena è comune, a volte accompagnato — o \"corretto\" — da un amaro o una grappa. Chi teme di non dormire sceglie il deca, o rinuncia."),

    // ——— 7 ———
    h2("Caffè e cibo"),
    p("Il caffè non accompagna il pasto: arriva dopo. A colazione va con qualcosa di piccolo e dolce — cornetto, fetta di torta, biscotti da inzuppare — e ogni regione ha i suoi: la sfogliatella a Napoli, la brioche in Sicilia, la crostata un po' ovunque. Il caffè entra anche nei dolci, dal tiramisù all'affogato, il gelato \"annegato\" nell'espresso."),
    p("Chi arriva da Paesi con colazioni salate e abbondanti trova quella italiana frugale. Ma il protagonista è il caffè, e il pasto vero è il pranzo. Sui dolci, vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),

    // ——— 8 ———
    h2("La moka: il caffè di casa"),
    p("In moltissime cucine italiane la moka è sul fornello o a portata di mano. È composta da tre parti: la caldaia per l'acqua, il filtro a imbuto per il caffè e il raccoglitore in alto. Scaldandosi, la pressione del vapore spinge l'acqua attraverso il caffè fino alla parte superiore."),
    p("Secondo Bialetti, l'azienda che l'ha resa celebre, Alfonso Bialetti realizzò la Moka Express ottagonale in alluminio nel 1933; è al figlio Renato che l'azienda attribuisce il successo in tutto il mondo. È ancora prodotta in una forma molto simile all'originale, e la sua sagoma è riconoscibile ovunque."),
    h3("Perché la moka non è un espresso"),
    p("La moka lavora a una pressione molto più bassa di una macchina da bar: il caffè è forte e profumato, ma diverso, di solito senza crema densa e con un corpo e un gusto propri. In casa lo si chiama semplicemente caffè, ed è il caffè quotidiano di tante famiglie; parlare di espresso però non è corretto. Oggi in molte cucine la moka convive con le macchine a capsule e cialde, o è stata sostituita da queste."),
    {
      type: "image",
      src: `${IMG}/rome-moka-pot.webp`,
      alt: "Una piccola moka Bialetti rossa sul fornello a gas di una cucina di casa a Roma, con la fiamma blu accesa",
      caption: "La moka sul fornello in una cucina romana.",
      credit: unsplash("Sten Ritterfeld", "stenslens"),
    },

    // ——— 9 ———
    h2("Napoli"),
    p("Poche città sono legate al caffè quanto Napoli. Si beve corto e intenso al banco, spesso zuccherato, e di frequente con un bicchiere d'acqua. Tra i caffè storici c'è il **Gran Caffè Gambrinus**, aperto nel 1860 accanto a Palazzo Reale e piazza del Plebiscito e iscritto nel Registro delle imprese storiche di Unioncamere."),
    p("In casa, prima che la moka si diffondesse, molte famiglie usavano la *napoletana*, o *cuccumella*, la caffettiera da capovolgere. Il caffè attraversa anche il teatro: una delle scene più note di Eduardo De Filippo, in *Questi fantasmi!* (1946), è il monologo sul caffè preparato sul balcone."),
    h3("Il caffè sospeso"),
    p("Il caffè sospeso consiste nel pagare due caffè, berne uno e lasciare l'altro pagato per chi ne avesse bisogno. Il vocabolario Treccani lo definisce un'usanza di origine partenopea. Quanto fosse diffuso in passato è difficile da documentare, e oggi la pratica varia da bar a bar; dagli anni Dieci del Duemila l'idea è stata ripresa anche in altre città e all'estero."),
    p("Per il resto della città, vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/campania-sfogliatella-coffee.webp`,
      alt: "Due bicchieri di caffè freddo su piattini accanto a una sfogliatella riccia sul tavolino di un bar",
      caption: "Caffè freddo e sfogliatella: una colazione del Sud, fotografata in Campania.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },
    {
      type: "image",
      src: `${IMG}/naples-cafe-street.webp`,
      alt: "Foto in bianco e nero di persone ai tavolini di un bar lungo una stradina del centro di Napoli, con luci appese",
      caption: "Tavolini in una stradina del centro di Napoli.",
      credit: unsplash("Bunny Pickard", "bunny_01"),
    },

    // ——— 10 ———
    h2("Torino e il bicerin"),
    p("Torino ha una delle tradizioni più forti di caffè storici eleganti, molti sotto i portici del centro, e un legame antico con il cioccolato. Turismo Torino ricorda il **Caffè Fiorio**, aperto nel 1780, come luogo d'incontro di politici del Risorgimento, tra cui Cavour."),
    p("La bevanda simbolo è il **bicerin**: caffè, cioccolato e crema di latte a strati in un bicchierino, da bere senza mescolare. È legato soprattutto al **Caffè Al Bicerin** di piazza della Consolata, che fa risalire la propria storia al 1763 e ne ha fatto la sua specialità. Il nome viene dal piemontese e significa \"bicchierino\". Vedi anche [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/turin-al-bicerin.webp`,
      alt: "Una vetrinetta in legno con cornetti e paste su alzatine di vetro all'interno del Caffè Al Bicerin di Torino",
      caption: "Le paste nella vetrinetta del Caffè Al Bicerin, in piazza della Consolata a Torino.",
      credit: unsplash("Carmen Laezza", "_elleci"),
    },

    // ——— 11 ———
    h2("Venezia e le prime botteghe del caffè"),
    p("I commerci con il Mediterraneo orientale fecero di Venezia una delle prime porte d'ingresso del caffè in Europa. Il medico e botanico Prospero Alpini, rientrato da un viaggio in Egitto, descrisse la pianta nel *De plantis Aegypti* (1592): secondo l'Università di Padova, una delle prime descrizioni scientifiche europee. Nel secolo successivo le botteghe del caffè si moltiplicarono in città, diventando luoghi di conversazione, affari e notizie."),
    p("La più celebre è il **Caffè Florian**, sotto le Procuratie Nuove in piazza San Marco. Aprì il 29 dicembre 1720 con il nome \"Alla Venezia Trionfante\" e presto prese quello del fondatore, Floriano Francesconi; oggi si presenta come il più antico caffè d'Italia. Sedersi ai suoi tavoli, con l'orchestra in piazza, è un'esperienza che ha il suo prezzo. Per la Venezia meno affollata, vedi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/venice-piazza-san-marco-cafe.webp`,
      alt: "File di tavolini e sedie vuoti sulla Piazzetta San Marco all'alba, accanto a Palazzo Ducale e alle due colonne",
      caption: "Tavolini accanto a Palazzo Ducale, a San Marco, di primo mattino.",
      credit: unsplash("Lukas Krasa", "kraasa"),
    },

    // ——— 12 ———
    h2("Trieste, dove il caffè ha un'altra lingua"),
    p("Porto franco dal 1719 per volontà degli Asburgo, Trieste è diventata uno dei grandi porti del caffè e conserva una forte tradizione di torrefazione e commercio. Ha anche un lessico tutto suo, che confonde i visitatori italiani quanto gli stranieri. Secondo i siti turistici della città e della regione:"),
    ul(
      "**Nero** — l'espresso.",
      "**Capo** — quello che altrove è il caffè macchiato.",
      "**Goccia / gocciato** — espresso con una goccia di schiuma di latte.",
      "**Capo in b** — il capo servito in bicchierino (*in bicchiere*).",
    ),
    p("Chi chiede un \"cappuccino\" a Trieste può ricevere qualcosa di più piccolo del previsto. Tra i caffè storici elencati dal Comune ci sono il **Tommaseo** (1825), il **Caffè degli Specchi** (1839) in piazza Unità e il **Caffè San Marco** (1914)."),

    // ——— 13 ———
    h2("Roma"),
    p("Anche a Roma il caffè è soprattutto al banco, in bar affollati a ogni angolo. Il caffè storico più famoso, l'**Antico Caffè Greco** di via dei Condotti, aprì nel 1760 secondo l'ufficio del turismo di Roma Capitale e per oltre due secoli fu frequentato da scrittori e artisti. Ha chiuso nell'ottobre 2025 al termine di una lunga causa sul contratto d'affitto: verificate lo stato attuale prima di andarci. Per il resto della città, vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni)."),

    // ——— 14 ———
    h2("Sicilia"),
    p("In Sicilia il caffè incontra l'estate. La **granita al caffè**, spesso con panna e brioche, è un classico soprattutto della Sicilia orientale, e il **latte di mandorla** è una bevanda fresca tradizionale. Il caffè al bar segue per il resto le abitudini di tutta Italia. Il resto è in [Tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana) e in [Palermo per la prima volta](/it/citta/palermo-per-la-prima-volta)."),

    // ——— 15 ———
    h2("Le tradizioni locali a confronto"),
    table(
      ["Luogo", "Tradizione", "Bevanda o usanza tipica", "Contesto"],
      [
        ["Napoli", "Espresso corto e intenso al banco", "Caffè sospeso; bicchiere d'acqua", "Gran Caffè Gambrinus, 1860; la napoletana"],
        ["Torino", "Caffè storici sotto i portici", "Bicerin", "Al Bicerin (dal 1763, secondo il locale), Fiorio (1780)"],
        ["Venezia", "Prime botteghe del caffè", "I tavolini di piazza San Marco", "Caffè Florian, 1720"],
        ["Trieste", "Porto del caffè con un lessico proprio", "Nero, capo, capo in b", "Porto franco dal 1719; caffè storici dal 1825"],
        ["Roma", "Bar affollati, caffè al banco", "—", "Antico Caffè Greco, 1760 (chiuso nel 2025)"],
        ["Sicilia", "Il caffè d'estate", "Granita al caffè con brioche", "Soprattutto nella parte orientale"],
        ["Piemonte", "Caffè e cioccolato", "Marocchino (spesso legato ad Alessandria)", "La ricetta cambia da città a città"],
      ],
      "Date fornite dai locali, dagli uffici turistici o dai registri ufficiali.",
    ),

    // ——— 16 ———
    h2("Breve storia del caffè in Italia"),
    table(
      ["Periodo", "Che cosa succede", "Perché conta"],
      [
        ["Fine Cinquecento", "Prospero Alpini descrive la pianta del caffè dopo un viaggio in Egitto", "Prime conoscenze scientifiche europee sul caffè"],
        ["Sei-Settecento", "Le botteghe del caffè si diffondono a Venezia e in altre città", "Il caffè diventa luogo di conversazione e di notizie"],
        ["1720-1780", "Aprono Florian (Venezia, 1720), Antico Caffè Greco (Roma, 1760), Fiorio (Torino, 1780)", "Molti caffè storici risalgono a quest'epoca"],
        ["1884", "Angelo Moriondo brevetta un apparecchio a vapore e lo presenta a Torino", "Un primo passo verso le macchine da bar"],
        ["1901-1906", "Brevetto di Luigi Bezzera; La Pavoni produce dal 1903 e espone a Milano nel 1906", "Il caffè fatto al momento, tazza per tazza"],
        ["1933", "La Moka Express di Bialetti", "Il caffè forte arriva in casa"],
        ["1938-1948", "I brevetti di Achille Gaggia e le prime macchine a leva", "L'espresso ad alta pressione, con la crema"],
        ["Dopoguerra", "I bar con la macchina espresso si diffondono in tutta Italia", "Il caffè al banco diventa abitudine quotidiana"],
        ["Dal Duemila", "Capsule in casa; caffetterie specialty nelle città", "Più scelta accanto al bar tradizionale"],
      ],
    ),

    // ——— 17 ———
    h2("Le macchine per l'espresso: una storia a più mani"),
    p("La macchina per l'espresso non nasce in un solo momento. Nel 1884 il torinese **Angelo Moriondo** brevettò un apparecchio a vapore per preparare rapidamente il caffè e lo presentò all'Esposizione Generale Italiana di Torino. Secondo il MUMAC, il museo della macchina per caffè di Binasco, produceva caffè in quantità e non tazza per tazza, e Moriondo non lo portò mai alla produzione industriale."),
    p("Il milanese **Luigi Bezzera** depositò nel 1901 un brevetto per una macchina con il **gruppo erogatore**, che prepara la singola dose al momento. **Desiderio Pavoni** ne rilevò i diritti e avviò la produzione nel 1903; macchine di questo tipo furono esposte all'Esposizione Internazionale di Milano del 1906. Erano macchine a vapore: un caffè più rapido e forte, ma non ancora l'espresso di oggi."),
    p("Quello arrivò più tardi. **Achille Gaggia** depositò nel 1938 un brevetto per un sistema che usava la pressione dell'acqua invece del vapore, e nel 1947 un altro per un pistone azionato da una leva, capace di spingere l'acqua nel caffè a pressione molto più alta. Secondo l'azienda, il risultato fu l'espresso con la sua crema naturale; le prime macchine furono costruite con Faema nel 1948. Molti altri tecnici e aziende hanno poi perfezionato il progetto: l'espresso è una storia di miglioramenti successivi, non di un unico eroe."),
    {
      type: "image",
      src: `${IMG}/rome-lever-espresso-machine.webp`,
      alt: "Una macchina per espresso cromata a due gruppi, con leve e manometri, sul bancone di una trattoria romana",
      caption: "Una macchina per espresso tradizionale in una trattoria di Roma.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 18 ———
    h2("Bar tradizionale e caffè specialty"),
    p("La gran parte del caffè italiano si beve ancora nei bar tradizionali, spesso con miscele che uniscono arabica e robusta e tostature piuttosto scure. Nell'ultimo decennio circa sono nate **caffetterie specialty** in città come Milano, Torino, Roma e Firenze, con caffè monorigine, tostature più chiare e metodi alternativi come filtro, V60 e cold brew."),
    p("Non è una sfida tra vecchio e nuovo. Molte caffetterie specialty servono espresso e cappuccino al banco, e diversi torrefattori e bar tradizionali hanno alzato l'asticella. I più giovani passano con naturalezza dagli uni agli altri. Più che il rito del caffè al banco, lo specialty ha cambiato la conversazione: da dove viene il caffè, come è tostato, quanto dovrebbe costare."),

    // ——— 19 ———
    h2("Ordinare al bar: le frasi utili"),
    p("Poche parole bastano: un *buongiorno* entrando, l'ordinazione, un *grazie* uscendo. Queste formule servono soprattutto a chi accompagna amici stranieri o viaggia con chi non parla italiano."),
    table(
      ["Se volete…", "Dite…", "Che cosa arriva, di solito"],
      [
        ["Un espresso", "\"Un caffè, per favore.\"", "Un espresso"],
        ["Due espressi", "\"Due caffè, per favore.\"", "Due espressi"],
        ["Un cappuccino", "\"Un cappuccino, per favore.\"", "Un cappuccino in tazza"],
        ["Un espresso con poco latte", "\"Un caffè macchiato.\"", "Espresso con un po' di latte o schiuma"],
        ["Un caffè con molto latte", "\"Un caffellatte.\"", "Latte caldo con caffè, in bicchiere o tazza"],
        ["Un decaffeinato", "\"Un decaffeinato\" o \"un deca.\"", "Un espresso decaffeinato"],
        ["Un caffè lungo all'americana", "\"Un caffè americano.\"", "Espresso allungato con acqua calda"],
        ["Latte vegetale", "\"Con latte di soia / d'avena?\"", "Molti bar ce l'hanno, non tutti"],
      ],
      "I termini locali possono cambiare, soprattutto a Trieste.",
    ),

    // ——— 20 ———
    h2("Gli equivoci più comuni"),
    ul(
      "**Aspettarsi una tazza grande di caffè filtro.** \"Caffè\" è l'espresso; per qualcosa di più lungo c'è l'americano.",
      "**Chiedere un \"latte\".** Arriva un bicchiere di latte: bisogna dire caffellatte.",
      "**Confondere caffellatte e latte macchiato.** Entrambi sono con molto latte; il latte macchiato ha solo un goccio di caffè.",
      "**Credere che il cappuccino dopo pranzo sia vietato.** È un'abitudine, non una regola.",
      "**Pensare che ogni bar abbia gli stessi prezzi.** Banco, tavolo e piazze famose possono costare molto diversamente.",
      "**Dare per scontato che banco e tavolo funzionino ovunque allo stesso modo.** Alcuni bar fanno pagare il servizio al tavolo, altri no.",
      "**Credere che le parole valgano ovunque.** Trieste ha un lessico tutto suo.",
      "**Aspettarsi il bicchiere da asporto dappertutto.** È più diffuso di un tempo, ma molti bar tradizionali servono solo in tazzina.",
    ),

    // ——— 21 ———
    h2("Il galateo del caffè"),
    ul(
      "**Salutare e ordinare con chiarezza** — buongiorno, poi la bevanda.",
      "**Seguire il sistema del locale** — se tutti pagano prima alla cassa, fate lo stesso.",
      "**Al banco, essere rapidi** — bere e lasciare spazio a chi aspetta.",
      "**Al tavolo, prendersela comoda** — pagato il servizio, nessuno vi mette fretta.",
      "**Non portare al tavolo un caffè pagato al banco**, a meno che il bar non lo consenta.",
      "**La mancia non è dovuta** — lasciare una moneta o arrotondare è una scelta personale.",
      "**Il coperto è una cosa da ristorante** — al bar di solito non c'è, anche se il servizio al tavolo può costare di più.",
    ),

    // ——— 22 ———
    h2("Il caffè nella vita sociale"),
    p("\"Prendiamo un caffè?\" è uno degli inviti più comuni in italiano. Può voler dire una pausa vera, un modo per continuare una conversazione, un breve incontro di lavoro o semplicemente un gesto di cortesia. Offrire il caffè è una piccola gentilezza, e spesso ci si alterna."),
    p("In ufficio la pausa caffè è il momento per parlare lontano dalla scrivania; nel quartiere, il bar è dove ci si incontra, si sfoglia il giornale e si raccolgono notizie. Il caffè dura un minuto: conta il rito che ci sta intorno. La sera gli stessi bar passano all'aperitivo, e in molte città il caffè fa parte della passeggiata serale."),
    {
      type: "image",
      src: `${IMG}/rome-espresso-outdoor-table.webp`,
      alt: "Un uomo con occhiali e barba, in giacca di pelle color cuoio, beve un espresso al tavolino all'aperto di un bar di Roma, con persone che chiacchierano sullo sfondo",
      caption: "Un caffè al tavolino, a Roma.",
      credit: unsplash("Gabriella Clare Marino", "gabiontheroad"),
    },

    // ——— 23 ———
    h2("Il caffè e l'identità"),
    p("Il caffè porta con sé molto più di quanto sembri. Per tanti è memoria familiare: il borbottio della moka al mattino, il modo in cui lo preparava una nonna. È orgoglio locale, dal caffè napoletano al bicerin torinese al lessico triestino. Offrirlo a un ospite è un gesto elementare di accoglienza."),
    p("Ed è anche industria: torrefazioni e costruttori di macchine italiani vendono in tutto il mondo, e l'idea di \"espresso italiano\" fa parte dell'immagine del Paese all'estero. Intanto, in casa, le abitudini cambiano: capsule, deca, latti vegetali e caffetterie specialty convivono con la tazzina al banco. Non esiste un solo modo italiano di bere il caffè; esiste però l'aspettativa condivisa che sia buono, veloce e parte della giornata."),

    // ——— 24 ———
    h2("Piccolo glossario del caffè"),
    table(
      ["Parola", "Significato"],
      [
        ["Caffè", "Al bar, l'espresso; a casa, spesso quello della moka"],
        ["Espresso", "Caffè corto preparato a pressione"],
        ["Doppio", "Doppia dose"],
        ["Ristretto / corto", "Più concentrato"],
        ["Lungo", "Con più acqua"],
        ["Macchiato", "Con un po' di latte"],
        ["Cappuccino", "Espresso con latte montato e schiuma"],
        ["Caffellatte", "Latte con caffè"],
        ["Latte macchiato", "Latte con un goccio di caffè"],
        ["Marocchino", "Espresso con cacao e schiuma di latte"],
        ["Shakerato", "Espresso agitato con ghiaccio"],
        ["Corretto", "Con un goccio di liquore"],
        ["Deca", "Decaffeinato"],
        ["Orzo", "Bevanda di orzo tostato"],
        ["Moka", "Caffettiera da fornello"],
        ["Napoletana / cuccumella", "Caffettiera napoletana da capovolgere"],
        ["Banco", "Il bancone del bar"],
        ["Scontrino", "Ricevuta della cassa"],
        ["Nero, capo, capo in b", "Espresso, macchiato e macchiato in bicchiere, a Trieste"],
        ["Bicerin", "Caffè, cioccolato e crema di latte a strati, a Torino"],
      ],
    ),
    p("Per organizzare il resto del viaggio, c'è la [guida completa per viaggiare in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Che cosa si intende per \"caffè\" al bar?", answer: "Un espresso. A casa, spesso, il caffè della moka." },
    { question: "Il caffè italiano è sempre un espresso?", answer: "Al bar quasi tutto parte dall'espresso. A casa si usano la moka o le capsule, e le caffetterie specialty propongono anche il filtro." },
    { question: "Che cos'è il caffè macchiato?", answer: "Un espresso con poco latte o un po' di schiuma. Il barista può chiedere se lo volete caldo o freddo." },
    { question: "Che differenza c'è tra caffellatte e latte macchiato?", answer: "Il caffellatte è latte con caffè; il latte macchiato è latte caldo con un goccio di espresso, di solito in bicchiere alto." },
    { question: "Si può bere il cappuccino dopo pranzo?", answer: "Certo. Molti lo preferiscono al mattino, ma è un'abitudine, non una regola." },
    { question: "Quando è nata la moka?", answer: "Secondo Bialetti, la Moka Express fu realizzata da Alfonso Bialetti nel 1933." },
    { question: "Il caffè della moka è un espresso?", answer: "No. La moka lavora a pressione molto più bassa: il caffè è forte ma diverso, di solito senza crema densa." },
    { question: "Che cos'è il bicerin?", answer: "Una specialità torinese di caffè, cioccolato e crema di latte a strati in un bicchierino, legata al Caffè Al Bicerin." },
    { question: "Che cos'è il caffè sospeso?", answer: "Un'usanza di origine napoletana: si paga un caffè in più, che resta a disposizione di chi non può permetterselo." },
    { question: "Come si ordina il caffè a Trieste?", answer: "L'espresso si chiama \"nero\", il macchiato \"capo\" e il macchiato in bicchierino \"capo in b\"." },
    { question: "Quali sono le città italiane più legate al caffè?", answer: "Napoli, Torino, Venezia e Trieste, ciascuna a modo suo; ma la cultura del bar è forte ovunque." },
    { question: "Chi ha inventato la macchina per l'espresso?", answer: "Nessuno da solo: dal brevetto di Moriondo (1884) a quelli di Bezzera (1901) e Gaggia (1938 e 1947), la macchina è frutto di più passaggi." },
    { question: "Al tavolo si paga di più?", answer: "Spesso sì, soprattutto nelle piazze famose e nei caffè storici. I prezzi devono essere esposti: meglio controllare prima di sedersi." },
    { question: "Al bar si lascia la mancia?", answer: "Non è dovuta. C'è chi lascia una moneta o arrotonda per un buon servizio." },
    { question: "Quali alternative ci sono al caffè?", answer: "Il decaffeinato, il caffè d'orzo e, d'estate, lo shakerato o la granita al caffè." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Università di Padova (Il Bo Live) — Prospero Alpini", url: "https://ilbolive.unipd.it/it/news/medicina-padova-nei-secoli-prospero-alpini" },
    { label: "Caffè Florian — La storia", url: "https://caffeflorian.com/en/florian-venezia/history/", note: "apertura 1720 (in inglese)" },
    { label: "Turismo Roma — Antico Caffè Greco", url: "https://www.turismoroma.it/en/places/antico-caff%C3%A8-greco", note: "in inglese" },
    { label: "Caffè Al Bicerin — Storia", url: "https://bicerin.it/storia/" },
    { label: "Turismo Torino — Caffè Fiorio", url: "https://turismotorino.org/en/visit/things-to-do-and-things-to-see/food-and-wine/historical-cafes/caffe-fiorio", note: "in inglese" },
    { label: "Unioncamere — Registro delle imprese storiche: Gran Caffè Gambrinus", url: "https://www.unioncamere.gov.it/imprese-storiche/gran-caffe-gambrinus-srl" },
    { label: "Treccani — caffè sospeso", url: "https://www.treccani.it/vocabolario/caffe-sospeso_(Neologismi)/" },
    { label: "Comune di Trieste — Caffè storici", url: "https://itinerari.comune.trieste.it/en/historic-cafes/", note: "in inglese" },
    { label: "Discover Trieste — Caffè storici", url: "https://discover-trieste.it/en/23059/Historical-Cafes", note: "lessico triestino (in inglese)" },
    { label: "MUMAC — Gli albori", url: "https://www.mumac.it/le-sale/sala1-albori", note: "Moriondo, Bezzera, Pavoni" },
    { label: "Gaggia — La storia", url: "https://www.gaggia.com/it/storia/", note: "brevetti 1938 e 1947" },
    { label: "Bialetti — La storia", url: "https://www.bialetti.com/it_it/la-storia", note: "Moka Express" },
    { label: "Istituto Nazionale Espresso Italiano", url: "https://www.espressoitaliano.org/", note: "definizione di espresso" },
  ],
};
