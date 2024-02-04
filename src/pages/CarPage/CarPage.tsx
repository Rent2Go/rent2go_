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
import { CarModel } from "../../models/responses/cars/GetCar";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { fetchCarData } from "../../store/slices/carSlice";
import { AppDispatch } from "../../store/store";

type Props = {};

const CarPage: React.FC<Props> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars } = useSelector((state: any) => state.car);
  const filters = useSelector((state: any) => state.filters);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =5;



  useEffect(() => {
    dispatch(fetchCarData());
  }, [dispatch]);

  const paginate = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const applyFilters = () => {

    setCurrentPage(1);
  };

  // Filtrelenmiş araçları al
  const filteredCars = cars.filter((car: CarModel) => {
    if (filters.body && filters.body.length > 0) {
      if (!filters.body.some((filter: string) => car.bodyType.includes(filter))) {
        return false;
      }
    }

    if (filters.gear && filters.gear.length > 0) {
      if (!filters.gear.some((filter: string) => car.gearType.includes(filter))) {
        return false;
      }
    }

    if (filters.fuel && filters.fuel.length > 0) {
      if (!filters.fuel.some((filter: string) => car.fuelType.includes(filter))) {
        return false;
      }
    }

    return true;
  });


  const totalFilteredCars = filteredCars.length;
  const totalPages = Math.ceil(totalFilteredCars / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="carPage container">
        <div className="secContainer ">
          <div className="mt-5 secHeading flex shadow-rounded-box">
            <GetDateFilter />
            <button
              className="btn text btnPrimary"
              onClick={applyFilters}
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
                />
              </div>

              {currentCars.map((car: CarModel) => (
                <div className="singleCar grid" key={car.id}>
                  <CarList car={car} />
                </div>
              ))}

              <div className="paginationContainer flex justify-flex-end">
                <Stack spacing={5}>
                  <Pagination
                    count={totalPages}
                    color="standard"
                    onChange={paginate}
                    page={currentPage}
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
