import { Box, Button } from "@mui/material";
const ButtonGroup = () => {
  return (
    <Box className="flex flex-row my-2 gap-2 float-right">
      <Button
        variant="contained"
        color="warning"
        className="flex-1"
        size="large"
      >
        Pay
      </Button>
      <Button
        variant="outlined"
        color="warning"
        className="flex-1"
        size="large"
      >
        Cancel
      </Button>
    </Box>
  );
};
export default ButtonGroup;
