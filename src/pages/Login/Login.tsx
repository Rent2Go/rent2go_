import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import { Field, Form, Formik, FormikProps } from "formik";
import { useAuth } from "../../contexts/AuthContext";

type Props = {};

const Login = (props: Props) => {
  const authContext = useAuth();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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

            <img src="assets/img/login.jpg" alt="loginImage" />
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

                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <small>
                        <Link to="/sign-in/reset-password">Reset Your Password </Link>
                      </small>
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
