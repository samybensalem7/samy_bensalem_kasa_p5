import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import logements from "../../data/logements.json";
import "./logement.scss";

function Logement() {
  const { id } = useParams();

  const logementActive = logements.find((l) => l.id === id);

  return (
    <div className="logements-container">
      <Slideshow pictures={logementActive.pictures} />
      <h3> {logementActive.title}</h3>
      <h4>{logementActive.location}</h4>
    </div>
  );
}

export default Logement;
