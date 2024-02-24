import React, { useEffect, useState } from "react";
import { CarItem } from "../../components";
import { RentalModel } from "../../models/responses/rentals/GetRental";
import RentalService from "../../services/RentalService";

type Props = {};

const ListRental: React.FC<Props> = () => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const getRentals = async () => {
    try {
      const response = await RentalService.getAll();
      setRentals(response.data.data);
    } catch (error) {
      console.log("Error fetching rentals", error);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  useEffect(() => {getRentals()},[])

  // Filter the rentals based on the filterStatus state
  const filteredRentals = rentals.filter(rental => {
    if (filterStatus === 'Active') {
      return rental.returnDate === null && !rental.car.active;
    } else if (filterStatus === 'Passive') {
      return rental.returnDate !== null || rental.car.active;
    } else {
      return true;
    }
  });

  return (
    <div className="booking container">
      <div className="secContainer">
        <div className="booking__wrapper">
          <div className="titleContainer">
            <h2>Rentals</h2>
          </div>

          <div className="filter__widget-wrapper">
            <div className="filter__widget-01">
              <select name="." title="." onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Passive">Passive</option>
              </select>
            </div>

            <div className="filter__widget-01">
              <select name="." title="." >
              {rentals.map((rental: RentalModel) => (
                <option key={rental.id} value={rental.startDate.toString()}>{formatDate(new Date(rental.startDate))}</option>
              ))}
              </select>
            </div>
          </div>

          <div className="booking__car-list">
            {filteredRentals.map((rental: RentalModel) => (
              <CarItem rental={rental} key={rental.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRental;