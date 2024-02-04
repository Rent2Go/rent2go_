import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import sidebarLinks from "./sidebarLinks";
import "./sidebar.css";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const Sidebar = (props: Props) => {

  const logout = () => {
    localStorage.removeItem("token");

  }
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <img src="assets/images/logo-dark.png" alt="logo" /> Rent2go
        </h2>
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
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <span>
            <Link to="/login" onClick={logout}>
              <AiOutlineLogout />
               {" "}Logout
            </Link>
            <ToastContainer position="top-center" closeButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
