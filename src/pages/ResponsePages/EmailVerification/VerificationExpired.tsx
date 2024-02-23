import React from "react";
import { Link } from "react-router-dom";
import "../response.css";

type Props = {};

const VerificationExpired = (props: Props) => {
  return (
    <div className="response container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer secTitle">
          <h2 className="text-warning">Email Verification Expired!</h2>
        </div>
        <div className="contentContainer ">
          <p>
            The mail verification has been failed. The token has
            expired. Please register again in few minutes... You can contact us
            to report a problem.
          </p>
        </div>
        <div className="actionContainer">
          <Link
            to="/sign-in"
            className="btn btn-md btn-home"
          >
            Register
          </Link>
          <Link to="/contact" className="btn btn-md btn-profile">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationExpired;
