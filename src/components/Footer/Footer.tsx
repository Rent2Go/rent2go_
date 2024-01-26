import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1000">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affiliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>


          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1600">
            <span className="footerTitle">Relational Pages</span>
            <ul className="footerUl grid">
              <li className="footerLi">İstanbul Kodluyor</li>
              <li className="footerLi">Tobeto</li>
              <li className="footerLi">Kodlama.io</li>
              <li className="footerLi">Enocta</li>
            </ul>
          </div>

          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1800">
            <span className="footerTitle">Booking Support</span>
            <ul className="footerUl grid">
              <li className="footerLi"><Link to="/contact">Contact Us</Link></li>
              <li className="footerLi"><Link to="/cookie-policy">Cookies</Link></li>
              <li className="footerLi"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="footerLi"><Link to="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lowerSection grid" data-aos="fade-up" data-aos-duration="1200">
        <p> © {currentYear} All rights reserved by </p>
        <blockquote>Rent2Go Projects</blockquote>
      </div>
    </div>
  );
};

export default Footer;
