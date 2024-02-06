import React, { useEffect, useState } from "react";
import "./styles/rentals.css";
import { CarItem } from "../../components";
import { RentalModel } from "../../models/responses/rentals/GetRental";
import RentalService from "../../services/RentalService";
type Props = {};

const ListRental = (props: Props) => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);

  const getRentals = async () => {
    try {
      const response = await RentalService.getAll();
      setRentals(response.data.data);
    } catch (error) {
      console.log("Error fetching rentals", error);
    }
  };

  useEffect(() => {getRentals();})
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
            {rentals.map((rental: RentalModel) => (
              <CarItem rental={rental} key={rental.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRental;
