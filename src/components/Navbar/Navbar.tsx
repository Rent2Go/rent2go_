import React, { useContext, useState } from "react";
import logo from "../../assets/img/logo.png";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import profileImage from "../../assets/img/userImages/feyza.jpeg";
import Nav from "react-bootstrap/Nav";


import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

type Props = {};

const Navbar = (props: Props) => {
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
    localStorage.removeItem("token");
  }

  window.addEventListener("scroll", addBg);
  const authContext: any = useAuth()
  return (
    <>
      <div className={header}>
        <div className="logoDiv">
          <Link to="/" className="link">
            <img src={logo} alt="rent2go-logo" className="logo" />
          </Link>
        </div>
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/cars" className="link">
                Cars
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/our-team" className="link">
                Our Team
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/contact" className="link">
                Contact
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
                title={
                  <Link className="text btn" to="/profile">
                    Actions
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <Link className=" text textAction btn" to="/profile">
                  {" "}
                 
                  Profile
                </Link>

                <Link className="  btn text textAction" to="/cart">
                  Reservation
                </Link>
                <Link className="text textAction btn" to="/sign-up" onClick={logout}>
                  Log Out
                </Link>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link className="text btn" to={"/sign-up"}>
                Sign Up
              </Link>
            </>
          )}
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
