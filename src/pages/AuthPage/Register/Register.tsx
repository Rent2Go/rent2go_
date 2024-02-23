import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { number, object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { error, log } from "console";

import { useAuth } from "../../../contexts/AuthContext";

import AuthService from "../../../services/authService/AuthService";
import TokenService from "../../../services/TokenService";
import Field from "../../../components/FormikInput/FormikInput";
import { SignInRequest } from "../../../models/requests/auth/SignInRequest";
import { signUpRequest } from "../../../models/requests/auth/SignupRequest";
import {
  signInValidationSchema,
  signIninitialValues,
  signUpinitialValues,
  signupValidationSchema,
} from "../FormikAndYupSchema";

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
  const settings = useSelector((state: any) => state.settings.setting);

  const authContext: any = useAuth();
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const signInhandleSubmit = async (values: SignInRequest) => {
    const response = await AuthService.signIn(values)
      .then((resolve) => {
        console.log("Sign-in successful:", resolve);
        TokenService.setToken(resolve?.data?.token);
        TokenService.setrefreshToken(resolve?.data?.refreshToken);
        toast.success("Login successful");
        authContext.refreshUser();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })

      .catch((error) => toast.error(error.response.data.message));
  };

  const signUpHandleSubmit = async (values: signUpRequest) => {
    const response = await AuthService.signUp(values)
      .then((resolve) => {
        const userId = parseInt(resolve.data.data);
        toast.success(
          "Success! Please, check your email to confirm your account."
        );
        CustomerService.createCustomer({ userId: userId })
          .then()
          .catch((err) => console.log(userId));
        setTimeout(() => navigate("/sign-up"), 2000);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <>
      <Helmet>
        <title>{settings.title} - Register </title>
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
                <h1>Create Account</h1>
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
                <span>or use your email for registration</span>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="firstName"
                      className="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="lastName"
                      className="input"
                      type="text"
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="phoneNumber"
                      className="input"
                      type="text"
                      placeholder="Phone"
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
                      placeholder="Id Card Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="password"
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Field
                      name="confirmpassword"
                      className="input"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>

                <button className="btn" type="submit">
                  Sign Up
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
              validationSchema={signInValidationSchema}
              validateOnBlur={true}
              validateOnChange={false}
            >
              <Form className="form sign-in-form" action="">
                <h1>Sign In</h1>
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
                <span>or use your email password</span>
                <div className="row text-center">
                  <div className="col-12 text-center">
                    <Field
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Field
                      name="password"
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Link to="/sign-in/reset-password">
                      Forget Your Password?
                    </Link>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn" type="submit">
                      Sign In
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="toggle-containers">
            <div className={`toggle ${isActive ? "active" : ""}`}>
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button
                  id="login"
                  className={isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`toggle-panel toggle-right ${
                  isActive ? "active" : ""
                }`}
              >
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all site features
                </p>
                <button
                  id="register"
                  className={!isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={handleClick}
                >
                  Sign Up
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
