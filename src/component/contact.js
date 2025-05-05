import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-wrapper">
        <div className="form-container">
          <h3>Contactez-nous</h3>
          <form>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
