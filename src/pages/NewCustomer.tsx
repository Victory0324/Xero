import * as React from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import PersonForm from "../components/PersonForm";
import Terms from "../components/Terms";
import POLiForm from "../components/POLiForm";
import ButtonGroup from "../components/ButtonGroup";

export default function NewCustomer() {
  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography component="h1" variant="h4" align="center">
        New Customer
      </Typography>
      <React.Fragment>
        {/* Storer Details */}
        <PersonForm label="Storer Details" />

        {/* Alternative contact person */}
        <PersonForm label="Alternative Contact Person" />

        {/* Terms */}
        <Terms />

        {/* POLi Form */}
        <POLiForm />

        {/* Buttons */}
        <ButtonGroup />
      </React.Fragment>
    </Paper>
  );
}
