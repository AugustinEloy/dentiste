import React from 'react';
import Card from '../component/card';
import '../App.css';
import serv1 from '../asstes/service1.JPG'
import serv2 from '../asstes/service2.JPG'
import serv3 from '../asstes/service3.JPG'


const Services = () => {
  return (
    <div>
        <h2>Nos services</h2>
    <div className="services-section">
      <Card
        src={serv1}
        title="Dentisterie"
        description="Soins dentaires pour adultes et enfants."
      />
      <Card
        src={serv2}
        title="Consultation"
        description="Consultations générales et spécialisées."
      />
      <Card
        src={serv3}
        title="Suivi médical"
        description="Suivi régulier de votre santé."
      />
    </div>
    </div>
  );
};

export default Services;
