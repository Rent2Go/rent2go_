import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
type Props = {};

const Footer = (props: Props) => {
  const {t} = useTranslation();
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1000">
            <span className="footerTitle">{t("about")}</span>
            <ul className="footerUl grid">
              <li className="footerLi"><Link to="/our-team">{t("whoWeAre")}</Link></li>
              <li className="footerLi"><Link to="https://tobeto.com/istanbul-kodluyor">{t("careers")}</Link></li>
              <li className="footerLi"><Link to="https://www.istka.org.tr/">{t("affiliates")}</Link></li>
              <li className="footerLi"><Link to="coming-soon">{t("media")}</Link></li>
            </ul>
          </div>


          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1600">
            <span className="footerTitle">{t("relationalPages")}</span>
            <ul className="footerUl grid">
              <li className="footerLi"><Link to="https://tobeto.com/istanbul-kodluyor">{t("istanbulKodluyor")}</Link></li>
              <li className="footerLi"><Link to="https://tobeto.com/">Tobeto</Link></li>
              <li className="footerLi"><Link to="https://kodlama.io/">Kodlama.io</Link></li>
              <li className="footerLi"><Link to="https://www.enocta.com/">Enocta</Link></li>
            </ul>
          </div>

          <div className="singleGrid" data-aos="fade-up" data-aos-duration="1800">
            <span className="footerTitle">{t("bookingSupport")}</span>
            <ul className="footerUl grid">
              <li className="footerLi"><Link to="/contact">{t("contactUs")}</Link></li>
              <li className="footerLi"><Link to="/cookie-policy">{t("cookies")}</Link></li>
              <li className="footerLi"><Link to="/privacy-policy">{t("privacyPolicy")}</Link></li>
              <li className="footerLi"><Link to="/terms-of-use">{t("termsOfUse")}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lowerSection grid" data-aos="fade-up" data-aos-duration="1200">
        <p> © {currentYear} {t("allRightsReservedBy")} </p>
        <blockquote>{t("rent2GoProjects")}</blockquote>
      </div>
    </div>
  );
};

export default Footer;
