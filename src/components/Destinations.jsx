import React from 'react';
import ChromaGridWrapper from './ChromaGridWrapper.jsx';

// Enhanced destinations data with colors and gradients for Chroma Grid effect
const destinations = [
  {
    id: 'stiniva',
    title: 'Stiniva',
    img: '/img/destination-2.jpeg',
    image: '/img/destination-2.jpeg',
    subtitle: 'Hidden beach cove',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #4F46E5, #000)'
  },
  {
    id: 'blue-cave',
    title: 'Blue Cave',
    img: '/img/destination-4.jpeg',
    image: '/img/destination-4.jpeg',
    subtitle: 'Crystal blue waters',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(210deg, #06B6D4, #000)'
  },
  {
    id: 'green-cave',
    title: 'Green Cave',
    img: '/img/destination-5.jpeg',
    image: '/img/destination-5.jpeg',
    subtitle: 'Emerald grotto',
    borderColor: '#10B981',
    gradient: 'linear-gradient(165deg, #10B981, #000)'
  },
  {
    id: 'red-rocks',
    title: 'Red Rocks',
    img: '/img/destination-6.jpeg',
    image: '/img/destination-6.jpeg',
    subtitle: 'Dramatic cliffs',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)'
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4 section-title">
          <small>Destinations</small>
          <h2 className="mb-3">Explore top spots</h2>
        </div>
        <ChromaGridWrapper items={destinations} showGrid={true}>
          {/* Fallback layout - will be replaced by ChromaGrid when visible */}
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
        </ChromaGridWrapper>
      </div>
    </section>
  );
};

export default Destinations;


