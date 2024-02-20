import React from "react";
import { Link } from "react-router-dom";
import "../response.css";

type Props = {};

const VerificationFailed = (props: Props) => {

  return (
    <div className="response">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer secTitle">
          <h2 className="text-alert">Email Verification Failed!</h2>
        </div>
        <div className="contentContainer ">
          <p>
            Your email verification failed. Please check the accuracy of your
            email address.. You can contact us to report a problem.
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

export default VerificationFailed;
