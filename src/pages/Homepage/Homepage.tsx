import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
import {
  Auction,
  Navbar,
  Review,
  Search,
  Sellers,
  Trending,
  ScrollToTop ,
  Footer
} from "../../components";
import Aos from "aos";
import "aos/dist/aos.css";
import "./homepage.css";

type Props = {};

const Homepage = (props: Props) => {
  const {t} = useTranslation();
  useEffect(() => {
    if (i18n.isInitialized) {
      Aos.init({ duration: 3000, offset: 20 });
    } else {
      i18n.on('initialized', () => {
        Aos.init({ duration: 3000, offset: 20 });
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="home">
        <div className="secContainer">
          <div data-aos="fade-up" className="homeText">
            <span className="homeSpan"> {t('meetYourNewCar')}</span>
            <h1 className="homeTitle"> {t('safecomfortableDriving')}</h1>
            <div className="btns flex">
              <button type="button" data-aos="fade-right" className="btn">
                {t('moreDetails')}
              </button>
              <button
                type="button"
                data-aos="fade-left"
                className="btn primaryBtn"
              >
                 {t('testDrive')}
              </button>
            </div>
          </div>
          <div className="homeImage" data-aos="fade-down-right">
            <img src="assets/img/carModels/toyota-corolla-beyaz.png" alt="homeImage" />
          </div>
        </div>
      </div>
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </>
  );
};

export default Homepage;
