import React from 'react'
import "./styles/user.css"
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { FormikInput } from '../../components';
import Dropzone from 'react-dropzone-uploader';

type Props = {}

const UpdateUser = (props: Props) => {
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
          <h2>Add New User</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="Form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Email Address"
                    placeHolder="Enter Your Email Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Password"
                    placeHolder="Enter Your Password"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="nn"
                    label="Re-Password"
                    placeHolder="Enter Your Password Again"
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
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/users" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser