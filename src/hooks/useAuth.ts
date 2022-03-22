import { useDispatch } from "react-redux";
import { logged } from "../app/features/loggedSlice";

export function useAuth(): boolean {
    const dispatch = useDispatch();
    const isAuthenticated:boolean = localStorage.getItem("Bearer") !== null;
    if (isAuthenticated) {
      dispatch(logged(true));
    }
    return isAuthenticated
  }