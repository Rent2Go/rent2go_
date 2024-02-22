import React, { useEffect, useState } from "react";
import { RecommendedCarCard, SingleCard } from "../../components";
import "./dashboard.css";
import MileChart from "../../charts/MileChart";
import CharStatsChart from "../../charts/CarStatsChart";
import recommendedCars from "../../components/UI/recommendedCarsData";
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";

type Props = {};

const Dashboard: React.FC<Props> = (props) => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [carObj, setCarObj] = useState({
    title: "Total Cars",
    totalNumber: 0,
    icon: "ri-police-car-line",
  });
  const [tripObj, setTripObj] = useState({
    title: "Daily Trips",
    totalNumber: 0,
    icon: "ri-steering-2-line",
  });
  const [clientObj, setClientObj] = useState({
    title: "Clients Annually",
    totalNumber: 0,
    icon: "ri-user-line",
  });
  const [distanceObj, setDistanceObj] = useState({
    title: "Kilometers Daily",
    totalNumber: 0,
    icon: "ri-timer-flash-line",
  });

  const getPropertiesCount = (car: CarModel): number => {
    return Object.keys(car).length;
  };

  const getCars = async () => {
    try {
      const response = await CarService.getAll();
      setCars(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    const updatedCarObj = {
      ...carObj,
      totalNumber: cars.length,
    };
    setCarObj(updatedCarObj);
  }, [cars]);

  useEffect(() => {
    const updatedTripObj = {
      ...tripObj,
      totalNumber: cars.length,
    };
    setTripObj(updatedTripObj);
  }, [cars]);

  useEffect(() => {
    const updatedClientObj = {
      ...clientObj,
      totalNumber: cars.length,
    };
    setClientObj(updatedClientObj);
  }, [cars]);

  useEffect(() => {
    const updatedDistanceObj = {
      ...distanceObj,
      totalNumber: cars.length,
    };
    setDistanceObj(updatedDistanceObj);
  }, [cars]);

  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3>Miles Statics</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3>Car Statics</h3>
            <CharStatsChart />
          </div>
        </div>
        <div className="recommended__cars-wrapper">
        {recommendedCars.map((car) => (
            <RecommendedCarCard key={car.id} item={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
