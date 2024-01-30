import React from "react";
import { CFormCheck } from "@coreui/react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useSelector } from "react-redux";

type Props = {
cars: CarModel[]
};

const BodyTypeFilter = (props: Props) => {


  const { cars:cars } = useSelector((state: any) => state.car);

  const allBodyTypes = cars.map((car:CarModel) => car.bodyType);
  const uniqueBodyTypes = Array.from<string>(new Set(allBodyTypes));
  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Body Type</h6>
      </div>
      <div className="checkBoxRow">
        {uniqueBodyTypes.map((bodyType ,index:number) => (
          <CFormCheck
            key={index}
            id={`flexCheckDefault-${bodyType}`}
            label={bodyType} 
          />
        ))}
      </div>
    </div>
  );
};

export default BodyTypeFilter;
