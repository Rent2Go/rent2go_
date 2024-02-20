import React, { useEffect, useState } from 'react'
import './YourReservations.css'
import { RentalModel } from '../../../models/responses/rentals/GetRental';
import RentalService from '../../../services/RentalService';
import { useTranslation } from "react-i18next";
import { RiUserFollowLine, RiUserLocationLine } from "react-icons/ri";


const YourReservations = () => {
  const { t } = useTranslation();


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
      <h2 className='mainHead1'>{t("yourReservations")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("startDate")}</th>
            <th>{t("returnDate")}</th>
            <th>{t("totalPrice")}</th>
            <th>{t("carBrand")}</th>
            <th>{t("carModel")}</th>
            <th>{t("status")}</th>
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
                    {item.returnDate == null && <div className='icon1'><RiUserLocationLine /></div>}
                    {item.returnDate != null && <div className='icon2'><RiUserFollowLine /></div>}
                  </p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='information'>
        <div className='inUse'>
          <RiUserLocationLine />
          <span>{" : " + t("inUse")}</span>
        </div>
        <div className='delivered'>
          <RiUserFollowLine />
          <span>{" : " + t("delivered")}</span>
        </div>
      </div>
    </div>
  )
}

export default YourReservations