import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-dark.png";
import sidebarLinks from "../../assets/data/sidebarLinks";
import "./sidebar.css";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2><img src={logo} alt="logo" /> Rent2go</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {sidebarLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <span>
                    {" "}
                    <i className={item.icon}></i>
                  </span>

                  {item.display}
                  <ul>
                    <li>
                      <i className={item.subIcon}></i> {item.subDisplay}
                    </li>
                  </ul>
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
