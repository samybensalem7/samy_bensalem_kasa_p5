import Banner from "../../components/Banner/Banner";
import React from "react";
import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import "./Home.scss";
import { Link } from "react-router-dom";
import banner_img from "../../assets/banner_img.png";

function Home() {
  return (
    <div className="home_content">
      <Banner title="Chez vous, et partout ailleurs" cover={banner_img} />
      <div className="cardsContainer">
        {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card
            title={logement.title}
            cover={logement.cover}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;



