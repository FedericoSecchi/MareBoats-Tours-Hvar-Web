'use client';

import { useEffect, useRef } from 'react';
import { trackYachtThanks } from '@/lib/analytics';

/** Fires the thank-you conversion event once per page view. */
export function ThanksTracker() {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    const exp = new URLSearchParams(window.location.search).get('experience') || 'unknown';
    // gtag loads afterInteractive: retry briefly if it is not ready yet
    let tries = 0;
    const fire = () => {
      if (typeof window.gtag === 'function') trackYachtThanks(exp);
      else if (tries++ < 20) setTimeout(fire, 250);
    };
    fire();
  }, []);
  return null;
}
