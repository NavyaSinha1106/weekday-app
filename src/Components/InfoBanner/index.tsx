import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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
        We, at Weekday, are creating a go-to hub for uncovering the real issues
        candidates should be aware of before joining a company. &nbsp;
        <Link
          href="#"
          sx={{
            fontWeight: 700,
            color: "#000",
          }}
        >
          Access 150+ company reviews here
        </Link>
      </Typography>
    </Box>
  );
};

export default InfoBanner;
