import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput, FormikSelect } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import "./styles/cars.css";
import "react-dropzone-uploader/dist/styles.css";

import Dropzone from "react-dropzone-uploader";

import CarService from "../../services/CarService";
import ColorService from "../../services/ColorService";
import BrandService from "../../services/BrandService";
import ModelService from "../../services/ModelService";

import { ColorModel } from "../../models/responses/colors/ColorModel";
import { BrandModel } from "../../models/responses/brands/GetBrand";
import { AddCarRequest } from "../../models/requests/cars/AddCarRequest";
import { ModelModel } from "../../models/responses/models/GetModel";

type Props = {

}

const AddCar = (props: Props) => {

  const gearType = [
    { id: 1, name: "Manual" },
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





  const navigate = useNavigate();
  const [colors, setColors] = useState<ColorModel[]>([]);
  const [filterModels, setFilterModels] = useState<ModelModel[]>([]);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [models, setModels] = useState<ModelModel[]>([]);
 

  useEffect(() => {
    getBrands()
    getColors()
    getModels()
  }, [filterModels])

  const addCarInitialValues: AddCarRequest = {
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

  const AddCarRequestSchema = Yup.object({
    kilometer: Yup.number()
      .required('Kilometer field cannot be empty.')
      .min(0, 'Kilometer must be greater than or equal to 0.'),
    year: Yup.number()
      .required('Year field cannot be empty.')
      .min(2005, 'Year must be greater than or equal to 2005.')
      .max(2024, 'Year must be less than or equal to the current year.'),
    dailyPrice: Yup.number()
      .required('Daily price field cannot be empty.')
      .min(0, 'Daily price must be greater than 0.'),
    plate: Yup.string()
      .matches(
        /^(0[1-9]|[1-7][0-9]|8[01])/,
        'Invalid licence plate: Plate must start with a number between 01 and 81.'
      )
      .matches(
        /[A-Z]{1,3}/,
        'Invalid licence plate: Plate must consist of 1-3 uppercase letters after the first part.'
      )
      .matches(
        /[0-9]{2,4}$/,
        'Invalid licence plate: Plate must end with 4 numbers.'
      )

      .required('Plate field cannot be empty.')
      .min(5, 'Licence plate must be at least 5 characters long.')
      .max(11, 'Licence plate must be at most 11 characters long.'),
    modelId: Yup.number()
      .required('Model ID field cannot be empty.')
      .positive('ID must be a positive number.'),
    colorId: Yup.number()
      .required('Color ID field cannot be empty.')
      .positive('ID must be a positive number.'),
    bodyType: Yup.string()
      .required('Body type field cannot be empty.'),
    fuelType: Yup.string()
      .required('Fuel type field cannot be empty.'),
    gearType: Yup.string()
      .required('Gear type field cannot be empty.'),
    cylinderCount: Yup.string()
      .required('Cylinder count field cannot be empty.'),
    enginePower: Yup.string()
      .required('Engine power field cannot be empty.')
  });

  const formData = new FormData();
  const getUploadParams = ({}) => {
    return { url: 'https://httpbin.org/post' }
  }
 
  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      console.log('Dosya yüklendi:', file);
      formData.append("file", file)


    } else if (meta.status === 'error') {
      console.error('Dosya yüklenirken bir hata oluştu:', meta);

    }
  };


  const handleSubmit = async (addCarInitialValues: AddCarRequest) => {
    console.log(addCarInitialValues);
    
    formData.append('addCarRequest', new Blob([JSON.stringify(addCarInitialValues)], { type: "application/json" }))
    await CarService.addCar(formData)
      .then((res) => {
        toast.success("Car added successfully")
        navigate("/cars")

      })
      .catch((err) => {
        toast.error(err.response.data.message)
        formData.delete('addCarRequest')
      })

  }
  const handleBrandChange =  (selectedBrand: number, setFieldValue: any) => {
    const brand = brands.find((brand) => brand.id == selectedBrand);
    const selectedBrandModels = models.filter((model: ModelModel) => model.brand.name === brand!.name)
    setFilterModels(selectedBrandModels); 
  
    
    if (selectedBrandModels.length > 0) {
      setFieldValue('modelId', selectedBrandModels[0].id);
    } else {
      setFieldValue('modelId', '');
    }
  }


  const getColors = () => {
    ColorService.getAll()
      .then((res) => { setColors(res.data.data) })
      .catch((err) => console.log(err))
  };

  const getBrands = () => {
    BrandService.getAll()
      .then((res) => { setBrands(res.data.data) })
      .catch((err) => { console.log(err) })
  }

  const getModels = () => {
    ModelService.getAll()
      .then((res) => {

        setModels(res.data.data)

      })
      .catch((err) => { console.log(err) })
  }



  
 


  return (
    <div className="cars container">
      <div className="secContainer">
        <div className="titleContainer">
          <h2>Add New Car</h2>
        </div>
        <div className="formContainer">
        <Formik initialValues={addCarInitialValues} validationSchema={AddCarRequestSchema} validateOnBlur={true}  onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
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
                  <label htmlFor="colorId" className="form-label">Color</label>
                  <Field as="select" name="colorId"  className="form-control" >
                
                    {colors.map((color: any) => (
                      <option key={color.id} value={color.id}>{color.name}  </option>
                    ))}
                  </Field>
                  <ErrorMessage name="colorId" component="div" className="alert-text" />
                </div>
              </div>
              <div className="row">
              <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="brandId" className="form-label">Brand</label>
                  <Field as="select" name="brandId"  className="form-control" onChange={(e: any) => handleBrandChange(e.target.value, setFieldValue)}>
                
                    {brands.map((brand: any) => (
                      <option key={brand.id} value={brand.id}>{brand.name}  </option>
                    ))}
                  </Field>
                  <ErrorMessage name="brandId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="modelId" className="form-label">Model</label>
                  <Field name="modelId" as="select"  className="form-control"  >
                    {filterModels.map((value: ModelModel) => (
                      <option key={value?.id} value={value?.id}>{value.name.toUpperCase()}</option>)
                    )}
                  </Field>
                  <ErrorMessage name="modelId" component="div" className="alert-text" />
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
                  <Field as="select" name="bodyType" className="form-control"  >
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
                  <Field as="select" name="fuelType" className="form-control"   >
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
                  <Field as="select" name="gearType" className="form-control"  >
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
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept='image/*'
                  />

                </div>

              </div>
              <div className="btnContainer">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>)}

          </Formik>
          <ToastContainer position="top-center" />
        </div>
      </div>



    </div>
  );
};

export default AddCar;
