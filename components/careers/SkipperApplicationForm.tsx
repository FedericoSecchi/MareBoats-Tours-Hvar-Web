'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

const WEBHOOK_URL = 'https://federicosecchi.app.n8n.cloud/webhook/skipper-application';

const QUESTIONS = [
  {
    name: 'q1' as const,
    label:
      "It's 7pm and you are closing your boat. You notice damage to the propeller that you think you caused earlier that day. Nobody saw it. The boat is booked for 9am tomorrow. What do you do, and in what order?",
  },
  {
    name: 'q2' as const,
    label: 'Describe a good day at work. Any job, not necessarily this one.',
  },
  {
    name: 'q3' as const,
    label: 'What kind of person do you not want to work next to?',
  },
  {
    name: 'q4' as const,
    label: 'When you finish a season somewhere, what do you want to be able to say about it?',
  },
  {
    name: 'q5' as const,
    label: 'Why Hvar, and why on a boat?',
  },
] as const;

type QuestionName = (typeof QUESTIONS)[number]['name'];

type FormFields = {
  name: string;
  email: string;
  nationality: string;
  licence: string;
  seasons: string;
  availableFrom: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  dayPreference: string;
  questionsForUs: string;
  website: string;
  consent: boolean;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-sm text-[color:var(--white)] placeholder-[color:var(--gray)]/60 transition-colors duration-200 focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30';

const labelClass = 'mb-2 block font-body text-sm font-medium text-[color:var(--white)]';

const blockHeadingClass =
  'font-display text-xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)]';

function CharTextarea({
  name,
  value,
  onChange,
  label,
  required,
  maxLength = 500,
}: {
  name: QuestionName | 'questionsForUs';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className={`${labelClass} leading-snug`}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        rows={5}
        required={required}
        className={`${inputClass} resize-y`}
      />
      <p className="mt-1 text-right font-body text-xs text-[color:var(--gray)]">
        {maxLength - value.length} characters remaining
      </p>
    </div>
  );
}

export default function SkipperApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>('idle');
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    nationality: '',
    licence: '',
    seasons: '',
    availableFrom: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    dayPreference: '',
    questionsForUs: '',
    website: '',
    consent: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;

    setState('submitting');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <p className="font-body text-base leading-relaxed text-[color:var(--gray)]">
        Thanks. We have your application and we will get back to you.
      </p>
    );
  }

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} noValidate>
      {/* Honeypot: visually hidden off-screen, not display:none */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          value={fields.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Bloque 1: About you */}
      <h3 className={blockHeadingClass}>About you</h3>
      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="nationality" className={labelClass}>
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            type="text"
            value={fields.nationality}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="licence" className={labelClass}>
            Nautical licence
          </label>
          <input
            id="licence"
            name="licence"
            type="text"
            value={fields.licence}
            onChange={handleChange}
            placeholder="e.g. Croatian category B, or ICC issued in Spain"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="seasons" className={labelClass}>
            Previous seasons as skipper
          </label>
          <select
            id="seasons"
            name="seasons"
            value={fields.seasons}
            onChange={handleChange}
            required
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="None">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>

        <div>
          <label htmlFor="availableFrom" className={labelClass}>
            Available from
          </label>
          <input
            id="availableFrom"
            name="availableFrom"
            type="date"
            value={fields.availableFrom}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Bloque 2: A few questions */}
      <h3 className={`${blockHeadingClass} mt-12`}>A few questions</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
        Answer in your own words. We would rather read something short and honest than something
        polished.
      </p>
      <div className="mt-6 flex flex-col gap-8">
        {QUESTIONS.map((q) => (
          <CharTextarea
            key={q.name}
            name={q.name}
            value={fields[q.name]}
            onChange={handleChange}
            label={q.label}
            required
          />
        ))}
      </div>

      {/* Bloque 3: Last two */}
      <h3 className={`${blockHeadingClass} mt-12`}>Last two</h3>
      <div className="mt-6 flex flex-col gap-8">
        <fieldset>
          <legend className={`${labelClass} leading-snug`}>
            Two days, same pay. Which one do you want?
          </legend>
          <div className="mt-3 flex flex-col gap-4">
            {[
              {
                value: 'A - busy day',
                label: 'Eight guests, great energy, music on, everyone having a big day.',
              },
              {
                value: 'B - quiet day',
                label:
                  'A quiet family, two kids, nobody says much, but they leave completely happy.',
              },
            ].map((opt) => (
              <label key={opt.value} className="flex cursor-pointer items-start gap-3">
                <input
                  type="radio"
                  name="dayPreference"
                  value={opt.value}
                  checked={fields.dayPreference === opt.value}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[color:var(--accent)]"
                />
                <span className="font-body text-sm leading-snug text-[color:var(--gray)]">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <CharTextarea
          name="questionsForUs"
          value={fields.questionsForUs}
          onChange={handleChange}
          label="What do you want to know about us? (optional)"
        />
      </div>

      {/* Consent */}
      <div className="mt-10">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={fields.consent}
            onChange={handleChange}
            required
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[color:var(--accent)]"
          />
          <span className="font-body text-sm leading-snug text-[color:var(--gray)]">
            I agree that MareBoats Hvar can store this information to assess my application. See the{' '}
            <Link
              href="/privacy/"
              className="underline underline-offset-4 transition-colors duration-200 hover:text-[color:var(--accent)]"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Error message */}
      {state === 'error' && (
        <p className="mt-6 font-body text-sm text-red-400">
          Something went wrong. Please try again in a moment.
        </p>
      )}

      {/* Submit */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={state === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
        >
          {state === 'submitting' ? 'Sending...' : 'Submit application'}
        </button>
      </div>
    </form>
  );
}
