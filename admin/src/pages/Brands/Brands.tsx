import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { BrandModel } from "../../models/responses/brands/GetBrand";
import BrandService from "../../services/BrandService";
import { object, string } from "yup";
import { AddBrandRequest } from "../../models/requests/brands/AddBrandRequest";
import { ToastContainer, toast } from "react-toastify";
import "./brands.css";
type Props = {};
{
  /* Add Form */
}



const Brands = (props: Props) => {  
  
  const [brandList, setBrandList] = useState<BrandModel[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const addBrandValidationSchema  = object({
    name: string()
      .required("Brand Name field is required.")
      .min(2, "Brand Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
 
  })

  const createBrand = async(addBrand:AddBrandRequest) => {
    await BrandService.createBrand(addBrand)
    .then((res) => {
      toast.success(res.data.message)
      setIsSubmit(true);
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })

  }
  const onSubmit = (values:AddBrandRequest) => {
    createBrand(values);
  };

  const getBrandList = async () => {
    try{
      const response = await BrandService.getAll();
      setBrandList(response.data.data);
    }
    catch (error){
      console.log("Error fetching brands", error)
    }
  }

  useEffect(() => {
    getBrandList();
  },[isSubmit])
  return (
    <div className="brands">
      <div className="titleContainer">
        <h2>Brands</h2>
      </div>
      <div className="secContainer shadow-rounded-box ">
        <div className="formContainer">
          <Formik initialValues={{name:''}} validationSchema={addBrandValidationSchema} validateOnBlur={true} onSubmit={onSubmit}>
            <Form className="form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <FormikInput
                    name="name"
                    type="text"
                    label="Add New Brand"
                    placeHolder="Enter Brand Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                  <div className="btnContainer">
                    <button
                      title="Save"
                      type="submit"
                      className="btn btn-sm btn-submit"
                    >
                      Save
                    </button>
                    <Link to="/brands" className="btn btn-sm btn-cancel">
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="tableContainer">




          <Table className="table  table-borderless table-sm">
            <thead>
              <tr>
                
              </tr>
            </thead>
            <tbody>
              {brandList.map((brand: BrandModel) => (
                <tr key={brand.id}>
                  <th>{brand.id}</th>
                  <td>{brand.name.toUpperCase()}</td>
                </tr>
              ))}
              
            </tbody>
          </Table>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Brands;
