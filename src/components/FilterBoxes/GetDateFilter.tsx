import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

type Props = {};

const GetDateFilter = (props: Props) => {
  const [selectedStartDate, setSelectedStartDate] =
    React.useState<Dayjs | null>(dayjs());
  const [selectedEndDate, setSelectedEndDate] = React.useState<Dayjs | null>(
    dayjs().add(1, "day")
  );

  const handleStartDateChange = (newStartDate: Dayjs | null) => {
    if (newStartDate && newStartDate.isBefore(dayjs())) {
      alert("The start date cannot be smaller than the current date!");
    }
    setSelectedStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: Dayjs | null) => {
    if (newEndDate && newEndDate.isBefore(dayjs().add(1, "day"))) {
      alert("The end date cannot be closer to the start date!");
    }
    setSelectedEndDate(newEndDate);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
        <DatePicker
          label="End Date"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
      </LocalizationProvider>
    </>
  );
};

export default GetDateFilter;
