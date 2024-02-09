import React, { useEffect, useState } from "react";
import "./styles/cars.css";
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";
import { Link, useParams } from "react-router-dom";

type Props = {};

const DetailCar = (props: Props) => {
  const [carDetail, setCarDetail] = useState<CarModel | undefined>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      getCarDetail(params.id);
    }
  }, [params.id]);

  const getCarDetail = async (id: string) => {
    try {
      const response = await CarService.getById(parseInt(id));
      setCarDetail(response.data.data);
      console.log(response.data.data.color.name);
    } catch (error) {
      console.error("There is an error : ", error);
    }
  };

  return (
    <div className="cars">
      <div className="headingContainer mb-5">
        <h2>
          Details of {carDetail?.model?.brand.name} {carDetail?.model?.name}{" "}
          {carDetail?.year}
        </h2>
      </div>
      <div className="secContainer">
        <div className="contentContainer">
          <div className="imgContainerDetail">
            <img src={carDetail?.imageUrl} alt={carDetail?.model.brand.name} />
            <Link to="cars" className="btn"> Back</Link>
          </div>
          <div className="detailContainer">
            <div className="infoContainer shadow-rounded-box">
              <div className="detailLine">
                <label>Color : </label>
                <p> {carDetail?.color.name}</p>
              </div>
              <div className="detailLine">
                <label>Plate : </label>
                <p> {carDetail?.plate}</p>{" "}
              </div>
              <div className="detailLine">
                <label>Gear Type : </label>
                <p> {carDetail?.gearType}</p>
              </div>

              <div className="detailLine">
                <label>Fuel Type : </label>
                <p> {carDetail?.fuelType}</p>
              </div>
              <div className="detailLine">
                <label>Body Type : </label>
                <p> {carDetail?.bodyType}</p>
              </div>
              <div className="detailLine">
                <label>Engine Power : </label>
                <p> {carDetail?.enginePower}</p>{" "}
              </div>
              <div className="detailLine">
                <label>Kilometer : </label>
                <p> {carDetail?.kilometer}</p>
              </div>
              <div className="detailLine">
                <label>Daily Price : </label>
                <p> {carDetail?.dailyPrice}</p>{" "}
              </div>
            </div>
            <div className="policyContainer shadow-rounded-box">
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
              <div className="detailLine">
                <label>Policy No : </label>
                <p>2024012354</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCar;
