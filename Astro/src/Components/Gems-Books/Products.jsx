import './Products.css';
import Arrow from '../../assets/Arrow.png';
import { useState } from 'react';
import './Fonts.css';

const Products = () => {
  const [liked, setLiked] = useState({});

  const Upratan = [
    {
      name: 'Feroza',
      img: '',
      price: 700,
      discount: 15, // Updated discount
      iconBg: '#E6D2C9', // Soft pastel beige
    },
    {
      name: 'Amethyst',
      img: '',
      price: 700,
      discount: 20, // Updated discount
      iconBg: '#C7D8D6', // Gentle pastel teal
    },
    {
      name: 'Lapis',
      img: '',
      price: 300,
      discount: 25, // Updated discount
      iconBg: '#F2E9E4', // Smooth pastel pink
    },
    {
      name: 'Sunhela',
      img: '',
      price: 300,
      discount: 10, // Updated discount
      iconBg: '#EFE4DB', // Soft pastel cream
    },
    {
      name: 'Kaka Neeli',
      img: '',
      price: 700,
      discount: 18, // Updated discount
      iconBg: '#D9E4E1', // Subtle pastel greenish-blue
    },
    {
      name: 'Tiger Eye',
      img: '',
      price: 200,
      discount: 12, // Updated discount
      iconBg: '#E8DBCF', // Muted pastel sand
    },
    {
      name: 'Sulemani Hakik',
      img: '',
      price: 300,
      discount: 22, // Updated discount
      iconBg: '#DFD9E2', // Gentle pastel lavender
    },
    {
      name: 'Mahe Mariam',
      img: '',
      price: 300,
      discount: 14, // Updated discount
      iconBg: '#E6E2DF', // Soft pastel grayish cream
    },
    {
      name: 'Moonstone',
      img: '',
      price: 300,
      discount: 19, // Updated discount
      iconBg: '#EBEDEE', // Delicate pastel light gray
    },
    {
      name: 'Peridot',
      img: '',
      price: 1000,
      discount: 17, // Updated discount
      iconBg: '#D1E0CF', // Smooth pastel green
    },
    {
      name: 'Turmuli',
      img: '',
      price: 1000,
      discount: 21, // Updated discount
      iconBg: '#F4E6DC', // Soft pastel peach
    },
    {
      name: 'Zirkon',
      img: '',
      price: 1000,
      discount: 16, // Updated discount
      iconBg: '#E9D8D6', // Muted pastel rose
    },
  ];

  const formatPrice = (price) => {
    return Number(price).toLocaleString('en-IN'); // Ensure price is a number before formatting
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
        {Upratan.map((company, index) => (
          <div className="card" key={index}>
            <div className="card-inner" style={{ '--clr': '#fff' }}>
              <div className="box">
                <div className="imgBox">
                  <img src={company.img} alt={company.name} />
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
                <span className="price">
                  ₹{formatPrice(company.price)}
                </span>
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
};

export default Products;
