
      // Mobile Navigation Toggle
      document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.querySelector(".menu-toggle");
        const mainNav = document.querySelector(".main-nav");

        if (menuToggle && mainNav) {
          menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");
          });
        }
      });

      // Flashcard Data - Expanded and Organized
      const categories = {
    professions: [
        { word: "der Apotheker", gender: "male", plural: "die Apotheker", mk: "аптекар", en: "pharmacist (m)", isNew: true },
        { word: "die Apothekerin", gender: "female", plural: "die Apothekerinnen", mk: "аптекарка", en: "pharmacist (f)" },
        { word: "der Architekt", gender: "male", plural: "die Architekten", mk: "архитект", en: "architect (m)", isNew: true },
        { word: "die Architektin", gender: "female", plural: "die Architektinnen", mk: "архитектка", en: "architect (f)", isNew: true },
        { word: "der Arzt", gender: "male", plural: "die Ärzte", mk: "доктор", en: "doctor (m)", isNew: true },
        { word: "die Ärztin", gender: "female", plural: "die Ärztinnen", mk: "докторка", en: "doctor (f)", isNew: true },
        { word: "der Bäcker", gender: "male", plural: "die Bäcker", mk: "пекар", en: "baker (m)", isNew: true },
        { word: "der Elektriker", gender: "male", plural: "die Elektriker", mk: "електричар", en: "electrician (m)", isNew: true },
        { word: "die Elektrikerin", gender: "female", plural: "die Elektrikerinnen", mk: "електричарка", en: "electrician (f)", isNew: true },
        { word: "der IT-Ingenieur", gender: "male", plural: "die IT-Ingenieure", mk: "ИТ инженер", en: "IT engineer", isNew: true },
        { word: "der Journalist", gender: "male", plural: "die Journalisten", mk: "новинар", en: "journalist (m)", isNew: true },
        { word: "die Journalistin", gender: "female", plural: "die Journalistinnen", mk: "новинарка", en: "journalist (f)", isNew: true },
        { word: "der Kellner", gender: "male", plural: "die Kellner", mk: "келнер", en: "waiter", isNew: true },
        { word: "die Krankenschwester", gender: "female", plural: "die Krankenschwestern", mk: "медицинска сестра", en: "nurse (f)", isNew: true },
        { word: "der Kunde", gender: "male", plural: "die Kunden", mk: "клиент", en: "customer/client (m)", isNew: true },
        { word: "der Lehrer", gender: "male", plural: "die Lehrer", mk: "наставник", en: "teacher (m)", isNew: true },
        { word: "der Metzger", gender: "male", plural: "die Metzger", mk: "месар", en: "butcher (m)", isNew: true },
        { word: "die Modedesignerin", gender: "female", plural: "die Modedesignerinnen", mk: "моден дизајнер (ж)", en: "fashion designer (f)", isNew: true },
        { word: "die Pilotin", gender: "female", plural: "die Pilotinnen", mk: "пилот (ж)", en: "pilot (f)", isNew: true },
        { word: "der Projektmanager", gender: "male", plural: "die Projektmanager", mk: "проект менаџер", en: "project manager", isNew: true },
        { word: "der Schüler", gender: "male", plural: "die Schüler", mk: "ученик", en: "pupil/student (m)", isNew: true },
        { word: "der Sekretär", gender: "male", plural: "die Sekretäre", mk: "секретар", en: "secretary (m)", isNew: true },
        { word: "die Sekretärin", gender: "female", plural: "die Sekretärinnen", mk: "секретарка", en: "secretary (f)", isNew: true },
        { word: "der Student", gender: "male", plural: "die Studenten", mk: "студент", en: "student (m)", isNew: true },
        { word: "der Tourist", gender: "male", plural: "die Touristen", mk: "турист", en: "tourist (m)", isNew: true },
        { word: "der Verkäufer", gender: "male", plural: "die Verkäufer", mk: "продавач", en: "salesperson (m)", isNew: true },
    ],
    things: [
        { word: "der Ausweis", gender: "male", plural: "die Ausweise", mk: "лична карта", en: "ID card" },
        { word: "das Auto", gender: "neuter", plural: "die Autos", mk: "автомобил", en: "car", isNew: true },
        { word: "das Bild", gender: "neuter", plural: "die Bilder", mk: "слика", en: "picture/image", isNew: true },
        { word: "der Bleistift", gender: "male", plural: "die Bleistifte", mk: "молив", en: "pencil" },
        { word: "die Briefmarke", gender: "female", plural: "die Briefmarken", mk: "поштенска марка", en: "postage stamp" },
        { word: "die Brille", gender: "female", plural: "die Brillen", mk: "очила", en: "glasses" },
        { word: "das Buch", gender: "neuter", plural: "die Bücher", mk: "книга", en: "book" },
        { word: "der Computer", gender: "male", plural: "die Computer", mk: "компјутер", en: "computer" },
        { word: "der Drucker", gender: "male", plural: "die Drucker", mk: "печатач", en: "printer" },
        { word: "das Fahrrad", gender: "neuter", plural: "die Fahrräder", mk: "велосипед", en: "bicycle", isNew: true },
        { word: "das Feuerzeug", gender: "neuter", plural: "die Feuerzeuge", mk: "запалка", en: "lighter", isNew: true },
        { word: "das Formular", gender: "neuter", plural: "die Formulare", mk: "формулар", en: "form" },
        { word: "das Foto", gender: "neuter", plural: "die Fotos", mk: "фотографија", en: "photo", isNew: true },
        { word: "das Glas", gender: "neuter", plural: "die Gläser", mk: "чаша", en: "glass", isNew: true },
        { word: "das Handy", gender: "neuter", plural: "die Handys", mk: "мобилен телефон", en: "mobile phone" },
        { word: "der Kalender", gender: "male", plural: "die Kalender", mk: "календар", en: "calendar" },
        { word: "die Kamera", gender: "female", plural: "die Kameras", mk: "камера", en: "camera", isNew: true },
        { word: "der Kopfhörer", gender: "male", plural: "die Kopfhörer", mk: "слушалки", en: "headphones", isNew: true },
        { word: "der Kugelschreiber", gender: "male", plural: "die Kugelschreiber", mk: "хемиско пенкало", en: "ballpoint pen" },
        { word: "der Laptop", gender: "male", plural: "die Laptops", mk: "лаптоп", en: "laptop" },
        { word: "die Maus", gender: "female", plural: "die Mäuse", mk: "глушец", en: "mouse" },
        { word: "das Möbel", gender: "neuter", plural: "die Möbel", mk: "мебел", en: "furniture", isNew: true },
        { word: "der MP3-Player", gender: "male", plural: "die MP3-Player", mk: "MP3 плеер", en: "MP3 player" },
        { word: "das Notizbuch", gender: "neuter", plural: "die Notizbücher", mk: "тетратка", en: "notebook", isNew: true },
        { word: "der Rucksack", gender: "male", plural: "die Rucksäcke", mk: "ранец", en: "backpack" },
        { word: "der Schlüssel", gender: "male", plural: "die Schlüssel", mk: "клуч", en: "key" },
        { word: "die Tasche", gender: "female", plural: "die Taschen", mk: "торба", en: "bag" },
        { word: "das Taschentuch", gender: "neuter", plural: "die Taschentücher", mk: "марамче", en: "tissue", isNew: true },
        { word: "das Telefon", gender: "neuter", plural: "die Telefone", mk: "телефон", en: "telephone" },
        { word: "der Test", gender: "male", plural: "die Tests", mk: "тест", en: "test" },
        { word: "das Ticket", gender: "neuter", plural: "die Tickets", mk: "билет", en: "ticket", isNew: true },
        { word: "die Uhr", gender: "female", plural: "die Uhren", mk: "часовник", en: "watch/clock" },
        { word: "der USB-Stick", gender: "male", plural: "die USB-Sticks", mk: "УСБ-стик", en: "USB stick" },
        { word: "der Zug", gender: "male", plural: "die Züge", mk: "воз", en: "train", isNew: true },
    ],
    fruits: [
        { word: "der Apfel", gender: "male", plural: "die Äpfel", mk: "јаболко", en: "apple" },
        { word: "die Banane", gender: "female", plural: "die Bananen", mk: "банана", en: "banana" },
        { word: "die Birne", gender: "female", plural: "die Birnen", mk: "круша", en: "pear" },
        { word: "das Gemüse", gender: "neuter", plural: "die Gemüse", mk: "зеленчук", en: "vegetable(s)" },
        { word: "die Gurke", gender: "female", plural: "die Gurken", mk: "краставица", en: "cucumber" },
        { word: "die Kartoffel", gender: "female", plural: "die Kartoffeln", mk: "компир", en: "potato" },
        { word: "die Kiwi", gender: "female", plural: "die Kiwis", mk: "киви", en: "kiwi" },
        { word: "der Knoblauch", gender: "male", plural: "–", mk: "лук", en: "garlic" },
        { word: "die Melone", gender: "female", plural: "die Melonen", mk: "диња", en: "melon", isNew: true },
        { word: "das Obst", gender: "neuter", plural: "–", mk: "овошје", en: "fruit" },
        { word: "die Orange", gender: "female", plural: "die Orangen", mk: "портокал", en: "orange" },
        { word: "die Paprika", gender: "female", plural: "die Paprika", mk: "пиперка", en: "bell pepper" },
        { word: "der Pilz", gender: "male", plural: "die Pilze", mk: "печурка", en: "mushroom" },
        { word: "die Tomate", gender: "female", plural: "die Tomaten", mk: "домат", en: "tomato" },
        { word: "die Zitrone", gender: "female", plural: "die Zitronen", mk: "лимон", en: "lemon", isNew: true },
        { word: "die Zwiebel", gender: "female", plural: "die Zwiebeln", mk: "кромид", en: "onion" },
    ],
    "shopping-list": [
        { word: "das Backpulver", gender: "neuter", plural: "die Backpulver", mk: "прашок за пециво", en: "baking powder", isNew: true },
        { word: "der Becher", gender: "male", plural: "die Becher", mk: "чаша/кофичка", en: "cup/pot", isNew: true },
        { word: "das Bier", gender: "neuter", plural: "die Biere", mk: "пиво", en: "beer" },
        { word: "die Brezel", gender: "female", plural: "die Brezeln", mk: "перек", en: "pretzel" },
        { word: "das Brot", gender: "neuter", plural: "die Brote", mk: "леб", en: "bread" },
        { word: "die Cola", gender: "female", plural: "die Colas", mk: "кола", en: "cola" },
        { word: "die Croissants", gender: "neuter", plural: "die Croissants", mk: "кроасани", en: "croissants" },
        { word: "die Dose", gender: "female", plural: "die Dosen", mk: "конзерва", en: "can/tin", isNew: true },
        { word: "das Ei", gender: "neuter", plural: "die Eier", mk: "јајце", en: "egg", isNew: true },
        { word: "der Fisch", gender: "male", plural: "die Fische", mk: "риба", en: "fish" },
        { word: "die Flasche", gender: "female", plural: "die Flaschen", mk: "шише", en: "bottle", isNew: true },
        { word: "das Fleisch", gender: "neuter", plural: "–", mk: "месо", en: "meat" },
        { word: "die Getränke", gender: "neuter", plural: "die Getränke", mk: "пијалаци", en: "beverages" },
        { word: "das Honig", gender: "neuter", plural: "die Honige", mk: "мед", en: "honey", isNew: true },
        { word: "der Joghurt", gender: "male", plural: "die Joghurts", mk: "јогурт", en: "yogurt", isNew: true },
        { word: "der Kakao", gender: "male", plural: "die Kakaos", mk: "какао", en: "cocoa", isNew: true },
        { word: "der Käse", gender: "male", plural: "die Käse", mk: "сирење", en: "cheese" },
        { word: "der Kuchen", gender: "male", plural: "die Kuchen", mk: "торта/колач", en: "cake" },
        { word: "das Magazin", gender: "neuter", plural: "die Magazine", mk: "магазин", en: "magazine" },
        { word: "das Mehl", gender: "neuter", plural: "–", mk: "брашно", en: "flour" },
        { word: "die Milch", gender: "female", plural: "–", mk: "млеко", en: "milk" },
        { word: "die Nudeln", gender: "female", plural: "(plural only)", mk: "тестенини", en: "pasta/noodles" },
        { word: "das Öl", gender: "neuter", plural: "die Öle", mk: "масло", en: "oil", isNew: true },
        { word: "der Orangensaft", gender: "male", plural: "die Orangensäfte", mk: "сок од портокал", en: "orange juice", isNew: true },
        { word: "die Packung", gender: "female", plural: "die Packungen", mk: "пакување", en: "package/pack", isNew: true },
        { word: "die Pizza", gender: "female", plural: "die Pizzen", mk: "пица", en: "pizza" },
        { word: "der Pizzateig", gender: "male", plural: "die Pizzateige", mk: "тесто за пица", en: "pizza dough", isNew: true },
        { word: "der Reis", gender: "male", plural: "–", mk: "ориз", en: "rice" },
        { word: "das Rezept", gender: "neuter", plural: "die Rezepte", mk: "рецепт", en: "recipe", isNew: true },
        { word: "der Saft", gender: "male", plural: "die Säfte", mk: "сок", en: "juice", isNew: true },
        { word: "die Sahne", gender: "female", plural: "–", mk: "павлака", en: "cream", isNew: true },
        { word: "die Salami", gender: "female", plural: "die Salamis", mk: "салама", en: "salami" },
        { word: "das Salz", gender: "neuter", plural: "die Salze", mk: "сол", en: "salt", isNew: true },
        { word: "der Schinken", gender: "male", plural: "die Schinken", mk: "шунка", en: "ham" },
        { word: "die Schokolade", gender: "female", plural: "die Schokoladen", mk: "чоколадо", en: "chocolate" },
        { word: "der Vanillezucker", gender: "male", plural: "die Vanillezucker", mk: "ванила шеќер", en: "vanilla sugar", isNew: true },
        { word: "das Vollkornbrot", gender: "neuter", plural: "die Vollkornbrote", mk: "интегрален леб", en: "whole grain bread" },
        { word: "das Wasser", gender: "neuter", plural: "die Wässer", mk: "вода", en: "water" },
        { word: "die Zutat", gender: "female", plural: "die Zutaten", mk: "состојка", en: "ingredient", isNew: true },
        { word: "der Zucker", gender: "male", plural: "–", mk: "шеќер", en: "sugar" },
    ],
    "in-restaurant": [
        { word: "der Apfelkuchen", gender: "male", plural: "die Apfelkuchen", mk: "пита со јаболка", en: "apple cake" },
        { word: "der Apfelsaft", gender: "male", plural: "die Apfelsäfte", mk: "сок од јаболка", en: "apple juice" },
        { word: "das Bier", gender: "neuter", plural: "die Biere", mk: "пиво", en: "beer" },
        { word: "das Dessert", gender: "neuter", plural: "die Desserts", mk: "десерт", en: "dessert", isNew: true },
        { word: "das Eis", gender: "neuter", plural: "–", mk: "сладолед", en: "ice cream" },
        { word: "das Essen", gender: "neuter", plural: "die Essen", mk: "храна/јадење", en: "food/meal", isNew: true },
        { word: "der Fisch", gender: "male", plural: "die Fische", mk: "риба", en: "fish", isNew: true },
        { word: "die Gemüsesuppe", gender: "female", plural: "die Gemüsesuppen", mk: "супа од зеленчук", en: "vegetable soup" },
        { word: "der Grillteller", gender: "male", plural: "die Grillteller", mk: "скара", en: "mixed grill plate", isNew: true },
        { word: "das Hähnchen", gender: "neuter", plural: "die Hähnchen", mk: "пилешко", en: "chicken", isNew: true },
        { word: "die Hauptspeise", gender: "female", plural: "die Hauptspeisen", mk: "главно јадење", en: "main course", isNew: true },
        { word: "die Heiße Schokolade", gender: "female", plural: "die Heißen Schokoladen", mk: "топло чоколадо", en: "hot chocolate" },
        { word: "der Kaffee", gender: "male", plural: "die Kaffees", mk: "кафе", en: "coffee" },
        { word: "die Karte", gender: "female", plural: "die Karten", mk: "мени", en: "menu", isNew: true },
        { word: "die Limonade", gender: "female", plural: "die Limonaden", mk: "лимонада", en: "lemonade" },
        { word: "das Mineralwasser", gender: "neuter", plural: "die Mineralwässer", mk: "минерална вода", en: "mineral water" },
        { word: "die Nachspeise", gender: "female", plural: "die Nachspeisen", mk: "десерт", en: "dessert", isNew: true },
        { word: "der Obstsalat", gender: "male", plural: "die Obstsalate", mk: "овошна салата", en: "fruit salad" },
        { word: "das Omelette", gender: "neuter", plural: "die Omeletts", mk: "омлет", en: "omelette", isNew: true },
        { word: "die Pommes", gender: "female", plural: "(plural only)", mk: "помфрит", en: "french fries", isNew: true },
        { word: "die Rechnung", gender: "female", plural: "die Rechnungen", mk: "сметка", en: "bill/check" },
        { word: "der Rotwein", gender: "male", plural: "die Rotweine", mk: "црвено вино", en: "red wine" },
        { word: "der Salat", gender: "male", plural: "die Salate", mk: "салата", en: "salad" },
        { word: "der Schinken", gender: "male", plural: "die Schinken", mk: "пршута", en: "ham", isNew: true },
        { word: "die Tagessuppe", gender: "female", plural: "die Tagessuppen", mk: "супа на денот", en: "soup of the day", isNew: true },
        { word: "der Tee", gender: "male", plural: "die Tees", mk: "чај", en: "tea" },
        { word: "die Vorspeise", gender: "female", plural: "die Vorspeisen", mk: "предјадење", en: "starter/appetizer", isNew: true },
        { word: "der Weißwein", gender: "male", plural: "die Weißweine", mk: "бело вино", en: "white wine" },
    ],
    locations: [
        { word: "die Arena", gender: "female", plural: "die Arenen", mk: "арена", en: "arena", isNew: true },
        { word: "die Bäckerei", gender: "female", plural: "die Bäckereien", mk: "пекара", en: "bakery" },
        { word: "der Bahnhof", gender: "male", plural: "die Bahnhöfe", mk: "железничка станица", en: "train station" },
        { word: "die Bank", gender: "female", plural: "die Banken", mk: "банка", en: "bank" },
        { word: "die Bar", gender: "female", plural: "die Bars", mk: "бар", en: "bar", isNew: true },
        { word: "die Bibliothek", gender: "female", plural: "die Bibliotheken", mk: "библиотека", en: "library" },
        { word: "das Bistro", gender: "neuter", plural: "die Bistros", mk: "бистро", en: "bistro", isNew: true },
        { word: "das Büro", gender: "neuter", plural: "die Büros", mk: "канцеларија", en: "office", isNew: true },
        { word: "das Café", gender: "neuter", plural: "die Cafés", mk: "кафуле", en: "café", isNew: true },
        { word: "der Deutschkurs", gender: "male", plural: "die Deutschkurse", mk: "курс по германски", en: "German course" },
        { word: "der Flughafen", gender: "male", plural: "die Flughäfen", mk: "аеродром", en: "airport" },
        { word: "der Gemüsestand", gender: "male", plural: "die Gemüsestände", mk: "тезга за зеленчук", en: "vegetable stand" },
        { word: "der Hafen", gender: "male", plural: "die Häfen", mk: "пристаниште", en: "harbor" },
        { word: "die Hauptstadt", gender: "female", plural: "die Hauptstädte", mk: "главен град", en: "capital city", isNew: true },
        { word: "das Hotel", gender: "neuter", plural: "die Hotels", mk: "хотел", en: "hotel", isNew: true },
        { word: "die Insel", gender: "female", plural: "die Inseln", mk: "остров", en: "island", isNew: true },
        { word: "das Kaufhaus", gender: "neuter", plural: "die Kaufhäuser", mk: "стоковна куќа", en: "department store" },
        { word: "der Kindergarten", gender: "male", plural: "die Kindergärten", mk: "градинка", en: "kindergarten", isNew: true },
        { word: "das Kino", gender: "neuter", plural: "die Kinos", mk: "кино", en: "cinema" },
        { word: "der Kiosk", gender: "male", plural: "die Kioske", mk: "киоск", en: "kiosk" },
        { word: "die Kirche", gender: "female", plural: "die Kirchen", mk: "црква", en: "church" },
        { word: "die Kneipe", gender: "female", plural: "die Kneipen", mk: "паб/кафана", en: "pub", isNew: true },
        { word: "das Konzert", gender: "neuter", plural: "die Konzerte", mk: "концерт", en: "concert", isNew: true },
        { word: "der Kurs", gender: "male", plural: "die Kurse", mk: "курс", en: "course", isNew: true },
        { word: "das Land", gender: "neuter", plural: "die Länder", mk: "земја", en: "country", isNew: true },
        { word: "der Markt", gender: "male", plural: "die Märkte", mk: "пазар", en: "market" },
        { word: "das Meer", gender: "neuter", plural: "die Meere", mk: "море", en: "sea" },
        { word: "die Metzgerei", gender: "female", plural: "die Metzgereien", mk: "месара", en: "butcher's shop" },
        { word: "das Museum", gender: "neuter", plural: "die Museen", mk: "музеј", en: "museum" },
        { word: "der Obststand", gender: "male", plural: "die Obststände", mk: "тезга за овошје", en: "fruit stand" },
        { word: "die Oper", gender: "female", plural: "die Opern", mk: "опера", en: "opera" },
        { word: "der Ort", gender: "male", plural: "die Orte", mk: "место", en: "place", isNew: true },
        { word: "der Park", gender: "male", plural: "die Parks", mk: "парк", en: "park" },
        { word: "die Post", gender: "female", plural: "die Postämter", mk: "пошта", en: "post office" },
        { word: "das Restaurant", gender: "neuter", plural: "die Restaurants", mk: "ресторан", en: "restaurant" },
        { word: "die Schule", gender: "female", plural: "die Schulen", mk: "училиште", en: "school", isNew: true },
        { word: "der See", gender: "male", plural: "die Seen", mk: "езеро", en: "lake" },
        { word: "die Stadt", gender: "female", plural: "die Städte", mk: "град", en: "city/town", isNew: true },
        { word: "der Strand", gender: "male", plural: "die Strände", mk: "плажа", en: "beach", isNew: true },
        { word: "der Supermarkt", gender: "male", plural: "die Supermärkte", mk: "супермаркет", en: "supermarket" },
        { word: "das Theater", gender: "neuter", plural: "die Theater", mk: "театар", en: "theater" },
    ],
    house: [
        { word: "das Arbeitszimmer", gender: "neuter", plural: "die Arbeitszimmer", mk: "работна соба", en: "study/office" },
        { word: "der Aufzug", gender: "male", plural: "die Aufzüge", mk: "лифт", en: "elevator" },
        { word: "das Bad", gender: "neuter", plural: "die Bäder", mk: "бања", en: "bathroom" },
        { word: "der Balkon", gender: "male", plural: "die Balkone", mk: "балкон", en: "balcony" },
        { word: "das Dach", gender: "neuter", plural: "die Dächer", mk: "покрив", en: "roof", isNew: true },
        { word: "das Erdgeschoss", gender: "neuter", plural: "die Erdgeschosse", mk: "приземје", en: "ground floor" },
        { word: "die Etage", gender: "female", plural: "die Etagen", mk: "кат", en: "floor/level", isNew: true },
        { word: "das Fenster", gender: "neuter", plural: "die Fenster", mk: "прозорец", en: "window" },
        { word: "der Flur", gender: "male", plural: "die Flure", mk: "ходник", en: "hallway" },
        { word: "die Garage", gender: "female", plural: "die Garagen", mk: "гаража", en: "garage" },
        { word: "der Garten", gender: "male", plural: "die Gärten", mk: "градина", en: "garden" },
        { word: "das Haus", gender: "neuter", plural: "die Häuser", mk: "куќа", en: "house", isNew: true },
        { word: "der Keller", gender: "male", plural: "die Keller", mk: "подрум", en: "basement" },
        { word: "das Kinderzimmer", gender: "neuter", plural: "die Kinderzimmer", mk: "детска соба", en: "children's room" },
        { word: "die Küche", gender: "female", plural: "die Küchen", mk: "кујна", en: "kitchen" },
        { word: "der Lift", gender: "male", plural: "die Lifte", mk: "лифт", en: "elevator/lift", isNew: true },
        { word: "die Miete", gender: "female", plural: "die Mieten", mk: "кирија", en: "rent", isNew: true },
        { word: "das Schlafzimmer", gender: "neuter", plural: "die Schlafzimmer", mk: "спална соба", en: "bedroom" },
        { word: "der Stock", gender: "male", plural: "die Stockwerke", mk: "кат", en: "floor/story", isNew: true },
        { word: "die Terrasse", gender: "female", plural: "die Terrassen", mk: "тераса", en: "terrace/patio", isNew: true },
        { word: "die Toilette", gender: "female", plural: "die Toiletten", mk: "тоалет", en: "toilet" },
        { word: "die Treppe", gender: "female", plural: "die Treppen", mk: "скали", en: "stairs" },
        { word: "die Wohnküche", gender: "female", plural: "die Wohnküchen", mk: "кујна со дневна", en: "eat-in kitchen", isNew: true },
        { word: "das Wohnzimmer", gender: "neuter", plural: "die Wohnzimmer", mk: "дневна соба", en: "living room" },
        { word: "die Wohnung", gender: "female", plural: "die Wohnungen", mk: "стан", en: "apartment/flat", isNew: true },
    ],
    furniture: [
        { word: "das Bett", gender: "neuter", plural: "die Betten", mk: "кревет", en: "bed" },
        { word: "die Couch", gender: "female", plural: "die Couches", mk: "кауч", en: "couch" },
        { word: "der Fernseher", gender: "male", plural: "die Fernseher", mk: "телевизор", en: "TV set" },
        { word: "der Herd", gender: "male", plural: "die Herde", mk: "шпорет", en: "stove" },
        { word: "der Kühlschrank", gender: "male", plural: "die Kühlschränke", mk: "фрижидер", en: "refrigerator" },
        { word: "die Lampe", gender: "female", plural: "die Lampen", mk: "ламба", en: "lamp" },
        { word: "das Regal", gender: "neuter", plural: "die Regale", mk: "полица", en: "shelf/rack" },
        { word: "der Schrank", gender: "male", plural: "die Schränke", mk: "плакар", en: "cupboard/wardrobe" },
        { word: "das Sofa", gender: "neuter", plural: "die Sofas", mk: "софа", en: "sofa" },
        { word: "der Stuhl", gender: "male", plural: "die Stühle", mk: "стол", en: "chair" },
        { word: "der Tisch", gender: "male", plural: "die Tische", mk: "маса", en: "table" },
        { word: "die Waschmaschine", gender: "female", plural: "die Waschmaschinen", mk: "машина за перење", en: "washing machine" },
    ],
    misc: [
        { word: "der Abend", gender: "male", plural: "die Abende", mk: "вечер", en: "evening", isNew: true },
        { word: "das Abendessen", gender: "neuter", plural: "die Abendessen", mk: "вечера", en: "dinner", isNew: true },
        { word: "der Alltag", gender: "male", plural: "die Alltage", mk: "секојдневие", en: "everyday life", isNew: true },
        { word: "die Antwort", gender: "female", plural: "die Antworten", mk: "одговор", en: "answer", isNew: true },
        { word: "die Arbeit", gender: "female", plural: "die Arbeiten", mk: "работа", en: "work/job", isNew: true },
        { word: "der Ausflug", gender: "male", plural: "die Ausflüge", mk: "излет", en: "excursion/trip", isNew: true },
        { word: "die Band", gender: "female", plural: "die Bands", mk: "бенд", en: "band", isNew: true },
        { word: "der Besuch", gender: "male", plural: "die Besuche", mk: "посета", en: "visit", isNew: true },
        { word: "das Datum", gender: "neuter", plural: "die Daten", mk: "датум", en: "date", isNew: true },
        { word: "die Einladung", gender: "female", plural: "die Einladungen", mk: "покана", en: "invitation", isNew: true },
        { word: "der Einwohner", gender: "male", plural: "die Einwohner", mk: "жител", en: "inhabitant", isNew: true },
        { word: "die Eltern", gender: "female", plural: "(plural only)", mk: "родители", en: "parents", isNew: true },
        { word: "die Familie", gender: "female", plural: "die Familien", mk: "семејство", en: "family", isNew: true },
        { word: "der Familienstand", gender: "male", plural: "die Familienstände", mk: "брачен статус", en: "marital status", isNew: true },
        { word: "die Farbe", gender: "female", plural: "die Farben", mk: "боја", en: "color", isNew: true },
        { word: "der Film", gender: "male", plural: "die Filme", mk: "филм", en: "film" },
        { word: "die Frage", gender: "female", plural: "die Fragen", mk: "прашање", en: "question", isNew: true },
        { word: "die Freizeit", gender: "female", plural: "–", mk: "слободно време", en: "free time", isNew: true },
        { word: "der Freund", gender: "male", plural: "die Freunde", mk: "пријател", en: "friend (m)", isNew: true },
        { word: "die Freundin", gender: "female", plural: "die Freundinnen", mk: "пријателка", en: "friend (f)", isNew: true },
        { word: "der Frühling", gender: "male", plural: "die Frühlinge", mk: "пролет", en: "spring", isNew: true },
        { word: "der Geburtstag", gender: "male", plural: "die Geburtstage", mk: "роденден", en: "birthday" },
        { word: "die Geburtstagstorte", gender: "female", plural: "die Geburtstagstorten", mk: "роденденска торта", en: "birthday cake", isNew: true },
        { word: "das Gepäck", gender: "neuter", plural: "–", mk: "багаж", en: "luggage", isNew: true },
        { word: "der Gruß", gender: "male", plural: "die Grüße", mk: "поздрав", en: "greeting", isNew: true },
        { word: "der Herbst", gender: "male", plural: "die Herbste", mk: "есен", en: "autumn/fall", isNew: true },
        { word: "die Herkunft", gender: "female", plural: "die Herkünfte", mk: "потекло", en: "origin", isNew: true },
        { word: "das Hobby", gender: "neuter", plural: "die Hobbys", mk: "хоби", en: "hobby" },
        { word: "der Hunger", gender: "male", plural: "–", mk: "глад", en: "hunger", isNew: true },
        { word: "das Interview", gender: "neuter", plural: "die Interviews", mk: "интервју", en: "interview", isNew: true },
        { word: "das Jahr", gender: "neuter", plural: "die Jahre", mk: "година", en: "year", isNew: true },
        { word: "die Jahreszeit", gender: "female", plural: "die Jahreszeiten", mk: "годишно време", en: "season" },
        { word: "der Jazz", gender: "male", plural: "–", mk: "џез", en: "jazz" },
        { word: "das Kind", gender: "neuter", plural: "die Kinder", mk: "дете", en: "child", isNew: true },
        { word: "das Lieblingsessen", gender: "neuter", plural: "die Lieblingsessen", mk: "омилено јадење", en: "favorite food", isNew: true },
        { word: "der Mathetest", gender: "male", plural: "die Mathetests", mk: "тест по математика", en: "math test", isNew: true },
        { word: "das Meeting", gender: "neuter", plural: "die Meetings", mk: "состанок", en: "meeting", isNew: true },
        { word: "der Mensch", gender: "male", plural: "die Menschen", mk: "човек", en: "person/human", isNew: true },
        { word: "der Mittag", gender: "male", plural: "die Mittage", mk: "пладне", en: "midday/noon", isNew: true },
        { word: "das Mittagessen", gender: "neuter", plural: "die Mittagessen", mk: "ручек", en: "lunch", isNew: true },
        { word: "der Monat", gender: "male", plural: "die Monate", mk: "месец", en: "month" },
        { word: "der Morgen", gender: "male", plural: "die Morgen", mk: "утро", en: "morning" },
        { word: "die Musik", gender: "female", plural: "–", mk: "музика", en: "music" },
        { word: "die Mutter", gender: "female", plural: "die Mütter", mk: "мајка", en: "mother", isNew: true },
        { word: "der Nachmittag", gender: "male", plural: "die Nachmittage", mk: "попладне", en: "afternoon" },
        { word: "die Nacht", gender: "female", plural: "die Nächte", mk: "ноќ", en: "night" },
        { word: "die Party", gender: "female", plural: "die Partys", mk: "забава", en: "party" },
        { word: "die Pause", gender: "female", plural: "die Pausen", mk: "пауза", en: "break" },
        { word: "der Pop", gender: "male", plural: "–", mk: "поп", en: "pop music" },
        { word: "das Problem", gender: "neuter", plural: "die Probleme", mk: "проблем", en: "problem", isNew: true },
        { word: "die Radtour", gender: "female", plural: "die Radtouren", mk: "велосипедска тура", en: "bike tour", isNew: true },
        { word: "die Reise", gender: "female", plural: "die Reisen", mk: "патување", en: "journey/trip", isNew: true },
        { word: "die Reportage", gender: "female", plural: "die Reportagen", mk: "репортажа", en: "report", isNew: true },
        { word: "die Rockmusik", gender: "female", plural: "–", mk: "рок музика", en: "rock music" },
        { word: "die Sandburg", gender: "female", plural: "die Sandburgen", mk: "замок од песок", en: "sandcastle", isNew: true },
        { word: "die Schwester", gender: "female", plural: "die Schwestern", mk: "сестра", en: "sister", isNew: true },
        { word: "der Sommer", gender: "male", plural: "die Sommer", mk: "лето", en: "summer", isNew: true },
        { word: "der Spaß", gender: "male", plural: "die Späße", mk: "забава", en: "fun" },
        { word: "der Stress", gender: "male", plural: "–", mk: "стрес", en: "stress", isNew: true },
        { word: "der Tag", gender: "male", plural: "die Tage", mk: "ден", en: "day", isNew: true },
        { word: "die Tageszeit", gender: "female", plural: "die Tageszeiten", mk: "дел од денот", en: "time of day", isNew: true },
        { word: "die Telefonnummer", gender: "female", plural: "die Telefonnummern", mk: "телефонски број", en: "phone number", isNew: true },
        { word: "der Termin", gender: "male", plural: "die Termine", mk: "термин/состанок", en: "appointment" },
        { word: "das Training", gender: "neuter", plural: "die Trainings", mk: "тренинг", en: "training" },
        { word: "der Traumberuf", gender: "male", plural: "die Traumberufe", mk: "работа од соништата", en: "dream job", isNew: true },
        { word: "der Urlaub", gender: "male", plural: "die Urlaube", mk: "одмор", en: "vacation/holiday" },
        { word: "der Vormittag", gender: "male", plural: "die Vormittage", mk: "претпладне", en: "late morning" },
        { word: "die Wanderung", gender: "female", plural: "die Wanderungen", mk: "планинарење", en: "hike", isNew: true },
        { word: "das Wetter", gender: "neuter", plural: "–", mk: "време", en: "weather", isNew: true },
        { word: "die Woche", gender: "female", plural: "die Wochen", mk: "недела", en: "week", isNew: true },
        { word: "das Wochenende", gender: "neuter", plural: "die Wochenenden", mk: "викенд", en: "weekend" },
        { word: "der Winter", gender: "male", plural: "die Winter", mk: "зима", en: "winter", isNew: true },
        { word: "der Wunsch", gender: "male", plural: "die Wünsche", mk: "желба", en: "wish", isNew: true },
        { word: "die Zeit", gender: "female", plural: "die Zeiten", mk: "време", en: "time", isNew: true },
    ]
};


document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // --- Main Flashcard Logic ---

    // FIX: Combine all words from the 'categories' object into a single flat array.
    const masterVocabularyList = Object.values(categories).flat();

    // Sort the master list alphabetically by default on page load.
    masterVocabularyList.sort((a, b) => a.word.replace(/^(der|die|das)\s/i, '').localeCompare(b.word.replace(/^(der|die|das)\s/i, '')));

    let currentWordList = [...masterVocabularyList];

    const genderFilter = document.getElementById('gender-filter');
    const shuffleBtn = document.getElementById('shuffle-btn');

    // NEW: A function to render cards into the correct category containers.
    function renderCards(wordsToRender) {
        // Clear all existing cards from all containers first
        document.querySelectorAll('.flashcard-categories').forEach(container => container.innerHTML = '');

        // Go through the list of words and place each one in its correct category container
        wordsToRender.forEach(item => {
            // Find the category key for the current item
            const categoryKey = Object.keys(categories).find(key => 
                categories[key].some(catItem => catItem.word === item.word)
            );

            if (categoryKey) {
                const container = document.getElementById(categoryKey);
                if (container) {
                    container.appendChild(createCard(item));
                }
            }
        });
    }

    // --- Function to Create a Single Card ---
    function createCard(item) {
        const card = document.createElement("div");
        card.className = "flashcard";
        // NEW: Add the 'hard-word' class for the golden border
        // if (item.isNew) {
        //     card.classList.add('hard-word');
        // }

        const inner = document.createElement("div");
        inner.className = "flashcard-inner";

        const nounOnly = item.word.replace(/^(der |die |das )/, "");
        
        const front = document.createElement("div");
        front.className = "flashcard-front";
        front.textContent = nounOnly;

        const back = document.createElement("div");
        back.className = "flashcard-back";

        const genderSpan = document.createElement("span");
        genderSpan.className = `gender ${item.gender}`;
        genderSpan.textContent = item.word;
        back.appendChild(genderSpan);

        const plural = document.createElement("div");
        plural.textContent = "Plural: " + item.plural;
        back.appendChild(plural);

        const mk = document.createElement("div");
        mk.textContent = "Македонски: " + item.mk;
        back.appendChild(mk);

        const en = document.createElement("div");
        en.textContent = "English: " + item.en;
        back.appendChild(en);

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        card.addEventListener("click", () => card.classList.toggle("is-flipped"));
        return card;
    }

    // --- Event Listeners ---

    // Gender Filter Logic
    if (genderFilter) {
        genderFilter.addEventListener('change', () => {
            const selectedGender = genderFilter.value;
            let filteredList;
            if (selectedGender === 'all') {
                filteredList = [...masterVocabularyList];
            } else {
                filteredList = masterVocabularyList.filter(item => item.gender === selectedGender);
            }
            // Update the current list for the shuffle function to use
            currentWordList = filteredList;
            renderCards(currentWordList);
        });
    }

    // Shuffle Button Logic (Fisher-Yates Shuffle Algorithm)
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            // Shuffle the currently displayed list of words
            for (let i = currentWordList.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentWordList[i], currentWordList[j]] = [currentWordList[j], currentWordList[i]];
            }
            renderCards(currentWordList);
        });
    }

    // --- Initial Load ---
    renderCards(masterVocabularyList);
});