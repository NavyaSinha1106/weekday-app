import * as React from "react";
import Box from "@mui/material/Box";
import { useGetAllJobsQuery } from "../../Api/jobsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { IJob } from "../../types";
import JobCard from "../JobCard";

/* Search Jobs Tab - Display the filters and the job cards */

const SearchJobs: React.FC = () => {
  const [expanded, setExpanded] = useState<String[]>([]);

  const { data, isLoading } = useGetAllJobsQuery();

  /**
   *
   * @param jobId : JobId of the selected Job.
   *
   * This function checks whether the recieved JobId belongs to the expanded array,
   * if so then we remove it from the array, if not then we add it in the array.
   */

  function handleExpandClick(jobId: string) {
    if (expanded.includes(jobId)) {
      setExpanded((prevExpanded) => prevExpanded.filter((id) => id !== jobId));
    } else {
      setExpanded((prevExpanded) => [...prevExpanded, jobId]);
    }
  }

  if (isLoading) {
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data?.jdList.map((job: IJob, index: Number) => (
        <JobCard
          key={`${job.jdUid}_${index}`}
          data={job}
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
      ))}
    </Box>
  );
};

export default SearchJobs;
