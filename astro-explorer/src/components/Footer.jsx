import React from 'react';
import logo from '../assests/astro-fetch-logo.png';
import back from '../assests/footer_back.png';
import nasaLogo from '../assests/icons/nasa_logo.png'
import fbLogo from '../assests/icons/socialMedia/facebook.png'
import instaLogo from '../assests/icons/socialMedia/instagram.png'
import twitterLogo from '../assests/icons/socialMedia/twitter.png'
import linkdeinLogo from '../assests/icons/socialMedia/linkdein.png'

const Footer = () => {
  return (
    <footer className="footer  text-white p-4 bg-cover bg-center  " style={{ backgroundImage: `url(${back})` }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img src={logo} alt="Your Logo" className="footer-logo h-64" />
        <div className="flex space-x-4">
          <a href="https://www.flaticon.com/free-icons/facebook"><img src={fbLogo} alt="Facebook" className="social-icon h-8" /></a>
          <a href="#"><img src={instaLogo} alt="Twitter" className="social-icon h-8" /></a>
          <a href="#"><img src={twitterLogo} alt="Instagram" className="social-icon h-8" /></a>
          <a href="#"><img src={linkdeinLogo} alt="LinkedIn" className="social-icon h-8" /></a>
        </div>
        <img src={nasaLogo} alt="NASA Logo" className="nasa-logo h-24" />
      </div>
    </footer>
  );
};

export default Footer;
