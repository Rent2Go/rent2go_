import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
import "./search.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

type Props = {};

const Search = (props: Props) => {
  const { t } = useTranslation();

  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(
    dayjs()
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(
    dayjs().add(1, "day")
  );

  const handleStartDateChange = (newStartDate: Dayjs | null) => {
    if (newStartDate && newStartDate.isBefore(dayjs())) {
      alert(t("theStartDateCannotBe"));
    }
    setSelectedStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: Dayjs | null) => {
    if (
      newEndDate &&
      selectedStartDate &&
      newEndDate.isBefore(selectedStartDate)
    ) {
      alert(t("theEndDateCannotBe"));
    } else {
      setSelectedEndDate(newEndDate);
    }
  };

  useEffect(() => {}, [selectedStartDate, selectedEndDate]);

  return (
    <div className="search">
      <div className="secContainer">
        <h3 className="title" data-aos="fade-up-right">
          {t("whichVehicleYouAreLookingFor")}{" "}
        </h3>

        <div className="searchDiv grid">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={t("startDate")}
              value={selectedStartDate}
              onChange={handleStartDateChange}
              data-aos="fade-right"
            />
            <DatePicker
              label={t("endDate")}
              value={selectedEndDate}
              onChange={handleEndDateChange}
              data-aos="fade-left"
            />
          </LocalizationProvider>
          <button className="btn primaryBtn flex" data-aos="fade-up">
            <AiOutlineSearch className="icon" />
            <span>{t("search")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
