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

  if (!logementActive){
    return(
    <Navigate to="/error" replace/>)
  }

  const number = [1, 2, 3, 4, 5];

  return (
    <div className="logements-container">
      <Slideshow pictures={logementActive.pictures} />
      <div className="logements-informations">
        <div className="title-section">
          <h2> {logementActive.title}</h2>
          <h3>{logementActive.location}</h3>
          <div className="logements-tags">
            {logementActive.tags.map((tag, index) => (
              <span key={index}> {tag} </span>
            ))}
          </div>
        </div>
        <div className="host-and-rating">
          <div className="host-informations">
            <h4>{logementActive.host.name}</h4>
            <img
              className="host-picture"
              src={logementActive.host.picture}
              alt={logementActive.host.name}
            />
          </div>
          <div className="rating">
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
      <div className="collapse-logement">
        <Collapse title="description" text={logementActive.description} />
        <Collapse title="Equipements" text={logementActive.equipments} />
      </div>
    </div>
  );
}

export default Logement;
