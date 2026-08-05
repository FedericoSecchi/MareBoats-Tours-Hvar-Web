import {
  formatPriceFull,
  formatPriceShort,
  getLowestPrice,
  getPricingOptions,
  TOUR_PRICES,
  EXTRAS,
  ADDONS,
  SUNSET_WINE_EXTRA,
} from '@/lib/pricing';

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

export type TourStop = {
  name: string;
  croatianName?: string;
  description: string;
  travelTime: string;
  activities: string;
  conditions: string;
  isOptional?: boolean;
  optionalNote?: string;
};

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
  /** Per-stop breakdown for routes that warrant detailed stop content */
  stops?: TourStop[];
  /** FAQ pairs — single source for both visible render and FAQPage JSON-LD */
  faqs?: { question: string; answer: string }[];
  /** Fast-facts key-value pairs. Included/Not included are injected by the render from tour.includes/notIncludes after the "Meeting point" row. */
  fastFacts?: { label: string; value: string }[];
};

const MEETING = 'Beach Križa, at the MareBoats barrel, below the Beach Bay Hvar Hotel';
const MAPS = 'https://maps.app.goo.gl/6AJmDACw4ZU1MnSKA';

const PHOTO_VIDEO_ADDON = `Photo & Video Shoot - €${ADDONS.photoVideo}, on request (when Fede is on board). Drone, underwater and on-board footage. Full gallery after the tour. Book in advance - slots are limited.`;

const DEFAULT_ADDONS = [PHOTO_VIDEO_ADDON, `Underwater Scooter €${ADDONS.scooter}/unit, on request`];

// Shorthands for inline use in description template literals
const RR = TOUR_PRICES['red-rocks-pakleni-islands'];
const BC = TOUR_PRICES['blue-cave-pakleni-islands'];
const PC = TOUR_PRICES['private-boat-charter'];
const PK = TOUR_PRICES['pakleni-islands'];
const SAT = TOUR_PRICES['split-airport-transfer'];

export const toursData: TourRecord[] = [
  {
    slug: 'red-rocks-pakleni-islands',
    name: 'Red Rocks & Pakleni Islands - Hvar Boat Tour',
    tagline: 'Speedboat tour from Hvar: Red Rocks, Dubovica Beach & Pakleni Islands. Less sailing, more swimming.',
    shortDescription:
      'Speedboat tour from Hvar: Red Rocks cliffs, Dubovica Beach, a secret sea cave & Pakleni Islands. Private or shared. Less sailing, more swimming.',
    description: `The Red Rocks & Pakleni Islands tour is the local route: the one we take when guests want to see Hvar the way people who live here actually experience it. Less sailing, more time in the water. A skipper who knows where the crowds aren't.

We leave Beach Križa heading south along the coast. On calm days we also pause at Žarače, a quiet bay on the way. First stop is Red Rocks, where iron oxide in the limestone turns the cliffs deep red against the turquoise sea. The water stays deep right up to the cliff face, and cliff jumping from 5 to 10 metres is popular here if your group is into it.

From Red Rocks we continue to Dubovica Beach, one of the most photographed beaches on Hvar, with a 16th-century stone house standing at the edge of the bay. A short swim from the shore, a hidden sea cave catches the light in a way that almost nobody sees from land.

Then Borče Bay in Milna: a quiet cove on the southern coast, calm water, no other boats. The kind of place you only find if you know where to look.

We finish in the Pakleni Islands: Palmižana for lunch at a restaurant you can only reach by boat, or Ždrilca for a quieter swim before we head back.

Available as a shared tour (€${RR.sharedPerPerson}/person - minimum 6 guests to depart), a private half-day (4 hours, 09:00-13:00 or 14:00-18:00, €${RR.privateHalfDay}), or a private full-day (6 hours, 11:00-17:00, €${RR.privateFullDay} - more time at every stop). Groups of 9 to 16 travel on two boats sailing together - message us for pricing and availability.

Message us on WhatsApp with your date and what sounds right - we sort the rest.`,
    duration: '4 OR 6 HRS',
    durationIso: 'PT4H',
    price: `Shared from €${RR.sharedPerPerson}/person · Private from €${RR.privateHalfDay}`,
    priceEur: getLowestPrice('red-rocks-pakleni-islands'),
    includes: [
      'Speedboat and skipper',
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
      'Red Rocks - vertical iron-red cliffs dropping straight into turquoise water',
      'Dubovica Beach - iconic bay with a 16th-century stone house and a secret sea cave',
      'Borče Bay (Milna) - quiet cove, calm water, no crowds',
      'Pakleni Islands (Palmižana or Ždrilca) - beach bars, lunch stops, calm water',
    ],
    images: [
      {
        src: '/images/tours/hvar-red-rocks-cliffs-speedboat-aerial-drone-2026-01.jpg',
        alt: 'Red Rocks cliffs and speedboat aerial drone view - boat tour from Hvar Croatia',
      },
      {
        src: '/images/destinations/hvar-dubovica-secret-cave-interior-2026.jpg',
        alt: 'Dubovica secret sea cave interior - Red Rocks boat tour from Hvar Croatia',
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
    pricingOptions: [
      { label: 'Shared', price: `€${RR.sharedPerPerson}/person`, note: '11:00-17:00 · up to 8 guests' },
      { label: 'Private half-day', price: `€${RR.privateHalfDay}`, note: '4 hrs · your group only' },
      { label: 'Private full-day', price: `€${RR.privateFullDay}`, note: '6 hrs · your group only' },
    ],
    stops: [
      {
        name: 'Red Rocks',
        croatianName: 'Crvene Stijene',
        description:
          'A stretch of deep-red cliffs rising directly from the Adriatic, coloured by iron oxide in the limestone. The geological formation is breccia: limestone fragments cemented with iron-rich minerals that oxidized over time, exactly like rust on metal.',
        travelTime: 'Around 20 minutes from Hvar Harbour along the south coast.',
        activities:
          'Swimming along the cliff face, snorkelling in deep water that reaches the rock wall without shallowing. Cliff jumping from 5 to 10 metres for groups who want it. The vertical rock drops straight into the sea with no beach or gradual entry.',
        conditions:
          'Westerly winds or calm. Southeast wind (jugo) sends swell directly against the cliffs and can make the approach difficult.',
      },
      {
        name: 'Dubovica Beach',
        description:
          'A pebble cove with turquoise water and a 16th-century stone house on the rocky point at the edge of the bay, one of the oldest standing structures on this part of Hvar island.',
        travelTime: 'Around 15 minutes east along the south coast.',
        activities:
          'Swimming and snorkelling. A small sea cave sits off the eastern cliff face and catches the light in a way not visible from land. Worth exploring with a mask. The small peninsula that closes the bay cuts the wind, making the water calm and warm compared to more exposed beaches on this coast.',
        conditions:
          'Sheltered in most conditions. The cave is most visible with direct sun, before midday.',
      },
      {
        name: 'Borče Bay (Milna)',
        description:
          'A quiet cove on the south coast of Hvar near the village of Milna, protected from the wind. This is Milna on Hvar island, not Milna on Brač.',
        travelTime: 'Around 10 minutes from Hvar Harbour.',
        activities:
          'Swimming and a relaxed stop. Deep, clear water, no facilities on shore. Typically no other boats.',
        conditions:
          'Protected from northwesterly wind (maestral). May get some swell with southeast wind.',
      },
      {
        name: 'Žarače',
        description:
          'A narrow, sheltered bay on the south coast of Hvar surrounded by hills. Also written "Zarace" without the diacritic. Konoba Gego is at the end of the bay, accessible by boat.',
        travelTime: 'Around 12 minutes from Hvar Harbour.',
        activities: 'Swimming in calm, protected water.',
        conditions: 'Protected in most conditions.',
        isOptional: true,
        optionalNote:
          'This is not a guaranteed stop. The skipper includes Žarače depending on sea conditions and the day. If the stop does not happen, no other stop is cut.',
      },
      {
        name: 'Pakleni Islands (Palmižana or Ždrilca)',
        croatianName: 'Paklinski otoci',
        description:
          'An archipelago of 16 uninhabited, car-free islands 8 minutes from Hvar Harbour. The name comes from "paklina," the old Croatian word for pine resin harvested here for centuries to waterproof ship hulls. Tri Grede is at Ždrilca and Bacchus is at Palmižana, both reachable only by boat.',
        travelTime: 'Around 8 minutes from Hvar Harbour.',
        activities:
          'Swimming, snorkelling, and lunch. The skipper chooses between Palmižana or Ždrilca depending on the day. Lunch is not included in the tour price.',
        conditions:
          'Protected in almost all conditions. Some current between islands with strong maestral.',
      },
    ],
    fastFacts: [
      { label: 'Duration',      value: '4 hours (half-day) or 6 hours (full-day)' },
      { label: 'Departs',       value: 'Beach Križa. 09:00 or 14:00 (half-day) · 11:00 (full-day)' },
      { label: 'Capacity',      value: 'Licensed for 12. We cap at 8. Groups of 9 to 16 travel on two boats sailing together.' },
      { label: 'Shared',        value: `€${RR.sharedPerPerson} per person · minimum 6 guests to depart` },
      { label: 'Private',       value: `€${RR.privateHalfDay} half-day · €${RR.privateFullDay} full-day` },
      { label: 'Meeting point', value: MEETING },
      // Included and Not included are injected here by the render from tour.includes/notIncludes
      { label: 'Extra fees',    value: 'None' },
      { label: 'Season',        value: 'May to September' },
    ],
    faqs: [
      {
        question: 'What is included in the Red Rocks & Pakleni Islands tour from Hvar?',
        answer:
          'The MareBoats Hvar speedboat and skipper are included, fuel for the full itinerary, a cooler with ice, bottled water, and snorkel masks. Lunch is not included. Restaurants are available at the Pakleni Islands at Palmižana and Ždrilca. There are no cave entrance fees on this route.',
      },
      {
        question: 'What time does the Red Rocks & Pakleni Islands tour depart from Hvar?',
        answer:
          'Private half-day tours depart at 09:00 (returning by 13:00) or 14:00 (returning by 18:00). The private full-day runs 11:00 to approximately 17:00. Shared tour departure times are confirmed by WhatsApp after booking. All tours depart from Beach Križa, at the MareBoats barrel below the Beach Bay Hvar Hotel.',
      },
      {
        question: 'What is the difference between the 4-hour and 6-hour Red Rocks tour?',
        answer:
          'Both versions visit the same stops on the south coast of Hvar: Red Rocks, Dubovica Beach, Borče Bay, and the Pakleni Islands. The 4-hour half-day moves at a steady pace with time to swim at each stop. The 6-hour full-day (11:00 to 17:00) adds more time at each location, including a proper lunch break at the Pakleni Islands.',
      },
      {
        question: 'How many people are on the shared Red Rocks & Pakleni Islands tour?',
        answer:
          'MareBoats Hvar speedboats are licensed for up to 12 guests but capped at 8 per boat. The shared tour departs when a minimum of 6 guests have confirmed. Groups of 9 to 16 travel on two MareBoats Hvar speedboats sailing together.',
      },
      {
        question: 'Is Žarače a guaranteed stop on the Red Rocks & Pakleni tour?',
        answer:
          'No. Žarače is a weather-dependent stop. When sea conditions allow, the skipper pauses at Žarače on the way south along the Hvar coast. It is a narrow, sheltered bay. On days with swell or wind the stop is skipped, but no other stop is removed from the itinerary.',
      },
      {
        question: 'Can I book the Red Rocks & Pakleni Islands tour as a private group?',
        answer:
          `Yes. The private half-day (4 hours) is €${RR.privateHalfDay} per boat for your group only. The private full-day (6 hours) is €${RR.privateFullDay} per boat. Both options include the speedboat, skipper, fuel, bottled water, cooler with ice, and snorkel masks. Up to 8 guests per boat. Groups of 9 to 16 travel on two boats sailing together.`,
      },
      {
        question: 'Is Dubovica Beach accessible only by boat?',
        answer:
          'There is a narrow road to Dubovica Beach, but it is steep and parking is very limited. Most visitors arrive by boat. MareBoats Hvar stops at Dubovica on every Red Rocks & Pakleni Islands tour. A 16th-century stone house stands at the edge of the bay. A short swim from shore leads to a hidden sea cave not visible from the beach.',
      },
      {
        question: 'Is there shade on a MareBoats Hvar speedboat?',
        answer:
          'Every MareBoats Hvar speedboat has a sun canopy over the main seating area. Shade is available from the moment you leave Hvar Harbour to the last stop of the day. The open deck at the front of the boat is in full sun.',
      },
      {
        question: 'Why does MareBoats Hvar limit groups to 8 guests?',
        answer:
          'MareBoats Hvar speedboats are licensed for up to 12 guests but are capped at 8 per boat. At 8 guests, everyone has room to move between the shaded seating area and the open deck, and the full group can be in the water at the same time. Groups of 9 to 16 travel on two boats sailing together.',
      },
      {
        question: 'Do I have to stay seated during the Red Rocks tour?',
        answer:
          'No. There are no assigned seats on a MareBoats Hvar speedboat. There is room to move and to choose between shade and open sun during the day.',
      },
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

Two private options: 3 hours (€${PK.private!}) for the main Pakleni highlights, or 4 hours (€${PK.privateExtended!}) with more stops and more time on the water. Both for your group, up to 8 guests. Groups of 9 to 16 travel on two boats sailing together - message us for availability. Message us on WhatsApp with your date. We confirm fast.

Most guests who book this tour have already done a full-day trip and want a shorter option. Others are based in Hvar for a few days and prefer to save the longer routes for later. Either way, the Pakleni Islands are worth at least a half day.`,
    duration: '3 OR 4 HRS',
    durationIso: 'PT3H',
    price: formatPriceShort('pakleni-islands'),
    priceEur: getLowestPrice('pakleni-islands'),
    includes: [
      'Private speedboat and skipper',
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
        src: '/images/destinations/hvar-pakleni-islands-coastline-aerial-drone-2026.jpg',
        alt: 'Pakleni Islands coastline aerial drone view - half day boat tour from Hvar',
      },
      {
        src: '/images/destinations/hvar-pakleni-islands-anchorage-aerial-drone-2026.jpg',
        alt: 'Pakleni Islands anchorage aerial drone view - private boat tour from Hvar',
      },
    ],
    keywords: ['pakleni islands boat', 'half day tour hvar'],
    pricingOptions: getPricingOptions('pakleni-islands'),
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

We keep the group small so the day stays relaxed. Your skipper adjusts the pace to sea conditions and what your group actually wants - more time swimming, more caves, or a longer lunch stop. Available as a shared group tour (€${BC.sharedPerPerson} per person) or fully private (€${BC.private} for your group only, up to 8 guests). Groups of 9 to 16 travel on two boats sailing together - same route, same stops, everyone as one group.

Message us on WhatsApp with your date and group size - we confirm fast.`,
    duration: '7 HRS · DEPARTS 10:00',
    durationIso: 'PT7H',
    price: formatPriceShort('blue-cave-pakleni-islands'),
    priceEur: getLowestPrice('blue-cave-pakleni-islands'),
    includes: [
      'Speedboat and skipper',
      'Fuel for the full itinerary',
      'Icebox on board',
      'Bottled water',
      'Snorkeling masks',
    ],
    notIncludes: [
      `Green Cave entrance - €${EXTRAS.greenCave} per person (paid on site, optional)`,
      `Blue Cave entrance - €${EXTRAS.blueCave} per person (paid on site)`,
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
      'Blue Cave (Biševo) - sunlight turns the water electric blue. Best between 11:00-12:00.',
      'Green Cave - natural light through an underwater arch. Swim in from the sea.',
      'Stiniva Bay - voted best beach in Europe. Surrounded by cliffs on three sides.',
      'Medvidina Cave - longest sea cave on Biševo. Still and dark. Nothing moves inside.',
      'Budikovac Blue Lagoon - shallow, calm, turquoise. Best snorkelling of the day.',
      'Pakleni Islands (Palmižana or Zdrilca) - lunch at a waterfront restaurant.',
    ],
    images: [
      {
        src: '/images/destinations/hvar-blue-cave-interior-boat-tour-2026.jpg',
        alt: 'Blue Cave interior - electric blue light inside Biševo cave, Hvar boat tour',
      },
      {
        src: '/images/destinations/hvar-mala-pritiscina-bay-aerial-2026.jpg',
        alt: 'Mala Pritiscina bay aerial view - 5 Islands boat tour from Hvar Croatia',
      },
    ],
    keywords: [
      'blue cave boat tour hvar',
      'blue cave hvar',
      'pakleni islands tour',
      '5 islands tour hvar',
      'stiniva bay tour',
      'hvar boat excursion',
    ],
    pricingOptions: getPricingOptions('blue-cave-pakleni-islands'),
  },

  {
    slug: 'sunset-cruise',
    name: 'Sunset Cruise Hvar',
    tagline: 'Golden hour on the Adriatic - wine-friendly, calm water, and the best light of the day.',
    shortDescription:
      'Private sunset cruise from Hvar, Croatia. Golden hour over the Dalmatian coast, drinks on board, calm waters and the best photo light of the day.',
    description: `A two-hour private cruise from Hvar Harbour, timed to the sunset. The light on the Adriatic at golden hour is different from anything you get during the day: warmer, softer, the kind that makes every photo look like it was planned.

This private evening boat tour departs from Hvar Harbour and follows a route chosen for views and comfort, with time to relax on deck and swim if conditions allow. Because the boat is private, the pace stays yours.

Your captain focuses on safety and smooth cruising as light fades, and your skipper chooses the stops for the best view of the sky over the Pakleni Islands. Every booking includes bottled water and fresh fruit on board.

Pricing scales with group size: see the breakdown below. Wine is included with every booking, and an extra bottle is available for €${SUNSET_WINE_EXTRA}. Sunset slots are limited during high season, so message us early on WhatsApp to reserve your date.`,
    duration: '2 HRS',
    durationIso: 'PT2H',
    price: formatPriceFull('sunset-cruise'),
    priceEur: getLowestPrice('sunset-cruise'),
    includes: [
      'Private speedboat and skipper',
      'Fuel for the sunset itinerary',
      'Bottled water and fresh fruit on board',
      'Wine included for groups up to 6 (see pricing)',
    ],
    notIncludes: ['Hotel pickup'],
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
        src: '/images/tours/hvar-pakleni-islands-dusk-aerial-drone-2026-02.jpg',
        alt: 'Pakleni Islands at dusk from drone - sunset cruise from Hvar Croatia',
      },
      {
        src: '/images/tours/hvar-town-sunset-spanjola-fortress-drone-2026.jpg',
        alt: 'Hvar town at sunset from drone - Spanjola fortress and harbour aerial view',
      },
    ],
    keywords: ['sunset cruise hvar', 'hvar sunset boat tour'],
    pricingOptions: getPricingOptions('sunset-cruise'),
  },

  {
    slug: 'private-boat-charter',
    name: 'Private Boat Charter Hvar',
    tagline: 'Your boat, your itinerary - full-day freedom with a skipper who knows these waters.',
    shortDescription:
      `Private boat charter from Hvar, Croatia. Your own boat, captain, route and equipment - design the day you want on the Adriatic. €${PC.private} for boat + skipper, fuel paid separately.`,
    description: `A private boat charter from Hvar is the most flexible format we offer: you choose the rhythm, the stops, and the balance between sightseeing, swimming, and simple time on the water. Whether you want a slow island-hop, a photography-focused day, or a family-friendly route with plenty of shallow bays, your captain helps you build a realistic plan based on weather and distances.

Unlike fixed itineraries, a full-day charter gives you room to adapt - spend longer at Pakleni Islands, add a coastal cruise, or prioritise snorkelling and quiet beaches. The boat remains exclusively yours for the group, with no strangers on board and no rigid schedule beyond what the sea safely allows.

Price is €${PC.private} for the boat and skipper. Fuel is paid separately at the marina based on the route you choose - usually a few hundred euros for a long day depending on distance. We discuss a realistic fuel estimate before you commit, so there are no surprises.

Every charter includes snorkelling masks, icebox and bottled water. Message us with your dates, group size and any stops you have in mind.`,
    duration: 'Full day',
    durationIso: 'PT8H',
    price: formatPriceFull('private-boat-charter'),
    priceEur: getLowestPrice('private-boat-charter'),
    includes: [
      'Private speedboat and skipper',
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
        src: '/images/destinations/hvar-coast-crystal-water-swimming-drone-2026-01.jpg',
        alt: 'Crystal clear Adriatic water from above - private boat charter from Hvar Croatia',
      },
      {
        src: '/images/destinations/hvar-pakleni-islands-aerial-overview-drone-2026-02.jpg',
        alt: 'Pakleni Islands aerial overview - private boat charter from Hvar Croatia',
      },
    ],
    keywords: ['private boat charter hvar', 'boat rental hvar croatia'],
  },

  {
    slug: 'split-airport-transfer',
    name: 'Split Airport to Hvar Speedboat Transfer',
    tagline: 'Private 45-minute speedboat transfer between Split Airport and Hvar Harbour.',
    shortDescription: `Split city departure: €${SAT.splitHvar} · Split Airport departure: €${SAT.airportHvar} (airport pier is a short taxi from the terminal)`,
    description: `A Split Airport to Hvar transfer by private speedboat is the fastest, most comfortable way to start or end your trip on the island. Instead of taxis, ferries and waiting times, you go straight from the mainland to Hvar Harbour in around 45 minutes - with luggage handled and a flexible departure time that fits your flight.

We coordinate the meeting point near Split (airport pier or Split town harbour, depending on your arrival) and confirm everything by WhatsApp the day before so there are no surprises. Your skipper monitors weather and tides, suggests the best route, and adapts the plan if your flight is delayed.

Pricing is transparent: €${SAT.splitHvar} for the Split harbour ↔ Hvar transfer, €${SAT.airportHvar} for the Split Airport pier ↔ Hvar transfer (the airport pier route is slightly longer). Both are private - your group only, your luggage, your timing.

Most guests book this transfer at the start or end of their trip. You land, skip the ferry queue, and arrive in Hvar in about an hour.

Message us on WhatsApp with your flight number, group size and luggage to lock in your slot. Peak summer transfers fill quickly - booking ahead is the only way to guarantee the time you want.`,
    duration: '~45 min',
    durationIso: 'PT45M',
    price: formatPriceFull('split-airport-transfer'),
    priceEur: getLowestPrice('split-airport-transfer'),
    includes: [
      'Private speedboat and skipper',
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

Our skippers know the anchorages, the wind patterns, and the smaller bays around Hvar, Vis, Brač and the Pakleni archipelago. We are licensed for Croatian waters and we communicate clearly in English, Croatian, German, Italian and Spanish (when Fede is on board), so the handover from your charter crew to ours is always smooth.

If you are searching for a private water taxi in Hvar, a yacht transfer, a sailboat pickup, or a way to start a tour without coming to the harbour first, this is the service. Message us with your boat name, your coordinates and the time window - we will reply with a quote and a plan.`,
    duration: 'On demand',
    durationIso: 'PT1H',
    price: formatPriceFull('yacht-sailboat-taxi'),
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
