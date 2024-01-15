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
    <div className="login container">
      
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <div className="row text-center mt-5">
            <div className="col-12">
              <Form>
                <Field type="email" name="email" placeholder="Email" />
                <Field name="password" placeholder="Password" />
                <button
                  type="button"
                  className="btn btn-dark mt-5"
                  onClick={() => {
                    authContext.setIsAuthenticated(true);
                    navigate("/");
                    localStorage.setItem("token", "abc");
                  }}
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default Login;
