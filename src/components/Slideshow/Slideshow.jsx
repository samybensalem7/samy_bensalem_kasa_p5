import "./Slideshow.scss";
import React, { useState } from "react";
import chevronLeft from "../../assets/chevronleft.png";
import chevronRight from "../../assets/chevronRight.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMinus = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  }; // à revoir
  const handlePlus = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow-container ">
      <img className="img-pictures" src={pictures[currentIndex]} />

      {pictures.length > 1 && (
        <>
          <div className="chevrons">
            <img
              src={chevronLeft}
              onClick={handleMinus}
              className="chevron-left"
            />
            <img
              src={chevronRight}
              onClick={handlePlus}
              className="chevron-right"
            />
          </div>
          <span className="active-counter">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
