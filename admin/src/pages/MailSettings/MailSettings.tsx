import React, { useEffect, useState } from "react";
import "./mailSettings.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import MailSettingsService from "../../services/MailSettingsService";
import { UpdateMailSettingsRequest } from "../../models/requests/mailSettings/UpdateMailSettingsRequest";
import { MailSettingsModel } from "../../models/responses/mailSettings/GetMailSettingsModel";
import { ToastContainer, toast } from "react-toastify";
import * as yup from 'yup';

type Props = {};

const initialValues: UpdateMailSettingsRequest = {
  id: 1,
  host: "",
  port: 0,
  username: "",
  password: "",
};

const MailSettings: React.FC<Props> = () => {
  const [mailSettings, setMailSettings] = useState<MailSettingsModel>();

  useEffect(() => {
    fetchMailSettings();
  }, []);

  const fetchMailSettings = async () => {
    try {
      const response = await MailSettingsService.getById();
      setMailSettings(response.data);
    } catch (error) {
      console.error("Error fetching mail settings:", error);
    }
  };

  const mailSettingsSchema = yup.object().shape({
    host: yup.string().required('Host is required'),
    port: yup.number().required('Port is required').positive('Port must be a positive number'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const updateMailSetting = async (values: UpdateMailSettingsRequest) => {
    try {
      await mailSettingsSchema.validate(values);

      await MailSettingsService.updateMailSettings(values);
      toast.success("Mail settings updated successfully");
      fetchMailSettings();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.error("Validation error:", error);
        toast.error("Validation failed");
      } else {
        console.error("Error updating mail settings:", error);
        toast.error("Failed to update mail settings");
      }
    }
  };

  const onSubmit = (values: UpdateMailSettingsRequest) => {
    updateMailSetting(values);
    console.log(values);
  };

  


  
  return (
    <div className="mailSettings container">
      <div className="secContainer">
        <div className="formContainer">
          <div className="formHeader">
            <div className="titleContainer">
              <h2>Mail Settings</h2>
            </div>
          </div>
          <div className="formContent">
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={mailSettingsSchema}>
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
                      <button
                        title="Submit"
                        type="submit"
                        className="btn btn-light btn-md"
                      >
                        Submit
                      </button>
                      <button
                        title="Cancel"
                        type="button"
                        className="btn btn-danger btn-md"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      {mailSettings && (
        <table className="mailSettingsTable">
          <thead>
            <tr>
              <th>Host</th>
              <th>Port</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mailSettings.host}</td>
              <td>{mailSettings.port}</td>
              <td>{mailSettings.username}</td>
              <td>{mailSettings.password}</td>
            </tr>
          </tbody>
        </table>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default MailSettings;
