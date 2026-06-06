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
  reviewCount: '26',
} as const;

const AVAILABLE_LANGUAGES = ['English', 'Croatian', 'German', 'Spanish', 'Italian'];

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TouristAttraction'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'MareBoats Hvar',
  description:
    'Private speedboat tours from Hvar Harbour. Blue Cave, Pakleni Islands, sunset cruises and custom charters. Local skipper, small groups.',
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
    closes: '20:00',
    validFrom: '2026-05-01',
    validThrough: '2026-09-30',
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
      'Full-day speedboat tour from Hvar Harbour. Green Cave, Stiniva Bay, Blue Cave on Bisevo, Medvidina Cave, Budikovac Blue Lagoon and Pakleni Islands. Small groups, departs 10:00.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 9,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: [
      {
        '@type': 'Offer',
        name: 'Shared group tour',
        price: '130',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 130,
          priceCurrency: 'EUR',
          unitText: 'per person',
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private tour',
        price: '700',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    ],
    url: `${SITE_URL}/tours/blue-cave-pakleni-islands/`,
    aggregateRating: AGGREGATE_RATING,
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
    maximumAttendeeCapacity: 9,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: [
      {
        '@type': 'Offer',
        name: 'Shared tour',
        price: '85',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 85,
          priceCurrency: 'EUR',
          unitText: 'per person',
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private half-day',
        price: '400',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private full-day',
        price: '500',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    ],
    url: `${SITE_URL}/tours/red-rocks-pakleni-islands/`,
    aggregateRating: AGGREGATE_RATING,
  },

  'pakleni-islands': {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Service'],
    name: 'Pakleni Islands Half Day Boat Tour from Hvar',
    description:
      'Half-day private speedboat tour from Hvar Harbour around the Pakleni Islands. Snorkeling, secluded coves and Palmizana. 3 to 4 hours.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    geo: sharedGeo,
    maximumAttendeeCapacity: 9,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      description: 'Price on request via WhatsApp',
    },
    url: `${SITE_URL}/tours/pakleni-islands/`,
    aggregateRating: AGGREGATE_RATING,
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
    maximumAttendeeCapacity: 9,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: {
      '@type': 'Offer',
      price: '250',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    url: `${SITE_URL}/tours/sunset-cruise/`,
    aggregateRating: AGGREGATE_RATING,
  },

  'private-boat-charter': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Boat Charter Hvar',
    description:
      'Full-day private speedboat charter from Hvar Harbour. Custom itinerary, local skipper, fuel extra. Your boat, your route, your pace.',
    provider: PROVIDER,
    areaServed: 'Hvar, Croatia',
    maximumAttendeeCapacity: 9,
    availableLanguage: AVAILABLE_LANGUAGES,
    offers: {
      '@type': 'Offer',
      price: '500',
      priceCurrency: 'EUR',
      description: 'Fuel not included',
      availability: 'https://schema.org/InStock',
    },
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
    'Rent a boat in Hvar with or without skipper. Private tour with skipper included from 400 EUR. Self-drive rental for licensed skippers. Water scooter hire also available. Pickup at Hvar Harbour.',
  provider: PROVIDER,
  areaServed: 'Hvar, Croatia',
  offers: {
    '@type': 'Offer',
    price: '400',
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
