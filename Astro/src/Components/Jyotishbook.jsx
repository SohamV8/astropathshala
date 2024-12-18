import React, { useState } from "react";
import "./Jyotishbook.css"; // Ensure this file is present and correctly referenced

const Jyotishbook = () => {
  const [bookClass, setBookClass] = useState("view-cover");
  const [activeButton, setActiveButton] = useState("view-cover");

  const handleButtonClick = (view) => {
    setBookClass(view);
    setActiveButton(view);
  };

  return (
    <div className="Jyotishbook">
    <div className="booktext">
        <h1 className=""></h1>
        <h3 className=""></h3>
        
    </div>
    <div className={`book-container ${bookClass}`}>
      <div className="main">
        <div className="book-font">
          <div className="book-cover"></div>
          <div className="book-cover-back"></div>
        </div>
        <div className="book-page">
          <div className="page-number">- 1 -</div>
        </div>
        <div className="book-back">
          <div className="isbn">
            <img alt="ISBN placeholder" src="assets/isbn-placeholder.png" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Jyotishbook;
