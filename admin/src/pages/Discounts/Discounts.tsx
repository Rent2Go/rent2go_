import React from "react";

import "./discounts.css";
import { Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
type Props = {};

const initialValues = () => {};
const onSubmit = () => {};

const Discounts = (props: Props) => {
  return (
    <div className="discounts">
      <div className="titleContainer">
        <h1>Discounts</h1>
      </div>
      <div className="secContainer shadow-rounded-box">
        <div className="row">
          <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
            <div className="formContainer">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className="form">
                  <div className="row">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="title"
                        type="text"
                        label="Title of discount"
                        placeHolder="Enter title of discount"
                      ></FormikInput>
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="percentage"
                        type="number"
                        label="Percentage of discount"
                        placeHolder="Enter percentage of discount"
                      ></FormikInput>
                    </div>
                  </div>
                  <div className="row">
                    <div className="btnContainer">
                      <button
                        title="Save"
                        type="submit"
                        className="btn btn-sm btn-submit"
                      >
                        Save
                      </button>
                      <Link to="/discounts" className="btn btn-sm btn-cancel">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
            <div className="tableContainer">
              <Table className="table table-rounded table-borderless table-hover">
                <thead>
                  <tr>
                    <th> ID</th>
                    <th>Discount Code</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
