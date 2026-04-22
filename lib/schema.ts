const SITE_URL = 'https://mareboatshvar.com';

const sharedAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Janka Žagjala 56, Hvar Harbour',
  addressLocality: 'Hvar',
  addressRegion: 'Split-Dalmatia County',
  postalCode: '21450',
  addressCountry: 'HR',
} as const;

const sharedGeo = {
  '@type': 'GeoCoordinates',
  latitude: 43.16847,
  longitude: 16.443,
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
      provider: { '@id': `${SITE_URL}/#localbusiness` },
    },
  ],
};

export function buildTouristTripSchema({
  name,
  description,
  image,
  duration,
  url,
  offers,
}: {
  name: string;
  description: string;
  image: string;
  duration: string;
  url: string;
  offers?: { price: string; priceCurrency: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    image,
    duration,
    url,
    provider: {
      '@type': 'TourismBusiness',
      name: 'Mare Boats Hvar',
      url: 'https://mareboatshvar.com',
    },
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

