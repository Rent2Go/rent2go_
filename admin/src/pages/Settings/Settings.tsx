import React from "react";
import "./settings.css";
import { Formik } from "formik";
import { FormikInput } from "../../components";
type Props = {};

const Settings = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};
  const validationSchema = () => {};
  return (
    <div className="settings container">
      <div className="secContainer">
        <h2 className="settings__title">Settings</h2>

        <div className="settings__wrapper">
          <div className="details__form">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <form className="form">
                <div className="row">
                  <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="imgDiv">
                          <img src="assets/images/logo-dark.png" alt="logo" />
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
                        <FormikInput
                          name="imgUrl"
                          type="file"
                          label="Logo"
                          placeHolder="Choose Logo"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="title"
                          type="text"
                          label="Title"
                          placeHolder="Enter Title of Your Web site"
                        />
                      </div>
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="domain"
                          type="text"
                          label="Web URL"
                          placeHolder="Enter Web URL of Your Web site"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="linkedin"
                          type="text"
                          label="Linked In"
                          placeHolder="Enter Your Linked In Profile URL"
                        />
                      </div>
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="linkedin"
                          type="text"
                          label="Instagram"
                          placeHolder="Enter Your Instagram Profile URL"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <FormikInput
                          name="email"
                          type="mail"
                          label="Contact Email Address"
                          placeHolder="Enter Mail Address For Contact Form"
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
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                          name="address"
                          type="text"
                          label="Address"
                          placeHolder="Enter Your Address"
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
