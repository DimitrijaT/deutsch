const allWords = [
    // --- NOUNS: People & Profession ---
    { category: "Nouns: People & Profession", noun: "Architekt", gender: "der", plural: "die Architekten", english: "architect (m)" },
    { category: "Nouns: People & Profession", noun: "Journalist", gender: "der", plural: "die Journalisten", english: "journalist (m)" },
    { category: "Nouns: People & Profession", noun: "Apotheker", gender: "der", plural: "die Apotheker", english: "pharmacist (m)" },
    { category: "Nouns: People & Profession", noun: "Arzt", gender: "der", plural: "die Ärzte", english: "doctor (m)" },
    { category: "Nouns: People & Profession", noun: "Lehrer", gender: "der", plural: "die Lehrer", english: "teacher (m)" },
    { category: "Nouns: People & Profession", noun: "Freund", gender: "der", plural: "die Freunde", english: "friend (m)" },
    { category: "Nouns: People & Profession", noun: "Name", gender: "der", plural: "die Namen", english: "name" },
    { category: "Nouns: People & Profession", noun: "Beruf", gender: "der", plural: "die Berufe", english: "profession" },
    { category: "Nouns: People & Profession", noun: "Mann", gender: "der", plural: "die Männer", english: "man, husband" },
    { category: "Nouns: People & Profession", noun: "Student", gender: "der", plural: "die Studenten", english: "student (m)" },
    { category: "Nouns: People & Profession", noun: "Kollege", gender: "der", plural: "die Kollegen", english: "colleague (m)" },
    { category: "Nouns: People & Profession", noun: "Nachbar", gender: "der", plural: "die Nachbarn", english: "neighbor (m)" },
    { category: "Nouns: People & Profession", noun: "Chef", gender: "der", plural: "die Chefs", english: "boss" },
    { category: "Nouns: People & Profession", noun: "Sohn", gender: "der", plural: "die Söhne", english: "son" },
    { category: "Nouns: People & Profession", noun: "Frau", gender: "die", plural: "die Frauen", english: "woman, wife" },
    { category: "Nouns: People & Profession", noun: "Person", gender: "die", plural: "die Personen", english: "person" },
    { category: "Nouns: People & Profession", noun: "Familie", gender: "die", plural: "die Familien", english: "family" },
    { category: "Nouns: People & Profession", noun: "Sprache", gender: "die", plural: "die Sprachen", english: "language" },
    { category: "Nouns: People & Profession", noun: "Architektin", gender: "die", plural: "die Architektinnen", english: "architect (f)" },
    { category: "Nouns: People & Profession", noun: "Ärztin", gender: "die", plural: "die Ärztinnen", english: "doctor (f)" },
    { category: "Nouns: People & Profession", noun: "Lehrerin", gender: "die", plural: "die Lehrerinnen", english: "teacher (f)" },
    { category: "Nouns: People & Profession", noun: "Studentin", gender: "die", plural: "die Studentinnen", english: "student (f)" },
    { category: "Nouns: People & Profession", noun: "Tochter", gender: "die", plural: "die Töchter", english: "daughter" },
    { category: "Nouns: People & Profession", noun: "Kind", gender: "das", plural: "die Kinder", english: "child" },

    // --- NOUNS: Office & Technology ---
    { category: "Nouns: Office & Technology", noun: "Bleistift", gender: "der", plural: "die Bleistifte", english: "pencil" },
    { category: "Nouns: Office & Technology", noun: "Kugelschreiber", gender: "der", plural: "die Kugelschreiber", english: "ballpoint pen" },
    { category: "Nouns: Office & Technology", noun: "Computer", gender: "der", plural: "die Computer", english: "computer" },
    { category: "Nouns: Office & Technology", noun: "Laptop", gender: "der", plural: "die Laptops", english: "laptop" },
    { category: "Nouns: Office & Technology", noun: "Drucker", gender: "der", plural: "die Drucker", english: "printer" },
    { category: "Nouns: Office & Technology", noun: "USB-Stick", gender: "der", plural: "die USB-Sticks", english: "USB stick" },
    { category: "Nouns: Office & Technology", noun: "Kalender", gender: "der", plural: "die Kalender", english: "calendar" },
    { category: "Nouns: Office & Technology", noun: "Ausweis", gender: "der", plural: "die Ausweise", english: "ID card" },
    { category: "Nouns: Office & Technology", noun: "Kopfhörer", gender: "der", plural: "die Kopfhörer", english: "headphones" },
    { category: "Nouns: Office & Technology", noun: "Maus", gender: "die", plural: "die Mäuse", english: "mouse" },
    { category: "Nouns: Office & Technology", noun: "Brille", gender: "die", plural: "die Brillen", english: "glasses" },
    { category: "Nouns: Office & Technology", noun: "Briefmarke", gender: "die", plural: "die Briefmarken", english: "postage stamp" },
    { category: "Nouns: Office & Technology", noun: "Rechnung", gender: "die", plural: "die Rechnungen", english: "bill, invoice" },
    { category: "Nouns: Office & Technology", noun: "Handy", gender: "das", plural: "die Handys", english: "mobile phone" },
    { category: "Nouns: Office & Technology", noun: "Buch", gender: "das", plural: "die Bücher", english: "book" },
    { category: "Nouns: Office & Technology", noun: "Formular", gender: "das", plural: "die Formulare", english: "form" },
    { category: "Nouns: Office & Technology", noun: "Telefon", gender: "das", plural: "die Telefone", english: "telephone" },
    { category: "Nouns: Office & Technology", noun: "Foto", gender: "das", plural: "die Fotos", english: "photo" },
    
    // --- NOUNS: Leisure & City ---
    { category: "Nouns: Leisure & City", noun: "Tag", gender: "der", plural: "die Tage", english: "day" },
    { category: "Nouns: Leisure & City", noun: "Abend", gender: "der", plural: "die Abende", english: "evening" },
    { category: "Nouns: Leisure & City", noun: "Sport", gender: "der", plural: "(no plural)", english: "sport" },
    { category: "Nouns: Leisure & City", noun: "Film", gender: "der", plural: "die Filme", english: "movie" },
    { category: "Nouns: Leisure & City", noun: "Bahnhof", gender: "der", plural: "die Bahnhöfe", english: "train station" },
    { category: "Nouns: Leisure & City", noun: "Park", gender: "der", plural: "die Parks", english: "park" },
    { category: "Nouns: Leisure & City", noun: "Geburtstag", gender: "der", plural: "die Geburtstage", english: "birthday" },
    { category: "Nouns: Leisure & City", noun: "Urlaub", gender: "der", plural: "die Urlaube", english: "vacation" },
    { category: "Nouns: Leisure & City", noun: "Fußball", gender: "der", plural: "die Fußbälle", english: "football" },
    { category: "Nouns: Leisure & City", noun: "Rucksack", gender: "der", plural: "die Rucksäcke", english: "backpack" },
    { category: "Nouns: Leisure & City", noun: "Schlüssel", gender: "der", plural: "die Schlüssel", english: "key" },
    { category: "Nouns: Leisure & City", noun: "Musik", gender: "die", plural: "(no plural)", english: "music" },
    { category: "Nouns: Leisure & City", noun: "Woche", gender: "die", plural: "die Wochen", english: "week" },
    { category: "Nouns: Leisure & City", noun: "Stadt", gender: "die", plural: "die Städte", english: "city" },
    { category: "Nouns: Leisure & City", noun: "Party", gender: "die", plural: "die Partys", english: "party" },
    { category: "Nouns: Leisure & City", noun: "Kneipe", gender: "die", plural: "die Kneipen", english: "pub" },
    { category: "Nouns: Leisure & City", noun: "Oper", gender: "die", plural: "die Opern", english: "opera" },
    { category: "Nouns: Leisure & City", noun: "Zeit", gender: "die", plural: "(no plural)", english: "time" },
    { category: "Nouns: Leisure & City", noun: "Stunde", gender: "die", plural: "die Stunden", english: "hour" },
    { category: "Nouns: Leisure & City", noun: "Uhr", gender: "die", plural: "die Uhren", english: "watch, clock" },
    { category: "Nouns: Leisure & City", noun: "Hobby", gender: "das", plural: "die Hobbys", english: "hobby" },
    { category: "Nouns: Leisure & City", noun: "Wochenende", gender: "das", plural: "die Wochenenden", english: "weekend" },
    { category: "Nouns: Leisure & City", noun: "Kino", gender: "das", plural: "die Kinos", english: "cinema" },
    { category: "Nouns: Leisure & City", noun: "Theater", gender: "das", plural: "die Theater", english: "theater" },
    { category: "Nouns: Leisure & City", noun: "Konzert", gender: "das", plural: "die Konzerte", english: "concert" },
    { category: "Nouns: Leisure & City", noun: "Museum", gender: "das", plural: "die Museen", english: "museum" },
    { category: "Nouns: Leisure & City", noun: "Restaurant", gender: "das", plural: "die Restaurants", english: "restaurant" },
    { category: "Nouns: Leisure & City", noun: "Café", gender: "das", plural: "die Cafés", english: "café" },
    { category: "Nouns: Leisure & City", noun: "Schwimmbad", gender: "das", plural: "die Schwimmbäder", english: "swimming pool" },
    
    // --- NOUNS: Food & Shopping ---
    { category: "Nouns: Food & Shopping", noun: "Apfel", gender: "der", plural: "die Äpfel", english: "apple" },
    { category: "Nouns: Food & Shopping", noun: "Kaffee", gender: "der", plural: "(no plural)", english: "coffee" },
    { category: "Nouns: Food & Shopping", noun: "Käse", gender: "der", plural: "(no plural)", english: "cheese" },
    { category: "Nouns: Food & Shopping", noun: "Reis", gender: "der", plural: "(no plural)", english: "rice" },
    { category: "Nouns: Food & Shopping", noun: "Salat", gender: "der", plural: "die Salate", english: "salad" },
    { category: "Nouns: Food & Shopping", noun: "Tee", gender: "der", plural: "(no plural)", english: "tea" },
    { category: "Nouns: Food & Shopping", noun: "Wein", gender: "der", plural: "die Weine", english: "wine" },
    { category: "Nouns: Food & Shopping", noun: "Zucker", gender: "der", plural: "(no plural)", english: "sugar" },
    { category: "Nouns: Food & Shopping", noun: "Kuchen", gender: "der", plural: "die Kuchen", english: "cake" },
    { category: "Nouns: Food & Shopping", noun: "Fisch", gender: "der", plural: "die Fische", english: "fish" },
    { category: "Nouns: Food & Shopping", noun: "Saft", gender: "der", plural: "die Säfte", english: "juice" },
    { category: "Nouns: Food & Shopping", noun: "Supermarkt", gender: "der", plural: "die Supermärkte", english: "supermarket" },
    { category: "Nouns: Food & Shopping", noun: "Markt", gender: "der", plural: "die Märkte", english: "market" },
    { category: "Nouns: Food & Shopping", noun: "Joghurt", gender: "der", plural: "die Joghurts", english: "yogurt" },
    { category: "Nouns: Food & Shopping", noun: "Honig", gender: "der", plural: "(no plural)", english: "honey" },
    { category: "Nouns: Food & Shopping", noun: "Banane", gender: "die", plural: "die Bananen", english: "banana" },
    { category: "Nouns: Food & Shopping", noun: "Butter", gender: "die", plural: "(no plural)", english: "butter" },
    { category: "Nouns: Food & Shopping", noun: "Gurke", gender: "die", plural: "die Gurken", english: "cucumber" },
    { category: "Nouns: Food & Shopping", noun: "Kartoffel", gender: "die", plural: "die Kartoffeln", english: "potato" },
    { category: "Nouns: Food & Shopping", noun: "Milch", gender: "die", plural: "(no plural)", english: "milk" },
    { category: "Nouns: Food & Shopping", noun: "Orange", gender: "die", plural: "die Orangen", english: "orange" },
    { category: "Nouns: Food & Shopping", noun: "Pizza", gender: "die", plural: "die Pizzen/Pizzas", english: "pizza" },
    { category: "Nouns: Food & Shopping", noun: "Tomate", gender: "die", plural: "die Tomaten", english: "tomato" },
    { category: "Nouns: Food & Shopping", noun: "Wurst", gender: "die", plural: "die Würste", english: "sausage" },
    { category: "Nouns: Food & Shopping", noun: "Suppe", gender: "die", plural: "die Suppen", english: "soup" },
    { category: "Nouns: Food & Shopping", noun: "Zwiebel", gender: "die", plural: "die Zwiebeln", english: "onion" },
    { category: "Nouns: Food & Shopping", noun: "Schokolade", gender: "die", plural: "die Schokoladen", english: "chocolate" },
    { category: "Nouns: Food & Shopping", noun: "Limonade", gender: "die", plural: "die Limonaden", english: "lemonade" },
    { category: "Nouns: Food & Shopping", noun: "Bäckerei", gender: "die", plural: "die Bäckereien", english: "bakery" },
    { category: "Nouns: Food & Shopping", noun: "Metzgerei", gender: "die", plural: "die Metzgereien", english: "butcher shop" },
    { category: "Nouns: Food & Shopping", noun: "Flasche", gender: "die", plural: "die Flaschen", english: "bottle" },
    { category: "Nouns: Food & Shopping", noun: "Dose", gender: "die", plural: "die Dosen", english: "can, tin" },
    { category: "Nouns: Food & Shopping", noun: "Packung", gender: "die", plural: "die Packungen", english: "package, pack" },
    { category: "Nouns: Food & Shopping", noun: "Brot", gender: "das", plural: "die Brote", english: "bread" },
    { category: "Nouns: Food & Shopping", noun: "Bier", gender: "das", plural: "die Biere", english: "beer" },
    { category: "Nouns: Food & Shopping", noun: "Ei", gender: "das", plural: "die Eier", english: "egg" },
    { category: "Nouns: Food & Shopping", noun: "Fleisch", gender: "das", plural: "(no plural)", english: "meat" },
    { category: "Nouns: Food & Shopping", noun: "Gemüse", gender: "das", plural: "(no plural)", english: "vegetables" },
    { category: "Nouns: Food & Shopping", noun: "Obst", gender: "das", plural: "(no plural)", english: "fruit" },
    { category: "Nouns: Food & Shopping", noun: "Wasser", gender: "das", plural: "(no plural)", english: "water" },
    { category: "Nouns: Food & Shopping", noun: "Hähnchen", gender: "das", plural: "die Hähnchen", english: "chicken" },
    { category: "Nouns: Food & Shopping", noun: "Brötchen", gender: "das", plural: "die Brötchen", english: "bread roll" },
    { category: "Nouns: Food & Shopping", noun: "Salz", gender: "das", plural: "(no plural)", english: "salt" },
    { category: "Nouns: Food & Shopping", noun: "Öl", gender: "das", plural: "die Öle", english: "oil" },
    { category: "Nouns: Food & Shopping", noun: "Glas", gender: "das", plural: "die Gläser", english: "glass" },

    // --- NOUNS: Home & Furniture ---
    { category: "Nouns: Home & Furniture", noun: "Tisch", gender: "der", plural: "die Tische", english: "table" },
    { category: "Nouns: Home & Furniture", noun: "Stuhl", gender: "der", plural: "die Stühle", english: "chair" },
    { category: "Nouns: Home & Furniture", noun: "Schrank", gender: "der", plural: "die Schränke", english: "closet, cupboard" },
    { category: "Nouns: Home & Furniture", noun: "Kühlschrank", gender: "der", plural: "die Kühlschränke", english: "refrigerator" },
    { category: "Nouns: Home & Furniture", noun: "Balkon", gender: "der", plural: "die Balkone", english: "balcony" },
    { category: "Nouns: Home & Furniture", noun: "Garten", gender: "der", plural: "die Gärten", english: "garden" },
    { category: "Nouns: Home & Furniture", noun: "Flur", gender: "der", plural: "die Flure", english: "hallway" },
    { category: "Nouns: Home & Furniture", noun: "Stock", gender: "der", plural: "die Stockwerke", english: "floor (level)" },
    { category: "Nouns: Home & Furniture", noun: "Herd", gender: "der", plural: "die Herde", english: "stove" },
    { category: "Nouns: Home & Furniture", noun: "Sessel", gender: "der", plural: "die Sessel", english: "armchair" },
    { category: "Nouns: Home & Furniture", noun: "Teppich", gender: "der", plural: "die Teppiche", english: "carpet, rug" },
    { category: "Nouns: Home & Furniture", noun: "Lampe", gender: "die", plural: "die Lampen", english: "lamp" },
    { category: "Nouns: Home & Furniture", noun: "Küche", gender: "die", plural: "die Küchen", english: "kitchen" },
    { category: "Nouns: Home & Furniture", noun: "Wohnung", gender: "die", plural: "die Wohnungen", english: "apartment" },
    { category: "Nouns: Home & Furniture", noun: "Tür", gender: "die", plural: "die Türen", english: "door" },
    { category: "Nouns: Home & Furniture", noun: "Couch", gender: "die", plural: "die Couchen", english: "couch" },
    { category: "Nouns: Home & Furniture", noun: "Dusche", gender: "die", plural: "die Duschen", english: "shower" },
    { category: "Nouns: Home & Furniture", noun: "Garage", gender: "die", plural: "die Garagen", english: "garage" },
    { category: "Nouns: Home & Furniture", noun: "Wand", gender: "die", plural: "die Wände", english: "wall" },
    { category: "Nouns: Home & Furniture", noun: "Treppe", gender: "die", plural: "die Treppen", english: "stairs" },
    { category: "Nouns: Home & Furniture", noun: "Miete", gender: "die", plural: "die Mieten", english: "rent" },
    { category: "Nouns: Home & Furniture", noun: "Bett", gender: "das", plural: "die Betten", english: "bed" },
    { category: "Nouns: Home & Furniture", noun: "Sofa", gender: "das", plural: "die Sofas", english: "sofa" },
    { category: "Nouns: Home & Furniture", noun: "Regal", gender: "das", plural: "die Regale", english: "shelf" },
    { category: "Nouns: Home & Furniture", noun: "Haus", gender: "das", plural: "die Häuser", english: "house" },
    { category: "Nouns: Home & Furniture", noun: "Zimmer", gender: "das", plural: "die Zimmer", english: "room" },
    { category: "Nouns: Home & Furniture", noun: "Wohnzimmer", gender: "das", plural: "die Wohnzimmer", english: "living room" },
    { category: "Nouns: Home & Furniture", noun: "Schlafzimmer", gender: "das", plural: "die Schlafzimmer", english: "bedroom" },
    { category: "Nouns: Home & Furniture", noun: "Badezimmer", gender: "das", plural: "die Badezimmer", english: "bathroom" },
    { category: "Nouns: Home & Furniture", noun: "Fenster", gender: "das", plural: "die Fenster", english: "window" },
    
    // // --- VERBS (Regular) ---
    // { category: "Verbs (Regular)", verb: "wohnen", ich: "ich wohne", du: "du wohnst", er_sie_es: "er wohnt", english: "to live, reside" },
    // { category: "Verbs (Regular)", verb: "lernen", ich: "ich lerne", du: "du lernst", er_sie_es: "er lernt", english: "to learn" },
    // { category: "Verbs (Regular)", verb: "machen", ich: "ich mache", du: "du machst", er_sie_es: "er macht", english: "to do, make" },
    // { category: "Verbs (Regular)", verb: "kochen", ich: "ich koche", du: "du kochst", er_sie_es: "er kocht", english: "to cook" },
    // { category: "Verbs (Regular)", verb: "spielen", ich: "ich spiele", du: "du spielst", er_sie_es: "er spielt", english: "to play" },
    // { category: "Verbs (Regular)", verb: "hören", ich: "ich höre", du: "du hörst", er_sie_es: "er hört", english: "to hear, listen" },
    // { category: "Verbs (Regular)", verb: "kaufen", ich: "ich kaufe", du: "du kaufst", er_sie_es: "er kauft", english: "to buy" },
    // { category: "Verbs (Regular)", verb: "fragen", ich: "ich frage", du: "du fragst", er_sie_es: "er fragt", english: "to ask" },
    // { category: "Verbs (Regular)", verb: "sagen", ich: "ich sage", du: "du sagst", er_sie_es: "er sagt", english: "to say" },
    // { category: "Verbs (Regular)", verb: "arbeiten", ich: "ich arbeite", du: "du arbeitest", er_sie_es: "er arbeitet", english: "to work" },
    // { category: "Verbs (Regular)", verb: "leben", ich: "ich lebe", du: "du lebst", er_sie_es: "er lebt", english: "to live" },

    // // --- VERBS (Irregular & Modal) ---
    // { category: "Verbs (Irregular & Modal)", verb: "sein", ich: "ich bin", du: "du bist", er_sie_es: "er ist", english: "to be" },
    // { category: "Verbs (Irregular & Modal)", verb: "haben", ich: "ich habe", du: "du hast", er_sie_es: "er hat", english: "to have" },
    // { category: "Verbs (Irregular & Modal)", verb: "sprechen", ich: "ich spreche", du: "du sprichst", er_sie_es: "er spricht", english: "to speak" },
    // { category: "Verbs (Irregular & Modal)", verb: "essen", ich: "ich esse", du: "du isst", er_sie_es: "er isst", english: "to eat" },
    // { category: "Verbs (Irregular & Modal)", verb: "nehmen", ich: "ich nehme", du: "du nimmst", er_sie_es: "er nimmt", english: "to take" },
    // { category: "Verbs (Irregular & Modal)", verb: "fahren", ich: "ich fahre", du: "du fährst", er_sie_es: "er fährt", english: "to drive, ride" },
    // { category: "Verbs (Irregular & Modal)", verb: "lesen", ich: "ich lese", du: "du liest", er_sie_es: "er liest", english: "to read" },
    // { category: "Verbs (Irregular & Modal)", verb: "sehen", ich: "ich sehe", du: "du siehst", er_sie_es: "er sieht", english: "to see" },
    // { category: "Verbs (Irregular & Modal)", verb: "geben", ich: "ich gebe", du: "du gibst", er_sie_es: "er gibt", english: "to give" },
    // { category: "Verbs (Irregular & Modal)", verb: "können", ich: "ich kann", du: "du kannst", er_sie_es: "er kann", english: "to be able to, can" },
    // { category: "Verbs (Irregular & Modal)", verb: "müssen", ich: "ich muss", du: "du musst", er_sie_es: "er muss", english: "to have to, must" },
    // { category: "Verbs (Irregular & Modal)", verb: "wollen", ich: "ich will", du: "du willst", er_sie_es: "er will", english: "to want to" },
    // { category: "Verbs (Irregular & Modal)", verb: "mögen", ich: "ich mag", du: "du magst", er_sie_es: "er mag", english: "to like" },
    
    // // --- VERBS (Separable) ---
    // { category: "Verbs (Separable)", verb: "einkaufen", ich: "ich kaufe ein", du: "du kaufst ein", er_sie_es: "er kauft ein", english: "to shop (for groceries)" },
    // { category: "Verbs (Separable)", verb: "anrufen", ich: "ich rufe an", du: "du rufst an", er_sie_es: "er ruft an", english: "to call (on the phone)" },
    // { category: "Verbs (Separable)", verb: "mitbringen", ich: "ich bringe mit", du: "du bringst mit", er_sie_es: "er bringt mit", english: "to bring along" },
    // { category: "Verbs (Separable)", verb: "einladen", ich: "ich lade ein", du: "du lädst ein", er_sie_es: "er lädt ein", english: "to invite" },
    // { category: "Verbs (Separable)", verb: "aufräumen", ich: "ich räume auf", du: "du räumst auf", er_sie_es: "er räumt auf", english: "to tidy up" },
    // { category: "Verbs (Separable)", verb: "abholen", ich: "ich hole ab", du: "du holst ab", er_sie_es: "er holt ab", english: "to pick up (someone)" },
    
    // // --- Adjectives & Adverbs ---
    // { category: "Adjectives & Adverbs", german: "groß / klein", english: "big / small" },
    // { category: "Adjectives & Adverbs", german: "gut / schlecht", english: "good / bad" },
    // { category: "Adjectives & Adverbs", german: "schön / hässlich", english: "beautiful / ugly" },
    // { category: "Adjectives & Adverbs", german: "neu / alt", english: "new / old" },
    // { category: "Adjectives & Adverbs", german: "teuer / billig", english: "expensive / cheap" },
    // { category: "Adjectives & Adverbs", german: "hell / dunkel", english: "bright / dark" },
    // { category: "Adjectives & Adverbs", german: "gern / nicht gern", english: "gladly (like to) / not gladly" },
    // { category: "Adjectives & Adverbs", german: "immer / oft / manchmal / selten / nie", english: "always / often / sometimes / rarely / never" },
    // { category: "Adjectives & Adverbs", german: "sehr", english: "very" },
    // { category: "Adjectives & Adverbs", german: "zu", english: "too (as in 'too expensive')" },
    
    // // --- Colors ---
    // { category: "Colors", german: "rot", english: "red" },
    // { category: "Colors", german: "blau", english: "blue" },
    // { category: "Colors", german: "grün", english: "green" },
    // { category: "Colors", german: "gelb", english: "yellow" },
    // { category: "Colors", german: "schwarz", english: "black" },
    // { category: "Colors", german: "weiß", english: "white" },
    // { category: "Colors", german: "grau", english: "gray" },
    // { category: "Colors", german: "braun", english: "brown" },
    
    // // --- Grammar & Phrases ---
    // { category: "Grammar & Phrases", german: "Wie geht's?", english: "How's it going?" },
    // { category: "Grammar & Phrases", german: "Es geht.", english: "It's okay. / So-so." },
    // { category: "Grammar & Phrases", german: "Gute Idee!", english: "Good idea!" },
    // { category: "Grammar & Phrases", german: "Leider nicht.", english: "Unfortunately not." },
    // { category: "Grammar & Phrases", german: "Vielleicht", english: "Maybe, perhaps" },
    // { category: "Grammar & Phrases", german: "zusammen / getrennt", english: "together / separate (when paying)" },
    // { category: "Grammar & Phrases", german: "Nominativ", english: "The subject case (der, die, das)" },
    // { category: "Grammar & Phrases", german: "Akkusativ", english: "The direct object case (den, die, das)" },
    // { category: "Grammar & Phrases", german: "Präteritum von sein: ich war", english: "Past tense of 'to be': I was" },
    // { category: "Grammar & Phrases", german: "Präteritum von haben: ich hatte", english: "Past tense of 'to have': I had" }
];

// --- The rest of your JavaScript functions (populateCategories, resetAndBuildDeck, etc.) go here ---
// (No changes are needed for the functions from the previous response)

// --- STATE MANAGEMENT ---
let currentDeck = [];
let fullFilteredDeck = []; // For the word list view
let knownWords = [];
let practiceWords = [];
let isShuffled = false;
let currentSort = { key: 'noun', asc: true };

// --- DOM ELEMENTS ---
const categoryFilter = document.getElementById('category-filter');
const genderFilter = document.getElementById('gender-filter');
const shuffleBtn = document.getElementById('shuffle-btn');
const viewToggleBtn = document.getElementById('view-toggle-btn');
const flashcardView = document.getElementById('flashcard-view');
const wordListView = document.getElementById('word-list-container');
const flashcardDeck = document.getElementById('flashcard-deck');
const emptyDeckMessage = document.getElementById('empty-deck-message');
const assessmentButtons = document.getElementById('assessment-buttons');
const knowBtn = document.getElementById('btn-know');
const practiceBtn = document.getElementById('btn-practice');
const totalCountEl = document.getElementById('progress-total');
const knownCountEl = document.getElementById('progress-known');
const practiceCountEl = document.getElementById('progress-practice');
const restartPracticeBtn = document.getElementById('restart-practice-btn');
const wordListTbody = document.getElementById('word-list-tbody');
const wordListSearch = document.getElementById('word-list-search');

// --- CORE FUNCTIONS ---

function populateCategories() {
    const categories = [...new Set(allWords.map(word => word.category))];
    categoryFilter.innerHTML = '<option value="all">All Topics</option>';
    categories.sort().forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedGender = genderFilter.value;
    return allWords.filter(word => {
        const categoryMatch = selectedCategory === 'all' || word.category === selectedCategory;
        // Gender filter only applies to nouns
        const genderMatch = (word.gender && (selectedGender === 'all' || word.gender === selectedGender)) || !word.gender;
        return categoryMatch && genderMatch;
    });
}

function resetAndBuildDeck() {
    fullFilteredDeck = applyFilters();
    currentDeck = [...fullFilteredDeck]; 
    if (isShuffled) {
        shuffleArray(currentDeck);
    }
    knownWords = [];
    practiceWords = [];
    renderNextCard();
    updateProgress();
    renderWordList();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCardElement(wordData) {
    const card = document.createElement('div');
    card.className = 'flashcard';
    const inner = document.createElement('div');
    inner.className = 'flashcard-inner';

    let frontHTML, backHTML;

    if (wordData.noun) { // It's a noun
        frontHTML = `<h2 class="flashcard-word">${wordData.noun}</h2>`;
        backHTML = `
            <button class="listen-btn" title="Listen to pronunciation">🔊</button>
            <p class="article-text ${wordData.gender}">${wordData.gender}</p>
            <h2 class="flashcard-word">${wordData.noun}</h2>
            <p class="plural-text">${wordData.plural}</p>
            <p class="english-text">${wordData.english}</p>
        `;
        inner.classList.add(`article-${wordData.gender}`);
    } else if (wordData.verb) { // It's a verb
        frontHTML = `<h2 class="flashcard-word">${wordData.verb}</h2><p class="english-text">(${wordData.english})</p>`;
        backHTML = `
            <button class="listen-btn" title="Listen to pronunciation">🔊</button>
            <h2 class="flashcard-word">${wordData.verb}</h2>
            <p class="plural-text">${wordData.ich}<br>${wordData.du}<br>${wordData.er_sie_es}</p>
            <p class="english-text">${wordData.english}</p>
        `;
    } else { // It's an adjective or phrase
        frontHTML = `<h2 class="flashcard-word">${wordData.german}</h2>`;
        backHTML = `
            <button class="listen-btn" title="Listen to pronunciation">🔊</button>
            <h2 class="flashcard-word">${wordData.german}</h2>
            <p class="english-text">${wordData.english}</p>
        `;
    }

    const front = document.createElement('div');
    front.className = 'flashcard-front';
    front.innerHTML = frontHTML;

    const back = document.createElement('div');
    back.className = 'flashcard-back';
    back.innerHTML = backHTML;

    back.querySelector('.listen-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        speak(wordData.noun || wordData.verb || wordData.german);
    });

    inner.append(front, back);
    card.appendChild(inner);
    card.addEventListener('click', () => {
        if (!card.classList.contains('is-flipped')) {
            card.classList.add('is-flipped');
            assessmentButtons.classList.add('visible');
        }
    });
    return card;
}


function renderNextCard() {
    flashcardDeck.innerHTML = '';
    flashcardDeck.appendChild(emptyDeckMessage);
    assessmentButtons.classList.remove('visible');
    if (currentDeck.length === 0) {
        emptyDeckMessage.style.display = 'block';
        return;
    }
    emptyDeckMessage.style.display = 'none';
    const cardEl = createCardElement(currentDeck[currentDeck.length - 1]);
    flashcardDeck.appendChild(cardEl);
}

function updateProgress() {
    totalCountEl.textContent = currentDeck.length;
    knownCountEl.textContent = knownWords.length;
    practiceCountEl.textContent = practiceWords.length;
    restartPracticeBtn.classList.toggle('active', practiceWords.length > 0);
    restartPracticeBtn.disabled = practiceWords.length === 0;
}

function handleAssessment(knewIt) {
    const topCard = flashcardDeck.querySelector('.flashcard');
    if (!topCard || !topCard.classList.contains('is-flipped')) return;
    const removedWord = currentDeck.pop();
    if (knewIt) {
        knownWords.push(removedWord);
        topCard.classList.add('swiped-right');
    } else {
        practiceWords.push(removedWord);
        topCard.classList.add('swiped-left');
    }
    assessmentButtons.classList.remove('visible');
    setTimeout(() => {
        renderNextCard();
        updateProgress();
    }, 400);
}

function handleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
    shuffleBtn.textContent = isShuffled ? 'Shuffle (Active)' : 'Shuffle Deck';
    resetAndBuildDeck();
}

function restartPracticePile() {
    if (practiceWords.length > 0) {
        currentDeck.push(...practiceWords);
        practiceWords = [];
        if (isShuffled) shuffleArray(currentDeck);
        renderNextCard();
        updateProgress();
    }
}

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}

function toggleView() {
    if (flashcardView.style.display === 'none') {
        flashcardView.style.display = 'flex';
        wordListView.style.display = 'none';
        viewToggleBtn.textContent = 'Show Word List';
    } else {
        flashcardView.style.display = 'none';
        wordListView.style.display = 'block';
        viewToggleBtn.textContent = 'Show Flashcards';
        renderWordList();
    }
}

function renderWordList(searchTerm = '') {
    let wordsToRender = fullFilteredDeck.filter(word => {
        const term = searchTerm.toLowerCase();
        return (word.noun && word.noun.toLowerCase().includes(term)) ||
               (word.english && word.english.toLowerCase().includes(term)) ||
               (word.verb && word.verb.toLowerCase().includes(term)) ||
               (word.german && word.german.toLowerCase().includes(term));
    });

    const sortKey = currentSort.key;
    wordsToRender.sort((a, b) => {
        const valA = (a[sortKey] || "").toLowerCase();
        const valB = (b[sortKey] || "").toLowerCase();
        if (valA < valB) return currentSort.asc ? -1 : 1;
        if (valA > valB) return currentSort.asc ? 1 : -1;
        return 0;
    });

    wordListTbody.innerHTML = wordsToRender.map(word => {
        if (word.noun) { // Noun row
            return `<tr>
                <td><span class="gender-dot ${word.gender}"></span>${word.gender}</td>
                <td>${word.noun}</td>
                <td>${word.plural}</td>
                <td>${word.english}</td>
            </tr>`;
        } else if (word.verb) { // Verb row
             return `<tr>
                <td colspan="2">${word.verb}</td>
                <td>${word.du} / ${word.er_sie_es}</td>
                <td>${word.english}</td>
            </tr>`;
        } else { // Adjective/Phrase row
             return `<tr>
                <td colspan="2">${word.german}</td>
                <td colspan="2">${word.english}</td>
            </tr>`;
        }
    }).join('');
}


function handleSort(e) {
    const key = e.target.dataset.sort;
    if (!key) return;

    document.querySelectorAll('.word-list-table th').forEach(th => {
        if(th !== e.target) th.className = '';
    });

    if (currentSort.key === key) {
        currentSort.asc = !currentSort.asc;
    } else {
        currentSort.key = key;
        currentSort.asc = true;
    }
    
    e.target.className = currentSort.asc ? 'sort-asc' : 'sort-desc';
    renderWordList(wordListSearch.value);
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    categoryFilter.addEventListener('change', resetAndBuildDeck);
    genderFilter.addEventListener('change', resetAndBuildDeck);
    shuffleBtn.addEventListener('click', handleShuffle);
    viewToggleBtn.addEventListener('click', toggleView);
    knowBtn.addEventListener('click', () => handleAssessment(true));
    practiceBtn.addEventListener('click', () => handleAssessment(false));
    restartPracticeBtn.addEventListener('click', restartPracticePile);
    wordListSearch.addEventListener('input', (e) => renderWordList(e.target.value));
    document.querySelector('.word-list-table thead').addEventListener('click', handleSort);

    // --- INITIALIZATION ---
    populateCategories();
    resetAndBuildDeck();
    flashcardView.style.display = 'flex';
    wordListView.style.display = 'none';
});

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

// ... (keep all your existing flashcard functions: populateCategories, resetAndBuildDeck, etc.)

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Add this line
    handleMobileMenu(); 

    // Keep all existing event listeners
    categoryFilter.addEventListener('change', resetAndBuildDeck);
    genderFilter.addEventListener('change', resetAndBuildDeck);
    shuffleBtn.addEventListener('click', handleShuffle);
    viewToggleBtn.addEventListener('click', toggleView);
    knowBtn.addEventListener('click', () => handleAssessment(true));
    practiceBtn.addEventListener('click', () => handleAssessment(false));
    restartPracticeBtn.addEventListener('click', restartPracticePile);
    wordListSearch.addEventListener('input', (e) => renderWordList(e.target.value));
    document.querySelector('.word-list-table thead').addEventListener('click', handleSort);

    // --- INITIALIZATION ---
    populateCategories();
    resetAndBuildDeck();
    flashcardView.style.display = 'flex';
    wordListView.style.display = 'none';
});