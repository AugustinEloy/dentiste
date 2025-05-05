import React from 'react';
import '../App.css';
import Logo from './Logo'; 

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <Logo /> 
      </div>

      <ul className="nav-links">
        <li><button onClick={() => scrollToSection('about')} className="nav-btn">Notre équipe</button></li>
        <li><button onClick={() => scrollToSection('services')} className="nav-btn">Services</button></li>
        <li><button onClick={() => scrollToSection('localisation')} className="nav-btn">Localisation</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
