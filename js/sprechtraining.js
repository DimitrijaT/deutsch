// --- Sprechtraining Data Structure ---
const sprechtData = {
    wohnen: {
        garten: {
            title: "Garten",
            dialogues: [
                { question: "Hast du einen Garten?", answers: ["<span class='positive'>Ja</span>, ich habe einen Garten.", "<span class='negative'>Nein</span>, ich habe keinen Garten."] },
                { question: "Ist dein Garten groß?", answers: ["<span class='positive'>Ja</span>, mein Garten ist groß.", "<span class='negative'>Nein</span>, er ist klein."] },
                { question: "Wie ist dein Garten?", answers: ["Mein Garten ist sehr schön.", "Er ist klein, aber gemütlich."] },
                { question: "Was machst du gern im Garten?", answers: ["Ich lese gern im Garten.", "Ich arbeite gern im Garten."] },
                { question: "Wie groß ist dein Garten?", answers: ["Mein Garten ist 10 Quadratmeter groß.", "Ich habe einen sehr großen Garten."], difficulty: 'hard' }
            ]
        },
        balkon: {
            title: "Balkon",
            dialogues: [
                { question: "Hast du einen Balkon?", answers: ["<span class='positive'>Ja</span>, ich habe einen Balkon.", "<span class='negative'>Nein</span>, ich habe keinen Balkon."] },
                { question: "Ist dein Balkon sonnig?", answers: ["<span class='positive'>Ja</span>, mein Balkon ist sonnig.", "<span class='negative'>Nein</span>, er ist nicht sonnig."] },
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
                { question: "Was machst du gern in der Küche?", answers: ["Ich koche gern in der Küche.", "Ich esse gern in der Küche."], difficulty: 'hard' }
            ]
        },
        bad: {
            title: "Bad",
            dialogues: [
                { question: "Hast du ein Bad?", answers: ["<span class='positive'>Ja</span>, ich habe ein Bad.", "<span class='negative'>Nein</span>, ich habe kein Bad."] },
                { question: "Gibt es eine Dusche im Bad?", answers: ["<span class='positive'>Ja</span>, es gibt eine Dusche.", "<span class='negative'>Nein</span>, es gibt nur eine Badewanne."] },
                { question: "Ist dein Bad modern?", answers: ["<span class='positive'>Ja</span>, mein Bad ist sehr modern.", "<span class='negative'>Nein</span>, es ist ein bisschen alt."] },
                { question: "Wie viele Badezimmer hast du?", answers: ["Ich habe ein Badezimmer.", "Ich habe zwei Badezimmer."], difficulty: 'hard' }
            ]
        },
        wohnzimmer: {
            title: "Wohnzimmer",
            dialogues: [
                { question: "Hast du ein Wohnzimmer?", answers: ["<span class='positive'>Ja</span>, ich habe ein Wohnzimmer.", "<span class='negative'>Nein</span>, ich habe kein Wohnzimmer."] },
                { question: "Ist dein Wohnzimmer gemütlich?", answers: ["<span class='positive'>Ja</span>, mein Wohnzimmer ist sehr gemütlich.", "<span class='negative'>Nein</span>, es ist nicht so gemütlich."] },
                { question: "Ist dein Wohnzimmer groß oder klein?", answers: ["Mein Wohnzimmer ist groß.", "Es ist klein, aber sehr gemütlich."] },
                { question: "Was machst du gern im Wohnzimmer?", answers: ["Ich schaue gern Filme im Wohnzimmer.", "Ich entspanne mich gern dort."] },
                { question: "Was gibt es in deinem Wohnzimmer?", answers: ["In meinem Wohnzimmer gibt es ein großes Sofa und einen Fernseher.", "Es gibt auch ein Regal und viele Bücher."], difficulty: 'hard' }
            ]
        },
        möbel: {
            title: "Möbel",
            dialogues: [
                { question: "Hast du einen Tisch?", answers: ["<span class='positive'>Ja</span>, ich habe einen Tisch.", "<span class='negative'>Nein</span>, ich habe keinen Tisch."] },
                { question: "Ist dein Bett bequem?", answers: ["<span class='positive'>Ja</span>, mein Bett ist sehr bequem.", "<span class='negative'>Nein</span>, es ist nicht so bequem."] },
                { question: "Ist dein Sofa neu oder alt?", answers: ["Mein Sofa ist neu.", "Es ist alt, aber bequem."] },
                { question: "Welche Möbel hast du im Schlafzimmer?", answers: ["Ich habe ein Bett, einen Kleiderschrank und zwei Nachttische.", "Es gibt nur ein Bett und einen Stuhl."], difficulty: 'hard' },
                { question: "Wie findest du deine Möbel?", answers: ["Ich finde meine Möbel sehr schön und praktisch.", "Sie sind okay, aber ich möchte neue."], difficulty: 'hard' }
            ]
        },
        wohnung_haus: {
            title: "Wohnung / Haus",
            dialogues: [
                { question: "Wohnst du in einer Wohnung oder einem Haus?", answers: ["Ich wohne in einer Wohnung.", "Ich wohne in einem Haus."] },
                { question: "Ist deine Wohnung neu?", answers: ["<span class='positive'>Ja</span>, meine Wohnung ist neu.", "<span class='negative'>Nein</span>, sie ist alt."] },
                { question: "Wie viele Zimmer hat deine Wohnung?", answers: ["Meine Wohnung hat drei Zimmer.", "Mein Haus hat fünf Zimmer."] },
                { question: "Ist deine Wohnung teuer?", answers: ["<span class='positive'>Ja</span>, die Miete ist teuer.", "<span class='negative'>Nein</span>, sie ist günstig."] },
                { question: "Wie gefällt dir deine Wohnung?", answers: ["Meine Wohnung gefällt mir sehr gut!", "Mein Haus ist okay, aber ich suche ein neues."], difficulty: 'hard' }
            ]
        }
    },
    essen_trinken: {
        obst: {
            title: "Obst",
            dialogues: [
                { question: "Magst du Äpfel?", answers: ["<span class='positive'>Ja</span>, ich mag Äpfel.", "<span class='negative'>Nein</span>, ich mag keine Äpfel."] },
                { question: "Isst du gern Obst?", answers: ["<span class='positive'>Ja</span>, ich esse sehr gern Obst.", "<span class='negative'>Nein</span>, ich esse nicht gern Obst."] },
                { question: "Wo kaufst du Obst?", answers: ["Ich kaufe Obst im Supermarkt.", "Ich kaufe es auf dem Markt."] },
                { question: "Welches Obst magst du am liebsten?", answers: ["Ich mag Äpfel und Bananen am liebsten.", "Ich liebe Orangen!"], difficulty: 'hard' },
                { question: "Was kostet ein Kilo Äpfel?", answers: ["Ein Kilo Äpfel kostet 2 Euro 50.", "Es kostet 2 Euro 50 Cent."], difficulty: 'hard' }
            ]
        },
        gemüse: {
            title: "Gemüse",
            dialogues: [
                { question: "Magst du Tomaten?", answers: ["<span class='positive'>Ja</span>, ich mag Tomaten.", "<span class='negative'>Nein</span>, ich mag keine Tomaten."] },
                { question: "Isst du gern Gemüse?", answers: ["<span class='positive'>Ja</span>, ich esse gern Gemüse.", "<span class='negative'>Nein</span>, ich esse nicht so gern Gemüse."] },
                { question: "Welches Gemüse magst du?", answers: ["Ich mag Tomaten und Gurken sehr gern.", "Ich esse gern Paprika und Zwiebeln."] },
                { question: "Brauchst du Kartoffeln für dein Gericht?", answers: ["<span class='positive'>Ja</span>, ich brauche Kartoffeln.", "<span class='negative'>Nein</span>, ich brauche keine Kartoffeln."], difficulty: 'hard' }
            ]
        },
        lieblingsgetränk: {
            title: "Lieblingsgetränk",
            dialogues: [
                { question: "Trinkst du Kaffee?", answers: ["<span class='positive'>Ja</span>, ich trinke Kaffee.", "<span class='negative'>Nein</span>, ich trinke keinen Kaffee."] },
                { question: "Trinkst du gern Cola?", answers: ["<span class='positive'>Ja</span>, ich trinke gern Cola.", "<span class='negative'>Nein</span>, ich trinke lieber Saft."] },
                { question: "Was ist dein Lieblingsgetränk?", answers: ["Mein Lieblingsgetränk ist Wasser.", "Mein Lieblingsgetränk ist Kaffee."] },
                { question: "Wo trinkst du gern einen Kaffee?", answers: ["Ich trinke gern Kaffee im Café.", "Ich trinke ihn zu Hause."], difficulty: 'hard' }
            ]
        },
        frühstück: {
            title: "Frühstück",
            dialogues: [
                { question: "Frühstückst du?", answers: ["<span class='positive'>Ja</span>, ich frühstücke jeden Tag.", "<span class='negative'>Nein</span>, ich frühstücke nicht."] },
                { question: "Isst du Brot zum Frühstück?", answers: ["<span class='positive'>Ja</span>, ich esse Brot.", "<span class='negative'>Nein</span>, ich esse Müsli."] },
                { question: "Wann frühstückst du?", answers: ["Ich frühstücke um 7 Uhr.", "Ich frühstücke am Morgen."] },
                { question: "Was isst du zum Frühstück?", answers: ["Zum Frühstück esse ich Brot mit Käse.", "Ich esse Müsli und Joghurt."] },
                { question: "Was trinkst du zum Frühstück?", answers: ["Ich trinke Tee.", "Ich trinke Orangensaft."], difficulty: 'hard' }
            ]
        },
        fleisch: {
            title: "Fleisch",
            dialogues: [
                { question: "Magst du Hähnchen?", answers: ["<span class='positive'>Ja</span>, ich mag Hähnchen.", "<span class='negative'>Nein</span>, ich mag kein Hähnchen."] },
                { question: "Isst du gern Fleisch?", answers: ["<span class='positive'>Ja</span>, ich esse gern Fleisch.", "<span class='negative'>Nein</span>, ich esse kein Fleisch, ich bin Vegetarier."] },
                { question: "Wo kaufst du Fleisch?", answers: ["Ich kaufe Fleisch in der Metzgerei.", "Ich kaufe es im Supermarkt."] },
                { question: "Was ist dein Lieblingsgericht mit Fleisch?", answers: ["Ich mag Hähnchen mit Reis.", "Ich esse gern Schnitzel."], difficulty: 'hard' }
            ]
        },
        lieblingsessen: {
            title: "Lieblingsessen",
            dialogues: [
                { question: "Magst du Pizza?", answers: ["<span class='positive'>Ja</span>, ich mag Pizza.", "<span class='negative'>Nein</span>, ich mag keine Pizza."] },
                { question: "Kochst du gern?", answers: ["<span class='positive'>Ja</span>, ich koche gern.", "<span class='negative'>Nein</span>, ich koche nicht gern."] },
                { question: "Was ist dein Lieblingsessen?", answers: ["Mein Lieblingsessen ist Pizza.", "Ich liebe Nudeln mit Tomatensoße."] },
                { question: "Kochst du dein Lieblingsessen selbst?", answers: ["<span class='positive'>Ja</span>, ich koche es oft selbst.", "<span class='negative'>Nein</span>, ich bestelle es meistens."], difficulty: 'hard' }
            ]
        },
        brot: {
            title: "Brot",
            dialogues: [
                { question: "Isst du gern Brot?", answers: ["<span class='positive'>Ja</span>, ich esse gern Brot.", "<span class='negative'>Nein</span>, ich esse nicht gern Brot."] },
                { question: "Kaufst du Brot?", answers: ["<span class='positive'>Ja</span>, ich kaufe Brot.", "<span class='negative'>Nein</span>, ich backe es selbst."] },
                { question: "Kaufst du Brot in der Bäckerei?", answers: ["<span class='positive'>Ja</span>, ich kaufe mein Brot in der Bäckerei.", "<span class='negative'>Nein</span>, ich kaufe es im Supermarkt."] },
                { question: "Isst du Brot mit Käse?", answers: ["<span class='positive'>Ja</span>, ich esse gern Brot mit Käse.", "<span class='negative'>Nein</span>, ich esse lieber Brot mit Marmelade."] },
                { question: "Welches Brot magst du?", answers: ["Ich mag Vollkornbrot.", "Ich esse gern Brötchen."], difficulty: 'hard' }
            ]
        }
    },
    freizeit: {
        wochenende: {
            title: "Wochenende",
            dialogues: [
                { question: "Hast du am Wochenende frei?", answers: ["<span class='positive'>Ja</span>, ich habe frei.", "<span class='negative'>Nein</span>, ich muss arbeiten."] },
                { question: "Lernst du am Wochenende?", answers: ["<span class='positive'>Ja</span>, ich lerne Deutsch.", "<span class='negative'>Nein</span>, am Wochenende lerne ich nicht."] },
                { question: "Was machst du gern am Wochenende?", answers: ["Am Wochenende spiele ich gern Volleyball.", "Ich lese gern Bücher."] },
                { question: "Wie war dein letztes Wochenende?", answers: ["Mein letztes Wochenende war sehr entspannend.", "Es war langweilig."], difficulty: 'hard' }
            ]
        },
        hobby: {
            title: "Hobby",
            dialogues: [
                { question: "Hast du ein Hobby?", answers: ["<span class='positive'>Ja</span>, ich habe ein Hobby.", "<span class='negative'>Nein</span>, ich habe kein Hobby."] },
                { question: "Liest du gern?", answers: ["<span class='positive'>Ja</span>, ich lese gern.", "<span class='negative'>Nein</span>, ich lese nicht gern."] },
                { question: "Wann machst du dein Hobby?", answers: ["Ich fotografiere am Wochenende.", "Ich lese jeden Abend."] },
                { question: "Was sind deine Hobbys?", answers: ["Meine Hobbys sind Wandern und Musik hören.", "Ich koche gern und lese."] },
                { question: "Warum machst du dieses Hobby?", answers: ["Ich mache es, weil es Spaß macht.", "Es ist sehr entspannend."], difficulty: 'hard' }
            ]
        },
        sport: {
            title: "Sport",
            dialogues: [
                { question: "Machst du Sport?", answers: ["<span class='positive'>Ja</span>, ich mache Sport.", "<span class='negative'>Nein</span>, ich mache keinen Sport."] },
                { question: "Spielst du Fußball?", answers: ["<span class='positive'>Ja</span>, ich spiele Fußball.", "<span class='negative'>Nein</span>, ich spiele keinen Fußball."] },
                { question: "Welchen Sport machst du gern?", answers: ["Ich spiele gern Fußball.", "Ich schwimme gern."] },
                { question: "Wann machst du Sport?", answers: ["Ich mache Sport am Abend.", "Ich trainiere am Wochenende."], difficulty: 'hard' }
            ]
        },
        freunde: {
            title: "Freunde",
            dialogues: [
                { question: "Hast du Freunde?", answers: ["<span class='positive'>Ja</span>, ich habe Freunde.", "<span class='negative'>Nein</span>, ich habe nicht viele Freunde."] },
                { question: "Triffst du gern Freunde?", answers: ["<span class='positive'>Ja</span>, ich treffe gern Freunde.", "<span class='negative'>Nein</span>, ich bin lieber allein."] },
                { question: "Wie oft triffst du deine Freunde?", answers: ["Ich treffe meine Freunde oft, einmal pro Woche.", "Ich treffe sie selten."] },
                { question: "Was machst du gern mit Freunden?", answers: ["Ich gehe gern ins Kino mit Freunden.", "Wir kochen zusammen."], difficulty: 'hard' }
            ]
        },
        film: {
            title: "Film",
            dialogues: [
                { question: "Magst du Filme?", answers: ["<span class='positive'>Ja</span>, ich mag Filme.", "<span class='negative'>Nein</span>, ich mag keine Filme."] },
                { question: "Gehst du ins Kino?", answers: ["<span class='positive'>Ja</span>, ich gehe ins Kino.", "<span class='negative'>Nein</span>, ich gehe nicht ins Kino."] },
                { question: "Schaust du gern Filme?", answers: ["<span class='positive'>Ja</span>, ich schaue gern Filme.", "<span class='negative'>Nein</span>, ich schaue keine Filme."] },
                { question: "Wann schaust du Filme?", answers: ["Ich schaue Filme am Abend.", "Ich schaue Filme am Wochenende."] },
                { question: "Welches Filmgenre magst du?", answers: ["Ich mag Komödien.", "Ich schaue gern Actionfilme."], difficulty: 'hard' }
            ]
        },
        fahrrad: {
            title: "Fahrrad",
            dialogues: [
                { question: "Hast du ein Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich habe ein Fahrrad.", "<span class='negative'>Nein</span>, ich habe kein Fahrrad."] },
                { question: "Fährst du gern Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich fahre sehr gern Fahrrad.", "<span class='negative'>Nein</span>, das mache ich nicht gern."] },
                { question: "Fährst du oft Fahrrad?", answers: ["<span class='positive'>Ja</span>, ich fahre jeden Tag Fahrrad.", "<span class='negative'>Nein</span>, ich fahre selten Fahrrad."] },
                { question: "Wohin fährst du mit dem Fahrrad?", answers: ["Ich fahre mit dem Fahrrad zur Arbeit.", "Ich mache Radtouren im Park."], difficulty: 'hard' }
            ]
        },
        theater: {
            title: "Theater",
            dialogues: [
                { question: "Magst du Theater?", answers: ["<span class='positive'>Ja</span>, ich mag Theater.", "<span class='negative'>Nein</span>, ich mag kein Theater."] },
                { question: "Gehst du gern ins Theater?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Theater.", "<span class='negative'>Nein</span>, Theater ist nicht mein Ding."] },
                { question: "Gehst du auch gern ins Konzert?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Konzert.", "<span class='negative'>Nein</span>, Konzerte finde ich langweilig."] },
                { question: "Wie findest du Opern?", answers: ["Ich finde Opern sehr interessant.", "Ich mag Opern nicht so sehr."], difficulty: 'hard' }
            ]
        }
    },
    formal_informal: {
        name: {
            title: "Name",
            dialogues: [
                { question: "(Informal) Wie heißt du?", answers: ["Ich heiße Anna.", "Ich bin Anna."] },
                { question: "(Formal) Wie heißen Sie?", answers: ["Ich heiße Frau Meier.", "Mein Name ist Meier."] }
            ]
        },
        alter: {
            title: "Alter (Age)",
            dialogues: [
                { question: "(Informal) Wie alt bist du?", answers: ["Ich bin 25 Jahre alt."] },
                { question: "(Formal) Wie alt sind Sie?", answers: ["Ich bin 40 Jahre alt."] }
            ]
        },
        herkunft: {
            title: "Herkunft (Origin)",
            dialogues: [
                { question: "(Informal) Woher kommst du?", answers: ["Ich komme aus Italien."] },
                { question: "(Formal) Woher kommen Sie?", answers: ["Ich komme aus der Schweiz."] }
            ]
        },
        wohnort: {
            title: "Wohnort (Place of Residence)",
            dialogues: [
                { question: "(Informal) Wo wohnst du?", answers: ["Ich wohne in Berlin."] },
                { question: "(Formal) Wo wohnen Sie?", answers: ["Ich wohne in München."] }
            ]
        },
        sprachen: {
            title: "Sprachen (Languages)",
            dialogues: [
                { question: "(Informal) Welche Sprachen sprichst du?", answers: ["Ich spreche Englisch und ein bisschen Deutsch."] },
                { question: "(Formal) Welche Sprachen sprechen Sie?", answers: ["Ich spreche Französisch, Spanisch und Deutsch."] }
            ]
        },
        beruf: {
            title: "Beruf (Profession)",
            dialogues: [
                { question: "(Informal) Was bist du von Beruf?", answers: ["Ich bin Student.", "Ich arbeite als Lehrer."] },
                { question: "(Formal) Was sind Sie von Beruf?", answers: ["Ich bin Ärztin.", "Ich arbeite als Ingenieur bei Siemens."] }
            ]
        },
        hobby: {
            title: "Hobby",
            dialogues: [
                { question: "(Informal) Was machst du gern?", answers: ["Ich spiele gern Fußball."] },
                { question: "(Formal) Was machen Sie gern in Ihrer Freizeit?", answers: ["Ich lese gern Bücher.", "Ich gehe gern wandern."] }
            ]
        }
    },
    extra_uebungen: {
        essen: {
            title: "Thema: Essen",
            template: {
                question: "A: Isst du gern ___?",
                answers: ["B: <span class='positive'>Ja</span>, ich esse gern ___.", "B: <span class='negative'>Nein</span>, ich esse keine/kein/keinen ___."]
            },
            prompts: ["Banane", "Cola", "Fleisch", "Lieblingsessen", "Lieblingsgetränk", "Obst", "Gemüse"]
        },
        freizeit: {
            title: "Thema: Freizeit",
            template: {
                question: "A: Was machst du gern am ___?",
                answers: ["B: Am ___ spiele ich Volleyball.", "B: Ich treffe gern ___."]
            },
            prompts: ["Wochenende", "Hobby", "Theater", "Sport", "Freunde", "Film", "Fahrrad"]
        },
        wohnen: {
            title: "Thema: Wohnen",
            template: {
                question: "A: Wie ist dein/e ___?",
                answers: ["B: Mein/e ___ ist sehr groß.", "B: Mein/e ___ ist gemütlich."]
            },
            prompts: ["Garten", "Balkon", "Küche", "Bad", "Wohnzimmer", "Wohnung", "Haus"]
        }
    }
};

// --- Sprechtraining Modal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic
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
    const currentPagePath = window.location.pathname.split('/').pop() || 'sprechtraining.html'; // Default to current page if path is empty
    navLinks.forEach(link => {
        if (link.href.includes(currentPagePath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const sprechtModal = document.getElementById('sprechModal');
    const sprechtModalTitle = document.getElementById('sprechModalTitle');
    const sprechtModalBody = document.getElementById('sprechModalBody');
    const sprechtModalClose = document.querySelector('#sprechModal .modal-close');
    const sprechtTriggers = document.querySelectorAll('.sprecht-trigger');

    sprechtTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const topicKey = trigger.dataset.topic;
            const subTopicKey = trigger.dataset.subtopic;

            if (sprechtData[topicKey] && sprechtData[topicKey][subTopicKey]) {
                const data = sprechtData[topicKey][subTopicKey];
                sprechtModalTitle.textContent = data.title;
                sprechtModalBody.innerHTML = ''; // Clear previous content

                // Check for standard dialogue format
                if (data.dialogues) {
                    data.dialogues.forEach(dialogue => {
                        const dialogueDiv = document.createElement('div');
                        dialogueDiv.classList.add('sprech-dialogue');

                        const questionP = document.createElement('p');
                        const questionStrong = document.createElement('strong');
                        // Add class if question is marked as hard
                        if (dialogue.difficulty === 'hard') {
                            questionStrong.classList.add('hard-question');
                        }
                        questionStrong.innerHTML = `Frage (A): ${dialogue.question}`;
                        questionP.appendChild(questionStrong);
                        dialogueDiv.appendChild(questionP);

                        dialogue.answers.forEach(answer => {
                            const answerP = document.createElement('p');
                            answerP.innerHTML = `<strong>Antwort (B):</strong> ${answer}`;
                            dialogueDiv.appendChild(answerP);
                        });
                        sprechtModalBody.appendChild(dialogueDiv);
                    });
                } 
                // Check for "Extra Exercises" format
                else if (data.prompts && data.template) {
                    // Display the template first
                    const templateDiv = document.createElement('div');
                    templateDiv.classList.add('sprech-dialogue');
                    templateDiv.innerHTML = `
                        <p><strong>Beispiel-Struktur:</strong></p>
                        <p>${data.template.question.replace(/___/g, `<strong>[Thema]</strong>`)}</p>
                        <p>${data.template.answers[0].replace(/___/g, `<strong>[Thema]</strong>`)}</p>
                        <p>${data.template.answers[1].replace(/___/g, `<strong>[Thema]</strong>`)}</p>
                    `;
                    sprechtModalBody.appendChild(templateDiv);

                    // Display the prompts
                    const promptsTitle = document.createElement('h4');
                    promptsTitle.textContent = "Gesprächsthemen (Prompts):";
                    promptsTitle.style.marginTop = 'var(--spacing-lg)';
                    sprechtModalBody.appendChild(promptsTitle);

                    const promptsList = document.createElement('ul');
                    promptsList.classList.add('modal-prompts-list');
                    data.prompts.forEach(prompt => {
                        const listItem = document.createElement('li');
                        listItem.textContent = prompt;
                        promptsList.appendChild(listItem);
                    });
                    sprechtModalBody.appendChild(promptsList);
                }

                sprechtModal.style.display = 'block';
            }
        });
    });

    if (sprechModalClose) {
        sprechModalClose.addEventListener('click', () => {
            sprechModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === sprechtModal) {
            sprechtModal.style.display = 'none';
        }
    });
});

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