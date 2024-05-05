import { IFilters, IJob } from "./types";

export const LocationOptions = [
  { key: "remote", value: "Remote" },
  { key: "in-office", value: "In-Office" },
];

export const ExperienceOptions = [
  { key: "0", value: "0" },
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "4", value: "4" },
  { key: "5", value: "5" },
  { key: "6", value: "6" },
  { key: "7", value: "7" },
  { key: "8", value: "8" },
  { key: "9", value: "9" },
  { key: "10", value: "10" },
];

export const MinSalaryOptions = [
  { key: "0", value: "0 USD" },
  { key: "10", value: "10 USD" },
  { key: "20", value: "20 USD" },
  { key: "30", value: "30 USD" },
  { key: "40", value: "40 USD" },
  { key: "50", value: "50 USD" },
  { key: "60", value: "60 USD" },
  { key: "70", value: "70 USD" },
  { key: "80", value: "80 USD" },
  { key: "90", value: "90 USD" },
  { key: "1000", value: "100 USD" },
];

export const RolesOptions = [
  { key: "frontend", value: "Frontend" },
  { key: "backend", value: "Backend" },
  { key: "android", value: "Android" },
  { key: "ios", value: "IOS" },
  { key: "tech lead", value: "Tech Lead" },
];

 /**
   *
   * @param data : The data list of all the Jobs in the API
   * @param filters: The selected filters for jobs search
   *
   * This function returns the filtered data after preprocessing the entire data,
   * against the selected filters.
   */

export const FilterData = (data: IJob[], filters: IFilters) => {
  let filteredData = [...data];

  console.log({ data, filters });

  if (filters.jobRolesFilter.length) {
    filteredData = filteredData.filter((job) =>
      filters.jobRolesFilter.includes(job.jobRole)
    );
  }

  if (filters.experienceFilter) {
    filteredData = filteredData.filter((job) => {
      if (job.minExp && job.maxExp) {
        return (
          job.minExp <= Number(filters.experienceFilter) &&
          job.maxExp >= Number(filters.experienceFilter)
        );
      } else if (!job.minExp) {
        return job.maxExp >= Number(filters.experienceFilter);
      } else if (!job.maxExp) {
        return job.minExp <= Number(filters.experienceFilter);
      }

      return false;
    });
  }

  if (filters.locationFilter.length) {
    // since job location in the api response is either a city or remote,
    // we will have to first group together all the city locations into 1 inOfficeJobs array
    const inOfficeJobs = filteredData.filter(
      (job) => !["remote", "hybrid"].includes(job.location)
    );

    const remoteJobs = filteredData.filter((job) =>
      filters.locationFilter.includes(job.location)
    );

    if (filters.locationFilter.includes("in-office")) {
      filteredData = [...remoteJobs, ...inOfficeJobs];
    } else {
      filteredData = [...remoteJobs];
    }
  }

  if (filters.minBaseFilter) {
    filteredData = filteredData.filter(
      (job) => job.minJdSalary >= Number(filters.minBaseFilter)
    );
  }

  if (filters.companyNameFilter) {
    filteredData = filteredData.filter((job) => {
      return job.companyName
        .toLowerCase()
        .includes(filters.companyNameFilter.toLowerCase());
    });
  }

  return filteredData;
};