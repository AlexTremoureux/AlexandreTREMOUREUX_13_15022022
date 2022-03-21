import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: boolean = false
export const loggedSlice = createSlice({
    // le nom du slice
  name: "logged",
  // le state initial
  initialState,
  // reducers permet de définir les actions et le reducer
  reducers: {
      // l'action logged ('logged/logged')
    logged: (state: boolean, action: PayloadAction<boolean>) => {
      return action.payload
    }
  }
})

// on extrait les actions et le reducer
//const { actions, reducer } = loggedSlice
// on export logged
export const { logged } = loggedSlice.actions
// on export le reducer comme default export
export default loggedSlice.reducer
