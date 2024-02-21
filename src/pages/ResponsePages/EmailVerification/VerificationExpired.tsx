import React from "react";
import { Link } from "react-router-dom";
import "../response.css";

type Props = {};

const VerificationExpired = (props: Props) => {

  return (
    <div className="response">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer secTitle">
          <h2 className="text-warning">Email Verification Expired!</h2>
        </div>
        <div className="contentContainer ">
          <p>
          Your required time for email verification has expired. Please try to register again..
             You can contact us to report a problem.
          </p>
        </div>
        <div className="actionContainer">
          <Link
            to="mailto:support@rentogo.com.tr"
            className="btn btn-md btn-profile"
          >
            Send Mail
          </Link>
          <Link to="/contact" className="btn btn-md btn-home">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationExpired;
