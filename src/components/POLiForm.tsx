import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import DateControl from "../utils/DateControl";
import SpinNumber from "../utils/SpinNumber";

export default function POLiForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" className="mt-8 mb-4">
        Pay with POLi
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Start Date
          </Typography>
          <DateControl />
        </Grid>
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Number of Units
          </Typography>
          <SpinNumber min={1} max={3} />
        </Grid>
        <Grid item xs={12} className="flex flex-row items-center">
          <Typography className="min-w-[120px] text-[14px]">Deposit</Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Administration
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px] font-bold">
            Total
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              disabled={true}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
