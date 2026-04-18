'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  threshold?: number;
  triggerOnce?: boolean;
};

export function useScrollAnimation(options?: Options) {
  const threshold = options?.threshold ?? 0.15;
  const triggerOnce = options?.triggerOnce ?? true;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, inView };
}
