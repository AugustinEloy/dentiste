import React from 'react';
import '../App.css';

const Card = ({ src, title, description }) => {
  return (
     <div className="card">
      <img src={src} alt={title} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
