import React from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import './auctions.css';

type Props = {};

const Action = (props: Props) => {
  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex" data-aos="fade-up" data-aos-duration="2000">
          <h3 className="secTitle" >Active Auctions</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/mercedesc200-beyaz.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/peugeot-2008-siyah.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/minicooper-s-mavi.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/renault-clio-beyaz.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/renault-megane-gri.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive" data-aos="fade-up" data-aos-duration="5000">
            <div className="imgDiv">
              <img src="assets/img/carModels/renault-clio-kırmızı.png" alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
