import React from 'react';

function WhatsappButton() {
  const whatsappLink = "https://wa.me/919871130487"; // Correctly formatted WhatsApp number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center z-50"
      aria-label="Chat on WhatsApp"
      style={{ zIndex: 9999 }} // Ensure high z-index
    >
      <ion-icon
        name="logo-whatsapp"
        style={{ fontSize: '2.3rem' }} // Larger icon size
      ></ion-icon>
    </a>
  );
}

export default WhatsappButton;
