import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { TourCardImage } from '@/components/ui/TourCardImage';

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
  objectPosition: string;
};

const CREW: Crew[] = [
  {
    name: 'Nikola',
    role: 'Founder',
    languages: ['Croatian', 'English'],
    bio: 'Born and raised in Hvar. Runs all operations: logistics, scheduling, fleet. Knows the island inside out, every bay, every season. Occasional skipper, but his real job is making sure every tour runs without a hitch.',
    image: '/img/team-1.png',
    imageAlt: 'Nikola, founder of MareBoats Hvar',
    objectPosition: '50% 30%',
  },
  {
    name: 'Josip',
    role: 'Head Skipper',
    languages: ['Croatian', 'English', 'German'],
    bio: "Nikola\u2019s brother. Has worked every season on the water since he was a kid, Hvar is home. Lived in Germany for a few years, so he connects easily with guests. One of the most beloved skippers on the island.",
    image: '/img/josip-skipper.jpg',
    imageAlt: 'Josip, head skipper at MareBoats Hvar',
    objectPosition: '50% 40%',
  },
  {
    name: 'Federico',
    role: 'Marketing',
    languages: ['Spanish', 'Italian', 'English'],
    bio: "Argentine. Grew up sailing, started at 6 in an Optimist, competed internationally at South American and World Championships. Trained sailors as head coach for the Ecuadorian Sailing Federation. Worked with the 69F class, classic regattas and cruising boats up to 90ft. Handles marketing for MareBoats. Occasionally on board as skipper.",
    image: '/img/fede-skipper.jpg',
    imageAlt: 'Federico, marketing at MareBoats Hvar',
    objectPosition: '50% 20%',
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
          src="/img/hvar-harbour-sunset-aerial-drone-2026-02.jpg"
          alt="Hvar harbour at sunset - aerial drone view"
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
          <h1 className="mt-3 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl md:text-6xl">
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
              Born in Hvar
            </h2>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
              <p>
                MareBoats was built by Nikola, born and raised on the island, and someone who has
                spent his whole life on these waters. The idea was simple: offer real boat tours from
                Hvar, run by people who actually know the place.
              </p>
              <p>
                Today we run a fleet of speedboats from Hvar Harbour, May through September. Tours can be
                fully private (your group, your boat, your pace) or shared, departing when the
                boat fills up.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)]">
            <Image
              src="/img/hvar-harbour-aerial-morning-drone-2026.jpg"
              alt="Hvar harbour aerial drone view - morning light over the waterfront"
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
              How we work
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Private or shared. Your call.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Private charter',
                body: 'Your group only. You set the stops, the timing and the pace. The boat waits for you.',
              },
              {
                title: 'Shared departure',
                body: 'Pay per seat. The boat fills up and departs. Great for solo travellers and small groups.',
              },
              {
                title: 'Local skippers',
                body: 'Nikola and Josip grew up on these waters. They know every cave, bay and when to avoid the crowds.',
              },
              {
                title: 'Any group size',
                body: 'Speedboats fit up to 8 guests. For larger groups, multiple boats depart together.',
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
            <p className="mt-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
              In Hvar, tour operators work from wooden barrels on the harbour. On the day of your tour, come find us there and we&apos;ll take you to the boat.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CREW.map((c) => (
              <li key={c.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/70">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: c.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {c.name}
                    </h3>
                    <p className="flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
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
            During peak season additional skippers join the team. Language availability may vary
            &mdash; let us know when booking if it matters.
          </p>
        </div>
      </section>

      {/* The boat */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] md:order-2">
            <TourCardImage
              images={[
                { src: '/img/hvar-open-sea-speedboat-aerial-drone-2026-01.jpg', alt: 'MareBoats Hvar speedboat aerial drone' },
                { src: '/img/hvar-red-rocks-speedboat-aerial-drone-2026-01.jpg', alt: 'MareBoats Hvar speedboat Red Rocks aerial drone' },
              ]}
            />
          </div>
          <div className="md:order-1">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              The fleet
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Built for the Adriatic
            </h2>
            <ul className="mt-6 space-y-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
              {[
                'Modern speedboats, 150 to 300 hp',
                'Up to 8 passengers per boat',
                'Sun canopy, music system and cooler on board',
                'Snorkel gear and masks included for every guest',
                'Large groups: multiple boats depart together',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
              Full-size speedboats, small groups. We don&apos;t fill them to the limit. That&apos;s the whole idea.
            </p>
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
