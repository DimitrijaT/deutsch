const flashcard_store = {
    k1: [
        { front: "Wie heißt du?", back: "What's your name? (informal)" }, { front: "Woher kommst du?", back: "Where are you from?" }, { front: "Ich wohne in Berlin.", back: "I live in Berlin." }, { front: "Wie heißen Sie?", back: "What's your name? (formal)" }, { front: "Guten Tag!", back: "Hello! / Good day!" }, { front: "Tschüs!", back: "Bye! (informal)" }, { front: "Wie geht es Ihnen?", back: "How are you? (formal)" }, { front: "Danke, gut. Und dir?", back: "Thanks, good. And you? (informal)" }
    ],
    k2: [
        { front: "der Beruf, die Berufe", back: "Profession, Professions" }, { front: "Was sind Sie von Beruf?", back: "What is your profession?" }, { front: "Ich arbeite als...", back: "I work as a..." }, { front: "verheiratet / ledig", back: "married / single" }, { front: "der Bleistift, die Bleistifte", back: "pencil, pencils" }, { front: "das Buch, die Bücher", back: "book, books" }, { front: "der Artikel, die Artikel", back: "article, articles" }, { front: "Er ist nicht in Hamburg.", back: "He is not in Hamburg." }
    ],
    k3: [
        { front: "Was machst du gern?", back: "What do you like to do?" }, { front: "Ich spiele gern Fußball.", back: "I like to play football." }, { front: "Hast du am Montag Zeit?", back: "Do you have time on Monday?" }, { front: "am Montag / um 8 Uhr", back: "on Monday / at 8 o'clock" }, { front: "der Rucksack", back: "the backpack" }, { front: "ein Rucksack", back: "a backpack" }, { front: "kein Rucksack", back: "no backpack" }, { front: "die Wochentage", back: "the days of the week" }
    ],
    k4: [
        { front: "Ich nehme einen Kaffee.", back: "I'll take a coffee." }, { front: "Was möchten Sie trinken?", back: "What would you like to drink?" }, { front: "Nominativ vs. Akkusativ", back: "der -> den (maskulin)" }, { front: "Zahlen, bitte!", back: "The bill, please!" }, { front: "Wie spät ist es?", back: "What time is it?" }, { front: "Es ist halb drei.", back: "It's half past two (2:30)." }, { front: "Es gibt einen Park.", back: "There is a park." }, { front: "von 9 bis 17 Uhr", back: "from 9 to 5 o'clock" }
    ],
    k5: [
        { front: "das Obst / das Gemüse", back: "the fruit / the vegetable" }, { front: "Ich mag Käse.", back: "I like cheese." }, { front: "Du isst einen Apfel.", back: "You eat an apple." }, { front: "ein Kilo Äpfel", back: "a kilo of apples" }, { front: "eine Flasche Wasser", back: "a bottle of water" }, { front: "Was kostet das?", back: "How much does that cost?" }, { front: "Imperativ: Gib!", back: "Imperative: Give! (du-form)" }, { front: "Imperativ: Geben Sie!", back: "Imperative: Give! (Sie-form)" }
    ],
    k6: [
        { front: "Ich muss arbeiten.", back: "I have to work." }, { front: "Er will schlafen.", back: "He wants to sleep." }, { front: "Sie kann gut kochen.", back: "She can cook well." }, { front: "immer / oft / nie", back: "always / often / never" }, { front: "der Monat, die Monate", back: "the month, the months" }, { front: "die Jahreszeit", back: "the season" }, { front: "Wann ist der Termin?", back: "When is the appointment?" }, { front: "am ersten Mai", back: "on the first of May" }
    ],
    k7: [
        { front: "Ich sehe ihn.", back: "I see him. (er -> ihn)" }, { front: "Sie fragt mich.", back: "She asks me. (ich -> mich)" }, { front: "einkaufen (trennbar)", back: "Ich kaufe ein." }, { front: "anrufen (trennbar)", back: "Er ruft an." }, { front: "Ich lade dich ein.", back: "I invite you." }, { front: "Danke für die Einladung.", back: "Thanks for the invitation." }, { front: "Ich komme gern.", back: "I'd love to come." }, { front: "Ich kann leider nicht.", back: "Unfortunately, I can't." }
    ],
    k8: [
        { front: "die Wohnung", back: "the apartment" }, { front: "das Wohnzimmer", back: "the living room" }, { front: "der Tisch, die Tische", back: "the table, the tables" }, { front: "mein Tisch (Nominativ)", back: "my table" }, { front: "Ich suche meinen Tisch (Akkusativ)", back: "I'm looking for my table" }, { front: "sein Auto / ihr Auto", back: "his car / her car" }, { front: "Wie gefällt dir das?", back: "How do you like that?" }, { front: "Das ist zu teuer.", back: "That is too expensive." }
    ],
    k9: [
        { front: "Präteritum von 'sein'", back: "ich war, du warst, er war..." }, { front: "Präteritum von 'haben'", back: "ich hatte, du hattest, er hatte..." }, { front: "Gestern war ich krank.", back: "Yesterday I was sick." }, { front: "Wir hatten viel Spaß.", back: "We had a lot of fun." }, { front: "Das war sehr schön.", back: "That was very nice." }, { front: "Liebe Grüße", back: "Best regards" }, { front: "Carolines Kamera", back: "Caroline's camera" }, { front: "Danke für das Wochenende.", back: "Thanks for the weekend." }
    ]
};

const quiz_store = {
    k1: [{ question: "You meet your new, older boss. How do you ask for his name?", options: ["Wie heißt du?", "Wie heißen Sie?", "Wie ist dein Name?"], answer: "Wie heißen Sie?" }, { question: "Which sentence is correct for 'I speak German'?", options: ["Ich sprecht Deutsch.", "Ich spreche Deutsch.", "Ich sprichst Deutsch."], answer: "Ich spreche Deutsch." }, { question: "How do you say goodbye to a friend informally?", options: ["Gute Nacht!", "Auf Wiedersehen!", "Tschüs!"], answer: "Tschüs!" }],
    k2: [{ question: "What is the correct plural of 'das Buch'?", options: ["die Buchs", "die Buchen", "die Bücher"], answer: "die Bücher" }, { question: "Which sentence correctly negates 'She works in Berlin'?", options: ["Sie nicht arbeitet in Berlin.", "Sie arbeitet nicht in Berlin.", "Nicht sie arbeitet in Berlin."], answer: "Sie arbeitet nicht in Berlin." }, { question: "If a male doctor is 'der Arzt', what is a female doctor?", options: ["die Arztin", "die Ärztin", "die Arzt"], answer: "die Ärztin" }],
    k3: [{ question: "Which phrase means 'I like to swim'?", options: ["Ich schwimme gern.", "Ich gern schwimme.", "Ich mag schwimmen."], answer: "Ich schwimme gern." }, { question: "How do you ask 'Do you have time on Monday?'", options: ["Hast du Zeit am Montag?", "Du hast Zeit am Montag?", "Wann hast du Zeit?"], answer: "Hast du Zeit am Montag?" }, { question: "What is 'no book' in German?", options: ["nicht Buch", "kein Buch", "nein Buch"], answer: "kein Buch" }],
    k4: [{ question: "You want to order 'a coffee'. What do you say?", options: ["Ich nehme ein Kaffee.", "Ich nehme einen Kaffee.", "Ich nehme den Kaffee."], answer: "Ich nehme einen Kaffee." }, { question: "What does 'halb neun' mean?", options: ["9:30", "8:30", "9:00"], answer: "8:30" }, { question: "Which sentence is correct?", options: ["Es gibt ein Kino.", "Es gibt einen Kino.", "Es gibt dem Kino."], answer: "Es gibt ein Kino." }],
    k5: [{ question: "Which verb is irregular?", options: ["kaufen", "sagen", "essen"], answer: "essen" }, { question: "What is the correct 'du' command for 'geben' (to give)?", options: ["Gebe!", "Gibst!", "Gib!"], answer: "Gib!" }, { question: "How do you say 'a bottle of milk'?", options: ["eine Flasche Milch", "ein Flasche Milch", "einen Flasche Milch"], answer: "eine Flasche Milch" }],
    k6: [{ question: "Complete the sentence: Ich ___ morgen arbeiten.", options: ["will", "muss", "kann"], answer: "muss" }, { question: "How do you write 'on the 20th of May'?", options: ["am zwanzigste Mai", "am zwanzigsten Mai", "am zwanzigster Mai"], answer: "am zwanzigsten Mai" }, { question: "Rearrange into a correct sentence: 'oft / am Abend / er / fernsieht'.", options: ["Er oft fernsieht am Abend.", "Am Abend oft fernsieht er.", "Er sieht am Abend oft fern."], answer: "Er sieht am Abend oft fern." }],
    k7: [{ question: "How do you say 'I'm calling you (dich)'?", options: ["Ich rufe dich an.", "Ich anrufe dich.", "Dich rufe ich an."], answer: "Ich rufe dich an." }, { question: "Which pronoun is the accusative form of 'er'?", options: ["ihm", "ihn", "er"], answer: "ihn" }, { question: "What does 'absagen' mean when responding to an invitation?", options: ["to accept", "to decline", "to thank"], answer: "to decline" }],
    k8: [{ question: "Complete the sentence: Das ist Anna und das ist ___ Auto.", options: ["sein", "ihr", "ihre"], answer: "ihr" }, { question: "What is the correct accusative form: 'Ich suche ______ (mein) Schlüssel.'", options: ["mein", "meine", "meinen"], answer: "meinen" }, { question: "What does 'Das ist zu klein' mean?", options: ["It is not small.", "It is very small.", "It is too small."], answer: "It is too small." }],
    k9: [{ question: "What is the past tense (Präteritum) of 'Ich bin'?", options: ["Ich war", "Ich warst", "Ich hatte"], answer: "Ich war" }, { question: "Complete the sentence: Gestern ___ wir keine Zeit.", options: ["waren", "hatten", "haben"], answer: "hatten" }, { question: "How do you say 'Peter's book'?", options: ["das Buch von Peter", "Peters Buch", "Both are correct"], answer: "Both are correct" }]
};

function handleMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

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

function createQuiz(quizData, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;
    container.innerHTML = '';
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.id = `q-${containerId}-${index}`;
        let optionsHtml = '';
        item.options.forEach(option => {
            optionsHtml += `<label><input type="radio" name="question-${containerId}-${index}" value="${option}">${option}</label>`;
        });
        questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p><div class="quiz-options">${optionsHtml}</div>`;
        container.appendChild(questionDiv);
    });
}

function checkQuiz(chapterId) {
    const quizData = quiz_store[chapterId];
    const containerId = `quiz-container-${chapterId}`;
    if (!quizData) return;
    quizData.forEach((item, index) => {
        const questionDiv = document.getElementById(`q-${containerId}-${index}`);
        const selectedOption = questionDiv.querySelector(`input[name="question-${containerId}-${index}"]:checked`);
        const labels = questionDiv.querySelectorAll('label');
        labels.forEach(label => { label.classList.remove('correct', 'incorrect'); });
        if (selectedOption) {
            if (selectedOption.value === item.answer) {
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                const correctInput = questionDiv.querySelector(`input[value="${item.answer}"]`);
                if(correctInput) { correctInput.parentElement.classList.add('correct'); }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleMobileMenu();
});

// This function needs to be in the global script.js
// because it is used by the checkQuiz function on the exam-prep page.
function checkGrammar() {
    grammar_questions.forEach((item, index) => {
        const itemDiv = document.getElementById(`g${index}`);
        const input = itemDiv.querySelector('input');
        const solutionDiv = itemDiv.querySelector('.grammar-solution');
        
        // This is a simple check. For a real app, a more complex string comparison would be needed.
        if (input.value.trim().toLowerCase().replace(/[.?!]/g, '') === item.answer.toLowerCase().replace(/[.?!]/g, '')) {
            input.classList.add('correct-input');
            input.classList.remove('incorrect-input');
        } else {
            input.classList.add('incorrect-input');
            input.classList.remove('correct-input');
        }

        solutionDiv.innerHTML = `Lösung: ${item.answer}`;
        solutionDiv.style.display = 'block';
    });
}