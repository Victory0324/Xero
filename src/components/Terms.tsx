import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MinHeightTextarea from "../utils/Textarea";

export default function Terms() {
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
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="I agree to the terms and conditions above"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
