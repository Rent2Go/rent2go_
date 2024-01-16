import React, { useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Field, Form, Formik, FormikProps } from "formik";
import login from "../../assets/img/login.jpg"

type Props = {};

const Login = (props: Props) => {
  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {};
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="login ">
      <div className="secContainer ">
        <div className="headDiv">
          <h1>Welcome to Rent2Car</h1>
        </div>
        <div className="contentDiv grid">
          <div className="imgDiv">
            <div className="imgCurtain"></div>
            <img src={login} alt="loginImage" />
          </div>
          <div className="fieldDiv">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className="inputDiv">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <h3 className="text-center">LOGIN</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                    <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Please Enter Your Mail Address"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 mt-2">
                    <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        placeholder="Please Enter Your Password"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="submitContainer">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn submitBtn mt-5"
                        onClick={() => {
                          authContext.setIsAuthenticated(true);
                          navigate("/");
                          localStorage.setItem("token", "abc");
                        }}
                      >
                        Submit
                      </button>
                    </div>
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

export default Login;
