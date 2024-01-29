import React from "react";

type CarItemProps = {
  item: {
    category: string;
    type: string;
    rentPrice: number;
    imgUrl: string;
    carName: string;
    groupSize: number;
  };
};

const CarItem: React.FC<CarItemProps> = ({ item }) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = item;

  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
          <span>
            <i className="ri-heart-line"></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i className="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i className="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car__rent">${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
