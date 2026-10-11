import type { ArticleContent, ContentBlock } from "@/lib/types";

// Edizione italiana: Formati di pasta italiani.
// Scritta in italiano per lettori italiani — non è una traduzione letterale
// dell'edizione inglese. Fatti e fonti corrispondono all'edizione inglese.
// Associazioni regionali, convenzioni di abbinamento e terminologia verificati
// contro le stesse fonti dell'edizione inglese (v. italian-pasta-shapes.ts).

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-pasta-shapes";

export const formatiDiPastaItaliani: ArticleContent = {
  body: [
    h2("Perché il formato di pasta conta"),
    answer("**Il formato di pasta influisce su come la pasta cuoce, su come trattiene il condimento e su com'è percepita in bocca.** Una superficie rigata o porosa trattiene il sugo meglio di una liscia; un formato ampio e robusto regge il ragù senza disfarsi; un formato sottile e delicato viene travolto da un condimento pesante e funziona meglio in brodo o con un sugo leggero. Un picio fatto a mano a Siena e uno spaghetto prodotto in fabbrica a Napoli sono entrambi pasta, ma si comportano diversamente in pentola e a tavola."),
    p("Le associazioni tra formato e condimento esistono per buone ragioni pratiche — ma non sono leggi fisse. I cuochi italiani abbinano da secoli i formati che hanno a disposizione ai condimenti che conoscono, e le combinazioni variano da regione a regione, da paese a paese e da famiglia a famiglia. Gli abbinamenti descritti in questa guida riflettono le tradizioni più diffuse e documentate, non regole che escludano altre possibilità."),
    p("Questa guida copre le principali categorie di pasta italiana, percorre i formati più strettamente associati a ogni regione e offre indicazioni pratiche per chi vuole comprare, cucinare o mangiare pasta in Italia. I link interni rimandano agli articoli su pasta romana, mercati alimentari, tradizioni della cucina italiana e altri argomenti del sito."),
    {
      type: "facts",
      title: "I formati di pasta italiani in sintesi",
      rows: [
        { label: "Quanti formati esistono", value: "L'Italia ha diverse centinaia di formati di pasta documentati; le stime variano considerevolmente a seconda di cosa si conta come formato distinto e cosa come variante regionale" },
        { label: "Principali categorie", value: "Pasta lunga, pasta corta, pasta a nastro, pasta in brodo, pasta ripiena — con variazioni significative per diametro, consistenza, superficie e composizione dell'impasto" },
        { label: "Tipi di impasto", value: "La pasta secca è quasi sempre prodotta con semola di grano duro e acqua. La pasta fresca all'uovo del Centro-Nord usa farina di grano tenero e uova. Molti formati del Sud usano semola e acqua senza uova." },
        { label: "Radici regionali", value: "Ogni regione italiana ha tradizioni pastarie distinctive. Alcuni formati sono genuinamente locali; altri si sono diffusi a livello nazionale pur mantenendo un'identità regionale nel nome e nell'associazione." },
        { label: "Abbinamenti", value: "Le convenzioni di abbinamento formato-condimento sono tradizioni culinarie, non prescrizioni assolute. Riflettono differenze reali nel comportamento dei formati con diversi tipi di sugo, ma variano per cuoco, famiglia e zona." },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Le principali categorie di pasta",
        "Pasta lunga: spaghetti, linguine, bucatini",
        "Pasta a nastro: tagliatelle e pappardelle",
        "Pasta corta e tubolare",
        "Pasta ripiena",
        "I formati di pasta regione per regione",
        "Tabella comparativa dei formati",
        "Quale formato abbinare a quale sugo",
        "Pasta fresca e pasta secca",
        "Come cucinare la pasta",
        "Comprare la pasta in Italia",
        "Luoghi comuni da sfatare",
        "Glossario della pasta italiana",
      ],
    },
    image("pasta-board-variety", "Un tagliere di legno coperto di pasta fresca in vari formati e dimensioni, pronta per la cottura", true),

    // ——— Categorie ———
    h2("Le principali categorie di pasta"),
    p("La pasta si classifica in diversi modi sovrapposti: per forma, per lunghezza, per la presenza o meno di un ripieno, per la composizione dell'impasto e per il metodo di produzione. Nessuna classificazione copre tutti i casi in modo ordinato — produttori, regioni e ricettari tracciano i confini diversamente. Per chi cucina, le distinzioni più utili sono tra pasta lunga e corta, tra pasta fresca e secca, e tra pasta ripiena e non ripiena."),
    h3("Pasta lunga"),
    p("La pasta lunga si divide in due grandi famiglie: i formati tondi (spaghetti e affini) e i formati a nastro piatto (fettuccine, tagliatelle, pappardelle). La pasta lunga tonda è generalmente secca; quella a nastro può essere fresca o secca e contiene di solito le uova quando è fatta fresca nel Centro-Nord."),
    ul(
      "**Spaghetti:** Il formato più prodotto in Italia — una pasta tonda e sottile, tipicamente di semola di grano duro e acqua. Il nome deriva da 'spago'. Diffuso in tutta Italia e nel mondo, senza una rivendicazione regionale esclusiva.",
      "**Linguine:** Simili agli spaghetti ma schiacciate in sezione ovale. 'Piccole lingue'. Strettamente associate al pesto ligure e alle preparazioni di mare; usate ampiamente anche in Campania.",
      "**Bucatini:** Un formato lungo, cavo, più spesso degli spaghetti, con un foro al centro. Tipicamente associato a Roma, dove viene usato nei bucatini all'amatriciana. Il canale interno si comporta in modo diverso rispetto a un formato solido.",
      "**Tonnarelli:** Uno spaghetto a sezione quadrata — più spesso del normale, con una consistenza leggermente più tenace. Formato romano per eccellenza, usato nella cacio e pepe e in altre preparazioni romane.",
      "**Spaghetti alla chitarra:** Pasta a sezione quadrata, a base di uova, tradizionale in Abruzzo, dove la chitarra (una cornice con fili metallici tesi) è uno strumento di cucina domestica. Imparentato con il tonnarelli ma con radici regionali proprie.",
    ),
    h3("Pasta a nastro"),
    image("tagliatelle-ribbon", "Un nido di tagliatelle non cotte con pomodori ciliegia su una superficie scura, che mostra i nastri dorati della pasta all'uovo", true),
    p("La pasta a nastro è caratterizzata da strisce piatte di larghezza variabile. La larghezza influisce sulla consistenza e sul peso del condimento che il formato può sostenere — nastri sottili richiedono condimenti più leggeri; le pappardelle ampie reggono un ragù spesso senza cedere."),
    ul(
      "**Fettuccine:** Pasta all'uovo a nastro, larga circa 5–7mm, strettamente associata a Roma e al Centro Italia. Usate nel ragù e in vari condimenti al burro.",
      "**Tagliatelle:** Pasta all'uovo a nastro, larga circa 6–8mm, fortemente legata all'Emilia-Romagna — e alla tradizione bolognese in particolare. Abbinamento canonico: il ragù alla Bolognese. La larghezza precisa delle tagliatelle alla Bolognese è registrata presso la Camera di Commercio di Bologna come equivalente a 1/12.704 dell'altezza della Torre degli Asinelli.",
      "**Tajarin:** Pasta all'uovo sottilissima piemontese, ancora più fine delle tagliatelle. Preparata con un numero elevato di tuorli per chilo di farina, che le conferisce un colore giallo intenso. Associate a burro e tartufo, e a sughi di carne leggeri.",
      "**Pappardelle:** Nastri larghi, circa 13–20mm, associati alla Toscana e al Centro Italia. La larghezza le rende adatte a ragù corposi e spessi — lepre, cinghiale, anatra — dove un formato più sottile si perderebbe.",
      "**Trenette:** Pasta ligure lunga e piatta, simile alle linguine ma leggermente più stretta, associata specificamente al pesto Genovese. Nella preparazione tradizionale ligure, le trenette al pesto si cuociono insieme a patate e fagiolini nello stesso acqua.",
    ),
    h3("Pasta corta"),
    image("rigatoni-tube-pasta", "Vista ravvicinata di rigatoni crudi che mostra la caratteristica texture rigata sulla superficie esterna", true),
    p("La pasta corta comprende formati lisci o rigati, con o senza canale interno, in decine di varianti. La superficie conta quanto la forma — rigature e fori trattengono il condimento in modo che le superfici lisce non possono replicare."),
    ul(
      "**Penne:** Un tubicino tagliato in diagonale, disponibile liscio o rigato. Uno dei formati più diffusi in Italia. Le penne lisce si abbinano meglio a condimenti più leggeri a base di olio o pomodoro fresco; le penne rigate trattengono meglio un ragù.",
      "**Rigatoni:** Tubi grandi e rigati, più larghi delle penne e tagliati dritto. Rigature e canale interno trattengono condimenti e carne. Formato strettamente associato alla cucina romana — i rigatoni alla carbonara e i rigatoni con la pajata compaiono sui menu delle trattorie di Roma.",
      "**Mezze maniche:** Una variante più corta e larga del rigatoni — 'mezze maniche' appunto. Formato romano usato in diverse preparazioni classiche.",
      "**Farfalle:** Forma a farfalla o papillon, ottenuta pizzicando al centro un rettangolo di pasta. I bordi rimangono più spessi rispetto al centro, creando consistenze diverse nello stesso boccone.",
      "**Fusilli:** Formato a spirale, originariamente arrotolato a mano attorno a un ferro sottile. Le spirali trattengono bene condimenti densi e particolari. Originari del Sud Italia, oggi prodotti industrialmente in tutta Italia.",
      "**Paccheri:** Tubi molto grandi e lisci della Campania. Sostanzialmente dei rigatoni sovradimensionati. Usati con sughi di mare, preparazioni di pomodoro spesso e, talvolta, ripieni e al forno.",
    ),
    h3("Pasta ripiena"),
    image("tortellini-stuffed", "Un mucchio di tortellini ad anello su una superficie, che mostra i bordi piegati e sigillati tipici della pasta ripiena", true),
    p("La pasta ripiena si ottiene avvolgendo o piegando una sfoglia attorno a un ripieno di carne, formaggio, verdure o una combinazione. I confini tra i formati sono spesso labili — la stessa forma di base ha nomi, ripieni e tradizioni diversi a seconda della regione."),
    ul(
      "**Ravioli:** La pasta ripiena più conosciuta — due sfoglie sottili sigillate attorno a un ripieno, tipicamente di forma quadrata. Presente in tutta Italia con ripieni che variano per regione: ricotta e spinaci in Toscana, carne in Piemonte, pesce lungo le coste.",
      "**Tortellini:** Piccola pasta ripiena ad anello dell'Emilia-Romagna, in particolare dell'area bolognese-modenese. Tradizionalmente ripieni con una miscela di lombo di maiale, prosciutto di Parma, Mortadella, Parmigiano Reggiano e noce moscata, poi ripiegati e sigillati. La preparazione tradizionale prevede di servirli in brodo (in brodo); la versione con la panna è meno tradizionale.",
      "**Cappelletti:** Per aspetto simili ai tortellini ma leggermente più grandi e con una piega diversa, che crea una forma a 'cappelletto'. Della Romagna, dove in alcune tradizioni si usano ripieni a base di formaggio, in altre a base di carne. Si servono tradizionalmente in brodo di cappone.",
      "**Agnolotti del Plin:** Pasta ripiena piemontese — 'plin' significa pizzicotto in dialetto piemontese e indica la sigillatura caratteristica. Ripieni di carne arrostita, Parmigiano Reggiano e talvolta verdure. Tradizionalmente conditi con il sugo di cottura dell'arrosto usato per il ripieno, o semplicemente burro e salvia.",
      "**Culurgiones:** Pasta ripiena sarda della zona dell'Ogliastra, riconoscibile per la chiusura intrecciata a spiga di grano. Ripieni di patate, Pecorino Sardo e menta. La tecnica di chiusura — considerata un'arte tramandata in famiglia — è tra le più elaborate della tradizione pastaia italiana.",
    ),
    h3("Pasta in brodo"),
    p("I formati piccoli destinati a essere cotti in brodo — detti collettivamente *pastina* o *pasta in brodo* — comprendono ditalini, stelline, orzo, acini di pepe, quadrucci. Non si abbinano a un condimento: il loro scopo è dare corpo e texture al brodo senza struttura propria."),
    h3("Trafilata al bronzo"),
    p("*Trafilata al bronzo* significa che la pasta è stata estrusa attraverso una trafila in bronzo anziché in Teflon. La trafila in bronzo lascia sulla pasta una superficie leggermente ruvida e porosa; quella in Teflon produce una superficie più liscia e lucida. La ruvidità può aiutare il condimento ad aderire."),
    note("La pasta trafilata al bronzo non è automaticamente superiore a quella trafilata al Teflon. La qualità del grano, il processo di essiccazione e la cura produttiva influiscono sul risultato finale almeno quanto il materiale della trafila. La pasta al bronzo tende a costare di più; se questo maggiore costo si traduca in un risultato migliore dipende dal prodotto specifico."),

    // ——— Guida regionale ———
    h2("I formati di pasta regione per regione"),
    p("Le tradizioni pastarie italiane si sono sviluppate regione per regione, modellate dal tipo di grano locale, dal bestiame, dalla geografia e da secoli di abitudini culinarie. Le associazioni regionali descritte di seguito riflettono le tradizioni più documentate — non significano che i formati siano sconosciuti altrove o che appartengano esclusivamente a un'unica regione."),
    image("pasta-making-fresh", "Una persona che passa della pasta fresca attraverso una macchina sfogliatrice, tagliandola in nastri su una superficie infarinata", true),
    h3("Liguria"),
    p("Le **trofie** sono pasta corta, attorta, di semola o farina morbida, associate specificamente alla Liguria e in particolare all'area di Recco e Genova. La preparazione classica è *trofie al pesto Genovese* — la spirale trattiene particolarmente bene il pesto di basilico, pinoli e Parmigiano. Le **trenette** sono più lunghe e piatte, anch'esse tradizionali con il pesto. Nella versione ligure tradizionale, trenette al pesto, patate e fagiolini vengono cotti nella stessa acqua della pasta."),
    h3("Piemonte"),
    p("I **tajarin** (anche *tajarìn* in piemontese) sono pasta all'uovo sottilissima, preparata con un numero elevato di tuorli per chilo di farina — a volte dieci o più. Questa ricchezza conferisce al formato un colore intenso e un sapore specifico. Associati alle Langhe e al Monferrato, compaiono con burro e tartufo locale, con ragù e in altre preparazioni regionali."),
    p("Gli **agnolotti del Plin** sono la pasta ripiena piemontese per eccellenza — piccoli cuscini sigillati con un pizzicotto caratteristico, ripieni di carne arrostita. Il 'plin' — pizzicotto in piemontese — distingue questo formato dai ravioli più grandi ed è caratteristico della tecnica piemontese."),
    h3("Lombardia"),
    p("I **pizzoccheri** sono pasta piatta e corta con una quota elevata di farina di grano saraceno, originari della Valtellina. La preparazione tradizionale prevede la cottura dei pizzoccheri con verza, patate, Valtellina Casera DOP (o Bitto) e burro — un piatto tipicamente alpino adatto al territorio montano dove il grano saraceno è cresciuto storicamente quando il grano tenero scarseggiava. I Pizzoccheri della Valtellina hanno ottenuto il riconoscimento IGP."),
    h3("Emilia-Romagna"),
    p("L'Emilia-Romagna ha forse la tradizione di pasta fresca più celebre d'Italia. Le **tagliatelle** — pasta all'uovo a nastro, la cui larghezza è registrata presso la Camera di Commercio di Bologna — si abbinano tradizionalmente al ragù alla Bolognese (un sugo di carne a cottura lenta, non un sugo ricco di pomodoro). I **tortellini** sono la pasta ripiena più strettamente associata a Bologna e Modena, tradizionalmente servita in brodo. La composizione del ripieno nella tradizione bolognese classica (lombo di maiale, prosciutto, mortadella, Parmigiano Reggiano, noce moscata) è documentata dall'Accademia Italiana della Cucina."),
    p("I **cappelletti**, simili ai tortellini per aspetto, sono associati alla Romagna piuttosto che a Bologna o Modena. Ripieni e tradizioni variano — in alcune tradizioni romagnole compaiono ripieni a base di formaggio accanto a quelli a base di carne."),
    h3("Toscana"),
    p("I **pici** (a volte *pinci*) sono pasta lunga e spessa, lavorata a mano, ottenuta da un impasto di farina e acqua senza uova, arrotolata a formare una sorta di spaghetto irregolare e robusto. Fortemente associati alla Toscana meridionale, soprattutto alle province di Siena e Grosseto. Le preparazioni tradizionali comprendono i *pici all'aglione* (aglio dolce e pomodoro), i *pici cacio e pepe* e i *pici al ragù di cinghiale*."),
    p("Le **pappardelle**, nastri larghi all'uovo, sono associate alla Toscana e al Centro Italia. La loro larghezza le rende il formato convenzionale per i ragù di selvaggina — lepre alla cacciatora e cinghiale sono le preparazioni più documentate."),
    h3("Lazio"),
    p("I **bucatini** — spaghetti cavi e più spessi — sono associati a Roma, dove vengono usati nei *bucatini all'amatriciana*. I **rigatoni** e le **mezze maniche** compaiono in diverse altre preparazioni romane. I **tonnarelli**, pasta a sezione quadrata a base di uova, sono il formato associato alla *tonnarelli cacio e pepe*."),
    p("Per una trattazione dettagliata dei quattro piatti di pasta romani classici — carbonara, cacio e pepe, amatriciana e gricia — e dei formati associati a ciascuno, consultate la [guida alla pasta romana](/it/cibo/pasta-romana)."),
    h3("Campania"),
    p("I **paccheri** sono tubi grandi e lisci, associati a Napoli e alla Campania. Compaiono con sughi di mare spessi, con preparazioni ricche al pomodoro e talvolta ripieni e al forno. Gli **ziti** sono tubi lunghi e lisci, tradizionalmente spezzati a mano prima della cottura in alcune preparazioni, specialmente per i piatti al forno. Gli **scialatielli** sono pasta fresca corta associata alla Costiera Amalfitana, con basilico e latte nell'impasto, tipicamente serviti con frutti di mare."),
    h3("Puglia"),
    p("Le **orecchiette** — 'piccole orecchie' — sono la pasta più caratteristica della Puglia. Di semola di grano duro e acqua, si formano premendo e strisciando un pezzetto di impasto con un coltello per creare una forma concava con superficie rugosa. La preparazione tradizionale per eccellenza è *orecchiette con le cime di rapa*, con aglio e, spesso, acciuga. I **cavatelli**, simili ma leggermente più lunghi e a conchiglia, si trovano in tutta l'Italia meridionale."),
    h3("Basilicata"),
    p("Gli **strascinati** — dal verbo *strascinare*, trascinare — si formano trascinando un pezzetto d'impasto su una superficie con la punta delle dita o con uno strumento, creando un formato piatto simile alle orecchiette ma con l'impronta dello strumento visibile. Il nome e la forma compaiono in tutta l'Italia meridionale con varianti locali."),
    h3("Calabria"),
    p("La **fileja** (o *fileja calabrese*) è un formato associato all'area di Vibo Valentia. L'impasto viene avvolto attorno a un ferro sottile e arrotolato per creare un formato cavo e leggermente attorcigliato. Si abbina alla *'nduja* calabrese e ai ragù di agnello."),
    h3("Sicilia"),
    p("Le **busiate** sono pasta lunga e attorta, associate all'area di Trapani nella Sicilia occidentale. Si abbinano più strettamente al *pesto Trapanese* — una salsa cruda di mandorle, pomodori, basilico e aglio che precede cronologicamente il pesto genovese e riflette l'influenza arabo-siciliana nell'uso delle mandorle."),
    p("Gli **anelletti** sono piccoli anelli di pasta, associati soprattutto a Palermo. Il loro uso principale è negli *anelletti al forno*, una pasta al forno che è un piatto tipico dello street food palermitano, tipicamente farcita con ragù, piselli, melanzane e formaggio. Palermo è approfondita nella [guida ai mercati e ai monumenti di Palermo](/it/citta/palermo-per-la-prima-volta)."),
    h3("Sardegna"),
    p("I **malloreddus** (detti anche *gnocchetti sardi*) sono pasta corta e rigata di semola, simili per aspetto a piccoli cavatelli. L'abbinamento più tipico è con il sugo *campidanese* — salsiccia di maiale, pomodoro e zafferano. I **culurgiones** sono pasta ripiena dell'Ogliastra: ripieno di patate, Pecorino Sardo e menta, con la caratteristica chiusura intrecciata a spiga."),

    // ——— Tabella ———
    h2("Tabella comparativa dei formati"),
    table(
      ["Formato", "Categoria", "Associazione regionale", "Abbinamento tradizionale"],
      [
        ["Spaghetti", "Lungo, tondo", "Diffuso in tutta Italia", "Carbonara, pomodoro, aglio e olio, vongole"],
        ["Linguine", "Lungo, ovale", "Liguria, Campania; diffuso", "Pesto, frutti di mare, vongole"],
        ["Bucatini", "Lungo, cavo", "Lazio (Roma)", "Amatriciana, carbonara"],
        ["Tonnarelli", "Lungo, sezione quadrata, all'uovo", "Lazio (Roma)", "Cacio e pepe"],
        ["Tagliatelle", "Nastro all'uovo", "Emilia-Romagna (Bologna)", "Ragù alla Bolognese"],
        ["Tajarin", "Nastro sottilissimo, all'uovo", "Piemonte (Langhe)", "Burro e tartufo, ragù leggero"],
        ["Pappardelle", "Nastro ampio, all'uovo", "Toscana, Centro Italia", "Ragù di lepre o cinghiale"],
        ["Trenette", "Lungo, piatto (ligure)", "Liguria", "Pesto Genovese con patate e fagiolini"],
        ["Trofie", "Corto, attorto", "Liguria", "Pesto Genovese"],
        ["Pici", "Lungo, spesso, fatto a mano", "Toscana (Siena/Grosseto)", "Aglione, cacio e pepe, ragù"],
        ["Penne rigate", "Tubo corto rigato", "Diffuse in tutta Italia", "Arrabbiata, amatriciana, ragù"],
        ["Rigatoni", "Tubo grande rigato", "Lazio; diffusi", "Carbonara, amatriciana, pajata"],
        ["Paccheri", "Tubo molto grande liscio", "Campania", "Frutti di mare, sughi di pomodoro spessi"],
        ["Orecchiette", "Corto, a orecchia", "Puglia", "Cime di rapa, salsiccia"],
        ["Tortellini", "Ripieno ad anello", "Emilia-Romagna (Bologna/Modena)", "Brodo (in brodo)"],
        ["Cappelletti", "Ripieno a cappelletto", "Romagna", "Brodo (in brodo), panna"],
        ["Agnolotti del Plin", "Ripieno piccolo, plinzato", "Piemonte", "Sugo di cottura, burro"],
        ["Busiate", "Lungo, attorto", "Sicilia (Trapani)", "Pesto Trapanese"],
        ["Malloreddus", "Corto, rigato, semola", "Sardegna", "Campidanese (salsiccia e zafferano)"],
        ["Pizzoccheri", "Nastro corto, grano saraceno", "Lombardia (Valtellina)", "Al forno con verza, patate, formaggio"],
      ],
      "Abbinamenti come da tradizioni documentate. Le associazioni regionali riflettono le tradizioni principali; i formati compaiono in più regioni.",
    ),

    // ——— Abbinamenti ———
    h2("Quale formato abbinare a quale sugo"),
    image("pasta-sauce-plate", "Un piatto di spaghetti con un sugo ricco di pomodoro ed erbe aromatiche, servito su un piatto bianco", true),
    p("L'abbinamento formato-sugo si basa su proprietà fisiche reali. Ma i principi sono linee guida, non regole. Ecco come funziona la logica:"),
    h3("Superficie e rigature"),
    p("La pasta rigata — rigatoni, penne rigate, fusilli — ha una superficie più ampia e texturizzata per trattenere il condimento. Per ragù corposi, sughi di carne o preparazioni con piccoli pezzi di carne o verdura, la pasta rigata trattiene meglio i componenti rispetto a quella liscia. Le penne lisce funzionano con condimenti più leggeri a base di olio o panna, dove si vuole il sapore della pasta stessa piuttosto che la sua capacità di trattenere il sugo."),
    h3("Formati cavi"),
    p("La pasta cava — bucatini, penne, rigatoni, paccheri — trattiene il condimento sia all'interno che all'esterno. Il canale stretto dei bucatini fa sì che ogni singola pasta offra allo stesso tempo la copertura esterna e una piccola quota di sugo dall'interno. La cavità ampia dei paccheri può contenere una quantità significativa di sugo spesso, rendendo ogni pezzo una sorta di involucro."),
    h3("Larghezza e peso per la pasta lunga"),
    p("La pasta lunga sottile — spaghetti, linguine — funziona con sughi a base di olio, di mare o di pomodoro fresco, dove l'obiettivo è una copertura leggera. Preparazioni più pesanti sopraffanno i formati fini. I nastri più ampi — pappardelle, tagliatelle — reggono ragù sostanziosi a cottura lenta senza perdersi sotto il condimento."),
    h3("Pasta ripiena"),
    p("La pasta ripiena ha i propri abbinamenti consueti perché il ripieno è già il sapore principale. La maggior parte delle tradizioni di pasta ripiena prevede un accompagnamento leggero che non compete con il ripieno: brodo per tortellini e cappelletti; burro e salvia per agnolotti del Plin e culurgiones; sughi semplici per i ravioli. Condimenti ricchi e pesanti sulla pasta ripiena tendono a sovrastare il carattere del ripieno."),
    h3("Pasta in brodo"),
    p("La pasta in brodo — ditalini, stelline, orzo — è pensata per cuocere nel brodo e aggiungere consistenza senza struttura. Il formato piccolo permette una cottura rapida senza richiedere le proprietà di adesione rilevanti per i formati più grandi."),

    // ——— Fresca vs Secca ———
    h2("Pasta fresca e pasta secca"),
    image("pasta-dough-flour", "Farina disposta su una superficie di legno con un uovo al centro, il punto di partenza tradizionale per l'impasto della pasta fresca", true),
    p("Pasta fresca e pasta secca sono prodotti diversi con punti di forza diversi — non versioni migliore e peggiore della stessa cosa."),
    h3("Pasta secca"),
    p("La pasta secca è prodotta quasi interamente con semola di grano duro e acqua. L'elevato contenuto di glutine e la bassa umidità del grano duro producono una pasta che mantiene la forma durante l'essiccazione, ha lunga conservabilità e dà la caratteristica consistenza al dente quando cotta correttamente. La pasta secca può essere prodotta a livelli di qualità molto elevati — alcuni pastifici artigianali in Campania, Puglia e Sicilia producono pasta secca considerata eccellente."),
    p("Non tutta la pasta secca è uguale. Il metodo di estrusione (trafila al bronzo o al Teflon), la qualità del grano e la velocità di essiccazione influenzano il prodotto finale. La pasta essiccata lentamente a bassa temperatura conserva generalmente più sapore del grano e una superficie più porosa rispetto a quella essiccata rapidamente ad alte temperature."),
    h3("Pasta fresca"),
    p("La pasta fresca viene tipicamente preparata con farina di grano tenero (tipo 00) e uova, specialmente in Emilia-Romagna e in Piemonte. Le uova danno alla pasta fresca una consistenza più morbida, un sapore più ricco e il colore dorato caratteristico delle tagliatelle emiliane e dei tajarin piemontesi."),
    p("La pasta fresca non è però sempre all'uovo. Molti formati freschi del Sud — orecchiette, cavatelli, pici, trofie — si preparano con semola o farina e acqua. La generalizzazione Nord-uova / Sud-senz'uova vale in linea di massima ma ha molte eccezioni."),
    p("La pasta fresca cuoce molto più rapidamente della pasta secca — tipicamente uno-tre minuti, in base allo spessore. Non richiede lo stesso approccio al dente della pasta secca; l'obiettivo è di solito una consistenza morbida e setosa."),
    h3("Come scegliere"),
    p("Per piatti dove il sapore e la consistenza della pasta sono centrali — preparazioni semplici al burro, tradizioni di pasta all'uovo fresca — la pasta fresca o quella artigianale secca di alta qualità ripagano l'attenzione. Per preparazioni più robuste — pasta al forno, ragù di carne sostanziosi, sughi a base di pomodoro — una buona pasta secca funziona bene ed è più semplice da cuocere in modo costante."),

    // ——— Come cucinare ———
    h2("Come cucinare la pasta"),
    image("pasta-cooking-pot", "Pasta secca che viene calata in una grande pentola di acqua bollente e ben salata", true),
    p("La cottura della pasta richiede meno conoscenze tecniche di quante ne suggerisca il numero di opinioni sull'argomento. Alcuni principi affidabili coprono la maggior parte delle situazioni."),
    ul(
      "**Usate abbastanza acqua.** Una pentola grande con acqua abbondante, ben salata e in ebollizione vivace, dà alla pasta spazio per muoversi e previene l'incollamento.",
      "**Salate l'acqua generosamente.** L'acqua di cottura deve essere stagionata in modo significativo — spesso si dice che debba sapere 'di mare' — perché è l'unica occasione per condire la pasta dall'interno. L'acqua non salata produce pasta insipida indipendentemente dal condimento.",
      "**Seguite le indicazioni del pacchetto, poi assaggiate.** I tempi di cottura indicati in etichetta non sono esatti; variano per formato, spessore, marca e preferenze di cottura. Il tempo indicato è un punto di partenza. Assaggiate un minuto o due prima del tempo indicato.",
      "**Capite cosa significa al dente.** Letteralmente 'al dente' — una consistenza in cui la pasta offre resistenza e mantiene una certa fermezza quando la si morde, senza un centro crudo. Il punto varia per formato e spessore. Alcune preparazioni, specialmente quelle in cui la pasta viene ripassata nel sugo, traggono vantaggio da un passaggio in padella prima del tempo indicato.",
      "**Conservate l'acqua di cottura prima di scolare.** L'acqua amidacea della cottura è un utile agente emulsionante che aiuta i condimenti a legarsi e a rivestire la pasta. Una tazza da parte prima di scolare raramente va sprecata.",
      "**Finite la pasta nel sugo.** Molte preparazioni italiane prevedono di trasferire la pasta scolata direttamente nel sugo in padella, dove finisce di cuocere per un minuto o due assorbendo il condimento. Questo passaggio integra pasta e sugo meglio che impiattare la pasta e versarci il condimento sopra.",
    ),
    tip("Sciacquare la pasta cotta sotto l'acqua fredda rimuove l'amido che aiuta il condimento ad aderire. Per i piatti di pasta caldi, non sciacquate. Il risciacquo a freddo è indicato solo per insalate di pasta."),

    // ——— Comprare ———
    h2("Comprare la pasta in Italia"),
    image("pasta-market-display", "Pasta fresca, pomodori e aglio esposti per la vendita in un mercato o negozio di alimentari italiano", true),
    p("La pasta si trova ovunque in Italia — nei supermercati, nelle gastronomie e nei pastifici. La qualità e la varietà variano considerevolmente tra i diversi punti vendita."),
    h3("Pasta secca nei negozi"),
    p("I supermercati offrono un'ampia gamma di pasta secca di marchi nazionali e regionali. La pasta italiana anche a prezzi contenuti è generalmente di buona qualità rispetto agli standard internazionali; il salto di qualità si trova nei produttori artigianali — spesso marchi regionali — che costano di più e possono essere più difficili da trovare fuori dalla loro regione d'origine."),
    p("Cercate *semola di grano duro* come ingrediente principale, e *trafilata al bronzo* come indicazione del metodo produttivo. Una superficie leggermente ruvida e opaca sulla pasta secca indica produzione con trafila al bronzo; una superficie molto liscia e lucida indica estrusione al Teflon."),
    h3("Pasta fresca — pastifici e mercati"),
    p("I pastifici producono pasta fresca ogni giorno. In Emilia-Romagna, la tradizione regionale intorno alla pasta fresca è così radicata che la *sfoglina* — la pasta maker esperta che stende e taglia la pasta a mano — è una professione riconosciuta. I mercati principali in tutta Italia — la Porta Palazzo di Torino, il Mercato di Mezzo di Bologna, il Ballarò di Palermo — ospitano spesso banchi di pasta fresca. Per una guida su come trovare e orientarsi nei mercati alimentari italiani, consultate la [guida ai mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani)."),
    ul(
      "**Pasta fresca** — pasta fresca, di solito disponibile il giorno stesso o entro due-tre giorni",
      "**Pasta secca** — pasta secca",
      "**Pasta ripiena** — pasta ripiena",
      "**Pasta all'uovo** — pasta all'uovo (fresca o secca)",
      "**Pasta integrale** — pasta integrale",
      "**Pasta di farro** — pasta di farro",
      "**Pasta senza glutine** — pasta senza glutine",
    ),

    // ——— Luoghi comuni ———
    h2("Luoghi comuni da sfatare"),
    ul(
      "**«Ogni formato ha un unico condimento corretto.»** Gli abbinamenti formato-condimento sono convenzioni culinarie basate sul comportamento dei formati con diversi tipi di sugo. Variano per regione, paese, famiglia e cuoco. Le tradizioni contano ma non sono prescrizioni fisse.",
      "**«La pasta fresca è sempre migliore di quella secca.»** La pasta fresca e quella secca si adattano a piatti e tradizioni diversi. La pasta secca di alta qualità è appropriata per molte preparazioni ed è l'unica scelta tradizionale per alcune. La pasta fresca non è universalmente superiore: è semplicemente diversa.",
      "**«Tutta la pasta italiana contiene uova.»** La pasta secca è quasi sempre di semola e acqua. Molti formati freschi del Sud — orecchiette, cavatelli, pici — non contengono uova. La pasta all'uovo è una tradizione di pasta fresca del Nord e del Centro, non una caratteristica universale.",
      "**«La pasta trafilata al bronzo è sempre la scelta migliore.»** L'estrusione al bronzo crea una superficie più ruvida che può aiutare il condimento ad aderire. Ma la qualità del grano, il processo di essiccazione e la cura produttiva contano almeno quanto il materiale della trafila. La pasta al bronzo tende a costare di più; non è automaticamente il valore migliore in ogni preparazione.",
      "**«Tutti i formati di pasta appartengono esclusivamente a una regione.»** Molti formati si sono diffusi a livello nazionale e compaiono in diverse tradizioni regionali. Le associazioni regionali riflettono tradizioni primarie documentate, non proprietà o esclusività.",
      "**«Spezzare gli spaghetti è un tabù culturale universale.»** Gli atteggiamenti variano. Molti cuochi italiani spezzano la pasta lunga per farla entrare nella pentola o per facilitare la porzionatura; altri lo considerano non necessario. Non esiste una norma culturale universale al riguardo.",
      "**«La pasta alla carbonara proviene dai soldati americani.»** Questa è una delle diverse ipotesi sull'origine della carbonara, non un fatto storico stabilito. Nessuna ricetta stampata della carbonara è nota prima della metà degli anni Quaranta e le prove a favore di qualsiasi singola storia d'origine sono fragili. Per un approfondimento, consultate la [guida alla pasta romana](/it/cibo/pasta-romana).",
    ),

    // ——— Glossario ———
    h2("Glossario della pasta italiana"),
    table(
      ["Italiano", "Significato"],
      [
        ["formato di pasta", "pasta shape"],
        ["pasta lunga", "long pasta"],
        ["pasta corta", "short pasta"],
        ["pasta fresca", "fresh pasta"],
        ["pasta secca", "dried pasta"],
        ["pasta ripiena", "filled pasta"],
        ["pasta all'uovo", "egg pasta"],
        ["pasta in brodo", "pasta served or cooked in broth"],
        ["trafilata al bronzo", "extruded through bronze dies"],
        ["cottura al dente", "cooking to a slight firmness"],
        ["semola di grano duro", "durum wheat semolina"],
        ["farina di grano tenero", "soft wheat flour (tipo 00)"],
        ["sugo", "sauce (termine generale)"],
        ["ragù", "sugo di carne a cottura lenta"],
        ["condimento", "dressing or seasoning"],
        ["acqua di cottura", "pasta cooking water"],
        ["sfoglina", "pasta maker esperta (spec. in Emilia-Romagna)"],
        ["impasto", "dough"],
        ["rigate", "ridged (es. penne rigate)"],
        ["lisce", "smooth"],
        ["trafilatura", "processo di estrusione"],
        ["pastificio", "laboratorio o negozio di pasta fresca"],
        ["pasta integrale", "wholemeal pasta"],
        ["grano duro", "durum wheat"],
        ["grano tenero", "soft wheat"],
        ["sfoglia", "pasta dough rolled flat"],
        ["mattarello", "rolling pin (per la sfoglia)"],
        ["chitarra", "frame with metal wires used to cut pasta into square strands"],
      ],
    ),
  ],

  faqs: [
    {
      question: "Quali sono i formati di pasta italiani più comuni?",
      answer: "I formati più prodotti e consumati in Italia includono spaghetti, penne (lisce e rigate), rigatoni, fusilli, farfalle, linguine e tagliatelle. Si trovano in tutta Italia e a livello internazionale. Molti formati regionali — trofie, orecchiette, pizzoccheri, malloreddus — sono strettamente associati a zone specifiche e meno diffusi altrove.",
    },
    {
      question: "Qual è la differenza tra tagliatelle e pappardelle?",
      answer: "Entrambe sono pasta all'uovo a nastro piatto, ma le pappardelle sono più larghe — tipicamente 13–20mm — mentre le tagliatelle sono più strette, circa 6–8mm. Le tagliatelle sono legate all'Emilia-Romagna e al ragù alla Bolognese; le pappardelle alla Toscana e al Centro Italia, abbinate a ragù di selvaggina (lepre, cinghiale). Entrambe sono pasta fresca all'uovo nella forma più tradizionale, sebbene esistano versioni secche.",
    },
    {
      question: "Qual è la differenza tra trofie e trenette?",
      answer: "Entrambe sono formati liguri associati al pesto Genovese. Le trofie sono corte e attorte; le trenette sono lunghe e piatte — simili alle linguine ma leggermente più strette. La preparazione ligure tradizionale delle trenette al pesto include patate e fagiolini cotti nella stessa acqua della pasta. Le trofie vengono più comunemente servite semplicemente con il pesto. Entrambi i formati trattengono bene il pesto ligure.",
    },
    {
      question: "Quali formati sono associati all'Italia meridionale?",
      answer: "Il Sud Italia — Campania, Puglia, Calabria, Basilicata, Sicilia, Sardegna — ha forti tradizioni con la pasta di semola e acqua senza uova: orecchiette e cavatelli in Puglia; paccheri e ziti in Campania; busiate e anelletti in Sicilia; malloreddus e culurgiones in Sardegna; strascinati in Basilicata; fileja in Calabria. Molti formati meridionali sono formati a mano, riflesso delle tradizioni del grano duro che ha reso la semola l'ingrediente principale della pasta nel Sud.",
    },
    {
      question: "Il formato di pasta influisce su come aderisce il condimento?",
      answer: "Sì. La pasta rigata ha più texture superficiale per trattenere il condimento rispetto a quella liscia. I formati cavi trattengono il condimento all'interno oltre che all'esterno. Formati corti e irregolari come fusilli e trofie intrappolano condimenti densi nelle loro spirali. Gli spaghetti si rivestono in modo più uniforme con condimenti leggeri a base di olio o di consistenza fine. Queste differenze sono reali ma non assolute.",
    },
    {
      question: "La pasta fresca è migliore di quella secca?",
      answer: "No — si adattano a piatti diversi. La pasta fresca all'uovo (tagliatelle, pappardelle, tajarin) è la scelta tradizionale per certe preparazioni emiliane e piemontesi. La pasta secca di semola di alta qualità è la scelta tradizionale e preferita per spaghetti alle vongole, bucatini all'amatriciana e molti piatti pugliesi e siciliani. Nessuno dei due è universalmente migliore; la scelta dipende dal piatto.",
    },
    {
      question: "Cosa significa trafilata al bronzo?",
      answer: "*Trafilata al bronzo* significa che l'impasto è stato estruso attraverso una trafila di bronzo anziché di Teflon. Il bronzo crea una superficie leggermente più ruvida e porosa che può aiutare il condimento ad aderire. La trafila al Teflon produce pasta più liscia e lucida. La pasta al bronzo tende a costare di più. È un fattore rilevante nella qualità della pasta, ma non l'unico — anche la qualità del grano e il processo di essiccazione incidono significativamente.",
    },
    {
      question: "Qual è la differenza tra tortellini e cappelletti?",
      answer: "Entrambi sono pasta ripiena ad anello, ma sono tradizioni regionali distinte. I tortellini sono di Bologna e Modena, tradizionalmente ripieni con lombo di maiale, prosciutto, mortadella, Parmigiano Reggiano e noce moscata, e serviti in brodo. I cappelletti ('cappelletti') sono della Romagna, leggermente più grandi, con ripieni a base di formaggio o di carne secondo la tradizione locale. Anche loro si servono tipicamente in brodo di cappone.",
    },
    {
      question: "Quali formati si usano tradizionalmente nei minestri e nelle zuppe?",
      answer: "I formati piccoli per la pasta in brodo — ditalini, stelline, orzo, acini di pepe, quadrucci — si cuociono nel brodo e aggiungono consistenza senza struttura. Anche formati più grandi compaiono nelle zuppe: pasta e fagioli nel Veneto e in Campania usa un mix di formati; pasta e ceci usa pasta piccola. Tortellini e cappelletti si servono in brodo nella loro preparazione tradizionale principale.",
    },
    {
      question: "Come si conserva la pasta secca?",
      answer: "La pasta secca va conservata in un luogo fresco e asciutto, lontano dalla luce diretta. Le confezioni aperte possono essere conservate in un contenitore ermetico. La pasta secca conservata correttamente ha una shelf life di uno-due anni dalla produzione. In condizioni umide può assorbire umidità e cuocere in modo irregolare.",
    },
    {
      question: "Qual è la differenza tra orecchiette e cavatelli?",
      answer: "Entrambe sono pasta del Sud italiano formata a mano con semola. Le orecchiette ('piccole orecchie') sono rotonde e concave, formate premendo e strisciando l'impasto con un coltello per creare una superficie esterna liscia e un interno rugoso. I cavatelli sono leggermente più lunghi e a conchiglia, con superficie texturizzata e bordi ricurvi. Entrambe originano dalla Puglia e si trovano in tutto il Sud. Le orecchiette sono più associate alle *cime di rapa*; i cavatelli a ragù, broccoli e varie preparazioni locali.",
    },
    {
      question: "Dove si trova la pasta fresca migliore in Italia?",
      answer: "L'Emilia-Romagna — e in particolare Bologna e Modena — è considerata la culla della pasta fresca all'uovo italiana. I pastifici della regione producono tagliatelle, tortellini e pasta ripiena ogni giorno. La figura della sfoglina è una professione riconosciuta. Il Piemonte è noto per il tajarin. La Puglia ha forti tradizioni di pasta di semola formata a mano. Buoni pastifici si trovano in quasi tutte le città italiane. Consultate la [guida ai mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani) per orientarvi.",
    },
    {
      question: "Con quali formati di pasta si fa la pasta al forno?",
      answer: "Regioni diverse usano formati diversi per la pasta al forno. Rigatoni e mezze maniche sono comuni nella pasta al forno in stile romano. Gli anelletti al forno palermitani usano gli anelletti (piccoli anelli). La lasagne usa le sfoglie piatte. I cannelloni usano tubi grandi riempiti prima di infornare. Gli ziti sono tradizionali in alcune preparazioni al forno napoletane. Il timballo — pasta al forno a strati diffusa nel Sud — usa formati diversi a seconda della tradizione regionale.",
    },
  ],

  sourcesTitle: "Fonti",
  sources: [
    {
      label: "Accademia Italiana della Cucina — Ricettario di cucina regionale italiana",
      url: "https://www.accademiaitalianadellacucina.it/",
      note: "Tradizioni regionali, convenzioni di abbinamento, specifiche dei ripieni per la pasta emiliana",
    },
    {
      label: "Camera di Commercio di Bologna — Tagliatella bolognese",
      url: "https://www.bo.camcom.it/",
      note: "Dimensioni registrate delle tagliatelle alla Bolognese",
    },
    {
      label: "Unione Italiana Food — Dati sulla pasta",
      url: "https://www.unioneitalianafood.it/",
      note: "Dati sulla produzione italiana di pasta e definizioni delle categorie",
    },
    {
      label: "Slow Food — Presidio della pasta e Arca del Gusto",
      url: "https://www.fondazioneslowfood.com/en/ark-of-taste-slow-food/",
      note: "Formati di pasta a rischio e metodi di produzione tradizionali",
    },
    {
      label: "Consorzio Pizzoccheri della Valtellina IGP",
      url: "https://www.pizzoccherivaltellina.it/",
      note: "Disciplinare di produzione e status IGP",
    },
    {
      label: "Accademia della Crusca — Vocabolario italiano",
      url: "https://www.accademiadellacrusca.it/",
      note: "Terminologia ed etimologia italiana della pasta",
    },
    {
      label: "Regione Puglia — Tradizioni gastronomiche pugliesi",
      url: "https://www.regione.puglia.it/",
      note: "Orecchiette e tradizioni pastarie pugliesi",
    },
    {
      label: "Sardegna Turismo — Prodotti tipici",
      url: "https://www.sardegnaturismo.it/",
      note: "Malloreddus, culurgiones e tradizioni pastarie sarde",
    },
  ],
};
