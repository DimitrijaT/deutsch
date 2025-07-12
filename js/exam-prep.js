// --- DATA FOR EXAM PREPARATION PAGE ---

const reading_questions = [
    { question: "Where was Julia last weekend?", options: ["In Berlin, at home", "In a big city", "In the mountains"], answer: "In the mountains" },
    { question: "What was the weather like?", options: ["Cold and rainy", "Nice, but cold", "Hot and sunny"], answer: "Nice, but cold" },
    { question: "Why didn't Thomas eat pizza?", options: ["He doesn't like Italian food.", "He was not hungry.", "He doesn't like salami."], answer: "He doesn't like salami." },
    { question: "What did Julia and her friends do on Saturday evening?", options: ["They went hiking.", "They went to bed early.", "They went to a party."], answer: "They went to bed early." }
];

const form_solutions = {
    persons: "4",
    date: "10.08.",
    pets: "nein",
    price: "85 Euro",
    contact: "08821 12345"
};

const grammar_questions = [
    { sentence_start: "Ich habe", options: ["ein", "einen", "eine"], sentence_end: "Hund.", answer: "einen", explanation: "The verb 'haben' takes the accusative case. 'Hund' is masculine (der Hund), so 'ein' becomes 'einen'." },
    { sentence_start: "Gestern", options: ["ich war", "war ich", "bin ich"], sentence_end: "müde.", answer: "war ich", explanation: "In a sentence starting with a time element, the verb must be in position 2, followed by the subject (Verb-Subject Inversion)." },
    { sentence_start: "Er möchte", options: ["am", "um", "in"], sentence_end: "Abend einen Film sehen.", answer: "am", explanation: "For times of the day (Morgen, Mittag, Abend), we use the preposition 'am'." },
    { sentence_start: "Sie kann sehr gut", options: ["kocht", "kochen", "koche"], sentence_end: ".", answer: "kochen", explanation: "With a modal verb like 'können', the main verb goes to the end of the sentence in its infinitive form." },
    { sentence_start: "Wir fahren", options: ["in den", "ins", "in die"], sentence_end: "Berge.", answer: "in die", explanation: "'Berge' (mountains) is plural (die Berge). The preposition 'in' with accusative for a plural destination requires 'in die'." },
    { sentence_start: "Das ist nicht", options: ["mein", "meine", "meinen"], sentence_end: "Fahrrad.", answer: "mein", explanation: "'Fahrrad' is neuter (das Fahrrad). The possessive article in nominative neuter has no ending." },
    { sentence_start: "Ich rufe dich später", options: ["anrufen", "an", "rufe an"], sentence_end: ".", answer: "an", explanation: "With the separable verb 'anrufen', the prefix 'an' goes to the end of the sentence." },
    { sentence_start: "Wo ist die Tasse", options: ["von dem", "von", "von der"], sentence_end: "Lehrerin?", answer: "von der", explanation: "The preposition 'von' always takes the dative case. 'Lehrerin' is feminine (die), so the dative form is 'der'." }
];

const spelling_number_prompts = [
    { type: "spell", prompt: "Ihren Nachnamen (your last name)" },
    { type: "spell", prompt: "Ihren Wohnort (your city of residence)" },
    { type: "spell", prompt: "Deutschland" },
    { type: "spell", prompt: "Wochenende" },
    { type: "say", prompt: "Ihre Telefonnummer (your phone number)" },
    { type: "say", prompt: "das heutige Datum (today's date)" },
    { type: "say", prompt: "den Preis: 19,50 €" },
    { type: "say", prompt: "die Hausnummer: 85" }
];

const speaking_cards = [
    { theme: "Essen & Trinken", word: "Frühstück", exampleQuestion: "Was isst du zum Frühstück?" },
    { theme: "Freizeit", word: "Wochenende", exampleQuestion: "Was machst du am Wochenende?" },
    { theme: "Beruf", word: "Arbeit", exampleQuestion: "Wo arbeiten Sie?" },
    { theme: "Wohnen", word: "Lieblingszimmer", exampleQuestion: "Was ist dein Lieblingszimmer?" },
    { theme: "Urlaub", word: "Sommer", exampleQuestion: "Fährst du im Sommer in den Urlaub?" },
    { theme: "Sport", word: "Fahrrad", exampleQuestion: "Fährst du oft Fahrrad?" }
];

// --- FUNCTIONS FOR EXAM PREP PAGE ---

function createReadingQuiz() {
    const container = document.getElementById('reading-quiz-container');
    if (!container) return;
    container.innerHTML = reading_questions.map((item, index) => {
        const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);
        const optionsHtml = shuffledOptions.map(option => `
            <label><input type="radio" name="read-q${index}" value="${option}"> ${option}</label>
        `).join('');
        return `<div class="quiz-question" id="read-q${index}"><p><strong>Statement ${index + 1}:</strong> Julia war letztes Wochenende in Berlin.</p><div class="quiz-options">${optionsHtml}</div></div>`;
    }).join('');
    // This part is static for this specific exercise format
    const statements = [
        "Julia was in Berlin last weekend.",
        "The weather was bad.",
        "Thomas ate pizza with salami.",
        "Julia and her friends went to bed late."
    ];
    const correctAnswers = ["Falsch", "Falsch", "Falsch", "Richtig"]; // Example answers for a true/false quiz based on the text
    const quizQuestionsHTML = statements.map((stmt, i) => `
        <div class="quiz-question" id="read-q${i}">
            <p><strong>Statement ${i+1}:</strong> ${stmt}</p>
            <div class="quiz-options">
                <label><input type="radio" name="read-q${i}" value="Richtig"> Richtig (Correct)</label>
                <label><input type="radio" name="read-q${i}" value="Falsch"> Falsch (Incorrect)</label>
            </div>
        </div>
    `).join('');
    container.innerHTML = quizQuestionsHTML;
}

function checkReadingQuiz() {
    const correctAnswers = ["Falsch", "Falsch", "Falsch", "Richtig"]; // The actual answers based on the text
    correctAnswers.forEach((answer, index) => {
        const qDiv = document.getElementById(`read-q${index}`);
        const selected = qDiv.querySelector(`input[name="read-q${index}"]:checked`);
        const labels = qDiv.querySelectorAll('label');
        labels.forEach(l => l.classList.remove('correct', 'incorrect'));
        if (selected) {
            if (selected.value === answer) {
                selected.parentElement.classList.add('correct');
            } else {
                selected.parentElement.classList.add('incorrect');
                const correctLabel = qDiv.querySelector(`input[value="${answer}"]`).parentElement;
                if(correctLabel) correctLabel.classList.add('correct');
            }
        }
    });
}

function checkForm() {
    const checkField = (id, solution) => {
        const input = document.getElementById(id);
        input.classList.remove('correct-input', 'incorrect-input');
        if (input.value.trim().toLowerCase() === solution.toLowerCase()) {
            input.classList.add('correct-input');
        } else {
            input.classList.add('incorrect-input');
        }
    };
    checkField('form-persons', form_solutions.persons);
    checkField('form-date', form_solutions.date);
    checkField('form-pets', form_solutions.pets);
    checkField('form-price', form_solutions.price);
    checkField('form-contact', form_solutions.contact);
}

function createGrammarExercise() {
    const container = document.getElementById('grammar-container');
    if (!container) return;
    container.innerHTML = grammar_questions.map((item, index) => `
        <div class="grammar-item" id="g${index}">
            <p class="sentence-to-fix">
                ${item.sentence_start}
                <select id="g-select-${index}">
                    <option value="">-- ? --</option>
                    ${[...item.options].sort(() => Math.random() - 0.5).map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
                ${item.sentence_end}
            </p>
            <div class="solution-box">
                <h5>Why?</h5>
                <p>${item.explanation}</p>
            </div>
        </div>
    `).join('');
}

function checkGrammar() {
    grammar_questions.forEach((item, index) => {
        const itemDiv = document.getElementById(`g${index}`);
        const select = itemDiv.querySelector('select');
        const solutionDiv = itemDiv.querySelector('.solution-box');
        
        select.classList.remove('correct-input', 'incorrect-input');
        if (select.value === item.answer) {
            select.classList.add('correct-input');
        } else {
            select.classList.add('incorrect-input');
        }
        solutionDiv.style.display = 'block';
    });
}

let currentSpellingIndex = -1;
function showNextSpellingNumberCard() {
    const container = document.getElementById('spelling-number-container');
    if(!container) return;
    currentSpellingIndex = (currentSpellingIndex + 1) % spelling_number_prompts.length;
    const cardData = spelling_number_prompts[currentSpellingIndex];
    
    container.innerHTML = `
        <div class="speaking-card">
            <p class="theme">Task: ${cardData.type === 'spell' ? 'Buchstabieren' : 'Zahlen sagen'}</p>
            <p class="word">${cardData.prompt}</p>
            <input type="text" class="speaking-input" placeholder="Type your answer here...">
        </div>
    `;
}

let currentSpeakingCardIndex = -1;
function showNextSpeakingCard() {
    const container = document.getElementById('speaking-flashcard-container');
    if(!container) return;
    currentSpeakingCardIndex = (currentSpeakingCardIndex + 1) % speaking_cards.length;
    const cardData = speaking_cards[currentSpeakingCardIndex];
    
    container.innerHTML = `
        <div class="speaking-card flashcard" onclick="this.classList.toggle('is-flipped')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p class="theme">Thema: ${cardData.theme}</p>
                    <p class="word">${cardData.word}</p>
                    <span class="instruction">(Formulate a question)</span>
                </div>
                <div class="flashcard-back">
                     <p class="theme">Example Question:</p>
                     <p class="solution">${cardData.exampleQuestion}</p>
                </div>
            </div>
        </div>
    `;
}

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for buttons
    document.getElementById('check-email-btn')?.addEventListener('click', () => {
        document.getElementById('email-solution').classList.toggle('visible');
    });
    document.getElementById('check-form-btn')?.addEventListener('click', checkForm);
    document.getElementById('check-grammar-btn')?.addEventListener('click', checkGrammar);
    document.getElementById('next-speaking-card-btn')?.addEventListener('click', showNextSpeakingCard);
    document.getElementById('next-spelling-number-btn')?.addEventListener('click', showNextSpellingNumberCard);

    // Initial population of dynamic content
    createReadingQuiz();
    createGrammarExercise();
    showNextSpeakingCard();
    showNextSpellingNumberCard();
});

// --- Add this function to the global script.js or keep it here ---
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

// Call it on this page as well
document.addEventListener('DOMContentLoaded', handleMobileMenu);