import { useDispatch } from "react-redux";
import { setToken } from "../app/features/tokenSlice";
import { useSetUserProfile } from "../app/features/userData";

export function useAuth(): boolean {
    const dispatch = useDispatch();
    const bearer: string | null = localStorage.getItem("Bearer")
    const { isLoading, isError }:{ isLoading: boolean; isError: boolean } = useSetUserProfile();
    if (bearer) {
      // Import userProfile
      if (!isLoading&&!isError) {
        dispatch(setToken(bearer))
      }
     }
    return Boolean(bearer)
  }