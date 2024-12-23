import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct for Swiper 10+
import "swiper/css";
import "swiper/css/navigation";
import "./VideoYT.css"; // Updated CSS file
import timingJudge from "../assets/Videos/timingjudge.png";
import lalKitab from "../assets/Videos/lalkitab.jpg";
import jeevanSathi from "../assets/Videos/jeevansathi.jpg";
import marriage from "../assets/Videos/marriage.png";
import rahu from "../assets/Videos/rahu.png";
import budh from "../assets/Videos/budh.jpg";

function VideoYT() {
  const [activeSlide, setActiveSlide] = useState(null);

  const slides = [
    { src: "https://www.youtube.com/embed/QkaN-S2oybI", poster: timingJudge },
    { src: "https://www.youtube.com/embed/c50S-cpM6IQ", poster: lalKitab },
    { src: "https://www.youtube.com/embed/Dv924UhgbGE", poster: jeevanSathi },
    { src: "https://www.youtube.com/embed/49B9ufNShtw", poster: marriage },
    { src: "https://www.youtube.com/embed/GRps8cGoLAA", poster: rahu },
    { src: "https://www.youtube.com/embed/OLiV80-zBSA", poster: budh },
  ];

  const handlePlay = (index) => setActiveSlide(index);

  return (
    <section className="swiper-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`videoWrapper ${
                activeSlide === index ? "videoWrapperActive" : ""
              }`}
            >
              {activeSlide === index ? (
                <iframe
                  className="videoIframe"
                  src={slide.src}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`video-${index}`}
                ></iframe>
              ) : (
                <button
                  className="videoPoster"
                  style={{ backgroundImage: `url(${slide.poster})` }}
                  onClick={() => handlePlay(index)}
                >
                  <svg className="play-vid" viewBox="0 0 100 100">
                    <path
                      className="stroke-solid"
                      fill="none"
                      stroke="white"
                      d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                    />
                    <path
                      className="stroke-dotted"
                      fill="none"
                      stroke="white"
                      d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                    />
                    <path
                      className="vid-icon"
                      fill="white"
                      d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default VideoYT;
