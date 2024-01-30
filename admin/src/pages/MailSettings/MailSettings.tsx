import React from "react";
import "./mailSettings.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";

type Props = {};

const MailSettings = (props: Props) => {
  const onSubmit = () => {};
  const initialValues = () => {};
  return (
    <div className="mailSettings container">
      <div className="secContainer">
        <div className="formContainer">
          <div className="formHeader">
            <h2>Mail Settings</h2>
          </div>
          <div className="formContent">
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
              <Form className="form">
                <div className="row">
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="host"
                      type="text"
                      label="Host"
                      placeHolder="Enter the Host Address"
                    />
                  </div>
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="port"
                      type="text"
                      label="Port"
                      placeHolder="Enter the Port Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="username"
                      type="mail"
                      label="Username"
                      placeHolder="Enter the User Name"
                    />
                  </div>
                  <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                    <FormikInput
                      name="password"
                      type="password"
                      label="Password"
                      placeHolder="Enter the Password"
                    />
                  </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="btnRow">
                            <button title="Submit" type="submit" className="btn btn-light btn-md">Submit</button>
                            <button title="Cancel" type="button" className="btn btn-danger btn-md">Cancel</button>
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

export default MailSettings;
