import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "./trending.css";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>
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
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv" data-aos="fade-up" data-aos-duration="2500">
              <img src="assets/img/carModels/mercedesc200-beyaz.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="imgDiv"
            >
              <img src="assets/img/carModels/bmw320-kırmızı.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
