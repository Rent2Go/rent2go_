import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Auction,
  Navbar,
  Review,
  Search,
  Sellers,
  Trending,
  ScrollToTop,
  Footer,
  Specials,
} from "../../components";
import Aos from "aos";
import "aos/dist/aos.css";
import "./homepage.css";


type Props = {};

const Homepage = (props: Props) => {
  const settings = useSelector((state: any) => state.settings.setting);
  const { t } = useTranslation();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleScrollToSearch = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (i18n.isInitialized) {
      Aos.init({ duration: 3000, offset: 20 });
    } else {
      i18n.on("initialized", () => {
        Aos.init({ duration: 3000, offset: 20 });
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{settings.title} - HomePage </title>
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <div className="home">
        <div className="secContainer">
          <div data-aos="fade-up" className="homeText">
            <span className="homeSpan"> {t("meetYourNewCar")}</span>
            <h1 className="homeTitle"> {t("safeComfortableDriving")}</h1>
            <div className="btns flex">
              <button
                type="button"
                onClick={handleScrollToSearch}
                data-aos="fade-right"
                className="btn"
              >
                {t("moreDetails")}
              </button>
              <Link
                to="/contact"
                type="button"
                data-aos="fade-left"
                className="btn primaryBtn"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
          <div className="homeImage" data-aos="fade-down-right">
            <img
              src="assets/img/carModels/homeCar.png"
              alt="homeImage"
            />
          </div>
        </div>
      </div>
      <div ref={searchRef}>
        <Search />
      </div>
      <Trending />
      <Sellers />
      <Specials/>
      <Auction handleScrollToSearch={handleScrollToSearch} />
      <Review />
      <Footer />
    </>
  );
};

export default Homepage;
