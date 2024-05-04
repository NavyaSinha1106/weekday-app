import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";
import AppliedJobs from "../AppliedJobs";
import SearchJobs from "../SearchJobs";

const JobTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState("1");

  function handleTabChange(event: React.SyntheticEvent, newValue: string) {
    setTabValue(newValue);
  }

  return (
    <Box
      sx={{
        width: "100%",
        my: 3,
      }}
    >
      <TabContext value={tabValue}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Applied Jobs" value="2" />
            <Tab label="Search Jobs" value="1" />
          </TabList>
        </Box>
        <TabPanel value="2">
          <AppliedJobs />
        </TabPanel>
        <TabPanel value="1">
          <SearchJobs />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default JobTabs;
