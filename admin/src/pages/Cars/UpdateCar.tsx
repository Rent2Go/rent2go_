import React, { useEffect, useState } from 'react'
import "./styles/cars.css"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikInput } from '../../components';
import Dropzone from 'react-dropzone-uploader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CarModel } from '../../models/responses/cars/GetCar';
import CarService from '../../services/CarService';
import { ColorModel } from '../../models/responses/colors/ColorModel';
import ColorService from '../../services/ColorService';
import { BrandModel } from '../../models/responses/brands/GetBrand';
import BrandService from '../../services/BrandService';
import ModelService from '../../services/ModelService';
import { ModelModel } from '../../models/responses/models/GetModel';
import { UpdateCarRequest } from '../../models/requests/cars/UpdateCarRequest';
import { ToastContainer, toast } from 'react-toastify';


type Props = {}

const UpdateCar = (props: Props) => {

  const navigate = useNavigate();
  const [cars, setCars] = useState<CarModel>();
  const [colors, setColors] = useState<ColorModel[]>([]);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [models, setModels] = useState<ModelModel[]>([]);

  const [year, setYear] = useState(0)
  const [dailyPrice, setDailyPrice] = useState(0)
  const [kilometers, setKilometers] = useState(0)
  const [cylinderCount,setCylinderCount] = useState('')
  const [enginePower, setEnginePower] = useState('')
  const [plate, setPlate] = useState('')  


  const { id } = useParams()
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

  
 

/// USE STATE ALANINA SAHİP DEĞERLERİN İNPUT İÇERİSİNE GELMESİ HATALI ONA YARIN BAKILACAK..

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
  const onSubmit = () => { };


  useEffect(() => {
    getModels()
    if (id !== undefined) {
      getCarById(parseInt(id))
    }
    getColors()
    getBrands()
   

  }, [id])

  const formData = new FormData();
  const handleSelected = (event: any) => {
    formData.append("file", event.target.files[0]);
  };

  const getCarById = async (id: number) => {
     await CarService.getById(id)
      .then((res) => {
        setCars(res.data.data)
        setPlate(res.data.data.plate)
        setKilometers(res.data.data.kilometer)
        setCylinderCount(res.data.data.cylinderCount)
        setEnginePower(res.data.data.enginePower)
        setYear(res.data.data.year)
        setDailyPrice(res.data.data.dailyPrice)

      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })

  }
  
  //----------------------------------------------------------------

  let foundColor = colors.find((res) => res.name === cars?.colorName);
  let foundModel = models.find((res) => res.name === cars?.model.name);
  let foundBrand = brands.find((res) => res.name === cars?.model.brandName);

  //----------------------------------------------------------------


  const getCarDetails = async (id: string) => {

    let response = await CarService.getById(parseInt(id));
    setCars(response.data.data);
    console.log(response.data);
  };

  const getUploadParams = ({ }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ }) => {

  };

  const handleSubmit = async (updateCarInitialValues:UpdateCarRequest) => {
 
    
      await CarService.updateCar(updateCarInitialValues)
      .then((res) => {
        toast.success("Car updated successfully")
        navigate("/cars")
      
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }


  const getColors = () => {
    ColorService.getAll()
      .then((res) => { setColors(res.data.data) })
      .catch((err) => { console.log(err) })
  }

  const getBrands = () => {
     BrandService.getAll()
      .then((res) => { setBrands(res.data.data) })
      .catch((err) => { console.log(err) })
  }

  const getModels = () => {
    ModelService.getAll()
      .then((res) => { setModels(res.data.data) })
      .catch((err) => { console.log(err) })
  }
  const handleChange = (e:any) => {
    setPlate(e.target.value);
  };

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
                    value={plate}
                    label="Plate No"
                    placeHolder="Enter Plate No"
                    onChange={handleChange}
                
                   
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Color</label>
                    <Field
                      name="colorId"
                      as="select"
                      className="form-control"
                    >
                       <option value={foundColor?.id}>{foundColor?.name.toUpperCase()}</option>
                      {colors.map((value: any) => (
                       
                        <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>)
                      )}
                    </Field>
                    <ErrorMessage name="colorId">
                      {(message) => <span className="alert-text">{message}</span>}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <Field
                      name="brandId"
                      as="select"
                      className="form-control"
                    >
                        <option value={foundBrand?.id}>{foundBrand?.name.toUpperCase()}</option>
                      {brands.map((value: any) => (
                        <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>)
                      )}
                    </Field>
                    <ErrorMessage name="brandId">
                      {(message) => <span className="alert-text">{message}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label className="form-label">Model</label>
                    <Field
                      name="modelId"
                      as="select"
                      className="form-control"
                    >
                      <option value={foundModel?.id}>{foundModel?.name.toUpperCase()}</option>
                      {models.map((value: any) => (
                        <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>)
                      )}
                    </Field>
                    <ErrorMessage name="modelId">
                      {(message) => <span className="alert-text">{message}</span>}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="year"
                    type="number"
                    label="Year"
                    value={year}
                    placeHolder="Enter Model Year"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="bodyType" className="form-label">
                    Body Type
                  </label>
                  <Field as="select" name="bodyType" className="form-control"  >
                    <option value={cars?.bodyType} >  {cars?.bodyType || "SEÇİNİZ"}</option>
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
                  <Field as="select" name="fuelType" className="form-control"  >
                    <option value={cars?.fuelType} >  {cars?.fuelType}</option>
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
                    <option value={cars?.gearType} >{cars?.gearType}</option>
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
                    value={cylinderCount}
                    placeHolder="Enter Cylinder Count"
                    onChange={(e)=> setCylinderCount(e.target.value)}
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="enginePower"
                    type="text"
                    label="Engine Power"
                    value={enginePower}
                    placeHolder="Enter Engine Power"
                    onChange={(e)=> setEnginePower(e.target.value)}
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="kilometer"
                    type="number"
                    label="Kilometer"
                    value={kilometers}
                    placeHolder="Enter Kilometer"
                    onChange={(e)=> setKilometers(e.target.value)}
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="dailyPrice"
                    type="number"
                    label="Daily Price"
                    value={dailyPrice}
                    placeHolder="Enter Daily Price"
                    onChange={(e)=> setDailyPrice(e.target.value)}
                  ></FormikInput>
                </div>
              </div>
              <div className="btnContainer">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>

            </Form>
          </Formik>
          <ToastContainer position='bottom-right' />
        </div>
        <div className="secContainer">
          <div className="titleContainer">
            <h2>Update Car Image</h2>

          </div>
          { <Formik initialValues={updateCarInitialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label className="mb-3 mt-5">Images</label>
                  <input type="file" className="form-control" name='image' onChange={handleSelected} />
                </div>
              </div>
              <div className="btnContainer">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>

            </Form>
          </Formik> }

        </div>
      </div>



    </div>
  )
}

export default UpdateCar