import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJobsDetails } from "../types";

/* Data Fetching from the API */

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology",
    headers: myHeaders,
  }),
  endpoints: (builder) => ({
    getAllJobs: builder.query<IJobsDetails, number>({
      query: (page) => ({
        url: "/adhoc/getSampleJdJSON",
        method: "POST",
        body: JSON.stringify({
          limit: 10,
          offset: `${page * 10}`,
        }),
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.jdList.push(...newItems.jdList);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetAllJobsQuery } = jobsApi;
