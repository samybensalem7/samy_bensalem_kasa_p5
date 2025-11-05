import banner__img from "../../assets/banner_img.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={banner__img} alt="Bannière" className="banner_img" />
      <p className="banner__text">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
