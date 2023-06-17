/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section f1">
        <h4>About Us</h4>
        <p>OST Placement Search Private Limited is a boutique recruitment company primarily engaged in high-end analytics/big data and consulting-related recruitments. With our consistent and dedicated effort, OST has become a strong support to an increasing number of respected MNCs operating in emerging markets today.</p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <h6>Phone: 123-456-7890</h6>
        <h6>Email: abhishek@osttalent.com</h6>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/osttalnt/"  
          target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/osttalent/?originalSubdomain=in" 
          target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="http://www.osttalent.com/" 
          target="_blank" rel="noopener noreferrer"><CgWebsite/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
