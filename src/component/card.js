import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={icon} size="3x" className='card-icon' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
