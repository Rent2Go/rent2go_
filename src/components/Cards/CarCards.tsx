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
        <div className="row">
          <div className="imgDiv  col-xl-4 col-12">
            <img src={props.car.imageUrl} alt="carImage" />
          </div>

          <div className="descriptionDiv offset-xl-1  col-xl-4 col-12">
            <div className="row">
              <div className="col-12">
                <p className="carTitle">
                  {props.car.model.brand.name} {props.car.model.name}{" "}
                  {props.car.year}
                </p>
              </div>

            </div>
            <div className="row">
              <div className="col-xl-12 col-4">
                <span className="carIcons">
                  <BiTachometer />{" "}
                </span>
                <span className="carSubText">{props.car.kilometer} km</span>
              </div>
              <div className="col-xl-12 col-4">
                <span className="carIcons">
                  <PiEngine />{" "}
                </span>
                <span className="carSubText">
                  {props.car.enginePower} / {props.car.cylinderCount}
                </span>
              </div>
              <div className="col-xl-12 col-4">
                <span className="carIcons">
                  <IoIosColorPalette />{" "}
                </span>
                <span className="carSubText">{props.car.color.name}</span>
              </div>
            </div>
          </div>
          <div className="actionDiv  col-xl-3 col-12 ">
            <div className="row">
              <div className="col-xl-12 col-7">
                <div className="actionRow">
                  {" "}
                  <span className="priceIcon">
                    <GrMoney />
                  </span>
                  <span className="priceText">
                    {props.car.dailyPrice.toFixed(2)} ₺
                  </span>
                </div>
              </div>
              <div className="col-xl-12 col-5">
                <Link
                  to={`/reservation/${props.car.id}`}
                  className="btn reservationBtn"
                >
                  {t("reservation")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CarCards;
