import React from "react";
import { IonIcon } from "@ionic/react"; // Ensure correct IonIcon import
import { logoWhatsapp } from "ionicons/icons"; // Import the WhatsApp logo icon

function WhatsappButton() {
  const whatsappLink = "https://wa.me/919871130487"; // Correctly formatted WhatsApp link

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center z-50"
      aria-label="Chat on WhatsApp"
      style={{ zIndex: 9999 }} // Ensure high z-index
    >
      <IonIcon
        icon={logoWhatsapp}
        className="text-white"
        style={{ fontSize: "2.3rem" }} // Larger icon size
      />
    </a>
  );
}

export default WhatsappButton;
