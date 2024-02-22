import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserModel } from "../../models/user/UserModel";
import UserService from "../../services/UserService";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { UserAuthModel } from "../../models/user/UserAuth";
import { useTranslation } from "react-i18next";

type Props = {};

const CustomerCard = (props: Props) => {
  const { t } = useTranslation();
  const customer = useAuth();
  console.log(customer.authInformation.user.firstname);
  return (
    <div className="customerCard">
      <div className="rowInfo">
        <p>
          <span>
            <b>{t("name")} : </b>{" "}
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
            <b>{t("email")} : </b>{" "}
          </span>
          <span>{customer.authInformation.user.email}</span>
        </p>
      </div>
      <div className="rowInfo">
        <p>
          <span>
            <b>{t("phone")} : </b>{" "}
          </span>
          <span>{customer.authInformation.user.phoneNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerCard;
