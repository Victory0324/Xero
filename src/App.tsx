import * as React from "react";
import { Container } from "@mui/material";
import WAppBar from "./layouts/AppBar";
import Copyright from "./layouts/CopyRight";
import NewCustomer from "./pages/NewCustomer";

function App() {
  return (
    <React.Fragment>
      {/* AppBar */}
      <WAppBar />

      {/* Container */}
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        {/* New Customer page */}
        <NewCustomer />

        {/* CopyRight */}
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default App;
