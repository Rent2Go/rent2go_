import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./successPage.css";
const EmailVerificationSuccess: FC = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "https://rentogo.com.tr/sign-up";
  };

  return (
    <div className="container">
      <div className="secContainer">
        <div className="contentContainer shadow-rounded-box">
          <div className="titleContainer secTitle">
            <h2>Email Verification Successful!</h2>
          </div>
          <p>
            Your email has been successfully verified. To go to the registration
            page Click the button below.
          </p>
          <button className="btn btn-md" onClick={handleButtonClick}>
            Go To Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
