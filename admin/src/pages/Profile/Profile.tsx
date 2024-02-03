import React from "react";
import "./settings.css";
import { Formik } from "formik";
import { FormikInput } from "../../components";
import Input from "antd/es/input/Input";
type Props = {};

const Settings = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};
  const validationSchema = () => {};
  return (
    <div className="settings container">
      <div className="secContainer">
        <h2 className="settings__title">Profile</h2>
        <p className="profile__desc">
          Update your photo and personal details here
        </p>
        <div className="settings__wrapper">
          <div className="details__form">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <form className="form">
                <div className="row">
                  <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="imgDiv">
                          <img
                            src="assets/images/profile.png"
                            alt="profile-photo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="btn-row">
                          <div className="">
                            <button
                              className="btn-light btn btn-login btn-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                          <div className="">
                            <button
                              className="btn-danger btn btn-login btn-sm"
                              type="submit"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-l-8 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                      <p>Profile Photo</p>
                        <Input
                          name="imgUrl"
                          className="form-control"
                          type="file"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="firstName"
                          type="text"
                          label="First Name"
                          placeHolder="Enter Your First Name"
                        />
                      </div>
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="lastName"
                          type="text"
                          label="Last Name"
                          placeHolder="Enter Your Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="username"
                          type="text"
                          label="User Name"
                          placeHolder="Enter Your User Name"
                        />
                      </div>
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="birthday"
                          type="date"
                          label="Birthday"
                          placeHolder="Enter Your birthday"
                        />
                      </div>
                    </div>
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
                          name="phoneNumber"
                          type="text"
                          label="Phone Number"
                          placeHolder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="row">
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
                          name="re-password"
                          type="password"
                          label="Password Again"
                          placeHolder="Enter Your Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
