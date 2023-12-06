import { AppBar, Typography, Toolbar } from "@mui/material";
export default function WAppBar() {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
      className="bg-[#1976d2]"
    >
      <Toolbar>
        <Typography variant="h6" className="text-white">
          WHITELEIGH
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
