import { formatPriceSchema, RENTAL_WITH_SKIPPER_FROM } from '@/lib/pricing';

const SITE_URL = 'https://mareboatshvar.com';

const PROVIDER = {
  '@type': 'LocalBusiness',
  name: 'MareBoats Hvar',
  url: SITE_URL,
} as const;

const sharedGeo = {
  '@type': 'GeoCoordinates',
  latitude: 43.1690147,
  longitude: 16.4429617,
} as const;

const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '5.0',
  bestRating: '5',
  worstRating: '1',
  reviewCount: '152',
} as const;

const AVAILABLE_LANGUAGES = ['English', 'Croatian', 'German', 'Spanish', 'Italian'];

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TouristAttraction'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'MareBoats Hvar',
  description:
    'Private speedboat tours from Hvar Harbour. Blue Cave, Pakleni Islands, sunset cruises and custom charters. Small groups.',
  url: SITE_URL,
  logo: `${SITE_URL}/img/mareboats-logo-horizontal.svg`,
  image: `${SITE_URL}/img/mareboats-og.png`,
  telephone: '+385951966734',
  email: 'mare.boatshvar@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hvar Harbour',
    addressLocality: 'Hvar',
    addressRegion: 'Split-Dalmatia County',
    postalCode: '21450',
    addressCountry: 'HR',
  },
  geo: sharedGeo,
  hasMap: 'https://maps.app.goo.gl/k84JNBQLvqgZunEX6',
  sameAs: [
    'https://maps.app.goo.gl/k84JNBQLvqgZunEX6',
    'https://www.instagram.com/mareboats.hvar/',
    'https://www.facebook.com/profile.php?id=100093516814322',
    'https://www.getyourguide.com/mareboatshvar-s613289/',
    'https://www.tripadvisor.com/Attraction_Review-g659912-d34371535-Reviews-MareBoats-Hvar_Island_Split_Dalmatia_County_Dalmatia.html',
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Bank Transfer',
  availableLanguage: AVAILABLE_LANGUAGES,
  aggregateRating: AGGREGATE_RATING,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '21:00',
    validFrom: '2026-04-01',
    validThrough: '2026-10-31',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: sharedGeo,
    geoRadius: '100000',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MareBoats Hvar',
  url: SITE_URL,
};

export const tourSchemaMap: Record<string, object> = {
  'blue-cave-pakleni-islands': {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Service'],
    name: '5 Islands, 4 Beaches & Blue Cave - Hvar Boat Tour',
    description:
      'Full-day speedboat tour from Hvar Harbour. Green Cave, Stiniva Bay, Blue Cave on Biševo, Medvidina Cave, Budikovac Blue Lagoon and Pakleni Islands. Small groups, departs 10:00.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 8,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: formatPriceSchema('blue-cave-pakleni-islands'),
    url: `${SITE_URL}/tours/blue-cave-pakleni-islands/`,
  },

  'red-rocks-pakleni-islands': {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Service'],
    name: 'Red Rocks & Pakleni Islands - Hvar Boat Tour',
    description:
      'Speedboat tour from Hvar: Red Rocks cliffs, Dubovica Beach, a secret sea cave and Pakleni Islands. Private or shared. Half-day or full-day options.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 8,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: formatPriceSchema('red-rocks-pakleni-islands'),
    url: `${SITE_URL}/tours/red-rocks-pakleni-islands/`,
  },

  'pakleni-islands': {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Service'],
    name: 'Pakleni Islands Half Day Boat Tour from Hvar',
    description:
      'Half-day private speedboat tour from Hvar Harbour around the Pakleni Islands. Snorkeling, secluded coves and Palmižana. 3 to 4 hours.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 8,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: formatPriceSchema('pakleni-islands'),
    url: `${SITE_URL}/tours/pakleni-islands/`,
  },

  'sunset-cruise': {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Service'],
    name: 'Sunset Cruise Hvar',
    description:
      'Private sunset cruise from Hvar Harbour. Golden hour over the Dalmatian coast, drinks on board, calm waters. Approximately 2 hours.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 8,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: formatPriceSchema('sunset-cruise'),
    url: `${SITE_URL}/tours/sunset-cruise/`,
  },

  'private-boat-charter': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Boat Charter Hvar',
    description:
      'Full-day private speedboat charter from Hvar Harbour. Custom itinerary, your skipper, fuel extra. Your boat, your route, your pace.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    maximumAttendeeCapacity: 8,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: formatPriceSchema('private-boat-charter'),
    url: `${SITE_URL}/tours/private-boat-charter/`,
  },

  'yacht-sailboat-taxi': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yacht & Sailboat Water Taxi Hvar',
    description:
      'Water taxi service for yachts and sailboats anchored near Hvar. Transfer or full tour pickup from your vessel.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    url: `${SITE_URL}/tours/yacht-sailboat-taxi/`,
  },
};

export const rentalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boat Rental Hvar',
  description:
    `Rent a boat in Hvar with or without skipper. Private tour with skipper included from ${RENTAL_WITH_SKIPPER_FROM} EUR. Self-drive rental for licensed skippers. Underwater scooter available as an add-on on private tours. Pickup at Hvar Harbour.`,
  provider: PROVIDER,
  areaServed: 'Hvar, Croatia',
  offers: {
    '@type': 'Offer',
    price: String(RENTAL_WITH_SKIPPER_FROM),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  url: `${SITE_URL}/rentals/`,
};

export const rentalBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Rentals', item: `${SITE_URL}/rentals/` },
  ],
};

export function buildTouristTripSchema({
  name,
  description,
  image,
  url,
  offers,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  offers?: { price: string; priceCurrency: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    image,
    url,
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        availability: 'https://schema.org/InStock',
        url,
      },
    }),
  };
}

export const jobPostingSkipperSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Skipper',
  description:
    '<p>You run a speedboat with up to 8 guests on board. You pick them up at Beach Križa, you sail the route, you look after the people, you bring them back. You load ice, water and drinks before the first tour. You wash the boat. You check the engine, the bilge pump, the fenders and the lines. At the end of the day you close your own boat and report it in writing.</p><ul><li>A nautical licence. Croatian category B, or an international licence at the same level.</li><li>English. You are talking to guests all day, every day.</li><li>The right attitude. This matters more to us than your CV.</li></ul>',
  datePosted: '2026-08-15',
  validThrough: '2027-03-31',
  employmentType: ['FULL_TIME', 'SEASONAL'],
  hiringOrganization: {
    '@type': 'LocalBusiness',
    name: 'MareBoats Hvar',
    url: SITE_URL,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hvar',
      addressRegion: 'Split-Dalmatia',
      addressCountry: 'HR',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 1200,
      maxValue: 1500,
      unitText: 'MONTH',
    },
  },
  jobBenefits: 'Shared accommodation and daily lunch included',
  directApply: false,
};

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
