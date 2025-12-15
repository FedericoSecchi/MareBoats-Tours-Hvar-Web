import React from 'react';
import MasonryWrapper from './MasonryWrapper.jsx';

// Destinations data with height for Masonry layout calculation
// Height values are approximate and will be adjusted by the Masonry component
const destinations = [
  { id: 'stiniva', title: 'Stiniva', img: '/img/destination-2.jpeg', height: 400 },
  { id: 'blue-cave', title: 'Blue Cave', img: '/img/destination-4.jpeg', height: 500 },
  { id: 'green-cave', title: 'Green Cave', img: '/img/destination-5.jpeg', height: 450 },
  { id: 'red-rocks', title: 'Red Rocks', img: '/img/destination-6.jpeg', height: 480 }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4 section-title">
          <small>Destinations</small>
          <h2 className="mb-3">Explore top spots</h2>
        </div>
        <MasonryWrapper items={destinations}>
          {/* Fallback grid layout - works without Masonry effect */}
          <div className="row g-3 destination">
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


