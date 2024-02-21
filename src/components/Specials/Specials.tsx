import React from "react";
import "./specials.css";
import { useTranslation } from "react-i18next";
type Props = {};

const Specials = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="specials section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h1 className="secTitle">{t("howDoWeMakeDifference")}</h1>
        </div>
        <div className="secContent grid">
          <div className="singleContent">
            <div className="imgContent">
              <img src="/assets/img/specials/insurance.png" alt="specials" />
            </div>
            <div className="titleContent">
              <p>{t("advancedInsurance")}</p>
            </div>
            <div className="descriptionContent">
              <p>{t("aboutAdvancedInsurance")}</p>
            </div>
          </div>

          <div className="singleContent">
            <div className="imgContent">
              <img src="/assets/img/specials/navigation.png" alt="specials" />
            </div>
            <div className="titleContent">
              <p>{t("advancedNavigation")}</p>
            </div>
            <div className="descriptionContent">
              <p>{t("aboutAdvancedNavigation")}</p>
            </div>
          </div>
          <div className="singleContent">
            <div className="imgContent">
              <img src="/assets/img/specials/support.png" alt="specials" />
            </div>
            <div className="titleContent">
              <p>{t("contactEveryMoment")}</p>
            </div>
            <div className="descriptionContent">
              <p>{t("aboutContactEveryMoment")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
