import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Private Boat Tours Hvar | Mare Boats Hvar',
  description:
    'Private boat tours from Hvar, Croatia. Blue Cave, Pakleni Islands, sunset cruises & boat rental. Aerial drone video included. Book on WhatsApp.',
  keywords: [
    'private boat tours hvar',
    'boat tour hvar',
    'mare boats hvar',
    'hvar boat excursion',
    'blue cave hvar',
    'pakleni islands tour',
  ],
  ogImage: '/img/carousel-1.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour.';

const services = [
  {
    title: 'VIP Private Tour',
    subtitle: 'Full Day · 8h',
    description:
      'Blue Cave, Green Cave, Stiniva Bay, and Pakleni Islands — fully tailored to you. Aerial drone video and underwater footage included.',
    image: '/img/package-1.jpeg',
    alt: 'Private boat tour from Hvar — Blue Cave and Pakleni Islands full day',
    href: '/blue-cave',
    cta: 'Explore Blue Cave Tour',
  },
  {
    title: 'Half Day Tour',
    subtitle: 'Half Day · 4h',
    description:
      'Pakleni Islands, Red Rocks, and Dubovica Beach — the best of Hvar in an afternoon. Perfect for families and small groups.',
    image: '/img/package-2.jpeg',
    alt: 'Half day boat tour Hvar — Pakleni Islands and Red Rocks',
    href: '/tours',
    cta: 'View All Tours',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/img/carousel-1.jpeg"
          alt="Private boat tour from Hvar, Croatia — crystal clear Adriatic waters"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mare-dark/60 via-mare-dark/40 to-mare-dark/70" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Private Boat Tours in Hvar
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto">
            Blue Cave excursions, Pakleni Islands, sunset cruises and boat rental from Hvar, Croatia.
            Aerial drone video &amp; underwater footage included.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <Link href="/tours" className="btn-secondary">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="bg-mare-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-medium">
          <div>Hvar Port departure</div>
          <div>Up to 12 people</div>
          <div>English-speaking skipper</div>
          <div>Drone &amp; underwater video</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-mare-primary font-medium uppercase tracking-wide text-sm mb-2">
            Our Services
          </p>
          <h2 className="section-heading">Boat Tours from Hvar</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Flexible itineraries, local crew and well-maintained boats. Message us to check
            availability and plan your day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <article
              key={service.href}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-mare-light text-mare-dark text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-semibold text-mare-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-mare-primary font-semibold hover:text-mare-dark transition-colors text-sm"
                >
                  {service.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* More services row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: 'Boat Rental',
              desc: 'Rent a boat without a skipper and explore at your own pace.',
              href: '/boat-rental',
              img: '/img/package-4.jpeg',
              alt: 'Boat rental Hvar — rent a boat without skipper',
            },
            {
              title: 'Transfers',
              desc: 'Fast boat transfers between Hvar, Split, and the islands.',
              href: '/transfers',
              img: '/img/destination-7.jpeg',
              alt: 'Boat transfer Hvar Split — private water taxi',
            },
            {
              title: 'Sunset Cruise',
              desc: 'Two hours of golden light, wine, and the Adriatic at its best.',
              href: '/sunset',
              img: '/img/package-5.jpeg',
              alt: 'Sunset boat tour Hvar — evening cruise with wine',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white flex-1">
                <h3 className="font-semibold text-mare-dark">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Drone / differentiator */}
      <section className="bg-mare-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-mare-dark mb-4">
            Aerial Drone &amp; Underwater Video Included
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Every tour includes professional aerial drone footage and underwater video of your
            experience — a unique keepsake of your day on the Adriatic.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Your Private Tour
          </a>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-8">Common Questions</h2>
        <dl className="space-y-4">
          {[
            {
              q: 'What is included in the tour?',
              a: 'Water, snorkeling equipment, icebox, and professional skipper. Aerial drone video and underwater footage on all private tours.',
            },
            {
              q: 'How many people can join a private tour?',
              a: 'Our speedboats accommodate up to 12 people. For larger groups we can arrange multiple boats.',
            },
            {
              q: 'How do I book a boat tour from Hvar?',
              a: 'The easiest way is to message us on WhatsApp. We confirm availability and details within hours.',
            },
          ].map((item) => (
            <div key={item.q} className="border border-gray-200 rounded-xl p-5">
              <dt className="font-semibold text-mare-dark">{item.q}</dt>
              <dd className="text-gray-600 mt-1 text-sm">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="text-center mt-6">
          <Link href="/faq" className="text-mare-primary font-semibold hover:underline">
            See all frequently asked questions →
          </Link>
        </p>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 text-white text-center overflow-hidden">
        <Image
          src="/img/carousel-2.jpeg"
          alt="Book a private boat tour from Hvar — Adriatic sea"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-mare-dark/70" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Hvar by Boat?
          </h2>
          <p className="text-blue-100 mb-6">
            Message us on WhatsApp — we reply within hours and tailor every tour to your day.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
