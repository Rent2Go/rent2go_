import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useTranslation } from "react-i18next";

type Props = {};

const companyName = "Rent2Go Araç Kiralama Hizmetleri Ticaret Limited Şirketi";
const currentDate = new Date();
const year = currentDate.getFullYear();
const CopyrightNotice = (props: Props) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>{t("copyrightNotice")}</h2>
            <img src="/assets/img/example.png" alt="example-text" />
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>{t("lastUpdatedFebruary")}</small>
              </p>

              <h2 id="interpretation">
                {t("copyright")} {companyName}. {t("allRightsReserved")}
              </h2>

              <p>
                {t("allTextGraphicsLogosAudioFiles")} <strong>{companyName}</strong>{" "}
                {t("andAreProtectedBy")} <strong>{companyName}</strong>. {t("while")}{" "}
                <strong>{companyName}</strong> {t("makesReasonableEffortsToEnsure")} <strong>{companyName}</strong> 
                {t("isNotLiableForAnyDamages")}
              </p>

              <h2 id="contact">{t("isNotLiableForAnyDamages")}</h2>
              <p>
                {t("ifYouHaveAny")}
              </p>

              <h4>{t("byVisitingThisPageOnOurWebsite")}: </h4>
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

export default CopyrightNotice;
