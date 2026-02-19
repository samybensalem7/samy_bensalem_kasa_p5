import "./Card.scss";

function Card({ title, cover, }) {
  return (
    <div className="card__content">
      <img className="card__image" src={cover} alt={`Photo du logement ${title} `} />
      <h3 className="card__title">{title}</h3>
    </div>
  );
}

export default Card;
