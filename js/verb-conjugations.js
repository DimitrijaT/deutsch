// --- DATA AND LOGIC FOR VERB CONJUGATIONS PAGE ---

const verb_data = {
    "Regular Verbs (Weak Verbs)": [
        { verb: "wohnen", ich: "wohne", du: "wohnst", er_sie_es: "wohnt", wir: "wohnen", ihr: "wohnt", sie_Sie: "wohnen", english: "to live, reside" },
        { verb: "lernen", ich: "lerne", du: "lernst", er_sie_es: "lernt", wir: "lernen", ihr: "lernt", sie_Sie: "lernen", english: "to learn" },
        { verb: "machen", ich: "mache", du: "machst", er_sie_es: "macht", wir: "machen", ihr: "macht", sie_Sie: "machen", english: "to do, make" },
        { verb: "kochen", ich: "koche", du: "kochst", er_sie_es: "kocht", wir: "kochen", ihr: "kocht", sie_Sie: "kochen", english: "to cook" },
        { verb: "spielen", ich: "spiele", du: "spielst", er_sie_es: "spielt", wir: "spielen", ihr: "spielt", sie_Sie: "spielen", english: "to play" },
        { verb: "hören", ich: "höre", du: "hörst", er_sie_es: "hört", wir: "hören", ihr: "hört", sie_Sie: "hören", english: "to hear, listen" },
        { verb: "kaufen", ich: "kaufe", du: "kaufst", er_sie_es: "kauft", wir: "kaufen", ihr: "kauft", sie_Sie: "kaufen", english: "to buy" },
        { verb: "fragen", ich: "frage", du: "fragst", er_sie_es: "fragt", wir: "fragen", ihr: "fragt", sie_Sie: "fragen", english: "to ask" },
        { verb: "sagen", ich: "sage", du: "sagst", er_sie_es: "sagt", wir: "sagen", ihr: "sagt", sie_Sie: "sagen", english: "to say" },
        { verb: "arbeiten", ich: "arbeite", du: "arbeit<span class='irregular'>e</span>st", er_sie_es: "arbeit<span class='irregular'>e</span>t", wir: "arbeiten", ihr: "arbeit<span class='irregular'>e</span>t", sie_Sie: "arbeiten", english: "to work (stem ends in -t)" },
        { verb: "leben", ich: "lebe", du: "lebst", er_sie_es: "lebt", wir: "leben", ihr: "lebt", sie_Sie: "leben", english: "to live, be alive" },
        { verb: "glauben", ich: "glaube", du: "glaubst", er_sie_es: "glaubt", wir: "glauben", ihr: "glaubt", sie_Sie: "glauben", english: "to believe" },
        { verb: "suchen", ich: "suche", du: "suchst", er_sie_es: "sucht", wir: "suchen", ihr: "sucht", sie_Sie: "suchen", english: "to look for" },
        { verb: "brauchen", ich: "brauche", du: "brauchst", er_sie_es: "braucht", wir: "brauchen", ihr: "braucht", sie_Sie: "brauchen", english: "to need" },
        { verb: "bleiben", ich: "bleibe", du: "bleibst", er_sie_es: "bleibt", wir: "bleiben", ihr: "bleibt", sie_Sie: "bleiben", english: "to stay" },
        { verb: "bestellen", ich: "bestelle", du: "bestellst", er_sie_es: "bestellt", wir: "bestellen", ihr: "bestellt", sie_Sie: "bestellen", english: "to order" },
        { verb: "besuchen", ich: "besuche", du: "besuchst", er_sie_es: "besucht", wir: "besuchen", ihr: "besucht", sie_Sie: "besuchen", english: "to visit" },
        { verb: "bezahlen", ich: "bezahle", du: "bezahlst", er_sie_es: "bezahlt", wir: "bezahlen", ihr: "bezahlt", sie_Sie: "bezahlen", english: "to pay" },
        { verb: "tanzen", ich: "tanze", du: "tanzt", er_sie_es: "tanzt", wir: "tanzen", ihr: "tanzt", sie_Sie: "tanzen", english: "to dance" },
        { verb: "wandern", ich: "wandere", du: "wanderst", er_sie_es: "wandert", wir: "wandern", ihr: "wandert", sie_Sie: "wandern", english: "to hike" },
        { verb: "schwimmen", ich: "schwimme", du: "schwimmst", er_sie_es: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie_Sie: "schwimmen", english: "to swim" },
        { verb: "joggen", ich: "jogge", du: "joggst", er_sie_es: "joggt", wir: "joggen", ihr: "joggt", sie_Sie: "joggen", english: "to jog" },
        { verb: "schauen", ich: "schaue", du: "schaust", er_sie_es: "schaut", wir: "schauen", ihr: "schaut", sie_Sie: "schauen", english: "to look, watch" },
        { verb: "kosten", ich: "koste", du: "kostest", er_sie_es: "kostet", wir: "kosten", ihr: "kostet", sie_Sie: "kosten", english: "to cost" } ,        
        { verb: "warten", ich: "warte", du: "wart<span class='irregular'>e</span>st", er_sie_es: "wart<span class='irregular'>e</span>t", wir: "warten", ihr: "wart<span class='irregular'>e</span>t", sie_Sie: "warten", english: "to wait (stem ends in -t)" },
        { verb: "erzählen", ich: "erzähle", du: "erzählst", er_sie_es: "erzählt", wir: "erzählen", ihr: "erzählt", sie_Sie: "erzählen", english: "to tell, narrate" },
        { verb: "passen", ich: "passe", du: "passt", er_sie_es: "passt", wir: "passen", ihr: "passt", sie_Sie: "passen", english: "to fit, suit (stem ends in -s)" },
        { verb: "ordnen", ich: "ordne", du: "ordn<span class='irregular'>e</span>st", er_sie_es: "ordn<span class='irregular'>e</span>t", wir: "ordnen", ihr: "ordn<span class='irregular'>e</span>t", sie_Sie: "ordnen", english: "to organize, arrange (stem ends in -dn)" },
        { verb: "kennen", ich: "kenne", du: "kennst", er_sie_es: "kennt", wir: "kennen", ihr: "kennt", sie_Sie: "kennen", english: "to know (people, places)" },
        { verb: "klettern", ich: "klettere", du: "kletterst", er_sie_es: "klettert", wir: "klettern", ihr: "klettert", sie_Sie: "klettern", english: "to climb" },
        { verb: "hoffen", ich: "hoffe", du: "hoffst", er_sie_es: "hofft", wir: "hoffen", ihr: "hofft", sie_Sie: "hoffen", english: "to hope" },
        { verb: "reisen", ich: "reise", du: "reist", er_sie_es: "reist", wir: "reisen", ihr: "reist", sie_Sie: "reisen", english: "to travel" },
        { verb: "verstehen", ich: "verstehe", du: "verstehst", er_sie_es: "versteht", wir: "verstehen", ihr: "versteht", sie_Sie: "verstehen", english: "to understand" },
        { verb: "heißen", ich: "heiße", du: "heißt", er_sie_es: "heißt", wir: "heißen", ihr: "heißt", sie_Sie: "heißen", english: "to be called" },
        { verb: "kommen", ich: "komme", du: "kommst", er_sie_es: "kommt", wir: "kommen", ihr: "kommt", sie_Sie: "kommen", english: "to come" },
        { verb: "gehen", ich: "gehe", du: "gehst", er_sie_es: "geht", wir: "gehen", ihr: "geht", sie_Sie: "gehen", english: "to go" },
        { verb: "finden", ich: "finde", du: "findest", er_sie_es: "findet", wir: "finden", ihr: "findet", sie_Sie: "finden", english: "to find" },
        { verb: "trinken", ich: "trinke", du: "trinkst", er_sie_es: "trinkt", wir: "trinken", ihr: "trinkt", sie_Sie: "trinken", english: "to drink" },
        { verb: "schneiden", ich: "schneide", du: "schneidest", er_sie_es: "schneidet", wir: "schneiden", ihr: "schneidet", sie_Sie: "schneiden", english: "to cut" },
        { verb: "waschen", ich: "wasche", du: "w<span class='irregular'>ä</span>schst", er_sie_es: "w<span class='irregular'>ä</span>scht", wir: "waschen", ihr: "wascht", sie_Sie: "waschen", english: "to wash" }
    ],
    "Irregular Verbs (Strong / Vowel-Changing)": [
        { verb: "sein", ich: "<span class='irregular'>bin</span>", du: "<span class='irregular'>bist</span>", er_sie_es: "<span class='irregular'>ist</span>", wir: "<span class='irregular'>sind</span>", ihr: "<span class='irregular'>seid</span>", sie_Sie: "<span class='irregular'>sind</span>", english: "to be" },
        { verb: "haben", ich: "habe", du: "<span class='irregular'>hast</span>", er_sie_es: "<span class='irregular'>hat</span>", wir: "haben", ihr: "habt", sie_Sie: "haben", english: "to have" },
        { verb: "sprechen", ich: "spreche", du: "spr<span class='irregular'>i</span>chst", er_sie_es: "spr<span class='irregular'>i</span>cht", wir: "sprechen", ihr: "sprecht", sie_Sie: "sprechen", english: "to speak" },
        { verb: "essen", ich: "esse", du: "<span class='irregular'>i</span>sst", er_sie_es: "<span class='irregular'>i</span>sst", wir: "essen", ihr: "esst", sie_Sie: "essen", english: "to eat" },
        { verb: "nehmen", ich: "nehme", du: "n<span class='irregular'>imm</span>st", er_sie_es: "n<span class='irregular'>imm</span>t", wir: "nehmen", ihr: "nehmt", sie_Sie: "nehmen", english: "to take" },
        { verb: "fahren", ich: "fahre", du: "f<span class='irregular'>ä</span>hrst", er_sie_es: "f<span class='irregular'>ä</span>hrt", wir: "fahren", ihr: "fahrt", sie_Sie: "fahren", english: "to drive, ride" },
        { verb: "lesen", ich: "lese", du: "l<span class='irregular'>ie</span>st", er_sie_es: "l<span class='irregular'>ie</span>st", wir: "lesen", ihr: "lest", sie_Sie: "lesen", english: "to read" },
        { verb: "sehen", ich: "sehe", du: "s<span class='irregular'>ie</span>hst", er_sie_es: "s<span class='irregular'>ie</span>ht", wir: "sehen", ihr: "seht", sie_Sie: "sehen", english: "to see" },
        { verb: "geben", ich: "gebe", du: "g<span class='irregular'>i</span>bst", er_sie_es: "g<span class='irregular'>i</span>bt", wir: "geben", ihr: "gebt", sie_Sie: "geben", english: "to give" },
        { verb: "schlafen", ich: "schlafe", du: "schl<span class='irregular'>ä</span>fst", er_sie_es: "schl<span class='irregular'>ä</span>ft", wir: "schlafen", ihr: "schlaft", sie_Sie: "schlafen", english: "to sleep" },
        { verb: "treffen", ich: "treffe", du: "tr<span class='irregular'>i</span>ffst", er_sie_es: "tr<span class='irregular'>i</span>fft", wir: "treffen", ihr: "trefft", sie_Sie: "treffen", english: "to meet" },
        { verb: "waschen", ich: "wasche", du: "w<span class='irregular'>ä</span>schst", er_sie_es: "w<span class='irregular'>ä</span>scht", wir: "waschen", ihr: "wascht", sie_Sie: "waschen", english: "to wash" }
        
    ],
    "Modal Verbs": [
        { verb: "können", ich: "<span class='irregular'>kann</span>", du: "kannst", er_sie_es: "<span class='irregular'>kann</span>", wir: "können", ihr: "könnt", sie_Sie: "können", english: "can, to be able to" },
        { verb: "müssen", ich: "<span class='irregular'>muss</span>", du: "musst", er_sie_es: "<span class='irregular'>muss</span>", wir: "müssen", ihr: "müsst", sie_Sie: "müssen", english: "must, to have to" },
        { verb: "wollen", ich: "<span class='irregular'>will</span>", du: "willst", er_sie_es: "<span class='irregular'>will</span>", wir: "wollen", ihr: "wollt", sie_Sie: "wollen", english: "to want to" },
        { verb: "mögen", ich: "<span class='irregular'>mag</span>", du: "magst", er_sie_es: "<span class='irregular'>mag</span>", wir: "mögen", ihr: "mögt", sie_Sie: "mögen", english: "to like" },
        { verb: "möchten", ich: "möchte", du: "möchtest", er_sie_es: "möchte", wir: "möchten", ihr: "möchtet", sie_Sie: "möchten", english: "would like (polite)" },
        // { verb: "dürfen", ich: "<span class='irregular'>darf</span>", du: "darfst", er_sie_es: "<span class='irregular'>darf</span>", wir: "dürfen", ihr: "dürft", sie_Sie: "dürfen", english: "may, to be allowed to" },
        // { verb: "sollen", ich: "<span class='irregular'>soll</span>", du: "sollst", er_sie_es: "<span class='irregular'>soll</span>", wir: "sollen", ihr: "sollt", sie_Sie: "sollen", english: "should, ought to" }
    ],
    "Separable Verbs": [
        { verb: "einkaufen", ich: "kaufe... <span class='prefix'>ein</span>", du: "kaufst... <span class='prefix'>ein</span>", er_sie_es: "kauft... <span class='prefix'>ein</span>", wir: "kaufen... <span class='prefix'>ein</span>", ihr: "kauft... <span class='prefix'>ein</span>", sie_Sie: "kaufen... <span class='prefix'>ein</span>", english: "to shop (for groceries)" },
        { verb: "anrufen", ich: "rufe... <span class='prefix'>an</span>", du: "rufst... <span class='prefix'>an</span>", er_sie_es: "ruft... <span class='prefix'>an</span>", wir: "rufen... <span class='prefix'>an</span>", ihr: "ruft... <span class='prefix'>an</span>", sie_Sie: "rufen... <span class='prefix'>an</span>", english: "to call (phone)" },
        { verb: "mitbringen", ich: "bringe... <span class='prefix'>mit</span>", du: "bringst... <span class='prefix'>mit</span>", er_sie_es: "bringt... <span class='prefix'>mit</span>", wir: "bringen... <span class='prefix'>mit</span>", ihr: "bringt... <span class='prefix'>mit</span>", sie_Sie: "bringen... <span class='prefix'>mit</span>", english: "to bring along" },
        { verb: "einladen", ich: "lade... <span class='prefix'>ein</span>", du: "l<span class='irregular'>ä</span>dst... <span class='prefix'>ein</span>", er_sie_es: "l<span class='irregular'>ä</span>dt... <span class='prefix'>ein</span>", wir: "laden... <span class='prefix'>ein</span>", ihr: "ladet... <span class='prefix'>ein</span>", sie_Sie: "laden... <span class='prefix'>ein</span>", english: "to invite" },
        { verb: "aufräumen", ich: "räume... <span class='prefix'>auf</span>", du: "räumst... <span class='prefix'>auf</span>", er_sie_es: "räumt... <span class='prefix'>auf</span>", wir: "räumen... <span class='prefix'>auf</span>", ihr: "räumt... <span class='prefix'>auf</span>", sie_Sie: "räumen... <span class='prefix'>auf</span>", english: "to tidy up" },
        { verb: "abholen", ich: "hole... <span class='prefix'>ab</span>", du: "holst... <span class='prefix'>ab</span>", er_sie_es: "holt... <span class='prefix'>ab</span>", wir: "holen... <span class='prefix'>ab</span>", ihr: "holt... <span class='prefix'>ab</span>", sie_Sie: "holen... <span class='prefix'>ab</span>", english: "to pick up" },
        { verb: "anfangen", ich: "fange... <span class='prefix'>an</span>", du: "f<span class='irregular'>ä</span>ngst... <span class='prefix'>an</span>", er_sie_es: "f<span class='irregular'>ä</span>ngt... <span class='prefix'>an</span>", wir: "fangen... <span class='prefix'>an</span>", ihr: "fangt... <span class='prefix'>an</span>", sie_Sie: "fangen... <span class='prefix'>an</span>", english: "to begin, start" },
        { verb: "aufstehen", ich: "stehe... <span class='prefix'>auf</span>", du: "stehst... <span class='prefix'>auf</span>", er_sie_es: "steht... <span class='prefix'>auf</span>", wir: "stehen... <span class='prefix'>auf</span>", ihr: "steht... <span class='prefix'>auf</span>", sie_Sie: "stehen... <span class='prefix'>auf</span>", english: "to get up" },
        { verb: "mitkommen", ich: "komme... <span class='prefix'>mit</span>", du: "kommst... <span class='prefix'>mit</span>", er_sie_es: "kommt... <span class='prefix'>mit</span>", wir: "kommen... <span class='prefix'>mit</span>", ihr: "kommt... <span class='prefix'>mit</span>", sie_Sie: "kommen... <span class='prefix'>mit</span>", english: "to come along" },
        // { verb: "vorbereiten", ich: "bereite... <span class='prefix'>vor</span>", du: "bereitest... <span class='prefix'>vor</span>", er_sie_es: "bereitet... <span class='prefix'>vor</span>", wir: "bereiten... <span class='prefix'>vor</span>", ihr: "bereitet... <span class='prefix'>vor</span>", sie_Sie: "bereiten... <span class='prefix'>vor</span>", english: "to prepare" },
        // { verb: "zurückkommen", ich: "komme... <span class='prefix'>zurück</span>", du: "kommst... <span class='prefix'>zurück</span>", er_sie_es: "kommt... <span class='prefix'>zurück</span>", wir: "kommen... <span class='prefix'>zurück</span>", ihr: "kommt... <span class='prefix'>zurück</span>", sie_Sie: "kommen... <span class='prefix'>zurück</span>", english: "to come back" },        // { verb: "ausgehen", ich: "gehe... <span class='prefix'>aus</span>", du: "gehst... <span class='prefix'>aus</span>", er_sie_es: "geht... <span class='prefix'>aus</span>", wir: "gehen... <span class='prefix'>aus</span>", ihr: "geht... <span class='prefix'>aus</span>", sie_Sie: "gehen... <span class='prefix'>aus</span>", english: "to go out" }
    ],
    "Verbs in Past Tense (Präteritum)": [
        { verb: "sein (war)", ich: "<span class='irregular'>war</span>", du: "warst", er_sie_es: "<span class='irregular'>war</span>", wir: "waren", ihr: "wart", sie_Sie: "waren", english: "to be (was/were)" },
        { verb: "haben (hatte)", ich: "<span class='irregular'>hatte</span>", du: "hattest", er_sie_es: "<span class='irregular'>hatte</span>", wir: "hatten", ihr: "hattet", sie_Sie: "hatten", english: "to have (had)" }
        // { verb: "gehen (ging)", ich: "<span class='irregular'>ging</span>", du: "gingst", er_sie_es: "<span class='irregular'>ging</span>", wir: "gingen", ihr: "gingt", sie_Sie: "gingen", english: "to go (went)" },
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
                <th colspan="7">${category}</th>
            </tr>
            <tr>
                <th>Infinitive (English)</th>
                <th>ich</th>
                <th>du</th>
                <th>er/sie/es</th>
                <th>wir</th>
                <th>ihr</th>
                <th>sie/Sie</th>
            </tr>
        </thead>
        <tbody>
            ${verbs.map(verb => `
                <tr data-verb="${verb.verb.toLowerCase()}">
                    <td class="verb-infinitive">${verb.verb}<br><span class="english-text">${verb.english}</span></td>
                    <td class="conjugation-cell"><div>${verb.ich}</div></td>
                    <td class="conjugation-cell"><div>${verb.du}</div></td>
                    <td class="conjugation-cell"><div>${verb.er_sie_es}</div></td>
                    <td class="conjugation-cell"><div>${verb.wir}</div></td>
                    <td class="conjugation-cell"><div>${verb.ihr}</div></td>
                    <td class="conjugation-cell"><div>${verb.sie_Sie}</div></td>
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
    
    // Reset any revealed cells when toggling the mode on or off
    document.querySelectorAll('.conjugation-cell.revealed').forEach(cell => {
        cell.classList.remove('revealed');
    });
}

function filterVerbs() {
    const searchTerm = document.getElementById('verb-search').value.toLowerCase().trim();
    const sections = document.querySelectorAll('.verb-category-section');

    sections.forEach(section => {
        const rows = section.querySelectorAll('tbody tr');
        let hasVisibleRows = false;
        rows.forEach(row => {
            const verbName = row.dataset.verb;
            const englishName = row.querySelector('.english-text').textContent.toLowerCase();
            
            if (verbName.includes(searchTerm) || englishName.includes(searchTerm)) {
                row.style.display = '';
                hasVisibleRows = true;
            } else {
                row.style.display = 'none';
            }
        });
        // Hide entire category if no verbs match the search
        section.style.display = hasVisibleRows || searchTerm === '' ? '' : 'none';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // This script is specific to verb-conjugations.html
    if (document.getElementById('verb-tables-container')) {
        renderAllTables();
        setupCollapsibleTables();
        document.getElementById('practice-mode-toggle').addEventListener('change', togglePracticeMode);
        document.getElementById('verb-search').addEventListener('input', filterVerbs);
    }
});