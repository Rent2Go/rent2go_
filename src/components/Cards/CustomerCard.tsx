import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserModel } from "../../models/user/UserModel";
import UserService from "../../services/UserService";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { UserAuthModel } from "../../models/user/UserAuth";
import { useTranslation } from "react-i18next";
import {
  IoPersonOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarClearOutline 
} from "react-icons/io5";

type Props = {};

const CustomerCard = (props: Props) => {
  const { t } = useTranslation();
  const customer = useAuth();
  console.log(customer.authInformation.user.firstname);
  return (
    <div className="customerCardContainer">
      <div className="row">
        <div className="col-12">
          <h6>{t("personalInformation")}</h6>
        </div>
        <div className="col-12">
          <p>
            <span>
              <b>
                <IoPersonOutline />
              </b>
            </span>
            <span>
              {customer.authInformation.user.firstname}{" "}
              {customer.authInformation.user.lastname}
            </span>
          </p>
        </div>
        <div className="col-12">
          <p>
            <span>
              <b>
                <IoMailOutline />
              </b>{" "}
            </span>
            <span>{customer.authInformation.user.email}</span>
          </p>
        </div>
        <div className="col-12">
          <p>
            <span>
              <b>
                <IoPhonePortraitOutline />
              </b>{" "}
            </span>
            <span>{customer.authInformation.user.phoneNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
