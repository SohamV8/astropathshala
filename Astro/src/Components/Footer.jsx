import React from 'react';
import styled from "styled-components";
import Applinks from './Applinks';
import SocialLinks from './SocialLinks';
import './Footer.css';
import Logo from '../assets/Logo.png';

// Styled Components for additional styling
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 150px;
  background-color: #FBFBE2;
  color: #ffffff;
  padding: 60px 0 30px;
  z-index: 1000;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

function Footer() {
  return (
    <>
      {/* Waves */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Footer Content */}
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <div className="flex justify-center sm:justify-start">
              <img
                className="h-[100px]"
                src={Logo}
                alt="Logo"
              />
            </div>
            <p className="mt-6 max-w-md mx-auto sm:max-w-xs sm:text-left text-[#3d3d3b] mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
            <Applinks />
          </FooterSection>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            {[ 
              { title: 'About Us', links: ['Company History', 'Meet the Team', 'Employee Handbook', 'Careers'] },
              { title: 'Our Services', links: ['Web Development', 'Web Design', 'Marketing', 'Google Ads'] },
              { title: 'Helpful Links', links: ['FAQs', 'Support', 'Live Chat'] },
              { title: 'Contact Us', links: ['Email', 'Phone', 'Address'] },
            ].map((section, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="text-lg font-medium text-[#767522]">{section.title}</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a className="text-[#3d3d3b] transition hover:text-[#767522]/75" href="/">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </FooterContent>

        {/* Footer Bottom */}
        <div className="pt-6 mt-12 border-t border-gray-800">
          <SocialLinks />
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
