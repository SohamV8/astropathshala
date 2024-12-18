import React, { useState } from "react";
import "./Jyotishbook.css"; // Ensure this file is present and correctly referenced
import Mybutton from "../Mybutton";

const Jyotishbook = () => {
  const [bookClass, setBookClass] = useState("view-cover");
  const [activeButton, setActiveButton] = useState("view-cover");

  const handleButtonClick = (view) => {
    setBookClass(view);
    setActiveButton(view);
  };

  return (
    <div className="flex justify-between items-center space-x-8 px-8 py-16 text-golden">
    {/* Left Section: Text and Button */}
    <div className="space-y-4 w-1/2">
      <h1 className="text-4xl font-semibold leading-tight">Lorem ipsum dolor sit amet</h1>
      <h3 className="text-lg text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laborum asperiores voluptas earum mollitia odit blanditiis eveniet optio a reprehenderit.
      </h3>
      <Mybutton />
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
