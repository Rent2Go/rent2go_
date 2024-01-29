import React from 'react'
import "./vehicleCard.css"
import { CarModel } from '../../../models/responses/cars/GetCar';
type Props = {
  car: CarModel;
}

const VehicleCard = (props: Props) => {
  return (
    <>
    <div className="vehicleCard">
    <p>{props.car.model.brandName}</p>
    </div>
    </>
  )
}

export default VehicleCard