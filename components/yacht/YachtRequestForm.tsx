'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { trackYachtRequest } from '@/lib/analytics';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { YACHT_THANKS_PATH, yachtWhatsAppUrl } from '@/lib/yacht-data';

// Visible in the bundle by design (static export). Protected by honeypot +
// server-side validation in n8n ("MareBoats - Yacht Requests 2027").
const WEBHOOK_URL = 'https://federicosecchi.app.n8n.cloud/webhook/yacht-request-2027';

const SEASON_MIN = '2027-04-01';
const SEASON_MAX = '2027-10-31';

const EXPERIENCES = [
  { value: 'blue-cave-half-day', label: 'Blue Cave half day' },
  { value: 'boat-tour-with-lunch', label: 'Lunch on board' },
  { value: 'transfer', label: 'Yacht transfer (Split or Split Airport)' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

type Fields = {
  name: string;
  email: string;
  whatsapp: string;
  experience: string;
  date: string;
  flexibility: string;
  guests: string;
  occasion: string;
  dietary: string;
  message: string;
  website: string;
  consent: boolean;
};

// Coti's design: dark fields on the card, 2 columns, full-width pill submit.
const inputClass =
  'h-[52px] w-full rounded-lg border border-[rgba(245,240,232,0.1)] bg-[color:var(--bg)] px-4 font-body text-[15px] text-[color:var(--white)] placeholder-[rgba(245,240,232,0.4)] transition-colors duration-200 focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(59,201,219,0.3)]';
const labelClass = 'mb-2 block font-body text-sm text-[color:var(--white)]';
const optional = <span className="text-[rgba(245,240,232,0.5)]"> (optional)</span>;

export function YachtRequestForm({ defaultExperience }: { defaultExperience?: string }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [dateError, setDateError] = useState<string | null>(null);
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    whatsapp: '',
    experience: defaultExperience ?? 'not-sure',
    date: '',
    flexibility: '',
    guests: '',
    occasion: '',
    dietary: '',
    message: '',
    website: '',
    consent: false,
  });

  // Preselect the experience from ?experience= (read on the client: static export)
  useEffect(() => {
    const exp = new URLSearchParams(window.location.search).get('experience');
    if (exp && EXPERIENCES.some((e) => e.value === exp)) {
      setFields((f) => ({ ...f, experience: exp }));
    }
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (name === 'date') setDateError(null);
    setFields((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;

    // Layer 2 of 3: the date must be in the 2027 season (layer 1: min/max, layer 3: n8n)
    if (fields.date) {
      const ok = /^\d{4}-\d{2}-\d{2}$/.test(fields.date) && fields.date >= SEASON_MIN && fields.date <= SEASON_MAX;
      if (!ok) {
        setDateError('Please choose a date between April and October 2027.');
        dateRef.current?.focus();
        return;
      }
    }

    const params = new URLSearchParams(window.location.search);
    const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
      .map((k) => (params.get(k) ? `${k}=${params.get(k)}` : ''))
      .filter(Boolean)
      .join('&');

    setState('submitting');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          source: window.location.href.split('?')[0],
          utm,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (res.ok && data.ok) {
        trackYachtRequest({ experience: fields.experience, guests: Number(fields.guests) || undefined });
        router.push(`${YACHT_THANKS_PATH}?experience=${encodeURIComponent(fields.experience)}`);
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  const expLabel = EXPERIENCES.find((e) => e.value === fields.experience)?.label;
  const waUrl = yachtWhatsAppUrl(fields.experience === 'not-sure' ? undefined : expLabel);

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} noValidate>
      {/* Honeypot: off-screen, not display:none */}
      <div
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" value={fields.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="experience" className={labelClass}>
            Experience
          </label>
          <select id="experience" name="experience" value={fields.experience} onChange={onChange} className={`${inputClass} appearance-none`}>
            {EXPERIENCES.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            Date{optional}
          </label>
          <input
            ref={dateRef}
            id="date"
            name="date"
            type="date"
            min={SEASON_MIN}
            max={SEASON_MAX}
            value={fields.date}
            onChange={onChange}
            className={`${inputClass} [color-scheme:dark]`}
          />
          {dateError && <p className="mt-1 font-body text-xs text-red-400">{dateError}</p>}
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select id="guests" name="guests" value={fields.guests} onChange={onChange} required className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              How many guests? (up to 8)
            </option>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="flexibility" className={labelClass}>
            How flexible is the date?
          </label>
          <select id="flexibility" name="flexibility" value={fields.flexibility} onChange={onChange} className={`${inputClass} appearance-none`}>
            <option value="">Select</option>
            <option value="exact">Exact date</option>
            <option value="few_days">A few days either way</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" value={fields.name} onChange={onChange} required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={onChange} required placeholder="you@email.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp{optional}
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" maxLength={30} value={fields.whatsapp} onChange={onChange} placeholder="+44 7700 900123" className={inputClass} />
        </div>
        <div>
          <label htmlFor="occasion" className={labelClass}>
            Celebrating something?{optional}
          </label>
          <input id="occasion" name="occasion" type="text" maxLength={300} value={fields.occasion} onChange={onChange} placeholder="Birthday, anniversary…" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="dietary" className={labelClass}>
            Allergies or dietary needs{optional}
          </label>
          <input id="dietary" name="dietary" type="text" maxLength={500} value={fields.dietary} onChange={onChange} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Special requests{optional}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            value={fields.message}
            onChange={onChange}
            placeholder="The route you have in mind, a celebration, anything we should know…"
            className={`${inputClass} h-auto resize-y py-3`}
          />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          checked={fields.consent}
          onChange={onChange}
          required
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[color:var(--accent)]"
        />
        <span className="font-body text-sm leading-snug text-[rgba(245,240,232,0.6)]">
          I agree that MareBoats Hvar can store this information to answer my request for the 2027 season. See the{' '}
          <Link href="/privacy/" className="underline underline-offset-4 transition-colors hover:text-[color:var(--accent)]">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {state === 'error' && (
        <p role="alert" className="mt-5 font-body text-sm text-red-400">
          Something went wrong. Please try again in a moment, or send us your request on WhatsApp.
        </p>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={state === 'submitting'}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-pill bg-[color:var(--accent)] px-8 py-4 font-body text-base font-medium text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(59,201,219,0.6)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === 'submitting' ? 'Sending…' : 'Request your date'}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="mt-4 text-center font-body text-xs text-[rgba(245,240,232,0.6)]">No payment now · We confirm date and final price in March 2027</p>
      <p className="mt-3 text-center font-body text-sm text-[rgba(245,240,232,0.6)]">
        Prefer to talk?{' '}
        <WhatsAppTrackedLink
          href={waUrl}
          label="yacht_form"
          ctaText="Ask on WhatsApp instead"
          pageSection="premium"
          experience={fields.experience}
          className="font-medium text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]"
        >
          Ask on WhatsApp
        </WhatsAppTrackedLink>
      </p>
    </form>
  );
}
