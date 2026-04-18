// TODO: replace with the real Formspree endpoint once Nikola creates the form
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'FORMSPREE_ENDPOINT_PENDING';

const FORMSPREE_ACTION = FORMSPREE_ENDPOINT.startsWith('http')
  ? FORMSPREE_ENDPOINT
  : `https://formspree.io/f/${FORMSPREE_ENDPOINT}`;

const tourTypes = [
  'Blue Cave & Pakleni Islands',
  'Pakleni Islands Half Day',
  'Sunset Cruise',
  'Private Charter',
];

const inputClasses =
  'w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-sm text-[color:var(--white)] placeholder:text-[color:var(--gray)]/70 focus:border-[color:var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40';

const labelClasses =
  'flex flex-col gap-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--gray)]';

export default function Contact() {
  return (
    <section id="contact" className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <div className="mx-auto max-w-container">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Booking
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Book Your Tour
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Send us your preferred date and tour. We reply within hours and tailor every detail to
            your day on the Adriatic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
          <form
            action={FORMSPREE_ACTION}
            method="POST"
            className="grid grid-cols-1 gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6 md:grid-cols-2 md:p-8"
          >
            <label className={`${labelClasses} md:col-span-2`}>
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className={inputClasses}
                placeholder="Your full name"
              />
            </label>

            <label className={labelClasses}>
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className={inputClasses}
                placeholder="you@email.com"
              />
            </label>

            <label className={labelClasses}>
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className={inputClasses}
                placeholder="+1 555 000 0000"
              />
            </label>

            <label className={labelClasses}>
              Preferred Date
              <input type="date" name="date" required className={inputClasses} />
            </label>

            <label className={labelClasses}>
              Tour Type
              <select name="tour" required className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Choose a tour
                </option>
                {tourTypes.map((tour) => (
                  <option key={tour} value={tour}>
                    {tour}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClasses}>
              Number of People
              <input
                type="number"
                name="people"
                min={1}
                max={8}
                defaultValue={2}
                required
                className={inputClasses}
              />
            </label>

            <label className={`${labelClasses} md:col-span-2`}>
              Message
              <textarea
                name="message"
                rows={3}
                className={`${inputClasses} resize-none`}
                placeholder="Anything we should know? Special requests, must-see spots…"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] sm:w-auto"
              >
                Send Booking Request
              </button>
              <p className="mt-3 font-body text-xs text-[color:var(--gray)]">
                We never share your details. We reply within a few hours during the season.
              </p>
            </div>
          </form>

          <aside className="flex flex-col gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Talk to us
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Prefer to message?
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                The fastest way to confirm availability is WhatsApp.
              </p>
            </div>

            <ul className="flex flex-col gap-4 font-body text-sm text-[color:var(--white)]">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  WhatsApp
                </span>
                {/* TODO: confirm WhatsApp number with Nikola */}
                <a
                  href="https://wa.me/385951966734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                >
                  +385 95 196 6734
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Email
                </span>
                {/* TODO: confirm contact email with Nikola */}
                <a
                  href="mailto:info@mareboatshvar.com"
                  className="font-semibold text-[color:var(--white)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                >
                  info@mareboatshvar.com
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Meeting point
                </span>
                <span>Hvar Harbour, Croatia</span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Hours
                </span>
                <span>Daily 8:00 AM – 8:00 PM</span>
                <span className="text-[color:var(--gray)]">May–September</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
