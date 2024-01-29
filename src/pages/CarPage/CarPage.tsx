import React, { useEffect, useState } from "react";
import {
  CarList,
  Navbar,
  Footer,
  FilterCard,
  GetDateFilter,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

import CarService from "../../services/CarService";
import { CarModel } from "../../models/responses/cars/GetCar";
import Pagination from "@mui/material/Pagination";

import "./carPage.css";
import { Stack } from "@mui/material";
import { fetchCarData } from "../../store/slices/carSlice";
import { AppDispatch } from "../../store/store";

type Props = {};

const CarPage: React.FC<Props> = (props) => {

  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const dispatch = useDispatch<AppDispatch>()
  const { cars } = useSelector((state: any) => state.car);

  
  useEffect(() => {
    dispatch(fetchCarData())
    filterCars();
    setIsInitialLoad(false);
    if (!isInitialLoad) {
      filterCars();
    }
  }, [searchTerm, isInitialLoad, currentPage]);

  const filterCars = () => {
    let filtered = cars;

    if (searchTerm) {
      filtered = filtered.filter(
        (car: CarModel) =>
          car.colorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.brandName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          car.model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.fuelType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.gearType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.enginePower.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.year.toString().includes(searchTerm) ||
          car.bodyType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

    setFilteredCars(currentItems);

  };

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Navbar />

      <div className="carPage container">
        <div className="secContainer ">
          <div className="mt-5 secHeading flex shadow-rounded-box">
            <GetDateFilter />
            <button
              className="btn text btnPrimary"
              onClick={() => filterCars()}
            >
              <FaSearch /> Search
            </button>
            <div className="navBtns flex"></div>
          </div>
          <div className="secContent grid">
            <div className="filterContainer">
              <FilterCard />
            </div>
            <div className="carContainer grid">
              <div className="shadow-rounded-box searchDiv">
                <label htmlFor="search">Search:</label>
                <input
                  name="search"
                  className="searchInput"
                  type="text"
                  placeholder="Search by Model, Brand, Color, Year, Fuel Type, Body Type and Gear Type...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {filteredCars.map((car: CarModel) => (
                <div className="singleCar grid" key={car.id}>
                  <CarList car={car} />
                </div>
              ))}
              <div className="paginationContainer flex justify-flex-end">
                <Stack spacing={5}>
                  <Pagination
                    count={Math.ceil(cars.length / itemsPerPage)}
                    color="standard"
                    onChange={paginate}
                  />
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
