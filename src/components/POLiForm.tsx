import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, OutlinedInput, InputAdornment, Link } from "@mui/material";
import DateControl from "../utils/DateControl";
import SpinNumber from "../utils/SpinNumber";
import POLiImage from "../assets/images/poli.png"
import ButtonGroup from "./ButtonGroup";

const POLiForm = () => {
  const handleDeposit = (value: string) => {
    console.log(value);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2} className="mt-4">
        <Grid item xs={6}>
          <div className="flex flex-col h-full items-center justify-center border border-solid border-slate-300 rounded-lg mr-4 bg-slate-300">
            <img src={POLiImage} className="w-[60%] mb-4" />
            <Link href="https://www.polipay.co.nz/poli-for-consumers" target="_blank">Learn more about POLi</Link>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className="mb-4 text-center">
            Pay with POLi
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className="text-[14px]">Number of Units</Typography>
              <SpinNumber min={1} max={3} />
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-[14px]">Start Date</Typography>
              <DateControl />
            </Grid>
            <Grid item xs={6} className="items-center">
              <Typography className="min-w-[120px] text-[14px]">Deposit</Typography>
              <FormControl fullWidth>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  size="small"
                  defaultValue={0}
                  onChange={(e) => handleDeposit(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Typography className="text-[14px]">Administration</Typography>
              <FormControl fullWidth>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  size="small"
                  defaultValue={0}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-[14px] font-bold">Total</Typography>
              <FormControl fullWidth>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type="number"
                  disabled={true}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  size="small"
                  defaultValue={0}
                />
              </FormControl>
            </Grid>
            {/* Buttons */}
            <Grid item xs={12}>
              <ButtonGroup />
            </Grid>

          </Grid>
        </Grid>
      </Grid>

    </React.Fragment>
  );
};
export default POLiForm;
