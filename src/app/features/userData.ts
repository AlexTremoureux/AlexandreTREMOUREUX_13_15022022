import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserResponse } from "../../utils/interfaceTypes";
import { setUserProfileInformations } from "./userProfileSlice";
import { useProfileMutation} from "../services/userSlice";

export const SetUserProfile = () => {
  const dispatch = useDispatch();
  const [profile] = useProfileMutation();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const auth = async () => {
      try {
        const data: UserResponse = await profile().unwrap();
        dispatch(setUserProfileInformations(data.body));
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    auth();
  }, [dispatch, profile]);

  return { isLoading, error };
};
