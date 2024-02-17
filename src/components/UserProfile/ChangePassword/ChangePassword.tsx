import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import { CityModel } from "../../../models/responses/cities/GetCity";
import { DistrictModel } from "../../../models/responses/districts/GetDistrict";
import CityService from "../../../services/CityService";
import DistrictService from "../../../services/DistrictService";

const ChangePassword = () => {

  const { t } = useTranslation();


  const initialValues: any = {
    oldPassword: "",
    newPassword: "",
    passwordConfirm: "",
  };

  const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password field cannot be empty"),
    newPassword: Yup.string()
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>\_-]/,
        "Must contain at least one punctuation mark"
      )
      .min(8, "Password be at least 8 character long")
      .required("Password field cannot be empty"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("newPassword"), undefined], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = () => {};




  return (
    <div className="changePassword">
      <h2 className="mainHead1 text-center">{t("changePassword")}</h2>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={changePasswordSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="oldPassword"
                  type="text"
                  label={t("oldPassword")}
                ></FormikInput>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="newPassword"
                  type="password"
                  label={t("newPassword")}
                ></FormikInput>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="passwordConfirm"
                  type="password"
                  label={t("passwordConfirm")}
                ></FormikInput>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="row text-center">
        <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
          <button className="mainButton1">{t("saveNewPassword")}</button>
        </div>
      </div>
      
    </div>
  );
};

export default ChangePassword;
