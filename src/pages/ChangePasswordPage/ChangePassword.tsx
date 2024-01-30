import React from "react";
import "./auth.css";
import { Formik, Form } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { object, string } from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import UserService from "../../services/UserService";
import { ChangePasswordRequest } from "../../models/requests/user/ChangePasswordRequest";
import { jwtDecode } from "jwt-decode";
import { TokenUser } from "../../models/token/TokenUser";

type Props = {};
const ChangePassword = (props: Props) => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
 
    const user:TokenUser = jwtDecode(token ||'')
    
  

  

  const authContext = useAuth()
  const navigate = useNavigate()

  const changePasswordInitialValues: ChangePasswordRequest = {
    email: user.sub,
    password: '',

  }
  const changePasswordValidationSchema = object({
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
    password: string()
      .required("first Name field is required.")
  });

  const changePasswordHandleSubmit = async (values: ChangePasswordRequest) => {

    const response = await UserService.changePassword(values,token)
      .then((resolve) => {
        navigate("/success");
      })
      .catch((error) => toast.error(error.response.data.message));
  };






  return (
    <div className="auth">

      <div className="secContainer">
        <div className="headingDiv text-center">
          <h2>Change Password</h2>
        </div>
        <div className="contentDiv">
          <div className="formContainer">

            <Formik
              initialValues={changePasswordInitialValues}
              onSubmit={changePasswordHandleSubmit}
              validationSchema={changePasswordValidationSchema}
              validateOnBlur={true}
              validateOnChange={true}
            >
              <Form className="form">
                <div className="row justify-content-center">
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

export default ChangePassword;
