import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Best Time to Visit Italy". Scritta per chi legge in
// italiano, con gli stessi dati della versione inglese: le temperature sono
// medie di lungo periodo dei valori climatici normali dell'Aeronautica
// Militare, indicate con stazione e periodo. Stagioni di impianti e rifugi e
// festività verificate a settembre 2026: vanno ricontrollate a ogni aggiornamento.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/guides/best-time-to-visit-italy";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const quandoAndareInItalia: ArticleContent = {
  body: [
    // ——— Introduzione ———
    p("«Primavera o autunno»: è la risposta che si sente più spesso quando si chiede quando andare in Italia. Per un viaggio in città è un buon punto di partenza, ma non aiuta chi vuole fare il bagno in Sardegna, camminare in quota sulle Dolomiti o sciare sulle Alpi. Tra i ghiacciai valdostani e le spiagge di Lampedusa il clima cambia radicalmente, e il periodo giusto dipende dalla destinazione, da che cosa si vuole fare, da quanto si sopportano caldo e folla e dal budget."),
    p("Questa guida non assegna un voto ai mesi. Spiega come si comportano le stagioni nelle diverse zone del Paese, che cosa aspettarsi mese per mese, quali periodi si adattano meglio a ogni regione e alle mete più visitate, e come scegliere le date in base al tipo di viaggio."),

    // ——— 1 ———
    h2("In breve: qual è il periodo migliore per andare in Italia?"),
    answer("**Non esiste un mese ideale per tutta l'Italia.** Per le città d'arte, **da aprile a giugno** e **settembre–ottobre** offrono spesso il miglior equilibrio tra clima e affollamento. **L'estate** è la stagione del mare, delle isole e dell'alta montagna, ma porta caldo in città e la massima richiesta sulle coste. **L'inverno** è adatto a musei, feste natalizie e sci, con giornate corte e molte attività balneari chiuse. Prima si sceglie la meta e il tipo di viaggio, poi il mese."),
    h3("Scegli il periodo in base al viaggio"),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Voglio il mare", title: "Da fine giugno a inizio settembre", text: "Il mare è più caldo e stabilimenti e servizi sono aperti. Giugno e settembre sono spesso più tranquilli di luglio e agosto; al Sud e sulle isole la stagione dura più a lungo." },
        { label: "Voglio città e musei", title: "Aprile–giugno e settembre–ottobre", text: "Temperature piacevoli per camminare. Anche l'inverno funziona, se non si teme il freddo del mattino: meglio evitare Natale e i ponti per trovare musei più tranquilli." },
        { label: "Voglio camminare in montagna", title: "Da fine giugno a settembre in quota", text: "Sentieri alti e rifugi aprono quando la neve si scioglie. Per colline, costa e Sud, primavera e autunno sono di solito più piacevoli della piena estate." },
        { label: "Voglio sciare", title: "Indicativamente da dicembre ad aprile", text: "Su Alpi e Dolomiti la stagione parte in genere tra fine novembre e inizio dicembre e arriva ad aprile, secondo località e neve. Le settimane più affollate sono Natale, Capodanno e le vacanze di febbraio." },
        { label: "Voglio cibo e vino", title: "Da settembre a novembre", text: "Vendemmia, poi olive, castagne, funghi e, in alcune zone, tartufi. Anche la primavera ha i suoi prodotti, con piatti più leggeri e i primi pranzi all'aperto." },
        { label: "Voglio meno folla", title: "Stagione intermedia e bassa stagione", text: "Tardo autunno, inverno (fuori dalle feste) e inizio primavera sono in genere più tranquilli; ma al mare e sulle isole molte strutture possono essere chiuse, e la montagna è tra una stagione e l'altra." },
      ],
    },
    {
      type: "image",
      src: `${IMG}/tuscany-hills-spring-wildflowers.webp`,
      alt: "Colline verdi della Toscana in primavera, con cipressi, un casale e fiori rossi nei campi",
      caption: "La Toscana in primavera. Le zone di campagna sono al massimo del verde tra aprile e inizio giugno.",
      credit: unsplash("Jacek Urbanski", "jacek24"),
    },

    // ——— 2 ———
    h2("Le stagioni in Italia in sintesi"),
    table(
      ["Stagione", "Ideale per", "Da considerare"],
      [
        ["Primavera (marzo–maggio)", "Città, campagna, giardini, passeggiate", "Tempo variabile, soprattutto a marzo; Pasqua e i ponti di aprile e maggio sono molto richiesti; gli stabilimenti balneari aprono gradualmente"],
        ["Estate (giugno–agosto)", "Mare, isole, montagna, giornate lunghe", "Caldo in città e nell'entroterra; massima richiesta e prezzi più alti sulla costa; conviene prenotare presto"],
        ["Autunno (settembre–novembre)", "Cibo e vino, città, campagna", "A settembre può fare ancora caldo; da ottobre, in gran parte d'Italia, le piogge aumentano; le giornate si accorciano"],
        ["Inverno (dicembre–febbraio)", "Città, musei, sci, atmosfera natalizia", "Giornate corte; freddo al Nord e in montagna; molte attività di mare e delle isole chiudono"],
      ],
      "Le quattro stagioni a grandi linee: non tutte le regioni seguono lo stesso schema"
    ),
    h3("Meteo e clima non sono la stessa cosa"),
    p("Il **clima** descrive l'andamento di lungo periodo: di solito medie trentennali di temperature e precipitazioni. Il **meteo** è quello che succede davvero nella settimana del viaggio. Un mese in media asciutto può portare giorni di pioggia; un ottobre «normale» può sembrare estate o già inverno. Le medie servono a scegliere la stagione; qualche giorno prima di partire conviene consultare le previsioni di un servizio meteorologico ufficiale e preparare la valigia per l'intervallo di temperature possibile, non per il valore medio."),
    h3("Temperature medie in otto città"),
    p("La tabella riporta medie di lungo periodo tratte dai valori climatici normali del Servizio Meteorologico dell'Aeronautica Militare, per la stazione e il periodo indicati. Descrivono condizioni tipiche, non quelle di un giorno preciso — e le estati recenti sono state spesso più calde di queste medie."),
    table(
      ["Stazione (periodo)", "Gennaio: minima–massima media", "Luglio: minima–massima media", "Mesi più piovosi in media"],
      [
        ["Bolzano (1961–1990)", "da −5 a 6 °C", "da 15 a 29 °C", "Luglio e agosto (temporali estivi)"],
        ["Milano Linate (1971–2000)", "da −1 a 6 °C", "da 18 a 29 °C", "Ottobre, poi settembre e maggio"],
        ["Venezia Tessera (1971–2000)", "da 0 a 7 °C", "da 18 a 28 °C", "Piogge distribuite nell'anno; un po' di più a giugno e ottobre"],
        ["Firenze Peretola (1971–2000)", "da 2 a 11 °C", "da 18 a 31 °C", "Novembre e ottobre"],
        ["Roma Ciampino (1971–2000)", "da 3 a 12 °C", "da 18 a 30 °C", "Novembre e ottobre; luglio è il mese più secco"],
        ["Napoli Capodichino (1971–2000)", "da 4 a 13 °C", "da 19 a 30 °C", "Novembre e ottobre"],
        ["Palermo Punta Raisi (1961–1990)", "da 10 a 15 °C", "da 23 a 28 °C", "Da ottobre a gennaio; estate molto secca"],
        ["Cagliari Elmas (1981–2010)", "da 5 a 14 °C", "da 20 a 31 °C", "Novembre; estate molto secca"],
      ],
      "Medie approssimative di lungo periodo, arrotondate al grado"
    ),
    p("Due cose saltano all'occhio. Il Nord ha inverni freddi e una differenza tra stagioni molto più ampia rispetto al Sud e alle isole. E non esiste una «stagione delle piogge» nazionale: a Roma, Firenze, Napoli e sulle isole l'autunno è il periodo più piovoso e l'estate il più secco, mentre sulle Alpi i temporali rendono luglio e agosto tra i mesi con più precipitazioni."),

    // ——— 3 ———
    h2("Il clima in Italia mese per mese"),
    p("Vai direttamente al mese che ti interessa, oppure usa la tabella per un confronto rapido. Ogni mese è descritto più nel dettaglio nelle sezioni dedicate alle stagioni."),
    { type: "jumpLinks", label: "Mesi", targets: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"] },
    table(
      ["Mese", "Carattere generale", "Adatto a", "Attenzione a"],
      [
        ["Gennaio", "Freddo al Nord e in montagna, mite ma non caldo al Sud", "Musei, città, sci", "Giornate corte; chiusure al mare; Capodanno ed Epifania"],
        ["Febbraio", "Ancora inverno; primi segnali di primavera al Sud", "Sci, Carnevale, città tranquille", "Settimana di Carnevale a Venezia; vacanze sulla neve"],
        ["Marzo", "Variabile, in riscaldamento", "Città, Sicilia e Sud, primi giardini", "Pioggia e ritorni di freddo; Pasqua, se cade presto"],
        ["Aprile", "Mite, verde, vivace", "Città, campagna, passeggiate", "Pasqua e 25 aprile; mare ancora fresco"],
        ["Maggio", "Caldo gradevole, giornate lunghe", "Quasi tutto, tranne lo sci", "1° maggio; gite scolastiche; richiesta in crescita"],
        ["Giugno", "Inizio dell'estate", "Mare, laghi, montagna da fine mese", "Caldo in aumento nell'entroterra; 2 giugno"],
        ["Luglio", "Caldo e soleggiato in quasi tutta Italia", "Mare, isole, alta montagna", "Caldo in città; massima richiesta sulla costa"],
        ["Agosto", "Il mese delle ferie", "Mare, montagna, feste estive", "Ferragosto; coste affollatissime; chiusure in città"],
        ["Settembre", "Ancora estate, poi più tranquillo", "Mare, città, inizio vendemmia", "Caldo nei primi giorni; temporali verso fine mese"],
        ["Ottobre", "Mite, più piovoso verso fine mese", "Cibo e vino, città, campagna", "Giornate più corte; servizi balneari in chiusura"],
        ["Novembre", "Fresco e spesso piovoso", "Città, musei, prodotti di stagione", "Pioggia; acqua alta più probabile a Venezia; chiusure al mare"],
        ["Dicembre", "Inverno, clima di festa già a inizio mese", "Viaggi natalizi, città, sci da metà mese", "Ponte dell'Immacolata e feste; giornate corte"],
      ],
      "L'Italia mese per mese: uno strumento per decidere, non una garanzia"
    ),

    // ——— 4 ———
    h2("La primavera in Italia"),
    p("In primavera gran parte dell'Italia dà il meglio di sé: le giornate si allungano in fretta, la campagna è verde e i tavolini tornano all'aperto. È però anche la stagione in cui il tempo cambia di più da una settimana all'altra, e tra Nord e Sud. Ottima per città, giardini e passeggiate; meno affidabile per il mare, mentre l'alta montagna è ancora in inverno o tra una stagione e l'altra."),
    h3("Marzo"),
    p("Marzo è un mese di passaggio. In Sicilia e nell'estremo Sud le giornate possono essere già miti, con i mandorli in fiore e i primi prati fioriti, mentre al Nord il cielo è spesso grigio e sulle Alpi si scia ancora. Pioggia e vento sono frequenti: è un mese per chi cerca musei tranquilli e prezzi più bassi, non per chi ha bisogno di un meteo prevedibile. Se Pasqua cade a marzo — la data cambia ogni anno — Roma e i luoghi più visitati saranno molto più affollati quella settimana. Molti stabilimenti balneari sono ancora chiusi."),
    h3("Aprile"),
    p("Aprile è uno dei mesi più scelti per un primo viaggio, e non per caso: temperature giuste per camminare, sere lunghe e paesaggi verdi. Sui laghi e in città fioriscono parchi e giardini. Il rovescio della medaglia è la domanda: Pasqua (nella maggior parte degli anni) e il ponte del 25 aprile portano in città e in campagna viaggiatori italiani e stranieri, e gli alberghi per quelle date si riempiono presto. Il mare è ancora freddo per la maggior parte delle persone, e qualche acquazzone va messo in conto."),
    h3("Maggio"),
    p("Maggio è forse il mese più versatile. Fa abbastanza caldo per mangiare all'aperto ovunque e per i primi bagni al Sud, mentre le città raramente sono calde quanto a luglio. Laghi, Toscana, Umbria, Costiera Amalfitana e Sicilia sono al loro meglio. Due cose da considerare: il ponte del 1° maggio e le gite scolastiche che affollano i grandi musei in primavera. I sentieri alpini più alti restano spesso innevati fino a giugno."),
    {
      type: "image",
      src: `${IMG}/varenna-lake-como.webp`,
      alt: "Le case colorate di Varenna affacciate sul Lago di Como, con barche e montagne sullo sfondo",
      caption: "Varenna, sul Lago di Como. I laghi rendono al meglio dalla primavera all'inizio dell'autunno; fuori stagione gli orari dei battelli si riducono.",
      credit: unsplash("Evan Verni", "evanv"),
    },
    p("Per un fine settimana sul lago in primavera: [il Lago di Como in un weekend](/it/viaggi/lago-di-como-weekend)."),

    // ——— 5 ———
    h2("L'estate in Italia"),
    p("L'estate è la stagione del mare, delle isole e dell'alta montagna. È anche il periodo in cui le città sono più calde, la richiesta di alloggi sulla costa è al massimo e prenotare per tempo conta di più. Intorno al solstizio di giugno, a Roma la luce dura circa quindici ore: giornate lunghissime, a patto di organizzarsi attorno alle ore più calde."),
    h3("Giugno"),
    p("Giugno unisce il clima estivo a una pressione un po' minore rispetto a luglio e agosto. Al Sud e sulle isole il mare si è già scaldato, i paesi sui laghi sono pienamente operativi e nella seconda metà del mese inizia la stagione dell'alta montagna, con l'apertura di impianti e rifugi. Le città dell'entroterra sono calde, soprattutto verso fine mese, e il ponte del 2 giugno può rendere affollato il fine settimana. Per chi vuole mare e città nello stesso viaggio, giugno è spesso un buon compromesso."),
    h3("Luglio"),
    p("Luglio è quasi ovunque soleggiato e asciutto — a Roma si contano in media un paio di giorni di pioggia — e spesso molto caldo, specie nell'entroterra e in Pianura Padana. È il mese del mare, della vela, delle isole e di Alpi e Dolomiti, dove è il cuore della stagione escursionistica (con i temporali pomeridiani da mettere in conto). Per visitare le città conviene partire presto, fermarsi nelle ore centrali e lasciare i siti all'aperto al mattino o alla sera. Sulla costa gli alloggi sono molto richiesti: meglio prenotare con largo anticipo."),
    h3("Agosto"),
    p("Agosto è il mese delle ferie per eccellenza. Molti italiani sono in vacanza nelle settimane attorno a Ferragosto, così coste, isole e località di montagna sono al massimo dell'affollamento e dei prezzi. Nello stesso periodo, in città, alcune attività chiudono per una parte del mese: meno di un tempo, ma succede ancora, soprattutto per piccoli negozi e ristoranti a conduzione familiare. Agosto è quindi poco adatto a chi cerca spiagge tranquille o prezzi bassi, e ragionevole per chi vuole località di mare vivaci, feste estive e lunghe giornate in quota — purché prenoti presto. In città fa caldo, ma il traffico quotidiano cala."),
    {
      type: "image",
      src: `${IMG}/san-vito-lo-capo-beach-summer.webp`,
      alt: "Veduta aerea della spiaggia di San Vito Lo Capo, in Sicilia, d'estate, con file di ombrelloni e acqua turchese",
      caption: "San Vito Lo Capo, in Sicilia. Sulle isole e al Sud gli stabilimenti sono pienamente aperti da giugno a settembre.",
      credit: unsplash("Paul Sebastian Saliba", "paulinpixels"),
    },
    tip("D'estate prenota il prima possibile gli alloggi sulla costa, sulle isole e in montagna, e verifica gli orari dei traghetti per le tue date. Nelle città dell'entroterra scegli una camera con aria condizionata e organizza le visite all'aperto nelle ore più fresche.", "Organizzare l'estate"),

    // ——— 6 ———
    h2("L'autunno in Italia"),
    p("L'autunno è la stagione del cibo e del vino e, per molti, il periodo più piacevole per le città. Cambia però molto tra inizio settembre e fine novembre: le prime settimane sono spesso ancora estate, mentre il tardo autunno è fresco, con giornate corte e, in gran parte d'Italia, il periodo più piovoso dell'anno."),
    h3("Settembre"),
    p("Settembre sembra spesso un agosto più gentile. Il mare è ancora caldo — a volte al suo massimo — e le spiagge si svuotano sensibilmente quando, a metà mese, riaprono le scuole nella maggior parte delle regioni. In molte zone vinicole comincia la vendemmia, e le città sono di solito più vivibili che in piena estate, anche se nella prima metà del mese può fare ancora molto caldo. I rifugi delle Dolomiti restano in genere aperti fino a fine settembre circa. Con il passare delle settimane i temporali diventano più frequenti."),
    h3("Ottobre"),
    p("Ottobre è il mese preferito da chi viaggia per mangiare bene: raccolti, menu autunnali, castagne, funghi e, in zone come il Piemonte, l'inizio della stagione del tartufo bianco. È anche un buon mese per Roma, Firenze e il Sud, di solito miti. Il limite è la pioggia: a Roma, Firenze e Napoli ottobre e novembre sono in media i mesi più piovosi. Le giornate si accorciano in fretta — soprattutto dopo il ritorno all'ora solare a fine mese — e da metà ottobre molte attività di mare e delle isole chiudono per l'inverno."),
    {
      type: "image",
      src: `${IMG}/rome-tiber-autumn.webp`,
      alt: "Alberi autunnali lungo il Tevere a Roma, con la cupola di San Pietro sullo sfondo",
      caption: "Il Tevere in autunno. A ottobre Roma è di solito mite, ma è anche uno dei mesi più piovosi.",
      credit: unsplash("Nicolò Salinetti", "nicolosali"),
    },
    h3("Novembre"),
    p("Fuori dalle feste invernali, novembre è di solito il mese più tranquillo. È fresco e spesso piovoso, soprattutto al Nord e al Centro, e molte località di mare e delle isole sono chiuse. In cambio, città calme, musei poco affollati e alloggi spesso più convenienti. È il mese dell'olio nuovo, dei tartufi e dei viaggi lenti a tavola, di una Venezia senza la folla estiva (ma con più probabilità di acqua alta) e di chi non teme l'ombrello. Il 1° novembre è festivo."),

    // ——— 7 ———
    h2("L'inverno in Italia"),
    p("In inverno l'Italia si divide nettamente. Alpi e Dolomiti sono in piena stagione sciistica, il Nord è freddo e a volte nebbioso, il Sud è mite ma non abbastanza per il mare. A Roma, intorno al solstizio di dicembre, la luce dura circa nove ore: conviene iniziare presto la giornata e chiuderla al chiuso."),
    h3("Dicembre"),
    p("A inizio dicembre la maggior parte delle città è tranquilla fino al ponte dell'Immacolata, l'8 dicembre, quando tradizionalmente si accendono le luci di Natale e molte famiglie si mettono in viaggio. I mercatini di Natale sono una tradizione soprattutto al Nord, in particolare in Trentino-Alto Adige, e molte città organizzano i propri: le date cambiano ogni anno e vanno verificate. Gli impianti sciistici aprono in genere tra fine novembre e metà dicembre, a seconda della zona e della neve. Le settimane di Natale e Capodanno sono tra le più richieste e care dell'anno, in città come in montagna."),
    h3("Gennaio"),
    p("Passata l'Epifania, gennaio è uno dei mesi più tranquilli per viaggiare in Italia — località sciistiche escluse. Musei calmi, alloggi spesso più economici e, nei negozi, i saldi invernali. Il Nord può essere freddo e nebbioso e la montagna innevata; il Sud e la Sicilia hanno giornate miti. Molti hotel sulla costa, stabilimenti e alcuni collegamenti con le isole funzionano a regime ridotto o chiudono del tutto."),
    h3("Febbraio"),
    p("Febbraio è ancora inverno, ma il Carnevale lo anima. Il più noto è quello di Venezia, che come la Pasqua cambia data ogni anno; durante il Carnevale la città è molto affollata. Le vacanze scolastiche sulla neve riempiono le località sciistiche in alcune settimane. Altrove febbraio è tranquillo, e in Sicilia e nell'estremo Sud i primi segni della primavera possono arrivare già a fine mese."),
    {
      type: "image",
      src: `${IMG}/val-di-funes-dolomites-winter.webp`,
      alt: "Un sentiero innevato con una staccionata tra gli abeti, sotto le cime frastagliate delle Dolomiti in Val di Funes",
      caption: "Nei pressi di Malga Zannes, in Val di Funes (Alto Adige). Nelle Dolomiti gli impianti aprono in genere tra fine novembre e inizio dicembre e restano aperti fino ad aprile.",
      credit: unsplash("Daniel Seßler", "danielsessler"),
    },

    // ——— 8 ———
    h2("Quando andare, regione per regione"),
    h3("L'Italia non ha un solo clima"),
    p("Più che a un unico Paese, conviene pensare a cinque grandi zone. I confini sono sfumati, e la geografia locale — quota, vicinanza al mare, una catena montuosa che fa da riparo — conta quanto la latitudine."),
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Nord", text: "Inverni freddi e spesso nebbiosi in Pianura Padana, estati calde e afose, piogge distribuite nell'anno. Primavera e autunno sono le stagioni più piacevoli per Milano, Torino, Bologna e Venezia." },
        { title: "Centro", text: "Inverni da miti a freschi ed estati calde e secche, specie nell'entroterra. L'autunno è la stagione più piovosa. Toscana, Umbria e Roma rendono al meglio in primavera e a inizio autunno." },
        { title: "Sud", text: "Inverni miti ed estati lunghe, calde e secche. La stagione balneare dura più che al Nord. Entroterra e montagne del Sud possono essere molto più freschi della costa." },
        { title: "Isole", text: "Sicilia e Sardegna hanno gli inverni più miti e le estati più secche. Il vento — il maestrale in Sardegna, lo scirocco da sud — può cambiare una giornata al mare." },
        { title: "Arco alpino", text: "Inverni lunghi e nevosi, estati brevi e i mesi più piovosi a luglio e agosto, spesso con temporali pomeridiani. Le stagioni in quota seguono impianti e rifugi più che il calendario." },
      ],
    },
    h3("Le venti regioni a confronto"),
    table(
      ["Regione", "Periodi consigliati", "Particolarmente adatta a", "Da considerare"],
      [
        ["Abruzzo", "Giugno–settembre; dicembre–marzo per la neve", "Parchi nazionali, escursioni, borghi di montagna, costa adriatica", "Inverni freddi e nevosi in quota; comprensori come Roccaraso dipendono dalla neve"],
        ["Basilicata", "Aprile–giugno, settembre–ottobre", "Matera, la costa di Maratea, il Pollino", "Estate calda a Matera; notti fredde nell'entroterra in inverno"],
        ["Calabria", "Giugno–settembre per il mare; maggio e ottobre più tranquilli", "Spiagge, Tropea, la Sila e l'Aspromonte", "Molte attività balneari sono stagionali; in montagna fa molto più fresco"],
        ["Campania", "Aprile–giugno, settembre–ottobre", "Napoli, Pompei, Costiera Amalfitana, Capri", "Traghetti e molti hotel della costa sono stagionali; luglio e agosto caldi e affollati"],
        ["Emilia-Romagna", "Aprile–giugno, settembre–ottobre; estate per la Riviera", "Bologna, Parma, Modena, la cucina; spiagge adriatiche", "Inverni nebbiosi in pianura; la Riviera romagnola è al massimo a luglio e agosto"],
        ["Friuli-Venezia Giulia", "Maggio–settembre; inverno per la montagna", "Trieste, Udine, Grado e Lignano, Alpi Giulie", "D'inverno Trieste può essere spazzata dalla bora"],
        ["Lazio", "Marzo–giugno, settembre–novembre", "Roma, Tivoli, la Tuscia, gite in giornata", "Roma è molto calda a luglio e agosto; Pasqua e i grandi eventi religiosi aumentano la richiesta"],
        ["Liguria", "Aprile–giugno, settembre–ottobre", "Cinque Terre, Genova, borghi della Riviera", "Molto affollata d'estate; le forti piogge autunnali possono far chiudere i sentieri costieri"],
        ["Lombardia", "Aprile–ottobre per i laghi; Milano in ogni stagione", "Milano, Lago di Como, Bergamo, valli alpine", "Estati calde e afose a Milano; le grandi fiere fanno salire la richiesta di hotel"],
        ["Marche", "Giugno–settembre per la costa; primavera e autunno nell'entroterra", "Urbino, il Conero, i borghi collinari", "L'entroterra è molto tranquillo in inverno"],
        ["Molise", "Maggio–ottobre", "Borghi collinari, viaggi lenti", "Trasporti pubblici limitati; paesi molto quieti in inverno"],
        ["Piemonte", "Aprile–giugno, settembre–novembre", "Torino, le Langhe, le Alpi", "L'autunno è la stagione di vendemmia e tartufo; inverni freddi e nebbiosi in pianura"],
        ["Puglia", "Maggio–giugno, settembre–inizio ottobre", "Trulli, paesi bianchi, due coste, masserie", "Agosto è il mese più affollato sulla costa; caldo nell'entroterra"],
        ["Sardegna", "Giugno e settembre per il mare; primavera per camminare", "Spiagge, vela, l'interno dell'isola", "Picco a luglio–agosto; molte attività costiere chiuse d'inverno; il maestrale può essere forte"],
        ["Sicilia", "Aprile–giugno, settembre–ottobre; estate per il mare", "Palermo, l'Etna, i templi, il barocco, le spiagge", "Caldo nell'entroterra d'estate; inverni tra i più miti d'Italia; la cima dell'Etna può essere innevata"],
        ["Toscana", "Aprile–giugno, settembre–ottobre", "Firenze, Siena, i borghi, il vino", "Estati calde nell'entroterra; Firenze è affollata gran parte dell'anno; vendemmia a settembre–ottobre"],
        ["Trentino-Alto Adige", "Fine giugno–settembre per le escursioni; dicembre–aprile per lo sci", "Dolomiti, laghi, mercatini di Natale, benessere", "Nelle mezze stagioni (primavera e novembre) chiudono impianti e diversi hotel"],
        ["Umbria", "Aprile–giugno, settembre–ottobre", "Assisi, Perugia, Orvieto, campagna", "Inverni freddi in collina; in autunno tartufi e olio nuovo"],
        ["Valle d'Aosta", "Fine giugno–settembre; dicembre–aprile per lo sci", "Monte Bianco, Gran Paradiso, escursioni, sci", "In quota la neve resiste fino a inizio estate; molti impianti chiudono tra una stagione e l'altra"],
        ["Veneto", "Aprile–giugno, settembre–ottobre; estate per le Dolomiti", "Venezia, Verona, Padova, le Dolomiti", "Venezia è più affollata a Carnevale e d'estate; acqua alta più probabile tra tardo autunno e inverno"],
      ],
      "Il periodo migliore regione per regione"
    ),
    p("Per le regioni da girare con calma su strada leggi come [guidare in Italia](/it/guide/guidare-in-italia); per quelle ben servite dalla ferrovia, come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 9 ———
    h2("Quando visitare le mete più note"),
    table(
      ["Meta", "Periodi più favorevoli", "Perché", "Da considerare"],
      [
        ["Roma", "Marzo–maggio, fine settembre–novembre", "Clima adatto a camminare tra un sito e l'altro", "Settimana di Pasqua e grandi eventi religiosi molto affollati; luglio e agosto caldi"],
        ["Firenze", "Aprile–giugno, settembre–ottobre", "Clima mite per un centro compatto da girare a piedi", "Affollata gran parte dell'anno; Uffizi e Accademia vanno prenotati"],
        ["Venezia", "Aprile–giugno, settembre–ottobre; gennaio per la tranquillità", "Piacevole per camminare e visitare le isole della laguna", "Carnevale ed estate i periodi più affollati; acqua alta più probabile tra tardo autunno e inverno; contributo d'accesso in date stabilite"],
        ["Milano", "Aprile–giugno, settembre–ottobre", "Clima mite per la città e per le gite ai laghi", "Fiere e settimane della moda riempiono gli hotel; ad agosto la città è tranquilla, con qualche chiusura"],
        ["Napoli", "Marzo–giugno, settembre–novembre", "Pompei ed Ercolano sono più vivibili fuori dalla piena estate", "Luglio e agosto molto caldi negli scavi"],
        ["Costiera Amalfitana", "Maggio–giugno, settembre–inizio ottobre", "Si fa il bagno e i traghetti sono in piena attività", "Luglio e agosto i mesi più affollati; molti hotel e collegamenti sono stagionali"],
        ["Lago di Como", "Aprile–ottobre", "Giardini, battelli e pranzi all'aperto", "In inverno gli orari dei battelli si riducono e alcuni hotel chiudono"],
        ["Toscana", "Aprile–giugno, settembre–ottobre", "Colline verdi in primavera, vendemmia in autunno", "Estati calde nell'entroterra; il Palio di Siena, a inizio luglio e a metà agosto, attira grandi folle"],
        ["Dolomiti", "Fine giugno–settembre per le escursioni; dicembre–aprile per lo sci", "Sentieri, rifugi e impianti aperti in ciascuna stagione", "Primavera e novembre sono mezze stagioni; luglio e agosto molto frequentati"],
        ["Sicilia", "Aprile–giugno, settembre–ottobre", "Visite senza il caldo di luglio; mare caldo da giugno", "Caldo nell'entroterra d'estate; inverni miti ma non da spiaggia"],
        ["Sardegna", "Giugno, settembre", "Mare caldo con meno gente che in piena estate", "Picco a luglio–agosto; molte attività sulla costa chiuse d'inverno"],
        ["Puglia", "Maggio–giugno, settembre", "Giornate calde per i paesi e la costa", "Agosto affollato di vacanzieri"],
        ["Matera", "Aprile–giugno, settembre–ottobre", "Clima adatto a scale e vicoli dei Sassi", "Pomeriggi estivi caldi; sere d'inverno fredde"],
      ],
      "Le mete più visitate e i periodi più favorevoli"
    ),
    p("Per la montagna, in particolare, vedi [le Dolomiti per la prima volta](/it/guide/dolomiti-prima-volta)."),
    {
      type: "image",
      src: `${IMG}/cala-di-volpe-sardinia.webp`,
      alt: "Veduta aerea di una baia riparata con acqua turchese e una barca ormeggiata a Cala di Volpe, in Sardegna",
      caption: "Cala di Volpe, sulla costa nord-orientale della Sardegna. Giugno e settembre sono spesso più tranquilli della piena estate.",
      credit: unsplash("Nicolò Canu", "nicontents"),
    },

    // ——— 10 ———
    h2("Il periodo giusto per ogni tipo di viaggio"),
    h3("Città d'arte e musei"),
    p("Per Roma, Firenze, Venezia, Napoli e Milano, primavera (aprile–giugno) e inizio autunno (settembre–ottobre) offrono di solito il clima più adatto a camminare. L'inverno è un'alternativa valida per un viaggio centrato sui musei: giornate corte e mattine fredde, ma code più brevi fuori dalle feste. D'estate si può fare, con partenze all'alba e una lunga pausa a pranzo, ma il caldo rende faticosi i siti all'aperto come il Foro Romano o Pompei."),
    h3("Mare"),
    p("La stagione balneare vera e propria va da fine giugno a inizio settembre, quando il mare è caldo e stabilimenti, traghetti e ristoranti sul mare sono pienamente aperti. Giugno e la prima metà di settembre sono di solito più tranquilli di luglio e agosto. In Sicilia, in Sardegna e nell'estremo Sud la stagione dura più che sull'Adriatico settentrionale o in Liguria. Fuori dall'estate molte attività sulla costa riducono gli orari o chiudono: verificalo prima di organizzare un viaggio al mare in primavera o in autunno."),
    h3("Escursionismo"),
    p("Su Alpi e Dolomiti la stagione dell'alta montagna va in genere da fine giugno a fine settembre, quando i sentieri sono liberi dalla neve e i rifugi aperti; le date esatte cambiano ogni anno con l'innevamento. Per camminare sulle colline di Toscana e Umbria, in Liguria, al Sud e sulle isole, primavera e autunno sono di solito migliori della piena estate, quando caldo e sentieri senz'ombra rendono pesanti le camminate lunghe. Controlla sempre condizioni e chiusure locali."),
    {
      type: "image",
      src: `${IMG}/dolomites-meadow-rocca-pietore.webp`,
      alt: "Un prato alpino verde con rocce e conifere sotto le cime delle Dolomiti, vicino a Rocca Pietore, d'estate",
      caption: "Prati estivi vicino a Rocca Pietore, nelle Dolomiti. La stagione escursionistica segue la neve, non il calendario.",
      credit: unsplash("Tomáš Hirsch", "tomashirsch"),
    },
    h3("Sci"),
    p("Su Alpi e Dolomiti si scia in genere da fine novembre o dicembre fino ad aprile, secondo località, quota e neve. Il comprensorio Dolomiti Superski, per esempio, negli ultimi anni ha aperto i primi impianti a fine novembre e ha tenuto aperte alcune zone fino ad aprile. Gennaio (dopo l'Epifania) e marzo sono spesso meno affollati del periodo natalizio e delle settimane bianche di febbraio. Sugli Appennini, per esempio a Roccaraso in Abruzzo, le stagioni sono più brevi e meno prevedibili."),
    h3("Cibo e vino"),
    p("L'autunno è la stagione più ricca per chi viaggia per la tavola: la vendemmia (di solito tra settembre e ottobre), poi le olive e l'olio nuovo, le castagne, i funghi e, in Piemonte e in parte del Centro, i tartufi. Tra estate e autunno molti paesi organizzano sagre: controlla il calendario locale per le tue date. Anche la primavera ha il suo fascino — carciofi, fave, asparagi e i primi pranzi all'aperto — ed è meno piovosa del tardo autunno."),
    h3("Viaggi in auto"),
    p("Per gli itinerari su strada in Toscana, Puglia, Sicilia o Sardegna, maggio–giugno e settembre–ottobre uniscono giornate lunghe a meno traffico che ad agosto. In montagna alcuni passi alti sono aperti solo d'estate, e dal 15 novembre al 15 aprile, dove indicato, servono pneumatici invernali o catene a bordo. Prima di partire leggi come [guidare in Italia](/it/guide/guidare-in-italia)."),
    h3("Famiglie"),
    p("La maggior parte delle famiglie viaggia durante le vacanze scolastiche, quindi d'estate e a Pasqua. Chi ha un po' di flessibilità trova a giugno e a inizio settembre caldo e meno pressione che a luglio e agosto. Montagna d'estate, laghi a fine primavera e località di mare a giugno si prestano bene ai viaggi con bambini. In città, a luglio e agosto, meglio evitare le ore centrali con i più piccoli."),
    h3("Budget contenuto"),
    p("L'alloggio, di solito la voce più alta, costa in genere meno in bassa e media stagione: novembre, gennaio (località sciistiche escluse), buona parte di febbraio e marzo, oltre alle settimane a ridosso dell'alta stagione estiva. I prezzi cambiano molto a seconda della meta e delle date: conviene confrontare quelli reali per il proprio viaggio. Per un quadro delle voci di spesa: [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia)."),
    h3("Evitare i periodi più affollati"),
    p("Dipende dalla meta. In linea generale le città sono più tranquille a novembre, gennaio e inizio febbraio (fuori da feste ed eventi); la costa e le isole nei mesi in cui molte attività sono chiuse; la montagna tra la stagione dello sci e quella delle escursioni. I periodi più affollati sono Pasqua, i ponti di aprile e maggio, luglio e agosto sulla costa, Ferragosto, le feste natalizie e i grandi eventi."),

    // ——— 11 ———
    h2("Alta, media e bassa stagione"),
    p("In Italia le stagioni turistiche non seguono un calendario unico. Agosto è alta stagione su una spiaggia sarda e un mese relativamente tranquillo per gli hotel d'affari di Milano; febbraio è bassa stagione in Sicilia e alta stagione in una località sciistica. Questi termini vanno riferiti a ogni singola meta, non al Paese intero."),
    h3("Alta stagione"),
    p("Il periodo di massima richiesta per un certo luogo: l'estate al mare e sulle isole, le vacanze sulla neve in montagna, Pasqua, i fine settimana primaverili e buona parte dell'estate nelle grandi città. Prezzi più alti, treni più pieni e la necessità di prenotare in anticipo."),
    h3("Stagione intermedia"),
    p("Le settimane prima e dopo l'alta stagione: di solito primavera e inizio autunno in città e al mare, tarda primavera o inizio autunno in montagna. Il clima è spesso buono e la richiesta più bassa, ma varia molto: inizio giugno in Costiera Amalfitana è già estate, mentre nelle Dolomiti più alte può voler dire ancora neve sui sentieri."),
    h3("Bassa stagione"),
    p("I mesi più tranquilli per una meta. Alloggi spesso più convenienti e luoghi più calmi, ma alcuni hotel, ristoranti, traghetti e impianti chiudono o riducono il servizio, soprattutto sulla costa, sulle isole e in montagna tra una stagione e l'altra."),
    table(
      ["Stagione", "Caratteristiche tipiche", "Per chi è più adatta"],
      [
        ["Alta", "Condizioni migliori per l'attività principale; massima richiesta e prezzi; tutto aperto", "Chi è legato alle vacanze scolastiche; viaggi al mare e sulla neve; chi cerca località vivaci"],
        ["Intermedia", "Clima buono ma meno prevedibile; richiesta moderata; quasi tutto aperto", "Chi ha date flessibili; viaggi in città e in campagna; escursionisti"],
        ["Bassa", "Luoghi più tranquilli e prezzi più bassi; giornate corte; alcune chiusure", "Chi punta sui musei o ha un budget contenuto; chi preferisce la calma al sole"],
      ],
      "Alta, media e bassa stagione a confronto"
    ),

    // ——— 12 ———
    h2("Come la stagione cambia l'itinerario"),
    p("Lo stesso percorso può funzionare in modo molto diverso secondo il mese. Questi esempi mostrano il ragionamento da fare; per itinerari completi c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
    h3("Sette giorni in primavera"),
    p("La primavera si presta a una settimana dedicata alle città — per esempio Roma, Firenze e Venezia — perché le temperature permettono lunghe giornate a piedi. Le variabili da gestire sono domanda e pioggia: verifica se Pasqua o il 25 aprile cadono nella tua settimana, prenota presto i musei a orario e tieni per ogni giorno un'alternativa al chiuso. Se vuoi anche il mare, il Sud e la Sicilia si scaldano prima del Nord."),
    h3("Dieci giorni in estate"),
    p("D'estate conviene ribaltare la logica abituale: le giornate più calde al mare, sui laghi o in montagna, le città in soggiorni brevi, con le visite al mattino presto e alla sera. Un viaggio di dieci giorni potrebbe unire qualche giorno in città a un soggiorno più lungo sulla costa o nelle Dolomiti. Prenota presto alloggi e traghetti, e metti in conto che luglio e agosto sono i mesi più affollati nella maggior parte delle località di vacanza."),
    h3("Quattordici giorni in autunno"),
    p("L'autunno premia un percorso più lento, che segue i raccolti: le città nei primi giorni, poi le zone del vino e della buona tavola — Toscana, Umbria o Piemonte — e magari il Sud, dove il caldo dura di più. Tra fine ottobre e novembre, aspettati giornate più corte e più pioggia, verifica che gli hotel sulla costa siano ancora aperti e prevedi alternative al chiuso."),

    // ——— 13 ———
    h2("Cosa mettere in valigia"),
    p("Prepara la valigia per la stagione e la regione in cui andrai, non per la fama di Paese soleggiato — e controlla le previsioni qualche giorno prima di partire."),
    h3("In primavera"),
    table(
      ["Cosa", "Perché"],
      [
        ["Abbigliamento a strati e una giacca leggera", "Mattine e sere possono essere fresche, i pomeriggi caldi"],
        ["Ombrello pieghevole o giacca impermeabile", "Gli acquazzoni sono frequenti, soprattutto a marzo e aprile"],
        ["Scarpe comode", "Sampietrini, scalinate e lunghe giornate di visite"],
        ["Occhiali da sole e crema solare", "Da aprile il sole è forte, specie al Sud"],
      ]
    ),
    h3("In estate"),
    table(
      ["Cosa", "Perché"],
      [
        ["Capi leggeri e traspiranti", "Caldo in città e nell'entroterra"],
        ["Un capo che copra spalle e ginocchia", "Richiesto in molte chiese — e utile con l'aria condizionata"],
        ["Protezione solare e una borraccia", "Giornate lunghe e calde all'aperto"],
        ["Uno strato caldo e un impermeabile per la montagna", "In quota può fare freddo e piovere anche a luglio"],
      ]
    ),
    h3("In autunno"),
    table(
      ["Cosa", "Perché"],
      [
        ["Strati, dalla maglietta al maglione", "Settembre può essere caldo, novembre è fresco"],
        ["Giacca impermeabile e scarpe adatte alla pioggia", "Ottobre e novembre sono mesi piovosi in gran parte d'Italia"],
        ["Scarpe comode con una buona suola", "Con la pioggia le strade in pietra diventano scivolose"],
      ]
    ),
    h3("In inverno"),
    table(
      ["Cosa", "Perché"],
      [
        ["Cappotto, berretto e guanti", "Freddo al Nord, in montagna e, la sera, un po' ovunque"],
        ["Scarpe impermeabili", "Pioggia, nebbia e, a Venezia, possibile acqua alta"],
        ["Attrezzatura adatta all'attività in montagna", "Nella maggior parte delle località si può noleggiare sul posto"],
      ]
    ),

    // ——— 14 ———
    h2("Festività, ponti e chiusure stagionali"),
    p("Festività, vacanze scolastiche e grandi eventi possono incidere su disponibilità e prezzi più del meteo. Le festività nazionali sono fissate per legge; la Pasqua cambia data ogni anno, e ogni città celebra anche il proprio santo patrono. E quando una festa cade vicino al fine settimana, il ponte fa il resto."),
    table(
      ["Data", "Festività", "Che cosa comporta per chi viaggia"],
      [
        ["1° gennaio", "Capodanno", "Mattinata tranquilla; alcuni luoghi chiusi"],
        ["6 gennaio", "Epifania", "Fine delle vacanze natalizie; giornate di rientro affollate"],
        ["Marzo o aprile (variabile)", "Pasqua e Lunedì dell'Angelo", "Uno dei periodi più affollati per le città, Roma in particolare"],
        ["25 aprile", "Festa della Liberazione", "Spesso un ponte; richiesta elevata"],
        ["1° maggio", "Festa del Lavoro", "Ponti e alcune chiusure"],
        ["2 giugno", "Festa della Repubblica", "Ponti; celebrazioni a Roma"],
        ["15 agosto", "Ferragosto (Assunzione)", "Culmine delle ferie estive; coste affollate e chiusure in città"],
        ["1° novembre", "Ognissanti", "Un ponte per molti"],
        ["8 dicembre", "Immacolata Concezione", "Inizio del periodo natalizio; fine settimana affollato"],
        ["25–26 dicembre", "Natale e Santo Stefano", "Chiusure a Natale; richiesta alta per tutto il periodo delle feste"],
      ],
      "Le festività nazionali in Italia"
    ),
    p("Tra le feste patronali più sentite: il 24 giugno (San Giovanni) a Firenze, il 29 giugno (Santi Pietro e Paolo) a Roma e il 7 dicembre (Sant'Ambrogio) a Milano. Carnevale, grandi festival, fiere ed eventi sportivi possono riempire gli alberghi. Prima di prenotare, controlla che cosa succede nella tua destinazione nelle date esatte del viaggio."),
    important("Le date di apertura di stabilimenti balneari, traghetti, impianti e rifugi cambiano ogni anno. Verifica sul sito dell'operatore o della struttura invece di dare per scontato che un servizio sia attivo.", "Servizi stagionali"),
    p("La nostra [checklist per organizzare un viaggio in Italia](/it/guide/checklist-viaggio-italia) mette in ordine tutti i passaggi della prenotazione."),

    // ——— 15 ———
    h2("Errori comuni"),
    ol(
      "**Pensare che in tutta Italia faccia lo stesso tempo.** Milano a gennaio e Palermo a gennaio sono due viaggi completamente diversi.",
      "**Scambiare le medie per garanzie.** Le medie descrivono condizioni tipiche; prima di partire contano le previsioni.",
      "**Organizzare una vacanza al mare senza verificare le aperture.** In primavera e a fine autunno molti stabilimenti, hotel e traghetti sono chiusi o a regime ridotto.",
      "**Sottovalutare la montagna.** Sui sentieri alti la neve può resistere fino a giugno, e impianti e rifugi chiudono tra una stagione e l'altra.",
      "**Visitare le grandi città senza pensare al caldo.** A luglio e agosto i siti all'aperto vanno visti al mattino e alla sera.",
      "**Pensare che la stagione intermedia sia uguale ovunque.** Inizio giugno è estate in Costiera Amalfitana e tarda primavera sulle Alpi.",
      "**Dimenticare le ore di luce.** Una giornata di dicembre a Roma dura circa sei ore meno di una di giugno.",
      "**Non controllare festività e ponti.** Pasqua, i ponti e Ferragosto cambiano disponibilità e prezzi.",
      "**Prenotare tardi nei periodi di punta.** L'estate al mare, le settimane bianche e la Pasqua a Roma si riempiono presto.",
      "**Fare la valigia per la fama del Paese e non per la stagione.** Fuori dall'estate servono strati e qualcosa per la pioggia."
    ),

    // ——— 16 ———
    h2("Tabella mese per mese per organizzarsi"),
    p("Da usare insieme alla tabella sul clima: qui l'attenzione è su richiesta, prenotazioni e date da verificare."),
    table(
      ["Mese", "Richiesta (varia secondo la meta)", "Da prenotare presto", "Date da verificare"],
      [
        ["Gennaio", "Bassa in città; alta nelle località sciistiche", "Alloggi sulla neve", "Capodanno, Epifania, saldi"],
        ["Febbraio", "Bassa in città; alta in montagna e a Venezia per Carnevale", "Venezia a Carnevale; settimane bianche", "Date del Carnevale; vacanze scolastiche sulla neve"],
        ["Marzo", "In crescita", "Roma, se Pasqua cade presto", "Data di Pasqua"],
        ["Aprile", "Alta in città", "Hotel in città, musei a orario", "Pasqua, 25 aprile"],
        ["Maggio", "Alta", "Costiera Amalfitana, laghi, Firenze", "1° maggio, ponti"],
        ["Giugno", "Alta e in crescita sulla costa", "Mare e isole, traghetti", "2 giugno; inizio della stagione in quota"],
        ["Luglio", "Massima sulla costa e in montagna", "Alloggi al mare e in montagna, traghetti, auto a noleggio", "Feste ed eventi locali"],
        ["Agosto", "Massima sulla costa; variabile in città", "Tutto ciò che riguarda il mare, il prima possibile", "Ferragosto; chiusure in città"],
        ["Settembre", "Alta all'inizio, poi in calo", "Mare a inizio mese; città", "Fiere; fine della stagione dei rifugi"],
        ["Ottobre", "Moderata", "Zone del vino e della buona tavola nei fine settimana", "Sagre e feste della vendemmia; chiusure sulla costa"],
        ["Novembre", "Bassa quasi ovunque", "Poco da prenotare con anticipo", "1° novembre; chiusure al mare e in montagna"],
        ["Dicembre", "Bassa all'inizio; altissima durante le feste", "Località sciistiche e città per le feste", "8 dicembre, Natale, Capodanno"],
      ],
      "Tabella di pianificazione mese per mese"
    ),
    p("Le regole, i periodi di apertura e le medie citate in questa guida sono stati verificati sulle fonti indicate qui sotto a settembre 2026. Le condizioni cambiano di anno in anno: prima di partire controlla le previsioni e le informazioni degli operatori."),
  ],

  faqs: [
    { question: "Qual è il mese migliore per andare in Italia?", answer: "Non ce n'è uno valido per tutta l'Italia. Per le città, aprile, maggio, giugno, settembre e ottobre sono spesso i più piacevoli; per il mare, da fine giugno a inizio settembre; per le escursioni su Alpi e Dolomiti, da luglio a settembre; per lo sci, da dicembre a marzo. Prima si sceglie la meta e il tipo di viaggio." },
    { question: "Aprile è un buon mese per andare in Italia?", answer: "Sì, per città e campagna. Aprile è di solito mite e verde, con giornate lunghe, anche se gli acquazzoni sono frequenti e il mare è ancora freddo. Pasqua e il 25 aprile rendono affollate alcune settimane: se le tue date le includono, prenota presto." },
    { question: "Maggio è un buon mese per andare in Italia?", answer: "Sì, è uno dei mesi più versatili. Fa abbastanza caldo per mangiare all'aperto ovunque e per i primi bagni al Sud, senza il caldo estivo in città. Aspettati musei affollati e il ponte del 1° maggio; in alta quota può esserci ancora neve." },
    { question: "Giugno è un buon mese per andare in Italia?", answer: "Sì, soprattutto per unire città e mare o montagna. La stagione balneare è avviata e nella seconda metà del mese inizia quella dell'alta montagna. Verso fine giugno le città dell'entroterra si scaldano e la richiesta sulla costa cresce." },
    { question: "A luglio in Italia fa troppo caldo?", answer: "Per visitare le città può esserlo. Luglio è caldo in quasi tutta Italia, in particolare nell'entroterra e in Pianura Padana, e le estati recenti sono state spesso più calde delle medie di lungo periodo. È invece un buon mese per costa, isole e montagna; in città conviene visitare al mattino presto e alla sera." },
    { question: "Agosto è un buon periodo per andare in Italia?", answer: "Dipende dal viaggio. Agosto va bene per chi cerca località di mare vivaci, feste estive e montagna, e prenota per tempo. È meno adatto a chi vuole spiagge tranquille o prezzi bassi: è il mese delle ferie e intorno a Ferragosto in città alcune attività chiudono." },
    { question: "Settembre è un buon mese per andare in Italia?", answer: "Sì, per molti tipi di viaggio. Il mare è ancora caldo, dopo metà mese le spiagge si svuotano, inizia la vendemmia e le città sono più vivibili che in piena estate. Nella prima metà può fare ancora molto caldo e verso fine mese aumentano i temporali." },
    { question: "Ottobre è un buon mese per andare in Italia?", answer: "Sì, in particolare per cibo e vino e per le città del Centro e del Sud. Ottobre è di solito mite, ma è tra i mesi più piovosi a Roma, Firenze e Napoli, le giornate si accorciano e molte attività sulla costa iniziano a chiudere." },
    { question: "Vale la pena visitare l'Italia d'inverno?", answer: "Sì, per città, musei, feste natalizie e sci. L'inverno porta giornate corte, freddo al Nord e in montagna e chiusure su coste e isole, ma fuori dalle feste le città sono più tranquille e gli alloggi spesso più economici." },
    { question: "Qual è la stagione delle piogge in Italia?", answer: "In Italia non esiste un'unica stagione delle piogge. A Roma, Firenze, Napoli e sulle isole i mesi più piovosi sono di solito ottobre e novembre e l'estate è la stagione più secca. Sulle Alpi, invece, luglio e agosto sono tra i mesi più piovosi per via dei temporali estivi." },
    { question: "Quando l'Italia è meno affollata?", answer: "Dipende dalla meta. Le città sono di solito più tranquille a novembre, gennaio e inizio febbraio, fuori da feste ed eventi. Coste e isole lo sono d'inverno, quando molte attività sono chiuse, e la montagna tra la stagione dello sci e quella delle escursioni." },
    { question: "Qual è il periodo più economico per andare in Italia?", answer: "In genere la bassa stagione della meta scelta: spesso novembre, gennaio e febbraio, località sciistiche e feste escluse. I prezzi variano molto secondo luogo, tipo di alloggio e date, quindi conviene confrontare quelli reali per il proprio viaggio." },
    { question: "Quando andare in Costiera Amalfitana?", answer: "Maggio–giugno e settembre–inizio ottobre sono spesso il miglior equilibrio: si fa il bagno, i traghetti stagionali sono attivi e c'è meno pressione che a luglio e agosto. Molti hotel e collegamenti sono stagionali, quindi un viaggio d'inverno va verificato." },
    { question: "Quando andare in Sicilia?", answer: "Aprile–giugno e settembre–ottobre sono ideali per visite e camminate; da giugno a settembre per il mare. La Sicilia ha gli inverni più miti d'Italia, il che la rende una delle scelte migliori per un viaggio invernale, anche se non da spiaggia." },
    { question: "Quando andare nelle Dolomiti?", answer: "Da fine giugno a settembre per le escursioni, quando i sentieri sono liberi e i rifugi aperti, e indicativamente da dicembre ad aprile per lo sci. Primavera e novembre sono mezze stagioni, con molti impianti e alcuni hotel chiusi." },
    { question: "Quando andare in Toscana?", answer: "Aprile–giugno e settembre–ottobre. In primavera colline verdi e campi fioriti, in autunno la vendemmia. D'estate fa caldo nell'entroterra, e Firenze è affollata per buona parte dell'anno." },
    { question: "Quando andare a Roma?", answer: "Marzo–maggio e fine settembre–novembre offrono di solito un clima adatto a spostarsi a piedi tra un sito e l'altro. Luglio e agosto sono caldi, e la settimana di Pasqua è molto affollata." },
    { question: "Quando andare a Venezia?", answer: "Aprile–giugno e settembre–ottobre sono piacevoli per camminare e visitare le isole della laguna; gennaio e inizio dicembre sono tranquilli. Carnevale ed estate sono i periodi più affollati, e l'acqua alta è più probabile tra tardo autunno e inverno." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Aeronautica Militare — Servizio Meteorologico", url: "https://www.meteoam.it/it/home", note: "previsioni e valori climatici normali (Atlante climatico d'Italia)" },
    { label: "Italia.it — portale ufficiale del turismo in Italia", url: "https://www.italia.it/it", note: "informazioni su regioni e destinazioni" },
    { label: "Comune di Venezia — Centro Previsioni e Segnalazioni Maree", url: "https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree", note: "acqua alta" },
    { label: "Comune di Venezia — Contributo d'Accesso", url: "https://cda.ve.it/it/", note: "date del contributo per i visitatori giornalieri" },
    { label: "Dolomiti Superski", url: "https://www.dolomitisuperski.com/it", note: "date della stagione sciistica" },
    { label: "ACI — Codice della Strada, art. 6", url: "https://aci.gov.it/codice-della-strada/art-6/", note: "pneumatici invernali o catene dove previsto da ordinanza" },
  ],
};
