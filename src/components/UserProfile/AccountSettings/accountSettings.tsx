
import React from "react";
import "./accountSettings.css";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import * as Yup from "yup";


const AccountSettings = () => {
  const { t } = useTranslation();

  const initialValues: any = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    nationalityId: "",
    dateOfBirth: "",
  };

  const AccountSettingsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 character long.")
      .required("Name field cannot be empty"),
    surname: Yup.string()
      .min(3, "Surnamemust be at least 3 character long.")
      .required("Surname field cannot be empty"),
    phone: Yup.string()
      .min(11, "Phone number must contain 11 characters")
      .max(11, "Phone number must contain 11 characters")
      .required("Phone field cannot be empty"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email field cannot be empty"),
    nationalityId: Yup.string()
      .min(10)
      .required("Nationality Id field cannot be empty"),
    dateOfBirth: Yup.date().required("Date of Birth field cannot be empty"),
  });

  const handleSubmit = () => {};

  return (
    <div className="accountSettings">
      <h2 className="mainHead1 text-center">{t("personalInformations")}</h2>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={AccountSettingsSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="name"
                  type="text"
                  label={t("firstName")}
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="surname"
                  type="text"
                  label={t("lastName")}
                ></FormikInput>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="phone"
                  type="text"
                  label={t("phone")}
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12- col-sm-12">
                <FormikInput
                  name="email"
                  type="email"
                  label={t("email")}
                ></FormikInput>
              </div>
            </div>

            <div className="form-group">
              <FormikInput
                name="nationalityId"
                type="text"
                label={t("nationalityId")}
              ></FormikInput>
            </div>
            <div className="form-group">
              <FormikInput
                name="dateOfBirth"
                type="date"
                label={t("dateOfBirth")}
              ></FormikInput>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="row text-center">
        <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
          <button className="mainButton1">{t("saveChanges")}</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
