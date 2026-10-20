import type { ArticleContent, ContentBlock } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

// Body images shared from the christmas-markets-italy directory
const mkt = (file: string, alt: string, wide = false): ContentBlock => ({
  type: "image",
  src: `/images/events/christmas-markets-italy/${file}.webp`,
  alt,
  wide,
});

export const nataleInItalia: ArticleContent = {
  body: [
    answer("**Il Natale italiano dura più di un mese** — dall'8 dicembre, festa dell'Immacolata Concezione, fino all'Epifania del 6 gennaio. Il carattere delle celebrazioni cambia molto da regione a regione: in Alto Adige assomiglia al Natale dell'Europa centrale; a Napoli il presepe è il cuore della stagione; a Roma la benedizione papale del 25 dicembre richiama centinaia di migliaia di persone in Piazza San Pietro. Dicembre è un mese davvero buono per visitare l'Italia: i grandi musei sono più accessibili, i prezzi in molte destinazioni calano rispetto all'estate e le città acquistano un'atmosfera festiva autentica, radicata in secoli di tradizioni cattoliche e popolari."),

    {
      type: "facts",
      title: "Il Natale in Italia in breve",
      rows: [
        { label: "Inizio della stagione", value: "8 dicembre (Immacolata Concezione — giorno festivo)" },
        { label: "Festività principali", value: "25 dicembre, 26 dicembre (Santo Stefano), 1° gennaio, 6 gennaio (Epifania)" },
        { label: "Fine della stagione", value: "6 gennaio (Epifania / Befana)" },
        { label: "Mercatini: aperture confermate più precoci", value: "Trento 20 nov, Aosta 21 nov, Merano 26 nov, Bolzano 27 nov" },
        { label: "Mercatini di città: date confermate", value: "Milano 1 dic – 6 gen, Roma Piazza Navona 1 dic – 6 gen" },
        { label: "Temperature in dicembre", value: "Nord: 0–8 °C / Centro: 6–13 °C / Sud e Sicilia: 10–18 °C" },
        { label: "Periodo più affollato", value: "22–26 dicembre e 31 dic – 2 gen — prenotare con anticipo" },
        { label: "Periodo più tranquillo per visitare", value: "1–20 dicembre, eccetto i weekend" },
      ],
    },

    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Come si festeggia il Natale in Italia",
        "I mercatini di Natale",
        "Dove trascorrere il Natale in Italia",
        "Il cibo tradizionale di Natale",
        "Cosa è aperto durante le feste",
        "Il tempo in dicembre e cosa mettere in valigia",
        "Muoversi in Italia a Natale",
        "Idee itinerario per le feste",
        "Checklist pratica",
      ],
    },

    h2("Come si festeggia il Natale in Italia"),
    p("Il Natale italiano affonda le radici nella tradizione cattolica, ma le modalità di celebrazione cambiano molto da regione a regione e da famiglia a famiglia. La stagione si apre ufficialmente l'**8 dicembre**, festa dell'Immacolata Concezione, giornata festiva nazionale. In questo giorno le famiglie addobbano l'albero di Natale e, in molte case, allestono il presepe. A Roma il Papa presiede la cerimonia alla Colonna dell'Immacolata, in Piazza di Spagna."),
    p("Il cuore della stagione va dalla **Vigilia di Natale (24 dicembre) all'Epifania (6 gennaio)**, con tre festività nazionali: il 25 e il 26 dicembre (Santo Stefano) e il 1° gennaio. Il 6 gennaio, la Befana — una simpatica vecchina che vola su una scopa — porta i doni ai bambini che si sono comportati bene e il carbone dolce a quelli che non l'hanno fatto. In molte famiglie italiane l'Epifania è un momento atteso quanto il Natale stesso."),

    h3("La Vigilia di Natale"),
    p("La sera del 24 dicembre — la *Vigilia* — è spesso il momento più intenso del Natale italiano. In numerose famiglie, soprattutto al Sud, la tradizione vuole che si mangi pesce anziché carne. Il baccalà, le anguille, le vongole, il polpo e il pesce fritto compaiono in molte varianti, e il numero di portate varia da famiglia a famiglia e da regione a regione. Non esiste un menù unico: la stessa regione può presentare usi diversi tra un paese e l'altro."),
    p("La messa di mezzanotte viene celebrata nelle chiese di tutta Italia: a San Pietro a Roma, al Duomo di Firenze e in centinaia di chiese storiche nei centri delle città. Le chiese principali di Roma e Firenze richiedono biglietto o prenotazione per le funzioni più affollate; nelle chiese parrocchiali si entra liberamente."),

    h3("Il giorno di Natale e Santo Stefano"),
    p("Il 25 dicembre è dedicato al pranzo in famiglia — lungo, abbondante, diverso da regione a regione. Al Nord prevalgono i primi di pasta fresca, i lessi e i bolliti misti. Al Sud rimane spesso il pesce. Su quasi tutte le tavole italiane compaiono il **panettone** (Milano) o il **pandoro** (Verona). Il **26 dicembre — Santo Stefano** — è anch'esso festivo: negozi e ristoranti riaprono in molte città, ed è tradizione fare visita ad amici e parenti. Alcune città organizzano concerti o eventi all'aperto."),
    p("La **benedizione Urbi et Orbi** del Papa, pronunciata a mezzogiorno del 25 dicembre dal balcone centrale della Basilica di San Pietro, è uno degli eventi natalizi più partecipati d'Italia. L'accesso a Piazza San Pietro è gratuito; è consigliabile arrivare con largo anticipo per una posizione centrale. Chi non è presente può seguire la diretta in tutto il mondo."),
    note("Gli orari di apertura durante le feste variano moltissimo da luogo a luogo. La maggior parte dei musei statali, molti ristoranti e quasi tutti i negozi chiudono il 25 dicembre. Molti riaprono il 26 con orari ridotti. Verificare sempre con le singole strutture prima di programmare la visita.", "Importante: verificare gli orari direttamente"),

    h3("La tradizione del presepe"),
    p("Il presepe è al centro del Natale italiano in misura che stupisce molti visitatori stranieri. Napoli ha la tradizione presepiale più viva d'Italia: la Via San Gregorio Armeno, nel cuore del centro storico, è fiancheggiata tutto l'anno da botteghe artigiane di *presepari*, e da metà novembre diventa quasi impossibile percorrerla nel fine settimana. Le statuine spaziano dai personaggi biblici tradizionali ai volti della cronaca e dello spettacolo riprodotti in miniatura, e i presepi più elaborati occupano intere stanze o piazze pubbliche."),
    p("Il presepe allestito in Piazza San Pietro, inaugurato per l'8 dicembre e smontato dopo l'Epifania, è uno dei più visitati d'Italia. Presepi storici di grande pregio sono esposti durante le feste in musei e chiese di tutta la penisola."),

    h2("I mercatini di Natale"),
    mkt("alpine-village-snowy-street", "Una via innevata in un paese alpino, fiancheggiata da edifici tradizionali in pietra e legno", true),
    p("I mercatini di Natale italiani appartengono a due tradizioni distinte. In Alto Adige, Trentino e Valle d'Aosta, i mercatini hanno radici nell'Europa centrale: Bolzano, che era parte dell'Impero asburgico fino al 1919, ha importato una tradizione medievale che ha ispirato quasi tutti i mercati italiani successivi. Nelle grandi città — Milano, Verona, Firenze, Roma — i mercati sono più recenti, più rumorosi e più italiani nel carattere."),
    p("Per la copertura completa delle date confermate 2026, i profili dei singoli mercati, cosa mangiare e come combinare più mercati in un unico viaggio, consulta la [guida ai mercatini di Natale in Italia](/it/eventi/mercatini-di-natale-italia)."),
    table(
      ["Mercato", "Città", "Date 2026 (confermate salvo indicazione)", "Note"],
      [
        ["Mercatino di Natale", "Trento", "20 nov 2026 – 6 gen 2027", "Confermato"],
        ["Marché Vert Noël", "Aosta", "21 nov 2026 – 6 gen 2027", "Confermato"],
        ["Meraner Weihnacht", "Merano", "26 nov 2026 – 6 gen 2027", "Confermato"],
        ["Christkindlmarkt", "Bolzano", "27 nov – 6 gen 2027 (chiuso il 25 dic)", "Confermato"],
        ["Mercatino di Natale", "Bressanone", "27 nov – 6 gen 2027 (chiuso il 25 dic)", "Confermato"],
        ["Mercatino in Duomo", "Milano", "1 dic 2026 – 6 gen 2027", "Confermato"],
        ["Befana e Natale in Piazza Navona", "Roma", "1 dic 2026 – 6 gen 2027", "Confermato"],
        ["Natale a Verona", "Verona", "Stima: fine nov – fine dic 2026", "Non ancora confermato — verificare su comune.verona.it"],
        ["Weihnachtsmarkt", "Firenze", "Stima: metà nov – metà dic 2026", "Non ancora confermato — verificare su feelflorence.it"],
      ],
      "Fonti: gestori ufficiali dei mercati e uffici turistici comunali al ottobre 2026. Le date stimate si basano sulle edizioni precedenti — verificare le fonti ufficiali prima di prenotare."
    ),
    tip("I mercatini alpini di Bolzano, Bressanone, Merano e Trento applicano standard di qualità artigianale che i mercati cittadini non sempre raggiungono. Sono anche i più atmosferici: una visita infrasettimanale nelle prime due settimane di dicembre offre il miglior equilibrio tra affluenza e atmosfera. Per i dettagli su come combinare più mercati in un unico viaggio, consulta la [guida completa ai mercatini](/it/eventi/mercatini-di-natale-italia).", "Scegliere il mercatino giusto"),

    h2("Dove trascorrere il Natale in Italia"),
    p("Ogni città o regione italiana offre un'esperienza natalizia diversa. La guida qui sotto illustra le destinazioni più significative — non si tratta di coprire ogni città, ma di mettere in evidenza le differenze che aiutano a scegliere."),

    h3("Roma"),
    mkt("rome-st-peters-dusk", "La Basilica di San Pietro illuminata al crepuscolo con visitatori radunati nella piazza", true),
    p("Roma è la destinazione natalizia più significativa d'Italia sul piano internazionale. Il calendario vaticano da solo offre ragioni concrete per venire in dicembre: l'allestimento del presepe e dell'albero in Piazza San Pietro l'8 dicembre, la messa di mezzanotte del 24, la benedizione Urbi et Orbi del 25. Fuori dal Vaticano, la fiera di Piazza Navona (confermata dal 1° dicembre al 6 gennaio) è l'evento natalizio più romano in assoluto: vivace, colorato, e orientato soprattutto verso la tradizione della Befana."),
    p("Le code ai musei in dicembre sono una frazione di quelle estive. Colosseo, Musei Vaticani e Galleria Borghese sono notevolmente più accessibili nelle prime tre settimane di dicembre. I musei chiudono quasi tutti il 25 dicembre e hanno orari ridotti il 26 dicembre e il 1° gennaio — verificare sempre prima di andare. Per la pianificazione completa della visita a Roma, consulta la [guida a Roma](/it/guide/roma-in-tre-giorni)."),
    ul(
      "**Presepe e albero in Piazza San Pietro**: allestiti l'8 dicembre; accesso gratuito a qualsiasi ora.",
      "**Benedizione Urbi et Orbi**: mezzogiorno del 25 dicembre dal balcone centrale della Basilica. Gratuita; arrivare in anticipo.",
      "**Fiera di Piazza Navona**: 1° dicembre – 6 gennaio; ingresso libero; più vivace nelle serate infrasettimanali.",
    ),

    h3("Napoli"),
    p("Napoli in dicembre ha un'atmosfera natalizia irripetibile. La Via San Gregorio Armeno, nel cuore del centro storico (Patrimonio UNESCO), si trasforma nella vetrina mondiale dei *presepari* napoletani: artigiani che producono statuine di presepe con tecniche tramandate di generazione in generazione. Da metà novembre fino all'Epifania la strada è percorsa ogni giorno da migliaia di visitatori; nei weekend è quasi impraticabile. Il livello degli artigiani varia molto: vale la pena visitare più botteghe prima di acquistare."),
    p("Fuori dalla Via San Gregorio, il centro storico napoletano è meraviglioso in inverno con meno turisti. Per la pianificazione della visita, consulta la [guida a Napoli](/it/citta/napoli-per-la-prima-volta). Le temperature di dicembre (10–15 °C di giorno) permettono visite confortevoli."),
    tip("Via San Gregorio Armeno è più accessibile al mattino presto nei giorni feriali (prima delle 11:00). La qualità e i prezzi variano molto tra un artigiano e l'altro."),

    h3("Firenze"),
    p("Firenze in dicembre offre uno dei migliori city break invernali italiani. Gli Uffizi e l'Accademia — dove si trova il David di Michelangelo — hanno code molto più brevi che in qualsiasi altro periodo dell'anno, anche se il biglietto prenotato in anticipo rimane la scelta più comoda. Le decorazioni natalizie nel centro storico — Piazza della Signoria, Via dei Calzaiuoli, Ponte Vecchio — sono sobrie ma si armonizzano splendidamente con l'architettura rinascimentale."),
    p("Il mercatino tedesco Weihnachtsmarkt in Piazza Santa Croce, quando confermato, offre un'atmosfera insolita davanti alla Basilica di Santa Croce. Al ottobre 2026 le date 2026 non erano ancora state pubblicate — verifica su feelflorence.it prima di pianificare il viaggio attorno al mercato. Per la guida completa alla città, consulta [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta)."),

    h3("Milano"),
    mkt("night-market-crowd", "Folla di visitatori a un mercatino natalizio illuminato di notte con le bancarelle che brillano nell'oscurità", true),
    p("Milano a Natale è sofisticata e ricca di appuntamenti. Le vie dello shopping — Via Montenapoleone, il Corso Vittorio Emanuele, la Galleria Vittorio Emanuele II — sono sontuosamente addobbate. Il Duomo circondato dal mercatino dal 1° dicembre è straordinario di notte, con la facciata in marmo bianco illuminata sul cielo scuro."),
    p("La fiera *Oh Bej! Oh Bej!* si svolge il **7–8 dicembre** al Castello Sforzesco, in concomitanza con la festa di Sant'Ambrogio (patrono di Milano): il 7 dicembre è festività locale e molte attività milanesi chiudono. La *Prima della Scala* — la serata inaugurale della stagione operistica — cade anch'essa il 7 dicembre: i biglietti sono carissimi e si esauriscono con mesi di anticipo, ma il red carpet si può vedere dall'esterno. Per la guida alla città, consulta [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo)."),

    h3("Bologna"),
    p("Bologna a Natale offre una delle migliori culture gastronomiche d'Italia in un centro storico compatto, con molti meno turisti rispetto a Firenze, Roma o Milano. I portici coprono decine di chilometri di strade, rendendola percorribile con qualsiasi tempo. I mercati e le botteghe alimentari — Mercato di Mezzo, il Quadrilatero — sono al massimo della loro offerta nelle settimane precedenti al Natale."),
    p("Per chi è interessato alla cucina italiana ai massimi livelli, le settimane intorno al Natale a Bologna sono un'occasione rara: sfoglini di pasta fresca, produttori di mortadella, importatori di vini locali moltiplicano le loro scorte. La Piazza Maggiore accoglie alcune decorazioni e qualche evento en plein air. Per la pianificazione completa, consulta la [guida a Bologna](/it/citta/bologna-in-due-giorni)."),

    h3("Torino"),
    p("Torino in dicembre è una delle mete invernali più eleganti d'Italia. I portici del centro — Piazza San Carlo, Via Roma, Via Po — rivaleggiano con quelli bolognesi per bellezza. L'installazione *Luci d'Artista* — grandi opere luminose di artisti internazionali dislocate in tutta la città da fine ottobre a gennaio — è l'evento visivo invernale più originale in Italia e vale il viaggio in sé."),
    p("La Mole Antonelliana e il Museo Nazionale del Cinema sono aperti in dicembre con orari adattati. Le Residenze Sabaude (Patrimonio UNESCO) sono meno affollate d'inverno che d'estate. Torino è anche il punto di partenza naturale per i mercatini della Valle d'Aosta e per le stazioni sciistiche della Valle di Susa. Per la guida alla città, consulta [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),

    h3("I paesi alpini: Bolzano, Merano, Trento, Bressanone, Aosta"),
    p("Il nord alpino ospita i mercatini di Natale più suggestivi d'Italia. Bolzano, Merano, Bressanone e Trento sono tutti raggiungibili da Verona in meno di 90 minuti con i regionali — consulta la [guida ai mercatini di Natale](/it/eventi/mercatini-di-natale-italia) per le date confermate e i consigli pratici. Aosta, all'estremità occidentale delle Alpi, è più facilmente raggiungibile da Torino. Questi paesi non sono solo mete per i mercatini: l'architettura, la cucina (un affascinante intreccio di tradizioni italiane, austriache e germaniche) e i paesaggi montani valgono una visita indipendentemente dai mercati."),

    h3("Venezia"),
    p("Venezia in dicembre è silenziosa come in nessun altro mese. La pressione dei numeri estivi svanisce, e la città — difficile da apprezzare al passo lento in estate — diventa percorribile e straordinariamente atmosferica nella sua caratteristica luce grigio-acqua invernale. La nebbia e l'acqua alta (l'allagamento temporaneo delle zone più basse) sono entrambe possibili; nessuna delle due è pericolosa, ma richiedono pianificazione pratica."),
    p("Gli eventi natalizi principali a Venezia si concentrano in Piazza San Marco e nelle chiese. La Basilica di San Marco è uno degli ambienti più suggestivi d'Italia per la musica liturgica natalizia. Il Palazzo Ducale e i principali musei sono aperti in dicembre con orari adattati. Per la guida ai quartieri, consulta [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),
    note("L'acqua alta — l'allagamento temporaneo per effetto delle maree — può interessare le zone più basse di Venezia (Piazza San Marco, Rialto) per alcune ore alla volta. Non è pericolosa: vengono installate le passerelle sopraelevate e si possono noleggiare stivali impermeabili sull'isola. Consulta le previsioni sul sito del Centro Previsioni e Segnalazioni Maree (maree.comune.venezia.it) se prevedi di visitare le zone più esposte.", "Venezia: acqua alta"),

    h2("Il cibo tradizionale di Natale"),
    mkt("gluhwein-vin-brule-stall", "Un banco del vin brulé decorato con stoviglie in ceramica e luci festive", true),
    p("Il cibo natalizio italiano è profondamente regionale. Non esiste un menù di Natale nazionale: le differenze tra una Vigilia a Napoli (a base di pesce), un pranzo di Natale a Bologna (pasta fresca e arrosti), e un Natale in Alto Adige (cucina alpina con influenze tedesche) sono sostanziali."),

    h3("Panettone e pandoro"),
    p("Questi due dolci lievitati sono i simboli per eccellenza del Natale italiano. Il **panettone** viene da Milano: è un dolce alto, a cupola, con uvetta e scorze candite di arancia e cedro, dalla mollica filante ottenuta con una lunga lievitazione naturale (36–72 ore per un artigianale di qualità). Il **pandoro** viene da Verona: è a forma di stella, ricco di burro, senza frutta, spolverato di zucchero a velo vanigliato. Entrambi compaiono sulle tavole di tutta Italia da fine ottobre e sono il regalo convenzionale da portare a un pranzo natalizio."),
    p("La differenza di qualità tra un panettone artigianale di una buona pasticceria milanese e uno industriale del supermercato è netta e merita di essere verificata di persona. Per approfondire la pasticceria italiana, consulta la [guida ai dolci tradizionali italiani](/it/cibo/dolci-tradizionali-italiani)."),

    h3("Il torrone"),
    p("Il *torrone* — nougat di miele, albume d'uovo e mandorle o nocciole tostate — è il dolce natalizio più venduto in Italia. Esiste nelle versioni morbida e dura, e viene prodotto in molte regioni. Cremona (Lombardia) è considerata la sua capitale storica e ospita ogni novembre un festival dedicato. La Valle d'Aosta produce un torrone pregiato con miele di acacia di montagna; l'Alto Adige ha la sua versione tradizionale. Entrambi sono ben rappresentati nei mercatini alpini."),

    h3("La tradizione del pesce della Vigilia"),
    p("In molte famiglie italiane, in particolare al Sud e nelle regioni del Centro-Sud, la cena della Vigilia esclude la carne in favore del pesce. Il baccalà — in molte preparazioni diverse — e il fritto di mare compaiono su molte tavole. Il numero e il tipo di portate variano enormemente da regione a regione e da famiglia a famiglia."),

    h3("I primi piatti delle feste"),
    p("Al Nord: la pasta fresca la fa da padrone. A Bologna e in Emilia-Romagna, il pranzo di Natale comincia quasi sempre con i **tortellini in brodo**. In Piemonte compaiono gli *agnolotti del plin*. In Lombardia il cotechino o lo zampone con le lenticchie è il piatto di San Silvestro per eccellenza."),
    p("Al Sud: l'agnello o il capretto arrosto con erbe aromatiche è il secondo tradizionale in gran parte del Mezzogiorno e della Sicilia. A Napoli il pranzo di Natale può includere l'insalata di rinforzo, gli struffoli al miele e i roccocò speziati. Per il contesto più ampio della cucina italiana regionale, consulta la [guida alle tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),

    h3("Le bevande delle feste"),
    p("Nei mercatini alpini il **vin brulé** — vino rosso speziato servito caldo — è la bevanda simbolo della stagione. La base è spesso un vino locale: un Teroldego trentino o un Lagrein altoatesino. Nelle città è onnipresente la cioccolata calda densa (*cioccolata in tazza*). Il succo di mela caldo è l'alternativa analcolica più comune nei mercatini alpini."),

    h2("Cosa è aperto durante le feste"),
    p("Gli orari di apertura in Italia durante il Natale e il Capodanno sono molto variabili e non si possono generalizzare in modo affidabile. La tabella che segue è un quadro orientativo — verificare sempre con le singole strutture."),
    table(
      ["Data", "Musei statali principali", "Musei Vaticani", "Chiese"],
      [
        ["8 dic (Immacolata)", "Molti chiusi — festività nazionale", "Verificare su vatican.va", "Aperte per le funzioni"],
        ["24 dic (Vigilia)", "Orari ridotti in molti casi", "Di solito chiude nel primo pomeriggio", "Aperte — messa di mezzanotte"],
        ["25 dic (Natale)", "La maggior parte chiusa", "Chiusi", "Aperte per le funzioni"],
        ["26 dic (Santo Stefano)", "Molti riaprono — orari ridotti", "Verificare su vatican.va", "Aperte"],
        ["31 dic (San Silvestro)", "Molti chiudono presto", "Chiusi", "Aperte"],
        ["1 gen (Capodanno)", "La maggior parte chiusa — festività nazionale", "Chiusi", "Aperte"],
        ["6 gen (Epifania)", "Alcuni chiusi — festività nazionale", "Verificare su vatican.va", "Aperte"],
      ],
      "Questa tabella mostra tendenze generali, non orari confermati per il 2026. Verificare sempre direttamente con le singole strutture."
    ),
    note("Il Colosseo (coopculture.it), gli Uffizi (uffizi.it), i Musei Vaticani (museivaticani.va) e la Galleria Borghese (borghese.it) pubblicano i propri calendari delle festività — da controllare singolarmente, poiché non sono uniformi."),

    h3("Ristoranti"),
    p("L'apertura dei ristoranti durante le feste è imprevedibile senza verificare singolarmente. Molte trattorie e ristoranti a conduzione familiare chiudono il 25 dicembre. I ristoranti di fascia alta e le sale dei grandi alberghi sono più spesso aperti ma richiedono prenotazione in anticipo, spesso con menu fisso. Tra Natale e Capodanno, la maggior parte dei ristoranti riprende l'attività normale. Nelle città più turistiche (Roma, Firenze, Venezia), una quota maggiore di ristoranti resta aperta durante le feste."),
    tip("Prenotare il ristorante per il 25 dicembre o per il 31 dicembre con almeno due-tre settimane di anticipo è indispensabile nelle destinazioni più frequentate. Molti stabiliscono un coperto minimo o propongono un menu fisso in queste date."),

    h3("Negozi"),
    p("Il 25 dicembre e il 1° gennaio i negozi osservano generalmente un orario domenicale (in pratica chiusi). I grandi supermercati nelle città principali possono aprire alcune ore il 26 dicembre e nel periodo tra Natale e Capodanno. Le vie dello shopping delle grandi città sono affollatissime nelle settimane prima del Natale, spesso con orari prolungati. I **saldi invernali** iniziano il 5 gennaio nella maggior parte delle regioni — il giorno prima dell'Epifania — anche se alcuni centri commerciali anticipano."),

    h3("Trasporti pubblici"),
    p("Trenitalia e Italo circolano con orari ridotti il 25 dicembre e il 1° gennaio. I servizi locali (metro, tram, autobus) applicano orari festivi. Prima di pianificare spostamenti il giorno di Natale o di Capodanno, verificare su trenitalia.com e italotreno.it e sui siti degli operatori locali (ATAC per Roma, ATM per Milano, GTT per Torino)."),
    p("Per una guida completa agli spostamenti intercittadini, consulta [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane) e la [guida ai treni in Italia](/it/guide/viaggiare-in-italia-in-treno)."),

    h2("Il tempo in dicembre e cosa mettere in valigia"),
    p("L'Italia è un paese lungo, con un clima molto vario in dicembre. I dati qui sotto mostrano medie climatiche storiche — non una previsione per il dicembre 2026."),
    table(
      ["Regione / Città", "Temperatura massima media dicembre", "Temperatura minima", "Precipitazioni"],
      [
        ["Nord alpino (Bolzano, Trento, Aosta)", "2–6 °C", "da −3 a 0 °C", "Neve possibile in quota; fondovalle solitamente secco"],
        ["Milano / Torino", "5–9 °C", "0–3 °C", "Nebbia frequente; piogge occasionali; neve rara in città"],
        ["Venezia", "6–9 °C", "1–3 °C", "Grigia e umida; nebbia; acqua alta possibile"],
        ["Firenze / Bologna", "8–12 °C", "2–5 °C", "Piogge moderate; più freddo in collina"],
        ["Roma", "11–14 °C", "5–8 °C", "Dicembre è uno dei mesi più piovosi di Roma"],
        ["Napoli / Campania", "12–15 °C", "7–9 °C", "Mite; qualche pioggia; serate fresche"],
        ["Sicilia / Palermo", "14–17 °C", "9–11 °C", "La destinazione più mite d'Italia in dicembre"],
      ],
      "Fonte: medie climatiche ISPRA e dati meteorologici storici. Non è una previsione."
    ),
    ul(
      "**Indumento impermeabile**: indispensabile in tutta Italia in dicembre. Una giacca a vento impermeabile che si indossa sopra altri strati è più versatile di un ombrello sui sanpietrini.",
      "**Strato intermedio caldo**: una felpa o un piumino leggero per le serate a Roma e Firenze; un piumino pesante per le zone alpine.",
      "**Scarpe comode e impermeabili**: i selciati bagnati diventano scivolosi. Scarpe da trekking impermeabili alla caviglia sono più utili delle sneaker.",
      "**Stivali corti per Venezia**: altezza 10–15 cm, se è prevista acqua alta.",
      "**Abiti leggermente eleganti per gli eventi**: la Prima della Scala, le funzioni religiose di Natale e i ristoranti delle feste tendono al smart-casual.",
    ),

    h2("Muoversi in Italia a Natale"),
    p("La rete ferroviaria italiana è efficiente per i viaggi intercittadini anche durante le feste, ma richiede più pianificazione del solito. I treni alta velocità tra Roma, Firenze, Bologna, Milano, Venezia e Torino viaggiano con orari ridotti il 25 dicembre e il 1° gennaio."),
    p("Prenota i biglietti intercittadini in anticipo per il periodo **21 dicembre – 2 gennaio**: la domanda è alta e i prezzi aumentano sotto data. La [guida ai treni in Italia](/it/guide/viaggiare-in-italia-in-treno) illustra la rete nel dettaglio. Per i collegamenti regionali con i paesi dei mercatini alpini, consulta la [guida ai mercatini di Natale](/it/eventi/mercatini-di-natale-italia)."),
    p("Per gli arrivi in aereo durante le feste, prenota i trasferimenti con anticipo: la disponibilità di taxi può essere ridotta il 25 dicembre e il 1° gennaio. Consulta la [guida ai trasferimenti aeroportuali](/it/guide/trasferimenti-aeroporti-italia). Per la pianificazione dei costi del viaggio, consulta la [guida al costo di un viaggio in Italia](/it/guide/costo-viaggio-italia)."),
    tip("Prenota i biglietti del treno per la settimana del 21–27 dicembre e dal 30 dicembre al 2 gennaio con due-tre mesi di anticipo. Il traffico ferroviario natalizio in Italia è più intenso di quanto molti visitatori si aspettino.", "Prenotare in anticipo"),

    h2("Idee itinerario per le feste"),
    note("Questi sono schemi orientativi, non programmi di eventi confermati. Verificare gli orari di musei, ristoranti e attrazioni prima di strutturarci un programma."),

    h3("Tre giorni a Roma a Natale"),
    p("**Giorno 1**: Arrivo e sistemazione. La sera, passeggiata nel centro storico — Piazza Navona (con la fiera dal 1° dicembre), Via del Corso, il Pantheon. Cena prenotata in anticipo."),
    p("**Giorno 2**: Mattina in Vaticano — Piazza San Pietro (presepe e albero dall'8 dicembre), Basilica di San Pietro. Se il 25 dicembre: Urbi et Orbi e la folla in piazza. Pomeriggio: Castel Sant'Angelo e il Prati."),
    p("**Giorno 3**: Foro Romano, Colosseo e Palatino al mattino (code molto più brevi dell'estate). Pranzo e passeggiata a Trastevere. Sera: Piazza Navona o dintorni della Fontana di Trevi."),

    h3("Cinque giorni nei mercatini alpini"),
    p("**Giorno 1**: Arrivo a Verona. Centro storico e mercato (se operativo nel 2026)."),
    p("**Giorno 2**: Gita a Trento in treno (60–70 minuti). Mercatino di Piazza Fiera. Rientro a Verona o trasferimento a Bolzano."),
    p("**Giorno 3**: Christkindlmarkt di Bolzano (giornata intera). Il mercato chiude intorno alle 21:00."),
    p("**Giorno 4**: Bressanone (40 minuti a nord di Bolzano). Rientro a Bolzano per l'installazione OOPS al Hofburg. Opzione gita: Merano (30 minuti a sud di Bolzano)."),
    p("**Giorno 5**: Viaggio a Milano (1 ora e 45 minuti). Mercatino del Duomo e fiera Oh Bej! Oh Bej! (solo 7–8 dicembre). Rientro alla città di partenza."),

    h2("Checklist pratica"),
    {
      type: "checklist",
      id: "natale-italia-pianificazione",
      groups: [
        {
          title: "Prima di prenotare",
          items: [
            "Scegli le date e verifica quali mercati ed eventi cadono nel tuo periodo",
            "Controlla le fonti ufficiali per i programmi 2026 confermati (non le date stimate)",
            "Leggi la tabella climatica e prepara il bagaglio di conseguenza",
            "Decidi le città da visitare — non è necessario visitarle tutte per un buon viaggio di Natale",
          ],
        },
        {
          title: "Alloggio",
          items: [
            "Prenotare l'alloggio nei paesi alpini (Bolzano, Merano, Bressanone) con 3–4 mesi di anticipo — offerta limitata",
            "Per Roma e Milano nella settimana del 22–27 dicembre: prenotare con almeno 2 mesi di anticipo",
            "Confermare la policy di chiusura festiva della struttura",
          ],
        },
        {
          title: "Trasporti",
          items: [
            "Prenotare i biglietti intercittadini per il 21 dic – 2 gen con largo anticipo",
            "Verificare gli orari ridotti del 25 dicembre e del 1° gennaio prima di affidarsi a servizi specifici",
            "Prenotare in anticipo i trasferimenti aeroportuali per il 25 dicembre e il 1° gennaio",
            "Controllare gli orari festivi dei trasporti locali sui siti degli operatori di ogni città",
          ],
        },
        {
          title: "Attrazioni ed eventi",
          items: [
            "Verificare gli orari di musei e attrazioni per il 25, 26 dicembre, 1 e 6 gennaio",
            "Prenotare la Galleria Borghese (Roma) e i Musei Vaticani con anticipo — richiedono il time slot",
            "Controllare il calendario degli Uffizi (Firenze) su uffizi.it",
            "Per la Prima della Scala (7 dicembre, Milano) — prenotare mesi prima",
            "Confermare le date dei mercatini ancora non annunciati (Verona, Firenze)",
          ],
        },
        {
          title: "Cibo e ristorazione",
          items: [
            "Prenotare il ristorante per il 25 dicembre e il 31 dicembre con almeno 2–3 settimane di anticipo",
            "Informarsi sulle specialità natalizie locali delle città che visiterai",
            "Verificare se il ristorante chiude il 25 dicembre o propone un menu fisso",
          ],
        },
        {
          title: "Solo per Venezia",
          items: [
            "Controlla le previsioni dell'acqua alta vicino alla data di visita su maree.comune.venezia.it",
            "Porta stivali impermeabili corti (10–15 cm) se viaggi in dicembre",
          ],
        },
      ],
    },
  ],

  faqs: [
    {
      question: "È un buon momento visitare l'Italia a Natale?",
      answer: "Sì, per diverse ragioni. Le code ai grandi musei e alle attrazioni sono molto più brevi che d'estate. I prezzi degli hotel in molte città calano tra l'inizio e il 21 dicembre. L'atmosfera natalizia nelle città italiane è autentica e radicata in secoli di tradizioni cattoliche e popolari — i presepi, le messe di mezzanotte e la Befana aggiungono una profondità culturale che i visitatori estivi non incontrano. Il rovescio della medaglia è che le giornate sono corte, le temperature più basse e occorre verificare con cura gli orari di apertura intorno al 25–26 dicembre e al 1° gennaio.",
    },
    {
      question: "Quali città italiane vale la pena visitare a Natale?",
      answer: "Roma per gli eventi vaticani e la fiera di Piazza Navona. Napoli per la tradizione presepiale di Via San Gregorio Armeno. I paesi alpini (Bolzano, Trento, Merano, Bressanone, Aosta) per i mercatini più suggestivi d'Italia. Milano per il mercatino del Duomo e la Prima della Scala il 7 dicembre. Venezia per l'atmosfera invernale unica. Firenze per l'accesso ai musei e al Weihnachtsmarkt (quando confermato). Ogni città offre un'esperienza natalizia diversa.",
    },
    {
      question: "Quando aprono i mercatini di Natale italiani nel 2026?",
      answer: "Le prime aperture confermate sono Trento (20 novembre) e Aosta (21 novembre). Merano apre il 26 novembre, Bolzano e Bressanone il 27 novembre. Il mercatino del Duomo di Milano e la fiera di Piazza Navona a Roma aprono il 1° dicembre. Al ottobre 2026, Verona e Firenze non avevano ancora pubblicato le date ufficiali. Per la copertura completa, consulta la [guida ai mercatini di Natale](/it/eventi/mercatini-di-natale-italia).",
    },
    {
      question: "Cosa si mangia a Natale in Italia?",
      answer: "Varia molto per regione. La cena della Vigilia in molte famiglie del Sud è a base di pesce (la tradizione della *Vigilia*). Il pranzo di Natale al Nord prevede spesso pasta fresca ripiena (tortellini in brodo a Bologna, agnolotti in Piemonte) e lesso o arrosto. Su quasi tutte le tavole compaiono panettone (Milano) e pandoro (Verona). Il torrone è il dolce natalizio più diffuso. Per il contesto regionale, consulta la [guida alle tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana).",
    },
    {
      question: "Negozi e musei sono aperti il giorno di Natale?",
      answer: "La maggior parte dei musei statali e dei negozi chiude il 25 dicembre. I Musei Vaticani sono chiusi; la Basilica di San Pietro e la Piazza sono accessibili per le funzioni. Molti musei riaprono il 26 dicembre, spesso con orari ridotti. Ogni struttura va verificata singolarmente — non esiste una regola nazionale uniforme.",
    },
    {
      question: "I trasporti pubblici funzionano il 25 e il 26 dicembre?",
      answer: "I treni intercittadini (Trenitalia e Italo) circolano con orari ridotti il 25 dicembre e il 1° gennaio. I trasporti locali (metro, tram, bus) applicano orari festivi. Verificare su trenitalia.com, sui siti dei singoli operatori cittadini e sulle app di riferimento prima di programmare spostamenti nei giorni di festa.",
    },
    {
      question: "Che tempo fa in Italia in dicembre?",
      answer: "Dipende dalla zona. Il Nord alpino è freddo (2–6 °C di giorno) con possibile neve in quota. Milano e Torino: 5–9 °C; Roma: 11–14 °C; Napoli: 12–15 °C; Sicilia: 14–17 °C. La pioggia è possibile ovunque; dicembre è uno dei mesi più piovosi di Roma. Porta indumenti impermeabili e a strati ovunque tu vada. Il Sud e la Sicilia sono le destinazioni più miti.",
    },
    {
      question: "È necessario prenotare ristoranti e alloggi in anticipo?",
      answer: "Sì, soprattutto per la settimana del 22–27 dicembre e per il 31 dicembre – 1° gennaio. L'alloggio nei paesi dei mercatini alpini (Bolzano, Merano, Bressanone) va prenotato con tre-quattro mesi di anticipo. I ristoranti per il 25 dicembre e il 31 dicembre nelle città più gettonate si esauriscono con largo anticipo. Per le prime tre settimane di dicembre, una prenotazione con due-quattro settimane di anticipo è di solito sufficiente.",
    },
    {
      question: "Cos'è la Befana e perché è importante?",
      answer: "La Befana è una figura della tradizione popolare italiana — una simpatica vecchina che nella notte tra il 5 e il 6 gennaio porta doni ai bambini buoni e carbone dolce a quelli che non lo sono stati. L'Epifania è una festività nazionale e, in molte famiglie italiane, attesa quanto il Natale per i bambini. La fiera di Piazza Navona a Roma si chiama ufficialmente 'Befana e Natale in Piazza Navona' e si conclude con le celebrazioni del 6 gennaio.",
    },
    {
      question: "Qual è la differenza tra panettone e pandoro?",
      answer: "Entrambi sono dolci lievitati simbolo del Natale italiano. Il panettone è milanese: alto, a cupola, con uvetta e scorze candite, dalla mollica filante prodotta con una lievitazione naturale che richiede 36–72 ore. Il pandoro è veronese: a forma di stella, ricco di burro, senza frutta, spolverato di zucchero a velo vanigliato. La differenza tra un artigianale di qualità e una versione industriale è sostanziale — vale la pena cercarne uno in una buona pasticceria.",
    },
  ],

  sourcesTitle: "Fonti e verifiche",
  sources: [
    {
      label: "Christkindlmarkt di Bolzano — christkindlmarkt.it",
      url: "https://www.christkindlmarkt.it/it/mercatini-di-natale-bolzano",
      note: "Gestore ufficiale; date 2026 confermate 27 nov – 6 gen 2027",
    },
    {
      label: "Mercatino di Natale di Trento — natale.visittrento.it",
      url: "https://natale.visittrento.it/en/christmas-market",
      note: "Visit Trento ufficiale; confermata apertura 20 nov 2026",
    },
    {
      label: "Meraner Weihnacht — merano-suedtirol.it",
      url: "https://www.merano-suedtirol.it/en/merano/info-service/events/merano-christmas-market.html",
      note: "Turismo Merano ufficiale; confermata apertura 26 nov 2026",
    },
    {
      label: "Mercatino del Duomo Milano — comune.milano.it",
      url: "https://www.comune.milano.it",
      note: "Avviso pubblico del Comune di Milano; date 1 dic 2026 – 6 gen 2027 confermate",
    },
    {
      label: "Calendario natalizio Vaticano — vatican.va",
      url: "https://www.vatican.va",
      note: "Calendario ufficiale per funzioni natalizie, Urbi et Orbi, allestimento presepe",
    },
    {
      label: "Fiera di Piazza Navona Roma — comune.roma.it",
      url: "https://www.comune.roma.it",
      note: "Comune di Roma; confermate date 1 dic 2026 – 6 gen 2027",
    },
    {
      label: "Orari festivi Trenitalia — trenitalia.com",
      url: "https://www.trenitalia.com",
      note: "Verificare gli orari ridotti del 25 dicembre e del 1° gennaio",
    },
    {
      label: "Previsioni acqua alta Venezia — maree.comune.venezia.it",
      url: "https://maree.comune.venezia.it",
      note: "Servizio ufficiale di previsione delle maree a Venezia",
    },
    {
      label: "Weihnachtsmarkt Firenze — feelflorence.it",
      url: "https://www.feelflorence.it",
      note: "Turismo Firenze ufficiale; date 2026 non ancora confermate al ottobre 2026",
    },
  ],
};
