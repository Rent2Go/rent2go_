import React from "react";
import { CFormCheck } from "@coreui/react";
import { CarModel } from "../../models/responses/cars/GetCar";

type Props = {
  cars: CarModel[];
};

const BodyTypeFilter = (props: Props) => {
  const allBodyTypes = props.cars.map((car) => car.bodyType);
  const uniqueBodyTypes = Array.from(new Set(allBodyTypes));
  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Body Type</h6>
      </div>
      <div className="checkBoxRow">
        {uniqueBodyTypes.map((bodyType) => (
          <CFormCheck
            key={bodyType}
            id={`flexCheckDefault-${bodyType}`}
            label={bodyType}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyTypeFilter;
