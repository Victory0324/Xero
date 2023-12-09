import * as React from "react";
import { FormControl, OutlinedInput } from "@mui/material";

const SpinNumber = ({ min, max }: { min: number; max: number }) => {
  const [number, setNumber] = React.useState<number>(0);
  const handleChange = (value: string) => {
    console.log(value);
    const parsedValue = parseInt(value, 10);
    if (parsedValue <= min) {
      setNumber(min);
    } else if (parsedValue >= max) {
      setNumber(max);
    } else {
      setNumber(parsedValue);
    }
  };
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="outlined-adornment-amount"
        type="number"
        size="small"
        value={number}
        onChange={(e) => handleChange(e.target.value)}
      />
    </FormControl>
  );
};
export default SpinNumber;
