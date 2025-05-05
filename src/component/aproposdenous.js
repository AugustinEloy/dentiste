import dentiste from '../asstes/photoseverine.jpg';
import '../App.css';

const Apdn = () => {
  return (
    <div className="about-us">
        <h2>Dr severine Raad</h2>
        <div className="about-container"> 
            <div className="image-content">
                <img src={dentiste} alt="Severine Raad dentiste" className="imgd" />
            </div>
            <div className="text-content">
                <p>
                    Je suis Séverine, dentiste à Bruxelles depuis plusieurs années. Mon objectif : offrir des soins de qualité dans une ambiance détendue et rassurante.
                    <br />
                    En tant que professionnelle, je m’engage à vous fournir des traitements adaptés à vos besoins. Mes patients apprécient ma gentillesse, mon sens de l’humour et mon approche humaine du métier. Forte de mon expérience, je prends le temps d’écouter et d’expliquer, pour que chaque visite soit la plus sereine possible.
                    <br />
                    Au plaisir de vous accueillir et de prendre soin de votre sourire !
                </p>
            </div>
        </div>
    </div>
  );
};

export default Apdn;
