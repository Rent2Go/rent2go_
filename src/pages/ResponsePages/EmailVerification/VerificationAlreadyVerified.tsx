import React from "react";
import { Link } from "react-router-dom";
import "../response.css";

type Props = {};

const VerificationAlreadyVerified = (props: Props) => {

  return (
    <div className="response">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer secTitle">
          <h2 className="text-warning">Email Verification Already Verified!</h2>
        </div>
        <div className="contentContainer ">
          <p>
          You have previously successfully completed your e-mail verification process. You can log in to the site.
          </p>
        </div>
        <div className="actionContainer">
          <Link
            to="/sign-in"
            className="btn btn-md btn-profile"
          >
            Sign In
          </Link>
          <Link to="/contact" className="btn btn-md btn-home">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationAlreadyVerified;
