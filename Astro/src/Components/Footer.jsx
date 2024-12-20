import React from 'react';
import styled from "styled-components";
import Applinks from './Applinks';
import SocialLinks from './SocialLinks';
import './Footer.css';

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
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Logo & Social Links */}
            <div>
              <div className="flex justify-center sm:justify-start">
                <img
                  className="h-8"
                  src="your-logo-url-here" // replace with actual logo URL
                  alt="Logo"
                />
              </div>
              <p className="max-w-md mx-auto mt-6 text-center sm:max-w-xs sm:mx-0 sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                consequuntur amet culpa cum itaque neque.
              </p>
              <Applinks />
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
              {[ 
                { title: 'About Us', links: ['Company History', 'Meet the Team', 'Employee Handbook', 'Careers'] },
                { title: 'Our Services', links: ['Web Development', 'Web Design', 'Marketing', 'Google Ads'] },
                { title: 'Helpful Links', links: ['FAQs', 'Support', 'Live Chat'] },
                { title: 'Contact Us', links: ['Email', 'Phone', 'Address'] },
              ].map((section, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">{section.title}</p>
                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <a className="text-white transition hover:text-white/75" href="/">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 mt-12 border-t border-gray-800">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
