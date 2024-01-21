import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/NavLinks";

import "./sidebar.css"

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <i className="ri-taxi-line"></i>Rent2go
        </h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item">
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
    </div>
  );
};

export default Sidebar;
