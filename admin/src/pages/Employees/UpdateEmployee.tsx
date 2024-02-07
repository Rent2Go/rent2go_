import React from "react";
import "./styles/employee.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import Dropzone from "react-dropzone-uploader";
import { Link } from "react-router-dom";
type Props = {};

const UpdateEmployee = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};

  const getUploadParams = ({}) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = ({}) => {
    console.log();
  };
  const handleSubmit = () => {};

  return (
    <div className="users container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Update Employee (Update employee.name yazılacak )</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="Form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="First Name"
                    placeHolder="Enter First Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Last Name"
                    placeHolder="Enter Last Name"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Email Address"
                    placeHolder="Enter Email Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Phone Number"
                    placeHolder="Enter Phone Number"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Registration Number"
                    placeHolder="Enter Registration Number"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="ID Number"
                    placeHolder="Enter ID Number"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Birthday"
                    placeHolder="Enter Birthday"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Department"
                    placeHolder="Enter Department"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Job title"
                    placeHolder="Enter Job Title"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Salary"
                    placeHolder="Enter Salary"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="City"
                    placeHolder="Enter City"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="District"
                    placeHolder="Enter District"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Address"
                    placeHolder="Enter Address"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label className="mb-3 mt-5">Choose Your Profile Photo</label>
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    accept="image/*"
                  />
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
                <Link to="/users" className="btn btn-sm btn-cancel">
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

export default UpdateEmployee;
