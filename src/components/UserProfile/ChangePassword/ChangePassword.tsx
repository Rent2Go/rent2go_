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
import { UserModel } from "../../../models/user/UserModel";
import { useAuth } from "../../../contexts/AuthContext";
import UserService from "../../../services/UserService";
import { ToastContainer, toast } from "react-toastify";

const ChangePassword = () => {
  const auth = useAuth()
  const { t } = useTranslation();


  const [user, setUser] = useState<UserModel>();


  const initialValues: any = {
    oldPassword: "",
    password: "",
    passwordConfirm: "",
  };


  const getUser = async (id: number) => {
    await UserService.getById(id)
      .then((res: any) => {
        setUser(res.data.data)
      })
  }

  const changePasswordSchema = Yup.object({
    oldPassword: Yup.string().required(t("oldPasswordFieldCannotBeEmpty")),
     password: Yup.string()
      .matches(/[A-Z]/, (t("mustContainAtLeastOneUppercaseLetter")))
      .matches(/[a-z]/, (t("mustContainAtLeastOneLowercaseLetter")))
      .matches(/[0-9]/, (t("mustContainAtLeastOneDigit")))
      .matches(
        /[!@#$%^&*(),.?":{}|<>\_-]/,
        t("mustContainAtLeastOnePunctuationMark")
      )
      .min(8, (t("passwordBeAtLeast8CharacterLong")))
      .required(t("passwordFieldCannotBeEmpty")),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), undefined], (t("passwordsMustMatch")))
      .required(t("pleaseConfirmYourPassword")),
  });

  const handleSubmit = async (id: number, values: any) => {
    await UserService.profilPageChangePassword(id, values)
      .then((res) => {
        toast.success(t(res.data.message))
      })
      .catch((err: any) => {

        toast.error(t(err.response.data.message))
      })

  };

  useEffect(() => {
    getUser(auth.authInformation.user.id)

  }, [user?.id])

  return (
    <div className="changePassword">
      <h2 className="mainHead1 text-center">{t("changePassword")}</h2>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={changePasswordSchema}
          onSubmit={(values)=> handleSubmit(auth.authInformation.user.id,values)}
        >
          <Form>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="oldPassword"
                  type="password"
                  label={t("oldPassword")}
                ></FormikInput>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="password"
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
            <div className="row text-center">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <button type="submit" className="mainButton1">{t("saveNewPassword")}</button>
              </div>
            </div>
          </Form>
        </Formik>
        <ToastContainer position="bottom-center" />
      </div>


    </div>
  );
};

export default ChangePassword;
