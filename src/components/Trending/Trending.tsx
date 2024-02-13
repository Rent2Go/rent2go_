import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

import "./trending.css";

type Props = {};

const Trending = (props: Props) => {
  const {t} = useTranslation();

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">{t("trendingNearYou")}</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="imgDiv"
            >
              <img src="assets/img/carModels/maserati-quattroporte-mavi.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Maserati Quattroporte 2008</h5>
            <span className="miles">{`83492 ${t("kilometer")}`}</span>
            <span className="AWD">AWD 400 hp Turbo</span>

            <div className="price_seller flex">
              <span className="price"><CiDiscount1 /></span>
              <span className="seller"><FaStar /></span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv" data-aos="fade-up" data-aos-duration="2500">
              <img src="assets/img/carModels/mercedesc200-beyaz.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Mercedes C-200 2020</h5>
            <span className="miles">{`12349 ${t("kilometer")}`}</span>
            <span className="AWD">136 hp Turbo</span>

            <div className="price_seller flex">
              <span className="price"><CiDiscount1 /></span>
              <span className="seller"><FaStar /></span>
            </div>
          </div>

          <div className="singleCar grid">
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="imgDiv"
            >
              <img src="assets/img/carModels/mercedesc180-siyah.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Mercedes C-180 2015</h5>
            <span className="miles">{`63403  ${t("kilometer")}`}</span>
            <span className="AWD">AWD 156 hp Turbo</span>

            <div className="price_seller flex">
              <span className="price"><CiDiscount1 /></span>
              <span className="seller"><FaStar /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
