import React from "react";
import { Footer, Navbar } from "../../../components";
import { Link } from "react-router-dom";
import "../payment.css";
type Props = {};

const Successful = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="success">
        <div className="secContainer shadow-rounded-box">
          <div className="titleContainer">
            <h2>Payment Successful !</h2>
          </div>
          <div className="contentContainer">
            <p>
              <span>Your payment has been successfully.. </span><br></br>
              <span>
                Your reservation request has been received. Please check your
                mailbox.
              </span>
              <span>
                You can view your reservation request from your profile page.
              </span>
            </p>
          </div>
          <div className="actionContainer">
            <Link
              to="/profile/your-reservation"
              type="button"
              className="btn btn-profile"
            >
              Profile
            </Link>
            <Link to="/" type="button" className="btn btn-home">
              Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Successful;
