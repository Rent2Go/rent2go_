import React, { useState } from "react";
import { CFormCheck } from "@coreui/react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch, useSelector } from "react-redux";
import { removeBodyFilter, setBodyFilter } from "../../store/slices/filterSlice";

type Props = {
  cars: CarModel[];
};

const BodyTypeFilter = (props: Props) => {
  const [checkedStates, setCheckedStates] = useState<{ [key: string]: boolean }>({});

  const { cars: allCars } = useSelector((state: any) => state.car);
  const bodyFilter = useSelector((state: any) => state.filters.body);
 
  const dispatch = useDispatch();

  const handleBodyChange = (event: any, bodyType: string) => {
    const newValue = event.target.checked;

    setCheckedStates((prevState) => ({
      ...prevState,
      [bodyType]: newValue,
    }));

    if (newValue) {
      dispatch(setBodyFilter(bodyType));
    } else {
      dispatch(removeBodyFilter(bodyType));
    }
  };

  const allBodyTypes = allCars.map((car: CarModel) => car.bodyType);
  const uniqueBodyTypes = Array.from<string>(new Set(allBodyTypes));

  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Body Type</h6>
      </div>
      <div className="checkBoxRow">
        {uniqueBodyTypes.map((bodyType: any, index: number) => (
         
           

            <CFormCheck
            key={index}
            id={`flexCheckDefault-${bodyType}`}
            checked={checkedStates[bodyType] || false}
            onChange={(event) => handleBodyChange(event, bodyType)}
            label={bodyType}
          />
      
        ))}
      </div>
    </div>
  );
};

export default BodyTypeFilter;
