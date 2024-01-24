import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import user1 from "../../assets/img/userImages/soner.jpg";
import user2 from "../../assets/img/userImages/yagmur.jpg";
import user3 from "../../assets/img/userImages/seyhmus.jpeg";
import user4 from "../../assets/img/userImages/feyza.jpeg";
import "./register.css";
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/authService/AuthService";
import { number, object, string } from "yup";
import Field from '../../components/FormikInput/FormikInput';
import { TokenResponse } from "../../models/responses/auth/LoginResponse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignInRequest } from "../../models/requests/auth/SignInRequest";
import { signUpRequest } from "../../models/requests/auth/SignupRequest";
import { signInValidationSchema, signIninitialValues, signUpinitialValues, signupValidationSchema } from "./FormikAndYupSchema";


type Props = {
  name?: string;
  type?: string;
  placeHolder?: string;
};

const Register: React.FC<Props> = (props: Props) => {
  
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
        localStorage.setItem("token", resolve?.data?.token);
        authContext.refreshUser();
        navigate("/");
      })

      .catch((error) =>
        toast.error(error.response.data.message))
  }


  const handleSubmit = async (values: signUpRequest) => {
    const response = await AuthService.signUp(values)
      .then((resolve) => {
        navigate("/");

      })
      .catch((error) =>
        toast.error(error.response.data.message))
  };

  return (
    <div className={`register ${isActive ? "active" : ""}`} ref={containerRef}>
      

      <div className={`containers ${isActive ? "active" : ""}`}>
        <div
          className={`form-containers sign-up ${isActive ? "active" : ""}`}
        > <Formik initialValues={signUpinitialValues}
          onSubmit={handleSubmit}
          validationSchema={signupValidationSchema}
          validateOnBlur={true}
          validateOnChange={true}>
            <Form className="form">
              <h1>Create Account</h1>
              <div className="social-icons">
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
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
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"

              />

              <button className="btn" type="submit">
                Sign Up
              </button>

            </Form>
          </Formik>
        </div>



        <div
          className={`form-containers sign-in ${isActive ? "active" : ""}`}
        >
          <Formik initialValues={signIninitialValues}
            onSubmit={signInhandleSubmit}
            validationSchema={signInValidationSchema}
            validateOnBlur={true}
            validateOnChange={false}>
            <Form className="form" action="">
              <h1>Sign In</h1>
              <div className="social-icons">
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
                </Link>
              </div>
              <span>or use your email password</span>
              <Field
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <Link to="#">Forget Your Password?</Link>
              <button className="btn" type="submit"




              >
                Sign In
              </button>
              <ToastContainer />
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
              className={`toggle-panel toggle-right ${isActive ? "active" : ""
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
      
    </div>
  );
};

export default Register;