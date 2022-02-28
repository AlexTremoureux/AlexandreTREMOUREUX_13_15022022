import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tokenValue {
  token: string;
}

const initialState: tokenValue = {
  token: "",
};
export const tokenSlice = createSlice({
  // le nom du slice
  name: "token",
  // le state initial
  initialState,
  // reducers permet de définir les actions et le reducer
  reducers: {
    // l'action tokenCreate ('token/tokenCreate')
    tokenCreate: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    // l'action tokenDelete ('token/tokenDelete')
    tokenDelete: (state) => {
      state.token = "";
    },
  },
});

export const { tokenCreate, tokenDelete } = tokenSlice.actions;
export default tokenSlice.reducer;
