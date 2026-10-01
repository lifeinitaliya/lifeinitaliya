import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Naples for First-Time Visitors", scritta per chi legge
// in italiano. Musei, parchi archeologici e trasporti sono stati verificati sui
// siti ufficiali a settembre 2026. Prezzi, orari e date non vengono citati.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const ol = (...items: string[]): ContentBlock => ({ type: "list", ordered: true, items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const IMG = "/images/cities/naples-first-visit";
const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const napoliPerLaPrimaVolta: ArticleContent = {
  body: [
    // ——— Apertura ———
    p("Napoli è la terza città d'Italia per numero di abitanti e una delle più antiche. Il centro storico, Patrimonio dell'Umanità UNESCO dal 1995, segue ancora il tracciato della greca Neapolis; il Museo Archeologico custodisce gran parte di ciò che è emerso a Pompei ed Ercolano; e qui è nata la pizza come la conosce il mondo. Ed è la porta naturale verso Pompei, Ercolano, Sorrento, Capri e la Costiera Amalfitana."),
    answer("**Napoli è adatta a un primo viaggio in Italia** se ti interessano storia, archeologia, cucina e città con un carattere forte. **Due o tre giorni** bastano per il centro storico, un grande museo e il lungomare; con quattro o cinque si aggiungono Pompei o Ercolano e un'altra gita. **L'auto non serve**: il centro si gira a piedi, e per le distanze più lunghe ci sono metropolitana, funicolari e treni regionali. Prenota per tempo la Cappella Sansevero, controlla i siti ufficiali dei parchi archeologici prima di una gita e scegli una base ben collegata alla metro o alla stazione."),
    {
      type: "facts",
      title: "Napoli in sintesi",
      rows: [
        { label: "Durata consigliata per la prima visita", value: "2–3 giorni; 4–5 con le gite" },
        { label: "Ideale per", value: "Storia, archeologia, cucina, cultura e gite nei dintorni" },
        { label: "Arrivi principali", value: "Stazione di Napoli Centrale e Aeroporto Internazionale di Napoli (Capodichino)" },
        { label: "Come muoversi", value: "A piedi, con metropolitana, funicolari e autobus" },
        { label: "Serve l'auto?", value: "Di solito no, per un soggiorno in città" },
        { label: "Meta principale nei dintorni", value: "Pompei, raggiungibile in treno regionale" },
        { label: "Da abbinare in un viaggio più lungo", value: "Pompei, Ercolano, Sorrento, Costiera Amalfitana, Capri, Caserta" },
        { label: "Numero di emergenza", value: "112" },
      ],
    },

    // ——— 1 ———
    h2("Vale la pena visitare Napoli?"),
    p("Per molti viaggiatori, sì. I punti di forza di Napoli sono inconfondibili:"),
    ul(
      "**Il centro storico** — una fitta trama di strade, chiese, chiostri e palazzi disegnata sul tracciato della città antica.",
      "**L'archeologia** — il Museo Archeologico Nazionale è una delle più importanti raccolte di arte romana al mondo, e Pompei ed Ercolano sono a due passi.",
      "**Arte e architettura** — dalle chiese medievali al Barocco, con la Cappella Sansevero e il museo di Capodimonte.",
      "**La cucina** — pizza, pasticceria, caffè e una solida tradizione casalinga.",
      "**Il mare** — il lungomare e la vista sul golfo fino al Vesuvio.",
      "**La posizione** — una base pratica per i luoghi più importanti della Campania.",
    ),
    p("È una città grande e viva, non un piccolo museo a cielo aperto, e in alcune zone è in salita. Chi preferisce strade tranquille, un centro storico raccolto o un soggiorno soprattutto di relax al mare potrebbe trovarsi meglio con un'altra base, come Sorrento, per un viaggio più lento intorno al golfo."),
    {
      type: "image",
      src: `${IMG}/naples-historic-centre-rooftops.webp`,
      alt: "Il centro storico di Napoli visto dall'alto, attraversato dalla lunga strada rettilinea di Spaccanapoli",
      caption: "Il centro storico dalla collina. La linea dritta al centro è Spaccanapoli, che ricalca il tracciato di un'antica strada.",
      credit: unsplash("Gherardo Sava", "gherardo_sava"),
    },

    // ——— 2 ———
    h2("Quanti giorni servono a Napoli?"),
    table(
      ["Durata", "Che cosa permette", "Compromessi"],
      [
        ["1 giorno", "Il cuore del centro storico, un luogo importante e una pizza", "Non c'è tempo anche per il Museo Archeologico e il lungomare"],
        ["2 giorni", "I luoghi principali, la cucina e più di un quartiere", "Pompei occuperebbe uno dei due giorni"],
        ["3 giorni", "Napoli con il Museo Archeologico e un ritmo più lento, oppure una gita", "Di solito la prima visita più equilibrata"],
        ["4–5 giorni", "Napoli più Pompei o Ercolano e un'altra meta vicina", "Meglio scegliere tra Capri, Sorrento e Costiera che fare tutte e tre"],
      ],
      "Quanto fermarsi a Napoli"
    ),
    p("Napoli premia chi si ferma. I luoghi da vedere sono vicini, ma le strade sono affollate e molte chiese e musei chiudono a metà giornata o in giorni fissi: un programma più lento, di solito, fa vedere di più. Le gite occupano ciascuna una giornata intera, quindi vanno contate a parte rispetto ai giorni in città."),

    // ——— 3 ———
    h2("Cosa vedere a Napoli"),
    p("Prezzi e orari cambiano, e alcuni luoghi chiudono in un giorno fisso della settimana: controlla il sito ufficiale prima di andare."),
    h3("Spaccanapoli e il centro storico"),
    p("Spaccanapoli è il nome popolare della lunga strada rettilinea — via Benedetto Croce e via San Biagio dei Librai — che attraversa il centro storico ricalcando un'antica strada. Percorrerla, insieme alla parallela via dei Tribunali, è il modo migliore per entrare in città: chiese, palazzi, botteghe e negozi di alimentari si susseguono lungo il cammino. Calcola mezza giornata. È gratuito e adatto a tutti."),
    h3("Via dei Tribunali e San Gregorio Armeno"),
    p("Via dei Tribunali, l'altra grande strada del tracciato antico, è nota per le chiese e le pizzerie. A due passi, via San Gregorio Armeno è la strada delle botteghe che realizzano le figure del presepe, un artigianato tipicamente napoletano. Affollata tutto l'anno e soprattutto nel periodo natalizio."),
    h3("Il Duomo"),
    p("La Cattedrale è dedicata a San Gennaro, patrono della città, la cui cappella è uno dei luoghi religiosi più importanti di Napoli; il Tesoro di San Gennaro è esposto nel museo accanto. Calcola circa un'ora. Interessa in particolare chi ama la storia religiosa e l'arte barocca."),
    h3("Santa Chiara"),
    p("Il complesso monumentale di Santa Chiara è celebre per il chiostro decorato con maioliche, un'oasi di quiete nel centro. La chiesa è gratuita; chiostro e museo sono a pagamento. Calcola circa un'ora."),
    h3("La Cappella Sansevero"),
    p("La piccola cappella custodisce il Cristo velato di Giuseppe Sanmartino, un marmo del Settecento in cui la figura sembra distesa sotto un velo trasparente. Secondo il museo la capienza è limitata, la prenotazione sul sito ufficiale è fortemente consigliata e i biglietti non si possono modificare né rimborsare; chi arriva in ritardo può perdere l'ingresso. La visita in sé è breve, 30–45 minuti. Prenota con anticipo, soprattutto nei fine settimana."),
    h3("Piazza del Plebiscito, Palazzo Reale e il San Carlo"),
    p("Piazza del Plebiscito, una delle più grandi della città, è chiusa dalla chiesa di San Francesco di Paola e dal Palazzo Reale, visitabile come museo. Accanto, il Teatro di San Carlo, inaugurato nel 1737, propone visite guidate oltre agli spettacoli: verifica sul sito ufficiale. Calcola una o due ore per la zona, di più con il palazzo."),
    {
      type: "image",
      src: `${IMG}/piazza-del-plebiscito.webp`,
      alt: "Piazza del Plebiscito a Napoli con il colonnato e la cupola della chiesa di San Francesco di Paola",
      caption: "Piazza del Plebiscito e San Francesco di Paola. Sul lato opposto della piazza si trova il Palazzo Reale.",
      credit: unsplash("Christos Christou", "ochristosdemeneipiaedw"),
    },
    h3("La Galleria Umberto I"),
    p("Una galleria commerciale coperta in vetro e ferro di fine Ottocento, di fronte al Teatro di San Carlo. Si attraversa in pochi minuti ed è gratuita: piacerà a chi ama l'architettura, ed è una buona pausa caffè tra il centro storico e il mare."),
    {
      type: "image",
      src: `${IMG}/galleria-umberto-i.webp`,
      alt: "La cupola in vetro e ferro della Galleria Umberto I a Napoli",
      caption: "La Galleria Umberto I, di fronte al Teatro di San Carlo.",
      credit: unsplash("Emma Harrisova", "emm_harri"),
    },
    h3("Castel Nuovo"),
    p("Il castello medievale di piazza Municipio, noto anche come Maschio Angioino, ospita il Museo Civico. Calcola circa un'ora. È vicino al porto da cui partono i traghetti."),
    h3("Castel dell'Ovo e il lungomare"),
    p("Castel dell'Ovo sorge sull'isolotto di Megaride, collegato alla riva da un pontile accanto al Borgo Marinari. È rimasto chiuso per restauri dal 2023; ne è stata annunciata la riapertura, ma a settembre 2026 la pagina ufficiale del Comune lo indicava ancora come chiuso: verifica l'accesso prima di andare. Il lungomare — via Partenope e via Caracciolo — è una delle passeggiate preferite dai napoletani, con la vista sul golfo e sul Vesuvio. Il momento migliore è il tardo pomeriggio."),
    {
      type: "image",
      src: `${IMG}/castel-dell-ovo-sunset.webp`,
      alt: "Castel dell'Ovo sul lungomare di Napoli al tramonto, visto dall'acqua",
      caption: "Castel dell'Ovo sul lungomare. La passeggiata qui vicino è un classico delle serate napoletane.",
      credit: unsplash("Brad Weaver", "bweaver"),
    },
    h3("I Quartieri Spagnoli"),
    p("I Quartieri Spagnoli, una griglia di vicoli tracciata nel Cinquecento a monte di via Toledo, sono un quartiere residenziale diventato meta amata per passeggiare, mangiare e vedere la street art, compreso il celebre murale dedicato a Diego Armando Maradona. Vanno vissuti con la normale attenzione di qualsiasi quartiere affollato di una grande città."),
    h3("Il Vomero e i belvedere"),
    p("La collina del Vomero, raggiungibile in funicolare o in metro, offre le vedute classiche della città. In cima ci sono Castel Sant'Elmo e la Certosa e Museo di San Martino, antico monastero oggi museo, con terrazze affacciate sul centro storico, sul golfo e sul Vesuvio. Calcola mezza giornata."),
    h3("Come scegliere le priorità"),
    p("Un aiuto pratico per organizzarsi, non una classifica: adattalo ai tuoi interessi."),
    table(
      ["Luogo", "Priorità per una prima visita", "Durata indicativa", "Prenotare?"],
      [
        ["Spaccanapoli e via dei Tribunali", "Alta", "Mezza giornata", "No"],
        ["Museo Archeologico Nazionale", "Alta", "2–3 ore", "Utile nei periodi affollati"],
        ["Cappella Sansevero", "Alta", "30–45 minuti", "Fortemente consigliato"],
        ["Duomo", "Media", "Circa 1 ora", "No"],
        ["Chiostro di Santa Chiara", "Media", "Circa 1 ora", "Di solito no"],
        ["Piazza del Plebiscito e Palazzo Reale", "Media", "1–2 ore", "Di solito no"],
        ["Lungomare e Castel dell'Ovo", "Alta", "1–2 ore", "No; verifica l'accesso al castello"],
        ["Belvedere del Vomero (Sant'Elmo, San Martino)", "Media", "Mezza giornata", "Di solito no"],
        ["Pompei (gita)", "Alta", "Buona parte della giornata", "Sì: biglietti nominativi e contingentati"],
      ],
      "Priorità per organizzare una prima visita"
    ),

    // ——— 4 ———
    h2("Napoli in 1, 2 o 3 giorni"),
    p("Questi schemi mantengono ogni giornata realistica. Controlla prima i giorni di apertura: alcuni musei chiudono in un giorno fisso."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Un giorno", title: "Il centro storico", text: "**Mattina:** Spaccanapoli e Santa Chiara. **Tarda mattinata:** la Cappella Sansevero (prenotata). **Pranzo:** pizza in via dei Tribunali o nei dintorni. **Pomeriggio:** il Duomo e San Gregorio Armeno, poi a piedi fino a piazza del Plebiscito. **Sera:** il lungomare." },
        { label: "Due giorni", title: "Un museo e il mare", text: "Primo giorno come sopra. **Secondo giorno:** il Museo Archeologico al mattino; il Vomero in funicolare nel pomeriggio per le vedute; cena a Chiaia o vicino al lungomare." },
        { label: "Tre giorni", title: "Più calma o una gita", text: "Primi due giorni come sopra. **Terzo giorno:** Pompei o Ercolano in treno regionale, con rientro per una cena senza fretta — oppure resta in città per Capodimonte, il Palazzo Reale e i Quartieri Spagnoli." },
      ],
    },
    tip("Pompei, la Costiera Amalfitana e Capri richiedono ciascuna quasi una giornata. In un soggiorno breve scegline una: abbinarle tutte a Napoli in tre giorni significa passare gran parte del tempo in viaggio.", "Una gita alla volta"),

    // ——— 5 ———
    h2("Dove dormire a Napoli"),
    p("La zona giusta dipende da come arrivi, da che cosa vuoi avere vicino e da quanta vita serale ti piace."),
    table(
      ["Zona", "Adatta a", "Vantaggi", "Da considerare"],
      [
        ["Centro storico", "Visitare a piedi", "Spaccanapoli, chiese e pizzerie a due passi; metro vicina", "Vie strette e affollate; può essere animato la sera"],
        ["Via Toledo / Municipio", "Una base centrale e ben servita", "Linee della metro, vicino al Plebiscito e al porto", "Via dello shopping molto frequentata"],
        ["Chiaia", "Negozi, ristoranti, lungomare", "Strade eleganti, vicino alla passeggiata e alle funicolari", "Più lontano dal centro storico e dalla stazione centrale"],
        ["Santa Lucia", "Vista mare e lungomare", "Accanto alla passeggiata e a Castel dell'Ovo", "Spesso più caro; a piedi o in bus fino al centro"],
        ["Vomero", "Un'atmosfera più tranquilla e residenziale", "Belvedere, negozi; funicolari e metro", "In collina: si dipende dai mezzi"],
        ["Quartieri Spagnoli", "Soggiorni centrali e vivaci", "Vicino a via Toledo; tanti posti dove mangiare", "Vicoli stretti e in salita; può essere rumoroso"],
        ["Zona di Napoli Centrale", "Treni presto al mattino e gite", "Stazione, Circumvesuviana e Alibus a portata di mano", "Nodo di trasporto trafficato, meno suggestivo"],
      ],
      "Scegliere la zona in cui dormire"
    ),
    p("Per una prima visita, il centro storico o la zona tra via Toledo e Municipio offrono di solito il miglior equilibrio tra visite e trasporti. Qualunque zona tu scelga, controlla il percorso a piedi dalla stazione della metro più vicina e se nell'edificio c'è l'ascensore."),

    // ——— 6 ———
    h2("I quartieri di Napoli"),
    table(
      ["Zona", "Dove", "Carattere", "Utile per"],
      [
        ["Centro storico", "La griglia storica tra la stazione e via Toledo", "Chiese, chiostri, botteghe, pizzerie", "I luoghi principali a piedi"],
        ["Toledo e Municipio", "Lungo via Toledo fino al porto", "Via dello shopping, piazze, edifici pubblici", "Trasporti, Plebiscito, traghetti"],
        ["Quartieri Spagnoli", "A monte di via Toledo", "Vicoli residenziali, street art, piccole trattorie", "Mangiare e una base centrale"],
        ["Chiaia", "A ovest del Plebiscito, verso il mare", "Negozi, caffè e ristoranti", "Le serate e il lungomare"],
        ["Santa Lucia e Borgo Marinari", "Il lungomare intorno a Castel dell'Ovo", "Alberghi e ristoranti sul mare", "Passeggiate sul lungomare"],
        ["Vomero", "Sulla collina sopra il centro", "Residenziale, con belvedere e musei", "Vedute e un soggiorno più tranquillo"],
      ],
      "Il centro di Napoli in sintesi"
    ),

    // ——— 7 ———
    h2("Come muoversi a Napoli"),
    p("Il centro di Napoli si gira a piedi, ma la città è costruita sulle colline: il Vomero e Posillipo sono molto più in alto del centro storico e del mare. Conviene alternare le passeggiate ai mezzi pubblici."),
    ul(
      "**A piedi** — il modo migliore per il centro storico e per la zona tra via Toledo e il lungomare.",
      "**Metropolitana** — la Linea 1, gestita da ANM, collega la zona della stazione centrale con il centro storico, via Toledo, Municipio e il Vomero; diverse stazioni sono decorate con opere d'arte contemporanea, e Toledo è la più celebre. La Linea 6 va da Municipio verso Mergellina, mentre la Linea 2 è un collegamento ferroviario urbano gestito da Trenitalia.",
      "**Funicolari** — quattro linee salgono verso il Vomero e Posillipo, risparmiando una salita ripida.",
      "**Autobus** — utili per il lungomare e alcune zone collinari, anche se nel traffico sono più lenti.",
      "**Taxi** — usa taxi ufficiali presi ai posteggi o prenotati per telefono o con un'app. I taxi ufficiali applicano tariffe predeterminate su alcuni percorsi: chiedi prima di partire.",
      "**Treni regionali** — la Circumvesuviana, gestita da EAV, serve Ercolano, Pompei e Sorrento; altre linee raggiungono Pozzuoli e i Campi Flegrei.",
      "**Traghetti e aliscafi** — dal porto (Molo Beverello e Calata Porta di Massa) per Capri, Ischia, Procida, Sorrento e, in stagione, la Costiera Amalfitana.",
    ),
    p("Orari e regole dei biglietti cambiano: controlla le informazioni aggiornate degli operatori il giorno stesso."),

    // ——— 8 ———
    h2("Dall'aeroporto al centro di Napoli"),
    p("L'Aeroporto Internazionale di Napoli (Capodichino) è vicinissimo alla città."),
    ul(
      "**Alibus** — il bus dell'aeroporto gestito da ANM collega lo scalo con piazza Garibaldi/Napoli Centrale e il porto al Molo Beverello. Secondo ANM, fino alla stazione centrale servono circa 15 minuti, traffico permettendo.",
      "**Taxi** — dal posteggio ufficiale. Verifica le tariffe predeterminate in vigore prima di partire.",
      "**Transfer privato** — utile per arrivi a tarda sera, molti bagagli o se vai direttamente a Sorrento o in Costiera.",
      "**Metro Linea 1** — è in costruzione una stazione della Linea 1 all'aeroporto. Finché non sarà servita dai treni, verifica con ANM il collegamento in vigore.",
    ),

    // ——— 9 ———
    h2("Arrivare a Napoli in treno"),
    p("Napoli Centrale, in piazza Garibaldi, è la stazione principale. I treni ad alta velocità di Trenitalia (Frecciarossa) e Italo la collegano direttamente con Roma, Firenze, Bologna e Milano; alcuni fermano anche a Napoli Afragola, fuori città — controlla il biglietto. Tra Roma e Napoli i treni più veloci impiegano circa un'ora, un'ora e un quarto; da Firenze e Milano il viaggio è più lungo: verifica l'orario aggiornato."),
    p("Sotto e accanto alla stazione centrale ci sono le linee 1 e 2 della metropolitana e la stazione della Circumvesuviana per Ercolano, Pompei e Sorrento (Napoli Garibaldi, con il capolinea di Porta Nolana poco distante). Per biglietti, convalida e stazioni leggi come [viaggiare in Italia in treno](/it/guide/viaggiare-in-italia-in-treno)."),

    // ——— 10 ———
    h2("Pompei ed Ercolano"),
    p("Pompei è il motivo per cui molti arrivano a Napoli. La città romana sepolta dall'eruzione del Vesuvio del 79 d.C. è uno dei siti archeologici più visitati al mondo, e i reperti del Museo Archeologico di Napoli completano il quadro."),
    h3("Visitare Pompei"),
    p("Secondo il Parco Archeologico di Pompei, i biglietti sono nominativi, c'è un limite giornaliero di 20.000 visitatori e da metà marzo si entra per fasce orarie; il rivenditore ufficiale è Vivaticket, e i biglietti si vendono anche agli ingressi. Non sono ammessi bagagli ingombranti. Calcola almeno mezza giornata — molti ci passano quasi tutto il giorno — e porta acqua, cappello e scarpe comode: il sito è vasto, esposto al sole e lastricato in pietra irregolare."),
    {
      type: "image",
      src: `${IMG}/pompeii-forum-vesuvius.webp`,
      alt: "Le rovine del Foro di Pompei con il Vesuvio sullo sfondo sotto un cielo azzurro",
      caption: "Il Foro di Pompei con il Vesuvio alle spalle. Il sito è vasto e poco ombreggiato: d'estate mettiti in conto il caldo.",
      credit: unsplash("D Jonez", "cooljonez"),
    },
    important("Acquista i biglietti per Pompei dai canali ufficiali del Parco. Dato che sono nominativi e gli ingressi giornalieri sono contingentati, verifica la disponibilità per la tua data prima di partire, soprattutto in primavera e d'estate.", "Biglietti nominativi e contingentati"),
    h3("Come arrivarci"),
    table(
      ["Soluzione", "Vantaggi", "Da considerare"],
      [
        ["Treno regionale (Circumvesuviana)", "Diretto dal centro di Napoli a Pompei Scavi–Villa dei Misteri, vicino a un ingresso; economico", "Treni a volte affollati; controlla orari e avvisi aggiornati di EAV"],
        ["Campania Express (EAV)", "Un servizio turistico sulla stessa linea, con meno fermate", "Ha un calendario proprio: verifica date e orari con EAV"],
        ["Tour organizzato", "Trasporto e guida insieme, senza pensieri", "Orari fissi, meno flessibilità"],
        ["Transfer privato", "Porta a porta; facile da abbinare a Ercolano o alla costa", "La soluzione più cara; il traffico può essere intenso"],
        ["Auto a noleggio", "Flessibilità per altre tappe", "Traffico, parcheggi e guida in città; da Napoli raramente serve"],
      ],
      "Da Napoli a Pompei"
    ),
    p("Anche i regionali Trenitalia della linea Napoli–Salerno fermano alla stazione di Pompei, nella città moderna, a una passeggiata dall'ingresso di piazza Anfiteatro."),
    h3("Ercolano come alternativa"),
    p("Ercolano, più vicina a Napoli sulla stessa linea della Circumvesuviana, è più piccola di Pompei e spesso meno affollata. Sepolta in modo diverso dalla stessa eruzione, conserva in modo straordinario piani superiori, elementi in legno e colori. Di solito bastano due o tre ore, il che la rende più facile da abbinare a un pomeriggio in città. Le informazioni aggiornate sono sul sito ufficiale del [Parco Archeologico di Ercolano](https://ercolano.cultura.gov.it/)."),

    // ——— 11 ———
    h2("Cosa mangiare a Napoli"),
    p("A Napoli si viene anche per mangiare, e molto del meglio è semplice ed economico."),
    ul(
      "**Pizza napoletana** — morbida, con il cornicione alto e una cottura breve a temperatura altissima. L'arte del pizzaiuolo napoletano è iscritta nella lista del patrimonio culturale immateriale UNESCO. Margherita e marinara sono i classici; storia e consigli nella nostra guida alla [pizza napoletana](/it/cibo/pizza-napoletana).",
      "**Pizza fritta** — ripiena e fritta, un classico del cibo di strada.",
      "**Pizza a portafoglio** — piccola, piegata in quattro e mangiata passeggiando.",
      "**Cibo di strada** — il cuoppo di fritture e la frittatina di pasta.",
      "**Ragù napoletano** — il sugo di carne e pomodoro cotto a lungo, tradizionalmente della domenica; e la Genovese, che nonostante il nome è un sugo napoletano di cipolle e carne.",
      "**Pasta** — piatti come la pasta e patate con la provola e, sul fronte del mare, gli spaghetti alle vongole.",
      "**Pesce** — pesce, vongole e cozze del golfo, soprattutto vicino al lungomare.",
      "**Pasticceria** — la sfogliatella, riccia o frolla, e il babà al rum (vedi [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)).",
    ),
    {
      type: "image",
      src: `${IMG}/pizza-margherita.webp`,
      alt: "Una pizza Margherita con pomodoro, mozzarella e basilico fresco",
      caption: "Una Margherita: pomodoro, mozzarella e basilico.",
      credit: unsplash("Alfonso Scarpa", "lucidistortephoto"),
    },
    p("Qualche indicazione pratica: molte pizzerie non prendono prenotazioni e davanti a quelle più note si forma la fila — conviene andare presto o tardi; la pizza si mangia di solito intera, una a testa, con coltello e forchetta; e alcuni ristoranti applicano il coperto. Per le abitudini della tavola in tutta Italia, vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    h3("Il caffè e il bar"),
    p("A Napoli il caffè è quasi sempre un espresso preso al banco, spesso accompagnato da un bicchiere d'acqua. In molti bar si paga prima alla cassa e si mostra lo scontrino al barista, in altri si paga dopo; al tavolo può costare di più. La mattina è il momento della sfogliatella con il caffè, e il caffè sospeso — pagare un caffè in più per chi non può permetterselo — fa parte della tradizione cittadina. Le abitudini cambiano da bar a bar: basta osservare come fanno gli altri. Per saperne di più, vedi [Il caffè italiano](/it/cibo/caffe-italiano)."),

    // ——— 12 ———
    h2("I musei di Napoli"),
    h3("Il Museo Archeologico Nazionale di Napoli (MANN)"),
    p("Se a Napoli si visita un solo museo, per molti è questo. Il MANN custodisce una parte importante di affreschi, mosaici e oggetti rinvenuti a Pompei, a Ercolano e negli altri siti vesuviani, la collezione Farnese di scultura classica e il Gabinetto Segreto con l'arte erotica degli scavi. Visitarlo prima o dopo Pompei arricchisce entrambe le visite: i siti danno il contesto, il museo i dettagli. Secondo il museo, il martedì è chiuso; alcune sale sono temporaneamente chiuse per lavori, e il celebre Mosaico di Alessandro non è esposto perché in restauro, con il cantiere visibile da punti di osservazione. Calcola due o tre ore. La fermata più vicina è Museo, sulla Linea 1."),
    h3("Capodimonte"),
    p("Il Museo e Real Bosco di Capodimonte, antica reggia immersa in un grande parco a nord del centro, custodisce un'importante collezione di pittura italiana, con opere di Caravaggio e Tiziano. Calcola mezza giornata con il parco."),
    h3("Altri musei"),
    p("Il Palazzo Reale, la Certosa e Museo di San Martino al Vomero, il Tesoro di San Gennaro e il Museo Civico di Castel Nuovo arricchiscono i soggiorni più lunghi. Controlla i giorni di apertura di ciascun museo prima di organizzare la giornata."),

    // ——— 13 ———
    h2("Gite in giornata da Napoli"),
    table(
      ["Meta", "Difficoltà organizzativa", "Mezza giornata o intera?", "Come arrivare di solito"],
      [
        ["Pompei", "Media: biglietti nominativi e contingentati", "Intera o mezza giornata lunga", "Circumvesuviana, tour o transfer"],
        ["Ercolano", "Bassa", "Mezza giornata", "Circumvesuviana"],
        ["Sorrento", "Bassa", "Giornata intera", "Circumvesuviana o traghetto"],
        ["Costiera Amalfitana", "Alta", "Almeno una giornata intera; meglio con una notte", "Traghetti stagionali, autobus o autista"],
        ["Capri", "Media", "Giornata intera", "Traghetto o aliscafo dal porto; dipende dal mare"],
        ["Caserta", "Bassa", "Da mezza giornata a intera", "Treno regionale fino a Caserta per la Reggia"],
        ["Procida o Ischia", "Media", "Giornata intera", "Traghetto o aliscafo"],
      ],
      "Gite in giornata da Napoli"
    ),
    p("La Costiera Amalfitana, in particolare, si gode meglio con un pernottamento che con una gita da Napoli. I collegamenti via mare con le isole e la costa sono più frequenti d'estate e possono essere sospesi con il mare mosso: porti, terminal e compagnie sono spiegati nell'articolo sui [traghetti in Italia](/it/trasporti/traghetti-in-italia)."),

    // ——— 14 ———
    h2("Quando andare a Napoli"),
    ul(
      "**Primavera (aprile–giugno)** — clima ideale per camminare in città e negli scavi, e inizio della stagione dei collegamenti via mare. Pasqua e i ponti sono affollati.",
      "**Estate (luglio–agosto)** — caldo, soprattutto a Pompei ed Ercolano, dove l'ombra scarseggia. Visita gli scavi presto e mettiti in conto isole e costa al massimo dell'affollamento.",
      "**Autunno (settembre–ottobre)** — spesso il periodo più piacevole, con giornate calde, mare ancora tiepido e meno pressione. Ottobre e novembre sono, secondo le medie di lungo periodo, tra i mesi più piovosi a Napoli.",
      "**Inverno (novembre–marzo)** — mite rispetto al Nord e più tranquillo negli scavi, ma con giornate corte, meno collegamenti via mare e chiusure sulla costa. A Natale San Gregorio Armeno si riempie.",
    ),
    p("Per confrontare Napoli con il resto d'Italia nel corso dell'anno, leggi [quando andare in Italia](/it/guide/quando-andare-in-italia)."),

    // ——— 15 ———
    h2("Napoli senza auto"),
    p("Chi soggiorna a Napoli di solito non ha bisogno dell'auto. Il traffico è intenso, i parcheggi sono pochi e gran parte del centro si gira meglio a piedi. I mezzi pubblici coprono ciò che serve: metropolitana e funicolari in città, la Circumvesuviana per Ercolano, Pompei e Sorrento, i regionali per Caserta e i Campi Flegrei, i traghetti per le isole. I taxi fanno il resto."),
    p("L'auto diventa utile per girare la Campania interna, dormire in campagna o abbinare più località poco collegate. Anche in questi casi, molti la ritirano quando lasciano Napoli invece di usarla in città."),
    h3("Guidare a Napoli e in Campania"),
    p("Traffico, parcheggi e zone a traffico limitato rendono impegnativo guidare nel centro di Napoli. Le strade costiere, come l'Amalfitana, sono strette e tortuose, con limitazioni stagionali alla circolazione. Prima di noleggiare un'auto leggi come [guidare in Italia](/it/guide/guidare-in-italia), dove spieghiamo ZTL, pedaggi e targhe alterne in Costiera."),

    // ——— 16 ———
    h2("Sicurezza e buon senso"),
    p("A Napoli valgono le stesse precauzioni di qualsiasi grande città:"),
    ul(
      "Tieni oggetti di valore al sicuro e fuori vista, e porta la borsa davanti a te nei luoghi affollati e sui mezzi pieni.",
      "Usa taxi ufficiali e trasporti autorizzati.",
      "Verifica dove si trova l'alloggio e come raggiungerlo, soprattutto se arrivi tardi.",
      "Tieni copie dei documenti e porta con te solo ciò che serve.",
      "Evita di esibire senza motivo gioielli, telefoni o fotocamere costosi.",
      "In caso di emergenza, chiama il 112.",
    ),
    {
      type: "image",
      src: `${IMG}/naples-alley-evening.webp`,
      alt: "Una stradina del centro di Napoli di sera, con lampadine appese, balconi e insegne di ristoranti",
      caption: "Una strada del centro di Napoli di sera. Molti quartieri si animano dopo il tramonto, all'ora di cena.",
      credit: unsplash("Stepan Loktionov", "swt13"),
    },

    // ——— 17 ———
    h2("Errori da evitare alla prima visita"),
    ol(
      "**Voler vedere tutto in un giorno.** Scegli pochi luoghi e muoviti a piedi tra l'uno e l'altro.",
      "**Usare l'auto senza bisogno.** Mezzi pubblici e passeggiate coprono la città.",
      "**Ignorare le regole di prenotazione.** Cappella Sansevero e Pompei hanno regole su biglietti e prenotazioni da verificare prima.",
      "**Organizzare Pompei senza controllare i trasporti.** Verifica il giorno prima orari EAV e sito ufficiale del Parco.",
      "**Dormire lontano dai trasporti utili.** Una base vicina alla metro semplifica ogni giornata.",
      "**Sottovalutare salite e distanze.** Per il Vomero, usa le funicolari.",
      "**Dare per scontato che tutto sia aperto ogni giorno.** Diversi musei chiudono in un giorno fisso.",
      "**Affidarsi a informazioni superate sui trasporti.** Servizi e orari cambiano: usa i siti aggiornati degli operatori.",
      "**Riempire il soggiorno di gite.** In un viaggio breve, una o due sono realistiche.",
      "**Rinunciare alla cucina locale.** Lascia tempo per pizza, pasticceria e caffè.",
    ),

    // ——— 18 ———
    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "napoli-prima-volta",
      groups: [
        {
          title: "Prima di prenotare",
          items: ["Scegli la zona in cui dormire", "Decidi la durata del viaggio", "Scegli quali gite fare", "Decidi come arrivare: treno o aereo"],
        },
        {
          title: "Prima di partire",
          items: ["Prenota la Cappella Sansevero", "Acquista i biglietti per Pompei dal rivenditore ufficiale", "Controlla i giorni di chiusura dei musei", "Salva i link ufficiali dei trasporti"],
        },
        {
          title: "Durante il viaggio",
          items: ["Controlla gli avvisi dei trasporti il giorno stesso", "Tieni un margine per treni e traghetti", "Mantieni il programma flessibile", "Lascia tempo per i pasti"],
        },
      ],
    },
    p("Musei, parchi archeologici e trasporti citati in questa guida sono stati verificati sui siti ufficiali a settembre 2026. Prezzi, orari e aperture cambiano: controllali prima di partire. Per inserire Napoli in un viaggio più lungo c'è la nostra [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),
  ],

  faqs: [
    { question: "Vale la pena visitare Napoli la prima volta?", answer: "Sì, soprattutto se ti interessano storia, archeologia e cucina. Ha un centro storico Patrimonio UNESCO, uno dei più importanti musei archeologici al mondo e Pompei ed Ercolano a portata di treno." },
    { question: "Quanti giorni servono per visitare Napoli?", answer: "Due o tre giorni per la città: centro storico, Museo Archeologico e lungomare. Aggiungi un giorno per ciascuna gita a Pompei, Ercolano, Capri o in Costiera Amalfitana." },
    { question: "Napoli si gira bene a piedi?", answer: "Il centro storico e la zona fino al lungomare sì. La città però è in collina: per il Vomero e le zone più alte conviene usare funicolari o metropolitana." },
    { question: "Dove conviene dormire a Napoli la prima volta?", answer: "Il centro storico o la zona tra via Toledo e Municipio offrono di solito il miglior equilibrio tra visite e trasporti. Chiaia e Santa Lucia sono adatte a chi vuole il mare, la zona della stazione a chi parte presto per le gite." },
    { question: "Napoli è sicura per i turisti?", answer: "Valgono le precauzioni di qualsiasi grande città: oggetti di valore al sicuro, attenzione nella folla e sui mezzi, taxi ufficiali. Per indicazioni aggiornate fa fede il sito ufficiale del proprio Paese dedicato ai viaggi." },
    { question: "Serve l'auto a Napoli?", answer: "No. Traffico e parcheggi rendono difficile guidare in città, mentre metropolitana, funicolari, treni regionali e traghetti coprono la città e le gite principali." },
    { question: "Come si arriva dall'aeroporto di Napoli al centro?", answer: "L'Alibus di ANM porta a piazza Garibaldi/Napoli Centrale e al porto; secondo ANM fino alla stazione servono circa 15 minuti. In alternativa ci sono taxi ufficiali e transfer privati." },
    { question: "Si può visitare Pompei partendo da Napoli?", answer: "Sì. La Circumvesuviana collega il centro di Napoli con Pompei Scavi–Villa dei Misteri, vicino a un ingresso; in alternativa tour e transfer. I biglietti sono nominativi e limitati a 20.000 al giorno: acquistali dal rivenditore ufficiale." },
    { question: "Quanto dista Pompei da Napoli?", answer: "Pompei si trova a sud-est di Napoli, sulla linea della Circumvesuviana verso Sorrento. Calcola una giornata intera tra viaggio e visita, e verifica gli orari aggiornati di EAV." },
    { question: "Per quali piatti è famosa Napoli?", answer: "Per la pizza napoletana prima di tutto, poi pizza fritta, cibo di strada come il cuoppo, ragù e Genovese, pesce e pasticceria come sfogliatella e babà — con l'espresso al banco." },
    { question: "Napoli va bene per un weekend?", answer: "Sì. In un fine settimana si vedono il centro storico, un grande museo o la Cappella Sansevero, il lungomare e si mangia benissimo. Pompei occuperebbe uno dei due giorni." },
    { question: "Si può visitare la Costiera Amalfitana da Napoli?", answer: "Sì, ma è una giornata lunga. In stagione ci sono i traghetti, altrimenti autobus o autista. La Costiera si gode di più con almeno una notte sul posto." },
    { question: "Cosa non perdere a Napoli?", answer: "Spaccanapoli e il centro storico, il Museo Archeologico, la Cappella Sansevero, il lungomare e una pizza napoletana. Con un giorno in più, Pompei o Ercolano." },
  ],

  sourcesTitle: "Fonti ufficiali utili",
  sources: [
    { label: "Comune di Napoli", url: "https://www.comune.napoli.it/", note: "informazioni sulla città, compreso Castel dell'Ovo" },
    { label: "Museo Archeologico Nazionale di Napoli", url: "https://www.museoarcheologiconapoli.it/", note: "aperture e sale chiuse" },
    { label: "Parco Archeologico di Pompei", url: "https://pompeiisites.org/", note: "biglietti, fasce orarie e regole di visita" },
    { label: "Parco Archeologico di Ercolano", url: "https://ercolano.cultura.gov.it/", note: "informazioni per la visita" },
    { label: "Museo Cappella Sansevero", url: "https://www.museosansevero.it/", note: "regole di prenotazione" },
    { label: "ANM — Alibus", url: "https://www.anm.it/index.php?option=com_content&task=view&id=2578&Itemid=373", note: "bus per l'aeroporto" },
    { label: "Aeroporto Internazionale di Napoli — in autobus", url: "https://www.aeroportodinapoli.it/it/in-autobus", note: "collegamenti con l'aeroporto" },
    { label: "EAV — Circumvesuviana", url: "https://www.eavsrl.it/", note: "treni per Ercolano, Pompei e Sorrento" },
    { label: "Trenitalia", url: "https://www.trenitalia.com/it.html", note: "alta velocità e regionali" },
    { label: "Italo", url: "https://www.italotreno.com/it", note: "alta velocità" },
  ],
};
