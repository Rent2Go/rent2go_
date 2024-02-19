import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import "./payment.css";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import FormikInput from "../../components/FormikInput/FormikInput";
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { CreditCardModel } from "../../models/requests/payment/CreditCardModel";
import PaymentService from "../../services/PaymentService";
import { ToastContainer, toast } from "react-toastify";
import RentalService from "../../services/RentalService";
import { AddRentalRequest } from "../../models/requests/rental/AddRentalRequest";
type Props = {};

const Online = (props: Props) => {
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



  const { priceCard } = useSelector((state: any) => state.rental);
  const rentalInfo = useSelector((state: any) => state.rental);

  useEffect(() => {

    sessionStorage.setItem('rentalInfo', JSON.stringify(rentalInfo));
  }, [rentalInfo]);


  let addRental:AddRentalRequest;
  const rentalInfoString = sessionStorage.getItem('rentalInfo'); // sessionStorage'den veriyi al
  if (rentalInfoString) { // Eğer veri varsa devam et
    const rentalInfo = JSON.parse(rentalInfoString); // JSON verisini JavaScript nesnesine dönüştür

    addRental = {
      startDate: new Date(rentalInfo.startDate),
      endDate: new Date(rentalInfo.endDate),
      carId: rentalInfo.car.id,
      customerId: rentalInfo.user.customer.id,
      discount: rentalInfo?.discount || {id:0 ,discountCode:'BOSS'}
    };

    console.log(addRental);
  } else {
    console.log('sessionStorage\'da rentalInfo bulunamadı!');
  }

  const onSubmit = async (values: CreditCardModel) => {
    await PaymentService.checkCreditCard(values)
      .then((res) => {
        toast.success(res.data)
        if (res.data) {

          RentalService.addRental(addRental)
          .then(() => {
            sessionStorage.removeItem('rentalInfo')
            toast.success(res.data)
          })
        }


      })
      .catch((err) => {
        console.log(err)
      })

  };


  const paymentSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(/^\d{16}$/, 'Card number must be 16 digits'),

    cardHolderName: Yup.string()
      .required('Card holder name is required'),

    expirationMonth: Yup.string()
      .required('Expiration month is required')
      .matches(/^(0[1-9]|1[0-2])$/, 'Expiration month must be between 01 and 12'),

    expirationYear: Yup.string()
      .required('Expiration year is required')
      .matches(/^(20)\d{2}$/, 'Expiration year must be in format YYYY'),

    cvv: Yup.string()
      .required('CVV is required')
      .matches(/^\d{3}$/, 'CVV must be 3 digits'),

    amount: Yup.number()
      .min(0.01, 'Amount must be greater than 0')
      .required('Amount is required')
      .typeError('Amount must be a number')
  });


  const initialValues: CreditCardModel = {
    cardNumber: '',
    cardHolderName: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: ''
  };

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
                        name="cardHolderName"
                        type="text"
                        label="Card Holder Name"
                        placeHolder="Enter Card Holder Name"
                      ></FormikInput>
                    </div>
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                      <FormikInput
                        name="cardNumber"
                        type="text"
                        label="Card No"
                        placeHolder="Enter Card Number as 16 Digits"
                      ></FormikInput>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="expirationMonth"
                        type="text"
                        label="Expiration Month"
                        placeHolder="Enter Expiration Date"
                      ></FormikInput>
                    </div>
                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="expirationYear"
                        type="text"
                        label="Expiration Year"
                        placeHolder="Enter Expiration Date"
                      ></FormikInput>
                    </div>


                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="cvv"
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
                        <div className="col-xl-4 col-l-4 col-md-6 col-sm-6">
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
                        <div className="col-xl-4 col-l-4 col-md-6 col-sm-6">
                          <p>{priceCard.discountRate.toFixed(2)} ₺</p>
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
                        <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                          <p>{(priceCard.totalPrice - priceCard.discountRate).toFixed(2)} ₺</p>
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
                        to="/reservation/:id"
                        className="btn btn-cancel"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </Form>
              </Formik>
              <ToastContainer position="bottom-center" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Online;
