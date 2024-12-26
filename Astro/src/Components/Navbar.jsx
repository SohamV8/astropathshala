import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline } from 'ionicons/icons';
import acc from '../assets/acc.png';

const NavbarContainer = styled.div`
  background-color: #0b0c25;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #ffb400;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-family: 'BKANT', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  gap: 0.5rem;

  &:hover {
    color: #ffb400;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.3rem; /* Adjusting space between icon and text for smaller screens */
  }
`;

const Icon = styled(IonIcon)`
  font-size: 1.75rem;
  color: #ffb400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RightSection = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      {/* Left Section: Contact Info */}
      <LeftSection>
        {/* Phone Section */}
        <ContactLink href="tel:+919871130487">
          <Icon icon={callOutline} />
          +91 9871130487
        </ContactLink>

        {/* Email Section */}
        <ContactLink href="mailto:astropathshala@gmail.com">
          <Icon icon={mailOutline} />
          astropathshala@gmail.com
        </ContactLink>
      </LeftSection>

      {/* Right Section: Account Image */}
      <RightSection>
        <a
          href="https://app.astropathshala.com/courses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Account Icon" src={acc} />
        </a>
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar;
