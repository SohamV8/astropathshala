import React from "react";
import objectImage from "../../assets/apptry.png";
import appImage from "../../assets/app.png";
import Applinks from "../Applinks";
import roundwhite from "../../assets/Logo/roundwhite.png";
import GSVLogo from "../../assets/Logo/GSVLogo.png";
import Jyotish from "../../assets/Logo/Jyotish.png";
import "./SocialDisplay.css";
import underline from '../../assets/underline1.png';

function SocialDisplay() {
  return (
    <div className="social-display-container">
      {/* Play Store Apps Section */}
      <div className="social-display-store-section">

        <div className="social-display-text-container">
          <h1 className="font-soria">Astro Pathshala</h1>
                  <img
                    src={underline}
                    alt="underline"
                    className="mx-auto mt-2 w-27 h-auto object-contain"
                  />
          <h2 className="font-BKANT">Learn Astrology from the comfort of your home</h2>  
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
          <h1 className="font-soria">Explore our YouTube Channel</h1>
                  <img
                    src={underline}
                    alt="underline"
                    className="mx-auto mt-2 w-27 h-auto object-contain"
                  />
          <h2 className="font-BKANT">Get Regular updates on every topic of astrology</h2>
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