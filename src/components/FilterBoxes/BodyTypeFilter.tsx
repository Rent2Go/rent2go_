import React from "react";
import { CFormCheck } from "@coreui/react";

type Props = {};

const BodyTypeFilter = (props: Props) => {
  return (
    <div className="filterRow">
      <div className="rowHead">
        <h6>Body Type</h6>
      </div>
      <div className="checkBoxRow">
        <CFormCheck id="flexCheckDefault" label="Hatchback" />
        <CFormCheck id="flexCheckDefault" label="Sedan" />
        <CFormCheck id="flexCheckDefault" label="Suv" />
        <CFormCheck id="flexCheckDefault" label="Coupe" />
      </div>
    </div>
  );
};

export default BodyTypeFilter;
