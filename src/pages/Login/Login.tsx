import React, { useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Field, Form, Formik, FormikProps } from "formik";

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
          <h1>LOGIN</h1>
        </div>
        <div className="fieldDiv">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="inputDiv">
                <div className="row">
                  <div className="col-12">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <Field
                      name="password"
                      placeholder="Password"
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
  );
};

export default Login;
