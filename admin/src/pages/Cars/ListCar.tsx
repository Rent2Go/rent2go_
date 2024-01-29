import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

import VehicleCard from "../../components/Cards/VehicleCard/VehicleCard";
import CarService from "../../services/CarService";
import { CarModel } from "../../models/responses/cars/GetCar";

import "./styles/cars.css";
import { useSelector } from "react-redux";

type Props = {};

const ListCar: React.FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cars, setCars] = useState<CarModel[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  const carsState = useSelector((state: any) => state.car);

  const getCars = async () => {
    try {
      const response = await CarService.getAll();
      setCars(response.data.data);
      console.log(response.data.data);
      setIsInitialLoad(false);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const filterCars = () => {
    let filtered = cars;

    if (searchTerm) {
      filtered = filtered.filter(
        (car) =>
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
    console.log("Filtered Cars:", currentItems);
  };

  useEffect(() => {
    getCars();
    if (!isInitialLoad) {
      filterCars();
    }
  }, [searchTerm, isInitialLoad, currentPage]);
  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className="cars container">
      <div className="secContainer">
        <div className="pageTitle">
          <h2>Car List</h2>
        </div>
        <div className="filterContainer">
          <div className="shadow-rounded-box searchDiv">
            <label htmlFor="search">Search:</label>
            <input
              name="search"
              className="searchInput form-control"
              type="text"
              placeholder="Search by Model, Brand, Color, Year, Fuel Type, Body Type and Gear Type...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {filteredCars.map((car: CarModel) => (
          <div className="cardContainer" key={car.id}>
            <VehicleCard car={car} />
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
  );
};

export default ListCar;
