import Image from 'next/image';
import Link from 'next/link';

type Tour = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

const tours: Tour[] = [
  {
    slug: 'blue-cave-pakleni-islands',
    name: 'Blue Cave & Pakleni Islands',
    duration: '6–8 hrs',
    price: 'From €XX',
    description:
      'Visit the legendary Blue Cave on Biševo, swim in hidden bays around Vis, and end the day at Pakleni Islands.',
    image: '/img/package-1.jpeg',
    alt: 'Blue Cave and Pakleni Islands private boat tour from Hvar, Croatia',
  },
  {
    slug: 'pakleni-islands',
    name: 'Pakleni Islands Half Day',
    duration: '3–4 hrs',
    price: 'From €XX',
    description:
      'Snorkel the clearest waters of the Adriatic, stop at Palmižana and explore secluded coves just minutes from Hvar town.',
    image: '/img/package-2.jpeg',
    alt: 'Pakleni Islands half day boat tour from Hvar harbour',
  },
  {
    slug: 'sunset-cruise',
    name: 'Sunset Cruise',
    duration: '2 hrs',
    price: 'From €XX',
    description:
      'Golden hour over the Dalmatian coast — drinks on board, calm waters and the best photo light of the day.',
    image: '/img/package-5.jpeg',
    alt: 'Sunset cruise from Hvar — private boat at golden hour over the Adriatic',
  },
  {
    slug: 'private-boat-charter',
    name: 'Private Charter',
    duration: 'Full day',
    price: 'From €XX',
    description:
      'Your own boat, your own route. Captain, fuel and equipment included — design the day you want on the Adriatic.',
    image: '/img/package-4.jpeg',
    alt: 'Private boat charter Hvar — full day skippered tour in the Adriatic',
  },
];

export default function Tours() {
  return (
    <section
      id="tours"
      className="bg-[color:var(--bg)] py-20 px-4 md:py-24"
    >
      <div className="mx-auto max-w-container">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Our Tours
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Choose Your Day on the Adriatic
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Private speedboat tours from Hvar Harbour. Every booking includes a local captain,
            snorkeling gear and aerial drone footage of your day.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <li
              key={tour.slug}
              className="group flex transform-gpu flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)] focus-within:-translate-y-1.5 focus-within:shadow-[0_20px_40px_rgba(59,201,219,0.18)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
                  {tour.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {tour.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {tour.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <span className="font-body text-base font-semibold text-[color:var(--accent)]">
                    {tour.price}
                  </span>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                  >
                    Book This Tour
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
