import React from "react";
import "./UserLocation.css";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";

const UserLocation = () => {
  const { t } = useTranslation();

  const initialValues: any = {
    city: "",
    district: "",
    address: "",
  };

  const UserLocationSchema = Yup.object().shape({
    city: Yup.string().required("City field cannot be empty"),
    district: Yup.string().required("District field cannot be empty"),
    address: Yup.string().required("Address field cannot be empty"),
  });

  const handleSubmit = () => {};

  return (
    <div className="userLocation">
      <h2 className="mainHead1 text-center">{t("locationInformation")}</h2>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={UserLocationSchema}
          onSubmit={handleSubmit}
        >
            <Form>
                <div className="row">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                            name="city"
                            type="text"
                            label={t("city")}
                        ></FormikInput>
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                            name="district"
                            type="text"
                            label={t("district")}
                        ></FormikInput>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                            name="address"
                            type="textarea"
                            label={t("address")}
                        ></FormikInput>
                    </div>
                </div>
            </Form>
        </Formik>
      </div>
      <div className="row text-center">
        <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
        <button className="mainButton1">{t("saveLocationChanges")}</button>
        </div>
      </div>
      
    </div>
  );
};

export default UserLocation;
