import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

export default function PersonForm({ label }: { label: string }) {
  const [phone, setPhone] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const handlePhoneChange = (newPhone: string) => {
    matchIsValidTel(newPhone);
    setPhone(newPhone);
  };

  const handleMobileChange = (newMobile: string) => {
    matchIsValidTel(newMobile);
    setMobile(newMobile);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" className="mt-8 mb-4">
        {label}
      </Typography>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12} sm={6} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            First Name
          </Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Last Name
          </Typography>
          <TextField
            required
            id="lastName"
            name="lastName"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Address
          </Typography>
          <TextField
            required
            id="address"
            name="address"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>

        {/* Phone and Mobile */}
        <Grid item xs={12} sm={6} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Phone
          </Typography>
          <MuiTelInput
            value={phone}
            defaultCountry="NZ"
            onChange={handlePhoneChange}
            className="flex-1"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Mobile
          </Typography>
          <MuiTelInput
            value={mobile}
            defaultCountry="NZ"
            onChange={handleMobileChange}
            className="flex-1"
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} className="flex flex-row">
          <Typography className="mt-4 mb-2 min-w-[120px] text-[14px]">
            Email
          </Typography>
          <TextField required id="email" name="email" type="email" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
