document.addEventListener('DOMContentLoaded', function() {

    // --- INTERACTIVE EXERCISE: LESEN (READING) ---
    const checkLesenBtn = document.getElementById('check-lesen-btn');
    if (checkLesenBtn) {
        checkLesenBtn.addEventListener('click', function() {
            const questions = document.querySelectorAll('#lesen-übung .quiz-options');
            
            const groupedLabels = {};
            questions.forEach(q => {
                const radios = q.querySelectorAll('input[type="radio"]');
                radios.forEach(radio => {
                    const name = radio.name;
                    if (!groupedLabels[name]) { groupedLabels[name] = []; }
                    groupedLabels[name].push(radio.parentElement);
                });
            });

            for (const name in groupedLabels) {
                let isCorrect = false;
                let isIncorrect = false;
                
                groupedLabels[name].forEach(label => {
                    const radio = label.querySelector('input');
                    label.classList.remove('correct', 'incorrect');
                    if (radio.checked) {
                        if (radio.hasAttribute('data-correct')) isCorrect = true;
                        else isIncorrect = true;
                    }
                });

                groupedLabels[name].forEach(label => {
                    const radio = label.querySelector('input');
                    if (radio.checked) {
                        if (isCorrect) label.classList.add('correct');
                        else if (isIncorrect) label.classList.add('incorrect');
                    }
                    if (isIncorrect && radio.hasAttribute('data-correct')) {
                        label.classList.add('correct');
                    }
                });
            }
        });
    }

    // --- INTERACTIVE EXERCISE: FORMULAR AUSFÜLLEN ---
    const checkFormularBtn = document.getElementById('check-formular-btn');
    if (checkFormularBtn) {
        checkFormularBtn.addEventListener('click', function() {
            const inputs = document.querySelectorAll('#formular-übung input[type="text"]');
            inputs.forEach(input => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = input.dataset.answer.toLowerCase();
                const feedbackSpan = input.nextElementSibling;

                input.classList.remove('correct-input', 'incorrect-input');
                feedbackSpan.classList.remove('correct', 'incorrect');
                
                if (userAnswer === correctAnswer) {
                    input.classList.add('correct-input');
                    feedbackSpan.classList.add('correct');
                    feedbackSpan.textContent = '✔ Correct';
                } else {
                    input.classList.add('incorrect-input');
                    feedbackSpan.classList.add('incorrect');
                    feedbackSpan.textContent = '✖ Incorrect';
                }
            });
        });
    }

    // --- FUNCTION TO HANDLE TOGGLING SOLUTIONS ---
    function setupSolutionToggle(buttonId, solutionId) {
        const showSolutionBtn = document.getElementById(buttonId);
        const solutionBox = document.getElementById(solutionId);
        
        if (showSolutionBtn && solutionBox) {
            showSolutionBtn.addEventListener('click', function() {
                solutionBox.classList.toggle('visible');
                if (solutionBox.classList.contains('visible')) {
                    showSolutionBtn.textContent = 'Hide Sample Solution';
                } else {
                    showSolutionBtn.textContent = 'Show Sample Solution';
                }
            });
        }
    }

    // --- SETUP TOGGLES FOR BOTH EMAIL EXERCISES ---
    setupSolutionToggle('show-solution-btn-1', 'email-solution-1');
    setupSolutionToggle('show-solution-btn-2', 'email-solution-2');

});