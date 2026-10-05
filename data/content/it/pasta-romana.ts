import type { ArticleContent, ContentBlock, ImageCredit } from "@/lib/types";

// Edizione italiana di "Roman Pasta" — scritta in modo autonomo rispetto a
// quella inglese, non tradotta riga per riga. I fatti sono stati verificati
// sulle stesse fonti dell'edizione inglese (si veda quel file per l'elenco
// completo): la DOP del Pecorino Romano e la sua zona di produzione (Lazio,
// Sardegna, provincia di Grosseto); l'assenza di ricette scritte della
// carbonara prima della metà degli anni '40 e le diverse teorie sull'origine,
// nessuna delle quali definitivamente provata; il percorso di amatriciana e
// gricia da Amatrice e Grisciano verso la cucina romana, con l'arrivo del
// pomodoro generalmente collocato nel Settecento, senza una data precisa
// documentata. Le forme di pasta indicate sono consuetudini, non regole
// fisse: nessuno dei quattro piatti ha una ricetta ufficiale codificata.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const important = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

const unsplash = (name: string, username: string): ImageCredit => ({
  name,
  url: `https://unsplash.com/@${username}?utm_source=life_in_italia&utm_medium=referral`,
  source: "Unsplash",
  sourceUrl: "https://unsplash.com/?utm_source=life_in_italia&utm_medium=referral",
});

export const pastaRomana: ArticleContent = {
  body: [
    p("A Roma, il menu di un ristorante tradizionale ruota quasi sempre attorno a quattro primi: carbonara, cacio e pepe, amatriciana e gricia. Guardando gli ingredienti, si somigliano più di quanto sembri — guanciale, Pecorino Romano, pepe nero compaiono in più di un piatto — ma nel piatto sono quattro esperienze diverse, e i romani distinguono con cura l'una dall'altra."),
    answer(
      "I quattro primi romani per eccellenza sono la carbonara (uovo, guanciale, Pecorino Romano, pepe), il cacio e pepe (Pecorino Romano, pepe, acqua di cottura), l'amatriciana (guanciale, pomodoro, Pecorino Romano, spesso peperoncino) e la gricia (guanciale, Pecorino Romano, pepe — in pratica un'amatriciana senza pomodoro). Nessuno dei quattro ha una ricetta ufficiale: quello che segue spiega come si preparano secondo la tradizione e dove si trovano davvero i punti di disaccordo."
    ),

    h2("Perché la pasta romana è diversa"),
    p("La cucina romana lavora con pochi ingredienti, usati con precisione, più che con liste lunghe. Guanciale e Pecorino Romano tornano in tre piatti su quattro; il pepe nero in tutti e quattro. Niente panna, niente burro, e nella versione tradizionale niente aglio né cipolla in nessuno dei quattro — il carattere di ogni piatto nasce dalla tecnica e dalla qualità di pochi ingredienti, non dall'accumulo di sapori. È anche per questo che sono più difficili da eseguire di quanto sembrino: con così pochi margini, un guanciale non reso bene o una salsa che si rompe si notano immediatamente."),

    h2("I Quattro Primi Romani"),

    h3("Carbonara"),
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1755594461640-b800c6bafdfa?auto=format&fit=crop&w=1600&q=75",
      alt: "Una ciotola di spaghetti alla carbonara con una salsa lucida di uovo e pecorino, pepe nero in evidenza e guanciale croccante",
      caption: "La cremosità della carbonara viene dall'emulsione di uovo, formaggio e grasso di guanciale con l'acqua di cottura — non dalla panna.",
      credit: unsplash("Stötzer Balázs", "stotzer"),
    },
    p("La carbonara si prepara con uovo, guanciale, Pecorino Romano e pepe nero, legati alla pasta calda — tipicamente spaghetti, anche se rigatoni e tonnarelli compaiono spesso nei menu romani — fuori dal fuoco diretto, perché l'uovo deve rapprendersi in una salsa lucida senza arrivare a cuocersi a frittata. Il guanciale si rosola per primo, e il suo grasso viene incorporato nel composto di uovo e formaggio insieme a un po' di acqua di cottura, che aiuta la salsa a legarsi e a restare cremosa invece che liquida."),
    p("La carbonara tradizionale non prevede la panna. La cremosità di una buona carbonara nasce dall'emulsione stessa di uovo, formaggio, grasso e acqua di cottura, non da un ingrediente aggiunto per correggere una salsa che si è separata o è andata in frittata — la panna compare soprattutto nelle versioni preparate fuori dall'Italia, spesso per rendere la cottura più tollerante agli errori. Questo non rende sbagliata ogni versione non tradizionale: è semplicemente un'altra preparazione, e la maggior parte delle cucine romane considera le due cose come piatti diversi, non come varianti della stessa ricetta."),
    important(
      "La storia della carbonara non è un fatto accertato. Non si conoscono ricette scritte prima della metà degli anni '40, ed esistono diverse ipotesi concorrenti: un legame con le razioni di uova e bacon dei soldati alleati dopo il 1944; un'origine legata ai carbonari, i lavoratori del carbone tra Lazio e Abruzzo; un'eco di un piatto napoletano più antico, la cacio e uova. Nessuna di queste ipotesi ha prove documentali definitive, e gli storici della cucina non sono d'accordo tra loro. Qualsiasi racconto che indichi un inventore preciso o una data esatta va considerato una delle ipotesi possibili, non un fatto stabilito.",
      "Una storia controversa"
    ),

    h3("Cacio e Pepe"),
    p("Il cacio e pepe è fatto con Pecorino Romano, pepe nero e acqua di cottura, di solito su tonnarelli o spaghetti. Sulla carta è il più semplice dei quattro, e in termini di ingredienti lo è davvero — ma è considerato il più difficile da eseguire bene, perché tutto il piatto dipende da un solo gesto tecnico: emulsionare il Pecorino grattugiato finemente con l'acqua di cottura calda e amidacea fino a una crema omogenea, senza che il formaggio si raggrumi o si separi in una massa oleosa e granulosa. Il basso punto di fusione e l'acidità del Pecorino lo rendono incline a raggrumarsi se l'acqua è troppo calda o viene versata troppo in fretta, motivo per cui si tende a farla intiepidire leggermente e ad aggiungerla poco a poco mentre si mantecta. Con così pochi ingredienti, non c'è una base di salsa su cui appoggiarsi se qualcosa va storto — è esattamente ciò che rende questo piatto una vera prova di tecnica, non una scorciatoia per un pasto veloce."),

    h3("Amatriciana"),
    p("L'amatriciana è guanciale, pomodoro e Pecorino Romano, spesso con peperoncino, tipicamente su bucatini o spaghetti. Il nome indica Amatrice, un comune della provincia di Rieti, nel Lazio, a circa 140 km a nord-est di Roma — non la città stessa. La versione più condivisa è che l'amatriciana si sia sviluppata da un piatto più antico e senza pomodoro della zona di Amatrice (quello che oggi chiamiamo gricia) nel momento in cui il pomodoro è entrato nella cucina locale, generalmente collocato nel corso del Settecento, anche se la cronologia esatta non è documentata con precisione e va letta come un periodo ampiamente citato, non come una data fissa. Da Amatrice, il piatto è entrato a far parte della tradizione delle trattorie romane, al punto che oggi la maggior parte dei visitatori la considera un piatto romano per eccellenza, pur restando, con pari ragione, un piatto originario di un paese del Lazio."),

    h3("Gricia"),
    p("La gricia è guanciale, Pecorino Romano e pepe nero — senza pomodoro. Viene spesso descritta come un'amatriciana senza pomodoro, o amatriciana bianca, e il nome è comunemente legato a Grisciano, una piccola frazione vicino ad Amatrice. È il più semplice dei quattro piatti: usa la stessa base di guanciale e Pecorino della carbonara, togliendo l'uovo, e la stessa base dell'amatriciana, togliendo il pomodoro. Per questa sovrapposizione, la gricia viene a volte descritta come l'antenata di entrambi i piatti — un modo ragionevole di pensare alla parentela tra queste ricette, anche se la sequenza esatta con cui si sono sviluppate non è documentata abbastanza bene da poterla considerare storia accertata."),

    h2("La Pasta Romana a Colpo d'Occhio"),
    table(
      ["Piatto", "Ingredienti principali", "Profilo di gusto", "Pasta tradizionale", "Caratteristica chiave"],
      [
        ["Carbonara", "Uovo, guanciale, Pecorino Romano, pepe nero", "Ricco, sapido, leggermente piccante di pepe", "Spaghetti, rigatoni, tonnarelli", "Salsa a base d'uovo emulsionata fuori dal fuoco"],
        ["Cacio e Pepe", "Pecorino Romano, pepe nero, acqua di cottura", "Deciso, piccante di pepe, intensamente sapido", "Tonnarelli, spaghetti", "Emulsione di formaggio e acqua, senza grassi aggiunti"],
        ["Amatriciana", "Guanciale, pomodoro, Pecorino Romano, peperoncino (spesso)", "Sapido, acidulo, delicatamente piccante", "Bucatini, spaghetti", "L'unico dei quattro a base di pomodoro"],
        ["Gricia", "Guanciale, Pecorino Romano, pepe nero", "Sapido, salato, pulito", "Rigatoni, spaghetti, bucatini", "Niente pomodoro, niente uovo — il più semplice dei quattro"],
      ],
      "Ingredienti e formati di pasta sono convenzioni tradizionali, non regole fisse — nessuno dei quattro piatti ha una ricetta ufficiale, e ogni cucina varia all'interno di queste consuetudini."
    ),

    h2("Gli Ingredienti della Pasta Romana"),

    h3("Guanciale"),
    p("Il guanciale è la guancia di maiale stagionata, non affumicata, condita con sale e pepe nero (talvolta altre spezie) e asciugata per diverse settimane. È diverso dalla pancetta, che è pancia di maiale stagionata: il guanciale ha una proporzione di grasso più alta rispetto alla parte magra e una consistenza più morbida una volta reso, il che è parte del motivo per cui si sciogliere nella salsa in modo diverso dalla pancetta. La pancetta non è un ingrediente proibito — è un sostituto ragionevole quando il guanciale non si trova — ma usarla cambia il contenuto di grasso e il sapore del piatto finito: il risultato è una variazione reale, non lo stesso piatto con un altro nome."),

    h3("Pecorino Romano"),
    p("Il Pecorino Romano è un formaggio di latte di pecora, stagionato e molto sapido, con Denominazione di Origine Protetta (DOP) secondo la normativa europea. La sua zona di produzione comprende il Lazio, la Sardegna e la provincia di Grosseto — nella pratica, la maggior parte del Pecorino Romano oggi viene prodotta in Sardegna, anche se il nome e l'identità gastronomica del formaggio restano legati a Roma e al Lazio. La sua sapidità è quello che sorregge tutti e quattro i piatti: non c'è burro né panna ad ammorbidire il sapore, quindi il lavoro lo fa quasi del tutto il formaggio."),

    h3("Pepe Nero"),
    p("Il pepe nero qui non è una semplice guarnizione — nel cacio e pepe e nella gricia, in particolare, è uno dei soli tre ingredienti del piatto, quindi la sua forza è parte integrante del sapore e non un tocco finale. La maggior parte delle cucine romane lo usa macinato grossolanamente al momento, piuttosto che già macinato, il che incide sia sull'aspetto del piatto finito sia su come il sapore si libera."),

    h3("Pomodoro"),
    p("Il pomodoro compare in uno solo dei quattro piatti: l'amatriciana. Non ha posto, secondo nessuna definizione tradizionale, in carbonara, cacio e pepe o gricia — un dettaglio utile da sapere leggendo un menu, perché una \"carbonara\" o un \"cacio e pepe\" a base di pomodoro, spesso proposti in locali rivolti ai turisti, segnalano una reinterpretazione del piatto più che la versione tradizionale."),

    h2("Perché l'Acqua di Cottura È Importante"),
    p("L'acqua di cottura non è solo liquido di scarto — porta con sé l'amido rilasciato dalla pasta durante la cottura, e quell'amido è ciò che permette alla salsa di legarsi alla pasta invece di restare separata sul fondo del piatto. Nel cacio e pepe, dove il formaggio è l'intera salsa, l'acqua amidacea è ciò che trasforma il Pecorino grattugiato e l'acqua calda in un'emulsione omogenea invece che in un composto filamentoso o granuloso; lo stesso principio aiuta il composto di uovo e formaggio della carbonara a diventare una salsa fluida invece di raggrumarsi. Aggiungerne troppa diluisce la salsa e ne riduce l'effetto, motivo per cui di solito si versa poco a poco, un cucchiaio alla volta, invece che tutta insieme. Non è una scienza esatta applicata ai fornelli — è una tecnica pratica affinata con la ripetizione, e anche per questo richiede un po' di pratica per riuscire con costanza."),

    h2("Come Si Prepara Tradizionalmente la Pasta Romana"),
    {
      type: "steps",
      items: [
        { title: "Rosolare il guanciale", text: "Tagliato a listarelle o a dadini, cotto nel suo stesso grasso senza olio aggiunto, finché il grasso diventa translucido e la parte magra si rosola leggermente. Carbonara, amatriciana e gricia partono tutte da qui." },
        { title: "Gestire il calore", text: "Carbonara e cacio e pepe si finiscono entrambe fuori dal fuoco diretto, perché le proteine dell'uovo e la caseina del Pecorino possono raggrumarsi o cuocere troppo se la padella è troppo calda nel momento in cui la salsa si lega." },
        { title: "Unire l'acqua di cottura amidacea", text: "Un cucchiaio alla volta, per portare la salsa a una consistenza che avvolge la pasta, non a una consistenza liquida. È il passaggio in cui cacio e pepe e carbonara vengono più spesso salvate — o rovinate." },
        { title: "Saltare, non mescolare", text: "Alzare e girare la pasta nella salsa la ricopre in modo più uniforme rispetto al semplice mescolare, ed evita che le salse a base d'uovo restino immobili in un punto troppo caldo abbastanza a lungo da cuocere." },
        { title: "Dosare il sale", text: "Pecorino Romano e guanciale sono entrambi naturalmente sapidi, quindi l'acqua di cottura della pasta viene di solito salata più leggermente del normale, per evitare un piatto finale troppo salato." },
      ],
    },
    p("Le liste di ingredienti corte sono esattamente il motivo per cui questi piatti sono tecnicamente impegnativi: non c'è una base di salsa su cui appoggiarsi se l'uovo cuoce troppo o il formaggio si raggruma, quindi la tecnica a ogni passaggio deve funzionare al primo tentativo."),

    h2("Miti e Questioni Storiche sulla Carbonara"),
    ul(
      "**\"La carbonara contiene panna.\"** Non nella versione romana tradizionale — la cremosità viene da uovo, formaggio, grasso e acqua di cottura, non da un latticino.",
      "**\"La carbonara ha un inventore certo.\"** Nessun inventore o racconto d'origine è documentato abbastanza bene da essere considerato un fatto accertato; esistono diverse ipotesi concorrenti (si veda sopra).",
      "**\"La carbonara è un piatto romano antico.\"** Non lo è — non si conoscono ricette scritte prima della metà degli anni '40, il che la rende un piatto relativamente recente rispetto a gran parte della tradizione gastronomica romana.",
      "**\"Qualsiasi bacon può sostituire il guanciale senza cambiare il piatto.\"** Il maggiore contenuto di grasso e la consistenza del guanciale incidono sulla salsa finale; un sostituto cambia il risultato, non lo riproduce in modo identico.",
      "**\"La salsa dev'essere completamente liquida.\"** Una buona carbonara ricopre la pasta; se resta liquida sul fondo del piatto, di solito significa che è troppo diluita o si è separata.",
      "**\"La carbonara deve contenere aglio o cipolla.\"** Le versioni tradizionali non li prevedono — il sapore viene solo da guanciale, uovo, formaggio e pepe."
    ),

    h2("Roma, Amatrice e la Tradizione Gastronomica del Lazio"),
    p("È facile definire tutti e quattro i piatti semplicemente \"romani\", e per come vengono consumati oggi è corretto — Roma è dove si concentrano nei menu ed è dove la maggior parte dei visitatori li incontra. Ma la loro geografia è un po' più ampia della sola città. Amatriciana e gricia risalgono entrambe a comuni dell'entroterra laziale — Amatrice e la vicina Grisciano — più che al centro di Roma, e hanno raggiunto la forma oggi celebre attraverso la cucina delle trattorie romane, non perché inventate dentro le mura della città. Carbonara e cacio e pepe sono più direttamente legate a Roma stessa, anche se la storia documentata della carbonara è talmente recente che pure quel legame va considerato più recente di quanto molti pensino."),
    p("La distinzione utile per chi viaggia è questa: Roma è il luogo dove i piatti regionali del Lazio sono diventati ampiamente conosciuti e dove oggi si trovano più facilmente in un menu, mentre le loro origini — dove documentate — si trovano spesso nei paesi più piccoli e nelle tradizioni rurali della regione."),

    h2("Come Ordinare la Pasta Romana a Roma"),
    p("Tutti e quattro sono primi — si mangiano prima di un secondo, secondo la struttura tradizionale del pasto italiano, anche se molti visitatori e romani ordinano un primo da solo, cosa del tutto normale in trattoria. Alcuni punti pratici utili quando si legge un menu o si sceglie dove mangiare:"),
    ul(
      "**Trattorie e osterie** — locali piccoli, informali, spesso a gestione familiare — sono generalmente i posti più affidabili per le versioni tradizionali di questi piatti, anche se non è una regola assoluta e le eccezioni esistono in entrambe le direzioni.",
      "**I menu proprio davanti ai principali siti turistici** a volte propongono variazioni più ampie (carbonara con panna, ad esempio) pensate per un pubblico più vario; questo non rende quei ristoranti meno legittimi, semplicemente è una scelta gastronomica diversa dalla preparazione tradizionale.",
      "**Se non si è sicuri degli ingredienti di un piatto**, è del tutto normale chiedere — il personale romano è abituato alla domanda, soprattutto sulla carbonara, visto quanto spesso i visitatori chiedono della panna.",
      "**Le aspettative su porzioni e portate variano** da ristorante a ristorante, ed è meglio verificarle direttamente sul menu piuttosto che presumere una norma fissa.",
    ),

    h2("Capire un Menu di Pasta Romana"),
    table(
      ["Termine", "Significato"],
      [
        ["carbonara", "Pasta con uovo, guanciale, Pecorino Romano e pepe nero"],
        ["cacio e pepe", "Pasta con Pecorino Romano e pepe nero, emulsionati con l'acqua di cottura"],
        ["amatriciana", "Pasta al pomodoro con guanciale e Pecorino Romano, spesso con peperoncino"],
        ["gricia", "Guanciale, Pecorino Romano e pepe nero — un'amatriciana senza pomodoro"],
        ["guanciale", "Guancia di maiale stagionata, non affumicata"],
        ["pecorino", "Formaggio stagionato di latte di pecora; il Pecorino Romano ha la DOP"],
        ["al dente", "Pasta cotta al punto giusto, non scotta"],
        ["tonnarelli", "Pasta fresca all'uovo a sezione quadrata, simile a uno spaghetto squadrato"],
        ["primo", "Il piatto di pasta o riso, servito prima del secondo in un pasto completo"],
      ]
    ),

    h2("Ricette Tradizionali e Interpretazioni Moderne"),
    {
      type: "image",
      // Condivisa con Tradizioni della cucina italiana.
      src: "/images/food/italian-food-traditions/rome-handmade-pasta.webp",
      alt: "Due cuochi con cappello bianco tirano la pasta fresca a mano su un bancone, nella vetrina di un negozio a Roma",
      caption: "Pasta fresca lavorata a mano in una vetrina romana — accanto ai quattro classici, le cucine di Roma continuano a sperimentare.",
      credit: unsplash("Matej Buchla", "matejbuchla"),
    },
    p("Nessuno di questi quattro piatti è fermo nel tempo. I cuochi romani contemporanei sperimentano sulla tecnica — diversi rapporti tra tuorlo e uovo intero nella carbonara, ad esempio, o variazioni su come costruire l'emulsione di Pecorino nel cacio e pepe — e alcune cucine propongono versioni vegetariane che eliminano il guanciale, cambiando inevitabilmente il carattere del piatto, dato quanto quell'ingrediente sia centrale per il sapore. Le versioni internazionali, inclusa la carbonara con la panna o con la pancetta al posto del guanciale, sono comuni fuori dall'Italia e non sono per questo sbagliate: sono una tradizione gastronomica diversa, nata dallo stesso punto di partenza. La distinzione utile, per chi è curioso, è semplicemente sapere quale versione si sta mangiando, e perché ha quel sapore."),
  ],

  faqs: [
    { question: "Quali sono i quattro primi romani classici?", answer: "Carbonara, cacio e pepe, amatriciana e gricia. Condividono pochi ingredienti tra loro — guanciale, Pecorino Romano e pepe nero — ma ciascuno è un piatto a sé, con un carattere distinto." },
    { question: "Con cosa si prepara la carbonara tradizionale?", answer: "Uovo, guanciale, Pecorino Romano e pepe nero, legati con l'acqua di cottura fuori dal fuoco diretto, in modo che l'uovo si rapprenda in una salsa senza arrivare a cuocersi a frittata." },
    { question: "La carbonara autentica contiene la panna?", answer: "No. Nella versione romana tradizionale la cremosità viene da uovo, formaggio, grasso di guanciale e acqua di cottura. Le versioni con la panna sono comuni fuori dall'Italia, ma sono una preparazione diversa." },
    { question: "Qual è la differenza tra carbonara e gricia?", answer: "La carbonara aggiunge l'uovo alla base di guanciale, Pecorino e pepe; la gricia non usa affatto l'uovo. La gricia viene spesso descritta come la versione più semplice e senza uovo della carbonara." },
    { question: "Qual è la differenza tra gricia e cacio e pepe?", answer: "La gricia include il guanciale; il cacio e pepe no. Il cacio e pepe si basa solo su Pecorino Romano, pepe nero e acqua di cottura." },
    { question: "Qual è la differenza tra amatriciana e carbonara?", answer: "L'amatriciana si basa sul pomodoro e non prevede l'uovo; la carbonara ha l'uovo e non il pomodoro. Entrambe usano tipicamente guanciale e Pecorino Romano." },
    { question: "L'amatriciana è di Roma o di Amatrice?", answer: "Il nome e le origini risalgono ad Amatrice, comune della provincia di Rieti, nel Lazio, non al centro di Roma. È diventata strettamente associata a Roma attraverso la cucina delle trattorie della città, quindi sono corrette sia l'origine amatriciana sia l'associazione romana." },
    { question: "Cos'è il guanciale?", answer: "La guancia di maiale stagionata e non affumicata, asciugata con sale e pepe nero. Ha un contenuto di grasso più alto della pancetta, il che incide su come si comporta nella salsa." },
    { question: "Si può usare la pancetta al posto del guanciale?", answer: "Sì, come sostituto, ma la pancetta è pancia di maiale stagionata, con un rapporto di grassi e una consistenza diversi: il risultato è una variante del piatto, non una versione identica." },
    { question: "Cos'è il Pecorino Romano?", answer: "Un formaggio stagionato di latte di pecora, molto sapido, con Denominazione di Origine Protetta (DOP). La zona di produzione comprende Lazio, Sardegna e provincia di Grosseto, anche se oggi la maggior parte viene prodotta in Sardegna." },
    { question: "Che pasta si usa tradizionalmente per la carbonara?", answer: "Gli spaghetti sono i più comuni, anche se rigatoni e tonnarelli compaiono spesso nei menu romani. Non esiste un formato obbligatorio." },
    { question: "Che pasta si usa per il cacio e pepe?", answer: "Tonnarelli o spaghetti sono le scelte più comuni, anche qui senza una regola fissa." },
    { question: "Perché il cacio e pepe a volte diventa grumoso?", answer: "Il Pecorino Romano può raggrumarsi o separarsi se l'acqua di cottura usata per l'emulsione è troppo calda o viene versata troppo in fretta. Farla intiepidire leggermente e aggiungerla poco a poco aiuta a evitarlo." },
    { question: "Come conviene ordinare la pasta a Roma?", answer: "Ordinare un primo da solo, senza un secondo, è del tutto normale. Se gli ingredienti di un piatto non sono chiari, chiedere al personale è una domanda normale e attesa, soprattutto per la carbonara." },
    { question: "Le ricette della pasta romana sono uguali in tutto il Lazio?", answer: "No — sono tradizioni gastronomiche con variazioni regionali e familiari, non ricette fisse definite per legge. Amatriciana e gricia in particolare hanno radici fuori dal centro di Roma, nella zona di Amatrice." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Commissione Europea — registro eAmbrosia delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Verifica della DOP del Pecorino Romano e della sua zona di produzione (Lazio, Sardegna, provincia di Grosseto)." },
    { label: "Consorzio per la Tutela del Formaggio Pecorino Romano", url: "https://www.pecorinoromano.com/", note: "Informazioni ufficiali del consorzio sulle regole di produzione e sulla storia del Pecorino Romano." },
    { label: "Great British Chefs — The Origins of Carbonara", url: "https://www.greatbritishchefs.com/features/origins-history-of-carbonara", note: "Verifica delle ipotesi concorrenti sull'origine della carbonara e dell'assenza di ricette scritte prima del 1944." },
    { label: "Taste Cooking — The Murky History of Roman Carbonara", url: "https://tastecooking.com/the-murky-history-of-roman-carbonara/", note: "Ulteriore verifica sugli aspetti controversi e non documentati della storia della carbonara." },
    { label: "Wikipedia — Pasta alla gricia / Amatriciana sauce", url: "https://en.wikipedia.org/wiki/Pasta_alla_gricia", note: "Riscontro sul legame tra Amatrice/Grisciano e sull'aggiunta del pomodoro alla gricia, trattato come racconto diffuso e non come data precisamente documentata." },
  ],
};
