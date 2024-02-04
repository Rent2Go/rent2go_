import React, { useEffect, useState } from "react";
import "./brands.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { BrandModel } from "../../models/responses/brands/GetBrand";
import BrandService from "../../services/BrandService";
type Props = {};
{
  /* Add Form */
}
const initialValues = () => {};
const onSubmit = () => {};

const Brands = (props: Props) => {
  {
    /* Brand List */
  }

  const [brandList, setBrandList] = useState<BrandModel[]>([]);

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
  })
  return (
    <div className="brands">
      <div className="titleContainer">
        <h2>Brands</h2>
      </div>
      <div className="secContainer shadow-rounded-box ">
        <div className="formContainer">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                  <td>{brand.name}</td>
                </tr>
              ))}
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Brands;
