// React imports
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Formik imports
import { Formik, Form } from "formik";
import { object, ref, string } from "yup";

// Component imports
import FormikInput from "../../components/FormikInput/FormikInput";

// Context imports
import { useAuth } from "../../contexts/AuthContext";

// Toast imports
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

// Service imports
import UserService from "../../services/UserService";

// Model imports
import { ChangePasswordRequest } from "../../models/requests/user/ChangePasswordRequest";
import { TokenUser } from "../../models/token/TokenUser";

// Utility imports
import { jwtDecode } from "jwt-decode";

// Style imports
import "./auth.css";

type Props = {};
const ChangePassword = (props: Props) => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const user:TokenUser = jwtDecode(token ||'')
  const authContext = useAuth()
  const navigate = useNavigate()

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  

  const changePasswordInitialValues: ChangePasswordRequest = {
    email: user.sub,
    password: '',
    confirmpassword:'' 

  }
  const changePasswordValidationSchema = object({
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
      password: string().required("Password field is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "Password must include at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
      .matches(/\d/, "Password must include at least one number.")
      .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
      confirmpassword: string().required("Password field is required.")
      .oneOf([ref('password')], 'Passwords do not match')
        
  });

  const changePasswordHandleSubmit = async (values: ChangePasswordRequest) => {

    const response = await UserService.changePassword(values,token)
      .then((resolve) => {
        navigate("/success");
      })
      .catch((error) => {
        if(error.response.status === 403){
          toast.error("Your transaction has expired! Please request a password reset again.!! ")
        }
      });
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
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="confirmpassword"
                      type="password"
                      label="Confirm Password"
                      placeHolder="Enter Your Confirm Password"
                     
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
                  transition={Bounce}
                   
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
