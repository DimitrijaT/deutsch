// --- DATA AND LOGIC FOR VERB CONJUGATIONS PAGE ---

const verb_data = {
    "Regular Verbs (Weak Verbs)": [
        // A1.1
        { courseLevel: "A1.1", verb: "wohnen", ich: "wohne", du: "wohnst", er_sie_es: "wohnt", wir: "wohnen", ihr: "wohnt", sie_Sie: "wohnen", english: "to live, reside", partizipII: "gewohnt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "lernen", ich: "lerne", du: "lernst", er_sie_es: "lernt", wir: "lernen", ihr: "lernt", sie_Sie: "lernen", english: "to learn", partizipII: "gelernt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "machen", ich: "mache", du: "machst", er_sie_es: "macht", wir: "machen", ihr: "macht", sie_Sie: "machen", english: "to do, make", partizipII: "gemacht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "kochen", ich: "koche", du: "kochst", er_sie_es: "kocht", wir: "kochen", ihr: "kocht", sie_Sie: "kochen", english: "to cook", partizipII: "gekocht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "spielen", ich: "spiele", du: "spielst", er_sie_es: "spielt", wir: "spielen", ihr: "spielt", sie_Sie: "spielen", english: "to play", partizipII: "gespielt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "hören", ich: "höre", du: "hörst", er_sie_es: "hört", wir: "hören", ihr: "hört", sie_Sie: "hören", english: "to hear, listen", partizipII: "gehört", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "kaufen", ich: "kaufe", du: "kaufst", er_sie_es: "kauft", wir: "kaufen", ihr: "kauft", sie_Sie: "kaufen", english: "to buy", partizipII: "gekauft", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "fragen", ich: "frage", du: "fragst", er_sie_es: "fragt", wir: "fragen", ihr: "fragt", sie_Sie: "fragen", english: "to ask", partizipII: "gefragt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "sagen", ich: "sage", du: "sagst", er_sie_es: "sagt", wir: "sagen", ihr: "sagt", sie_Sie: "sagen", english: "to say", partizipII: "gesagt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "leben", ich: "lebe", du: "lebst", er_sie_es: "lebt", wir: "leben", ihr: "lebt", sie_Sie: "leben", english: "to live, be alive", partizipII: "gelebt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "glauben", ich: "glaube", du: "glaubst", er_sie_es: "glaubt", wir: "glauben", ihr: "glaubt", sie_Sie: "glauben", english: "to believe", partizipII: "geglaubt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "suchen", ich: "suche", du: "suchst", er_sie_es: "sucht", wir: "suchen", ihr: "sucht", sie_Sie: "suchen", english: "to look for", partizipII: "gesucht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "brauchen", ich: "brauche", du: "brauchst", er_sie_es: "braucht", wir: "brauchen", ihr: "braucht", sie_Sie: "brauchen", english: "to need", partizipII: "gebraucht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "bestellen", ich: "bestelle", du: "bestellst", er_sie_es: "bestellt", wir: "bestellen", ihr: "bestellt", sie_Sie: "bestellen", english: "to order", partizipII: "bestellt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "bezahlen", ich: "bezahle", du: "bezahlst", er_sie_es: "bezahlt", wir: "bezahlen", ihr: "bezahlt", sie_Sie: "bezahlen", english: "to pay", partizipII: "bezahlt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "tanzen", ich: "tanze", du: "tanzt", er_sie_es: "tanzt", wir: "tanzen", ihr: "tanzt", sie_Sie: "tanzen", english: "to dance", partizipII: "getanzt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "wandern", ich: "wandere", du: "wanderst", er_sie_es: "wandert", wir: "wandern", ihr: "wandert", sie_Sie: "wandern", english: "to hike", partizipII: "gewandert", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "schwimmen", ich: "schwimme", du: "schwimmst", er_sie_es: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie_Sie: "schwimmen", english: "to swim", partizipII: "geschwommen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "joggen", ich: "jogge", du: "joggst", er_sie_es: "joggt", wir: "joggen", ihr: "joggt", sie_Sie: "joggen", english: "to jog", partizipII: "gejoggt", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "schauen", ich: "schaue", du: "schaust", er_sie_es: "schaut", wir: "schauen", ihr: "schaut", sie_Sie: "schauen", english: "to look, watch", partizipII: "geschaut", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "kosten", ich: "koste", du: "kostest", er_sie_es: "kostet", wir: "kosten", ihr: "kostet", sie_Sie: "kosten", english: "to cost", partizipII: "gekostet", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "kennen", ich: "kenne", du: "kennst", er_sie_es: "kennt", wir: "kennen", ihr: "kennt", sie_Sie: "kennen", english: "to know (people, places)", partizipII: "gekannt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "klettern", ich: "klettere", du: "kletterst", er_sie_es: "klettert", wir: "klettern", ihr: "klettert", sie_Sie: "klettern", english: "to climb", partizipII: "geklettert", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "hoffen", ich: "hoffe", du: "hoffst", er_sie_es: "hofft", wir: "hoffen", ihr: "hofft", sie_Sie: "hoffen", english: "to hope", partizipII: "gehofft", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "reisen", ich: "reise", du: "reist", er_sie_es: "reist", wir: "reisen", ihr: "reist", sie_Sie: "reisen", english: "to travel", partizipII: "gereist", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "heißen", ich: "heiße", du: "heißt", er_sie_es: "heißt", wir: "heißen", ihr: "heißt", sie_Sie: "heißen", english: "to be called", partizipII: "geheißen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "zeigen", ich: "zeige", du: "zeigst", er_sie_es: "zeigt", wir: "zeigen", ihr: "zeigt", sie_Sie: "zeigen", english: "to show", partizipII: "gezeigt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "holen", ich: "hole", du: "holst", er_sie_es: "holt", wir: "holen", ihr: "holt", sie_Sie: "holen", english: "to fetch, get", partizipII: "geholt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "riechen", ich: "rieche", du: "riechst", er_sie_es: "riecht", wir: "riechen", ihr: "riecht", sie_Sie: "riechen", english: "to smell", partizipII: "gerochen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "dauern", ich: "dauere", du: "dauerst", er_sie_es: "dauert", wir: "dauern", ihr: "dauert", sie_Sie: "dauern", english: "to last, take (time)", partizipII: "gedauert", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "begrüßen", ich: "begrüße", du: "begrüßt", er_sie_es: "begrüßt", wir: "begrüßen", ihr: "begrüßt", sie_Sie: "begrüßen", english: "to greet", partizipII: "begrüßt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "nennen", ich: "nenne", du: "nennst", er_sie_es: "nennt", wir: "nennen", ihr: "nennt", sie_Sie: "nennen", english: "to name, to call", partizipII: "genannt", hilfsverb: "haben" },
        // A1.2
        { courseLevel: "A1.2", verb: "nutzen", ich: "nutze", du: "nutzt", er_sie_es: "nutzt", wir: "nutzen", ihr: "nutzt", sie_Sie: "nutzen", english: "to use", partizipII: "genutzt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "surfen", ich: "surfe", du: "surfst", er_sie_es: "surft", wir: "surfen", ihr: "surft", sie_Sie: "surfen", english: "to surf", partizipII: "gesurft", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "danken", ich: "danke", du: "dankst", er_sie_es: "dankt", wir: "danken", ihr: "dankt", sie_Sie: "danken", english: "to thank", partizipII: "gedankt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "drucken", ich: "drucke", du: "druckst", er_sie_es: "druckt", wir: "drucken", ihr: "druckt", sie_Sie: "drucken", english: "to print", partizipII: "gedruckt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "klicken", ich: "klicke", du: "klickst", er_sie_es: "klickt", wir: "klicken", ihr: "klickt", sie_Sie: "klicken", english: "to click", partizipII: "geklickt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "leiten", ich: "leite", du: "leitest", er_sie_es: "leitet", wir: "leiten", ihr: "leitet", sie_Sie: "leiten", english: "to lead, manage", partizipII: "geleitet", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "bedeuten", ich: "bedeute", du: "bedeutest", er_sie_es: "bedeutet", wir: "bedeuten", ihr: "bedeutet", sie_Sie: "bedeuten", english: "to mean", partizipII: "bedeutet", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "putzen", ich: "putze", du: "putzt", er_sie_es: "putzt", wir: "putzen", ihr: "putzt", sie_Sie: "putzen", english: "to clean", partizipII: "geputzt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "rauchen", ich: "rauche", du: "rauchst", er_sie_es: "raucht", wir: "rauchen", ihr: "raucht", sie_Sie: "rauchen", english: "to smoke", partizipII: "geraucht", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "spülen", ich: "spüle", du: "spülst", er_sie_es: "spült", wir: "spülen", ihr: "spült", sie_Sie: "spülen", english: "to wash, rinse", partizipII: "gespült", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "stecken", ich: "stecke", du: "steckst", er_sie_es: "steckt", wir: "stecken", ihr: "steckt", sie_Sie: "stecken", english: "to put, stick", partizipII: "gesteckt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "bügeln", ich: "bügle", du: "bügelst", er_sie_es: "bügelt", wir: "bügeln", ihr: "bügelt", sie_Sie: "bügeln", english: "to iron", partizipII: "gebügelt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "staubsaugen", ich: "staubsauge", du: "staubsaugst", er_sie_es: "staubsaugt", wir: "staubsaugen", ihr: "staubsaugt", sie_Sie: "staubsaugen", english: "to vacuum", partizipII: "gestaubsaugt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "decken", ich: "decke", du: "deckst", er_sie_es: "deckt", wir: "decken", ihr: "deckt", sie_Sie: "decken", english: "to set (a table)", partizipII: "gedeckt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "wischen", ich: "wische", du: "wischst", er_sie_es: "wischt", wir: "wischen", ihr: "wischt", sie_Sie: "wischen", english: "to wipe, mop", partizipII: "gewischt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "verdienen", ich: "verdiene", du: "verdienst", er_sie_es: "verdient", wir: "verdienen", ihr: "verdient", sie_Sie: "verdienen", english: "to earn", partizipII: "verdient", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "stürzen", ich: "stürze", du: "stürzt", er_sie_es: "stürzt", wir: "stürzen", ihr: "stürzt", sie_Sie: "stürzen", english: "to fall", partizipII: "gestürzt", hilfsverb: "sein" },
        { courseLevel: "A1.2", verb: "bewegen", ich: "bewege", du: "bewegst", er_sie_es: "bewegt", wir: "bewegen", ihr: "bewegt", sie_Sie: "bewegen", english: "to move", partizipII: "bewegt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "atmen", ich: "atme", du: "atmest", er_sie_es: "atmet", wir: "atmen", ihr: "atmet", sie_Sie: "atmen", english: "to breathe", partizipII: "geatmet", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "shoppen", ich: "shoppe", du: "shoppst", er_sie_es: "shoppt", wir: "shoppen", ihr: "shoppt", sie_Sie: "shoppen", english: "to shop", partizipII: "geshoppt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "denken", ich: "denke", du: "denkst", er_sie_es: "denkt", wir: "denken", ihr: "denkt", sie_Sie: "denken", english: "to think", partizipII: "gedacht", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "posten", ich: "poste", du: "postest", er_sie_es: "postet", wir: "posten", ihr: "postet", sie_Sie: "posten", english: "to post (online)", partizipII: "gepostet", hilfsverb: "haben" },
    ],
    "Regular Verbs with Stem Ending in -t, -d, -n": [
        { courseLevel: "A1.1", verb: "arbeiten", ich: "arbeite", du: "arbeit<span class='irregular'>e</span>st", er_sie_es: "arbeit<span class='irregular'>e</span>t", wir: "arbeiten", ihr: "arbeit<span class='irregular'>e</span>t", sie_Sie: "arbeiten", english: "to work", partizipII: "gearbeitet", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "warten", ich: "warte", du: "wart<span class='irregular'>e</span>st", er_sie_es: "wart<span class='irregular'>e</span>t", wir: "warten", ihr: "wart<span class='irregular'>e</span>t", sie_Sie: "warten", english: "to wait", partizipII: "gewartet", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "ordnen", ich: "ordne", du: "ordn<span class='irregular'>e</span>st", er_sie_es: "ordn<span class='irregular'>e</span>t", wir: "ordnen", ihr: "ordn<span class='irregular'>e</span>t", sie_Sie: "ordnen", english: "to organize", partizipII: "geordnet", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "chatten", ich: "chatte", du: "chatt<span class='irregular'>e</span>st", er_sie_es: "chatt<span class='irregular'>e</span>t", wir: "chatten", ihr: "chatt<span class='irregular'>e</span>t", sie_Sie: "chatten", english: "to chat", partizipII: "gechattet", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "starten", ich: "starte", du: "start<span class='irregular'>e</span>st", er_sie_es: "start<span class='irregular'>e</span>t", wir: "starten", ihr: "start<span class='irregular'>e</span>t", sie_Sie: "starten", english: "to start", partizipII: "gestartet", hilfsverb: "sein" },
        { courseLevel: "A1.2", verb: "beantworten", ich: "beantworte", du: "beantwort<span class='irregular'>e</span>st", er_sie_es: "beantwort<span class='irregular'>e</span>t", wir: "beantworten", ihr: "beantwort<span class='irregular'>e</span>t", sie_Sie: "beantworten", english: "to answer, reply", partizipII: "beantwortet", hilfsverb: "haben" },
    ],
    "Irregular Verbs (Strong / Vowel-Changing)": [
        { courseLevel: "A1.1", verb: "sein", ich: "<span class='irregular'>bin</span>", du: "<span class='irregular'>bist</span>", er_sie_es: "<span class='irregular'>ist</span>", wir: "<span class='irregular'>sind</span>", ihr: "<span class='irregular'>seid</span>", sie_Sie: "<span class='irregular'>sind</span>", english: "to be", partizipII: "gewesen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "haben", ich: "habe", du: "<span class='irregular'>hast</span>", er_sie_es: "<span class='irregular'>hat</span>", wir: "haben", ihr: "habt", sie_Sie: "haben", english: "to have", partizipII: "gehabt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "sprechen", ich: "spreche", du: "spr<span class='irregular'>i</span>chst", er_sie_es: "spr<span class='irregular'>i</span>cht", wir: "sprechen", ihr: "sprecht", sie_Sie: "sprechen", english: "to speak", partizipII: "gesprochen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "essen", ich: "esse", du: "<span class='irregular'>i</span>sst", er_sie_es: "<span class='irregular'>i</span>sst", wir: "essen", ihr: "esst", sie_Sie: "essen", english: "to eat", partizipII: "gegessen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "nehmen", ich: "nehme", du: "n<span class='irregular'>imm</span>st", er_sie_es: "n<span class='irregular'>imm</span>t", wir: "nehmen", ihr: "nehmt", sie_Sie: "nehmen", english: "to take", partizipII: "genommen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "fahren", ich: "fahre", du: "f<span class='irregular'>ä</span>hrst", er_sie_es: "f<span class='irregular'>ä</span>hrt", wir: "fahren", ihr: "fahrt", sie_Sie: "fahren", english: "to drive, ride", partizipII: "gefahren", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "lesen", ich: "lese", du: "l<span class='irregular'>ie</span>st", er_sie_es: "l<span class='irregular'>ie</span>st", wir: "lesen", ihr: "lest", sie_Sie: "lesen", english: "to read", partizipII: "gelesen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "sehen", ich: "sehe", du: "s<span class='irregular'>ie</span>hst", er_sie_es: "s<span class='irregular'>ie</span>ht", wir: "sehen", ihr: "seht", sie_Sie: "sehen", english: "to see", partizipII: "gesehen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "geben", ich: "gebe", du: "g<span class='irregular'>i</span>bst", er_sie_es: "g<span class='irregular'>i</span>bt", wir: "geben", ihr: "gebt", sie_Sie: "geben", english: "to give", partizipII: "gegeben", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "schlafen", ich: "schlafe", du: "schl<span class='irregular'>ä</span>fst", er_sie_es: "schl<span class='irregular'>ä</span>ft", wir: "schlafen", ihr: "schlaft", sie_Sie: "schlafen", english: "to sleep", partizipII: "geschlafen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "treffen", ich: "treffe", du: "tr<span class='irregular'>i</span>ffst", er_sie_es: "tr<span class='irregular'>i</span>fft", wir: "treffen", ihr: "trefft", sie_Sie: "treffen", english: "to meet", partizipII: "getroffen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "waschen", ich: "wasche", du: "w<span class='irregular'>ä</span>schst", er_sie_es: "w<span class='irregular'>ä</span>scht", wir: "waschen", ihr: "wascht", sie_Sie: "waschen", english: "to wash", partizipII: "gewaschen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "gehen", ich: "gehe", du: "gehst", er_sie_es: "geht", wir: "gehen", ihr: "geht", sie_Sie: "gehen", english: "to go", partizipII: "gegangen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "kommen", ich: "komme", du: "kommst", er_sie_es: "kommt", wir: "kommen", ihr: "kommt", sie_Sie: "kommen", english: "to come", partizipII: "gekommen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "bleiben", ich: "bleibe", du: "bleibst", er_sie_es: "bleibt", wir: "bleiben", ihr: "bleibt", sie_Sie: "bleiben", english: "to stay", partizipII: "geblieben", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "trinken", ich: "trinke", du: "trinkst", er_sie_es: "trinkt", wir: "trinken", ihr: "trinkt", sie_Sie: "trinken", english: "to drink", partizipII: "getrunken", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "finden", ich: "finde", du: "findest", er_sie_es: "findet", wir: "finden", ihr: "findet", sie_Sie: "finden", english: "to find", partizipII: "gefunden", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "tragen", ich: "trage", du: "tr<span class='irregular'>ä</span>gst", er_sie_es: "tr<span class='irregular'>ä</span>gt", wir: "tragen", ihr: "tragt", sie_Sie: "tragen", english: "to carry, wear", partizipII: "getragen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "laufen", ich: "laufe", du: "l<span class='irregular'>äu</span>fst", er_sie_es: "l<span class='irregular'>äu</span>ft", wir: "laufen", ihr: "lauft", sie_Sie: "laufen", english: "to run, walk", partizipII: "gelaufen", hilfsverb: "sein" },
        { courseLevel: "A1.2", verb: "halten", ich: "halte", du: "h<span class='irregular'>ä</span>ltst", er_sie_es: "h<span class='irregular'>ä</span>lt", wir: "halten", ihr: "haltet", sie_Sie: "halten", english: "to hold, keep", partizipII: "gehalten", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "sitzen", ich: "sitze", du: "sitzt", er_sie_es: "sitzt", wir: "sitzen", ihr: "sitzt", sie_Sie: "sitzen", english: "to sit", partizipII: "gesessen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "liegen", ich: "liege", du: "liegst", er_sie_es: "liegt", wir: "liegen", ihr: "liegt", sie_Sie: "liegen", english: "to lie (be located)", partizipII: "gelegen", hilfsverb: "haben" },
    ],
    "Modal Verbs": [
        { courseLevel: "A1.1", verb: "können", ich: "<span class='irregular'>kann</span>", du: "kannst", er_sie_es: "<span class='irregular'>kann</span>", wir: "können", ihr: "könnt", sie_Sie: "können", english: "can, to be able to", partizipII: "gekonnt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "müssen", ich: "<span class='irregular'>muss</span>", du: "musst", er_sie_es: "<span class='irregular'>muss</span>", wir: "müssen", ihr: "müsst", sie_Sie: "müssen", english: "must, to have to", partizipII: "gemusst", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "wollen", ich: "<span class='irregular'>will</span>", du: "willst", er_sie_es: "<span class='irregular'>will</span>", wir: "wollen", ihr: "wollt", sie_Sie: "wollen", english: "to want to", partizipII: "gewollt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "mögen", ich: "<span class='irregular'>mag</span>", du: "magst", er_sie_es: "<span class='irregular'>mag</span>", wir: "mögen", ihr: "mögt", sie_Sie: "mögen", english: "to like", partizipII: "gemocht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "möchten", ich: "möchte", du: "möchtest", er_sie_es: "möchte", wir: "möchten", ihr: "möchtet", sie_Sie: "möchten", english: "would like", partizipII: "(gekonnt)", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "dürfen", ich: "<span class='irregular'>darf</span>", du: "darfst", er_sie_es: "<span class='irregular'>darf</span>", wir: "dürfen", ihr: "dürft", sie_Sie: "dürfen", english: "may, to be allowed to", partizipII: "gedurft", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "sollen", ich: "<span class='irregular'>soll</span>", du: "sollst", er_sie_es: "<span class='irregular'>soll</span>", wir: "sollen", ihr: "sollt", sie_Sie: "sollen", english: "should, is supposed to", partizipII: "gesollt", hilfsverb: "haben" }
    ],
    "Separable Verbs": [
        { courseLevel: "A1.1", verb: "einkaufen", ich: "kaufe... <span class='prefix'>ein</span>", du: "kaufst... <span class='prefix'>ein</span>", er_sie_es: "kauft... <span class='prefix'>ein</span>", wir: "kaufen... <span class='prefix'>ein</span>", ihr: "kauft... <span class='prefix'>ein</span>", sie_Sie: "kaufen... <span class='prefix'>ein</span>", english: "to shop (groceries)", partizipII: "eingekauft", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "anrufen", ich: "rufe... <span class='prefix'>an</span>", du: "rufst... <span class='prefix'>an</span>", er_sie_es: "ruft... <span class='prefix'>an</span>", wir: "rufen... <span class='prefix'>an</span>", ihr: "ruft... <span class='prefix'>an</span>", sie_Sie: "rufen... <span class='prefix'>an</span>", english: "to call (phone)", partizipII: "angerufen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "mitbringen", ich: "bringe... <span class='prefix'>mit</span>", du: "bringst... <span class='prefix'>mit</span>", er_sie_es: "bringt... <span class='prefix'>mit</span>", wir: "bringen... <span class='prefix'>mit</span>", ihr: "bringt... <span class='prefix'>mit</span>", sie_Sie: "bringen... <span class='prefix'>mit</span>", english: "to bring along", partizipII: "mitgebracht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "einladen", ich: "lade... <span class='prefix'>ein</span>", du: "l<span class='irregular'>ä</span>dst... <span class='prefix'>ein</span>", er_sie_es: "l<span class='irregular'>ä</span>dt... <span class='prefix'>ein</span>", wir: "laden... <span class='prefix'>ein</span>", ihr: "ladet... <span class='prefix'>ein</span>", sie_Sie: "laden... <span class='prefix'>ein</span>", english: "to invite", partizipII: "eingeladen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "aufräumen", ich: "räume... <span class='prefix'>auf</span>", du: "räumst... <span class='prefix'>auf</span>", er_sie_es: "räumt... <span class='prefix'>auf</span>", wir: "räumen... <span class='prefix'>auf</span>", ihr: "räumt... <span class='prefix'>auf</span>", sie_Sie: "räumen... <span class='prefix'>auf</span>", english: "to tidy up", partizipII: "aufgeräumt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "abholen", ich: "hole... <span class='prefix'>ab</span>", du: "holst... <span class='prefix'>ab</span>", er_sie_es: "holt... <span class='prefix'>ab</span>", wir: "holen... <span class='prefix'>ab</span>", ihr: "holt... <span class='prefix'>ab</span>", sie_Sie: "holen... <span class='prefix'>ab</span>", english: "to pick up", partizipII: "abgeholt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "anfangen", ich: "fange... <span class='prefix'>an</span>", du: "f<span class='irregular'>ä</span>ngst... <span class='prefix'>an</span>", er_sie_es: "f<span class='irregular'>ä</span>ngt... <span class='prefix'>an</span>", wir: "fangen... <span class='prefix'>an</span>", ihr: "fangt... <span class='prefix'>an</span>", sie_Sie: "fangen... <span class='prefix'>an</span>", english: "to begin, start", partizipII: "angefangen", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "aufstehen", ich: "stehe... <span class='prefix'>auf</span>", du: "stehst... <span class='prefix'>auf</span>", er_sie_es: "steht... <span class='prefix'>auf</span>", wir: "stehen... <span class='prefix'>auf</span>", ihr: "steht... <span class='prefix'>auf</span>", sie_Sie: "stehen... <span class='prefix'>auf</span>", english: "to get up", partizipII: "aufgestanden", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "mitkommen", ich: "komme... <span class='prefix'>mit</span>", du: "kommst... <span class='prefix'>mit</span>", er_sie_es: "kommt... <span class='prefix'>mit</span>", wir: "kommen... <span class='prefix'>mit</span>", ihr: "kommt... <span class='prefix'>mit</span>", sie_Sie: "kommen... <span class='prefix'>mit</span>", english: "to come along", partizipII: "mitgekommen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "ankommen", ich: "komme... <span class='prefix'>an</span>", du: "kommst... <span class='prefix'>an</span>", er_sie_es: "kommt... <span class='prefix'>an</span>", wir: "kommen... <span class='prefix'>an</span>", ihr: "kommt... <span class='prefix'>an</span>", sie_Sie: "kommen... <span class='prefix'>an</span>", english: "to arrive", partizipII: "angekommen", hilfsverb: "sein" },
        { courseLevel: "A1.2", verb: "stattfinden", ich: "finde... <span class='prefix'>statt</span>", du: "findest... <span class='prefix'>statt</span>", er_sie_es: "findet... <span class='prefix'>statt</span>", wir: "finden... <span class='prefix'>statt</span>", ihr: "findet... <span class='prefix'>statt</span>", sie_Sie: "finden... <span class='prefix'>statt</span>", english: "to take place", partizipII: "stattgefunden", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "vorbereiten", ich: "bereite... <span class='prefix'>vor</span>", du: "bereitest... <span class='prefix'>vor</span>", er_sie_es: "bereitet... <span class='prefix'>vor</span>", wir: "bereiten... <span class='prefix'>vor</span>", ihr: "bereitet... <span class='prefix'>vor</span>", sie_Sie: "bereiten... <span class='prefix'>vor</span>", english: "to prepare", partizipII: "vorbereitet", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "rausbringen", ich: "bringe... <span class='prefix'>raus</span>", du: "bringst... <span class='prefix'>raus</span>", er_sie_es: "bringt... <span class='prefix'>raus</span>", wir: "bringen... <span class='prefix'>raus</span>", ihr: "bringt... <span class='prefix'>raus</span>", sie_Sie: "bringen... <span class='prefix'>raus</span>", english: "to take out", partizipII: "rausgebracht", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "aufhängen", ich: "hänge... <span class='prefix'>auf</span>", du: "hängst... <span class='prefix'>auf</span>", er_sie_es: "hängt... <span class='prefix'>auf</span>", wir: "hängen... <span class='prefix'>auf</span>", ihr: "hängt... <span class='prefix'>auf</span>", sie_Sie: "hängen... <span class='prefix'>auf</span>", english: "to hang up", partizipII: "aufgehängt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "ausräumen", ich: "räume... <span class='prefix'>aus</span>", du: "räumst... <span class='prefix'>aus</span>", er_sie_es: "räumt... <span class='prefix'>aus</span>", wir: "räumen... <span class='prefix'>aus</span>", ihr: "räumt... <span class='prefix'>aus</span>", sie_Sie: "räumen... <span class='prefix'>aus</span>", english: "to empty out", partizipII: "ausgeräumt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "einschalten", ich: "schalte... <span class='prefix'>ein</span>", du: "schaltest... <span class='prefix'>ein</span>", er_sie_es: "schaltet... <span class='prefix'>ein</span>", wir: "schalten... <span class='prefix'>ein</span>", ihr: "schaltet... <span class='prefix'>ein</span>", sie_Sie: "schalten... <span class='prefix'>ein</span>", english: "to switch on", partizipII: "eingeschaltet", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "zurückrufen", ich: "rufe... <span class='prefix'>zurück</span>", du: "rufst... <span class='prefix'>zurück</span>", er_sie_es: "ruft... <span class='prefix'>zurück</span>", wir: "rufen... <span class='prefix'>zurück</span>", ihr: "ruft... <span class='prefix'>zurück</span>", sie_Sie: "rufen... <span class='prefix'>zurück</span>", english: "to call back", partizipII: "zurückgerufen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "teilnehmen", ich: "nehme... <span class='prefix'>teil</span>", du: "nimmst... <span class='prefix'>teil</span>", er_sie_es: "nimmt... <span class='prefix'>teil</span>", wir: "nehmen... <span class='prefix'>teil</span>", ihr: "nehmt... <span class='prefix'>teil</span>", sie_Sie: "nehmen... <span class='prefix'>teil</span>", english: "to participate", partizipII: "teilgenommen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "abnehmen", ich: "nehme... <span class='prefix'>ab</span>", du: "nimmst... <span class='prefix'>ab</span>", er_sie_es: "nimmt... <span class='prefix'>ab</span>", wir: "nehmen... <span class='prefix'>ab</span>", ihr: "nehmt... <span class='prefix'>ab</span>", sie_Sie: "nehmen... <span class='prefix'>ab</span>", english: "to lose weight", partizipII: "abgenommen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "anmelden", ich: "melde... <span class='prefix'>an</span>", du: "meldest... <span class='prefix'>an</span>", er_sie_es: "meldet... <span class='prefix'>an</span>", wir: "melden... <span class='prefix'>an</span>", ihr: "meldet... <span class='prefix'>an</span>", sie_Sie: "melden... <span class='prefix'>an</span>", english: "to register", partizipII: "angemeldet", hilfsverb: "haben" },
    ],
    "Inseparable & '-ieren' Verbs": [
        { courseLevel: "A1.1", verb: "besuchen", ich: "besuche", du: "besuchst", er_sie_es: "besucht", wir: "besuchen", ihr: "besucht", sie_Sie: "besuchen", english: "to visit (inseparable)", partizipII: "besucht", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "verstehen", ich: "verstehe", du: "verstehst", er_sie_es: "versteht", wir: "verstehen", ihr: "versteht", sie_Sie: "verstehen", english: "to understand (inseparable)", partizipII: "verstanden", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "erzählen", ich: "erzähle", du: "erzählst", er_sie_es: "erzählt", wir: "erzählen", ihr: "erzählt", sie_Sie: "erzählen", english: "to tell, narrate (inseparable)", partizipII: "erzählt", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "organisieren", ich: "organisiere", du: "organisierst", er_sie_es: "organisiert", wir: "organisieren", ihr: "organisiert", sie_Sie: "organisieren", english: "to organize (-ieren)", partizipII: "organisiert", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "fotografieren", ich: "fotografiere", du: "fotografierst", er_sie_es: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie_Sie: "fotografieren", english: "to photograph (-ieren)", partizipII: "fotografiert", hilfsverb: "haben" },
        { courseLevel: "A1.1", verb: "telefonieren", ich: "telefoniere", du: "telefonierst", er_sie_es: "telefoniert", wir: "telefonieren", ihr: "telefoniert", sie_Sie: "telefonieren", english: "to telephone (-ieren)", partizipII: "telefoniert", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "empfehlen", ich: "empfehle", du: "empf<span class='irregular'>ie</span>hlst", er_sie_es: "empf<span class='irregular'>ie</span>hlt", wir: "empfehlen", ihr: "empfehlt", sie_Sie: "empfehlen", english: "to recommend (inseparable, strong)", partizipII: "empfohlen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "vergessen", ich: "vergesse", du: "verg<span class='irregular'>i</span>sst", er_sie_es: "verg<span class='irregular'>i</span>sst", wir: "vergessen", ihr: "vergesst", sie_Sie: "vergessen", english: "to forget (inseparable, strong)", partizipII: "vergessen", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "erklären", ich: "erkläre", du: "erklärst", er_sie_es: "erklärt", wir: "erklären", ihr: "erklärt", sie_Sie: "erklären", english: "to explain (inseparable)", partizipII: "erklärt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "entspannen", ich: "entspanne", du: "entspannst", er_sie_es: "entspannt", wir: "entspannen", ihr: "entspannt", sie_Sie: "entspannen", english: "to relax (inseparable)", partizipII: "entspannt", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "verlieren", ich: "verliere", du: "verlierst", er_sie_es: "verliert", wir: "verlieren", ihr: "verliert", sie_Sie: "verlieren", english: "to lose (inseparable)", partizipII: "verloren", hilfsverb: "haben" },
        { courseLevel: "A1.2", verb: "probieren", ich: "probiere", du: "probierst", er_sie_es: "probiert", wir: "probieren", ihr: "probiert", sie_Sie: "probieren", english: "to try (-ieren)", partizipII: "probiert", hilfsverb: "haben" },
    ],
    "Verbs in Past Tense (Präteritum)": [
        { courseLevel: "A1.1", verb: "sein (war)", ich: "<span class='irregular'>war</span>", du: "warst", er_sie_es: "<span class='irregular'>war</span>", wir: "waren", ihr: "wart", sie_Sie: "waren", english: "to be (was/were)", partizipII: "gewesen", hilfsverb: "sein" },
        { courseLevel: "A1.1", verb: "haben (hatte)", ich: "<span class='irregular'>hatte</span>", du: "hattest", er_sie_es: "<span class='irregular'>hatte</span>", wir: "hatten", ihr: "hattet", sie_Sie: "hatten", english: "to have (had)", partizipII: "gehabt", hilfsverb: "haben" }
    ]
};

function createVerbTable(category, verbs) {
    const section = document.createElement('div');
    section.className = 'verb-category-section';
    
    const table = document.createElement('table');
    table.className = 'verb-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th colspan="8">${category}</th>
            </tr>
            <tr>
                <th>Infinitive (English)</th>
                <th>ich</th>
                <th>du</th>
                <th>er/sie/es</th>
                <th>wir</th>
                <th>ihr</th>
                <th>sie/Sie</th>
                <th>Perfekt (haben/sein + Partizip II)</th>
            </tr>
        </thead>
        <tbody>
            ${verbs.map(verb => `
                <tr data-verb="${verb.verb.toLowerCase()}" data-level="${verb.courseLevel}">
                    <td class="verb-infinitive">
                        ${verb.verb}<br>
                        <span class="english-text">${verb.english}</span>
                        <span style="display: block; font-size: 0.8em; color: #999; margin-top: 4px;">(${verb.courseLevel})</span>
                    </td>
                    <td class="conjugation-cell"><div>${verb.ich}</div></td>
                    <td class="conjugation-cell"><div>${verb.du}</div></td>
                    <td class="conjugation-cell"><div>${verb.er_sie_es}</div></td>
                    <td class="conjugation-cell"><div>${verb.wir}</div></td>
                    <td class="conjugation-cell"><div>${verb.ihr}</div></td>
                    <td class="conjugation-cell"><div>${verb.sie_Sie}</div></td>
                    <td class="conjugation-cell"><div>${verb.hilfsverb} ... ${verb.partizipII}</div></td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    section.appendChild(table);
    return section;
}

function renderAllTables() {
    const container = document.getElementById('verb-tables-container');
    if (!container) return;
    container.innerHTML = '';
    for (const category in verb_data) {
        verb_data[category].sort((a, b) => a.verb.localeCompare(b.verb));
        const tableElement = createVerbTable(category, verb_data[category]);
        container.appendChild(tableElement);
    }
    setupPracticeMode();
}

function setupCollapsibleTables() {
    const headers = document.querySelectorAll('.verb-table thead tr:first-child th');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.verb-category-section');
            if (section) {
                section.classList.toggle('collapsed');
            }
        });
    });
}

function setupPracticeMode() {
    const cells = document.querySelectorAll('.conjugation-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (document.body.classList.contains('practice-mode')) {
                cell.classList.add('revealed');
            }
        });
    });
}

function togglePracticeMode() {
    const isPracticeMode = document.getElementById('practice-mode-toggle').checked;
    document.body.classList.toggle('practice-mode', isPracticeMode);
    
    document.querySelectorAll('.conjugation-cell.revealed').forEach(cell => {
        cell.classList.remove('revealed');
    });
}

function applyFilters() {
    const searchTerm = document.getElementById('verb-search').value.toLowerCase().trim();
    const selectedLevel = document.getElementById('level-filter').value;
    const sections = document.querySelectorAll('.verb-category-section');

    sections.forEach(section => {
        const rows = section.querySelectorAll('tbody tr');
        let hasVisibleRows = false;
        
        rows.forEach(row => {
            const verbName = row.dataset.verb;
            const englishName = row.querySelector('.english-text').textContent.toLowerCase();
            const verbLevel = row.dataset.level;

            const levelMatch = (selectedLevel === 'all' || verbLevel === selectedLevel);
            const searchMatch = (searchTerm === '' || verbName.includes(searchTerm) || englishName.includes(searchTerm));

            if (levelMatch && searchMatch) {
                row.style.display = '';
                hasVisibleRows = true;
            } else {
                row.style.display = 'none';
            }
        });
        
        section.style.display = hasVisibleRows ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('verb-tables-container')) {
        renderAllTables();
        setupCollapsibleTables();
        document.getElementById('practice-mode-toggle').addEventListener('change', togglePracticeMode);
        document.getElementById('verb-search').addEventListener('input', applyFilters);
        document.getElementById('level-filter').addEventListener('change', applyFilters);
        
        // Initial filter application
        applyFilters();
    }
});