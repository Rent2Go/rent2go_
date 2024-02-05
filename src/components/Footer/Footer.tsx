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
              <li className="footerLi"><Link to="/our-team">Who we are</Link></li>
              <li className="footerLi"><Link to="https://tobeto.com/istanbul-kodluyor">Careers</Link></li>
              <li className="footerLi"><Link to="https://www.istka.org.tr/">Affiliates</Link></li>
              <li className="footerLi"><Link to="coming-soon">Media</Link></li>
            </ul>
          </div>


          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1600">
            <span className="footerTitle">Relational Pages</span>
            <ul className="footerUl grid">
              <li className="footerLi"><Link to="https://tobeto.com/istanbul-kodluyor">İstanbul Kodluyor</Link></li>
              <li className="footerLi"><Link to="https://tobeto.com/">Tobeto</Link></li>
              <li className="footerLi"><Link to="https://kodlama.io/">Kodlama.io</Link></li>
              <li className="footerLi"><Link to="https://www.enocta.com/">Enocta</Link></li>
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
