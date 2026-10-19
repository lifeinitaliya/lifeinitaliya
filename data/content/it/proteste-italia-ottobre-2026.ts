import type { ArticleContent, ContentBlock } from "@/lib/types";

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h2 = (text: string): ContentBlock => ({ type: "heading", level: 2, text });
const h3 = (text: string): ContentBlock => ({ type: "heading", level: 3, text });
const ul = (...items: string[]): ContentBlock => ({ type: "list", items });
const answer = (text: string): ContentBlock => ({ type: "answer", text });
const tip = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "tip", title, text });
const note = (text: string, title?: string): ContentBlock => ({ type: "callout", tone: "important", title, text });
const table = (headers: string[], rows: string[][], caption?: string): ContentBlock => ({ type: "table", headers, rows, caption });

export const protesteItaliaOttobre2026: ArticleContent = {
  body: [
    note("**Ultimo aggiornamento: 19 ottobre 2026, ore 11:00 CEST.** Questo articolo riepiloga i fatti verificati riportati fino al 19 ottobre 2026. La situazione potrebbe essere evoluta dalla pubblicazione. Per aggiornamenti in tempo reale su disagi ai trasporti e avvisi di pubblica sicurezza, consultate le fonti indicate in fondo all'articolo."),

    answer("Nel weekend del 17–18 ottobre 2026, manifestazioni contro il caro vita, le politiche scolastiche e la spesa pubblica hanno interessato Roma, Milano, Torino, Bologna e altre città italiane. Alcune marce sono sfociate in episodi di violenza a Milano, Torino e Bologna: il bilancio complessivo è di 141 agenti delle forze dell'ordine feriti e 28 persone arrestate. A Roma si sono svolte manifestazioni numerose ma per lo più pacifiche. Una mobilitazione studentesca autonoma era già in corso il 16 ottobre in diverse città. Si tratta di eventi distinti, con organizzatori e rivendicazioni differenti."),

    {
      type: "jumpLinks",
      label: "Vai a",
      targets: [
        "Cosa è successo e quando: riepilogo verificato",
        "Perché si protesta in Italia?",
        "Roma: corteo studentesco e manifestazione CGIL",
        "Milano: marcia contro il caro vita e scontri",
        "Torino: proteste studentesche e manifestazioni del weekend",
        "Cosa ha detto il governo italiano",
        "Cosa significa per chi visita l'Italia",
        "Scioperi e manifestazioni previsti",
        "Dove trovare aggiornamenti affidabili",
      ],
    },

    h2("Cosa è successo e quando: riepilogo verificato"),
    table(
      ["Città", "Evento", "Data", "Rivendicazioni principali", "Esito verificato", "Da verificare"],
      [
        [
          "Roma",
          "Manifestazione studentesca al Ministero dell'Istruzione (collettivo Osa)",
          "16 ott",
          "Fondi per l'istruzione, condizioni scolastiche, costi degli alloggi, meno spesa militare",
          "Migliaia di partecipanti. La polizia ha segnalato lanci di bottiglie e razzi luminosi. Manifestazione conclusa.",
          "Nessun disordine attivo segnalato al 19 ott",
        ],
        [
          "Roma",
          "Corteo «La Via Maestra» (CGIL e coalizione di oltre 100 associazioni)",
          "17 ott",
          "Diritti costituzionali, salari e pensioni più alti, fondi per sanità, istruzione e abitazioni",
          "Organizzatori: 100.000 presenti (nessuna stima indipendente disponibile). Pacifico. CGIL annuncia sciopero generale per il 20 novembre.",
          "Sciopero trasporti nel Lazio 08:30–12:30 del 19 ott (già concluso)",
        ],
        [
          "Milano",
          "Marcia contro il caro vita (movimento Italia in Piazza)",
          "17–18 ott",
          "Caro vita, prezzi carburanti, pressione fiscale",
          "~5.000 partecipanti (stima polizia). Violenze: pietre, lacrimogeni, idranti. 17 arrestati. Danni stimati oltre 500.000 €. Metro temporaneamente parziale.",
          "Nessun disordine attivo segnalato al 19 ott. Verificare comune.milano.it",
        ],
        [
          "Torino",
          "Manifestazione studentesca in Piazza Castello (No Meloni Day)",
          "16 ott",
          "Politiche scolastiche, decreto quote studenti stranieri, spesa militare",
          "Polizia ha usato lacrimogeni e idranti. AFP: almeno 15 agenti portati in ospedale. Un adulto fermato, 3 minorenni trovati con molotov.",
          "Nessun disordine attivo segnalato al 19 ott",
        ],
        [
          "Torino",
          "Marcia contro il caro vita (Italia in Piazza)",
          "17–18 ott",
          "Caro vita",
          "~3.000 partecipanti (stima polizia). Scontri segnalati. Parte del bilancio complessivo: 28 arresti, 141 feriti.",
          "Nessun disordine attivo segnalato al 19 ott",
        ],
        [
          "Bologna",
          "Manifestazione contro il caro vita (Italia in Piazza)",
          "17–18 ott",
          "Caro vita",
          "~2.000 partecipanti. Stazione ferroviaria temporaneamente chiusa. 5 minorenni arrestati.",
          "Stazione riaperta. Verificare trenitalia.com",
        ],
      ],
      "Fonti: The Chronicle PH / Sky TG24, AFP, Agencia Nova, France 24, Al Jazeera. I dati sono attribuiti alle fonti che li riportano e potrebbero essere aggiornati con il progredire degli atti giudiziari."
    ),

    h2("Perché si protesta in Italia?"),
    p("Le manifestazioni di ottobre 2026 hanno coinvolto almeno tre movimenti distinti, con rivendicazioni parzialmente sovrapposte ma indipendenti. Non è corretto trattarle come un unico movimento organizzato."),

    h3("Proteste studentesche: istruzione, spesa pubblica e il decreto sulle classi"),
    p("Un'ondata di occupazioni scolastiche e universitarie è iniziata in Italia all'inizio di ottobre, con le prime occupazioni nelle scuole torinesi intorno al 5 ottobre. La mobilitazione si è intensificata attorno al 16 ottobre — denominata da alcuni gruppi studenteschi \"No Meloni Day\" — e si è concentrata su:"),
    ul(
      "Le politiche scolastiche del governo, in particolare un decreto ministeriale che introduce un tetto del 30% per alcune categorie di alunni di origine non italiana per classe. I critici sostengono che questa norma abbia carattere discriminatorio.",
      "I finanziamenti per l'edilizia scolastica e le risorse didattiche.",
      "Il caro affitti, che pesa soprattutto sugli studenti universitari fuori sede.",
      "Le priorità di spesa del governo: i gruppi studenteschi chiedono più fondi per l'istruzione e meno per le spese militari."
    ),
    p("Queste proteste sono state organizzate principalmente da collettivi studenteschi, tra cui Osa a Roma. Sono eventi distinti sia dalla marcia sindacale sia dalle manifestazioni contro il caro vita."),

    h3("CGIL e La Via Maestra: diritti costituzionali e sociali"),
    p("Il 17 ottobre la CGIL — la principale confederazione sindacale italiana — ha guidato a Roma la coalizione «La Via Maestra», lanciata nel 2023 insieme a oltre cento associazioni. La piattaforma della coalizione si richiama all'applicazione e alla difesa della Costituzione italiana del 1948, in particolare le disposizioni su lavoro, salute, istruzione e diritti sociali."),
    p("Dal palco, il segretario generale della CGIL Maurizio Landini ha annunciato uno sciopero generale per il 20 novembre 2026, chiedendo aumenti salariali e pensionistici, maggiori risorse per la sanità pubblica, il diritto all'abitazione e il potenziamento dell'istruzione pubblica. Il corteo romano della CGIL è un evento separato dalle manifestazioni contro il caro vita che hanno portato alla violenza in altre città."),

    h3("Italia in Piazza: protesta contro il caro vita"),
    p("Le manifestazioni di Milano, Torino e Bologna sfociate in violenza il 17–18 ottobre sono state organizzate dal movimento «Italia in Piazza». I partecipanti hanno citato l'aumento del costo della vita, il prezzo dei carburanti e il carico fiscale. Le rivendicazioni del movimento riguardano il tenore di vita quotidiano, non la politica scolastica né le piattaforme sindacali."),
    p("Le rivendicazioni degli organizzatori e la partecipazione pacifica della stragrande maggioranza dei manifestanti sono distinte dagli atti di violenza e dai danni compiuti da una minoranza durante gli stessi eventi. Numerosi esponenti politici e organizzatori delle manifestazioni pacifiche hanno ribadito esplicitamente questa distinzione."),

    h2("Roma: corteo studentesco e manifestazione CGIL"),
    p("A Roma si sono svolti due eventi distinti tra il 16 e il 17 ottobre."),
    h3("16 ottobre: manifestazione studentesca al Ministero dell'Istruzione"),
    p("Migliaia di studenti, organizzati dal collettivo Osa e da gruppi analoghi, hanno raggiunto in corteo il Ministero dell'Istruzione nel centro di Roma. I manifestanti chiedevano maggiori investimenti nell'istruzione pubblica, il miglioramento dell'edilizia scolastica e la ridefinizione delle priorità di spesa del governo. La polizia ha segnalato lanci di bottiglie e razzi luminosi contro gli agenti durante la manifestazione. Nelle fonti disponibili al momento della pubblicazione non sono stati segnalati arresti di massa a Roma."),
    h3("17 ottobre: corteo La Via Maestra"),
    p("La coalizione La Via Maestra, guidata dalla CGIL, ha tenuto un corteo separato a Roma il 17 ottobre. Gli organizzatori hanno dichiarato 100.000 presenti; non è disponibile una stima indipendente al momento della pubblicazione. La marcia è stata descritta come pacifica. Maurizio Landini ha annunciato dal palco lo sciopero generale del 20 novembre, citando il blocco reale dei salari, i tagli alla sanità e la crisi degli affitti."),
    tip("La manifestazione CGIL e le proteste studentesche sono state organizzate da soggetti diversi, con rivendicazioni parzialmente sovrapposte ma distinte. Non si tratta dello stesso evento."),
    p("Al 19 ottobre 2026, non risultano attive a Roma chiusure stradali o interruzioni dei trasporti pubblici riconducibili alle manifestazioni. Uno sciopero del trasporto locale nel Lazio (Bus International Service, 08:30–12:30 del 19 ottobre) — non collegato alle proteste — è già terminato. Per aggiornamenti sui trasporti romani: [atac.roma.it](https://www.atac.roma.it/)."),

    h2("Milano: marcia contro il caro vita e scontri"),
    p("Milano ha vissuto le violenze più gravi del weekend. La ricostruzione degli eventi — secondo Reuters, Al Jazeera, AFP e media italiani — al 19 ottobre 2026 è la seguente."),
    h3("17 ottobre"),
    p("Una marcia organizzata dal movimento Italia in Piazza è partita pacificamente. La polizia ha stimato circa 5.000 partecipanti. Nel corso del corteo, gruppi di manifestanti incappucciati hanno lanciato pietre, lastre di pavimentazione, bottiglie e petardi contro le forze dell'ordine, e hanno costruito barricate con arredi di bar che hanno poi incendiato. La polizia ha risposto con lacrimogeni e idranti. Parti della rete della metropolitana milanese sono state temporaneamente chiuse."),
    p("Tra le zone interessate, la Galleria Vittorio Emanuele II e l'area intorno a Piazza del Duomo. Negozi sono stati danneggiati e alcuni saccheggiati. La federazione del commercio Confcommercio ha stimato i danni alle attività del centro città in più di 500.000 euro. Un veicolo dei Carabinieri è stato distrutto."),
    h3("18 ottobre"),
    p("Gli scontri sono proseguiti domenica 18 ottobre nel centro di Milano. Reuters ha riportato che alcune centinaia di manifestanti incappucciati hanno rotto vetrine e appiccato il fuoco a cassonetti nei pressi di Piazza Duomo. Più di 60 persone sono state portate in questura per accertamenti."),
    h3("Feriti e arrestati nelle città interessate"),
    p("Nel complesso, nei tre giorni di scontri a Milano, Torino e Bologna (17–18 ottobre), secondo il resoconto di The Chronicle PH che cita Sky TG24:"),
    ul(
      "141 agenti delle forze dell'ordine sono rimasti feriti.",
      "28 persone sono state arrestate, di cui 12 minorenni.",
      "17 dei 28 arresti totali sono avvenuti a Milano.",
      "197 persone sono state identificate e portate in questura; 43 di esse sono state deferite all'autorità giudiziaria."
    ),
    p("Questi dati sono attribuiti a Sky TG24 e potrebbero essere aggiornati con il proseguire delle indagini. Non vanno considerati come cifre definitive ufficiali."),
    note("La grande maggioranza dei partecipanti alle manifestazioni di Milano ha protestato pacificamente. Le violenze e i saccheggi sono stati opera di gruppi minoritari, all'interno o ai margini del corteo, e sono stati esplicitamente condannati da esponenti istituzionali tra cui il sindaco di Milano.", "Distinzione importante"),
    h3("Dichiarazioni ufficiali su Milano"),
    p("Il sindaco di Milano Giuseppe Sala ha riconosciuto che molti manifestanti avevano preoccupazioni legittime sul costo della vita, ma ha dichiarato che gli attacchi alle forze dell'ordine e i danni diffusi alle proprietà «non sono giustificabili». La presidente del Consiglio Giorgia Meloni ha espresso solidarietà alle forze dell'ordine, ha chiesto ai leader dell'opposizione di condannare le violenze e ha riconosciuto che la grande maggioranza aveva protestato pacificamente. Il vicepresidente del Consiglio Matteo Salvini ha annunciato che la Lega riproporrà in Parlamento un disegno di legge che obblighi gli organizzatori di manifestazioni ad alto rischio a prestare garanzie finanziarie per i danni."),
    p("Al 19 ottobre 2026, il centro di Milano risulta accessibile e non vi sono operazioni di polizia attive nelle zone precedentemente interessate. Per aggiornamenti sui trasporti: [atm.it](https://www.atm.it/)."),

    h2("Torino: proteste studentesche e manifestazioni del weekend"),
    h3("16 ottobre: mobilitazione studentesca e scontri in Piazza Castello"),
    p("Le proteste studentesche a Torino erano iniziate con le occupazioni scolastiche all'inizio di ottobre. Il 16 ottobre una manifestazione più ampia ha raggiunto Piazza Castello, dove gli studenti hanno tentato di avvicinarsi alla Prefettura. La polizia ha bloccato il corteo e, dopo lanci di pietre, ha fatto ricorso a lacrimogeni e idranti. AFP ha riportato almeno 15 agenti portati in ospedale. Un adulto è stato fermato per resistenza a pubblico ufficiale; tre minorenni sono stati trovati in possesso di bottiglie molotov."),
    p("Separatamente, gruppi di giovani incappucciati hanno fatto irruzione in alcuni istituti scolastici torinesi — tra cui il Sella e il Bosso-Monti — causando danni. Agencia Nova ha segnalato 40 persone identificate e un arresto in relazione alle occupazioni scolastiche a Torino."),
    h3("17–18 ottobre: manifestazioni contro il caro vita"),
    p("Una manifestazione autonoma contro il caro vita, organizzata anch'essa da Italia in Piazza, si è svolta a Torino nel weekend. La polizia ha stimato circa 3.000 partecipanti. Gli scontri sono stati parte del quadro più ampio di violenze registrato nelle stesse date in più città."),
    p("Il sindaco di Torino Stefano Lo Russo ha condannato i danni e la violenza difendendo al contempo il diritto fondamentale degli studenti a manifestare. Il ministro dell'Istruzione Giuseppe Valditara ha dichiarato che il governo intende richiedere il risarcimento dei danni agli edifici scolastici."),
    p("Al 19 ottobre 2026, non risultano disagi attivi ai trasporti pubblici di Torino né limitazioni all'accesso al centro città. Per aggiornamenti: [gtt.to.it](https://www.gtt.to.it/)."),

    h2("Cosa ha detto il governo italiano"),
    p("La presidente del Consiglio Giorgia Meloni, in una dichiarazione riportata ampiamente il 18–19 ottobre, ha espresso solidarietà alle forze dell'ordine, ha chiesto ai leader dell'opposizione di condannare le violenze e ha annunciato una riunione di governo per discutere le misure necessarie. Ha anche riconosciuto che la stragrande maggioranza dei manifestanti aveva protestato pacificamente."),
    p("Il vicepresidente del Consiglio Matteo Salvini ha confermato che la Lega ripresenterà un disegno di legge per obbligare gli organizzatori di manifestazioni a rischio elevato a prestare garanzie finanziarie per eventuali danni."),
    p("Il ministro dell'Istruzione Giuseppe Valditara ha dichiarato che il governo agirà in sede legale per ottenere il risarcimento dei danni agli edifici scolastici torinesi."),
    p("L'opposizione non ha assunto una posizione unitaria di condanna delle proteste. Diversi esponenti dell'opposizione e dirigenti sindacali hanno distinto le rivendicazioni dei manifestanti pacifici dagli atti di violenza compiuti da una minoranza."),
    p("Il segretario generale della CGIL Maurizio Landini, intervenendo dopo il corteo del 17 ottobre a Roma, ha condannato le violenze di Milano e delle altre città e ha invitato alla calma. Lo sciopero generale della CGIL annunciato per il 20 novembre è un'azione sindacale autonoma, non collegata — al momento della pubblicazione — alle manifestazioni del weekend."),

    h2("Cosa significa per chi visita l'Italia"),
    p("Le manifestazioni del 16–18 ottobre si sono concluse. Al 19 ottobre 2026, le tre città — Roma, Milano e Torino — sono aperte e accessibili. Non risultano chiusure prolungate di reti di trasporto, attrazioni turistiche o centri cittadini legate alle proteste."),
    p("Chi si trova in Italia o si appresta a visitarla è invitato a:"),
    ul(
      "**Verificare i trasporti locali prima di spostarsi.** Gli scioperi sono azioni distinte dalle manifestazioni e possono essere proclamati con breve preavviso. Consultate [scioperiitalia.it](https://scioperiitalia.it/en/) per il calendario aggiornato e i siti dei singoli operatori di trasporto.",
      "**Monitorare i siti istituzionali dei comuni.** Roma (comune.roma.it), Milano (comune.milano.it) e Torino (comune.torino.it) pubblicano avvisi quando eventi o manifestazioni incidono sulla viabilità.",
      "**Calcolare tempi aggiuntivi in caso di manifestazioni annunciate.** Se siete a Roma il 30 ottobre (sciopero generale USB), verificate i servizi ferroviari e di autobus la sera prima.",
      "**Seguire le indicazioni delle autorità locali.** In presenza di cordoni di polizia o operazioni di gestione della folla, attenetevi alle istruzioni degli agenti.",
      "**Allontanarsi da eventuali confronti.** Se una manifestazione dovesse mostrarsi tesa nelle vicinanze, spostatevi con calma invece di fermarvi a osservare.",
      "**Contattare direttamente hotel, vettori o agenzie di viaggio** se avete dubbi su un percorso, una stazione o un quartiere specifico."
    ),
    note("Visitare Roma, Milano o Torino dopo le manifestazioni non comporta rischi particolari che non esistessero in precedenza. Si tratta di grandi città dotate di servizi di emergenza efficienti. Le violenze sono state localizzate e si sono concluse. Descrivere queste città come pericolose per i visitatori non corrisponderebbe alla realtà."),

    h2("Scioperi e manifestazioni previsti"),
    p("I seguenti eventi confermati sono stati segnalati al 19 ottobre 2026. Verificatene l'effettivo svolgimento con fonti ufficiali aggiornate prima di pianificare gli spostamenti."),
    table(
      ["Data", "Tipo", "Ambito", "Organizzatore"],
      [
        ["30 ottobre 2026", "Sciopero generale USB", "Nazionale — probabili disagi ai trasporti; verificare con i singoli operatori", "USB"],
        ["20 novembre 2026", "Sciopero generale CGIL", "Nazionale — annunciato dal palco di Roma; modalità non ancora pubblicate", "CGIL (Maurizio Landini, 17 ott 2026)"],
      ],
      "Fonte: scioperiitalia.it e media italiani al 19 ottobre 2026. I dettagli degli scioperi possono cambiare — verificare sempre con i vettori prima di viaggiare."
    ),
    p("Al momento della pubblicazione non risultano manifestazioni di piazza confermate a Roma, Milano o Torino per le prossime settimane tramite fonti ufficiali o degli organizzatori. Nuove manifestazioni potrebbero essere annunciate da collettivi studenteschi, movimenti politici o da Italia in Piazza. Consultate le fonti elencate di seguito per aggiornamenti."),

    h2("Dove trovare aggiornamenti affidabili"),
    ul(
      "**ANSA:** [ansa.it](https://www.ansa.it/) — principale agenzia di stampa italiana.",
      "**Calendario scioperi:** [scioperiitalia.it](https://scioperiitalia.it/en/) — tracker nazionale degli scioperi dei trasporti.",
      "**Trasporti Roma (ATAC):** [atac.roma.it](https://www.atac.roma.it/)",
      "**Trasporti Milano (ATM):** [atm.it](https://www.atm.it/)",
      "**Trasporti Torino (GTT):** [gtt.to.it](https://www.gtt.to.it/)",
      "**Trenitalia:** [trenitalia.com](https://www.trenitalia.com/) — per disagi alla rete ferroviaria nazionale.",
      "**Comune di Roma:** [comune.roma.it](https://www.comune.roma.it/)",
      "**Comune di Milano:** [comune.milano.it](https://www.comune.milano.it/)",
      "**Comune di Torino:** [comune.torino.it](https://www.comune.torino.it/)"
    ),
  ],

  faqs: [
    {
      question: "Perché si protesta in Italia a ottobre 2026?",
      answer: "Più movimenti distinti sono scesi in piazza per ragioni diverse. Il 16 ottobre, gli studenti hanno protestato in tutto il Paese contro le politiche scolastiche del governo (incluso un controverso decreto sul limite del 30% di alunni non italiani per classe), il caro affitti e le priorità di spesa pubblica. Il 17 ottobre, la CGIL ha guidato a Roma il corteo «La Via Maestra» sui diritti costituzionali e i diritti dei lavoratori. Sempre il 17–18 ottobre, il movimento «Italia in Piazza» ha organizzato manifestazioni contro il caro vita a Milano, Torino e Bologna.",
    },
    {
      question: "Cosa è successo durante le manifestazioni a Roma?",
      answer: "Roma ha vissuto due eventi separati: il corteo studentesco al Ministero dell'Istruzione il 16 ottobre, con lancio di bottiglie e razzi luminosi segnalati dalla polizia, e il grande corteo CGIL «La Via Maestra» del 17 ottobre, descritto come pacifico, con 100.000 presenti secondo gli organizzatori. Dal palco della Via Maestra, il segretario Landini ha annunciato lo sciopero generale CGIL per il 20 novembre.",
    },
    {
      question: "Perché le manifestazioni sono degenerate in violenza a Milano?",
      answer: "La marcia del 17 ottobre organizzata da Italia in Piazza è iniziata pacificamente, ma gruppi di manifestanti incappucciati hanno attaccato le forze dell'ordine con pietre e innescato incendi. Il 18 ottobre i disordini sono proseguiti. Complessivamente, 17 persone sono state arrestate a Milano e le attività commerciali del centro hanno subito danni stimati in oltre 500.000 euro da Confcommercio. Le cause della protesta — il caro vita — sono state riconosciute dal sindaco Sala, che ha però condannato le violenze.",
    },
    {
      question: "Cosa chiedevano gli studenti a Torino?",
      answer: "Gli studenti torinesi hanno protestato principalmente contro le politiche scolastiche del governo, in particolare il decreto che fissa un tetto del 30% per certe categorie di alunni non italiani per classe. Hanno anche sollevato il tema del caro affitti per gli studenti fuori sede e chiesto una diversa allocazione della spesa pubblica, con più risorse all'istruzione e meno alla difesa.",
    },
    {
      question: "Sono in corso proteste in questo momento a Roma, Milano o Torino?",
      answer: "Al 19 ottobre 2026 ore 11:00, non risultano manifestazioni attive in queste città. Le proteste del weekend si sono concluse. Consultate le fonti elencate in questo articolo per informazioni aggiornate.",
    },
    {
      question: "I trasporti pubblici sono stati colpiti?",
      answer: "Uno sciopero del trasporto locale nel Lazio (08:30–12:30 del 19 ottobre) è già terminato. Uno sciopero generale USB è previsto il 30 ottobre, e la CGIL ha annunciato uno sciopero generale per il 20 novembre: entrambi potranno causare disagi ai trasporti. Consultate scioperiitalia.it e i siti degli operatori di trasporto prima di viaggiare.",
    },
    {
      question: "È sicuro visitare Roma, Milano o Torino?",
      answer: "Sì. Le manifestazioni del 16–18 ottobre si sono concluse e al 19 ottobre non risultano operazioni di polizia attive o zone precluse ai visitatori. Le tre città funzionano regolarmente. È sufficiente adottare le normali precauzioni richieste in qualsiasi grande città.",
    },
    {
      question: "Dove posso trovare aggiornamenti sulle prossime manifestazioni e i disagi ai trasporti?",
      answer: "Per gli scioperi: scioperiitalia.it (calendario nazionale). Per i trasporti: ATAC (Roma), ATM (Milano), GTT (Torino), Trenitalia (ferrovie nazionali). Per comunicazioni istituzionali: comune.roma.it, comune.milano.it, comune.torino.it. Per le notizie: ansa.it.",
    },
  ],

  sources: [
    {
      label: "France 24 / AFP — Studenti italiani in piazza, 16 ott 2026",
      url: "https://www.france24.com/en/live-news/20261016-italy-braces-for-autumn-of-discontent-as-students-protest",
      note: "Report AFP del 16 ottobre sulle manifestazioni studentesche. Verificato il 19 ottobre 2026.",
    },
    {
      label: "Al Jazeera — Proteste per il caro vita in Europa inclusa Milano (17 ott 2026)",
      url: "https://www.aljazeera.com/news/2026/10/17/cost-of-living-protests-hit-belgium-italy-portugal-and-france",
      note: "Resoconto degli scontri a Milano con idranti e saccheggi. Verificato il 19 ottobre 2026.",
    },
    {
      label: "The Chronicle PH / Sky TG24 — 28 arrestati, 141 agenti feriti (19 ott 2026)",
      url: "https://thechronicle.com.ph/28-arrested-141-police-officers-injured-in-violent-cost-of-living-protests-in-italy/",
      note: "Dati su feriti e arresti nelle città coinvolte; dichiarazioni di Meloni, Sala, Lepore. Verificato il 19 ottobre 2026.",
    },
    {
      label: "US News / Reuters — Scontri a Milano, secondo giorno (18 ott 2026)",
      url: "https://www.usnews.com/news/world/articles/2026-10-18/milan-police-clash-with-protesters-on-second-day-of-unrest",
      note: "Report Reuters sugli scontri del 18 ottobre a Milano. Verificato il 19 ottobre 2026.",
    },
    {
      label: "Agencia Nova — 40 identificati, un arrestato nelle occupazioni studentesche di Torino",
      url: "https://www.agenzianova.com/en/news/Turin%3A-40-identified-and-one-arrested-in-student-occupations/",
      note: "Dati sulle occupazioni scolastiche e gli arresti a Torino. Verificato il 19 ottobre 2026.",
    },
    {
      label: "scioperiitalia.it — Calendario scioperi trasporti in Italia",
      url: "https://scioperiitalia.it/en/",
      note: "Elenco aggiornato degli scioperi nazionali, incluso lo sciopero USB del 30 ottobre. Verificato il 19 ottobre 2026.",
    },
    {
      label: "Il Manifesto — La CGIL si unisce agli studenti; Landini annuncia sciopero di novembre",
      url: "https://ilmanifesto.it/sciopero-generale-la-cgil-si-unisce-agli-studenti-in-lotta",
      note: "Report in lingua italiana sul corteo CGIL e sull'annuncio dello sciopero del 20 novembre.",
    },
    {
      label: "Yeni Safak — Studenti contro il governo: il 'No Meloni Day'",
      url: "https://en.yenisafak.com/world/italian-students-stage-no-meloni-day-protests-against-government-3724517",
      note: "Dettagli sul decreto scuola e le rivendicazioni studentesche. Verificato il 19 ottobre 2026.",
    },
  ],

  sourcesTitle: "Fonti e registro di verifica",
};
