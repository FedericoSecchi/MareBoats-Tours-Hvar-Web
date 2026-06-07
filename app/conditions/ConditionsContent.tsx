'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    cloud_cover: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    cloud_cover: number[];
  };
}

interface MarineData {
  current: {
    sea_surface_temperature: number;
    wave_height: number;
    wave_period: number;
  };
}

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=43.1730&longitude=16.4413&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,cloud_cover&hourly=temperature_2m,weather_code,cloud_cover&forecast_days=2&timezone=Europe/Zagreb';
const MARINE_URL =
  'https://marine-api.open-meteo.com/v1/marine?latitude=43.1730&longitude=16.4413&current=sea_surface_temperature,wave_height,wave_period&timezone=Europe/Zagreb';
const WA_URL =
  "https://wa.me/385951966734?text=Hi!%20I'd%20like%20to%20check%20conditions%20before%20booking%20a%20tour";

const WMO_LABELS: Record<number, string> = {
  0: 'Clear sky', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Foggy',
  51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
  61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
  71: 'Light snow', 73: 'Snow', 75: 'Heavy snow',
  80: 'Rain showers', 81: 'Rain showers', 82: 'Heavy showers',
  95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
};

function getWeatherLabel(code: number): string {
  return WMO_LABELS[code] ?? 'Variable';
}

function getWindDirection(deg: number): string {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

function getBlueCaveStatus(wh: number | null) {
  if (wh === null) return { label: 'DATA UNAVAILABLE', color: 'text-[color:var(--gray)]', bg: 'bg-[color:var(--surface)]' };
  if (wh < 0.3) return { label: 'CONDITIONS LOOK GOOD', color: 'text-[color:var(--accent)]', bg: 'bg-[color:var(--accent)]/10' };
  if (wh < 0.6) return { label: 'CHECK BEFORE YOU GO', color: 'text-amber-400', bg: 'bg-amber-400/10' };
  return { label: 'ROUGH CONDITIONS', color: 'text-red-400', bg: 'bg-red-400/10' };
}

function getSunsetQuality(cc: number | null) {
  if (cc === null) return { label: 'DATA UNAVAILABLE', color: 'text-[color:var(--gray)]' };
  if (cc < 20) return { label: 'EXCELLENT', color: 'text-[color:var(--accent)]' };
  if (cc < 50) return { label: 'GOOD', color: 'text-emerald-400' };
  if (cc < 80) return { label: 'PARTLY CLOUDY', color: 'text-amber-400' };
  return { label: 'OVERCAST', color: 'text-[color:var(--gray)]' };
}

function DataCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 md:p-6">
      <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gray)]">
        {label}
      </span>
      <span className="mt-2 font-display text-3xl font-extrabold leading-none text-[color:var(--white)] md:text-4xl">
        {value}
      </span>
      <span className="mt-1 font-body text-sm text-[color:var(--gray)]">{sub}</span>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] px-4 pt-16">
      <div className="mx-auto max-w-container">
        <div className="h-3 w-20 animate-pulse rounded bg-[color:var(--surface)]" />
        <div className="mt-3 h-10 w-56 animate-pulse rounded bg-[color:var(--surface)]" />
        <div className="mt-3 h-3 w-40 animate-pulse rounded bg-[color:var(--surface)]" />
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl bg-[color:var(--surface)]" />
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="h-40 animate-pulse rounded-2xl bg-[color:var(--surface)]" />
          <div className="h-40 animate-pulse rounded-2xl bg-[color:var(--surface)]" />
        </div>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[color:var(--bg)] px-4 text-center">
      <p className="font-body text-base text-[color:var(--gray)]">Data temporarily unavailable.</p>
      <p className="mt-2 font-body text-sm text-[color:var(--gray)]">
        Message us on WhatsApp to check conditions before you go.
      </p>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-pill bg-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]"
      >
        WhatsApp Nikola
      </a>
    </div>
  );
}

export default function ConditionsContent() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [marine, setMarine] = useState<MarineData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [wRes, mRes] = await Promise.all([fetch(WEATHER_URL), fetch(MARINE_URL)]);
        if (!wRes.ok || !mRes.ok) throw new Error();
        const [wData, mData] = await Promise.all([wRes.json(), mRes.json()]);
        setWeather(wData);
        setMarine(mData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  const getNextHours = () => {
    if (!weather) return [];
    const now = new Date();
    const times = weather.hourly.time;
    const start = times.findIndex((t) => new Date(t) >= now);
    if (start === -1) return [];
    return Array.from({ length: 8 }, (_, i) => {
      const idx = start + i;
      if (idx >= times.length) return null;
      return {
        time: new Date(times[idx]).toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Zagreb',
        }),
        temp: weather.hourly.temperature_2m[idx],
        code: weather.hourly.weather_code[idx],
      };
    }).filter(Boolean) as { time: string; temp: number; code: number }[];
  };

  const getSunsetCloudCover = (): number | null => {
    if (!weather) return null;
    const today = new Date().toDateString();
    const slots = weather.hourly.time.reduce<number[]>((acc, t, i) => {
      const d = new Date(t);
      if (d.toDateString() === today && d.getHours() >= 18 && d.getHours() <= 20) {
        acc.push(weather.hourly.cloud_cover[i]);
      }
      return acc;
    }, []);
    if (slots.length === 0) return null;
    return Math.round(slots.reduce((a, b) => a + b, 0) / slots.length);
  };

  if (loading) return <SkeletonLoader />;
  if (error || !weather || !marine) return <ErrorState />;

  const w = weather.current;
  const m = marine.current;
  const waveHeight = m?.wave_height ?? null;
  const blueCave = getBlueCaveStatus(waveHeight);
  const sunsetCC = getSunsetCloudCover();
  const sunset = getSunsetQuality(sunsetCC);
  const nextHours = getNextHours();

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">

      {/* Header */}
      <section className="px-4 pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-container">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar, Croatia
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-6xl">
            Hvar Conditions Today
          </h1>
          <p className="mt-4 font-body text-sm text-[color:var(--gray)]">
            Live data for Hvar. Updated every 30 minutes.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-pill bg-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]"
          >
            Book a Tour
          </a>
        </div>
      </section>

      {/* Data cards */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <DataCard
              label="Water Temp"
              value={`${Math.round(m.sea_surface_temperature)}°C`}
              sub="Sea surface"
            />
            <DataCard
              label="Air Temp"
              value={`${Math.round(w.temperature_2m)}°C`}
              sub={getWeatherLabel(w.weather_code)}
            />
            <DataCard
              label="Wind"
              value={`${Math.round(w.wind_speed_10m)} km/h`}
              sub={getWindDirection(w.wind_direction_10m)}
            />
            <DataCard
              label="Sea State"
              value={waveHeight !== null ? `${waveHeight.toFixed(1)}m` : 'N/A'}
              sub="Wave height"
            />
          </div>
        </div>
      </section>

      {/* Status indicators */}
      <section className="border-t border-[color:var(--border)] px-4 py-10">
        <div className="mx-auto max-w-container grid gap-4 md:grid-cols-2">
          {/* Blue Cave */}
          <div className={`rounded-2xl border border-[color:var(--border)] ${blueCave.bg} p-6`}>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gray)]">
              Blue Cave
            </p>
            <p className={`mt-2 font-display text-2xl font-extrabold uppercase tracking-tight ${blueCave.color}`}>
              {blueCave.label}
            </p>
            {waveHeight !== null && (
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">
                Wave height: {waveHeight.toFixed(2)}m
              </p>
            )}
            <p className="mt-4 font-body text-xs leading-relaxed text-[color:var(--gray)]">
              Based on wave data. Not an official status. Message us to confirm before you go.
            </p>
          </div>

          {/* Sunset */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gray)]">
              Sunset Quality
            </p>
            <p className={`mt-2 font-display text-2xl font-extrabold uppercase tracking-tight ${sunset.color}`}>
              {sunset.label}
            </p>
            <p className="mt-1 font-body text-sm text-[color:var(--gray)]">
              Sunset today around 20:45 CEST
            </p>
            {sunsetCC !== null && (
              <p className="mt-1 font-body text-xs text-[color:var(--gray)]">
                Cloud cover at golden hour: {sunsetCC}%
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Hourly forecast */}
      {nextHours.length > 0 && (
        <section className="border-t border-[color:var(--border)] px-4 py-10">
          <div className="mx-auto max-w-container">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[color:var(--white)]">
              Next 8 Hours
            </h2>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {nextHours.map((slot, i) => (
                <div
                  key={i}
                  className="flex min-w-[80px] shrink-0 flex-col items-center gap-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-4"
                >
                  <span className="font-body text-xs text-[color:var(--gray)]">{slot.time}</span>
                  <span className="font-body text-base font-semibold text-[color:var(--white)]">
                    {Math.round(slot.temp)}°
                  </span>
                  <span className="text-center font-body text-[10px] leading-tight text-[color:var(--gray)]">
                    {getWeatherLabel(slot.code)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="border-t border-[color:var(--border)] px-4 py-14">
        <div className="mx-auto max-w-container text-center">
          <p className="font-body text-base text-[color:var(--gray)]">
            Want to check conditions before booking? Message us on WhatsApp.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]"
          >
            WhatsApp Nikola
          </a>
        </div>
      </section>
    </div>
  );
}
