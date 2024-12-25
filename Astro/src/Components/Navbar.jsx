import React from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline } from 'ionicons/icons';
import acc from '../assets/acc.png';

function Navbar() {
  return (
    <div className="astropath-header bg-[#0b0c25] text-white flex justify-between items-center px-2 border-b border-[#ffb400]">
      {/* Left Section: Contact Info */}
      <div className="flex space-x-12 font-BKANT items-center">
        {/* Phone Section */}
        <div className="astropath-phone flex items-center">
          <a
            href="tel:+919871130487"
            className="flex items-center text-white hover:text-[#ffb400] transition-colors duration-300 text-lg tracking-wider"
          >
            <IonIcon icon={callOutline} className="text-[#ffb400] text-3xl mr-2" />
            +91 9871130487
          </a>
        </div>

        {/* Email Section */}
        <div className="astropath-email flex items-center">
          <a
            href="mailto:astropathshala@gmail.Com"
            className="flex items-center text-white hover:text-[#ffb400] transition-colors duration-300 text-lg tracking-wider"
          >
            <IonIcon icon={mailOutline} className="text-[#ffb400] text-3xl mr-2" />
            astropathshala@gmail.Com
          </a>
        </div>
      </div>

      {/* Right Section: Account Image */}
      <div className="astropath-acc">
        <a
          href="https://app.astropathshala.com/courses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Account Icon"
            src={acc}
            className="h-12 w-12 object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
