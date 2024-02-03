import React, { useEffect, useState } from "react";
import "./styles/cars.css";
import { Field, Form, Formik } from "formik";
import { FormikInput, FormikSelect } from "../../components";
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { IFileWithMeta, StatusValue } from "react-dropzone-uploader";
import { Link } from "react-router-dom";

import { AddCarRequest } from "../../models/requests/cars/AddCarRequest";

import ColorService from "../../services/ColorService";
import { ColorModel } from "../../models/responses/colors/ColorModel";
import { BrandModel } from "../../models/responses/brands/GetBrand";
import BrandService from "../../services/BrandService";
type Props = {
  
}

const AddCar = (props: Props) => {


  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const [colors, setColors] = useState<ColorModel[]>([]);
  console.log(colors);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  console.log(brands);

  useEffect(() => {
    getColors()
  },[])

  useEffect(()=>{
    getBrands()
  },[])






 
  
 
  const addCarInitialValues:AddCarRequest = {
    kilometer:0 ,
    year: 0 ,
    dailyPrice:0 ,
    plate: "",
    modelId: 0,
    colorId: 0,
    bodyType: "" ,
    fuelType: "",
    gearType: "",
    cylinderCount: "",
    enginePower: "",
    
  }


   const formData = new FormData();
  const handleChangeStatus = (fileWithMeta: IFileWithMeta, status: StatusValue) => {
    formData.append('file', fileWithMeta.file);
  }

    
  const handleSubmit = async ( addCarInitialValues:AddCarRequest) => {
   
    formData.append('addCarRequest', JSON.stringify(addCarInitialValues));
  

    try {
      const response = await CarService.addCar(formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('An error occurred while adding the car:', error);
    }
  }


  const getColors = () => {
    const response = ColorService.getAll()
    .then((res) => {setColors(res.data.data)
       console.log("deneme")})
    .catch((err) => console.log(err))
  };

  const getBrands = () => {
    const response = BrandService.getAll()
    .then( (res) => {setBrands(res.data.data)} )
    .catch( (err) => {console.log(err)} )
  }

  // receives array of files that are done uploading when submit button is clicked


  return (
    <div className="cars container">
      <div className="secContainer">
      <div className="titleContainer">
        <h2>Add New Car</h2>
      </div>
      <div className="formContainer">
        <Formik initialValues={addCarInitialValues} onSubmit={handleSubmit}>
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
                <FormikSelect id="1" name="color" label="Color" colors={colors}></FormikSelect>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect id="2" name="Brand" label="Brand" colors={brands}></FormikSelect>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect id="3" name="Model" label="Model" colors={colors}></FormikSelect>
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
                  label="Body Type" colors={colors}
                ></FormikSelect>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect
                  id="2"
                  name="fuelType"
                  label="Fuel Type" colors={colors}
                ></FormikSelect>
              </div>
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                <FormikSelect
                  id="3"
                  name="gearType"
                  label="Gear Type" colors={colors}
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
  );
};

export default AddCar;
