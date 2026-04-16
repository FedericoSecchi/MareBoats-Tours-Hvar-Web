import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { buildTouristTripSchema, buildFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Boat Rental Hvar | Rent a Boat Without Skipper',
  description:
    'Rent a boat in Hvar without a skipper. Explore Pakleni Islands, hidden coves and beaches at your own pace. Book on WhatsApp — available daily.',
  keywords: [
    'boat rental hvar',
    'rent a boat hvar',
    'hvar boat hire',
    'boat hire hvar without skipper',
    'hvar self drive boat',
    'rent speedboat hvar',
  ],
  slug: 'boat-rental',
  ogImage: '/img/package-4.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20renting%20a%20boat%20in%20Hvar.';

const faqs = [
  {
    question: 'Do I need a boat license to rent a boat in Hvar?',
    answer:
      'Yes. Croatian law requires a valid boat operator license (or equivalent EU/international license) to rent a boat without a skipper. If you do not have a license, we can provide a skipper for a guided private tour instead.',
  },
  {
    question: 'What is included in the boat rental?',
    answer:
      'The rental includes the boat, fuel for the first 20 nautical miles, life jackets, and basic safety equipment. You return the boat with the same fuel level.',
  },
  {
    question: 'How many people can be on the rental boat?',
    answer:
      'Our rental boats accommodate up to 8 people. For larger groups, additional boats can be arranged.',
  },
  {
    question: 'Where can I go with the rental boat?',
    answer:
      'You can explore Pakleni Islands, Dubovica Beach, Milna Bay, Lucisca Cove, and more. We will give you a local guide with recommended spots and weather advice before departure.',
  },
  {
    question: 'What time can I pick up and return the boat?',
    answer:
      'Pickup is at 09:00 from Hvar port. Return is by 17:00–18:00 depending on sunset. We are flexible — message us to confirm.',
  },
  {
    question: 'What if I have never driven a boat before?',
    answer:
      'If you do not have a license, we strongly recommend booking a private tour with our skipper instead. Safety first — our skipper knows the local waters perfectly.',
  },
];

export default function BoatRentalPage() {
  const tripSchema = buildTouristTripSchema({
    name: 'Boat Rental Hvar — Self-Drive Speedboat',
    description:
      'Rent a speedboat in Hvar without a skipper. Explore Pakleni Islands and hidden coves at your own pace. Valid boat license required.',
    image: 'https://mareboatshvar.com/img/package-4.jpeg',
    duration: 'PT8H',
    url: 'https://mareboatshvar.com/boat-rental',
  });

  const faqSchema = buildFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/package-4.jpeg"
          alt="Boat rental Hvar — rent a speedboat without skipper in Hvar, Croatia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mare-dark/80 via-mare-dark/30 to-transparent" />

        <div className="relative z-10 w-full px-4 pb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
            Boat Rental in Hvar
          </h1>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Rent a speedboat without a skipper and explore Pakleni Islands, hidden coves, and beaches
            at your own pace. Valid boat license required.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {['8 hours rental', 'Up to 8 people', 'No skipper required', 'Fuel included (20nm)'].map(
              (info) => (
                <span
                  key={info}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5"
                >
                  {info}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Check Availability
            </a>
            <Link href="/blue-cave" className="btn-secondary">
              Prefer a Guided Tour?
            </Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading mb-6">Boat Rental Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 text-gray-700">
            <p>
              Explore the Adriatic on your own terms. Our rental speedboats depart from Hvar port and
              give you the freedom to discover secluded bays, swim stops, and nearby islands without
              a fixed schedule.
            </p>
            <p>
              Before departure, we provide a full briefing on the boat controls, local regulations,
              recommended spots, and weather conditions. A nautical chart and our local tips are
              included.
            </p>
            <p className="text-sm text-gray-500 border-l-4 border-mare-accent pl-4">
              <strong>License required:</strong> A valid boating license (or equivalent) is
              mandatory to rent without a skipper. No license? Book our{' '}
              <Link href="/blue-cave" className="text-mare-primary underline">
                private guided tours
              </Link>{' '}
              instead.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Duration', value: '8 hours (09:00–17:00)' },
              { label: 'Departure', value: 'Hvar Port' },
              { label: 'Capacity', value: 'Up to 8 people' },
              { label: 'Fuel', value: 'First 20nm included — you refuel on return' },
              { label: 'License', value: 'Valid boat license required' },
              { label: 'Price', value: 'TODO — contact for current rates' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500 text-sm font-medium">{label}</span>
                <span className="text-mare-dark text-sm font-semibold text-right max-w-[60%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested spots */}
      <section className="bg-mare-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">Where to Go</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/img/destination-2.jpeg', name: 'Stiniva Bay', alt: 'Stiniva Bay hidden beach Hvar' },
              { src: '/img/destination-1.jpeg', name: 'Pakleni Islands', alt: 'Pakleni Islands boat rental Hvar' },
              { src: '/img/destination-3.jpeg', name: 'Dubovica Beach', alt: 'Dubovica beach boat rental' },
              { src: '/img/destination-6.jpeg', name: 'Red Rocks', alt: 'Red Rocks Hvar coastline by boat' },
            ].map((spot) => (
              <div key={spot.name} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={spot.src}
                  alt={spot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-white text-sm font-semibold">{spot.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            Boat Rental Hvar — Frequently Asked Questions
          </h2>
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
      <section className="py-16 px-4 text-center bg-mare-dark text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent a Boat in Hvar?</h2>
        <p className="text-blue-200 mb-6 max-w-md mx-auto">
          Message us on WhatsApp with your date and group size. We will confirm availability within
          hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on WhatsApp
          </a>
          <Link href="/transfers" className="btn-secondary">
            Need a Transfer Instead?
          </Link>
        </div>
      </section>
    </main>
  );
}
