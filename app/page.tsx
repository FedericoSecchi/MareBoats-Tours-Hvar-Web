import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { FAQJsonLd } from '@/components/ui/JsonLd';
import Tours from '@/components/sections/Tours';
import Features from '@/components/sections/Features';
import Gallery from '@/components/sections/Gallery';
import { homepageFaqs } from '@/lib/faqs';

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});
const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});
const CTABanner = dynamic(() => import('@/components/sections/CTABanner'), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

export const metadata: Metadata = generateSEO({
  title: 'Private Boat Tours Hvar | Mare Boats Hvar',
  description:
    'Private boat tours from Hvar, Croatia. Blue Cave, Red Rocks, Pakleni Islands, sunset cruises and boat rental. Local skipper, WhatsApp booking.',
  keywords: [
    'private boat tours hvar',
    'boat tour hvar',
    'mare boats hvar',
    'hvar boat excursion',
    'blue cave hvar',
    'pakleni islands tour',
  ],
  ogImage: '/img/mareboats-og.png',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour.';

export default function HomePage() {
  return (
    <main>
      <FAQJsonLd faqs={homepageFaqs} />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden text-white">
        <Image
          src="/img/carousel-1.jpeg"
          alt="Private boat tour from Hvar, Croatia — crystal clear Adriatic waters"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)] via-[color:var(--bg)]/60 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-4 pb-12 pt-28 text-center md:pt-32">
          <span className="animate-fade-up inline-flex items-center rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--bg)]/55 px-3 py-1.5 text-xs font-medium tracking-wide text-[color:var(--white)] shadow-[0_8px_26px_rgba(59,201,219,0.16)] [animation-delay:0.1s]">
            ⭐ 100+ happy guests
          </span>

          <h1 className="animate-fade-up mt-5 font-display text-[clamp(3rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[color:var(--white)] [animation-delay:0.2s]">
            Private Boat Tours Hvar
          </h1>

          <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--gray)] [animation-delay:0.3s] md:text-xl">
            We sail from Hvar Harbour. You pick the day, the stops and the pace — Blue Cave, Red
            Rocks, Pakleni Islands, sunset or all of it. Private boat, local captain.
          </p>

          <div className="animate-fade-up mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center [animation-delay:0.4s]">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>

            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              See All Tours
            </Link>
          </div>

          <span className="animate-fade-up mt-10 inline-flex flex-col items-center text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gray)] [animation-delay:0.5s]">
            Scroll
            <span className="mt-2 inline-flex h-9 w-5 items-start justify-center rounded-pill border border-[color:var(--accent)]/70 p-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-[color:var(--accent)]" />
            </span>
          </span>
        </div>
      </section>

      <Tours />
      <Features />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
    </main>
  );
}
