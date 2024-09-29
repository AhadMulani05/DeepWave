import React from 'react';
import './Footer.css';  // Assuming you will move the CSS to an external file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      <div className="footer-heading">
      <div className="img"></div>  
      <h3>DeepWave</h3>
    </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h2>About Us</h2>
            <ul>
              <li><a href="#company">Company</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#skill">Skill</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Support</h2>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#premium-support">Premium Support</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ height: '10px' }}>
        <div className="footer-copy">
          <p>&copy; 2024 ReelFishry. All rights reserved.</p>
          <a href="#">Terms</a>
          <a href="#">Privacy (Updated 08/2024)</a>
          <a href="#">Manage cookies</a>
          <a href="#">Do not share my personal information</a>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
