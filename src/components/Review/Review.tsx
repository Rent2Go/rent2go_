import React from "react";
import "./review.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

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
              <img src="" alt="reviewImg"/>
            </div>
            <h5 className="reviewTitle">2023 Cadillac</h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate,
              reliable, capacious, comfortable, and attractive.
            </span>
            <div className="reviewerDiv">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="" alt="reviewerImage"/>
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jakline Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
