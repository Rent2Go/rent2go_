import React from "react";
import "./styles/cars.css";
import { Field, Form, Formik } from "formik";
import { FormikInput, FormikSelect } from "../../components";
type Props = {};

const AddCar = (props: Props) => {
  const initialValues = () => {};
  const onSubmit = () => {};
  return (
    <div className="cars container">
      <div className="headerContainer">
        <h2>Add New Car</h2>
      </div>
      <div className="formContainer">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                <FormikSelect id="1" name="color" label="Color"></FormikSelect>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCar;
