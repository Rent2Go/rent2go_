// React imports
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Formik imports
import { Formik, Form } from "formik";
import { object, ref, string } from "yup";
import { FormikInput } from "../../../components";
// Context imports
import { useAuth } from "../../../contexts/AuthContext";

// Toast imports
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

// Service imports
import UserService from "../../../services/UserService";

// Model imports
import { ChangePasswordRequest } from "../../../models/requests/user/ChangePasswordRequest";
import { TokenUser } from "../../../models/token/TokenUser";

// Utility imports
import { jwtDecode } from "jwt-decode";

// Style imports
import "../styles/auth.css";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};
const ChangePassword = (props: Props) => {
  const { t } = useTranslation();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const user: TokenUser = jwtDecode(token || "");
  const authContext = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const changePasswordInitialValues: ChangePasswordRequest = {
    email: user.sub,
    password: "",
    confirmpassword: "",
  };
  const changePasswordValidationSchema = object({
    email: string()
      .required(t("emailRequired"))
      .email(t("invalidEmail")),
    password: string()
      .required(t("passwordRequired"))
      .min(8, t("passwordMin"))
      .matches(/[a-z]/, t("passwordLowercase"))
      .matches(/[A-Z]/, t("passwordUppercase"))
      .matches(/\d/, t("passwordNumber"))
      .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, t("passwordPunctuation")),
    confirmpassword: string()
      .required(t("passwordRequired"))
      .oneOf([ref("password")], t("passwordsNotMatch")),
});

  const changePasswordHandleSubmit = async (values: ChangePasswordRequest) => {
    const response = await UserService.changePassword(values, token)
      .then((resolve) => {
        navigate("/password-change-successful");
      })
      .catch((error) => {
        if (error.response.status === 403) {
          toast.error(t("transactionExpired"));
        }
      });
  };

  useEffect(() => {
    // Geri düğmesinin tıklandığında önceki sayfaya dönmesini engelle
    const handleBackButton = (e: any) => {
      e.preventDefault();
      navigate("/");
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return (
    <div className="auth">
      <div className="secContainer">
        <div className="contentDiv">
          <div className="formContainer">
            <div className="headingDiv text-center">
              <h2>Change Password</h2>
            </div>
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
                    style={{ padding: "1px" }}
                    closeButton={<AiOutlineClose size={20} />}
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
