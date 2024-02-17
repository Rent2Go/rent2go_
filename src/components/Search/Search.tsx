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
  const navigate = useNavigate()
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state:any) => state.rentalDate);

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date(startDate));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date(endDate));

  const handleStartDateChange = (newStartDate: Date | null) => {
    if (newStartDate && newStartDate < new Date()) {
      alert(t("theStartDateCannotBe"));
    }
    setSelectedStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: Date | null) => {
    if (newEndDate && selectedStartDate && newEndDate < selectedStartDate) {
      alert(t("theEndDateCannotBe"));
    } else {
      setSelectedEndDate(newEndDate);
      const date = new Date(1707931742109);
console.log(date);
    }
  };

  const handleSubmitSearch = async () => {
    if (selectedStartDate && selectedEndDate) {
      const startDateTimestamp = selectedStartDate.getTime(); 
      const endDateTimestamp = selectedEndDate.getTime(); 
      dispatch(setStartDate(startDateTimestamp)); 
      dispatch(setEndDate(endDateTimestamp)); 
    
      console.log(  differenceInDays(endDateTimestamp, startDateTimestamp) ); 
      navigate("/cars");
    } else {
      alert(t("pleaseSelectStartDateAndEndDate")); 
    }
  }
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
              data-aos="fade-right"
            />
            <DatePicker
              label={t("endDate")}
              value={endDate}
              onChange={handleEndDateChange}
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
