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
    } catch (error) {
      console.log("There is an error : ", error);
    }
  };


  useEffect(() => {
    if (params.id) {
      getRentalDetail(params.id);
    }
  }, [params.id]);
  return (
    <div className="booking container">
      <div className="titleContainer">
        <h2>Rental Details of : {rentalDetail?.id}</h2>
      </div>
      <div className="secContainer"></div>
    </div>
  );
};

export default DetailRental;
