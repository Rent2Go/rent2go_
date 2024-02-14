import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./search.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { setEndDate, setStartDate } from "../../store/slices/dateSlice";
import { useNavigate } from "react-router-dom";
import { differenceInDays } from "date-fns";

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
      const startDateTimestamp = selectedStartDate.getTime(); // Başlangıç tarihinin zaman damgası
      const endDateTimestamp = selectedEndDate.getTime(); // Bitiş tarihinin zaman damgası
      dispatch(setStartDate(startDateTimestamp)); // Redux'a zaman damgasını gönder
      dispatch(setEndDate(endDateTimestamp)); // Redux'a zaman damgasını gönder
      sessionStorage.setItem('selectedStartDate', startDate);
      sessionStorage.setItem('selectedEndDate',endDate);
      console.log(  differenceInDays(endDateTimestamp, startDateTimestamp)* 950 ); // Zaman damgalarını konsola yazdır
      navigate("/cars");
    } else {
      alert(t("pleaseSelectStartDateAndEndDate")); // Başlangıç ve bitiş tarihlerini seçmemişse uyarı ver
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
