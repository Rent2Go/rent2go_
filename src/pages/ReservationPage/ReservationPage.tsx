import React, { useEffect, useState } from "react";
import { RentalModel } from "../../models/responses/rentals/GetRental";
import RentalService from "../../services/RentalService";
import { useSelector } from "react-redux";

type Props = { rental: RentalModel; rentals: RentalModel[]; };

const ReservationPage: React.FC<Props> = (props) => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);
  const rentalState = useSelector((state: any) => state.rentals);

  const getRentals = async () => {
    try {
      const rentalService = new RentalService();
      const response = await rentalService.getAll();
      setRentals(response.data.data);
      console.log("setRentals", response.data.data);
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getRentals();
    }
    fetchData();
    console.log(fetchData);
  }, []);

  return (
    <div>
      <h2>Rentals:</h2>
      <ul>
        {rentals.map((rental) => (
          <li key={rental.id} >
            Car ID: {rental.carId}, Rental ID: {rental.id}, Rental Name: {rental.customerId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationPage;
