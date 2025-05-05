import React from 'react';
import Card from '../component/card';
import '../App.css';
import { faTooth, faUserMd, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div>
        <h2>Nos services</h2>
    <div className="services-section">
      <Card
        icon={faTooth}
        title="Dentisterie"
        description="Soins dentaires pour adultes et enfants."
      />
      <Card
        icon={faUserMd}
        title="Consultation"
        description="Consultations générales et spécialisées."
      />
      <Card
        icon={faHeartbeat}
        title="Suivi médical"
        description="Suivi régulier de votre santé."
      />
    </div>
    </div>
  );
};

export default Services;
