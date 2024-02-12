import React, { useEffect, useState } from "react";
import RentalService from "../../services/RentalService";
import { Navbar, Footer, CustomerCard, PriceCard } from "../../components";

import "./reservationPage.css";
import { useParams } from "react-router-dom";
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";


type Props = {};

const ReservationPage: React.FC<Props> = (props) => {
  const params = useParams<{ id: string }>();
  const [rentals, setRentals] = useState<CarModel | undefined>();


  useEffect(() => {
    if (params.id) {
      getRentals(params.id);
    }
  }, [params.id]);

  const getRentals = async (id: string) => {
    try {
      const response = await CarService.getById(parseInt(id));
      setRentals(response.data.data);
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="reservation ">
        <div className="secContainer">
          <div className="secHeading">
            <h5>Reservation</h5>
          </div>
          <div className="secContent">
           
            <div className="customerCard">
              <CustomerCard />
            </div>
             <div className="rentalCard"></div>
            <div className="priceCard">
              <PriceCard />
            </div>

            <img src={rentals?.imageUrl} alt="carImage" />
            <ul>
              <li key={rentals?.id}>
                Brand: {rentals?.model?.brand.name}, Car ID: {rentals?.id}
              </li>
              <li>Model: {rentals?.model?.name} </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage;
