import React from "react";
import { useParams } from "react-router-dom";

import { AccountSettings, UserSidebar } from "../../components";

import "./profilePage.css";

import YourReservations from "../../components/UserProfile/YourReservations/YourReservations";
import ChangePassword from "../../components/UserProfile/ChangePassword/ChangePassword";
import DriversLicense from "../../components/UserProfile/DriversLicense/DriversLicense";
import UserLocation from "../../components/UserProfile/UserLocation/UserLocation";
import Disclaimer from "../../components/UserProfile/Disclaimer/Disclaimer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import "./profilePage.css";
import { Footer, Navbar } from "../../components";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
type Props = {};

const ProfilePage = (props: Props) => {
  const settings = useSelector((state: any) => state.settings.setting);
  const { t } = useTranslation();
  const { activepage } = useParams();

  return (
    <>
      <Helmet>
        <title>{settings.title} - {t("profile")} </title>
      </Helmet>

      <div className="userProfile">
        <Navbar />
        <div className="userProfileIn">
          <div className="left">
            <UserSidebar activepage={activepage} />
          </div>
          <div className="right">
            {activepage === "account-settings" && <AccountSettings />}
            {activepage === "your-reservations" && <YourReservations />}
            {activepage === "change-password" && <ChangePassword />}
            {activepage === "drivers-license" && <DriversLicense />}
            {activepage === "location-settings" && <UserLocation />}
            {activepage === "disclaimer" && <Disclaimer />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
