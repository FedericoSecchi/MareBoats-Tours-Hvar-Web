import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { buildTouristTripSchema, buildFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Sunset Boat Tour Hvar | Evening Cruise with Wine',
  description:
    'Sunset boat tour from Hvar: 2 hours of golden light on the Adriatic. Wine, snacks, and stunning views included. Private speedboat. Book on WhatsApp.',
  keywords: [
    'sunset boat tour hvar',
    'sunset cruise hvar',
    'evening boat hvar',
    'hvar sunset cruise',
    'romantic boat tour hvar',
    'sunset speedboat hvar',
  ],
  slug: 'sunset',
  ogImage: '/img/package-5.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27m%20interested%20in%20the%20sunset%20cruise%20from%20Hvar.';

const faqs = [
  {
    question: 'What time does the sunset cruise depart?',
    answer:
      'The sunset tour departs at 19:00 from Hvar port and returns at approximately 21:00. Exact timing adjusts slightly by season to catch the best light.',
  },
  {
    question: 'What is included in the sunset cruise?',
    answer:
      'Included: private speedboat, English-speaking skipper, bottled wine, glasses, and snacks. Bring a light jacket — evenings on the water can be cool.',
  },
  {
    question: 'Is the sunset tour suitable for couples?',
    answer:
      'Absolutely. The sunset tour is one of our most popular options for couples and small groups. The boat is fully private — just your group, no strangers.',
  },
  {
    question: 'How many people can join the sunset cruise?',
    answer:
      'Up to 12 people. All sunset tours are private — you will not share the boat with other guests.',
  },
  {
    question: 'Can I combine the sunset tour with a full-day excursion?',
    answer:
      'Yes — some guests do the Pakleni Islands half-day tour in the afternoon and the sunset cruise in the evening. Message us and we will arrange both.',
  },
];

export default function SunsetPage() {
  const tripSchema = buildTouristTripSchema({
    name: 'Sunset Boat Tour from Hvar',
    description:
      'Private 2-hour sunset cruise from Hvar port. Includes wine, snacks, and scenic views of the Adriatic at golden hour.',
    image: 'https://mareboatshvar.com/img/package-5.jpeg',
    duration: 'PT2H',
    url: 'https://mareboatshvar.com/sunset',
  });
  const faqSchema = buildFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/package-5.jpeg"
          alt="Sunset boat tour from Hvar — evening cruise on the Adriatic with wine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mare-dark/80 via-mare-dark/20 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
            Sunset Boat Tour from Hvar
          </h1>
          <p className="text-lg text-blue-100 mb-6 max-w-xl">
            Two hours of golden light on the Adriatic. Wine, snacks, and the most beautiful
            coastline in Croatia — fully private.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {['2 hours', '19:00 departure', 'Wine & snacks included', 'Fully private'].map((info) => (
              <span
                key={info}
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5"
              >
                {info}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Sunset Cruise
            </a>
            <Link href="/tours" className="btn-secondary">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-heading mb-4">What&apos;s Included</h2>
            <ul className="space-y-3">
              {[
                'Private speedboat — your group only',
                'English-speaking skipper',
                'Bottled wine & glasses',
                'Snacks on board',
                'Scenic coastal route at golden hour',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-orange-400 font-bold mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 border-l-4 border-orange-300 pl-3">
              Tip: bring a light jacket — evenings on the water can be cool even in summer.
            </p>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="/img/carousel-2.jpeg"
              alt="Evening light on the Adriatic sea near Hvar — sunset cruise"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mare-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: '/img/package-5.jpeg', alt: 'Sunset cruise Hvar — private speedboat' },
              { src: '/img/carousel-2.jpeg', alt: 'Golden hour Adriatic — Hvar evening boat tour' },
              { src: '/img/destination-7.jpeg', alt: 'Hvar coastline at sunset from a private boat' },
              { src: '/img/carousel-1.jpeg', alt: 'Private boat tour Hvar — sunset colors' },
              { src: '/img/destination-1.jpeg', alt: 'Pakleni Islands at dusk — Hvar sunset cruise' },
              { src: '/img/about.jpeg', alt: 'Mare Boats Hvar — sunset boat tour crew' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-8">Sunset Cruise — FAQ</h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 bg-white rounded-xl p-5">
                <dt className="font-semibold text-mare-dark">{faq.question}</dt>
                <dd className="text-gray-600 mt-1 text-sm">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-orange-500 to-mare-dark text-white">
        <h2 className="text-3xl font-bold mb-4">Book Your Sunset Cruise</h2>
        <p className="text-orange-100 mb-6 max-w-md mx-auto">
          Send us your date and group size on WhatsApp — we confirm within hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on WhatsApp
          </a>
          <Link href="/blue-cave" className="btn-secondary">
            See Full Day Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
