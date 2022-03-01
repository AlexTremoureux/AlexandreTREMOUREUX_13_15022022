import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/store";
import { setUserProfileInformations } from "./userProfileSlice";
import { useProfileMutation, UserResponse } from "./userSlice";

/**
 * With a correct token, fetch the user profile end point of our API
 */
export const SetUserProfile = () => {
  const dispatch = useDispatch();
  const [profile] = useProfileMutation();
  const tokenValue = useAppSelector((state) => state.token);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    const auth = async () => {
      try {
        const data: UserResponse = await profile(tokenValue.token).unwrap();
        dispatch(setUserProfileInformations(data.body));
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    auth();
    
  }, [dispatch, profile, tokenValue.token]);

  return { isLoading, error };
};
