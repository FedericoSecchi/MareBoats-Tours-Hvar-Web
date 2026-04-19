export type GuideFaq = { question: string; answer: string };

// ──────────────────────────────────────────────
// Section 1 — Where We Go
// ──────────────────────────────────────────────
export const whereWeGoIntro =
  'Most days we head to the Blue Cave before the catamarans arrive, then drift through the Pakleni Islands for swimming and a lunch stop somewhere you can only reach by boat. Your route is flexible — tell us what you want and we adapt.';

export const whereWeGoDestinations: { name: string; detail: string }[] = [
  {
    name: 'Blue Cave (Biševo)',
    detail: 'We time it for the quiet window so you skip the queue. Entrance €20–25 paid on site.',
  },
  {
    name: 'Pakleni Islands',
    detail: 'Palmižana, Stipanska, Vlaka — clear water, good snorkelling, easy lunch stops.',
  },
  {
    name: 'Vis & Stiniva',
    detail: 'On longer days we can push to Vis. Stiniva cove is worth the extra hour.',
  },
  {
    name: 'Hidden snorkel spots',
    detail: "Small coves between the islands — most tour boats skip them. We don't.",
  },
];

// ──────────────────────────────────────────────
// Section 2 — What to Bring (6 items)
// ──────────────────────────────────────────────
export type BringItem = {
  key: 'sunscreen' | 'towel' | 'snorkel' | 'waterShoes' | 'swimsuit' | 'cash';
  label: string;
  detail: string;
};

export const whatToBring: BringItem[] = [
  {
    key: 'sunscreen',
    label: 'Sunscreen',
    detail: 'Reef-safe if you have it — we sail through a protected marine area.',
  },
  {
    key: 'towel',
    label: 'Towel',
    detail: 'Quick-dry works best. We do not provide towels on board.',
  },
  {
    key: 'snorkel',
    label: 'Snorkel mask',
    detail: 'We have gear in limited quantity — bring yours so you can swim every stop.',
  },
  {
    key: 'waterShoes',
    label: 'Water shoes',
    detail: 'Optional, but worth it if you are sensitive to rocky beaches.',
  },
  {
    key: 'swimsuit',
    label: 'Swimsuit',
    detail: 'Wear it under your clothes — first swim happens within the hour.',
  },
  {
    key: 'cash',
    label: 'Cash (EUR)',
    detail: 'Most island restaurants take cards but genuinely prefer cash.',
  },
];

// ──────────────────────────────────────────────
// Section 3 — Rules & Rentals (accordion)
// ──────────────────────────────────────────────
export type RuleStatus = 'allowed' | 'forbidden' | 'note';

export type Rule = {
  key: string;
  status: RuleStatus;
  title: string;
  detail: string;
};

export const rulesAndRentals: Rule[] = [
  {
    key: 'glass',
    status: 'allowed',
    title: 'Glass bottles allowed',
    detail:
      'Bring whatever you like to drink — wine, beer, water, anything. Glass bottles are welcome on board.',
  },
  {
    key: 'smoking',
    status: 'forbidden',
    title: 'No smoking on board',
    detail:
      'Smoking is not allowed at any time, anywhere on the boat. We can stop at a beach if you need a break.',
  },
  {
    key: 'bathroom',
    status: 'note',
    title: 'No bathroom on board — restaurant stops',
    detail:
      'There is no toilet on the boat. We plan stops at restaurants and beaches with facilities. On a full-day tour it works out fine.',
  },
  {
    key: 'cooler',
    status: 'allowed',
    title: 'Cooler with ice included',
    detail:
      'A cooler with ice is on board — bring drinks and food and they stay cold all day. You can also bring your own cooler if you need more space.',
  },
  {
    key: 'snorkelGear',
    status: 'allowed',
    title: 'Snorkel mask welcome',
    detail:
      'We carry snorkel gear in limited quantity. Bringing your own mask and fins means you can swim at every stop, including the shallow coves.',
  },
];

// ──────────────────────────────────────────────
// Section 4 — FAQ Pre-Tour (8 questions)
// Used by both the page UI and the FAQPage JSON-LD schema.
// ──────────────────────────────────────────────
export const guideFaqs: GuideFaq[] = [
  {
    question: 'What time do we leave and how long is a full-day tour?',
    answer:
      'We leave at 10:00 from Hvar Harbour, next to the fuel station. A full-day tour runs 6–8 hours depending on the route. Please arrive 10 minutes early.',
  },
  {
    question: 'What is included in the price?',
    answer:
      'The boat, the skipper, fuel, snorkel gear (limited quantity) and a cooler with ice. Blue Cave entrance (€20–25 per person) is paid on site. Lunch and drinks are on you — we know where to stop.',
  },
  {
    question: 'Can I bring my own food and drinks?',
    answer:
      'Yes. Bring whatever you like — glass bottles included. The cooler keeps everything cold. That said, stopping for lunch at a restaurant on the islands is part of the experience and we recommend it.',
  },
  {
    question: 'Is there a bathroom on board?',
    answer:
      'No. We plan stops at restaurants and beaches where you can use facilities. On a full-day tour it works out fine.',
  },
  {
    question: 'Can I snorkel at every stop?',
    answer:
      'Yes, except inside the Blue Cave itself. We have masks on board in limited quantity, so bringing your own is a good idea — you can swim at every cove, including the shallow ones.',
  },
  {
    question: 'Do I need to know how to swim?',
    answer:
      'You should be comfortable in the water if you want to snorkel. Life jackets in adult and child sizes are on board for everyone.',
  },
  {
    question: 'Can you pick us up from our yacht or sailboat?',
    answer:
      'Yes. Our Yacht & Sailboat Water Taxi service picks you up directly from your vessel and takes you to shore, a restaurant, or a tour starting point. Send your coordinates on WhatsApp and we will sort it out.',
  },
  {
    question: 'Can I rent a boat without a skipper?',
    answer:
      'Yes, if you have the required licence. All boats include stereo, anchor, life jackets and fenders. Respect low-speed zones — Croatian maritime police patrol and fine actively. We recommend a skipper for your first time in these waters.',
  },
];

// ──────────────────────────────────────────────
// Section 5 — Weather Policy
// ──────────────────────────────────────────────
export const weatherPolicy = {
  title: 'Weather Policy & Cancellations',
  body: "The captain checks weather and sea conditions every morning before departure. If the wind, waves or visibility are not safe, we reschedule for another day at no cost — or refund in full if you can't reschedule. Safety always wins over the schedule.",
  contactNote:
    'For last-minute weather questions or changes, message Nikola directly on WhatsApp.',
};
