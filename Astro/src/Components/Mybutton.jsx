import React from 'react';
import styled from 'styled-components';

const MyButton = ({ text }) => {
  return (
    <StyledWrapper>
      <button>
        {text}
        <div className="star-1">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
        <div className="star-2">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
        <div className="star-3">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
        <div className="star-4">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
        <div className="star-5">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
        <div className="star-6">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" />
            </g>
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 20px 35px;
    background: #FFD700; /* Golden yellow mustard */
    font-size: 20px;
    font-weight: 600;
    color: #ffffff; /* White text */
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .star-1, .star-2, .star-3, .star-4, .star-5, .star-6 {
    position: absolute;
    filter: drop-shadow(0 0 5px #FFD700); /* Bright golden yellow stars */
    z-index: -5;
    transition: all 0.8s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }

  .star-1 {
    top: 20%;
    left: 20%;
    width: 25px;
    height: auto;
  }

  .star-2 {
    top: 45%;
    left: 45%;
    width: 15px;
    height: auto;
  }

  .star-3 {
    top: 40%;
    left: 40%;
    width: 5px;
    height: auto;
  }

  .star-4 {
    top: 20%;
    left: 40%;
    width: 8px;
    height: auto;
  }

  .star-5 {
    top: 25%;
    left: 45%;
    width: 15px;
    height: auto;
  }

  .star-6 {
    top: 5%;
    left: 50%;
    width: 5px;
    height: auto;
  }

  button:hover {
    background: #000000;
    color: #ffffff; /* White text on hover */
    box-shadow: 0 0 80px #ffffff8c;
  }

  button:hover .star-1 {
    top: -20%;
    left: -20%;
    width: 20px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  button:hover .star-2 {
    top: 35%;
    left: -25%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  button:hover .star-3 {
    top: 80%;
    left: -10%;
    width: 10px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  button:hover .star-4 {
    position: absolute;
    top: -25%;
    left: 105%;
    width: 20px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  button:hover .star-5 {
    position: absolute;
    top: 30%;
    left: 115%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  button:hover .star-6 {
    position: absolute;
    top: 80%;
    left: 105%;
    width: 10px;
    height: auto;
    filter: drop-shadow(0 0 10px #FFD700);
    z-index: 2;
  }

  .fil0 {
    fill: #fffdef;
  }`;

  export default MyButton;
