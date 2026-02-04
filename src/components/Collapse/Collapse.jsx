import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        {title} <FontAwesomeIcon icon={faChevronUp} className={`chevron ${isOpen ? "open" : ""}`} />
      </div>
      <div className="collapse__text">
        {text}
      </div>
    </div>
  );
}
export default Collapse;







