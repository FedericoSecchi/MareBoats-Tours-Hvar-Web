// Private yacht section (season 2027 demand test).
// Brief: docs/brief-seccion-premium.md · Plan: docs/plan-yacht-loop.md
//
// Rules that apply to everything in this file:
// - The boat is never named (no brand, no model, no length, no engines, no knots).
// - Only promise what is a hard requirement of the purchase: enclosed toilet,
//   shade for every seat, galley, larger and faster than our speedboats,
//   swim platform and ladder, up to 8 guests.
// - Prices come from YACHT_PRICES in lib/pricing.ts. No numbers here.
// - Fields set to null are pending data: components hide them, never invent them.
// - "Premium" is an internal name only. Never in rendered copy.

import type { Metadata } from 'next';
import { EXTRAS, type YachtPriceKey } from './pricing';

/** Publication switch. Only Fede flips this, once prices are set. */
export const YACHT_SECTION_LIVE = false;

/**
 * Netlify deploy previews and branch deploys (and local dev) show the links
 * into the section from public pages, so Fede can review them before launch.
 * Production shows them only when YACHT_SECTION_LIVE is true.
 */
const IS_PREVIEW_BUILD =
  process.env.CONTEXT === 'deploy-preview' ||
  process.env.CONTEXT === 'branch-deploy' ||
  process.env.NODE_ENV === 'development';

export const SHOW_YACHT_LINKS = YACHT_SECTION_LIVE || IS_PREVIEW_BUILD;

// ──────────────────────────────────────────────
// Coti's Figma photos as TEMPORARY placeholders (decision 21/10: "add them all,
// we replace them later"). Preview builds only. A production build always uses
// our own photos, so a merge to main never publishes stock or manufacturer images.
// Files: public/images/figma-temp/. Delete the folder once every slot has our own photo.
// ──────────────────────────────────────────────

export const USE_FIGMA_PHOTOS = IS_PREVIEW_BUILD;

type Img = { src: string; alt: string; objectPosition?: string };
const F = '/images/figma-temp';

export const FIGMA_PHOTOS = {
  hubHero: { src: `${F}/aerial-bay-boats.jpg`, alt: 'Boats in a bay from above' },
  blueCaveHero: { src: `${F}/blue-cave.jpg`, alt: 'Blue light inside a sea cave' },
  blueCave1: { src: `${F}/boat-over-reef.jpg`, alt: 'A boat over clear water from above' },
  blueCave2: { src: `${F}/blue-cave.jpg`, alt: 'Blue light inside a sea cave' },
  lunchHero: { src: `${F}/anchored-yachts.jpg`, alt: 'Yachts at anchor in a quiet bay' },
  lunch1: { src: `${F}/chef-on-board.jpg`, alt: 'Lunch being cooked in the galley' },
  lunch2: { src: `${F}/wine-toast.jpg`, alt: 'A toast on board' },
  transfer: { src: `${F}/couple-on-deck.jpg`, alt: 'Guests on deck at sea' },
  boat: { src: `${F}/boat-at-sea.jpg`, alt: 'The boat at sea' },
  featuredLunch: { src: `${F}/chef-on-board.jpg`, alt: 'Lunch being cooked in the galley' },
  reserve: { src: `${F}/waterfall.jpg`, alt: 'Waterfalls and green water' },
  finalCta: { src: `${F}/aerial-bay-boats.jpg`, alt: 'Boats in a bay from above' },
  seaCareHero: { src: `${F}/sea-care-cleanup.jpg`, alt: 'People collecting litter on a beach' },
  seaCareBottles: { src: `${F}/sea-care-bottles.jpg`, alt: 'A bag of plastic bottles collected from a beach' },
} satisfies Record<string, Img>;

export type PhotoSlot = keyof typeof FIGMA_PHOTOS;

/** Our photo in production, Coti's placeholder in previews. */
export function photo(slot: PhotoSlot, own: Img): Img {
  return USE_FIGMA_PHOTOS ? FIGMA_PHOTOS[slot] : own;
}

export const YACHT_BASE = '/private-yacht-hvar';
export const YACHT_SEASON = '2027';
export const YACHT_SEASON_RANGE = 'April to October 2027';
export const YACHT_REQUEST_PATH = `${YACHT_BASE}/request/`;
export const YACHT_THANKS_PATH = `${YACHT_BASE}/request/thanks/`;

/** Robots for every page of the section while the switch is off. */
export const yachtRobots: Metadata['robots'] = YACHT_SECTION_LIVE
  ? { index: true, follow: true }
  : { index: false, follow: false, nocache: true };

const WA_NUMBER = '385951966734';

export function yachtWhatsAppUrl(experienceName?: string): string {
  const text = experienceName
    ? `Hi! I'm interested in the private yacht ${experienceName} for the 2027 season. Can you tell me more?`
    : "Hi! I'm interested in a private yacht day in Hvar for the 2027 season. Can you tell me more?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const MEETING_POINT =
  'Beach Križa, at the MareBoats barrel, below the Beach Bay Hvar Hotel. About 3 minutes on foot from the ferry port, towards the Franciscan Monastery.';

// ──────────────────────────────────────────────
// The boat (unbranded)
// ──────────────────────────────────────────────

export type YachtIcon =
  | 'private'
  | 'bathroom'
  | 'shade'
  | 'galley'
  | 'speed'
  | 'swim'
  | 'guests'
  | 'dog';

export type YachtFeature = { title: string; text: string; icon: YachtIcon };

/** "The difference" grid (Coti's design: 4 x 2). */
export const BOAT_FEATURES: YachtFeature[] = [
  {
    icon: 'private',
    title: 'Private only',
    text: 'The whole boat is yours. No other passengers, ever.',
  },
  {
    icon: 'bathroom',
    title: 'A bathroom on board',
    text: 'An enclosed toilet, so nobody has to plan the day around the next beach bar.',
  },
  {
    icon: 'shade',
    title: 'Shade for every seat',
    text: 'Everyone can sit in the shade at the same time, not in turns.',
  },
  {
    icon: 'galley',
    title: 'A galley',
    text: 'A real kitchen area on board. It is what makes lunch cooked at anchor possible.',
  },
  {
    icon: 'speed',
    title: 'Larger and faster',
    text: 'A bigger boat than our speedboats. It reaches Vis and Biševo sooner and rides the open sea more comfortably.',
  },
  {
    icon: 'swim',
    title: 'Swim platform',
    text: 'Step into the water and climb back on board without a struggle.',
  },
  {
    icon: 'guests',
    title: 'Eight guests, never more',
    text: 'Room for your group to choose between sun and shade all day.',
  },
  {
    icon: 'dog',
    title: 'Dogs welcome',
    text: 'Bring your dog. Let us know when you send your request.',
  },
];

/** Spec rows for the boat presentation. Only what any final model guarantees. */
export const BOAT_SPECS: { label: string; value: string }[] = [
  { label: 'Guests', value: 'Up to 8' },
  { label: 'Bathroom', value: 'Enclosed, on board' },
  { label: 'Shade', value: 'For every seat' },
  { label: 'Galley', value: 'On board' },
];

export const BOAT_CHIPS = ['Swim platform', 'Shade', 'Galley', 'WC', 'Private only'];

// ──────────────────────────────────────────────
// Juli (bio and photo from /about/)
// ──────────────────────────────────────────────

export const JULI = {
  name: 'Juli',
  role: 'Chef & Crew',
  image: '/images/team/juli-chef.png',
  imageAlt: 'Juli, chef and crew at MareBoats Hvar',
  objectPosition: '50% 20%',
  bio: 'From Buenos Aires. Cooks and connects with the sea with heart, not by the book. Passionate about good food, nature and life at sea.',
  /** Sample menu: PENDING, to be confirmed with Juli. Hidden while null. */
  sampleMenu: null as string[] | null,
};

// ──────────────────────────────────────────────
// Experiences
// ──────────────────────────────────────────────

export type YachtFAQ = { question: string; answer: string };

export type YachtSection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string; objectPosition?: string };
};

export type YachtExperience = {
  slug: 'blue-cave-half-day' | 'boat-tour-with-lunch';
  priceKey: YachtPriceKey;
  /** Short name used in cards, WhatsApp messages and GA4 `experience`. */
  name: string;
  cardSummary: string;
  /** Three short lines for the card bullets. */
  highlights: string[];
  badge?: string;
  seoTitle: string; // ≤44 chars, the layout template adds the brand
  seoDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: { src: string; alt: string };
  /** PENDING: duration and departure time come from the product sheet. */
  duration: string | null;
  departureTime: string | null;
  sections: YachtSection[];
  includes: string[];
  notIncludes: string[];
  faqs: YachtFAQ[];
  crossLink: { text: string; href: string; linkText: string };
};

const AFTER_REQUEST_ANSWER =
  'We confirm we received it on WhatsApp or by email. In March 2027 we confirm your date and the final price. Nothing to pay now. If the yacht is not available on your date, we offer you the same day on one of our speedboats at the price published on this site.';

const SEASON_ANSWER = `The yacht sails from ${YACHT_SEASON_RANGE}. We are taking requests now and confirm dates in March 2027.`;

export const YACHT_EXPERIENCES: YachtExperience[] = [
  {
    slug: 'blue-cave-half-day',
    priceKey: 'blue-cave-half-day',
    name: 'Blue Cave half day',
    cardSummary:
      'Biševo and the Blue Cave in half a day. The crossing goes faster, so the morning goes to the cave and the water.',
    highlights: ['Blue Cave, Biševo', 'A faster open sea crossing', 'A swim on the way back'],
    badge: 'New for 2027',
    seoTitle: 'Blue Cave Half Day from Hvar by Yacht',
    seoDescription:
      'Private yacht from Hvar to the Blue Cave on Biševo and back in half a day. Up to 8 guests, bathroom and shade on board. Requests open for the 2027 season.',
    keywords: [
      'blue cave half day from hvar',
      'blue cave tour from hvar half day',
      'private blue cave tour hvar',
      'blue cave hvar private yacht',
      'bisevo blue cave from hvar',
    ],
    eyebrow: 'Hvar · Biševo · Season 2027',
    h1: 'Blue Cave half day from Hvar, by private yacht',
    intro:
      'Biševo and back in half a day. A larger, faster boat than our speedboats covers the open sea crossing sooner, so your morning goes to the cave and the water, not the ride. Up to 8 guests, departing from Beach Križa.',
    heroImage: photo('blueCaveHero', {
      src: '/images/destinations/hvar-blue-cave-interior-turquoise-light-2026.jpg',
      alt: 'Blue Cave on Biševo, turquoise light inside the cave',
    }),
    duration: null,
    departureTime: null,
    sections: [
      {
        eyebrow: 'Why half a day',
        heading: 'Built around the cave',
        image: photo('blueCave1', {
          src: '/images/destinations/hvar-medvidina-cave-bisevo-2026.jpg',
          alt: 'Sea cave on the island of Biševo',
        }),
        paragraphs: [
          'Our speedboat tour to the Blue Cave is a full 7-hour day across five islands. This one is built around the cave itself. The yacht crosses to Vis and Biševo faster, and that is what turns a full day into half of one.',
          'You get the Blue Cave, a swim on the way back and the afternoon free in Hvar.',
        ],
      },
      {
        eyebrow: 'Before you go',
        heading: 'What the Blue Cave visit is really like',
        image: photo('blueCave2', {
          src: '/images/destinations/hvar-blue-cave-interior-boat-tour-2026.jpg',
          alt: "Inside the Blue Cave on Biševo, on one of the cave's own small boats",
        }),
        paragraphs: [
          `Private boats do not go inside the Blue Cave. At Biševo you pay the entrance (€${EXTRAS.blueCave} per person, paid on site) and go in on one of the cave's own small boats.`,
          'In July and August there is often a wait for your turn, and nobody can skip it, us included. What we can control is when we get there. A faster boat means an earlier arrival, and an earlier arrival usually means a shorter wait.',
          'The light inside is at its best around midday. With strong southerly wind the cave closes. If that happens, we tell you before departure and you choose: another route, a new date or a full refund.',
        ],
      },
    ],
    includes: ['The whole yacht for your group, up to 8 guests', 'Skipper'],
    notIncludes: [`Blue Cave entrance, €${EXTRAS.blueCave} per person, paid on site`],
    faqs: [
      {
        question: 'Do boats go inside the Blue Cave?',
        answer: `No. Private boats stop outside. You pay the entrance at Biševo (€${EXTRAS.blueCave} per person, paid on site) and go in on one of the cave's own small boats.`,
      },
      {
        question: 'Is there a wait at the Blue Cave?',
        answer:
          'In July and August, often yes, and it applies to everyone. Arriving earlier usually means a shorter wait, which is the main reason this trip runs on the faster boat.',
      },
      {
        question: 'What happens if the cave is closed?',
        answer:
          'The cave closes with strong southerly wind. If that happens we tell you before departure and you choose: another route, a new date or a full refund.',
      },
      {
        question: 'How is this different from the 5 Islands Blue Cave tour?',
        answer:
          'The 5 Islands tour is a full 7-hour day on a speedboat, departing at 10:00, with five islands, three caves and four beaches. Available shared or private. This half day is private only, on the yacht, and focused on the Blue Cave.',
      },
      {
        question: 'When can I book it?',
        answer: SEASON_ANSWER,
      },
      {
        question: 'What happens after I send a request?',
        answer: AFTER_REQUEST_ANSWER,
      },
    ],
    crossLink: {
      text: 'Prefer the full day with five islands, on a speedboat?',
      href: '/tours/blue-cave-pakleni-islands/',
      linkText: 'See the 5 Islands Blue Cave tour',
    },
  },
  {
    slug: 'boat-tour-with-lunch',
    priceKey: 'boat-tour-with-lunch',
    name: 'Lunch on board',
    cardSummary:
      'A private day around Hvar with lunch cooked on board by Juli, at anchor in a bay picked for the wind that day.',
    highlights: ['Lunch cooked on board by Juli', 'Swim stops at anchor', 'A route shaped around the wind'],
    badge: 'New for 2027',
    seoTitle: 'Private Boat Tour with Lunch in Hvar',
    seoDescription:
      'Private yacht day from Hvar with lunch cooked on board by our chef. Swim stops in the Pakleni Islands, up to 8 guests. Requests open for the 2027 season.',
    keywords: [
      'private boat tour with lunch hvar',
      'hvar boat tour with lunch',
      'boat trip with lunch hvar',
      'private yacht lunch hvar',
      'hvar boat day lunch on board',
    ],
    eyebrow: 'Hvar · Pakleni Islands · Season 2027',
    h1: 'Private boat tour with lunch cooked on board',
    intro:
      'A private day on the water around Hvar, with lunch cooked on board by Juli. You swim, lunch is ready at anchor, and nobody has to hunt for a table at a restaurant only reachable by boat. Up to 8 guests, departing from Beach Križa.',
    heroImage: photo('lunchHero', {
      src: '/images/destinations/hvar-pakleni-islands-anchorage-aerial-drone-2026.jpg',
      alt: 'Boats at anchor in the Pakleni Islands, seen from above',
    }),
    duration: null,
    departureTime: null,
    sections: [
      {
        eyebrow: 'Lunch at anchor',
        heading: 'Lunch without leaving the boat',
        image: photo('lunch1', {
          src: '/images/destinations/hvar-pakleni-islands-hidden-cove-drone-2026-01.jpg',
          alt: 'Quiet anchorage in the Pakleni Islands, from above',
        }),
        paragraphs: [
          'On our speedboat tours lunch is not included: guests eat at restaurants at Palmižana or Ždrilca. On this day lunch happens on board, at anchor, in a bay the skipper picks for the wind that day.',
          'The galley on board is what makes it possible. Between swims, the table is set.',
        ],
      },
      {
        eyebrow: 'Your day',
        heading: 'The route is yours to shape',
        image: photo('lunch2', {
          src: '/images/destinations/hvar-pakleni-islands-tarske-bay-drone-2026.jpg',
          alt: 'Taršće bay in the Pakleni Islands, from above',
        }),
        paragraphs: [
          'The Pakleni Islands, the south coast of Hvar, or farther out. The skipper reads the conditions and suggests the bays. You decide the pace.',
          'Tell us about allergies and dietary needs when you send your request, and Juli plans the menu with that in mind.',
        ],
      },
    ],
    includes: [
      'The whole yacht for your group, up to 8 guests',
      'Skipper',
      'Lunch cooked on board by Juli',
    ],
    notIncludes: [],
    faqs: [
      {
        question: 'Is lunch included?',
        answer:
          'Yes. Juli cooks lunch on board and it is served at anchor. This is the only MareBoats Hvar day where lunch is part of the trip.',
      },
      {
        question: 'Can the menu work around allergies or a diet?',
        answer:
          'Tell us in your request: allergies, vegetarian, anything we should know. Juli plans the menu with that in mind, and we confirm with you before the day.',
      },
      {
        question: 'Can we bring our own drinks?',
        answer: 'Yes, like on all our tours. Glass bottles are fine. No smoking on board.',
      },
      {
        question: 'Is there a toilet on board?',
        answer: 'Yes, an enclosed toilet. Our speedboats do not have one; the yacht does.',
      },
      {
        question: 'When can I book it?',
        answer: SEASON_ANSWER,
      },
      {
        question: 'What happens after I send a request?',
        answer: AFTER_REQUEST_ANSWER,
      },
    ],
    crossLink: {
      text: 'Happy to eat at a restaurant on the islands instead?',
      href: '/tours/red-rocks-pakleni-islands/',
      linkText: 'See the Red Rocks & Pakleni full day',
    },
  },
];

export function getYachtExperience(slug: YachtExperience['slug']): YachtExperience {
  const exp = YACHT_EXPERIENCES.find((e) => e.slug === slug);
  if (!exp) throw new Error(`Unknown yacht experience: ${slug}`);
  return exp;
}

// ──────────────────────────────────────────────
// Hub
// ──────────────────────────────────────────────

export const YACHT_HUB = {
  seoTitle: 'Private Yacht Hvar: Day Charter 2027',
  seoDescription:
    'Private yacht days from Hvar for up to 8 guests: lunch cooked on board, the Blue Cave in half a day, transfers from Split. Requests open for the 2027 season.',
  keywords: [
    'private yacht hvar',
    'hvar yacht day',
    'hvar yacht tour',
    'yacht day trip hvar',
    'private yacht charter hvar',
    'day yacht charter hvar',
  ],
  eyebrow: 'New for season 2027',
  h1: 'Private yacht days from Hvar',
  intro:
    'A larger boat for the days that ask for more: lunch cooked on board, the Blue Cave in half a day, a transfer from Split with a bathroom on board. Up to 8 guests, from Beach Križa. Requests are open for April to October 2027.',
  heroImage: photo('hubHero', {
    src: '/images/hero/hvar-pakleni-islands-aerial-hero-drone-2026.jpg',
    alt: 'Pakleni Islands seen from above, turquoise water off Hvar',
  }),
  dayFlow: [
    {
      title: 'Meet at Beach Križa',
      text: 'At the MareBoats barrel, below the Beach Bay Hvar Hotel. About 3 minutes on foot from the ferry port.',
      image: '/images/boat/hvar-harbour-mareboats-stand-drone-2026-01.jpg',
      alt: 'The MareBoats meeting point near Beach Križa, Hvar, from above',
    },
    {
      title: 'A route for the day you want',
      text: 'The skipper reads the wind and suggests the bays. You set the pace.',
      image: '/images/destinations/hvar-pakleni-islands-coastline-aerial-drone-2026.jpg',
      alt: 'Pakleni Islands coastline from above',
    },
    {
      title: 'Into the water',
      text: 'Swim stops in clear bays, straight off the swim platform.',
      image: '/images/destinations/hvar-coast-crystal-water-swimming-drone-2026-01.jpg',
      alt: 'Swimmer in clear water off the Hvar coast, from above',
    },
    {
      title: 'Lunch your way',
      text: 'Cooked on board by Juli, or at a restaurant you can only reach by boat.',
      image: '/images/destinations/hvar-pakleni-islands-hidden-cove-drone-2026-03.jpg',
      alt: 'Quiet cove in the Pakleni Islands, from above',
    },
  ],
  transferCard: {
    name: 'Private yacht transfer',
    highlights: ['Split or Split Airport to Hvar', 'A bathroom on board', 'Shade for every seat'],
    summary:
      'Split or Split Airport to Hvar on the yacht: shade for everyone and a bathroom on board for the crossing.',
    href: '/transfers/#yacht-transfer',
  },
  faqs: [
    {
      question: 'When is the yacht available?',
      answer: SEASON_ANSWER,
    },
    {
      question: 'What happens after I send a request?',
      answer: AFTER_REQUEST_ANSWER,
    },
    {
      question: 'Can we celebrate something on board?',
      answer:
        'Yes. Birthdays, anniversaries, a proposal: tell us in your request what you are celebrating and we plan the day around it.',
    },
    {
      question: 'How many guests can come?',
      answer: 'Up to 8 guests, plus the skipper. The whole boat is yours: no other passengers.',
    },
    {
      question: 'Is there a toilet on board?',
      answer: 'Yes, an enclosed toilet. It is one of the main differences with our speedboats.',
    },
    {
      question: 'Where do we meet?',
      answer: MEETING_POINT,
    },
    {
      question: 'What if the weather is bad?',
      answer:
        'If wind or sea conditions are unsafe, the skipper reschedules at no extra cost. If we cancel, you choose: full refund or a new date. We confirm by WhatsApp the evening before.',
    },
    {
      question: 'Are dogs allowed?',
      answer: 'Dogs are welcome on board. Let us know when you send your request.',
    },
  ] as YachtFAQ[],
};

// ──────────────────────────────────────────────
// Lunch day, step by step (no clock times until the product sheet exists)
// ──────────────────────────────────────────────

export const LUNCH_STEPS = [
  'Meet at Beach Križa, at the MareBoats barrel',
  'Anchor in a quiet bay, picked for the wind that day',
  'Swim while Juli cooks in the galley',
  'Lunch at anchor',
  'An afternoon swim, then back to Hvar',
];

// ──────────────────────────────────────────────
// "Life on the water" photo journal. Our own photos only, true captions.
// Layout follows Coti's design: wide, pair, wide, pair...
// ──────────────────────────────────────────────

export type JournalPhoto = { src: string; alt: string; caption: string };

const OWN_JOURNAL: (JournalPhoto | [JournalPhoto, JournalPhoto])[] = [
  {
    src: '/images/destinations/hvar-pakleni-islands-aerial-overview-drone-2026-01.jpg',
    alt: 'The Pakleni Islands seen from above',
    caption: 'Pakleni Islands',
  },
  [
    {
      src: '/images/destinations/hvar-coast-crystal-water-swimming-drone-2026-01.jpg',
      alt: 'Swimmer in clear water off the Hvar coast',
      caption: 'Clear water off Hvar',
    },
    {
      src: '/images/destinations/hvar-pakleni-islands-zdrilca-channel-speedboat-drone-2026-02.jpg',
      alt: 'The Ždrilca channel in the Pakleni Islands from above',
      caption: 'Ždrilca channel',
    },
  ],
  {
    src: '/images/tours/hvar-red-rocks-cliffs-aerial-drone-2026.jpg',
    alt: 'The Red Rocks cliffs on the south coast of Hvar from above',
    caption: 'Red Rocks, south coast of Hvar',
  },
  [
    {
      src: '/images/destinations/hvar-dubovica-beach-aerial-drone-2026.jpg',
      alt: 'Dubovica beach from above',
      caption: 'Dubovica',
    },
    {
      src: '/images/destinations/hvar-harbour-sunset-aerial-drone-2026-04.jpg',
      alt: 'Hvar town at golden hour from above',
      caption: 'Hvar at golden hour',
    },
  ],
  {
    src: '/images/destinations/hvar-blue-cave-interior-turquoise-light-2026.jpg',
    alt: 'Turquoise light inside the Blue Cave on Biševo',
    caption: 'Blue Cave, Biševo',
  },
];

// Coti's journal, same order as the Figma. Neutral captions: these are not our places.
const FIGMA_JOURNAL: (JournalPhoto | [JournalPhoto, JournalPhoto])[] = [
  { src: `${F}/islands-lake-aerial.jpg`, alt: 'Islands and a lake from above', caption: 'Islands from above' },
  [
    { src: `${F}/cove-swimmers.jpg`, alt: 'Swimmers in a turquoise cove', caption: 'Crystal-clear water' },
    { src: `${F}/boat-over-reef.jpg`, alt: 'A boat over clear water from above', caption: 'On the Adriatic' },
  ],
  { src: `${F}/anchored-yachts.jpg`, alt: 'Yachts at anchor in a quiet bay', caption: 'Anchored yachts' },
  [
    { src: `${F}/wine-toast.jpg`, alt: 'A toast on board', caption: 'Wine on board' },
    { src: `${F}/golden-hour-dinghy.jpg`, alt: 'A small boat on golden water', caption: 'Golden hour' },
  ],
  { src: `${F}/secluded-bay.jpg`, alt: 'A quiet bay with clear water', caption: 'A secluded bay' },
  [
    { src: `${F}/couple-on-deck.jpg`, alt: 'Guests on deck at sea', caption: 'Time together' },
    { src: `${F}/superyacht-open-water.jpg`, alt: 'A large yacht in open water', caption: 'Open water' },
  ],
];

export const YACHT_JOURNAL = USE_FIGMA_PHOTOS ? FIGMA_JOURNAL : OWN_JOURNAL;

// ──────────────────────────────────────────────
// Reviews (real Google reviews of MareBoats Hvar)
// Rules: never present them as reviews of the yacht or of the lunch.
// Trimmed with "…" only. Skipper names cut. Never rewritten.
// Words that are banned in our own copy may appear here: they are the guest's.
// ──────────────────────────────────────────────

export type YachtReview = {
  author: string;
  date: string; // ISO
  text: string;
  translated?: boolean;
};

export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/k84JNBQLvqgZunEX6';

export const YACHT_REVIEWS: YachtReview[] = [
  {
    author: 'Thisbe Barnett',
    date: '2026-06-21',
    text: 'From the moment of booking, I was impressed with the service and fast responses … We booked the private half day tour and enjoyed every second - the boat was lovely, the stops on the tour were perfect and the skipper was great! …',
  },
  {
    author: 'myriam hnatkow',
    date: '2026-08-06',
    text: 'Perfect day with Mare Boats Hvar. We had chosen the 6hour day tour and enjoyed every minute. … As this was a private tour you can decide with him where to go. The lunch place he recommended and booked for us was great. Really an enjoyable experience I would highly recommend!',
  },
  {
    author: 'David Josefson',
    date: '2026-07-03',
    text: 'We booked what we thought was a group tour but it turned out to be just our family (me, my wife and our two kids 8 and 11) … Communication the day before on WhatsApp was quick and helpful too … Highly recommend especially for families!',
  },
  {
    author: 'Pablo Bouvier',
    date: '2026-08-05',
    text: 'We had an unforgettable private half-day boat tour from Hvar with Mare Boats, visiting the Red Rocks and the beautiful Pakleni Islands. Traveling as a family with three children, we wanted something flexible, relaxed, and personal, and this tour was exactly that. …',
  },
  {
    author: 'Sandra Blasco',
    date: '2026-09-12',
    text: '100% recommended! We took a sunset tour with them … The sunset was amazing … We also opted for the photo and video package for the sunset tour, which is a fantastic memory to cherish forever. …',
    translated: true,
  },
  {
    author: 'CJ Nuess',
    date: '2025-07-18',
    text: 'We had an unforgettable family boat trip around the island of Vis … He took us to secluded beaches we never would have found on our own …',
  },
];
