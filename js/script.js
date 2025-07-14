// --- GLOBAL DATA STORE FOR FLASHCARDS ---
const flashcard_store = {
    k1: [
        { front: "Wie heißt du?", back: "What's your name? (informal)" },
        { front: "Woher kommst du?", back: "Where are you from?" },
        { front: "Ich wohne in Berlin.", back: "I live in Berlin." },
        { front: "Wie heißen Sie?", back: "What's your name? (formal)" },
        { front: "Guten Tag!", back: "Hello! / Good day!" },
        { front: "Tschüs!", back: "Bye! (informal)" },
        { front: "Wie geht es Ihnen?", back: "How are you? (formal)" },
        { front: "Danke, gut. Und dir?", back: "Thanks, good. And you? (informal)" }
    ],
    k2: [
        { front: "der Beruf, die Berufe", back: "Profession, Professions" },
        { front: "Was sind Sie von Beruf?", back: "What is your profession?" },
        { front: "Ich arbeite als...", back: "I work as a..." },
        { front: "verheiratet / ledig", back: "married / single" },
        { front: "der Bleistift, die Bleistifte", back: "pencil, pencils" },
        { front: "das Buch, die Bücher", back: "book, books" },
        { front: "die Sprache, die Sprachen", back: "language, languages" },
        { front: "Er ist nicht in Hamburg.", back: "He is not in Hamburg." }
    ],
    k3: [
        { front: "Was machst du gern?", back: "What do you like to do?" },
        { front: "Ich spiele gern Fußball.", back: "I like to play football." },
        { front: "Hast du am Montag Zeit?", back: "Do you have time on Monday?" },
        { front: "am Montag / um 8 Uhr", back: "on Monday / at 8 o'clock" },
        { front: "der Rucksack", back: "the backpack" },
        { front: "ein Rucksack", back: "a backpack" },
        { front: "kein Rucksack", back: "no backpack" },
        { front: "das Wochenende", back: "the weekend" }
    ],
    k4: [
        { front: "Ich nehme einen Kaffee.", back: "I'll take a coffee." },
        { front: "Was möchten Sie trinken?", back: "What would you like to drink?" },
        { front: "Akkusativ: der → den", back: "Accusative: masculine 'the'" },
        { front: "Zahlen, bitte!", back: "The bill, please!" },
        { front: "Wie spät ist es?", back: "What time is it?" },
        { front: "Es ist halb drei.", back: "It's half past two (2:30)." },
        { front: "Es gibt einen Park.", back: "There is a park." },
        { front: "Können Sie das wiederholen?", back: "Can you repeat that?" }
    ],
    k5: [
        { front: "das Obst / das Gemüse", back: "the fruit / the vegetable" },
        { front: "Ich mag Käse.", back: "I like cheese." },
        { front: "Du isst einen Apfel.", back: "You are eating an apple." },
        { front: "ein Kilo Äpfel", back: "a kilo of apples" },
        { front: "eine Flasche Wasser", back: "a bottle of water" },
        { front: "Was kostet das?", back: "How much does that cost?" },
        { front: "Imperativ: Gib!", back: "Imperative: Give! (du-form)" },
        { front: "Imperativ: Geben Sie!", back: "Imperative: Give! (Sie-form)" }
    ],
    k6: [
        { front: "Ich muss arbeiten.", back: "I have to work." },
        { front: "Er will schlafen.", back: "He wants to sleep." },
        { front: "Sie kann gut kochen.", back: "She can cook well." },
        { front: "immer / oft / nie", back: "always / often / never" },
        { front: "der Monat, die Monate", back: "the month, the months" },
        { front: "die Jahreszeit", back: "the season" },
        { front: "Wann ist der Termin?", back: "When is the appointment?" },
        { front: "am ersten Mai", back: "on the first of May" }
    ],
    k7: [
        { front: "Ich sehe ihn.", back: "I see him. (er → ihn)" },
        { front: "Sie fragt mich.", back: "She asks me. (ich → mich)" },
        { front: "einkaufen (trennbar)", back: "to shop (Ich kaufe ein.)" },
        { front: "anrufen (trennbar)", back: "to call (Er ruft an.)" },
        { front: "Ich lade dich ein.", back: "I am inviting you." },
        { front: "Danke für die Einladung.", back: "Thanks for the invitation." },
        { front: "Ich komme gern.", back: "I'd love to come." },
        { front: "Ich kann leider nicht.", back: "Unfortunately, I can't." }
    ],
    k8: [
        { front: "die Wohnung", back: "the apartment" },
        { front: "das Wohnzimmer", back: "the living room" },
        { front: "der Tisch, die Tische", back: "the table, the tables" },
        { front: "mein Tisch (Nominativ)", back: "my table" },
        { front: "Ich suche meinen Tisch (Akkusativ)", back: "I'm looking for my table" },
        { front: "sein Auto / ihr Auto", back: "his car / her car" },
        { front: "Wie gefällt dir das?", back: "How do you like that?" },
        { front: "Das ist zu teuer.", back: "That is too expensive." }
    ],
    k9: [
        { front: "Präteritum von 'sein'", back: "ich war, du warst, er war..." },
        { front: "Präteritum von 'haben'", back: "ich hatte, du hattest, er hatte..." },
        { front: "Gestern war ich krank.", back: "Yesterday I was sick." },
        { front: "Wir hatten viel Spaß.", back: "We had a lot of fun." },
        { front: "Das war sehr schön.", back: "That was very nice." },
        { front: "Liebe Grüße", back: "Best regards" },
        { front: "Carolines Kamera", back: "Caroline's camera" },
        { front: "Danke für das Wochenende.", back: "Thanks for the weekend." }
    ]
};

// --- GLOBAL DATA STORE FOR QUIZZES ---
const quiz_store = {
    k1: [
        { question: "You meet your new, older boss. How do you ask for his name?", options: ["Wie heißt du?", "Wie heißen Sie?", "Wie ist dein Name?"], answer: "Wie heißen Sie?" }, 
        { question: "Which sentence is correct for 'I speak German'?", options: ["Ich sprecht Deutsch.", "Ich spreche Deutsch.", "Ich sprichst Deutsch."], answer: "Ich spreche Deutsch." }, 
        { question: "How do you say goodbye to a friend informally?", options: ["Gute Nacht!", "Auf Wiedersehen!", "Tschüs!"], answer: "Tschüs!" }
    ],
    k2: [
        { question: "What is the correct plural of 'das Buch'?", options: ["die Buchs", "die Buchen", "die Bücher"], answer: "die Bücher" },
        { question: "Which sentence correctly negates 'She works in Berlin'?", options: ["Sie nicht arbeitet in Berlin.", "Sie arbeitet nicht in Berlin.", "Nicht sie arbeitet in Berlin."], answer: "Sie arbeitet nicht in Berlin." },
        { question: "If a male doctor is 'der Arzt', what is a female doctor?", options: ["die Arztin", "die Ärztin", "die Arzt"], answer: "die Ärztin" }
    ],
    k3: [
        { question: "Which phrase means 'I like to swim'?", options: ["Ich schwimme gern.", "Ich gern schwimme.", "Ich mag schwimmen."], answer: "Ich schwimme gern." },
        { question: "How do you ask 'Do you have time on Monday?'", options: ["Hast du Zeit am Montag?", "Du hast Zeit am Montag?", "Wann hast du Zeit?"], answer: "Hast du Zeit am Montag?" },
        { question: "What is 'no book' in German?", options: ["nicht Buch", "kein Buch", "nein Buch"], answer: "kein Buch" }
    ],
    k4: [
        { question: "You want to order 'a coffee'. What do you say?", options: ["Ich nehme ein Kaffee.", "Ich nehme einen Kaffee.", "Ich nehme den Kaffee."], answer: "Ich nehme einen Kaffee." },
        { question: "What does 'halb neun' mean?", options: ["9:30", "8:30", "9:00"], answer: "8:30" },
        { question: "Which sentence is correct?", options: ["Es gibt ein Kino.", "Es gibt einen Kino.", "Es gibt dem Kino."], answer: "Es gibt ein Kino." }
    ],
    k5: [
        { question: "Which verb is irregular in the 'du' form?", options: ["kaufen", "sagen", "essen"], answer: "essen" },
        { question: "What is the correct 'du' command for 'geben' (to give)?", options: ["Gebe!", "Gibst!", "Gib!"], answer: "Gib!" },
        { question: "How do you say 'a bottle of milk'?", options: ["eine Flasche Milch", "ein Flasche Milch", "einen Flasche Milch"], answer: "eine Flasche Milch" }
    ],
    k6: [
        { question: "Complete the sentence: Ich ___ morgen arbeiten.", options: ["will", "muss", "kann"], answer: "muss" },
        { question: "How do you write 'on the 20th of May'?", options: ["am zwanzigste Mai", "am zwanzigsten Mai", "am zwanzigster Mai"], answer: "am zwanzigsten Mai" },
        { question: "Which sentence correctly uses a modal verb?", options: ["Er will Fußball spielen.", "Er will spielt Fußball.", "Er spielen will Fußball."], answer: "Er will Fußball spielen." }
    ],
    k7: [
        { question: "How do you say 'I'm calling you (dich)'?", options: ["Ich rufe dich an.", "Ich anrufe dich.", "Dich rufe ich an."], answer: "Ich rufe dich an." },
        { question: "Which pronoun is the accusative form of 'er'?", options: ["ihm", "ihn", "er"], answer: "ihn" },
        { question: "What does 'absagen' mean when responding to an invitation?", options: ["to accept", "to decline", "to thank"], answer: "to decline" }
    ],
    k8: [
        { question: "Complete the sentence: Das ist Anna und das ist ___ Auto. (her car)", options: ["sein", "ihr", "ihre"], answer: "ihr" },
        { question: "What is the correct accusative form: 'Ich suche ______ (mein) Schlüssel.'", options: ["mein", "meine", "meinen"], answer: "meinen" },
        { question: "What does 'Das ist zu klein' mean?", options: ["It is not small.", "It is very small.", "It is too small."], answer: "It is too small." }
    ],
    k9: [
        { question: "What is the past tense (Präteritum) of 'Ich bin'?", options: ["Ich war", "Ich warst", "Ich hatte"], answer: "Ich war" },
        { question: "Complete the sentence: Gestern ___ wir keine Zeit.", options: ["waren", "hatten", "haben"], answer: "hatten" },
        { question: "How do you say 'Peter's book'?", options: ["das Buch von Peter", "Peters Buch", "Both are correct"], answer: "Both are correct" }
    ]
};

// --- GLOBAL DATA STORE FOR GRAMMAR CONCEPTS ---
const grammar_concept_store = {
    'c1-verb-conjugation': { title: 'Verb Conjugation (Present Tense)', examples: ["<strong>ich</strong> wohn<span class='verb-ending'>e</span> (I live)", "<strong>du</strong> wohn<span class='verb-ending'>st</span> (you live)", "<strong>er</strong> wohn<span class='verb-ending'>t</span> (he lives)"] },
    'c1-w-questions': { title: 'W-Questions (Information Questions)', examples: ["<strong>Woher</strong> <u>kommst</u> du? (Where do you come from?)", "<strong>Wie</strong> <u>heißt</u> du? (What is your name?)", "<strong>Wo</strong> <u>wohnst</u> du? (Where do you live?)"] },
    'c1-formal-informal': { title: 'Du (Informal) vs. Sie (Formal)', examples: ["Wie heißt <strong>du</strong>? (To a friend)", "Wie heißen <strong>Sie</strong>? (To a stranger/boss)", "Wie geht es <strong>Ihnen</strong>? (How are you? - formal)"] },
    'c2-articles': { title: 'Definite/Indefinite Articles', examples: ["<strong>der</strong> Tisch (the table) → <strong>ein</strong> Tisch (a table)", "<strong>die</strong> Lampe (the lamp) → <strong>eine</strong> Lampe (a lamp)", "<strong>das</strong> Buch (the book) → <strong>ein</strong> Buch (a book)"] },
    'c2-plurals': { title: 'Noun Plurals', examples: ["das Buch → die Büch<span class='verb-ending'>er</span>", "die Frau → die Frau<span class='verb-ending'>en</span>", "der Stift → die Stift<span class='verb-ending'>e</span>"] },
    'c2-negation': { title: 'Negation with "nicht"', examples: ["Sie arbeitet <strong>nicht</strong>. (She does not work.)", "Das ist <strong>nicht</strong> teuer. (That is not expensive.)", "Er kommt <strong>nicht</strong> aus Berlin. (He does not come from Berlin.)"] },
    'c3-gern': { title: 'Using "gern" to Express Likes', examples: ["Ich schwimme <strong>gern</strong>. (I like to swim.)", "Er spielt <strong>gern</strong> Fußball. (He likes to play football.)", "Sie kocht <strong>nicht gern</strong>. (She does not like to cook.)"] },
    'c3-time-prepositions': { title: 'Time Prepositions (am/um)', examples: ["<strong>am</strong> Montag (on Monday)", "<strong>am</strong> Abend (in the evening)", "<strong>um</strong> 15 Uhr (at 3 PM)"] },
    'c3-negation-kein': { title: 'Negation with "kein/keine"', examples: ["Ich habe <strong>keinen</strong> Hund. (I have no dog.)", "Das ist <strong>keine</strong> Katze. (That is not a cat.)", "Er hat <strong>kein</strong> Auto. (He has no car.)"] },
    'c4-accusative': { title: 'The Accusative Case', examples: ["Ich sehe <strong>den</strong> Mann. (der Mann)", "Er kauft <strong>einen</strong> Tisch. (der Tisch)", "Sie liest <strong>das</strong> Buch. (das Buch - no change)"] },
    'c4-es-gibt': { title: '"Es gibt" + Accusative', examples: ["Hier gibt es <strong>einen</strong> Park. (der Park)", "Gibt es hier <strong>eine</strong> Apotheke? (die Apotheke)", "In Berlin gibt es <strong>ein</strong> Schloss. (das Schloss)"] },
    'c4-time': { title: 'Telling Time', examples: ["10:15 → Es ist Viertel nach zehn.", "10:30 → Es ist halb elf.", "10:45 → Es ist Viertel vor elf."] },
    'c5-irregular-verbs': { title: 'Irregular Verbs (essen, nehmen)', examples: ["Du <strong>isst</strong> eine Pizza. (e → i)", "Er <strong>nimmt</strong> ein Bier. (e → imm)", "Du <strong>fährst</strong> schnell. (a → ä)"] },
    'c5-imperative': { title: 'The Imperative Mood', examples: ["<strong>Gib</strong> mir das Salz! (du-form)", "<strong>Esst</strong> die Pizza! (ihr-form)", "<strong>Bringen Sie</strong> die Rechnung! (Sie-form)"] },
    'c5-quantities': { title: 'Quantities & Packaging', examples: ["Ich möchte <strong>ein Kilo</strong> Äpfel.", "Er kauft <strong>eine Flasche</strong> Wasser.", "Sie braucht <strong>eine Packung</strong> Nudeln."] },
    'c6-modal-verbs': { title: 'Modal Verbs (können, müssen, wollen)', examples: ["Ich <strong>kann</strong> gut schwimmen.", "Du <strong>musst</strong> heute arbeiten.", "Er <strong>will</strong> nach Hause gehen."] },
    'c6-inversion': { title: 'Sentence Inversion', examples: ["Heute <strong>gehe ich</strong> ins Kino. (Not: Heute ich gehe...)", "Am Abend <strong>lernt er</strong> Deutsch. (Not: Am Abend er lernt...)"] },
    'c6-dates': { title: 'Ordinal Numbers & Dates', examples: ["Heute ist <strong>der</strong> zwanzig<strong>ste</strong> Mai.", "Der Termin ist <strong>am</strong> einundzwanzig<strong>sten</strong> Mai."] },
    'c7-separable-verbs': { title: 'Separable Verbs', examples: ["Ich <strong>rufe</strong> dich morgen <strong>an</strong>. (anrufen)", "Der Zug <strong>kommt</strong> um 10 Uhr <strong>an</strong>. (ankommen)", "<strong>Kaufst</strong> du im Supermarkt <strong>ein</strong>? (einkaufen)"] },
    'c7-accusative-pronouns': { title: 'Accusative Pronouns', examples: ["Er liebt <strong>sie</strong>. (he loves her)", "Siehst du <strong>mich</strong>? (do you see me?)", "Ich besuche <strong>ihn</strong>. (I visit him)"] },
    'c7-invitations': { title: 'Making Suggestions', examples: ["<strong>Gehen wir</strong> ins Kino? (Shall we go to the cinema?)", "<strong>Hast du</strong> am Samstag Zeit? (Do you have time on Saturday?)"] },
    'c8-possessive-nominative': { title: 'Possessive Articles (Nominative)', examples: ["Das ist <strong>mein</strong> Hund. (der Hund)", "Das ist <strong>meine</strong> Katze. (die Katze)", "<strong>Sein</strong> Haus ist groß. (das Haus)"] },
    'c8-possessive-accusative': { title: 'Possessive Articles (Accusative)', examples: ["Ich suche <strong>meinen</strong> Hund.", "Er füttert <strong>seine</strong> Katze.", "Sie verkauft <strong>ihr</strong> Haus."] },
    'c8-gefallen': { title: 'Using "gefallen"', examples: ["Das Haus <strong>gefällt mir</strong>. (I like the house.)", "<strong>Gefällt dir</strong> der Film? (Do you like the film?)"] },
    'c9-praeteritum': { title: 'Past Tense (Präteritum of sein/haben)', examples: ["Gestern <strong>war</strong> ich krank. (I was sick yesterday.)", "Wir <strong>hatten</strong> viel Spaß. (We had a lot of fun.)", "Der Film <strong>war</strong> langweilig. (The film was boring.)"] },
    'c9-emails': { title: 'Writing Emails', examples: ["Anrede: <strong>Liebe</strong> Anna, / <strong>Lieber</strong> Max,", "Gruß: <strong>Viele Grüße</strong> / <strong>Liebe Grüße</strong> (LG)"] },
    'c9-genitive-s': { title: "Genitive 's' with Names", examples: ["Das ist <strong>Annas</strong> Buch. (That is Anna's book.)", "Wo ist <strong>Thomas'</strong> Auto? (apostrophe after 's')"] }
};


// --- GLOBAL FUNCTIONS ---

/**
 * Handles mobile menu toggle functionality.
 */
function handleMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

/**
 * Creates interactive flashcards and appends them to a specified container.
 * @param {Array} flashcardData - An array of objects, each with 'front' and 'back' properties.
 * @param {string} containerId - The ID of the HTML element to append the cards to.
 */
function createFlashcards(flashcardData, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !flashcardData) return;
    container.innerHTML = '';
    flashcardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `<div class="flashcard-inner"><div class="flashcard-front">${data.front}</div><div class="flashcard-back">${data.back}</div></div>`;
        card.addEventListener('click', function() { this.classList.toggle('is-flipped'); });
        container.appendChild(card);
    });
}

/**
 * Creates a quiz with multiple-choice questions in a specified container.
 * @param {Array} quizData - An array of question objects {question, options, answer}.
 * @param {string} containerId - The ID of the HTML element to append the quiz to.
 */
function createQuiz(quizData, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;
    container.innerHTML = '';
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.id = `q-${containerId}-${index}`;
        let optionsHtml = '';
        // Randomize options for better learning and to prevent pattern recognition
        const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);
        shuffledOptions.forEach(option => {
            optionsHtml += `<label><input type="radio" name="question-${containerId}-${index}" value="${option}">${option}</label>`;
        });
        questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p><div class="quiz-options">${optionsHtml}</div>`;
        container.appendChild(questionDiv);
    });
}

/**
 * Checks the answers for a given quiz and provides visual feedback.
 * @param {string} chapterId - The identifier for the chapter quiz (e.g., 'k1').
 */
function checkQuiz(chapterId) {
    const quizData = quiz_store[chapterId];
    const containerId = `quiz-container-${chapterId}`;
    if (!quizData) return;
    
    quizData.forEach((item, index) => {
        const questionDiv = document.getElementById(`q-${containerId}-${index}`);
        const selectedOption = questionDiv.querySelector(`input[name="question-${containerId}-${index}"]:checked`);
        const labels = questionDiv.querySelectorAll('label');
        
        // Reset all labels first
        labels.forEach(label => { label.classList.remove('correct', 'incorrect'); });

        if (selectedOption) {
            if (selectedOption.value === item.answer) {
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                // Also highlight the correct answer so the user can learn
                const correctInput = questionDiv.querySelector(`input[value="${item.answer}"]`);
                if(correctInput) { correctInput.parentElement.classList.add('correct'); }
            }
        }
    });
}

/**
 * Handles the functionality for the grammar concept modal on the homepage.
 */
function handleGrammarModal() {
    const modal = document.getElementById('grammar-modal');
    const closeBtn = document.querySelector('.modal-close');
    const links = document.querySelectorAll('.grammar-link');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (!modal || links.length === 0) return;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const conceptId = e.target.dataset.concept;
            const conceptData = grammar_concept_store[conceptId];

            if (conceptData) {
                modalTitle.innerHTML = conceptData.title;
                modalBody.innerHTML = `<ul>${conceptData.examples.map(ex => `<li>${ex}</li>`).join('')}</ul>`;
                modal.style.display = 'block';
            }
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// --- Sprechtraining Data Structure ---
const sprechtData = {
    wohnen: {
        garten: {
            title: "Garten",
            dialogues: [
                { question: "Hast du einen Garten?", answers: ["<span class='positive'>Ja</span>, ich habe einen Garten.", "<span class='negative'>Nein</span>, ich habe keinen Garten."] },
                { question: "Ist dein Garten groß?", answers: ["<span class='positive'>Ja</span>, mein Garten ist groß.", "<span class='negative'>Nein</span>, er ist klein."] },
                { question: "Wie ist dein Garten?", answers: ["Mein Garten ist sehr schön.", "Er ist klein, aber gemütlich."] },
                { question: "Wie groß ist dein Garten?", answers: ["Mein Garten ist 10 Quadratmeter groß.", "Ich habe einen sehr großen Garten."] },
                { question: "Was machst du gern im Garten?", answers: ["Ich lese gern im Garten.", "Ich arbeite gern im Garten."] }
            ]
        },
        balkon: {
            title: "Balkon",
            dialogues: [
                { question: "Hast du einen Balkon?", answers: ["<span class='positive'>Ja</span>, ich habe einen Balkon.", "<span class='negative'>Nein</span>, ich habe keinen Balkon."] },
                { question: "Ist dein Balkon groß?", answers: ["<span class='positive'>Ja</span>, mein Balkon ist groß.", "<span class='negative'>Nein</span>, er ist klein."] },
                { question: "Wie ist dein Balkon?", answers: ["Mein Balkon ist sonnig und gemütlich.", "Er ist klein, aber ich mag ihn."] },
                { question: "Was machst du gern auf dem Balkon?", answers: ["Ich trinke gern Kaffee auf dem Balkon.", "Ich sitze gern dort und lese."] }
            ]
        },
        küche: {
            title: "Küche",
            dialogues: [
                { question: "Hast du eine Küche?", answers: ["<span class='positive'>Ja</span>, ich habe eine Küche.", "<span class='negative'>Nein</span>, ich habe keine Küche."] },
                { question: "Ist deine Küche hell?", answers: ["<span class='positive'>Ja</span>, meine Küche ist hell.", "<span class='negative'>Nein</span>, sie ist ein bisschen dunkel."] },
                { question: "Wie ist deine Küche?", answers: ["Meine Küche ist modern und hell.", "Sie ist klein, aber praktisch."] },
                { question: "Gibt es einen Herd und einen Kühlschrank in deiner Küche?", answers: ["<span class='positive'>Ja</span>, es gibt alles.", "<span class='negative'>Nein</span>, ich habe keinen Herd."] },
                { question: "Was machst du gern in der Küche?", answers: ["Ich koche gern in der Küche.", "Ich esse gern in der Küche."] }
            ]
        },
        bad: {
            title: "Bad",
            dialogues: [
                { question: "Hast du ein Bad?", answers: ["<span class='positive'>Ja</span>, ich habe ein Bad.", "<span class='negative'>Nein</span>, ich habe kein Bad."] },
                { question: "Gibt es eine Dusche im Bad?", answers: ["<span class='positive'>Ja</span>, es gibt eine Dusche.", "<span class='negative'>Nein</span>, es gibt nur eine Badewanne."] },
                { question: "Wie viele Badezimmer hast du?", answers: ["Ich habe ein Badezimmer.", "Ich habe zwei Badezimmer."] },
                { question: "Gibt es eine Badewanne im Bad?", answers: ["<span class='positive'>Ja</span>, es gibt eine Badewanne.", "<span class='negative'>Nein</span>, es gibt nur eine Dusche."] },
                { question: "Ist dein Bad modern?", answers: ["<span class='positive'>Ja</span>, mein Bad ist sehr modern.", "<span class='negative'>Nein</span>, es ist ein bisschen alt."] }
            ]
        },
        wohnzimmer: {
            title: "Wohnzimmer",
            dialogues: [
                { question: "Hast du ein Wohnzimmer?", answers: ["<span class='positive'>Ja</span>, ich habe ein Wohnzimmer.", "<span class='negative'>Nein</span>, ich habe kein Wohnzimmer."] },
                { question: "Ist dein Wohnzimmer gemütlich?", answers: ["<span class='positive'>Ja</span>, mein Wohnzimmer ist sehr gemütlich.", "<span class='negative'>Nein</span>, es ist nicht so gemütlich."] },
                { question: "Ist dein Wohnzimmer groß oder klein?", answers: ["Mein Wohnzimmer ist groß.", "Es ist klein, aber sehr gemütlich."] },
                { question: "Was gibt es in deinem Wohnzimmer?", answers: ["In meinem Wohnzimmer gibt es ein großes Sofa und einen Fernseher.", "Es gibt auch ein Regal und viele Bücher."] },
                { question: "Was machst du gern im Wohnzimmer?", answers: ["Ich schaue gern Filme im Wohnzimmer.", "Ich entspanne mich gern dort."] }
            ]
        },
        möbel: {
            title: "Möbel",
            dialogues: [
                { question: "Hast du einen Tisch?", answers: ["<span class='positive'>Ja</span>, ich habe einen Tisch.", "<span class='negative'>Nein</span>, ich habe keinen Tisch."] },
                { question: "Ist dein Bett bequem?", answers: ["<span class='positive'>Ja</span>, mein Bett ist sehr bequem.", "<span class='negative'>Nein</span>, es ist nicht so bequem."] },
                { question: "Hast du ein Bett?", answers: ["<span class='positive'>Ja</span>, ich habe ein Bett.", "<span class='negative'>Nein</span>, ich habe kein Bett, ich schlafe auf dem Sofa."] },
                { question: "Welche Möbel hast du im Schlafzimmer?", answers: ["Ich habe ein Bett, einen Kleiderschrank und zwei Nachttische.", "Es gibt nur ein Bett und einen Stuhl."] },
                { question: "Ist dein Sofa neu oder alt?", answers: ["Mein Sofa ist neu.", "Es ist alt, aber bequem."] },
                { question: "Wie findest du deine Möbel?", answers: ["Ich finde meine Möbel sehr schön und praktisch.", "Sie sind okay, aber ich möchte neue."] },
                { question: "Wo kaufst du Möbel?", answers: ["Ich kaufe Möbel in einem großen Möbelhaus.", "Ich kaufe sie online."] }
            ]
        },
        wohnung_haus: {
            title: "Wohnung / Haus",
            dialogues: [
                { question: "Wohnst du in einer Wohnung oder einem Haus?", answers: ["Ich wohne in einer Wohnung.", "Ich wohne in einem Haus."] },
                { question: "Ist deine Wohnung neu?", answers: ["<span class='positive'>Ja</span>, meine Wohnung ist neu.", "<span class='negative'>Nein</span>, sie ist alt."] },
                { question: "Wie viele Zimmer hat deine Wohnung/dein Haus?", answers: ["Meine Wohnung hat drei Zimmer.", "Mein Haus hat fünf Zimmer."] },
                { question: "Wohnst du im Erdgeschoss oder in einem Stock?", answers: ["Ich wohne im Erdgeschoss.", "Ich wohne im zweiten Stock."] },
                { question: "Wie gefällt dir deine Wohnung/dein Haus?", answers: ["Meine Wohnung gefällt mir sehr gut!", "Mein Haus ist okay, aber ich suche ein neues."] },
                { question: "Ist deine Wohnung/dein Haus teuer?", answers: ["<span class='positive'>Ja</span>, die Miete ist teuer.", "<span class='negative'>Nein</span>, es ist günstig."] }
            ]
        }
    },
    essen_trinken: {
        obst: {
            title: "Obst",
            dialogues: [
                { question: "Isst du Bananen?", answers: ["<span class='positive'>Ja</span>, ich esse Bananen.", "<span class='negative'>Nein</span>, ich esse keine Bananen."] },
                { question: "Magst du Äpfel?", answers: ["<span class='positive'>Ja</span>, ich mag Äpfel.", "<span class='negative'>Nein</span>, ich mag keine Äpfel."] },
                { question: "Isst du gern Obst?", answers: ["<span class='positive'>Ja</span>, ich esse sehr gern Obst.", "<span class='negative'>Nein</span>, ich esse nicht gern Obst."] },
                { question: "Welches Obst magst du am liebsten?", answers: ["Ich mag Äpfel und Bananen am liebsten.", "Ich liebe Orangen!"] },
                { question: "Wo kaufst du Obst?", answers: ["Ich kaufe Obst im Supermarkt.", "Ich kaufe es auf dem Markt."] },
                { question: "Was kostet ein Kilo Äpfel?", answers: ["Ein Kilo Äpfel kostet 2 Euro 50.", "Es kostet 2 Euro 50 Cent."] }
            ]
        },
        gemüse: {
            title: "Gemüse",
            dialogues: [
                { question: "Isst du Tomaten?", answers: ["<span class='positive'>Ja</span>, ich esse Tomaten.", "<span class='negative'>Nein</span>, ich esse keine Tomaten."] },
                { question: "Magst du Gurken?", answers: ["<span class='positive'>Ja</span>, ich mag Gurken.", "<span class='negative'>Nein</span>, ich mag keine Gurken."] },
                { question: "Isst du gern Gemüse?", answers: ["<span class='positive'>Ja</span>, ich esse gern Gemüse.", "<span class='negative'>Nein</span>, ich esse nicht so gern Gemüse."] },
                { question: "Welches Gemüse magst du?", answers: ["Ich mag Tomaten und Gurken sehr gern.", "Ich esse gern Paprika und Zwiebeln."] },
                { question: "Wo kaufst du Gemüse?", answers: ["Ich kaufe Gemüse am Gemüsestand.", "Ich kaufe es im Supermarkt."] },
                { question: "Brauchst du Kartoffeln und Pilze für dein Gericht?", answers: ["<span class='positive'>Ja</span>, ich brauche Kartoffeln und Pilze.", "<span class='negative'>Nein</span>, ich brauche keine Pilze."] }
            ]
        },
        lieblingsgetränk: {
            title: "Lieblingsgetränk",
            dialogues: [
                { question: "Trinkst du Wasser gern?", answers: ["<span class='positive'>Ja</span>, ich trinke gern Wasser.", "<span class='negative'>Nein</span>, ich trinke nicht gern Wasser."] },
                { question: "Trinkst du Kaffee?", answers: ["<span class='positive'>Ja</span>, ich trinke Kaffee.", "<span class='negative'>Nein</span>, ich trinke keinen Kaffee."] },
                { question: "Was ist dein Lieblingsgetränk?", answers: ["Mein Lieblingsgetränk ist Wasser.", "Mein Lieblingsgetränk ist Kaffee."] },
                { question: "Trinkst du gern Cola?", answers: ["<span class='positive'>Ja</span>, ich trinke gern Cola.", "<span class='negative'>Nein</span>, ich trinke lieber Saft."] },
                { question: "Wo trinkst du gern einen Kaffee?", answers: ["Ich trinke gern Kaffee im Café.", "Ich trinke ihn zu Hause."] }
            ]
        },
        frühstück: {
            title: "Frühstück",
            dialogues: [
                { question: "Frühstückst du gern?", answers: ["<span class='positive'>Ja</span>, ich frühstücke gern.", "<span class='negative'>Nein</span>, ich frühstücke nicht gern."] },
                { question: "Isst du Brot zum Frühstück?", answers: ["<span class='positive'>Ja</span>, ich esse Brot zum Frühstück.", "<span class='negative'>Nein</span>, ich esse Müsli."] },
                { question: "Wann frühstückst du?", answers: ["Ich frühstücke um 7 Uhr.", "Ich frühstücke am Morgen."] },
                { question: "Was isst du zum Frühstück?", answers: ["Zum Frühstück esse ich Brot mit Käse.", "Ich esse Müsli und Joghurt."] },
                { question: "Was trinkst du zum Frühstück?", answers: ["Ich trinke Tee.", "Ich trinke Orangensaft."] }
            ]
        },
        fleisch: {
            title: "Fleisch",
            dialogues: [
                { question: "Isst du Schnitzel?", answers: ["<span class='positive'>Ja</span>, ich esse Schnitzel.", "<span class='negative'>Nein</span>, ich esse kein Schnitzel."] },
                { question: "Magst du Hähnchen?", answers: ["<span class='positive'>Ja</span>, ich mag Hähnchen.", "<span class='negative'>Nein</span>, ich mag kein Hähnchen."] },
                { question: "Isst du gern Fleisch?", answers: ["<span class='positive'>Ja</span>, ich esse gern Fleisch.", "<span class='negative'>Nein</span>, ich esse kein Fleisch, ich bin Vegetarier."] },
                { question: "Wo kaufst du Fleisch?", answers: ["Ich kaufe Fleisch in der Metzgerei.", "Ich kaufe es im Supermarkt."] },
                { question: "Was ist dein Lieblingsgericht mit Fleisch?", answers: ["Ich mag Hähnchen mit Reis.", "Ich esse gern Schnitzel."] }
            ]
        },
        lieblingsessen: {
            title: "Lieblingsessen",
            dialogues: [
                { question: "Magst du Pizza?", answers: ["<span class='positive'>Ja</span>, ich mag Pizza.", "<span class='negative'>Nein</span>, ich mag keine Pizza."] },
                { question: "Kochst du gern?", answers: ["<span class='positive'>Ja</span>, ich koche gern.", "<span class='negative'>Nein</span>, ich koche nicht gern."] },
                { question: "Was ist dein Lieblingsessen?", answers: ["Mein Lieblingsessen ist Pizza.", "Ich liebe Nudeln mit Tomatensoße."] },
                { question: "Kochst du dein Lieblingsessen selbst?", answers: ["<span class='positive'>Ja</span>, ich koche es oft selbst.", "<span class='negative'>Nein</span>, ich bestelle es meistens."] },
                { question: "Welche Zutaten brauchst du für dein Lieblingsessen?", answers: ["Für Pizza brauche ich Teig, Tomaten, Käse und Pilze.", "Für Nudeln brauche ich Nudeln und Tomaten."] }
            ]
        },
        brot: {
            title: "Brot",
            dialogues: [
                { question: "Magst du Brot?", answers: ["<span class='positive'>Ja</span>, ich mag Brot.", "<span class='negative'>Nein</span>, ich mag kein Brot."] },
                { question: "Kaufst du Brot?", answers: ["<span class='positive'>Ja</span>, ich kaufe Brot.", "<span class='negative'>Nein</span>, ich backe es selbst."] },
                { question: "Kaufst du dein Brot in der Bäckerei?", answers: ["<span class='positive'>Ja</span>, ich kaufe mein Brot in der Bäckerei.", "<span class='negative'>Nein</span>, ich kaufe es im Supermarkt."] },
                { question: "Welches Brot magst du?", answers: ["Ich mag Vollkornbrot.", "Ich esse gern Brötchen."] },
                { question: "Isst du gern Brot mit Käse?", answers: ["<span class='positive'>Ja</span>, ich esse gern Brot mit Käse.", "<span class='negative'>Nein</span>, ich esse lieber Brot mit Marmelade."] },
                { question: "Wie oft kaufst du Brot?", answers: ["Ich kaufe jeden Tag Brot.", "Ich kaufe zweimal pro Woche Brot."] }
            ]
        }
    },
    freizeit: {
        wochenende: {
            title: "Wochenende",
            dialogues: [
                { question: "Ist das Wochenende schön?", answers: ["<span class='positive'>Ja</span>, das Wochenende ist schön.", "<span class='negative'>Nein</span>, es ist nicht so schön."] },
                { question: "Hast du am Wochenende frei?", answers: ["<span class='positive'>Ja</span>, ich habe frei.", "<span class='negative'>Nein</span>, ich muss arbeiten."] },
                { question: "Was machst du gern am Wochenende?", answers: ["Am Wochenende spiele ich gern Volleyball.", "Ich lese gern Bücher."] },
                { question: "Was machst du dieses Wochenende?", answers: ["Dieses Wochenende treffe ich Freunde.", "Ich lerne Deutsch."] },
                { question: "Wie war dein letztes Wochenende?", answers: ["Mein letztes Wochenende war sehr entspannend.", "Es war langweilig."] },
                { question: "Hast du am Wochenende viel Zeit?", answers: ["<span class='positive'>Ja</span>, ich habe viel Zeit.", "<span class='negative'>Nein</span>, ich muss arbeiten."] }
            ]
        },
        hobby: {
            title: "Hobby",
            dialogues: [
                { question: "Hast du ein Hobby?", answers: ["<span class='positive'>Ja</span>, ich habe ein Hobby.", "<span class='negative'>Nein</span>, ich habe kein Hobby."] },
                { question: "Liest du gern?", answers: ["<span class='positive'>Ja</span>, ich lese gern.", "<span class='negative'>Nein</span>, ich lese nicht gern."] },
                { question: "Was sind deine Hobbys?", answers: ["Meine Hobbys sind Wandern und Musik hören.", "Ich koche gern und lese."] },
                { question: "Wann machst du dein Hobby?", answers: ["Ich fotografiere am Wochenende.", "Ich lese jeden Abend."] },
                { question: "Ist dein Hobby interessant?", answers: ["<span class='positive'>Ja</span>, mein Hobby ist sehr interessant.", "<span class='negative'>Nein</span>, es ist manchmal langweilig."] },
                { question: "Warum machst du dieses Hobby?", answers: ["Ich mache es, weil es Spaß macht.", "Es ist sehr entspannend."] }
            ]
        },
        sport: {
            title: "Sport",
            dialogues: [
                { question: "Machst du Sport?", answers: ["<span class='positive'>Ja</span>, ich mache Sport.", "<span class='negative'>Nein</span>, ich mache keinen Sport."] },
                { question: "Spielst du Fußball?", answers: ["<span class='positive'>Ja</span>, ich spiele Fußball.", "<span class='negative'>Nein</span>, ich spiele keinen Fußball."] },
                { question: "Schwimmst du gern?", answers: ["<span class='positive'>Ja</span>, ich schwimme gern.", "<span class='negative'>Nein</span>, ich schwimme nicht gern."] },
                { question: "Welchen Sport machst du gern?", answers: ["Ich spiele gern Fußball.", "Ich schwimme gern."] },
                { question: "Wann machst du Sport?", answers: ["Ich mache Sport am Abend.", "Ich trainiere am Wochenende."] },
                { question: "Wo spielst du Fußball?", answers: ["Ich spiele Fußball im Park.", "Ich spiele im Sportverein."] }
            ]
        },
        freunde: {
            title: "Freunde",
            dialogues: [
                { question: "Hast du Freunde?", answers: ["<span class='positive'>Ja</span>, ich habe Freunde.", "<span class='negative'>Nein</span>, ich habe nicht viele Freunde."] },
                { question: "Triffst du gern Freunde?", answers: ["<span class='positive'>Ja</span>, ich treffe gern Freunde.", "<span class='negative'>Nein</span>, ich bin lieber allein."] },
                { question: "Triffst du oft Freunde?", answers: ["<span class='positive'>Ja</span>, ich treffe Freunde oft.", "<span class='negative'>Nein</span>, ich treffe sie selten."] },
                { question: "Was machst du gern mit Freunden?", answers: ["Ich gehe gern ins Kino mit Freunden.", "Wir kochen zusammen."] },
                { question: "Wie oft triffst du deine Freunde?", answers: ["Ich treffe meine Freunde oft, einmal pro Woche.", "Ich treffe sie selten."] },
                { question: "Wo trefft ihr euch?", answers: ["Wir treffen uns im Café.", "Wir treffen uns zu Hause."] }
            ]
        },
        film: {
            title: "Film",
            dialogues: [
                { question: "Magst du Filme?", answers: ["<span class='positive'>Ja</span>, ich mag Filme.", "<span class='negative'>Nein</span>, ich mag keine Filme."] },
                { question: "Gehst du ins Kino?", answers: ["<span class='positive'>Ja</span>, ich gehe ins Kino.", "<span class='negative'>Nein</span>, ich gehe nicht ins Kino."] },
                { question: "Schaust du gern Filme?", answers: ["<span class='positive'>Ja</span>, ich schaue gern Filme.", "<span class='negative'>Nein</span>, ich schaue keine Filme."] },
                { question: "Wann schaust du Filme?", answers: ["Ich schaue Filme am Abend.", "Ich schaue Filme am Wochenende."] },
                { question: "Welches Filmgenre magst du?", answers: ["Ich mag Komödien.", "Ich schaue gern Actionfilme."] },
                { question: "Wie findest du Science-Fiction-Filme?", answers: ["Ich finde Science-Fiction-Filme sehr spannend.", "Ich finde sie langweilig."] }
            ]
        },
        fahrrad: {
            title: "Fahrrad",
            dialogues: [
                { question: "Hast du ein Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich habe ein Fahrrad.", "<span class='negative'>Nein</span>, ich habe kein Fahrrad."] },
                { question: "Ist dein Fahrrad neu?", answers: ["<span class='positive'>Ja</span>, mein Fahrrad ist neu.", "<span class='negative'>Nein</span>, es ist alt."] },
                { question: "Fährst du gern Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich fahre sehr gern Fahrrad.", "<span class='negative'>Nein</span>, das mache ich nicht gern."] },
                { question: "Fährst du jeden Tag Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich fahre jeden Tag Fahrrad.", "<span class='negative'>Nein</span>, ich fahre selten Fahrrad."] },
                { question: "Wohin fährst du mit dem Fahrrad?", answers: ["Ich fahre mit dem Fahrrad zur Arbeit.", "Ich mache Radtouren im Park."] }
            ]
        },
        theater: {
            title: "Theater",
            dialogues: [
                { question: "Magst du Theater?", answers: ["<span class='positive'>Ja</span>, ich mag Theater.", "<span class='negative'>Nein</span>, ich mag kein Theater."] },
                { question: "Gehst du oft ins Theater?", answers: ["<span class='positive'>Ja</span>, ich gehe oft ins Theater.", "<span class='negative'>Nein</span>, ich gehe selten ins Theater."] },
                { question: "Gehst du gern ins Theater?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Theater.", "<span class='negative'>Nein</span>, Theater ist nicht mein Ding."] },
                { question: "Gehst du auch gern ins Konzert/Museum?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Konzert.", "<span class='negative'>Nein</span>, Museen finde ich langweilig."] },
                { question: "Wie findest du Opern?", answers: ["Ich finde Opern sehr interessant.", "Ich mag Opern nicht so sehr."] }
            ]
        },
        urlaub_reise: {
            title: "Urlaub und Reise",
            dialogues: [
                { question: "Fährst du gern in den Urlaub?", answers: ["<span class='positive'>Ja</span>, ich fahre gern in den Urlaub.", "<span class='negative'>Nein</span>, ich fahre nicht gern in den Urlaub."] },
                { question: "Reist du gern?", answers: ["<span class='positive'>Ja</span>, ich reise gern.", "<span class='negative'>Nein</span>, ich reise nicht gern."] },
                { question: "Machst du gern Urlaub?", answers: ["<span class='positive'>Ja</span>, ich mache sehr gern Urlaub.", "<span class='negative'>Nein</span>, ich mache nicht gern Urlaub."] },
                { question: "Wann machst du Urlaub?", answers: ["Ich mache Urlaub im Sommer.", "Ich mache Urlaub im August."] },
                { question: "Wohin fährst du gern in den Urlaub?", answers: ["Ich fahre gern ans Meer.", "Ich reise gern in die Berge."] },
                { question: "Wie lange war dein letzter Urlaub?", answers: ["Mein letzter Urlaub war zwei Wochen lang.", "Er war nur eine Woche."] },
                { question: "Wie war dein letzter Urlaub?", answers: ["Mein letzter Urlaub war super und sehr entspannend.", "Er war okay, aber das Wetter war nicht gut."] }
            ]
        },
        vergangenheit: {
            title: "Vergangenheit (war / hatte)",
            dialogues: [
                { question: "Warst du gestern zu Hause?", answers: ["<span class='positive'>Ja</span>, ich war zu Hause.", "<span class='negative'>Nein</span>, ich war nicht zu Hause."] },
                { question: "Hattest du Spaß?", answers: ["<span class='positive'>Ja</span>, ich hatte Spaß.", "<span class='negative'>Nein</span>, ich hatte keinen Spaß."] },
                { question: "Wie war dein Wochenende?", answers: ["Mein Wochenende war sehr schön.", "Es war nicht so gut."] },
                { question: "Wo warst du gestern?", answers: ["Gestern war ich zu Hause.", "Ich war im Kino."] },
                { question: "Wann hattest du Geburtstag?", answers: ["Ich hatte im Mai Geburtstag.", "Mein Geburtstag war letzte Woche."] },
                { question: "Warst du schon einmal in Deutschland?", answers: ["<span class='positive'>Ja</span>, ich war schon in Berlin.", "<span class='negative'>Nein</span>, ich war noch nie in Deutschland."] },
                { question: "Hattest du einen guten Tag?", answers: ["<span class='positive'>Ja</span>, ich hatte einen sehr guten Tag.", "<span class='negative'>Nein</span>, mein Tag war nicht so gut."] }
            ]
        }
    }
};

// --- Sprechtraining Modal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Basic menu toggle logic (ensure it's not duplicated if already in your script.js)
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPagePath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.href.includes(currentPagePath) && currentPagePath !== "") {
            // Handle index.html specifically if it's the root path to avoid false positives
            if (currentPagePath === 'index.html' && !link.href.endsWith('index.html') && !link.href.endsWith('/')) {
                return;
            }
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    // Special handling for the root index.html if the URL is just '/'
    if (currentPagePath === '' || currentPagePath === 'index.html') {
        document.querySelector('.main-nav a[href="index.html"]')?.classList.add('active');
    }


    const sprechtModal = document.getElementById('sprechModal');
    const sprechtModalTitle = document.getElementById('sprechModalTitle');
    const sprechtModalBody = document.getElementById('sprechModalBody');
    const sprechtModalClose = document.querySelector('#sprechModal .modal-close');

    // Get all clickable sprecht-trigger cards
    const sprechtTriggers = document.querySelectorAll('.sprecht-trigger');

    sprechtTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const topicKey = trigger.dataset.topic;
            const subTopicKey = trigger.dataset.subtopic;

            if (sprechtData[topicKey] && sprechtData[topicKey][subTopicKey]) {
                const data = sprechtData[topicKey][subTopicKey];
                sprechtModalTitle.textContent = `Thema: ${data.title}`;
                sprechtModalBody.innerHTML = ''; // Clear previous content

                data.dialogues.forEach(dialogue => {
                    const dialogueDiv = document.createElement('div');
                    dialogueDiv.classList.add('sprech-dialogue'); // Apply the sprech-training style to content

                    const questionP = document.createElement('p');
                    questionP.innerHTML = `<strong>Frage (A):</strong> ${dialogue.question}`;
                    dialogueDiv.appendChild(questionP);

                    dialogue.answers.forEach(answer => {
                        const answerP = document.createElement('p');
                        answerP.innerHTML = `<strong>Antwort (B):</strong> ${answer}`;
                        dialogueDiv.appendChild(answerP);
                    });
                    sprechtModalBody.appendChild(dialogueDiv);
                });

                sprechtModal.style.display = 'block'; // Show the modal
            }
        });
    });

    // Close the modal when the close button is clicked
    if (sprechtModalClose) {
        sprechtModalClose.addEventListener('click', () => {
            sprechtModal.style.display = 'none';
        });
    }

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === sprechtModal) {
            sprechtModal.style.display = 'none';
        }
    });
});

// --- INITIALIZE ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    handleMobileMenu();
    // This function is only needed on the homepage, but it won't break other pages
    handleGrammarModal(); 
});