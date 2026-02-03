import React, { useRef, useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Johan E.',
    rating: 5,
    text: "Fantastic service. We saw places you normally wouldn't experience with any of the other boat ride companies in Hvar. I can't speak highly enough of Nicola and Josip. Quick response, easy booking and always on time. Choose this company if you want the best experience.",
    platform: 'Google Reviews'
  },
  {
    name: 'Brunno Hofmann',
    rating: 5,
    text: 'Really nice experience. Nikolas was very nice with the group and the boat is good and faster. We visited several places and he explained some things about them to us. He also offered snorkeling equipment that we could use. Totally recommend.',
    platform: 'Google Reviews'
  },
  {
    name: 'Philippe De Koninck',
    rating: 5,
    text: "100% worth the price! Amazing places to visit and we had a great driver called Josip. Cyrus was very helpful and explained every area perfectly so we could decide which destination would be best for our taste. Great activity to do.",
    platform: 'Google Reviews'
  },
  {
    name: 'Charles-Olivier Caron',
    rating: 5,
    text: 'Amazing experience. Cyrus helped us choose the best areas to go, and our boat driver, Youssef, was very nice. We were able to have a private boat for a good price. A great day activity to do.',
    platform: 'Google Reviews'
  },
  {
    name: 'Sara Duholm',
    rating: 5,
    text: 'Josip took us to places that were truly amazing. He listened to our wishes and made the day more than perfect.',
    platform: 'Google Reviews'
  },
  {
    name: 'Maximiliano Ferrero Versino',
    rating: 5,
    text: 'Excelente experiencia! Agradecidos con Nikola, fue muy amable con nosotros!',
    platform: 'Google Reviews'
  },
  {
    name: 'C. T. (Local Guide)',
    rating: 5,
    text: 'Gran barco y mejor tripulación aún.',
    platform: 'Google Reviews'
  },
  {
    name: 'Alicia U',
    rating: 5,
    title: 'Best tour boat ever',
    text: 'Our experience with Filip, our guide, was a 10 out of 10. Not only he took us to breathtaking landscapes, caves and beaches, but also he was flexible at all times. Additionally, he let us play the music we wanted. It was an awesome experience along 7–8 hours. Our guide was very close and friendly at all times. The tour was very complete and it was one of the best prices we found. We highly recommend the tour with Mare Boats Hvar.',
    platform: 'TripAdvisor'
  }
];

const Reviews = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * (direction === 'next' ? 1 : -1);
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 1);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => track.removeEventListener('scroll', updateScrollState);
  }, []);

  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (mq?.matches) setAutoplayEnabled(false);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || isPaused) return;
    const id = setInterval(() => scroll('next'), 7000);
    return () => clearInterval(id);
  }, [autoplayEnabled, isPaused]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scroll('prev');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scroll('next');
    }
  };

  return (
    <section id="reviews" className="py-5">
      <div className="container">
        <div className="text-center mb-4 section-title">
          <small>Reviews</small>
          <h2 className="mb-3">What our guests say</h2>
        </div>

        <div className="reviews-carousel-wrapper">
          <button
            type="button"
            className="reviews-carousel-btn reviews-carousel-btn--prev"
            onClick={() => scroll('prev')}
            aria-label="Previous review"
            disabled={!canScrollPrev}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>

          <div
            ref={trackRef}
            className="reviews-track"
            role="region"
            aria-label="Customer reviews"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
          >
            {reviews.map((review, index) => (
              <article
                key={index}
                className="review-card"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="card h-100 shadow-soft border-0">
                  <div className="card-body">
                    <div className="mb-2 text-warning" aria-hidden="true">
                      {'★'.repeat(review.rating)}
                    </div>
                    {review.title && (
                      <h3 className="h6 card-subtitle mb-2 text-muted">{review.title}</h3>
                    )}
                    <blockquote className="card-text mb-3" itemProp="reviewBody">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <footer className="text-muted small">
                      <cite itemProp="author" title={review.name}>
                        {review.name}
                      </cite>
                      {' — '}
                      <span itemProp="publisher">{review.platform}</span>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="reviews-carousel-btn reviews-carousel-btn--next"
            onClick={() => scroll('next')}
            aria-label="Next review"
            disabled={!canScrollNext}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="mb-3">Real experiences from guests who spent the day with us on the sea.</p>
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            <a
              className="btn btn-outline-primary"
              href="https://www.google.com/maps/place/MARE+BOATS/@43.1662795,16.4422281,732m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1335810a66e18add:0x7bb6c12e07bdddde"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more reviews on Google
            </a>
            <a
              className="btn btn-outline-primary"
              href="https://www.tripadvisor.com/Attraction_Review-g303808-d26168387-Reviews-Mare_Boats_Hvar-Hvar_Hvar_Island_Split_Dalmatia_County_Dalmatia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on TripAdvisor
            </a>
            <a
              className="btn btn-success"
              href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour."
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp me-2" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
