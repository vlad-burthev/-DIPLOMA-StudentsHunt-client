import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_COMPANY_API,
    credentials: "include",
  }),
  endpoints: (build) => ({
    signUpCompany: build.mutation({
      query: (signUpData) => ({
        url: import.meta.env.VITE_APP_COMPANY_SIGN_UP,
        body: signUpData,
        method: "POST",
      }),
    }),
    signInCompany: build.mutation({
      query: (signInData) => ({
        url: import.meta.env.VITE_APP_COMPANY_SIGN_UP,
        body: signInData,
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpCompanyMutation, useSignInCompanyMutation } = authApi;
