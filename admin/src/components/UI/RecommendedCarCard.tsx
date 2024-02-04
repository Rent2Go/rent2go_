import React from "react";

type Props = {
    item: {
        carName: string;
        retweet: string;
        imgUrl: string;
        rentPrice: number;
        percentage:number;
    };
  };

const RecommendedCarCard = (props: Props) => {
    const { carName, retweet, imgUrl, rentPrice, percentage} = props.item;

  return (
    <div className="recommended__car-card" >
      <div className="recommended__car-top">
        <h5>
          <span>
            <i className="ri-refresh-line"></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>
      <div className="recommended__car-img">
        <img src={imgUrl} alt="recommended_car" />
      </div>
      <div className="recommended__car-bottom">
        <h4>{carName}</h4>
        <div className="recommended__car-other">
          <div className="recommend__icons">
            <p>
              <i className="ri-repeat-line"></i>
              {retweet}k
            </p>
            <p>
              <i className="ri-settings-line"></i>
            </p>
            <p>
              <i className="ri-timer-flash-line"></i>
            </p>
          </div>
          <span> ${rentPrice} / h</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCarCard;
