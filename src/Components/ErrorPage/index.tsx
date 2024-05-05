import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ErrorLogo from "../../assets/error_logo.png";
import Typography from "@mui/material/Typography";
import appText from "../../PageText";

const ErrorPage: React.FC = () => {
  return (
    <Box>
      <ImageList sx={{ display: "flex", justifyContent: "center" }}>
        <ImageListItem>
          <img src={ErrorLogo} style={{ height: "100px" }} />
        </ImageListItem>
      </ImageList>
      <Typography
        variant="body1"
        color="#015368!important"
        padding="0.5em"
        fontSize="20px"
        textAlign="center"
      >
        {appText.errorMsg.message}
      </Typography>
    </Box>
  );
};

export default ErrorPage;
