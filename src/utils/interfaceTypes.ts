// user profile
export interface userProfile {
  firstName: string;
  lastName: string;
}
export type Headers = string;

export interface UserResponse {
  status: userProfile;
  message: string;
  body: any;
}

export interface LoginRequest {
  email: string;
  password: string;
}
