import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { differenceInDays } from "date-fns";

import { useTranslation } from "react-i18next";

import { setEndDate, setStartDate } from "../../store/slices/dateSlice";

import "./search.css";


type Props = {};

const Search = (props: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state:any) => state.rentalDate);

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date(startDate));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date(endDate));

  const handleStartDateChange = (newStartDate: Date | null) => {
        setSelectedStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: Date | null) => {
    if (newEndDate && selectedStartDate && newEndDate <= selectedStartDate) {
      alert(t("The end date cannot be less than or equal to the start date"));
    } else {
      setSelectedEndDate(newEndDate);
    }
  };

  const disablePastDates = (date:any) => {
    return date < new Date();
  };

  const handleSubmitSearch = async () => {
    if (selectedStartDate && selectedEndDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 

  
      const startDateTimestamp = selectedStartDate.getTime(); 
      const endDateTimestamp = selectedEndDate.getTime(); 
  
      // Başlangıç ve bitiş tarihinin aynı gün olmamasını kontrol eden ifade
      if (startDateTimestamp === endDateTimestamp) {
        alert(t("Start date and end date cannot be the same day."));
        return;
      }
  
      if (differenceInDays(endDateTimestamp, startDateTimestamp) > 25) {
        alert(t("dateDifferenceExceedsLimit"));
        return; 
      }
      
      
      dispatch(setStartDate(startDateTimestamp)); 
      dispatch(setEndDate(endDateTimestamp)); 
      navigate("/cars");
    } else {
      alert(t("Please Select Start Date And EndDate")); 
    }
  };
  useEffect(() => {

  }, [selectedStartDate, selectedEndDate]);

  return (
    <div className="search">
      <div className="secContainer">
        <h3 className="title" data-aos="fade-up-right">
          {t("whichVehicleYouAreLookingFor")}{" "}
        </h3>

        <div className="searchDiv grid">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={t("startDate")}
              value={startDate}
              onChange={handleStartDateChange}
              disablePast
              data-aos="fade-right"
            />
            <DatePicker
              label={t("endDate")}
              value={endDate}
              onChange={handleEndDateChange}
              shouldDisableDate={disablePastDates}
              disablePast
              data-aos="fade-left"
            />
          </LocalizationProvider>
          <button className="btn primaryBtn flex" data-aos="fade-up" onClick={handleSubmitSearch}>
            <AiOutlineSearch className="icon" />
            <span>{t("search")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
