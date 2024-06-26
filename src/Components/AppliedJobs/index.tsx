import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AppliedJobsLogo from "../../assets/applied_jobs.png";
import Typography from "@mui/material/Typography";
import appText from "../../PageText";

const AppliedJobs: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        color="#015368!important"
        padding="0.5em"
        fontSize="20px"
        textAlign="center"
      >
        {appText.appliedJobs.text}
      </Typography>
      <ImageList sx={{ display: "flex", justifyContent: "center" }}>
        <ImageListItem>
          <img src={AppliedJobsLogo} />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default AppliedJobs;
