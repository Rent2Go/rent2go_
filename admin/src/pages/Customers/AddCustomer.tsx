import React from "react";
import "./styles/customers.css";
import { Field, Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link } from "react-router-dom";
type Props = {};

const AddCustomer = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};
  return (
    <div className="customers">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer text-center mt-4 mb-5">
          <h2>Add New Customer</h2>
        </div>
        <div className="formContainer">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Nationality Id"
                    placeHolder="Enter Nationality Id"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <label className="form-label">UserName</label>
                  <Field
                    as="select"
                    name="nn"
                    title=""
                    placeholder="User Id"
                    className="form-control"
                  >
                    <option></option>
                  </Field>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <label className="form-label">City</label>
                  <Field
                    as="select"
                    name="nn"
                    title=""
                    placeholder="City"
                    className="form-control"
                  >
                    <option></option>
                  </Field>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <label className="form-label">District</label>
                  <Field
                    as="select"
                    name="nn"
                    title=""
                    placeholder="District"
                    className="form-control"
                  >
                    <option></option>
                  </Field>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Address"
                    placeHolder="Address"
                  ></FormikInput>
                </div>
              </div>
              <div className="btnContainer">
                <button
                  title="Save"
                  type="submit"
                  className="btn btn-sm btn-submit"
                >
                  Save
                </button>
                <Link to="/customers" className="btn btn-sm btn-cancel">
                  Cancel
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
