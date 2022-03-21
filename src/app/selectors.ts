import { RootState } from "./store";

export const selectLogged = (state: RootState) => state.logged;
export const selectToken = (state: RootState) => state.token;
export const selectCurrentUser = (state: RootState) => state.userProfile;