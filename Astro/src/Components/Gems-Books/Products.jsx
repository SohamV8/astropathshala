import './Products.css'; 
import Arrow from '../../assets/Arrow.png';
import { useState } from 'react';
import './Fonts.css';

const Products = () => {
  const [liked, setLiked] = useState({});

  const companies = [
    {
      name: 'Dresses',
      description: '',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2F65%2Fed659bd3924f438b192e8e37a29bc9322cac9294.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'T-Shirts',
      description: '',
      imgSrc: 'https://images.bewakoof.com/t1080/women-s-red-being-cute-is-my-superpower-graphic-printed-oversized-t-shirt-577399-1717061129-1.jpg',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'Skirts',
      description: '',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb8%2F3f%2Fb83f1d73f78a329d73658204e6bde70c695c3923.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
     {
      name: 'Overcoats',
      description: '',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2F7b%2Fb17ba1fd2942e4712b5f44c341087fb40f960a03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Joggers',
      description: '',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRALtM_pkU68BMj0IcL6Ol6Mpg07OK4Q9DoX22X7yX8CQ0FWjXcFRCH8NWyyYW55yggkD6PSFLJNdgsFNgx7PtqRY5aIOR8SgIFt0qIW5CHWkmM6qc_Tt0etg&usqp=CAc',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Crop Top',
      description: '',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1HAZOuS8jWEaCgij-yf0kijAjz8Vpgt2pCRxv-rHRzJA_GY3Z5cb_wBRMKOJVgJK7nvuTwPfVvsXp6xeZC2t5VQdU0u-XLBh3o2VsYKp2&usqp=CAE',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Formal Shirt',
      description: '',
      imgSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9jJ9WBzo6Bks-6H30J6rUYtp6bUhucHOwPz6Au2-XHFwETDAsDwFt8c7FLCOp11k8H6woP052uv5GUaf-n11mlcDvt06POGofNIhAyrk&usqp=CAE',
      price: 100,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Suits',
      description: '',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoyxq6LRwGCgxRCQGgthrsVwDTHjaXPF11tnj2874ovwsi14F5AsMVeuX-FURr1_C5dBjtycGZ4vvZrb64ADGc-4Rg7GU7zXipkq7zrCY&usqp=CAE',
      price: 1000,
      discount: 10,
      tags: [
        { name: 'branding', color: '#2FCC32FF' },
        { name: 'packaging', color: '#A146B1FF' },
      ],
      iconBg: '#d3b19a',
    },
  ];



  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="trusted-companies">
      <div className="container-gems">
        {companies.map((company, index) => (
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
  );
};

export default Products;
