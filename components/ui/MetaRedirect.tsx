/**
 * MetaRedirect — server component that renders a meta-refresh redirect.
 *
 * Why: this project builds as a static export (output: 'export'), so
 * Next.js `redirects()` and middleware cannot run. A meta refresh fires
 * before hydration, works without JS, and signals 301-like intent to
 * search engines when combined with canonical + noindex on the old URL.
 *
 * Use for legacy routes that have been consolidated into the new
 * architecture (e.g. /blue-cave → /tours/blue-cave-pakleni-islands).
 */
type Props = {
  /** Absolute or relative target URL. */
  to: string;
  /** Optional short message shown in the fallback card. */
  label?: string;
};

export default function MetaRedirect({ to, label = 'Redirecting…' }: Props) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="flex min-h-[70vh] items-center justify-center bg-[color:var(--bg)] px-4 py-20 text-center text-[color:var(--white)]">
        <div className="max-w-md">
          <h1 className="font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-3xl">
            {label}
          </h1>
          <p className="mt-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
            If the page does not redirect automatically, tap the button below.
          </p>
          <a
            href={to}
            className="mt-6 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
          >
            Continue
          </a>
        </div>
      </main>
    </>
  );
}
