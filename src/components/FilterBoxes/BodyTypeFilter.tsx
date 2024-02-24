import React, { useState } from "react";
import { CFormCheck } from "@coreui/react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBodyFilter,
  setBodyFilter,
} from "../../store/slices/filterSlice";
import { useTranslation } from "react-i18next";

type Props = {
  cars: CarModel[];
};

const BodyTypeFilter = (props: Props) => {
  const { t } = useTranslation();

  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({});

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
    <div className="container-fluid shadow-rounded-box filterBoxContainer">
      <div className="row">
        <div className="col-12">
          <h6>{t("bodyType")}</h6>
        </div>
        <div className="col-12">
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
    </div>
  );
};

export default BodyTypeFilter;
