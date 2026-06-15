export const BUSINESS_INFO = {
  name: 'MareBoats Tours Hvar',
  phone: '+385951966734',
  whatsapp: 'https://wa.me/385951966734',
  address: 'Janka Žagjala 56, Hvar, Croacia',
  coordinates: { lat: 43.16903, lng: 16.44300 },
  googleMapsUrl: 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA',
  googleReviewUrl: 'https://g.page/r/Cd7dvQcuwbZ7EBM/review',
  hours: 'Mo-Su 08:00-21:00',
  languages: ['English', 'Croatian', 'Italian', 'Spanish', 'German'],
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
  /** Lowest numeric EUR price for schema.org Offer - omit when price is on request */
  priceEur?: number;
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
  /** Structured pricing breakdown rendered on the tour detail page */
  pricingOptions?: { label: string; price: string; note: string }[];
};

const MEETING = 'MareBoats barrel, Hvar Harbour main dock';
const MAPS = 'https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7';

// Default on-request add-ons shared by private tours.
const PHOTO_VIDEO_ADDON =
  'Photo & Video Shoot - €200, on request (when Fede is on board). Drone, underwater and on-board footage. Full gallery after the tour. Book in advance - slots are limited.';

const DEFAULT_ADDONS = [PHOTO_VIDEO_ADDON, 'Underwater Scooter €40/unit, on request'];

export const toursData: TourRecord[] = [
  {
    slug: 'red-rocks-pakleni-islands',
    name: 'Red Rocks & Pakleni Islands - Hvar Boat Tour',
    tagline: 'Speedboat tour from Hvar: Red Rocks, Dubovica Beach & Pakleni Islands. Less sailing, more swimming.',
    shortDescription:
      'Speedboat tour from Hvar: Red Rocks cliffs, Dubovica Beach, a secret sea cave & Pakleni Islands. Private or shared. Less sailing, more swimming.',
    description: `The Red Rocks & Pakleni Islands tour is the local route: the one Nikola takes when guests want to see Hvar the way people who live here actually experience it. Less sailing, more time in the water. A skipper who knows where the crowds aren't.

We depart from Hvar Harbour and head first to Borče Bay in Milna, a quiet cove on the southern coast, calm water, no other boats. It is the kind of place you only find if you know where to look. From there we cruise to Red Rocks, where iron oxide in the limestone turns the cliffs deep red against the turquoise sea. The water stays deep right up to the cliff face, and cliff jumping from 5 to 10 metres is popular here if your group is into it.

Next stop is Dubovica Beach, one of the most photographed beaches on Hvar, with a 16th-century stone house standing at the edge of the bay. A short swim from the shore, a hidden sea cave catches the light in a way that almost nobody sees from land. We finish in the Pakleni Islands: Palmižana for lunch at a restaurant you can only reach by boat, or Zdrilca for a quieter swim before we head back.

Available as a private half-day (4 hours, 09:00–13:00), private full-day (6 hours, more time at every stop), or shared group tour (join a small group from €85 per person. Requires a minimum of 4 guests to start the tour).

Message us on WhatsApp with your date and what sounds right - we sort the rest.`,
    duration: '4 hours (half-day) · 6 hours (full-day)',
    durationIso: 'PT4H',
    price: 'From €85/person (shared) · €400 private half-day · €500 private full-day',
    priceEur: 85,
    includes: [
      'Speedboat and local skipper',
      'Fuel for the itinerary',
      'Icebox on board',
      'Bottled water',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Lunch not included - restaurants available at Pakleni',
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
      'Borče Bay (Milna) - quiet cove, first swim, zero crowds',
      'Red Rocks - vertical iron-red cliffs dropping straight into turquoise water',
      'Dubovica Beach - iconic bay with a 16th-century stone house and a secret sea cave',
      'Pakleni Islands (Palmižana or Zdrilca) - beach bars, lunch stops, calm water',
    ],
    images: [
      {
        src: '/images/tours/hvar-red-rocks-boat-tour-drone-2026.jpg',
        alt: 'Red Rocks boat tour from Hvar - cliffs and turquoise water aerial drone view',
      },
      {
        src: '/images/tours/hvar-red-rocks-cliffs-aerial-drone-2026.jpg',
        alt: 'Red Rocks cliffs aerial drone view - Hvar Croatia boat tour',
      },
    ],
    keywords: [
      'red rocks hvar',
      'red rocks hvar boat tour',
      'pakleni islands tour',
      'half day boat tour hvar',
      'dubovica beach boat hvar',
      'shared boat tour hvar',
    ],
  },

  {
    slug: 'pakleni-islands',
    name: 'Pakleni Islands Half Day Tour',
    tagline: 'Half day of turquoise water, hidden coves, and island hopping minutes from Hvar town.',
    shortDescription:
      'Half-day private boat tour from Hvar, Croatia. Snorkel the clearest Adriatic waters, stop at Palmižana and explore secluded Pakleni coves.',
    description: `The Pakleni Islands sit 10 minutes from Hvar harbour. Close enough for a half day, varied enough to fill it. We take you through the archipelago, pick the stops based on wind and crowds, and leave the pace to you.

Departing from Hvar Harbour, you reach the Pakleni archipelago quickly, where pine-scented islands meet shallow bays in impossible shades of blue. Your captain chooses the best stops based on wind and crowds, so you can enjoy snorkeling, swimming, and sunbathing without feeling like you are on a generic group itinerary.

Because the boat is private, the route stays flexible: more time snorkeling, a longer swim break, or an optional pause for drinks at a beach bar can all be discussed on the day. Snorkeling equipment is included, and your skipper knows the quieter coves that larger boats skip.

Message us on WhatsApp with your date. We confirm fast.

Most guests who book this tour have already done a full-day trip and want a shorter option. Others are based in Hvar for a few days and prefer to save the longer routes for later. Either way, the Pakleni Islands are worth at least a half day.`,
    duration: '3–4 hrs',
    durationIso: 'PT4H',
    price: 'On request - message us on WhatsApp',
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the Pakleni itinerary',
      'Icebox and bottled water on board',
      'Snorkeling masks',
    ],
    notIncludes: ['Lunch not included - restaurants available at Pakleni', 'Hotel pickup'],
    addons: DEFAULT_ADDONS,
    whatToBring: ['Sunscreen and swimwear', 'A light layer for the breeze when cruising'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Palmižana, Zdrilca and the quieter coves of the archipelago',
      'Snorkeling in water you can see through to 10 metres',
      'Private boat, your pace, 10 minutes from Hvar harbour',
    ],
    images: [
      {
        src: '/images/destinations/hvar-pakleni-islands-tarske-bay-drone-2026.jpg',
        alt: 'Pakleni Islands Tarse bay aerial drone view - half day boat tour from Hvar',
      },
      {
        src: '/images/destinations/hvar-pakleni-islands-anchorage-aerial-drone-2026.jpg',
        alt: 'Pakleni Islands anchorage aerial drone view - private boat tour from Hvar',
      },
    ],
    keywords: ['pakleni islands boat', 'half day tour hvar'],
  },

  {
    slug: 'blue-cave-pakleni-islands',
    name: '5 Islands, 4 Beaches & Blue Cave - Hvar Boat Tour',
    tagline: 'Full-day speedboat tour from Hvar. Three sea caves, four beaches, Blue Cave on Biševo - and back before the day crowds hit.',
    shortDescription:
      'Full-day speedboat tour from Hvar: Green Cave, Stiniva Bay, Blue Cave (Biševo), Medvidina Cave, Budikovac Blue Lagoon and Pakleni Islands. Small groups. Departs 10:00.',
    description: `We leave Hvar at 10:00 and spend the day covering the most iconic stretch of the Adriatic - Blue Cave, Stiniva Bay, three sea caves, and the Pakleni Islands. One boat, your group, back by 17:00.

The route takes you to five islands and hits three caves, four beaches and a blue lagoon. Green Cave on Biševo is first - natural light filters in through an underwater arch and the colour is unlike anything else on the Adriatic. Then Stiniva Bay on Vis, one of the most dramatic beaches in Europe, enclosed by cliffs that rise 100 metres on either side. Blue Cave comes next, the one everyone has seen in photos - and it delivers every time when the light is right. We time the visit for peak blue, between 11:00 and 12:00.

After the caves you get Medvidina, the longest sea cave on Biševo, and Budikovac Blue Lagoon - shallow, calm, perfect for snorkelling with the masks we carry on board. The day ends at the Pakleni Islands, where you can stop for lunch at Palmižana or Zdrilca, both only reachable by boat.

We keep the group small so the day stays relaxed. Your skipper adjusts the pace to sea conditions and what your group actually wants - more time swimming, more caves, or a longer lunch stop. Available as a shared group tour (€130 per person) or fully private (€700 for your group only, up to 8 guests).

Message us on WhatsApp with your date and group size - we confirm fast.`,
    duration: '7 hours · Departs 10:00',
    durationIso: 'PT7H',
    price: '€130/person (group) · €700 private',
    priceEur: 130,
    includes: [
      'Speedboat and local skipper',
      'Fuel for the full itinerary',
      'Icebox on board',
      'Bottled water',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Green Cave entrance - €12 per person (paid on site)',
      'Blue Cave entrance - €24 per person (paid on site)',
      'Lunch not included - restaurants available at Pakleni or Palmizana',
      'Hotel pickup',
    ],
    addons: [PHOTO_VIDEO_ADDON],
    whatToBring: [
      'Sunscreen, hat, and sunglasses',
      'Swimwear and a light cover-up for breeze after swimming',
      'Cash (EUR) for cave entrances and lunch',
      'Motion-sickness remedy if you are sensitive at sea',
    ],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Blue Cave (Biševo) - sunlight turns the water electric blue. Best between 11:00–12:00.',
      'Green Cave - natural light through an underwater arch. Swim in from the sea.',
      'Stiniva Bay - voted best beach in Europe. Surrounded by cliffs on three sides.',
      'Medvidina Cave - longest sea cave on Biševo. Still, dark, unforgettable.',
      'Budikovac Blue Lagoon - shallow, calm, turquoise. Best snorkelling of the day.',
      'Pakleni Islands (Palmižana or Zdrilca) - lunch at a waterfront restaurant.',
    ],
    images: [
      {
        src: '/images/destinations/hvar-pakleni-islands-hidden-cove-drone-2026-01.jpg',
        alt: '5 Islands 4 Beaches Blue Cave speedboat tour from Hvar, Croatia',
      },
      { src: '/images/hero/hvar-open-sea-speedboat-aerial-drone-2026-01.jpg', alt: 'Speedboat on the Adriatic near Hvar - Blue Cave day trip' },
    ],
    keywords: [
      'blue cave boat tour hvar',
      'blue cave hvar',
      'pakleni islands tour',
      '5 islands tour hvar',
      'stiniva bay tour',
      'hvar boat excursion',
    ],
    pricingOptions: [
      { label: 'Shared', price: '€130/person', note: 'up to 8 guests' },
      { label: 'Private', price: '€700', note: 'your group only · up to 8 guests' },
    ],
  },

  {
    slug: 'sunset-cruise',
    name: 'Sunset Cruise Hvar',
    tagline: 'Golden hour on the Adriatic - wine-friendly, calm water, and the best light of the day.',
    shortDescription:
      'Private sunset cruise from Hvar, Croatia. Golden hour over the Dalmatian coast, drinks on board, calm waters and the best photo light of the day.',
    description: `A two-hour private cruise from Hvar Harbour, timed to the sunset. The light on the Adriatic at golden hour is different from anything you get during the day: warmer, softer, the kind that makes every photo look like it was planned.

This private evening boat tour departs from Hvar Harbour and follows a route chosen for views and comfort, with time to relax on deck and swim if conditions allow. Because the boat is private, the pace stays yours.

Your captain focuses on safety and smooth cruising as light fades, and you can bring your own wine or bubbly to enjoy responsibly on board (glass bottles are welcome). The cooler on board keeps your drinks cold, and your skipper chooses the stops for the best view of the sky over the Pakleni Islands.

Sunset slots are limited during high season, so message us early on WhatsApp to reserve your date. If you are comparing Hvar sunset boat tour options, choose private for the best views, the calmest pace, and a route tailored to the evening sky.`,
    duration: '2 hrs',
    durationIso: 'PT2H',
    price: '€250',
    priceEur: 250,
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the sunset itinerary',
      'Icebox and bottled water on board',
    ],
    notIncludes: ['Alcoholic drinks (bring your own if you wish)', 'Hotel pickup'],
    addons: [PHOTO_VIDEO_ADDON],
    whatToBring: ['A light jacket for after sunset', 'Camera or phone for photos'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Golden-hour cruising along the Hvar coastline',
      'Private boat, no shared groups',
      'Departs at golden hour, back before dark',
    ],
    images: [
      {
        src: '/images/tours/hvar-town-sunset-spanjola-fortress-drone-2026.jpg',
        alt: 'Hvar town at sunset from drone - Spanjola fortress and harbour aerial view',
      },
      {
        src: '/images/tours/hvar-sunset-cruise-golden-hour-drone-2026.jpg',
        alt: 'Sunset cruise from Hvar - golden hour over the Adriatic aerial drone view',
      },
    ],
    keywords: ['sunset cruise hvar', 'hvar sunset boat tour'],
  },

  {
    slug: 'private-boat-charter',
    name: 'Private Boat Charter Hvar',
    tagline: 'Your boat, your itinerary - full-day freedom with a local skipper who knows these waters.',
    shortDescription:
      'Private boat charter from Hvar, Croatia. Your own boat, captain, route and equipment - design the day you want on the Adriatic. €500 for boat + skipper, fuel paid separately.',
    description: `A private boat charter from Hvar is the most flexible format we offer: you choose the rhythm, the stops, and the balance between sightseeing, swimming, and simple time on the water. Whether you want a slow island-hop, a photography-focused day, or a family-friendly route with plenty of shallow bays, your captain helps you build a realistic plan based on weather and distances.

Unlike fixed itineraries, a full-day charter gives you room to adapt - spend longer at Pakleni Islands, add a coastal cruise, or prioritise snorkelling and quiet beaches. The boat remains exclusively yours for the group, with no strangers on board and no rigid schedule beyond what the sea safely allows.

Price is €500 for the boat and skipper. Fuel is paid separately at the marina based on the route you choose - usually a few hundred euros for a long day depending on distance. We discuss a realistic fuel estimate before you commit, so there are no surprises.

Every charter includes snorkelling masks, icebox and bottled water. Message us with your dates, group size and any stops you have in mind.`,
    duration: 'Full day',
    durationIso: 'PT8H',
    price: '€500 boat + skipper · fuel not included',
    priceEur: 500,
    includes: [
      'Private speedboat and local skipper',
      'Icebox and bottled water on board',
      'Snorkeling masks',
    ],
    notIncludes: [
      'Fuel - paid separately at the marina based on your route',
      'Lunch not included - restaurants available at stops along your route',
      'Third-party activity fees',
      'Hotel pickup',
    ],
    addons: DEFAULT_ADDONS,
    whatToBring: ['Sun protection and swimwear', 'Cash or card for fuel and optional restaurant stops'],
    meetingPoint: MEETING,
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Your route, your pace - Blue Cave, Vis, Pakleni or anywhere in between',
      'Full day on the water with one group only',
      'Skipper plans around weather, distances and what you actually want to see',
    ],
    images: [
      {
        src: '/images/tours/hvar-private-charter-pakleni-islands-drone-2026.jpg',
        alt: 'Private boat charter Hvar - speedboat anchored in Pakleni Islands aerial drone view',
      },
      { src: '/images/destinations/hvar-coast-crystal-water-swimming-drone-2026-01.jpg', alt: 'Crystal clear Adriatic sea on a private charter from Hvar' },
    ],
    keywords: ['private boat charter hvar', 'boat rental hvar croatia'],
  },

  {
    slug: 'split-airport-transfer',
    name: 'Split Airport to Hvar Speedboat Transfer',
    tagline: 'Private 45-minute speedboat transfer between Split Airport and Hvar Harbour.',
    shortDescription:
      'Split city departure: €500 · Split Airport departure: €600 (airport pier is a short taxi from the terminal)',
    description: `A Split Airport to Hvar transfer by private speedboat is the fastest, most comfortable way to start or end your trip on the island. Instead of taxis, ferries and waiting times, you go straight from the mainland to Hvar Harbour in around 45 minutes - with luggage handled and a flexible departure time that fits your flight.

We coordinate the meeting point near Split (airport pier or Split town harbour, depending on your arrival) and confirm everything by WhatsApp the day before so there are no surprises. Your skipper monitors weather and tides, suggests the best route, and adapts the plan if your flight is delayed.

Pricing is transparent: €500 for the Split harbour ↔ Hvar transfer, €600 for the Split Airport pier ↔ Hvar transfer (the airport pier route is slightly longer). Both are private - your group only, your luggage, your timing.

Most guests book this transfer at the start or end of their trip. You land, skip the ferry queue, and arrive in Hvar in about an hour.

Message us on WhatsApp with your flight number, group size and luggage to lock in your slot. Peak summer transfers fill quickly - booking ahead is the only way to guarantee the time you want.`,
    duration: '~45 min',
    durationIso: 'PT45M',
    price: 'Split–Hvar €500 · Airport–Hvar €600',
    priceEur: 500,
    includes: [
      'Private speedboat and local skipper',
      'Fuel for the Split ↔ Hvar route',
      'Luggage handling on board',
      'Flexible departure time around your flight',
    ],
    notIncludes: [
      'Short taxi from the airport terminal to the boat pier (not included in transfer price)',
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
      'Private boat - no shared groups, no fixed schedule',
      'Flight monitoring and WhatsApp coordination the day before',
    ],
    images: [
      {
        src: '/images/destinations/hvar-coast-crystal-water-swimming-drone-2026-01.jpg',
        alt: 'Split Airport to Hvar private speedboat transfer arriving at Hvar Harbour',
      },
      { src: '/images/hero/hvar-open-sea-speedboat-aerial-drone-2026-01.jpg', alt: 'Speedboat crossing the Adriatic between Split and Hvar' },
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
    tagline: 'Anchored near Hvar? We come to your boat - pickup, transfer or full tour.',
    shortDescription:
      'Private water taxi in Hvar for guests anchored on yachts and sailboats. We pick you up from your vessel and take you to shore, a restaurant, or any tour starting point.',
    description: `Anchored in the area on a yacht or sailboat? We bring the speedboat to you. Our water taxi service in Hvar picks you up directly from your vessel and takes you wherever you need - Hvar Harbour, a restaurant on the islands, a quiet swimming bay, or the starting point of any MareBoats tour.

This is the easiest way to enjoy Hvar when your boat is moored offshore. No tender hassle, no long swims to land, no waiting for a marina slot. We coordinate everything by WhatsApp: you send your coordinates and arrival time, we confirm the pickup window and a clear meeting plan with your skipper.

Pricing is on request - every pickup is different depending on your location, group size and whether you combine it with a tour. Message us on WhatsApp with your coordinates and we send a transparent quote within the hour during the season.

The same service works in both directions. We can take you ashore for dinner in Hvar town and bring you back to your yacht later that evening, or transfer you to one of our recommended restaurants on the Pakleni Islands and back. If you want to combine the taxi with a full tour - Blue Cave in the morning, lunch on an island, sunset cruise - just tell us when you message and we will plan the whole day around your boat.

Our local skippers know the anchorages, the wind patterns, and the smaller bays around Hvar, Vis, Brač and the Pakleni archipelago. We are licensed for Croatian waters and we communicate clearly in English, Croatian, German, Italian and Spanish (when Fede is on board), so the handover from your charter crew to ours is always smooth.

If you are searching for a private water taxi in Hvar, a yacht transfer, a sailboat pickup, or a way to start a tour without coming to the harbour first, this is the service. Message us with your boat name, your coordinates and the time window - we will reply with a quote and a plan.`,
    duration: 'On demand',
    durationIso: 'PT1H',
    price: 'On request - message us on WhatsApp',
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
    meetingPoint: 'We come to your vessel - share coordinates on WhatsApp',
    meetingPointMapsUrl: MAPS,
    highlights: [
      'Direct pickup from your yacht or sailboat - no tender needed',
      'Two-way service: shore for dinner, back to your boat at night',
      'Combines with any MareBoats tour - Blue Cave, Pakleni, sunset',
    ],
    images: [
      {
        src: '/images/destinations/hvar-pakleni-islands-tarske-bay-drone-2026.jpg',
        alt: 'Yacht and sailboat water taxi service in Hvar - private speedboat pickup',
      },
      {
        src: '/images/destinations/hvar-pakleni-islands-aerial-overview-drone-2026-01.jpg',
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
  }
];

/** Slugs shown in the homepage Tours grid - flagship day tour, Red Rocks, Pakleni half-day, sunset. */
export const FEATURED_TOUR_SLUGS = [
  'blue-cave-pakleni-islands',
  'red-rocks-pakleni-islands',
  'pakleni-islands',
  'sunset-cruise',
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
