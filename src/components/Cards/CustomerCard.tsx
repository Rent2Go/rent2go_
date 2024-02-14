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
        <p>
          <span>
            <b>Name : </b>{" "}
          </span>
          <span>
            {customer.authInformation.user.firstname}{" "}
            {customer.authInformation.user.lastname}
          </span>
        </p>
      </div>
      <div className="rowInfo">
        <p>
          <span>
            <b>Email : </b>{" "}
          </span>
          <span>{customer.authInformation.user.email}</span>
        </p>
      </div>
      <div className="rowInfo">
        <p>
          <span>
            <b>Phone : </b>{" "}
          </span>
          <span>{customer.authInformation.user.phoneNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerCard;
