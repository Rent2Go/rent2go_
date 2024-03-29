// React imports
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { fetchCarData } from "../../store/slices/carSlice";
import { AppDispatch } from "../../store/store";

// Component imports
import {
  CarList,
  Navbar,
  Footer,
  FilterCard,
  GetDateFilter,
  Search,
} from "../../components";
import { FaSearch } from "react-icons/fa";
import { PiSortDescending, PiSortAscending } from "react-icons/pi"; 

import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

// Model imports
import { CarModel } from "../../models/responses/cars/GetCar";

// Translation imports
import { useTranslation } from "react-i18next";
import { resetFilters } from "../../store/slices/filterSlice";
import { Link } from "react-router-dom";

type Props = {};

const CarPage: React.FC<Props> = (props) => {
  const settings = useSelector((state: any) => state.settings.setting);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { cars } = useSelector((state: any) => state.car);
  const filters = useSelector((state: any) => state.filters);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<"asc" | "desc">("asc"); // Sıralama türü durum değişkeni
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchCarData());
    dispatch(resetFilters());
  }, [dispatch]);

  const paginate = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const applyFilters = () => {
    setCurrentPage(1);
  };

  const toggleSortType = () => {
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  const filteredCars = cars.filter((car: CarModel) => {
    let passesFilters = true;

    if (filters.body && filters.body.length > 0) {
      passesFilters =
        passesFilters &&
        filters.body.some((filter: string) => car.bodyType.includes(filter));
    }

    if (filters.gear && filters.gear.length > 0) {
      passesFilters =
        passesFilters &&
        filters.gear.some((filter: string) => car.gearType.includes(filter));
    }

    if (filters.fuel && filters.fuel.length > 0) {
      passesFilters =
        passesFilters &&
        filters.fuel.some((filter: string) => car.fuelType.includes(filter));
    }
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      passesFilters =
        passesFilters &&
        (car.color.name.toLowerCase().includes(searchTermLower) ||
          car.model.brand.name.toLowerCase().includes(searchTermLower) ||
          car.model.name.toLowerCase().includes(searchTermLower) ||
          car.fuelType.toLowerCase().includes(searchTermLower) ||
          car.gearType.toLowerCase().includes(searchTermLower) ||
          car.enginePower.toLowerCase().includes(searchTermLower) ||
          car.year.toString().includes(searchTerm) ||
          car.bodyType.toLowerCase().includes(searchTermLower));
    }

    return passesFilters;
  });

  const totalFilteredCars = filteredCars.length;
  const totalPages = Math.ceil(totalFilteredCars / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <>
      <Helmet>
        <title>{settings.title} - {t("cars")} </title>
        <meta name="description" content="car page description" />
      </Helmet>
      <Navbar />
      <div className="carPage container">
        <div className="secContainer ">
          <div className="secHeading shadow-rounded-box">
            <Search />
          </div>
          <div className="secContent grid">
            <div className="filterContainer">
              <FilterCard />
            </div>
            <div className="carContainer grid">
              <div className="shadow-rounded-box searchDiv">
                <label htmlFor="search">{t("search")}:</label>
                <input
                  name="search"
                  className="searchInput"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t("search")+"..."}
                />
                <button
                  type="button"
                  className="btn btn-sm"
                  title="order"
                  onClick={toggleSortType}
                >
                  {sortType === "asc" ? (
                    <PiSortAscending />
                  ) : (
                    <PiSortDescending />
                  )}
                </button>
              </div>

              {currentCars
                .sort((a: CarModel, b: CarModel) =>
                  sortType === "asc" ? a.id - b.id : b.id - a.id
                )
                .map((car: CarModel) => (
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
