export const BUSINESS_INFO = {
  name: 'MareBoats Tours Hvar',
  phone: '+385951966734',
  whatsapp: 'https://wa.me/385951966734',
  address: 'Janka Žagjala 56, Hvar, Croacia',
  coordinates: { lat: 43.16847, lng: 16.443 },
  googleMapsUrl: 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA',
  googleReviewUrl: 'https://g.page/r/Cd7dvQcuwbZ7EBM/review',
  hours: 'Mo-Su 08:00-21:00',
  languages: ['English', 'Croatian', 'Italian', 'Spanish'],
} as const;

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
  /** Paid add-ons / on-request extras (NOT included by default) */
  addons?: string[];
  whatToBring: string[];
  meetingPoint: string;
  meetingPointMapsUrl: string;
  highlights: string[];
  images: TourImage[];
  keywords: string[];
};

const MEETING = 'MareBoats barrel, Hvar Harbour main dock';
const MAPS = 'https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7';

// Default on-request add-ons shared by private tours.
const DEFAULT_ADDONS = [
  'Aerial drone footage — on request, extra cost (when Fede is on board)',
  'Underwater video — on request, extra cost (when Fede is on board)',
];

export const toursData: TourRecord[] = [
  {
    slug: 'blue-cave-pakleni-islands',
    name: '5 Islands, 4 Beaches, 3 Caves Tour',
    tagline: 'Full-day speedboat adventure — Green Cave, Blue Cave, Stiniva, Budikovac and Pakleni Islands.',
    shortDescription:
      'Full-day private boat tour from Hvar, Croatia: Green Cave, Stiniva Bay, Blue Cave (Biševo), Medvidina Cave, Budikovac Blue Lagoon and Pakleni Islands. Available as shared group or fully private.',
    description: `This is our flagship full-day tour from Hvar — the classic route that shows you the best caves, beaches and coves of the Adriatic in one relaxed day. We leave early from Hvar Harbour so you reach the Blue Cave before the crowds and still have hours left for swimming, snorkelling and lunch on the islands.

Your skipper plans the day around sea conditions and your preferences, so you get the best possible light at the Blue Cave and still make time for quieter swimming stops along the way. The tour is available as a shared group booking (€130 per person) or fully private (€700 for up to 10 people) — and for larger groups we can coordinate multiple speedboats departing together.

Along the route you visit Green Cave on Biševo (entrance €12 per person, paid on site), Stiniva Bay on Vis — voted the best beach in Europe in 2016 — the iconic Blue Cave (entrance €24 per person), Medvidina Cave, Budikovac Blue Lagoon for swimming in shallow crystal-clear water, and the Pakleni Islands for a lunch stop at a restaurant you can only reach by boat.

This tour is ideal for couples, families and small groups who want a premium Hvar boat excursion with a knowledgeable local captain. Message us on WhatsApp to check availability during peak season (May–September) and to customise the pace of the day.

If you are researching Blue Cave boat tour Hvar options, remember that cave visits depend on sea conditions and queue times. A private itinerary gives you more flexibility to adapt the day rather than being locked into a rigid group schedule. Safety first, then we make the most of your hours on the water with swimming breaks, scenic cruising, and local insight you cannot get from a generic brochure route.`,
    duration: '7 hours · 10:00–17:00',
    durationIso: 'PT7H',
    price: '€130/person (group) · €700 private (up to 10)',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the full itinerary',
      'Icebox on board',
      'Bottled water',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Green Cave entrance — €12 per person (paid on site)',
      'Blue Cave entrance — €24 per person (paid on site)',
      'Lunch and drinks at restaurants (optional)',
      'Hotel pickup (meeting point is Hvar Harbour)',
    ],
    addons: DEFAULT_ADDONS,
    whatToBring: [
      'Sunscreen, hat, and sunglasses',
      'Swimwear and a light cover-up for breeze after swimming',
      'Cash (EUR) for cave entrances and lunch',
      'Motion-sickness remedy if you are sensitive at sea',
    ],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Green Cave (Biševo) — natural light through an underwater arch',
      'Stiniva Bay on Vis — voted best beach in Europe (2016)',
      'Blue Cave (Biševo) — the classic, best between 11:00 and 12:00',
      'Budikovac Blue Lagoon — shallow, calm, great for snorkelling',
      'Pakleni Islands — lunch stop at a waterfront restaurant',
    ],
    images: [
      {
        src: '/img/package-1.jpeg',
        alt: '5 Islands 4 Beaches 3 Caves private boat tour from Hvar, Croatia',
      },
      { src: '/img/carousel-2.jpeg', alt: 'Speedboat on the Adriatic near Hvar — Blue Cave day trip' },
    ],
    keywords: ['blue cave boat tour hvar', 'blue cave hvar', 'pakleni islands tour', '5 islands tour hvar', 'stiniva bay tour'],
  },
  {
    slug: 'red-rocks-pakleni-islands',
    name: 'Red Rocks & Pakleni Islands Tour',
    tagline: 'Cliffs, caves and crystal water — 4 hours, private.',
    shortDescription:
      'Private 4-hour boat tour from Hvar: Borče Bay, Red Rocks cliffs, Dubovica Beach, a secret sea cave and Pakleni Islands. Morning or afternoon departure, up to 8 guests.',
    description: `The Red Rocks & Pakleni Islands tour is our best half-day option from Hvar — four hours, fully private, covering the most photogenic stretch of the southern Hvar coast and finishing in the calm bays of the Pakleni archipelago. It is the ideal choice if you want big variety in a short window, or if you prefer to spend the rest of the day on land exploring Hvar town.

Departing from Hvar Harbour, we head first to Borče Bay — a quiet cove on the southern coast of Hvar, perfect for a warm-up swim and a quick snorkel. From there we cruise to Red Rocks, where dramatic vertical red cliffs drop straight into turquoise water. The colour comes from iron oxide in the limestone, and the water stays deep right up to the wall, so cliff jumping from 5 to 10 metres is popular here (optional, always at your own choice and skill level).

From Red Rocks we head to Dubovica Beach, one of the most iconic beaches on Hvar, protected by a natural bay with a 16th-century stone house on the shore. A few minutes away, a hidden sea cave near Dubovica — accessible only by boat or a short swim — rewards you with turquoise light and near-silence even in peak season.

We finish in the Pakleni Islands at Ždrilca and Taršće: beach bars at Ždrilca for a late drink or snack, and untouched nature at Taršće when you want a quieter stop. The pace stays relaxed, and because the tour is private you can spend more time at the stops that feel right and less at the ones that do not.

This tour is private only — up to 8 guests — and departs in two fixed windows: morning 09:00–13:00 or afternoon 14:00–18:00. There are no extra entrance fees along the route; lunch is optional if you add a longer stop at one of the Pakleni restaurants. Message us on WhatsApp with your preferred date and window to confirm availability.

If you are comparing half day boat tours from Hvar, the Red Rocks route is the best-balanced option: it combines the photogenic cliffs of the southern coast, a genuine "secret cave" moment, an iconic beach, and the calm swimming bays of the Pakleni Islands — all in a single four-hour window.`,
    duration: '4 hours · 09:00–13:00 or 14:00–18:00',
    durationIso: 'PT4H',
    price: '€400 private (up to 8)',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the itinerary',
      'Icebox on board',
      'Bottled water',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Lunch and drinks (optional stops available at Ždrilca)',
      'Hotel pickup',
    ],
    addons: DEFAULT_ADDONS,
    whatToBring: [
      'Sunscreen, hat and sunglasses',
      'Swimwear and a light layer for the breeze',
      'Water shoes if you are sensitive to pebble beaches',
    ],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Red Rocks — vertical red cliffs, cliff jumping, photos',
      'Dubovica Beach — iconic Hvar bay with 16th-century stone house',
      'Secret sea cave near Dubovica — reachable only by boat or swimming',
      'Borče Bay — quiet cove for a warm-up swim',
      'Pakleni Islands (Ždrilca & Taršće) — beach bars and untouched nature',
    ],
    images: [
      {
        src: '/img/destination-4.jpeg',
        alt: 'Red Rocks and Pakleni Islands private boat tour from Hvar — turquoise water and cliffs',
      },
      {
        src: '/img/destination-5.jpeg',
        alt: 'Dubovica Beach seen from the sea on a Red Rocks boat tour from Hvar',
      },
    ],
    keywords: [
      'red rocks hvar',
      'red rocks hvar boat tour',
      'pakleni islands half day tour',
      'afternoon boat tour hvar',
      'private boat tour hvar 4 hours',
      'dubovica beach boat hvar',
    ],
  },
  {
    slug: 'pakleni-islands',
    name: 'Pakleni Islands Half Day Tour',
    tagline: 'Half day of turquoise water, hidden coves, and island hopping minutes from Hvar town.',
    shortDescription:
      'Half-day private boat tour from Hvar, Croatia. Snorkel the clearest Adriatic waters, stop at Palmižana and explore secluded Pakleni coves.',
    description: `The Pakleni Islands half day boat tour from Hvar is the perfect option when you want maximum beauty in a shorter window — ideal for families, couples on a tight schedule, or anyone who prefers a relaxed pace without committing to a full offshore crossing.

Departing from Hvar Harbour, you reach the Pakleni archipelago quickly, where pine-scented islands meet shallow bays in impossible shades of blue. Your captain chooses the best stops based on wind and crowds, so you can enjoy snorkeling, swimming, and sunbathing without feeling like you are on a generic group itinerary.

Because the boat is private, the route stays flexible: more time snorkeling, a longer swim break, or an optional pause for drinks at a beach bar can all be discussed on the day. Snorkeling equipment is included, and your skipper knows the quieter coves that larger boats skip.

If you are searching for the best half day boat tour Hvar has to offer — combining proximity, scenery, and comfort — this is the classic route guests book again and again. Contact us on WhatsApp to confirm departure times during the season and to tailor the route to your group.

Because the Pakleni Islands sit so close to Hvar town, you spend less time commuting and more time enjoying the water — a practical advantage on hot summer days when you want maximum swimming time. Your captain can suggest quieter bays if the wind shifts, and you can always adjust the plan if younger guests want shallower water or if you prefer a longer stop for coffee at a waterfront venue.

If you are comparing shared excursions versus a private Pakleni Islands boat, the private option usually wins on comfort, timing, and the ability to avoid the busiest pockets of the archipelago when possible.`,
    duration: '3–4 hrs',
    durationIso: 'PT4H',
    price: 'On request — message us on WhatsApp',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the Pakleni itinerary',
      'Icebox and bottled water on board',
      'Snorkeling masks',
    ],
    notIncludes: ['Meals and drinks at beach bars or restaurants', 'Hotel pickup'],
    addons: DEFAULT_ADDONS,
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

Your captain focuses on safety and smooth cruising as light fades, and you can bring your own wine or bubbly to enjoy responsibly on board (glass bottles are welcome). The cooler on board keeps your drinks cold, and your skipper chooses the stops for the best view of the sky over the Pakleni Islands.

Sunset slots are limited during high season, so message us early on WhatsApp to reserve your date. If you are comparing Hvar sunset boat tour options, choose private for the best views, the calmest pace, and a route tailored to the evening sky.

Evening light also makes the coastline look more cinematic — stone villages glow warmer, the sea reflects softer blues, and the breeze often settles compared to midday heat. That is why many guests schedule their sunset cruise after a busy sightseeing day on land: it is the perfect reset before dinner in Hvar town. If you are celebrating something special, tell us when you book and we will do our best to set the mood with a smooth route and plenty of time for photos.`,
    duration: '2 hrs',
    durationIso: 'PT2H',
    price: '€250',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the sunset itinerary',
      'Icebox and bottled water on board',
    ],
    notIncludes: ['Alcoholic drinks (bring your own if you wish)', 'Hotel pickup'],
    addons: DEFAULT_ADDONS,
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
      'Private boat charter from Hvar, Croatia. Your own boat, captain, route and equipment — design the day you want on the Adriatic. €500 for boat + skipper, fuel paid separately.',
    description: `A private boat charter from Hvar is the ultimate flexible option: you choose the rhythm, the stops, and the balance between sightseeing, swimming, and simple time on the water. Whether you want a slow island-hop, a photography-focused day, or a family-friendly route with plenty of shallow bays, your captain helps you build a realistic plan based on weather and distances.

Unlike fixed itineraries, a full-day charter gives you room to adapt — spend longer at Pakleni Islands, add a coastal cruise, or prioritise snorkelling and quiet beaches. The boat remains exclusively yours for the group, with no strangers on board and no rigid schedule beyond what the sea safely allows.

Price is €500 for the boat and skipper. Fuel is paid separately at the marina based on the route you choose — usually a few hundred euros for a long day depending on distance. We discuss a realistic fuel estimate before you commit, so there are no surprises.

Every charter includes snorkelling masks, an icebox with bottled water and a local skipper who knows these waters well. Private charters are especially popular for multi-generational families, groups of friends, and guests who want the best of Hvar without compromising on comfort. Contact us on WhatsApp with your dates, group size, and ideas — we help you design a day you will want to repeat next summer.

A charter is also the best format if you want to combine multiple "must-see" destinations in one day without feeling rushed between them. Your captain will be honest about what is realistic given distances and sea conditions, then help you choose a route that still feels relaxed.`,
    duration: 'Full day',
    durationIso: 'PT8H',
    price: '€500 boat + skipper · fuel not included',
    includes: [
      'Private speedboat and local skipper',
      'Icebox and bottled water on board',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Fuel — paid separately at the marina based on your route',
      'Meals and restaurant stops (optional, at your expense)',
      'Third-party activity fees',
      'Hotel pickup',
    ],
    addons: DEFAULT_ADDONS,
    whatToBring: ['Sun protection and swimwear', 'Cash or card for fuel and optional restaurant stops'],
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

Pricing is transparent: €500 for the Split harbour ↔ Hvar transfer, €600 for the Split Airport pier ↔ Hvar transfer (the airport pier route is slightly longer). Both are private — your group only, your luggage, your timing.

This transfer is ideal for couples, families and groups who want to arrive on Hvar relaxed and on schedule, without losing half a day to public transport. The same service works in reverse: a private morning transfer from Hvar Harbour back to Split in time for your departure.

Message us on WhatsApp with your flight number, group size and luggage to lock in your slot. Peak summer transfers fill quickly — booking ahead is the only way to guarantee the time you want.

If you are comparing Split Hvar transfer options, the speedboat is usually the most reliable choice in summer: ferries can be busy, schedules tighten in high season, and a private boat avoids almost all of that. We focus on safety, punctuality and a smooth handover so the first thing you remember about Hvar is the sea, not the queue.`,
    duration: '~45 min',
    durationIso: 'PT45M',
    price: 'Split–Hvar €500 · Airport–Hvar €600',
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

Pricing is on request — every pickup is different depending on your location, group size and whether you combine it with a tour. Message us on WhatsApp with your coordinates and we send a transparent quote within the hour during the season.

The same service works in both directions. We can take you ashore for dinner in Hvar town and bring you back to your yacht later that evening, or transfer you to one of our recommended restaurants on the Pakleni Islands and back. If you want to combine the taxi with a full tour — Blue Cave in the morning, lunch on an island, sunset cruise — just tell us when you message and we will plan the whole day around your boat.

Our local skippers know the anchorages, the wind patterns, and the smaller bays around Hvar, Vis, Brač and the Pakleni archipelago. We are licensed for Croatian waters and we communicate clearly in English, Croatian, Italian and Spanish (when Fede is on board), so the handover from your charter crew to ours is always smooth.

If you are searching for a private water taxi in Hvar, a yacht transfer, a sailboat pickup, or a way to start a tour without coming to the harbour first, this is the service. Message us with your boat name, your coordinates and the time window — we will reply with a quote and a plan.`,
    duration: 'On demand',
    durationIso: 'PT1H',
    price: 'On request — message us on WhatsApp',
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

/** Slugs shown in the homepage Tours grid. We feature four premium products:
 *  the flagship full-day, the new half-day Red Rocks, sunset, and private charter. */
export const FEATURED_TOUR_SLUGS = [
  'blue-cave-pakleni-islands',
  'red-rocks-pakleni-islands',
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
