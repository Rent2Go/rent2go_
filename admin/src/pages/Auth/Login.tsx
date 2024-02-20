import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import { useAuth } from "../../contexts/AuthContext";
import { SignInRequest } from "../../../../src/models/requests/auth/SignInRequest";
import AuthService from "../../services/AuthService";
import {
  signInValidationSchema,
  signIninitialValues,
} from "./FormikAndYupSchema";
import "./auth.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FormikInput } from "../../components";
type Props = {};
const Register = (props: Props) => {

  const authContext = useAuth()
  const navigate = useNavigate()


  const signInhandleSubmit = async (values: SignInRequest) => {
    console.log("asdsad");

    const response = await AuthService.signIn(values)
      .then((resolve) => {

        console.log("Sign-in successful:", resolve);
        localStorage.setItem("token", resolve?.data?.token);
        toast.success("Giriş Başarılı")
        authContext.refreshUser();
        setTimeout(() => { navigate("/dashboard") }, 1500);


      })

      .catch((error) =>
        toast.error(error.response.data.message))
  }
  return (
    <div className="auth">

      <div className="secContainer">
        <div className="headingDiv text-center">
          <h2>Login</h2>
        </div>
        <div className="contentDiv">
          <div className="formContainer">

            <Formik
              initialValues={signIninitialValues}
              onSubmit={signInhandleSubmit}
              validationSchema={signInValidationSchema}
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
                      name="password"
                      type="password"
                      label="Password"
                      placeHolder="Enter Your Password"
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
                    />

                  <div className="col-md-12 col-sm-12">
                    <Link to="reset-password">Forget Your Password ? </Link>
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

export default Register;
