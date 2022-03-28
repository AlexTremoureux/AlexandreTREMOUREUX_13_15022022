import React, { useRef, useState } from "react";
import { setUserProfileInformations } from "../app/features/userProfileSlice";
import { selectCurrentUser } from "../app/selectors";
import { useUpdateProfileMutation } from "../app/services/userSlice";
import CardAccount from "../components/CardAccount";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { accounts } from "../utils/constantes";
import { userProfile, UserResponse } from "../utils/interfaceTypes";

const User = () => {
  const dispatch = useAppDispatch();

  // Get userProfile in store Redux
  const userProfile: userProfile = useAppSelector(selectCurrentUser);
  const { firstName, lastName } = userProfile;

  // State local for Edit Name Button
  const [changingProfile, setChangingProfile] = useState<Boolean>(false);
  const [nameState, setNameState] = useState<userProfile>({
    firstName: firstName,
    lastName: lastName,
  });

  // Endpoint RTK Query for updating Profile
  const [updateProfile] = useUpdateProfileMutation();

  // Update nameState onChange Input
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setNameState((prev) => ({ ...prev, [name]: value }));

  /*const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const updateNameState = () => {
    if (firstNameRef.current !== null && lastNameRef.current !== null) {
      const firstNameValue: string = firstNameRef.current.value;
      const lastNameValue: string = lastNameRef.current.value;
      setNameState({ firstName: firstNameValue, lastName: lastNameValue });
    }
  };
  // Updating Profile Validation
  const updateProfileName = () => {
    updateNameState()
    const validationUpdateProfile: () => Promise<void> = async () => {
      try {
        const data: UserResponse = await updateProfile(nameState).unwrap();
        dispatch(setUserProfileInformations(data.body));
        setChangingProfile(false);
      } catch (err) {
        console.log(err);
      }
    };
    validationUpdateProfile()
  }*/

  const validationUpdateProfile: () => Promise<void> = async () => {
    try {
      const data: UserResponse = await updateProfile(nameState).unwrap();
      dispatch(setUserProfileInformations(data.body));
      setChangingProfile(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="main bg-dark">
      {changingProfile ? (
        <div className="header">
          <h1>Welcome back</h1>
          <div className="editNameInput">
            <input
              type="text"
              placeholder={firstName}
              name="firstName"
              //ref={firstNameRef}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder={lastName}
              name="lastName"
              //ref={lastNameRef}
              onChange={handleChange}
            />
          </div>
          <div className="editNameConfirmation">
            <button
              type="submit"
              onClick={/*updateProfileName*/ validationUpdateProfile}
            >
              Save
            </button>
            <button
              onClick={() => {
                setChangingProfile(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => {
              setChangingProfile(true);
            }}
          >
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <CardAccount
          key={account.title}
          title={account.title}
          amount={account.amount}
          desc={account.desc}
        />
      ))}
    </main>
  );
};

export default User;
