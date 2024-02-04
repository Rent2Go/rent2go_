import React from "react";
import carData from "./bookingCarsData";
import "./styles/rentals.css";
import { CarItem } from "../../components";
type Props = {};

const ListRental = (props: Props) => {
  return (
    <div className="booking container">
      <div className="secContainer">
        <div className="booking__wrapper">
          <div className="titleContainer">
            <h2>Rentals</h2>
          </div>

          <div className="filter__widget-wrapper">
            <div className="filter__widget-01">
              <select name="." title=".">
                <option value="New">New</option>
                <option value="Popular">Popular</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>

            <div className="filter__widget-01">
              <select name="." title=".">
                <option value="toyota">Toyota</option>
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="booking__car-list">
            {carData?.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRental;
