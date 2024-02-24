import React, { useEffect } from "react";
import { Footer, FormikInput, Navbar } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./payment.css";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { CreditCardModel } from "../../models/requests/payment/CreditCardModel";
import PaymentService from "../../services/PaymentService";
import RentalService from "../../services/RentalService";
import CarService from "../../services/CarService";
import { MailInfoModel } from "../../models/mail/MailInfıModel";
import MailService from "../../services/emailService/MailService";
import { ToastContainer, toast } from "react-toastify";
import { AddRentalRequest } from "../../models/requests/rental/AddRentalRequest";
import { useTranslation } from "react-i18next";

type Props = {};

const Online = (props: Props) => {
  const { t } = useTranslation();
  const {car} = useSelector((state:any) => state.rental);
  const auth = useAuth();
  const navigate = useNavigate();
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



  const addRental: AddRentalRequest = {
    startDate: new Date(rentalInfo.startDate),
    endDate: new Date(rentalInfo.endDate),
    carId: rentalInfo.car.id,
    customerId: rentalInfo.user.customer.id,
    employeeId: 1,
    discount: rentalInfo?.discount || { id: 0, discountCode: 'BOSS' }
  };

  const mailInfo:MailInfoModel = {
    name: rentalInfo.user.name + ' ' + rentalInfo.user.surname,
    email: rentalInfo.user.email,
    phone: rentalInfo.user.phoneNumber,
    startDate: new Date(rentalInfo.startDate),
    endDate: new Date(rentalInfo.endDate),
    totalDay: rentalInfo.day,
    plate: rentalInfo.car.plate,
    carInfo: rentalInfo.car.model.brand.name + ' ' + rentalInfo.car.model.name,
    totalPrice: rentalInfo.priceCard.totalPrice

  }
  console.log(mailInfo);
  


 



  const onSubmit = async (values: CreditCardModel) => {
    await RentalService.addRental(addRental)
      .then((rest) => {

        if (rest.data.result) {
          console.log(addRental);

          PaymentService.checkCreditCard(values)
            .then((res) => {
              if (res.data == true) {
                sessionStorage.removeItem('rentalInfo')
                toast.success(t("paymentSuccess"))
                CarService.updateIsActive(addRental.carId,false);
                MailService.reservationSuccessful(mailInfo);
                console.log(mailInfo);
                
                setTimeout(() => {
                  navigate("/payment-successful")
                },2000)
              
              }
              else {
                RentalService.deleteById(rest.data.data)
                toast.warn(t("paymentFailed"))
              }

            })
            .catch((err) => {
              RentalService.deleteById(rest.data.data)
              toast.error(t("paymentError"))
              console.log(err)
            })
        }

      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err)
      })

  };


  const paymentSchema = Yup.object({
    cardNumber: Yup.string()
      .required(t("cardNumberIsRequired"))
      .matches(/^(?:5[1-5][0-9]{14})$/, (t("cardNumberMustBeAValidMasterCardNumber"))),
      
    cardHolderName: Yup.string()
      .required(t("cardHolderNameIsRequired")),

    expirationMonth: Yup.string()
      .required(t("expirationMonthIsRequired"))
      .matches(/^(0[1-9]|1[0-2])$/, (t("expirationMonthMustBeBetween01And12"))),

    expirationYear: Yup.string()
      .required(t("expirationYearIsRequired"))
      .matches(/^(20|\d{2})$/, (t("expirationYearMustBeInFormatYY"))),

    cvv: Yup.string()
      .required(t("cvvIsRequired"))
      .matches(/^\d{3}$/, (t("cvvMustBe3Digits"))),

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
            <h2>{t("onlinePayment")} {selectedPaymentMethod}</h2>
          </div>
          <div className="contentDiv">
            <div className="formContainer">
              <Formik initialValues={initialValues} validateOnBlur={true} validationSchema={paymentSchema} onSubmit={onSubmit}>
                <Form className="form">
                  <div className="row infoRow">
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <div className="row ">
                        <div className="col-12">
                          <p>
                            <b>{t("name")} : </b>
                            {auth.authInformation.user.firstname}{" "}
                            {auth.authInformation.user.lastname}
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>{t("phone")} : </b> 
                            {auth.authInformation.user.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-l-6 col-md-12 col-sm-12">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            <b>{t("date")} : </b>
                            {currentDate}
                          </p>
                        </div>
                        <div className="col-12">
                          <p>
                            <b>{t("email")} : </b>
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
                        label={t("cardHolderName")}
                        placeholder={t("enterCardHolderName")}
                      ></FormikInput>
                    </div>
                    <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                      <FormikInput
                        name="cardNumber"
                        type="text"
                        label={t("cardNo")}
                        placeholder={t("enterCardNumber")}
                      ></FormikInput>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="expirationMonth"
                        type="text"
                        label={t("expirationMonth")}
                        placeHolder={t("mm")}
                      ></FormikInput>
                    </div>
                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="expirationYear"
                        type="text"
                        label={t("expirationYear")}
                        placeholder={t("yy")}
                      ></FormikInput>
                    </div>


                    <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                      <FormikInput
                        name="cvv"
                        type="number"
                        label={t("cvvNo")}
                        placeholder="CVV"
                      ></FormikInput>
                    </div>
                  </div>
                  <div className="row amountRow">
                    <div className="col-8">
                      <div className="row ">
                        <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                          <p>
                            <b>{t("amount")} : </b>
                          </p>
                        </div>
                        <div className="col-xl-4 col-l-4 col-md-6 col-sm-6">
                          <p>{(priceCard.totalPrice + priceCard.discountRate).toFixed()} ₺</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      {" "}
                      <div className="row">
                        <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                          <p>
                            <b>{t("discount")} : </b>
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
                            <b>{t("totalAmount")} : </b>
                          </p>
                        </div>
                        <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                          <p>{(priceCard.totalPrice).toFixed(2)} ₺</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row btnRow">
                    <div className="col-3">
                      <button type="submit" className="btn btn-submit">
                        {t("payment")}
                      </button>
                    </div>
                    <div className="col-3">
                      <Link
                        type="button"
                        to={`/reservation/${car.id}`}
                        className="btn btn-cancel"
                      >
                        {t("cancel")}
                      </Link>
                    </div>
                  </div>
                </Form>
              </Formik>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
      <Footer />
    </>
  );
};

export default Online;
