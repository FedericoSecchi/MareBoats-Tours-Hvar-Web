import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { buildTouristTripSchema, buildFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Blue Cave Tour from Hvar | Mare Boats Hvar',
  description:
    'Blue Cave boat tour from Hvar: Blue Cave (Biševo), Green Cave, Stiniva Bay & Pakleni Islands. Private speedboat, English skipper, drone video. Book on WhatsApp.',
  keywords: [
    'blue cave tour from hvar',
    'blue cave hvar',
    'blue cave boat trip',
    'bisevo blue cave',
    'hvar to blue cave boat',
    'blue cave excursion split hvar',
  ],
  slug: 'blue-cave',
  ogImage: '/img/destination-4.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20the%20Blue%20Cave%20tour%20from%20Hvar.';

const faqs = [
  {
    question: 'How long is the Blue Cave tour from Hvar?',
    answer:
      'The full-day Blue Cave tour is approximately 8 hours (10:30–18:30), departing from Hvar port. It includes Blue Cave (Biševo), Green Cave, Stiniva Bay, and Pakleni Islands.',
  },
  {
    question: 'Is the Blue Cave entrance fee included?',
    answer:
      'The Blue Cave entrance fee (approximately €18 per person) and Green Cave fee (approximately €12 per person) are paid separately on site and are not included in the tour price.',
  },
  {
    question: 'Can I visit the Blue Cave from Hvar?',
    answer:
      'Yes. Hvar is one of the best departure points for the Blue Cave on Biševo island. The speedboat journey takes approximately 45–60 minutes each way.',
  },
  {
    question: 'What is included in the Blue Cave boat trip?',
    answer:
      'Included: private speedboat, English-speaking skipper, icebox, bottled water, snorkeling equipment, aerial drone video, and underwater footage.',
  },
  {
    question: 'How many people can join the Blue Cave tour?',
    answer:
      'Our speedboats accommodate up to 12 people. All tours are private — you will not share the boat with strangers.',
  },
  {
    question: 'What if the weather is bad?',
    answer:
      'If sea conditions make the Blue Cave inaccessible, we adjust the itinerary or reschedule at no extra cost. Your safety always comes first.',
  },
];

const includes = [
  'Private speedboat (no shared tours)',
  'English-speaking skipper',
  'Bottled water & icebox',
  'Snorkeling equipment',
  'Aerial drone video footage',
  'Underwater video footage',
];

const notIncludes = [
  'Blue Cave entrance fee (~€18 pp) — paid on site',
  'Green Cave entrance fee (~€12 pp) — paid on site',
  'Lunch (restaurant stop available on Pakleni)',
];

export default function BlueCavePage() {
  const tripSchema = buildTouristTripSchema({
    name: 'Blue Cave Tour from Hvar',
    description:
      'Full-day private speedboat tour from Hvar visiting Blue Cave (Biševo), Green Cave, Stiniva Bay, and Pakleni Islands. Includes aerial drone video and underwater footage.',
    image: 'https://mareboatshvar.com/img/destination-4.jpeg',
    duration: 'PT8H',
    url: 'https://mareboatshvar.com/blue-cave',
  });

  const faqSchema = buildFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/destination-4.jpeg"
          alt="Blue Cave boat tour from Hvar — crystal blue waters of Biševo island"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)]/85 via-[color:var(--bg)]/30 to-transparent" />

        <div className="relative z-10 w-full px-4 pb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
            Blue Cave Tour from Hvar
          </h1>
          <p className="text-lg text-[color:var(--gray)] mb-6 max-w-2xl">
            Private speedboat to Blue Cave (Biševo), Green Cave, Stiniva Bay &amp; Pakleni Islands.
            Aerial drone &amp; underwater video included.
          </p>

          {/* Quick info */}
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {['8 hours', 'Up to 12 people', 'Private boat', 'Drone video included'].map((info) => (
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
              Book Blue Cave Tour
            </a>
            <Link href="/tours" className="btn-secondary">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Route */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading mb-6">Tour Route &amp; Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-[color:var(--gray)] mb-4">
              Departing from Hvar port at <strong>10:30</strong>, this 8-hour private tour covers
              the best of the Dalmatian islands in one day.
            </p>
            <ol className="space-y-3">
              {[
                { time: '10:30', stop: 'Departure from Hvar port' },
                { time: '11:15', stop: 'Green Cave — emerald grotto (€12 pp)' },
                { time: '12:00', stop: 'Stiniva Bay — secluded pebble beach' },
                { time: '13:30', stop: 'Blue Cave, Biševo (€18 pp)' },
                { time: '15:00', stop: 'Pakleni Islands — swim &amp; snorkel' },
                { time: '18:30', stop: 'Return to Hvar port' },
              ].map((item) => (
                <li key={item.stop} className="flex gap-4 items-start">
                  <span className="text-[color:var(--accent)] font-semibold text-sm w-12 shrink-0">
                    {item.time}
                  </span>
                  <span
                    className="text-[color:var(--gray)] text-sm"
                    dangerouslySetInnerHTML={{ __html: item.stop }}
                  />
                </li>
              ))}
            </ol>
          </div>

          <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
            <Image
              src="/img/destination-5.jpeg"
              alt="Green Cave boat tour from Hvar — emerald grotto near Blue Cave"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Includes / not includes */}
      <section className="bg-[color:var(--surface)] py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--white)] mb-4">What&apos;s Included</h2>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[color:var(--gray)] text-sm">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--white)] mb-4">Not Included</h2>
            <ul className="space-y-2">
              {notIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[color:var(--gray)] text-sm">
                  <span className="font-bold mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { src: '/img/destination-4.jpeg', alt: 'Blue Cave Biševo — crystal blue water' },
            { src: '/img/destination-5.jpeg', alt: 'Green Cave near Hvar — emerald grotto' },
            { src: '/img/destination-2.jpeg', alt: 'Stiniva Bay — hidden cove on Vis island' },
            { src: '/img/package-1.jpeg', alt: 'Private speedboat tour from Hvar' },
            { src: '/img/carousel-1.jpeg', alt: 'Speedboat tour Hvar — Adriatic sea' },
            { src: '/img/carousel-2.jpeg', alt: 'Croatian coastline from a private boat tour' },
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
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--surface)] py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            Blue Cave Tour — Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-[color:var(--border)] bg-[color:var(--surface)] rounded-xl p-5">
                <dt className="font-semibold text-[color:var(--white)]">{faq.question}</dt>
                <dd className="text-[color:var(--gray)] mt-1 text-sm">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-[color:var(--bg)] text-white">
        <h2 className="text-3xl font-bold mb-4">Book Your Blue Cave Tour</h2>
        <p className="text-[color:var(--gray)] mb-6 max-w-md mx-auto">
          Message us on WhatsApp with your preferred date and group size. We reply within hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on WhatsApp
          </a>
          <Link href="/boat-rental" className="btn-secondary">
            Rent a Boat Instead
          </Link>
        </div>
      </section>
    </main>
  );
}
