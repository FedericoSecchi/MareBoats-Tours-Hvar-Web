import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Hvar Boat Excursions | All Tours | Mare Boats Hvar',
  description:
    'All boat excursions from Hvar: Blue Cave, Pakleni Islands, Red Rocks, sunset cruise, boat rental & transfers. Private speedboat, English skipper, drone video.',
  keywords: [
    'hvar boat excursion',
    'best boat tours hvar',
    'pakleni islands tour',
    'boat trips hvar',
    'hvar island tours',
    'private boat hvar',
  ],
  slug: 'tours',
  ogImage: '/img/package-1.jpeg',
});

const WA_BASE = 'https://wa.me/385951966734?text=Hi!%20I%27m%20interested%20in%20';

const tours = [
  {
    id: 'blue-cave',
    title: 'Blue Cave & Green Cave (Full Day)',
    duration: '8h',
    time: '10:30 – 18:30',
    route: 'Green Cave → Stiniva Bay → Blue Cave (Biševo) → Pakleni Islands',
    extras: 'Blue Cave €18 pp · Green Cave €12 pp (paid on site)',
    includes: 'Water, snorkeling gear, icebox, drone video',
    image: '/img/package-1.jpeg',
    alt: 'Blue Cave and Green Cave full day boat tour from Hvar',
    href: '/blue-cave',
    waText: 'the%20Blue%20Cave%20full%20day%20tour.',
    badge: 'Most popular',
    badgeColor: 'bg-[color:var(--accent)]',
  },
  {
    id: 'pakleni',
    title: 'Pakleni Islands + Red Rocks',
    duration: '4h',
    time: '14:00 – 18:00',
    route: 'Borce Bay → Red Rocks → Dubovica Beach → Pakleni (Zdrilca/Tarsce)',
    extras: 'No extra fees',
    includes: 'Water, snorkeling gear, icebox',
    image: '/img/package-2.jpeg',
    alt: 'Pakleni Islands and Red Rocks half day boat tour from Hvar',
    href: '/tours',
    waText: 'the%20Pakleni%20Islands%20tour.',
    badge: 'Half day',
    badgeColor: 'bg-[color:var(--accent)]',
  },
  {
    id: 'private',
    title: 'Private Custom Tour',
    duration: 'Flexible',
    time: 'Your schedule',
    route: 'You choose — we plan together via WhatsApp',
    extras: 'Fuel estimate based on your plan',
    includes: 'Water, snorkeling gear, icebox, towels on request, drone video',
    image: '/img/package-3.jpeg',
    alt: 'Private custom boat tour from Hvar — fully tailored itinerary',
    href: '/tours',
    waText: 'a%20private%20custom%20tour.',
    badge: 'Fully private',
    badgeColor: 'bg-[color:var(--bg)]',
  },
  {
    id: 'rental',
    title: 'Boat Rental (No Skipper)',
    duration: '8h',
    time: '09:00 – 17:00',
    route: 'Explore freely — we give you a local guide with top spots',
    extras: 'Fuel: first 20nm included, refuel on return',
    includes: 'Life jackets, safety equipment, local tips briefing',
    image: '/img/package-4.jpeg',
    alt: 'Boat rental Hvar — rent a speedboat without skipper',
    href: '/boat-rental',
    waText: 'a%20boat%20rental%20in%20Hvar.',
    badge: 'Self-drive',
    badgeColor: 'bg-[color:var(--surface)]',
  },
  {
    id: 'sunset',
    title: 'Sunset Cruise',
    duration: '2h',
    time: '19:00 – 21:00',
    route: 'Scenic cruise along the Hvar coastline at golden hour',
    extras: '',
    includes: 'Bottled wine, glasses, snacks',
    image: '/img/package-5.jpeg',
    alt: 'Sunset boat tour Hvar — evening cruise with wine and snacks',
    href: '/sunset',
    waText: 'the%20sunset%20cruise.',
    badge: 'Romantic',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'scooter',
    title: 'Water Scooters (Add-on)',
    duration: 'Add-on',
    time: 'With any tour',
    route: 'Explore underwater and snorkel spots with ease',
    extras: '',
    includes: 'Available as add-on to any boat tour',
    image: '/img/waterscooter.jpeg',
    alt: 'Water scooter add-on for boat tours in Hvar',
    href: '/tours',
    waText: 'water%20scooters%20as%20an%20add-on.',
    badge: 'Add-on',
    badgeColor: 'bg-teal-600',
  },
];

const toursSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Boat Tours from Hvar — Mare Boats Hvar',
  description: 'All boat excursions from Hvar, Croatia',
  itemListElement: tours.slice(0, 5).map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title,
    url: `https://mareboatshvar.com${t.href}`,
  })),
};

export default function ToursPage() {
  return (
    <main>
      <JsonLd data={toursSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/carousel-1.jpeg"
          alt="Boat excursions from Hvar — private speedboat tours Croatia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)]/85 via-[color:var(--bg)]/30 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Hvar Boat Excursions</h1>
          <p className="text-[color:var(--gray)] text-lg max-w-xl">
            Private speedboat tours from Hvar. Blue Cave, Pakleni Islands, sunset cruises and more —
            all fully private, with drone video included.
          </p>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="flex flex-col rounded-2xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)] shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span
                  className={`absolute top-3 left-3 ${tour.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {tour.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-semibold text-[color:var(--white)] text-lg mb-1">{tour.title}</h2>

                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="bg-[color:var(--surface)] text-[color:var(--white)] text-xs font-medium px-2 py-1 rounded">
                    {tour.duration}
                  </span>
                  {tour.time !== 'Your schedule' && tour.time !== 'With any tour' && (
                    <span className="bg-[color:var(--bg)] text-[color:var(--gray)] text-xs px-2 py-1 rounded">
                      {tour.time}
                    </span>
                  )}
                </div>

                <p className="text-[color:var(--gray)] text-sm mb-1">{tour.route}</p>
                {tour.extras && (
                  <p className="text-[color:var(--gray)] text-xs mb-1">{tour.extras}</p>
                )}
                <p className="text-[color:var(--gray)] text-xs mb-4">{tour.includes}</p>

                <div className="mt-auto flex gap-2">
                  <a
                    href={`${WA_BASE}${tour.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                  >
                    Book on WhatsApp
                  </a>
                  {tour.href !== '/tours' && (
                    <Link
                      href={tour.href}
                      className="px-3 py-2 border border-[color:var(--accent)] text-[color:var(--accent)] text-sm font-semibold rounded-lg hover:bg-[color:var(--surface)] transition-colors"
                    >
                      Details
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--bg)] text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Not sure which tour to pick?</h2>
        <p className="text-[color:var(--gray)] mb-6 max-w-md mx-auto">
          Message us on WhatsApp — we&apos;ll recommend the best option based on your group, dates
          and preferences.
        </p>
        <a
          href="https://wa.me/385951966734?text=Hi!%20I%27d%20like%20help%20choosing%20a%20tour."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Ask us on WhatsApp
        </a>
      </section>
    </main>
  );
}
