import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { hasFlag } from "country-flag-icons";
import { TR, US } from "country-flag-icons/react/3x2";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import Nav from "react-bootstrap/Nav";

import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import TokenService from "../../services/TokenService";

type Props = {};

const Navbar = (props: Props) => {
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
            <img
              src="assets/img/logo.png"
              alt="rent2go-logo"
              className="logo"
            />
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
                title={<>{t("actions")}</>}
                id="basic-nav-dropdown"
              >
                <div>
                  <>
                    {" "}
                    <Link className=" text textAction btn" to="/profile">
                      {" "}
                      {t("profile")}
                    </Link>
                  </>

                  <>
                    <Link className="  btn text textAction" to="/cart">
                      Reservation
                    </Link>
                  </>
                  <>
                    <Link
                      className="text textAction btn"
                      to="/sign-up"
                      onClick={logout}
                    >
                      {t("logout")}
                    </Link>
                  </>
                </div>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link className="text btn" to={"/sign-up"}>
                {t("signUp")}
              </Link>
            </>
          )}
          <div className="languageBtnContainer">
            <button
              name="en"
              type="button"
              className="langButton"
              onClick={() => changeLanguage("en")}
            >
              {" "}
              <US title="English" />
            </button>
            <button
              name="tr"
              type="button"
              className="langButton"
              onClick={() => changeLanguage("tr")}
            >
              {" "}
              <TR title="Turkish" />
            </button>
          </div>
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
