import React, { useEffect } from "react";
import { Footer, Navbar, PriceCard } from "../../components";
import { Link, useParams } from "react-router-dom";
import "./payment.css";
import { Form, Formik } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
import { useAuth } from "../../contexts/AuthContext";
import ReceiptPDF from "./Receipt";
import { useSelector } from "react-redux";

type Props = {};

const Cash = (props: Props) => {

  const {priceCard} = useSelector((state:any)=> state.rental)
  console.log(priceCard);
  
  const auth = useAuth();
  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const rentalInfo = useSelector((state:any) => state.rental); 

  useEffect(() => {

    sessionStorage.setItem('rentalInfo', JSON.stringify(rentalInfo));
  }, [rentalInfo]); 


 
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
            <h2>Cash Payment {selectedPaymentMethod}</h2>
          </div>
          <div className="contentDiv">
            <div className="formContainer">
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

              <div className="row amountRow">
                <div className="col-8">
                  <div className="row ">
                    <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                      <p>
                        <b>Amount : </b>
                      </p>
                    </div>
                    <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                      <p>{priceCard.totalPrice.toFixed(2)} ₺</p>
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
                      <p>{priceCard.discountRate.toFixed(2)} ₺</p>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  {" "}
                  <div className="row">
                    <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                      <p>
                        <b>Total Amount :  </b>
                      </p>
                    </div>
                    <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                      <p>{(priceCard.totalPrice - priceCard.discountRate).toFixed(2)} ₺</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row btnRow">
                <div className="col-xl-7 col-l-7 col-md-12 col-sm-12">
                  <ReceiptPDF auth={auth} currentDate={currentDate} />
                </div>
                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <Link
                    type="button"
                    to="/reservation/:id"
                    className="btn btn-cancel"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cash;
