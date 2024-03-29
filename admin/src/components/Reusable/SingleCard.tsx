import React from 'react';

type Props = {
  item: {
    title: string;
    totalNumber: number;
    icon: string;
  };
 
};

const SingleCard = (props: Props) => {
  const { title, totalNumber, icon } = props.item;

  return (
    <div className="single__card">
      <div className="card__content">
        <h4>{title}</h4>
        <span>{totalNumber} +</span>
      </div>
      <span className="card__icon">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default SingleCard;
