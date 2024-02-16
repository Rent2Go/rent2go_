import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { CiCircleInfo } from "react-icons/ci";

import { Navbar, Footer, CustomerCard, PriceCard } from "../../components";

import { CarModel } from "../../models/responses/cars/GetCar";

import CarService from "../../services/CarService";

import { useAuth } from "../../contexts/AuthContext";
import { usePaymentContext } from "../../contexts/PaymentContext";

import "./reservationPage.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { differenceInDays } from "date-fns";

const ReservationPage = () => {
  const settings = useSelector((state:any)=> state.settings.setting)
  const auth = useAuth();
  const navigate = useNavigate()
  console.log(auth.authInformation.user.email);
  const params = useParams<{ id: string }>();
  const [rentals, setRentals] = useState<CarModel>();
  const { startDate, endDate } = useSelector((state:any) => state.rentalDate);
  useEffect(() => {
    if (params.id) {
      getRentals(params.id);
    }
  }, [params.id]);

  const getRentals = async (id: string) => {
    try {
      const response = await CarService.getById(parseInt(id));
      setRentals(response.data.data);
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };
  {
    /*POPUP*/
  }
  const [anchorInsurance, setAnchorInsurance] =
    React.useState<null | HTMLElement>(null);
  const [anchorAssistance, setAnchorAssistance] =
    React.useState<null | HTMLElement>(null);

  const handleClickInsurance = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorInsurance(anchorInsurance ? null : event.currentTarget);
    if (anchorAssistance) {
      setAnchorAssistance(null);
    }
  };
  const handleClickAssistance = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAssistance(anchorAssistance ? null : event.currentTarget);
    if (anchorInsurance) {
      setAnchorInsurance(null);
    }
  };

  const openInsurance = Boolean(anchorInsurance);
  const openAssistance = Boolean(anchorAssistance);
  const popInsurance = openInsurance ? "simple-popper-insurance" : undefined;
  const popAssistance = openAssistance ? "simple-popper-assistance" : undefined;
  {
    /*POPUP*/
  }

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };



  const isAuthenticated = ()=> {

    if  ((auth.authInformation.user.email === '' || null || undefined) ){
        alert("You have to be authenticated before you can  make a reservation.");
        navigate("/sign-up")        
    }



  }






 const rentStartDate= new Date(startDate);
 const rentEndDate= new Date(endDate);
 const rentDay = (differenceInDays(endDate, startDate)+1);




  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with payment method: ", selectedPaymentMethod);

    navigate(`/payment/${selectedPaymentMethod}`);
  };
  return (
    <>
      <Helmet >
        <title>{settings.title} - Reservation </title>

      </Helmet>
      <Navbar />
      <div className="reservation ">
        <div className="secContainer">
          <div className="imgContainer">
            <img src={rentals?.imageUrl} alt="carImage" />
          </div>
          <div className="secHeading">
            <h5>Reservation Detail</h5>
          </div>
          <div className="secContent">
            <div className="topContent">
              <div className="customerCardContainer">
                <CustomerCard />
              </div>
              <div className="dateContentContainer">
                <p>
                  
                    <b>Start Date : </b> {rentStartDate.toDateString()}
                  
                </p>
                <p>
                  <span>
                    <b>End Date : </b> {rentEndDate.toDateString()}
                  </span>
                </p>
              </div>
            </div>
            <div className="middleContent">
              <div className="rentalCard" key={rentals?.id}>
                <p>
                  <span>
                    <b>Plate :</b>{" "}
                  </span>
                  <span>{rentals?.plate}</span>
                </p>
                <p>
                  <span>
                    <b>Model :</b>{" "}
                  </span>
                  <span>
                    {rentals?.model?.brand.name} {rentals?.model?.name}
                  </span>
                </p>


                <p>
                  <span>
                    <b>Type :</b>{" "}
                  </span>
                  <span>
                    {rentals?.fuelType.toLowerCase()},{" "}
                    {rentals?.gearType.toLowerCase()}
                  </span>
                </p>
                <p>
                  <span>
                    <b>Rental : </b>{" "}
                  </span>
                  <span>{rentDay == 0 ? 1 : rentDay } - Days</span>
                </p>
              </div>
              <div className="priceCardContainer">
                <PriceCard cars={rentals} day={rentDay == 0 ? 1 : rentDay} />
              </div>
            </div>
            <div className="bottomContainer">
              <div className="packageContainer">
                <p>What's included in the package ?</p>
                <div>
                  <span>
                    <button
                      aria-describedby={popInsurance}
                      type="button"
                      onMouseEnter={handleClickInsurance}
                    >
                      <CiCircleInfo />
                    </button>{" "}
                    Insurance
                    <BasePopup id={popInsurance} open={openInsurance}>
                      <div>
                        All accidents and thefts for which a Police Report has
                        been filed are covered by insurance.
                      </div>
                    </BasePopup>
                  </span>
                  <span>
                    <button
                      aria-describedby={popAssistance}
                      type="button"
                      onMouseEnter={handleClickAssistance}
                    >
                      <CiCircleInfo />
                    </button>{" "}
                    Roadside Assistance
                    <BasePopup id={popAssistance} open={openAssistance}>
                      <div>
                        You can call us for roadside assistance and support 24
                        hours a day, 7 days a week.
                      </div>
                    </BasePopup>
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="actionContainer">
                  <div className="radioContainer">
                    <p>Choose Payment Method : </p>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedPaymentMethod}
                        name="radio-buttons-group"
                        onChange={handlePaymentMethodChange}
                      >
                        <FormControlLabel
                          value="cash"
                          control={<Radio />}
                          label="Cash"
                        />
                        <FormControlLabel
                          value="online"
                          control={<Radio />}
                          label="Online"
                        />
                        <FormControlLabel
                          value="bankTransfer"
                          control={<Radio />}
                          label="Bank Transfer"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="btnContainer">
                    <button
                      className="btn btn-secondary btn-sm"
                      type="submit"
                      title="Send"
                      onClick={isAuthenticated}
                    >
                      Reservation
                    </button>
                    <Link
                      to="/cars"
                      className="btn btn-dark btn-sm"
                      title="Send"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="noteContainer"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage; 

