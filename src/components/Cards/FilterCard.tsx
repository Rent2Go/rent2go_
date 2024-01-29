import React, { useEffect, useState } from "react";
import BodyTypeFilter from "../FilterBoxes/BodyTypeFilter";
import FuelTypeFilter from "../FilterBoxes/FuelTypeFilter";
import GearTypeFilter from "../FilterBoxes/GearTypeFilter";
import { CarModel } from "../../models/responses/cars/GetCar";
import { useDispatch, useSelector } from "react-redux";
type Props = {
};

const FilterCard = (props: Props) => {

  
  const dispatch = useDispatch()
  const { cars } = useSelector((state: any) => state.car);

  return (



    <div className="filter flex">
      <BodyTypeFilter cars={cars} />

      <FuelTypeFilter cars={cars} />
      <GearTypeFilter cars={cars} />
    </div>
  );
}

export default FilterCard;
