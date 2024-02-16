import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import { FormikInput } from "../../components";
import DiscountService from "../../services/DiscountService";
import { DiscountModel } from "../../models/responses/discounts/GetDiscount";
import { AddDiscountRequest } from "../../models/requests/discounts/AddDiscountRequest";

import "./discounts.css";


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
  
      await DiscountService.create(values)
        .then((response) => {
          setIsSubmitting(true);
          toast.success(response.data.message)
        })
        .catch((error) => {
          toast.error(error.response.data.message.percentage)
          console.log(error.response.data.message.percentage);
          

        });
     
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

      await DiscountService.delete(id)
        .then((response) => {
          setIsSubmitting(true);
          toast.success(response.data.message)
        })
        .catch((error) => {
         toast.error(error.response.data.message.name)
        });
     
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
              <ToastContainer position="bottom-center" />
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
