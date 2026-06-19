// ============================================================
// Nutry World — bilingual content (IT / EN)
// Voice: playful, warm, a little cheeky. We praise the nutria.
// ============================================================

export const NAV = {
  it: [
    { to: "/", label: "Home" },
    { to: "/nutryti", label: "Nutryti" },
    { to: "/pellame", label: "Pellame" },
    { to: "/pellicce", label: "Pellicce" },
    { to: "/visitaci", label: "Visitaci" },
  ],
  en: [
    { to: "/", label: "Home" },
    { to: "/nutryti", label: "Nutryti" },
    { to: "/pellame", label: "Leather" },
    { to: "/pellicce", label: "Fur" },
    { to: "/visitaci", label: "Visit us" },
  ],
};

export const COMMON = {
  it: {
    book: "Prenota una visita",
    discover: "Scopri",
    backHome: "Torna alla home",
    langName: "EN",
    footerTagline: "La prima fattoria tropicale di nutrie.",
    footerNote:
      "Nutry World è un progetto dimostrativo. Niente paludi sono state danneggiate nella realizzazione di questo sito.",
    menu: "Menu",
  },
  en: {
    book: "Book a visit",
    discover: "Discover",
    backHome: "Back home",
    langName: "IT",
    footerTagline: "The first tropical nutria farm.",
    footerNote:
      "Nutry World is a demonstration project. No swamps were harmed in the making of this website.",
    menu: "Menu",
  },
};

export const HOME = {
  it: {
    kicker: "🌴 Benvenuti a Nutry World",
    title: "Dalla palude\nalla meraviglia",
    sub: "La nutria come non l'hai mai vista: pulita, curata, coccolata. E sì — anche deliziosa.",
    scrollHint: "Scorri per esplorare la fattoria",
    visit: "Prenota una visita",
    explore: "Esplora i prodotti",
    storyKicker: "La nostra storia",
    storyTitle: "Due nutrie. Un'idea un po' folle.",
    storyBody:
      "Tutto è iniziato con un maschio e una femmina. Li abbiamo lavati, curati, vaccinati e trattati come piccole star. Si sono trovati benissimo — talmente bene che oggi la famiglia conta centinaia di cuccioli felici. Da animale di palude a fiore all'occhiello: questa è la rivincita della nutria.",
    pillarsKicker: "Tutto della nutria, niente sprechi",
    pillarsTitle: "Tre mondi, un solo animale",
    pillars: [
      {
        tag: "Nutryti",
        to: "/nutryti",
        title: "La carne",
        body: "Magra, saporita, sorprendente. La carne essiccata che gli chef vogliono sul menù.",
        accent: "hibiscus",
        mascot: "nutryti",
      },
      {
        tag: "Pellame",
        to: "/pellame",
        title: "Il pellame",
        body: "Portafogli, borse e zaini in vera pelle di nutria. Artigianato che dura.",
        accent: "fur",
        mascot: "pellame",
      },
      {
        tag: "Visitaci",
        to: "/visitaci",
        title: "L'esperienza",
        body: "Accarezza le nutrie e nuota con i cuccioli nella nostra piscina tropicale.",
        accent: "lagoon",
        mascot: "piscina",
      },
    ],
    ctaTitle: "Vieni a conoscere Nutry",
    ctaBody:
      "Porta la famiglia, la classe o semplicemente la tua curiosità. La palude non è mai stata così accogliente.",
  },
  en: {
    kicker: "🌴 Welcome to Nutry World",
    title: "From the swamp\nto wonderland",
    sub: "The nutria like you've never seen it: clean, cared for, cuddled. And yes — delicious too.",
    scrollHint: "Scroll to explore the farm",
    visit: "Book a visit",
    explore: "Explore the products",
    storyKicker: "Our story",
    storyTitle: "Two nutrias. One slightly crazy idea.",
    storyBody:
      "It all started with a male and a female. We washed them, cared for them, vaccinated them and treated them like little stars. They loved it — so much that today the family counts hundreds of happy pups. From swamp critter to crown jewel: this is the nutria's comeback.",
    pillarsKicker: "All of the nutria, nothing wasted",
    pillarsTitle: "Three worlds, one animal",
    pillars: [
      {
        tag: "Nutryti",
        to: "/nutryti",
        title: "The meat",
        body: "Lean, savoury, surprising. The cured meat chefs want on the menu.",
        accent: "hibiscus",
        mascot: "nutryti",
      },
      {
        tag: "Leather",
        to: "/pellame",
        title: "The leather",
        body: "Wallets, bags and backpacks in genuine nutria leather. Craft that lasts.",
        accent: "fur",
        mascot: "pellame",
      },
      {
        tag: "Visit",
        to: "/visitaci",
        title: "The experience",
        body: "Pet the nutrias and swim with the pups in our tropical pool.",
        accent: "lagoon",
        mascot: "piscina",
      },
    ],
    ctaTitle: "Come and meet Nutry",
    ctaBody:
      "Bring the family, the class, or just your curiosity. The swamp has never been this welcoming.",
  },
};

export const NUTRYTI = {
  it: {
    mascot: "nutryti",
    accent: "hibiscus",
    kicker: "🍖 Nutryti — la carne",
    title: "Buona come non te l'aspetti",
    lede: "Una carne magra, delicata e ricca di gusto. Allevata pulita, trattata con rispetto, pronta a stupire anche i palati più esigenti.",
    features: [
      { t: "Magra & saporita", d: "Profilo nutrizionale sorprendente, sapore deciso ma gentile." },
      { t: "Filiera pulita", d: "Animali lavati, sanificati e vaccinati: sani dal primo giorno." },
      { t: "Pronta in cucina", d: "Tagli versatili e la nostra specialità: la carne essiccata." },
    ],
    driedTitle: "La nostra carne essiccata",
    driedBody:
      "Il prodotto simbolo, in vendita in loco. Stagionata lentamente, perfetta da affettare per un tagliere, da portare in escursione o da regalare a chi pensa di aver già assaggiato tutto.",
    usesTitle: "Idee in cucina",
    uses: [
      "Tagliere con la nostra essiccata e confetture",
      "Ragù lento per pasta fresca",
      "Tartare leggera con agrumi",
      "Spiedini glassati all'ambra",
    ],
    chefTitle: "Per ristoratori",
    chefBody:
      "Cerchi un ingrediente che nessuno ha sul menù? Ti raccontiamo il nostro processo — dalla coppia iniziale pulita e vaccinata, fino alla riproduzione e alla lavorazione — per offrirti una carne sana, tracciabile e di ottimo sapore. Scrivici e organizziamo una degustazione.",
    chefCta: "Richiedi una degustazione",
  },
  en: {
    mascot: "nutryti",
    accent: "hibiscus",
    kicker: "🍖 Nutryti — the meat",
    title: "Better than you'd ever expect",
    lede: "A lean, delicate, flavour-rich meat. Raised clean, handled with respect, ready to surprise even the most demanding palates.",
    features: [
      { t: "Lean & savoury", d: "A surprising nutritional profile, bold yet gentle flavour." },
      { t: "Clean supply chain", d: "Animals washed, sanitised and vaccinated: healthy from day one." },
      { t: "Kitchen-ready", d: "Versatile cuts and our specialty: the cured meat." },
    ],
    driedTitle: "Our cured meat",
    driedBody:
      "The signature product, sold on site. Slowly aged, perfect to slice for a board, to take on a hike, or to gift to anyone who thinks they've already tasted everything.",
    usesTitle: "Kitchen ideas",
    uses: [
      "Charcuterie board with our cured meat & preserves",
      "Slow ragù for fresh pasta",
      "Light tartare with citrus",
      "Amber-glazed skewers",
    ],
    chefTitle: "For restaurateurs",
    chefBody:
      "Looking for an ingredient nobody else has on the menu? We'll walk you through our process — from the clean, vaccinated starting pair, to breeding and processing — to give you a healthy, traceable, great-tasting meat. Write to us and we'll set up a tasting.",
    chefCta: "Request a tasting",
  },
};

export const PELLAME = {
  it: {
    mascot: "pellame",
    accent: "fur",
    kicker: "👜 Pellame",
    title: "Pelle che racconta una storia",
    lede: "Dalla nutria nasce un pellame morbido e resistente. Lo trasformiamo in oggetti che invecchiano bene e si affezionano a te.",
    products: [
      { t: "Portafogli", d: "Compatti, robusti, con quella patina che migliora negli anni." },
      { t: "Borse", d: "Linee pulite e il nostro monogramma “N”. Per tutti i giorni o per le occasioni." },
      { t: "Zaini", d: "Capienti e morbidi, pensati per durare più dei tuoi piani." },
      { t: "Accessori", d: "Cinture, portachiavi e piccola pelletteria fatta a mano." },
    ],
    craftTitle: "Artigianato, non produzione",
    craftBody:
      "Ogni pezzo è lavorato a mano e pensato per durare. Niente sprechi: la pelle è parte del nostro modello a spreco zero, in cui dell'animale si valorizza tutto.",
    note: "Le foto dei prodotti e le schede dettagliate arriveranno presto. Per ora, lascia che sia Nutry a mostrarti la collezione.",
  },
  en: {
    mascot: "pellame",
    accent: "fur",
    kicker: "👜 Leather",
    title: "Leather that tells a story",
    lede: "The nutria yields a soft yet sturdy leather. We turn it into objects that age beautifully and grow attached to you.",
    products: [
      { t: "Wallets", d: "Compact, rugged, with a patina that only gets better with the years." },
      { t: "Bags", d: "Clean lines and our “N” monogram. For every day or for the occasion." },
      { t: "Backpacks", d: "Roomy and soft, built to outlast your plans." },
      { t: "Accessories", d: "Belts, keychains and small handmade leather goods." },
    ],
    craftTitle: "Craft, not manufacturing",
    craftBody:
      "Every piece is handmade and built to last. Nothing wasted: the leather is part of our zero-waste model, where every part of the animal is valued.",
    note: "Product photos and detailed specs are coming soon. For now, let Nutry show you the collection.",
  },
};

export const PELLICCE = {
  it: {
    mascot: "pellicce",
    accent: "leaf",
    kicker: "🧥 Pellicce",
    title: "Calda, morbida, sorprendente",
    lede: "Il pelo della nutria è da sempre apprezzato per il calore e la morbidezza. Lo lavoriamo per capi e dettagli moda, con misura e rispetto.",
    points: [
      { t: "Morbidezza rara", d: "Una mano avvolgente che si sente al primo tocco." },
      { t: "Calore reale", d: "Isolamento naturale, pensato per il freddo vero." },
      { t: "Dettagli moda", d: "Colli, bordi e finiture per capi selezionati." },
    ],
    body:
      "Trattiamo la pelliccia come ciò che è: un materiale prezioso che merita lavorazioni attente e un posizionamento consapevole. È la parte più delicata del nostro mondo, e la raccontiamo con trasparenza.",
    note: "Collezione in definizione. Le immagini dei capi verranno aggiunte a breve.",
  },
  en: {
    mascot: "pellicce",
    accent: "leaf",
    kicker: "🧥 Fur",
    title: "Warm, soft, surprising",
    lede: "Nutria fur has long been prized for its warmth and softness. We craft it into garments and fashion details, with measure and respect.",
    points: [
      { t: "Rare softness", d: "An enveloping hand you feel at the very first touch." },
      { t: "Real warmth", d: "Natural insulation, made for genuine cold." },
      { t: "Fashion details", d: "Collars, trims and finishes for selected garments." },
    ],
    body:
      "We treat fur as what it is: a precious material that deserves careful craft and thoughtful positioning. It is the most delicate part of our world, and we tell its story transparently.",
    note: "Collection in the works. Garment images will be added shortly.",
  },
};

export const VISITACI = {
  it: {
    mascot: "piscina",
    accent: "lagoon",
    kicker: "🏝️ Visitaci",
    title: "Una giornata a Nutry World",
    lede: "Vieni a conoscere le nutrie dal vivo: accarezzale, segui i cuccioli e — se te la senti — fatti un tuffo con loro nella piscina tropicale.",
    experiences: [
      { t: "Incontra le nutrie", d: "Le nostre star ti aspettano. Pulite, curate e incredibilmente socievoli." },
      { t: "Nuota con i cuccioli", d: "La nostra piscina apposita: l'esperienza che nessuno si aspetta da una nutria." },
      { t: "Acquista in loco", d: "Carne essiccata, pellame e pellicce direttamente dalla fattoria." },
    ],
    bookTitle: "Prenota la tua visita",
    bookBody: "Famiglie e visitatori singoli: scegli giorno e orario, al resto pensiamo noi.",
    bookCta: "Prenota ora",
    groupTitle: "Scolaresche e grandi gruppi",
    groupBody:
      "Per scuole e gruppi numerosi organizziamo visite dedicate. Lasciaci i dettagli e ti ricontattiamo con un programma su misura.",
    form: {
      name: "Nome e cognome",
      org: "Scuola / organizzazione",
      email: "Email",
      people: "Numero di persone",
      date: "Data preferita",
      message: "Raccontaci cosa ti serve",
      submit: "Invia richiesta",
      done: "Grazie! Richiesta registrata (demo). Ti ricontatteremo presto.",
    },
  },
  en: {
    mascot: "piscina",
    accent: "lagoon",
    kicker: "🏝️ Visit us",
    title: "A day at Nutry World",
    lede: "Come and meet the nutrias for real: pet them, follow the pups and — if you dare — take a dip with them in the tropical pool.",
    experiences: [
      { t: "Meet the nutrias", d: "Our stars are waiting. Clean, cared for and incredibly sociable." },
      { t: "Swim with the pups", d: "Our dedicated pool: the experience nobody expects from a nutria." },
      { t: "Shop on site", d: "Cured meat, leather and fur straight from the farm." },
    ],
    bookTitle: "Book your visit",
    bookBody: "Families and individual visitors: pick a day and time, we'll handle the rest.",
    bookCta: "Book now",
    groupTitle: "Schools & large groups",
    groupBody:
      "For schools and large groups we organise dedicated visits. Leave us the details and we'll get back to you with a tailored programme.",
    form: {
      name: "Full name",
      org: "School / organisation",
      email: "Email",
      people: "Number of people",
      date: "Preferred date",
      message: "Tell us what you need",
      submit: "Send request",
      done: "Thank you! Request recorded (demo). We'll be in touch soon.",
    },
  },
};
