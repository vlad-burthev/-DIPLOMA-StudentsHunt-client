import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_AUTH_API,
    credentials: "include",
  }),
  endpoints: (build) => ({
    signUpCompany: build.mutation({
      query: (signUpData) => ({
        url: "company/create_company",
        body: signUpData,
        method: "POST",
      }),
    }),
    signInCompany: build.mutation({
      query: (signInData) => ({
        url: "sign-in",
        body: signInData,
        method: "POST",
      }),
    }),
    checkUserIsAuth: build.query({
      query: () => ({
        url: "check-auth",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignUpCompanyMutation,
  useSignInCompanyMutation,
  useCheckUserIsAuthQuery,
} = authApi;
