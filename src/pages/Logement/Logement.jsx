import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import logements from "../../data/logements.json";
import "./logement.scss";
import starR from "../../assets/starR.png";
import starW from "../../assets/starW.png";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
  const { id } = useParams();

  const logementActive = logements.find((l) => l.id === id);

  if (!logementActive) {
    return (
      <Navigate to="/error" replace />
    );
  }

  const number = [1, 2, 3, 4, 5];

  return (
    <div className="logement__content">
      <Slideshow pictures={logementActive.pictures} />
      <div className="logement__informations">
        <div>
          <h2 className="logement__title">{logementActive.title}</h2>
          <h3 className="logement__location">{logementActive.location}</h3>
          <div className="logement__tags">
            {logementActive.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement__host-and-rating">
          <div className="logement__host">
            <h4>{logementActive.host.name}</h4>
            <img
              className="logement__host--picture"
              src={logementActive.host.picture}
              alt={logementActive.host.name}
            />
          </div>
          <div className="logement__rating">
            {number.map((num, index) => (
              <img
                key={index}
                src={num <= logementActive.rating ? starR : starW}
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="logement__collapse">
        <Collapse title="description" text={logementActive.description} />
        <Collapse title="Equipements" text={logementActive.equipments} />
      </div>
    </div>
  );
}

export default Logement;