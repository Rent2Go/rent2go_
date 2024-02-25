import React, { useEffect } from "react";
import { Footer, Navbar, PriceCard } from "../../components";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./payment.css";
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { MailInfoModel } from "../../models/mail/MailInfıModel";
import MailService from "../../services/emailService/MailService";
import { ToastContainer, toast } from "react-toastify";

type Props = {

};

const BeforeCash = (props: Props) => {
  const { t } = useTranslation();
  const { car } = useSelector((state: any) => state.rental);
  const { priceCard } = useSelector((state: any) => state.rental);
  const navigate = useNavigate();

  const auth = useAuth();
  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const rentalInfo = useSelector((state: any) => state.rental);

  const handleButtonClick = async () => {
    const mailInfo: MailInfoModel = {
      name: rentalInfo.user.name + " " + rentalInfo.user.surname,
      email: rentalInfo.user.email,
      phone: rentalInfo.user.phoneNumber,
      startDate: new Date(rentalInfo.startDate),
      endDate: new Date(rentalInfo.endDate),
      totalDay: rentalInfo.day,
      plate: rentalInfo.car.plate,
      carInfo:
        rentalInfo.car.model.brand.name + " " + rentalInfo.car.model.name,
      totalPrice: rentalInfo.priceCard.totalPrice,
    };  //support@rentogo.com.tr
    try {
      await MailService.cashSuccessful(mailInfo);
      toast.success("Your reservation has been created, please check your mailbox.");
       mailInfo.email = 'support@rentogo.com.tr';
        MailService.cashSuccessful(mailInfo)
      setTimeout(() => {
        navigate("/payment/cash");
      }, 3000);
    } catch (error) {
      console.error("Mail post error", error);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("rentalInfo", JSON.stringify(rentalInfo));
  }, [rentalInfo]);

  const currentDate = getCurrentDate();
  const { selectedPaymentMethod } = useParams<{
    selectedPaymentMethod: string;
  }>();

  return (
    <>
      <Navbar />
      <div className="payment container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>
              {t("cashPayment")} {selectedPaymentMethod}
            </h2>
          </div>
          <div className="contentDiv">

          <div className="formContainer m-0 bg-warning" >
          <div className="row infoRow">
          <div className="row">
          <div className="row">
          <div className="col-12">
              <h2 className="text-primary ">Sevgili Müşterimiz,</h2>
              <p className="text-warning  ">Rezervasyon işleminizi nakit ödeme seçeneği ile gerçekleştirmeyi seçtiniz. Lütfen aşağıdaki bilgileri dikkatlice okuyunuz:</p>

              <ol >
                <li>Rezervasyonunuz, seçtiğiniz araç ve belirttiğiniz tarihler için geçerlidir.</li>
                <li>Ödemenizi, rezervasyonun başlangıç tarihinden önce şirketimizin ofisine gelerek gerçekleştirmeniz gerekmektedir.</li>
                <li>Ödemenizi yapmadan önce lütfen rezervasyon bilgilerinizi kontrol edin ve onaylayın.</li>
                <li>Ödeme yapılmadan araç teslimi gerçekleştirilmeyecektir.</li>
                <li>Rezervasyonunuz ve ödemeniz hakkında herhangi bir sorunuz olursa, lütfen bizimle iletişime geçiniz.</li>
              </ol>
              <p className="text-warning">Bu bilgilendirme mesajını okuduğunuzu ve anladığınızı onaylamak için 'Kabul Et' butonuna tıklayınız. Kabul ettiğinizde, rezervasyon detaylarınızı içeren bir e-posta alacaksınız.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="formContainer">
              <div className="row infoRow">
                <div className="row">
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

              <div className="row amountRow">
                <div className="col-8">
                  <div className="row ">
                    <div className="col-xl-5 col-l-5 col-md-6 col-sm-6">
                      <p>
                        <b>{t("amount")} : </b>
                      </p>
                    </div>
                    <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                      <p>
                        {(
                          priceCard.totalPrice + priceCard.discountRate
                        ).toFixed(2)}{" "}
                        ₺
                      </p>
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
                        <b>{t("totalAmount")} : </b>
                      </p>
                    </div>
                    <div className="col-xl-3 col-l-3 col-md-6 col-sm-6">
                      <p>{priceCard.totalPrice.toFixed(2)} ₺</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row btnRow my-3 ">
                <div className="col-xl-7 col-l-7 col-md-12 col-sm-12 ">
                  <button className="btn btn-warning" onClick={handleButtonClick}>Accept </button>
                </div>

                <div className="col-xl-4 col-l-4 col-md-12 col-sm-12">
                  <Link
                    type="button"
                    to={`/reservation/${car.id}`}
                    className="btn btn-danger"
                  >
                    {t("cancel")}
                  </Link>
                </div>
              </div>
              <ToastContainer position="bottom-center" />
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeforeCash;
