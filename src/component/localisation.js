import React from 'react';
import localisationImage from '../asstes/localisation.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css';

const Localisation = () => {
  return (
    <section className="localisation-container">
      {/* Titre Localisation */}
      <div className="localisation-header">
        <h2>Localisation</h2>
      </div>

      
      <div className="localisation-body">
        
        <img
          src={localisationImage}
          alt="cabinet Severine Raad"
          className="localisation-image"
        />

        
        <div className="localisation-info">
          <h3>Nous trouver facilement</h3>
          <p><FontAwesomeIcon icon={faPhone} /> 02 734 14 87</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> teethfortous@gmail.com</p>
          <h4>Horaires d’ouverture</h4>
          <p>Lundi - Vendredi : 9h à 18h</p>
          <p>Samedi : sur rendez-vous</p>
        </div>
      </div>

     
      <div className="localisation-map">
        <iframe
          title="Localisation du cabinet Severine Raad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.39250718123!2d4.386159076993074!3d50.85770965911083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4960d6e8f8d%3A0x54d9b2c8a269b401!2sRue%20du%20Noyer%2087B%2C%201000%20Bruxelles%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1714323037036!5m2!1sfr!2sbe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Localisation;
