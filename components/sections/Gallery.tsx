import Image from 'next/image';

type Photo = {
  src: string;
  label: string;
  alt: string;
};

const photos: Photo[] = [
  {
    src: '/img/destination-1.jpeg',
    label: 'Blue Cave',
    alt: 'Blue Cave Biševo near Hvar — turquoise light inside the sea cave',
  },
  {
    src: '/img/destination-2.jpeg',
    label: 'Pakleni Islands',
    alt: 'Pakleni Islands archipelago seen from the boat — Hvar, Croatia',
  },
  {
    src: '/img/destination-3.jpeg',
    label: 'Hvar Town',
    alt: 'Hvar town and old harbour viewed from the Adriatic sea',
  },
  {
    src: '/img/destination-4.jpeg',
    label: 'Stiniva Bay',
    alt: 'Stiniva Bay on Vis Island — secluded beach near Hvar',
  },
  {
    src: '/img/destination-5.jpeg',
    label: 'Adriatic Sea',
    alt: 'Crystal clear Adriatic sea on a private boat tour from Hvar',
  },
  {
    src: '/img/destination-6.jpeg',
    label: 'Hidden Beaches',
    alt: 'Hidden beach near Hvar reachable only by private boat tour',
  },
];

export default function Gallery() {
  return (
    <section className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <div className="mx-auto max-w-container">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Where We Sail
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--border)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 ease-out group-hover:bg-black/55 group-hover:opacity-100 group-focus-within:bg-black/55 group-focus-within:opacity-100">
                <span className="px-3 text-center font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-lg">
                  {photo.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
