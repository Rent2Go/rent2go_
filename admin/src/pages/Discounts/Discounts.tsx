import React, { useEffect, useState } from "react";

import "./discounts.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { DiscountModel } from "../../models/responses/discounts/GetDiscount";
import { AddDiscountRequest } from "../../models/requests/discounts/AddDiscountRequest";
import DiscountService from "../../services/DiscountService";
import * as Yup from "yup";
import { MdOutlineDeleteForever } from "react-icons/md";

type Props = {};

const Discounts = (props: Props) => {
  const initialValues: AddDiscountRequest = {
    discountCode: "",
    percentage: 0,
  };

  

  const validationSchema = Yup.object({
    discountCode: Yup.string().required("Required"),

    percentage: Yup.number().required("Required").positive(),
  });

  const navigation = useNavigate();
  const onSubmit = async (values: AddDiscountRequest) => {
    try {
      await DiscountService.create(values)
        .then((response) => {
          setIsSubmitting(true);
          navigation("/discounts");
        })
        .catch((error) => {
          console.log("Error fetching discounts", error);
        });
    } catch (error) {
      console.log("Error adding discount", error);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [discountList, setDiscountList] = useState<DiscountModel[]>([]);

  const getDiscountList = async () => {
    try {
      const response = await DiscountService.getAll();
      setDiscountList(response.data.data);
    } catch (error) {
      console.log("Error fetching discounts", error);
    }
  };
  const deleteDiscount = async (id: number) => {
    try {
      await DiscountService.delete(id)
        .then((response) => {
          setIsSubmitting(true);
          navigation("/discounts");
        })
        .catch((error) => {
          console.log("Error fetching discounts", error);
        });
    } catch (error) {
      console.log("Error deleting discount", error);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      getDiscountList();
      setIsSubmitting(false);
    } else {
      getDiscountList();
    }
  }, [isSubmitting]);

  return (
    <div className="discounts">
      <div className="titleContainer">
        <h2>Discounts</h2>
      </div>
      <div className="secContainer shadow-rounded-box">
        <div className="row">
          <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
            <div className="formContainer">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="form">
                  <div className="row">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="discountCode"
                        type="text"
                        label="Title of discount"
                        placeHolder="Discount Code"
                      />
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="percentage"
                        type="text"
                        label="Title of percentage"
                        placeHolder="Percentage"
                      />
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {discountList.map((discount: DiscountModel) => (
                    <tr key={discount.id}>
                      <td>{discount.id}</td>
                      <td>{discount.discountCode}</td>
                      <td>{discount.percentage}</td>
                      <td>
                        <Link
                          to={`/discounts`} onClick={
                            () => deleteDiscount(discount.id)
                          }
                          className="btn btn-sm btn-cancel"
                          title="Delete"
                        >
                          <MdOutlineDeleteForever /> Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
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
