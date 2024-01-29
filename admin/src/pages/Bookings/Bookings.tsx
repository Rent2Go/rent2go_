import React from "react";
import carData from "./bookingCarsData";
import "./booking.css";
import { CarItem } from "../../components";
type Props = {};

const Bookings = (props: Props) => {
  return (
    <div className="booking container">
      <div className="secContainer">
        <div className="booking__wrapper">
          <h2 className="booking__title">Booking</h2>

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

export default Bookings;
