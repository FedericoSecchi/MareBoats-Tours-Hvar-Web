import React from 'react';
import MasonryWrapper from './MasonryWrapper.jsx';

const destinations = [
  { id: 'stiniva', title: 'Stiniva', subtitle: 'Hidden beach cove', img: '/img/destination-2.jpeg' },
  { id: 'blue-cave', title: 'Blue Cave', subtitle: 'Crystal blue waters', img: '/img/destination-4.jpeg' },
  { id: 'green-cave', title: 'Green Cave', subtitle: 'Emerald grotto', img: '/img/destination-5.jpeg' },
  { id: 'red-rocks', title: 'Red Rocks', subtitle: 'Dramatic cliffs', img: '/img/destination-6.jpeg' }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-5 bg-light">
      <div className="container destinations-wrap">
        <div className="text-center mb-4 section-title">
          <small>Destinations</small>
          <h2 className="mb-3">Explore top spots</h2>
        </div>
        <MasonryWrapper items={destinations}>
          <div className="row g-3 destination justify-content-center">
            {destinations.map((dest) => (
              <div key={dest.id} className="col-6 col-md-4 col-lg-3 js-animate-on-scroll">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="img-fluid"
                  loading="lazy"
                  decoding="async"
                />
                <p className="destination-title">{dest.title}</p>
              </div>
            ))}
          </div>
        </MasonryWrapper>
      </div>
    </section>
  );
};

export default Destinations;


