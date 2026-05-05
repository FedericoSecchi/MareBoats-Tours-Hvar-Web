import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'On Tour — MareBoats Hvar',
  description:
    'Quick reference for guests on board: what each stop is, why it matters, and little things you might miss. Used during the tour.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

type Destination = {
  id: string;
  name: string;
  subtitle: string;
  paragraphs: string[];
  tips?: string[];
};

const destinations: Destination[] = [
  {
    id: 'hvar-harbour',
    name: 'Hvar Town & Harbour',
    subtitle: 'Starting point · 2,400+ years of history',
    paragraphs: [
      'Hvar is one of the sunniest places in Europe — about 2,726 hours of sun a year. That is why the old locals used to offer free nights in their hotels to anyone unlucky enough to get a cloudy day in summer.',
      'Looking back from the water you can see the Španjola Fortress on the hill. It was built in the 16th century to protect the town from Ottoman and Venetian attacks, and the views from up there are worth the climb if you have a spare morning.',
    ],
    tips: [
      'The big stone building on the main square is St Stephen’s Cathedral, finished in the 17th century.',
      'Hvar has been continuously inhabited for more than 2,400 years — one of the oldest towns in Europe.',
    ],
  },
  {
    id: 'red-rocks',
    name: 'Red Rocks',
    subtitle: 'South coast of Hvar · cliff jumping',
    paragraphs: [
      'These vertical cliffs are red because the limestone is full of iron oxide — basically slow-motion rust. The colour gets more intense late in the afternoon when the sun hits from the west.',
      'The water here is deep right up to the rock, which is what makes it perfect for cliff jumping. The classic spots are between 5 and 10 metres.',
    ],
    tips: [
      'Always check with the skipper before jumping — depth and wind matter.',
      'Best photos: lower angle from the water, looking up at the cliff.',
    ],
  },
  {
    id: 'dubovica',
    name: 'Dubovica Beach',
    subtitle: 'Iconic bay · 16th-century stone house',
    paragraphs: [
      'Dubovica is the postcard beach of Hvar — a pebble bay protected by a natural cove, with pine trees coming down to the water. The stone house at the beach dates back to the 16th century and was originally used by local farmers bringing the olive and grape harvest down to the boat.',
      'The water stays calm here even on windy days because of the way the bay is angled to the south.',
    ],
  },
  {
    id: 'borce',
    name: 'Borče Bay',
    subtitle: 'Quiet cove · warm-up swim',
    paragraphs: [
      'Borče is a smaller, quieter cove on the south coast. It is the perfect first stop if you want a warm-up swim before the busier spots.',
      'Crystal water, very few other boats, and a sandy patch under the water about 30 metres from the rocks.',
    ],
  },
  {
    id: 'green-cave',
    name: 'Green Cave (Zelena Špilja)',
    subtitle: 'Biševo · sunlight through the roof',
    paragraphs: [
      'The Green Cave gets its name from how the sunlight reflects off the algae on the walls and turns the water a deep green. Unlike the Blue Cave, the light here comes from above — through a hole in the ceiling — so the effect is strongest around midday.',
      'You can usually swim inside. The cave is bigger than it looks from outside and echoes beautifully.',
    ],
    tips: [
      'Entrance fee: €12 per person.',
      'Best light: between 11:00 and 13:00 in summer.',
    ],
  },
  {
    id: 'blue-cave',
    name: 'Blue Cave (Modra Špilja)',
    subtitle: 'Biševo · the famous one',
    paragraphs: [
      'The Blue Cave works backwards to the Green Cave: the light comes in from under the water, through a submerged opening, and lights up the whole cavern in an impossible electric blue.',
      'It was discovered in the 19th century by a local painter who spotted the light from a small hole above. Today you enter in small rowing boats — we wait outside and you go in with the official staff.',
    ],
    tips: [
      'Entrance fee: €24 per person.',
      'Best colour: between 11:00 and 12:00, when the sun hits directly.',
      'No swimming inside — only rowing boats are allowed.',
    ],
  },
  {
    id: 'stiniva',
    name: 'Stiniva Bay',
    subtitle: 'Vis · voted best beach in Europe (2016)',
    paragraphs: [
      'Stiniva is what is left after a sea cave collapsed thousands of years ago. What you are left with is a cathedral-like beach closed off from the sea by two huge cliffs, with just a narrow opening to get in.',
      'In 2016 it was voted the best beach in Europe by European Best Destinations. It gets busy at midday — going early or late is worth it.',
    ],
  },
  {
    id: 'pakleni',
    name: 'Pakleni Islands',
    subtitle: 'Palmižana · Ždrilca · Taršće',
    paragraphs: [
      'The Pakleni Islands — 21 islands and islets just across from Hvar town. The name comes from paklina, a kind of pine tar the old fishermen used to waterproof the wooden boats. Nothing to do with "pekao" / hell, even though Croatian makes it sound that way.',
      'Palmižana has the best restaurants, Ždrilca is the postcard turquoise shallow bay with two or three floating bars, Taršće is wilder and emptier.',
    ],
  },
  {
    id: 'budikovac',
    name: 'Budikovac (Blue Lagoon)',
    subtitle: 'Shallow · crystal clear · snorkeling',
    paragraphs: [
      'A small island between Vis and Hvar with a shallow lagoon about 1 to 3 metres deep. The visibility here is some of the best in the archipelago — on a calm day you can see every pebble on the bottom from the boat.',
      'Turtles, bream and the occasional octopus are spotted regularly.',
    ],
    tips: [
      'Great spot for first-time snorkelers — shallow water, no strong currents.',
      'The tiny restaurant on the island serves grilled fish caught the same morning.',
    ],
  },
];

const funFacts = [
  'Croatia has over 1,200 islands — only about 50 are inhabited.',
  'The Adriatic is one of the cleanest seas in the Mediterranean — visibility can reach 30+ metres on calm days.',
  'Hvar lavender harvest is in late June. If the air smells sweet on the south side of the island, that is why.',
  'The local word for "cheers" is "živjeli" — pronounced jee-vyeh-lee.',
  'Dolphin sightings are rare but possible, especially early morning between Hvar and Vis.',
];

const LOCAL_STOPS: { category: string; stops: { name: string; detail: string }[] }[] = [
  {
    category: '🏛️ Hvar Town — Culture & History',
    stops: [
      {
        name: 'Kino Mediteran (Open Air Cinema)',
        detail: 'Films screened under the stars in the Veneranda fortress in summer, inside the historic Arsenal theater in winter. Running since 2012. Bilingual subtitles. Starts at 9pm. ~5€. One of the best evenings in Hvar.',
      },
      {
        name: 'Hvar Arsenal',
        detail: 'Built in the 14th century as a shipyard for the Venetian galley. Burned by the Ottomans in 1571, rebuilt. The theater inside (1612) is one of the oldest public theaters in Europe. Ground floor was a working cinema until 1993.',
      },
      {
        name: 'St. Stephen\'s Cathedral',
        detail: '16th–17th century cathedral on Hvar\'s main square, built on the site of a Benedictine monastery. The bell tower is 16th century. Free to enter.',
      },
      {
        name: 'Bonj Beach (Beach Club Hvar)',
        detail: 'The glamour beach. Sunbeds, cocktails, white stone cabanas. 10-min walk from town center. Best for groups who want luxury over seclusion.',
      },
    ],
  },
  {
    category: '🏊 Beaches & Swimming',
    stops: [
      {
        name: 'Pokonji Dol',
        detail: '25-min coastal walk from Hvar Town. Wide pebble beach, pine trees, surprisingly uncrowded. Sunbeds for rent. One of the best accessible beaches on the island.',
      },
      {
        name: 'Mekićevica (Strand)',
        detail: 'Nudist beach 40 min walk from town. Quiet, scenic, pebble and rock. Locals-only vibe.',
      },
      {
        name: 'Plaža Velo Borče',
        detail: 'Pebble cove near Hvar Town, clear water, less crowded than Bonj. Good for swimming.',
      },
      {
        name: 'Momića Polje Bay',
        detail: 'Sheltered bay between Hvar and Pakleni. Calm water, anchor spot in light wind.',
      },
      {
        name: 'Store-Stone Beach',
        detail: 'Remote pebble beach on the south Hvar coast, accessible mainly by boat. No facilities. Worth it for the silence.',
      },
      {
        name: 'Perna Beach',
        detail: 'White sand and pebble on Sveti Klement island (Pakleni). One of the few proper sandy beaches in the archipelago. Can get busy in August.',
      },
      {
        name: 'Taršče Bay',
        detail: 'Long, narrow inlet on Sveti Klement island. Protected on three sides. Excellent snorkeling visibility. No restaurants, no crowds. Locals and sailors only.',
      },
      {
        name: 'Gradac Beach',
        detail: 'Quiet beach on the eastern Pakleni side. Good anchor spot.',
      },
      {
        name: 'Plaža Barjoska',
        detail: 'Secluded, no facilities, accessible only by boat or long hike. Worth it in shoulder season.',
      },
      {
        name: 'Plaža Pišćena',
        detail: 'Small pebble cove in the Pakleni area. Calm water, shade from pines.',
      },
      {
        name: 'Stiniva Beach',
        detail: 'Named Best Beach in Europe. Hidden cove almost fully enclosed by limestone cliffs. Only accessible by small boat or 45-min hike from above.',
      },
    ],
  },
  {
    category: '🌊 Pakleni Islands — Bays & Anchors',
    stops: [
      {
        name: 'Duboka Bay',
        detail: 'Deep, sheltered bay on Pakleni. Good protection in southerly wind. Pine trees to the water\'s edge.',
      },
      {
        name: 'Anchorage Luka Soline',
        detail: 'Natural anchorage on Hvar\'s south coast near Milna. Calm in most conditions.',
      },
      {
        name: 'Gališnik',
        detail: 'Small inlet, Pakleni area. Snorkeling spot, clear water, no development.',
      },
      {
        name: 'Mlini',
        detail: 'Popular Pakleni beach on Marinkovac island. Pine forest, clear turquoise water. 15 min by taxi boat from Hvar. Sunbeds available.',
      },
      {
        name: 'Jerolim',
        detail: 'Naturist island directly opposite Hvar Town. One of the only established nudist beaches in the area. Small shop and restaurant on the island.',
      },
      {
        name: 'Otok Marinkovac',
        detail: 'The island of Tri Grede and Carpe Diem Beach. Also has quieter coves away from the beach club side.',
      },
    ],
  },
  {
    category: '🔴 South Hvar — Rock & Reef',
    stops: [
      {
        name: 'Red Rocks (Crvena Stijena)',
        detail: 'Iron-oxide breccia cliffs that drop straight into the sea. Best cliff jumping on the island. Excellent snorkeling — sea caves, tunnels, colorful marine life. Only accessible by boat.',
      },
      {
        name: 'Bilo Idro',
        detail: 'Cape and reef on the south Hvar coast. Known among local divers. Clear water, interesting underwater topography.',
      },
      {
        name: 'Teleska Vola',
        detail: 'Quiet anchorage on the south Hvar coast, between Hvar Town and Milna. Good snorkeling, sheltered from north wind. No development, no tourists. One of the skipper\'s hidden stops.',
      },
    ],
  },
  {
    category: '🏝️ Caves & Islands',
    stops: [
      {
        name: 'Secret Cave',
        detail: 'A lesser-known sea cave accessible by boat on the Hvar/Vis route. The light effect depends on conditions and time of day. Your skipper knows it.',
      },
      {
        name: 'Limestone Caves',
        detail: 'Cave formations along the coastal cliffs on the Biševo route. Visible from the water.',
      },
      {
        name: 'Veliki Budikovac — Blue Lagoon',
        detail: 'Natural saltwater lagoon almost fully enclosed by two islands. Zero waves. The color shifts from pale aquamarine to deep jade through the day.',
      },
      {
        name: 'Stoncica',
        detail: 'Small cape and bay on Vis island, on the route to Blue Cave. Clear water, anchor spot before/after cave visits.',
      },
      {
        name: 'Supetar (Brač)',
        detail: 'Main town of Brač island. White stone buildings, small harbor. Easily visible from the boat on northern routes.',
      },
      {
        name: 'Versteckte Bucht (Hidden Bay)',
        detail: 'Local name used by sailors. Secluded cove on the route. Conditions-dependent stop.',
      },
    ],
  },
  {
    category: '⚓ Military & History',
    stops: [
      {
        name: 'Yugoslav Army Underground Boat Shelter (Vis)',
        detail: 'WWII/Cold War-era military tunnel carved into the rock on Vis island, large enough for small warships to enter. Now open. A surreal, unmissable stop if you\'re going to Vis.',
      },
      {
        name: 'Obalna baterija Barjaci ex JNA',
        detail: 'Abandoned Yugoslav coastal artillery battery on Hvar. Cold War-era fortification, now overgrown. Visible from the water.',
      },
    ],
  },
  {
    category: '🍽️ Food & Drink Stops',
    stops: [
      {
        name: 'The FisherMan\'s House — Sveti Klement',
        detail: 'Rustic restaurant on Sveti Klement island, Pakleni. Seafood, local konoba style.',
      },
      {
        name: 'Kod Jakše',
        detail: 'Local restaurant, anchor and lunch stop on the Hvar/Pakleni circuit. Cash only.',
      },
    ],
  },
];

export default function OnTourPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Onboard reference
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            You&apos;re on a MareBoats tour
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            A quick guide to what you are about to see. Tap any stop to open
            the details — history, why the water is that colour, little things
            you might miss.
          </p>
          <p className="mt-3 font-body text-sm text-[color:var(--gray)]">
            Best read from your phone while the skipper is driving.
          </p>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            The stops
          </h2>

          <ul className="mt-6 flex flex-col gap-3">
            {destinations.map((d) => (
              <li
                key={d.id}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
                    <span className="flex flex-col">
                      <span className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-xl">
                        {d.name}
                      </span>
                      <span className="mt-1 font-body text-xs uppercase tracking-[0.12em] text-[color:var(--accent)]">
                        {d.subtitle}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)] text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    {d.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-body text-base leading-relaxed text-[color:var(--gray)] [&:not(:first-child)]:mt-3 md:text-lg"
                      >
                        {p}
                      </p>
                    ))}
                    {d.tips && d.tips.length > 0 && (
                      <ul className="mt-4 flex flex-col gap-2">
                        {d.tips.map((t) => (
                          <li
                            key={t}
                            className="flex items-start gap-3 font-body text-sm leading-relaxed text-[color:var(--white)] md:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]"
                            />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Good to know
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            Fun facts
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {funFacts.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 font-body text-base leading-relaxed text-[color:var(--white)] md:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local Stops */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            What&apos;s out there
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            Local Stops
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
            Spots we pass or anchor near depending on wind, weather, and the group. Ask your skipper.
          </p>

          <div className="mt-8 flex flex-col gap-8">
            {LOCAL_STOPS.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 font-display text-base font-bold uppercase tracking-[0.05em] text-[color:var(--accent)]">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.stops.map((stop) => (
                    <li
                      key={stop.name}
                      className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]"
                    >
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3">
                          <span className="font-display text-sm font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                            {stop.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)] text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </summary>
                        <p className="px-4 pb-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                          {stop.detail}
                        </p>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            Enjoying the tour?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            When you are back on land, a quick Google review means the world.
            It takes 30 seconds and helps other travellers find us.
          </p>
          <Link
            href="/landing/review"
            className="mt-7 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98] md:text-base"
          >
            Leave a review
          </Link>
        </div>
      </section>
    </main>
  );
}
