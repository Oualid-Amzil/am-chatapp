import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__element">
          <h3>
            chat<span>app</span>
          </h3>
          <p>The last team chat you will ever need.</p>
        </div>
        <div className="footer__list">
          <div className="footer__element">
            <h4>Help</h4>
            <ul>
              <li>Support</li>
              <li>Knowledgebase</li>
              <li>Tutorials</li>
            </ul>
          </div>

          <div className="footer__element">
            <h4>Features</h4>
            <ul>
              <li>Screen Sharing</li>
              <li>IOS & Android Apps</li>
              <li>File Sharing</li>
              <li>User Management</li>
            </ul>
          </div>
          <div className="footer__element">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer__element">
            <h4>Contact Us</h4>
            <ul>
              <li>info@chatapp.com</li>
              <li>1-8000-200-300</li>
              <li>350 Deer Creek Rd Palo Alto. Ca</li>
            </ul>
          </div>
        </div>
      </div>
      <p>© Copyright ChatApp Inc.</p>
    </div>
  );
};

export default Footer;
