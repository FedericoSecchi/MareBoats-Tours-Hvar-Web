export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TourismBusiness',
  name: 'Mare Boats Hvar',
  description:
    'Private boat tours, Blue Cave excursions, boat rental, and transfers from Hvar, Croatia. Includes aerial drone video and underwater footage.',
  url: 'https://mareboatshvar.com',
  telephone: '+385951966734',
  email: 'mare.boatshvar@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Port of Hvar',
    addressLocality: 'Hvar',
    addressRegion: 'Split-Dalmatia County',
    postalCode: '21450',
    addressCountry: 'HR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.1725,
    longitude: 16.4411,
  },
  image: 'https://mareboatshvar.com/img/carousel-1.jpeg',
  sameAs: [
    'https://www.instagram.com/mareboats.hvar/',
  ],
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Bank Transfer',
  openingHours: 'Mo-Su 08:00-20:00',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.1725,
      longitude: 16.4411,
    },
    geoRadius: '100000',
  },
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

