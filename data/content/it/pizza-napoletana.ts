import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "La pizza napoletana" — edizione italiana, scritta in modo
// autonomo rispetto a quella inglese, con gli stessi fatti. Verificato a
// ottobre 2026 su: scheda UNESCO dell'Arte del pizzaiuolo napoletano (12.COM,
// 2017); Regolamento (UE) n. 97/2010 (disciplinare della Pizza Napoletana STG)
// e Regolamento di esecuzione (UE) 2022/2313 (registrazione con riserva del
// nome); Disciplinare internazionale AVPN pubblicato su pizzanapoletana.org;
// registro UE eAmbrosia per Mozzarella di Bufala Campana e Pomodoro San
// Marzano dell'Agro Sarnese-Nocerino; Regolamento (CE) n. 2527/98 (Mozzarella
// STG); Il ventre di Napoli di Matilde Serao (1884); la storia d'archivio
// delle pizzerie napoletane di Antonio Mattozzi; lo studio di Zachary Nowak
// (2014) sulla Margherita. Il racconto del 1889, il nome della marinara e le
// date attribuite alle singole pizze sono presentati come tradizioni. Nessuna
// pizzeria è citata o consigliata; niente prezzi né orari.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/neapolitan-pizza";

export const pizzaNapoletana: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cos'è la pizza napoletana?"),
    answer("**La pizza napoletana è la pizza tonda e morbida di Napoli: un disco di pasta semplice steso a mano, con il cornicione gonfio e maculato, il centro sottile e un po' umido, pochi condimenti e una cottura di circa un minuto in un forno a legna caldissimo.** Le due forme classiche sono la **marinara** — pomodoro, aglio, origano e olio extravergine — e la **margherita** — pomodoro, mozzarella, basilico e olio. Va mangiata appena sfornata."),
    p("A distinguerla non è un ingrediente segreto ma un modo di lavorare. L'impasto lievita per ore, si stende a mano senza mattarello, si condisce con misura e cuoce così in fretta che il cornicione si gonfia e si colora mentre il centro resta tenero. Il risultato è abbastanza morbido da potersi piegare, ed è spesso così che la si mangia a Napoli."),
    {
      type: "facts",
      title: "La pizza napoletana in breve",
      rows: [
        { label: "Origine", value: "Napoli, capoluogo della Campania" },
        { label: "Impasto", value: "Farina di grano tenero, acqua, sale e lievito: nient'altro" },
        { label: "Stesura", value: "A mano, dal centro verso l'esterno; niente mattarello" },
        { label: "Cottura", value: "Forno a legna, circa 430–485 °C, per 60–90 secondi" },
        { label: "Le classiche", value: "Marinara e margherita" },
        { label: "Riconoscimenti", value: "Patrimonio immateriale UNESCO (l'arte del pizzaiuolo, 2017); Specialità tradizionale garantita UE (Pizza Napoletana, 2010)" },
      ],
    },
    p("Questa è la nostra guida alla pizza in sé: da dove viene, che cosa dicono le regole, come si fa e come si mangia a Napoli. Per la città, vedi [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta); per la cucina di tutta Italia, le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Breve storia della pizza a Napoli",
        "Marinara e margherita",
        "Come si fa una pizza napoletana",
        "Come ordinare e mangiare la pizza a Napoli",
        "La pizza a portafoglio",
        "Si trova la pizza napoletana fuori da Napoli?",
      ],
    },

    // ——— 2 ———
    h2("Perché la pizza è di casa a Napoli"),
    p("Le focacce cotte con qualcosa sopra sono antiche quanto i forni da pane ed esistono in tutto il Mediterraneo. È più corretto dire, allora, che Napoli ha creato **la pizza come oggi la conosce il mondo**, non che abbia inventato l'idea di mettere un condimento su un disco di pasta."),
    p("In città si sono incontrate più cose. Per secoli Napoli è stata una delle città più grandi e popolose d'Europa, con moltissime persone che mangiavano poco, fuori casa e in piedi. La pizza era perfetta per loro: ingredienti economici, pochi minuti di cottura, vendita a spicchi o intera. La Campania forniva i condimenti — pomodoro, formaggi di latte di bufala e vaccino, olio, erbe. E tra Settecento e Ottocento la città sviluppò un mestiere dedicato, il **pizzaiuolo**, e un luogo dedicato, la **pizzeria**."),
    image("naples-historic-centre-spaccanapoli", "Il centro storico di Napoli visto dall'alto: una fitta trama di tetti tagliata dal lungo rettilineo di Spaccanapoli, con i grattacieli sullo sfondo", true),
    p("Quel mestiere è ancora il cuore di tutto. I pizzaiuoli imparano soprattutto lavorando accanto a chi ha più esperienza, e l'abilità è nelle mani: capire l'impasto, stenderlo in pochi secondi, governare un fuoco che in alcuni punti del forno scalda più che in altri."),

    // ——— 3 ———
    h2("Breve storia della pizza a Napoli"),
    h3("La parola"),
    p("La parola *pizza* compare in un documento in latino di **Gaeta**, sulla costa a nord di Napoli, datato **997**: un affittuario si impegnava a consegnare al vescovo dodici *pizze* a Natale e dodici a Pasqua. È una testimonianza antica e curiosa, ma riguarda una parola, non il piatto che si mangia oggi a Napoli. L'etimologia è ancora discussa."),
    h3("Arriva il pomodoro"),
    p("Il pomodoro giunse in Europa dalle Americhe nel Cinquecento e si diffuse lentamente. Quando sia finito per la prima volta sulla pizza a Napoli non è documentato con precisione; il disciplinare europeo della Pizza Napoletana lo colloca all'inizio del Settecento. Di certo, nell'Ottocento il pomodoro era ormai uno dei condimenti abituali."),
    h3("La pizzeria e la strada"),
    p("Lo storico Antonio Mattozzi, lavorando sugli archivi cittadini, ricostruisce la nascita della pizzeria — una bottega con il proprio forno, dove la pizza si faceva, si vendeva e sempre più spesso si mangiava sul posto — tra la fine del Settecento e l'Ottocento. Ma la pizza si vendeva anche per strada, e in buona parte si mangiava così."),
    p("Matilde Serao ne lascia un ritratto vivissimo in *Il ventre di Napoli* (1884), il suo reportage sulla vita dei poveri della città. Racconta di pizze cotte di notte e tagliate in spicchi da un *soldo*, venduti su banchetti agli angoli delle strade; di garzoni che la sera giravano per i vicoli con un grande vassoio di latta sulla testa; di pizze al pomodoro e aglio, con la mozzarella o con le alici salate. Non c'è nulla di romantico nel suo sguardo: per molti napoletani la pizza era semplicemente il pranzo o la cena che potevano permettersi. Serao racconta anche di un napoletano che aprì una pizzeria a Roma, dove l'entusiasmo si spense presto: la pizza, scrive, lontano da Napoli sembrava fuori posto."),
    h3("Da Napoli al mondo"),
    p("Nel Novecento la pizza si diffuse in tutta Italia e, con l'emigrazione, all'estero — soprattutto negli Stati Uniti, dove ha preso strade proprie. Nello stesso periodo i pizzaiuoli napoletani cominciarono a mettere per iscritto e a difendere il loro metodo. Nel 1984 un gruppo di loro fissò le regole della \"vera\" pizza napoletana e fondò l'**Associazione Verace Pizza Napoletana (AVPN)**; seguirono il riconoscimento europeo come specialità tradizionale e, nel 2017, quello dell'UNESCO per l'arte del pizzaiuolo."),

    // ——— 4 ———
    h2("Che cosa ha riconosciuto l'UNESCO"),
    p("Nel 2017 l'UNESCO ha iscritto l'**\"Arte del pizzaiuolo napoletano\"** nella Lista rappresentativa del Patrimonio culturale immateriale dell'umanità. Conviene essere precisi su che cosa significhi."),
    ul(
      "**Riconosce un mestiere, non un cibo.** L'UNESCO descrive una pratica gastronomica in quattro fasi — la preparazione dell'impasto e la cottura nel forno a legna — con un caratteristico movimento rotatorio del pizzaiuolo.",
      "**Riguarda le persone.** La scheda cita il maestro pizzaiuolo, il pizzaiuolo e il fornaio, insieme alle famiglie napoletane che fanno la pizza in casa, e sottolinea come il sapere passi dal maestro all'apprendista nella *bottega*. Indica in circa 3.000 i pizzaiuoli attivi a Napoli.",
      "**È patrimonio immateriale, non un sito del Patrimonio mondiale.** È un'altra lista: il centro storico di Napoli è Patrimonio dell'Umanità dal 1995, ma la pizza non è \"un sito UNESCO\".",
      "**Non certifica pizze né pizzerie.** Una pizza chiamata \"napoletana\" in qualunque parte del mondo non è coperta dall'iscrizione, e nessun locale può dirsi \"approvato dall'UNESCO\".",
    ),
    p("La scheda UNESCO ricorda anche che l'Associazione Pizzaiuoli Napoletani organizza ogni anno corsi sulla storia, gli strumenti e le tecniche del mestiere, e che il sapere si trasmette anche in accademie specializzate e in famiglia, oltre che in bottega."),

    // ——— 5 ———
    h2("Che cosa rende tradizionale una pizza napoletana"),
    p("Due documenti stabiliscono come dovrebbe essere una pizza napoletana tradizionale, ed è utile conoscerli entrambi."),
    ul(
      "**Il disciplinare europeo della Pizza Napoletana STG** (Specialità tradizionale garantita). Registrata nel 2010 su domanda dell'AVPN e dell'Associazione Pizzaiuoli Napoletani, dal **dicembre 2022** è iscritta nel registro **con riserva del nome**: nell'Unione europea il nome \"Pizza Napoletana\" spetta quindi alla pizza fatta secondo il disciplinare. Una STG tutela una ricetta e un metodo, non un territorio: si può produrre ovunque, purché si rispettino le regole. Il disciplinare riguarda solo marinara e margherita.",
      "**Il Disciplinare internazionale dell'AVPN**, lo standard privato con cui l'associazione certifica le pizzerie associate, in Italia e all'estero.",
    ),
    p("I due testi concordano sull'essenziale — stesura a mano, forno a legna, cottura brevissima, pizza morbida con il bordo rialzato — ma differiscono su alcuni numeri, come mostra la tabella. Nessuno dei due descrive ogni pizza che si fa a Napoli: molte pizzerie seguono la tradizione senza essere certificate, e molte vanno per la propria strada."),
    table(
      ["", "Disciplinare UE (STG)", "Disciplinare internazionale AVPN"],
      [
        ["Farina", "Grano tenero con caratteristiche tecniche definite", "Grano tenero tipo 00 o 0"],
        ["Lievito", "Lievito di birra", "Lievito di birra fresco o secco, oppure lievito madre"],
        ["Lievitazione", "Circa 2 ore in massa, poi 4–6 ore in panetti", "Consigliate 8–24 ore in totale"],
        ["Panetto", "180–250 g", "200–280 g"],
        ["Diametro", "Fino a 35 cm", "22–35 cm"],
        ["Centro", "0,4 cm di spessore (±10%)", "Non oltre circa 0,25 cm (±10%)"],
        ["Cornicione", "1–2 cm", "1–2 cm, gonfio e senza bruciature"],
        ["Forno", "A legna; platea a circa 485 °C", "A legna; 430–480 °C"],
        ["Cottura", "60–90 secondi", "60–90 secondi"],
      ],
      "Due standard per la pizza napoletana tradizionale, come pubblicati a ottobre 2026",
    ),
    h3("L'impasto"),
    p("L'impasto è solo farina di grano tenero, acqua, sale e lievito: niente olio, zucchero o latte. Si lavora finché è liscio ed elastico, si lascia lievitare, si divide a mano in panetti e si fa lievitare di nuovo. La lunga lievitazione conta: sviluppa il sapore e rende la pasta più digeribile e più facile da stendere. Oggi molte pizzerie lasciano maturare l'impasto più a lungo di quanto prevedessero le regole di un tempo."),
    h3("Il pomodoro"),
    p("Entrambi i testi prevedono **pomodori pelati**, schiacciati e non cotti in salsa, e ammettono anche i **pomodorini freschi**. Il pomodoro va sulla pizza crudo e cuoce solo nel forno: per questo ha un sapore vivo, non di sugo."),
    p("Si sente dire spesso che la pizza napoletana debba essere fatta con il San Marzano. Non è così. Il **Pomodoro San Marzano dell'Agro Sarnese-Nocerino** è una DOP europea (dal 1996) per pomodori pelati del tipo San Marzano coltivati e trasformati in un'area definita delle province di Salerno, Napoli e Avellino: un ottimo ingrediente, che molte pizzerie usano e dichiarano. Ma né il disciplinare UE né l'AVPN lo impongono, e la scritta \"San Marzano\" su una latta non significa che il contenuto sia il prodotto DOP: bisogna cercare la denominazione completa e il logo DOP dell'UE. Molte pizzerie usano altri pomodori, tra cui a volte il **Pomodorino del Piennolo del Vesuvio**, un'altra DOP campana."),
    h3("La mozzarella e gli altri ingredienti"),
    image("fresh-mozzarella", "Bocconi di mozzarella fresca ammucchiati in una vaschetta di plastica"),
    p("I formaggi principali sono due. La **Mozzarella di Bufala Campana** è una DOP di latte di bufala prodotta in un'area definita con al centro la Campania: ricca e lattiginosa, in cottura rilascia più liquido. Il **fior di latte** è la mozzarella di latte vaccino, più compatta e un po' più delicata. Il disciplinare UE ammette la mozzarella di bufala oppure la mozzarella conforme alla distinta STG europea \"Mozzarella\"; l'AVPN ammette bufala o fior di latte. Nessuno dei due impone un solo formaggio, e nei menu napoletani la margherita con la bufala compare spesso come voce a parte, a volte a un prezzo più alto."),
    p("Il resto è breve: **basilico fresco**, **olio extravergine d'oliva** versato a spirale e, per la marinara, **aglio e origano**. Per l'AVPN il formaggio grattugiato è facoltativo. L'idea è pochi ingredienti, ciascuno nella giusta misura: il disciplinare UE indica il pomodoro in grammi e l'olio in pochi grammi."),
    h3("Il forno a legna"),
    image("naples-wood-fired-oven-flames", "Le fiamme della legna che brucia sul lato di un forno a cupola in mattoni per la pizza, a Napoli", true),
    p("Il forno napoletano tradizionale è una cupola bassa di materiale refrattario sopra una platea piana, con il fuoco acceso su un lato. Il calore è altissimo per qualunque cucina: circa 485 °C sulla platea secondo il disciplinare UE, 430–480 °C secondo l'AVPN. A queste temperature la pizza cuoce in 60–90 secondi."),
    p("La velocità è tutto. La base si fissa quasi subito; il vapore dentro la pasta gonfia il cornicione prima che si secchi; il pomodoro perde l'acqua in eccesso ma resta fresco; la mozzarella si scioglie senza diventare unta. Cuocendo lo stesso impasto per dieci minuti in un forno di casa si ottiene qualcosa di più secco e croccante: magari buono, ma diverso."),
    p("Entrambi gli standard richiedono il forno a legna. Nella pratica, molte pizzerie a Napoli e altrove cuociono oggi in forni a gas o elettrici capaci di raggiungere temperature simili: possono fare pizze eccellenti, ma non è ciò che descrivono i disciplinari tradizionali."),
    h3("Il cornicione"),
    p("Il **cornicione** è il bordo rialzato. Si forma quando il pizzaiuolo schiaccia la pasta dal centro verso l'esterno, spingendo l'aria verso il bordo, che in forno si gonfia. Un buon cornicione è morbido e leggero dentro, con qualche macchia scura fuori, la cosiddetta *leopardatura*. Le grandi bruciature sono un'altra cosa: l'AVPN chiede un bordo \"privo di bruciature\"."),
    p("Il centro deve essere sottile e morbido, e può sembrare un po' umido dove si incontrano pomodoro, olio e mozzarella. Non è poco cotto: la pizza napoletana è fatta così. Il disciplinare UE descrive la pizza finita come morbida, elastica e facilmente piegabile in quattro."),

    // ——— 6 ———
    h2("Marinara e margherita"),
    p("Le due pizze previste dal disciplinare europeo sono anche le due che si trovano in quasi ogni menu napoletano."),
    table(
      ["Pizza", "Caratteristiche", "Ingredienti tipici", "Contesto"],
      [
        ["Marinara", "Senza formaggio; viva, profumata, decisa d'aglio", "Pomodoro, aglio, origano, olio extravergine, sale", "Spesso indicata come la più antica delle due. Il nome è legato per tradizione ai marinai, ma non contiene pesce né frutti di mare."],
        ["Margherita", "Rosso, bianco e verde; lattiginosa e delicata", "Pomodoro, mozzarella (bufala o fior di latte), basilico fresco, olio extravergine, sale", "La pizza più famosa del mondo, legata per tradizione alla regina Margherita di Savoia: vedi più avanti."],
      ],
    ),
    image("pizza-margherita-basil", "Una margherita con chiazze di mozzarella fusa, pomodoro schiacciato e foglie intere di basilico, con il cornicione gonfio e bruno"),
    p("**La marinara non ha pesce.** Chi viene da fuori a volte si stupisce di non trovare nulla di marino in una pizza che si chiama così. Il nome viene di solito spiegato con i marinai — una pizza semplice, di ingredienti che si conservavano bene — ma è una tradizione, non un fatto documentato. In un menu napoletano, marinara significa pomodoro, aglio, origano e olio."),
    p("**La margherita non è l'unica pizza \"vera\".** È il metro con cui molti napoletani giudicano una pizzeria, proprio perché non lascia margini d'errore. Ma i menu napoletani sono lunghi: ricotta, salame, funghi, alici, provola e, in stagione, i *friarielli*, spesso con la salsiccia."),

    // ——— 7 ———
    h2("La storia della margherita"),
    p("La versione famosa è questa. Nel giugno 1889, durante una visita dei reali a Napoli, il pizzaiuolo **Raffaele Esposito** preparò delle pizze per la **regina Margherita**; quella che lei preferì era condita con pomodoro, mozzarella e basilico — il rosso, il bianco e il verde della bandiera — e lui le diede il suo nome. Una lettera di ringraziamento della Real Casa è ancora esposta nella pizzeria che rivendica la storia."),
    p("Gli storici hanno più di un motivo per dubitarne. In uno studio del 2014 lo storico dell'alimentazione **Zachary Nowak** ha fatto notare che nessun giornale dell'epoca riportò l'episodio, ha messo in dubbio l'autenticità della lettera e ha sostenuto che racconto e nome furono promossi decenni dopo. Anche la storia d'archivio delle pizzerie napoletane di Antonio Mattozzi, che Nowak ha curato e tradotto in inglese, annovera la pizza della regina tra i miti sulle origini della pizza. E le pizze con pomodoro, mozzarella e basilico sembrano precedere il 1889: lo stesso disciplinare europeo data la margherita al 1796–1810, pur ripetendo la storia della regina."),
    p("Il riassunto onesto è questo: **pomodoro, mozzarella e basilico erano già un abbinamento napoletano; il nome \"margherita\" è effettivamente legato alla regina; e l'episodio del 1889 è un racconto molto diffuso, saldamente legato a una pizzeria, ma non provato da fonti dell'epoca.** Una bella storia, non una storia documentata."),
    note("La regina Margherita non ha inventato la pizza, e non si può dimostrare che Raffaele Esposito abbia inventato la margherita. Le date attribuite alle singole pizze — il 1734 per la marinara, per esempio, come riporta il disciplinare UE — vengono dalla tradizione, non da documenti conservati.", "Fatti e tradizione"),

    // ——— 8 ———
    h2("Come si fa una pizza napoletana"),
    p("Gran parte di questo si vede dal bancone di una pizzeria napoletana, dove forno e banco di lavoro sono spesso in piena vista. Ecco il procedimento come lo descrivono i due standard tradizionali, semplificato per chi visita."),
    {
      type: "steps",
      items: [
        { title: "L'impasto", text: "Acqua, sale, lievito e farina si mescolano — partendo dall'acqua e aggiungendo la farina poco alla volta — fino a ottenere una pasta liscia, morbida e non appiccicosa." },
        { title: "Prima lievitazione", text: "L'impasto riposa sul banco coperto da un panno umido, perché la superficie non si secchi formando una crosta." },
        { title: "Lo staglio", text: "Si tagliano porzioni di pasta e si formano i panetti a mano, con un gesto che l'AVPN paragona alla mozzatura della mozzarella. Ognuno pesa circa 180–280 g, secondo lo standard." },
        { title: "Seconda lievitazione", text: "I panetti lievitano di nuovo in cassette coperte, per ore, finché sono morbidi e pieni d'aria." },
        { title: "La stesura a mano", text: "Il pizzaiuolo schiaccia ogni panetto dal centro verso l'esterno con i polpastrelli, girandolo, poi lo allarga tra le mani. Niente mattarello né pressa, che farebbero uscire l'aria di cui ha bisogno il cornicione." },
        { title: "Il pomodoro", text: "Il pomodoro schiacciato si mette al centro con un cucchiaio e si distribuisce a spirale, lasciando libero il bordo." },
        { title: "Mozzarella, basilico e olio", text: "Per la margherita, fette o listelli di mozzarella e qualche foglia di basilico; per la marinara, aglio e origano. Poi un filo d'olio a spirale." },
        { title: "In forno", text: "La pizza si fa scivolare sulla pala e nel forno con un rapido colpo di polso, poi si gira con la paletta di metallo perché cuocia in modo uniforme vicino al fuoco." },
        { title: "Nel piatto", text: "Dopo 60–90 secondi esce e va direttamente in tavola. La pizza napoletana è fatta per essere mangiata subito." },
      ],
    },
    image("shaping-pizza-dough-by-hand", "Mani che schiacciano un panetto di pasta per pizza fino a farne un disco, su un piano di marmo infarinato, con cassette di panetti sullo sfondo"),
    p("Guardare una pizzeria piena a pieno ritmo fa parte del piacere: chi stende e condisce, chi al forno gira più pizze insieme, un via vai continuo di piatti. È questo il mestiere riconosciuto dall'UNESCO, ed è per questo che lo stesso impasto può dare risultati molto diversi da un pizzaiuolo all'altro."),

    // ——— 9 ———
    h2("Come ordinare e mangiare la pizza a Napoli"),
    p("Le abitudini cambiano da pizzeria a pizzeria, ma ecco che cosa è facile incontrare."),
    ul(
      "**Una pizza a testa.** In pizzeria la pizza si ordina di solito come piatto individuale, una per persona, non da dividere al centro del tavolo. È frequente condividere un antipasto di fritti; dividere una pizza in più persone lo è meno.",
      "**Arriva intera.** Molte pizzerie la servono non tagliata. Molti napoletani la mangiano con coltello e forchetta, soprattutto all'inizio, quando il centro è più morbido; altri la tagliano a spicchi e li piegano, o piegano la pizza intera. Fate come vi viene naturale.",
      "**Si mangia subito.** La pizza napoletana dà il meglio nei primi minuti. Aspettare che arrivino tutte è educato altrove; in pizzeria, di solito, si comincia quando la propria è calda.",
      "**Il menu parte dalle classiche.** Quasi tutti i menu si aprono con marinara e margherita, poi proseguono con lunghe varianti. La margherita con la bufala è spesso una voce a parte.",
      "**Da bere, cose semplici.** Birra, bibite e acqua sono le compagne abituali; molte pizzerie hanno una breve carta dei vini.",
      "**Il conto.** Alcuni locali applicano il coperto, che deve essere indicato nel menu. Il conto si chiede alla fine: di solito non arriva finché non lo si chiede.",
    ),
    image("pizza-served-naples", "Una pizza con pomodoro, mozzarella, basilico e fette di salame servita in un piatto a Napoli, con coltello e forchetta accanto e pomodorini e pasta sullo sfondo"),
    h3("File e orari"),
    p("Le pizzerie più note del centro storico hanno spesso la fila, soprattutto nel fine settimana e all'ora di cena. Molte non prendono prenotazioni: può capitare di lasciare il nome all'ingresso e aspettare di essere chiamati. Aiuta arrivare presto la sera o andare a pranzo. Le pizzerie di quartiere lontane dai luoghi più visitati sono di solito più tranquille, e la pizza può essere altrettanto buona."),
    tip("La pizza è uno dei pasti al tavolo più economici di Napoli: per il budget del viaggio vedi [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia). Non indichiamo prezzi né orari, che cambiano: verificateli con la pizzeria.", "Budget e informazioni pratiche"),

    // ——— 10 ———
    h2("La pizza a portafoglio"),
    p("La **pizza a portafoglio** — detta anche **a libretto** — è una pizza più piccola, piegata a metà e poi ancora a metà, avvolta nella carta per essere mangiata in piedi o camminando. È la versione di strada della pizza napoletana."),
    ul(
      "**Come si serve:** appena sfornata, di solito margherita o marinara, spesso con meno condimento perché il pomodoro non coli quando la si piega. Alcuni la consegnano aperta su un foglio di carta da piegare da sé; altri la piegano al momento.",
      "**Dove si trova:** ai banconi su strada di alcune pizzerie e in alcuni forni e rosticcerie, soprattutto nel centro storico.",
      "**Che differenza c'è con la pizza al tavolo:** è più veloce, più economica e più informale — uno spuntino o un pranzo leggero in movimento più che un pasto seduti. Stessa pasta e stesso forno, mangiati in un altro modo.",
    ),
    p("Le sue origini precise non sono documentate, e non abbiamo trovato prove solide per le date che a volte si citano. Ma mangiare la pizza per strada è un'abitudine antica a Napoli: gli spicchi da un soldo di Serao, nel 1884, erano cibo di strada, e la morbidezza descritta dal disciplinare UE — una pizza facilmente piegabile in quattro — rende la piegatura quasi naturale."),
    h3("La pizza fritta"),
    p("Napoli ha anche la **pizza fritta**: pasta ripiena — spesso di ricotta, provola, cicoli o pomodoro — fritta invece che cotta in forno. È un cibo di strada di lunga tradizione, celebrato nel film di Vittorio De Sica *L'oro di Napoli* (1954), il cui episodio \"Pizze a credito\" è ambientato in una friggitoria di pizze e richiama l'antica usanza di mangiare subito e pagare dopo otto giorni, la *pizza a oggi a otto*. Si trova nelle friggitorie e in pizzerie specializzate."),

    // ——— 11 ———
    h2("La pizza nella vita di tutti i giorni"),
    p("A Napoli la pizza non è un cibo delle grandi occasioni né un'attrazione turistica, anche se può essere entrambe le cose. È un pasto normale: una cena infrasettimanale con gli amici, l'uscita di famiglia nel fine settimana, un pranzo veloce al banco. Le pizzerie di quartiere fanno parte della vita quotidiana in tutta la città, non solo in centro."),
    p("Questo carattere quotidiano ha radici profonde. Ai tempi di Serao la pizza era il cibo di chi aveva pochi soldi, ed è ancora uno dei modi più economici di mangiare fuori in città. Le pizzerie sono luoghi sociali — rumorosi, veloci, affollati — dove gruppi di amici e famiglie intere dividono il tavolo, ognuno con la sua pizza."),
    image("homemade-pizza-naples", "Una piccola pizza fatta in casa con prosciutto, funghi e olive nere su un tagliere di ardesia, con un mattarello sullo sfondo, durante una serata in casa nei dintorni di Napoli"),
    p("La pizza si fa anche in casa, e la scheda UNESCO lo ricorda espressamente. Quella di casa segue di rado le regole dei professionisti: cuoce nel forno domestico, a volte si stende con il mattarello, si condisce con quello che c'è in frigo. Ma appartiene alla stessa cultura."),
    p("Dopo la pizza, molti napoletani chiudono al bar o in pasticceria invece di ordinare il dolce. Per il seguito, vedi [Il caffè italiano](/it/cibo/caffe-italiano) e [Dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani), che racconta sfogliatella e babà."),

    // ——— 12 ———
    h2("Tradizione e pizza contemporanea"),
    p("Napoli custodisce la sua tradizione, ma non l'ha congelata. Negli ultimi vent'anni il modo di fare la pizza in città è cambiato molto."),
    ul(
      "**Farine diverse** — c'è chi aggiunge farine integrali, macinate a pietra o di altri cereali.",
      "**Lievitazioni più lunghe e lente** — spesso ben oltre i minimi tradizionali, per sapore e digeribilità.",
      "**Condimenti stagionali e del territorio** — verdure, formaggi e salumi campani, usati con occhio da cuoco.",
      "**Cornicioni più alti** — il bordo molto alto e arioso di quella che viene spesso chiamata *pizza contemporanea*, detta anche **pizza canotto**, un'etichetta resa popolare dal sito gastronomico Scatti di Gusto.",
      "**Attrezzature nuove** — forni moderni a gas ed elettrici, e lievitazioni controllate in frigorifero.",
    ),
    image("burrata-cherry-tomato-pizza-campania", "Una pizza dal cornicione gonfio e maculato condita con burrata sfilacciata, pomodorini e basilico, su un tagliere di legno al bancone di una pizzeria in Campania", true),
    p("Niente di tutto questo è per forza meno autentico. La pizza napoletana è sempre cambiata: anche il pomodoro, un tempo, era una novità. Quello che serve è saper distinguere: una pizza può seguire i disciplinari tradizionali, seguire la tradizione in modo libero o essere una creazione contemporanea costruita su di essa. Alcune pizzerie propongono pizze tradizionali e contemporanee nello stesso menu, e discutere su quale sia la migliore fa parte della cultura gastronomica napoletana."),

    // ——— 13 ———
    h2("Si trova la pizza napoletana fuori da Napoli?"),
    p("Sì: lo stile si è diffuso in tutto il mondo, e si mangiano ottime pizze di stile napoletano lontano dalla Campania. Ma la parola \"napoletana\" può voler dire tre cose diverse."),
    {
      type: "cards",
      columns: 3,
      items: [
        { label: "Ispirazione", title: "Stile napoletano", text: "Una pizza fatta alla maniera napoletana: morbida, con il cornicione gonfio, cotta rapidamente ad alta temperatura. La qualità va dall'eccellente al pessimo, e l'etichetta da sola non dice quale." },
        { label: "Certificazione", title: "Uno standard preciso", text: "Una pizzeria certificata dall'AVPN, che pubblica l'elenco degli associati, oppure una pizza venduta come Pizza Napoletana STG secondo il sistema europeo." },
        { label: "Marketing", title: "Solo una parola", text: "\"Napoletana\" usato in modo generico in un menu. Nell'UE il nome \"Pizza Napoletana\" è riservato alla pizza conforme al disciplinare; fuori dall'UE la parola si usa liberamente." },
      ],
    },
    image("neapolitan-style-pizza-paris", "Una pizza in stile napoletano con il cornicione gonfio e macchiato, tagliata a spicchi su un piatto blu su un tavolo di marmo a Parigi"),
    p("Per giudicare una pizza lontano da Napoli, guardate a ciò che conta per la tradizione: una pasta morbida e leggera, non densa né croccante; un cornicione cresciuto e maculato, non piatto né bruciato; un centro sottile e tenero; pochi ingredienti buoni invece di tanti; una cottura brevissima. Che il forno vada a legna, a gas o elettrico, sono questi i segni di chi ha imparato il mestiere."),
    p("L'Italia ha molte altre tradizioni di pizza: la pizza al taglio romana, venduta a peso, e la pizza tonda romana, sottilissima e croccante; lo *sfincione* di Palermo; e infinite varianti locali. Vedi le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana) e le [tradizioni della cucina siciliana](/it/cibo/tradizioni-della-cucina-siciliana)."),

    // ——— 14 ———
    h2("Cosa sapere prima di entrare in una pizzeria napoletana"),
    ul(
      "**Non aspettatevi il croccante.** Una pizza morbida, pieghevole, con il centro umido è giusta, non sbagliata.",
      "**Provate anche la marinara, oltre alla margherita.** È la prova più chiara di impasto, pomodoro e forno.",
      "**Andate presto o tardi.** Le pizzerie famose hanno la fila nelle ore di punta; quelle di quartiere spesso no.",
      "**Una a testa, mangiata calda.** Ordinate la vostra e cominciate quando arriva.",
      "**Coltello e forchetta, o piegata.** Vanno bene entrambi.",
      "**Non fermatevi ai nomi famosi.** In tutta la città si fa buona pizza.",
      "**Controllate il coperto nel menu** e chiedete il conto quando volete.",
      "**Provatela anche per strada** — a portafoglio o fritta.",
      "**Diffidate degli slogan.** \"Pizza UNESCO\", \"la margherita originale\" e \"la pizzeria più antica\" sono marketing finché non si dimostra il contrario.",
    ),
    p("La pizza entra facilmente in una giornata nel centro storico, dove via dei Tribunali e le strade intorno sono piene di pizzerie; la nostra guida a [Napoli per la prima volta](/it/citta/napoli-per-la-prima-volta) propone itinerari e quartieri. Per arrivare a Napoli in treno, vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane); per organizzare il resto del viaggio, la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia)."),

    // ——— 15 ———
    h2("Le parole della pizza"),
    table(
      ["Parola", "Significato"],
      [
        ["Pizzaiuolo / pizzaiolo", "Chi fa la pizza; *pizzaiuolo* è la forma napoletana tradizionale, usata anche dall'UNESCO"],
        ["Cornicione", "Il bordo rialzato"],
        ["Verace", "\"Vero\", come nell'Associazione Verace Pizza Napoletana"],
        ["Fior di latte", "Mozzarella di latte vaccino"],
        ["Bufala", "Mozzarella di bufala"],
        ["Staglio", "La formatura dei panetti"],
        ["Panetto", "La porzione di pasta per una pizza"],
        ["Pala", "L'attrezzo per infornare e sfornare"],
        ["Leopardatura", "Le macchie scure sul cornicione"],
        ["A portafoglio / a libretto", "Piegata in quattro, da mangiare per strada"],
        ["Coperto", "Costo fisso a persona"],
      ],
    ),
    p("La pizza napoletana sembra il cibo più semplice del mondo, e in un certo senso lo è: farina, acqua, pomodoro, formaggio, fuoco. A renderla straordinaria è la bravura racchiusa in quella semplicità — e il fatto che, a Napoli, resti un cibo di tutti i giorni, fatto al momento per chiunque entri."),
  ],

  faqs: [
    { question: "Che cos'è la pizza napoletana?", answer: "La pizza tradizionale di Napoli: un disco di farina, acqua, sale e lievito steso a mano, con il cornicione morbido e gonfio e il centro sottile, pochi condimenti e una cottura di 60–90 secondi in un forno a legna caldissimo." },
    { question: "Che cosa rende napoletana una pizza?", answer: "Un impasto a lunga lievitazione fatto solo di farina, acqua, sale e lievito; la stesura a mano senza mattarello; condimenti semplici; una cottura brevissima a circa 430–485 °C. Il risultato è morbido e pieghevole, con il bordo rialzato, il cornicione." },
    { question: "Che differenza c'è tra marinara e margherita?", answer: "La marinara è pomodoro, aglio, origano e olio extravergine, senza formaggio. La margherita è pomodoro, mozzarella, basilico e olio." },
    { question: "La pizza marinara contiene pesce?", answer: "No. Nonostante il nome, la marinara napoletana non ha pesce né frutti di mare. Il nome è legato per tradizione ai marinai, ma la spiegazione non è documentata." },
    { question: "La pizza napoletana si fa sempre con la mozzarella?", answer: "No: la marinara non ha formaggio. Quando c'è la mozzarella può essere di bufala (Mozzarella di Bufala Campana DOP) o fior di latte, di latte vaccino." },
    { question: "Serve il pomodoro San Marzano?", answer: "No. Il Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP è pregiato e molto usato, ma né il disciplinare UE né quello dell'AVPN lo impongono. Entrambi prevedono pomodori pelati, e ammettono anche i pomodorini freschi." },
    { question: "Che cos'è il cornicione?", answer: "Il bordo rialzato e gonfio della pizza napoletana. Si forma schiacciando la pasta dal centro verso l'esterno: l'aria spinta verso il bordo lo fa crescere in forno." },
    { question: "Perché la pizza napoletana cuoce così in fretta?", answer: "Perché il forno è caldissimo, circa 430–485 °C. A quella temperatura la pizza cuoce in 60–90 secondi: il cornicione si gonfia prima di seccarsi e il centro resta morbido." },
    { question: "La pizza napoletana è bassa o alta?", answer: "Tutte e due le cose: il centro è sottilissimo, pochi millimetri, mentre il cornicione è alto e arioso. È morbida, non croccante." },
    { question: "La pizza napoletana si cuoce sempre nel forno a legna?", answer: "Gli standard tradizionali lo richiedono, e molte pizzerie napoletane lo usano. Alcune oggi usano forni a gas o elettrici che raggiungono temperature simili: la pizza può essere ottima, ma non rispetta i disciplinari tradizionali." },
    { question: "Che cosa ha riconosciuto l'UNESCO?", answer: "Dal 2017 l'\"Arte del pizzaiuolo napoletano\" è nella Lista rappresentativa del Patrimonio culturale immateriale dell'umanità. Riconosce il mestiere del pizzaiuolo e la sua trasmissione, non la pizza come cibo né una pizzeria in particolare." },
    { question: "La margherita prende davvero il nome dalla regina Margherita?", answer: "Il nome è legato a lei, ma il famoso racconto della visita reale del 1889 a Raffaele Esposito non è confermato da fonti dell'epoca, e gli storici dubitano della lettera esposta come prova. Le pizze con pomodoro, mozzarella e basilico sembrano precedenti." },
    { question: "Che cosa vuol dire pizza a portafoglio?", answer: "Una pizza piccola piegata in quattro e avvolta nella carta, da mangiare per strada. Si chiama anche pizza a libretto." },
    { question: "Come si ordina la pizza a Napoli?", answer: "Una pizza a testa, da mangiare appena arriva — con coltello e forchetta o piegata — chiedendo il conto alla fine. Controllate nel menu se c'è il coperto." },
    { question: "Si può mangiare una vera pizza napoletana fuori da Napoli?", answer: "Sì. Molte pizzerie nel mondo seguono fedelmente la tradizione, e l'AVPN certifica pizzerie associate anche all'estero. Ma \"napoletana\" in un menu non è una garanzia: giudicate impasto, cornicione e cottura." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "UNESCO — Art of Neapolitan 'Pizzaiuolo' (in inglese)", url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722", note: "iscrizione 2017 (12.COM); descrizione dell'elemento" },
    { label: "Regolamento (UE) n. 97/2010 — Pizza Napoletana STG", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32010R0097", note: "disciplinare" },
    { label: "Regolamento di esecuzione (UE) 2022/2313 — Pizza Napoletana STG con riserva del nome", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32022R2313", note: "in vigore da dicembre 2022" },
    { label: "Associazione Verace Pizza Napoletana — Disciplinare internazionale", url: "https://www.pizzanapoletana.org/it/ricetta_pizza_napoletana", note: "standard attuale, verificato a ottobre 2026" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Mozzarella di Bufala Campana DOP; Pomodoro San Marzano dell'Agro Sarnese-Nocerino DOP; Pomodorino del Piennolo del Vesuvio DOP" },
    { label: "Regolamento (CE) n. 2527/98 — Mozzarella STG", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:31998R2527", note: "distinta della Mozzarella" },
    { label: "Matilde Serao, Il ventre di Napoli (1884)", url: "https://www.liberliber.it/online/autori/autori-s/matilde-serao/il-ventre-di-napoli/", note: "la pizza nella Napoli di fine Ottocento" },
    { label: "Antonio Mattozzi, Inventing the Pizzeria: A History of Pizza Making in Naples (Bloomsbury, 2015)", url: "https://www.bloomsbury.com/uk/inventing-the-pizzeria-9781472586162/", note: "edizione inglese di Una storia napoletana. Pizzerie e pizzaiuoli tra Sette e Ottocento (Slow Food Editore, 2009)" },
    { label: "Zachary Nowak, \"Folklore, Fakelore, History: Invented Tradition and the Origins of the Pizza Margherita\", Food, Culture & Society 17:1 (2014)", url: "https://doi.org/10.2752/175174414X13828682779249", note: "il racconto del 1889; in inglese" },
  ],
};
