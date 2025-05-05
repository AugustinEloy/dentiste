import React, { useRef } from 'react';
import Navbar from './component/navbar';
import Header from './component/header';
import Apdn from './component/aproposdenous';
import Contact from './component/contact';
import Localisation from './component/localisation';
import Services from './component/services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const localisationRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'services') servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'localisation') localisationRef.current?.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <div className="container"> 
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Header /></div>
      <div ref={aboutRef}><Apdn /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={localisationRef}><Localisation /></div> 
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
