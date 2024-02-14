
import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CarModel } from '../../models/responses/cars/GetCar';
import CarService from '../../services/CarService';
import ColorService from '../../services/ColorService';
import BrandService from '../../services/BrandService';
import ModelService from '../../services/ModelService';
import { UpdateCarRequest } from '../../models/requests/cars/UpdateCarRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorModel } from '../../models/responses/colors/ColorModel';
import { BrandModel } from '../../models/responses/brands/GetBrand';
import { ModelModel } from '../../models/responses/models/GetModel';
import { FormikInput } from '../../components';
import * as Yup from "yup"
import Dropzone from 'react-dropzone-uploader';

const UpdateCar = () => {
  const { id } = useParams();
  const carId = parseInt(id || '');
  const navigate = useNavigate();
  const [car, setCar] = useState<CarModel>();
  const [colors, setColors] = useState<ColorModel[]>([]);
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [models, setModels] = useState<ModelModel[]>([]);
  const [filterModels, setFilterModels] = useState<ModelModel[]>([]);
  const [isSubmited, setIsSubmited] = useState<Boolean>(false);

  useEffect(() => {
    if (isSubmited) {
      fetchData();
      setIsSubmited(false);
    }
    else  
     fetchData();
  
  }, [id, isSubmited]);

  const fetchData = async () => {
    try {
      const [carResponse, colorsResponse, brandsResponse, modelsResponse] = await Promise.all([
        id ? CarService.getById(parseInt(id)) : null,
        ColorService.getAll(),
        BrandService.getAll(),
        ModelService.getAll()
      ]);

      setCar(carResponse?.data.data);
      setColors(colorsResponse?.data.data);
      setBrands(brandsResponse?.data.data || []);
      setModels(modelsResponse?.data.data || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSubmit = async (values: UpdateCarRequest) => {
    try {
      await CarService.updateCar(values);
      toast.success("Car updated successfully");
      navigate("/cars");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  



  const AddCarRequestSchema = Yup.object().shape({
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
      .required('Plate field cannot be empty.')
      // .matches(/^(?iu)\s?(0[1-9]|[1-7][0-9]|8[01])\s?[A-Za-zğüşıöçĞÜŞİÖÇ]{1,3}\s?[0-9]{2,4}\s?$/, 'Invalid licence plate')
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

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }; // Dosyaların yükleneceği URL
  };
  const formData = new FormData()

  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      console.log('Dosya yüklendi:', file);
      formData.append("file",file)
   
  
    } else if (meta.status === 'error') {
      console.error('Dosya yüklenirken bir hata oluştu:', meta);
   
    }
  };

  const imageHandleSubmit = async (values:any) => {
    formData.append("plate",values.plate)
    await CarService.updateImage(formData)
    .then((res)=>{
      setIsSubmited(true);
      toast.success(res.data.message);
    })
    .catch((error) => {
      toast.error(error.response.data.message);
      formData.delete("plate")
    })

  }

  const handleBrandChange = async (selectedBrand: number) => {

    const brand = brands.find((brand) => brand.id == selectedBrand);
    console.log(brand?.name);



    const selectedBrandModels = models.filter((model: ModelModel) => model.brandName == brand?.name) // Bu fonksiyonun gerçek uygulamada nasıl yapıldığına bağlı olarak değişir
    console.log(selectedBrandModels);

    // Alınan alt modelleri FormikSelect bileşenine aktar
    setFilterModels(selectedBrandModels); // Örneğin, useState hook ile models state'ini güncelleyin
  }



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

  if (!car) return <div>Loading...</div>;

  return (
    <div className="cars container">
      <div className="secContainer">
        <div className="titleContainer">
          <h2>Update Car</h2>
        </div>
        <div className="formContainer">
          <Formik
            validationSchema={AddCarRequestSchema}
            validateOnBlur={true}
            initialValues={{
              id: carId,
              plate: car.plate,
              colorId: car.color.id,
              brandId: car.model.brand.id,
              modelId: car.model.id,
              year: car.year,
              bodyType: car.bodyType,
              fuelType: car.fuelType,
              gearType: car.gearType,
              cylinderCount: car.cylinderCount,
              enginePower: car.enginePower,
              kilometer: car.kilometer,
              dailyPrice: car.dailyPrice,
              imageUrl: car.imageUrl,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="plate" label='Plate' type="text" placeHolder='plate' />

                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="colorId" className="form-label">Color</label>
                  <Field as="select" name="colorId" className="form-control">
                    {colors.map((color: any) => (
                      <option key={color.id} value={color.id}>{color.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="colorId" component="div" className="alert-text" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="brandId" className="form-label">Brand</label>
                  <Field as="select" name="brandId" className="form-control"  onChange={(e: any) => handleBrandChange(e.target.value)}>
                    {brands.map((brand: any) => (
                      <option key={brand.id} value={brand.id}>{brand.name}  </option>
                    ))}
                  </Field>
                  <ErrorMessage name="brandId" component="div" className="alert-text" />
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="modelId" className="form-label">Model</label>
                  <Field as="select" name="modelId" className="form-control">
                    {models.map((model: any) => (
                      <option key={model.id} value={model.id}>{model.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="modelId" component="div" className="alert-text" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="year" type="number" label='Year' />

                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="bodyType" className="form-label">Body Type</label>


                  <Field as="select" name="bodyType" className="form-control">
                    <option value={car?.bodyType.toUpperCase()} >{car?.bodyType.toUpperCase()}</option>
                    {bodyType.map((bodyType) => (<option value={bodyType.name.toUpperCase()}>{bodyType.name.toUpperCase()}</option>))}



                  </Field>
                  <ErrorMessage name="bodyType" component="div" className="alert-text" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="fuelType" className="form-label">Fuel Type</label>

                  <Field as="select" name="fuelType" className="form-control">
                    <option value={car?.fuelType.toUpperCase()} >{car?.fuelType.toUpperCase()}</option>
                    {fuelType.map(fuelType => (
                      <option value={fuelType.name.toUpperCase()}>{fuelType.name.toUpperCase()}</option>

                    )

                    )}
                  </Field>
                  <ErrorMessage name="fuelType" component="div" className="alert-text" />
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <label htmlFor="gearType" className="form-label">Gear Type</label>
                  <Field as="select" name="gearType" className="form-control">
                    <option value={car?.gearType.toUpperCase()} >{car?.gearType.toUpperCase()}</option>
                    {gearType.map(gearType => (
                      <option value={gearType.name.toUpperCase()}>{gearType.name.toUpperCase()}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="gearType" component="div" className="alert-text" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="cylinderCount" label='Cylinder Count' type="text" />

                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="enginePower" label='Engine Power' type="text" />

                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="kilometer" label='Kilometer' type="number" />

                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput name="dailyPrice" type="number" label='Daily Price' />

                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">

                  <FormikInput disabled   style={{ display: 'none' }} name="imageUrl" type="text"  />

                </div>
              </div>

              <div className="btnContainer">
                <button type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>
          </Formik>
          <ToastContainer position="bottom-right" />
        </div>


        <div className="secContainer">
          <div className="titleContainer">
            <h2>Update Car Image</h2>
          </div>
          <div className="imgContainerDetail ">
            <img className='show-image' src={car.imageUrl} alt={car.model.brand.name} />
          </div>
          <div className="formContainer">
            <Formik initialValues={{ plate: car.plate}}onSubmit={imageHandleSubmit}>
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
                  <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>

      </div>


    </div>




  );
};

export default UpdateCar;

