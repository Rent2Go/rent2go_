import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserModel } from "../../models/user/UserModel";
import UserService from "../../services/UserService";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { UserAuthModel } from "../../models/user/UserAuth";

type Props = {};

const CustomerCard = (props: Props) => {
  const customer = useAuth();
  console.log(customer.authInformation.user.firstname);
  return (
    <div className="customerCard">
      <div className="rowInfo">
        <label>Name : </label>
        <p>
          {customer.authInformation.user.firstname}{" "}
          {customer.authInformation.user.lastname}
        </p>
      </div>
      <div className="rowInfo">
        <label>Mail : </label>
        <p>{customer.authInformation.user.email}</p>
      </div>
      <div className="rowInfo">
        <label>Phone : </label>
        <p>{customer.authInformation.user.phoneNumber}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
