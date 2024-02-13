import React from "react";


import "./review.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

type Props = {};

const Review = (props: Props) => {
  const {t} = useTranslation();

  return (
    <div className="review section">
      <div className="secContainer container ">
        <div className="secHeading flex ">
          <h3 className="secTitle">{t("recentReview")}</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src="assets/img/carModels/minicooper-s-mavi.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">MINI Cooper S 2012</h5>
            <span className="desc">{t("goodCarsAre")}</span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/soner.png" alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Soner Şeylan</span>
                  <p>{t("chiefEditor")}</p>
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
            <h5 className="reviewTitle">Porcshe 911 GT3 2022</h5>
            <span className="desc">{t("goodCarsAre")}</span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/yagmur.jpg" alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Yağmur Çurku</span>
                  <p>{t("chiefEditor")}</p>
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
            <h5 className="reviewTitle">BMW 320i 2020</h5>
            <span className="desc">{t("goodCarsAre")}</span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/seyhmus.jpeg" alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Şeyhmus Erol</span>
                  <p>{t("chiefEditor")}</p>
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
              <img src="assets/img/carModels/volkswagen-beetle-beyaz.png" alt="reviewImg" />
            </div>
            <h5 className="reviewTitle">Volkswagen Beetle 2014</h5>
            <span className="desc">{t("goodCarsAre")}</span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src="assets/img/userImages/feyza.jpg" alt="reviewerImage" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Feyza Karanfil Erat</span>
                  <p>{t("chiefEditor")}</p>
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
