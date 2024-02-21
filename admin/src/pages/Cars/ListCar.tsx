import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

import VehicleCard from "../../components/Cards/VehicleCard/VehicleCard";
import CarService from "../../services/CarService";
import { CarModel } from "../../models/responses/cars/GetCar";

import "./styles/cars.css";
import { Form } from "react-bootstrap";

type Props = {};

const ListCar: React.FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cars, setCars] = useState<CarModel[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 500;
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
        filtered = filtered.filter(carMatchesSearchTerm);
    }

    if (selectedStatus === "active") {
        filtered = filtered.filter((car) => car.active);
    } else if (selectedStatus === "passive") {
        filtered = filtered.filter((car) => !car.active);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

    setFilteredCars(currentItems);
    console.log("Filtered Cars:", currentItems);
};

const carMatchesSearchTerm = (car:CarModel) => {
    return (
        car.color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.fuelType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.gearType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.enginePower.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toString().includes(searchTerm) ||
        car.bodyType.toLowerCase().includes(searchTerm.toLowerCase())
    );
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

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    setSelectedStatus(event.target.value);
    console.log('handleStatusChange called' + event.target.value);
  }

  const chooseStatus = (car : CarModel) => {
    if(!selectedStatus){
      return true;
    }
    return car.active.toString() === selectedStatus;
  }
  return (
    <div className="cars ">
      
      <div className="secContainer">
        <div className="headerContainer">
          <div className="pageTitle">
            <h2>Car List</h2>
            <Form.Select value={selectedStatus} onChange={handleStatusChange}>
            <option value="">All Cars</option>
            <option value="active">Active</option>
            <option value="passive">Passive</option>
          </Form.Select>
          </div>
          <div className="rightContainer">
            <div className="filterContainer">
              <div className="shadow-rounded-box searchDiv">
                <input
                  name="search"
                  className="searchInput form-control"
                  type="text"
                  placeholder="Search ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="addBtnContainer">
              <Link title="Add New Car" to="/add-car"><IoMdAdd /></Link>
            </div>
          </div>
        </div>

        <div className="cardContainer grid shadow-rounded-box">
          {filteredCars.map((car: CarModel) => (
            <VehicleCard car={car} key={car.id} />
          ))}
        </div>
        <div className="paginationContainer flex justify-flex-end"></div>
      </div>
    </div>
  );
};

export default ListCar;
