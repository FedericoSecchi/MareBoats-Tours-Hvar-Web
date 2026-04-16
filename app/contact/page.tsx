import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact Mare Boats Hvar | Book a Tour on WhatsApp',
  description:
    'Contact Mare Boats Hvar to book a private boat tour, Blue Cave excursion, boat rental or transfer. Message us on WhatsApp — we reply within hours.',
  keywords: [
    'contact mare boats hvar',
    'book boat tour hvar',
    'mare boats hvar whatsapp',
    'hvar boat tour booking',
  ],
  slug: 'contact',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour%20with%20Mare%20Boats%20Hvar.';

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-mare-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Mare Boats Hvar</h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          The fastest way to book is WhatsApp. We reply within hours, 7 days a week.
        </p>
      </section>

      {/* Contact options */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp — primary */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-green-50 border-2 border-green-500 rounded-2xl p-8 hover:bg-green-100 transition-colors group"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">WhatsApp</h2>
            <p className="text-green-700 font-semibold text-lg mb-1">+385 95 196 6734</p>
            <p className="text-green-600 text-sm">Fastest response · 7 days a week</p>
          </a>

          {/* Email */}
          <a
            href="mailto:mare.boatshvar@gmail.com"
            className="flex flex-col items-center text-center bg-blue-50 border-2 border-mare-primary rounded-2xl p-8 hover:bg-blue-100 transition-colors group"
          >
            <div className="w-16 h-16 bg-mare-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-mare-dark mb-2">Email</h2>
            <p className="text-mare-primary font-semibold mb-1">mare.boatshvar@gmail.com</p>
            <p className="text-gray-500 text-sm">We reply within 24 hours</p>
          </a>
        </div>

        {/* Location */}
        <div className="mt-8 bg-mare-light rounded-2xl p-6 text-center">
          <h2 className="font-semibold text-mare-dark text-lg mb-2">Where to find us</h2>
          <p className="text-gray-700">
            <strong>Port of Hvar</strong>, Hvar, Croatia (21450)
          </p>
          <p className="text-gray-500 text-sm mt-1">
            We meet at the port before each tour. Exact meeting point confirmed via WhatsApp.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="pb-14 px-4 max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-6">What would you like to book?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Blue Cave Tour', href: '/blue-cave' },
            { label: 'Boat Rental', href: '/boat-rental' },
            { label: 'Transfers', href: '/transfers' },
            { label: 'Sunset Cruise', href: '/sunset' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-center bg-white border border-gray-200 rounded-xl p-4 hover:border-mare-primary hover:text-mare-primary transition-colors text-sm font-medium text-gray-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
