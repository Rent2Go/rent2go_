import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import Dropzone from "react-dropzone-uploader";
import { ToastContainer, toast } from "react-toastify";

import { FormikInput } from "../../components";
import UserService from "../../services/UserService";
import { AddCarRequest } from "../../models/requests/cars/AddCarRequest";
import { AddUserRequest } from "../../models/requests/users/AddUserRequest";

import "./styles/user.css";
type Props = {};

const AddUser = (props: Props) => {
  const formData = new FormData();
  const navigate = useNavigate()
  const AddUserValidationSchema  = object({
    name: string()
      .required("First Name field is required.")
      .min(2, "First Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
    surname: string()
      .required("Last Name field is required.")
      .min(2, "Last Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.')
    ,
  
    phoneNumber: string().required("Phone number is required.")
      .matches(
        /^05\d{9}$/,
        "Phone number must be in the format 05xxxxxxxxx."
      ),
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
    password: string().required("Password field is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "Password must include at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
      .matches(/\d/, "Password must include at least one number.")
      .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
      confirmPassword: string().required("Password field is required.")
      .oneOf([ref('password')], 'Passwords do not match')
  });

  const role = [
    {id:1,name:'ADMIN'},
    {id:2,name:'USER'}

  ]
  
 

  const getUploadParams = ({}) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      console.log('Dosya yüklendi:', file);
      formData.append("file", file)


    } else if (meta.status === 'error') {
      console.error('Dosya yüklenirken bir hata oluştu:', meta);

    }
  };
  const handleSubmit = async (addUserRequest:AddUserRequest) => {
    formData.append('addUserRequest', new Blob([JSON.stringify(addUserRequest)], { type: "application/json" }))
    await UserService.createUser(formData)
      .then((res) => {
        toast.success("Car added successfully")
        navigate("/users")

      })
      .catch((err) => {
        toast.error(err.response.data.message)
        formData.delete('addUserRequest')
      })

  }

  return (
    <div className="users container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Add New User</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={{
            	name: '',
              surname: '',
              phoneNumber: '',
              email: '',
              password: '',
              confirmPassword:'',
              role: '',

          }} onSubmit={handleSubmit}
          validationSchema={AddUserValidationSchema}
          validateOnBlur={true}>
            <Form className="Form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="name"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="surname"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="email"
                    label="Email Address"
                    placeHolder="Enter Your Email Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="phoneNumber"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="password"
                    type='password'
                    label="Password"
                    placeHolder="Enter Your Password"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="confirmPassword"
                    type='password'
                    label="Re-Password"
                    placeHolder="Enter Your Password Again"
                  ></FormikInput>
                </div>

                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                <Field as="select" name="role" className="form-control"  >
                    <option value="" >  Seçiniz </option>
                    {role.map((role) => (
                      <option key={role.id} value={role.name.toUpperCase()}>{role.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="bodyType" component="div" className="alert-text" />
                  </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label className="mb-3 mt-5">Choose Your Profile Photo</label>
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
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
          <ToastContainer position="bottom-center" />
          
        </div>
  
      </div>
    </div>
  );
};

export default AddUser;
