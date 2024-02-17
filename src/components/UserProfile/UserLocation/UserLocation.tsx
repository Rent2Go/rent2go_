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
import { onChange } from "react-toastify/dist/core/store";

const UserLocation = () => {

  const { t } = useTranslation();

    
  const [cities, setCities] = useState<CityModel[]>([]);
  const [districts, setDistricts] = useState<DistrictModel[]>([]);
  const [cityId, setCityId] = useState<number>(0)
  const [selectedFilter, setSelectedFilter] = useState<DistrictModel[]>([])



  const initialValues: any = {
    city: "",
    district: "",
    address: "",
  };

  const UserLocationSchema = Yup.object().shape({
    city: Yup.string().required("City field cannot be empty"),
    district: Yup.string().required("District field cannot be empty"),
    address: Yup.string().required("Address field cannot be empty"),
  });

  const handleSubmit = () => {};

  
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
    getCities()
    getDistricts()
  },[])

  const handleCityChange = async (selectedCity: number) => {
    setCityId(selectedCity);
    const city = cities.find((city) => city.id == selectedCity);

    const selectedCityDistrict = districts.filter((district: DistrictModel) => district.city.id == selectedCity)
    setSelectedFilter(selectedCityDistrict)
  }


  return (
    <div className="userLocation">
      <h2 className="mainHead1 text-center">{t("locationInformation")}</h2>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={UserLocationSchema}
          onSubmit={handleSubmit}
        >
            <Form>
                <div className="row">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <div>
                        <label className="form-label">City</label>
                        <Field
                          name="city"
                          as="select"
                          className="form-control"
                          onChange={(e: any) => handleCityChange(e.target.value)}
                          value={cityId}
                        >
                        {cities.map((value:any) => (
                          <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>
                        ))}
                        </Field>
                      </div>
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <label className="form-label">District</label>
                        <Field
                          name="districtId"
                          as="select"
                          className="form-control"
                        >
                        {selectedFilter.map((value: DistrictModel) => (
                          <option key={value.id} value={value.id}>{value.districtName.toUpperCase()}</option>
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
            </Form>
        </Formik>
      </div>
      <div className="row text-center">
        <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
        <button className="mainButton1">{t("saveLocationChanges")}</button>
        </div>
      </div>
      
    </div>
  );
};

export default UserLocation;
