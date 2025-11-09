import Banner from "../../components/Banner/Banner";
import React from "react";
import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import "./Home.scss";

function Home() {
  return (
    <div className="Samy">
      <Banner />
      <div className="cardsContainer">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
