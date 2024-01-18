import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";
import "../../pages/CarPage/carPage.css";

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
            <h5 className="carTitle">
              {props.car.modelName} {props.car.year}{" "}
            </h5>
            <span className="miles">{props.car.kilometer}</span>
            <span className="AWD">
              {props.car.enginePower} {props.car.cylinderCount}
            </span>

            <div className="price_seller flex">
              <span className="price">{props.car.dailyPrice}</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CarCards;
