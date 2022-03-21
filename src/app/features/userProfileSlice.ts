import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
