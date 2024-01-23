import React, { useEffect, useState } from "react";
import { CFormCheck } from "@coreui/react";
import BodyTypeFilter from "../FilterBoxes/BodyTypeFilter";
import FuelTypeFilter from "../FilterBoxes/FuelTypeFilter";
import GearTypeFilter from "../FilterBoxes/GearTypeFilter";
import { CarModel } from "../../models/responses/cars/GetCar";
type Props = {
  cars: CarModel[];
  

};

const FilterCard = (props: Props) => {
  return (
    <div className="filter flex">
      <BodyTypeFilter cars={props.cars} />

      <FuelTypeFilter cars={props.cars} />
      <GearTypeFilter cars={props.cars} />
    </div>
  );
};

export default FilterCard;
