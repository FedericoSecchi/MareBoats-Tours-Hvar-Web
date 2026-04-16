import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Mare Boats Hvar | Local Boat Tour Crew',
  description:
    'Meet the team behind Mare Boats Hvar. Local crew, private speedboat tours, drone video and underwater footage. Based in Hvar port since 2019.',
  keywords: [
    'about mare boats hvar',
    'mare boats hvar team',
    'hvar local boat tours',
    'mare boats crew hvar',
  ],
  slug: 'about',
  ogImage: '/img/about.jpeg',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27m%20interested%20in%20booking%20a%20tour%20with%20Mare%20Boats%20Hvar.';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end text-white overflow-hidden">
        <Image
          src="/img/about.jpeg"
          alt="Mare Boats Hvar team — local crew at Hvar port"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mare-dark/80 via-mare-dark/30 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Mare Boats Hvar</h1>
          <p className="text-blue-100 text-lg max-w-xl">
            Local crew. Private boats. Drone video included. Based at Hvar port.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-gray-700">
            <h2 className="section-heading">Who We Are</h2>
            <p>
              Mare Boats Hvar is a family-run boat tour company based at the port of Hvar, Croatia.
              We offer private speedboat tours, Blue Cave excursions, Pakleni Islands tours, sunset
              cruises, boat rental and transfers across the Dalmatian coast.
            </p>
            <p>
              Every tour is private — your group only, with a local English-speaking skipper who
              knows these waters inside out. We take care of the navigation; you enjoy the sea.
            </p>
            <p>
              Our differentiator: every private tour includes <strong>aerial drone footage</strong>{' '}
              and <strong>underwater video</strong> — a professional keepsake of your day on the
              Adriatic that most operators don&apos;t offer.
            </p>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="/img/about-2.jpeg"
              alt="Mare Boats Hvar — speedboat and crew at Hvar port"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mare-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-10">Why Choose Mare Boats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎬',
                title: 'Drone & Underwater Video',
                desc: 'Professional aerial drone footage and underwater video included in every private tour. Leave with memories that last.',
              },
              {
                icon: '🚤',
                title: '100% Private',
                desc: 'Your group only — never shared with strangers. We tailor every tour to your pace, preferences and the day\'s conditions.',
              },
              {
                icon: '🧭',
                title: 'Local Knowledge',
                desc: 'Our skippers are locals. They know the hidden coves, the best swimming spots, and how to read the sea.',
              },
              {
                icon: '☀️',
                title: 'Flexible Itineraries',
                desc: 'No fixed script. We adjust routes based on weather, sea conditions and what you want to see.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Friendly',
                desc: 'Life jackets for all ages, calm routes for families with kids, snorkeling spots safe for beginners.',
              },
              {
                icon: '📍',
                title: 'Hvar Port Based',
                desc: 'We operate from Hvar port — easy access, central location, no complicated logistics.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-mare-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-8">The Crew</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/img/team-1.png', name: 'TODO — Name', role: 'Skipper & Owner' },
            { src: '/img/team-2.jpg', name: 'TODO — Name', role: 'Skipper' },
            { src: '/img/team-3.JPEG', name: 'TODO — Name', role: 'Drone Operator' },
            { src: '/img/team-4.jpg', name: 'TODO — Name', role: 'Guide' },
          ].map((member) => (
            <div key={member.src} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                <Image
                  src={member.src}
                  alt={`${member.name} — ${member.role} at Mare Boats Hvar`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-mare-dark text-sm">{member.name}</p>
              <p className="text-gray-500 text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mare-dark text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Hvar with Us?</h2>
        <p className="text-blue-200 mb-6 max-w-md mx-auto">
          Message us on WhatsApp and we&apos;ll plan the perfect day on the water for your group.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book on WhatsApp
          </a>
          <Link href="/tours" className="btn-secondary">
            View All Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
