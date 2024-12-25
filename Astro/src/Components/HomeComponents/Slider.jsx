import React from 'react';
import './slider.css';
import MyButton from '../Mybutton';
import img1 from '../../assets/Course/Practical-Palmistry-Course.jpg';
import img2 from '../../assets/Course/Divisional-Charts.jpg';
import img3 from '../../assets/Course/Lal-Kitab-App-Thumbnail.jpg';
import img4 from '../../assets/Course/Art-Of-Prediction-Advance.jpg';
import img5 from "../../assets/Combo/Vedic-Astrology-Course-Bundled.jpg";
import img6 from "../../assets/Combo/all-nadi-astrology-course.jpg";
import img7 from "../../assets/Combo/5-lal-kitab-courses.jpg";
import img8 from '../../assets/Course/Advance-Astrology-by-pratap-sheel.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slider = () => {
  const itemsLeft = images.map((image, index) => (
    <div key={index} className={`itemLeft item${index + 1}`}>
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ));

  const itemsRight = images.map((image, index) => (
    <div key={index} className={`itemRight item${index + 1}`}>
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ));

  return (
    <div className="sliding">
      <div className="wrapperslide">{itemsLeft}</div>
      <div className="text-courses">
      <h1 className='get font-soria'>GET <span className='hand font-soria'> VARIETY OF COURSES</span></h1>
      <MyButton text='Buy Now'/>
      </div>
      <div className="wrapperslide">{itemsRight}</div>
    </div>
  );
};

export default Slider;
