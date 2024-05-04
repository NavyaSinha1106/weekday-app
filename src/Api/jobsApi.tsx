import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJobsDetails } from "../types";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
  limit: 10,
  offset: 0,
});

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology",
    headers: myHeaders,
  }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<IJobsDetails, void>({
      query: () => ({
        url: "/adhoc/getSampleJdJSON",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetAllJobsQuery } = jobsApi;
