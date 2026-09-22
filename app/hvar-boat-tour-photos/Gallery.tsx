import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

const GALLERY_DIR = 'public/images/tour-memories';
const PUBLIC_PREFIX = '/images/tour-memories';
const ALLOWED_EXT = new Set(['.jpg', '.jpeg', '.webp', '.png']);
const IGNORED = new Set(['readme.md']);

function getGalleryFiles(): string[] {
  const dir = path.join(process.cwd(), GALLERY_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => !IGNORED.has(name.toLowerCase()))
    .filter((name) => ALLOWED_EXT.has(path.extname(name).toLowerCase()))
    .sort();
}

export function Gallery() {
  const files = getGalleryFiles();
  if (files.length === 0) return null;

  return (
    <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-container">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Gallery
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
          Photos from recent tours
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {files.map((file) => (
            <li
              key={file}
              className="relative aspect-square overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]"
            >
              <Image
                src={`${PUBLIC_PREFIX}/${file}`}
                alt="Photo from a private speedboat tour with MareBoats Hvar"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
