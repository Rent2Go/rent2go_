import React, { useEffect, useState } from "react";
import "./styles/rentals.css";
import { RentalModel } from "../../models/responses/rentals/GetRental";
import { useParams } from "react-router-dom";
import RentalService from "../../services/RentalService";

type Props = {};

const DetailRental = (props: Props) => {
  const [rentalDetail, setRentalDetail] = useState<RentalModel>();
  const params = useParams<{ id: string }>();

  const getRentalDetail = async (id: string) => {
    try {
      const response = await RentalService.getById(parseInt(id));
      setRentalDetail(response.data.data);
      console.log(response.data.message);
      console.log(response.data.data.car);
    } catch (error) {
      console.log("There is an error : ", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getRentalDetail(params.id);
    }
  }, [params.id]);

  const calculateDayCount = () => {
    if (rentalDetail?.startDate && rentalDetail?.endDate) {
      const startDate = new Date(rentalDetail.startDate.toString());
      const endDate = new Date(rentalDetail.endDate);
      const oneDay = 24 * 60 * 60 * 1000;
      const dayCount = Math.round(
        Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
      );
      return dayCount;
    }
    return null;
  };

  const formatPrice = (price?: number) => {
    if (price) {
      return price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
    }
    return null;
  };

  return (
    <div className="booking container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Rental Details of : {rentalDetail?.car.plate}</h2>
        </div>
        <div className="contentContainer">
          <div className="customerContainer">
            <p>ID : {rentalDetail?.customer.nationalityId}</p>
            <p>
              Customer : {rentalDetail?.customer.user.name}{" "}
              {rentalDetail?.customer.user.surname}
            </p>

            <p>Email : {rentalDetail?.customer.user.email}</p>
            <p>Phone : {rentalDetail?.customer.user.phoneNumber}</p>
          </div>
          <div className="rentalDateContainer">
            <p>Start Date : {rentalDetail?.startDate.toString()}</p>
            <p>End Date : {rentalDetail?.endDate.toString()}</p>
            <p>Day : {calculateDayCount()} Days</p>
            <p>Daily Price : {formatPrice(rentalDetail?.car.dailyPrice)} </p>
            <p>Total Price : {formatPrice(rentalDetail?.totalPrice)}   </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRental;
