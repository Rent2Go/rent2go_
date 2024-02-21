
import React, { useEffect, useState } from "react";
import "./accountSettings.css";
import { useTranslation } from "react-i18next";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import * as Yup from "yup";
import UserService from "../../../services/UserService";
import { UserModel } from "../../../models/user/UserModel";
import { useAuth } from "../../../contexts/AuthContext";
import OverlayLoaderLoad from "../../OverlayLoader/OverlayLoaderLoad";
import { UpdateUserAccountSettingsRequest } from "../../../models/requests/user/UpdateUserAccountSettings";
import { ToastContainer, toast } from "react-toastify";


const AccountSettings = () => {
  const auth = useAuth()
  const { t } = useTranslation();




  const [user, setUser] = useState<UserModel>();
  useEffect(() => {
    getUser(auth.authInformation.user.id)

  }, [user?.id])


  const getUser = async (id: number) => {
    await UserService.getById(id)
      .then((res: any) => {
        setUser(res.data.data)
      })
  }
  const fileInputRef = React.createRef<HTMLInputElement>();
  const handleImageClick = () => {
    // Resim üzerine tıklandığında veya üzerine gelindiğinde
    // file input'un click olayını tetikle
    fileInputRef.current?.click();
  };

  const AccountSettingsSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 character long.")
      .required("Name field cannot be empty"),
    surname: Yup.string()
      .min(3, "Surnamemust be at least 3 character long.")
      .required("Surname field cannot be empty"),
    phoneNumber: Yup.string()
      .min(11, "Phone number must contain 11 characters")
      .max(11, "Phone number must contain 11 characters")
      .required("Phone field cannot be empty"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email field cannot be empty"),
    nationalityId: Yup.string()
      .min(10)
      .required("Nationality Id field cannot be empty"),
    birthDate: Yup.date().required("Date of Birth field cannot be empty"),
  });

  const handleSubmit = async (id: number, values: any) => {
    await UserService.updateUserAccountSettings(id, values)
      .then((res: any) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.warn(err.response.data.message)
      })

  };
  if (!user) return <OverlayLoaderLoad />
  return (
    <div className="accountSettings">
      <h2 className="mainHead1 text-center">{t("personalInformations")}</h2>
      <div className="form">
        <Formik
          initialValues={
            {
              name: user.name,
              surname: user.surname,
              phoneNumber: user.phoneNumber,
              email: user.email,
              nationalityId: user.idCardNumber,
              birthDate: user.birthDate,
            }
          }
          validationSchema={AccountSettingsSchema}
          onSubmit={(values) => handleSubmit(user.id, values)}
        >
          <Form>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
               
              </div>
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12 imgDiv">
              
                    <img
                      src={`${user.imageUrl}`}
                      alt="profile"
                      onClick={handleImageClick}
                    
                    />
                <input type="file"   ref={fileInputRef} style={{ display: 'none' }} alt="Profil image" name="imgUrl" />
                </div>
              </div>
           
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="name"
                  type="text"
                  label={t("firstName")}
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="surname"
                  type="text"
                  label={t("lastName")}
                ></FormikInput>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="phoneNumber"
                  type="text"
                  label={t("phoneNumber")}
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12- col-sm-12" >
                <FormikInput
                  name="birthDate"
                  type="date"
                  label={t("birthDate")}
                ></FormikInput>
              </div>

            </div>

            <div className="form-group">
              <FormikInput
                disabled
                name="email"
                type="email"
                label={t("email")}
              ></FormikInput>

            </div>
            <div className="form-group" >
              <FormikInput
                disabled
                name="nationalityId"
                type="text"
                label={t("nationalityId")}
              ></FormikInput>

            </div>

            <div className="row text-center">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <button className="mainButton1">{t("saveChanges")}</button>
              </div>
            </div>

          </Form>
        </Formik>
       <ToastContainer position="bottom-center" />
      </div>

    </div>
  );
};

export default AccountSettings;
