import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authModuleApi = createApi({
  reducerPath: "authModuleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_AUTH_API,
    credentials: "include",
  }),
  endpoints: (build) => ({
    checkUserIsAuth: build.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useCheckUserIsAuthQuery } = authModuleApi;
