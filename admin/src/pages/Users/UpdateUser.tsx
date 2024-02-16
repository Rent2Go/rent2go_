import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Dropzone from 'react-dropzone-uploader';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { FormikInput } from '../../components';
import UserService from '../../services/UserService';
import { UserModel } from '../../models/responses/users/GetUser';
import { ToastContainer, toast } from 'react-toastify';
import { object, ref, string } from "yup";
import { UpdateUserRequest } from '../../models/requests/users/UpdateUserRequest';
import DistrictService from '../../services/DistrictService';
import CityService from '../../services/CityService';
import { DistrictModel } from '../../models/responses/districts/GetDistrict';
import { CityModel } from '../../models/responses/cities/GetCity';
import OverlayLoaderTest from '../../components/OverlayLoader/OverlayLoaderTest';

import "./styles/user.css";

type Props = {}

const UpdateUser = (props: Props) => {

  const formData = new FormData()
  const navigate = useNavigate()
  const { id } = useParams()
  const userId = parseInt(id || '');
  const [user, setUser] = useState<UserModel | undefined>();
  const [cities, setCities] = useState<CityModel[]>([])
  const [resultCity, setResultCity] = useState<CityModel>()
  const [districts, setDistricts] = useState<DistrictModel[]>([])
  const [selectedFilter, setSelectedFilter] = useState<DistrictModel[]>([])

  const role = [
    { id: 1, value: "ADMIN", name: 'Admin' },
    { id: 2, value: "USER", name: 'User' }
  ]

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

  const onSubmit = async (updateUserRequest: UpdateUserRequest) => {
    console.log(updateUserRequest);
    await UserService.updateUser(updateUserRequest)
      .then((res: any) => {
        toast.success(res.data.message)
      })
      .catch((err: any) => {
        toast.error(err.response.data.message)
      })
  }

  const updateUserValidationSchema = object({
    name: string()
      .required("First Name field is required.")
      .min(2, "First Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
    surname: string()
      .required("Last Name field is required.")
      .min(2, "Last Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
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

  useEffect(() => {
    getByIdUser(userId);
    getCities();
    getDistricts();
  }, [])

  const imageHandleSubmit = async (values: any) => {
    formData.append("email", values.email)
    await UserService.updateImage(formData)
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err)
        formData.delete("email")
      })
  }

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

  const handleCityChange = (selectedCity: number) => {
    const city = cities.find((city: CityModel) => city.id == selectedCity);
    const selectedCityDistrict = districts.filter((district: DistrictModel) => district.city.name === city?.name);
    setSelectedFilter(selectedCityDistrict);
    setResultCity(city);
  }

  const getByIdUser = async (id: number) => {
    await UserService.getById(id)
      .then((res) => {
        setUser(res.data.data)

      })
      .catch((err) => {
        toast.error(err.message)
      })
  }




  if (!user) return <OverlayLoaderTest />;

  return (
    <div className="users container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Update User ({user?.name} {user?.surname})</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={{
            id: user.id,
            name: user.name,
            surname: user.surname,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password,
            idCardNumber: user.idCardNumber,
            birthDate: user.birthDate,
            role: user.role,
            active: user.active,
            imageUrl: user.imageUrl,
            address: user.address,

            districtId: user.district.id,
          }} onSubmit={onSubmit} validateOnBlur={true} >
            <Form className="Form">
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="name"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="surname"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="idCardNumber"
                    label="Id Card Number"
                    placeHolder="Enter Your Id Card Number"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="email"
                    label="Email Address"
                    placeHolder="Enter Your Email Address"
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="phoneNumber"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="birthDate"
                    label="Birth Date"
                    type='date'
                    placeHolder="Enter Your Birth Date"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <label className="form-label">City</label>
                  <Field name="cityId" as="select" value={resultCity?.id} className="form-control" onChange={(e: any) => handleCityChange(e.target.value)}>
                  <option key={user.city.id} value={user.city.id}>{user.city.name.toUpperCase()}</option>
                    {cities.map((value: CityModel) => (
                      <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>)
                    )}
                  </Field>
                  <ErrorMessage name="cityId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <label className="form-label">District</label>
                  <Field name="districtId" as="select" className="form-control">

                    <option key={user.district.id} value={user.district.id}>{user.district.districtName.toUpperCase()}</option>

                    {selectedFilter.map((value: DistrictModel) => (
                      <option key={value.id} value={value.id}>{value.districtName.toUpperCase()}</option>)
                    )}
                  </Field>
                  <ErrorMessage name="districtId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12 col-xs-12">
                  <label htmlFor='role' className="form-label">Role</label>
                  <Field as="select" name="role" className="form-control">
                    <option key={user.role}


                      value={user.role.toUpperCase()}




                    >{user.role.toUpperCase()}</option>
                    {role.map((role) => (
                      <option key={role.id} value={role.name.toUpperCase()}>{role.name.toUpperCase()}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="role" component="div" className="alert-text" />
                </div>
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
                    rows={5}
                    cols={30}
                  />
                  <ErrorMessage name="address" component="div" className="error" />
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
        <div className="secContainer">
          <div className="titleContainer">
            <h2 className='text-center'>Update User Image</h2>
          </div>
          <div className="imgContainerDetail ">
            <img className='show-image' src={user.imageUrl} alt={user.name} />
          </div>
          <div className="formContainer">
            <Formik initialValues={{ email: user.email }} onSubmit={imageHandleSubmit}>
              <Form>
                <div className="row">
                  <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                    <label className="mb-3 mt-5">Images</label>
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      accept='image/*'
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
    </div>
  );
}

export default UpdateUser;
