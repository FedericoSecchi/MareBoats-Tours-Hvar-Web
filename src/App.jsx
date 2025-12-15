import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Tours from './components/Tours.jsx';
import About from './components/About.jsx';
import Destinations from './components/Destinations.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import FaqWidget from './components/FaqWidget.jsx';
import { useScrollAnimation } from './hooks/useScrollAnimation.js';

const App = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Tours />
        <About />
        <Destinations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <FaqWidget />
    </>
  );
};

export default App;


