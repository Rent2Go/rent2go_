<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./styles/user.css";
<<<<<<< HEAD
=======

import React, { useEffect, useState } from "react";
import "./styles/user.css";

>>>>>>> yagmur
=======
<<<<<<< HEAD
import { FormikInput, FormikSelect } from "../../components";
=======
>>>>>>> master
>>>>>>> feyza
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import Dropzone from "react-dropzone-uploader";
import { ToastContainer, toast } from "react-toastify";

import { FormikInput, FormikSelect } from "../../components";
import UserService from "../../services/UserService";
import { AddCarRequest } from "../../models/requests/cars/AddCarRequest";
import { AddUserRequest } from "../../models/requests/users/AddUserRequest";
<<<<<<< HEAD
=======

import "./styles/user.css";

>>>>>>> yagmur
import CityService from "../../services/CityService";
import { CityModel } from "../../models/responses/cities/GetCity";
import { DistrictModel } from "../../models/responses/districts/GetDistrict";
import DistrictService from "../../services/DistrictService";

<<<<<<< HEAD
import "./styles/user.css";
=======
>>>>>>> yagmur
type Props = {};

const AddUser = (props: Props) => {

  const [cities, setCities] = useState<CityModel[]>([])
  const [cityId, setCityId] = useState<number>(0)
  const [districts, setDistricts] = useState<DistrictModel[]>([])
  const [selectedFilter, setSelectedFilter] = useState<DistrictModel[]>([])
  const formData = new FormData();
  const navigate = useNavigate()
  const AddUserValidationSchema = object({
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
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'USER' }]




  const getCities = async () => {
    await CityService.getAll()
      .then((res) => {
        setCities(res.data.data)
      })

      .catch((err) => { console.log(err) })
  }
  const getDistricts = async () => {
    await DistrictService.getAll()
      .then((res) => {
        setDistricts(res.data.data)
      })

      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getCities()
    getDistricts()

  }, [])

  const handleCityChange = async (selectedCity: number) => {
    setCityId(selectedCity)
    const city = cities.find((city) => city.id == selectedCity);

    const selectedCityDistrict = districts.filter((district: DistrictModel) => district.city.name == city?.name) // Bu fonksiyonun gerçek uygulamada nasıl yapıldığına bağlı olarak değişir
    setSelectedFilter(selectedCityDistrict)

  }







  const getUploadParams = ({ }) => {
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
  const handleSubmit = async (addUserRequest: AddUserRequest) => {
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
            idCardNumber: '',
            birthDate: '',
            password: '',
            confirmPassword: '',
            role: '',
            address: '',
            districtId: 0,

          }} onSubmit={handleSubmit}
            validationSchema={AddUserValidationSchema}
            validateOnBlur={true}>
            <Form className="Form">
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="name"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="surname"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="idCardNumber"
                    label="Id Card Number"
                    placeHolder="Enter Your Id Card Number"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="email"
                    label="Email Address"
                    placeHolder="Enter Your Email Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="phoneNumber"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="birthDate"
                    label="Birth Date"
                    type='date'
                    placeHolder="Enter Your Birth Date"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="password"
                    label="Password"
                    placeHolder="Enter Your Password"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="confirmPassword"
                    label="Confirm Password"
                    placeHolder="Enter Your Confirm Password"
                  ></FormikInput>
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <label className="form-label">Role</label>
                  <Field as="select" name="role" className="form-control"  >
                    <option value="" >  Seçiniz </option>
                    {role.map((role) => (
                      <option key={role.id} value={role.name.toUpperCase()}>{role.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="role" component="div" className="alert-text" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikSelect name="cityId" label="City" values={cities} onChange={(e: any) => handleCityChange(e.target.value)}  ></FormikSelect>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label className="form-label">District</label>
                  <Field name="districtId" as="select" className="form-control" >
                    {selectedFilter.map((value: DistrictModel) => (
                      <option key={value.id} value={value.id}>{value.districtName.toUpperCase()}</option>)
                    )}
                  </Field>
                </div>
              </div>
              <div className="row">
              </div>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12 col-xs-12">
                  <label htmlFor="address">Address</label>
                  <Field
                    component="textarea"
                    id="address"
                    name="address"
                    placeholder="Enter Your Address"
                    className="form-control"
                    rows={5} // Metin alanının dikey boyutunu belirler
                    cols={30}
                  />
                  <ErrorMessage name="address" component="div" className="error" />
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
