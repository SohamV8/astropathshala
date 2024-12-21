import React from 'react';
import './Fonts.css';
import './Gems.css';
import animation1 from '../../assets/Gems/b1.png';
import animation2 from '../../assets/Gems/b2.png';
import animation3 from '../../assets/Gems/c2.png';
import animation4 from '../../assets/Gems/tl.png';
import animation5 from '../../assets/Gems/tro.png';
import animation7 from '../../assets/Gems/tr.png';
import animation8 from '../../assets/Gems/bl.png';
import animation9 from '../../assets/Gems/center.png';
import animation11 from '../../assets/Gems/wood.png';
import animation12 from '../../assets/Gems/top.png';

function CustomRing() {
  const pngs = [
    { className: 'image1', animationData: animation1 },
    { className: 'image2', animationData: animation2 },
    { className: 'image3', animationData: animation3 },
    { className: 'image4', animationData: animation4 },
    { className: 'image5', animationData: animation5 },
    { className: 'image7', animationData: animation7 },
    { className: 'image8', animationData: animation8 },
    { className: 'image9', animationData: animation9 },
    { className: 'image11', animationData: animation11 },
    { className: 'image12', animationData: animation12 },
  ];

  const ImgComponent = ({ className, animationData }) => {
    return (
      <div className={className}>
        <img src={animationData} alt="Gem" className="gif-img" />
      </div>
    );
  };

  return (
    <div className="custom-ring-container">
      {pngs.map((png, index) => (
        <ImgComponent
          key={index}
          animationData={png.animationData}
          className={`gem-image ${png.className}`}
        />
      ))}

      <div className="text-gems">
        <h1>Exquisite Gems, Craft your own ring</h1>
        <h3>Bring Elegance Home with Custom Rings</h3>
      </div>
    </div>
  );
}

export default CustomRing;
