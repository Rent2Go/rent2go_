import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { CiCircleInfo } from "react-icons/ci";

import {
  Navbar,
  Footer,
  CustomerCard,
  PriceCard,
  DiscountCode,
} from "../../components";

import { CarModel } from "../../models/responses/cars/GetCar";

import CarService from "../../services/CarService";

import { useAuth } from "../../contexts/AuthContext";
import { usePaymentContext } from "../../contexts/PaymentContext";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
import "./reservationPage.css";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { differenceInDays, differenceInYears } from "date-fns";
import { setAction } from "../../store/slices/rentalSlice";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/user/UserModel";
import { log } from "console";

const ReservationPage = () => {
  const { t } = useTranslation();
  const settings = useSelector((state: any) => state.settings.setting);
  const { startDate, endDate } = useSelector((state: any) => state.rentalDate);
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(auth.authInformation.user.email);
  const params = useParams<{ id: string }>();
  const [rentals, setRentals] = useState<CarModel>();
  const [user, setUser] = useState<UserModel>();

  //const result = useSelector((state:any) => state);
  //console.log(result);

  // useEffect(() => {
  //   // rentalInfo state'i her güncellendiğinde sessionStorage'e kaydet
  //   sessionStorage.setItem('rentalInfoSlice', JSON.stringify(car));
  // }, [car])

  useEffect(() => {
    if (params.id) {
      getRentals(params.id);
    }
    if (auth.authInformation.user.email) {
      getUsersByEmail(auth.authInformation.user.email!);
    }
  }, [params.id]);

  const getRentals = async (id: string) => {
    try {
      const response = await CarService.getById(parseInt(id));
      setRentals(response.data.data);
      dispatch(setAction({ car: response.data.data }));
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };

  const getUsersByEmail = async (email: string) => {
    try {
      const response = await UserService.getByEmail(email);
      setUser(response.data.data);
      console.log(response.data.data);
      dispatch(setAction({ user: response.data.data }));
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
  console.log(user?.customer.driverLicenceAge);
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash-payment-confirmation");
  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const isAuthenticated = () => {
  
    if (auth.authInformation.user.email === "" || null || undefined) {
      alert(t("youHaveToBeAuthenticatedBeforeYouCanMakeAReservation"));
      navigate("/sign-in");
    }
    else if (user?.district === null) {
      alert(t("yourUserInformationIsMissingPleaseFillItIn"));
      navigate("/profile/location-settings");
    }
   else if(user?.customer.issueDate === null) {
      alert(t("drivinglicenceinformation"));
      navigate("/profile/drivers-license");

    }
   else if(user){
      if(user?.customer.driverLicenceAge < 2 ){
        alert(t("DrivingLicenceAgemustbeatleast2yearsold"));
        navigate("/");
    }
    

    }
  
  
  };

  const rentStartDate = new Date(startDate);
  const rentEndDate = new Date(endDate);
  const rentDay = differenceInDays(endDate, startDate) + 1;

  dispatch(
    setAction({
      startDate: startDate,
      endDate: endDate,
      day: rentDay,
    })
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with payment method: ", selectedPaymentMethod);

    navigate(`/payment/${selectedPaymentMethod}`);
  };

  const translateFuelTypeKey = rentals?.fuelType.toUpperCase();
  const translateGearTypeKey = rentals?.gearType.toUpperCase();

  return (
    <>
      <Helmet>
        <title>
          {settings.title} - {t("reservation")}{" "}
        </title>
      </Helmet>
      <Navbar />

      <div className="reservation container-fluid">
        <div className="secContainer bgWhite">
          <div className="imgContainer">
            <img src={rentals?.imageUrl} alt="carImage" />
          </div>

          <div className="secHeading">
            <h5>{t("reservationDetail")}</h5>
          </div>
          <div className="secContent">
            <div className="topContent">
              <div className="customerCardContainer">
                <CustomerCard />
              </div>
              <div className="dateContentContainer">
                <p>
                  <span>
                    {" "}
                    <b>{t("startDate")} : </b>
                  </span>
                  <span>{rentStartDate.toDateString()}</span>
                </p>
                <p>
                  <span>
                    <b>{t("endDate")} : </b>{" "}
                  </span>
                  <span>{rentEndDate.toDateString()}</span>
                </p>
                <DiscountCode />
              </div>
            </div>
            <div className="middleContent">
              <div className="rentalCard" key={rentals?.id}>
                <p>
                  <span>
                    <b>{t("plate")} :</b>{" "}
                  </span>
                  <span>{rentals?.plate}</span>
                </p>
                <p>
                  <span>
                    <b>{t("model")} :</b>{" "}
                  </span>
                  <span>
                    {rentals?.model?.brand.name} {rentals?.model?.name}
                  </span>
                </p>

                <p>
                  <span>
                    <b>{t("type")} :</b>{" "}
                  </span>
                  <span>
                    {translateFuelTypeKey && t(translateFuelTypeKey)}, {" "}
                    {translateGearTypeKey && t(translateGearTypeKey)}
                  </span>
                </p>
                <p>
                  <span>
                    <b>{t("rental")} : </b>{" "}
                  </span>
                  <span>
                    {rentDay == 0 ? 1 : rentDay} - {t("days")}
                  </span>
                </p>
              </div>
              <div className="priceCardContainer">
                <PriceCard cars={rentals} day={rentDay == 0 ? 1 : rentDay} />
              </div>
            </div>
            <div className="bottomContainer">
              <div className="packageContainer">
                <p>{t("whatsIncludedInThePackage")}</p>
                <div>
                  <span>
                    <button
                      title="."
                      aria-describedby={popInsurance}
                      type="button"
                      onMouseEnter={handleClickInsurance}
                    >
                      <CiCircleInfo />
                    </button>{" "}
                    {t("insurance")}
                    <BasePopup id={popInsurance} open={openInsurance}>
                      <div>{t("insuranceDescription")}</div>
                    </BasePopup>
                  </span>
                  <span>
                    <button
                      title="."
                      aria-describedby={popAssistance}
                      type="button"
                      onMouseEnter={handleClickAssistance}
                    >
                      <CiCircleInfo />
                    </button>{" "}
                    {t("roadsideAssistance")}
                    <BasePopup id={popAssistance} open={openAssistance}>
                      <div>{t("roadsideAssistanceDescription")}</div>
                    </BasePopup>
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="actionContainer">
                  <div className="radioContainer">
                    <p>{t("choosePaymentMethod")} : </p>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedPaymentMethod}
                        name="radio-buttons-group"
                        onChange={handlePaymentMethodChange}
                      >
                        <FormControlLabel
                          value="cash-payment-confirmation"
                          control={<Radio />}
                          label={t("cash")}
                        />
                        <FormControlLabel
                          value="online"
                          control={<Radio />}
                          label={t("online")}
                        />
                        <FormControlLabel
                          value="bankTransfer"
                          control={<Radio />}
                          label={t("bankTransfer")}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="btnContainer">
                    <button
                      className="btn btn-apply btn-sm"
                      type="submit"
                      title="Send"
                      onClick={isAuthenticated}
                    >
                      {t("reservation")}
                    </button>
                    <Link
                      to="/cars"
                      className="btn btn-cancel btn-sm"
                      title="Send"
                    >
                      {t("cancel")}
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
