import * as React from "react";
import Box from "@mui/material/Box";
import { useGetAllJobsQuery } from "../../Api/jobsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import { IJob } from "../../types";
import JobCard from "../JobCard";
import FilterComponent from "../FilterComponent";
import { useAppContext } from "../../context";
import { FilterData } from "../../utils";
import Grid from "@mui/material/Grid";
import ErrorPage from "../ErrorPage";

/* Search Jobs Tab - Display the filters and the job cards */

const SearchJobs: React.FC = () => {
  const [expanded, setExpanded] = useState<String[]>([]);
  const [processedData, setProcessedData] = useState<IJob[]>([]);
  const [page, setPage] = useState(0);

  const {
    jobRolesFilter,
    experienceFilter,
    locationFilter,
    minBaseFilter,
    companyNameFilter,
  } = useAppContext();

  const { data, isLoading, isFetching, isError } = useGetAllJobsQuery(page);

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

  /* Handles functionality for infinite scrolling by adding a scroll event listener to the window and when it reaches the bottom of the page then it increment the page by 1  */

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 && !isError) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching, page, JSON.stringify(data)]);

  /* Handles the functionality for filtering the data based on the chosen filters and sets the data after processing the filters  */

  useEffect(() => {
    const filterObject = {
      jobRolesFilter: jobRolesFilter.map((jobData) => jobData.key),
      experienceFilter: experienceFilter?.key ?? "",
      locationFilter: locationFilter.map((jobData) => jobData.key),
      minBaseFilter: minBaseFilter?.key ?? "",
      companyNameFilter: companyNameFilter,
    };

    if (data?.jdList) {
      setProcessedData(FilterData(data.jdList, filterObject));
    }
  }, [
    JSON.stringify(jobRolesFilter),
    JSON.stringify(experienceFilter),
    JSON.stringify(locationFilter),
    JSON.stringify(minBaseFilter),
    JSON.stringify(companyNameFilter),
    JSON.stringify(data?.jdList),
  ]);

  if (isLoading) {
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>;
  }

  return (
    <Box>
      {isError ? (
        <ErrorPage />
      ) : (
        <Box>
          <FilterComponent />
          <Grid container spacing={2}>
            {processedData.map((job: IJob, index: Number) => (
              <Grid item key={`${job.jdUid}_${index}`} xs={12} sm={6} md={4}>
                <JobCard
                  data={job}
                  expanded={expanded}
                  handleExpandClick={handleExpandClick}
                />
              </Grid>
            ))}
          </Grid>
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
      )}
    </Box>
  );
};

export default SearchJobs;
