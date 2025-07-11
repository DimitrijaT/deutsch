// --- DATA FOR EXAM PREP PAGE ---

const grammar_questions = [
    { sentence: "Ihr kannt sehr gut tanzen.", answer: "Ihr könnt sehr gut tanzen." },
    { sentence: "Ich könne wirklich toll singen.", answer: "Ich kann wirklich toll singen." },
    { sentence: "Ich wolle nicht Tennis spielen.", answer: "Ich will nicht Tennis spielen." },
    { sentence: "Das Fest fängt am 13 Uhr an.", answer: "Das Fest fängt um 13 Uhr an." },
    { sentence: "Sieht ihr am Abend gern fern?", answer: "Seht ihr am Abend gern fern?" },
    { sentence: "Heute kaufen wir im Supermarkt auf.", answer: "Heute kaufen wir im Supermarkt ein." },
    { sentence: "Timo ist gestern im Kino gewesen.", answer: "Timo war gestern im Kino." },
    { sentence: "Im Wochenende spiele ich Fußball.", answer: "Am Wochenende spiele ich Fußball." },
    { sentence: "Er möchtet Pizza essen.", answer: "Er möchte Pizza essen." },
    { sentence: "Ich habe einen Laptop und zwei Maus.", answer: "Ich habe einen Laptop und zwei Mäuse." }
];

const speaking_cards_theme = [
    { theme: "Essen & Trinken", word: "Frühstück", solution: "Was isst du gern zum Frühstück?" },
    { theme: "Freizeit", word: "Wochenende", solution: "Was machst du am Wochenende?" },
    { theme: "Wohnen", word: "Garten", solution: "Haben Sie einen Garten?" },
    { theme: "Sport", word: "Fahrrad", solution: "Fährst du oft Fahrrad?" },
    { theme: "Beruf", word: "arbeiten", solution: "Wo arbeiten Sie?" },
    { theme: "Einkaufen", word: "kosten", solution: "Was kostet der Apfel?" },
    { theme: "Reisen", word: "Urlaub", solution: "Wohin fährst du im Urlaub?" }
];

const speaking_cards_image = [
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/A_glass_of_water.jpg/800px-A_glass_of_water.jpg", alt: "Glas Wasser", solution: "Kann ich bitte ein Glas Wasser haben?" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Open_book_on_a_table.jpg/1280px-Open_book_on_a_table.jpg", alt: "Offenes Buch", solution: "Können Sie das bitte buchstabieren?" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Penne_with_pesto.jpg/1280px-Penne_with_pesto.jpg", alt: "Teller Nudeln", solution: "Können wir bitte zahlen?" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gesloten_deur.jpg/800px-Gesloten_deur.jpg", alt: "Geschlossene Tür", solution: "Können Sie bitte die Tür zumachen?" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Stift-Bleistift-Pencil-2.jpg/1280px-Stift-Bleistift-Pencil-2.jpg", alt: "Stift", solution: "Haben Sie einen Kugelschreiber?" }
];

// --- EVENT LISTENERS AND FUNCTIONS FOR EXAM PREP PAGE ---

document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the exam prep page
    if (document.querySelector('.exam-task')) {
        initializeExamPage();
    }
});

function initializeExamPage() {
    // Email Button
    const checkEmailBtn = document.getElementById('check-email-btn');
    if (checkEmailBtn) {
        checkEmailBtn.addEventListener('click', () => {
            document.getElementById('email-solution').style.display = 'block';
        });
    }

    // Form Button
    const checkFormBtn = document.getElementById('check-form-btn');
    if (checkFormBtn) {
        checkFormBtn.addEventListener('click', checkForm);
    }

    // Grammar Section
    populateGrammarSection();
    const checkGrammarBtn = document.getElementById('check-grammar-btn');
    if(checkGrammarBtn) {
        // We use the globally defined checkGrammar function here
        checkGrammarBtn.addEventListener('click', checkGrammar);
    }

    // Self Introduction Button
    const selfIntroBtn = document.getElementById('show-self-intro-solution');
    if(selfIntroBtn) {
        selfIntroBtn.addEventListener('click', () => {
             document.getElementById('self-intro-solution').style.display = 'block';
        });
    }

    // Speaking Cards
    const nextSpeakingCardBtn = document.getElementById('next-speaking-card-btn');
    if (nextSpeakingCardBtn) {
        showRandomSpeakingCard(); // Show one initially
        nextSpeakingCardBtn.addEventListener('click', showRandomSpeakingCard);
    }
    
    // Speaking Image Cards
    const nextSpeakingImageBtn = document.getElementById('next-speaking-image-btn');
    if (nextSpeakingImageBtn) {
        showRandomSpeakingImageCard(); // Show one initially
        nextSpeakingImageBtn.addEventListener('click', showRandomSpeakingImageCard);
    }
}

function checkForm() {
    const solutions = {
        'form-name': "Kawalski, Nina",
        'form-persons': "1",
        'form-children': "0",
        'location': "Berlin",
        'hotel': "Nein",
        'duration': "14 Tage"
    };

    for (const id in solutions) {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'text') {
                if (element.value.trim().toLowerCase() === solutions[id].toLowerCase()) {
                    element.className = 'correct-input';
                } else {
                    element.className = 'incorrect-input';
                    if(!element.parentElement.querySelector('.solution-text')) {
                       const sol = document.createElement('span');
                       sol.className = 'solution-text';
                       sol.style.color = 'var(--success-color)';
                       sol.textContent = `  (Richtige Antwort: ${solutions[id]})`;
                       element.parentElement.appendChild(sol);
                    }
                }
            }
        }
    }
    // Check radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if(radio.checked && radio.value === solutions[radio.name]) {
            radio.parentElement.classList.add('correct-radio');
        } else if (radio.value === solutions[radio.name]) {
            // Highlight the correct answer even if not selected
            radio.parentElement.classList.add('correct-radio');
        }
    });
}

function populateGrammarSection() {
    const container = document.getElementById('grammar-container');
    if (!container) return;

    grammar_questions.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'grammar-item';
        itemDiv.id = `g${index}`;
        itemDiv.innerHTML = `
            <p>${index + 1}. ${item.sentence}</p>
            <input type="text" placeholder="Schreiben Sie den korrekten Satz hier...">
            <div class="grammar-solution" style="display:none;"></div>
        `;
        container.appendChild(itemDiv);
    });
}

function showRandomSpeakingCard() {
    const container = document.getElementById('speaking-flashcard-container');
    if (!container) return;

    const randomIndex = Math.floor(Math.random() * speaking_cards_theme.length);
    const cardData = speaking_cards_theme[randomIndex];

    container.innerHTML = `
        <div class="speaking-card">
            <div class="theme">${cardData.theme}</div>
            <div class="word">${cardData.word}</div>
            <div class="solution" style="display:none;">Mögliche Frage: "${cardData.solution}"</div>
            <button class="quiz-check-btn solution-btn">Lösung anzeigen</button>
        </div>
    `;
    container.querySelector('.solution-btn').addEventListener('click', (e) => {
        e.target.style.display = 'none'; // Hide button
        container.querySelector('.solution').style.display = 'block'; // Show solution
    });
}

function showRandomSpeakingImageCard() {
    const container = document.getElementById('speaking-image-card-container');
    if (!container) return;

    const randomIndex = Math.floor(Math.random() * speaking_cards_image.length);
    const cardData = speaking_cards_image[randomIndex];

    container.innerHTML = `
        <div class="speaking-card">
            <img src="${cardData.image}" alt="${cardData.alt}">
            <div class="solution" style="display:none;">Mögliche Bitte: "${cardData.solution}"</div>
            <button class="quiz-check-btn solution-btn">Lösung anzeigen</button>
        </div>
    `;
    container.querySelector('.solution-btn').addEventListener('click', (e) => {
        e.target.style.display = 'none'; // Hide button
        container.querySelector('.solution').style.display = 'block'; // Show solution
    });
}