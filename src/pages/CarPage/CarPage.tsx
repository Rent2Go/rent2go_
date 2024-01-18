import React, { useEffect, useState } from "react";
import { CarList, Navbar, Footer } from "../../components";
import { useSelector } from "react-redux";
import CarService from "../../services/CarService";
import { CarModel } from "../../models/responses/cars/GetCar";

import "./carPage.css";
type Props = {};

const CarPage = (props: Props) => {
  const [cars, setCars] = useState<CarModel[]>([]);

  const carsState = useSelector((state: any) => state.car);
  useEffect(() => {
    console.log(carsState);
    getCars();
  }, []);

  const getCars = async () => {
    const carService = new CarService();
    const response = await carService.getAll();
    setCars(response.data.data);
  };

  return (
    <>
      <Navbar />

      <div className="carPage container">
        <div className="secContainer ">
          <div className="secHeading flex">
            <h3 className="secTitle">Cars</h3>
            <div className="navBtns flex"></div>
          </div>
          <div className="secContent grid">
          <div className="filterContainer">
            fdflkdldkg
          </div>
          <div className="carContainer grid">
            {cars.map((car: CarModel) => (
              <div className="singleCar grid" key={car.id}>
                <CarList car={car} /> {""}
              </div>
            ))}
          </div>
          </div>
         
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarPage;
