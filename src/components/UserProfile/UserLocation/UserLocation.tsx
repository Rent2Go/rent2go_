import React, { useEffect, useState } from "react";
import "./UserLocation.css";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import DistrictService from "../../../services/DistrictService";
import { CityModel } from "../../../models/responses/cities/GetCity";
import { DistrictModel } from "../../../models/responses/districts/GetDistrict";
import CityService from "../../../services/CityService";
import UserService from "../../../services/UserService";
import { UserModel } from "../../../models/user/UserModel";
import OverlayLoaderLoad from "../../OverlayLoader/OverlayLoaderLoad";
import { useAuth } from "../../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { UpdateUserLocationRequest } from "../../../models/requests/user/UpdateUserLocation";
import { resolve } from "path";

const UserLocation = () => {

  const { t } = useTranslation();

  const auth = useAuth()
  const [cities, setCities] = useState<CityModel[]>([]);
  const [districts, setDistricts] = useState<DistrictModel[]>([]);
  const [city, setCity] = useState<CityModel>()
  const [selectedFilter, setSelectedFilter] = useState<DistrictModel[]>([])
  const [user, setUser] = useState<UserModel>();
  const [cityId, setCityId] = useState<number | null>(null);
  const [districtId, setDistrictId] = useState<number | null>(null);




  const getUser = async (id: number) => {
    await UserService.getById(id)
      .then((res: any) => {
        setUser(res.data.data)
      })
  }





  const UserLocationSchema = Yup.object({
    cityId: Yup.number().required("City field cannot be empty"),
    districtId: Yup.number().required("District field cannot be empty"),
    address: Yup.string().required("Address field cannot be empty"),
  });

  const handleSubmit = async (id: number, values: UpdateUserLocationRequest) => {

    const payload = {
      ...values,
      cityId,
    };

    await UserService.updateUserLocation(id, payload)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
      })

  };


  const getCities = async () => {
    await CityService.getAll()
      .then((res) => {
        setCities(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getDistricts = async () => {
    await DistrictService.getAll()
      .then((res) => {
        setDistricts(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser(auth.authInformation.user.id)
    getCities()
    getDistricts()
  }, [user?.id])

  const handleCityChange = async (selectedCity: number) => {
    const city = cities.find((city) => city.id == selectedCity);
    const selectedCityDistrict = districts.filter((district: DistrictModel) => district.city.id == selectedCity)
    setSelectedFilter(selectedCityDistrict)
    setCity(city);
    setCityId(selectedCity);
    setDistrictId(null); 
  }

  if (!user) return <OverlayLoaderLoad />
  return (
    <div className="userLocation">
      <h2 className="mainHead1 text-center">{t("locationInformation")}</h2>
      <div className="form">
        <Formik
          initialValues={{
            cityId: user?.city?.id,
            districtId: user.district?.id,
            address: user?.address,
          }}
          //validationSchema={UserLocationSchema}
          onSubmit={(values) => handleSubmit(user?.id, values)}
        >
          <Form>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <div>
                  <label className="form-label">{t("city")}</label>
                  <Field
                    name="cityId"
                    as="select"
                    className="form-control"
                    onChange={(e: any) => handleCityChange(e.target.value)}
                    value={cityId}
                  >
                    {user.district && (
                      <option key={user?.city?.id} value={user.city.id}>
                        {user.city.name.toUpperCase()}
                      </option>
                    )}
                    {cities.map((value: any) => (
                      <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>
                    ))}
                  </Field>
                </div>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <label className="form-label">{t("district")}</label>
                <Field
                  name="districtId"
                  as="select"
                  className="form-control"
                  value={districtId} 
                >
                  {user.city && (
                    <option key={user?.district?.id} value={user?.district?.id}>
                      {user.district.districtName}
                    </option>
                  )}

                  {selectedFilter.map((value: DistrictModel) => (
                    <option key={value.id} value={value.id}>
                      {value.districtName.toUpperCase()}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <FormikInput
                  name="address"
                  type="textarea"

                  label={t("address")}
                ></FormikInput>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                <button type="submit" className="mainButton1">{t("saveLocationChanges")}</button>
              </div>
            </div>
          </Form>
        </Formik>
        <ToastContainer position="bottom-center" />
      </div>


    </div>
  );
};

export default UserLocation;
