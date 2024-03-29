import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import sidebarLinks from "./sidebarLinks";

import "react-toastify/dist/ReactToastify.css";
import "./sidebar.css";
import TokenService from "../../services/TokenService";
import { useSelector } from "react-redux";

type Props = {};

const Sidebar = (props: Props) => {

  const settings = useSelector((state: any) => state.settings.setting);
  
  const logout = () => {
    TokenService.removeToken("token");
    TokenService.removerefreshToken("refreshToken");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <img
            src={settings?.logo}
            alt="logo"
          />{" "}
          {settings?.title}
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
              <AiOutlineLogout /> Logout
            </Link>
            <ToastContainer position="top-center" closeButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
