import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

import "./navbar.css";

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
    if(window.scrollY >= 20) {
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
              <a href="/" className="link">
                Used Cars
              </a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">
                New Cars
              </a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">
                Auctions
              </a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">
                Sell
              </a>
            </li>
          </ul>

          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          <div className="text">Sign Up</div>
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
