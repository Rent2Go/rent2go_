import React from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";

import "./navbar.css";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="search__box">
          <input type="search" className="form-control" placeholder="search or type" />
          <span>
            <IoMdSearch />
          </span>
        </div>
        <div className="navbar__right">
          <span className="notification">
            <IoIosNotifications />
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/profile"><img className="img-rounded" src="assets/images/profile.png" alt="profile"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
