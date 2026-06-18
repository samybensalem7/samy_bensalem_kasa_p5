import "./Banner.scss";

function Banner({ title, cover }) {
  return (
    <div className="banner__content">
      <img src={cover} alt="Bannière" className="banner__img" />
      <p className="banner__text">{title}</p>
    </div>
  );
}

export default Banner;
