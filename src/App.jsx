import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import FaqWidget from './components/FaqWidget.jsx';
import { useScrollAnimation } from './hooks/useScrollAnimation.js';

const Tours = lazy(() => import('./components/Tours.jsx'));
const LargeGroups = lazy(() => import('./components/LargeGroups.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Destinations = lazy(() => import('./components/Destinations.jsx'));
const Reviews = lazy(() => import('./components/Reviews.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const SECTION_IDS = ['tours', 'large-groups', 'about', 'destinations', 'reviews', 'contact'];
const PRELOAD_OFFSET_PX = 300;

const useSectionPreload = () => {
  const [visibleSections, setVisibleSections] = useState(() => new Set());

  useEffect(() => {
    const seen = new Set();

    const revealSection = (id) => {
      if (!id || seen.has(id)) return;
      seen.add(id);
      setVisibleSections((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        return next;
      });
    };

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) {
      SECTION_IDS.forEach((id) => revealSection(id));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight + PRELOAD_OFFSET_PX) {
            revealSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `0px 0px ${PRELOAD_OFFSET_PX}px 0px`,
        threshold: 0.01
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Idle-time background preloading of any remaining sections
  useEffect(() => {
    const remaining = SECTION_IDS.filter((id) => !visibleSections.has(id));
    if (!remaining.length) return;

    const idleCallback =
      window.requestIdleCallback ||
      function (cb) {
        return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 200);
      };

    const idleId = idleCallback(() => {
      setVisibleSections((prev) => {
        const next = new Set(prev);
        remaining.forEach((id) => next.add(id));
        return next;
      });
    });

    return () => {
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, [visibleSections]);

  return visibleSections;
};

const App = () => {
  useScrollAnimation();
  const visibleSections = useSectionPreload();

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Suspense fallback={null}>
          <section id="tours">
            {visibleSections.has('tours') ? <Tours /> : null}
          </section>
          <section id="large-groups">
            {visibleSections.has('large-groups') ? <LargeGroups /> : null}
          </section>
          <section id="about">
            {visibleSections.has('about') ? <About /> : null}
          </section>
          <section id="destinations">
            {visibleSections.has('destinations') ? <Destinations /> : null}
          </section>
          <section id="reviews">
            {visibleSections.has('reviews') ? <Reviews /> : null}
          </section>
          <section id="contact">
            {visibleSections.has('contact') ? <Contact /> : null}
          </section>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFab />
      <FaqWidget />
    </>
  );
};

export default App;


