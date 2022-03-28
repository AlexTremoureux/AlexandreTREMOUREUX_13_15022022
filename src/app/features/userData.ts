import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserResponse } from "../../utils/interfaceTypes";
import { setUserProfileInformations } from "./userProfileSlice";
import { useProfileMutation} from "../services/userSlice";
import { logged } from "./loggedSlice";

export const useSetUserProfile = () => {
  const dispatch = useDispatch();
  const [profile, {isLoading, isError}] = useProfileMutation();
  

  useEffect(() => {
    const auth = async () => {
        const data: UserResponse = await profile().unwrap();
        dispatch(setUserProfileInformations(data.body));
        dispatch(logged(true))
    };
    auth();
  }, [dispatch, profile]);

  return { isLoading, isError };
};
