import React, { useEffect, useState } from 'react'
import './YourReservations.css'
import { RentalModel } from '../../../models/responses/rentals/GetRental';
import RentalService from '../../../services/RentalService';


const YourReservations = () => {


  const [rentals, setRentals] = useState<RentalModel[]>([]);

  useEffect(() => {
    getRentals();
  },[])

  const getRentals = () => {
    RentalService.getAll()
    .then((res) => { setRentals(res.data.data) })
    .catch((err) => { console.log(err) })
  }


  return (
    <div className='yourReservations'>
      <h2 className='mainHead1'>Your Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>Return Date</th>
            <th>Total Price</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.totalPrice}₺</td>
                <td>{item.car.model.brand.name}</td>
                <td>{item.car.model.name}</td>
                <td>
                  <p className='p1'>
                    {item.returnDate == null && <span className='reddot'>In Use</span>}
                    {item.returnDate != null && <span className='greendot'>Delivered</span>}
                  </p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default YourReservations