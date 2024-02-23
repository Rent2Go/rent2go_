import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Footer, FormikInput, Navbar } from "../../components";


import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../contexts/AuthContext";

import "./payment.css";
import { useSelector } from "react-redux";

type Props = {};

const BankTransfer = (props: Props) => {
  const { selectedPaymentMethod } = useParams<{
    selectedPaymentMethod: string;
  }>();
  const {priceCard} = useSelector((state:any)=> state.rental)
  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}.${month}.${year}`;
    
  };
  const currentDate = getCurrentDate();

  const auth = useAuth();

  const initialValues = {
    fullName: "",
    iban: "",
    expDate: "",
    cvvNo: "",
  };

  const validationSchema = Yup.object().shape({
    bankName: Yup.string().required("Bank Name is required"),
    fullName: Yup.string().required("IBAN Holder Name is required"),
    iban: Yup.string()
      .matches(
        /^TR\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{2}$/,
        "Invalid IBAN format"
      )
      .required("IBAN NO is required"),

  });

  const onSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <>
      <Navbar />
      <div className="payment container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>Bank Transfer {selectedPaymentMethod}</h2>
          </div>
          <div className="contentDiv">
            <div className="formContainer">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ dirty, isValid, values, setFieldValue }) => (
                  <Form className="form">
                    <div className="row infoRow">
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <div className="row ">
                          <div className="col-12">
                            <p>
                              <b>Name : </b>
                              {auth.authInformation.user.firstname}{" "}
                              {auth.authInformation.user.lastname}
                            </p>
                          </div>
                          <div className="col-12">
                            <p>
                              <b>Phone : </b> 
                              {auth.authInformation.user.phoneNumber}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                        <div className="row">
                          <div className="col-12">
                            <p>
                              <b>Date : </b>
                              {currentDate}
                            </p>
                          </div>
                          <div className="col-12">
                            <p>
                              <b>Email : </b>
                              {auth.authInformation.user.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                          name="fullName"
                          type="text"
                          label="IBAN Holder Name"
                          placeholder="Enter IBAN Holder Name"
                        />
                      </div>
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                          name="bankName"
                          type="text"
                          label="Bank Name"
                          placeholder="Enter Bank Name"
                        />
                      </div>
                      <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                        <FormikInput
                          name="iban"
                          type="text"
                          label={(
                            <span>
                              IBAN NO - <small><i>Please Just Enter Number, Without <strong>TR</strong></i></small>
                            </span>
                          )}
                          placeholder="TR00 0000 0000 0000 0000 0000 00"
                          maxLength={29}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            let formattedIban = e.target.value
                              .replace(/\s/g, "")
                              .replace(
                                /(.{2})(.{4})(.{4})(.{4})(.{4})(.{4})(.{2})/,
                                "TR$1 $2 $3 $4 $5 $6 $7"
                              )
                              .trim();
                            setFieldValue("iban", formattedIban);
                          }}
                        />
                      </div>
                    </div>
                   
                    <div className="row amountRow">
                      <div className="col-8">
                        <div className="row ">
                          <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                            <p>
                              <b>Amount : </b>
                            </p>
                          </div>
                          <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                            <p>{priceCard.totalPrice} ₺</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <div className="row">
                          <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                            <p>
                              <b>Discount : </b>
                            </p>
                          </div>
                          <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                            <p>{priceCard.discountRate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <div className="row">
                          <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                            <p>
                              <b>Total Amount : </b>
                            </p>
                          </div>
                          <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                            <p> {priceCard.totalPrice - priceCard.discountRate}₺</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row btnRow">
                      <div className="col-xl-3 col-l-3 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="btn btn-submit"
                          disabled={!dirty || !isValid}
                        >
                          Payment
                        </button>
                      </div>
                      <div className="col-xl-3 col-l-3 col-md-12 col-sm-12">
                        <Link
                          type="button"
                          to="/reservation/:id"
                          className="btn btn-cancel"
                        >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BankTransfer;
