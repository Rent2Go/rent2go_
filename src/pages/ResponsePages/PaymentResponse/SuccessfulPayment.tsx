import React, { useEffect } from "react";
import { Footer, Navbar } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import "../response.css"
import { useTranslation } from "react-i18next";
type Props = {};

const SuccessfulPayment = (props: Props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    // Geri düğmesinin tıklandığında önceki sayfaya dönmesini engelle
    const handleBackButton = (e:any) => {
      e.preventDefault();
      navigate("/"); // Başka bir yere yönlendirebilirsiniz
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="response container">
        <div className="secContainer shadow-rounded-box">
          <div className="titleContainer">
            <h2>{t("paymentSuccessful")} !</h2>
          </div>
          <div className="contentContainer">
            <p>
              <span>{t("yourPaymentHasBeenSuccessfully")}.. </span><br></br>
              <span>
                {t("yourReservationRequestHasBeenReceived")}
              </span>
              <span>
                {t("youCanViewYourReservationRequestFromYourProfilePage")}
              </span>
            </p>
          </div>
          <div className="actionContainer">
            <Link
              to="/profile/your-reservations"
              type="button"
              className="btn btn-profile"
            >
              {t("profile")}
            </Link>
            <Link to="/" type="button" className="btn btn-home">
              {t("home")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessfulPayment;
