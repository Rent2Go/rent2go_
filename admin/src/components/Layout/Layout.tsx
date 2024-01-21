import React from "react";
import { Navbar, Sidebar } from "..";
import Router from "../../routes/Router";

type Props = {};

const Layout = (props: Props) => {
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
