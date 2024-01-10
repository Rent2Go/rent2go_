import React from "react";
import logo from "../../assets/img/logo.png";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <img src={logo} alt="rent2go-logo" className="logo" />
        </div>
        <div className="navbar">
        <ul className="menu">
          <li className="listItem">
            <a href="/" className="link">
              Used Cars
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="link">
              Auctions
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" />
      </div>

      <div className="signUp flex">
        <div className="text">
          Sign Up 
        </div>
        <IoIosMenu className="icon" />
      </div>
      </div>

      
    </>
  );
};

export default Navbar;
