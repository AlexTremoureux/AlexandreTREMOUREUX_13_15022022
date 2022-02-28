import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface log {
    logged: boolean
} 

const initialState: log = {
  logged: false
}
export const loggedSlice = createSlice({
    // le nom du slice
  name: "logged",
  // le state initial
  initialState,
  // reducers permet de définir les actions et le reducer
  reducers: {
      // l'action isLogged ('logged/isLogged')
    isLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload
    }
  }
})

// on extrait les actions et le reducer
const { actions, reducer } = loggedSlice
// on export chaque action individuellement
export const { isLogged } = actions
// on export le reducer comme default export
export default reducer