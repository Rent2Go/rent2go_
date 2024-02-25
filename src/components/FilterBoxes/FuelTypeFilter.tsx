import { CFormCheck } from "@coreui/react";
import React, { useState } from "react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFuelFilter,
  setFuelFilter,
} from "../../store/slices/filterSlice";
import { useTranslation } from "react-i18next";

type Props = {
  cars: CarModel[];
};

const FuelTypeFilter = (props: Props) => {
  const { t } = useTranslation();

  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({});

  const dispatch = useDispatch();

  const handleBodyChange = (event: any, fuelType: string) => {
    const newValue = event.target.checked;

    setCheckedStates((prevState) => ({
      ...prevState,
      [fuelType]: newValue,
    }));

    if (newValue) {
      dispatch(setFuelFilter(fuelType));
    } else {
      dispatch(removeFuelFilter(fuelType));
    }
  };

  const allFuelType = props.cars.map((car) => car.fuelType);
  const uniqueFuelTypes = Array.from(new Set(allFuelType));
  return (
    <div className="container-fluid shadow-rounded-box filterBoxContainer">
      <div className="row">
        <div className="col-12">
          <h6>{t("fuelType")}</h6>
        </div>
        <div className="col-12">
          {uniqueFuelTypes.map((fuelType, index) => (
            <CFormCheck
              key={index}
              id={`flexCheckDefault-${fuelType}`}
              checked={checkedStates[fuelType] || false}
              label={t(fuelType).toUpperCase()}
              value={fuelType}
              onChange={(event) => handleBodyChange(event, fuelType)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuelTypeFilter;
