import { useDispatch } from "react-redux";
import { logged } from "../app/features/loggedSlice";
import { setToken } from "../app/features/tokenSlice";
import { SetUserProfile } from "../app/features/userData";

export function useAuth(): boolean {
    const dispatch = useDispatch();
    const bearer: string | null = localStorage.getItem("Bearer")
    const bearerInLocalStorage:boolean = bearer !== null;
    if (bearerInLocalStorage) {
      // Import userProfile
      const importProfile: { isLoading: boolean; error: boolean } = SetUserProfile();
      const { isLoading, error } = importProfile;
      if (!isLoading&&!error) {
        const bearerValue: string = bearer!=null? bearer : ""
        dispatch(logged(true));
        dispatch(setToken(bearerValue))
      }
     }
    return bearerInLocalStorage
  }