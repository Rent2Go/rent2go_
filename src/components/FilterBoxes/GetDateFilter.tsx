import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarData } from "../../store/slices/carSlice";
import { useTranslation } from "react-i18next";

type Props = {};

const GetDateFilter = (props: Props) => {
  const {t} = useTranslation();

  const { cars } = useSelector((state: any) => state.car);

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



  useEffect(() => {
  }, [selectedStartDate, selectedEndDate]);

  const columns = [
  
    { field: 'name', headerName: 'Car Name', width: 150 },
   
    // ... diğer sütunlar
  ];

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <DatePicker
            label={t("startDate")}
            value={selectedStartDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <DatePicker
            label={t("endDate")}
            value={selectedEndDate}
            onChange={handleEndDateChange}
          />
        </div>
      </LocalizationProvider>
    
    </>
  );
};

export default GetDateFilter;
