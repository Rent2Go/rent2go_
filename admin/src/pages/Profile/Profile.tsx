import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Input from "antd/es/input/Input";
import { Link } from "react-router-dom";
import { useSSR } from "react-i18next";

import { FormikInput } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";

import "./settings.css";
type Props = {};

const Settings = (props: Props) => {
 const auth =  useAuth()
 const email = auth.authInformation.user.email;
 const [user,setUser] = useState<UserModel>();
 console.log(user?.imageUrl);
 

 const getUserByEmail = async(email:string)=>{

  await UserService.getByEmail(email)
  .then((res:any)=>{
      setUser(res.data.data)
  })
 }

 useEffect(() => {
  if(email ){
    getUserByEmail(email)
  }
 }, [email])
 
  const initialValues = () => {};
  const onSubmit = () => {};
  const validationSchema = () => {};
  return (
    <div className="settings container">
      <div className="secContainer">
        <div className="titleContainer">
          <h2>Profile</h2>
        </div>
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
                        {user?.imageUrl ? (
                <img
                  src={`/assets/images/userImages/${user.imageUrl}`}
                  alt="profile"
                />
              ) : (
                <img
                  src="/assets/images/userImages/user-default.jpg"
                  alt="default-img"
                />
              )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="btn-row">
                          <div className="">
                            <button
                              className="btn-submit btn  btn-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                          <div className="">
                            <Link to="/"
                              className="btn-cancel btn"
                              type="button"
                            >
                              Cancel
                            </Link>
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
