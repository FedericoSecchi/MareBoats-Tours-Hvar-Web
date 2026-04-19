export type GuideFaq = { question: string; answer: string };

// ──────────────────────────────────────────────
// Section 1 — Your Day on the Water
// ──────────────────────────────────────────────
export const dayOnWaterCopy =
  "We leave at 10am from Hvar Harbour. First stop is usually the Blue Cave — we time it to arrive before the big catamarans crowd in. If we have intel that it is already packed, we adjust the route and come back at the quieter window. Same hours on the water, better experience — no queues, no waiting, just the right place at the right moment. By the end of the day you'll have swum in spots most tourists never find.";

export const dayOnWaterPoints: { title: string; detail: string }[] = [
  {
    title: 'Private group only',
    detail: 'No strangers sharing the boat. Your group only — kids, friends, partners.',
  },
  {
    title: 'Route adjusts in real time',
    detail:
      'We know when spots are quiet. If the Blue Cave is packed when we arrive, we swap the order and come back later.',
  },
  {
    title: 'Snorkel gear on board',
    detail:
      'Limited quantity — bring your own mask and fins if you want to swim at every stop, including shallow coves.',
  },
  {
    title: 'Cooler with ice included',
    detail:
      'Bring your own drinks and food if you want — glass bottles welcome. The cooler keeps everything cold all day.',
  },
];

// ──────────────────────────────────────────────
// Section 2 — What to Bring
// ──────────────────────────────────────────────
export const whatToBring: {
  essentials: string[];
  optional: string[];
  drinksAndFood: string[];
} = {
  essentials: [
    'Sunscreen (reef-safe preferred — we are in a protected marine area)',
    'Towel and swimwear',
    'Hat and sunglasses',
    'Cash — most island restaurants accept cards but prefer cash',
  ],
  optional: [
    'Your own snorkel mask and fins — we have gear on board, but bringing yours means you can swim at every stop, including shallow coves',
    'Water shoes — not mandatory, but worth it if you are sensitive to rocky beaches',
    'Your own cooler — we have one on board with ice, but if you are bringing a lot, yours is welcome too',
  ],
  drinksAndFood: [
    'All drinks welcome — glass bottles included. Cans, tetra-packs and reusable bottles are obviously fine too.',
    'You can bring your own food — the cooler keeps it cold. That said, stopping to eat at a restaurant on the islands is part of the experience. We recommend it.',
  ],
};

// ──────────────────────────────────────────────
// Section 3 — On Board Rules
// ──────────────────────────────────────────────
export const onBoardRules: string[] = [
  'No smoking on board at any time.',
  'Do not hang from the bimini (the shade canopy) — it is built for shade, not for body weight.',
  "The skipper's word is final on safety and route decisions. If anyone disrespects the rules or the captain, the tour may be cancelled with no refund.",
  'No bathroom on board — we plan stops at restaurants and beaches where you can use facilities.',
];

// ──────────────────────────────────────────────
// Section 4 — Renting Without a Skipper
// ──────────────────────────────────────────────
export const rentingIntro =
  'All our boats come with stereo, anchor, life jackets, and fenders. Here is what to keep in mind before you head out.';

export const rentingRules: { title: string; detail: string }[] = [
  {
    title: 'Return the tank full',
    detail: 'We check fuel at drop-off. Refuel before returning the boat.',
  },
  {
    title: 'The dinghy (gomon) is inspected on return',
    detail:
      'Any damage must be covered. Check it with us before leaving so there are no surprises.',
  },
  {
    title: 'Respect low-speed zones',
    detail:
      'Croatian maritime police patrol actively and issue real fines. No exceptions — always slow down where required.',
  },
  {
    title: 'Do not push the engine to full throttle',
    detail:
      'These are Adriatic waters, not a race track. Enjoy the trip and look around.',
  },
  {
    title: 'Not sure about a manoeuvre? Ask',
    detail:
      "We'd rather spend ten minutes walking you through it than have you stuck somewhere.",
  },
  {
    title: 'Tell us where you want to go',
    detail:
      'We know the area. If you share your plan, we can flag anything to watch out for and point you to the best spots.',
  },
  {
    title: 'First time in these waters?',
    detail:
      'We genuinely recommend going with a skipper. The coast has hidden coves and shallow areas that are not obvious on a chart. If you still want to go alone, talk to us first.',
  },
];

// ──────────────────────────────────────────────
// Section 5 — Safety
// ──────────────────────────────────────────────
// NOTE: The "boat is licensed and insured" line is included by default.
// TODO Nikola: confirm license + insurance status before publishing.
export const safetyPoints: string[] = [
  'Life jackets in adult and child sizes — on board and ready for everyone.',
  'Full safety kit on board (first aid, flares, fire extinguisher).',
  'Skipper maintains contact with shore throughout the trip.',
  'Captain checks weather and sea conditions before every departure — if conditions are not right, we reschedule.',
  'Boat is licensed and insured under Croatian maritime regulations.',
];

// ──────────────────────────────────────────────
// Section 6 — Where We Go (Google My Maps embeds)
// ──────────────────────────────────────────────
// TODO Nikola/Fede: create three public maps in Google My Maps and
// replace the embedUrl values below. Until then we render a friendly
// placeholder card linked to Google Maps so the page still ships.
export const whereWeGoIntro =
  'Here is where we usually go — though your route is always flexible. Blue Cave before the crowds, Pakleni for swimming, and a lunch stop somewhere you can only reach by boat.';

export type WhereWeGoMap = {
  id: 'tours' | 'restaurants' | 'hvar';
  title: string;
  description: string;
  embedUrl: string | null;
  fallbackUrl: string;
};

export const whereWeGoMaps: WhereWeGoMap[] = [
  {
    id: 'tours',
    title: 'Tour Destinations',
    description:
      'Hvar Harbour, Blue Cave (Biševo), Pakleni Islands (Palmižana, Stipanska, Vlaka), Vis Island and our favourite snorkel spots.',
    embedUrl: null,
    fallbackUrl: 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA',
  },
  {
    id: 'restaurants',
    title: 'Where to Eat',
    description:
      'Restaurants in Hvar town we send guests to, plus island restaurants only reachable by boat. Some can be added as a tour stop — ask when booking.',
    embedUrl: null,
    fallbackUrl: 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA',
  },
  {
    id: 'hvar',
    title: 'Hvar Local Tips',
    description:
      'Quieter beaches, viewpoints, the local market and photo spots — useful if you arrive early or stay an extra day.',
    embedUrl: null,
    fallbackUrl: 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA',
  },
];

// ──────────────────────────────────────────────
// Section 7 — Where to Eat
// ──────────────────────────────────────────────
// TODO Nikola: confirm partner restaurant names and the exact perk
// guests get when they mention MareBoats (discount, welcome drink, etc.)
export type RestaurantPartner = {
  name: string;
  description: string;
  perk: string | null;
};

export const restaurantsHvarTown: RestaurantPartner[] = [
  // Empty until Nikola confirms — page renders a "we are building this list" placeholder.
];

export const restaurantsOnWater: RestaurantPartner[] = [
  // Empty until Nikola confirms — page renders a placeholder.
];

export const restaurantsHvarTownIntro =
  "We are building our list of recommended spots in Hvar town. Most accept cards, but they genuinely prefer cash — bring some. Message us on WhatsApp and we'll tell you where we'd go tonight.";

export const restaurantsOnWaterIntro =
  'Some of the best Adriatic restaurants are only reachable by boat. Depending on your tour we can include a lunch stop — just let us know when booking. Private water taxi from your yacht or sailboat is also available.';

// ──────────────────────────────────────────────
// Section 8 — Hotel Partners
// ──────────────────────────────────────────────
// TODO Nikola: confirm hotel name + details. Until then we render
// a placeholder card with a "has private pier" badge.
export type HotelPartner = {
  name: string;
  description: string;
  hasPrivatePier: boolean;
};

export const hotelPartners: HotelPartner[] = [
  // Empty until Nikola confirms.
];

export const hotelPartnersIntro =
  "One of our partner hotels has its own pier — you can start or end your tour directly from there, no need to come to the harbour first. Message us and we'll connect you with the right people.";

// ──────────────────────────────────────────────
// Section 10 — FAQ (replaces previous guideFaqs)
// ──────────────────────────────────────────────
export const guideFaqs: GuideFaq[] = [
  {
    question: 'Can I bring my own food and drinks on board?',
    answer:
      'Yes. You can bring whatever you like — glass bottles included. We have a cooler with ice on board, or bring your own. That said, stopping to eat at a restaurant on the islands is part of the experience — we recommend it.',
  },
  {
    question: 'Is there a bathroom on board?',
    answer:
      'No. We plan stops at restaurants and beaches where you can use facilities. It works out fine on a full-day tour.',
  },
  {
    question: 'Can I snorkel at every stop?',
    answer:
      'Yes, except inside the Blue Cave itself. We have snorkel gear on board in limited quantity. Bringing your own mask and fins is recommended — you will want to swim at every stop.',
  },
  {
    question: 'Do I need water shoes?',
    answer:
      'Not mandatory. But if you are sensitive to rocky surfaces, they are worth packing. Some coves have sharp pebbles.',
  },
  {
    question: "What's included in the price?",
    answer:
      'The boat, the skipper, snorkel gear, and a cooler with ice. Entrance to Blue Cave (€20–25 per person) is paid separately on site. Lunch and drinks are on you — we know where to stop.',
  },
  {
    question: 'Can I rent a boat without a skipper?',
    answer:
      'Yes, if you have the required licence. All boats have stereo, anchor, life jackets and fenders. Respect low-speed zones — maritime police patrol and fine actively. We recommend going with a skipper if it is your first time in these waters.',
  },
  {
    question: 'What happens if the weather is bad?',
    answer:
      'We check conditions every morning. If it is not safe, we reschedule at no cost. Safety first, always.',
  },
  {
    question: 'Can you pick us up from our yacht or sailboat?',
    answer:
      'Yes. We offer water taxi service for boats anchored in the area — pickup from your yacht, transfer to shore or to a tour starting point. Message us on WhatsApp with your location and we will sort it out.',
  },
];
