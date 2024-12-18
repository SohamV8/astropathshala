import React, { useEffect, useRef } from "react";
import Kinet from "kinet"; 
import './Mybutton.css'

const Mybutton = () => {
  const circleRef = useRef(null); // Ref to circle element

  useEffect(() => {
    // Initialize Kinet instance
    const kinet = new Kinet({
      acceleration: 0.02,
      friction: 0.25,
      names: ["x", "y"],
    });

    // Select circle element using ref
    const circle = circleRef.current;

    // Set handler on Kinet tick event
    kinet.on("tick", (instances) => {
      if (circle) {
        circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
      }
    });

    // Handle mouse move
    const handleMouseMove = (event) => {
      kinet.animate("x", event.clientX - window.innerWidth / 2);
      kinet.animate("y", event.clientY - window.innerHeight / 2);
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <a className="button-wrapper">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
        <span className="dot dot-5"></span>
        <span className="dot dot-6"></span>
        <span className="dot dot-7"></span>
        <span className="button bg-yellow-500 px-16 py-4 rounded-full uppercase">
          Button
        </span>
      </a>

      <div id="circle" className="circle bg-yellow-500" ref={circleRef}></div>
    </div>
  );
};

export default Mybutton;
