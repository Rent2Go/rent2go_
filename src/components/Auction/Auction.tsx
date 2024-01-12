import React from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import car1 from "../../assets/img/carModels/mercedesc200-beyaz.png";
import car2 from "../../assets/img/carModels/peugeot-2008-siyah.png";
import car3 from "../../assets/img/carModels/minicooper-s-mavi.png";
import car4 from "../../assets/img/carModels/renault-clio-beyaz.png";
import car5 from "../../assets/img/carModels/renault-megane-gri.png";
import car6 from "../../assets/img/carModels/renault-clio-kırmızı.png";

import "./auction.css";

type Props = {};

const Action = (props: Props) => {
  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car2} alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car4} alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car5} alt="carImage" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car6} alt="carImage" />
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
