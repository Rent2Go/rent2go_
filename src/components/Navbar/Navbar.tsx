import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { hasFlag } from "country-flag-icons";
import { TR, US } from "country-flag-icons/react/3x2";
import { IoIosCloseCircle, IoIosMenu, IoMdCart, IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { useAuth } from "../../contexts/AuthContext";

import TokenService from "../../services/TokenService";

import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const settings = useSelector((state: any) => state.settings.setting);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [navbar, setNavbar] = useState("navbar");

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };
  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const [header, setHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 40) {
      setHeader("header addBg");
    }
  };

  const logout = () => {
    TokenService.removeToken("token");
    TokenService.removerefreshToken("refreshToken");
    toast.success("Successful Exit");
  };

  window.addEventListener("scroll", addBg);
  const authContext: any = useAuth();
  return (
    <>
      <div className={header}>
        <div className="logoDiv">
          <Link to="/" className="link">
            <img src={settings.logo} alt="rent2go-logo" className="logo" />
          </Link>
        </div>
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                {t("home")}
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/cars" className="link">
                {t("cars")}
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/our-team" className="link">
                {t("ourTeam")}
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/contact" className="link">
                {t("contact")}
              </Link>
            </li>
          </ul>

          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          {authContext.authInformation.isAuthenticated ? (
            <>
              <NavDropdown
                className="textAction text"
                title={<GiCarKey />}
                id="basic-nav-dropdown"
              >
                <Link className=" text textAction btn" to="/profile/account-settings">
                  {" "}
                  {t("profile")}
                </Link>

                <Link className="  btn text textAction" to="/cart">
                  {t("reservation")}
                </Link>
                <Link
                  className="text textAction btn"
                  to="/sign-up"
                  onClick={logout}
                >
                  {t("logout")}
                </Link>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link className="text btn" to={"/sign-up"}>
                {t("signUp")}
              </Link>
            </>
          )}
          <NavDropdown
            className="languageDropdown"
            title={<MdLanguage />}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="lang-item"
              eventKey="en"
              onClick={() => changeLanguage("en")}
            >
              EN
            </NavDropdown.Item>
            <NavDropdown.Item
              className="lang-item"
              eventKey="tr"
              onClick={() => changeLanguage("tr")}
            >
              TR
            </NavDropdown.Item>
          </NavDropdown>

          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
