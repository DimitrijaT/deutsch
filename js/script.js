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


// --- INITIALIZE ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    handleMobileMenu();
    // This function is only needed on the homepage, but it won't break other pages
    handleGrammarModal(); 
});