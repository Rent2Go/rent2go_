import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../../contexts/AuthContext";

import UserService from "../../../services/UserService";

import { ResetPasswordRequest } from "../../../models/requests/user/ResetPasswordRequest";

import { FormikInput } from "../../../components";
import "../styles/auth.css";
import { AiOutlineClose } from "react-icons/ai";
type Props = {};
const ResetPassword = (props: Props) => {
  const { t } = useTranslation();
  const authContext = useAuth();
  const navigate = useNavigate();

  const resetPasswordInitialValues: ResetPasswordRequest = {
    email: "",
    idCardNumber: "",
  };
  const resetPasswordValidationSchema = object({
    email: string()
      .required(t('emailRequired'))
      .email(t('invalidEmailFormat')),
    idCardNumber: string().required(t('idCardRequired')),
  });

  const resetPasswordHandleSubmit = async (values: ResetPasswordRequest) => {
    const response = await UserService.resetPassword(values)
      .then((resolve) => {
        navigate("/reset-password-successful");
      })
      .catch((error) => {
      
        const errorMessage = t(`${error.response.data.message}`);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="auth">
      <div className="secContainer">
        <div className="contentDiv">
          <div className="formContainer">
            <div className="headingDiv text-center">
              <h2>Reset Password</h2>
            </div>
            <Formik
              initialValues={resetPasswordInitialValues}
              onSubmit={resetPasswordHandleSubmit}
              validationSchema={resetPasswordValidationSchema}
              validateOnBlur={true}
              validateOnChange={true}
            >
              <Form className="form">
                <div className="row">
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="email"
                      type="mail"
                      label="Email Address"
                      placeHolder="Enter Your Mail Address"
                    />
                  </div>
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="idCardNumber"
                      type="text"
                      label="Id Card Number"
                      placeHolder="Enter Your Id Card Number"
                    />
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12 col-sm-12">
                    <button className="btn-login btn-sm" type="submit">
                      Submit
                    </button>

                    {/* Same as */}
                  </div>
                  <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  style={{ padding: "1px" }}
  closeButton={<AiOutlineClose size={20} />}/>

                  <div className="col-md-12 col-sm-12">
                    <span>Rent2Go Business</span>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
