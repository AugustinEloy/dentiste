import { useState, useEffect } from 'react';
import photocarrousel1 from '../asstes/photocarrousel1.jpg';
import photocarrousel2 from '../asstes/photo-caroussel2.jpg';
import photocarrousel3 from '../asstes/photo-caroussel3.jpg';
import '../App.css';

const images = [photocarrousel1, photocarrousel2, photocarrousel3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero-section">
      <img
        src={images[currentIndex]}
        alt="cabinet de dentiste de severine"
        className="hero-image"
      />
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>Severine Raad Dentiste</h1>
      </div>
    </header>
  );
};

export default Header;
