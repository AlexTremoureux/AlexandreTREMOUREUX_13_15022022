import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  userProfile,
  UserResponse,
} from "../../utils/interfaceTypes";
//import { RootState } from "../store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      //const token: string = (getState() as RootState).token;
      const tokenLocalStorage = localStorage.getItem("Bearer");
      //const tokenSessionStorage = sessionStorage.getItem("Bearer");
      //const rememberMeIsActive = tokenLocalStorage!==null
      const token = tokenLocalStorage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: credentials,
      }),
    }),
    profile: builder.mutation<UserResponse, void>({
      query: () => ({
        url: "profile",
        method: "POST",
      }),
    }),
    updateProfile: builder.mutation<UserResponse, userProfile>({
      query: (credentials: userProfile) => ({
        url: "profile",
        method: "PUT",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useProfileMutation,
  useUpdateProfileMutation,
} = apiSlice;
