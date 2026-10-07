import type { ArticleContent, ContentBlock } from "@/lib/types";

// Approfondimento: "L'aperitivo italiano" — edizione italiana, scritta in modo
// autonomo rispetto a quella inglese, con gli stessi fatti. Verificato a
// ottobre 2026 su: Treccani (etimologia di aperitivo; il neologismo
// apericena); registro UE eAmbrosia (Vermouth di Torino, indicazione
// geografica dal 1991; Prosecco DOP) e decreto ministeriale del 22 marzo 2017
// sul disciplinare del Vermouth di Torino; storia ufficiale di Campari e del
// Camparino in Galleria (1860, 1867, 1915); YesMilano (Comune di Milano) su
// Ramazzotti e "Milano da bere"; storia e ricetta del marchio Aperol (1919,
// Padova; 3-2-1); AGI e Gambero Rosso sul Crodino (1965); Codice della
// Strada, artt. 186 e 186-bis; D.L. 158/2012 (decreto Balduzzi) sulla vendita
// ai minori. Le origini di spritz, Negroni, Americano, Negroni sbagliato e
// "ombra" sono presentate come tradizioni; le storie dei marchi sono
// attribuite ai marchi. Nessun locale citato o classificato, nessun prezzo.

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });
const image = (file: string, alt: string, wide = false): ContentBlock => ({ type: "image", src: `${IMG}/${file}.webp`, alt, wide });

const IMG = "/images/food/italian-aperitivo";

export const aperitivoItaliano: ArticleContent = {
  body: [
    // ——— 1 ———
    h2("Che cos'è l'aperitivo?"),
    answer("**L'aperitivo è l'abitudine di ritrovarsi a inizio serata, prima di cena, per bere qualcosa e mangiare un boccone.** La parola indica sia la bevanda — uno spritz, un vermouth, un calice di vino o un analcolico — sia l'occasione intera: l'ora in cui i bar si riempiono, ci si vede dopo il lavoro e accanto ai bicchieri arrivano olive, patatine o qualcosa di più sostanzioso."),
    p("La parola viene dal latino *aperire*, \"aprire\": l'aperitivo era in origine ciò che si prendeva per aprire l'appetito prima del pasto, e le bevande classiche dell'aperitivo italiano — vermouth e bitter — nascono da questa idea. Oggi l'aperitivo è un fatto sociale almeno quanto gastronomico: segna la fine della giornata di lavoro, permette di vedersi senza impegnarsi in una cena intera e regala un'ora in piazza o al bar prima di tornare a casa o di andare a mangiare."),
    p("Non tutti fanno l'aperitivo ogni sera, e le sue forme cambiano da città a città: un vermouth al banco di un caffè storico di Torino, uno spritz e qualche cicchetto in un bacaro veneziano, un locale affollato sui Navigli a Milano, un bicchiere di vino locale con i taralli al Sud. Qui raccontiamo bevande, cibo, versioni regionali e qualche consiglio pratico."),
    {
      type: "facts",
      title: "L'aperitivo in breve",
      rows: [
        { label: "Quando", value: "A inizio serata, prima di cena — spesso più o meno tra le 18 e le 20, più tardi d'estate" },
        { label: "Bevande classiche", value: "Spritz, vermouth, bitter, Americano e Negroni, vino e Prosecco" },
        { label: "Senza alcol", value: "Analcolici, spritz analcolici, succhi, bibite" },
        { label: "Cibo", value: "Da una ciotola di patatine a un buffet completo; cambia molto da locale a locale" },
        { label: "Apericena", value: "Un aperitivo abbondante che sostituisce la cena" },
        { label: "Venezia", value: "Una tradizione propria di bacari, cicchetti e ombre" },
      ],
    },
    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Aperitivo e happy hour",
        "Le bevande dell'aperitivo",
        "Apericena: quando l'aperitivo diventa cena",
        "L'aperitivo in Italia, città per città",
        "Come funziona al bar",
        "Aperitivo, alcol e viaggio responsabile",
      ],
    },

    // ——— 2 ———
    h2("Aperitivo e happy hour"),
    p("Nelle zone turistiche capita di leggere \"happy hour\", e le due cose possono sovrapporsi. Ma l'idea è diversa."),
    table(
      ["Aperitivo", "Happy hour"],
      [
        ["Un'abitudine gastronomica e sociale italiana, con forme regionali", "Una formula promozionale diffusa in molti Paesi"],
        ["Avviene prima di cena", "Può avvenire in qualunque fascia oraria decida il locale"],
        ["Di solito con qualcosa da mangiare", "Centrata sullo sconto sulle bevande; il cibo varia"],
        ["Conta il momento e la compagnia", "Conta il prezzo"],
        ["Legato alle città e alle regioni italiane", "Non specificamente italiano"],
      ],
    ),
    p("Anzi, in molti bar le consumazioni dell'aperitivo costano un po' di più che in altri momenti della giornata, proprio perché con il bicchiere arrivano stuzzichini o un buffet: è il contrario di uno sconto, si paga bevanda e cibo insieme."),
    image("outdoor-bar-evening", "Gente ai tavoli all'aperto sotto tende che pubblicizzano spritz e happy hour lungo i Navigli a Milano, con palazzi sullo sfondo", true),

    // ——— 3 ———
    h2("A che ora"),
    p("Non esiste un orario nazionale. L'aperitivo cade a inizio serata, tra la fine del lavoro e la cena: in molte città del Nord più o meno tra le 18 e le 20; d'estate, al Sud e nei luoghi di villeggiatura tutto slitta più tardi, perché slitta la cena. Nel fine settimana c'è più gente, e nelle sere calde piazze e rive si riempiono prima."),
    p("Ogni locale fa i propri orari, e alcuni servono il cibo solo in certe fasce. Se il buffet vi interessa, meglio arrivare all'inizio piuttosto che alla fine, quando i piatti possono essere già stati ritirati."),

    // ——— 3b ———
    h2("Breve storia dell'aperitivo"),
    p("Nessuno ha inventato l'aperitivo. È nato da un'antica abitudine europea — prendere qualcosa di amaro o aromatico prima del pasto per stimolare l'appetito, il senso originario della parola — e dalla cultura dei caffè delle città italiane dell'Ottocento."),
    ul(
      "**Vini aromatizzati e amari.** Vini e liquori alle erbe, radici e cortecce si usavano da tempo per la salute e la digestione. Tra fine Settecento e Ottocento i produttori di Torino e Milano ne fecero prodotti commerciali: il vermouth a Torino, bitter e amari a Milano.",
      "**L'epoca dei caffè.** Nell'Ottocento i caffè dei centri cittadini — sotto i portici di Torino, nella nuova Galleria di Milano — diventarono i luoghi dove la borghesia si ritrovava prima di cena, e il vermouth o il bitter prima del pasto un'abitudine urbana.",
      "**I cocktail.** Nei primi decenni del Novecento ai vermouth lisci e ai bitter con il seltz si aggiunsero miscele come l'Americano e il Negroni.",
      "**La città del dopoguerra.** Con la crescita e la trasformazione delle città nel dopoguerra, il bicchiere serale con gli amici divenne un'abitudine più ampia, e negli anni Ottanta la *Milano da bere* ne fece un'immagine della città.",
      "**Buffet e apericena.** Dalla fine degli anni Novanta i locali milanesi fecero a gara con buffet sempre più ricchi, da cui nacque l'apericena.",
      "**Lo spritz ovunque.** Nel nuovo secolo lo spritz arancione è uscito dal Veneto per diffondersi in tutta Italia e all'estero, e l'aperitivo è diventato una delle abitudini italiane più conosciute al mondo.",
    ),
    p("Molte date legate alle singole bevande vengono dalle aziende che le producono, e alcune storie d'origine sono più documentate di altre: lo segnaliamo di volta in volta."),

    // ——— 4 ———
    h2("Le bevande dell'aperitivo"),
    p("Le bevande dell'aperitivo appartengono a poche famiglie: vini aromatizzati come il vermouth, liquori amari (*bitter*), i cocktail che ne derivano e il vino. Alcune sono storiche, altre sono preferenze più recenti, altre ancora fortemente regionali. Molte sono prodotte da aziende note; le loro storie, qui, sono raccontate come le raccontano le aziende stesse, che non sempre coincide con le prove indipendenti."),
    h3("Il vermouth e Torino"),
    p("Il vermouth è un vino aromatizzato con erbe e spezie — soprattutto assenzio, l'*Artemisia* — addolcito e rafforzato con alcol. La sua patria italiana è Torino: la tradizione cittadina attribuisce al liquorista Antonio Benedetto Carpano il lancio del vermouth commerciale a fine Settecento, e nell'Ottocento erano già diversi i produttori torinesi. Il **Vermouth di Torino** è un'indicazione geografica tutelata dal diritto europeo dal 1991, e nel 2017 un decreto ministeriale ne ha fissato il disciplinare: un vino aromatizzato prodotto in Piemonte, aromatizzato principalmente con Artemisia."),
    p("Un vermouth liscio, con ghiaccio e una scorza di agrume, è uno degli aperitivi italiani più antichi, ed è la base di diversi cocktail classici. Per i caffè della città, vedi [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    image("bitter-drink-lemon", "Un aperitivo rosso con ghiaccio e una fetta di limone in un tumbler, visto dall'alto"),
    h3("Campari e i bitter milanesi"),
    p("Il contributo di Milano è il bitter. Campari fa risalire il suo bitter rosso al 1860, quando Gaspare Campari lavorava a Novara; nel 1867 aprì il Caffè Campari nella neonata Galleria Vittorio Emanuele II, e nel 1915 il figlio Davide aprì accanto il Camparino, con il seltz che arrivava dalle cantine per servire il Campari soda. Milano ha anche altri storici produttori di bitter e amari — il sito turistico del Comune fa risalire Ramazzotti al 1815 — e lo slogan *Milano da bere*, nato negli anni Ottanta per la pubblicità di un amaro, finì per indicare un'intera epoca."),
    image("milan-bar-bottles", "File di bottiglie di bitter rosso sugli scaffali dietro il bancone di un bar di Milano, sotto un orologio e un'insegna Campari"),
    h3("Lo spritz"),
    p("Lo spritz è oggi la bevanda dell'aperitivo più conosciuta: vino frizzante, un bitter e uno spruzzo di seltz, con ghiaccio. Le sue radici sono nel Nord-Est. Un racconto molto diffuso lega il nome all'Ottocento, quando il Veneto era sotto gli Asburgo e i soldati austriaci avrebbero allungato il vino locale con uno \"spritz\" d'acqua: una spiegazione plausibile della parola, non un'origine documentata."),
    p("L'**Aperol**, un bitter più leggero e dolce, fu presentato dai fratelli Barbieri alla Fiera di Padova del 1919, secondo il marchio. La ricetta dell'Aperol Spritz proposta dal marchio è tre parti di Prosecco, due di Aperol e una di soda; i baristi la adattano, e a Venezia e in Veneto lo spritz si fa anche con il Campari o con altri bitter locali. Ordinando \"uno spritz\" in Veneto si rischia la versione della casa: se conta, dite quale bitter volete."),
    image("veneto-spritz-table", "Uno spritz arancione con cannuccia e fetta d'arancia sul tavolo di un bar in Veneto, accanto a una bibita scura con ghiaccio"),
    h3("Americano e Negroni"),
    p("L'**Americano** — Campari, vermouth rosso e seltz — viene spesso spiegato come l'evoluzione del *Milano-Torino*, che univa il bitter di Milano e il vermouth di Torino; come sia arrivato a chiamarsi \"Americano\" si racconta in vari modi, e perfino la storia ufficiale di Campari lo data in modo incoerente."),
    p("Il **Negroni** — gin, Campari e vermouth rosso in parti uguali — ha la storia d'origine più famosa: a Firenze, intorno al 1919-1920, il conte Camillo Negroni avrebbe chiesto di rinforzare il suo Americano con il gin al posto del seltz. È la versione che raccontano Firenze e Campari, ma gli storici del bere hanno fatto notare che la documentazione dell'epoca è scarsa: meglio considerarla una tradizione che un fatto accertato."),
    p("Milano ha la sua variante, il **Negroni sbagliato**, con le bollicine al posto del gin, che il Bar Basso racconta nato lì per errore — nel 1967, nel 1969 o nel 1972, a seconda di chi lo racconta."),
    image("negroni-being-mixed", "La mano di un barista versa in un mixing glass accanto a bottiglie di Campari e vermouth rosso, con bicchieri di ghiaccio e fette d'arancia"),
    h3("Vino, Prosecco e birra"),
    p("Molti italiani prendono semplicemente un calice di vino. In Veneto può essere un Prosecco (DOP) o un bianco fermo; in Lombardia un Franciacorta; altrove, il vino del territorio. Anche la birra è diffusa, soprattutto con il cibo più sostanzioso. Molti bar hanno un vino della casa e qualche etichetta al calice, ed è normale chiedere che cosa c'è del territorio. Per le regioni del vino, vedi [I vini regionali italiani](/it/cibo/vini-regionali-italiani)."),
    h3("L'aperitivo analcolico"),
    p("L'aperitivo è un rito sociale, non un obbligo di bere. L'*analcolico* in bottiglietta è una presenza storica dei bar italiani — il Crodino, per esempio, nasce in Piemonte nel 1965 — accanto a succhi, bibite e acqua frizzante. Oggi molti locali preparano anche spritz analcolici e versioni senza alcol dei cocktail classici. L'offerta cambia da bar a bar: basta chiedere."),

    // ——— 5 ———
    h2("Che cosa si mangia"),
    p("Il cibo fa parte del gioco, ma la quantità cambia moltissimo: da una ciotolina di patatine a un buffet che vale una cena. Si possono trovare:"),
    ul(
      "**Stuzzichini semplici** — olive, patatine, frutta secca salata, crackerini o taralli.",
      "**Pane e dintorni** — pezzi di focaccia o di pizza, tramezzini, crostini.",
      "**Salumi e formaggi** — soprattutto al Centro e al Nord, spesso su un tagliere da condividere.",
      "**Specialità locali** — fritti, piccole porzioni di pasta o riso freddo, verdure sott'olio.",
      "**Un buffet** — in alcuni locali, piatti caldi e freddi a self-service inclusi nella consumazione.",
    ),
    image("tuscany-aperitivo-platter", "Un vassoio di salumi, formaggio, melanzane grigliate e pane con un bicchiere di birra sul tavolino di un bar in Toscana"),
    p("Alcuni bar portano il cibo al tavolo in automatico, altri preparano un buffet, altri ancora fanno pagare a parte il tagliere. Nel dubbio, si chiede prima di ordinare."),

    // ——— 6 ———
    h2("Apericena: quando l'aperitivo diventa cena"),
    p("*Apericena* unisce *aperitivo* e *cena*. Il vocabolario Treccani la registra come parola recente per un aperitivo accompagnato da un'ampia scelta di piatti salati e dolci, consumato al posto della cena. La sua nascita si colloca di solito a Milano a cavallo del Duemila, quando i locali si sfidavano a colpi di buffet sempre più ricchi per il prezzo di una consumazione."),
    p("L'apericena può essere conveniente e divertente, ed è molto amata da studenti e ragazzi. Ma non è l'aperitivo tradizionale, né sostituisce una cena di cucina regionale: se volete assaggiare la cucina di una città, usate l'aperitivo come preludio, non come pasto."),
    table(
      ["Esperienza", "Che cos'è", "Dove", "Cibo"],
      [
        ["Aperitivo", "Una bevanda prima di cena e l'occasione sociale che la circonda", "Bar, caffè, enoteche, alcuni ristoranti", "Da piccoli stuzzichini a piatti più sostanziosi"],
        ["Apericena", "Un aperitivo abbondante che sostituisce la cena", "Bar e ristoranti, spesso con buffet", "Un'ampia scelta di piatti salati (e a volte dolci)"],
        ["Cicchetti", "I piccoli assaggi dei bacari veneziani", "Bacari, le osterie veneziane", "Bocconi singoli, di solito pagati uno per uno"],
      ],
      "Termini d'uso comune, non categorie legali: il confine cambia da locale a locale.",
    ),

    // ——— 7 ———
    h2("L'aperitivo in Italia, città per città"),
    h3("Milano"),
    p("A Milano l'aperitivo è diventato un rito urbano di massa. La sera i locali di Brera, dei Navigli, di Porta Venezia e dell'Isola si riempiono di gente uscita dal lavoro, e molti offrono cibo abbondante con le consumazioni. È la città del Campari, del Camparino e del Negroni sbagliato, e dell'aperitivo a buffet da cui è nata l'apericena. Vedi [Milano oltre il Duomo](/it/citta/milano-oltre-il-duomo)."),
    h3("Torino"),
    p("Torino ha il legame storico più forte con l'aperitivo grazie al vermouth, e i suoi caffè storici sotto i portici fanno parte dell'esperienza. Il classico è un vermouth o un Americano al banco; molti locali propongono anche aperitivi più ricchi. Vedi [Torino per la prima volta](/it/citta/torino-per-la-prima-volta)."),
    h3("Venezia: bacari e cicchetti"),
    p("Venezia fa a modo suo. Il **bacaro** è una piccola osteria tradizionale da vino; i **cicchetti** sono i suoi assaggi — crostini con il baccalà mantecato, polpette, sarde in saor, fritture, fette di salame. Si comprano uno per uno e si mangiano di solito in piedi al banco o fuori, con un'*ombra*, un piccolo bicchiere di vino: il nome, secondo la spiegazione più diffusa, viene dall'ombra del campanile di San Marco, dove un tempo i venditori di vino tenevano al fresco le loro botti."),
    p("Il *giro di ombre* consiste nel passare da un bacaro all'altro, un bicchiere e un cicchetto per volta. I cicchetti vengono spesso paragonati alle tapas, ma il paragone è solo approssimativo: sono veneziani per ingredienti e abitudini, e il bacaro è un'osteria di quartiere, non un ristorante. Si sovrappongono all'aperitivo — uno spritz e un cicchetto prima di cena sono molto veneziani — ma i cicchetti si mangiano anche in altri momenti della giornata. Vedi [Venezia per la prima volta](/it/citta/venezia-per-la-prima-volta)."),
    image("crostini-cicchetti", "Mani che completano piccoli crostini con gamberi e altri condimenti su un bancone, nello stile dei cicchetti veneziani"),
    h3("Roma"),
    p("Roma non ha un formato unico. Ci sono enoteche con taglieri di formaggi e salumi, cocktail bar, bar di quartiere con qualche stuzzichino e piazze di zone come Trastevere e Monti che si animano a inizio serata. A Roma si cena più tardi che al Nord, e anche l'aperitivo si allunga. Vedi [Roma in tre giorni](/it/guide/roma-in-tre-giorni) e, per il dopo, [La pasta romana](/it/cibo/pasta-romana)."),
    image("rome-trattoria-bar-shelf", "Bottiglie di vino, bitter e liquori italiani, tra cui un bitter da aperitivo, allineate su uno scaffale di legno in una trattoria di Roma"),
    h3("Bologna e le altre città"),
    p("A Bologna l'aperitivo è spesso un calice di vino con mortadella, formaggi e salumi nelle osterie e nei locali del Quadrilatero, di via del Pratello o della zona universitaria; vedi [Bologna in due giorni](/it/citta/bologna-in-due-giorni). A Firenze, città del Negroni, la sera si animano enoteche e piazze come Santo Spirito; vedi [Firenze per la prima volta](/it/citta/firenze-per-la-prima-volta). Nei centri più piccoli i ritmi sono diversi, spesso attorno alla piazza principale."),
    h3("Il Sud"),
    p("L'aperitivo fa parte della vita anche al Sud, in forme meno codificate che al Nord e spesso più tardi. Si beve più vino locale, birra e spritz, e si mangiano specialità del posto: taralli in Campania e in Puglia, cibo di strada fritto a Napoli o a Palermo, formaggi e verdure locali. Come ovunque, la guida migliore è guardare che cosa fanno gli altri."),

    // ——— 8 ———
    h2("L'aperitivo nella cultura del cibo"),
    p("È facile ridurre l'aperitivo al bere, ma il suo posto nella vita italiana è più ampio. È un ponte tra lavoro e serata: un'ora per sedersi, parlare e mangiare qualcosa prima di tornare a casa o andare a cena. Le porzioni piccole e le bevande in genere leggere lo rendono adatto a vedere amici, colleghi o a un primo appuntamento, senza l'impegno di un pasto."),
    p("Ed è anche una cucina regionale in miniatura: il vermouth piemontese, i cicchetti veneziani, la mortadella bolognese, i taralli del Sud. Accompagna gli altri riti quotidiani del bar — il caffè del mattino allo stesso banco ([Il caffè italiano](/it/cibo/caffe-italiano)) — e la passeggiata serale, che magari finisce con un gelato ([Il gelato italiano](/it/cibo/gelato-italiano))."),

    // ——— 9 ———
    h2("Come funziona al bar"),
    p("Ogni locale ha le sue regole, ma alcune cose ricorrono — ed è utile saperle spiegare a chi viene da fuori."),
    ul(
      "**Banco o tavolo.** Al banco si ordina e spesso si paga subito; al tavolo si viene serviti e si paga alla fine. Il servizio al tavolo può costare di più.",
      "**Sedersi.** In genere ci si siede a un tavolo libero, ma nei locali affollati o più eleganti è cortese chiedere.",
      "**Che cosa è incluso.** Il cibo può arrivare in automatico, essere a buffet o costare a parte: meglio chiedere prima.",
      "**Il buffet.** Se c'è, di solito si riceve un piatto con la consumazione; uno o due giri sono la norma.",
      "**Il conto.** Si chiede quando si vuole; molti bar accettano la carta, ma le piccole cifre si pagano spesso in contanti.",
    ),
    tip("A chi viaggia con voi dall'estero bastano poche frasi: *Vorrei uno spritz*, *Un Negroni, per favore*, *Posso avere un analcolico?*, *Il cibo è incluso?*, *Possiamo sederci qui?* e *Il conto, per favore*.", "Per i compagni di viaggio stranieri"),
    tip("Non indichiamo prezzi: dipendono da città, quartiere, locale, bevanda e quantità di cibo, e un aperitivo davanti a un panorama famoso può costare diverse volte quello di un bar a poche strade. Guardate il listino o chiedete prima di ordinare. Per il budget del viaggio, vedi [quanto costa un viaggio in Italia](/it/guide/costo-viaggio-italia).", "Quanto costa"),

    // ——— 9b ———
    h2("Dove andare"),
    p("Non serve una classifica: il posto giusto dipende da che serata volete."),
    {
      type: "cards",
      columns: 2,
      items: [
        { label: "Classico", title: "Un caffè o un bar storico", text: "Servizio al banco, vermouth e bitter, qualche stuzzichino. Perfetto per un aperitivo breve e tradizionale, soprattutto a Torino e a Milano." },
        { label: "Vino", title: "Un'enoteca o un'osteria", text: "Un calice di vino del territorio con formaggi e salumi. Ideale a Bologna, Firenze, Roma e nelle zone del vino." },
        { label: "Venezia", title: "Un bacaro", text: "In piedi al banco con un'ombra e qualche cicchetto, poi al bacaro successivo." },
        { label: "Serata lunga", title: "Un locale con buffet", text: "Una consumazione con abbastanza cibo per farne un'apericena. Frequente a Milano e nelle città universitarie." },
        { label: "Cocktail", title: "Un cocktail bar", text: "Negroni e spritz fatti con cura e nuove creazioni; il cibo passa in secondo piano." },
        { label: "Quartiere", title: "Il bar sotto casa", text: "Lo stesso bar del caffè del mattino, con qualche stuzzichino la sera e clienti del quartiere." },
      ],
    },
    p("Qualche indizio pratico aiuta. Un listino con i prezzi visibili prima di sedersi evita sorprese. I tavolini sulle piazze e sulle rive più famose costano di più per la vista; poche strade più in là prezzi e folla spesso calano. Un locale pieno di gente del quartiere è un buon segno, anche se un bar turistico affollato non è per forza da evitare. E se il cibo conta, guardate i tavoli degli altri prima di ordinare."),

    // ——— 10 ———
    h2("Il galateo dell'aperitivo"),
    ul(
      "**Il cibo non è illimitato.** Gli stuzzichini sono una cortesia; il buffet vuol dire un piatto o due, non la cena di tutta la sera.",
      "**Chiedete che cosa è incluso** invece di servirvi da soli.",
      "**Porzioni modeste** dai piatti comuni e dal buffet, usando le posate di servizio.",
      "**Non occupate un tavolo per ore** con una sola consumazione quando il locale è pieno.",
      "**La mancia non è dovuta.** Lasciare qualche moneta per un buon servizio è apprezzato ma facoltativo.",
      "**Seguite le regole del locale** per ordinare e pagare.",
      "**Fotografate con discrezione**: gli altri sono lì per rilassarsi.",
      "**Bevete con calma.** L'aperitivo è conversazione; bere troppo è fuori luogo.",
    ),

    // ——— 11 ———
    h2("Aperitivo, alcol e viaggio responsabile"),
    p("All'aperitivo l'alcol è facoltativo, e nessuno troverà strano un analcolico o una bibita."),
    ul(
      "**Guida.** Il limite generale di tasso alcolemico per chi guida è di 0,5 grammi per litro, ed è zero per i neopatentati nei primi tre anni, per chi ha meno di 21 anni e per i conducenti professionali. La regola più semplice è non guidare dopo aver bevuto.",
      "**Il ritorno.** In città mezzi pubblici, taxi e una passeggiata sono le alternative più semplici; per gli spostamenti più lunghi vedi [come spostarsi tra le città italiane](/it/guide/come-spostarsi-tra-le-citta-italiane) e, per le regole della strada, [guidare in Italia](/it/guide/guidare-in-italia).",
      "**Età.** I locali non possono vendere né servire alcolici ai minori di 18 anni, e possono chiedere un documento.",
      "**Il ritmo.** Lo spritz è leggero, ma i cocktail tipo Negroni sono forti.",
    ),
    note("Sono informazioni generali di viaggio, non consigli medici o legali. Le regole possono cambiare: verificatele se dovete guidare.", "Da sapere"),

    // ——— 12 ———
    h2("Le parole dell'aperitivo"),
    table(
      ["Parola", "Significato"],
      [
        ["Aperitivo", "La bevanda prima di cena e l'occasione sociale che la circonda"],
        ["Apericena", "Un aperitivo con abbastanza cibo da sostituire la cena"],
        ["Spritz", "Vino frizzante, un bitter e seltz; anche una famiglia di varianti"],
        ["Vermouth / vermut", "Vino aromatizzato e liquoroso, con assenzio ed erbe"],
        ["Bitter", "Liquore amaro e dolce da aperitivo"],
        ["Amaro", "Liquore d'erbe, più spesso bevuto dopo cena"],
        ["Analcolico", "Senza alcol; anche la bibita amara analcolica"],
        ["Stuzzichini", "Piccoli assaggi serviti con le bevande"],
        ["Tramezzino", "Piccolo panino morbido a triangolo"],
        ["Cicchetti", "Gli assaggi dei bacari veneziani"],
        ["Bacaro", "Osteria tradizionale veneziana da vino"],
        ["Ombra", "A Venezia, un piccolo bicchiere di vino"],
        ["Bollicine", "Vino spumante, nel linguaggio comune"],
        ["Alla spina", "Birra servita dal fusto"],
      ],
    ),
    p("L'aperitivo è uno dei modi più semplici per sentirsi parte di una serata italiana: un'ora al tavolino, una bevanda del posto, qualche assaggio locale e la città che vive intorno. Ordinate qualcosa del territorio, chiedete che cosa è incluso, prendetevi il vostro tempo — e poi andate a cena. Per il resto del viaggio, vedi la [guida completa al viaggio in Italia](/it/guide/guida-completa-viaggio-italia) e le [tradizioni della cucina italiana](/it/cibo/tradizioni-della-cucina-italiana)."),
  ],

  faqs: [
    { question: "Che cos'è l'aperitivo?", answer: "L'abitudine di ritrovarsi a inizio serata, prima di cena, per bere qualcosa e mangiare un boccone. La parola indica sia la bevanda sia l'occasione sociale." },
    { question: "A che ora si fa l'aperitivo?", answer: "A inizio serata, prima di cena: spesso più o meno tra le 18 e le 20 nelle città del Nord, più tardi d'estate e al Sud. Non c'è un orario nazionale." },
    { question: "Aperitivo e happy hour sono la stessa cosa?", answer: "No. L'happy hour è uno sconto sulle bevande; l'aperitivo è un'abitudine prima di cena in cui le bevande arrivano di solito con il cibo, e proprio per questo costano spesso un po' di più." },
    { question: "Il cibo è incluso?", answer: "Spesso sì, ma non sempre: qualche stuzzichino al tavolo, un buffet o un tagliere da pagare a parte. Meglio chiedere prima di ordinare." },
    { question: "Quali sono le bevande tradizionali dell'aperitivo?", answer: "Vermouth, bitter come il Campari, spritz, Americano e Negroni, oltre a vino e Prosecco. Quale sia più tradizionale dipende dalla città." },
    { question: "Com'è fatto l'Aperol Spritz?", answer: "Con Prosecco, Aperol e soda. La ricetta proposta dal marchio è tre parti di Prosecco, due di Aperol e una di soda; i baristi la variano." },
    { question: "Che differenza c'è tra spritz e Negroni?", answer: "Lo spritz è lungo, leggero e frizzante: vino frizzante, bitter e seltz. Il Negroni è corto e forte: gin, Campari e vermouth rosso in parti uguali." },
    { question: "Che cos'è l'apericena?", answer: "Un aperitivo abbondante, di solito a buffet, che sostituisce la cena. La parola unisce aperitivo e cena." },
    { question: "Che cosa sono cicchetti e bacari?", answer: "I cicchetti sono gli assaggi veneziani da banco, comprati uno per uno; il bacaro è l'osteria tradizionale veneziana dove si mangiano, spesso in piedi, con un'ombra di vino." },
    { question: "L'aperitivo è sempre alcolico?", answer: "No. Analcolici, spritz senza alcol, succhi e bibite sono del tutto normali." },
    { question: "Quanto costa un aperitivo?", answer: "Dipende molto da città, quartiere, locale, bevanda e cibo incluso, per questo non indichiamo cifre. Guardate il listino o chiedete prima di ordinare." },
    { question: "Si lascia la mancia all'aperitivo?", answer: "Non è dovuta. Lasciare qualche moneta per un buon servizio è apprezzato ma facoltativo." },
    { question: "Dove è nato il Negroni?", answer: "La tradizione dice Firenze, intorno al 1919-1920, quando il conte Camillo Negroni avrebbe chiesto il gin nel suo Americano. È la versione accettata, ma la documentazione dell'epoca è scarsa." },
    { question: "Quali città sono famose per l'aperitivo?", answer: "Milano per l'aperitivo di massa e il Campari, Torino per il vermouth, Venezia per spritz, bacari e cicchetti. Ma l'aperitivo fa parte delle serate di tutta Italia." },
    { question: "Che cosa vuol dire Vermouth di Torino?", answer: "È un'indicazione geografica tutelata: un vino aromatizzato prodotto in Piemonte, aromatizzato principalmente con Artemisia, secondo il disciplinare fissato nel 2017." },
  ],

  sourcesTitle: "Fonti",
  sources: [
    { label: "Treccani — aperitivo", url: "https://www.treccani.it/vocabolario/aperitivo/", note: "definizione ed etimologia" },
    { label: "Treccani — apericena (neologismi)", url: "https://www.treccani.it/vocabolario/apericena_(Neologismi)/", note: "il neologismo" },
    { label: "eAmbrosia — registro UE delle indicazioni geografiche", url: "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/", note: "Vermouth di Torino (dal 1991); Prosecco DOP" },
    { label: "Gazzetta Ufficiale — Decreto 22 marzo 2017, disciplinare del Vermouth di Torino", url: "https://www.gazzettaufficiale.it/eli/id/2017/04/03/17A02417/sg", note: "regole di produzione" },
    { label: "Campari — Our history", url: "https://www.campari.com/our-history/", note: "storia del marchio; in inglese" },
    { label: "Camparino in Galleria — History", url: "https://www.camparino.com/history/", note: "1867 e 1915; in inglese" },
    { label: "YesMilano — \"Milano da bere\": the swinging '80s", url: "https://www.yesmilano.it/en/see-and-do/itineraries/la-milano-da-bere-swinging-80s", note: "sito turistico del Comune di Milano; in inglese" },
    { label: "Aperol — storia e ricetta del marchio", url: "https://www.aperol.com/", note: "informazioni del marchio" },
    { label: "AGI — Il compleanno del Crodino e la storia dell'aperitivo \"biondo\" (29 luglio 2022)", url: "https://www.agi.it/cronaca/news/2022-07-29/food-compleanno-crodino-storia-aperitivo-17590182/", note: "lanciato nel 1965" },
    { label: "Codice della Strada, artt. 186 e 186-bis", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-04-30;285", note: "limiti di tasso alcolemico" },
    { label: "D.L. 13 settembre 2012, n. 158 (decreto Balduzzi)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-09-13;158", note: "divieto di vendita di alcolici ai minori" },
  ],
};
