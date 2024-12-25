import React from "react";
import objectImage from "../../assets/apptry.png";
import appImage from "../../assets/app.png";
import Applinks from "../Applinks";
import roundwhite from "../../assets/Logo/roundwhite.png";
import GSVLogo from "../../assets/Logo/roundwhite.png";
import Jyotish from "../../assets/Logo/roundwhite.png";
import "./SocialDisplay.css";

function SocialDisplay() {
  return (
    <div className="social-display-container">
      {/* Play Store Apps Section */}
      <div className="social-display-store-section">

        <div className="social-display-text-container">
          <h1>Astro Pathshala</h1>
          <h2>Learn Astrology from the comfort of your home</h2>  
          </div>
          <Applinks />      
          <div className="social-display-image-container">
          <img src={objectImage} alt="Rotating object" className="social-display-rotating-image" />
          <img src={appImage} alt="App image" className="social-display-overlapping-image" />

        </div>
      </div>

      {/* Separator Line */}
      <div className="social-display-separator"></div>

      {/* YouTube Channel Section */}
      <div className="social-display-youtube-section">
        <div className="social-display-text-container">
          <h1>Explore our YouTube Channel</h1>
          <h2>Get Regular updates on every topic of astrology</h2>
        </div>
        <div className="social-display-youtube-thumbnails">
          <a
            href="https://www.youtube.com/@AstroPathshala"
            target="_blank"
            rel="noopener noreferrer"
            className="social-display-thumbnail-box"
          >
            <img src={roundwhite} alt="YouTube thumbnail" className="social-display-thumbnail" />
          </a>
          <a
            href="https://www.youtube.com/@jyotish2004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-display-thumbnail-box"
          >
            <img src={GSVLogo} alt="YouTube thumbnail" className="social-display-thumbnail" />
          </a>
          <a
            href="https://www.youtube.com/@GurudevSunilVashist"
            target="_blank"
            rel="noopener noreferrer"
            className="social-display-thumbnail-box"
          >
            <img src={Jyotish} alt="YouTube thumbnail" className="social-display-thumbnail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialDisplay;