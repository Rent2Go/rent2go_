import React, { useEffect, useState } from "react";
import { CarList, Navbar, Footer, FilterCard } from "../../components";
import { useSelector } from "react-redux";
import CarService from "../../services/CarService";
import { CarModel } from "../../models/responses/cars/GetCar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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
          <div className="secHeading flex shadow-rounded-box">
            <h3 className="secTitle">Cars (date filter & orderBy will be replace) </h3>
            <div className="navBtns flex"></div>
          </div>
          <div className="secContent grid">
            <div className="filterContainer">
              <FilterCard />
            </div>
            <div className="carContainer grid">
              {cars.map((car: CarModel) => (
                <div className="singleCar grid" key={car.id}>
                  <CarList car={car} /> {""}
                </div>
              ))}
              <div className="paginationContainer flex justify-flex-end">
                <Stack spacing={5}>
                  <Pagination count={10} color="standard" />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarPage;
