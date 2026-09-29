import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana della guida a Verona, scritta per chi legge in italiano.
// Regole di visita dell'Arena e date del festival 2027, accesso e prenotazione
// della Casa di Giulietta, chiusure dei musei civici e cambio di biglietteria
// di ottobre 2026, biglietti delle chiese, navetta per l'aeroporto e sito
// UNESCO sono stati verificati sui siti ufficiali a settembre 2026. Prezzi,
// orari e tempi di viaggio non vengono citati.

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

const IMG = "/images/cities/verona-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const veronaPerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Verona si adagia in una doppia ansa dell'Adige, tra la pianura veneta e le prime colline delle Alpi. Fu città romana, sede della signoria dei della Scala (gli Scaligeri) nel Medioevo e, per quasi quattro secoli, parte della Repubblica di Venezia. Quegli strati convivono ancora: un anfiteatro romano dove si fa l'opera, un ponte romano, torri medievali e tombe gotiche, palazzi veneziani e una delle più belle chiese romaniche d'Italia. Ed è la città che Shakespeare scelse per Romeo e Giulietta, il che porta con sé un turismo tutto particolare."),

    // ——— 1 ———
    h2("Vale la pena visitare Verona?"),
    answer("**Sì: Verona si presta molto bene a un primo viaggio in Italia**, soprattutto per chi ama storia, architettura, cucina e vino. Il centro storico è raccolto e si gira a piedi: in **un giorno** si vedono l'Arena, piazza delle Erbe e il cuore medievale, in **due** si aggiungono con calma San Zeno, Castelvecchio, il Teatro Romano e l'altra sponda dell'Adige. È più tranquilla di Venezia, più piccola di Milano, meno densa di musei di Firenze, e si trova sulle principali linee ferroviarie tra Milano, Venezia e Bologna. È anche una buona base per il **Lago di Garda** e le colline della **Valpolicella**. **L'auto non serve** in città: il centro è una zona a traffico limitato controllata da telecamere. **Prenota in anticipo** la Casa di Giulietta, dove la prenotazione online è obbligatoria."),
    p("Verona è molto più del suo legame con Shakespeare. I luoghi di Giulietta fanno parte del turismo cittadino, ma sono l'Arena, le strade romane e medievali e i palazzi dell'epoca veneziana ad aver convinto l'UNESCO a iscrivere l'intero centro storico."),

    // ——— 2 ———
    h2("Verona in sintesi"),
    {
      type: "facts",
      title: "Verona in sintesi",
      rows: [
        { label: "Ideale per", value: "Storia romana e medievale, architettura, cucina e vino" },
        { label: "Tempo minimo", value: "1 giorno pieno" },
        { label: "Prima visita ideale", value: "2 giorni; 3 con Lago di Garda o Valpolicella" },
        { label: "Zona storica principale", value: "La Città Antica, dentro l'ansa dell'Adige" },
        { label: "Monumento simbolo", value: "L'Arena, l'anfiteatro romano in piazza Bra" },
        { label: "Musei principali", value: "Castelvecchio, Teatro Romano e Museo Archeologico, Arena" },
        { label: "Stazione principale", value: "Verona Porta Nuova, a sud del centro" },
        { label: "Aeroporto", value: "Verona Villafranca (Valerio Catullo), con navetta per Porta Nuova" },
        { label: "Come muoversi", value: "A piedi, con i bus ATV per la stazione e le zone esterne" },
        { label: "Gite facili", value: "Lago di Garda (Peschiera, Sirmione), Valpolicella, Vicenza, Mantova" },
      ],
    },
    {
      type: "image",
      src: `${IMG}/verona-ponte-pietra-adige.webp`,
      alt: "Ponte Pietra, ponte ad arcate in pietra e mattoni sull'Adige impetuoso a Verona, con case color pastello e tetti rossi sullo sfondo",
      caption: "Ponte Pietra sull'Adige, ricostruito dopo la Seconda guerra mondiale con le pietre originali.",
      credit: unsplash("Leandro Silva", "leandro_gs"),
      wide: true,
    },

    // ——— 3 ———
    h2("Quanti giorni servono a Verona?"),
    table(
      ["Programma", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Arena, piazza delle Erbe, piazza dei Signori, Casa di Giulietta e il fiume", "Poco tempo per San Zeno o per i musei"],
        ["2 giorni", "Si aggiungono San Zeno, Castelvecchio, il Teatro Romano e Veronetta", "Sufficiente per la maggior parte delle prime visite"],
        ["3 giorni", "Ritmo più lento, altre chiese e musei, oppure una gita", "Bisogna scegliere tra città, lago e colline del vino"],
        ["Verona + Lago di Garda", "Una giornata a Sirmione o Peschiera, o una notte sul lago", "I paesi dell'alto lago sono una giornata lunga da Verona"],
        ["Verona + Valpolicella", "Borghi del vino e degustazioni", "Molto più semplice con un tour o un autista"],
      ],
      "Quanto fermarsi a Verona"
    ),
    p("Chi viaggia tra Milano e Venezia spesso si ferma qualche ora: bastano per l'Arena e le piazze principali, ma fermarsi una notte permette di vivere il centro la sera, quando i visitatori in giornata sono ripartiti."),

    // ——— 4 ———
    h2("Cosa vedere a Verona"),
    p("Gran parte dei musei civici di Verona chiude il lunedì, e dal 1° ottobre 2026 i Musei Civici passano a una nuova piattaforma di biglietteria online. Controlla le modalità in vigore sul [sito dei Musei Civici](https://museicivici.comune.verona.it/). La VeronaCard dà accesso a molti luoghi civici e chiese: verifica che cosa comprende prima di acquistarla."),
    h3("Piazza Bra e l'Arena"),
    p("Piazza Bra, la più grande della città, è il punto di partenza di quasi tutte le visite: da un lato l'Arena, dall'altro il Liston, l'ampio marciapiede di caffè e ristoranti. All'Arena dedichiamo una sezione a parte."),
    {
      type: "image",
      src: `${IMG}/piazza-bra-arena.webp`,
      alt: "Piazza Bra a Verona con persone che attraversano la piazza e le arcate dell'Arena romana sulla destra",
      caption: "Piazza Bra e l'Arena.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Piazza delle Erbe"),
    p("Sorta sul foro romano, piazza delle Erbe è il cuore vivace della città antica: bancarelle, la fontana trecentesca di Madonna Verona, facciate affrescate e il leone di San Marco sulla colonna. È animata tutto il giorno ed è il posto naturale per un caffè o un aperitivo."),
    {
      type: "image",
      src: `${IMG}/verona-market-square.webp`,
      alt: "Piazza delle Erbe a Verona con gli ombrelloni delle bancarelle chiusi, la fontana di Madonna Verona e i palazzi storici, con persone a passeggio",
      caption: "Piazza delle Erbe, sul luogo dell'antico foro romano.",
      credit: unsplash("Ivan Ovych", "kehl"),
    },
    h3("Piazza dei Signori, Torre dei Lamberti e Arche Scaligere"),
    p("Oltre un arco da piazza delle Erbe, la più raccolta piazza dei Signori era la sede del governo, con la statua di Dante, che durante l'esilio trovò rifugio alla corte scaligera. La **Torre dei Lamberti**, sopra il Palazzo della Ragione, si sale a piedi o in ascensore per il panorama sui tetti e sulle colline. Poco lontano, le **Arche Scaligere** sono le elaborate tombe gotiche dei signori della Scala; secondo i Musei Civici il recinto è aperto al pubblico nel periodo estivo, ma le tombe si vedono dalla strada tutto l'anno. Calcola un'ora per piazza, torre e tombe."),
    {
      type: "image",
      src: `${IMG}/view-from-torre-dei-lamberti.webp`,
      alt: "Veduta dei tetti rossi e dei campanili di Verona dalla Torre dei Lamberti, con colline e montagne in lontananza",
      caption: "Verona dalla Torre dei Lamberti, con le colline e i primi rilievi alpini sullo sfondo.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Castelvecchio e il suo ponte"),
    p("Costruito nel Trecento sotto Cangrande II della Scala, Castelvecchio è una fortezza in mattoni sul fiume. Ospita il museo civico d'arte — scultura e pittura dal Medioevo al Settecento — in sale ripensate a metà Novecento dall'architetto Carlo Scarpa, un riferimento nella museografia. Il ponte fortificato del castello, il Ponte di Castelvecchio, fu fatto saltare nel 1945 e ricostruito dopo la guerra. Secondo il museo è chiuso il lunedì. Calcola un'ora e mezza o due."),
    {
      type: "image",
      src: `${IMG}/ponte-di-castelvecchio.webp`,
      alt: "Il Ponte di Castelvecchio in mattoni rossi con merli e torre sull'Adige a Verona, con gabbiani in volo sull'acqua",
      caption: "Il Ponte di Castelvecchio, il ponte fortificato del castello sull'Adige.",
      credit: unsplash("Antonio Vivace", "avivace"),
    },
    h3("La Basilica di San Zeno"),
    p("A una ventina di minuti a piedi a ovest del centro, San Zeno è una delle chiese romaniche più importanti del Nord Italia, con il rosone, le formelle bronzee del portale e, sull'altare, il trittico di Andrea Mantegna. È gestita, insieme al Duomo, a Sant'Anastasia e a San Fermo, dall'associazione Chiese Vive, il cui biglietto comprende tutte e quattro; secondo il sito non serve prenotare, e la domenica e nei giorni festivi religiosi le visite turistiche sono solo il pomeriggio. Calcola 45 minuti, più la camminata."),
    {
      type: "image",
      src: `${IMG}/san-zeno-interior.webp`,
      alt: "L'interno della Basilica di San Zeno a Verona, con soffitto ligneo dipinto, archi a fasce e affreschi sopra l'altare rialzato",
      caption: "L'interno della Basilica di San Zeno.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("Il Duomo e Sant'Anastasia"),
    p("Il Duomo di Verona, all'estremità nord della città antica, unisce un esterno romanico a interni più tardi, tra cui l'*Assunta* di Tiziano. Sant'Anastasia, la chiesa più grande della città, è gotica, con l'affresco di Pisanello *San Giorgio e la principessa*. Entrambe sono comprese nel biglietto di Chiese Vive."),
    h3("Il Teatro Romano e Ponte Pietra"),
    p("Oltre il fiume, il Teatro Romano è addossato alla collina, con un museo archeologico sopra, in un ex convento; secondo il Comune è chiuso il lunedì. Calcola un'ora. Poco più a valle, **Ponte Pietra** è il ponte romano di Verona: fatto saltare nel 1945, fu ricostruito con le pietre recuperate dal fiume. Dalla zona del teatro una scalinata sale a Castel San Pietro, il miglior belvedere sulla città al tramonto."),
    h3("Il Giardino Giusti"),
    p("A Veronetta, il Giardino Giusti è un giardino rinascimentale con un viale di alti cipressi, terrazze e grotte che salgono lungo la collina. È di proprietà privata e a pagamento: verifica le aperture prima di andare. Calcola un'ora."),
    h3("Il lungadige"),
    p("Il fiume avvolge su tre lati la città antica, e la passeggiata lungo gli argini tra Castelvecchio, Ponte Pietra e il Teatro Romano è una delle più belle di Verona."),

    // ——— 5 ———
    h2("L'Arena di Verona"),
    p("L'Arena è un anfiteatro romano del I secolo d.C., costruito fuori dalle mura romane e poi inglobato nella città. Gran parte dell'anello esterno andò perduta dopo un terremoto del XII secolo; ne restano quattro arcate, l'*Ala*, sopra l'anello interno completo. È tra gli anfiteatri romani meglio conservati e, a differenza di quasi tutti gli altri, ospita ancora grandi spettacoli."),
    {
      type: "image",
      src: `${IMG}/arena-interior.webp`,
      alt: "L'interno dell'Arena di Verona, con le gradinate in pietra che salgono intorno alla platea ovale e alcuni visitatori in basso",
      caption: "L'interno dell'Arena, dove le gradinate in pietra accolgono ancora il pubblico degli spettacoli estivi.",
      credit: unsplash("Rui Alves", "asfotosde1enorme"),
    },
    h3("La visita al monumento"),
    p("Secondo i Musei Civici, l'Arena è aperta ai visitatori dal martedì alla domenica e chiusa il lunedì, tranne nelle giornate di spettacolo, quando chiude in anticipo o non apre alle visite. La visita al monumento richiede 45 minuti–un'ora; sali sulle gradinate più alte per la vista su piazza Bra."),
    h3("Opera ed eventi"),
    p("Dal 1913 l'Arena ospita ogni estate un festival lirico. Secondo la Fondazione Arena di Verona, il festival 2027 si svolge dal 12 giugno all'11 settembre, con biglietti già in vendita sul sito ufficiale. Fuori dal festival l'Arena ospita concerti e altri eventi. Una serata di spettacolo è un'esperienza diversa dalla visita diurna: biglietti, tipi di posto e regole dipendono dall'organizzatore di ciascun evento."),
    important("Durante la stagione lirica e nei giorni di evento, gli orari di visita dell'Arena cambiano, a volte con poco preavviso. Se ci tieni a vedere il monumento, controlla il calendario dei Musei Civici per le tue date.", "Giorni di spettacolo"),

    // ——— 6 ———
    h2("Verona e Romeo e Giulietta"),
    p("Shakespeare ambientò *Romeo e Giulietta* a Verona, ma non inventò la storia. Il racconto prese forma nelle novelle italiane del Cinquecento, in particolare in quella di Luigi da Porto, che collocò a Verona due famiglie rivali; Shakespeare si basò su una versione inglese della vicenda. Non esistono prove storiche che Romeo e Giulietta siano esistiti. I nomi dei Montecchi e dei Cappelletti compaiono sì in testi medievali, anche in Dante, ma come fazioni politiche, non come famiglie di due innamorati."),
    p("La **Casa di Giulietta** è una casa medievale vicino a piazza delle Erbe legata alla famiglia Dal Cappello, il cui nome richiama i Capuleti; il celebre balcone fu aggiunto nel Novecento. Oggi è un museo civico. Secondo il Comune, dal 1° aprile 2026 si entra nel cortile e nella casa solo dal Teatro Nuovo in piazzetta Navona, con un percorso a senso unico che esce in via Cappello. **La prenotazione online è obbligatoria**, anche per chi ha diritto all'ingresso gratuito, e si sceglie tra un percorso con il cortile e uno che comprende anche la casa. È aperta tutti i giorni, il lunedì solo il pomeriggio."),
    {
      type: "image",
      src: `${IMG}/juliet-balcony.webp`,
      alt: "Il balcone in pietra sulla facciata in mattoni della Casa di Giulietta a Verona, con l'edera sul muro del cortile",
      caption: "Il balcone della Casa di Giulietta, aggiunto alla casa medievale nel Novecento.",
      credit: unsplash("Maksym Harbar", "maksym_harbar"),
    },
    p("Giulietta si incontra anche altrove: nella cosiddetta Tomba di Giulietta, nell'ex convento di San Francesco al Corso che ospita il museo civico degli affreschi, nei negozi, negli eventi e nelle lettere che i visitatori continuano a spedire a «Giulietta». È una tradizione letteraria diventata parte della cultura veronese: piacevole da vivere, purché non la si scambi per la storia della città."),

    // ——— 7 ———
    h2("La Verona romana e medievale"),
    p("Secondo l'UNESCO, che ha iscritto la Città di Verona nella Lista del Patrimonio Mondiale nel 2000, Verona divenne municipio romano nel I secolo a.C. e crebbe rapidamente d'importanza. Il nucleo romano, dentro l'ansa del fiume, conserva la griglia delle strade e diversi monumenti: l'Arena, il Teatro Romano, Ponte Pietra, le porte Borsari e Leoni e l'Arco dei Gavi, ricostruito accanto a Castelvecchio negli anni Trenta."),
    p("Dopo i Romani, Verona passò all'ostrogoto Teodorico, ai Longobardi e a Carlo Magno. Nel XII secolo divenne libero comune, e tra Duecento e Trecento fiorì sotto i della Scala, soprattutto con Cangrande I, che ospitò Dante. Gli Scaligeri costruirono Castelvecchio, le loro tombe e nuove mura. Dal 1405 Verona fece parte della Repubblica di Venezia, che lasciò palazzi, il leone di San Marco e nuove fortificazioni; dopo il 1797 passò all'Austria, che aggiunse altre opere militari, ed entrò nel Regno d'Italia nel 1866."),

    // ——— 8 ———
    h2("Quartieri e dove dormire"),
    table(
      ["Zona", "Atmosfera e posizione", "Per la prima visita", "Come muoversi"],
      [
        ["Città Antica (centro storico)", "Dentro l'ansa dell'Adige: Arena, piazza delle Erbe, Casa di Giulietta, negozi e ristoranti", "La base più comoda", "A piedi; per le auto è ZTL"],
        ["Intorno a piazza Bra", "Il margine sud del centro, davanti all'Arena", "Comodissima; animata la sera, soprattutto in stagione lirica", "A piedi; la più vicina alla stazione"],
        ["Piazza delle Erbe e piazza dei Signori", "Il cuore medievale, con bar e ristoranti", "Suggestiva; può essere rumorosa la sera tardi", "A piedi"],
        ["San Zeno", "Quartiere residenziale a ovest di Castelvecchio, intorno alla basilica", "Una base più tranquilla e di quartiere, con i suoi locali", "Circa 20 minuti a piedi dal centro"],
        ["Veronetta", "Oltre il fiume a est, con l'università, il Teatro Romano e il Giardino Giusti", "Buon rapporto qualità-prezzo, vivace con gli studenti", "A piedi attraverso i ponti"],
        ["Borgo Trento", "A nord del fiume, residenziale e verde", "Tranquillo, ma più lontano dai monumenti", "A piedi o in bus"],
        ["Vicino a Porta Nuova", "Intorno alla stazione, a sud delle mura", "Pratico per treni e navetta per l'aeroporto", "A piedi o in bus fino a piazza Bra"],
      ],
      "I quartieri di Verona"
    ),
    p("Alla prima visita dormi nella Città Antica o vicino a piazza Bra. Se arrivi in auto, verifica se l'alloggio è dentro la zona a traffico limitato e come funziona l'accesso prima di arrivare. Gli alberghi si riempiono durante la stagione lirica e le grandi fiere come Vinitaly in primavera: in quei periodi prenota presto. Verona applica l'imposta di soggiorno, a persona e a notte."),

    // ——— 9 ———
    h2("Cosa mangiare a Verona"),
    p("La cucina veronese appartiene a quella veneta ma ha piatti suoi, figli della pianura, del lago e delle colline."),
    h3("Legati in particolare a Verona"),
    ul(
      "**Risotto all'Amarone** — risotto preparato con l'Amarone della Valpolicella, spesso mantecato con Monte Veronese.",
      "**Pastissada de caval** — carne di cavallo stufata a lungo nel vino rosso, piatto tradizionale veronese, di solito con la polenta.",
      "**Pearà** — salsa pepata di pane, midollo e brodo, che accompagna il bollito misto.",
      "**Gnocchi** — Verona ha una lunga tradizione carnevalesca legata agli gnocchi, che compaiono spesso sui menu.",
      "**Tortellini di Valeggio** — tortellini sottilissimi di Valeggio sul Mincio, a sud-ovest di Verona.",
      "**Pandoro** — il dolce natalizio a stella, legato a Verona, dove la produzione industriale iniziò alla fine dell'Ottocento.",
      "**Monte Veronese** — formaggio vaccino della Lessinia, le montagne a nord della città.",
    ),
    h3("Diffusi in tutto il Veneto"),
    ul(
      "**Bigoli** — spaghettoni ruvidi, con ragù d'anatra o in salsa di acciughe e cipolla.",
      "**Polenta** — con stufati di carne e formaggi.",
      "**Risotto** — in tante versioni, con il riso della pianura veronese.",
      "**Spritz e aperitivo** — il drink del tardo pomeriggio con qualche stuzzichino, diffuso in tutto il Nord-Est.",
    ),
    p("I locali intorno a piazza Bra e piazza delle Erbe sono spesso più cari; qualche via più in là, o a Veronetta e San Zeno, cambiano prezzi e atmosfera. Controlla sul menu il coperto. Per come funziona il pasto in Italia, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    {
      type: "image",
      src: `${IMG}/verona-street-life.webp`,
      alt: "Un ciclista e alcuni passanti davanti a una salumeria tradizionale con l'insegna dipinta in una via di Verona",
      caption: "Vita quotidiana in una via del centro di Verona.",
      credit: unsplash("Micaela Parente", "mparente"),
    },

    // ——— 10 ———
    h2("Le terre del vino veronese"),
    p("La provincia di Verona è una delle zone vinicole più importanti d'Italia, ma i suoi vini vengono da territori distinti:"),
    ul(
      "**Valpolicella** — le colline a nord-ovest della città, terra di Valpolicella, Ripasso, **Amarone** (rosso secco da uve messe ad appassire per alcuni mesi dopo la vendemmia) e **Recioto** (rosso dolce da uve appassite).",
      "**Soave** — le colline a est, note per il bianco da uve Garganega.",
      "**Bardolino** e **Custoza** — le sponde orientale e sud-orientale del Lago di Garda, per rossi leggeri, rosati e bianchi.",
      "**Lugana** — il bianco della sponda meridionale del Garda.",
    ),
    p("Una giornata in Valpolicella è adatta a chi si interessa di vino e paesaggio. I bus raggiungono alcuni paesi, ma le cantine sono sparse e con le degustazioni non si guida: la soluzione realistica è un tour organizzato o un autista, e la maggior parte delle cantine chiede di prenotare. Per il quadro generale, vedi [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),

    // ——— 11 ———
    h2("Verona in un giorno"),
    steps(
      ["Mattina: Arena e piazza Bra", "Visita l'Arena all'apertura (non il lunedì), poi risali via Mazzini."],
      ["Tarda mattinata: Casa di Giulietta e piazza delle Erbe", "Entra alla Casa di Giulietta dal Teatro Nuovo con l'orario prenotato, poi raggiungi piazza delle Erbe."],
      ["Pranzo", "Nelle vie intorno alle piazze; prova un risotto o i bigoli."],
      ["Pomeriggio: piazza dei Signori e il fiume", "Le Arche Scaligere, la salita alla Torre dei Lamberti, poi Ponte Pietra, il Teatro Romano e la salita a Castel San Pietro."],
      ["Sera", "Aperitivo in piazza delle Erbe o a Veronetta, e cena in centro."],
    ),

    // ——— 12 ———
    h2("Verona in due giorni"),
    p("Il primo giorno come sopra, poi:"),
    steps(
      ["Mattina: Castelvecchio", "Il museo (chiuso il lunedì) e la passeggiata sul ponte."],
      ["Tarda mattinata: San Zeno", "A piedi lungo il fiume fino alla Basilica di San Zeno, e pranzo nel quartiere."],
      ["Pomeriggio: chiese e giardini", "Sant'Anastasia e il Duomo con il biglietto di Chiese Vive, oppure il Giardino Giusti a Veronetta."],
      ["Sera", "Cena a Veronetta o a San Zeno, oppure d'estate uno spettacolo in Arena."],
    ),
    tip("Salta ciò che non ti interessa: chi ama l'arte può rinunciare alla Torre dei Lamberti per restare di più a Castelvecchio; chi ama il vino può sostituire le chiese con una degustazione in città nel tardo pomeriggio.", "Adatta il programma"),

    // ——— 13 ———
    h2("Un terzo giorno"),
    p("Il terzo giorno non deve per forza essere una gita. Puoi restare a Verona per il museo del Teatro Romano, il Giardino Giusti e le chiese meno frequentate, con calma. Oppure scegli un'escursione:"),
    ul(
      "**Lago di Garda** — la sponda meridionale è la più semplice, soprattutto Sirmione e Peschiera.",
      "**Valpolicella** — per il vino, con un tour o un autista.",
      "**Vicenza o Mantova** — per architettura e arte del Rinascimento, entrambe facili in treno.",
    ),

    // ——— 14 ———
    h2("Come muoversi a Verona"),
    p("Il centro storico è raccolto: dall'Arena a piazza delle Erbe sono circa 10 minuti a piedi, e da lì San Zeno e Veronetta si raggiungono camminando. Contano più le scarpe comode dei mezzi. **ATV** gestisce i bus urbani ed extraurbani, utili tra Porta Nuova e il centro e per le zone esterne; sul suo sito spiega come pagare con carta bancaria. I **taxi** si trovano ai posteggi, per esempio alla stazione, o si prenotano per telefono. In bici si può percorrere il lungadige, ma nella città antica il selciato e le vie pedonali rendono più comodo camminare."),
    p("L'auto in città non serve. Il centro storico, la Città Antica, è una zona a traffico limitato (ZTL) controllata da telecamere: se arrivi in auto, parcheggia fuori ed entra a piedi, e controlla le regole del Comune — soprattutto se l'alloggio è dentro la zona. Per come funzionano le ZTL leggi [guidare in Italia](/it/guide/guidare-in-italia)."),

    // ——— 15 ———
    h2("Come arrivare a Verona"),
    h3("Verona Porta Nuova"),
    p("La stazione principale, Porta Nuova, è a sud delle mura storiche, a circa 20 minuti a piedi da piazza Bra, o a pochi minuti in bus o taxi. Si trova dove la linea Milano–Venezia incrocia quella del Brennero verso Austria e Germania, ed è quindi ben collegata in tutte le direzioni."),
    h3("L'aeroporto di Verona"),
    p("L'aeroporto Valerio Catullo è a sud-ovest della città. Secondo ATV, la **navetta Airlink** collega ogni giorno l'aeroporto con la stazione di Porta Nuova in circa 15 minuti; secondo l'aeroporto, il biglietto si compra alla macchinetta nell'area arrivi o a bordo con carta bancaria. I **taxi** aspettano all'uscita degli arrivi. ATV propone anche un bus stagionale diretto dall'aeroporto a Peschiera del Garda: verifica che sia attivo per le tue date."),
    h3("In treno"),
    p("I Frecciarossa e gli Italo collegano Verona con Milano e Venezia sulla linea est–ovest, e con Bologna, Firenze e Roma verso sud; i regionali servono Vicenza, Padova, Mantova e il lago. Verifica gli orari aggiornati con gli operatori, e per biglietti e convalida leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno). Per combinare più città, vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane)."),

    // ——— 16 ———
    h2("Il Lago di Garda da Verona"),
    p("La sponda meridionale del Garda è vicina a Verona e la ferrovia Milano–Venezia la costeggia. L'alto lago è molto più lontano."),
    table(
      ["Meta", "Perché andare", "Come", "Da sapere"],
      [
        ["Peschiera del Garda", "Città fortificata all'uscita del lago (fortificazioni veneziane UNESCO)", "Treno", "La gita al lago più semplice"],
        ["Sirmione", "Il castello scaligero, il borgo e i resti della villa romana su una stretta penisola", "Treno fino a Desenzano o Peschiera, poi bus o battello", "Affollatissima d'estate: vai presto"],
        ["Desenzano del Garda", "Cittadina sul lago con il porto", "Treno", "Buona base per i battelli del basso lago"],
        ["Bardolino, Lazise, Garda", "Paesi e vino della sponda orientale", "Bus", "Calcola una giornata intera"],
        ["Malcesine, Limone, Riva", "L'alto lago, tra le montagne", "Lunghi tragitti in bus o battello", "Meglio con una notte sul posto"],
      ],
      "Il Lago di Garda da Verona"
    ),
    {
      type: "image",
      src: `${IMG}/sirmione-scaliger-castle.webp`,
      alt: "Il castello scaligero di Sirmione sul Lago di Garda, con torri merlate che si alzano dall'acqua e barche ormeggiate davanti",
      caption: "Il castello scaligero di Sirmione, sulla sponda meridionale del Garda.",
      credit: unsplash("Rachel van Elk", "vanelkphotography"),
    },
    p("I battelli pubblici sul Garda sono gestiti da [Navigazione Laghi](https://www.navigazionelaghi.it/). Le corse sono più frequenti tra tarda primavera e inizio autunno e ridotte fuori stagione: controlla l'orario in vigore. Scegli uno o due paesi invece di voler vedere tutto il lago in un giorno. Per un confronto con un altro lago, c'è la nostra guida al [Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend)."),

    // ——— 17 ———
    h2("Altre gite"),
    table(
      ["Meta", "Tipo di gita", "Perché andare", "Da sapere"],
      [
        ["Valpolicella", "Facile con un tour", "Borghi del vino e Amarone", "Tour o autista; prenota le cantine"],
        ["Vicenza", "Gita facile", "L'architettura di Palladio (UNESCO)", "Sulla linea Milano–Venezia"],
        ["Padova", "Gita facile", "Gli affreschi di Giotto nella Cappella degli Scrovegni", "La cappella va prenotata in anticipo"],
        ["Mantova", "Gita facile", "I palazzi dei Gonzaga (UNESCO)", "Treno regionale"],
        ["Venezia", "Giornata intera", "La città sulla laguna", "Possibile in treno, ma meglio con una notte"],
        ["Dolomiti", "Complicata", "Paesaggi di montagna", "Troppo lontane per una gita comoda; meglio un soggiorno dedicato"],
      ],
      "Gite da Verona"
    ),
    p("Se aggiungi Venezia, leggi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta); per la montagna c'è la nostra guida alle [Dolomiti per la prima volta](/it/guide/dolomiti-prima-volta)."),

    // ——— 18 ———
    h2("Quando andare a Verona"),
    ul(
      "**Primavera (aprile–giugno)** — piacevole per camminare e per il lago; le grandi fiere, come Vinitaly, possono riempire gli alberghi.",
      "**Estate (luglio–agosto)** — calda e la più affollata, con il festival lirico in Arena; meglio visitare la mattina presto e verso sera.",
      "**Autunno (settembre–novembre)** — vendemmia in Valpolicella e nel Soave a inizio autunno, clima più mite e strade più tranquille.",
      "**Inverno (dicembre–febbraio)** — freddo e a volte nebbioso, ma tranquillo; addobbi natalizi in piazza Bra e stagione del pandoro.",
    ),
    p("Per collocare Verona nel calendario italiano, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 19 ———
    h2("Verona per ogni tipo di viaggiatore"),
    ul(
      "**Alla prima visita in Italia** — Verona si abbina facilmente in treno a Milano e Venezia ed è un'introduzione alla storia italiana a misura d'uomo.",
      "**In coppia** — dormi in centro, sali a Castel San Pietro al tramonto e valuta una serata in Arena.",
      "**Con la famiglia** — l'Arena, le armature e i camminamenti di Castelvecchio e il lago piacciono ai bambini; il centro è raccolto.",
      "**Per chi ama la storia** — segui gli strati romani, scaligeri e veneziani dall'Arena alle Arche Scaligere e a Castelvecchio.",
      "**Per chi ama l'architettura** — San Zeno, il Castelvecchio di Scarpa e una giornata a Vicenza per Palladio.",
      "**Per chi viaggia per cibo e vino** — piatti come il risotto all'Amarone e la pearà, e una giornata in Valpolicella.",
      "**Per chi ama i musei** — Castelvecchio e il museo archeologico al Teatro Romano; ricorda le chiusure del lunedì.",
      "**Senza auto** — città, Peschiera, Sirmione, Vicenza e Mantova sono facili con i mezzi pubblici.",
      "**Verona più Venezia** — sono sulla stessa linea ferroviaria: dormi a Verona per Verona e a Venezia per Venezia, invece di un andata e ritorno di corsa.",
      "**Verona come base per il Garda** — funziona per il basso lago; per la sponda nord, meglio dormire sul lago.",
    ),

    // ——— 20 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Ridurre Verona a Giulietta.** Arena, San Zeno e Castelvecchio sono la vera storia della città.",
      "**Fermarsi a piazza Bra.** Le piazze medievali, il fiume e Veronetta sono a pochi minuti a piedi.",
      "**Saltare San Zeno.** È a breve distanza dal centro ed è uno dei gioielli della città.",
      "**Sottovalutare le camminate.** Le distanze sono brevi, ma selciato e scalini si sommano.",
      "**Voler vedere troppo del Garda.** Uno o due paesi del basso lago bastano per una giornata.",
      "**Entrare in auto nel centro storico.** È una ZTL con telecamere: prima controlla le regole.",
      "**Pensare che ogni evento in Arena funzioni allo stesso modo.** Visita al monumento, opera e concerti hanno accessi e biglietti propri.",
      "**Considerare uguali tutte le cucine del Nord.** Piatti e vini veronesi sono diversi da quelli di Venezia o del Piemonte.",
      "**Non controllare gli orari di musei ed eventi.** Molti musei civici chiudono il lunedì, e l'Arena cambia orario per gli spettacoli.",
    ),

    // ——— 21 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "verona-per-la-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Dormi nella Città Antica o vicino a piazza Bra", "Controlla le date della stagione lirica e delle fiere", "Decidi se includere Garda o Valpolicella"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota online la Casa di Giulietta", "Prenota i biglietti per uno spettacolo in Arena, se ti interessa", "Verifica treni e navetta per l'aeroporto", "Controlla la ZTL se arrivi in auto"],
        },
        {
          title: "Durante il viaggio",
          items: ["Indossa scarpe comode", "Controlla le chiusure del lunedì e gli orari dell'Arena", "Organizza battelli sul lago e trasporto per le degustazioni", "Tieni conto del caldo d'estate"],
        },
      ],
    },
    p("Aperture, regole di prenotazione, date degli eventi e collegamenti citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Possono cambiare: controllali prima di partire. Per un itinerario più ampio c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia), oltre a [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo), [Bologna in due giorni](/it/citta/bologna-in-due-giorni) e [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),
  ],

  faqs: [
    { question: "Vale la pena visitare Verona la prima volta?", answer: "Sì. Unisce un anfiteatro romano, piazze medievali, chiese romaniche e palazzi dell'epoca veneziana in un centro raccolto da girare a piedi, con cucina, vino e il Lago di Garda a portata di mano." },
    { question: "Quanti giorni servono a Verona?", answer: "Un giorno pieno basta per i luoghi principali; due permettono San Zeno, Castelvecchio e il Teatro Romano con calma. Aggiungi un terzo giorno per il Garda o la Valpolicella." },
    { question: "Verona si gira a piedi?", answer: "Sì. Il centro storico sta dentro un'ansa dell'Adige e quasi tutti i luoghi sono a meno di 20 minuti a piedi l'uno dall'altro. I bus servono per la stazione e la navetta dell'aeroporto." },
    { question: "Per che cosa è famosa Verona?", answer: "Per l'Arena e il suo festival lirico estivo, per il centro romano e medievale patrimonio UNESCO, per i monumenti scaligeri, per la tradizione di Romeo e Giulietta e per i vini della Valpolicella come l'Amarone." },
    { question: "Vale la pena visitare l'Arena di Verona?", answer: "Sì. È tra gli anfiteatri romani meglio conservati ed è ancora usata per gli spettacoli. Visita il monumento di giorno (non il lunedì) o assisti a un'opera d'estate per un'esperienza diversa." },
    { question: "La Casa di Giulietta è davvero legata a Shakespeare?", answer: "Solo per tradizione. Romeo e Giulietta sono personaggi inventati; la casa è un edificio medievale legato alla famiglia Dal Cappello e il balcone fu aggiunto nel Novecento. Oggi è un museo civico che richiede la prenotazione online." },
    { question: "Cosa non perdere a Verona?", answer: "L'Arena, piazza delle Erbe e piazza dei Signori, la Basilica di San Zeno, Castelvecchio e il suo ponte, e la vista da Castel San Pietro su Ponte Pietra." },
    { question: "Quali sono i piatti tipici di Verona?", answer: "Risotto all'Amarone, pastissada de caval, bollito con la pearà, gnocchi, tortellini di Valeggio e pandoro, accanto a classici veneti come bigoli e polenta." },
    { question: "Verona è cara?", answer: "I prezzi degli alloggi cambiano con la domanda e salgono molto durante la stagione lirica e le grandi fiere. Mangiare qualche via lontano da piazza Bra e piazza delle Erbe di solito costa meno." },
    { question: "Si può visitare Verona senza auto?", answer: "Sì. Il centro si gira a piedi ed è ZTL, dall'aeroporto c'è una navetta per la stazione e i treni raggiungono Lago di Garda, Vicenza, Padova, Mantova e Venezia." },
    { question: "Si può visitare il Lago di Garda da Verona?", answer: "Sì. Peschiera e Desenzano sono sulla ferrovia, e Sirmione è a un breve tragitto in bus o battello. I paesi dell'alto lago vanno visitati meglio con una notte sul posto." },
    { question: "Verona è una buona alternativa al soggiorno a Venezia?", answer: "È un'esperienza diversa, non un sostituto. Verona può essere una base più tranquilla in Veneto, ma Venezia si apprezza davvero dormendo almeno una notte in città." },
    { question: "Verona va bene per un weekend?", answer: "Sì. In due giorni si vedono Arena, piazze medievali, San Zeno, Castelvecchio e Teatro Romano, con il tempo per mangiare bene." },
    { question: "Si può abbinare Verona a Venezia o Milano?", answer: "Facilmente. Verona è sulla linea ferroviaria principale tra Milano e Venezia, con treni ad alta velocità in entrambe le direzioni, ed è collegata anche con Bologna, Firenze e Roma." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Musei Civici di Verona", url: "https://museicivici.comune.verona.it/", note: "Arena, Castelvecchio, musei e biglietteria" },
    { label: "Casa di Giulietta", url: "https://casadigiulietta.comune.verona.it/", note: "accesso e prenotazione obbligatoria" },
    { label: "Fondazione Arena di Verona — Opera Festival", url: "https://www.arena.it/arena-opera-festival/", note: "date del festival e biglietti" },
    { label: "Chiese Vive — le chiese storiche di Verona", url: "https://www.chieseverona.it/", note: "San Zeno, Duomo, Sant'Anastasia e San Fermo" },
    { label: "UNESCO — Città di Verona", url: "https://whc.unesco.org/en/list/797/", note: "iscrizione nella Lista del Patrimonio Mondiale" },
    { label: "ATV Verona — navetta per l'aeroporto", url: "https://www.atv.verona.it/", note: "Airlink e bus per il lago" },
    { label: "Aeroporto di Verona — trasporti", url: "https://www.aeroportoverona.it/it_it/trasporti", note: "come arrivare e partire" },
    { label: "Comune di Verona — ZTL", url: "https://www.comune.verona.it/nqcontent.cfm?a_id=30870&tt=verona_agid", note: "regole della zona a traffico limitato" },
    { label: "Navigazione Laghi — Lago di Garda", url: "https://www.navigazionelaghi.it/", note: "orari dei battelli" },
  ],
};
