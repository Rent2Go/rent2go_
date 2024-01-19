import React from "react";
import { CFormCheck } from "@coreui/react";
import BodyTypeFilter from "../FilterBoxes/BodyTypeFilter";
import FuelTypeFilter from "../FilterBoxes/FuelTypeFilter";
import GearTypeFilter from "../FilterBoxes/GearTypeFilter";
type Props = {};

const FilterCard = (props: Props) => {
  return (
    <div className="filter flex">
      <BodyTypeFilter/>
      <FuelTypeFilter/>
      <GearTypeFilter/>
    </div>
  );
};

export default FilterCard;
