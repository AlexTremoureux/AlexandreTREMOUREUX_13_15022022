import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
// omit imports and state

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, accept: "application/json" },
    }).then(async (response) => {
      const data = await response.json();
      return data;
    });
  }
);
const userDataSlice = createSlice({
  name: "userData",
  initialState: "",
  reducers: {
    // omit reducer cases
  },
});

interface userData {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}*/
export type Headers = string
export interface User {
    first_name: string
    last_name: string
  }
export interface UserResponse {
    status: User
    message: string
    body: any
  }
  
  export interface LoginRequest {
    email: string
    password: string
  }

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user/",
    /*prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = (getState() as RootState).token
        if (token) {
          headers.set( "Authorization: Bearer "+ token)
        }
        return headers
      },*/
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
    profile: builder.mutation<UserResponse, Headers>({
        query: (token) => ({
          url: "profile",
          method: "POST",
          headers: { Authorization: "Bearer " + token, accept: "application/json" }
        }),
      }),
  }),
  
});
export const { useLoginMutation, useProfileMutation } = apiSlice;


/**
 * export interface userData {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface User {
  first_name: string;
  last_name: string;
}
export interface UserResponse {
  status: User;
  message: string;
  body: any;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export type headers = string;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token;
      if (token) {
        headers.set("Authorization:", `Bearer ${token}`);
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
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
    profile: builder.mutation<UserResponse, Headers>({
      query: () => ({
        url: "profile",
        method: "POST",
        prepareHeaders: (
          headers: { set: (arg0: string, arg1: string) => void },
          { getState }: any
        ) => {
          const token = (getState() as RootState).token;
          if (token) {
            headers.set("Authorization:", `Bearer ${token}`);
          }
          return headers;
        },
      }),
    }),
  }),
});
export const { useLoginMutation, useProfileMutation } = apiSlice;

 */
