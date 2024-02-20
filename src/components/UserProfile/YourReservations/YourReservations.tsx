import React, { useEffect, useState } from 'react'
import './YourReservations.css'
import { RentalModel } from '../../../models/responses/rentals/GetRental';
import RentalService from '../../../services/RentalService';
import { useTranslation } from "react-i18next";
import { RiUserFollowLine, RiUserLocationLine } from "react-icons/ri";
import { useAuth } from '../../../contexts/AuthContext';
import UserService from '../../../services/UserService';
import { UserModel } from '../../../models/user/UserModel';


const YourReservations = () => {
  const auth = useAuth()
  const { t } = useTranslation();
  const [rentals, setRentals] = useState<RentalModel[]>([]);
  const [user, setUser] = useState<UserModel>();


  const getUser = async (id: number) =>{
    await UserService.getById(id)
    .then((res:any)=>{
      setUser(res.data.data)
    })
  }


  const getRentals = () => {
    if(user){
    RentalService.getCustomerRentalsById(user.customer.id)
    .then((res) => { setRentals(res.data.data) })
    .catch((err) => { console.log(err) })
  }
}

useEffect(() => {
  getUser(auth.authInformation.user.id)
  getRentals();
},[user?.id])



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