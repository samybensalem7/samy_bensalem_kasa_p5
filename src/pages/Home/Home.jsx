import Banner from "../../components/Banner/Banner";
import React from "react";
import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
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



