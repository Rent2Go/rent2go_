import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Router from "../../routes/Router";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="layout">
     
      <div className="main__layout">
        
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
