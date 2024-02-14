import React from "react";
import { Footer, Navbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import "./payment.css";
import { Form, Formik } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
import { useAuth } from "../../contexts/AuthContext";
type Props = {};

const Oline = (props: Props) => {
  const auth = useAuth();
  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const currentDate = getCurrentDate();
  const { selectedPaymentMethod } = useParams<{
    selectedPaymentMethod: string;
  }>();
  const initialValues = () => {};
  const onSubmit = () => {};
  return (
    <>
      <Navbar />
      <div className="payment container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>Online Payment {selectedPaymentMethod}</h2>
          </div>
          <div className="contentDiv">
            <div className="formContainer">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                            <b>Address : </b> Ataevler Mh. Öztürkler Sk. No:52/3
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
                        label="Card Holder Name"
                        placeHolder="Enter Card Holder Name"
                      ></FormikInput>
                    </div>
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                      <FormikInput
                        name="cardNo"
                        type="text"
                        label="Card No"
                        placeHolder="Enter Card Number as 16 Digits"
                      ></FormikInput>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="expDate"
                        type="date"
                        label="Expiration Date"
                        placeHolder="Enter Expiration Date"
                      ></FormikInput>
                    </div>

                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <FormikInput
                        name="cvvNo"
                        type="number"
                        label="CVV No"
                        placeHolder="Enter CVV No"
                      ></FormikInput>
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
                          <p>1500 ₺</p>
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
                          <p>150 ₺</p>
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
                          <p>1350 ₺</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row btnRow">
                    <div className="col-xl-3 col-l-3 col-md-12 col-sm-12">
                      <button type="submit" className="btn btn-submit">
                        Payment
                      </button>
                    </div>
                    <div className="col-xl-3 col-l-3 col-md-12 col-sm-12">
                      <Link
                        type="button"
                        to="/reservation"
                        className="btn btn-cancel"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Oline;
