import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

export const metadata: Metadata = generateSEO({
  title: 'About MareBoats Hvar | Private Boat Tours',
  description:
    'MareBoats runs private speedboat tours from Hvar Harbour. Licensed Croatian skippers, insured boats, zero shared groups. Meet the team and find out why guests come back.',
  keywords: [
    'mareboats hvar',
    'hvar boat captain',
    'licensed boat tour hvar',
    'about mareboats',
    'private boat tours hvar',
  ],
  slug: 'about',
  ogImage: '/img/about.jpeg',
});

const SITE = 'https://mareboatshvar.com';
const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour';

type Crew = {
  name: string;
  role: string;
  languages: string[];
  bio: string;
  image: string;
  imageAlt: string;
};

const CREW: Crew[] = [
  {
    name: 'Nikola',
    role: 'Owner & Captain',
    languages: ['Croatian', 'English'],
    bio: 'Born in Hvar. Knows every bay, cave and hidden beach on this coast.',
    image: '/img/team-1.png',
    imageAlt: 'Nikola — owner and captain at MareBoats Hvar',
  },
  {
    name: 'Federico',
    role: 'Skipper & Marketing',
    languages: ['English', 'Croatian', 'Italian', 'Spanish'],
    bio: 'Skipper and the guy who built this website.',
    image: '/img/team-2.jpg',
    imageAlt: 'Federico — skipper at MareBoats Hvar',
  },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE}/#localbusiness`,
      name: 'MareBoats Tours Hvar',
      url: SITE,
      telephone: '+385951966734',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Janka Žagjala 56',
        addressLocality: 'Hvar',
        postalCode: '21450',
        addressCountry: 'HR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.16847,
        longitude: 16.44300,
      },
      openingHours: 'Mo-Su 08:00-21:00',
      priceRange: '€€',
      image: `${SITE}/img/mareboats-og.png`,
      sameAs: ['https://www.instagram.com/mareboats.hvar/'],
    },
    ...CREW.map((c) => ({
      '@type': 'Person',
      name: c.name,
      jobTitle: c.role,
      knowsLanguage: c.languages,
      image: `${SITE}${c.image}`,
      worksFor: { '@id': `${SITE}/#localbusiness` },
    })),
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={aboutSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden border-b border-[color:var(--border)]">
        <Image
          src="/img/about.jpeg"
          alt="MareBoats Hvar crew at Hvar Harbour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-[color:var(--bg)]/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-container flex-col justify-end px-4 pb-14 pt-28 md:pb-20">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            About MareBoats
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Behind the Wheel
          </h1>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            The people, the boats, and the reason we do this.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              The story
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Private by design
            </h2>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
              <p>
                MareBoats started with one boat and one idea: that every group deserves their own
                experience on the water, not a seat on a crowded tour.
              </p>
              <p>
                Today we run a small fleet from Hvar Harbour, May through September, and every trip
                is still private. Your group, your boat, your pace.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)]">
            <Image
              src="/img/about-2.jpeg"
              alt="MareBoats speedboat at Hvar Harbour"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why private tours */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Why private
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Your boat. Your pace.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'No shared groups',
                body: 'Every trip is yours alone. No strangers, no fixed stops, no one else\'s schedule.',
              },
              {
                title: 'Flexible timing',
                body: 'You set the departure. Stop longer at a bay, skip a spot — the boat waits for you.',
              },
              {
                title: 'Local expertise',
                body: 'Nikola grew up here. He knows every cave, every calm bay, and when to avoid the crowds.',
              },
              {
                title: 'Transparent pricing',
                body: 'One price for the whole boat. Cheaper per person than most shared tours once you split it.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--accent)]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              The team
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Who you&apos;ll meet at the barrel
            </h2>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CREW.map((c) => (
              <li key={c.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/70">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                        {c.name}
                      </h3>
                      <p className="mt-1 font-body text-sm font-semibold text-[color:var(--accent)]">
                        {c.role}
                      </p>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {c.bio}
                    </p>
                    <p className="mt-auto font-body text-xs uppercase tracking-[0.12em] text-[color:var(--gray)]">
                      Speaks: <span className="text-[color:var(--white)]">{c.languages.join(' · ')}</span>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-[color:var(--gray)]">
            During peak season (July–August) we operate with additional skippers. Language
            availability varies &mdash; ask when booking.
          </p>
        </div>
      </section>

      {/* The boat */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] md:order-2">
            <Image
              src="/img/package-4.jpeg"
              alt="MareBoats speedboat on the Adriatic near Hvar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              The boat
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Built for the Adriatic
            </h2>
            <ul className="mt-6 space-y-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
              {[
                'Up to 10 passengers per speedboat',
                'Icebox on board, bottled water included',
                'Snorkeling masks for every guest',
                'Full safety gear and first aid kit',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Licensed & insured
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Every trip runs under a valid Croatian maritime licence
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Boat and passenger insurance included on all tours and transfers.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: 'Licensed', sub: 'Croatian maritime authority' },
              { label: 'Insured', sub: 'Boat + passenger cover' },
              { label: '5★ on Google', sub: 'Happy guests across seasons' },
            ].map((badge) => (
              <li
                key={badge.label}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6 text-center"
              >
                <p className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--accent)]">
                  {badge.label}
                </p>
                <p className="mt-2 font-body text-xs uppercase tracking-[0.12em] text-[color:var(--gray)]">
                  {badge.sub}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Want to meet us on the water?
          </h2>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <WhatsAppTrackedLink
              href={WA_URL}
              label="about_page"
              className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              Book on WhatsApp
            </WhatsAppTrackedLink>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98] md:text-base"
            >
              See All Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
