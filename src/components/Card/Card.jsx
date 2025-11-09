import "./Card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={`Photo du logement ${title} `} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
