import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import objectImage from "../../assets/apptry.png";
import appImage from "../../assets/app.png";
import Applinks from "../Applinks";

// Global Styles for Animations


const AppMobile = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Left Section with Images */}
        <ImageContainer>
          <RotatingImage src={objectImage} alt="rotating-object" />
          <OverlappingImage src={appImage} alt="app-image" />
        </ImageContainer>

        {/* Right Section with Text */}
        <TextContainer>
          <Heading>Astro Pathshala</Heading>
          <SubHeading>Learn Astrology from the comfort of your home</SubHeading>
<Applinks />
        </TextContainer>
      </Container>
    </>
  );
};
const GlobalStyle = createGlobalStyle`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RotatingImage = styled.img`
  height: 650px;
  width: 650px;
  animation: rotate 50s linear infinite;
`;

const OverlappingImage = styled.img`
  position: absolute;
  height: 500px;
  width: 500px;
  z-index: 10;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
      display: flex
;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 20px;
`;

export default AppMobile;
