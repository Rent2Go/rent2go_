import React from "react";
import "./notFound.css";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
type Props = {};

const PageNotFound = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="notFound container">
        <div className="secContent grid">
          <div className="descriptionContainers">
            <div className="titleContainer">
              <img
                src="/assets/img/notFound/notFoundTitle.png"
                alt="not-found"
              />
            </div>

            <div className="btnContainer">
              <Link to="/" type="button" className="btn">
                Take Me Back
              </Link>
            </div>
          </div>
          <div className="imgContainers">
            <img src="/assets/img/notFound/notFound.png" alt="not-found" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
