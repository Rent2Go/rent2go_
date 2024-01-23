import { CFormCheck } from "@coreui/react";
import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";

type Props = {
  cars: CarModel[];
};

const FuelTypeFilter = (props: Props) => {
  const allFuelType = props.cars.map((car) => car.fuelType);
  const uniqueFuelTypes = Array.from(new Set(allFuelType));
  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Fuel Type</h6>
      </div>
      <div className="checkBoxRow">
        {uniqueFuelTypes.map((fuelType) => (
          <CFormCheck
            key={fuelType}
            id={`flexCheckDefault-${fuelType}`}
            label={fuelType}
          />
        ))}
      </div>
    </div>
  );
};

export default FuelTypeFilter;
