import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import { AppContext } from "../../context";
import InfoBanner from "../InfoBanner";
import JobTabs from "../JobTabs";
import styled from "styled-components";

/* Main Component - Displayes the main content of the app */

const MainComponent: React.FC = () => {
  const { isSidenavOpen, drawerWidth } = useContext(AppContext);

  const MUIBox = styled(Box)(() => ({
    marginLeft: "100px",
    width: `calc(100% - 100px)`,
    ...(isSidenavOpen && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  }));

  return (
    <MUIBox
      sx={{
        p: "24px",
        mt: "80px",
      }}
    >
      <InfoBanner />
      <JobTabs />
    </MUIBox>
  );
};

export default MainComponent;
