import React, { useState } from 'react';
import './Products.css'; 
import Arrow from '../../assets/Arrow.png';
import './Fonts.css';

function Precious() {
  const [liked, setLiked] = useState({});

  const PreciousStone = [
    {
      name: 'Yellow Sapphire',
      img: '',
      price: 17000, 
      discount: 10,
      iconBg: '#FDE8B1', // Pastel yellow
    },
    {
      name: 'Red Coral',
      img: '',
      price: 2000,
      discount: 10,
      iconBg: '#F4CCCC', // Soft pastel red
    },
    {
      name: 'Pearl',
      img: '',
      price: 2500,
      discount: 10,
      iconBg: '#F9F9F9', // Smooth pearl white
    },
    {
      name: 'Hessonite',
      img: '',
      price: 3000,
      discount: 10,
      iconBg: '#E6CCB2', // Soft brown pastel
    },
    {
      name: 'Cats Eye',
      img: '',
      price: 3000,
      discount: 10,
      iconBg: '#ECECEC', // Gentle grayish pastel
    },
    {
      name: 'Blue Sapphire',
      img: '',
      price: 17000,
      discount: 10,
      iconBg: '#B4C7E7', // Pastel blue
    },
    {
      name: 'Ruby',
      img: '',
      price: 6000,
      discount: 10,
      iconBg: '#FADADD', // Soft pastel pinkish-red
    },
    {
      name: 'White Sapphire',
      img: '',
      price: 17000,
      discount: 10,
      iconBg: '#F5F5F5', // Gentle off-white
    },
    {
      name: 'Green Emerald',
      img: '',
      price: 10000,
      discount: 10,
      iconBg: '#C3E6CB', // Pastel green
    },
  ];

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN'); 
  };

  const toggleLike = (index) => {
    setLiked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="trusted-companies">
      <div className="container-gems">
        {PreciousStone.map((company, index) => (
          <div className="card" key={index}>
            <div className="card-inner" style={{ '--clr': '#fff' }}>
              <div className="box">
                <div className="imgBox">
                  <img src={company.imgSrc} alt={company.name} />
                </div>
                <div className="icon">
                  <a href="#" className="iconBox" style={{ background: company.iconBg }}>
                    <img src={Arrow} className="arrimg" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>{company.name}</h3>
              <div className="price-details">
                <span className="price">₹{formatPrice(company.price)}</span>
                <span className="discount">{company.discount}% OFF</span>
              </div>
              <div className="actions">
                <button className="add-to-cart">Add to Cart</button>
                <button
                  className={`like-button ${liked[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? '❤️' : '♡'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Precious;
