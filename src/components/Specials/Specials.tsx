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
              <p>Advanced Insurance</p>
            </div>
            <div className="descriptionContent">
              <p>
                Our advanced insurance package offers comprehensive coverage for
                your rental car, including protection against theft, damage, and
                more. Drive with peace of mind knowing you're fully covered.
              </p>
            </div>
          </div>

          <div className="singleContent">
            <div className="imgContent">
              <img src="/assets/img/specials/navigation.png" alt="specials" />
            </div>
            <div className="titleContent">
              <p>Advanced Navigation</p>
            </div>
            <div className="descriptionContent">
              <p>
                Upgrade your driving experience with our advanced navigation
                system. Enjoy features such as real-time traffic updates,
                voice-guided directions, and points of interest along your
                route. Never get lost again!
              </p>
            </div>
          </div>
          <div className="singleContent">
            <div className="imgContent">
              <img src="/assets/img/specials/support.png" alt="specials" />
            </div>
            <div className="titleContent">
              <p>Contact Every Moment</p>
            </div>
            <div className="descriptionContent">
              <p>
                Our dedicated customer support team is available around the
                clock to assist you with any inquiries, reservations, or issues
                you may have. Feel free to contact us anytime for prompt and
                reliable assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
