import { CFormCheck } from "@coreui/react";
import React from "react";

type Props = {};

const GearTypeFilter = (props: Props) => {
  return (
    <div className="filterRow shadow-rounded-box">
      <div className="rowHead">
        <h6>Gear Type</h6>
      </div>
      <div className="checkBoxRow">
        <CFormCheck id="flexCheckDefault" label="Manuel" />
        <CFormCheck id="flexCheckDefault" label="Automatic" />
        <CFormCheck id="flexCheckDefault" label="Semi Automatic" />
      </div>
    </div>
  );
};

export default GearTypeFilter;
