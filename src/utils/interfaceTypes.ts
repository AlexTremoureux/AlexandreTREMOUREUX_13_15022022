// user status
export interface userLoginStatus {
  isLogged: boolean;
  token: string;
}
export const initStatus: userLoginStatus = {
  isLogged: false,
  token: "",
};
// user profile
export interface userProfileInformation {
  email: string;
  password: String;
  firstName: string;
  lastName: string;
  id: string;
}

