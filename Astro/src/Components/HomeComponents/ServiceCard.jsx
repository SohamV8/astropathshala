import React, { useState } from "react";
import "./ServiceHome.css";

const ServiceCard = ({ title, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <div className="service-rotating-image"></div>}
      <div className="service-image-container">
        <img src={image} alt={title} className="service-main-image" />
      </div>
      <h2 className="service-card-heading">{title}</h2>
      <p className="service-card-paragraph">{description}</p>
      <button className="service-card-button">Explore More</button>
    </div>
  );
};

export default ServiceCard;
