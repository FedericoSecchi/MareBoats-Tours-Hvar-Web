import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { buildTouristTripSchema, buildFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Boat Transfer Hvar Split | Private Water Taxi Hvar',
  description:
    'Private boat transfers from Hvar to Split, Brač, Korčula, and Dubrovnik. Fast water taxi — book your departure time. Contact us on WhatsApp.',
  keywords: [
    'boat transfer hvar split',
    'water taxi hvar',
    'hvar split boat',
    'private transfer hvar',
    'hvar boat taxi',
    'speedboat transfer hvar',
    'hvar to split by boat',
  ],
  slug: 'transfers',
  ogImage: '/img/destination-7.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20transfer%20from%20Hvar.';

const routes = [
  { from: 'Hvar', to: 'Split', duration: '~60 min', direction: 'Both ways' },
  { from: 'Hvar', to: 'Brač (Bol)', duration: '~30 min', direction: 'Both ways' },
  { from: 'Hvar', to: 'Korčula', duration: '~90 min', direction: 'Both ways' },
  { from: 'Hvar', to: 'Vis', duration: '~60 min', direction: 'Both ways' },
];

const faqs = [
  {
    question: 'How long is the boat transfer from Hvar to Split?',
    answer:
      'The private speedboat transfer from Hvar to Split takes approximately 60 minutes, depending on sea conditions. The public ferry takes 1.5–2.5 hours — our transfer is significantly faster.',
  },
  {
    question: 'Can I book a one-way transfer from Hvar?',
    answer:
      'Yes. We offer one-way and return transfers. Message us on WhatsApp with your desired date, time, and number of passengers.',
  },
  {
    question: 'Do you transfer to Split Airport?',
    answer:
      'We transfer to Split port (Riva or Ferry Terminal). From Split port, Split Airport (SPU) is a 30-minute taxi or shuttle ride. We can help coordinate your arrival logistics.',
  },
  {
    question: 'How many people can join a transfer?',
    answer:
      'Our speedboats accommodate up to 12 people. For larger groups, we arrange multiple boats. All transfers are private — no shared rides.',
  },
  {
    question: 'Can you pick me up from my hotel or villa?',
    answer:
      'If your accommodation has a dock or is near a public pier, we can arrange pickup. Contact us with the details and we will confirm.',
  },
  {
    question: 'What is the price of a boat transfer from Hvar to Split?',
    answer:
      'TODO — Prices vary by route, group size and season. Contact us on WhatsApp for a quote.',
  },
];

export default function TransfersPage() {
  const tripSchema = buildTouristTripSchema({
    name: 'Private Boat Transfer Hvar — Split, Brač, Korčula',
    description:
      'Fast private speedboat transfers from Hvar to Split, Brač, Korčula, and Vis. Water taxi service with flexible departure times.',
    image: 'https://mareboatshvar.com/img/destination-7.jpeg',
    duration: 'PT1H',
    url: 'https://mareboatshvar.com/transfers',
  });

  const faqSchema = buildFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/destination-7.jpeg"
          alt="Boat transfer from Hvar to Split — private speedboat water taxi Croatia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mare-dark/80 via-mare-dark/30 to-transparent" />

        <div className="relative z-10 w-full px-4 pb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
            Boat Transfer Hvar — Split &amp; Islands
          </h1>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Private speedboat transfers from Hvar to Split, Brač, Korčula, and Vis. Skip the ferry —
            arrive faster in style.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {['Private speedboat', 'Flexible departure', 'All routes', 'Up to 12 people'].map(
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
              Book a Transfer
            </a>
            <Link href="/boat-rental" className="btn-secondary">
              Rent a Boat Instead
            </Link>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading mb-2">Transfer Routes from Hvar</h2>
        <p className="text-gray-600 mb-8">
          All transfers are private. We depart when you need — no fixed ferry schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {routes.map((route) => (
            <div
              key={`${route.from}-${route.to}`}
              className="border border-gray-200 rounded-xl p-5 flex items-center justify-between hover:border-mare-primary transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 font-semibold text-mare-dark">
                  <span>{route.from}</span>
                  <span className="text-mare-primary">→</span>
                  <span>{route.to}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{route.direction}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-mare-primary">{route.duration}</div>
                <div className="text-xs text-gray-400">by speedboat</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-mare-light rounded-xl p-5 text-sm text-gray-700">
          <strong>Don&apos;t see your route?</strong> We can transfer you to any coastal destination in
          Dalmatia.{' '}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-mare-primary font-semibold hover:underline">
            Message us for a custom quote →
          </a>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-mare-dark text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-mare-light">
            Why Choose Our Water Taxi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Private — No strangers',
                desc: 'Your group only. No waiting for other passengers or fixed stops.',
              },
              {
                title: 'Flexible schedule',
                desc: 'Depart when you want. Early morning airport runs or late evening returns.',
              },
              {
                title: 'Local knowledge',
                desc:
                  'Our skippers know every port, weather pattern, and shortcut on the Dalmatian coast.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { src: '/img/carousel-1.jpeg', alt: 'Private speedboat transfer from Hvar' },
            { src: '/img/destination-8.jpeg', alt: 'Adriatic coast boat transfer Croatia' },
            { src: '/img/destination-9.jpeg', alt: 'Water taxi Hvar — island hopping Croatia' },
          ].map((img) => (
            <div key={img.src} className="relative aspect-video rounded-xl overflow-hidden">
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
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            Hvar Boat Transfer — Frequently Asked Questions
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
      <section className="py-16 px-4 text-center bg-mare-primary text-white">
        <h2 className="text-3xl font-bold mb-4">Book Your Hvar Transfer</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto">
          Tell us your route, date, time, and number of passengers. We confirm within hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on WhatsApp
          </a>
          <Link href="/blue-cave" className="btn-secondary">
            Explore Tours Instead
          </Link>
        </div>
      </section>
    </main>
  );
}
