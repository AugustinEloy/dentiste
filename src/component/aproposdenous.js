import dentiste from '../asstes/photosev.JPG';
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
        Dentiste généraliste conventionnée depuis 1996, j’accueille une patientèle de tous âges, de 2 à 99 ans.
                </p>
                <p>
              Mon objectif est d’offrir des soins de qualité dans une ambiance détendue et rassurante.
                </p>
                <p>
                Je pratique la petite chirurgie, les soins esthétiques, la prothèse fixe (implants, couronnes, bridges) ainsi que les prothèses amovibles.
              </p>
              <p>
              J’utilise des matériaux haut de gamme et un matériel radiologique digital avec empreinte numérique Trios.
              </p>
              <p>
              Je collabore avec un laboratoire bruxellois de confiance, 100 % made in Belgium, et veille à une hygiène et stérilisation rigoureuses.
              </p>
              <p>
              Mes patients apprécient ma gentillesse, mon humour et mon approche humaine. Forte de mon expérience, je prends le temps d’écouter et d’expliquer pour que chaque visite soit sereine.
              </p>
            </div>
        </div>
    </div>
  );
};

export default Apdn;
