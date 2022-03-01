import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type LoggedState = boolean

const initialState: LoggedState = false
export const loggedSlice = createSlice({
    // le nom du slice
  name: "logged",
  // le state initial
  initialState,
  // reducers permet de définir les actions et le reducer
  reducers: {
      // l'action isLogged ('logged/isLogged')
    logged: (state: LoggedState, action: PayloadAction<boolean>) => {
      return action.payload
    }
  }
})

// on extrait les actions et le reducer
const { actions, reducer } = loggedSlice
// on export chaque action individuellement
export const { logged } = actions
// on export le reducer comme default export
export default reducer