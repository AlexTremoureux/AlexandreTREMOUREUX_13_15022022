import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    createdAt:string;
    updatedAt: string;
    id: string;
}
const jwtApi = "434365436463434vw4v46dvdwvv4dv4d4v3xdf4b"
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3001/api/v1/user/',
        prepareHeaders(headers) {
            headers.set('Bearer ', jwtApi);
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchData: builder.query<userData[], string|void>({
                query(limit) {
                    return `/userData?limit=${limit}`
                },

            })
        }
    }


})
export const { useFetchDataQuery } = apiSlice;
