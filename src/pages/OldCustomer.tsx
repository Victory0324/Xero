import * as React from "react";
import { Typography, Paper, Container } from "@mui/material";
import PersonForm from "../components/PersonForm";
import Terms from "../components/Terms";
import POLiForm from "../components/POLiForm";
import ButtonGroup from "../components/ButtonGroup";
import Copyright from "../layouts/CopyRight";
import HomeLogo from "../assets/images/home_logo.png";
import UnitsTable from "../components/UnitsTable";

const OldCustomer = () => {
  return (
    <React.Fragment>
      {/* Container */}
      <div className="flex items-center bg-gray-400">
        <Container maxWidth="sm" sx={{ mb: 4 }}>
          {/* New Customer page */}
          <Paper
            elevation={3}
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            className="flex flex-col"
          >
            {/* <Typography component="h1" variant="h4" align="center">
              New Customer
            </Typography> */}
            <img src={HomeLogo} className="w-[40%] self-center" />
            <React.Fragment>

              <UnitsTable />
              {/* POLi Form */}
              <POLiForm />

            </React.Fragment>
          </Paper>

          {/* CopyRight */}
          <Copyright />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default OldCustomer;
