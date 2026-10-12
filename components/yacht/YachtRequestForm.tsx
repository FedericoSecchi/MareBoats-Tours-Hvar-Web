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

const inputClass =
  'w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-base text-[color:var(--white)] placeholder-[color:var(--gray)]/60 transition-colors duration-200 focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30';
const labelClass = 'mb-2 block font-body text-sm font-medium text-[color:var(--white)]';

export function YachtRequestForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [dateError, setDateError] = useState<string | null>(null);
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    whatsapp: '',
    experience: 'not-sure',
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
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} noValidate className="space-y-6">
      {/* Honeypot: off-screen, not display:none */}
      <div
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" value={fields.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="experience" className={labelClass}>
          Which day are you interested in?
        </label>
        <select id="experience" name="experience" value={fields.experience} onChange={onChange} className={`${inputClass} appearance-none`}>
          {EXPERIENCES.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred date <span className="text-[color:var(--gray)]">(optional)</span>
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
            className={inputClass}
          />
          {dateError && <p className="mt-1 font-body text-xs text-red-400">{dateError}</p>}
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
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests (up to 8)
          </label>
          <select id="guests" name="guests" value={fields.guests} onChange={onChange} required className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              Select
            </option>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="occasion" className={labelClass}>
            Celebrating something? <span className="text-[color:var(--gray)]">(optional)</span>
          </label>
          <input id="occasion" name="occasion" type="text" maxLength={300} value={fields.occasion} onChange={onChange} placeholder="Birthday, anniversary…" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" value={fields.name} onChange={onChange} required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={onChange} required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp number <span className="text-[color:var(--gray)]">(optional, with country code)</span>
        </label>
        <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" maxLength={30} value={fields.whatsapp} onChange={onChange} placeholder="+44 7700 900123" className={inputClass} />
      </div>

      <div>
        <label htmlFor="dietary" className={labelClass}>
          Allergies or dietary needs <span className="text-[color:var(--gray)]">(optional)</span>
        </label>
        <input id="dietary" name="dietary" type="text" maxLength={500} value={fields.dietary} onChange={onChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Anything else we should know? <span className="text-[color:var(--gray)]">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} maxLength={1000} value={fields.message} onChange={onChange} className={`${inputClass} resize-y`} />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          checked={fields.consent}
          onChange={onChange}
          required
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[color:var(--accent)]"
        />
        <span className="font-body text-sm leading-snug text-[color:var(--gray)]">
          I agree that MareBoats Hvar can store this information to answer my request for the 2027 season. See the{' '}
          <Link href="/privacy/" className="underline underline-offset-4 transition-colors hover:text-[color:var(--accent)]">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {state === 'error' && (
        <p role="alert" className="font-body text-sm text-red-400">
          Something went wrong. Please try again in a moment, or send us your request on WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onSubmit}
          disabled={state === 'submitting'}
          className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-8 py-4 font-body text-sm font-semibold tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state === 'submitting' ? 'Sending…' : 'Send request'}
        </button>
        <WhatsAppTrackedLink
          href={waUrl}
          label="yacht_form"
          ctaText="Ask on WhatsApp instead"
          pageSection="premium"
          experience={fields.experience}
          className="inline-flex items-center justify-center rounded-pill border border-[color:var(--border)] px-8 py-4 font-body text-sm font-semibold tracking-wide text-[color:var(--white)] transition-colors duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          Ask on WhatsApp instead
        </WhatsAppTrackedLink>
      </div>
      <p className="font-body text-sm text-[color:var(--gray)]">Nothing to pay now. We confirm your date and the final price in March 2027.</p>
    </form>
  );
}
