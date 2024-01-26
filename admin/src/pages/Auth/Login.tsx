import React from "react";
import "./auth.css";
import { Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import {
  signInValidationSchema,
  signIninitialValues,
  signUpinitialValues,
  signupValidationSchema,
} from "./FormikAndYupSchema";
import FormikInput from "../../components/formikInput/FormikInput";
import { Button } from "react-bootstrap";
type Props = {};
const handleSubmit = async (values: any) => {};
const Register = (props: Props) => {
  return (
    <div className="auth">
      <div className="secContainer">
        <div className="headingDiv text-center">
          <h2>Login</h2>
        </div>
        <div className="contentDiv">
          <div className="formContainer">
            <Formik
              initialValues={signUpinitialValues}
              onSubmit={handleSubmit}
              validationSchema={signupValidationSchema}
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
                    <Button variant="btn-login btn-sm" type="submit">
                      Submit
                    </Button>
                  </div>

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
