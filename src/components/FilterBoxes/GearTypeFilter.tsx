import { CFormCheck } from "@coreui/react";
import React, { useState } from "react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch } from "react-redux";
import { removeFuelFilter, removeGearFilter, setFuelFilter, setGearFilter } from "../../store/slices/filterSlice";

type Props = {
  cars: CarModel[];
};

const GearTypeFilter = (props: Props) => {
  const [checkedStates, setCheckedStates] = useState<{ [key: string]: boolean }>({});

  const dispatch = useDispatch();

  const handleBodyChange = (event: any, gearType: string) => {
    const newValue = event.target.checked;

    setCheckedStates((prevState) => ({
      ...prevState,
      [gearType]: newValue,
    }));

    if (newValue) {
      dispatch(setGearFilter(gearType));
    } else {
      dispatch(removeGearFilter(gearType));
    }
  };



  const allGearType = props.cars.map((car) => car.gearType);
  const uniqueGearTypes = Array.from(new Set(allGearType));
  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Fuel Type</h6>
      </div>
      <div className="checkBoxRow">
        {uniqueGearTypes.map((gearType, index) => (

          <CFormCheck
            key={index}
            id={`flexCheckDefault-${gearType}`}
            checked={checkedStates[gearType] || false}
            label={gearType}
            value={gearType}
            onChange={(event) => handleBodyChange(event, gearType)}
          />

        ))}
      </div>
    </div>
  );
};

export default GearTypeFilter;
