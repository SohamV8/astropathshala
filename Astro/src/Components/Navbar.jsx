import React from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline } from 'ionicons/icons';
import acc from '../assets/acc.png';

function Navbar() {
  return (
    <div className="astropath-header bg-[#0b0c25] text-white flex justify-between items-center px-4 py-1 border-b-[1px] border-[#ffb400]">
      {/* Left Section: Contact Info */}
      <div className="flex space-x-8">
        {/* Phone Section */}
        <div className="astropath-phone flex items-center">
          <IonIcon icon={callOutline} className="text-[#ffb400] text-2xl mr-3" />
          <a
            href="tel:+919871130487"
            className="text-white hover:text-[#ffb400] transition-colors duration-300"
          >
            +91 9871130487
          </a>
        </div>

        {/* Email Section */}
        <div className="astropath-email flex items-center">
          <IonIcon icon={mailOutline} className="text-[#ffb400] text-2xl mr-3" />
          <a
            href="mailto:Astropathshala@Gmail.Com"
            className="text-white hover:text-[#ffb400] transition-colors duration-300"
          >
            Astropathshala@Gmail.Com
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
            className="h-10 w-10 object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
