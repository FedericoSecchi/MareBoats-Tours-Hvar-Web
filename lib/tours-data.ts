export type TourImage = { src: string; alt: string };

export type TourRecord = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  duration: string;
  /** ISO 8601 duration for schema.org */
  durationIso: string;
  price: string;
  includes: string[];
  notIncludes: string[];
  whatToBring: string[];
  meetingPoint: string;
  meetingPointMapsUrl: string;
  highlights: string[];
  images: TourImage[];
  keywords: string[];
};

const MEETING = 'Hvar Harbour, Croatia';
const MAPS = 'https://maps.google.com/?q=43.1729,16.4413';

export const toursData: TourRecord[] = [
  {
    slug: 'blue-cave-pakleni-islands',
    name: 'Blue Cave & Pakleni Islands Tour',
    tagline: 'Full-day speedboat adventure — Biševo, Vis coastline, and the Pakleni archipelago.',
    shortDescription:
      'Private full-day boat tour from Hvar, Croatia: visit the Blue Cave on Biševo, swim in hidden Vis bays and end the day at Pakleni Islands.',
    description: `Book a private Blue Cave boat tour from Hvar for one of the most iconic days you can spend on the Adriatic. This route is built for guests who want the full experience: early departure from Hvar Harbour, a relaxed pace, and time to enjoy both world-famous sights and quieter swimming stops along the way.

Your skipper plans the day around sea conditions and your preferences, so you get the best possible light at the Blue Cave entrance and still have hours left for Pakleni Islands snorkeling, sunbathing, and exploring small bays that larger boats skip. Because the tour is private, you are never rushed through a fixed timetable — if you fall in love with a beach, you can stay longer.

Along the route you can expect crystal-clear water, dramatic cliffs, and classic Dalmatian island scenery. Snorkeling gear is provided, and every private tour includes aerial drone footage and underwater video so you leave with a professional memory of your day — not just phone snapshots.

This tour is ideal for couples, families, and small groups who want a premium Hvar boat excursion with a knowledgeable local captain. Message us on WhatsApp to check availability during peak season (May–September) and to customize stops such as additional time at the Pakleni Islands or a lunch break at a waterfront restaurant on your own tab.

If you are researching Blue Cave boat tour Hvar options, remember that cave visits depend on sea conditions and queue times — a private itinerary gives you more flexibility to adapt the day rather than being locked into a rigid group schedule. We focus on safety first, then on making the most of your hours on the water with swimming breaks, scenic cruising, and local insight you cannot get from a generic brochure route.

When you message us, share your travel dates and how confident you are on the water — we will recommend the best departure window and a realistic plan so your expectations match what the Adriatic delivers that day.`,
    duration: '6–8 hrs',
    durationIso: 'PT8H',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Private speedboat and local captain',
      'Fuel for the agreed itinerary',
      'Snorkeling equipment and towels',
      'Water and soft drinks on board',
      'Aerial drone video and underwater footage of your tour',
    ],
    notIncludes: [
      'National park and cave entrance fees where applicable',
      'Meals and drinks at restaurants',
      'Hotel pickup (meeting point is Hvar Harbour)',
    ],
    whatToBring: [
      'Sunscreen, hat, and sunglasses',
      'Swimwear and a light cover-up for breeze after swimming',
      'Motion-sickness remedy if you are sensitive at sea',
    ],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Blue Cave (Biševo) — weather and queue dependent',
      'Swimming stops along Vis and nearby islets',
      'Pakleni Islands — snorkeling and beach time',
    ],
    images: [
      {
        src: '/img/package-1.jpeg',
        alt: 'Blue Cave and Pakleni Islands private boat tour from Hvar, Croatia',
      },
      { src: '/img/carousel-2.jpeg', alt: 'Speedboat on the Adriatic near Hvar — Blue Cave day trip' },
    ],
    keywords: ['blue cave boat tour hvar', 'blue cave hvar', 'pakleni islands tour'],
  },
  {
    slug: 'pakleni-islands',
    name: 'Pakleni Islands Half Day Tour',
    tagline: 'Half day of turquoise water, hidden coves, and island hopping minutes from Hvar town.',
    shortDescription:
      'Half-day private boat tour from Hvar, Croatia. Snorkel the clearest Adriatic waters, stop at Palmižana and explore secluded Pakleni coves.',
    description: `The Pakleni Islands half day boat tour from Hvar is the perfect option when you want maximum beauty in a shorter window — ideal for families, couples on a tight schedule, or anyone who prefers a relaxed pace without committing to a full offshore crossing.

Departing from Hvar Harbour, you reach the Pakleni archipelago quickly, where pine-scented islands meet shallow bays in impossible shades of blue. Your captain chooses the best stops based on wind and crowds, so you can enjoy snorkeling, swimming, and sunbathing without feeling like you are on a generic group itinerary.

Because the boat is private, the route stays flexible: more time snorkeling, a longer swim break, or an optional pause for drinks at a beach bar can all be discussed on the day. Snorkeling equipment is included, and like every MareBoats private tour, you also receive aerial drone footage and underwater video as a keepsake.

If you are searching for the best half day boat tour Hvar has to offer — combining proximity, scenery, and comfort — this is the experience guests book again and again. Contact us on WhatsApp to confirm departure times during the season and to tailor the route to your group.

Because the Pakleni Islands sit so close to Hvar town, you spend less time commuting and more time enjoying the water — a practical advantage on hot summer days when you want maximum swimming time. Your captain can suggest quieter bays if the wind shifts, and you can always adjust the plan if younger guests want shallower water or if you prefer a longer stop for coffee at a waterfront venue. The goal is simple: a premium private boat experience that feels effortless from the first message to the last swim of the afternoon.

If you are comparing shared excursions versus a private Pakleni Islands boat, the private option usually wins on comfort, timing, and the ability to avoid the busiest pockets of the archipelago when possible.`,
    duration: '3–4 hrs',
    durationIso: 'PT4H',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Private speedboat and local captain',
      'Fuel for the Pakleni itinerary',
      'Snorkeling equipment and towels',
      'Water and soft drinks on board',
      'Aerial drone video and underwater footage of your tour',
    ],
    notIncludes: ['Meals and drinks at beach bars or restaurants', 'Hotel pickup'],
    whatToBring: ['Sunscreen and swimwear', 'A light layer for the breeze when cruising'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Multiple swimming and snorkeling stops',
      'Scenic cruising through the Pakleni archipelago',
      'Flexible pacing for families and small groups',
    ],
    images: [
      {
        src: '/img/package-2.jpeg',
        alt: 'Pakleni Islands half day boat tour from Hvar harbour',
      },
      { src: '/img/destination-2.jpeg', alt: 'Pakleni Islands archipelago seen from a private boat' },
    ],
    keywords: ['pakleni islands boat', 'half day tour hvar'],
  },
  {
    slug: 'sunset-cruise',
    name: 'Sunset Cruise Hvar',
    tagline: 'Golden hour on the Adriatic — wine-friendly, calm water, and unforgettable light.',
    shortDescription:
      'Private sunset cruise from Hvar, Croatia. Golden hour over the Dalmatian coast, drinks on board, calm waters and the best photo light of the day.',
    description: `A sunset cruise from Hvar is the most romantic way to end a day on the island — and one of the easiest tours to enjoy if you want premium photos without a full-day commitment. As the heat softens and the light turns gold, the Adriatic takes on a completely different mood: quieter harbours, warm tones on the stone towns, and a gentle breeze that makes the sea feel brand new.

This private evening boat tour departs from Hvar Harbour and follows a route chosen for views and comfort, with time to relax on deck and swim if conditions allow. Because the experience is private, you can keep the atmosphere relaxed and personal — perfect for proposals, anniversaries, families celebrating together, or friends who want a memorable night without crowds.

Your captain focuses on safety and smooth cruising as light fades, and you can bring your own wine or bubbly to enjoy responsibly on board (please confirm preferences when booking). As with all MareBoats private experiences, the tour includes aerial drone footage and underwater video when conditions allow, so you can relive the golden hour long after you return to shore.

Sunset slots are limited during high season, so message us early on WhatsApp to reserve your date. If you are comparing Hvar sunset boat tour options, choose private for the best views, the calmest pace, and a route tailored to the evening sky.

Evening light also makes the coastline look more cinematic — stone villages glow warmer, the sea reflects softer blues, and the breeze often settles compared to midday heat. That is why many guests schedule their sunset cruise after a busy sightseeing day on land: it is the perfect reset before dinner in Hvar town. If you are celebrating something special, tell us when you book and we will do our best to set the mood with a smooth route and plenty of time for photos.`,
    duration: '2 hrs',
    durationIso: 'PT2H',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Private speedboat and local captain',
      'Fuel for the sunset itinerary',
      'Towels and bottled water',
      'Aerial drone video and underwater footage when conditions allow',
    ],
    notIncludes: ['Alcoholic drinks (bring your own if you wish)', 'Hotel pickup'],
    whatToBring: ['A light jacket for after sunset', 'Camera or phone for photos'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Golden-hour cruising along the Hvar coastline',
      'Private boat — no shared groups',
      'Ideal for photos and relaxed evening pacing',
    ],
    images: [
      {
        src: '/img/package-5.jpeg',
        alt: 'Sunset cruise from Hvar — private boat at golden hour over the Adriatic',
      },
      { src: '/img/carousel-1.jpeg', alt: 'Evening light over the sea on a Hvar sunset boat tour' },
    ],
    keywords: ['sunset cruise hvar', 'hvar sunset boat tour'],
  },
  {
    slug: 'private-boat-charter',
    name: 'Private Boat Charter Hvar',
    tagline: 'Your boat, your itinerary — full-day freedom with an experienced local skipper.',
    shortDescription:
      'Private boat charter from Hvar, Croatia. Your own boat and route, captain, fuel and equipment included — design the day you want on the Adriatic.',
    description: `A private boat charter from Hvar is the ultimate flexible option: you choose the rhythm, the stops, and the balance between sightseeing, swimming, and simple time on the water. Whether you want a slow island-hop, a photography-focused day, or a family-friendly route with plenty of shallow bays, your captain helps you build a realistic plan based on weather and distances.

Unlike fixed itineraries, a full-day charter gives you room to adapt — spend longer at Pakleni Islands, add a coastal cruise, or prioritize snorkeling and quiet beaches. The boat remains exclusively yours for the group, with no strangers on board and no rigid schedule beyond what the sea safely allows.

Every charter includes fuel for standard cruising ranges discussed at booking, snorkeling equipment, towels, and refreshments basics on board. As with other MareBoats private tours, you also benefit from aerial drone footage and underwater video so your charter feels like a complete experience, not just a transfer between dots on a map.

Private charters are especially popular for multi-generational families, groups of friends, and guests who want the best of Hvar without compromising on comfort. Contact us on WhatsApp with your dates, group size, and ideas — we will confirm pricing with Nikola where needed and help you design a day you will want to repeat next summer.

A charter is also the best format if you want to combine multiple “must-see” destinations in one day without feeling rushed between them. Your captain will be honest about what is realistic given distances and sea conditions, then help you choose a route that still feels relaxed. Whether you care most about snorkeling, photography, island restaurants, or simply floating in quiet water, a private charter keeps the day aligned with what matters to you.

For guests comparing private boat charter Hvar offers, ask about fuel coverage, included equipment, and realistic routing — we prefer transparent planning so your day feels calm, safe, and worth every minute on the water.`,
    duration: 'Full day',
    durationIso: 'PT8H',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Private speedboat and local captain',
      'Fuel for the agreed daily itinerary',
      'Snorkeling equipment and towels',
      'Water and soft drinks on board',
      'Aerial drone video and underwater footage of your charter',
    ],
    notIncludes: [
      'Meals and restaurant stops (optional, at your expense)',
      'Third-party activity fees',
      'Hotel pickup',
    ],
    whatToBring: ['Sun protection and swimwear', 'Cash or card for optional restaurant stops'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Fully customizable route and pacing',
      'Ideal for families and private groups',
      'Local captain with deep knowledge of Hvar waters',
    ],
    images: [
      {
        src: '/img/package-4.jpeg',
        alt: 'Private boat charter Hvar — full day skippered tour in the Adriatic',
      },
      { src: '/img/destination-5.jpeg', alt: 'Crystal clear Adriatic sea on a private charter from Hvar' },
    ],
    keywords: ['private boat charter hvar', 'boat rental hvar croatia'],
  },
];

export function getTourBySlug(slug: string): TourRecord | undefined {
  return toursData.find((t) => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return toursData.map((t) => t.slug);
}
