import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";

const PersonForm = ({ label }: { label: string }) => {
  const [phone, setPhone] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const handlePhoneChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const handleMobileChange = (newMobile: string) => {
    setMobile(newMobile);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" className="mt-8 mb-4">
        {label}
      </Typography>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12} sm={6} className="">
          <Typography className="text-[14px]">First Name</Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            fullWidth
            autoComplete="given-name"
            size="small"
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <Typography className="text-[14px]">Last Name</Typography>
          <TextField
            required
            id="lastName"
            name="lastName"
            fullWidth
            autoComplete="family-name"
            size="small"
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <Typography className="text-[14px]">Address</Typography>
          <TextField
            required
            id="address"
            name="address"
            fullWidth
            autoComplete="shipping address-line1"
            size="small"
          />
        </Grid>

        {/* Phone and Mobile */}
        <Grid item xs={12} sm={6}>
          <Typography className="text-[14px]">Phone</Typography>
          <MuiTelInput
            value={phone}
            defaultCountry="NZ"
            onChange={handlePhoneChange}
            className="w-full h-10"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="text-[14px]">Mobile</Typography>
          <MuiTelInput
            value={mobile}
            defaultCountry="NZ"
            onChange={handleMobileChange}
            className="w-full"
            size="small"
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <Typography className="text-[14px]">Email</Typography>
          <TextField
            required
            id="email"
            name="email"
            type="email"
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PersonForm;
