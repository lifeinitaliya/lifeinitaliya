import type { ArticleContent, ContentBlock } from "@/lib/types";

// Edizione italiana — Galateo a tavola in Italia.
// Scritta in italiano per lettori italiani, non una traduzione dell'edizione inglese.
// La prospettiva è quella di un lettore italiano che vuole capire le proprie abitudini
// nel contesto del confronto con i visitatori stranieri, o che si prepara ad accoglierli.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-dining-etiquette";

export const galateoATavola: ArticleContent = {
  body: [
    h2("Mangiare fuori in Italia: consuetudini, non comandamenti"),
    answer("**Il modo di stare a tavola in Italia varia per regione, tipo di locale, occasione e gusto personale.** Non esiste un unico «galateo italiano» valido da Aosta a Palermo: le abitudini di una trattoria bolognese, di una pizzeria napoletana e di un ristorante milanese di tendenza differiscono in modo significativo. Questa guida raccoglie le convenzioni più diffuse e praticamente utili — non regole assolute."),
    p("Per chi arriva dall'estero, la cucina italiana è spesso sorprendente proprio per quello che *non* è: non è formale, non è rigida, non è ostile ai bambini e non richiede una laurea in gastronomia per orientarsi. Quello che richiede è un po' di attenzione ai ritmi e ai codici locali. Per una panoramica più ampia sulle tradizioni culinarie regionali, consultate la [guida alle tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
    {
      type: "facts",
      title: "A tavola in Italia: elementi essenziali",
      rows: [
        { label: "Struttura del pasto", value: "Un pasto italiano completo prevede antipasto, primo, secondo, contorno, dolce e caffè. Ordinare tutti i portate è facoltativo: due portate sono la norma." },
        { label: "Orari del pranzo", value: "Generalmente dalle 12:30 alle 14:30 nel Centro-Nord; nel Sud e in Sicilia spesso più tardi. La cucina si chiude: molti ristoranti non servono pranzo oltre le 14:30–15:00." },
        { label: "Orari della cena", value: "Generalmente dalle 19:30 alle 22:30. Nel Sud e in Sicilia si cena spesso più tardi. I ristoranti al di fuori dei quartieri turistici aprono di rado prima delle 19:30." },
        { label: "Coperto", value: "Addebito per persona che copre il pane e l'apparecchiatura del tavolo. Non è una mancia. Deve essere indicato sul menù o all'ingresso." },
        { label: "Mancia", value: "Non è strutturale nella ristorazione italiana come negli Stati Uniti. Lasciare qualche euro per un servizio eccellente è un gesto apprezzato, non un obbligo." },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Gli orari dei pasti",
        "La struttura del pasto italiano",
        "Caffè e bevande",
        "Coperto, servizio e mancia",
        "Il conto",
        "Come comportarsi a tavola",
        "Gli errori più comuni dei turisti",
        "Frasi utili al ristorante",
        "Allergie e restrizioni alimentari",
        "Differenze regionali",
      ],
    },
    image("restaurant-interior-tables", "L'interno accogliente di un ristorante italiano con tavoli apparecchiati e un'illuminazione calda", true),

    // ——— Orari ———
    h2("Gli orari dei pasti"),
    p("I ristoranti italiani non servono pasti in modo continuativo durante tutta la giornata. La maggior parte effettua un servizio pranzo e un servizio cena con una pausa nel mezzo — spesso dalle 14:30 alle 19:00 o 19:30, a seconda della città, della stagione e del locale. Alcuni ristoranti, in particolare nelle zone turistiche e nelle grandi città, offrono un servizio continuato. Vale sempre la pena verificare gli orari prima di presentarsi."),
    h3("Colazione"),
    p("La colazione italiana è rapida e leggera: un cornetto e un cappuccino o un espresso al bancone del bar, spesso consumati in piedi. I ristoranti non sono il luogo della colazione: si fa al bar o a casa. Per approfondire, consultate la [guida alla colazione italiana](/it/cibo/colazione-italiana)."),
    h3("Pranzo"),
    p("Il pranzo si svolge generalmente tra le 12:30 e le 14:30 nel Centro-Nord, con orari più flessibili nel Sud. Un pranzo seduto — due portate, un dolce — è un'occasione conviviale che può durare anche due ore. Molti italiani che lavorano pranzano in modo più rapido, fermandosi per un solo piatto o per un panino al bar."),
    h3("Aperitivo"),
    p("L'aperitivo è il rituale predinner di bevande e stuzzichini, generalmente tra le 18:00 e le 19:30. A Milano l'aperitivo è spesso accompagnato da un ricco buffet di cibo che può sostituire la cena. Altrove è più leggero. Per i dettagli, leggete la [guida all'aperitivo italiano](/it/cibo/aperitivo-italiano)."),
    h3("Cena"),
    p("La cena inizia di solito tra le 19:30 e le 20:30 nel Centro-Nord, più tardi nel Sud. È il pasto più conviviale della giornata. I ristoranti si riempiono dalle 20:00 in poi; il venerdì e il sabato è consigliabile prenotare."),
    image("outdoor-restaurant-seating", "Tavoli esterni di un ristorante italiano apparecchiati con bicchieri e tovaglioli, pronti per il servizio serale in una piazza", true),

    // ——— Struttura ———
    h2("La struttura del pasto italiano"),
    p("Il menù italiano tradizionale segue una sequenza precisa. Conoscerla aiuta a orientarsi, a capire quanto si vuole ordinare e a leggere il menù senza sorprese."),
    h3("Antipasto"),
    p("I piatti d'entrata: affettati, bruschette, olive, verdure in pinzimonio o marinate, burrata, formaggi. L'antipasto è facoltativo — molti commensali lo saltano per iniziare direttamente con il primo."),
    h3("Primo"),
    p("Il primo piatto è quasi sempre pasta, risotto o gnocchi. In molte regioni è considerato il centro del pasto, e al ristorante è normale ordinare solo il primo se si ha poco appetito. Per approfondire le tradizioni della pasta italiana, consultate la [guida ai formati di pasta italiani](/it/cibo/formati-di-pasta-italiani) e la [guida alla pasta romana](/it/cibo/pasta-romana)."),
    h3("Secondo"),
    p("Il secondo piatto: carne o pesce, generalmente preparati in modo semplice — alla griglia, arrosto, in umido. Il contorno (verdure, patate, insalata) si ordina e si paga separatamente."),
    h3("Dolce"),
    p("Dolce, frutta, gelato, formaggi. Alcuni ristoranti propongono un piatto di formaggi al posto o accanto al dolce."),
    h3("Caffè"),
    p("Il caffè chiude il pasto. Un espresso dopo il secondo è la norma. I digestivi — amaro, grappa, limoncello — vengono spesso offerti o proposti dopo il caffè."),
    note("Non è obbligatorio ordinare tutte le portate. Due piatti — un primo e un secondo, o un antipasto e un primo — è del tutto normale. Ordinare solo il primo a pranzo è comune. In molti ristoranti è disponibile un menù fisso (menù del giorno) come alternativa all'ordinazione à la carte."),
    image("pasta-fork-plate", "Un piatto di pasta sollevato con una forchetta in un ristorante italiano, che mostra una porzione generosa", true),
    h3("Ordinare à la carte"),
    p("Il cameriere prende prima l'ordine delle bevande, poi gli antipasti, poi i piatti principali. Non è necessario ordinare tutto insieme: è normale scegliere le portate una alla volta. Per sapere cosa c'è di fresco, chiedete *I piatti del giorno* o *Cosa avete oggi?*"),
    tip("*Possiamo vedere il menù?* — Se dopo qualche minuto nessuno vi ha portato il menù, è normale chiederlo. In molte trattorie il cameriere recita le proposte del giorno a voce, senza consegnare un menù scritto."),

    // ——— Caffè e bevande ———
    h2("Caffè e bevande"),
    image("espresso-cups-counter", "Due tazze bianche da espresso appoggiate su una macchina cromata al bancone di un bar italiano", true),
    p("Il caffè e le bevande in Italia hanno le loro convenzioni — alcune reali, altre esagerate dalla letteratura turistica."),
    h3("Caffè"),
    ul(
      "**Caffè / espresso:** In Italia, *un caffè* è un espresso — una piccola tazzina concentrata, consumata rapidamente, spesso al bancone. È la bevanda predefinita quando si ordina *un caffè* senza ulteriori specifiche.",
      "**Caffè macchiato:** Un espresso 'macchiato' con una piccola quantità di latte schiumato. *Macchiato caldo* con latte caldo; *macchiato freddo* con latte freddo.",
      "**Cappuccino:** Un terzo espresso, un terzo latte cotto a vapore, un terzo schiuma. Bevuto principalmente al mattino. Molti italiani non bevono il cappuccino dopo la colazione, per ragioni di gusto e tradizione — ma nessuna regola lo vieta, e il bar lo serve a qualsiasi ora.",
      "**Caffè latte / latte macchiato:** Bevande più lunghe e lattose. Un *latte macchiato* è un bicchiere di latte caldo 'macchiato' da un caffè. Se all'estero si ordina un *latte*, si intende una miscela di latte e caffè; in Italia, *latte* da solo significa semplicemente latte.",
      "**Caffè lungo / americano:** Un caffè più allungato, meno concentrato dell'espresso.",
    ),
    p("Per la cultura del caffè, come ordinare al bar, le differenze regionali e le tradizioni locali, consultate la [guida al caffè italiano](/it/cibo/caffe-italiano)."),
    h3("Acqua"),
    p("Ordinare l'acqua con il pasto è normale. Il cameriere di solito chiede: *liscia o frizzante?* Entrambe si pagano. L'acqua del rubinetto (*acqua del rubinetto*) è potabile e disponibile — chiedetela se preferite, anche se non viene portata automaticamente."),
    h3("Vino e altre bevande"),
    p("Il vino della casa si ordina in caraffa — un quarto, mezzo litro o un litro. È spesso una scelta affidabile e conveniente. Per i vini regionali italiani, consultate la [guida ai vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
    image("aperitivo-orange-glass", "Un bicchiere di aperitivo arancione brillante — probabilmente un Aperol Spritz — su un tavolo di un bar italiano", true),
    p("Le bevande da aperitivo — Campari, Aperol Spritz, Negroni, Prosecco — si ordinano di solito al bar prima di cena, non durante il pasto. La [guida all'aperitivo italiano](/it/cibo/aperitivo-italiano) approfondisce il tema."),

    // ——— Coperto ———
    h2("Coperto, servizio e mancia"),
    p("Questa è l'area che genera più domande e malintesi, in parte perché le pratiche variano per regione e locale, in parte perché la terminologia non è uniforme."),
    h3("Il coperto"),
    p("Il coperto è un addebito per persona che copre il pane, la tovagliatura e l'apparecchiatura del tavolo. Non è una mancia. Deve essere indicato sul menù oppure esposto all'ingresso del locale. La cifra varia — generalmente pochi euro a testa, ma più alta nei locali di livello o nelle zone turistiche più frequentate."),
    p("La normativa italiana prevede che il coperto sia indicato nel conto fiscale come voce separata. Il Lazio, con una delibera del 2006, ha introdotto l'obbligo di esposizione del coperto sul menù o all'ingresso. Altre regioni hanno discipline proprie. Se il coperto compare nel conto senza essere stato indicato sul menù o all'ingresso, avete il diritto di chiedere chiarimenti: *Mi può spiegare questo coperto?*"),
    h3("Servizio incluso"),
    p("Alcuni ristoranti aggiungono una voce separata per il servizio (*servizio*), a volte espressa in percentuale, oltre al coperto o al suo posto. Anche questa voce deve essere indicata chiaramente sul menù. *Servizio incluso* significa che il servizio è compreso nei prezzi indicati; non ci sarà una voce aggiuntiva nel conto."),
    note("Il coperto e il servizio indicato in menù sono addebiti concordati al momento di sedersi a tavola, non mance. Se volete lasciare una mancia al personale, è un gesto separato e aggiuntivo."),
    h3("La mancia"),
    p("In Italia la mancia non fa parte della struttura retributiva del settore come negli Stati Uniti. I lavoratori della ristorazione italiana hanno un contratto collettivo e non dipendono dalla mancia per il proprio reddito. Non è attesa nel senso in cui lo è in certi paesi anglofoni."),
    p("Detto questo, lasciare qualcosa per un servizio genuinamente buono è un gesto normale e apprezzato. Arrotondare il conto, lasciare uno-due euro a persona, o aggiungere qualche euro per un servizio eccellente è del tutto appropriato. Gli italiani stessi lasciano la mancia in modo selettivo e informale. Non esiste una percentuale standard né un obbligo."),
    tip("Non confondete la voce *coperto* nel conto con una mancia. Se volete lasciare qualcosa in più al personale, lasciatelo in contanti — direttamente al cameriere o sul tavolo mentre uscite."),

    // ——— Conto ———
    h2("Il conto"),
    image("trattoria-checkered-tablecloth", "L'interno di una tipica trattoria italiana con tovaglie a quadri rossi e bianchi su tavoli di legno", true),
    p("In Italia il conto non arriva da solo: il cameriere non lo porta fino a quando non lo chiedete. Questo fa parte della cultura del pasto all'italiana — non si deve mai avere fretta di alzarsi, e il conto non è un segnale per andarsene."),
    h3("Come chiedere il conto"),
    p("*Il conto, per favore.* Catturare l'attenzione del cameriere e fare il gesto della scrittura in aria è universalmente capito. Non è sgarbato chiederlo — è semplicemente necessario."),
    h3("Leggere il conto"),
    p("Lo scontrino fiscale (o la ricevuta fiscale) è obbligatorio per legge. Deve elencare le voci ordinate, il coperto (se presente), l'eventuale servizio, e il totale. Controllate il conto con calma — gli errori sono rari ma capitano. Se qualcosa non torna, chiedete: *Mi può spiegare questa voce?*"),
    h3("Dividere il conto"),
    p("Fare alla romana (dividere in parti uguali) o pagare ognuno la propria parte (*alla romana* o *alla propria*) è comune. Se il ristorante possa gestire la divisione del conto dipende dal locale: le trattorie piccole preferiscono spesso un unico pagamento; i ristoranti più grandi non hanno generalmente difficoltà. È ragionevole chiedere in anticipo: *Si può dividere il conto?*"),
    h3("Metodi di pagamento"),
    p("Il pagamento con carta è ampiamente accettato nei ristoranti, soprattutto nelle città. Dal 2022, le attività commerciali italiane al di sopra di certe soglie di fatturato sono tenute ad accettare pagamenti elettronici (*POS obbligatorio*), ma l'applicazione è stata discontinua e i locali piccoli o rurali possono ancora preferire il contante. Avere qualche banconota con sé è pratico."),
    note("Per legge italiana il cliente deve ritirare lo scontrino fiscale prima di uscire dal locale. La Guardia di Finanza effettua controlli a campione. Conservate lo scontrino fino a quando non siete fuori dalla porta."),

    // ——— Comportamento ———
    h2("Come comportarsi a tavola"),
    image("people-dining-outdoor", "Un gruppo di persone che pranzano ai tavoli esterni di un ristorante italiano in una giornata di sole", true),
    h3("Entrare e sedersi"),
    p("In un ristorante o in una trattoria di livello, aspettate di essere accompagnati al tavolo anziché sceglierlo da soli. In una pizzeria o in un'osteria informale, accomodarsi direttamente è spesso normale — se non siete sicuri, fermatevi un momento all'ingresso e aspettate che qualcuno vi venga incontro. Un *Buongiorno* o un *Buonasera* appena entrate è la norma."),
    h3("Il pane"),
    p("Il pane viene portato al tavolo come parte del coperto. Non si serve generalmente con burro o con olio da intingolo — anche se nelle zone turistiche molti locali si adeguano su richiesta. Il pane a tavola è per accompagnare il pasto, e fare la scarpetta — pulire il fondo del piatto con un pezzo di pane — è considerato del tutto normale, anzi un complimento implicito al cuoco."),
    h3("Condividere i piatti"),
    p("Condividere il cibo tra commensali è normale e diffuso. Ordinare piatti da condividere è comune nei pasti informali. Prima di prendere cibo dal piatto di un'altra persona, è buona educazione chiedere — non perché sia vietato, ma per rispetto."),
    h3("Posate e uso della forchetta"),
    p("Il coperto italiano prevede forchetta a sinistra, coltello a destra. La pasta si mangia con la forchetta, senza cucchiaio — usare il cucchiaio per avvolgere la pasta non è una pratica italiana, anche se nessuno si scandalizzerà. Il pesce e la carne vengono serviti con le posate appropriate."),
    h3("Cellulare a tavola"),
    p("Non esiste una regola che vieta l'uso del cellulare a tavola. Fare una telefonata prolungata mentre si è in compagnia è generalmente considerato scortese. Fotografare i piatti è comune e non solleva particolari obiezioni nella maggior parte dei ristoranti."),
    h3("Bambini"),
    p("I ristoranti italiani sono generalmente accoglienti con i bambini, che sono parte normale della vita sociale italiana. Molti hanno un *menù bambini* o preparano piatti semplici su richiesta. Nei periodi di punta il personale ha meno flessibilità per variazioni particolari."),
    h3("Ritmo del servizio"),
    p("Un pasto al ristorante italiano non è pensato per essere sbrigativo. Tra le portate ci sono delle pause; il cameriere non ritira il piatto un secondo dopo che avete posato la forchetta. In una trattoria affollata il servizio può essere energico e attento; in un locale più tranquillo potreste dover fare un cenno per ordinare la portata successiva. Se l'attesa sembra eccessiva rispetto all'affluenza del locale, è normale chiedere: *Potremmo ordinare?*"),

    // ——— Errori comuni ———
    h2("Gli errori più comuni dei turisti"),
    ul(
      "**Arrivare tra un servizio e l'altro.** Molti ristoranti italiani aprono per il pranzo, chiudono nel pomeriggio e riaprono per la cena. Presentarsi alle 15:30 o alle 18:30 vuol dire spesso trovare la cucina chiusa. Controllare gli orari prima è indispensabile.",
      "**Confondere coperto e mancia.** Il coperto è un addebito dichiarato nel menù, non una mancia. Eventuale mancia aggiuntiva è un gesto separato.",
      "**Ordinare tutto il menù per senso di obbligo.** Nessuno si aspetta che ordiniate cinque portate. Un primo e un secondo — o solo un primo a pranzo — è del tutto normale.",
      "**Aspettarsi il cappuccino quando si vuole.** Molti italiani non lo bevono dopo la colazione, ma i bar lo preparano a qualsiasi ora senza problemi.",
      "**Aspettare che arrivi il conto.** Il conto non viene portato automaticamente. Chiamate il cameriere e chiedete.",
      "**Aspettarsi lo stesso ritmo di servizio di altri paesi.** Pause tra le portate, rilassatezza, pasti che durano — è parte dell'esperienza, non un'inefficienza.",
      "**Credere che le abitudini romane valano per tutta l'Italia.** Le tradizioni variano considerevolmente tra Roma, Milano, Napoli, Palermo e la provincia. Non esiste un galateo unico.",
      "**Non prenotare il weekend.** I ristoranti popolari si riempiono rapidamente il venerdì e il sabato sera. Una prenotazione telefonica — anche lo stesso giorno — evita brutte sorprese.",
    ),
    image("table-setting-cutlery", "Un piatto bianco con forchetta e coltello affiancati su una tovaglia bianca, un tipico coperto italiano da ristorante", true),

    // ——— Frasi utili ———
    h2("Frasi utili al ristorante"),
    table(
      ["Italiano", "Significato", "Contesto"],
      [
        ["*Un tavolo per due, per favore.*", "A table for two, please.", "Chiedere un tavolo"],
        ["*Avete un tavolo disponibile?*", "Do you have a table available?", "Senza prenotazione"],
        ["*Ho una prenotazione a nome...*", "I have a reservation under the name...", "Arrivando con prenotazione"],
        ["*Possiamo vedere il menù?*", "May we see the menu?", "Se il menù non è stato portato"],
        ["*Che cosa consiglia?*", "What do you recommend?", "Chiedere il parere del cameriere"],
        ["*Quali sono i piatti del giorno?*", "What are today's specials?", "Per sapere i piatti freschi"],
        ["*Vorrei ordinare.*", "I'd like to order.", "Segnalare la disponibilità a ordinare"],
        ["*Un caffè, per favore.*", "An espresso, please.", "Ordinare il caffè finale"],
        ["*Liscia o frizzante?*", "Still or sparkling water?", "Domanda del cameriere sull'acqua"],
        ["*Liscia, grazie.*", "Still, thank you.", "Risposta per l'acqua naturale"],
        ["*Senza carne, per favore.*", "Without meat, please.", "Preferenza alimentare"],
        ["*Sono allergico/a a...*", "I am allergic to...", "Dichiarare un'allergia alimentare"],
        ["*Possiamo avere il conto, per favore?*", "May we have the bill, please?", "Chiedere il conto"],
        ["*Si può pagare con carta?*", "Can we pay by card?", "Verificare i metodi di pagamento"],
        ["*Si può dividere il conto?*", "Can we split the bill?", "Chiedere di dividere"],
        ["*C'è un coperto?*", "Is there a cover charge?", "Chiedere prima di sedersi"],
        ["*Era tutto ottimo, grazie.*", "Everything was excellent, thank you.", "Complimentare il pasto"],
        ["*Grazie mille.*", "Thank you very much.", "Ringraziamento generico"],
        ["*Arrivederci.*", "Goodbye.", "Uscendo dal ristorante"],
      ],
    ),

    // ——— Allergie ———
    h2("Allergie e restrizioni alimentari"),
    p("La cucina italiana ha molti piatti naturalmente vegetariani e naturalmente privi di glutine. La maggior parte dei ristoranti nelle zone turistiche è abituata alle richieste dietetiche e cerca di accomodarle. Per le allergie gravi, però, non basta una frase: è necessario comunicare in modo esplicito e diretto."),
    h3("Come comunicare le allergie"),
    ul(
      "**Siate espliciti.** Dite *Sono allergico/a a [ingrediente]*. Per allergie gravi, precisate: *è un'allergia grave*.",
      "**Chiedete della contaminazione crociata.** Se è rilevante, domandate: *Potete evitare la contaminazione crociata?* Il personale di qualsiasi locale ben organizzato vi dirà se è in grado di gestirla.",
      "**Chiedete che l'allergia sia comunicata in cucina.** *Potete comunicarlo in cucina?* — non basta che il cameriere prenda nota.",
      "**Non affidarsi solo a un cartellino scritto.** I cartellini scritti per le allergie possono essere utili, ma confermare verbalmente con il personale ogni volta è importante.",
    ),
    h3("Vegetariani e vegani"),
    p("*Vegetariano/a* e *vegano/a* sono termini compresi ovunque. La cucina italiana ha molti piatti autenticamente privi di carne — pasta al pomodoro, cacio e pepe, pasta e fagioli, ribollita, caponata — ma alcuni piatti apparentemente vegetariani contengono acciughe, *guanciale* o brodo di carne. In caso di dubbio, chiedete: *Questo piatto è fatto senza carne?*"),
    h3("Intolleranza al glutine e celiachia"),
    p("Molti ristoranti propongono pasta senza glutine. Chiedete: *Avete opzioni senza glutine?* L'Associazione Italiana Celiachia (AIC) certifica i ristoranti con il simbolo del grano sbarrato (*Spiga Barrata*) per chi è celiaco e ha bisogno di garanzie sulla contaminazione crociata."),
    note("In base al Regolamento UE 1169/2011, i ristoranti sono tenuti a fornire informazioni sugli allergeni presenti nei piatti. In pratica, il personale può comunicarle a voce o su note in cucina piuttosto che su un elenco scritto. Comunicate chiaramente e non date per scontato che un piatto sia sicuro senza verifica."),

    // ——— Differenze regionali ———
    h2("Differenze regionali"),
    p("L'Italia ha venti regioni con tradizioni gastronomiche distinte. Anche all'interno di ogni regione, città, paesi e singoli locali variano in modo considerevole."),
    h3("Nord e Sud"),
    p("La cucina dell'Italia settentrionale — Emilia-Romagna, Piemonte, Lombardia — è fondata su pasta fresca all'uovo, burro, risotto e salumi. La cucina del Sud — Campania, Puglia, Sicilia, Sardegna — si costruisce su pasta di semola, olio extravergine, pomodoro e pesce. Ciò che costituisce una porzione 'normale', un pasto 'leggero' o un orario 'giusto' per cenare differisce sensibilmente tra Torino e Palermo."),
    h3("Ristoranti di città e trattorie di paese"),
    p("Un ristorante milanese di tendenza e una trattoria familiare in un borgo toscano operano con codici diversi per ritmo del servizio, formalità, struttura del menù e aspettative sulla prenotazione. I ristoranti nelle grandi città — in particolare Milano e Roma — sono spesso più internazionali per stile; quelli rurali e del Sud tendono a seguire schemi più tradizionali."),
    h3("Zone turistiche e locali di quartiere"),
    p("I ristoranti nelle vicinanze dei grandi attrattori turistici — il Colosseo a Roma, il Ponte Vecchio a Firenze, piazza San Marco a Venezia — tendono ad adattare i menù, ad applicare prezzi più alti e a offrire un rapporto qualità-prezzo talvolta inferiore a quello di un locale a poche vie di distanza. Allontanarsi di qualche isolato dal punto di interesse e scegliere un posto frequentato principalmente da italiani è un consiglio che funziona quasi sempre. I [mercati alimentari italiani](/it/cibo/mercati-alimentari-italiani) sono spesso un buon punto di riferimento per trovare produttori locali e opzioni meno turistiche."),
    h3("Bar, pizzerie e altri locali"),
    p("Non ogni locale dove si mangia in Italia è un ristorante. Il *bar* serve caffè, bevande e spuntini leggeri ed è il luogo della colazione, della pausa caffè e dell'aperitivo. La *pizzeria* serve pizza (e spesso altro). L'*osteria* è un locale informale, tradizionalmente semplice, incentrato sul vino. La *trattoria* è in stile familiare. La *rosticceria* vende cibo cotto pronto da asporto. La [guida al cibo di strada italiano](/it/cibo/cibo-di-strada-italiano) approfondisce le opzioni di ristorazione informale."),
  ],

  faqs: [
    {
      question: "È obbligatorio ordinare tutte le portate in un ristorante italiano?",
      answer: "No. Ordinare due portate — un primo e un secondo, o un antipasto e un primo — è del tutto normale. Al pranzo, ordinare solo il primo è comune. Nessun cameriere si aspetta che ordiniate cinque portate.",
    },
    {
      question: "La mancia è attesa nei ristoranti italiani?",
      answer: "Non nel senso in cui lo è negli Stati Uniti. I lavoratori della ristorazione italiana hanno un contratto e uno stipendio fisso. Lasciare qualche euro per un servizio genuinamente buono è apprezzato, ma non è un obbligo né una norma fissa.",
    },
    {
      question: "Cos'è il coperto?",
      answer: "Il coperto è un addebito per persona che copre il pane e l'apparecchiatura del tavolo. Deve essere indicato sul menù o all'ingresso del locale. Compare nel conto come voce separata. Non è una mancia.",
    },
    {
      question: "Come si chiede il conto?",
      answer: "*Il conto, per favore.* Il conto non viene portato automaticamente in Italia — bisogna chiederlo. Fare il gesto della scrittura in aria catturando lo sguardo del cameriere funziona altrettanto bene.",
    },
    {
      question: "A che ora si cena in Italia?",
      answer: "Di solito tra le 19:30 e le 21:00 nel Centro-Nord. Nel Sud e in Sicilia si cena spesso più tardi. I ristoranti al di fuori delle zone turistiche spesso aprono per la cena non prima delle 19:30.",
    },
    {
      question: "Si può chiedere di dividere il conto?",
      answer: "Sì. La frase è *Si può dividere il conto?* La disponibilità del ristorante a dividerlo varia: i piccoli locali preferiscono a volte un unico pagamento; quelli più grandi in genere non hanno difficoltà.",
    },
    {
      question: "È accettabile ordinare solo la pasta?",
      answer: "Assolutamente sì. Ordinare il primo come unica portata — pasta, risotto o gnocchi — è comune a pranzo e normale anche a cena. Nessuna regola impone di ordinare più portate.",
    },
    {
      question: "Si possono chiedere sostituzioni o modifiche ai piatti?",
      answer: "Si può chiedere, e molti ristoranti cercano di venire incontro. Le variazioni semplici — un ingrediente da togliere, una salsa a parte — sono di solito gestibili. Modifiche complesse in un momento di servizio intenso potrebbero non essere possibili. Per le allergie, comunicate in modo esplicito e chiedete conferma in cucina.",
    },
    {
      question: "L'acqua del rubinetto è disponibile nei ristoranti italiani?",
      answer: "Sì, l'acqua del rubinetto (*acqua del rubinetto*) è potabile e disponibile. Non viene portata automaticamente: chiedetela se la preferite all'acqua in bottiglia. L'acqua in bottiglia (liscia o frizzante) si paga.",
    },
    {
      question: "È necessario prenotare?",
      answer: "Non sempre. Molte trattorie accettano i walk-in. Per i ristoranti popolari il venerdì e il sabato sera, è fortemente consigliabile prenotare. Una telefonata in giornata funziona spesso per i pasti infrasettimanali.",
    },
    {
      question: "Qual è la differenza tra ristorante, trattoria e osteria?",
      answer: "I termini si sovrappongono e non c'è una distinzione legale precisa. Il *ristorante* è in genere più formale, con menù completo. La *trattoria* è informale e familiare, spesso con un menù più corto e stagionale. L'*osteria* è tradizionalmente un locale semplice e informale, incentrato sul vino e la cucina del territorio. Oggi i confini tra le tre categorie sono spesso labili.",
    },
    {
      question: "Il pane va chiesto o viene portato automaticamente?",
      answer: "Di norma viene portato automaticamente come parte del coperto. Se non arriva, si può chiedere: *Potremmo avere del pane?* Il burro non è generalmente servito con il pane nei ristoranti italiani, ma molti locali turistici lo offrono su richiesta.",
    },
  ],

  sourcesTitle: "Fonti",
  sources: [
    {
      label: "Regione Lazio — Delibera sul coperto nei pubblici esercizi (2006)",
      url: "https://www.regione.lazio.it/",
      note: "Normativa regionale sul coperto nei ristoranti del Lazio",
    },
    {
      label: "FIPE (Federazione Italiana Pubblici Esercizi)",
      url: "https://www.fipe.it/",
      note: "Federazione del settore della ristorazione italiana — pratiche, diritti e normativa",
    },
    {
      label: "Unione Nazionale Consumatori — Diritti al ristorante",
      url: "https://www.consumatori.it/",
      note: "Diritti del consumatore al ristorante: obblighi dello scontrino, coperto, metodi di pagamento",
    },
    {
      label: "AIC (Associazione Italiana Celiachia) — Mangiar Fuori",
      url: "https://www.celiachia.it/",
      note: "Guida per i celiaci su come mangiare fuori casa in Italia",
    },
    {
      label: "Regolamento UE 1169/2011 sull'informazione ai consumatori sugli alimenti",
      url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A32011R1169",
      note: "Obblighi di dichiarazione degli allergeni per i ristoranti negli Stati membri dell'UE",
    },
    {
      label: "Accademia Italiana della Cucina — La cucina italiana",
      url: "https://www.accademiaitalianadellacucina.it/",
      note: "Tradizioni della cucina regionale e convenzioni sul pasto",
    },
    {
      label: "Ministero delle Imprese e del Made in Italy — POS obbligatorio",
      url: "https://www.mimit.gov.it/",
      note: "Normativa italiana sull'obbligo di accettare pagamenti elettronici",
    },
    {
      label: "Touring Club Italiano — Gastronomia regionale",
      url: "https://www.touringclub.it/",
      note: "Usanze gastronomiche regionali e guida pratica per viaggiatori in Italia",
    },
  ],
};
