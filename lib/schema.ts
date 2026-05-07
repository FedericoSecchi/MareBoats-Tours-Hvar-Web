const SITE_URL = 'https://mareboatshvar.com';

const sharedAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Hvar Harbour',
  addressLocality: 'Hvar',
  addressRegion: 'Split-Dalmatia County',
  postalCode: '21450',
  addressCountry: 'HR',
} as const;

const sharedGeo = {
  '@type': 'GeoCoordinates',
  latitude: 43.1689123,
  longitude: 16.4432111,
} as const;

export const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'TouristInformationCenter'],
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'Mare Boats Hvar',
      description:
        'Private boat tours, Blue Cave excursions, boat rental, and transfers from Hvar, Croatia. Local skippers, flexible itineraries, WhatsApp booking.',
      url: SITE_URL,
      telephone: '+385951966734',
      email: 'mare.boatshvar@gmail.com',
      address: sharedAddress,
      geo: sharedGeo,
      image: `${SITE_URL}/img/carousel-1.jpeg`,
      logo: `${SITE_URL}/img/mareboats-logo-horizontal.svg`,
      sameAs: ['https://www.instagram.com/mareboats.hvar/'],
      priceRange: '$$',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Bank Transfer',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '18',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      ],
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: sharedGeo,
        geoRadius: '100000',
      },
    },
    {
      '@type': 'TouristAttraction',
      '@id': `${SITE_URL}/#touristattraction`,
      name: 'Mare Boats Hvar — Private Boat Tours',
      description:
        'Private speedboat tours from Hvar visiting the Blue Cave, Pakleni Islands, and the Dalmatian coast. Local skipper, icebox, snorkeling masks included.',
      url: SITE_URL,
      image: `${SITE_URL}/img/carousel-1.jpeg`,
      address: sharedAddress,
      geo: sharedGeo,
      isAccessibleForFree: false,
      touristType: ['Couples', 'Families', 'Groups'],
    },
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

