import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../response.css";
const VerificationSuccessful: FC = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "https://rentogo.com.tr/sign-in";
  };

  return (
    <div className="response">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer secTitle">
          <h2>Email Verification Successful!</h2>
        </div>
        <div className="contentContainer ">
          <p>
            Your email has been successfully verified. To go to the registration
            page Click the button below.
          </p>
        </div>
        <div className="actionContainer">
          <button className="btn btn-md btn-home" onClick={handleButtonClick}>
            Go To Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccessful;
