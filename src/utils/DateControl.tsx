import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateControl = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="w-full borderless"
        slotProps={{
          openPickerIcon: { fontSize: "small" },
          textField: {
            size: "small"
          },
        }}
      />
    </LocalizationProvider>
  );
};
export default DateControl;
