import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/* Main Component - Displayes the main content of the app */

const MainComponent: React.FC = () => {
  return (
    <Box sx={{ m: 20, textAlign: "center" }}>
      <Typography variant="h4">Main Component goes here</Typography>
    </Box>
  );
};

export default MainComponent;
