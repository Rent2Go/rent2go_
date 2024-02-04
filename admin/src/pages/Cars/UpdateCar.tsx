import React, { useEffect, useState } from 'react'
import "./styles/cars.css"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikInput, FormikSelect } from '../../components';
import Dropzone from 'react-dropzone-uploader';
import { Link, useParams } from 'react-router-dom';
import { CarModel } from '../../models/responses/cars/GetCar';
import CarService from '../../services/CarService';
import { ColorModel } from '../../models/responses/colors/ColorModel';
import ColorService from '../../services/ColorService';
import { BrandModel } from '../../models/responses/brands/GetBrand';
import BrandService from '../../services/BrandService';
import ModelService from '../../services/ModelService';
import { ModelModel } from '../../models/responses/models/GetModel';
import { UpdateCarRequest } from '../../models/requests/cars/UpdateCarRequest';

type Props = {}

const UpdateCar = (props: Props) => {

  const gearType = [
    { id: 1, name: "Manuel" },
    { id: 2, name: "Automatıc" }
  ];


  const bodyType = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "Hatchback" },
    { id: 3, name: "SUV" },
    { id: 4, name: "Coupe" }

  ];

  const fuelType = [
    { id: 1, name: "Gasolıne" },
    { id: 2, name: "Dıesel" },
    { id: 3, name: "Electrıc" },
    { id: 4, name: "Hybrıd" }
  ];


 const updateCarInitialValues: UpdateCarRequest = {
    kilometer: 0,
    year: 0,
    dailyPrice: 0,
    plate: "",
    modelId: 0,
    colorId: 0,
    bodyType: "",
    fuelType: "",
    gearType: "",
    cylinderCount: "",
    enginePower: "",

  }
  const onSubmit = () => {};
  const [cars, setCars] = useState<CarModel> ();

  const [colors, setColors] = useState<ColorModel[]>([]);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [models, setModels] = useState<ModelModel[]>([]);


  useEffect( () => {
    getColors()
    getBrands()
    getModels()
  },[])

  const formData = new FormData();
  const handleSelected = (event:any) => {

    formData.append("file", event.target.files[0]);

   


  };

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


  const getColors = () => {
    const response = ColorService.getAll()
    .then( (res) => {setColors(res.data.data)} )
    .catch( (err) => {console.log(err)} )
  }

  const getBrands = () => {
    const response = BrandService.getAll()
    .then( (res) => {setBrands(res.data.data)} )
    .catch( (err) => {console.log(err)} )
  }

  const getModels = () => {
    const response = ModelService.getAll()
    .then( (res) => {setModels(res.data.data)} )
    .catch( (err) => {console.log(err)} )
  }

  return (
    <div className="cars container">
    <div className="secContainer">
      <div className="titleContainer">
        <h2>Update Car</h2>
      </div>
      <div className="formContainer">
        <Formik initialValues={updateCarInitialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="plate"
                  type="text"
                  label="Plate No"
                  placeHolder="Enter Plate No"
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect  name="colorId" label="Color" values={colors}></FormikSelect>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect  name="brandId" label="Brand" values={brands}></FormikSelect>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect  name="modelId" label="Model" values={models}></FormikSelect>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="year"
                  type="number"
                  label="Year"
                  placeHolder="Enter Model Year"
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <label htmlFor="bodyType" className="form-label">
                  Body Type
                </label>
                <Field as="select"  name="bodyType" className="form-control"  >
                  <option value="" >  Seçiniz </option>
                  {bodyType.map((bodyType) => (
                    <option key={bodyType.id} value={bodyType.name.toUpperCase()}>{bodyType.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="bodyType" component="div" className="alert-text" />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <label htmlFor="fuelType" className="form-label">
                  Fuel Type
                </label>
                <Field as="select"  name="fuelType" className="form-control"  >
                  <option value="" >  Seçiniz </option>
                  {fuelType.map((fuelType) => (
                    <option key={fuelType.id} value={fuelType.name.toUpperCase()}>{fuelType.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="fuelType" component="div" className="alert-text" />
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <label htmlFor="gearType" className="form-label">
                  Gear Type
                </label>
                <Field as="select"  name="gearType" className="form-control"  >
                  <option value="" >  Seçiniz </option>
                  {gearType.map((gearType) => (
                    <option key={gearType.id} value={gearType.name.toUpperCase()}>{gearType.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="gearType" component="div" className="alert-text" />
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
                  type="number"
                  label="Kilometer"
                  placeHolder="Enter Kilometer"
                ></FormikInput>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikInput
                  name="dailyPrice"
                  type="number"
                  label="Daily Price"
                  placeHolder="Enter Daily Price"
                ></FormikInput>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">

                <label className="mb-3 mt-5">Images</label>
                <input type="file" className="form-control" name='image' onChange={handleSelected}/>

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