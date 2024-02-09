import React, { useEffect, useState } from "react";
import "./vehicleCard.css";
import { CarModel } from "../../../models/responses/cars/GetCar";
import { IoColorPalette } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { BiCylinder } from "react-icons/bi";
import { PiEngineFill } from "react-icons/pi";
import { TbBrandDaysCounter } from "react-icons/tb";
import { IoPricetags } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";
import CarService from "../../../services/CarService";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  car: CarModel;
};
const VehicleCard = (props: Props) => {

  const [checked, setChecked] = useState<boolean>(props.car.active);
  const handleChange = (e: any, id: number) => {
    const isActive = e.target.checked; // Doğru checked değerini almak için e.target.checked'i kullanın
    setChecked(isActive);
    handleActive(id, isActive);
    window.location.reload();

  };

  useEffect(() => {

  }, [checked])




  const handleDelete = async (id: number) => {
    var isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      await CarService.deleteCar(id)
        .then(() => {
          toast.success("Vehicle was successfully deleted")
          window.location.reload();
        })
    }
  };

  const handleActive = async (id: number, checked: boolean) => {


    await CarService.updateIsActive(id, checked)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err)
      })
  }


  return (
    <>
      <div className="vehicleCard shadow-rounded-box">
        <div className="headerContainer ">
          <p>
            {props.car.model.brand.name} {props.car.model.name} {props.car.year}
          </p>
        </div>
        <div className="plateContainer">
          <p>{props.car.plate}</p>

          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id={`custom-switch-${props.car.id}`}
              label=""
              title="Active"
              className="warning"
              checked={checked}
              onChange={(e) => handleChange(e, props.car.id)}
            />
          </Form>
        </div>

        <div className="leftContainer">
          <div className="contentContainer">
            <div className="imgContainer">
              <img src={props.car.imageUrl} alt="carImg" />
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="descriptionContainer">
            <p title="Color">
              <IoColorPalette /> {props.car.color.name}
            </p>
            <p title="Body Type">
              <LuBaggageClaim /> {props.car.bodyType}
            </p>
            <p title="Fuel Type">
              <BsFuelPumpFill /> {props.car.fuelType}
            </p>
            <p title="Gear Type">
              <GiGearStickPattern /> {props.car.gearType}
            </p>
            <p title="Cylinder Count">
              <BiCylinder /> {props.car.cylinderCount}
            </p>
            <p title="Engine Power">
              <PiEngineFill /> {props.car.enginePower}
            </p>
            <p title="Kilometer">
              <TbBrandDaysCounter /> {props.car.kilometer} kM
            </p>
            <p title="Daily Price">
              <IoPricetags /> {props.car.dailyPrice} ₺
            </p>
          </div>
        </div>
        <div className="actionContainer">
          <Link
            to={`/car-detail/${props.car.id}`}
            className="btn btn-sm btn-detail"
            title="Detail"
          >
            <IoIosMore /> Detail
          </Link>
          <Link
            to={`/car-update/${props.car.id}`}
            className="btn btn-sm btn-update"
            title="Update"
          >
            <CiEdit /> Update
          </Link>
          {props.car.active &&

            <Link
              to={"/cars"}
              onClick={() => handleDelete(props.car.id)}
              className="btn btn-sm btn-delete"
              title="Delete"
            >

              <MdOutlineDeleteForever /> Delete
            </Link>



          }

        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default VehicleCard;
