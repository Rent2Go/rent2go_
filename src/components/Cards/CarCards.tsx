import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";

type Props = {
  car: CarModel;
};

const CarCards = (props: Props) => {
  return <div>{
    <div className="singleCar grid">
            <div
              className="imgDiv"
            >
              <img src={props.car.imageUrl} alt="carImage" />
            </div>
            <h5 className="carTitle">{props.car.modelName} {props.car.year} </h5>
            <span className="miles">{props.car.kilometer}</span>
            <span className="AWD">{props.car.enginePower} {props.car.cylinderCount}</span>

            <div className="price_seller flex">
              <span className="price">{props.car.dailyPrice}</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
    
    
    }</div>;
};

export default CarCards;
