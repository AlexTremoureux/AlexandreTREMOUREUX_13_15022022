import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { userProfile } from "../../utils/interfaceTypes";

const slice = createSlice({
  name: "auth",
  initialState: {
    firstName: "",
    lastName: "",
  } as userProfile,
  reducers: {
    setUserProfileInformations: (
      state,
      {
        payload: { firstName, lastName },
      }: PayloadAction<{
        firstName: string;
        lastName: string;
      }>
    ) => {
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { setUserProfileInformations } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.token;
