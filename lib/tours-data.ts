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
const MAPS = 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA';

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
  {
    slug: 'split-airport-transfer',
    name: 'Split Airport to Hvar Speedboat Transfer',
    tagline: 'Private 45-minute speedboat transfer between Split Airport and Hvar Harbour.',
    shortDescription:
      'Private speedboat transfer from Split Airport to Hvar in around 45 minutes. Skip ferries and queues — door-to-harbour service from Mare Boats Hvar.',
    description: `A Split Airport to Hvar transfer by private speedboat is the fastest, most comfortable way to start or end your trip on the island. Instead of taxis, ferries and waiting times, you go straight from the mainland to Hvar Harbour in around 45 minutes — with luggage handled and a flexible departure time that fits your flight.

We coordinate the meeting point near Split (airport pier or Split town harbour, depending on your arrival) and confirm everything by WhatsApp the day before so there are no surprises. Your skipper monitors weather and tides, suggests the best route, and adapts the plan if your flight is delayed.

This Split to Hvar speedboat transfer is ideal for couples, families and groups who want to arrive on Hvar relaxed and on schedule, without losing half a day to public transport. The same service works in reverse: a private morning transfer from Hvar Harbour back to Split in time for your departure.

Message us on WhatsApp with your flight number, group size and luggage to get a fast quote and lock in your slot. Peak summer transfers fill quickly — booking ahead is the only way to guarantee the time you want.

If you are comparing Split Hvar transfer options, the speedboat is usually the most reliable choice in summer: ferries can be busy, schedules tighten in high season, and a private boat avoids almost all of that. We focus on safety, punctuality and a smooth handover so the first thing you remember about Hvar is the sea, not the queue.`,
    duration: '~45 min',
    durationIso: 'PT45M',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the Split ↔ Hvar route',
      'Luggage handling on board',
      'Flexible departure time around your flight',
    ],
    notIncludes: [
      'Taxi between Split Airport and the boat pier',
      'Port and dock fees where applicable',
    ],
    whatToBring: [
      'A light layer for the breeze on board',
      'Travel documents and luggage tagged for boarding',
    ],
    meetingPoint: 'Split Airport pier / Split harbour ↔ Hvar Harbour',
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Around 45 minutes door-to-harbour vs. several hours by ferry + transfer',
      'Private boat — no shared groups, no fixed schedule',
      'Flight monitoring and WhatsApp coordination the day before',
    ],
    images: [
      {
        src: '/img/destination-5.jpeg',
        alt: 'Split Airport to Hvar private speedboat transfer arriving at Hvar Harbour',
      },
      { src: '/img/carousel-2.jpeg', alt: 'Speedboat crossing the Adriatic between Split and Hvar' },
    ],
    keywords: [
      'split to hvar transfer',
      'split airport to hvar',
      'speedboat split hvar',
      'split hvar boat transfer',
    ],
  },
  {
    slug: 'yacht-sailboat-taxi',
    name: 'Yacht & Sailboat Water Taxi',
    tagline: 'Anchored near Hvar? We come to your boat — pickup, transfer or full tour.',
    shortDescription:
      'Private water taxi in Hvar for guests anchored on yachts and sailboats. We pick you up from your vessel and take you to shore, a restaurant, or any tour starting point.',
    description: `Anchored in the area on a yacht or sailboat? We bring the speedboat to you. Our water taxi service in Hvar picks you up directly from your vessel and takes you wherever you need — Hvar Harbour, a restaurant on the islands, a quiet swimming bay, or the starting point of any MareBoats tour.
 
This is the easiest way to enjoy Hvar when your boat is moored offshore. No tender hassle, no long swims to land, no waiting for a marina slot. We coordinate everything by WhatsApp: you send your coordinates and arrival time, we confirm the pickup window and a clear meeting plan with your skipper.
 
The same service works in both directions. We can take you ashore for dinner in Hvar town and bring you back to your yacht later that evening, or transfer you to one of our partner restaurants on the Pakleni Islands and back. If you want to combine the taxi with a full tour — Blue Cave in the morning, lunch on an island, sunset cruise — just tell us when you message and we will plan the whole day around your boat.
 
Our local skippers know the anchorages, the wind patterns, and the smaller bays around Hvar, Vis, Brač and the Pakleni archipelago. We are licensed for Croatian waters and we communicate clearly in English, Croatian, Italian and Spanish (when Fede is on board), so the handover from your charter crew to ours is always smooth.
 
If you are searching for a private water taxi in Hvar, a yacht transfer, a sailboat pickup, or a way to start a tour without coming to the harbour first, this is the service. Message us with your boat name, your coordinates and the time window — we will reply with a quote and a plan.`,
    duration: 'On demand',
    durationIso: 'PT1H',
    price: 'From €XX — to be confirmed by Nikola',
    includes: [
      'Pickup from anchored yacht or sailboat',
      'Drop-off at Hvar Harbour or any agreed destination',
      'Local skipper familiar with anchorages around Hvar',
      'WhatsApp coordination with your charter crew',
      'Can connect directly to any MareBoats tour',
    ],
    notIncludes: [
      'Restaurant or marina fees',
      'Charter boat fuel or mooring costs (handled by your captain)',
    ],
    whatToBring: [
      'Your exact coordinates and pickup time on WhatsApp',
      'Cash or card for any onshore stops (restaurants, marina)',
    ],
    meetingPoint: 'We come to your vessel — share coordinates on WhatsApp',
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Direct pickup from your yacht or sailboat — no tender needed',
      'Two-way service: shore for dinner, back to your boat at night',
      'Combines with any MareBoats tour — Blue Cave, Pakleni, sunset',
    ],
    images: [
      {
        src: '/img/destination-7.jpeg',
        alt: 'Yacht and sailboat water taxi service in Hvar — private speedboat pickup',
      },
      {
        src: '/img/carousel-1.jpeg',
        alt: 'Speedboat approaching anchored sailboat near Hvar for water taxi transfer',
      },
    ],
    keywords: [
      'water taxi hvar',
      'water taxi hvar yacht',
      'sailboat taxi hvar croatia',
      'yacht transfer hvar',
      'boat pickup hvar harbour',
      'speedboat taxi hvar sailing',
    ],
  },
];

/** Slugs shown in the homepage Tours grid. The transfer route lives at /tours/split-airport-transfer for SEO but is not in the home grid (we keep 4 cards for symmetry). */
export const FEATURED_TOUR_SLUGS = [
  'blue-cave-pakleni-islands',
  'pakleni-islands',
  'sunset-cruise',
  'private-boat-charter',
] as const;

export const featuredTours: TourRecord[] = FEATURED_TOUR_SLUGS
  .map((slug) => toursData.find((t) => t.slug === slug))
  .filter((t): t is TourRecord => Boolean(t));

export function getTourBySlug(slug: string): TourRecord | undefined {
  return toursData.find((t) => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return toursData.map((t) => t.slug);
}
