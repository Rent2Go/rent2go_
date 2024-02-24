import React, { useEffect, useState } from "react";
import BodyTypeFilter from "../FilterBoxes/BodyTypeFilter";
import FuelTypeFilter from "../FilterBoxes/FuelTypeFilter";
import GearTypeFilter from "../FilterBoxes/GearTypeFilter";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const FilterCard = (props: Props) => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state: any) => state.car);

  return (
    <>
      <div className="row mt-2">
        <div className="col-xl-12 col-4 col-md-12 mt-2">
          <BodyTypeFilter cars={cars} />
        </div>
        <div className="col-xl-12 col-4 col-md-12 mt-2">
          {" "}
          <FuelTypeFilter cars={cars} />
        </div>
        <div className="col-xl-12 col-4 col-md-12 mt-2">
          {" "}
          <GearTypeFilter cars={cars} />
        </div>
      </div>
      
    </>
  );
};

export default FilterCard;
