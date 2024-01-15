import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

import "./navbar.css";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {

  const [navbar, setNavbar] = useState('navbar');

  const showNavbar = () => {
    setNavbar('navbar showNavbar')
  }
  const removeNavbar = () => {
    setNavbar('navbar')
  }

  const[header, setHeader] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 40) {
      setHeader('header addBg')
    }
  }

  window.addEventListener('scroll', addBg);

  return (
    <>
      <div className={header}>
        <div className="logoDiv">
          <img src={logo} alt="rent2go-logo" className="logo" />
        </div>
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                Used Cars
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                New Cars
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                Auctions
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                Sell
              </Link>
            </li>
          </ul>

          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          <Link className=" text text-login btn" to="/sign-in" >Login</Link>
          <Link className="text btn" to="/sign-up" >Sign Up</Link>
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
