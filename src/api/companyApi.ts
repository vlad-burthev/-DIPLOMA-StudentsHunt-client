import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { recruiterListItem } from "../interfaces/company";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_COMPANY_API,
    credentials: "include",
  }),
  tagTypes: ["all_recruiters"],
  endpoints: (build) => ({
    getAllCompanyRecruiters: build.query<recruiterListItem[], void>({
      query: () => ({
        url: import.meta.env.VITE_APP_GET_ALL_COMPANY_RECRUITERS,
        method: "GET",
      }),
      providesTags: [{ type: "all_recruiters", id: "LIST" }],
    }),
    deleteRecruiter: build.mutation({
      query: (id: string) => ({
        url: import.meta.env.VITE_APP_DELETE_COMPANY_RECRUITER,
        method: "POST",
        body: {
          id,
        },
      }),
    }),
  }),
});

export const { useGetAllCompanyRecruitersQuery, useDeleteRecruiterMutation } =
  companyApi;
