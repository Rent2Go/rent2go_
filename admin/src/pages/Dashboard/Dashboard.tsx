// Dashboard.tsx
import React from "react";

import { RecommendedCarCard, SingleCard } from "../../components";
import "./dashboard.css";
import MileChart from "../../charts/MileChart";
import CharStatsChart from "../../charts/CarStatsChart";
import recommendedCars from "../../components/UI/recommendedCarsData"; 

type Props = {};

const carObj = {
  title: "Total Cars",
  totalNumber: "750",
  icon: "ri-police-car-line",
};
const tripObj = {
  title: "Daily Trips",
  totalNumber: "1697",
  icon: "ri-steering-2-line",
};
const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};
const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: "2167",
  icon: "ri-timer-flash-line",
};

const Dashboard = (props: Props) => {
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
