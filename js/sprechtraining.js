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
                { question: "What do you like to do on the balcony?", answers: ["Ich trinke gern Kaffee auf dem Balkon.", "Ich sitze gern dort und lese."] }
            ]
        },
        küche: {
            title: "Küche",
            dialogues: [
                { question: "Hast du eine Küche?", answers: ["<span class='positive'>Ja</span>, ich habe eine Küche.", "<span class='negative'>Nein</span>, ich habe keine Küche."] },
                { question: "Ist deine Küche hell?", answers: ["<span class='positive'>Ja</span>, meine Küche ist hell.", "<span class='negative'>Nein</span>, sie ist ein bisschen dunkel."] },
                { question: "Wie ist deine Küche?", answers: ["Meine Küche ist modern und hell.", "Sie ist klein, aber praktisch."] },
                { question: "Gibt es einen Herd und einen Kühlschrank in deiner Küche?", answers: ["<span class='positive'>Ja</span>, es gibt alles.", "<span class='negative'>Nein</span>, ich habe keinen Herd."] },
                { question: "What do you like to do in the kitchen?", answers: ["Ich koche gern in der Küche.", "Ich esse gern in der Küche."], difficulty: 'hard' }
            ]
        },
        bad: {
            title: "Bad",
            dialogues: [
                { question: "Hast du ein Bad?", answers: ["<span class='positive'>Ja</span>, ich habe ein Bad.", "<span class='negative'>Nein</span>, ich habe kein Bad."] },
                { question: "Gibt es eine Dusche im Bad?", answers: ["<span class='positive'>Ja</span>, es gibt eine Dusche.", "<span class='negative'>Nein</span>, es gibt only a bathtub."] },
                { question: "Is your bathroom modern?", answers: ["<span class='positive'>Ja</span>, mein Bad ist sehr modern.", "<span class='negative'>Nein</span>, es ist ein bisschen alt."] },
                { question: "How many bathrooms do you have?", answers: ["Ich habe ein Badezimmer.", "Ich habe zwei Badezimmer."], difficulty: 'hard' }
            ]
        },
        wohnzimmer: {
            title: "Wohnzimmer",
            dialogues: [
                { question: "Hast du ein Wohnzimmer?", answers: ["<span class='positive'>Ja</span>, ich habe ein Wohnzimmer.", "<span class='negative'>Nein</span>, ich habe kein Wohnzimmer."] },
                { question: "Is your living room cozy?", answers: ["<span class='positive'>Ja</span>, mein Wohnzimmer ist sehr gemütlich.", "<span class='negative'>Nein</span>, es ist nicht so gemütlich."] },
                { question: "Is your living room big or small?", answers: ["Mein Wohnzimmer ist groß.", "Es ist klein, aber sehr gemütlich."] },
                { question: "What do you like to do in the living room?", answers: ["Ich schaue gern Filme im Wohnzimmer.", "Ich entspanne mich gern dort."] },
                { question: "What is there in your living room?", answers: ["In meinem Wohnzimmer gibt es ein großes Sofa und einen Fernseher.", "Es gibt auch ein Regal und viele Bücher."], difficulty: 'hard' }
            ]
        },
        möbel: {
            title: "Möbel",
            dialogues: [
                { question: "Hast du einen Tisch?", answers: ["<span class='positive'>Ja</span>, ich habe einen Tisch.", "<span class='negative'>Nein</span>, ich habe keinen Tisch."] },
                { question: "Is your bed comfortable?", answers: ["<span class='positive'>Ja</span>, mein Bett ist sehr bequem.", "<span class='negative'>Nein</span>, es ist not so comfortable."] },
                { question: "Is your sofa new or old?", answers: ["Mein Sofa ist neu.", "Es ist alt, aber bequem."] },
                { question: "What furniture do you have in the bedroom?", answers: ["Ich habe ein Bett, einen Kleiderschrank und zwei Nachttische.", "Es gibt only a bed and a chair."], difficulty: 'hard' },
                { question: "How do you find your furniture?", answers: ["Ich finde meine Möbel sehr schön und praktisch.", "Sie sind okay, aber ich möchte neue."], difficulty: 'hard' }
            ]
        },
        wohnung_haus: {
            title: "Wohnung / Haus",
            dialogues: [
                { question: "Do you live in an apartment or a house?", answers: ["Ich wohne in einer Wohnung.", "Ich wohne in einem Haus."] },
                { question: "Is your apartment new?", answers: ["<span class='positive'>Ja</span>, meine Wohnung ist neu.", "<span class='negative'>Nein</span>, sie ist alt."] },
                { question: "How many rooms does your apartment have?", answers: ["Meine Wohnung hat drei Zimmer.", "Mein Haus hat fünf Zimmer."] },
                { question: "Is your apartment expensive?", answers: ["<span class='positive'>Ja</span>, die Miete ist teuer.", "<span class='negative'>Nein</span>, sie ist günstig."] },
                { question: "How do you like your apartment?", answers: ["Meine Wohnung gefällt mir sehr gut!", "Mein Haus ist okay, aber ich suche ein neues."], difficulty: 'hard' }
            ]
        }
    },
    essen_trinken: {
        obst: {
            title: "Obst",
            dialogues: [
                { question: "Do you like apples?", answers: ["<span class='positive'>Ja</span>, ich mag Äpfel.", "<span class='negative'>Nein</span>, ich mag keine Äpfel."] },
                { question: "Do you like to eat fruit?", answers: ["<span class='positive'>Ja</span>, ich esse sehr gern Obst.", "<span class='negative'>Nein</span>, ich esse nicht gern Obst."] },
                { question: "Where do you buy fruit?", answers: ["Ich kaufe Obst im Supermarkt.", "Ich kaufe es auf dem Markt."] },
                { question: "Which fruit do you like the most?", answers: ["Ich mag Äpfel und Bananen am liebsten.", "Ich liebe Orangen!"], difficulty: 'hard' },
                { question: "How much does a kilo of apples cost?", answers: ["Ein Kilo Äpfel kostet 2 Euro 50.", "Es kostet 2 Euro 50 Cent."], difficulty: 'hard' }
            ]
        },
        gemüse: {
            title: "Gemüse",
            dialogues: [
                { question: "Do you like tomatoes?", answers: ["<span class='positive'>Ja</span>, ich mag Tomaten.", "<span class='negative'>Nein</span>, ich mag keine Tomaten."] },
                { question: "Do you like to eat vegetables?", answers: ["<span class='positive'>Ja</span>, ich esse gern Gemüse.", "<span class='negative'>Nein</span>, ich esse nicht so gern Gemüse."] },
                { question: "Which vegetables do you like?", answers: ["Ich mag Tomaten und Gurken sehr gern.", "Ich esse gern Paprika und Zwiebeln."] },
                { question: "Do you need potatoes for your dish?", answers: ["<span class='positive'>Ja</span>, ich brauche Kartoffeln.", "<span class='negative'>Nein</span>, ich brauche keine Kartoffeln."], difficulty: 'hard' }
            ]
        },
        lieblingsgetränk: {
            title: "Lieblingsgetränk",
            dialogues: [
                { question: "Do you drink coffee?", answers: ["<span class='positive'>Ja</span>, ich trinke Kaffee.", "<span class='negative'>Nein</span>, ich trinke keinen Kaffee."] },
                { question: "Do you like to drink Coke?", answers: ["<span class='positive'>Ja</span>, ich trinke gern Cola.", "<span class='negative'>Nein</span>, ich trinke lieber Saft."] },
                { question: "What is your favorite drink?", answers: ["Mein Lieblingsgetränk ist Wasser.", "Mein Lieblingsgetränk ist Kaffee."] },
                { question: "Where do you like to drink coffee?", answers: ["Ich trinke gern Kaffee im Café.", "Ich trinke ihn zu Hause."], difficulty: 'hard' }
            ]
        },
        frühstück: {
            title: "Frühstück",
            dialogues: [
                { question: "Do you have breakfast?", answers: ["<span class='positive'>Ja</span>, ich frühstücke jeden Tag.", "<span class='negative'>Nein</span>, ich frühstücke nicht."] },
                { question: "Do you eat bread for breakfast?", answers: ["<span class='positive'>Ja</span>, ich esse Brot.", "<span class='negative'>Nein</span>, ich esse Müsli."] },
                { question: "When do you have breakfast?", answers: ["Ich frühstücke um 7 Uhr.", "Ich frühstücke am Morgen."] },
                { question: "What do you eat for breakfast?", answers: ["Zum Frühstück esse ich Brot mit Käse.", "Ich esse Müsli und Joghurt."] },
                { question: "What do you drink for breakfast?", answers: ["Ich trinke Tee.", "Ich trinke Orangensaft."], difficulty: 'hard' }
            ]
        },
        fleisch: {
            title: "Fleisch",
            dialogues: [
                { question: "Do you like chicken?", answers: ["<span class='positive'>Ja</span>, ich mag Hähnchen.", "<span class='negative'>Nein</span>, ich mag kein Hähnchen."] },
                { question: "Do you like to eat meat?", answers: ["<span class='positive'>Ja</span>, ich esse gern Fleisch.", "<span class='negative'>Nein</span>, ich esse kein Fleisch, ich bin Vegetarier."] },
                { question: "Where do you buy meat?", answers: ["Ich kaufe Fleisch in der Metzgerei.", "Ich kaufe es im Supermarkt."] },
                { question: "What is your favorite dish with meat?", answers: ["Ich mag Hähnchen mit Reis.", "Ich esse gern Schnitzel."], difficulty: 'hard' }
            ]
        },
        lieblingsessen: {
            title: "Lieblingsessen",
            dialogues: [
                { question: "Do you like pizza?", answers: ["<span class='positive'>Ja</span>, ich mag Pizza.", "<span class='negative'>Nein</span>, ich mag keine Pizza."] },
                { question: "Do you like to cook?", answers: ["<span class='positive'>Ja</span>, ich koche gern.", "<span class='negative'>Nein</span>, ich koche not so much."] },
                { question: "What is your favorite food?", answers: ["Mein Lieblingsessen ist Pizza.", "Ich liebe Nudeln mit Tomatensoße."] },
                { question: "Do you cook your favorite food yourself?", answers: ["<span class='positive'>Ja</span>, ich koche es oft selbst.", "<span class='negative'>Nein</span>, I usually order it."], difficulty: 'hard' }
            ]
        },
        brot: {
            title: "Brot",
            dialogues: [
                { question: "Do you like bread?", answers: ["<span class='positive'>Ja</span>, ich mag Brot.", "<span class='negative'>Nein</span>, ich mag kein Brot."] },
                { question: "Do you buy bread?", answers: ["<span class='positive'>Ja</span>, ich kaufe Brot.", "<span class='negative'>Nein</span>, I bake it myself."] },
                { question: "Do you buy bread at the bakery?", answers: ["<span class='positive'>Ja</span>, ich kaufe mein Brot in der Bäckerei.", "<span class='negative'>Nein</span>, ich kaufe es im Supermarkt."] },
                { question: "Do you like to eat bread with cheese?", answers: ["<span class='positive'>Ja</span>, ich esse gern Brot mit Käse.", "<span class='negative'>Nein</span>, ich prefer bread with jam."] },
                { question: "Which bread do you like?", answers: ["Ich mag Vollkornbrot.", "Ich esse gern Brötchen."], difficulty: 'hard' }
            ]
        }
    },
    freizeit: {
        wochenende: {
            title: "Wochenende",
            dialogues: [
                { question: "Do you have free time on the weekend?", answers: ["<span class='positive'>Ja</span>, ich habe frei.", "<span class='negative'>Nein</span>, ich muss arbeiten."] },
                { question: "Do you study on the weekend?", answers: ["<span class='positive'>Ja</span>, ich lerne Deutsch.", "<span class='negative'>Nein</span>, on the weekend I don't study."] },
                { question: "What do you like to do on the weekend?", answers: ["Am Wochenende spiele ich gern Volleyball.", "Ich lese gern Bücher."] },
                { question: "How was your last weekend?", answers: ["Mein letztes Wochenende war sehr entspannend.", "Es war boring."], difficulty: 'hard' }
            ]
        },
        hobby: {
            title: "Hobby",
            dialogues: [
                { question: "Do you have a hobby?", answers: ["<span class='positive'>Ja</span>, ich habe ein Hobby.", "<span class='negative'>Nein</span>, ich habe kein Hobby."] },
                { question: "Do you like to read?", answers: ["<span class='positive'>Ja</span>, ich lese gern.", "<span class='negative'>Nein</span>, ich don't like to read."] },
                { question: "When do you do your hobby?", answers: ["Ich fotografiere am Wochenende.", "Ich lese jeden Abend."] },
                { question: "What are your hobbies?", answers: ["Meine Hobbys sind Wandern und Musik hören.", "Ich koche gern und lese."] },
                { question: "Why do you do this hobby?", answers: ["Ich mache es, weil es Spaß macht.", "It is very relaxing."], difficulty: 'hard' }
            ]
        },
        sport: {
            title: "Sport",
            dialogues: [
                { question: "Do you do sports?", answers: ["<span class='positive'>Ja</span>, ich mache Sport.", "<span class='negative'>Nein</span>, ich do not do sports."] },
                { question: "Do you play football?", answers: ["<span class='positive'>Ja</span>, ich spiele Fußball.", "<span class='negative'>Nein</span>, ich do not play football."] },
                { question: "Which sport do you like?", answers: ["Ich spiele gern Fußball.", "Ich schwimme gern."] },
                { question: "When do you do sports?", answers: ["Ich mache Sport am Abend.", "Ich trainiere am Wochenende."], difficulty: 'hard' }
            ]
        },
        freunde: {
            title: "Freunde",
            dialogues: [
                { question: "Do you have friends?", answers: ["<span class='positive'>Ja</span>, ich habe Freunde.", "<span class='negative'>Nein</span>, ich do not have many friends."] },
                { question: "Do you like to meet friends?", answers: ["<span class='positive'>Ja</span>, ich treffe gern Freunde.", "<span class='negative'>Nein</span>, I prefer to be alone."] },
                { question: "How often do you meet your friends?", answers: ["Ich treffe meine Freunde oft, einmal pro Woche.", "Ich treffe sie rarely."] },
                { question: "What do you like to do with friends?", answers: ["Ich gehe gern ins Kino mit Freunden.", "Wir kochen together."], difficulty: 'hard' }
            ]
        },
        film: {
            title: "Film",
            dialogues: [
                { question: "Do you like movies?", answers: ["<span class='positive'>Ja</span>, ich mag Filme.", "<span class='negative'>Nein</span>, ich don't like movies."] },
                { question: "Do you go to the cinema?", answers: ["<span class='positive'>Ja</span>, ich gehe ins Kino.", "<span class='negative'>Nein</span>, ich do not go to the cinema."] },
                { question: "Do you like to watch movies?", answers: ["<span class='positive'>Ja</span>, ich schaue gern Filme.", "<span class='negative'>Nein</span>, ich don't watch movies."] },
                { question: "When do you watch movies?", answers: ["Ich schaue Filme am Abend.", "Ich schaue Filme am Wochenende."] },
                { question: "Which movie genre do you like?", answers: ["Ich mag Komödien.", "Ich schaue gern Actionfilme."], difficulty: 'hard' }
            ]
        },
        fahrrad: {
            title: "Fahrrad",
            dialogues: [
                { question: "Do you have a bicycle?", answers: ["<span class='positive'>Ja</span>, ich habe ein Fahrrad.", "<span class='negative'>Nein</span>, ich have no bicycle."] },
                { question: "Do you like to ride a bicycle?", answers: ["<span class='positive'>Ja</span>, ich fahre sehr gern Fahrrad.", "<span class='negative'>Nein</span>, that I do not like."] },
                { question: "Do you ride your bike often?", answers: ["<span class='positive'>Ja</span>, ich fahre jeden Tag Fahrrad.", "<span class='negative'>Nein</span>, ich rarely ride my bike."] },
                { question: "Where do you go with your bicycle?", answers: ["Ich fahre mit dem Fahrrad zur Arbeit.", "Ich mache Radtouren im Park."], difficulty: 'hard' }
            ]
        },
        theater: {
            title: "Theater",
            dialogues: [
                { question: "Do you like theater?", answers: ["<span class='positive'>Ja</span>, ich mag Theater.", "<span class='negative'>Nein</span>, ich don't like theater."] },
                { question: "Do you like to go to the theater?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Theater.", "<span class='negative'>Nein</span>, Theater is not my thing."] },
                { question: "Do you also like to go to concerts?", answers: ["<span class='positive'>Ja</span>, ich gehe gern ins Konzert.", "<span class='negative'>Nein</span>, concerts I find boring."] },
                { question: "How do you find operas?", answers: ["Ich finde Opern sehr interessant.", "Ich don't like operas very much."], difficulty: 'hard' }
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
                { question: "(Formal) Wie alt sind Sie?", answers: ["Ich bin 40 Jahre alt."], difficulty: 'hard' }
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
                { question: "(Informal) Welche Sprachen sprichst du?", answers: ["Ich spreche Englisch und ein bisschen Deutsch."], difficulty: 'hard' },
                { question: "(Formal) Welche Sprachen sprechen Sie?", answers: ["Ich spreche Französisch, Spanisch und Deutsch."], difficulty: 'hard' }
            ]
        },
        beruf: {
            title: "Beruf (Profession)",
            dialogues: [
                { question: "(Informal) Was bist du von Beruf?", answers: ["Ich bin Student.", "Ich arbeite als Lehrer."], difficulty: 'hard' },
                { question: "(Formal) Was sind Sie von Beruf?", answers: ["Ich bin Ärztin.", "Ich arbeite als Ingenieur bei Siemens."], difficulty: 'hard' }
            ]
        },
        hobby: {
            title: "Hobby",
            dialogues: [
                { question: "(Informal) Was machst du gern?", answers: ["Ich spiele gern Fußball."] },
                { question: "(Formal) Was machen Sie gern in Ihrer Freizeit?", answers: ["Ich lese gern Bücher.", "Ich gehe gern wandern."], difficulty: 'hard' }
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