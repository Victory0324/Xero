import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MinHeightTextarea from "../utils/Textarea";
import { Button } from "@mui/material";

const Terms = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" className="mt-8 mb-2">
        Terms and Conditions
      </Typography>
      <Grid container spacing={2}>
        {/* Terms and Conditions */}
        <Grid item xs={12}>
          <MinHeightTextarea />
        </Grid>

        {/* Checkbox */}
        <Grid item xs={9}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="I agree to the terms and conditions above"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="warning"
            className="flex-1 float-right"
            size="small"
          >
            Print
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Terms;
