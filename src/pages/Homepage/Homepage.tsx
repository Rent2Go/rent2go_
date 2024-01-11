import React from "react";
import "./homepage.css";
import homeImage from "../../assets/img/carModels/toyota-corolla-beyaz.png"

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet your new Car</span>
          <h1 className="homeTitle" >Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="homeImage"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
