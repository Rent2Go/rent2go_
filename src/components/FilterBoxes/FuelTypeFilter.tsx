import { CFormCheck } from '@coreui/react'
import React from 'react'

type Props = {}

const FuelTypeFilter = (props: Props) => {
  return (
    <div className="filterRow shadow-rounded-box">
    <div className="rowHead">
      <h6>Fuel Type</h6>
    </div>
    <div className="checkBoxRow">
      <CFormCheck id="flexCheckDefault" label="Gasoline" />
      <CFormCheck id="flexCheckDefault" label="Diesel" />
    </div>
  </div>
  )
}

export default FuelTypeFilter