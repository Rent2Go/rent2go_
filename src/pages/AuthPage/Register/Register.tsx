import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { number, object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { error, log } from "console";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../../contexts/AuthContext";

import AuthService from "../../../services/authService/AuthService";
import TokenService from "../../../services/TokenService";
import Field from "../../../components/FormikInput/FormikInput";
import { SignInRequest } from "../../../models/requests/auth/SignInRequest";
import { signUpRequest } from "../../../models/requests/auth/SignupRequest";
import {
  signIninitialValues,
  signUpinitialValues,
} from "../FormikAndYupSchema";
import { useSignupValidationSchema, useSigninValidationSchema } from "../FormikAndYupSchema";


import "../styles/register.css";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import CustomerService from "../../../services/CustomerService";

type Props = {
  name?: string;
  type?: string;
  placeHolder?: string;
};

const Register: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const settings = useSelector((state: any) => state.settings.setting);

  const authContext: any = useAuth();
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const fakeClick = () => {
    alert(t("signUpButton"));
  }

  const signInhandleSubmit = async (values: SignInRequest) => {
    const response = await AuthService.signIn(values)
      .then((resolve) => {
        console.log("Sign-in successful:", resolve);
        TokenService.setToken(resolve?.data?.token);
        TokenService.setrefreshToken(resolve?.data?.refreshToken);
        toast.success(t("loginSuccessful"));
        authContext.refreshUser();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })

      .catch((error) => {
      
        const errorMessage = t(`${error.response.data.message}`, { email: values.email});
        toast.error(errorMessage);
      });
  };


  const signUpHandleSubmit = async (values: signUpRequest) => {
    const response = await AuthService.signUp(values)
      .then((resolve) => {
        const userId = parseInt(resolve.data.data);
        toast.success(t("accountConfirmation"));
        CustomerService.createCustomer({ userId: userId })
          .then()
          .catch((err) => console.log(userId));
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((error) => {
      
        const errorMessage = t(`${error.response.data.message}`);
        toast.error(errorMessage);
      });
  };

  const signupValidationSchema = useSignupValidationSchema();
  const signinValidationSchema = useSigninValidationSchema();
  

  return (
    <>
      <Helmet>
        <title>{settings.title} - {t("register")} </title>
      </Helmet>
      <div
        className={`register ${isActive ? "active" : ""}`}
        ref={containerRef}
      >
        <div className={`containers ${isActive ? "active" : ""}`}>
          <div
            className={`form-containers sign-up ${isActive ? "active" : ""}`}
          >
            {" "}
            <Formik
              initialValues={signUpinitialValues}
              onSubmit={signUpHandleSubmit}
              validationSchema={signupValidationSchema}
              validateOnBlur={true}
              validateOnChange={true}
            >
              <Form className="form">
                <h1>{t("createAccount")}</h1>
                <div className="social-icons">
                  <Link to="https://github.com/sonersyln" className="icon">
                    <img
                      src="../../assets/img/userImages/soner.jpg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/yagmurcurku" className="icon">
                    <img
                      src="../../assets/img/userImages/yagmur.jpg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/shmserl" className="icon">
                    <img
                      src="../../assets/img/userImages/seyhmus.jpeg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/feyzaerat" className="icon">
                    <img
                      src="../../assets/img/userImages/feyza.jpeg"
                      alt="user"
                    />
                  </Link>
                </div>
                <span>{t("useYourEmailForRegistration")}</span>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="firstName"
                      className="input"
                      type="text"
                      placeholder={t("name")}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="lastName"
                      className="input"
                      type="text"
                      placeholder={t("surname")}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="email"
                      className="input"
                      type="email"
                      placeholder={t("email")}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="phoneNumber"
                      className="input"
                      type="text"
                      placeholder={t("phone")}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="birthDate"
                      className="input form-control inline-flex"
                      type="date"
                      placeholder="Birthdate"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="idCardNumber"
                      className="input"
                      type="text"
                      placeholder={t("idCardNumber")}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="password"
                      className="input"
                      type="password"
                      placeholder={t("password")}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="confirmpassword"
                      className="input"
                      type="password"
                      placeholder={t("confirmPassword")}
                    />
                  </div>
                </div>

                <button className="btn" type="submit">
                {t("signUp")}
                </button>
              </Form>
            </Formik>
          </div>

          <div
            className={`form-containers sign-in ${isActive ? "active" : ""}`}
          >
            <Formik
              initialValues={signIninitialValues}
              onSubmit={signInhandleSubmit}
              validationSchema={signinValidationSchema}
              validateOnBlur={true}
              validateOnChange={false}
            >
              <Form className="form sign-in-form" action="">
                <h1>{t("signIn")}</h1>
                <div className="social-icons">
                  <Link to="https://github.com/sonersyln" className="icon">
                    <img
                      src="../../assets/img/userImages/soner.jpg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/yagmurcurku" className="icon">
                    <img
                      src="../../assets/img/userImages/yagmur.jpg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/shmserl" className="icon">
                    <img
                      src="../../assets/img/userImages/seyhmus.jpeg"
                      alt="user"
                    />
                  </Link>
                  <Link to="https://github.com/feyzaerat" className="icon">
                    <img
                      src="../../assets/img/userImages/feyza.jpeg"
                      alt="user"
                    />
                  </Link>
                </div>
                <span>{t("useYourEmailPassword")}</span>
                <div className="row text-center">
                  <div className="col-12 text-center">
                    <Field
                      name="email"
                      className="input"
                      type="email"
                      placeholder={t("email")}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Field
                      name="password"
                      className="input"
                      type="password"
                      placeholder= {t("password")}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Link to="/sign-in/reset-password">
                      {t("ForgetYourPassword")}
                    </Link>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn" type="submit">
                      {t("signIn")}
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="toggle-containers">
            <div className={`toggle ${isActive ? "active" : ""}`}>
              <div className="toggle-panel toggle-left">
                <h1>{t("welcomeBack")}</h1>
                <p>{t("welcomeBackSubText")}</p>
                <button
                  id="login"
                  className={isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={handleClick}
                >
                   {t("signIn")}
                </button>
              </div>
              <div
                className={`toggle-panel toggle-right ${isActive ? "active" : ""
                  }`}
              >
                <h1>{t("helloFriend")}</h1>
                <p>
                {t("welcomeBackSubText")}
                </p>
                <button
                  id="register"
                  className={!isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={fakeClick}
                >
                   {t("signUp")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default Register;
