import React from "react";

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/NavLinks";


import "./sidebar.css"

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
      <span><img src="{logo}" alt="logo" /></span>
        <h2>
          Rent2go
        </h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink to={item.path}>
                  <span>
                    <i className={item.icon}>{item.display}</i>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__bottom">
        <span><i className="ri-logout-circle-r-line"></i>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
