import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { BiTachometer, BiCylinder, BiSolidDollarCircle } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";

import { PiEngine } from "react-icons/pi";

import "../../pages/CarPage/carPage.css";
import { Link } from "react-router-dom";

type Props = {
  car: CarModel;
};

const CarCards = (props: Props) => {
  return (
    <>
      {
        <div className="grid">
          <div className="imgDiv">
            <img src={props.car.imageUrl} alt="carImage" />
          </div>
          <div className="descriptionDiv">
            <p className="carTitle">
              {props.car.model.brandName} {props.car.model.name}{" "}
              {props.car.year}
            </p>
            <div>
              <span className="carLabel">
                <BiTachometer />{" "}
              </span>
              <span className="miles">{props.car.kilometer} km</span>
            </div>

            <div>
              <span className="carLabel">
                <PiEngine />{" "}
              </span>
              <span className="AWD">
                {props.car.enginePower} / {props.car.cylinderCount}
              </span>
            </div>

            <div>
              <span className="carLabel">
                <IoIosColorPalette />{" "}
              </span>
              <span className="miles">{props.car.colorName}</span>
            </div>
          </div>
          <div className="actionDiv">
            <div className="actionRow mb-4">
              {" "}
              <span className="carLabel">
                <BiSolidDollarCircle />
              </span>
              <span className="price">{props.car.dailyPrice}</span>
            </div>
            <div className="actionRow">
              <Link to="/reservation" className="btn text btnPrimary">
                Make Reservation
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CarCards;
