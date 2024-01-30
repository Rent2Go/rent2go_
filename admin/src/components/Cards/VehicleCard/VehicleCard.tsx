import React from "react";
import "./vehicleCard.css";
import { CarModel } from "../../../models/responses/cars/GetCar";
type Props = {
  car: CarModel;
};

const VehicleCard = (props: Props) => {
  return (
    <>
      <div className="vehicleCard shadow-rounded-box">
        <div className="carIDcontainer text-right">
          <small>{props.car.id}</small>
        </div>
        <div className="imgContainer">
          <img src={props.car.imageUrl} alt="carImg"/>
        </div>
        <div className="title">
          <p>
            {props.car.model.brandName} {props.car.model.name} {props.car.year}
          </p>
        </div>
        <div className="description">
          <p>{props.car.colorName}</p>
          <p>{props.car.bodyType}</p>
        </div>
      </div>
    </>
  );
};

export default VehicleCard;
