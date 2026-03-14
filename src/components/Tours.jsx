import React, { useState } from 'react';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

const tours = [
  {
    id: 'option1',
    anchorId: 'blue-cave-tour',
    title: 'Green & Blue Cave (Vis)',
    duration: '8h',
    time: '10:30–18:30',
    route: '• Green Cave • Stiniva Bay • Blue Cave • Pritiscina • Pakleni (Palmizana/Zdrilca)',
    extras: 'Extras: Green Cave €12 pp • Blue Cave €18 pp',
    includes: 'Included: icebox, bottled water, snorkel',
    img: '/img/package-1.jpeg'
  },
  {
    id: 'option2',
    anchorId: 'pakleni-islands-tour',
    title: 'Paklinski Islands + Red Rocks',
    duration: '4h',
    time: '14:00–18:00',
    route: '• Borce Bay • Red Rocks • Dubovica Beach • Paklinski (Zdrilca/Tarsce)',
    extras: 'No extra fees',
    includes: 'Included: icebox, bottled water, snorkel',
    img: '/img/package-2.jpeg'
  },
  {
    id: 'option3',
    anchorId: 'private-boat-tour',
    title: 'Private Tour (custom)',
    duration: 'Flexible',
    time: '',
    route: '',
    extras: 'Fuel not included (estimate based on plan)',
    includes: 'Included: icebox, bottled water, snorkel, towels on request',
    img: '/img/package-3.jpeg'
  },
  {
    id: 'option4',
    title: 'Rent Boat (no skipper)',
    duration: '8h',
    time: '09:00–17/18:00',
    route: '',
    extras: 'Fuel not included → return & refill',
    includes: 'Suggested places depend on weather',
    img: '/img/package-4.jpeg'
  },
  {
    id: 'option5',
    anchorId: 'sunset-boat-tour',
    title: 'Sunset Tour',
    duration: '2h',
    time: '19:00–21:00',
    route: '',
    extras: 'Included: bottled wine, glasses, snacks',
    includes: 'Bring a light jacket',
    img: '/img/package-5.jpeg'
  }
];

const TourCard = ({ tour }) => {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(2);

  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    const url = buildWhatsAppUrl(
      {
        phone: '385951966734',
        tourName: tour.title
      },
      date,
      Number.isNaN(people) ? 2 : people
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="col-12 col-md-6 col-lg-4" id={tour.anchorId || undefined}>
      <div className="card tour-card h-100 shadow-soft js-animate-on-scroll">
        <img
          src={tour.img}
          className="card-img-top"
          alt={tour.title}
          loading="lazy"
          decoding="async"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{tour.title}</h5>
          <div className="mb-2">
            <span className="badge text-bg-primary">{tour.duration}</span>
            {tour.time && (
              <span className="badge text-bg-light text-muted ms-1">{tour.time}</span>
            )}
          </div>
          {tour.route && (
            <ul className="list-unstyled small mb-2">
              <li>{tour.route}</li>
            </ul>
          )}
          {tour.extras && <p className="small text-muted mb-1">{tour.extras}</p>}
          {tour.includes && <p className="small mb-2">{tour.includes}</p>}

          <div className="tour-booking-inputs mb-3">
            <div className="row g-2">
              <div className="col-7">
                <input
                  type="date"
                  className="form-control form-control-sm tour-date-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  aria-label="Tour date"
                />
              </div>
              <div className="col-5">
                <input
                  type="number"
                  min={1}
                  className="form-control form-control-sm tour-people-input"
                  value={people}
                  onChange={(e) => setPeople(parseInt(e.target.value, 10) || 2)}
                  aria-label="Number of people"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <strong className="fs-5">
              € <span data-price={tour.id}>TBD</span>
            </strong>
            <div className="d-flex gap-2">
              <a className="btn btn-outline-secondary btn-sm" href="#" target="_blank" rel="noreferrer">
                Map
              </a>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tours = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4 section-title">
          <small>Suggested Tours</small>
          <h2 className="mb-3">Blue Cave boat tour, Pakleni Islands boat tour &amp; private boat Hvar</h2>
          <p className="text-muted mb-0">
            Flexible itineraries, local crew and well-maintained boats — message us to check availability and plan your day.
          </p>
        </div>

        <div className="row g-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card tour-card h-100 shadow-soft">
              <img
                src="/img/waterscooter.jpeg"
                className="card-img-top"
                alt="Water scooter"
                loading="lazy"
                decoding="async"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Water Scooters (for diving)</h5>
                <p className="small mb-2">
                  Add-on experience for snorkeling and exploring spots with ease.
                </p>
                <div className="mt-auto">
                  <a
                    className="btn btn-outline-primary btn-sm"
                    href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20Water%20Scooters%20(add-on)."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;


