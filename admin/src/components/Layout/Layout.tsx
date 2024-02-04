import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Router from "../../routes/Router";

type Props = {};

const Layout = (props: Props) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return (
      <div className="layout">
        <div className="content">
          <Router />
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <Navbar />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
