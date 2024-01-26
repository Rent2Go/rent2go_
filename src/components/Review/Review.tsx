import React from "react";


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
              <img src="assets/img/carModels/1967-Chevrolet-Impalasiyah.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">1967 Impala</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/soner.png" alt="reviewerImage" />
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
              <img src="assets/img/carModels/porche-911gt3-beyaz.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2023 Porsche</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/yagmur.jpg" alt="reviewerImage" />
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
              <img src="assets/img/carModels/bmw320-kırmızı.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2023 BMW</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/seyhmus.jpeg" alt="reviewerImage" />
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
              <img src="assets/img/carModels/chevrolet-cruze-beyaz.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">2018 Cruze</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/feyza.jpeg" alt="reviewerImage" />
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
