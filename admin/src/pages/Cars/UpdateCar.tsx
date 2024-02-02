import React, { useEffect, useState } from 'react'
import "./styles/cars.css"
import { Form, Formik } from 'formik';
import { FormikInput, FormikSelect } from '../../components';
import Dropzone from 'react-dropzone-uploader';
import { Link, useParams } from 'react-router-dom';
import { CarModel } from '../../models/responses/cars/GetCar';
import CarService from '../../services/CarService';

type Props = {}

const UpdateCar = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};
  const [cars, setCars] = useState<CarModel> ();

  const getCarDetails = async (id: string) => {
    
    let response = await CarService.getById(parseInt(id));
    setCars(response.data.data);
    console.log(response.data);
  };

  const getUploadParams = ({}) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({}) => {
    console.log();
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = () => {};

  return (
    <div className="cars container">
    <div className="secContainer">
    <div className="titleContainer">
      <h2>Update Car</h2>
    </div>
    <div className="formContainer">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                value={cars?.plate || ""}
                name="plate"
                type="text"
                label="Plate No"
                placeHolder="Enter Plate No"
              ></FormikInput>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect id="1" name="color" label="Color" colors={[]}></FormikSelect>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect id="2" name="Brand" label="Brand" colors={[]}></FormikSelect>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect id="3" name="Model" label="Model" colors={[]}></FormikSelect>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                name="year"
                type="text"
                label="Year"
                placeHolder="Enter Model Year"
              ></FormikInput>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect
                id="4"
                name="bodyType"
                label="Body Type" colors={[]}
              ></FormikSelect>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect
                id="2"
                name="fuelType"
                label="Fuel Type" colors={[]}
              ></FormikSelect>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikSelect
                id="3"
                name="gearType"
                label="Gear Type" colors={[]}
              ></FormikSelect>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                name="cylinderCount"
                type="text"
                label="Cylinder Count"
                placeHolder="Enter Cylinder Count"
              ></FormikInput>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                name="enginePower"
                type="text"
                label="Engine Power"
                placeHolder="Enter Engine Power"
              ></FormikInput>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                name="kilometer"
                type="text"
                label="Kilometer"
                placeHolder="Enter Kilometer"
              ></FormikInput>
            </div>
            <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
              <FormikInput
                name="dailyPrice"
                type="text"
                label="Daily Price"
                placeHolder="Enter Daily Price"
              ></FormikInput>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
              <label className="mb-3 mt-5">Images</label>
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*"
              />
            </div>
          </div>
          <div className="btnContainer">
            <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
            <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
          </div>
        </Form>
      </Formik>
    </div>
    </div>

    
   
  </div>
  )
}

export default UpdateCar