import React from 'react'
import './Products.css'; 
import Arrow from '../../assets/Arrow.png';
import { useState } from 'react';
import './Fonts.css';

function Precious() {

      const [liked, setLiked] = useState({});
    
const PreciousStone = [
    {
      name: 'Dresses',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'T-Shirts',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#70b3b1',
    },
    {
      name: 'Skirts',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'Overcoats',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'Joggers',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'Crop Top',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'Formal Shirt',
      img: '',
      price: 100,
      discount: 10,
      iconBg: '#d3b19a',
    },
    {
      name: 'Suits',
      img: '',
      price: 1000,
      discount: 10,
      iconBg: '#d3b19a',
    },
  ];
  
    
      const toggleLike = (index) => {
        setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
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
                    <p>{company.description}</p>
      
                    <div className="price-details">
                      <span className="price">₹{(company.price - (company.price * company.discount) / 100).toFixed(2)}</span>
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
   
  )
}

export default Precious
