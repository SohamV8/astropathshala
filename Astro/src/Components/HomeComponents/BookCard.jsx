import React from "react";
import "./BookCard.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Check from "../../assets/check.png";
import Detail from "../../assets/detail.png";

function BookCard() {
  return (
    <div className="flex flex-row justify-around space-y-8">
    <div className="dynamic-card">
      <div className="dynamic-card-circle" style={{ "--clr": "#FBFBE2" }}>
        <img
          src="https://d1yei2z3i6k35z.cloudfront.net/505757/63fa5902f1ab4_216x135.png"
          alt="Logo"
          className="dynamic-card-logo"
        />
      </div>
      <div className="dynamic-card-content">
        <h2 className="">Connaissance Illimitée</h2>
        <p>
          Libère le superpouvoir de ton cerveau et développe une connaissance
          illimitée
        </p>
        <Link to='/books'>JE VEUX MON EXEMPLAIRE</Link>
      </div>
      <img
        src="https://d1yei2z3i6k35z.cloudfront.net/505757/63fa590e96084_5x8inch-2.png"
        alt="Product"
        className="dynamic-card-product-img"
      />
    </div>


    <div className="Feature-ebook p-8 rounded-xl">
  <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
    {/* Feature 1 */}
    <div className="feature-item flex items-center gap-4  p-4  hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={Check} alt="Check Icon" className="w-12 h-12" />
      <h3 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200">
        Easy to Understand
      </h3>
    </div>

    {/* Feature 2 */}
    <div className="feature-item flex items-center gap-4  p-4  hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={Detail} alt="Detail Icon" className="w-12 h-12" />
      <h3 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200">
        Detailed Book on Astrology
      </h3>
    </div>

    {/* Feature 3 */}
    <div className="feature-item flex items-center gap-4  p-4  hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={Detail} alt="Detail Icon" className="w-12 h-12" />
      <h3 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200">
        Detailed Book on Astrology
      </h3>
    </div>

    {/* Feature 4 */}
    <div className="feature-item flex items-center gap-4  p-4  hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={Check} alt="Check Icon" className="w-12 h-12" />
      <h3 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200">
        Easy to Understand
      </h3>
    </div>
  </div>
</div>


    </div>
  );
}

export default BookCard;
