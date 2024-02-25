import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {};

const RentalAgreement = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>{t("carRentalAgreement")}</h2>
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>{t("lastUpdatedFebruary")}</small>
              </p>
              <p>
                <strong>{t("lessor")}</strong> {t("lessorsName")}
              </p>
              <p>
                <strong>{t("lessee")} </strong> Ren2Go Araç Kiralama Hizmetleri
                Ticaret Limited Şirketi,
              </p>
              <p>
                <strong>{t("lesseesAdress")} </strong> Ataşehir Mahallesi, İstanbul
                Caddesi No: 123, Ataşehir, İstanbul, Türkiye
              </p>

              <p>
                {t("thisAgreementIsMade")}
              </p>

              <p>
                <strong>{t("1.details")}</strong>
              </p>

              <p>{t("vehicleMakeAndModel")}</p>
              <p>{t("licensePlateNumber")}</p>
              <p>{t("chassisNumber")}</p>
              <p>{t("rentalStartDate")}</p>
              <p>{t("return")}</p>
              <p>{t("rentalPeriod")}</p>

              <p>
                <strong>{t("2.rental")}</strong>
              </p>

              <p>{t("rentalFee")}</p>
              <p>{t("paymentMethod2")}</p>
              <p>{t("depositAmount")}</p>
              <p>{t("rentalStartDate")}</p>
              <p>
                {t("depositRefund")}
              </p>

              <p>
                <strong>{t("3.rental")}</strong>
              </p>

              <p>
                {t("theLesseeMay")}
              </p>
              <p>
                {t("theLesseeMust")}
              </p>
              <p>
                {t("theLesseeMustReturn")}
              </p>
              <p>
                {t("theLesseeIs")}
              </p>

              <p>
                <strong>{t("4.insurance")}</strong>
              </p>

              <p>
                {t("theLeasedVehicle")}
              </p>
              <p>
                {t("theLesseeMustImmiadiately")}
              </p>

              <p>
                <strong>{t("5.cancellation")}</strong>
              </p>

              <p>
                {t("theLesseeMustCancel")}
              </p>
              <p>
                {t("thisAgreement")}
              </p>
              <p>
                {t("lessorsSignature")} ________________________ {t("date")}:
                _______________
              </p>
              <p>
                {t("lesseesSignature")} ________________________ {t("date")}:
                _______________
              </p>

              <h2 id="contact">{t("contactUs")}</h2>
              <p>
                {t("ifYouHave")}
              </p>

              <h4>{t("byVisitingThisPageOnOurWebsite")} </h4>
              <Link
                to="/contact"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://rentogo.com.tr/contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalAgreement;
