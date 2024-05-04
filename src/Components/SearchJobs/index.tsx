import * as React from "react";
import Box from "@mui/material/Box";
import { useGetAllJobsQuery } from "../../Api/jobsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import { IJob } from "../../types";
import JobCard from "../JobCard";

/* Search Jobs Tab - Display the filters and the job cards */

const SearchJobs: React.FC = () => {
  const [expanded, setExpanded] = useState<String[]>([]);
  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching } = useGetAllJobsQuery(page);

  /**
   *
   * @param jobId : JobId of the selected Job.
   *
   * This function checks whether the recieved JobId belongs to the expanded array,
   * if so then we remove it from the array, if not then we add it in the array.
   */
  function handleExpandClick(jobId: string) {
    if (expanded.includes(jobId)) {
      setExpanded((prevExpanded) => prevExpanded.filter((id) => id !== jobId));
    } else {
      setExpanded((prevExpanded) => [...prevExpanded, jobId]);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

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
      <Box
        sx={{
          height: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isFetching && <CircularProgress />}
      </Box>
    </Box>
  );
};

export default SearchJobs;
