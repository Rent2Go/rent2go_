import React from "react";

import car1 from "../../assets/img/carModels/1967-Chevrolet-Impalasiyah.png";
import car2 from "../../assets/img/carModels/porche-911gt3-beyaz.png";
import car3 from "../../assets/img/carModels/bmw320-kırmızı.png";
import car4 from "../../assets/img/carModels/chevrolet-cruze-beyaz.png";
import user1 from "../../assets/img/userImages/soner.png";
import user2 from "../../assets/img/userImages/yagmur.jpg";
import user3 from "../../assets/img/userImages/seyhmus.jpeg";
import user4 from "../../assets/img/userImages/feyza.jpeg";
import "./review.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

type Props = {};

const Review = (props: Props) => {
  return (
    <div className="review section">
      <div className="secContainer container ">
        <div className="secHeading flex ">
          <h3 className="secTitle">Recent Review</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">1967 Impala</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Soner Şeylan</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2023 Porsche</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user2} alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Yağmur Çurku</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.96</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2023 BMW</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user3} alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Şeyhmus Erol</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.25</blockquote>
              </div>
            </div>
          </div>

          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car4} alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2018 Cruze</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user4} alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Feyza Karanfil Erat</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.75</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
