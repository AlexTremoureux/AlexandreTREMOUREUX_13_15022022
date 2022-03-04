import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = ""
export const tokenSlice = createSlice({
  // le nom du slice
  name: "token",
  // le state initial
  initialState,
  // reducers permet de définir les actions et le reducer
  reducers: {
    // l'action tokenCreate ('token/tokenCreate')
    tokenCreate: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
    // l'action tokenDelete ('token/tokenDelete')
    tokenDelete: (state: string) => {
      state = "";
    },
  },
});

export const { tokenCreate, tokenDelete } = tokenSlice.actions;
export default tokenSlice.reducer;
