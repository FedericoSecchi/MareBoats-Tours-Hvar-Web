import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/blue-cave', label: 'Blue Cave Tour' },
  { href: '/boat-rental', label: 'Boat Rental' },
  { href: '/transfers', label: 'Transfers' },
  { href: '/tours', label: 'All Tours' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mare-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/img/logo_mare_boats_hvar-letters.png"
                alt="Mare Boats Hvar logo"
                width={160}
                height={48}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-blue-200 text-sm">
              Private boat tours, Blue Cave excursions, boat rental and transfers from Hvar, Croatia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-mare-light mb-4">Pages</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-mare-light mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-blue-200">
              <p>Port of Hvar, Croatia</p>
              <a
                href="tel:+385951966734"
                className="block hover:text-white transition-colors"
              >
                +385 95 196 6734
              </a>
              <a
                href="mailto:mare.boatshvar@gmail.com"
                className="block hover:text-white transition-colors"
              >
                mare.boatshvar@gmail.com
              </a>
              <a
                href="https://www.instagram.com/mareboats.hvar/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
                aria-label="Follow Mare Boats Hvar on Instagram"
              >
                @mareboats.hvar
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <span>&copy; {year} Mare Boats Hvar. All rights reserved.</span>
          <span>
            Designed by{' '}
            <a
              href="https://somoskosmos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              SomosKosmos
            </a>
          </span>
          <span>
            Photos &amp; drone footage by{' '}
            <a
              href="https://skyshotlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              SkyShot Lab
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
