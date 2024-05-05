import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import appText from "../../PageText";

const InfoBanner: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "76%",
        backgroundColor: "rgb(217, 254, 211)",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ py: "16px", px: "20px", fontSize: "14px", fontWeight: 400 }}
      >
        {appText.infoBanner.content} &nbsp;
        <Link
          href="#"
          sx={{
            fontWeight: 700,
            color: "#000",
          }}
        >
          {appText.infoBanner.link}
        </Link>
      </Typography>
    </Box>
  );
};

export default InfoBanner;
