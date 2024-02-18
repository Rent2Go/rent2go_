import React from "react";
import { CarModel } from "../../models/responses/cars/GetCar";
import { BiTachometer, BiCylinder, BiSolidDollarCircle } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { GrMoney } from "react-icons/gr";

import { PiEngine } from "react-icons/pi";

import "../../pages/CarPage/carPage.css";
import { Link } from "react-router-dom";

type Props = {
  car: CarModel;
};

const CarCards = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {
        <div className="grid">
          <div className="imgDiv">
            <img src={props.car.imageUrl} alt="carImage" />
          </div>
          <div className="descriptionDiv">
            <p className="carTitle">
              {props.car.model.brand.name} {props.car.model.name}{" "}
              {props.car.year}
            </p>
            <div>
              <span className="carLabel">
                <BiTachometer />{" "}
              </span>
              <span className="miles">{props.car.kilometer} km</span>
            </div>

            <div>
              <span className="carLabel">
                <PiEngine />{" "}
              </span>
              <span className="AWD">
                {props.car.enginePower} / {props.car.cylinderCount}
              </span>
            </div>

            <div>
              <span className="carLabel">
                <IoIosColorPalette />{" "}
              </span>
              <span className="miles">{props.car.color.name}</span>
            </div>
          </div>
          <div className="actionDiv">
            <div className="actionRow">
              {" "}
              <span className="carLabel">
                <GrMoney />
              </span>
              <span className="price">{props.car.dailyPrice} ₺</span>
            </div>
            <div className="actionRow">
              <Link
                to={`/reservation/${props.car.id}`}
                className="btn text btnPrimary"
              >
                {t("reservation")}
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CarCards;
