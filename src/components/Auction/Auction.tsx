import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";

import './auctions.css';
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";

type Props = {};

const Auction: React.FC<{ handleScrollToSearch: () => void }> = ({ handleScrollToSearch }) => {
  const [carList, setCarList] = useState<CarModel[]>([]);

  const getCarList = async () => {
    try {
      const response = await CarService.getAll();
      setCarList(response.data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  } 
  const shuffleCarList = () => {
    setCarList((prevCarList) => {
      const shuffledList = [...prevCarList].sort(() => Math.random() - 0.5);
      return shuffledList;
    });
  };
  useEffect(() => {
    getCarList();
    const intervalId = setInterval(() => {
      shuffleCarList();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  
  const {t} = useTranslation();

  const searchRef = useRef<HTMLDivElement>(null);

 

  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex" data-aos="fade-up" data-aos-duration="2000">
          <h3 className="secTitle">{t("activeAuctions")}</h3>
          <div className="navBtns flex">
            <HiOutlineRefresh className="icon leftIcon" onClick={shuffleCarList} />
          </div>
        </div>
        <div className="carContainer grid">
        {carList.slice(0, 3).map((car) => (
          <div className="singleCar grid" key={car.id} >
            <div className="imgDiv">
              <img src={car.imageUrl || "/assets/img/defaultCar.png"} alt="carImage" />
            </div>
            <h5 className="carTitle">{`${car.model?.brand.name} ${car.model.name} ${car.year}`}</h5>
            <span className="miles">{`${car.kilometer} ${t("kilometer")}`}</span>
            <span className="AWD">AWD {car.enginePower}</span>

            <div className="price_buyBtn flex">
              <span className="price">{car.dailyPrice} ₺</span>
              <button className="buyBtn" onClick={handleScrollToSearch}>{t("rentNow")}</button>
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
};

export default Auction;
