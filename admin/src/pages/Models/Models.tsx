import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { ModelModel } from "../../models/responses/models/GetModel";
import ModelService from "../../services/ModelService";
import * as yup from 'yup';
import { AddModelRequest } from "../../models/requests/models/AddModelRequest";
import { ToastContainer, toast } from "react-toastify";
import { FormikInput, FormikSelect } from "../../components";
import { Field, Form, Formik } from "formik";
import { BrandModel } from "../../models/responses/brands/GetBrand";
import BrandService from "../../services/BrandService";
import './models.css';

type Props = {};

const Models: React.FC<Props> = () => {
    const [models, setModels] = useState<ModelModel[]>([]);
    const [brands, setBrands] = useState<BrandModel[]>([]);
    console.log(brands);
    const handleBrand = async () => {
     await   BrandService.getAll()
        .then((response) => {
            setBrands(response.data.data);
        })
        .catch((error) => {
            console.error("Error fetching brands:", error);
        });
    };
    


    useEffect(() => {
        fetchModels();
        handleBrand();
    }, []);

    const fetchModels = async () => {
        try {
            const response = await ModelService.getAll();
            setModels(response.data.data);
        } catch (error) {
            console.error("Error fetching models:", error);
        }
    };

    const addModel = async (model: AddModelRequest) => {
        try {
            await ModelService.createModel(model);
            toast.success("Model added successfully");
            fetchModels();
        } catch (error) {
            console.error("Error adding model:", error);
            toast.error("Failed to add model");
        }
        
    };

    const AddModelValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        brandId: yup.number().required('Brand is required'),
      });

    const onSubmit = (values: AddModelRequest) => {
        addModel(values);
        console.log(values);
    }

    return (
        <div className="models">
        <div className="titleContainer">
          <h2>Models</h2>
        </div>
        <div className="secContainer shadow-rounded-box ">
          <div className="formContainer">
          <Formik initialValues={{name:'', brandId: 0}} validationSchema={AddModelValidationSchema} validateOnBlur={true} onSubmit={onSubmit}>
              <Form className="form">
                <div className="row">
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <label className="form-label">Brand</label>
                  <Field name="brandId" as="select" className="form-control" >
                    {brands.map((value: any) => (
                      <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>)
                    )}
                  </Field>
                </div>
                  <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                    <FormikInput
                      name="name"
                      type="text"
                      label="Add New Model"
                      placeHolder="Enter Model Name"
                    ></FormikInput>
                  </div>
                  <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                    <div className="btnContainer">
                      <button
                        title="Save"
                        type="submit"
                        className="btn btn-sm btn-submit"
                      >
                        Save
                      </button>
                      <Link to="/models" className="btn btn-sm btn-cancel">
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
                {models.map((models: ModelModel) => (
                  <tr key={models.id}>
                    <th>{models.id}</th>
                    <td>{models.name.toUpperCase()}</td>
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

export default Models;