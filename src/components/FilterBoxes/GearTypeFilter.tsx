import { CFormCheck } from "@coreui/react";
import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";

type Props = {
  cars: CarModel[];
};

const GearTypeFilter = (props: Props) => {
  const allGearTypes = props.cars.map((car) => car.gearType);
  const uniqueGearTypes = Array.from(new Set(allGearTypes));

  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Gear Type</h6>
      </div>
      <div className="checkBoxRow">
      {uniqueGearTypes.map((gearType) => (
          <CFormCheck
            key={gearType}
            id={`flexCheckDefault-${gearType}`}
            label={gearType}
          />
        ))}
      </div>
    </div>
  );
};

export default GearTypeFilter;
