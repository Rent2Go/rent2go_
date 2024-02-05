import React from "react";
import { RentalModel } from "../../models/responses/rentals/GetRental";

type Props = {
  rental: RentalModel;
};

const CarItem = (props: Props) => {


  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{props.rental.car.plate}</h3>
          <span>
            <i className="ri-heart-line"></i>
          </span>
        </div>
        <p>{}</p>
      </div>

      <div className="car__img">
        <img src={props.rental.car.imageUrl} alt={props.rental.car.colorName} />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i className="ri-user-line"></i>  startDate {props.rental.startDate}
          </p>
          <p>
            <i className="ri-repeat-line"></i>
            endDate {props.rental.endDate}
          </p>
        </div>

        <p className="car__rent">${props.rental.car.dailyPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
