import { Box, Button } from "@mui/material";
export default function ButtonGroup() {
  return (
    <Box className="flex flex-row mt-8 mb-4 gap-2">
      <Button variant="outlined" color="inherit" className="flex-1">
        Cancel
      </Button>

      <Button variant="contained" className="flex-1">
        Pay
      </Button>
    </Box>
  );
}
