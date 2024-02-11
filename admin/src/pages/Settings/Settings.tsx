import React, { useEffect, useState } from "react";
import "./settings.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import Input from "antd/es/input/Input";
import SettingsService from "../../services/SettingsService";
import { SettingsModel } from "../../models/responses/settings/SettingsModel";
import { ToastContainer, toast } from "react-toastify";
import { UpdateSettingsRequest } from "../../models/requests/settings/UpdateSettingsRequest";

import * as Yup from 'yup';
type Props = {};

const Settings = (props: Props) => {


  const validationSchema = Yup.object().shape({
    id: Yup.number().required('The settings id cannot be empty.').positive('Id must be a positive number.'),
    title: Yup.string().required('Title cannot be empty.'),
    url: Yup.string().required('URL cannot be empty.'),
    logo: Yup.string(),
    phoneNumber: Yup.string().matches(/^\d{11}$/, 'Phone number must be a 11-digit number.'),
    email: Yup.string().email('Invalid email format.'),
    address: Yup.string().required('Address cannot be empty.'),
    linkedin: Yup.string(),
    instagram: Yup.string(),
    github: Yup.string().required('Github cannot be empty.'),
  });

    const [settings, setSettigs] = useState<SettingsModel>();
    const formData = new FormData()
    const handleImage = (e:any)=>{
      formData.append("file",e.target.files[0])
      console.log(formData.get("file"));
      
    }
    
  const onSubmit = async (values:UpdateSettingsRequest) => { 

    if(formData.get("file") !==null){
      formData.append('settings', new Blob([JSON.stringify(values)], { type: "application/json" }))
      await SettingsService.updateSettingsAndImage(formData)
      .then((res:any)=> {
        toast.success(res.data.message)
      })
      .catch((err)=> {
        toast.error(err.response.data.message)
        formData.delete("settings")
      })
  }
   else {
    await SettingsService.updateSettings(values)
    .then((res:any)=> {
      toast.success(res.data.message)
    })
    .catch((err)=> {
      toast.error(err.response.data.message)
      formData.delete("settings")
    })
  
  }
  
  }
  const getSetttings = async(id:number)=>{

    await SettingsService.getById(id)
    .then((res)=>{
        setSettigs(res.data.data);
    })
    .catch((err)=>{
      toast.error(err.response.data.message)

    })

  }
  useEffect(() =>{
    getSetttings(1)
  },[])


  if(!settings) return <div>..loaidng</div>
  return (
    <div className="settings container">
      <div className="secContainer">
        <div className="titleContainer">
          <h2>Settings</h2>
        </div>
        <div className="settings__wrapper">
          <div className="details__form">
            <Formik initialValues={{
              id: settings.id,
              title: settings.title,
              url: settings.url,
              logo: settings.logo,
              phoneNumber: settings.phoneNumber,
              email: settings.email,
              address: settings.address,
              linkedin: settings.linkedin,
              instagram: settings.instagram,
              github:settings.github,
         

            }} validationSchema={validationSchema} validateOnBlur={true} onSubmit={onSubmit}>
              <Form className="form">
                <div className="row">
                  <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <div className="imgDiv">
                          <img src={settings?.logo} alt="logo" />
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
                        <p>Logo</p>
                        <Input
                          name="imgUrl"
                          className="form-control"
                          type="file"
                          onChange={(e)=>handleImage(e)}
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
                          name="url"
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
                          name="instagram"
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
                    <div className="row">
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                          name="github"
                          type="text"
                          label="Github"
                          placeHolder="Enter Your Github Address"
                        />
                      </div>
                    </div>
                   
                  </div>
                </div>
              </Form>
            </Formik>
            <ToastContainer position="bottom-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
